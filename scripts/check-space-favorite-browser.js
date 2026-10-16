// SPDX-License-Identifier: MIT
'use strict';
const assert = require('node:assert/strict'), fs = require('node:fs'), path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const { uiUrl } = require('./ui-token');
const base = process.env.SPACE_BASE || 'http://127.0.0.1:18815';
const output = path.resolve(__dirname, '../output/playwright/space-favorite');
async function main() {
  fs.mkdirSync(output, { recursive: true });
  const browser = await chromium.launch({ channel: 'chrome', headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  try {
    const page = await browser.newPage({ viewport: { width: 1114, height: 897 } }), errors = [], calls = [], owned = new Set();
    page.on('pageerror', error => errors.push(error.message));
    let settings, failNext = false;
    await page.route('**/v1/settings', async route => {
      if (!settings) { settings = await (await route.fetch()).json(); settings.space3d = { sceneSource: 'coast', qualityMode: 'low', playerAutoHide: false, cinema: false, shelfMode: 'off' }; }
      if (route.request().method() !== 'GET') Object.assign(settings, route.request().postDataJSON());
      return route.fulfill({ json: settings });
    });
    await page.route('**/v1/favorites/membership', route => route.fulfill({ json: { ids: route.request().postDataJSON().ids.filter(id => owned.has(id)) } }));
    await page.route('**/v1/favorites/toggle', async route => {
      const body = route.request().postDataJSON(); calls.push(body);
      await new Promise(resolve => setTimeout(resolve, 250));
      if (failNext) { failNext = false; return route.fulfill({ status: 503, json: { error: '测试收藏失败' } }); }
      const on = !owned.has(body.ref_id); if (on) owned.add(body.ref_id); else owned.delete(body.ref_id);
      return route.fulfill({ json: { favorited: on } });
    });
    await page.goto(uiUrl(base), { waitUntil: 'domcontentloaded' });
    await page.locator('#space3d-entry').click(); await page.waitForFunction(() => Space3D.stats().renderer?.state === 'ready');
    await page.evaluate(() => {
      window.favoriteFixture = { id: 'online:netease:favorite-a', source: 'netease', onlineId: 'favorite-a', title: '粉红星点', artist: '空间音乐人' };
      const original = Stage.presentation; Stage.presentation = () => ({ ...original(), track: favoriteFixture });
      setBarFavoriteTrack(favoriteFixture);
      document.documentElement.setAttribute('data-fx', 'halo');
    });
    const button = page.locator('#sp-favorite');
    await page.waitForFunction(() => !document.querySelector('#sp-favorite').disabled);
    assert.equal(await button.locator('use').getAttribute('href'), '#i-heart-outline');
    await button.click();
    await page.locator('.sp-favorite-burst').waitFor({ state: 'attached' });
    const burst = await page.locator('.sp-favorite-burst').evaluate(node => ({ count: node.children.length, palette: [...new Set([...node.children].map(star => getComputedStyle(star).backgroundColor))] }));
    assert.equal(burst.count, 12);
    assert.deepEqual(burst.palette.sort(), ['rgb(255, 130, 181)', 'rgb(255, 179, 210)'].sort());
    assert.equal(await button.getAttribute('aria-pressed'), 'true');
    assert.equal(await button.locator('use').getAttribute('href'), '#i-heart');
    await page.waitForFunction(() => getComputedStyle(document.querySelector('#sp-favorite')).color === 'rgb(255, 77, 101)');
    assert.equal(await button.evaluate(node => getComputedStyle(node).color), 'rgb(255, 77, 101)');
    assert.equal(await button.evaluate(node => getComputedStyle(node).backgroundColor), 'rgba(0, 0, 0, 0)');
    assert.equal(await page.locator('.sp-click-ring, .anime-interactions-burst').count(), 0, 'favorite opts out of both generic effects');
    await page.screenshot({ path: path.join(output, 'pink-stars.png') });
    await page.waitForFunction(() => !document.querySelector('.sp-favorite-burst'));
    await button.click(); await page.waitForFunction(() => !document.querySelector('#sp-favorite').disabled && document.querySelector('#sp-favorite').getAttribute('aria-pressed') === 'false');
    assert.equal(await page.locator('.sp-favorite-burst').count(), 0, 'removal has no burst');
    failNext = true;
    await button.click(); await page.waitForFunction(() => !document.querySelector('#sp-favorite').disabled && document.querySelector('#sp-favorite').getAttribute('aria-pressed') === 'false');
    assert.equal(await page.locator('.sp-favorite-burst').count(), 0, 'failed addition rolls back without a burst');
    await button.focus(); await page.keyboard.press('Enter'); await page.locator('.sp-favorite-burst').waitFor({ state: 'attached' });
    assert.equal(calls.length, 4, 'keyboard activation dispatches exactly once');
    await page.waitForFunction(() => !document.querySelector('.sp-favorite-burst'));
    await button.click(); await page.waitForFunction(() => !document.querySelector('#sp-favorite').disabled && document.querySelector('#sp-favorite').getAttribute('aria-pressed') === 'false');
    await button.click();
    await page.evaluate(() => { favoriteFixture = { ...favoriteFixture, id: 'online:netease:favorite-b', onlineId: 'favorite-b' }; setBarFavoriteTrack(favoriteFixture); });
    await page.waitForTimeout(550);
    assert.equal(await button.getAttribute('aria-pressed'), 'false');
    assert.equal(await page.locator('.sp-favorite-burst').count(), 0, 'late success for an old track does not animate the new track');
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await button.click(); await page.waitForFunction(() => !document.querySelector('#sp-favorite').disabled && document.querySelector('#sp-favorite').getAttribute('aria-pressed') === 'true');
    assert.equal(await page.locator('.sp-favorite-burst').count(), 0, 'reduced motion retains the color change without particles');
    await page.waitForFunction(() => getComputedStyle(document.querySelector('#sp-favorite')).color === 'rgb(255, 77, 101)');
    assert.equal(await button.evaluate(node => getComputedStyle(node).color), 'rgb(255, 77, 101)');
    await page.setViewportSize({ width: 320, height: 844 });
    await page.screenshot({ path: path.join(output, 'red-heart-mobile.png') });
    assert.deepEqual(errors, []);
    console.log('Space favorite: canonical requests, red heart, 12 pink stars, no white generic effects, removal/failure/track-change guards, keyboard and reduced motion passed.');
  } finally { await browser.close(); }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
