#!/usr/bin/env node
// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
// Run with --browser and PLAYWRIGHT_MODULE=playwright-core path for real WebGL2 checks.
'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const sourcePath = path.join(__dirname, '..', 'plugin', 'ui', 'space-post.js');
let checks = 0;
function check(condition, label) { assert.ok(condition, label); checks += 1; }
function equal(actual, expected, label) { assert.deepEqual(actual, expected, label); checks += 1; }
function plain(value) { return JSON.parse(JSON.stringify(value)); }

check(fs.existsSync(sourcePath), 'SpacePost supplies the optional final image pass');
const source = fs.readFileSync(sourcePath, 'utf8');
// No DOM, context, clock or frame scheduler is available in this sandbox.
const sandbox = { window: {}, isFinite };
vm.createContext(sandbox);
vm.runInContext(source, sandbox, { filename: sourcePath });
const post = sandbox.window.SpacePost;
check(post && typeof post.bind === 'function', 'module exports a uniform binding contract');

const expectedMax = { halftone: 40, grain: 40, vignette: 100, softness: 20,
  bokeh: 20, chroma: 12, aberration: 12, distort: 12, bloom: 12 };
const ids = Object.keys(expectedMax);
const catalog = plain(post.catalog());
equal(catalog.map(item => item.key), ids, 'nine effects retain the stage controls parameter identities');
equal(plain(post.defaults()), Object.fromEntries(ids.map(id => [id, 0])), 'new post effects are off by default');
check(!post.active(post.defaults()), 'default state bypasses the extra pass');
for (const item of catalog) {
  equal([item.min, item.max, item.step, item.def], [0, expectedMax[item.key], 1, 0], item.key + ' has the existing adjustable range');
  check(typeof item.label === 'string' && item.label.length > 0, item.key + ' is visible in generated controls');
  check(post.active({ [item.key]: item.max }), item.key + ' alone enables the pass');
  const bad = { [item.key]: Number.NaN, obsolete: 4 };
  equal(plain(post.normalize(bad)), plain(post.defaults()), item.key + ' rejects non-finite data and unknown fields');
  equal(post.normalize({ [item.key]: item.max + 100 })[item.key], item.max, item.key + ' clamps excessive intensity');
  equal(post.normalize({ [item.key]: -1 })[item.key], 0, item.key + ' clamps negative intensity');
  equal(post.normalize({ [item.key]: 0.37 })[item.key], 0.37, item.key + ' preserves fractional saved values');
}
for (const invalid of [null, undefined, false, 'bad', [12], { grain: '12' }, { grain: Infinity }, Object.create({ grain: 12 })]) {
  equal(plain(post.normalize(invalid)), plain(post.defaults()), 'corrupt or inherited settings do not enable a pass');
}
const saved = { grain: 8, bokeh: 3 };
const normalized = post.normalize(saved);
normalized.grain = 25;
equal(saved, { grain: 8, bokeh: 3 }, 'normalization does not mutate caller preferences');
post.catalog()[0].max = 1;
post.defaults().halftone = 20;
equal(post.catalog()[0].max, 40, 'catalog snapshots cannot alter normalization bounds');
equal(post.defaults().halftone, 0, 'default snapshots remain independent');

// The binder owns uniform values only. Texture allocation/binding and draw calls
// deliberately do not exist on this recording GL object.
function bindings(values, env) {
  const observed = {};
  const gl = {
    uniform1i: (name, value) => { observed[name] = value; },
    uniform1f: (name, value) => { observed[name] = value; },
    uniform2f: (name, x, y) => { observed[name] = [x, y]; }
  };
  const locations = Object.fromEntries(post.uniforms.map(name => [name, name]));
  post.bind(gl, locations, values, env);
  return observed;
}
const full = Object.fromEntries(ids.map(id => [id, expectedMax[id]]));
const standard = bindings(full, { width: 320, height: 180, timeSec: 7.5, quality: 2 });
equal(standard.uScene, 0, 'scene texture unit is explicit');
equal(standard.uDepth, 1, 'optional depth texture unit is explicit');
equal(standard.uResolution, [320, 180], 'pixel radii use the drawing buffer resolution');
equal(standard.uTime, 7.5, 'visual time comes from the host');
equal(standard.uEnabled, 1, 'nonzero settings enable the shader');
equal(bindings({}, {}).uEnabled, 0, 'empty settings preserve the image exactly');
equal(bindings(full, { timeSec: 8, reducedMotion: true }).uTime, 0, 'reduced motion fixes the grain seed');
equal(bindings(full, { timeSec: 800, reducedMotion: true }).uTime, 0, 'reduced motion is independent of host wall time');
equal(bindings(full, { width: 0, height: NaN }).uResolution, [1, 1], 'invalid dimensions never produce divisions by zero');
equal(bindings(full, { hasDepth: true, near: 0.1, far: 100, focusDistance: 12, focusRange: 3 }).uHasDepth, 1,
  'depth is opt-in only when a depth texture is supplied');
const low = bindings(full, { quality: 0 }), medium = bindings(full, { quality: 1 });
check(low.uKernelTaps < medium.uKernelTaps && medium.uKernelTaps < standard.uKernelTaps,
  'quality tiers bound the neighborhood sample count');
check(standard.uKernelTaps <= 12 && standard.uGlareTaps <= 6, 'the most expensive pass has at most 33 scene samples');
check(Object.values(bindings(full, { timeSec: Infinity, near: -1, far: 0, focusDistance: NaN, focusRange: 0 }))
  .flat().every(Number.isFinite), 'all shader inputs stay finite with corrupt environment data');
const extreme = bindings(full, { width: Number.MAX_VALUE, height: Number.MAX_VALUE, near: Number.MAX_VALUE,
  far: Number.MAX_VALUE, timeSec: Number.MAX_VALUE, focusRange: Number.MAX_VALUE });
check(Object.values(extreme).flat().map(Math.fround).every(Number.isFinite), 'finite JavaScript extremes cannot overflow GLSL floats');
check(Math.fround(extreme.uFar) > Math.fround(extreme.uNear), 'the depth interval remains nonzero in GLSL float precision');
equal(bindings(full, { timeSec: 2.4 }), bindings(full, { timeSec: 2.4 }), 'same settings and scene time produce identical bindings');

async function browserChecks() {
  const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
  const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL || 'chrome', headless: true });
  try {
    const page = await browser.newPage();
    await page.setContent('<canvas width="96" height="96"></canvas>');
    await page.addScriptTag({ content: source });
    const evidence = await page.evaluate(() => {
      const p = window.SpacePost, size = 96;
      const gl = document.querySelector('canvas').getContext('webgl2', { antialias: false, premultipliedAlpha: true });
      if (!gl) throw new Error('WebGL2 is unavailable');
      function shader(type, text) {
        const s = gl.createShader(type);
        gl.shaderSource(s, text); gl.compileShader(s);
        if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
        return s;
      }
      const program = gl.createProgram();
      const vertex = shader(gl.VERTEX_SHADER, p.vertex), fragment = shader(gl.FRAGMENT_SHADER, p.fragment);
      gl.attachShader(program, vertex); gl.attachShader(program, fragment); gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program));
      gl.deleteShader(vertex); gl.deleteShader(fragment); gl.useProgram(program);
      const uniforms = Object.fromEntries(p.uniforms.map(key => [key, gl.getUniformLocation(program, key)]));
      const pixels = new Uint8Array(size * size * 4);
      for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
        const i = (y * size + x) * 4;
        const bright = Math.hypot(x - 62, y - 48) < 7;
        const grid = (Math.floor(x / 3) + Math.floor(y / 3)) % 2;
        pixels[i] = bright ? 244 : 20 + x * 1.5 + grid * 25;
        pixels[i + 1] = bright ? 218 : 15 + y * 1.5 + grid * 30;
        pixels[i + 2] = bright ? 200 : 25 + grid * 100;
        pixels[i + 3] = 255;
      }
      const tex = gl.createTexture();
      gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, size, size, 0, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
      for (const axis of [gl.TEXTURE_WRAP_S, gl.TEXTURE_WRAP_T]) gl.texParameteri(gl.TEXTURE_2D, axis, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      const depth = gl.createTexture();
      gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, depth);
      const depths = new Uint8Array(size * size);
      // Focus at eye distance 1, near=0.1/far=10 => depth 0.90909.
      for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) depths[y * size + x] = x < size / 2 ? 232 : 252;
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.R8, size, size, 0, gl.RED, gl.UNSIGNED_BYTE, depths);
      for (const axis of [gl.TEXTURE_WRAP_S, gl.TEXTURE_WRAP_T]) gl.texParameteri(gl.TEXTURE_2D, axis, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.viewport(0, 0, size, size);
      function render(settings, env) {
        p.bind(gl, uniforms, p.normalize(settings), Object.assign({ width: size, height: size, timeSec: 5.25, quality: 2 }, env));
        gl.drawArrays(gl.TRIANGLES, 0, 3);
        const output = new Uint8Array(pixels.length);
        gl.readPixels(0, 0, size, size, gl.RGBA, gl.UNSIGNED_BYTE, output);
        const error = gl.getError();
        if (error) throw new Error('WebGL error ' + error);
        return output;
      }
      function diff(a, b, start = 0, end = size) {
        let sum = 0;
        for (let y = 0; y < size; y++) for (let x = start; x < end; x++) {
          const i = (y * size + x) * 4;
          for (let c = 0; c < 3; c++) sum += Math.abs(a[i + c] - b[i + c]);
        }
        return sum / (size * (end - start) * 3);
      }
      const baseline = render({}), deltas = {}, all = {};
      p.catalog().forEach(item => { all[item.key] = item.max; deltas[item.key] = diff(render({ [item.key]: item.max }), baseline); });
      const qualities = [0, 1, 2].map(quality => diff(render(all, { quality }), baseline));
      const grainFreeze = diff(render({ grain: 40 }, { timeSec: 1, reducedMotion: true }),
        render({ grain: 40 }, { timeSec: 80, reducedMotion: true }));
      const grainMotion = diff(render({ grain: 40 }, { timeSec: 1 }), render({ grain: 40 }, { timeSec: 2 }));
      gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, null);
      const noDepth = diff(render({ bokeh: 20 }), baseline);
      gl.bindTexture(gl.TEXTURE_2D, depth);
      const focus = render({ bokeh: 20 }, { hasDepth: true, near: 0.1, far: 10, focusDistance: 1, focusRange: 0.5 });
      const focusDelta = [diff(focus, baseline, 10, 35), diff(focus, baseline, 60, 85)];
      gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, size, size, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(pixels.length));
      const transparent = render(all);
      const transparentMax = transparent.reduce((maximum, value) => Math.max(maximum, value), 0);
      gl.deleteTexture(tex); gl.deleteTexture(depth); gl.deleteProgram(program);
      return { identity: diff(baseline, pixels), deltas, qualities, grainFreeze, grainMotion, noDepth, focusDelta, transparentMax };
    });
    equal(evidence.identity, 0, 'disabled shader is a pixel-exact pass-through');
    for (const [id, delta] of Object.entries(evidence.deltas)) check(delta > 0.1, id + ' independently changes rendered pixels (' + delta.toFixed(2) + ')');
    check(evidence.qualities.every(delta => delta > 0.1), 'all quality tiers render the complete combined effect');
    equal(evidence.grainFreeze, 0, 'reduced motion freezes actual rendered grain');
    check(evidence.grainMotion > 0.1, 'host scene time animates actual grain');
    check(evidence.noDepth > 0.1, 'focus fallback renders when no depth texture is bound');
    check(evidence.focusDelta[1] > evidence.focusDelta[0] + 1, 'real depth preserves focused geometry and blurs distant geometry');
    equal(evidence.transparentMax, 0, 'all effects preserve empty transparent pixels');
    console.log('WebGL2 pixels: ' + JSON.stringify(evidence));
  } finally { await browser.close(); }
}

(async () => {
  if (process.argv.includes('--browser')) await browserChecks();
  console.log('SpacePost: ' + checks + ' checks passed' + (process.argv.includes('--browser') ? ' (including real WebGL2)' : ''));
})().catch(error => { console.error(error); process.exitCode = 1; });
