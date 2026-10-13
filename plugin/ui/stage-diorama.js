// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
//
// 「镜台 · 末班车」歌词舞台适配层。职责边界（见 docs/superpowers/specs/
// 2026-10-12-diorama-stage-design.md）：场景渲染全部在 vendor/diorama-stage.js
// （DioramaStagePure，不感知宿主）；本文件负责一切 hertz-studio 集成 ——
// 挂载/卸载、播放时钟与歌词接驳（Stage.presentation/lyrics/lyricTokens/
// lyricTranslation + StanzaSongForm 曲式）、频谱与起音（Stage.spectrum + Onset）、
// 画质降档（stage:fps 只降不升）、reduced-motion、遮幅条、画布尺寸跟随。
//
// Stage3D 的调用面：
//   StageDiorama.available()        入口置灰判断（探测 WebGL2，带缓存）
//   StageDiorama.setHost(el|null)   挂进宿主层 / 卸载；返回是否成功
//   StageDiorama.setPrefs(p)        { carrier, reflection, lyrics, palette } 即时生效
//   StageDiorama.degradedBecause()  最近一次挂载失败的原因，null 为可用
(function () {
  'use strict';

  var probeCache = null;
  var reason = null;
  var host = null;
  var canvas = null;
  var mounted = false;
  var quality = 'high';
  var downgraded = false;   // stage:fps 只降不升
  var raf = 0;
  var lastTick = 0;
  var lastW = 0, lastH = 0;
  var lastBars = -1;
  var ZEROS = new Float32Array(64);

  // —— GL 上下文丢失恢复（与 stage3d.js 主画布、stage-coast 同策略）—— //
  var RECOVERY_GRACE_MS = 1500;      // 先等浏览器自己的 restored（three 可自愈）
  var RECOVERY_DELAYS = [800, 1600, 3000];
  var RECOVERY_WINDOW_MS = 60000;
  var RECOVERY_MAX = 4;
  var ctxLost = false;
  var graceTimer = 0, retryTimer = 0;
  var retries = 0;
  var recoveryAt = [];

  function emitCtx(state) {
    try {
      document.dispatchEvent(new CustomEvent('stage:scene-context',
        { detail: { source: 'diorama', state: state } }));
    } catch (_) { /* 无 CustomEvent 的老环境静默：不影响播放 */ }
  }

  function clearRecoveryTimers() {
    if (graceTimer) { clearTimeout(graceTimer); graceTimer = 0; }
    if (retryTimer) { clearTimeout(retryTimer); retryTimer = 0; }
  }

  // 宽限期满上下文仍是死的：换一张新画布重挂（旧画布的上下文已经救不回）。
  function rebuildAfterLoss() {
    graceTimer = 0;
    if (!ctxLost || !mounted || !host) return;
    var ok = false;
    try { DS().unmount(); } catch (_) { /* 死上下文上释放资源：three 会静默 */ }
    detachContextWatch();
    if (canvas) { canvas.remove(); canvas = null; }
    lastBars = -1;
    ok = mountInto(host);
    if (ok) {
      ctxLost = false;
      retries = 0;
      reason = null;
      emitCtx('recovered');
      return;
    }
    if (retries < RECOVERY_DELAYS.length) {
      retryTimer = setTimeout(rebuildAfterLoss, RECOVERY_DELAYS[retries]);
      retries += 1;
    } else {
      reason = '镜台舞台的图形上下文未能恢复，请切回沉浸声场或重新打开舞台';
      emitCtx('failed');
    }
  }

  function onContextLost(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (ctxLost || !mounted || !host) return;
    var now = Date.now();
    recoveryAt = recoveryAt.filter(function (t) { return now - t < RECOVERY_WINDOW_MS; });
    if (recoveryAt.length >= RECOVERY_MAX) {
      ctxLost = true;
      reason = '镜台舞台的图形上下文反复丢失，已停止自动恢复，请切回沉浸声场';
      emitCtx('failed');
      return;
    }
    recoveryAt.push(now);
    ctxLost = true;
    retries = 0;
    reason = '镜台舞台的图形上下文丢失，正在自动恢复';
    emitCtx('lost');
    graceTimer = setTimeout(rebuildAfterLoss, RECOVERY_GRACE_MS);
  }

  function onContextRestored() {
    // 浏览器救回了上下文：three 会自行重建程序/纹理，这里只需收旗。
    if (!ctxLost) return;
    ctxLost = false;
    clearRecoveryTimers();
    retries = 0;
    reason = null;
    emitCtx('recovered');
  }

  function attachContextWatch() {
    if (!canvas) return;
    canvas.addEventListener('webglcontextlost', onContextLost, false);
    canvas.addEventListener('webglcontextrestored', onContextRestored, false);
  }

  function detachContextWatch() {
    if (canvas) {
      canvas.removeEventListener('webglcontextlost', onContextLost, false);
      canvas.removeEventListener('webglcontextrestored', onContextRestored, false);
    }
    clearRecoveryTimers();
  }

  // 歌词接驳状态：按「曲签名」检测换曲/重新定位，一次性解析字素与曲式。
  var lyricSig = '';
  var lyricFailed = false;

  function DS() { return window.DioramaStagePure; }

  function available() {
    if (probeCache === null) probeCache = !!(DS() && DS().probe && DS().probe());
    return probeCache;
  }

  function degradedBecause() { return reason; }

  // —— 歌词 → 引擎载荷。行/字素/译文/曲式都在宿主侧解析，引擎只吃编制结果。 —— //
  function buildPayload() {
    var Stage = window.Stage;
    var U = window.StanzaUtil;
    if (!Stage || !Stage.lyrics || !U || !U.graphemeTimings) return null;
    var doc = Stage.lyrics();
    if (!doc || !doc.lines || !doc.lines.length) return null;
    var lines = [];
    for (var i = 0; i < doc.lines.length; i += 1) {
      var raw = doc.lines[i];
      if (!raw) continue;
      var text = String(raw.text == null ? '' : raw.text).trim();
      if (!text) continue;
      var startMs = Number(raw.start_ms) || 0;
      var toks = null;
      try { toks = Stage.lyricTokens(raw); } catch (_) { toks = null; }
      var glyphs = [];
      var lastEnd = startMs;
      (toks && toks.length ? toks : []).forEach(function (tok) {
        if (!tok || !tok.text) return;
        var parts = U.graphemeTimings({ text: tok.text, start_ms: tok.start_ms, end_ms: tok.end_ms });
        parts.forEach(function (g) {
          if (!g.char) return;
          glyphs.push({ text: g.char, start: g.start_ms / 1000, end: g.end_ms / 1000 });
          if (g.end_ms > lastEnd) lastEnd = g.end_ms;
        });
      });
      if (!glyphs.length) continue;
      var endMs = Number(raw.end_ms);
      if (!(endMs > startMs)) endMs = Math.max(lastEnd, startMs + 300);
      lines.push({
        start: startMs / 1000,
        end: endMs / 1000,
        text: text,
        translation: (Stage.lyricTranslation && Stage.lyricTranslation(i)) || '',
        glyphs: glyphs,
      });
    }
    if (!lines.length) return null;
    var paragraphs = [];
    try {
      var form = window.StanzaSongForm && window.StanzaSongForm.forDoc
        ? window.StanzaSongForm.forDoc(doc.lines, function (l) { return Stage.lyricTokens(l); })
        : null;
      if (form && form.paragraphs) {
        form.paragraphs.forEach(function (par) {
          if (!par) return;
          paragraphs.push({ startLine: par.startLine, endLine: par.endLine, kind: par.kind });
        });
      }
    } catch (_) { /* 曲式缺席时按无段落编制，机位退化为统一主歌 */ }
    var head = doc.lines[0];
    var tail = doc.lines[doc.lines.length - 1];
    var sig = 'l' + doc.lines.length + ':' + (head && head.start_ms) + ':' + (tail && tail.start_ms);
    return { v: 1, lines: lines, paragraphs: paragraphs, signature: sig,
      forceCarrier: currentPrefs.carrier === 'sign' || currentPrefs.carrier === 'constellation'
        ? currentPrefs.carrier : undefined };
  }

  function syncLyrics() {
    if (!window.Stage || !window.Stage.lyrics) return;
    var doc = window.Stage.lyrics();
    var sig = doc && doc.lines && doc.lines.length
      ? 'l' + doc.lines.length + ':' + doc.lines[0].start_ms + ':' + doc.lines[doc.lines.length - 1].start_ms
      : '';
    if (sig === lyricSig) return;
    lyricSig = sig;
    var payload = sig ? buildPayload() : null;
    if (sig && !payload) {
      // 解析失败只静默跳过一次：引擎退化为纯世界（无词的夜行），不刷错误。
      if (!lyricFailed) lyricFailed = true;
    } else {
      lyricFailed = false;
    }
    DS().setLyrics(payload);
  }

  // 每帧：读频谱 → 起音 → 推给引擎；播放时钟与歌词同步；遮幅条跟随开合度。
  function tick(now) {
    raf = requestAnimationFrame(tick);
    var dt = lastTick ? Math.min(now - lastTick, 100) : 0;
    lastTick = now;
    if (!mounted) return;
    var Stage = window.Stage;
    var spectrum = (Stage && Stage.spectrum && Stage.spectrum()) || null;
    // 静音/暂停时喂零谱，让能量自然回落到环境基线，而不是停在旧值。
    onset.step(dt || 16, spectrum && spectrum.length ? spectrum : ZEROS, now);
    DS().setAudio({ bands: spectrum, onset: onset.pulse > 0.45 });
    var present = Stage && Stage.presentation ? Stage.presentation() : null;
    DS().setTime({ time: present ? (present.position || 0) / 1000 : 0, playing: !!(present && present.playing) });
    syncLyrics();
    var w = host.clientWidth, h = host.clientHeight;
    if (w && h && (w !== lastW || h !== lastH)) {
      lastW = w; lastH = h;
      DS().resize(w, h);
    }
  }

  // 遮幅条：开合度由引擎的段落机位给出，这里换算成像素并写 CSS 变量。
  function applyBars(pose) {
    if (!host || !pose) return;
    var w = lastW || host.clientWidth;
    var h = lastH || host.clientHeight;
    if (!w || !h) return;
    var bars = Math.max(0, (h - w / 2.39) / 2) * (1 - (pose.openness == null ? 0.5 : pose.openness) * 0.75);
    var px = Math.round(bars * 2) / 2;
    if (Math.abs(px - lastBars) < 0.5) return;
    lastBars = px;
    host.style.setProperty('--diorama-bar', px + 'px');
  }

  // onset.js 以 defer 先于本文件加载，这里一定拿得到；兜底桩保证缺依赖时
  // 也只是没有音频反应，而不是每帧抛错。
  var onset = window.Onset
    ? window.Onset.create({})
    : { step: function () {}, bins: ZEROS, energy: 0, pulse: 0, onBeat: function () {} };

  // 初始画质档接 Stage.tier（0/1/2）：弱设备直接低档起步，不等 stage:fps
  // 降级。stage:fps lowfx 仍只降不升。
  function qualityForMount() {
    if (downgraded) return 'low';
    try {
      var tier = window.Stage && window.Stage.tier ? window.Stage.tier() : 2;
      if (tier === 0) return 'low';
      if (tier === 1) return 'medium';
    } catch (_) { /* tier 不可用按高档 */ }
    return 'high';
  }

  function mountInto(el) {
    var w = el.clientWidth || 640, h = el.clientHeight || 360;
    canvas = document.createElement('canvas');
    canvas.className = 'diorama-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    el.appendChild(canvas);
    lastW = w; lastH = h;
    quality = qualityForMount();
    var ok = DS().mount(canvas, {
      quality: quality,
      reduced: window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      palette: currentPrefs.palette,
      onFrame: applyBars,
    });
    if (!ok) {
      canvas.remove();
      canvas = null;
      reason = '当前环境无法运行镜台舞台（需要 WebGL2）';
      return false;
    }
    reason = null;
    DS().resize(w, h);
    DS().setPrefs({
      carrier: currentPrefs.carrier, reflection: currentPrefs.reflection,
      lyrics: currentPrefs.lyrics, palette: currentPrefs.palette,
    });
    lyricSig = '';
    syncLyrics();
    mounted = true;
    attachContextWatch();
    return true;
  }

  var currentPrefs = { carrier: 'auto', reflection: true, lyrics: true, palette: null };

  function setHost(el) {
    if (el === host) return !el || mounted;
    host = el;
    if (!el) {
      if (mounted) {
        cancelAnimationFrame(raf);
        raf = 0;
        mounted = false;
        ctxLost = false;
        detachContextWatch();
        DS().unmount();
      }
      if (canvas) { canvas.remove(); canvas = null; }
      lastBars = -1;
      reason = null;
      return true;
    }
    if (!available()) {
      reason = '当前环境无法运行镜台舞台（需要 WebGL2）';
      return false;
    }
    if (!mountInto(el)) return false;
    if (!raf) {
      lastTick = 0;
      raf = requestAnimationFrame(tick);
    }
    return true;
  }

  function setPrefs(p) {
    if (!p) return;
    if (p.carrier === 'auto' || p.carrier === 'sign' || p.carrier === 'constellation') {
      currentPrefs.carrier = p.carrier;
    }
    if (typeof p.reflection === 'boolean') currentPrefs.reflection = p.reflection;
    if (typeof p.lyrics === 'boolean') currentPrefs.lyrics = p.lyrics;
    if (p.palette) {
      currentPrefs.palette = {
        accent: p.palette.accentColor || p.palette.accent,
        secondary: p.palette.secondaryColor || p.palette.secondary,
        background: p.palette.backgroundColor || p.palette.background,
        ink: p.palette.inkColor || p.palette.ink || '#f2f0e9',
      };
    }
    if (mounted) {
      DS().setPrefs(currentPrefs);
      // 载体偏好改变要重编时间线（carrier 写进编制）。
      lyricSig = '';
      syncLyrics();
    }
  }

  // 舞台帧门测得吃不住（lowfx）就降到流畅档重建一次；之后不再回升级。
  document.addEventListener('stage:fps', function (e) {
    if (!e.detail || !e.detail.lowfx || downgraded || !mounted) return;
    downgraded = true;
    quality = 'low';
    if (host) {
      DS().unmount();
      detachContextWatch();
      if (canvas) { canvas.remove(); canvas = null; }
      lastBars = -1;
      mounted = mountInto(host);
    }
  });

  window.StageDiorama = {
    available: available,
    setHost: setHost,
    setPrefs: setPrefs,
    degradedBecause: degradedBecause,
  };
}());
