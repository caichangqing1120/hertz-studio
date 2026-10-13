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
//
// GL 上下文丢失（GPU 进程重启/休眠唤醒/上下文被浏览器回收）时画布会变成
// 一张白板；three 自己监听 restored 可以自愈，但真实丢失里 restored 不一定
// 会来。这里与主 3D 舞台（stage3d.js onContextLost）同策略：宽限等原生
// 恢复，超时就换新画布重建，滑动窗口内限定尝试次数，用完预算发 failed
// 横幅事件，状态经 stage:scene-context CustomEvent 透传给 Stage3D。
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

  // —— GL 上下文丢失恢复（与 stage3d.js 主画布的恢复预算同语义）—— //
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
        { detail: { source: 'coast', state: state } }));
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
    try { CS().unmount(); } catch (_) { /* 死上下文上释放资源：three 会静默 */ }
    detachContextWatch();
    if (canvas) { canvas.remove(); canvas = null; }
    ok = mountInto(host);
    if (ok) {
      ctxLost = false;
      retries = 0;
      reason = null;
      emitCtx('recovered');
      return;
    }
    // 新画布仍起不来（GPU 还没回来）：退避再试，预算内不放弃。
    if (retries < RECOVERY_DELAYS.length) {
      retryTimer = setTimeout(rebuildAfterLoss, RECOVERY_DELAYS[retries]);
      retries += 1;
    } else {
      reason = '海岸舞台的图形上下文未能恢复，请切回沉浸声场或重新打开舞台';
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
      reason = '海岸舞台的图形上下文反复丢失，已停止自动恢复，请切回沉浸声场';
      emitCtx('failed');
      return;
    }
    recoveryAt.push(now);
    ctxLost = true;
    retries = 0;
    reason = '海岸舞台的图形上下文丢失，正在自动恢复';
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
    attachContextWatch();
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
        ctxLost = false;
        detachContextWatch();
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
      detachContextWatch();
      if (canvas) { canvas.remove(); canvas = null; }
      mounted = mountInto(host);
    }
  });

  window.StageCoast = {
    available: available,
    setHost: setHost,
    setPrefs: setPrefs,
    degradedBecause: degradedBecause,
    // 「三维空间」的机位下发（docs/design/space3d-mode.md §6.5）：透传引擎 setRig。
    // 引擎产物未重建（没有这个出口）时静默 —— 相机落回引擎自己的巡航。
    setRig: function (pose, opts) {
      if (mounted && CS() && typeof CS().setRig === 'function') CS().setRig(pose, opts);
    },
  };
}());
