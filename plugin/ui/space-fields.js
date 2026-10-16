// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
//
// 「三维空间」沉浸粒子场渲染器（第二批，docs/design/space3d-mode.md §7.2）。
//
// 职责边界：GL 上下文、几何与后处理链在这里；场着色器**不是**本文件的 ——
// 全部经 Stage3D.shaderCatalog() 只读导出的源码字符串在本上下文里编译
//（一份着色器，一个 owner：着色器的 owner 是 stage3d.js）。宿主集成
//（帧门、音频、手势、歌词）在 space3d.js，本文件只吃 draw(dtMs, env)。
//
// 绘制语义与 stage3d 的 buildField/buildPrism/runPost 逐位同构：
//   · 场几何全部由 gl_VertexID 在顶点着色器推导（场 VAO 无属性），布局由
//     uField/uCols/uRows 驱动；星野与棱镜的种子走 aSeed/aLane 属性。
//   · 后处理链：HDR 场景 RT → 亮部提取（阈值 0.72 / 膝 0.26）→ 半分辨率
//     高斯 ping-pong（迭代数跟画质档）→ 曝光合成到默认帧缓冲。
//   · 上下文丢失走与海岸/星座适配层同一条恢复预算（宽限 + 退避重建 + 上限）。
//
// 零依赖、ES5、无构建。
(function () {
  'use strict';

  var global = window;
  function clamp(v, lo, hi) { return v < lo ? lo : (v > hi ? hi : v); }
  function num(v, d) { return typeof v === 'number' && isFinite(v) ? v : d; }

  var reason = null;
  var probeCache = null;
  var host = null, canvas = null, gl = null;
  var mounted = false, observer = null;
  // —— GL 资源 —— //
  var built = {};           // id -> { draw, dispose, count, kind }
  var stageId = null, curBuilt = null;
  var fsTri = null;
  var post = null;
  var bw = 1, bh = 1, dpr = 1, sizeDirty = true;
  var cssW = 1, cssH = 1;   // CSS 尺寸（场景着色器的 uRes 用它，不是 drawing buffer）
  var cat = null;           // shaderCatalog 快照（含 stage 描述符）
  var onCtx = null;         // 状态回调 (state) → space3d 的降级横幅
  var onPost = null, postReason = null, lastPostState = '';

  function postStatus() {
    return { available: !!(post && post.scene && post.effects && !post.effectsFailed && !ctxLost), reason: postReason };
  }
  function emitPost() {
    var state = postStatus(), key = JSON.stringify(state);
    if (key === lastPostState) return;
    lastPostState = key;
    if (onPost) { try { onPost(state); } catch (_) { /* UI callback must not interrupt drawing. */ } }
  }

  // —— 上下文丢失恢复（与 stage-coast.js 同一条预算语义）—— //
  var RECOVERY_GRACE_MS = 1500;
  var RECOVERY_DELAYS = [800, 1600, 3000];
  var RECOVERY_WINDOW_MS = 60000;
  var RECOVERY_MAX = 4;
  var ctxLost = false, graceTimer = 0, retryTimer = 0, retries = 0, recoveryAt = [];

  // —— 丝绸场的封面纹理（field 0）—— //
  var art = { tex: null, url: '', ready: false, sx: 1, sy: 1, lod: 0, img: null };
  // —— 色调（跟主题走，500ms 节流重读）—— //
  var tint = [1, 1, 1], tint2 = [0, 0.96, 0.83], tint3 = [0.96, 0.82, 0.54], tintAt = 0;

  function emitCtx(state) {
    if (onCtx) { try { onCtx(state); } catch (_) { /* 回调异常不影响渲染 */ } }
  }
  function clearRecoveryTimers() {
    if (graceTimer) { clearTimeout(graceTimer); graceTimer = 0; }
    if (retryTimer) { clearTimeout(retryTimer); retryTimer = 0; }
  }
  function onContextLost(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (ctxLost || !mounted || !host) return;
    var now = Date.now();
    recoveryAt = recoveryAt.filter(function (t) { return now - t < RECOVERY_WINDOW_MS; });
    if (recoveryAt.length >= RECOVERY_MAX) {
      ctxLost = true;
      emitPost();
      reason = '粒子场的图形上下文反复丢失，已停止自动恢复';
      emitCtx('failed');
      return;
    }
    recoveryAt.push(now);
    ctxLost = true;
    emitPost();
    retries = 0;
    reason = '粒子场的图形上下文丢失，正在自动恢复';
    emitCtx('lost');
    graceTimer = setTimeout(rebuildAfterLoss, RECOVERY_GRACE_MS);
  }
  function onContextRestored() {
    if (!ctxLost) return;
    clearRecoveryTimers();
    disposeAll(true);
    resize();
    if (!buildPost() || !setStage(stageId || 'silk')) {
      reason = '图形资源未能恢复，请重新打开空间'; emitCtx('failed'); return;
    }
    observer = new ResizeObserver(function () { sizeDirty = true; }); observer.observe(host);
    ctxLost = false;
    emitPost();
    retries = 0;
    reason = null;
    emitCtx('recovered');
  }
  function rebuildAfterLoss() {
    graceTimer = 0;
    if (!ctxLost || !host) return;
    var ok = false;
    releaseContext();
    ok = mountInto(host);
    if (ok) ok = setStage(stageId || 'silk');
    if (ok) {
      ctxLost = false; retries = 0; reason = null;
      emitPost();
      emitCtx('recovered');
      return;
    }
    if (retries < RECOVERY_DELAYS.length) {
      retryTimer = setTimeout(rebuildAfterLoss, RECOVERY_DELAYS[retries]);
      retries += 1;
    } else {
      reason = '粒子场的图形上下文未能恢复';
      emitCtx('failed');
    }
  }
  function attachWatch() {
    if (!canvas) return;
    canvas.addEventListener('webglcontextlost', onContextLost, false);
    canvas.addEventListener('webglcontextrestored', onContextRestored, false);
  }
  function detachWatch() {
    if (!canvas) return;
    canvas.removeEventListener('webglcontextlost', onContextLost);
    canvas.removeEventListener('webglcontextrestored', onContextRestored);
    clearRecoveryTimers();
  }

  // -------------------------------------------------------------------------
  // GL 基础（与 stage3d 同构；编译报错带出错行源码）
  // -------------------------------------------------------------------------
  function compile(type, src) {
    var sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      var log = String(gl.getShaderInfoLog(sh) || '');
      var m = /ERROR:\s*\d+:(\d+)/.exec(log);
      if (m) {
        var n = Number(m[1]);
        var lines = src.split('\n');
        for (var i = Math.max(0, n - 2); i < Math.min(lines.length, n + 1); i += 1) {
          log += '\n  ' + (i + 1) + (i + 1 === n ? ' → ' : '   ') + lines[i];
        }
      }
      console.warn('[space-fields] 着色器编译失败：', log);
      gl.deleteShader(sh);
      return null;
    }
    return sh;
  }
  function buildProgram(vsSrc, fsSrc) {
    var v = compile(gl.VERTEX_SHADER, vsSrc);
    var f = compile(gl.FRAGMENT_SHADER, fsSrc);
    if (!v || !f) { if (v) gl.deleteShader(v); if (f) gl.deleteShader(f); return null; }
    var p = gl.createProgram();
    gl.attachShader(p, v); gl.attachShader(p, f);
    gl.linkProgram(p);
    gl.deleteShader(v); gl.deleteShader(f);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
      console.warn('[space-fields] 着色器链接失败：', gl.getProgramInfoLog(p));
      gl.deleteProgram(p);
      return null;
    }
    var u = {};
    var n = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS);
    for (var i = 0; i < n; i += 1) {
      var info = gl.getActiveUniform(p, i);
      if (!info) continue;
      u[String(info.name).replace(/\[0\]$/, '')] = gl.getUniformLocation(p, String(info.name).replace(/\[0\]$/, ''));
    }
    return { p: p, u: u, a: function (n2) { return gl.getAttribLocation(p, n2); } };
  }
  function buffer(data) {
    var b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, b);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
    return b;
  }
  function makeVAO(attribs) {
    var v = gl.createVertexArray();
    gl.bindVertexArray(v);
    for (var i = 0; i < attribs.length; i += 1) {
      var s = attribs[i];
      if (s.loc < 0) continue;
      gl.bindBuffer(gl.ARRAY_BUFFER, s.buffer);
      gl.enableVertexAttribArray(s.loc);
      gl.vertexAttribPointer(s.loc, s.size, gl.FLOAT, false, 0, 0);
    }
    gl.bindVertexArray(null);
    return v;
  }
  function makeRT(w, h, withDepth) {
    var tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, post.internalFmt, w, h, 0, gl.RGBA, post.texType, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    var fbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
    var depth = null;
    if (withDepth) {
      depth = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, depth);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.DEPTH_COMPONENT24, w, h, 0, gl.DEPTH_COMPONENT, gl.UNSIGNED_INT, null);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, depth, 0);
    }
    var complete = gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    var target = { fbo: fbo, tex: tex, depth: depth, w: w, h: h };
    if (!complete) { freeRT(target); return null; }
    return target;
  }
  function freeRT(rt) {
    if (!rt) return;
    if (rt.fbo) gl.deleteFramebuffer(rt.fbo);
    if (rt.tex) gl.deleteTexture(rt.tex);
    if (rt.depth) gl.deleteTexture(rt.depth);
  }

  // —— mat4（最小集：perspective + lookAt；本层 roll 恒 0 不需要 rollView）—— //
  function mat4() { return new Float32Array(16); }
  function perspective(out, fovy, aspect, near, far) {
    var f = 1 / Math.tan(fovy / 2), nf = 1 / (near - far);
    out[0] = f / aspect; out[1] = 0; out[2] = 0; out[3] = 0;
    out[4] = 0; out[5] = f; out[6] = 0; out[7] = 0;
    out[8] = 0; out[9] = 0; out[10] = (far + near) * nf; out[11] = -1;
    out[12] = 0; out[13] = 0; out[14] = 2 * far * near * nf; out[15] = 0;
    return out;
  }
  function lookAt(out, ex, ey, ez, cx, cy, cz) {
    var zx = ex - cx, zy = ey - cy, zz = ez - cz;
    var zl = Math.sqrt(zx * zx + zy * zy + zz * zz) || 1;
    zx /= zl; zy /= zl; zz /= zl;
    // up 固定 (0,1,0)
    var xx = zz, xy = 0, xz = -zx;           // up × z
    var xl = Math.sqrt(xx * xx + xy * xy + xz * xz) || 1;
    xx /= xl; xy /= xl; xz /= xl;
    var yx = zy * xz - zz * xy, yy = zz * xx - zx * xz, yz = zx * xy - zy * xx;
    out[0] = xx; out[1] = yx; out[2] = zx; out[3] = 0;
    out[4] = xy; out[5] = yy; out[6] = zy; out[7] = 0;
    out[8] = xz; out[9] = yz; out[10] = zz; out[11] = 0;
    out[12] = -(xx * ex + xy * ey + xz * ez);
    out[13] = -(yx * ex + yy * ey + yz * ez);
    out[14] = -(zx * ex + zy * ey + zz * ez);
    out[15] = 1;
    return out;
  }

  function setF(u, name, v) { var l = u[name]; if (l) gl.uniform1f(l, v); }
  function setI(u, name, v) { var l = u[name]; if (l) gl.uniform1i(l, v); }
  function setV2(u, name, a, b) { var l = u[name]; if (l) gl.uniform2f(l, a, b); }
  function setV3(u, name, a) { var l = u[name]; if (l) gl.uniform3f(l, a[0], a[1], a[2]); }
  function setM4(u, name, m) { var l = u[name]; if (l) gl.uniformMatrix4fv(l, false, m); }

  function seeds(count) {
    var a = new Float32Array(count);
    var b = new Float32Array(count);
    for (var i = 0; i < count; i += 1) {
      a[i] = Math.random() * 1000 + i * 0.37;
      b[i] = Math.random();
    }
    return { seed: buffer(a), lane: buffer(b), count: count };
  }

  // 画质档：与 stage3d 同源（Stage.tier + lowfx），运行期只降不升交给 stage:fps。
  var downgraded = false;
  function level() {
    if (downgraded) return 0;
    var t = (global.Stage && Stage.tier) ? Stage.tier() : 2;
    if (global.Stage && Stage.isLowFx && Stage.isLowFx()) t = 0;
    return clamp(num(t, 2), 0, 2);
  }
  document.addEventListener('stage:fps', function (e) {
    if (!e.detail || !e.detail.lowfx || downgraded || !mounted) return;
    downgraded = true;
    rebuildAll();
  });

  function rebuildAll() {
    if (!gl) return;
    disposeStages();
    disposePost();
    buildPost();
    if (stageId) { var want = stageId; stageId = null; setStage(want); }
    sizeDirty = true;
  }

  // -------------------------------------------------------------------------
  // 场构建（描述符来自 shaderCatalog.stages）
  // -------------------------------------------------------------------------
  function defById(id) {
    if (!cat) return null;
    for (var i = 0; i < cat.stages.length; i += 1) if (cat.stages[i].id === id) return cat.stages[i];
    return null;
  }
  function buildFieldStage(def) {
    var p = buildProgram(cat.field.vs, cat.field.fs);
    var starP = buildProgram(cat.star.vs, cat.star.fs);
    if (!p || !starP) { if (p) gl.deleteProgram(p.p); if (starP) gl.deleteProgram(starP.p); return null; }
    var lv = level(), count = def.counts[lv];
    var cols = Math.ceil(Math.sqrt(count * 1.24));
    var rows = Math.floor(count / cols);
    if (def.field === 4) { cols = [180, 280, 360][lv]; rows = Math.floor(count / cols / 7) * 7; }
    count = cols * rows;
    var vao = gl.createVertexArray();   // 场几何无属性：位置全部由 gl_VertexID 推导
    var stars = seeds([900, 1500, 2400][lv]);
    var starVao = makeVAO([
      { loc: starP.a('aSeed'), buffer: stars.seed, size: 1 },
      { loc: starP.a('aLane'), buffer: stars.lane, size: 1 }
    ]);
    var disposed = false;
    art.tex = art.tex || makeArtTex();
    return {
      kind: 'field',
      writesDepth: def.field === 0,
      def: def,
      count: count,
      draw: function (env) {
        syncArt(def, count);
        if (def.field === 0) {
          gl.disable(gl.DEPTH_TEST); gl.depthMask(false);
          gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
        }
        gl.useProgram(starP.p); uploadCommon(starP, env); gl.bindVertexArray(starVao);
        gl.drawArrays(gl.POINTS, 0, stars.count);
        if (def.field === 0) {
          gl.enable(gl.DEPTH_TEST); gl.depthMask(true);
          gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        }
        gl.useProgram(p.p); uploadCommon(p, env); gl.bindVertexArray(vao);
        setI(p.u, 'uField', def.field); setF(p.u, 'uCols', cols); setF(p.u, 'uRows', rows);
        setI(p.u, 'uArt', 0); setF(p.u, 'uHasArt', art.ready ? 1 : 0);
        gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, art.tex);
        if (p.u.uBands) gl.uniform1fv(p.u.uBands, env.audio.bands);
        var reduced = env.reduced;
        if (def.field === 0) {
          setF(p.u, 'uCoverMotion', reduced ? 0 : env.motion);
          setF(p.u, 'uCoverDistance', def.cam.dist * Math.max(1, Math.min(2.6, 1.05 / (bw / bh))));
          setF(p.u, 'uViewportHeight', bh);
          setV2(p.u, 'uArtScale', art.sx, art.sy); setF(p.u, 'uArtLod', art.lod);
        }
        setV2(p.u, 'uPointer', env.pointer.x, env.pointer.y);
        setF(p.u, 'uPointerActive', reduced ? 0 : env.pointer.active);
        setF(p.u, 'uBeatAge', reduced ? 100 : env.beatAge);
        setF(p.u, 'uAspect', bw / bh);
        if (p.u.uClick) gl.uniform3f(p.u.uClick, env.pointer.clickX, env.pointer.clickY, reduced ? 100 : env.pointer.clickAge);
        gl.drawArrays(gl.POINTS, 0, count);
      },
      dispose: function () {
        disposed = true;
        if (art.img) { art.img.onload = null; art.img.onerror = null; }
        gl.deleteProgram(p.p); gl.deleteProgram(starP.p);
        gl.deleteVertexArray(vao); gl.deleteVertexArray(starVao);
        gl.deleteBuffer(stars.seed); gl.deleteBuffer(stars.lane);
      }
    };
  }
  function buildPrismStage(def) {
    var prog = buildProgram(cat.prism.vs, cat.prism.fs);
    if (!prog) return null;
    var s = seeds(def.counts[level()]);
    var vao = makeVAO([
      { loc: prog.a('aSeed'), buffer: s.seed, size: 1 },
      { loc: prog.a('aLane'), buffer: s.lane, size: 1 }
    ]);
    return {
      kind: 'field',
      def: def,
      count: s.count,
      draw: function (env) {
        gl.useProgram(prog.p);
        uploadCommon(prog, env);
        gl.bindVertexArray(vao);
        gl.drawArrays(gl.POINTS, 0, s.count);
      },
      dispose: function () {
        gl.deleteProgram(prog.p); gl.deleteVertexArray(vao);
        gl.deleteBuffer(s.seed); gl.deleteBuffer(s.lane);
      }
    };
  }
  function buildBlankStage() {
    return { kind: 'blank', def: null, count: 0, draw: function () {}, dispose: function () {} };
  }

  // -------------------------------------------------------------------------
  // 创意场景路径（towers/nebula…，第二批 §7.2）
  // 着色器与场景语义都是 creative-gl 的（sceneSource/sceneRig 只读出口）；
  // 这里只做：程序装配、64×2 R8 频谱纹理、相机映射与绘制编排。
  // -------------------------------------------------------------------------
  function buildSceneStage(id) {
    var baseId = id.slice(6);
    var src = global.CreativeGL && CreativeGL.sceneSource ? CreativeGL.sceneSource(baseId) : null;
    var rig = global.CreativeGL && CreativeGL.sceneRig ? CreativeGL.sceneRig(baseId) : null;
    if (!src || !rig) return null;
    var cache = {};
    function programFor(q) {
      if (cache[q]) return cache[q];
      var qualityDefs = rig.qualityDefs ? rig.qualityDefs(q) : '';
      // 装配式与 creative-gl sceneProgram 逐字同构：decl 同时前置到两个阶段。
      var e = buildProgram(
        '#version 300 es\n' + qualityDefs + src.common + src.decl + src.vert,
        '#version 300 es\n' + src.common + src.decl + src.frag);
      if (!e) throw new Error('scene program 编译失败 ' + baseId);
      cache[q] = e;
      return e;
    }
    var identity = mat4(); identity[0] = identity[5] = identity[10] = identity[15] = 1;
    var mirrorMat = mat4(); mirrorMat[0] = 1; mirrorMat[5] = -1; mirrorMat[10] = 1; mirrorMat[15] = 1;
    var eng = { mirrorMat: mirrorMat, identity: identity };
    var S = { p: rig.defaults, quality: level() };
    // 首编就在构建期完成：编译失败在这里变成挂载失败（降级横幅），而不是
    // 一帧一场地往共享帧门里抛异常。
    try { programFor(S.quality); } catch (e) {
      reason = '场景着色器编译失败：' + String(e.message || e);
      return null;
    }
    var drawFailed = false;
    var sceneVao = gl.createVertexArray();
    return {
      kind: 'scene',
      writesDepth: !!rig.depth && rig.blend === 'surface',
      def: null,
      rig: rig,
      count: rig.geom.instances,
      draw: function (env) {
        if (drawFailed) return false;
        try {
          var q = level();
          S.quality = q;
        var g = rig.geometry(q);
        gl.depthFunc(gl.LEQUAL);
        if (rig.depth) { gl.enable(gl.DEPTH_TEST); } else { gl.disable(gl.DEPTH_TEST); }
        gl.clearColor(0, 0, 0, 0);
        gl.depthMask(true);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        var e = programFor(q);
        gl.useProgram(e.p);
        gl.bindVertexArray(sceneVao);
        var U = e.u;
        bindSceneCommon(U, env);
        if (rig.ownsLyrics) {
          uploadLyric(env.lyric);
          if (!env.lyrics) return;
        }
        if (rig.setup) rig.setup(gl, U, S);
        // 实体表面正常遮挡；光点做加性混合（creative render 同一约定）。
        var surface = rig.blend === 'surface';
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, surface ? gl.ONE_MINUS_SRC_ALPHA : gl.ONE);
        gl.depthMask(surface);
        var mode = gl[g.mode];
        function drawIt() {
          if (g.instances > 1) gl.drawArraysInstanced(mode, 0, g.verts, g.instances);
          else gl.drawArrays(mode, 0, g.verts);
        }
        drawIt();
        if (rig.extraPasses) rig.extraPasses(gl, U, S, eng, drawIt);
        gl.depthMask(true);
        gl.disable(gl.DEPTH_TEST);
        } catch (e) {
          // 单帧失败不许穿进共享帧门：记一次原因、本场景停画（stats.frames 停摆可见）。
          drawFailed = true;
          reason = '场景渲染失败：' + String(e.message || e);
          emitCtx('failed');
          try { console.warn('[space-fields]', reason); } catch (_) { /* ignore */ }
          gl.depthMask(true);
          gl.disable(gl.DEPTH_TEST);
          return false;
        }
      },
      dispose: function () {
        Object.keys(cache).forEach(function (k) { gl.deleteProgram(cache[k].p); });
        gl.deleteVertexArray(sceneVao);
      }
    };
  }
  // 64×2 R8 频谱纹理：v=0.25 平滑带、v=0.75 起音差（creative-gl 的约定）。
  var specTex = null, specPixels = null;
  function ensureSpecTex() {
    if (specTex) return;
    specTex = gl.createTexture();
    specPixels = new Uint8Array(128);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, specTex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.R8, 64, 2, 0, gl.RED, gl.UNSIGNED_BYTE, specPixels);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  }
  function uploadSpectrum(bands, rises) {
    ensureSpecTex();
    for (var i = 0; i < 64; i += 1) {
      specPixels[i] = Math.max(0, Math.min(255, (bands[i] || 0) * 255)) | 0;
      specPixels[64 + i] = Math.max(0, Math.min(255, (rises[i] || 0) * 255)) | 0;
    }
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, specTex);
    gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, 64, 2, gl.RED, gl.UNSIGNED_BYTE, specPixels);
  }
  var lyricTex = null, lyricSig = null, atlasW = 0, atlasH = 0;
  function uploadLyric(lyric) {
    if (!global.Lyric3D) return;
    Lyric3D.setQuality(level());
    var size = Lyric3D.size(), sig = Lyric3D.sig(lyric);
    var resized = size.w !== atlasW || size.h !== atlasH;
    var changed = resized || sig !== lyricSig || !lyricTex;
    if (!lyricTex) lyricTex = gl.createTexture();
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, lyricTex);
    if (changed) {
      Lyric3D.frame(lyric, true);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, Lyric3D.canvas);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      atlasW = size.w; atlasH = size.h; lyricSig = sig;
    }
    gl.activeTexture(gl.TEXTURE0);
  }
  var viewProj = mat4();
  function mul(out, a, b) {
    for (var c = 0; c < 4; c += 1) {
      var b0 = b[c * 4], b1 = b[c * 4 + 1], b2 = b[c * 4 + 2], b3 = b[c * 4 + 3];
      out[c * 4] = a[0] * b0 + a[4] * b1 + a[8] * b2 + a[12] * b3;
      out[c * 4 + 1] = a[1] * b0 + a[5] * b1 + a[9] * b2 + a[13] * b3;
      out[c * 4 + 2] = a[2] * b0 + a[6] * b1 + a[10] * b2 + a[14] * b3;
      out[c * 4 + 3] = a[3] * b0 + a[7] * b1 + a[11] * b2 + a[15] * b3;
    }
    return out;
  }
  function bindSceneCommon(U, env) {
    uploadSpectrum(env.audio.bands, env.rises);
    setM4(U, 'uViewProj', viewProj);
    setM4(U, 'uModel', identityM);
    setV3(U, 'uCamPos', camPos);
    setF(U, 'uTime', env.timeSec);
    setF(U, 'uSeed', 0.37);
    setI(U, 'uSpec', 0);
    if (U.uAgg) gl.uniform4f(U.uAgg, env.agg[0], env.agg[1], env.agg[2], env.agg[3]);
    setF(U, 'uPulse', env.pulse);
    setF(U, 'uEnergy', env.audio.energy);
    setF(U, 'uPlay', env.playing ? 1 : 0);
    setF(U, 'uToon', 0);
    setV2(U, 'uRes', cssW, cssH);
    setV3(U, 'uColorA', tint2);
    setV3(U, 'uColorB', tint3);
  }
  var identityM = (function () { var m = mat4(); m[0] = m[5] = m[10] = m[15] = 1; return m; })();
  function makeArtTex() {
    var t = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, t);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([48, 76, 96, 255]));
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    return t;
  }
  function syncArt(def, count) {
    if (def.field !== 0) return;
    var url = global.Stage && Stage.coverUrl ? Stage.coverUrl() || '' : '';
    if (url === art.url) return;
    art.url = url; art.ready = false; art.sx = art.sy = 1; art.lod = 0;
    if (art.img) { art.img.onload = null; art.img.onerror = null; }
    if (!url) return;
    var img = art.img = new Image(); img.crossOrigin = 'anonymous';
    img.onload = function () {
      if (disposedGuard() || !gl || gl.isContextLost() || url !== art.url || img !== art.img) return;
      try {
        gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, art.tex);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
        gl.generateMipmap(gl.TEXTURE_2D);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
        var width = img.naturalWidth || img.width || 1, height = img.naturalHeight || img.height || 1;
        art.sx = Math.min(1, height / width); art.sy = Math.min(1, width / height);
        art.lod = Math.max(0, Math.log(Math.min(width, height) * 0.5 * Math.sqrt(Math.PI / Math.floor(count * 0.76))) / Math.LN2);
        art.ready = true;
      } catch (e) { art.ready = false; }
      finally { gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false); }
    };
    var resolved = (global.HertzCovers && HertzCovers.resolve) ? HertzCovers.resolve(url) : Promise.resolve(url);
    resolved.then(function (r) {
      if (!r || url !== art.url || img !== art.img) return;
      img.src = r;
    });
  }
  function disposedGuard() { return !mounted; }

  // -------------------------------------------------------------------------
  // 后处理链
  // -------------------------------------------------------------------------
  function buildPost() {
    var hdr = !!gl.getExtension('EXT_color_buffer_float') ||
      !!gl.getExtension('EXT_color_buffer_half_float');
    var bright = buildProgram(cat.post.vs, cat.post.bright);
    var blur = buildProgram(cat.post.vs, cat.post.blur);
    var comp = buildProgram(cat.post.vs, cat.post.composite);
    if (!bright || !blur || !comp) {
      [bright, blur, comp].forEach(function (p) { if (p) gl.deleteProgram(p.p); });
      return false;
    }
    post = {
      hdr: hdr,
      internalFmt: hdr ? gl.RGBA16F : gl.RGBA,
      texType: hdr ? gl.HALF_FLOAT : gl.UNSIGNED_BYTE,
      bright: bright, blur: blur, comp: comp
    };
    if (global.SpacePost) post.effects = buildProgram(SpacePost.vertex, SpacePost.fragment);
    postReason = post.effects ? null : '画面滤镜着色器不可用';
    // 全屏大三角形
    var tri = buffer(new Float32Array([-1, -1, 3, -1, -1, 3]));
    fsTri = makeVAO([{ loc: bright.a('aPos'), buffer: tri, size: 2 }]);
    post.tri = tri;
    resizeTargets();
    emitPost();
    return !!post.scene;
  }
  function resizeTargets() {
    if (!post) return;
    var hw = Math.max(1, bw >> 1), hh = Math.max(1, bh >> 1);
    if (post.scene && post.scene.w === bw && post.scene.h === bh) return;
    freeRT(post.scene); freeRT(post.a); freeRT(post.b); freeRT(post.composed);
    post.composed = null; post.effectsFailed = false;
    if (post.effects) postReason = null;
    post.scene = makeRT(bw, bh, true);
    post.a = makeRT(hw, hh, false);
    post.b = makeRT(hw, hh, false);
    if (!post.scene || !post.a || !post.b) {
      freeRT(post.scene); freeRT(post.a); freeRT(post.b);
      post.scene = post.a = post.b = null;
      if (post.hdr) {
        post.hdr = false;
        post.internalFmt = gl.RGBA;
        post.texType = gl.UNSIGNED_BYTE;
        resizeTargets();
      } else { reason = '当前设备无法分配粒子场画面'; }
    }
    emitPost();
  }
  function drawFullscreen(prog) {
    gl.useProgram(prog.p);
    gl.bindVertexArray(fsTri);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }
  function runPost(env) {
    if (!post || !post.scene) return;
    var hw = post.a.w, hh = post.a.h;
    gl.disable(gl.DEPTH_TEST); gl.disable(gl.BLEND); gl.disable(gl.CULL_FACE);
    gl.bindFramebuffer(gl.FRAMEBUFFER, post.a.fbo);
    gl.viewport(0, 0, hw, hh);
    gl.useProgram(post.bright.p);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, post.scene.tex);
    setI(post.bright.u, 'uTex', 0);
    setF(post.bright.u, 'uThreshold', 0.72);
    setF(post.bright.u, 'uKnee', 0.26);
    drawFullscreen(post.bright);
    var lv = level();
    var iters = lv === 0 ? 1 : (lv === 1 ? 2 : 3);
    gl.useProgram(post.blur.p);
    setI(post.blur.u, 'uTex', 0);
    for (var i = 0; i < iters; i += 1) {
      var spread = 1 + i * 1.15;
      gl.bindFramebuffer(gl.FRAMEBUFFER, post.b.fbo);
      gl.bindTexture(gl.TEXTURE_2D, post.a.tex);
      setV2(post.blur.u, 'uStep', spread / hw, 0);
      drawFullscreen(post.blur);
      gl.bindFramebuffer(gl.FRAMEBUFFER, post.a.fbo);
      gl.bindTexture(gl.TEXTURE_2D, post.b.tex);
      setV2(post.blur.u, 'uStep', 0, spread / hh);
      drawFullscreen(post.blur);
    }
    var effects = !post.effectsFailed && post.effects && global.SpacePost && SpacePost.active(env.post);
    if (effects && !post.composed) {
      post.composed = makeRT(bw, bh, false);
      if (!post.composed) { post.effectsFailed = true; postReason = '画面滤镜暂不可用'; emitPost(); }
    }
    effects = effects && !!post.composed;
    gl.bindFramebuffer(gl.FRAMEBUFFER, effects ? post.composed.fbo : null);
    gl.viewport(0, 0, bw, bh);
    gl.useProgram(post.comp.p);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, post.scene.tex);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, post.a.tex);
    setI(post.comp.u, 'uScene', 0);
    setI(post.comp.u, 'uBloom', 1);
    setV2(post.comp.u, 'uRes', bw, bh);
    setF(post.comp.u, 'uTime', env.timeSec);
    setF(post.comp.u, 'uBeat', env.audio.beat);
    setF(post.comp.u, 'uBloomAmt', env.bloom * (lv === 0 ? 0.7 : 1.05));
    setF(post.comp.u, 'uVignette', 0.62);
    setF(post.comp.u, 'uGrain', 0.028);
    setF(post.comp.u, 'uChroma', 0.16 + env.audio.beat * 0.25);
    setF(post.comp.u, 'uExposure', post.hdr ? 1.18 : 1.42);
    setF(post.comp.u, 'uFade', env.fade);
    drawFullscreen(post.comp);
    if (effects) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.useProgram(post.effects.p);
      gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, post.composed.tex);
      gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, post.scene.depth);
      SpacePost.bind(gl, post.effects.u, env.post, {
        width: bw, height: bh, timeSec: env.timeSec, quality: lv,
        reducedMotion: env.reduced, hasDepth: !!post.scene.depth && !!curBuilt.writesDepth,
        near: 0.1, far: curBuilt.kind === 'scene' ? 400 : 220,
        focusDistance: env.pose.radius || 8, focusRange: 6
      });
      drawFullscreen(post.effects);
    }
    gl.activeTexture(gl.TEXTURE0);
  }

  // -------------------------------------------------------------------------
  // 每帧绘制
  // -------------------------------------------------------------------------
  var proj = mat4(), view = mat4(), camPos = [0, 0, 8.4];
  function uploadCommon(prog, env) {
    setM4(prog.u, 'uProj', proj);
    setM4(prog.u, 'uView', view);
    setV3(prog.u, 'uCamPos', camPos);
    setF(prog.u, 'uTime', env.timeSec);
    setF(prog.u, 'uBass', env.audio.bass);
    setF(prog.u, 'uMid', env.audio.mid);
    setF(prog.u, 'uTreble', env.audio.treble);
    setF(prog.u, 'uEnergy', env.audio.energy);
    setF(prog.u, 'uBeat', env.audio.beat);
    setF(prog.u, 'uScatter', env.transition.scatter);
    setF(prog.u, 'uBurst', env.transition.burst);
    setF(prog.u, 'uPointScale', dpr);
    setF(prog.u, 'uFade', env.fade);
    setV3(prog.u, 'uTint', tint);
    setV3(prog.u, 'uTint2', tint2);
    setV3(prog.u, 'uTint3', tint3);
  }
  function readTint(now) {
    if (now - tintAt < 500) return;
    tintAt = now;
    var cs = getComputedStyle(document.documentElement);
    tint = parseColor(cs.getPropertyValue('--accent'), [1, 1, 1]);
    tint2 = parseColor(cs.getPropertyValue('--accent-2'), [0, 0.96, 0.83]);
    tint3 = parseColor(cs.getPropertyValue('--music-highlight') ||
      cs.getPropertyValue('--accent-2'), [0.96, 0.82, 0.54]);
  }
  function parseColor(raw, fallback) {
    var m = /rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/.exec(String(raw || ''));
    if (m) return [Number(m[1]) / 255, Number(m[2]) / 255, Number(m[3]) / 255];
    var hex = /^#([0-9a-f]{6})$/i.exec(String(raw || '').trim());
    if (hex) {
      var v = parseInt(hex[1], 16);
      return [((v >> 16) & 255) / 255, ((v >> 8) & 255) / 255, (v & 255) / 255];
    }
    return fallback;
  }
  function computeDpr(w, h) {
    var dev = window.devicePixelRatio || 1;
    var lv = level();
    var cap = lv === 0 ? 1.0 : (lv === 1 ? 1.15 : 1.55);
    var budget = lv === 0 ? 1900000 : (lv === 1 ? 3600000 : 6200000);
    var budgetCap = Math.sqrt(budget / Math.max(1, w * h));
    var maxSize = gl ? Math.min(gl.getParameter(gl.MAX_TEXTURE_SIZE), gl.getParameter(gl.MAX_RENDERBUFFER_SIZE)) : Infinity;
    return Math.min(dev, cap, budgetCap, maxSize / Math.max(w, h));
  }
  function resize() {
    if (!gl || !host) return;
    var w = Math.max(1, Math.round(host.clientWidth || window.innerWidth));
    var h = Math.max(1, Math.round(host.clientHeight || window.innerHeight));
    cssW = w; cssH = h;
    dpr = computeDpr(w, h);
    var nw = Math.max(1, Math.floor(w * dpr));
    var nh = Math.max(1, Math.floor(h * dpr));
    if (canvas.width !== nw || canvas.height !== nh) { canvas.width = nw; canvas.height = nh; }
    bw = canvas.width; bh = canvas.height;
    resizeTargets();
    sizeDirty = false;
  }

  var lastStats = { stage: null, count: 0, frames: 0 };
  var lastEnv = null;
  function draw(dtMs, env) {
    if (!gl || ctxLost || !curBuilt) return false;
    void dtMs;
    lastEnv = env;
    readTint(performance.now());
    if (sizeDirty) resize();
    var pose = env.pose;
    var look = pose.lookAt || [0, 0, 0];
    var aspect = bw / Math.max(1, bh);
    gl.bindFramebuffer(gl.FRAMEBUFFER, post && post.scene ? post.scene.fbo : null);
    gl.viewport(0, 0, bw, bh);
    if (curBuilt.kind === 'blank') {
      gl.clearColor(0.004, 0.005, 0.009, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
    } else if (curBuilt.kind === 'scene') {
      // 创意场景：深度/混合/清屏由场景自己的描述符管（creative render 同构）。
      if (pose.free) freeCamera(pose, aspect, 400);
      else sceneCamera(pose, aspect);
      if (curBuilt.draw(env) === false) return false;
    } else {
      // 场路径：blend/depth 来自场描述符（stage3d drawStage 同构）——丝滑星球
      // 之前靠自己的内部分支侥幸正确，其它加性场在这里统一设态。
      var fdef = curBuilt.def;
      if (fdef && fdef.additive) { gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA, gl.ONE); }
      else { gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA); }
      if (fdef && fdef.depth) { gl.enable(gl.DEPTH_TEST); gl.depthMask(true); }
      else { gl.disable(gl.DEPTH_TEST); gl.depthMask(false); }
      var fit = fdef && fdef.framed ? Math.max(1, Math.min(2.6, 1.05 / aspect)) : 1;
      if (pose.free) freeCamera(pose, aspect, 220);
      else orbitCamera(pose, look, pose.radius * fit, aspect);
      gl.clearColor(0.004, 0.005, 0.009, 1);
      gl.depthMask(true);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      if (!fdef || !fdef.depth) gl.depthMask(false);
      curBuilt.draw(env);
    }
    runPost(env);
    lastStats.frames += 1;
    return true;
  }
  // orbit 相机：球坐标 → 看向注视点（stage3d updateCamera 的几何段）。
  function orbitCamera(pose, look, radius, aspect) {
    var cp = Math.cos(pose.phi), sp = Math.sin(pose.phi);
    var ct = Math.cos(pose.theta), st = Math.sin(pose.theta);
    camPos = [
      look[0] + radius * cp * st,
      look[1] + radius * sp,
      look[2] + radius * cp * ct
    ];
    perspective(proj, pose.fov * Math.PI / 180, aspect, 0.1, 220);
    lookAt(view, camPos[0], camPos[1], camPos[2], look[0], look[1], look[2]);
  }
  // 创意场景相机：creative-gl render 的装配式（framedDist 1.25/aspect、far 400、
  // yaw/pitch 弧度、注视点 t）。uViewProj 供 bindSceneCommon 上传。
  function sceneCamera(pose, aspect) {
    var yaw = pose.theta, pitch = pose.phi, t = pose.lookAt || [0, 0, 0];
    var framedDist = pose.radius * Math.max(1, 1.25 / aspect);
    var cp = Math.cos(pitch), sp = Math.sin(pitch);
    camPos = [
      t[0] + Math.sin(yaw) * cp * framedDist,
      t[1] + sp * framedDist,
      t[2] + Math.cos(yaw) * cp * framedDist
    ];
    perspective(proj, pose.fov * Math.PI / 180, aspect, 0.1, 400);
    lookAt(view, camPos[0], camPos[1], camPos[2], t[0], t[1], t[2]);
    mul(viewProj, proj, view);
  }

  function freeCamera(pose, aspect, far) {
    camPos = pose.position.slice();
    var cy = Math.cos(pose.yaw), sy = Math.sin(pose.yaw);
    var cp = Math.cos(pose.pitch), sp = Math.sin(pose.pitch);
    lookAt(view, camPos[0], camPos[1], camPos[2], camPos[0] - sy * cp,
      camPos[1] + sp, camPos[2] - cy * cp);
    var cr = Math.cos(pose.roll || 0), sr = Math.sin(pose.roll || 0);
    for (var i = 0; i < 4; i += 1) {
      var x = view[i * 4], y = view[i * 4 + 1];
      view[i * 4] = cr * x + sr * y;
      view[i * 4 + 1] = -sr * x + cr * y;
    }
    perspective(proj, pose.fov * Math.PI / 180, aspect, 0.1, far);
    mul(viewProj, proj, view);
  }

  // 检查口：同步渲一帧并返回上/下分区像素均值（readPixels 与渲染同任务）。
  function capture() {
    if (!gl || ctxLost || gl.isContextLost() || !curBuilt || !lastEnv) return null;
    if (!draw(0, lastEnv)) return null;
    var w = Math.min(bw, 256), h = Math.min(bh, 256);
    var px = new Uint8Array(w * h * 4);
    gl.readPixels((bw - w) >> 1, (bh - h) >> 1, w, h, gl.RGBA, gl.UNSIGNED_BYTE, px);
    var top = 0, bottom = 0, litCount = 0, n = w * h;
    for (var y = 0; y < h; y += 1) {
      var row = 0;
      for (var x = 0; x < w; x += 1) {
        var i = (y * w + x) * 4;
        var lum = (px[i] + px[i + 1] + px[i + 2]) / 3;
        row += lum;
        if (lum > 8) litCount += 1;
      }
      if (y < h / 2) top += row / w; else bottom += row / w;
    }
    return {
      top: top / (h / 2), bottom: bottom / (h / 2),
      lit: litCount, err: gl.getError(),
      stage: stageId, count: lastStats.count, buffers: bw + 'x' + bh
    };
  }

  // -------------------------------------------------------------------------
  // 生命周期
  // -------------------------------------------------------------------------
  function probe() {
    if (probeCache === null) {
      try {
        var c = document.createElement('canvas');
        var context = c.getContext && c.getContext('webgl2');
        probeCache = !!context;
        var ext = context && context.getExtension('WEBGL_lose_context');
        if (ext) ext.loseContext();
      } catch (_) { probeCache = false; }
    }
    return probeCache;
  }
  function catalog() {
    if (cat) return cat;
    try {
      cat = global.Stage3D && Stage3D.shaderCatalog ? Stage3D.shaderCatalog() : null;
    } catch (_) { cat = null; }
    return cat;
  }
  function mountInto(el) {
    if (!probe()) { reason = '当前环境无法运行粒子场（需要 WebGL2）'; return false; }
    if (!catalog()) { reason = '场着色器目录不可用（沉浸声场未就绪）'; return false; }
    canvas = document.createElement('canvas');
    canvas.className = 'sp-fields-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    el.appendChild(canvas);
    gl = canvas.getContext('webgl2', { antialias: false, alpha: false });
    if (!gl) { canvas.remove(); canvas = null; reason = '当前环境无法运行粒子场（需要 WebGL2）'; return false; }
    gl.getExtension('EXT_color_buffer_float');
    gl.getExtension('EXT_color_buffer_half_float');
    reason = null;
    sizeDirty = true;
    resize();
    if (!buildPost()) {
      releaseContext();
      reason = '当前设备无法创建场景画面'; return false;
    }
    attachWatch();
    observer = new ResizeObserver(function () { sizeDirty = true; });
    observer.observe(el);
    sizeDirty = true;
    mounted = true;
    return true;
  }
  function disposeStages() {
    Object.keys(built).forEach(function (k) {
      try { built[k].dispose(); } catch (e) { /* ignore */ }
      delete built[k];
    });
    curBuilt = null;
  }
  function disposePost() {
    if (post) {
      freeRT(post.scene); freeRT(post.a); freeRT(post.b); freeRT(post.composed);
      if (post.bright) gl.deleteProgram(post.bright.p);
      if (post.blur) gl.deleteProgram(post.blur.p);
      if (post.comp) gl.deleteProgram(post.comp.p);
      if (post.effects) gl.deleteProgram(post.effects.p);
      if (post.tri) gl.deleteBuffer(post.tri);
    }
    if (fsTri && gl) gl.deleteVertexArray(fsTri);
    post = null; fsTri = null;
  }
  function disposeAll(lostGeneration) {
    if (lostGeneration) {
      // restored 后旧句柄已由浏览器销毁，不能送回新上下文执行 delete。
      built = {}; curBuilt = null; post = null; fsTri = null;
    } else {
      disposeStages(); disposePost();
      if (art.tex && gl) gl.deleteTexture(art.tex);
      if (specTex && gl) gl.deleteTexture(specTex);
      if (lyricTex && gl) gl.deleteTexture(lyricTex);
    }
    if (observer) observer.disconnect();
    observer = null;
    if (art.img) { art.img.onload = null; art.img.onerror = null; }
    art = { tex: null, url: '', ready: false, sx: 1, sy: 1, lod: 0, img: null };
    specTex = specPixels = lyricTex = lyricSig = null;
    atlasW = atlasH = 0; lastEnv = null;
  }
  function releaseContext() {
    mounted = false;
    detachWatch();
    disposeAll();
    var ext = gl && gl.getExtension('WEBGL_lose_context');
    if (ext) ext.loseContext();
    if (canvas) canvas.remove();
    canvas = null; gl = null; postReason = null;
    emitPost();
  }
  function setHost(el) {
    if (el === host) return !el || mounted;
    host = el;
    if (!el) {
      releaseContext();
      ctxLost = false;
      reason = null;
      return true;
    }
    if (!mountInto(el)) return false;
    return true;
  }
  function setStage(id) {
    if (!gl) { stageId = id; return false; }
    if (stageId === id && built[id]) return true;
    if (id && id.indexOf('scene:') === 0) {
      if (!scenes().some(function (s) { return s.id === id; })) return false;
      if (!built[id]) {
        var sb = buildSceneStage(id);
        if (!sb) return false;
        built[id] = sb;
      }
      curBuilt = built[id];
      stageId = id; reason = null;
      lastStats.stage = id;
      lastStats.count = curBuilt.count;
      return true;
    }
    if (!cat) return false;   // 场路径需要 stage3d 的 shaderCatalog
    var def = defById(id);
    if (!def) return false;
    if (!built[id]) {
      var b = def.kind === 'blank' ? buildBlankStage()
        : def.kind === 'prism' ? buildPrismStage(def) : buildFieldStage(def);
      if (!b) return false;
      built[id] = b;
    }
    curBuilt = built[id];
    stageId = id; reason = null;
    lastStats.stage = id;
    lastStats.count = curBuilt.count;
    return true;
  }
  function degradedBecause() { return reason; }
  function stats() { return { stage: stageId, count: lastStats.count, frames: lastStats.frames, buffers: bw + 'x' + bh, hdr: !!(post && post.hdr) }; }
  function stageBaseline(id) {
    if (id && id.indexOf('scene:') === 0) {
      var rig = global.CreativeGL && CreativeGL.sceneRig ? CreativeGL.sceneRig(id.slice(6)) : null;
      if (!rig) return null;
      var c = rig.camera, D = Math.PI / 180;
      var distance = CreativeGL.cameraSpec().filter(function (row) { return row[0] === 'cam.dist'; })[0];
      return {
        theta: (c['cam.yaw'] || 0) * D,
        phi: (c['cam.pitch'] || 0) * D,
        radius: c['cam.dist'] || 15,
        fov: c['cam.fov'] || 58,
        minRadius: distance[2], maxRadius: distance[3],
        look: [0, c['cam.height'] || 0, 0]
      };
    }
    try {
      var list = global.Stage3D && Stage3D.effectCatalog ? Stage3D.effectCatalog() : [];
      for (var i = 0; i < list.length; i += 1) {
        if (list[i].id === id) {
          return { theta: list[i].cam.theta, phi: list[i].cam.phi, radius: list[i].cam.dist, fov:45, look: list[i].cam.look || [0,0,0] };
        }
      }
    } catch (_) { /* 目录不可用按 null */ }
    return null;
  }
  // 第二批的两个创意场景（§7.2）；list 顺序即网格顺序。
  function scenes() {
    var out = [];
    ['towers', 'nebula', 'lyric'].forEach(function (id) {
      var rig = global.CreativeGL && CreativeGL.sceneRig ? CreativeGL.sceneRig(id) : null;
      if (rig) out.push({ id: 'scene:' + id, label: rig.label });
    });
    return out;
  }

  var api = {
    available: probe,
    setHost: setHost,
    setStage: setStage,
    draw: draw,
    capture: capture,
    stats: stats,
    degradedBecause: degradedBecause,
    onContext: function (fn) { onCtx = typeof fn === 'function' ? fn : null; },
    postStatus: postStatus,
    onPost: function (fn) {
      onPost = typeof fn === 'function' ? fn : null;
      if (onPost) onPost(postStatus());
    },
    // 场/场景的机位基线映射：场来自效果目录 cam（fov 目录不带、保持当前基线），
    // 场景来自 creative 的面板度数机位（pitch/fov 度→弧度、height → 注视点 y）。
    stageBaseline: stageBaseline,
    scenes: scenes
  };
  global.SpaceFields = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
}());
