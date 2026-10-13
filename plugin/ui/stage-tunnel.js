// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
//
// 「隧图 · 深空」歌词舞台适配层。职责边界（见 docs/superpowers/specs/
// 2026-10-13-tunnel-stage-design.md）：场景渲染全部在 vendor/tunnel-stage.js
// （TunnelStagePure，不感知宿主）；本文件负责一切 hertz-studio 集成 ——
// 挂载/卸载、播放时钟与歌词接驳（Stage.presentation/lyrics/lyricTokens/
// lyricTranslation）、频谱与起音（Stage.spectrum + Onset）、画质降档
// （stage:fps 只降不升）、reduced-motion、画布尺寸跟随。
//
// Stage3D 的调用面（与 StageDiorama 同构）：
//   StageTunnel.available()        入口置灰判断（探测 WebGL2，带缓存）
//   StageTunnel.setHost(el|null)   挂进宿主层 / 卸载；返回是否成功
//   StageTunnel.setPrefs(p)        { warp, objects, lyrics, palette } 即时生效
//   StageTunnel.degradedBecause()  最近一次挂载失败的原因，null 为可用
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
        { detail: { source: 'tunnel', state: state } }));
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
    try { TS().unmount(); } catch (_) { /* 死上下文上释放资源：three 会静默 */ }
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
    if (retries < RECOVERY_DELAYS.length) {
      retryTimer = setTimeout(rebuildAfterLoss, RECOVERY_DELAYS[retries]);
      retries += 1;
    } else {
      reason = '隧图舞台的图形上下文未能恢复，请切回沉浸声场或重新打开舞台';
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
      reason = '隧图舞台的图形上下文反复丢失，已停止自动恢复，请切回沉浸声场';
      emitCtx('failed');
      return;
    }
    recoveryAt.push(now);
    ctxLost = true;
    retries = 0;
    reason = '隧图舞台的图形上下文丢失，正在自动恢复';
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

  // 歌词接驳状态：按「曲签名」检测换曲/重新定位，一次性解析字素。
  var lyricSig = '';
  var lyricFailed = false;

  function TS() { return window.TunnelStagePure; }

  function available() {
    if (probeCache === null) probeCache = !!(TS() && TS().probe && TS().probe());
    return probeCache;
  }

  function degradedBecause() { return reason; }

  // —— 歌词 → 引擎载荷。行/字素/译文都在宿主侧解析，引擎只吃编制结果。 —— //
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
    var head = doc.lines[0];
    var tail = doc.lines[doc.lines.length - 1];
    var sig = 'l' + doc.lines.length + ':' + (head && head.start_ms) + ':' + (tail && tail.start_ms);
    return { v: 1, lines: lines, signature: sig };
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
      // 解析失败只静默跳过一次：引擎退化为纯世界（无词的深空），不刷错误。
      if (!lyricFailed) lyricFailed = true;
    } else {
      lyricFailed = false;
    }
    TS().setLyrics(payload);
  }

  // 每帧：读频谱 → 起音 → 推给引擎；播放时钟与歌词同步。
  function tick(now) {
    raf = requestAnimationFrame(tick);
    var dt = lastTick ? Math.min(now - lastTick, 100) : 0;
    lastTick = now;
    if (!mounted) return;
    var Stage = window.Stage;
    var spectrum = (Stage && Stage.spectrum && Stage.spectrum()) || null;
    // 静音/暂停时喂零谱，让能量自然回落到环境基线，而不是停在旧值。
    onset.step(dt || 16, spectrum && spectrum.length ? spectrum : ZEROS, now);
    TS().setAudio({ bands: spectrum, onset: onset.pulse > 0.45 });
    var present = Stage && Stage.presentation ? Stage.presentation() : null;
    TS().setTime({ time: present ? (present.position || 0) / 1000 : 0, playing: !!(present && present.playing) });
    syncLyrics();
    var w = host.clientWidth, h = host.clientHeight;
    if (w && h && (w !== lastW || h !== lastH)) {
      lastW = w; lastH = h;
      TS().resize(w, h);
    }
  }

  // onset.js 以 defer 先于本文件加载，这里一定拿得到；兜底桩保证缺依赖时
  // 也只是没有音频反应，而不是每帧抛错。
  var onset = window.Onset
    ? window.Onset.create({})
    : { step: function () {}, bins: ZEROS, energy: 0, pulse: 0, onBeat: function () {} };

  function mountInto(el) {
    var w = el.clientWidth || 640, h = el.clientHeight || 360;
    canvas = document.createElement('canvas');
    canvas.className = 'tunnel-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    el.appendChild(canvas);
    lastW = w; lastH = h;
    var ok = TS().mount(canvas, {
      quality: quality,
      reduced: window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      palette: currentPrefs.palette,
    });
    if (!ok) {
      canvas.remove();
      canvas = null;
      reason = '当前环境无法运行隧图舞台（需要 WebGL2）';
      return false;
    }
    reason = null;
    TS().resize(w, h);
    TS().setPrefs({
      warp: currentPrefs.warp, objects: currentPrefs.objects,
      palette: currentPrefs.palette,
    });
    lyricSig = '';
    syncLyrics();
    mounted = true;
    attachContextWatch();
    return true;
  }

  var currentPrefs = { warp: true, objects: true, palette: null };

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
        TS().unmount();
      }
      if (canvas) { canvas.remove(); canvas = null; }
      reason = null;
      return true;
    }
    if (!available()) {
      reason = '当前环境无法运行隧图舞台（需要 WebGL2）';
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
    if (typeof p.warp === 'boolean') currentPrefs.warp = p.warp;
    if (typeof p.objects === 'boolean') currentPrefs.objects = p.objects;
    if (p.palette) {
      currentPrefs.palette = {
        accent: p.palette.accentColor || p.palette.accent,
        secondary: p.palette.secondaryColor || p.palette.secondary,
        background: p.palette.backgroundColor || p.palette.background,
        ink: p.palette.primaryColor || p.palette.ink || '#f2f0e9',
        muted: p.palette.tertiaryColor || p.palette.muted,
      };
    }
    if (mounted) TS().setPrefs(currentPrefs);
  }

  // 舞台帧门测得吃不住（lowfx）就降到流畅档重建一次；之后不再回升级。
  document.addEventListener('stage:fps', function (e) {
    if (!e.detail || !e.detail.lowfx || downgraded || !mounted) return;
    downgraded = true;
    quality = 'low';
    if (host) {
      TS().unmount();
      detachContextWatch();
      if (canvas) { canvas.remove(); canvas = null; }
      mounted = mountInto(host);
    }
  });

  window.StageTunnel = {
    available: available,
    setHost: setHost,
    setPrefs: setPrefs,
    degradedBecause: degradedBecause,
  };
}());
