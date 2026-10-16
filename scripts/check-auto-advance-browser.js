// SPDX-License-Identifier: MIT
// Uses a real, muted audio device: null playback cannot emit natural EOF.
'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const { startFixture } = require('./ui-browser-fixture');

const ids = ['online:netease:advance1', 'online:netease:advance2', 'online:netease:advance3'];
const meta = Object.fromEntries(ids.map((id, i) => [id, {
  source: 'netease', onlineId: 'advance' + (i + 1), title: 'Auto Advance ' + (i + 1),
  // Deliberately differs from the media: only actual EOF may advance playback.
  duration_ms: 90000,
}]));

function prepareData(data) {
  const cache = path.join(data, 'cache/online');
  fs.mkdirSync(cache, { recursive: true });
  const samples = 8000 * 2.5;
  const wav = Buffer.alloc(44 + samples * 2);
  wav.write('RIFF'); wav.writeUInt32LE(wav.length - 8, 4); wav.write('WAVEfmt ', 8);
  wav.writeUInt32LE(16, 16); wav.writeUInt16LE(1, 20); wav.writeUInt16LE(1, 22);
  wav.writeUInt32LE(8000, 24); wav.writeUInt32LE(16000, 28);
  wav.writeUInt16LE(2, 32); wav.writeUInt16LE(16, 34); wav.write('data', 36);
  wav.writeUInt32LE(samples * 2, 40);
  // Different source/output rates force ordinary Ended rather than gapless.
  ids.forEach((id, i) => fs.writeFileSync(path.join(cache, 'netease-advance' + (i + 1) + '-standard.wav'), wav));
}

async function until(read, predicate, label, timeout = 12000) {
  const deadline = Date.now() + timeout;
  let value;
  while (Date.now() < deadline) {
    value = await read();
    if (predicate(value)) return value;
    await new Promise(resolve => setTimeout(resolve, 60));
  }
  throw new Error(label + ': ' + JSON.stringify(value));
}

async function main() {
  const fixture = await startFixture({ backend: process.env.AUTO_ADVANCE_BACKEND || 'cpal', prepareData });
  let browser;
  try {
    await fixture.api('/v1/player/volume', 'POST', { volume: 0 });
    await fixture.api('/v1/player/mode', 'POST', { mode: 'repeat' });
    browser = await chromium.launch({ channel: 'chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
    const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    await fixture.connect(context);
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(fixture.base);
    await page.waitForFunction(() => window.Space3D && document.getElementById('conn').textContent === '\u670d\u52a1\u5df2\u8fde\u63a5');
    await page.evaluate(meta => {
      for (const [id, track] of Object.entries(meta)) Online.remember(id, { id, ...track });
    }, meta);
    for (const surface of ['2d', '3d-home', '3d-stage']) {
      await page.evaluate(surface => {
        if (surface === '2d') Space3D.close();
        else {
          Space3D.open();
          if (surface === '3d-stage') Space3D.enterStage('zodiac');
          else Space3D.goHome();
        }
      }, surface);
      await fixture.api('/v1/player/load', 'POST', { track_id: ids[0], queue: ids, meta });
      for (let i = 0; i < ids.length; i++) {
        const state = await until(() => fixture.api('/v1/state'), state => state.track_id === ids[i] && state.playing,
          surface + ' advances to ' + ids[i]);
        assert.equal(state.duration_ms, 2500, 'decoder supplies the actual media duration');
        await page.waitForFunction(title => document.getElementById('bar-title').textContent.includes(title), meta[ids[i]].title);
        if (surface !== '2d') await page.waitForFunction(title => document.getElementById('sp-track-title').textContent.includes(title), meta[ids[i]].title);
      }
      await until(() => fixture.api('/v1/state'), state => state.track_id === ids[0] && state.playing, surface + ' wraps queue');
      await fixture.api('/v1/player/stop', 'POST', {});
      console.log('PASS ' + surface + ': online EOF advances twice, updates presentation and wraps the queue');
    }
    assert.deepEqual(errors, []);
  } finally {
    if (browser) await browser.close();
    await fixture.close();
  }
}

main().catch(error => { console.error(error); process.exitCode = 1; });
