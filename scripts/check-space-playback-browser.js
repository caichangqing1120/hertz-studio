#!/usr/bin/env node
// SPDX-License-Identifier: MIT
// Real local-library/API/WS playback through the embedded space interface.
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const { uiToken, uiUrl } = require('./ui-token');
const root = path.resolve(__dirname, '..');
const base = process.env.SPACE_BASE || 'http://127.0.0.1:18789';
const token = uiToken();
async function api(method, endpoint, body) {
  const response = await fetch(base + endpoint, { method, headers: { Authorization: 'Bearer ' + token,
    'Content-Type': 'application/json' }, body: body === undefined ? undefined : JSON.stringify(body) });
  assert.ok(response.ok, method + ' ' + endpoint + ': ' + response.status);
  return response.json();
}
async function until(read, predicate) {
  const deadline = Date.now() + 15000;
  let value;
  while (Date.now() < deadline) {
    value = await read();
    if (predicate(value)) return value;
    await new Promise(resolve => setTimeout(resolve, 120));
  }
  throw new Error('State did not settle: ' + JSON.stringify(value));
}
async function fixtures() {
  const dir = path.join(root, 'output/playwright/space-playback-fixtures');
  fs.mkdirSync(dir, { recursive: true });
  const samples = 8000 * 120, wav = Buffer.alloc(44 + samples * 2);
  wav.write('RIFF', 0); wav.writeUInt32LE(wav.length - 8, 4); wav.write('WAVEfmt ', 8);
  wav.writeUInt32LE(16, 16); wav.writeUInt16LE(1, 20); wav.writeUInt16LE(1, 22);
  wav.writeUInt32LE(8000, 24); wav.writeUInt32LE(16000, 28);
  wav.writeUInt16LE(2, 32); wav.writeUInt16LE(16, 34); wav.write('data', 36);
  wav.writeUInt32LE(samples * 2, 40);
  for (let i = 0; i < samples; i++) wav.writeInt16LE(Math.round(Math.sin(i * Math.PI * 2 * 220 / 8000) * 1200), 44 + i * 2);
  for (let i = 1; i <= 2; i++) fs.writeFileSync(path.join(dir, 'Space Playback ' + i + '.wav'), wav);
  await api('POST', '/v1/library/scan', { root: dir });
  const result = await until(() => api('GET', '/v1/tracks?limit=200'), data => data.tracks.filter(t => t.path.startsWith(dir)).length === 2);
  return result.tracks.filter(t => t.path.startsWith(dir));
}
async function main() {
  const health = await api('GET', '/v1/health');
  assert.equal(health.backend, 'null', 'playback fixtures require the isolated null backend');
  const tracks = await fixtures();
  const browser = await chromium.launch({ channel: 'chrome', args: ['--use-angle=swiftshader',
    '--enable-unsafe-swiftshader', '--disable-features=LocalNetworkAccessChecks,LocalNetworkAccessChecksWebSockets'] });
  const output = path.join(root, 'output/playwright/space-playback');
  fs.mkdirSync(output, { recursive: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    page.setDefaultTimeout(90000);
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(uiUrl(base));
    await page.waitForFunction(() => window.Space3D && document.getElementById('conn').textContent === '服务已连接');
    await page.locator('#space3d-entry').click();
    await page.locator('#sp-player-handle').click();
    await page.locator('#sp-more').click();
    if (await page.evaluate(() => Space3D.preferences().playerAutoHide)) await page.locator('#sp-autohide').click();
    await page.locator('#sp-fab').click();
    await page.locator('#sp-tab-display').click();await page.locator('#sp-quality').selectOption('low');
    await until(() => api('GET', '/v1/settings'), s => s.space3d?.qualityMode === 'low');
    assert.equal(await page.locator('#sp-canvas canvas').count(), 1, 'home quality changes reuse the background renderer');
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => window.Space3D && document.getElementById('conn').textContent === '服务已连接');
    await page.locator('#space3d-entry').click();
    assert.equal(await page.evaluate(() => Space3D.preferences().qualityMode), 'low', 'quality is restored from the real settings backend');
    await page.locator('.sh-action-library').click();
    await page.locator('.sh-panel-body .sh-track[data-track-id="' + tracks[0].id + '"] .sh-track-main').click();
    let state = await until(() => api('GET', '/v1/state'), s => s.playing && s.track_id === tracks[0].id);
    assert.equal(await page.evaluate(() => Space3D.stats().page), 'home', 'selecting music stays home');
    await page.keyboard.press('Escape');
    await page.locator('#sp-player-handle').click(); await page.locator('#sp-volume-toggle').click();
    await page.locator('#sp-volume').fill('37');
    await until(() => api('GET', '/v1/state'), s => Math.abs(s.volume - .37) < .005);
    await page.locator('#sp-seek').fill('25000');
    await until(() => api('GET', '/v1/state'), s => s.position_ms >= 24000);
    await page.locator('#sp-page-toggle').click();
    await page.waitForFunction(() => Space3D.stats().renderer?.frameCount > 0, null, { timeout: 20000 });
    state = await api('GET', '/v1/state');
    assert.equal(state.track_id, tracks[0].id); assert.ok(state.playing && state.position_ms >= 24000);
    await page.screenshot({ path: path.join(output, 'real-playback-stage.png') });
    await page.locator('#sp-page-toggle').click();
    assert.equal(await page.locator('#sp-canvas canvas').count(), 1);
    await page.locator('#sp-play').click();
    await until(() => api('GET', '/v1/state'), s => !s.playing);
    await page.locator('#sp-playlist-toggle').click();
    assert.ok(await page.locator('.sp-queue-item').count() >= 2, 'real library queue shared with space');
    await page.keyboard.press('Escape');
    for (let i = 0; i < 20; i++) {
      await page.evaluate(() => { Space3D.close(); Space3D.open(); });
      assert.equal(await page.evaluate(() => Space3D.stats().page), 'home');
      assert.equal(await page.locator('#sp-canvas canvas').count(), 1);
    }
    for (const id of ['zodiac', 'lyric-sonnet', 'coast']) {
      await page.evaluate(id => Space3D.enterStage(id), id);
      await page.waitForFunction(id => (id === 'lyric-sonnet' ? Space3D.stats().renderer?.lyricId === id && Space3D.stats().renderer.id === 'zodiac' : Space3D.stats().renderer?.id === id) && Space3D.stats().renderer.frameCount > 0, id, { timeout: 20000 });
      assert.equal(await page.evaluate(() => Space3D.stats().renderer.effectiveQuality), 'low', 'scene changes apply the saved quality');
      await page.evaluate(() => Space3D.goHome());
      assert.ok(await page.evaluate(() => Space3D.stats().renderer));
    }
    state = await api('GET', '/v1/state');
    assert.equal(state.track_id, tracks[0].id); assert.equal(state.playing, false);
    assert.ok(state.position_ms >= 24000, 'navigation never reloads current track');
    await page.evaluate(() => Space3D.enterStage('coast'));
    const currentCard = page.locator('#sp-shelf .s3d-sc.is-current');
    await currentCard.waitFor({ state: 'visible' });
    assert.equal(await currentCard.getAttribute('data-id'), tracks[0].id, 'shelf follows the real current track');
    const nextCard = page.locator('#sp-shelf .s3d-sc').filter({ has: page.locator('.s3d-sc-title', { hasText: tracks[1].title }) });
    await nextCard.click();
    const shelfPlayback = await until(() => api('GET', '/v1/state'), s => s.track_id === tracks[1].id && s.playing);
    await page.waitForFunction(id => document.querySelector('#sp-shelf .is-current')?.dataset.id === id, tracks[1].id);
    await currentCard.click();
    await until(() => api('GET', '/v1/state'), s => s.track_id === tracks[1].id && !s.playing);
    await page.screenshot({ path: path.join(output, 'real-playback-shelf.png') });
    assert.deepEqual(errors, []);
    fs.writeFileSync(path.join(output, 'evidence.json'), JSON.stringify({ library: true, playback: true,
      seek: true, volume: true, queue: true, shelfPlayback: true, shelfTrackId: shelfPlayback.track_id, qualityPersistence: true, homeCycles: 20, stageCycles: 3,
      trackId: state.track_id, position: state.position_ms, backend: health.backend, audibleOutput: 'unmeasured' }, null, 2));
    console.log('Real space playback: scan, library play, shared queue, shelf jump/pause, seek, volume, continuous navigation, 20 home cycles and 3 stage cycles passed');
  } finally { await browser.close(); }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
