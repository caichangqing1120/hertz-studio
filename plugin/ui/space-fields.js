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
  var mounted = false, raf = 0;
  // —— GL 资源 —— //
  var programs = {};        // field/star/prism/post.* —— 从 shaderCatalog 编译
  var built = {};           // id -> { draw, dispose, count, kind }
  var stageId = null, curBuilt = null;
  var fsTri = null;
  var post = null;
  var bw = 1, bh = 1, dpr = 1, sizeDirty = true;
  var cat = null;           // shaderCatalog 快照（含 stage 描述符）
  var onCtx = null;         // 状态回调 (state) → space3d 的降级横幅

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

  function CS() { return gl; }
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
      reason = '粒子场的图形上下文反复丢失，已停止自动恢复';
      emitCtx('failed');
      return;
    }
    recoveryAt.push(now);
    ctxLost = true;
    retries = 0;
    reason = '粒子场的图形上下文丢失，正在自动恢复';
    emitCtx('lost');
    graceTimer = setTimeout(rebuildAfterLoss, RECOVERY_GRACE_MS);
  }
  function onContextRestored() {
    if (!ctxLost) return;
    ctxLost = false;
    clearRecoveryTimers();
    retries = 0;
    reason = null;
    emitCtx('recovered');
  }
  function rebuildAfterLoss() {
    graceTimer = 0;
    if (!ctxLost || !mounted || !host) return;
    var ok = false;
    try { disposeAll(); } catch (_) { /* 死上下文上释放：three/GL 会静默 */ }
    detachWatch();
    if (canvas) { canvas.remove(); canvas = null; }
    ok = mountInto(host);
    if (ok) {
      ctxLost = false; retries = 0; reason = null;
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
    var rb = null;
    if (withDepth) {
      rb = gl.createRenderbuffer();
      gl.bindRenderbuffer(gl.RENDERBUFFER, rb);
      gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, w, h);
      gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, rb);
    }
    var complete = gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    var target = { fbo: fbo, tex: tex, rb: rb, w: w, h: h };
    if (!complete) { freeRT(target); return null; }
    return target;
  }
  function freeRT(rt) {
    if (!rt) return;
    if (rt.fbo) gl.deleteFramebuffer(rt.fbo);
    if (rt.tex) gl.deleteTexture(rt.tex);
    if (rt.rb) gl.deleteRenderbuffer(rt.rb);
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
    return { count: 0, draw: function () {}, dispose: function () {} };
  }
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
    // 全屏大三角形
    var tri = buffer(new Float32Array([-1, -1, 3, -1, -1, 3]));
    fsTri = makeVAO([{ loc: bright.a('aPos'), buffer: tri, size: 2 }]);
    post.tri = tri;
    resizeTargets();
    return !!post.scene;
  }
  function resizeTargets() {
    if (!post) return;
    var hw = Math.max(1, bw >> 1), hh = Math.max(1, bh >> 1);
    if (post.scene && post.scene.w === bw && post.scene.h === bh) return;
    freeRT(post.scene); freeRT(post.a); freeRT(post.b);
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
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
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
    dpr = computeDpr(w, h);
    var nw = Math.max(1, Math.floor(w * dpr));
    var nh = Math.max(1, Math.floor(h * dpr));
    if (canvas.width !== nw || canvas.height !== nh) { canvas.width = nw; canvas.height = nh; }
    bw = canvas.width; bh = canvas.height;
    resizeTargets();
    sizeDirty = false;
  }

  var lastStats = { stage: null, count: 0, frames: 0 };
  function draw(dtMs, env) {
    if (!gl || ctxLost || !curBuilt) return;
    void dtMs;
    readTint(performance.now());
    if (sizeDirty) resize();
    var pose = env.pose;
    var look = pose.lookAt || [0, 0, 0];
    var aspect = bw / Math.max(1, bh);
    var def = defById(stageId);
    var framed = def && def.framed;
    var fit = framed ? Math.max(1, Math.min(2.6, 1.05 / aspect)) : 1;
    var radius = pose.radius * fit;
    var cp = Math.cos(pose.phi), sp = Math.sin(pose.phi);
    var ct = Math.cos(pose.theta), st = Math.sin(pose.theta);
    camPos = [
      look[0] + radius * cp * st,
      look[1] + radius * sp,
      look[2] + radius * cp * ct
    ];
    perspective(proj, pose.fov * Math.PI / 180, aspect, 0.1, 220);
    lookAt(view, camPos[0], camPos[1], camPos[2], look[0], look[1], look[2]);
    // 场面画进 HDR 场景 RT；blend/depth 由场描述符决定（在 draw 内部切）。
    gl.bindFramebuffer(gl.FRAMEBUFFER, post && post.scene ? post.scene.fbo : null);
    gl.viewport(0, 0, bw, bh);
    if (def && def.blank) {
      gl.clearColor(0.004, 0.005, 0.009, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
    } else {
      gl.clearColor(0.004, 0.005, 0.009, 1);
      gl.depthMask(true);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      curBuilt.draw(env);
    }
    runPost(env);
    lastStats.frames += 1;
  }

  // 检查口：同步渲一帧并返回上/下分区像素均值（readPixels 与渲染同任务）。
  function capture() {
    if (!gl || !curBuilt) return null;
    draw(16, lastEnv || fakeEnv());
    var w = Math.min(bw, 256), h = Math.min(bh, 256);
    var px = new Uint8Array(w * h * 4);
    gl.readPixels((bw - w) >> 1, (bh - h) >> 1, w, h, gl.RGBA, gl.UNSIGNED_BYTE, px);
    var top = 0, bottom = 0, n = w * h;
    for (var y = 0; y < h; y += 1) {
      var row = 0;
      for (var x = 0; x < w; x += 1) {
        var i = (y * w + x) * 4;
        row += (px[i] + px[i + 1] + px[i + 2]) / 3;
      }
      if (y < h / 2) top += row / w; else bottom += row / w;
    }
    return {
      top: top / (h / 2), bottom: bottom / (h / 2),
      stage: stageId, count: lastStats.count, buffers: bw + 'x' + bh
    };
  }
  var lastEnv = null;
  function fakeEnv() {
    return {
      pose: { free: false, theta: 0, phi: 0, radius: 8.4, fov: 45, lookAt: [0, 0, 0] },
      audio: { bass: 0, mid: 0, treble: 0, energy: 0, beat: 0, bands: new Float32Array(64) },
      pointer: { x: -9, y: -9, active: 0, clickX: 0, clickY: 0, clickAge: 100 },
      transition: { scatter: 0, burst: 0 }, fade: 1, timeSec: 0, beatAge: 100,
      motion: 0.65, bloom: 0.8, reduced: false
    };
  }

  // -------------------------------------------------------------------------
  // 生命周期
  // -------------------------------------------------------------------------
  function probe() {
    if (probeCache === null) {
      try {
        var c = document.createElement('canvas');
        probeCache = !!(c.getContext && c.getContext('webgl2'));
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
    buildPost();
    attachWatch();
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
  function disposeAll() {
    disposeStages();
    if (post) {
      freeRT(post.scene); freeRT(post.a); freeRT(post.b);
      if (post.bright) gl.deleteProgram(post.bright.p);
      if (post.blur) gl.deleteProgram(post.blur.p);
      if (post.comp) gl.deleteProgram(post.comp.p);
      if (post.tri) gl.deleteBuffer(post.tri);
    }
    if (fsTri && gl) gl.deleteVertexArray(fsTri);
    if (art.tex && gl) gl.deleteTexture(art.tex);
    post = null; fsTri = null; art.tex = null;
  }
  function setHost(el) {
    if (el === host) return !el || mounted;
    host = el;
    if (!el) {
      if (mounted) {
        cancelAnimationFrame(raf); raf = 0;
        mounted = false;
        ctxLost = false;
        detachWatch();
        disposeAll();
      }
      if (canvas) { canvas.remove(); canvas = null; }
      gl = null;
      reason = null;
      return true;
    }
    if (!mountInto(el)) return false;
    return true;
  }
  function setStage(id) {
    if (!gl || !cat) { stageId = id; return false; }
    if (stageId === id && built[id]) return true;
    var def = defById(id);
    if (!def) return false;
    stageId = id;
    if (!built[id]) {
      var b = def.kind === 'blank' ? buildBlankStage()
        : def.kind === 'prism' ? buildPrismStage(def) : buildFieldStage(def);
      if (!b) return false;
      built[id] = b;
    }
    curBuilt = built[id];
    lastStats.stage = id;
    lastStats.count = curBuilt.count;
    return true;
  }
  function degradedBecause() { return reason; }
  function stats() { return { stage: stageId, count: lastStats.count, frames: lastStats.frames, buffers: bw + 'x' + bh, hdr: !!(post && post.hdr) }; }

  var api = {
    available: probe,
    setHost: setHost,
    setStage: setStage,
    draw: draw,
    capture: capture,
    stats: stats,
    degradedBecause: degradedBecause,
    onContext: function (fn) { onCtx = typeof fn === 'function' ? fn : null; }
  };
  global.SpaceFields = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
}());
