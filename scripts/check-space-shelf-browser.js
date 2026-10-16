#!/usr/bin/env node
// SPDX-License-Identifier: MIT
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const sharp = require(process.env.SHARP_MODULE || 'sharp');
const { uiUrl } = require('./ui-token');
const { readAssets } = require('./ui-assets');
const root = path.resolve(__dirname, '..');
const base = process.env.SPACE_BASE || 'http://127.0.0.1:18789';
const output = path.join(root, 'output/playwright/space-shelf');
const source = process.argv.includes('--source');

async function main() {
  fs.mkdirSync(output, { recursive: true });
  const browser = await chromium.launch({ channel: 'chrome', headless: true,
    args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const errors = [], evidence = { source, layouts: [] };
  try {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const assets = new Map(readAssets().map(asset => [asset.path, asset]));
    let settings;
    await context.route('**/*', async route => {
      const request = route.request(), url = new URL(request.url());
      if (url.origin !== base) return route.continue();
      if (url.pathname === '/v1/settings') {
        if (!settings) {
          const response = await route.fetch(); settings = await response.json();
          settings.space3d = { sceneSource: 'coast', qualityMode: 'low', playerAutoHide: false, cinema: false };
        }
        if (request.method() !== 'GET') Object.assign(settings, request.postDataJSON());
        return route.fulfill({ json: settings });
      }
      if (source && assets.has(url.pathname)) {
        const asset = assets.get(url.pathname);
        return route.fulfill({ contentType: asset.mime === 'JS' ? 'application/javascript' : 'text/css', body: fs.readFileSync(asset.file) });
      }
      if (source && url.pathname === '/') {
        const response = await route.fetch(), html = await response.text();
        const token = html.match(/window\.__VMUSIC_TOKEN__\s*=\s*("[^"]+")/);
        assert.ok(token, 'authenticated app HTML');
        return route.fulfill({ response, body: fs.readFileSync(path.join(root, 'plugin/ui/index.html'), 'utf8')
          .replace('__VMUSIC_TOKEN_VALUE__', JSON.parse(token[1])) });
      }
      return route.continue();
    });
    const page = await context.newPage();
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(uiUrl(base), { waitUntil: 'domcontentloaded' });
    await page.locator('#space3d-entry').click();
    await page.waitForFunction(() => Space3D.stats().renderer?.state === 'ready');
    const cover = 'data:image/png;base64,' + (await sharp({ create: { width: 96, height: 96, channels: 3, background: '#c85974' } }).png().toBuffer()).toString('base64');
    async function installQueue() {
      await page.evaluate(coverUrl => {
        window.shelfQueue = Array.from({ length: 1000 }, (_, i) => ({
          id: 'online:' + (i % 2 ? 'qq' : 'netease') + ':shelf-' + i,
          title: i === 12 ? '三维歌单架 · 当前曲' : '队列曲目 ' + i,
          artist: i % 2 ? 'QQ artist' : '网易云 artist', album: 'Shelf album',
          duration: 240000, cover: coverUrl, playing: i === 12
        }));
        const original = Stage.presentation;
        Stage.presentation = () => ({ ...original(), track: shelfQueue[12], cover: coverUrl,
          duration: 240000, position: 60000, playing: false });
        const lyricDocument = { lines: [{ text: '歌词与歌单架共同显示', start_ms: 0 }], index: 0 };
        Stage.lyrics = () => lyricDocument;
        Stage.lyricTokens = () => [];
        Space3D.setQueue(shelfQueue);
        window.shelfCommands = [];
        document.addEventListener('stage:control', event => {
          if (!['queue-play', 'toggle'].includes(event.detail.action)) return;
          event.stopImmediatePropagation(); shelfCommands.push(event.detail);
        }, true);
        window.shelfCanvas = document.querySelector('#sp-canvas canvas');
      }, cover);
    }
    await installQueue();
    assert.equal(await page.locator('#sp-shelf .s3d-sc').count(), 0, 'home does not build hidden queue cards');
    assert.equal(await page.evaluate(() => Stage.gateRates().find(g => g.name === 'space3d-shelf').target), 0, 'home stops shelf frames');
    await page.evaluate(() => Space3D.enterStage());
    const current = page.locator('#sp-shelf .s3d-sc.is-current');
    await current.waitFor({ state: 'visible' });
    await page.waitForTimeout(1400);
    assert.equal(await current.getAttribute('data-id'), 'online:netease:shelf-12');
    assert.ok(await page.locator('#sp-shelf .s3d-sc').count() <= 10, '1000 tracks retain a bounded card window');
    await page.waitForFunction(() => document.querySelector('#sp-shelf .is-current img').naturalWidth > 0);
    const pixels = await sharp(await page.locator('#sp-canvas canvas').screenshot()).stats();
    assert.ok(pixels.channels.slice(0, 3).some(channel => channel.stdev > 8), 'nonblank world behind shelf');
    evidence.canvas = pixels.channels.slice(0, 3).map(({ mean, stdev }) => ({ mean, stdev }));
    async function selectMode(mode) {
      await page.locator('#sp-console-toggle').click();
      await page.locator('#sp-tab-display').click();
      await page.locator('#sp-shelf-mode').selectOption(mode);
      await page.locator('#sp-sheet-close').click();
      await page.waitForTimeout(1100);
    }
    await current.click();
    assert.equal(await page.evaluate(() => shelfCommands.at(-1).action), 'toggle');
    const next = page.locator('#sp-shelf [data-index="13"]');
    await next.click();
    assert.deepEqual(await page.evaluate(() => ({ action: shelfCommands.at(-1).action, value: shelfCommands.at(-1).value })),
      { action: 'queue-play', value: 'online:qq:shelf-13' });
    await current.focus(); await page.keyboard.press('Enter');
    assert.equal(await page.evaluate(() => shelfCommands.at(-1).action), 'toggle', 'keyboard activates card');
    const beforeSpace = await page.evaluate(() => shelfCommands.length);
    await page.keyboard.press('Space');
    assert.equal(await page.evaluate(() => shelfCommands.length), beforeSpace + 1, 'Space activates only once');
    const initialPose = await current.getAttribute('style');
    const camera = await page.evaluate(() => Space3D.stats().camera);
    await current.hover(); await page.mouse.wheel(0, 120); await page.waitForTimeout(650);
    assert.notEqual(await current.getAttribute('style'), initialPose, 'wheel browses shelf');
    assert.deepEqual(await page.evaluate(() => Space3D.stats().camera), camera, 'card wheel leaves camera alone');
    const commandCount = await page.evaluate(() => shelfCommands.length);
    const bounds = await current.boundingBox();
    await page.mouse.move(bounds.x + bounds.width / 2, bounds.y + bounds.height / 2);
    await page.mouse.down(); await page.mouse.move(bounds.x + bounds.width / 2, bounds.y + bounds.height / 2 + 110, { steps: 8 });
    await page.mouse.up();
    assert.equal(await page.evaluate(() => shelfCommands.length), commandCount, 'drag browses without playback');
    await page.evaluate(() => {
      shelfQueue[12] = { ...shelfQueue[12], title: '异步补全歌名', artist: 'Updated artist' };
      Space3D.setQueue(shelfQueue);
    });
    assert.equal(await current.locator('.s3d-sc-title').textContent(), '异步补全歌名');
    await page.evaluate(() => Space3D.setQueue(shelfQueue.map((item, i) => ({ ...item, playing: i === 999 }))));
    await page.waitForFunction(() => document.querySelector('#sp-shelf .is-current')?.dataset.index === '999');
    assert.ok(await page.locator('#sp-shelf .s3d-sc').count() <= 10, 'jump to the final track keeps the bounded window');
    await page.evaluate(() => Space3D.setQueue(shelfQueue));
    await selectMode('stage');
    assert.equal(await page.evaluate(() => Space3D.preferences().shelfMode), 'stage');
    assert.equal(settings.space3d.shelfMode, 'stage', 'mode reaches settings persistence owner');
    assert.equal(await page.evaluate(() => document.querySelector('#sp-canvas canvas') === shelfCanvas), true);
    for (const [width, height] of [[1440, 900], [390, 844], [844, 390]]) {
      await page.setViewportSize({ width, height });
      for (const mode of ['side', 'stage']) {
        await selectMode(mode);
        await page.locator('#sp-console-toggle').click();
        assert.equal(await page.locator('#sp-shelf .s3d-shelf-plane').evaluate(node => node.inert), true, 'console blocks shelf controls');
        if (width <= 760) assert.equal(await page.evaluate(() => Stage.gateRates().find(g => g.name === 'space3d-shelf').target), 0, 'narrow console stops hidden shelf');
        await page.locator('#sp-sheet-close').click(); await page.waitForTimeout(1100);
        const rect = await current.boundingBox(), player = await page.locator('#sp-bar').boundingBox();
        assert.ok(rect.x >= 0 && rect.x + rect.width <= width, 'current card fits horizontally: ' + width + ' ' + mode);
        assert.ok(rect.y >= 0 && rect.y + rect.height <= player.y, 'current card stays above player: ' + width + ' ' + mode);
        evidence.layouts.push({ width, height, mode, rect, player });
        await page.screenshot({ path: path.join(output, `${width}-${height}-${mode}.png`) });
      }
      await page.locator('#sp-stage-immersive').click();
      assert.equal(await page.locator('#sp-shelf .s3d-sc').count(), 0, 'immersion releases card window');
      assert.equal(await page.evaluate(() => Stage.gateRates().find(g => g.name === 'space3d-shelf').target), 0, 'immersion stops shelf frames');
      await page.keyboard.press('Escape'); await current.waitFor({ state: 'visible' });
    }
    await page.setViewportSize({ width: 1440, height: 900 });
    await selectMode('off');
    assert.equal(await page.locator('#sp-shelf .s3d-sc').count(), 0);
    await selectMode('side');
    assert.equal(await page.locator('#sp-stage-fullscreen').count(), 0, 'native fullscreen entry is removed');
    assert.equal(await current.isVisible(), true, 'shelf remains in the stage');
    await page.locator('#sp-stage-immersive').click();
    assert.equal(await page.locator('#sp-shelf .s3d-sc').count(), 0);
    await page.keyboard.press('Escape');
    await page.evaluate(() => Space3D.goHome());
    assert.equal(await page.locator('#sp-shelf .s3d-sc').count(), 0);
    await page.evaluate(() => Space3D.close());
    assert.equal(await page.evaluate(() => Stage.gateRates().find(g => g.name === 'space3d-shelf').target), 0, 'closed space stops shelf frames');
    assert.equal(await page.locator('#sp-canvas canvas').count(), 0, 'close releases world canvas');
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.locator('#space3d-entry').click();
    await page.waitForFunction(() => Space3D.stats().renderer?.state === 'ready');
    assert.equal(await page.evaluate(() => Space3D.preferences().shelfMode), 'side', 'saved mode restores');
    await page.evaluate(() => Space3D.close());
    assert.deepEqual(errors, [], 'no browser errors');
    fs.writeFileSync(path.join(output, 'evidence.json'), JSON.stringify(evidence, null, 2));
    console.log('Space shelf: queue identity, gestures, keyboard, metadata, bounded cards, persistence, immersion and responsive canvas checks passed');
  } finally { await browser.close(); }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
