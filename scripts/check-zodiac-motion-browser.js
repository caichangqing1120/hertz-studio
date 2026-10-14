// SPDX-License-Identifier: MIT
// Real WebGL with a controlled rAF clock: spin budget, pause/idle budget,
// interaction, reduced-motion and visual QA for the zodiac stage.
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'output/playwright/zodiac-motion', process.env.ZODIAC_CAPTURE || 'after');

async function main() {
  fs.mkdirSync(output, { recursive: true });
  const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL || 'chrome', headless: true });
  const errors = [];
  const report = {};
  try {
    const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
    page.on('pageerror', e => errors.push(e.message));
    page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
    await page.setContent('<style>body{margin:0;background:#05060a}canvas{width:100vw;height:100vh;display:block}</style><canvas></canvas>');
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
        ZodiacStagePure.setTime({ time, playing });
        ZodiacStagePure.setAudio({ bands: new Float32Array(64).fill(level), onset });
        now += dt * 1000;
        const pending = [...callbacks.values()]; callbacks.clear();
        for (const fn of pending) fn(now);
      };
      window.__mount = (quality = 'high', reduced = false) => {
        ZodiacStagePure.unmount();
        document.querySelector('canvas').replaceWith(document.createElement('canvas'));
        if (!ZodiacStagePure.mount(document.querySelector('canvas'), { quality, reduced })) throw new Error('WebGL2 mount failed');
        ZodiacStagePure.resize(innerWidth, innerHeight);
      };
    });
    await page.addScriptTag({ path: path.join(root, 'plugin/ui/vendor/zodiac-stage.js') });

    // Supplied poses must move the rendered Three camera, including its projection
    // and free-camera heading. The engine's existing rAF owns every transition.
    assert.equal(await page.evaluate(() => typeof ZodiacStagePure.setRig), 'function', 'setRig camera export');
    assert.equal(await page.evaluate(() => typeof ZodiacStagePure.setInteraction), 'function', 'setInteraction export');
    report.camera = await page.evaluate(() => {
      __mount(); __step(1, false);
      const original = ZodiacStagePure.debug();
      ZodiacStagePure.setInteraction(false);
      ZodiacStagePure.setRig({ yaw: Math.PI / 2, pitch: 0, dist: 12, fov: 40, tx: 2, ty: 3, tz: 4 }, { external: true });
      __step(1, false);
      const orbit = ZodiacStagePure.debug();
      ZodiacStagePure.capture();
      const orbitPixels = document.querySelector('canvas').toDataURL();
      ZodiacStagePure.setRig({ position: [1, 2, 3], yaw: Math.PI / 2, pitch: 0.2, roll: 0.2, fov: 64, external: true });
      __step(1, false);
      const free = ZodiacStagePure.debug();
      ZodiacStagePure.capture();
      const freePixels = document.querySelector('canvas').toDataURL();
      const canvas = document.querySelector('canvas');
      canvas.dispatchEvent(new WheelEvent('wheel', { deltaY: 400, cancelable: true }));
      canvas.dispatchEvent(new MouseEvent('dblclick'));
      __step(12, false);
      const held = ZodiacStagePure.debug();
      ZodiacStagePure.setRig({ yaw: NaN, pitch: Infinity, fov: -Infinity, position: [NaN, 1, 2] });
      __step(12, false);
      const invalid = ZodiacStagePure.debug();
      ZodiacStagePure.setRig({ yaw: 0, pitch: 0, dist: 9, tx: 0, ty: 0, tz: 0, fov: 56 });
      __step(12, false);
      const first = ZodiacStagePure.debug();
      for (let i = 0; i < 180; i++) __step(12, false);
      const settled = ZodiacStagePure.debug();
      ZodiacStagePure.setRig(null);
      ZodiacStagePure.setInteraction(true);
      __step(12, true);
      const released = ZodiacStagePure.debug();
      for (let i = 1; i <= 60; i++) __step(12 + i / 60, true);
      const resumed = ZodiacStagePure.debug();
      return { original, orbit, free, held, invalid, first, settled, released, resumed,
        pixelsChanged: orbitPixels !== freePixels, touchAction: canvas.style.touchAction };
    });
    const near = (actual, expected, label) => actual.forEach((v, i) =>
      assert.ok(Math.abs(v - expected[i]) < 0.002, label + ': ' + actual + ' vs ' + expected));
    near(report.camera.orbit.camera.position, [14, 3, 4], 'orbit position includes target');
    near(report.camera.orbit.camera.direction, [-1, 0, 0], 'orbit looks at target');
    assert.equal(report.camera.orbit.camera.fov, 40, 'orbit FOV reaches real camera');
    assert.ok(Math.abs(report.camera.orbit.camera.projection[5] - 1 / Math.tan(40 * Math.PI / 360)) < 1e-9,
      'FOV updates the actual projection matrix');
    near(report.camera.free.camera.position, [1, 2, 3], 'free position is not converted to orbit');
    near(report.camera.free.camera.direction, [-Math.cos(0.2), Math.sin(0.2), 0], 'free yaw/pitch preserve heading');
    near(report.camera.free.camera.quaternion, [Math.SQRT1_2 * Math.sin(0.2), Math.SQRT1_2 * Math.cos(0.2), 0, Math.SQRT1_2],
      'free roll reaches actual orientation');
    assert.ok(report.camera.pixelsChanged, 'camera movement changes real WebGL pixels');
    near(report.camera.held.camera.position, [1, 2, 3], 'control survives idle and disabled local input');
    near(report.camera.invalid.camera.position, [1, 2, 3], 'invalid values do not poison the camera');
    assert.ok(report.camera.first.camera.position[2] > 3 && report.camera.first.camera.position[2] < 9,
      'default setRig transitions smoothly rather than snapping');
    near(report.camera.settled.camera.position, [0, 0, 9], 'paused camera still completes internal damping');
    near(report.camera.settled.camera.direction, [0, 0, -1], 'damped orbit heading settles');
    assert.equal(report.camera.released.controlled, false, 'null releases camera ownership');
    assert.equal(report.camera.released.dist, report.camera.original.dist, 'release restores the local rig');
    assert.ok(report.camera.resumed.spin > report.camera.released.spin, 'release resumes default spin');
    assert.equal(report.camera.touchAction, 'none', 'interaction can be restored');

    // —— 数据与挂载 —— //
    report.data = await page.evaluate(() => {
      const signs = ZodiacStagePure.pure.ZODIAC;
      return { count: signs.length, ids: signs.map(s => s.id),
        stars: signs.reduce((a, s) => a + s.stars.length, 0),
        links: signs.reduce((a, s) => a + s.links.length, 0) };
    });
    assert.equal(report.data.count, 12, '必须 12 座');
    assert.ok(report.data.stars >= 60 && report.data.links >= 30, '星点/连线数量合理');

    report.spin = await page.evaluate(() => {
      __mount();
      __step(2, true, 0.2);
      const before = ZodiacStagePure.debug().spin;
      for (let i = 1; i <= 120; i++) __step(2 + i / 60, true, 0.2);
      const normal = ZodiacStagePure.debug().spin - before;
      ZodiacStagePure.setPrefs({ reduced: true });
      const rb = ZodiacStagePure.debug().spin;
      for (let i = 0; i < 120; i++) __step(4 + i / 60, true, 0.2);
      const reduced = ZodiacStagePure.debug().spin - rb;
      ZodiacStagePure.setPrefs({ reduced: false });
      return { normal, reduced, ratio: reduced / normal };
    });
    assert.ok(report.spin.normal > 0.02, '播放时星盘应缓转（2s 转角 > 0.02rad）');
    assert.ok(report.spin.ratio < 0.4, '减弱动效下缓转必须显著放慢（实测比值 ' + report.spin.ratio.toFixed(2) + '）');

    report.idle = await page.evaluate(() => {
      __step(8, false);
      for (let i = 0; i < 60; i++) __step(8, false);
      __frames.clear();
      for (let i = 0; i < 120; i++) __step(8 + 20 / 60, false);
      return __frames.size;
    });
    assert.ok(report.idle <= 9, '暂停画面最多 4fps 兜底刷新（实测 ' + report.idle + ' 帧）');

    report.audio = await page.evaluate(() => {
      __mount(); __step(10);
      for (let i = 0; i < 60; i++) __step(10 + i / 60, true, 0.9, i < 4);
      const loud = ZodiacStagePure.stats();
      for (let i = 0; i < 120; i++) __step(12 + i / 60, false);
      const quiet = ZodiacStagePure.stats();
      return { loudBass: loud.bass, quietBass: quiet.bass, onset: loud.onset };
    });
    assert.ok(report.audio.loudBass > 0.5, '高电平低频包络应上涨');
    assert.ok(report.audio.quietBass < 0.05, '暂停后低频应回落到零');
    assert.ok(report.audio.onset > 0, '起音应产生增辉脉冲');

    report.prefs = await page.evaluate(() => {
      __mount(); __step(20, true, 0.2);
      const before = ZodiacStagePure.stats();
      ZodiacStagePure.setPrefs({ lines: false });
      __step(20.1, true, 0.2);
      const noLines = ZodiacStagePure.stats();
      ZodiacStagePure.setPrefs({ lines: true, field: false });
      __step(20.2, true, 0.2);
      const noField = ZodiacStagePure.stats();
      ZodiacStagePure.setPrefs({ lines: true, field: true });
      return { linesBefore: before.linesVisible, noLines: noLines.linesVisible,
        fieldBefore: before.fieldVisible, noField: noField.fieldVisible,
        pointsStillThere: noField.starPoints > 0 };
    });
    assert.equal(report.prefs.noLines, false, '关连线后 linesVisible=false');
    assert.equal(report.prefs.noField, false, '关星场后 fieldVisible=false');
    assert.ok(report.prefs.pointsStillThere, '关星场不能动星座星点');

    // —— 交互：真实滚轮事件改变距离 —— //
    report.zoom = await page.evaluate(async () => {
      __mount(); __step(30, true, 0.2);
      return ZodiacStagePure.debug().dist;
    });
    const d0 = report.zoom;
    await page.mouse.move(960, 540);
    await page.mouse.wheel(0, 400);
    await page.evaluate(() => __step(30.1, true, 0.2));
    const d1 = await page.evaluate(() => ZodiacStagePure.debug().dist);
    assert.ok(d1 > d0 + 0.5, '滚轮应拉远视距：' + d0.toFixed(2) + ' → ' + d1.toFixed(2));
    await page.mouse.dblclick(960, 540);
    await page.evaluate(() => __step(30.2, true, 0.2));
    assert.ok(Math.abs((await page.evaluate(() => ZodiacStagePure.debug().dist)) - 9) < 0.01, '双击复位视距');

    // —— 画质档：低档减点 + 像素预算 + 几何驻留有界 —— //
    report.views = [];
    for (const [width, height, quality] of [[1920, 1080, 'high'], [3840, 2160, 'high'], [1920, 1080, 'low']]) {
      await page.setViewportSize({ width, height });
      const metrics = await page.evaluate(({ quality }) => {
        __mount(quality); __step(40, true, 0.4);
        for (let i = 1; i <= 12; i++) __step(40 + i / 60, true, 0.5, i <= 6);
        const capture = ZodiacStagePure.capture();
        window.__image = document.querySelector('canvas').toDataURL();
        return { ...ZodiacStagePure.stats(), capture };
      }, { quality });
      const data = await page.evaluate(() => window.__image);
      fs.writeFileSync(path.join(output, `${quality}-${width}.png`), Buffer.from(data.split(',')[1], 'base64'));
      report.views.push({ width, height, quality, ...metrics });
    }
    const hi = report.views.find(v => v.width === 1920 && v.quality === 'high');
    const lo = report.views.find(v => v.quality === 'low');
    assert.ok(lo.fieldPoints < hi.fieldPoints, '低档必须减少背景星场点数');
    for (const view of report.views) {
      assert.ok(view.capture.width * view.capture.height <= (view.quality === 'low' ? 1900000 : 6200000),
        '像素预算：' + view.quality);
    }
    const bounded = await page.evaluate(async () => {
      __mount('high'); __step(60, true, 0.3);
      const before = ZodiacStagePure.stats();
      for (let i = 0; i < 180; i++) {
        const now = await new Promise(resolve => __nativeRAF(resolve));
        __step(60 + i / 60, true, 0.3 + Math.sin(i * 0.1) * 0.25, i % 12 < 3, 1 / 60);
      }
      const after = ZodiacStagePure.stats();
      return { g0: before.geometries, g1: after.geometries, t0: before.textures, t1: after.textures };
    });
    assert.equal(bounded.g1, bounded.g0, '几何驻留有界');
    assert.equal(bounded.t1, bounded.t0, '纹理驻留有界');

    report.errors = errors;
    fs.writeFileSync(path.join(output, 'result.json'), JSON.stringify(report, null, 2));
    console.log(JSON.stringify({ data: report.data, spin: report.spin, idle: report.idle,
      audio: report.audio, prefs: report.prefs, zoom: { d0, d1 },
      views: report.views.map(v => ({ quality: v.quality, width: v.width,
        drawCalls: v.drawCalls, points: v.points, pixels: v.capture.width * v.capture.height })) }, null, 2));
    assert.deepEqual(errors, [], 'No page or shader errors');
    console.log('Zodiac motion: spin, idle budget, audio, prefs, interaction, quality and shader checks passed');
  } finally { await browser.close(); }
}
main().catch(e => { console.error(e); process.exitCode = 1; });
