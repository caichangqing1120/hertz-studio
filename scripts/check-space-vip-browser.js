// SPDX-License-Identifier: MIT
'use strict';
const assert = require('node:assert/strict'), fs = require('node:fs'), path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const sharp = require(process.env.SHARP_MODULE || 'sharp');
const { uiUrl } = require('./ui-token');
const base = process.env.SPACE_BASE || 'http://127.0.0.1:18815';
const output = path.resolve(__dirname, '../output/playwright/space-vip');
async function main() {
  fs.mkdirSync(output, { recursive: true });
  const browser = await chromium.launch({ channel: 'chrome', headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } }), errors = [], loads = [];
    page.on('pageerror', error => errors.push(error.message));
    const tracks = [true, false].map((vip, i) => ({ id: 'vip-' + i, source: 'netease', title: 'VIP 标识与很长的歌曲名称在三维空间中的显示 ' + i, artist: '空间音乐人', album: '声音与星球', vip_only: vip, duration_ms: 180000, cover: base + '/space-scene-preview/cover-sphere.jpg' }));
    let settings;
    await page.route('**/v1/settings', async route => {
      if (!settings) { settings = await (await route.fetch()).json(); settings.space3d = { sceneSource: 'cover-sphere', qualityMode: 'low', shelfMode: 'side', playerAutoHide: false, cinema: false }; }
      if (route.request().method() !== 'GET') Object.assign(settings, route.request().postDataJSON());
      return route.fulfill({ json: settings });
    });
    await page.route('**/v1/recommend/daily**', route => route.fulfill({ json: { tracks, total: 2 } }));
    await page.route('**/v1/online/search?**', route => route.fulfill({ json: { tracks, total: 2 } }));
    const sources = ['netease', 'qq', 'kugou', 'kuwo', 'qishui', 'ccmixter', 'local'];
    await page.route('**/v1/history?**', route => route.fulfill({ json: { items: sources.map(source => ({ source, ref_id: 'source-' + source, track_id: 'source-local', title: '来源图标 · ' + source, artist: '空间音乐人' })), total: sources.length } }));
    await page.route('**/v1/tracks/source-local', route => route.fulfill({ json: { id: 'source-local', title: '本地歌曲', artist: '空间音乐人' } }));
    await page.route('**/v1/player/load', route => { loads.push(route.request().postDataJSON()); return route.fulfill({ status: 503, json: { error: 'VIP test audio unavailable' } }); });
    await page.goto(uiUrl(base), { waitUntil: 'domcontentloaded' });
    await page.locator('#space3d-entry').click();
    await page.waitForFunction(() => Space3D.stats().renderer?.state === 'ready');
    await page.locator('.sh-discovery-list .vip-tag').first().waitFor();
    assert.equal(await page.locator('.sh-discovery-list .sh-track').count(), 4);
    assert.equal(await page.locator('.sh-discovery-list .vip-tag').count(), 2);
    async function checkBadges(list, expected) {
      assert.equal(await list.locator('.src-badge').count(), expected.length);
      for (let i = 0; i < expected.length; i++) {
        const badge = list.locator('.src-badge').nth(i), source = expected[i];
        assert.ok(await badge.getAttribute('aria-label'), 'source has an accessible name');
        if (['netease', 'qq', 'kugou', 'kuwo', 'qishui'].includes(source)) {
          await badge.locator('img').evaluate(img => img.decode());
          assert.match(await badge.locator('img').getAttribute('src'), new RegExp('/platform-icons/' + source + '\\.png$'));
        } else {
          assert.equal(await badge.locator('svg use').getAttribute('href'), source === 'local' ? '#i-app-local' : '#i-app-generic');
          assert.notEqual(await badge.evaluate(node => getComputedStyle(node).color), await badge.evaluate(node => getComputedStyle(node).backgroundColor));
        }
      }
    }
    await checkBadges(page.locator('.sh-discovery-list'), ['netease', 'netease', 'netease', 'netease']);
    await page.locator('.sh-recent-list .src-badge').first().waitFor();
    await checkBadges(page.locator('.sh-recent-list'), sources.slice(0, 4));
    await page.locator('.sh-action-recent').click();
    await page.locator('.sh-panel-body .sh-track').nth(6).waitFor();
    await checkBadges(page.locator('.sh-panel-body'), sources);
    for (const width of [1440, 390, 320]) {
      await page.setViewportSize({ width, height: 900 });
      await page.waitForTimeout(450);
      const badge = await page.locator('.sh-panel-body .src-badge').first().boundingBox();
      assert.ok(badge && Math.abs(badge.width - 16) < 1 && badge.x >= 0 && badge.x + badge.width <= width, JSON.stringify({ width, badge }));
      await page.locator('.sh-panel').screenshot({ path: path.join(output, 'recent-panel-' + width + '.png') });
      await page.screenshot({ path: path.join(output, 'recent-sources-' + width + '.png') });
    }
    await page.keyboard.press('Escape'); await page.setViewportSize({ width: 1440, height: 900 });
    await page.locator('#sh-query').fill('VIP');
    await page.getByRole('tab').filter({ hasText: '网易云' }).click();
    const rows = page.locator('.sh-panel-body .sh-track');
    await rows.first().locator('.vip-tag').waitFor();
    assert.equal(await rows.nth(1).locator('.vip-tag').count(), 0);
    assert.match(await rows.first().locator('.vip-tag').getAttribute('title'), /VIP 专享/);
    await checkBadges(page.locator('.sh-panel-body'), ['netease', 'netease']);
    for (const width of [1440, 390, 320]) {
      await page.setViewportSize({ width, height: 900 });
      const tag = await rows.first().locator('.vip-tag').boundingBox(), heading = await rows.first().locator('.sh-song-title').boundingBox();
      assert.ok(tag.width >= 25 && tag.x >= heading.x && tag.x + tag.width <= heading.x + heading.width + 1, 'VIP stays beside the truncated title');
      await page.screenshot({ path: path.join(output, 'search-' + width + '.png') });
    }
    await rows.first().locator('.sh-track-main').click();
    await page.waitForFunction(() => !!document.querySelector('.sh-panel-body .sh-track.has-error'));
    assert.equal(loads.at(-1).meta['online:netease:vip-0'].vip_only, true, 'VIP tracks still dispatch playback');
    await page.keyboard.press('Escape'); await page.setViewportSize({ width: 1440, height: 900 });
    await page.evaluate(items => {
      window.vipQueue = items.map((track, i) => ({ ...track, id: 'online:netease:' + track.id, duration: track.duration_ms, playing: i === 0 }));
      vipQueue[1] = { ...vipQueue[1], id: 'online:qq:queue-source', source: undefined };
      vipQueue.push({ id: 'source-local', title: '本地歌曲', artist: '空间音乐人' });
      const original = Stage.presentation;
      Stage.presentation = () => ({ ...original(), track: vipQueue[0], cover: vipQueue[0].cover, duration: 180000, position: 0, playing: false });
      Space3D.setQueue(vipQueue);
    }, tracks);
    await page.locator('#sp-page-toggle').click();
    const current = page.locator('#sp-shelf .s3d-sc.is-current');
    await current.locator('.vip-tag').waitFor();
    await page.locator('#sp-track-heading .vip-tag').waitFor();
    await page.locator('#sp-playlist-toggle').click();
    assert.equal(await page.locator('.sp-queue-item .vip-tag').count(), 1);
    await checkBadges(page.locator('#sp-playlist-body'), ['netease', 'qq', 'local']);
    await page.keyboard.press('Escape');
    const pixels = await sharp(await page.locator('#sp-canvas canvas').screenshot()).stats();
    assert.ok(pixels.channels.slice(0, 3).some(channel => channel.stdev > 2), 'stage remains nonblank');
    await page.evaluate(() => { vipQueue[0].vip_only = false; Space3D.setQueue(vipQueue); });
    await page.waitForFunction(() => !document.querySelector('#sp-track-heading .vip-tag'));
    assert.equal(await current.locator('.vip-tag').count(), 0, 'same-id update removes VIP');
    await page.evaluate(() => { vipQueue[0].vip_only = true; Space3D.setQueue(vipQueue); });
    await current.locator('.vip-tag').waitFor();
    for (const width of [1440, 390, 320]) {
      await page.setViewportSize({ width, height: 900 }); await page.waitForTimeout(500);
      const rect = await page.locator('#sp-track-heading .vip-tag').boundingBox();
      assert.ok(rect && rect.x >= 0 && rect.x + rect.width <= width, 'player VIP fits viewport');
      await page.screenshot({ path: path.join(output, 'stage-' + width + '.png') });
    }
    assert.deepEqual(errors, []);
    console.log('Space VIP and sources: recent/recommendation/search/queue platform icons, local/unknown fallback, loaded images, playback metadata, VIP updates, mobile layout and canvas passed.');
  } finally { await browser.close(); }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
