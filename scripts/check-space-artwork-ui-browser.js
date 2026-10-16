// SPDX-License-Identifier: MIT
'use strict';
const assert = require('node:assert/strict'), fs = require('node:fs'), path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const { uiUrl } = require('./ui-token');
const root = path.resolve(__dirname, '..'), output = path.join(root, 'output/playwright/space-artwork');
const base = process.env.SPACE_BASE || 'http://127.0.0.1:18815';
(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const errors = [];
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    page.on('pageerror', error => errors.push(error.message));
    let settings;
    await page.route('**/v1/settings', async route => {
      if (!settings) {
        const response = await route.fetch(); settings = await response.json();
        settings.space3d = { sceneSource: 'spectrum-sphere', qualityMode: 'high', lyrics: false, cinema: false, shelfMode: 'off', freeCam: null };
      }
      if (route.request().method() !== 'GET') Object.assign(settings, route.request().postDataJSON());
      await route.fulfill({ json: settings });
    });
    await page.goto(uiUrl(base), { waitUntil: 'domcontentloaded' });
    await page.locator('#space3d-entry').click();
    await page.waitForFunction(() => Space3D.stats().renderer?.state === 'ready');
    assert.equal(await page.evaluate(() => Space3D.sourceId()), 'coast', 'retired selection restores to coast');
    const entries = await page.locator('#sp-source option').evaluateAll(options => options.map(o => ({ id: o.value, label: o.textContent })));
    assert.ok(entries.some(e => e.id === 'cover-wall') && entries.some(e => e.id === 'cover-sphere'));
    assert.ok(!entries.some(e => /^(spectrum-|handdrawn-|background-)/.test(e.id) || e.id === 'light-tunnel'));
    await page.evaluate(() => {
      const c = document.createElement('canvas'); c.width = c.height = 768; const ctx = c.getContext('2d');
      ctx.fillStyle = '#e83d52'; ctx.fillRect(0, 0, 768, 768); ctx.fillStyle = '#1c2630'; ctx.fillRect(0, 540, 768, 228);
      ctx.fillStyle = '#f6f6ed'; ctx.beginPath(); ctx.arc(535, 230, 105, 0, Math.PI * 2); ctx.fill();
      ctx.font = 'bold 82px sans-serif'; ctx.fillText('HERTZ', 48, 135); ctx.font = '30px sans-serif'; ctx.fillText('SPATIAL RECORDS', 48, 610);
      Stage.setTrack({ id: 'artwork-fixture', title: 'Spatial Records', artist: 'Hertz Studio', duration_ms: 180000 }, c.toDataURL());
      Space3D.setQueue([]);
    });
    for (const id of ['cover-sphere', 'cover-wall']) {
      await page.evaluate(async id => { await Space3D.enterStage(id); }, id);
      await page.waitForFunction(() => Space3D.stats().renderer.coverTextures === 1);
      await page.waitForTimeout(600);
      await page.screenshot({ path: path.join(output, id + '-ui-desktop.png') });
      await page.setViewportSize({ width: 390, height: 844 }); await page.waitForTimeout(400);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth); assert.equal(overflow, false);
      await page.screenshot({ path: path.join(output, id + '-ui-mobile.png') });
      await page.setViewportSize({ width: 1440, height: 900 });
    }
    assert.deepEqual(errors, []);
    fs.writeFileSync(path.join(output, 'ui-evidence.json'), JSON.stringify({ entries, errors }, null, 2));
    console.log('Space UI: retired selection migration, filtered picker, current art with empty queue, desktop/mobile screenshots passed');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
