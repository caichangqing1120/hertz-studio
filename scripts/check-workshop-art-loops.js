// SPDX-License-Identifier: MIT
// Compare actual SVG pixels on both sides of every loop boundary.
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const { PNG } = require('pngjs');
const root = path.resolve(__dirname, '..');
const art = path.join(root, 'output/orchestration-art');
const out = path.join(root, 'output/playwright/workshop-art');
function delta(a, b) {
  let sum = 0, changed = 0;
  for (let i = 0; i < a.length; i += 4) {
    const d = Math.abs(a[i] - b[i]) + Math.abs(a[i + 1] - b[i + 1]) + Math.abs(a[i + 2] - b[i + 2]);
    sum += d; if (d > 12) changed++;
  }
  return { mean: sum / (a.length / 4 * 3), changed: changed / (a.length / 4) };
}
async function main() {
  fs.mkdirSync(out, { recursive: true });
  const files = JSON.parse(fs.readFileSync(path.join(art, 'manifest.json'), 'utf8')).files;
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 640, height: 400 } });
  const errors = []; page.on('pageerror', e => errors.push(e.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  const seams = [], compositions = [];
  try {
    for (const file of files) {
      await page.goto(pathToFileURL(path.join(art, file.file)).href);
      const animations = await page.evaluate(async () => {
        window.loops = document.getAnimations();
        loops.forEach((a, i) => { a.pause(); a.currentTime = 5300 + i * 237; });
        await Promise.all(loops.map(a => a.ready));
        return loops.map(a => ({ name: a.animationName, duration: a.effect.getTiming().duration, delay: a.effect.getTiming().delay }));
      });
      assert.ok(animations.length > 2, file.file + ' has multiple live motion layers');
      assert.ok(await page.locator('svg *').count() < 110, file.file + ' has bounded SVG geometry');
      for (let i = 0; i < animations.length; i++) {
        const a = animations[i], boundary = a.duration - a.delay;
        const frames = [];
        for (const offset of [-2, 2]) {
          await page.evaluate(({ i, time }) => { loops[i].currentTime = time; }, { i, time: boundary + offset });
          frames.push(PNG.sync.read(await page.screenshot()).data);
        }
        const result = { scene: file.scene, animation: a.name, ...delta(frames[0], frames[1]) };
        seams.push(result);
        assert.ok(result.mean < .35 && result.changed < .012, 'visible jump at seam: ' + JSON.stringify(result));
        await page.evaluate(i => { loops[i].currentTime = 5300 + i * 237; }, i);
      }
      const hashes = new Set();
      for (const seconds of [0, 3, 7, 13, 31, 61]) {
        await page.evaluate(seconds => loops.forEach(a => { a.currentTime = seconds * 1000; }), seconds);
        const png = await page.screenshot({ path: seconds === 7 ? path.join(out, file.scene + '.png') : undefined });
        hashes.add(require('node:crypto').createHash('sha256').update(png).digest('hex'));
      }
      assert.equal(hashes.size, 6, file.file + ' keeps evolving across independent periods');
      compositions.push({ scene: file.scene, animations: animations.length, uniqueSamples: hashes.size, bytes: file.bytes });
      await page.emulateMedia({ reducedMotion: 'reduce' });
      assert.equal(await page.evaluate(() => document.getAnimations().length), 0, 'standalone SVG respects reduced motion');
      await page.emulateMedia({ reducedMotion: 'no-preference' });
    }
    await page.setViewportSize({ width: 1280, height: 1180 });
    await page.goto(pathToFileURL(path.join(art, 'preview.html')).href);
    await page.waitForFunction(() => [...document.querySelectorAll('.ws-anime-preview')].every(el => el.dataset.motion === 'running'));
    const session = await page.context().newCDPSession(page);
    await session.send('Emulation.setCPUThrottlingRate', { rate: 6 });
    const frameTimes = await page.evaluate(() => new Promise(resolve => {
      const deltas = []; let last = 0;
      function frame(t) { if (last) deltas.push(t - last); last = t; if (deltas.length < 150) requestAnimationFrame(frame); else resolve(deltas); }
      requestAnimationFrame(frame);
    }));
    await session.send('Emulation.setCPUThrottlingRate', { rate: 1 });
    frameTimes.sort((a, b) => a - b);
    const performance = { cpuThrottle: 6, frames: frameTimes.length, medianMs: frameTimes[75], p95Ms: frameTimes[142], over50Ms: frameTimes.filter(t => t > 50).length };
    await page.screenshot({ path: path.join(out, 'overview.png'), fullPage: true });
    await page.locator('main').focus();
    await page.keyboard.press('Space');
    assert.equal(await page.evaluate(() => document.querySelector('#pause').getAttribute('aria-pressed')), 'true', 'preview keyboard pause works');
    await page.keyboard.press('ArrowRight');
    assert.equal(await page.locator('.rate').textContent(), '1.25×', 'preview keyboard speed works');
    await page.setViewportSize({ width: 360, height: 800 });
    await page.screenshot({ path: path.join(out, 'preview-mobile.png'), fullPage: true });
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'standalone gallery fits a phone');
    assert.deepEqual(errors, []);
    fs.writeFileSync(path.join(out, 'loops.json'), JSON.stringify({ seams, compositions, performance, errors }, null, 2));
    console.log(JSON.stringify({ checkedSeams: seams.length, worstSeamMean: Math.max(...seams.map(s => s.mean)), compositions, performance }, null, 2));
  } finally { await browser.close(); }
}
main().catch(e => { console.error(e); process.exitCode = 1; });
