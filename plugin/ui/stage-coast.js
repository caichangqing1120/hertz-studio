// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
//
// 「纯真3D」海岸公路舞台适配层。职责边界（见 docs/superpowers/specs/
// 2026-10-11-coast-stage-design.md）：场景渲染全部在 vendor/coast-stage.js
// （CoastStagePure，不感知宿主）；本文件负责一切 hertz-studio 集成 ——
// 挂载/卸载、频谱与起音接驳（Stage.spectrum + Onset）、画质降档
// （stage:fps 只降不升）、reduced-motion、画布尺寸跟随。
//
// Stage3D 的调用面：
//   StageCoast.available()          入口置灰判断（探测 WebGL2，带缓存）
//   StageCoast.setHost(el|null)     挂进宿主层 / 卸载；返回是否成功
//   StageCoast.setPrefs(p)          { tod: 0..1, interact: bool } 即时生效
//   StageCoast.degradedBecause()    最近一次挂载失败的原因，null 为可用
(function () {
  'use strict';

  var probeCache = null;
  var reason = null;
  var host = null;
  var canvas = null;
  var mounted = false;
  var quality = 'high';
  var downgraded = false;   // stage:fps 只降不升
  var tod = 0;
  var interact = true;
  var raf = 0;
  var lastTick = 0;
  var lastW = 0, lastH = 0;
  var ZEROS = new Float32Array(64);

  function CS() { return window.CoastStagePure; }

  function available() {
    if (probeCache === null) probeCache = !!(CS() && CS().probe && CS().probe());
    return probeCache;
  }

  function degradedBecause() { return reason; }

  // 每帧：读频谱 -> 起音 -> 推给引擎；顺手跟随宿主尺寸。
  function tick(now) {
    raf = requestAnimationFrame(tick);
    var dt = lastTick ? Math.min(now - lastTick, 100) : 0;
    lastTick = now;
    if (!mounted) return;
    var spectrum = (window.Stage && Stage.spectrum && Stage.spectrum()) || null;
    // 静音/暂停时喂零谱，让能量自然回落到环境基线，而不是停在旧值。
    onset.step(dt || 16, spectrum && spectrum.length ? spectrum : ZEROS, now);
    CS().setAudio({ level: onset.energy, bands: onset.bins, onset: onset.pulse > 0.45 });
    var w = host.clientWidth, h = host.clientHeight;
    if (w && h && (w !== lastW || h !== lastH)) {
      lastW = w; lastH = h;
      CS().resize(w, h);
    }
  }

  function qualityForMount() {
    if (downgraded || document.body.classList.contains('stage-lowfx')) return 'low';
    return quality;
  }

  // onset.js 以 defer 先于本文件加载，这里一定拿得到；兜底桩保证缺依赖时
  // 也只是没有音频反应，而不是每帧抛错。
  var onset = window.Onset
    ? window.Onset.create({})
    : { step: function () {}, bins: ZEROS, energy: 0, pulse: 0, onBeat: function () {} };

  function mountInto(el) {
    var w = el.clientWidth || 640, h = el.clientHeight || 360;
    canvas = document.createElement('canvas');
    canvas.className = 'coast-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    el.appendChild(canvas);
    lastW = w; lastH = h;
    var ok = CS().mount(canvas, {
      quality: qualityForMount(),
      tod: tod,
      interactive: interact,
      reduced: window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });
    if (!ok) {
      canvas.remove();
      canvas = null;
      reason = '当前环境无法运行海岸舞台（需要 WebGL2）';
      return false;
    }
    reason = null;
    CS().resize(w, h);
    mounted = true;
    return true;
  }

  function setHost(el) {
    if (el === host) return !el || mounted;
    host = el;
    if (!el) {
      if (mounted) {
        cancelAnimationFrame(raf);
        raf = 0;
        mounted = false;
        CS().unmount();
      }
      if (canvas) { canvas.remove(); canvas = null; }
      reason = null;
      return true;
    }
    if (!available()) {
      reason = '当前环境无法运行海岸舞台（需要 WebGL2）';
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
    if (typeof p.tod === 'number') {
      tod = Math.min(1, Math.max(0, p.tod));
      if (mounted) CS().setTimeOfDay(tod);
    }
    if (typeof p.interact === 'boolean') {
      interact = p.interact;
      if (mounted) CS().setInteraction(interact);
    }
  }

  // 舞台帧门测得吃不住（lowfx）就降到流畅档重建一次；之后不再回升级。
  document.addEventListener('stage:fps', function (e) {
    if (!e.detail || !e.detail.lowfx || downgraded || !mounted) return;
    downgraded = true;
    if (host) {
      CS().unmount();
      mounted = mountInto(host);
    }
  });

  window.StageCoast = {
    available: available,
    setHost: setHost,
    setPrefs: setPrefs,
    degradedBecause: degradedBecause,
  };
}());
