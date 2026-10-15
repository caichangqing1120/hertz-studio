// SPDX-License-Identifier: MIT
'use strict';
const assert = require('node:assert/strict'), fs = require('node:fs'), path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const sharp = require(process.env.SHARP_MODULE || 'sharp');
const { uiUrl } = require('./ui-token');
const base = process.env.SPACE_BASE || 'http://127.0.0.1:18815';
const output = path.resolve(__dirname, '../output/playwright/space-material');
async function main() {
  fs.mkdirSync(output, { recursive: true });
  const browser = await chromium.launch({ channel: 'chrome', headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const calls = [], errors = [], layouts = [];
  try {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    let settings, subscribed = false, radio = { active: false, tracks: [], index: 0 };
    const show = { id: 'spatial-feed', title: '声音里的城市', author: '城市漫游', feed_url: 'https://feeds.example.org/city.xml', description: '从街头、书店和夜晚的声音里，听见一座城市。', episode_count: 2, cover: base + '/space-scene-preview/cover-sphere.jpg' };
    await context.route('**/v1/**', async route => {
      const request = route.request(), url = new URL(request.url());
      if (url.origin !== base) return route.continue();
      if (url.pathname === '/v1/settings') {
        if (!settings) { settings = await (await route.fetch()).json(); settings.space3d = { sceneSource: 'coast', qualityMode: 'low', playerAutoHide: false, cinema: false, shelfMode: 'off' }; }
        if (request.method() !== 'GET') Object.assign(settings, request.postDataJSON());
        return route.fulfill({ json: settings });
      }
      if (url.pathname === '/v1/home/quote') return route.fulfill({ json: { hitokoto: '答案在路上，自由在风里。', from: '每日一言' } });
      if (url.pathname === '/v1/online/radio') {
        if (request.method() === 'POST') {
          const body = request.postDataJSON(); calls.push(['radio', body.action]);
          radio = { active: body.action !== 'stop', tracks: [], index: 0 };
        }
        return route.fulfill({ json: radio });
      }
      if (url.pathname === '/v1/podcasts/subscriptions') {
        if (request.method() === 'POST') { calls.push(['subscribe', request.postDataJSON()]); subscribed = true; return route.fulfill({ json: { show: { ...show, subscribed } } }); }
        return route.fulfill({ json: { shows: subscribed ? [{ ...show, subscribed }] : [] } });
      }
      if (url.pathname === '/v1/podcasts/search') {
        calls.push(['search', url.searchParams.get('q')]);
        return route.fulfill({ json: { shows: [{ ...show, subscribed }] } });
      }
      if (url.pathname === '/v1/podcasts/feed') return route.fulfill({ json: { show: { ...show, subscribed }, total: 2, episodes: [1,2].map(index => ({ id: 'city-' + index, source: 'podcast', title: '第 ' + index + ' 期 · 在城市里散步', artist: show.author, album: show.title, duration_ms: 1860000, playable: true, published_at: '2026-10-15T10:00:00Z', description: '一段关于城市的声音记录。' })) } });
      if (url.pathname === '/v1/online/play' && request.method() === 'POST') {
        calls.push(['play', request.postDataJSON()]);
        return route.fulfill({ status: 503, json: { error: { code: 'source_unavailable', message: '测试音频暂不可用' } } });
      }
      return route.continue();
    });
    const page = await context.newPage(); page.on('pageerror', error => errors.push(error.message));
    await page.goto(uiUrl(base), { waitUntil: 'load' });
    await page.locator('#space3d-entry').click();
    await page.waitForFunction(() => Space3D.stats().renderer?.state === 'ready');
    await page.evaluate(() => {
      window.originalCanvas = document.querySelector('#sp-canvas canvas');
      window.originalRadio = document.querySelector('.online-radio'); window.radioParent = originalRadio.parentNode;
      window.originalPodcasts = document.querySelector('#view-podcasts'); window.podcastParent = originalPodcasts.parentNode;
      window.originalPodcastHidden = originalPodcasts.hidden;
    });
    assert.equal(await page.locator('.sh-actions > button').count(), 6);
    for (const [width,height] of [[1440,900],[1087,897],[1024,768],[320,844],[390,844]]) {
      await page.setViewportSize({ width, height }); await page.waitForTimeout(450);
      const layout = await page.locator('#sp-home').evaluate(home => ({ width: innerWidth, height: innerHeight, overflow: home.scrollWidth > home.clientWidth, scrollHeight: home.scrollHeight, clientHeight: home.clientHeight, actions: Array.from(home.querySelectorAll('.sh-action')).map(button => button.getBoundingClientRect().toJSON()) }));
      assert.equal(layout.overflow, false, 'no horizontal home overflow at ' + width);
      for (const rect of layout.actions) assert.ok(rect.left >= 0 && rect.right <= width, 'entry fits at ' + width);
      if (width > 800) assert.ok(layout.scrollHeight <= layout.clientHeight + 1, 'desktop home fits at ' + width + ': ' + JSON.stringify(layout));
      layouts.push(layout); await page.screenshot({ path: path.join(output, 'home-' + width + '.png') });
      await page.locator('.sh-action-radio').click();
      assert.equal(await page.evaluate(() => originalRadio === document.querySelector('.sh-panel .online-radio')), true, 'radio uses its original live DOM');
      assert.equal(await page.locator('.sh-action-radio').getAttribute('aria-expanded'), 'true');
      await page.waitForTimeout(450); await page.screenshot({ path: path.join(output, 'radio-' + width + '.png') });
      await page.keyboard.press('Escape');
      assert.equal(await page.evaluate(() => originalRadio.parentNode === radioParent), true, 'radio returns to its original owner');
      await page.locator('.sh-action-podcasts').click();
      assert.equal(await page.evaluate(() => originalPodcasts === document.querySelector('.sh-panel #view-podcasts')), true);
      assert.equal(await page.locator('#podcast-query').isVisible(), true);
      await page.waitForTimeout(450); await page.screenshot({ path: path.join(output, 'rss-' + width + '.png') });
      await page.keyboard.press('Escape');
      assert.equal(await page.evaluate(() => originalPodcasts.parentNode === podcastParent && originalPodcasts.hidden === originalPodcastHidden), true);
      assert.equal(await page.locator('.sh-action-podcasts').evaluate(node => node === document.activeElement), true, 'Escape restores entry focus');
    }
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.locator('.sh-action-radio').click(); await page.locator('#radio-start').click();
    await page.waitForFunction(() => !document.querySelector('#radio-stop').hidden);
    await page.locator('#radio-stop').click();
    await page.waitForFunction(() => !document.querySelector('#radio-start').hidden);
    assert.deepEqual(calls.filter(call => call[0] === 'radio').map(call => call[1]), ['start','stop']);
    await page.evaluate(() => SpaceHome.focusSearch());
    assert.equal(await page.evaluate(() => originalRadio.parentNode === radioParent), true, 'search replacement restores radio');
    await page.keyboard.press('Escape');
    await page.locator('.sh-action-podcasts').click();
    await page.locator('#podcast-query').fill('城市'); await page.locator('#podcast-query').press('Enter');
    await page.locator('.podcast-show').click(); await page.locator('.podcast-episode').first().waitFor();
    await page.locator('.podcast-episode-play').first().click();
    await page.waitForFunction(() => document.querySelector('#toast').textContent.includes('测试音频暂不可用'));
    assert.equal(calls.find(call => call[0] === 'play')[1].source, 'podcast', 'podcast playback retains its provider identity');
    await page.locator('#podcast-back').click();
    await page.locator('#podcast-import-details > summary').click();
    await page.locator('#podcast-feed-url').fill(show.feed_url); await page.locator('#podcast-import-submit').click();
    await page.waitForFunction(() => document.querySelector('#podcast-subscribe').textContent === '取消订阅');
    assert.equal(calls.find(call => call[0] === 'subscribe')[1].feed_url, show.feed_url);
    await page.screenshot({ path: path.join(output, 'rss-detail.png') });
    await page.keyboard.press('Escape');
    assert.equal(await page.evaluate(() => originalPodcasts.parentNode === podcastParent), true, 'home navigation releases mounted podcast view');
    await page.locator('#sp-page-toggle').click(); await page.locator('#sp-console-toggle').click();
    const retired = ['aurora-dome', 'sound-terrain', 'resonant-rings'];
    assert.equal(await page.evaluate(ids => SpaceStagePure.catalog().some(scene => ids.includes(scene.id)), retired), false);
    for (const id of retired) {
      assert.equal(await page.locator('#sp-fx-grid [data-scene="' + id + '"]').count(), 0, id + ' absent from cards');
      assert.equal(await page.locator('#sp-source option[value="' + id + '"]').count(), 0, id + ' absent from scene selector');
    }
    for (const [sceneSource, field] of retired.map(id => [id]).concat(['aurora', 'terrain', 'resonance'].map(field => ['immersive', field]))) {
      await page.evaluate(({ sceneSource, field, retired }) => {
        const saved = Space3D.preferences();
        Space3D.configure({ ...saved, sceneSource, field, sceneStates: {
          ...saved.sceneStates, ...Object.fromEntries(retired.map(id => [id, { stateVersion: 1, params: {} }]))
        } });
      }, { sceneSource, field, retired });
      assert.equal(await page.evaluate(() => Space3D.sourceId()), 'coast', 'removed saved selection falls back to coast');
      assert.equal(await page.evaluate(ids => ids.some(id => Object.hasOwn(Space3D.preferences().sceneStates, id)), retired), false, 'removed scene state discarded');
    }
    await page.waitForFunction(() => Space3D.stats().renderer?.id === 'coast' && Space3D.stats().renderer.state === 'ready');
    const inactive = await page.locator('.sp-card:not(.is-active)').first().evaluate(node => getComputedStyle(node).boxShadow);
    const selected = page.locator('.sp-card[data-scene="cover-sphere"]'); await selected.click();
    await page.waitForFunction(() => Space3D.stats().renderer?.id === 'cover-sphere' && Space3D.stats().renderer.state === 'ready');
    assert.equal(await page.locator('#sp-sheet').evaluate(node => node.inert), false, 'scene selection retains the console');
    assert.equal(await selected.getAttribute('aria-pressed'), 'true');
    assert.notEqual(await selected.evaluate(node => getComputedStyle(node).boxShadow), inactive, 'selection has distinct relief');
    assert.equal(await selected.evaluate(node => node === document.activeElement), true, 'selection preserves keyboard focus');
    await selected.scrollIntoViewIfNeeded(); await page.waitForTimeout(450);
    await page.screenshot({ path: path.join(output, 'selected-scene.png') });
    assert.equal(await page.evaluate(() => originalCanvas === document.querySelector('#sp-canvas canvas')), true, 'scene selection retains the shared canvas');
    const pixels = await sharp(await page.locator('#sp-canvas canvas').screenshot()).stats();
    assert.ok(pixels.channels.slice(0,3).some(channel => channel.stdev > 2), 'selected scene renders visible pixels');
    for (const width of [320,390]) {
      await page.setViewportSize({width,height:844}); await selected.scrollIntoViewIfNeeded(); await page.waitForTimeout(450);
      const rect = await selected.boundingBox(); assert.ok(rect.x >= 0 && rect.x + rect.width <= width, 'selected scene fits mobile');
      assert.equal(await selected.locator('img').evaluate(img => img.complete && img.naturalWidth > 0), true, 'scene thumbnail loads');
      await page.screenshot({path:path.join(output,'selected-scene-'+width+'.png')});
    }
    await page.emulateMedia({ reducedMotion: 'reduce' });
    assert.equal(await selected.evaluate(node => getComputedStyle(node).transform), 'none');
    await page.emulateMedia({ reducedMotion: 'no-preference' });
    await page.setViewportSize({width:1440,height:900});
    await page.keyboard.press('Escape');
    await page.locator('#sp-more').click(); await page.locator('#sp-fx-toggle').click();
    assert.equal(await page.locator('#sp-tab-stage').getAttribute('aria-selected'), 'true', 'More reuses the stage console');
    await page.keyboard.press('Escape'); await page.locator('#sp-page-toggle').click(); await page.locator('.sh-action-podcasts').click();
    await page.evaluate(() => Space3D.close());
    assert.equal(await page.evaluate(() => originalPodcasts.parentNode === podcastParent && !originalPodcasts.classList.contains('sh-embedded-view')), true, 'closing space restores native podcast view');
    assert.deepEqual(errors, []);
    fs.writeFileSync(path.join(output, 'evidence.json'), JSON.stringify({ layouts, calls, errors }, null, 2));
    console.log('Space material: six entries, FM start/stop, RSS search/import/play dispatch, live DOM restoration, scene selection/focus, responsive layout and reduced motion passed.');
  } finally { await browser.close(); }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
