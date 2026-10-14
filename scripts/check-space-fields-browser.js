#!/usr/bin/env node
// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
// Standalone real WebGL2 regression; no application server or backend required.
// PLAYWRIGHT_MODULE may point to an existing playwright-core installation.
'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root = path.join(__dirname, '..', 'plugin', 'ui');
const scripts = ['stage3d.js', 'creative-gl.js', 'lyric3d.js', 'space-post.js', 'space-fields.js']
  .map(name => fs.readFileSync(path.join(root, name), 'utf8'));

async function fixture(browser) {
  const page = await browser.newPage({ viewport: { width: 640, height: 360 } });
  page.on('pageerror', error => { throw error; });
  await page.setContent('<div id="host" style="width:640px;height:360px"></div>');
  await page.evaluate(() => {
    // Load real shader catalogs without starting either legacy UI or its clock.
    Object.defineProperty(document, 'readyState', { configurable: true, get: () => 'loading' });
    window.Stage = { tier: () => 2, isLowFx: () => false, coverUrl: () => '' };
    window.__contexts = [];
    window.__contextStates = [];
    window.__postStates = [];
    window.__staleDeletes = [];
    const get = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (type, options) {
      const gl = get.call(this, type, options);
      if (type !== 'webgl2' || !this.classList.contains('sp-fields-canvas') || !gl || __contexts.includes(gl)) return gl;
      __contexts.push(gl);
      let generation = 0;
      this.addEventListener('webglcontextrestored', () => { generation += 1; });
      // Deleting a pre-loss handle in a restored context is an INVALID_OPERATION.
      for (const kind of ['Texture', 'Program', 'Buffer', 'Framebuffer', 'VertexArray']) {
        const generations = new WeakMap(), create = gl['create' + kind], dispose = gl['delete' + kind];
        gl['create' + kind] = function () {
          const handle = create.apply(this, arguments);
          if (handle) generations.set(handle, generation);
          return handle;
        };
        gl['delete' + kind] = function (handle) {
          if (handle && generations.has(handle) && generations.get(handle) !== generation) __staleDeletes.push(kind);
          return dispose.apply(this, arguments);
        };
      }
      return gl;
    };
  });
  for (const content of scripts) await page.addScriptTag({ content });
  await page.evaluate(() => {
    window.envFor = id => {
      const pose = SpaceFields.stageBaseline(id);
      pose.lookAt = pose.look || [0, 0, 0];
      return { pose, audio: { bands: new Float32Array(64).fill(0.6), bass: 0.6, mid: 0.6,
        treble: 0.6, energy: 0.6, beat: 0 }, pointer: { x: 0, y: 0, active: 0, clickX: 0, clickY: 0, clickAge: 100 },
      transition: { scatter: 0, burst: 0 }, fade: 1, timeSec: 0, beatAge: 100, motion: 0,
      bloom: 0.8, reduced: true, rises: new Float32Array(64), agg: [0.6, 0.6, 0.6, 0.6], pulse: 0,
      playing: false, lyrics: true, lyric: { lines: [{ text: 'Current lyric', start_ms: 0, end_ms: 6000 }],
        index: 0, position: 2000 }, post: { bokeh: 20 } };
    };
    window.postState = () => typeof SpaceFields.postStatus === 'function' ? SpaceFields.postStatus() : null;
    SpaceFields.onContext(state => __contextStates.push(state));
    if (SpaceFields.onPost) SpaceFields.onPost(state => __postStates.push(state));
  });
  return page;
}

async function depthChecks(page) {
  const rows = await page.evaluate(() => {
    if (!SpaceFields.setHost(document.getElementById('host'))) throw new Error(SpaceFields.degradedBecause());
    const gl = __contexts[0], bind = SpacePost.bind;
    let depthTexture, postEnv;
    SpacePost.bind = function (g, locations, values, env) {
      depthTexture = gl.getParameter(gl.TEXTURE_BINDING_2D);
      postEnv = env;
      return bind.apply(this, arguments);
    };
    const program = gl.createProgram();
    for (const [type, source] of [[gl.VERTEX_SHADER, SpacePost.vertex], [gl.FRAGMENT_SHADER,
      '#version 300 es\nprecision highp float; in vec2 vUV; uniform sampler2D uDepth; out vec4 frag; void main(){float d=texture(uDepth,vUV).r;frag=vec4(d<0.999999 ? 1.0 : 0.0,0.0,0.0,1.0);}']]) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source); gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader));
      gl.attachShader(program, shader); gl.deleteShader(shader);
    }
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program));
    const rows = [];
    for (const id of ['scene:towers', 'scene:nebula', 'scene:lyric', 'aurora', 'tunnel', 'terrain', 'orb', 'prism', 'resonance', 'silk']) {
      const selected = SpaceFields.setStage(id), drawn = SpaceFields.draw(0, envFor(id));
      const capture = SpaceFields.capture();
      gl.useProgram(program); gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, depthTexture);
      gl.uniform1i(gl.getUniformLocation(program, 'uDepth'), 0);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      const pixels = new Uint8Array(gl.drawingBufferWidth * gl.drawingBufferHeight * 4);
      gl.readPixels(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
      let written = 0;
      for (let i = 0; i < pixels.length; i += 4) if (pixels[i]) written += 1;
      rows.push({ id, selected, drawn, capture, hasDepth: postEnv.hasDepth, written, error: gl.getError() });
    }
    SpaceFields.setStage('off'); SpaceFields.draw(0, envFor('off'));
    rows.push({ id: 'off', hasDepth: postEnv.hasDepth });
    gl.deleteProgram(program);
    SpacePost.bind = bind;
    return rows;
  });
  for (const row of rows.filter(row => row.id !== 'off')) {
    assert.ok(row.selected && row.drawn && row.capture && row.capture.lit > 0, row.id + ' renders visible pixels');
    assert.equal(row.error || row.capture.err, 0, row.id + ' leaves GL error clear');
    const expectedDepth = row.id === 'scene:towers' || row.id === 'silk';
    assert.equal(row.written > 0, expectedDepth, row.id + ' depth texture agrees with its actual rendering');
    assert.equal(row.hasDepth, expectedDepth, row.id + ' bokeh uses usable scene depth only');
  }
  assert.equal(rows.at(-1).hasDepth, false, 'blank scene cannot reuse preceding scene depth');
  console.log('Depth pixels: ' + JSON.stringify(rows.map(({ id, hasDepth, written }) => ({ id, hasDepth, written }))));
}

async function shaderFailureChecks(page) {
  const evidence = await page.evaluate(() => {
    window.__goodPostFragment = SpacePost.fragment;
    SpacePost.fragment = '#version 300 es\n invalid shader';
    const mounted = SpaceFields.setHost(document.getElementById('host'));
    const selected = SpaceFields.setStage('scene:towers'), drawn = SpaceFields.draw(0, envFor('scene:towers'));
    return { mounted, selected, drawn, state: postState(), states: __postStates.slice(),
      contextStates: __contextStates.slice(), capture: SpaceFields.capture() };
  });
  assert.ok(evidence.mounted && evidence.selected && evidence.drawn && evidence.capture.lit > 0, 'optional shader failure preserves base scene');
  assert.equal(evidence.capture.err, 0, 'base scene remains valid after optional compilation failure');
  assert.equal(evidence.state && evidence.state.available, false, 'failed optional shader disables filter capability');
  assert.ok(evidence.state.reason, 'optional shader failure supplies a visible reason');
  assert.deepEqual(evidence.states.at(-1), evidence.state, 'late UI subscription receives current filter state');
  assert.ok(!evidence.contextStates.includes('failed'), 'optional shader failure is separate from context failure');
  const restored = await page.evaluate(() => {
    SpaceFields.setHost(null); SpacePost.fragment = __goodPostFragment;
    const mounted = SpaceFields.setHost(document.getElementById('host'));
    SpaceFields.setStage('scene:lyric'); SpaceFields.draw(0, envFor('scene:lyric'));
    return { mounted, state: postState(), capture: SpaceFields.capture(), states: __postStates };
  });
  assert.ok(restored.mounted && restored.state.available && restored.capture.lit > 0, 'reopen rebuilds optional filters and lyric scene');
  assert.equal(restored.state.reason, null, 'reopen clears optional failure reason');
}

async function targetFailureChecks(page) {
  const evidence = await page.evaluate(() => {
    SpaceFields.setHost(document.getElementById('host')); SpaceFields.setStage('scene:towers');
    const gl = __contexts[0], status = gl.checkFramebufferStatus;
    let attempts = 0;
    gl.checkFramebufferStatus = function () { attempts += 1; return gl.FRAMEBUFFER_UNSUPPORTED; };
    const drawn = SpaceFields.draw(0, envFor('scene:towers')), capture = SpaceFields.capture();
    gl.checkFramebufferStatus = status;
    SpaceFields.draw(0, envFor('scene:towers'));
    return { drawn, capture, attempts, state: postState(), states: __postStates.slice(), contextStates: __contextStates.slice() };
  });
  assert.ok(evidence.drawn && evidence.capture.lit > 0 && evidence.capture.err === 0, 'optional target failure preserves base pixels');
  assert.equal(evidence.attempts, 1, 'failed optional target is not retried every frame');
  assert.equal(evidence.state && evidence.state.available, false, 'failed optional target disables filter capability');
  assert.ok(evidence.state.reason, 'target failure supplies a visible reason');
  assert.deepEqual(evidence.states.at(-1), evidence.state, 'target failure reaches the UI subscription');
  assert.ok(!evidence.contextStates.includes('failed'), 'optional target failure does not report the base context as failed');
  await page.evaluate(() => { document.getElementById('host').style.width = '620px'; });
  await page.waitForFunction(() => {
    SpaceFields.draw(0, envFor('scene:towers'));
    return SpaceFields.stats().buffers === '620x360';
  });
  const recovered = await page.evaluate(() => ({ state: postState(), capture: SpaceFields.capture(), states: __postStates }));
  assert.ok(recovered.state.available && recovered.capture.lit > 0 && recovered.capture.err === 0, 'target resize can recover optional filters');
  assert.equal(recovered.state.reason, null, 'successful target allocation clears its reason');
  assert.deepEqual(recovered.states.at(-1), recovered.state, 'target recovery reaches the UI subscription');
}

async function failedMountChecks(page) {
  const failed = await page.evaluate(() => {
    const status = WebGL2RenderingContext.prototype.checkFramebufferStatus;
    WebGL2RenderingContext.prototype.checkFramebufferStatus = function () { return this.FRAMEBUFFER_UNSUPPORTED; };
    const attempts = [];
    for (let i = 0; i < 3; i += 1) {
      attempts.push({ mounted: SpaceFields.setHost(document.getElementById('host')), reason: SpaceFields.degradedBecause() });
      SpaceFields.setHost(null);
    }
    WebGL2RenderingContext.prototype.checkFramebufferStatus = status;
    return { attempts, contexts: __contexts.length, lost: __contexts.map(gl => gl.isContextLost()), canvases: document.querySelectorAll('canvas').length };
  });
  assert.ok(failed.attempts.every(row => !row.mounted && row.reason), 'failed mount has a useful reason');
  assert.equal(failed.canvases, 0, 'failed mounts leave no canvas');
  assert.equal(failed.contexts, 3, 'test holds all failed context references');
  assert.ok(failed.lost.every(Boolean), 'every failed mount actively releases its context without relying on GC');
  const reopened = await page.evaluate(() => {
    const mounted = SpaceFields.setHost(document.getElementById('host'));
    SpaceFields.setStage('silk'); SpaceFields.draw(0, envFor('silk'));
    const capture = SpaceFields.capture(), state = postState();
    SpaceFields.setHost(null);
    return { mounted, capture, state, lost: __contexts.map(gl => gl.isContextLost()), unmounted: postState() };
  });
  assert.ok(reopened.mounted && reopened.capture.lit > 0 && reopened.capture.err === 0, 'mount succeeds after allocation recovers');
  assert.ok(reopened.state.available && !reopened.unmounted.available, 'normal teardown resets filter capability');
  assert.ok(reopened.lost.every(Boolean), 'normal teardown uses the same explicit release');
}

async function restorationChecks(page) {
  await page.evaluate(() => SpaceFields.setHost(document.getElementById('host')));
  for (const id of ['silk', 'scene:lyric']) {
    const before = await page.evaluate(id => {
      SpaceFields.setStage(id); SpaceFields.draw(0, envFor(id));
      const capture = SpaceFields.capture();
      window.__restoreExt = __contexts.at(-1).getExtension('WEBGL_lose_context');
      if (!__restoreExt) throw new Error('WEBGL_lose_context is required');
      __restoreExt.loseContext();
      return capture;
    }, id);
    assert.ok(before.lit > 0 && before.err === 0, id + ' draws before loss');
    await page.waitForFunction(() => __contextStates.at(-1) === 'lost');
    const lost = await page.evaluate(() => ({ capture: SpaceFields.capture(), state: postState() }));
    assert.equal(lost.capture, null, id + ' cannot capture the lost context');
    assert.equal(lost.state && lost.state.available, false, id + ' filters disabled during context loss');
    await page.evaluate(() => __restoreExt.restoreContext());
    await page.waitForFunction(() => __contextStates.at(-1) === 'recovered');
    const restored = await page.evaluate(id => {
      const drawn = SpaceFields.draw(0, envFor(id));
      return { drawn, capture: SpaceFields.capture(), state: postState(), staleDeletes: __staleDeletes.slice(), contexts: __contexts.length };
    }, id);
    assert.ok(restored.drawn && restored.capture.lit > 0 && restored.capture.err === 0, id + ' renders after real restoration');
    assert.equal(restored.contexts, 1, id + ' uses browser restoration of the same context');
    assert.deepEqual(restored.staleDeletes, [], id + ' never deletes old-generation handles after restoration');
    assert.ok(restored.state.available, id + ' filters restored');
  }
  // The grace-period replacement path must also retain its existing recovery budget.
  await page.evaluate(() => __restoreExt.loseContext());
  await page.waitForFunction(() => __contexts.length === 2 && __contextStates.at(-1) === 'recovered', null, { timeout: 12000 });
  const replaced = await page.evaluate(() => {
    SpaceFields.draw(0, envFor('scene:lyric'));
    return { capture: SpaceFields.capture(), state: postState(), oldLost: __contexts[0].isContextLost() };
  });
  assert.ok(replaced.capture.lit > 0 && replaced.capture.err === 0 && replaced.state.available && replaced.oldLost,
    'grace-period replacement recovers the lyric scene and filters');
}

async function replacementFailureChecks(page) {
  await page.evaluate(() => {
    SpaceFields.setHost(document.getElementById('host')); SpaceFields.setStage('scene:towers');
    SpaceFields.draw(0, envFor('scene:towers'));
    const status = WebGL2RenderingContext.prototype.checkFramebufferStatus;
    WebGL2RenderingContext.prototype.checkFramebufferStatus = function () {
      return __contexts.length === 2 ? this.FRAMEBUFFER_UNSUPPORTED : status.apply(this, arguments);
    };
    __contexts[0].getExtension('WEBGL_lose_context').loseContext();
  });
  await page.waitForFunction(() => __contexts.length === 3 && __contextStates.at(-1) === 'recovered', null, { timeout: 8000 });
  const recovered = await page.evaluate(() => {
    const drawn = SpaceFields.draw(0, envFor('scene:towers'));
    return { drawn, capture: SpaceFields.capture(), state: postState(), released: __contexts.slice(0, 2).map(gl => gl.isContextLost()) };
  });
  assert.ok(recovered.drawn && recovered.capture.lit > 0 && recovered.capture.err === 0 && recovered.state.available,
    'an allocation failure during replacement retains the bounded retry and recovers');
  assert.ok(recovered.released.every(Boolean), 'failed replacement context is actively released too');
}

(async () => {
  const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL || 'chrome', headless: true });
  let failures = 0;
  const tests = { depthChecks, shaderFailureChecks, targetFailureChecks, failedMountChecks, restorationChecks, replacementFailureChecks };
  try {
    for (const [name, run] of Object.entries(tests)) {
      if (process.argv[2] && process.argv[2] !== name) continue;
      const page = await fixture(browser);
      try { await run(page); console.log('PASS ' + name); }
      catch (error) { failures += 1; console.error('FAIL ' + name + ': ' + error.stack); }
      finally { await page.close(); }
    }
  } finally { await browser.close(); }
  assert.equal(failures, 0, 'SpaceFields WebGL2 regressions');
  console.log('SpaceFields: real WebGL2 regressions passed');
})().catch(error => { console.error(error); process.exitCode = 1; });
