// SPDX-License-Identifier: MIT
// Real WebGL with a controlled rAF clock: transitions, idle budget and visual QA.
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'output/playwright/tunnel-motion', process.env.TUNNEL_CAPTURE || 'after');

async function main() {
  fs.mkdirSync(output, { recursive: true });
  const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL || 'chrome', headless: true });
  const errors = [];
  const report = {};
  try {
    const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
    page.on('pageerror', e => errors.push(e.message));
    page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
    await page.setContent('<style>body{margin:0;background:#080b10}canvas{width:100vw;height:100vh;display:block}</style><canvas></canvas>');
    await page.evaluate(() => {
      const callbacks = new Map();
      let serial = 0, now = 1000;
      window.__nativeRAF = window.requestAnimationFrame.bind(window);
      window.requestAnimationFrame = fn => { callbacks.set(++serial, fn); return serial; };
      window.cancelAnimationFrame = id => callbacks.delete(id);
      window.__frames = new Set();
      for (const name of ['drawArrays', 'drawElements']) {
        const original = WebGL2RenderingContext.prototype[name];
        WebGL2RenderingContext.prototype[name] = function (...args) {
          window.__frames.add(now);
          return original.apply(this, args);
        };
      }
      window.__step = (time, playing = true, level = 0, onset = false, dt = 1 / 60) => {
        TunnelStagePure.setTime({ time, playing });
        TunnelStagePure.setAudio({ bands: new Float32Array(64).fill(level), onset });
        now += dt * 1000;
        const pending = [...callbacks.values()]; callbacks.clear();
        for (const fn of pending) fn(now);
      };
      window.__mount = (quality = 'high', reduced = false) => {
        TunnelStagePure.unmount();
        document.querySelector('canvas').replaceWith(document.createElement('canvas'));
        if (!TunnelStagePure.mount(document.querySelector('canvas'), { quality, reduced })) throw new Error('WebGL2 mount failed');
        TunnelStagePure.resize(innerWidth, innerHeight);
        const chars = Array.from('星河在隧道的尽头拐弯');
        TunnelStagePure.setLyrics({ lines: [{ start: 2, end: 6, text: chars.join(''),
          glyphs: chars.map((text, i) => ({ text, start: 2 + i * 4 / chars.length, end: 2 + (i + 1) * 4 / chars.length })) }] });
      };
    });
    await page.addScriptTag({ path: path.join(root, 'plugin/ui/vendor/tunnel-stage.js') });
    report.motion = await page.evaluate(() => {
      __mount();
      __step(6.8);
      let previous = TunnelStagePure.debug().fov, maxFovStep = 0;
      for (let i = 1; i <= 60; i++) {
        __step(6.8 + i / 60);
        const fov = TunnelStagePure.debug().fov;
        maxFovStep = Math.max(maxFovStep, Math.abs(fov - previous)); previous = fov;
      }
      __step(8, false);
      for (let i = 0; i < 60; i++) __step(8, false);
      __frames.clear();
      for (let i = 0; i < 120; i++) __step(8, false);
      const idleFrames = __frames.size;
      TunnelStagePure.setPrefs({ reduced: true });
      __step(10, true, 0.9);
      const reducedBefore = TunnelStagePure.debug(), reducedDistance = TunnelStagePure.stats().distance;
      for (let i = 1; i <= 60; i++) __step(10 + i / 60, true, 0.9);
      const reducedAfter = TunnelStagePure.debug();
      return { maxFovStep, idleFrames, reducedBefore, reducedAfter,
        reducedTravel: TunnelStagePure.stats().distance - reducedDistance };
    });
    report.pulses = await page.evaluate(() => {
      TunnelStagePure.setPrefs({ reduced: false }); __step(20);
      for (let i = 1; i <= 60; i++) __step(20 + i / 60);
      for (let i = 1; i <= 8; i++) __step(21 + i / 60, true, 0.8, true);
      const peak = TunnelStagePure.stats().activePulses;
      for (let i = 9; i <= 120; i++) __step(21 + i / 60, true, 0.8, true);
      return { peak, held: TunnelStagePure.stats().activePulses };
    });
    report.pauseAndHide = await page.evaluate(() => {
      __step(30);
      for (let i = 1; i <= 20; i++) __step(30 + i / 60, true, 0.8, i >= 10);
      const peak = TunnelStagePure.stats().activePulses;
      for (let i = 0; i < 120; i++) __step(30 + 20 / 60, false);
      const paused = TunnelStagePure.stats().activePulses;
      TunnelStagePure.setPrefs({ warp: false, objects: false });
      __step(30 + 20 / 60, false);
      const hidden = TunnelStagePure.stats();
      return { peak, paused, hidden };
    });
    report.fovByRate = [];
    for (const hz of [30, 60, 120]) {
      report.fovByRate.push(await page.evaluate(hz => {
        __mount(); __step(30);
        for (let i = 1; i <= hz * 2; i++) __step(30 + i / hz, true, 0.8, false, 1 / hz);
        return { hz, fov: TunnelStagePure.debug().fov };
      }, hz));
    }
    report.views = [];
    for (const [width, height, quality] of [[1920, 1080, 'high'], [3840, 2160, 'high'], [1920, 1080, 'low']]) {
      await page.setViewportSize({ width, height });
      for (const [name, time, level] of [['lyrics', 4.4, 0.12], ['planet', 47, 0.45], ['quiet', 12, 0], ['loud', 12, 0.9]]) {
        const metrics = await page.evaluate(({ time, level, quality }) => {
          __mount(quality); __step(time, true, level);
          const capture = TunnelStagePure.capture();
          const canvas = document.querySelector('canvas');
          // Copy synchronously; default WebGL buffers are cleared after presentation.
          window.__image = canvas.toDataURL();
          return { ...TunnelStagePure.stats(), capture };
        }, { time, level, quality });
        const data = await page.evaluate(() => window.__image);
        fs.writeFileSync(path.join(output, `${quality}-${width}-${name}.png`), Buffer.from(data.split(',')[1], 'base64'));
        report.views.push({ width, height, quality, name, ...metrics });
      }
    }
    report.performance = [];
    for (const [width, height, quality] of [[1920, 1080, 'high'], [3840, 2160, 'high'], [1920, 1080, 'low']]) {
      await page.setViewportSize({ width, height });
      const sample = await page.evaluate(async quality => {
        __mount(quality);
        // 用确定的时间长度预热节拍环；高刷新率下 3 帧不足以越过起音阈值。
        __step(44);
        for (let i = 1; i <= 12; i++) __step(44 + i / 60, true, 0.8, i <= 8);
        if (!TunnelStagePure.stats().activePulses) throw new Error('Pulse warmup did not render');
        const intervals = [], work = [];
        let previous = 0, start = 0;
        let before;
        for (let i = 0; i < 180; i++) {
          const now = await new Promise(resolve => __nativeRAF(resolve));
          if (!start) start = now;
          const dt = previous ? (now - previous) / 1000 : 1 / 60;
          const t0 = performance.now();
          __step(45 + (now - start) / 1000, true, 0.4 + Math.sin(i * 0.1) * 0.25,
            ((now - start) / 1000) % 0.6 < 0.08, dt);
          if (i === 59) before = TunnelStagePure.stats();
          if (i >= 60) { intervals.push(now - previous); work.push(performance.now() - t0); }
          previous = now;
        }
        const after = TunnelStagePure.stats();
        const p95 = values => values.sort((a, b) => a - b)[Math.floor(values.length * 0.95)];
        return { fps: 1000 * intervals.length / intervals.reduce((a, b) => a + b, 0),
          frameP95Ms: p95(intervals), submissionP95Ms: p95(work),
          geometriesBefore: before.geometries, geometriesAfter: after.geometries,
          texturesBefore: before.textures, texturesAfter: after.textures };
      }, quality);
      report.performance.push({ width, height, quality, ...sample });
    }
    report.errors = errors;
    fs.writeFileSync(path.join(output, 'result.json'), JSON.stringify(report, null, 2));
    console.log(JSON.stringify({ motion: { maxFovStep: report.motion.maxFovStep, idleFrames: report.motion.idleFrames,
      reducedTravel: report.motion.reducedTravel }, pulses: report.pulses, fovByRate: report.fovByRate,
      performance: report.performance, views: report.views.map(v => ({
      width: v.width, quality: v.quality, name: v.name, drawCalls: v.drawCalls, points: v.points,
      pixels: v.capture.width * v.capture.height })) }, null, 2));
    assert.deepEqual(errors, [], 'No page or shader errors');
    assert.ok(report.motion.maxFovStep < 0.25, 'FOV transition must stay below 0.25 degrees/frame');
    assert.ok(report.motion.idleFrames <= 9, 'Paused feed must preserve the 4 fps budget');
    assert.equal(report.motion.reducedBefore.roll, 0, 'Reduced motion disables roll');
    assert.equal(report.motion.reducedAfter.roll, 0, 'Reduced motion keeps roll disabled');
    assert.equal(report.motion.reducedTravel, 0, 'Reduced motion freezes background travel');
    assert.ok(report.pulses.peak > 0 && report.pulses.peak <= 2, 'Smoothed onset must create a bounded pulse');
    assert.equal(report.pulses.held, 0, 'A held onset cannot continually retrigger');
    assert.ok(report.pauseAndHide.peak > 0, 'Pause fixture must start with a live pulse');
    assert.equal(report.pauseAndHide.paused, report.pauseAndHide.peak, 'Pause freezes pulse lifetime');
    assert.equal(report.pauseAndHide.hidden.activePulses, 0, 'Hiding warp clears pulses');
    assert.equal(report.pauseAndHide.hidden.points, 0, 'Disabling warp and objects submits no background points');
    const fovs = report.fovByRate.map(row => row.fov);
    assert.ok(Math.max(...fovs) - Math.min(...fovs) < 0.02, 'Breathing converges consistently at 30/60/120 Hz');
    for (const sample of report.performance) {
      assert.equal(sample.geometriesAfter, sample.geometriesBefore, 'Geometry stays bounded after warmup');
      assert.equal(sample.texturesAfter, sample.texturesBefore, 'Textures stay bounded after warmup');
    }
    const high = report.views.find(v => v.width === 1920 && v.quality === 'high' && v.name === 'planet');
    const low = report.views.find(v => v.quality === 'low' && v.name === 'planet');
    assert.ok(low.points < high.points, 'Low quality must reduce geometry workload');
    for (const view of report.views) assert.ok(view.capture.width * view.capture.height <= (view.quality === 'low' ? 1900000 : 6200000), 'Pixel budget');
    console.log('Tunnel motion: transitions, idle budget, reduced motion, onset, quality and shader checks passed');
  } finally { await browser.close(); }
}
main().catch(e => { console.error(e); process.exitCode = 1; });
