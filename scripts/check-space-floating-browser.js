// SPDX-License-Identifier: MIT
'use strict';
const assert = require('node:assert/strict'), fs = require('node:fs'), path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const sharp = require(process.env.SHARP_MODULE || 'sharp');
const { uiUrl } = require('./ui-token');
const base = process.env.SPACE_BASE || 'http://127.0.0.1:18815';
const output = path.resolve(__dirname, '../output/playwright/space-floating');
async function main() {
  fs.mkdirSync(output, { recursive: true });
  const browser = await chromium.launch({ channel: 'chrome', headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const evidence = { layouts: [] }, errors = [];
  try {
    const page = await browser.newPage({ viewport: { width: 1114, height: 897 } });
    page.on('pageerror', error => errors.push(error.message));
    let settings;
    const tracks = ['月亮代表我的心', '亲密爱人', 'From The Start', 'Love Love Love'].map((title, i) => ({ id: 'float-' + i, source: 'netease', title, artist: i % 2 ? '王若琳' : '方大同', album: '音乐与空间', duration_ms: 240000, vip_only: i === 1, cover: base + '/space-scene-preview/cover-sphere.jpg' }));
    await page.route('**/v1/settings', async route => {
      if (!settings) { settings = await (await route.fetch()).json(); settings.space3d = { sceneSource: 'coast', qualityMode: 'low', playerAutoHide: false, cinema: false, shelfMode: 'off' }; }
      if (route.request().method() !== 'GET') Object.assign(settings, route.request().postDataJSON());
      return route.fulfill({ json: settings });
    });
    await page.route('**/v1/recommend/daily**', route => route.fulfill({ json: { tracks, total: tracks.length } }));
    await page.route('**/v1/history?**', route => route.fulfill({ json: { items: tracks.map(track => ({ ...track, ref_id: track.id })), total: tracks.length } }));
    await page.route('**/v1/online/search?**', route => route.fulfill({ json: { tracks, total: tracks.length } }));
    await page.route('**/v1/home/quote?**', route => route.fulfill({ json: { hitokoto: '苟有恒，何必三更眠五更起；最无益，只怕一日曝十日寒。', from: '自勉联' } }));
    await page.goto(uiUrl(base), { waitUntil: 'domcontentloaded' });
    await page.locator('#space3d-entry').click();
    await page.waitForFunction(() => Space3D.stats().renderer?.state === 'ready');
    await page.locator('.sh-discovery-list .sh-track').first().waitFor();
    await page.evaluate(track => {
      window.floatTrack = { ...track, id: 'online:netease:' + track.id };
      const original = Stage.presentation;
      Stage.presentation = () => ({ ...original(), track: floatTrack, cover: floatTrack.cover, duration: 240000, position: 30000, playing: false });
      window.floatCanvas = document.querySelector('#sp-canvas canvas');
    }, tracks[1]);
    const toggle = page.locator('#sp-page-toggle');
    assert.equal(await page.locator('.sp-nav button').count(), 1);
    assert.equal(await toggle.textContent(), '');
    assert.equal(await toggle.getAttribute('aria-label'), '三维舞台');
    assert.equal(await toggle.locator('use').getAttribute('href'), '#i-cube');
    assert.equal(await page.locator('#sp-close').count(), 0);
    const next = page.locator('.sh-next-up');
    await page.mouse.move(10, 100); await page.waitForTimeout(500);
    const original = await next.boundingBox();
    await next.hover({ position: { x: original.width * .8, y: original.height * .35 } });
    await page.waitForTimeout(600);
    const lifted = await next.boundingBox();
    assert.ok(lifted.y < original.y - 3, 'next-up visibly floats on hover');
    assert.notEqual(await next.evaluate(node => node.style.getPropertyValue('--sp-tilt-y')), '', 'pointer drives bounded tilt');
    assert.ok(Math.abs(lifted.width - original.width) < original.width * .04, 'hover retains stable dimensions');
    await page.screenshot({ path: path.join(output, 'next-hover.png') });
    await page.mouse.move(10, 100);
    assert.equal(await next.evaluate(node => node.style.getPropertyValue('--sp-tilt-y')), '', 'leaving resets tilt');
    const action = page.locator('.sh-action-library');
    assert.equal(await action.evaluate(node => getComputedStyle(node).boxShadow), 'none', 'resting action has no heavy shadow');
    await action.hover(); await page.waitForTimeout(500);
    assert.notEqual(await action.evaluate(node => getComputedStyle(node).transform), 'none');
    for (const [width, height] of [[1440,900],[1114,897],[1024,768],[390,844],[320,844]]) {
      await page.setViewportSize({ width, height }); await page.mouse.move(5, 100); await page.waitForTimeout(500);
      const layout = await page.evaluate(() => {
        const home = document.querySelector('#sp-home'), back = document.querySelector('#sp-return-2d').getBoundingClientRect(), bar = document.querySelector('#sp-bar').getBoundingClientRect();
        return { width: innerWidth, overflow: home.scrollWidth > home.clientWidth, back: back.toJSON(), bar: bar.toJSON(), homeHeight: home.scrollHeight, viewportHeight: home.clientHeight };
      });
      assert.equal(layout.overflow, false);
      assert.ok(layout.back.left >= 0 && layout.back.left < width / 2 && layout.back.top > height / 2 && layout.back.bottom <= layout.bar.top, '2D return sits at lower left above player');
      if (width > 800) assert.ok(layout.homeHeight <= layout.viewportHeight + 1, 'desktop home fits');
      evidence.layouts.push(layout);
      await page.screenshot({ path: path.join(output, 'home-' + width + '.png') });
      await page.locator('#sh-query').fill('空间');
      await page.getByRole('tab').filter({ hasText: '网易云' }).click();
      await page.locator('.sh-panel-body .sh-track').first().waitFor();
      await page.locator('.sh-panel').screenshot({ path: path.join(output, 'search-panel-' + width + '.png') });
      const panel = await page.locator('.sh-panel').boundingBox();
      assert.ok(panel.x >= 0 && panel.x + panel.width <= width + 1 && panel.y >= 0 && panel.y + panel.height <= height, 'search panel fits');
      await page.keyboard.press('Escape');
      await toggle.click();
      assert.equal(await toggle.getAttribute('aria-label'), '首页');
      assert.equal(await toggle.locator('use').getAttribute('href'), '#i-home');
      assert.equal(await page.evaluate(() => floatCanvas === document.querySelector('#sp-canvas canvas')), true, 'navigation retains renderer');
      await page.locator('#sp-console-toggle').click();
      await page.locator('#sp-sheet').screenshot({ path: path.join(output, 'console-' + width + '.png') });
      const consoleBox = await page.locator('#sp-sheet').boundingBox();
      assert.ok(consoleBox.x >= 0 && consoleBox.x + consoleBox.width <= width + 1 && consoleBox.y >= 0, 'floating console fits');
      await page.keyboard.press('Escape');
      const pixels = await sharp(await page.locator('#sp-canvas canvas').screenshot()).stats();
      assert.ok(pixels.channels.slice(0, 3).some(channel => channel.stdev > 2), 'nonblank scene at every viewport');
      await toggle.click();
      assert.equal(await page.evaluate(() => Space3D.stats().page), 'home');
    }
    await page.setViewportSize({ width: 1114, height: 897 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await next.hover();
    assert.equal(await next.evaluate(node => getComputedStyle(node).transform), 'none');
    assert.equal(await next.evaluate(node => node.style.getPropertyValue('--sp-tilt-y')), '');
    await page.locator('#sp-more').click();
    assert.equal(await page.locator('#sp-player-options').evaluate(node => getComputedStyle(node).translate), 'none');
    await page.keyboard.press('Escape');
    await toggle.click();
    await page.locator('#sp-stage-immersive').click();
    await toggle.waitFor({ state: 'hidden' });
    assert.equal(await toggle.isVisible(), false);
    assert.equal(await page.locator('#sp-return-2d').isVisible(), false);
    await page.keyboard.press('Escape');
    await toggle.waitFor({ state: 'visible' });
    assert.equal(await toggle.isVisible(), true);
    assert.equal(await page.evaluate(() => Stage.presentation().track.id), 'online:netease:float-1', 'presentation retains the track');
    await page.locator('#sp-return-2d').click();
    assert.equal(await page.evaluate(() => Space3D.isActive()), false);
    assert.equal(await page.locator('#sp-canvas canvas').count(), 0, 'return to 2D disposes renderer');
    assert.equal(await page.locator('#space3d-entry').evaluate(node => node === document.activeElement), true, 'return restores 2D focus');
    assert.deepEqual(errors, []);
    fs.writeFileSync(path.join(output, 'evidence.json'), JSON.stringify({ ...evidence, errors }, null, 2));
    console.log('Space floating: next-up lift/tilt/reset, lightweight surfaces, single icon navigation, 2D return/focus, responsive panels, reduced motion, immersive recovery and nonblank canvas passed.');
  } finally { await browser.close(); }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
