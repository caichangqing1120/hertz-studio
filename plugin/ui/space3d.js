// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
//
// 「三维空间」模式层 —— 与沉浸声场（Stage3D）平行的全屏 3D 演出层。
// 设计文档：docs/design/space3d-mode.md（术语、批次与验收判据都在那里）。
// 相机与交互的算法、界面形体语言的出处与许可边界见 NOTICE「Design lineage」
// 与 docs/design/space3d-mode.md §3.3/§9（上游署名只出现在那里）。
//
// 职责边界：
//   · 场景渲染全部在既有引擎里（海岸/星座走 vendor 产物 + 各自适配层，创意走
//     CreativeStage，绘景走 StageAnimeSvg）；本文件负责模式互斥、效果注册表、
//     机位下发、手势转发、歌词双层宿主与 chrome 状态机。第一批自己不建 GL 上下文。
//   · 相机数学全部在 SpaceCamera（space-camera.js，上游参考实现的移植）；本层是它的
//     唯一宿主：把 Onset/频谱喂进去，把位姿写给各场景引擎。
//   · 帧驱动走 Stage.gate：挂载自转场景（coast/zodiac）时相机门报 0（§6.3 硬规则，
//     自由镜头接管的短暂窗口除外——那时相机归我们推进）；歌词与 stanza 是 DOM
//     层，单独一扇门，不随相机门停摆。
//   · 机位基线的唯一 owner 是这里的注册表（§12.4）：SpaceCamera.setBaseline 只收
//     pose，本表是 SOURCE_BASELINES（上游预设逐字值）的唯一落点。
//
// 零依赖、ES5、无构建。
(function () {
  'use strict';

  var global = window;
  function $(id) { return document.getElementById(id); }
  function clamp(v, lo, hi) { return v < lo ? lo : (v > hi ? hi : v); }
  function num(v, d) { return typeof v === 'number' && isFinite(v) ? v : d; }

  var GATE = 'space3d';
  var CHROME_HIDE_MS = 2600;
  var ZEROS = new Float32Array(64);

  // ---------------------------------------------------------------------------
  // 效果注册表：来源条目 + 沉浸粒子场占位。机位基线只有一个 owner（§12.4）。
  // SOURCE_BASELINES 逐字来自上游参考项目的预设机位表
  // （出处与许可边界见 NOTICE 与 docs/design/space3d-mode.md §6.1/§9；
  // p7/p8 不可搬，p5/p13 未采录）；每条注明出处预设号。
  // ---------------------------------------------------------------------------
  var SOURCE_BASELINES = {
    p1: [0, 0.03, 6.2], p2: [0, 0.15, 7.0], p3: [0, 0.05, 8.0], p4: [0, 0.04, 6.5],
    p6: [0.18, 0.10, 7.4], p9: [-0.08, 0.12, 7.4], p10: [0, 0.02, 7.15],
    p11: [0.10, 0.11, 7.0], p12: [-0.12, 0.18, 7.35]
  };
  function baselineOf(p) {
    var v = SOURCE_BASELINES[p] || [0, 0.08, 6.6];
    return { theta: v[0], phi: v[1], radius: v[2] };
  }
  var SOURCES = [
    { id: 'coast', label: '海岸公路', desc: '贴地巡航的公路与海', preset: 'p2', spin: true, tune: 'coast' },
    { id: 'zodiac', label: '星座', desc: '十二星图的粒子星野', preset: 'p10', spin: true, tune: 'zodiac' },
    { id: 'creative', label: '创意编排', desc: '工坊场景与编排轨', preset: 'p3', spin: false, tune: null },
    // 沉浸粒子场（第二批）：8 个场着色器经 Stage3D.shaderCatalog() 在本层自己的
    // 上下文里编译（一份着色器，一个 owner）；基线取各场自己的机位描述符。
    { id: 'immersive', label: '沉浸粒子场', desc: '丝滑星球 / 极光 / 隧道 / 地形…', preset: null, spin: false, tune: null },
    // 「动画绘景」入口已在 022095a 暂时下架：注册表保留挂载能力，网格不露出
    //（跟随绘景入口的恢复状态，§7.1）。
    { id: 'anime-svg', label: '动画绘景', desc: 'SVG 画稿舞台', preset: 'p4', spin: false, tune: null, hidden: true }
  ];
  function sourceById(id) {
    for (var i = 0; i < SOURCES.length; i += 1) if (SOURCES[i].id === id) return SOURCES[i];
    return null;
  }
  function isSelfSpinning(id) {
    var s = sourceById(id);
    return !!(s && s.spin);
  }

  // ---------------------------------------------------------------------------
  // 状态
  // ---------------------------------------------------------------------------
  var root = null, hosts = null, inited = false, active = false;
  var returnFocus = null, backgroundNodes = [];
  var prefs = {
    sceneSource: 'coast',          // 需求「默认加载海岸公路」；迁移见 migrateDefaults
    field: 'silk',                 // 沉浸粒子场内的当前场（默认丝滑星球，与声场同默认）
    lyrics: true,
    visual: 'stage',               // stage = 舞台 3D 歌词轨；classic/cadenza/sonnet/tempera
    cinema: true,
    coastTod: 0, coastInteract: true,
    zodiacLines: true, zodiacField: true, zodiacInteract: true,
    post: {}, layers: {},
    freeCam: null                  // SpaceCamera.freeSnapshot 的形状（§8）
  };
  var queue = [];
  var fxShow = false, sheetOpen = false, playlistOpen = false;
  var interactUntil = 0, idleTimer = 0, dragging = false, pointerId = null, lastPt = null;
  var saveTimer = 0;
  var lyricView = null;
  var artHost = null;
  var layers = null, extraControls = [], failedSources = {}, seeking = false;
  var stanza = { ready: false, bg: null, sub: null, instances: {} };
  // 沉浸粒子场的逐帧状态：音频全量（uBands 64 段 + 分带聚合）、指针场、
  // 转场脉冲与开合淡入淡出 —— 语义与 stage3d 的 updateAudio/pointerField/trans 同构。
  var spaceTime = 0;             // 场时间（秒），reduced 时冻结
  var au = { bass: 0, mid: 0, treble: 0, energy: 0, beat: 0 };
  var audioBands = new Float32Array(64);
  var lastBeatAt = -100, previousBeat = 0;
  var pointerField = { x: -9, y: -9, active: 0, clickX: 0, clickY: 0, clickAt: -100 };
  var trans = { on: false, t: 0, dur: 0.42, scatter: 0, burst: 0 };
  var fade = 0, fadeTarget = 0;
  var STANZA_DEFS = [
    { id: 'classic', label: '流光', host: 'sp-fl-lyric', make: function (h, seek) { return global.StanzaClassic && global.StanzaClassic.init(h, seek); } },
    { id: 'cadenza', label: '心象', host: 'sp-fl-lyric', make: function (h, seek) { return global.StanzaCadenza && global.StanzaCadenza.init(h, seek); } },
    { id: 'sonnet', label: '商籁', host: 'sp-fl-sonnet-stage', make: function (h, seek) { return global.StanzaSonnet && global.StanzaSonnet.init(h, seek); } },
    { id: 'tempera', label: '凝彩', host: 'sp-fl-sonnet-stage', make: function (h) { return global.StanzaSonnet && global.StanzaTempera && global.StanzaTempera.init(h); } }
  ];
  var warned = {};

  var camera = global.SpaceCamera || null;
  var onset = global.Onset && Onset.create ? Onset.create({}) :
    { step: function () {}, pulse: 0, beats: 0, agg: null, energy: 0, onBeat: function () {} };

  // ---------------------------------------------------------------------------
  // 持久化与迁移（§8）
  // ---------------------------------------------------------------------------
  function control(action, value) {
    var detail = { action: action, value: value };
    document.dispatchEvent(new CustomEvent('stage:control', { detail: detail }));
    return detail.completion;
  }
  function preferences() {
    var free = camera ? camera.freeSnapshot() : null;
    return JSON.parse(JSON.stringify({
      sceneSource: prefs.sceneSource, field: prefs.field, lyrics: prefs.lyrics, visual: prefs.visual,
      cinema: prefs.cinema, coastTod: prefs.coastTod, coastInteract: prefs.coastInteract,
      zodiacLines: prefs.zodiacLines, zodiacField: prefs.zodiacField, zodiacInteract: prefs.zodiacInteract,
      post: global.SpacePost ? SpacePost.normalize(prefs.post) : {},
      layers: global.SpaceLayers ? SpaceLayers.normalize(prefs.layers) : {},
      freeCam: free, space3dDefaultMigrated: 1
    }));
  }
  function scheduleSave() {
    if (saveTimer) return;
    saveTimer = setTimeout(function () {
      saveTimer = 0;
      savePreferences();
    }, 240);
  }
  function savePreferences() {
    var value = preferences();
    prefs.freeCam = value.freeCam;
    control('space3d', value);
  }
  // 「默认加载海岸公路」的一次性迁移：仅命中写回路径连带落库的旧默认 immersive；
  // 用户显式选过其它来源的不动。本层从未发布，这是防御性的（§8）。
  function migrateDefaults(value) {
    if (!value || typeof value !== 'object') return value;
    if (value.space3dDefaultMigrated) return value;
    if (value.sceneSource === 'immersive') {
      value.sceneSource = 'coast';
      value.space3dDefaultMigrated = 1;
      scheduleSave();
    }
    return value;
  }
  function configure(value) {
    if (!value || typeof value !== 'object') return;
    var oldSource = prefs.sceneSource, oldField = prefs.field;
    value = migrateDefaults(Object.assign({}, value));
    if (sourceById(value.sceneSource)) prefs.sceneSource = value.sceneSource;
    if (typeof value.field === 'string' && global.SpaceFields && SpaceFields.stageBaseline(value.field)) prefs.field = value.field;
    if (global.SpacePost && value.post) prefs.post = SpacePost.normalize(value.post);
    if (global.SpaceLayers && value.layers) prefs.layers = SpaceLayers.normalize(value.layers);
    if (typeof value.lyrics === 'boolean') prefs.lyrics = value.lyrics;
    if (['stage', 'classic', 'cadenza', 'sonnet', 'tempera'].indexOf(value.visual) >= 0) prefs.visual = value.visual;
    if (typeof value.cinema === 'boolean') prefs.cinema = value.cinema;
    if (typeof value.coastTod === 'number') prefs.coastTod = clamp(value.coastTod, 0, 1);
    if (typeof value.coastInteract === 'boolean') prefs.coastInteract = value.coastInteract;
    if (typeof value.zodiacLines === 'boolean') prefs.zodiacLines = value.zodiacLines;
    if (typeof value.zodiacField === 'boolean') prefs.zodiacField = value.zodiacField;
    if (typeof value.zodiacInteract === 'boolean') prefs.zodiacInteract = value.zodiacInteract;
    if (camera && value.freeCam) {
      camera.freeLoad(value.freeCam);
      prefs.freeCam = camera.freeSnapshot();
    }
    if (camera) camera.setCinema(prefs.cinema, 1);
    if (inited) {
      if (active) syncSource(oldSource !== prefs.sceneSource || oldField !== prefs.field);
      if (layers) layers.configure(prefs.layers);
      syncSheet(); syncLyricVisual(); buildFxGrid(); syncExtraControls();
    }
  }

  // ---------------------------------------------------------------------------
  // 帧驱动
  // ---------------------------------------------------------------------------
  function reducedMotion() {
    return !!(global.Stage && Stage.presentation && Stage.presentation().reduced) ||
      !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  }
  // §6.3 硬规则：自转场景（coast/zodiac）挂载时相机门报 0 —— 场景引擎自己出画面，
  // 我们只留交互/自由镜头的临时窗口。歌词与 stanza 走独立的 space3d-lyrics 门。
  function targetFps() {
    if (!active || document.hidden) return 0;
    if (camera && (camera.isFreeActive() || camera.isResetting())) return reducedMotion() ? 15 : 240;
    if (isSelfSpinning(prefs.sceneSource)) {
      return performance.now() < interactUntil ? 30 : 0;
    }
    if (reducedMotion()) return 15;
    var present = global.Stage && Stage.presentation ? Stage.presentation() : null;
    if (!dragging && performance.now() > interactUntil && (!present || !present.playing)) return 30;
    return 240;
  }
  function lyricsFps() {
    if (!active || document.hidden || !prefs.lyrics || ownsLyrics()) return 0;
    var present = global.Stage && Stage.presentation ? Stage.presentation() : null;
    if (!present || !present.playing) return 10;   // 暂停时低频兜底刷新
    return reducedMotion() ? 15 : 30;
  }
  function uiFps() {
    return active && !document.hidden ? 10 : 0;
  }

  function spectrumBands(sp) {
    // 低频/整体聚合给 cinemaDynamics：与 stage3d updateAudio 同一套分段口径。
    var n = sp ? sp.length : 0, i;
    if (!n) return { low: 0, energy: 0 };
    var e1 = Math.max(1, Math.floor(n * 0.125)), bass = 0;
    var rms = 0;
    for (i = 0; i < e1; i += 1) bass += sp[i] || 0;
    bass /= e1;
    for (i = 0; i < n; i += 1) rms += (sp[i] || 0) * (sp[i] || 0);
    return { low: clamp(bass * 1.4, 0, 1), energy: clamp(Math.sqrt(rms / n) * 1.6, 0, 1) };
  }

  function dampTo(cur, target, tauMs, dtMs) {
    return cur + (target - cur) * (1 - Math.exp(-Math.max(0, dtMs) / Math.max(0.001, tauMs)));
  }
  // 沉浸粒子场的音频全量（uBands 64 段 + 分带聚合 + beatAge），与 stage3d
  // updateAudio 同一套分段与平滑口径；reduced 或暂停时能量自然回落。
  function updateAudioLive(dtMs, sp, playing) {
    var n = sp ? sp.length : 0, i;
    var bass = 0, mid = 0, treble = 0;
    if (n) {
      var e1 = Math.max(1, Math.floor(n * 0.125));
      for (i = 0; i < e1; i += 1) bass += sp[i] || 0;
      bass /= e1;
      var s2 = Math.max(1, Math.floor(n * 0.25));
      for (i = e1; i < s2; i += 1) mid += sp[i] || 0;
      mid /= Math.max(1, s2 - e1);
      var s3 = Math.max(1, Math.floor(n * 0.55));
      for (i = s2; i < s3; i += 1) treble += sp[i] || 0;
      treble /= Math.max(1, s3 - s2);
      var hi = 0, c = 0;
      for (i = s3; i < n; i += 1) { hi += sp[i] || 0; c += 1; }
      treble = treble * 0.6 + (c ? hi / c : 0) * 0.4;
    }
    for (i = 0; i < 64; i += 1) {
      var t = 0;
      if (n) t = clamp(Math.pow(Math.max(0, sp[Math.min(n - 1, Math.floor(i * n / 64))] || 0), 0.7) * 1.35, 0, 1.5);
      audioBands[i] = dampTo(audioBands[i], t, 65, dtMs);
    }
    au.bass = dampTo(au.bass, clamp(Math.pow(bass, 0.7) * 1.35, 0, 1.5), 70, dtMs);
    au.mid = dampTo(au.mid, clamp(Math.pow(mid, 0.7) * 1.35, 0, 1.5), 90, dtMs);
    au.treble = dampTo(au.treble, clamp(Math.pow(treble, 0.7) * 1.35, 0, 1.5), 60, dtMs);
    var en = (playing && !reducedMotion() && global.Stage && Stage.energy) ? Stage.energy() : 0;
    au.energy = dampTo(au.energy, clamp(num(en, 0) * 1.35, 0, 1), 140, dtMs);
    au.beat = (n && onset && onset.pulse != null) ? clamp(onset.pulse, 0, 1.35) : dampTo(au.beat, 0, 200, dtMs);
    if (au.beat > previousBeat + 0.08 && au.beat > 0.20 && spaceTime - lastBeatAt > 0.22) lastBeatAt = spaceTime;
    previousBeat = au.beat;
    if (playing && !reducedMotion()) spaceTime += dtMs / 1000;
    updateTransition(dtMs);
    fade = dampTo(fade, fadeTarget, 220, dtMs);
  }
  // 转场脉冲：sin(t·π) 对称波，一次性自收敛（stage3d startTransition 同构）。
  function startTransition() {
    if (reducedMotion()) { trans.on = false; trans.scatter = trans.burst = 0; return; }
    trans.on = true;
    trans.t = 0;
  }
  function updateTransition(dtMs) {
    if (!trans.on) return;
    trans.t += dtMs / 1000;
    var raw = trans.t / trans.dur;
    if (raw >= 1) { trans.on = false; trans.scatter = 0; trans.burst = 0; return; }
    var wave = Math.sin(clamp(raw, 0, 1) * Math.PI);
    trans.scatter = wave * 0.16;
    trans.burst = wave * 0.55;
  }
  // 场机位基线来自效果目录的 cam（θ/φ/dist/look），走注册表 → SpaceCamera。
  function fieldCam(id) {
    try {
      var list = global.Stage3D && Stage3D.effectCatalog ? Stage3D.effectCatalog() : [];
      for (var i = 0; i < list.length; i += 1) if (list[i].id === id) return list[i].cam;
    } catch (_) { /* 目录不可用按默认 */ }
    return null;
  }
  function setField(id) {
    // 基线统一走 SpaceFields.stageBaseline：场来自效果目录 cam，scene:* 来自
    // creative 面板度数机位（度→弧度 + fov 基线 + 注视高度）。
    var base = (global.SpaceFields && SpaceFields.stageBaseline) ? SpaceFields.stageBaseline(id) : null;
    if (!base) return;
    if (active && prefs.sceneSource === 'immersive') {
      if (!SpaceFields.setStage(id)) {
        showFallback(SpaceFields.degradedBecause() || '此场景暂不可用'); return false;
      }
      hideFallback();
    }
    prefs.field = id;
    if (camera) {
      camera.setBaseline(base);
      camera.snap();
    }
    startTransition();
    syncLyricVisual();
    buildFxGrid();
    scheduleSave();
    markInteraction(900);
  }
  // 沉浸粒子场逐帧绘制：转台世界角折进机位（与 rig 场景同一折法），自由镜头
  // 的位置/朝向换算成球坐标后同样可画。
  function drawFields(dtMs) {
    if (!global.SpaceFields) return;
    var present = global.Stage && Stage.presentation ? Stage.presentation() : null;
    var playing = !!(present && present.playing);
    var pose = camera.pose();
    var envPose;
    if (pose.free) envPose = pose;
    else {
      var world = pose.world || { x: 0, y: 0 };
      envPose = {
        free: false,
        theta: pose.theta + world.y,
        phi: clamp(pose.phi + world.x, -1.35, 1.35),
        radius: pose.radius, fov: pose.fov, lookAt: pose.lookAt
      };
    }
    SpaceFields.draw(dtMs, {
      pose: envPose,
      audio: { bass: au.bass, mid: au.mid, treble: au.treble, energy: au.energy, beat: au.beat, bands: audioBands },
      rises: (onset.binRise && onset.binRise.length) ? onset.binRise : ZEROS,
      agg: (onset.agg && onset.agg.length >= 4) ? onset.agg : [0, 0, 0, 0],
      pulse: onset.pulse || 0,
      playing: playing,
      lyric: global.Stage && Stage.lyrics ? Stage.lyrics() : null,
      lyrics: prefs.lyrics, post: prefs.post,
      pointer: { x: pointerField.x, y: pointerField.y, active: pointerField.active,
        clickX: pointerField.clickX, clickY: pointerField.clickY, clickAge: spaceTime - pointerField.clickAt },
      transition: { scatter: trans.scatter, burst: trans.burst },
      fade: fade, timeSec: spaceTime,
      beatAge: Math.max(0, spaceTime - lastBeatAt),
      motion: 0.65, bloom: 0.8, reduced: reducedMotion()
    });
  }

  function tick(dtMs) {
    if (!active || document.hidden) return;
    var t0 = performance.now();
    var present = global.Stage && Stage.presentation ? Stage.presentation() : null;
    var playing = !!(present && present.playing);
    var posSec = present ? (present.position || 0) / 1000 : 0;
    var sp = (global.Stage && Stage.spectrum && Stage.spectrum()) || null;
    if (!isSelfSpinning(prefs.sceneSource)) updateSignal(dtMs);
    if (camera) {
      camera.tick(dtMs, {
        playing: playing && !reducedMotion(), reduced: reducedMotion(),
        audioTime: posSec,
        energy: au.energy,
        low: au.bass
      });
      if (prefs.sceneSource === 'immersive') drawFields(dtMs);
      else pushCameraToScene(present);
    }
    // 世界拖拽期间也算交互，帧门别在拖到一半停机。
    if (dragging) interactUntil = Math.max(interactUntil, t0 + 400);
    sampleCost(performance.now() - t0);
  }
  function updateSignal(dtMs) {
    if (!active || document.hidden) return;
    var present = global.Stage && Stage.presentation ? Stage.presentation() : {};
    var sp = global.Stage && Stage.spectrum ? Stage.spectrum() : ZEROS;
    if (present.playing && !reducedMotion()) onset.step(dtMs, sp || ZEROS, performance.now());
    updateAudioLive(dtMs, present.playing && !reducedMotion() ? sp : ZEROS, !!present.playing);
  }
  var cost = { samples: [], avg: 0 };
  function sampleCost(ms) {
    cost.samples.push(ms);
    if (cost.samples.length > 40) cost.samples.shift();
    var s = 0;
    for (var i = 0; i < cost.samples.length; i += 1) s += cost.samples[i];
    cost.avg = s / cost.samples.length;
  }

  function lyricsTick(dtMs) {
    if (!active || document.hidden) return;
    var present = global.Stage && Stage.presentation ? Stage.presentation() : null;
    var playing = !!(present && present.playing);
    var pos = present ? (present.position || 0) : 0;
    if (lyricView && prefs.visual === 'stage') {
      lyricView.update({ position: pos, reduced: reducedMotion(), track: present ? present.track : null });
      lyricView.paint(pos);
      if (global.HandDrawn && HandDrawn.refreshAnnotation) HandDrawn.refreshAnnotation();
    }
    if (stanza.ready && prefs.visual !== 'stage') {
      var inst = stanza.instances[prefs.visual];
      if (inst) {
        if (inst.setVisible) inst.setVisible(true);
        if (inst.setPaused) inst.setPaused(!playing);
        if (inst.frame) inst.frame(dtMs);
      }
      if (stanza.bg && stanza.bg.frame) stanza.bg.frame(dtMs);
    }
  }
  // 8fps 元数据档：主题、可见性、暂停态、字号这些低频量。
  function uiTick() {
    if (!active) return;
    updateLayers(100);
    if (stanza.ready) {
      var theme = lyricTheme();
      Object.keys(stanza.instances).forEach(function (id) {
        var inst = stanza.instances[id];
        var on = prefs.lyrics && !ownsLyrics() && id === prefs.visual;
        if (inst.setVisible) inst.setVisible(on);
        if (on && inst.setTheme) inst.setTheme(theme);
      });
      if (stanza.bg && stanza.bg.setVisible) stanza.bg.setVisible(prefs.lyrics && !ownsLyrics() && prefs.visual !== 'stage');
      if (stanza.sub && stanza.sub.update) stanza.sub.update();
    }
    if (lyricView && lyricView.configure) lyricView.configure(prefs.lyrics && !ownsLyrics() && prefs.visual === 'stage');
    var reading = hosts.reading;
    if (reading) reading.hidden = !prefs.lyrics || ownsLyrics() || prefs.visual !== 'stage';
    var st = hosts.stanza;
    if (st) st.hidden = !prefs.lyrics || ownsLyrics() || prefs.visual === 'stage';
    if (global.HandDrawn && HandDrawn.refreshAnnotation) HandDrawn.refreshAnnotation();
    syncPlayBtn();
    syncProgress();
  }
  function lyricTheme() {
    if (global.StanzaTheme && StanzaTheme.resolve) {
      try { return StanzaTheme.resolve(1.35, false); } catch (_) { /* 主题缺失按 null */ }
    }
    return null;
  }

  function updateLayers(dtMs) {
    if (!layers || !global.Stage) return;
    var present = Stage.presentation();
    layers.update(dtMs, { pose: camera.pose(), bands: Stage.spectrum() || ZEROS,
      energy: Stage.energy(), beat: au.beat, playing: present.playing,
      reduced: reducedMotion(), hidden: document.hidden,
      timeSec: present.position / 1000 });
  }
  function buildExtraControls() {
    var host = $('sp-extra-controls');
    if (!host) return;
    function group(title, name, specs, read, write) {
      var section = document.createElement('details');
      section.id = 'sp-controls-' + name;
      var summary = document.createElement('summary'); summary.textContent = title;
      section.appendChild(summary); host.appendChild(section);
      specs.forEach(function (spec) {
        var label = document.createElement('label'); label.htmlFor = 'sp-' + name + '-' + spec.key;
        label.textContent = spec.label;
        var input = document.createElement(spec.type === 'select' ? 'select' : 'input');
        input.id = label.htmlFor;
        if (spec.type === 'select') spec.options.forEach(function (opt) {
          var option = document.createElement('option'); option.value = opt[0]; option.textContent = opt[1]; input.appendChild(option);
        });
        else if (spec.type === 'toggle') input.type = 'checkbox';
        else { input.type = 'range'; input.min = spec.min; input.max = spec.max; input.step = spec.step || 1; }
        var output = document.createElement('output'); output.htmlFor = input.id;
        section.appendChild(label); section.appendChild(input); section.appendChild(output);
        function sync() {
          var value = read()[spec.key];
          if (input.type === 'checkbox') input.checked = !!value;
          else input.value = value == null ? spec.def || 0 : value;
          output.textContent = input.type === 'range' ? input.value + (spec.unit || '') : '';
        }
        input.addEventListener(input.type === 'range' ? 'input' : 'change', function () {
          var value = input.type === 'checkbox' ? input.checked : input.tagName === 'SELECT' ? input.value : Number(input.value);
          var next = Object.assign({}, read()); next[spec.key] = value;
          write(next); sync(); markInteraction(700);
        });
        extraControls.push(sync); sync();
      });
      return section;
    }
    if (global.SpaceLayers) {
      prefs.layers = SpaceLayers.normalize(prefs.layers);
      group('空间装饰与排版', 'layer', SpaceLayers.catalog(), function () { return prefs.layers; }, function (next) {
        prefs.layers = SpaceLayers.normalize(next); if (layers) layers.configure(prefs.layers); scheduleSave();
      });
      group('背景', 'background', SpaceLayers.backgroundCatalog(), function () { return global.Backgrounds ? Backgrounds.values() : {}; }, function (next) {
        if (layers) layers.setBackground(next);
        if (global.CreativeStage && CreativeStage.setBackground) CreativeStage.setBackground(next);
      });
      var file = document.createElement('input'); file.type = 'file'; file.accept = 'image/*,video/*'; file.id = 'sp-background-file';
      file.setAttribute('aria-label', '选择背景图片或视频'); $('sp-controls-background').appendChild(file);
      file.addEventListener('change', function () {
        if (layers && file.files[0]) Promise.resolve(layers.setLocalFile(file.files[0])).then(function () { syncExtraControls(); }).catch(function () { showFallback('背景文件无法读取，请换一张图片或视频。'); });
      });
    }
    if (global.SpacePost) {
      prefs.post = SpacePost.normalize(prefs.post);
      group('粒子与频谱场景 · 画面滤镜', 'post', SpacePost.catalog(), function () { return prefs.post; }, function (next) {
        prefs.post = SpacePost.normalize(next); scheduleSave();
      });
    }
    if (global.HandDrawn) {
      group('手绘风格', 'hand', [
        {key:'on',label:'开启手绘',type:'toggle'},
        {key:'style',label:'画风',type:'select',options:HandDrawn.presets().map(function (p) { return [p.id,p.label]; })},
        {key:'frame',label:'手绘边框',type:'toggle'}, {key:'wave',label:'音浪笔触',type:'toggle'},
        {key:'annot',label:'歌词圈注',type:'toggle'}, {key:'paper',label:'纸张纹理',type:'toggle'},
        {key:'jitter',label:'笔触抖动',min:0,max:200,unit:'%'}, {key:'speed',label:'笔触速度',min:25,max:200,unit:'%'}
      ], HandDrawn.values, function (next) {
        if (global.CreativeStage && CreativeStage.setHandDrawn) CreativeStage.setHandDrawn(next);
        else HandDrawn.apply(next);
      });
    }
  }
  function syncExtraControls() {
    extraControls.forEach(function (sync) { sync(); });
    var post = $('sp-controls-post');
    if (post) {
      var status = global.SpaceFields && SpaceFields.postStatus ? SpaceFields.postStatus() : { available: false };
      var available = prefs.sceneSource === 'immersive' && status.available;
      post.querySelectorAll('input').forEach(function (input) { input.disabled = !available; });
      post.title = prefs.sceneSource !== 'immersive' ? '选择沉浸粒子场或频谱场景后调节' : status.reason || '';
      var notice = $('sp-post-status');
      if (!notice) { notice = document.createElement('p'); notice.id = 'sp-post-status'; notice.setAttribute('role', 'status'); post.appendChild(notice); }
      notice.textContent = prefs.sceneSource === 'immersive' ? status.reason || '' : '';
      notice.hidden = !notice.textContent;
    }
  }

  // ---------------------------------------------------------------------------
  // 机位下发：每个适配器交出机位所有权（§6.5）
  // ---------------------------------------------------------------------------
  function rigFromPose() {
    var pose = camera.pose();
    if (pose.free) {
      return { position: pose.position, yaw: pose.yaw, pitch: pose.pitch,
        roll: pose.roll, fov: pose.fov, external: true };
    }
    var world = pose.world || { x: 0, y: 0 };
    // 转台语义：拖拽转的是世界。rig 类场景把世界角折进 yaw/pitch，视觉等效。
    return {
      yaw: pose.theta + world.y,
      pitch: clamp(pose.phi + world.x, -1.35, 1.35),
      dist: pose.radius,
      tx: pose.lookAt[0], ty: pose.lookAt[1], tz: pose.lookAt[2],
      fov: pose.fov,
      external: !!pose.free
    };
  }
  var creativePoseKey = null;
  function pushCameraToScene(present) {
    var src = prefs.sceneSource;
    if (src === 'coast' && global.StageCoast && StageCoast.setRig) {
      StageCoast.setRig(rigFromPose(), { external: !!(camera.isFreeEngaged()) });
    } else if (src === 'zodiac') {
      if (global.StageZodiac && StageZodiac.setRig) StageZodiac.setRig(rigFromPose());
    } else if (src === 'creative') {
      var pose = camera.pose(), world = pose.world || { x: 0, y: 0 }, p = pose.position || [];
      var key = [!!pose.free, p[0] || 0, p[1] || 0, p[2] || 0, pose.yaw || 0, pose.pitch || 0,
        pose.theta || 0, pose.phi || 0, world.x, world.y, pose.radius || 0, pose.roll || 0,
        pose.fov, (pose.lookAt || [])[0] || 0, (pose.lookAt || [])[1] || 0, (pose.lookAt || [])[2] || 0]
        .map(function (value) { return Math.round(Number(value) * 100000); }).join(',');
      if (key !== creativePoseKey) {
        creativePoseKey = key;
        if (global.CreativeStage && CreativeStage.requestCameraFrame) CreativeStage.requestCameraFrame();
      }
    }
  }
  function warnOnce(key, msg) {
    if (warned[key]) return;
    warned[key] = true;
    try { console.warn('[Space3D]', msg); } catch (_) { /* 无 console 静默 */ }
  }

  // 创意舞台的相机层（priority 40 > freecam 30）：绝对接管 yaw/pitch/dist/fov。
  function creativeCamLayer(ctx) {
    if (!camera || prefs.sceneSource !== 'creative') return;
    var pose = camera.pose();
    var world = pose.world || { x: 0, y: 0 };
    if (pose.free) {
      ctx.position = pose.position;
      ctx.yawDeg = pose.yaw * 180 / Math.PI;
      ctx.pitchDeg = pose.pitch * 180 / Math.PI;
      ctx.fov = pose.fov;
    } else {
      ctx.yawDeg = (pose.theta + world.y) * 180 / Math.PI;
      ctx.pitchDeg = clamp(pose.phi + world.x, -1.35, 1.35) * 180 / Math.PI;
      ctx.dist = pose.radius;
      ctx.fov = pose.fov;
      ctx.tx = pose.lookAt[0]; ctx.ty = pose.lookAt[1]; ctx.tz = pose.lookAt[2];
    }
    ctx.rollDeg = (pose.roll || 0) * 180 / Math.PI;
    ctx.absolute = true;
    ctx.driftMul = 0;   // 空间相机的漂移由 SpaceCamera 负责，创意自己的漂移归零
  }

  // ---------------------------------------------------------------------------
  // 来源挂载
  // ---------------------------------------------------------------------------
  function ensureHost(id, cls) {
    var el = $('sp-host-' + id);
    if (!el) {
      el = document.createElement('div');
      el.id = 'sp-host-' + id;
      el.className = 'sp-host ' + (cls || '');
      el.setAttribute('aria-hidden', 'true');
      hosts.canvas.appendChild(el);
    }
    return el;
  }
  function syncSource(resetCamera) {
    var src = prefs.sceneSource;
    if (src !== 'creative' || !active) creativePoseKey = null;
    var use = function (id) { return active && src === id; };
    var def = sourceById(src);
    // 基线切换（§12.4：注册表 → SpaceCamera）。
    if (active && camera && def && resetCamera !== false) {
      camera.setBaseline(baselineOf(def.preset));
      camera.snap();
    }
    // 先卸载旧来源再挂新来源；切换方向不决定上下文的存活顺序。
    if (!use('coast') && global.StageCoast) StageCoast.setHost(null);
    if (!use('zodiac') && global.StageZodiac) StageZodiac.setHost(null);
    if (!use('creative') && global.CreativeStage) CreativeStage.attachStage(null);
    if (!use('immersive') && global.SpaceFields) SpaceFields.setHost(null);
    if (!use('anime-svg') && global.StageAnimeSvg) StageAnimeSvg.setHost(null);
    // —— 海岸 —— //
    var coastOk = true;
    if (global.StageCoast && StageCoast.setHost) {
      coastOk = StageCoast.setHost(use('coast') ? ensureHost('coast') : null);
      if (use('coast')) {
        if (!coastOk) showFallback(StageCoast.degradedBecause() || '海岸舞台暂不可用，请切回沉浸声场');
        else StageCoast.setPrefs({ tod: prefs.coastTod, interact: false });
      }
    } else if (use('coast')) coastOk = false;
    // —— 星座 —— //
    var zodiacOk = true;
    if (global.StageZodiac && StageZodiac.setHost) {
      zodiacOk = StageZodiac.setHost(use('zodiac') ? ensureHost('zodiac') : null);
      if (use('zodiac')) {
        if (!zodiacOk) showFallback(StageZodiac.degradedBecause() || '星座舞台暂不可用，请切回沉浸声场');
        else {
          var theme = lyricTheme();
          StageZodiac.setPrefs({
            lines: prefs.zodiacLines, field: prefs.zodiacField, interact: false,
            palette: theme ? { accentColor: theme.accentColor, secondaryColor: theme.secondaryColor,
              backgroundColor: theme.backgroundColor, primaryColor: theme.primaryColor,
              tertiaryColor: theme.tertiaryColor } : null
          });
        }
      }
    } else if (use('zodiac')) zodiacOk = false;
    // —— 创意 —— //
    var creativeOk = true;
    if (global.CreativeStage && CreativeStage.attachStage) {
      if (use('creative')) CreativeStage.addCamLayer(creativeCamLayer, 40, {manual:true});
      else {
        CreativeStage.removeCamLayer(creativeCamLayer);
        CreativeStage.setInteractionBlocker(null);
      }
      creativeOk = CreativeStage.attachStage(use('creative') ? ensureHost('creative') : null);
      if (use('creative') && !creativeOk) showFallback(CreativeStage.degradedBecause() || '创意舞台暂不可用，请切回沉浸声场');
      if (use('creative') && CreativeStage.setInteractionBlocker) {
        // 空间相机接管后，创意自己的自由镜头静默（§6.5）。
        CreativeStage.setInteractionBlocker(function () { return active; });
      }
    } else if (use('creative')) creativeOk = false;
    // —— 沉浸粒子场（第二批）：GL 宿主与后处理链在 SpaceFields —— //
    var fieldsOk = true;
    if (global.SpaceFields && SpaceFields.setHost) {
      fieldsOk = SpaceFields.setHost(use('immersive') ? ensureHost('immersive') : null);
      if (use('immersive')) {
        if (!fieldsOk) showFallback(SpaceFields.degradedBecause() || '粒子场暂不可用，请选择海岸公路 / 星座 / 创意编排');
        else {
          SpaceFields.onContext(function (state) {
            if (state === 'lost') showFallback('粒子场的图形上下文丢失，正在自动恢复…');
            else if (state === 'failed') showFallback('粒子场的图形渲染已停止，可切换其它来源。');
            else hideFallback();
          });
          // 入场基线取当前场的机位描述符（θ/φ/dist/look）。
          var fc = SpaceFields.stageBaseline(prefs.field);
          if (camera && fc && resetCamera !== false) {
            camera.setBaseline(fc);
            camera.snap();
          }
          fieldsOk = SpaceFields.setStage(prefs.field);
          if (fieldsOk) hideFallback();
        }
      }
    } else if (use('immersive')) fieldsOk = false;
    // —— 绘景（入口下架，能力保留）—— //
    if (global.StageAnimeSvg && StageAnimeSvg.setHost) {
      var animeOk = StageAnimeSvg.setHost(use('anime-svg') ? ensureHost('anime') : null);
      if (use('anime-svg') && !animeOk) showFallback(StageAnimeSvg.degradedBecause() || '动画绘景暂不可用');
    }
    // 宿主显隐与交互放行
    ['coast', 'zodiac', 'creative', 'immersive', 'anime'].forEach(function (id) {
      var el = $('sp-host-' + id);
      if (el) el.hidden = src !== id || !active;
    });
    if (coastOk && use('coast')) hideFallback();
    if (zodiacOk && use('zodiac')) hideFallback();
    if (creativeOk && use('creative')) hideFallback();
    if (fieldsOk && use('immersive')) hideFallback();
    var sourceOk = src === 'coast' ? coastOk : src === 'zodiac' ? zodiacOk :
      src === 'creative' ? creativeOk : src === 'immersive' ? fieldsOk : animeOk;
    if (active && !sourceOk) {
      failedSources[src] = true;
      showFallback('此舞台暂不可用，请选择其它场景或按 Esc 返回。');
    }
    if (active && sourceOk) pushCameraToScene();
    var creativeHost = $('sp-host-creative');
    if (creativeHost) creativeHost.dataset.lyrics = prefs.lyrics ? 'true' : 'false';
    // 手绘叠加层（第三批·叠加层）：与 stage3d 的 #s3d-art-overlay 同构 ——
    // HandDrawn 自己管理 on/style/笔触参数与帧门，这里只交宿主；关层时收回。
    if (global.HandDrawn && HandDrawn.setStageHost) {
      if (!artHost) {
        artHost = document.createElement('div');
        artHost.id = 'sp-art';
        artHost.className = 'sp-art';
        artHost.setAttribute('aria-hidden', 'true');
        root.insertBefore(artHost, hosts.bar);
      }
      HandDrawn.setStageHost(active ? artHost : null, {
        lyricsRoot: hosts.reading,
        visible: function () { return active && !document.hidden; }
      });
    }
  }

  function setSource(id) {
    if (!sourceById(id) && id !== 'immersive') return;
    prefs.sceneSource = id;
    hideFallback();
    syncSource();
    buildFxGrid();
    syncSheet();
    syncLyricVisual(); syncExtraControls();
    scheduleSave();
    markInteraction(900);
  }

  // ---------------------------------------------------------------------------
  // 歌词双层：舞台 3D 歌词轨（StageLyrics）+ stanza 渲染器（新宿主二次实例化）
  // ---------------------------------------------------------------------------
  function ensureStanza() {
    if (stanza.ready || !hosts.flBg) return;
    if (!global.StanzaBg) return;
    try {
      stanza.bg = global.StanzaBg.init(hosts.flBg);
      stanza.sub = global.StanzaSubtitle.init(hosts.flSub);
      STANZA_DEFS.forEach(function (def) {
        var host = $(def.host);
        if (!host) return;
        var inst = null;
        try { inst = def.make(host, function (ms) { control('seek', ms); }); } catch (e) { inst = null; }
        if (!inst) return;
        var required = ['setTheme', 'setVisible', 'setPaused', 'update', 'frame', 'rootEl', 'destroy'];
        for (var i = 0; i < required.length; i += 1) {
          if (typeof inst[required[i]] !== 'function') {
            try { if (inst.destroy) inst.destroy(); } catch (_) { /* 回收后再抛契约错 */ }
            throw new Error('space3d: stanza 渲染器缺生命周期方法 ' + def.id);
          }
        }
        stanza.instances[def.id] = inst;
      });
      stanza.ready = true;
      uiTick();
    } catch (error) {
      disposeStanza();
      try { console.error('[Space3D]', error); } catch (_) { /* ignore */ }
    }
  }
  function disposeStanza() {
    var error = null;
    var list = [stanza.bg, stanza.sub].concat(Object.keys(stanza.instances).map(function (k) { return stanza.instances[k]; }))
      .filter(function (x) { return !!x; });
    stanza.instances = {};
    stanza.ready = false; stanza.bg = stanza.sub = null;
    list.forEach(function (inst) {
      try { inst.destroy(); } catch (e) { if (!error) error = e; }
    });
    if (list.length && global.PIXI && PIXI.GlobalResourceRegistry) {
      try { PIXI.GlobalResourceRegistry.release(); } catch (_) { /* ignore */ }
    }
    return error;
  }
  function syncLyricVisual() {
    if (!inited) return;
    if (prefs.visual !== 'stage' && !stanza.ready) ensureStanza();
    uiTick();
  }
  function ownsLyrics() {
    if (prefs.sceneSource === 'creative') return !!(global.CreativeStage && CreativeStage.ownsLyrics && CreativeStage.ownsLyrics());
    if (prefs.sceneSource !== 'immersive' || prefs.field.indexOf('scene:') !== 0 || !global.CreativeGL) return false;
    var rig = CreativeGL.sceneRig(prefs.field.slice(6));
    return !!(rig && rig.ownsLyrics);
  }

  // ---------------------------------------------------------------------------
  // chrome
  // ---------------------------------------------------------------------------
  function showFallback(text) {
    if (!hosts.fallback) return;
    hosts.fallback.textContent = text;
    hosts.fallback.hidden = false;
  }
  function hideFallback() {
    if (hosts.fallback) hosts.fallback.hidden = true;
  }
  function markInteraction(ms) {
    interactUntil = Math.max(interactUntil, performance.now() + (ms || 900));
    if (global.Stage && Stage.kick) Stage.kick();
    pokeChrome();
    if (active) scheduleSave();
  }
  function pokeChrome() {
    root.classList.remove('sp-idle');
    if (idleTimer) clearTimeout(idleTimer);
    idleTimer = setTimeout(function () {
      if (active && !sheetOpen && !playlistOpen && !fxShow && !controlTarget({target:document.activeElement})) root.classList.add('sp-idle');
    }, CHROME_HIDE_MS);
  }
  function syncPlayBtn() {
    var btn = hosts.btnPlay;
    if (!btn) return;
    var present = global.Stage && Stage.presentation ? Stage.presentation() : null;
    var playing = !!(present && present.playing);
    btn.setAttribute('aria-pressed', String(playing));
    btn.title = playing ? '暂停 (空格)' : '播放 (空格)';
    var useP = playing ? '#i-pause' : '#i-play';
    if (btn.dataset.icon !== useP) {
      btn.dataset.icon = useP;
      btn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><use href="' + useP + '"/></svg>';
    }
  }
  function formatTime(ms) {
    var s = Math.floor(Math.max(0, num(ms, 0)) / 1000);
    return Math.floor(s / 60) + ':' + ('0' + s % 60).slice(-2);
  }
  function syncProgress() {
    var present = global.Stage && Stage.presentation ? Stage.presentation() : {};
    var seek = $('sp-seek');
    if (!seek) return;
    seek.max = Math.max(1, present.duration || 0);
    seek.disabled = !present.track || !present.duration;
    if (!seeking) seek.value = Math.min(present.duration || 0, present.position || 0);
    $('sp-time').textContent = formatTime(Number(seek.value)) + ' / ' + formatTime(present.duration);
    $('sp-track-title').textContent = present.track ? present.track.title || present.track.name || '正在播放' : '选择一首歌';
    seek.setAttribute('aria-valuetext', formatTime(Number(seek.value)));
  }
  function buildFxGrid() {
    if (!hosts.fxGrid) return;
    hosts.fxGrid.textContent = '';
    function card(label, desc, opts) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'sp-card' + (opts.active ? ' is-active' : '');
      b.innerHTML = '<strong></strong><small></small>';
      b.firstChild.textContent = label;
      b.lastChild.textContent = desc;
      if (opts.badge) {
        var s = document.createElement('span');
        s.className = 'sp-badge' + (opts.wait ? ' is-wait' : '');
        s.textContent = opts.badge;
        b.appendChild(s);
      }
      if (opts.disabled) b.disabled = true;
      if (opts.onClick) b.addEventListener('click', opts.onClick);
      hosts.fxGrid.appendChild(b);
      return b;
    }
    var t1 = document.createElement('p');
    t1.className = 'sp-fx-title';
    t1.textContent = '舞台来源';
    hosts.fxGrid.appendChild(t1);
    SOURCES.forEach(function (s) {
      if (s.hidden) return;   // 下架来源不在网格露出（§7.1）
      var available = true;
      if (s.id === 'coast' && global.StageCoast) available = StageCoast.available();
      if (s.id === 'zodiac' && global.StageZodiac) available = StageZodiac.available();
      if (s.id === 'creative') available = !!(global.CreativeStage && CreativeStage.attachStage);
      if (s.id === 'immersive') available = !!(global.SpaceFields && SpaceFields.available());
      if (failedSources[s.id]) available = false;
      card(s.label, s.desc, {
        active: prefs.sceneSource === s.id,
        disabled: !available,
        badge: available ? null : '暂不可用',
        onClick: function () { setSource(s.id); fxToggle(false); }
      });
    });
    var t2 = document.createElement('p');
    t2.className = 'sp-fx-title';
    t2.textContent = '沉浸粒子场';
    hosts.fxGrid.appendChild(t2);
    var catalog = [];
    var fieldsLive = false;
    try {
      fieldsLive = !!(global.SpaceFields && SpaceFields.setStage && global.Stage3D && Stage3D.shaderCatalog);
      catalog = global.Stage3D && Stage3D.effectCatalog ? Stage3D.effectCatalog() : [];
    } catch (_) { catalog = []; }
    if (!catalog.length) {
      var p = document.createElement('p');
      p.className = 'sp-fx-title';
      p.textContent = '效果目录不可用（沉浸声场未就绪）';
      hosts.fxGrid.appendChild(p);
    }
    catalog.forEach(function (f) {
      var active = prefs.sceneSource === 'immersive' && prefs.field === f.id;
      card(f.label, f.desc || '', {
        active: active,
        disabled: !fieldsLive,
        badge: fieldsLive ? (active ? '当前' : null) : '待 3D 化',
        onClick: fieldsLive ? function () {
          setSource('immersive');
          setField(f.id);
          fxToggle(false);
        } : null
      });
    });
    // 创意场景（towers/nebula）：着色器与场景语义是 creative-gl 的（sceneRig
    // 只读出口），运行时编排在 SpaceFields；「创意编排」之外的第二条到达路径。
    var sceneStages = (fieldsLive && global.SpaceFields && SpaceFields.scenes) ? SpaceFields.scenes() : [];
    if (sceneStages.length) {
      var t3 = document.createElement('p');
      t3.className = 'sp-fx-title';
      t3.textContent = '频谱场景';
      hosts.fxGrid.appendChild(t3);
      sceneStages.forEach(function (s) {
        var active = prefs.sceneSource === 'immersive' && prefs.field === s.id;
        card(s.label, '随音乐起伏的空间画面', {
          active: active,
          disabled: false,
          badge: active ? '当前' : null,
          onClick: function () {
            setSource('immersive');
            setField(s.id);
            fxToggle(false);
          }
        });
      });
    }
  }
  function fxToggle(on) {
    fxShow = on == null ? !fxShow : !!on;
    hosts.fx.classList.toggle('sp-show', fxShow);
    hosts.fxBtn.setAttribute('aria-expanded', String(fxShow));
    if (fxShow) buildFxGrid();
    pokeChrome();
  }
  function sheetToggle(on) {
    sheetOpen = on == null ? !sheetOpen : !!on;
    hosts.sheet.classList.toggle('sp-show', sheetOpen);
    hosts.fab.setAttribute('aria-expanded', String(sheetOpen));
    if (sheetOpen) syncSheet();
    pokeChrome();
  }
  function playlistToggle(on) {
    playlistOpen = on == null ? !playlistOpen : !!on;
    hosts.playlist.classList.toggle('sp-show', playlistOpen);
    hosts.playlistBtn.setAttribute('aria-expanded', String(playlistOpen));
    if (playlistOpen) buildPlaylist();
    pokeChrome();
  }
  function syncSheet() {
    if (!hosts.source) return;
    hosts.source.value = prefs.sceneSource;
    hosts.lyrics.checked = prefs.lyrics;
    hosts.visual.value = prefs.visual;
    hosts.cinema.checked = prefs.cinema;
    hosts.coastTod.value = String(prefs.coastTod);
    hosts.coastInteract.checked = prefs.coastInteract;
    hosts.zodiacLines.checked = prefs.zodiacLines;
    hosts.zodiacField.checked = prefs.zodiacField;
    hosts.zodiacInteract.checked = prefs.zodiacInteract;
    var coastTune = hosts.coastTune, zodiacTune = hosts.zodiacTune;
    if (coastTune) coastTune.hidden = prefs.sceneSource !== 'coast';
    if (zodiacTune) zodiacTune.hidden = prefs.sceneSource !== 'zodiac';
  }
  function buildPlaylist() {
    var body = hosts.playlistBody;
    if (!body) return;
    body.textContent = '';
    if (!queue.length) {
      var empty = document.createElement('p');
      empty.className = 'sp-note';
      empty.textContent = '队列是空的。';
      body.appendChild(empty);
      return;
    }
    var present = global.Stage && Stage.presentation ? Stage.presentation() : null;
    queue.forEach(function (t) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'sp-queue-item' + (present && present.track && present.track.id === t.id ? ' is-active' : '');
      b.innerHTML = '<strong></strong><small></small>';
      b.firstChild.textContent = t.title || '未知曲目';
      b.lastChild.textContent = t.artist || '';
      b.addEventListener('click', function () { control('queue-play', t.id); });
      body.appendChild(b);
    });
  }

  // ---------------------------------------------------------------------------
  // 手势：拖拽转世界、滚轮推拉、双击回正、自由镜头
  // ---------------------------------------------------------------------------
  function controlTarget(e) {
    return e.target && e.target.closest &&
      e.target.closest('button, a, input, select, textarea, [contenteditable], [role="button"], .sp-bar, .sp-fx, .sp-sheet, .sp-playlist, .sp-fab, .sp-head, #sp-reading, #sp-stanza');
  }
  function bindGestures() {
    function canInteract() {
      return prefs.sceneSource !== 'coast' && prefs.sceneSource !== 'zodiac' ||
        (prefs.sceneSource === 'coast' ? prefs.coastInteract : prefs.zodiacInteract);
    }
    root.addEventListener('pointerdown', function (e) {
      if (!active || !canInteract() || (e.button != null && e.button !== 0) || controlTarget(e)) return;
      pointerField.clickX = (e.clientX - root.getBoundingClientRect().left) / Math.max(1, root.clientWidth) * 2 - 1;
      pointerField.clickY = 1 - (e.clientY - root.getBoundingClientRect().top) / Math.max(1, root.clientHeight) * 2;
      pointerField.clickAt = spaceTime;
      if (camera && camera.isFreeActive()) {
        // 自由镜头：点击画布抢指针锁定，转向走 mousemove。
        requestFreePointerLock();
        e.preventDefault();
        return;
      }
      dragging = true;
      pointerId = e.pointerId;
      lastPt = { x: e.clientX, y: e.clientY, t: performance.now() };
      root.classList.add('sp-dragging');
      if (camera) camera.setRotating(true);
      if (root.setPointerCapture) root.setPointerCapture(e.pointerId);
      markInteraction(1200);
    });
    root.addEventListener('pointermove', function (e) {
      if (!active) return;
      pokeChrome();
      // 指针场（NDC）：场着色器的 uPointer/uClick 交互输入。
      pointerField.x = (e.clientX - root.getBoundingClientRect().left) / Math.max(1, root.clientWidth) * 2 - 1;
      pointerField.y = 1 - (e.clientY - root.getBoundingClientRect().top) / Math.max(1, root.clientHeight) * 2;
      pointerField.active = 1;
      if (document.pointerLockElement === root && camera && camera.isFreeActive()) {
        markInteraction(900);
        camera.freeLook(e.movementX || 0, e.movementY || 0);
        return;
      }
      if (!dragging || e.pointerId !== pointerId || !lastPt) return;
      var now = performance.now();
      var dt = clamp((now - lastPt.t) / 1000, 1 / 120, 0.08);
      camera.spinDrag(e.clientX - lastPt.x, e.clientY - lastPt.y, dt);
      lastPt = { x: e.clientX, y: e.clientY, t: now };
      markInteraction(900);
    });
    function endDrag(e) {
      if (!dragging || (e && e.pointerId != null && e.pointerId !== pointerId)) return;
      dragging = false;
      pointerId = null;
      lastPt = null;
      root.classList.remove('sp-dragging');
      if (camera) camera.setRotating(false);
    }
    root.addEventListener('pointerup', endDrag);
    root.addEventListener('pointercancel', endDrag);
    root.addEventListener('lostpointercapture', endDrag);
    root.addEventListener('pointerleave', function () { pointerField.active = 0; pointerField.x = -9; pointerField.y = -9; });
    root.addEventListener('wheel', function (e) {
      if (!active || !canInteract() || controlTarget(e)) return;
      e.preventDefault();
      markInteraction(900);
      if (camera) camera.wheel(e.deltaY, { free: camera.isFreeActive() });
    }, { passive: false });
    root.addEventListener('dblclick', function (e) {
      if (!active || controlTarget(e)) return;
      if (camera) {
        if (camera.isFreeEngaged() && !camera.isFreeActive()) camera.freeReset();
        else if (!camera.isFreeActive()) camera.recenter();
      }
      markInteraction(700);
    });
    root.addEventListener('pointermove', pokeChrome, { passive: true });
  }

  // ---------------------------------------------------------------------------
  // 键盘（捕获相）。本层开着时先吃：Esc/L/K/R + 自由镜头移动键。
  // ---------------------------------------------------------------------------
  var FREE_CODES = camera ? camera.CONSTANTS.FREE_MOVE_CODES : '^(KeyW|KeyA|KeyS|KeyD|KeyQ|KeyE|Space|ShiftLeft|ShiftRight|ControlLeft|ControlRight)$';
  function isTyping(t) {
    var tag = t && t.tagName ? String(t.tagName).toUpperCase() : '';
    return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || !!(t && t.isContentEditable);
  }
  function onKeyDown(e) {
    if (!active) return;
    pokeChrome();
    if (e.code === 'Escape') {
      e.preventDefault(); e.stopImmediatePropagation(); close(); return;
    }
    if (isTyping(e.target)) return;
    if (e.code === 'KeyR') {
      e.preventDefault();
      e.stopImmediatePropagation();
      if (!e.repeat && camera) {
        var on = camera.freeToggle();
        hosts.hint.classList.toggle('show', on);
        if (on) requestFreePointerLock();
        else pointerLockRequest++;
        if (!on && document.pointerLockElement === root && document.exitPointerLock) document.exitPointerLock();
        markInteraction(900);
      }
      return;
    }
    if (e.code === 'KeyK') {
      e.preventDefault();
      e.stopImmediatePropagation();
      if (camera) {
        if (camera.isFreeEngaged()) camera.freeReset();
        else camera.recenter();
      }
      markInteraction(700);
      return;
    }
    if (e.code === 'KeyL') {
      e.preventDefault();
      e.stopImmediatePropagation();
      prefs.lyrics = !prefs.lyrics;
      syncLyricVisual();
      scheduleSave();
      return;
    }
    if (camera && camera.isFreeActive() && new RegExp(FREE_CODES).test(e.code)) {
      // 自由镜头进行中，移动键归它（含空格——§6.4 的让路纪律）。
      e.preventDefault();
      e.stopImmediatePropagation();
      camera.freeKey(e.code, true);
      markInteraction(900);
      return;
    }
    if (e.code === 'KeyF') {
      // F 归空间（stage-immersive 的全局 F 对本层早退）。
      e.preventDefault();
      e.stopImmediatePropagation();
      toggleFullscreen();
      return;
    }
    if (e.code === 'KeyQ') {
      e.preventDefault(); e.stopImmediatePropagation(); playlistToggle(); return;
    }
    if (/^Digit[1-8]$/.test(e.code)) {
      var fields = global.Stage3D ? Stage3D.effectCatalog() : [];
      var item = fields[Number(e.code.slice(-1)) - 1];
      if (item) { e.preventDefault(); e.stopImmediatePropagation(); setSource('immersive'); setField(item.id); }
    }
  }
  function onKeyUp(e) {
    if (!active) return;
    if (camera && new RegExp(FREE_CODES).test(e.code)) camera.freeKey(e.code, false);
    scheduleSave();
  }

  var pointerLockRequest = 0;
  function requestFreePointerLock() {
    var request = ++pointerLockRequest;
    function denied() {
      if (request !== pointerLockRequest || !active) return;
      if (camera && camera.isFreeActive()) { camera.clearInput(); camera.freeToggle(); }
      hosts.hint.classList.remove('show');
      showFallback('无法锁定指针，请允许浏览器锁定后重新开启自由镜头。');
      scheduleSave();
    }
    if (!root.requestPointerLock) return;
    try { Promise.resolve(root.requestPointerLock()).catch(denied); } catch (_) { denied(); }
  }
  function toggleFullscreen() {
    function denied() { if (active) showFallback('无法切换全屏，请检查浏览器的全屏权限。'); }
    try {
      if (document.fullscreenElement) {
        if (document.exitFullscreen) Promise.resolve(document.exitFullscreen()).catch(denied);
      } else if (root.requestFullscreen) {
        Promise.resolve(root.requestFullscreen()).catch(denied);
      }
    } catch (_) { denied(); }
  }

  // ---------------------------------------------------------------------------
  // 开合与互斥（§4 上下文归属）
  // ---------------------------------------------------------------------------
  function open(sourceId) {
    if (!root) return false;
    if (sourceId) prefs.sceneSource = sourceById(sourceId) ? sourceId : prefs.sceneSource;
    if (!active) {
      // 排他：开空间先关声场（Stage3D.close 会经 sync* 把各适配器卸干净）。
      if (global.Stage3D && Stage3D.isActive && Stage3D.isActive()) Stage3D.close();
      returnFocus = document.activeElement;
      if (global.SkinSettingsSheet && SkinSettingsSheet.isOpen()) {
        returnFocus = $('space3d-entry');
        SkinSettingsSheet.close({ immediate: true, focusTarget: root });
      }
      backgroundNodes = [];
      Array.prototype.forEach.call(document.body.children, function (node) {
        if (node === root || /^(SCRIPT|STYLE|SVG)$/.test(node.tagName)) return;
        backgroundNodes.push({ node: node, inert: node.inert });
        node.inert = true;
      });
    }
    active = true;
    document.body.classList.add('space3d-open');
    if (!layers && global.SpaceLayers) { layers = SpaceLayers.create(root); layers.configure(prefs.layers); }
    fadeTarget = 1;
    root.classList.add('sp-open');
    root.setAttribute('aria-hidden', 'false');
    root.focus({ preventScroll: true });
    hideFallback();
    if (camera) {
      var def = sourceById(prefs.sceneSource);
      if (def) camera.setBaseline(baselineOf(def.preset));
      camera.snap();
      camera.setCinema(prefs.cinema, 1);
      if (prefs.freeCam) camera.freeLoad(prefs.freeCam);
    }
    syncSource();
    syncLyricVisual();
    buildFxGrid();
    syncSheet();
    syncExtraControls();
    markInteraction(700);
    if (global.Stage && Stage.kick) Stage.kick();
    return true;
  }
  function close(fromStage3d) {
    if (!root || !active) return;
    active = false;
    document.body.classList.remove('space3d-open');
    pointerLockRequest++;
    fadeTarget = 0;
    fxShow = false; sheetOpen = false; playlistOpen = false;
    hosts.fx.classList.remove('sp-show');
    hosts.sheet.classList.remove('sp-show');
    hosts.playlist.classList.remove('sp-show');
    hosts.hint.classList.remove('show');
    if (document.pointerLockElement === root && document.exitPointerLock) document.exitPointerLock();
    // 卸载所有场景宿主（适配器内部取消各自 rAF 与 GL 资源）。
    syncSource();
    if (layers) { layers.dispose(); layers = null; }
    disposeStanza();
    if (lyricView) lyricView.reset();
    root.classList.remove('sp-open');
    root.setAttribute('aria-hidden', 'true');
    root.classList.remove('sp-idle');
    backgroundNodes.forEach(function (entry) { entry.node.inert = entry.inert; });
    backgroundNodes = [];
    if (returnFocus && returnFocus.isConnected) returnFocus.focus({ preventScroll: true });
    returnFocus = null;
    if (idleTimer) { clearTimeout(idleTimer); idleTimer = 0; }
    if (saveTimer) { clearTimeout(saveTimer); saveTimer = 0; }
    savePreferences();
    // 自由镜头退出后回 orbit（锁定位姿留给下次进入）。
    if (camera && camera.isFreeActive()) camera.freeToggle();
    if (camera) { camera.setRotating(false); camera.dispose(); }
    dragging = false; pointerId = null; lastPt = null;
    root.classList.remove('sp-dragging');
    if (global.Stage && Stage.kick) Stage.kick();
    void fromStage3d;
  }
  function isActive() { return active; }
  function toggle(sourceId) {
    if (active) close();
    else open(sourceId);
    return active;
  }
  function setQueue(list) {
    queue = list || [];
    if (playlistOpen) buildPlaylist();
  }

  // ---------------------------------------------------------------------------
  // init
  // ---------------------------------------------------------------------------
  function init() {
    if (inited) return true;
    root = $('space3d');
    if (!root) return false;
    inited = true;
    hosts = {
      bg: $('sp-bg'), canvas: $('sp-canvas'), reading: $('sp-reading'),
      stanza: $('sp-stanza'), flBg: $('sp-fl-bg'), flSonnet: $('sp-fl-sonnet-stage'),
      flLyric: $('sp-fl-lyric'), flSub: $('sp-fl-sub'),
      bar: $('sp-bar'), play: $('sp-play'), prev: $('sp-prev'), next: $('sp-next'),
      btnPlay: $('sp-play'), btnPrev: $('sp-prev'), btnNext: $('sp-next'),
      fx: $('sp-fx'), fxGrid: $('sp-fx-grid'), fxBtn: $('sp-fx-toggle'),
      fab: $('sp-fab'), sheet: $('sp-sheet'), playlist: $('sp-playlist'),
      playlistBody: $('sp-playlist-body'), playlistBtn: $('sp-playlist-toggle'),
      hint: $('sp-hint'), fallback: $('sp-fallback'),
      close: $('sp-close'),
      source: $('sp-source'), lyrics: $('sp-lyrics-toggle'), visual: $('sp-visual'),
      cinema: $('sp-cinema-toggle'), freeNote: $('sp-free-note'),
      coastTune: $('sp-coast-tune'), coastTod: $('sp-coast-tod'), coastInteract: $('sp-coast-interact'),
      zodiacTune: $('sp-zodiac-tune'), zodiacLines: $('sp-zodiac-lines'),
      zodiacField: $('sp-zodiac-field'), zodiacInteract: $('sp-zodiac-interact')
    };
    if (global.StageLyrics) {
      lyricView = StageLyrics.init(hosts.reading, function (ms) { control('seek', ms); });
    }
    bindGestures();
    bindChrome();
    buildExtraControls();
    if (global.SpaceFields && SpaceFields.onPost) SpaceFields.onPost(syncExtraControls);
    document.addEventListener('keydown', onKeyDown, true);
    document.addEventListener('keyup', onKeyUp, true);
    root.addEventListener('focusin', pokeChrome);
    function pauseInput() {
      if (!active) return;
      camera.clearInput();
      dragging = false; pointerId = null; lastPt = null; root.classList.remove('sp-dragging');
      savePreferences();
    }
    window.addEventListener('blur', pauseInput);
    window.addEventListener('beforeunload', function () {
      if (!active && !saveTimer) return;
      if (saveTimer) { clearTimeout(saveTimer); saveTimer = 0; }
      savePreferences();
    });
    document.addEventListener('visibilitychange', function () { if (document.hidden) pauseInput(); });
    document.addEventListener('pointerlockchange', function () {
      if (active && document.pointerLockElement !== root) {
        pauseInput();
        if (camera.isFreeActive()) camera.freeToggle();
        hosts.hint.classList.remove('show');
      }
    });
    document.addEventListener('stage:scene-context', function (e) {
      var detail = e.detail;
      if (!active || !detail || detail.source !== prefs.sceneSource) return;
      if (detail.state === 'recovered') { delete failedSources[detail.source]; hideFallback(); }
      else {
        showFallback(detail.state === 'lost' ? '图形上下文已中断，正在恢复…' : '此舞台暂不可用，请切换场景或按 Esc 返回。');
        if (detail.state === 'failed') failedSources[detail.source] = true;
      }
      buildFxGrid();
    });
    document.addEventListener('stage:playing-changed', function () { if (active) syncPlayBtn(); });
    if (global.Onset && Onset.create && onset.onBeat) {
      onset.onBeat(function (t, score) {
        if (!camera || !active) return;
        // Onset 的分带聚合（agg: 低/军鼓体/人声/高频）映射到 beatCam 的 low/body/snap。
        var agg = onset.agg;
        var event = camera.beat(onset.pulse, {
          time: (global.Stage && Stage.presentation ? (Stage.presentation().position || 0) / 1000 : t / 1000),
          strength: clamp(0.35 + (score || 0) * 1.2, 0.1, 1),
          confidence: clamp(0.35 + (score || 0) * 1.2, 0.1, 1),
          low: agg && agg.length ? agg[0] : 0.6,
          body: agg && agg.length > 1 ? agg[1] : 0.2,
          snap: agg && agg.length > 3 ? agg[3] : 0.15,
          count: onset.beats
        });
        if (event && isSelfSpinning(prefs.sceneSource) && !camera.isFreeEngaged() && targetFps() === 0) {
          camera.tick(1000 / 30, {playing:true,audioTime:event.hit,energy:au.energy,low:au.bass});
          pushCameraToScene();
        }
      });
    }
    // 帧门（§6.3）：相机门在自转场景上报 0；歌词门/UI 门独立。
    if (global.Stage && Stage.gate) {
      Stage.gate(GATE, targetFps, tick);
      Stage.gate('space3d-signal', function () {
        return active && !document.hidden && isSelfSpinning(prefs.sceneSource) ? 30 : 0;
      }, updateSignal);
      Stage.gate('space3d-lyrics', lyricsFps, lyricsTick);
      Stage.gate('space3d-ui', uiFps, uiTick);
    }
    root.setAttribute('data-sp-ready', '1');
    return true;
  }
  function bindChrome() {
    var seek = $('sp-seek'), sparks = $('sp-seek-particles');
    for (var i = 0; i < 8; i += 1) {
      var dot = document.createElement('i'); dot.style.setProperty('--spark-i', i); sparks.appendChild(dot);
    }
    seek.addEventListener('input', function () {
      seeking = true; syncProgress();
      sparks.style.left = (Number(seek.value) / Math.max(1, Number(seek.max)) * 100) + '%';
      sparks.classList.toggle('sp-seeking', !reducedMotion());
    });
    seek.addEventListener('change', function () {
      control('seek', Number(seek.value)); seeking = false; sparks.classList.remove('sp-seeking');
    });
    seek.addEventListener('blur', function () { seeking = false; sparks.classList.remove('sp-seeking'); });
    hosts.close.addEventListener('click', function () { close(); });
    hosts.btnPrev.addEventListener('click', function () { control('prev'); });
    hosts.btnNext.addEventListener('click', function () { control('next'); });
    hosts.btnPlay.addEventListener('click', function () { control('toggle'); markInteraction(700); });
    hosts.fxBtn.addEventListener('click', function () { fxToggle(); });
    hosts.fab.addEventListener('click', function () { sheetToggle(); });
    hosts.playlistBtn.addEventListener('click', function () { playlistToggle(); });
    hosts.source.addEventListener('change', function () { setSource(hosts.source.value); });
    hosts.lyrics.addEventListener('change', function () {
      prefs.lyrics = hosts.lyrics.checked;
      syncLyricVisual(); scheduleSave();
    });
    hosts.visual.addEventListener('change', function () {
      prefs.visual = hosts.visual.value;
      syncLyricVisual(); scheduleSave();
    });
    hosts.cinema.addEventListener('change', function () {
      prefs.cinema = hosts.cinema.checked;
      if (camera) camera.setCinema(prefs.cinema, 1);
      scheduleSave();
    });
    hosts.coastTod.addEventListener('input', function () {
      prefs.coastTod = Number(hosts.coastTod.value);
      if (global.StageCoast && StageCoast.setPrefs) StageCoast.setPrefs({ tod: prefs.coastTod });
      scheduleSave();
    });
    hosts.coastInteract.addEventListener('change', function () {
      prefs.coastInteract = hosts.coastInteract.checked;
      scheduleSave();
    });
    hosts.zodiacLines.addEventListener('change', function () { prefs.zodiacLines = hosts.zodiacLines.checked; pushZodiac(); });
    hosts.zodiacField.addEventListener('change', function () { prefs.zodiacField = hosts.zodiacField.checked; pushZodiac(); });
    hosts.zodiacInteract.addEventListener('change', function () { prefs.zodiacInteract = hosts.zodiacInteract.checked; pushZodiac(); });
    var sheetClose = $('sp-sheet-close');
    if (sheetClose) sheetClose.addEventListener('click', function () { sheetToggle(false); });
    // 顶栏与设置页的三条入口（§10.3）：X 键、顶栏按钮、设置行。
    ['space3d-entry', 'set-space3d-btn'].forEach(function (id) {
      var b = $(id);
      if (b) b.addEventListener('click', function () { toggle(); });
    });
    var defaultsBtn = $('sp-defaults');
    if (defaultsBtn) defaultsBtn.addEventListener('click', function () {
      prefs.sceneSource = 'coast'; prefs.lyrics = true; prefs.visual = 'stage'; prefs.cinema = true;
      prefs.coastTod = 0; prefs.coastInteract = true;
      prefs.zodiacLines = true; prefs.zodiacField = true; prefs.zodiacInteract = true;
      prefs.post = global.SpacePost ? SpacePost.defaults() : {};
      prefs.layers = global.SpaceLayers ? SpaceLayers.defaults() : {};
      prefs.field = 'silk'; prefs.freeCam = null;
      if (layers) layers.configure(prefs.layers);
      syncExtraControls();
      if (camera) {
        if (camera.isFreeActive()) camera.freeToggle();
        if (camera.isFreeEngaged()) camera.freeReset();
        camera.setCinema(prefs.cinema, 1);
        camera.recenter();
      }
      hideFallback();
      syncSource(); syncLyricVisual(); buildFxGrid(); syncSheet();
      scheduleSave(); markInteraction(700);
    });
    $('sp-focus').addEventListener('click', function () {
      var pose = camera.pose();
      if (pose.free) camera.freeReset();
      else camera.focus({theta:pose.theta,phi:pose.phi,radius:pose.radius * 0.72},0);
      markInteraction(1800);
    });
  }
  function pushZodiac() {
    if (global.StageZodiac && StageZodiac.setPrefs && active && prefs.sceneSource === 'zodiac') {
      var theme = lyricTheme();
      StageZodiac.setPrefs({
        lines: prefs.zodiacLines, field: prefs.zodiacField, interact: false,
        palette: theme ? { accentColor: theme.accentColor, secondaryColor: theme.secondaryColor,
          backgroundColor: theme.backgroundColor, primaryColor: theme.primaryColor,
          tertiaryColor: theme.tertiaryColor } : null
      });
    }
    scheduleSave();
  }

  var api = {
    init: init,
    open: open,
    close: close,
    toggle: toggle,
    isActive: isActive,
    configure: configure,
    preferences: preferences,
    setQueue: setQueue,
    setSource: setSource,
    setField: setField,
    sourceId: function () { return prefs.sceneSource; },
    requestFullscreen: function () { if (active) toggleFullscreen(); },
    toggleFullscreen: function () { if (active) toggleFullscreen(); },
    stats: function () {
      return {
        active: active,
        source: prefs.sceneSource,
        field: prefs.field,
        fields: global.SpaceFields ? SpaceFields.stats() : null,
        camera: camera ? camera.pose() : null,
        gateCostMs: Math.round(cost.avg * 10) / 10,
        freeCam: camera ? camera.isFreeEngaged() : false,
        layers: layers ? layers.stats() : null, timeSec: spaceTime
      };
    }
  };
  global.Space3D = api;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { init(); });
  } else {
    init();
  }
}());
