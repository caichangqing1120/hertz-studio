#!/usr/bin/env node
// SPDX-License-Identifier: MIT
// Run against an isolated DBX desktop profile with the candidate already installed.
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const sharp = require(process.env.SHARP_MODULE || 'sharp');
const { execFile } = require('node:child_process');
const { promisify } = require('node:util');
const runFile = promisify(execFile);
const root = path.resolve(__dirname, '..');
const output = process.env.DBX_EVIDENCE_DIR ? path.resolve(process.env.DBX_EVIDENCE_DIR) : path.join(root, 'output/space-dbx-native');
const cdp = process.env.DBX_CDP || 'http://127.0.0.1:18941';
const nativeHost = process.env.DBX_NATIVE_HOST || 'DBX 0.6.44 / WebView2';

async function main() {
  fs.mkdirSync(output, { recursive: true });
  const browser = await chromium.connectOverCDP(cdp);
  const errors = [];
  let frame;
  try {
    const page = browser.contexts()[0].pages().find(p => p.url().startsWith('http://tauri.localhost/'));
    assert.ok(page, 'native Tauri window');
    const frames = page.frames().filter(f => f !== page.mainFrame());
    for (const candidate of frames) if (await candidate.evaluate(() => !!window.Space3D).catch(() => false)) frame = candidate;
    assert.ok(frame, 'open the Hertz Studio workbench before running');
    frame.on('pageerror', error => errors.push(error.message));
    page.on('pageerror', error => errors.push(error.message));
    await frame.waitForFunction(() => document.getElementById('conn').textContent === '服务已连接');
    assert.equal(await frame.evaluate(() => hertzHost.isDbx), true);
    const api = (method, endpoint, body, query) => frame.evaluate(async args => {
      const response = await dbxPlugin.invoke(args.endpoint.replace(/^\//, ''), { op: args.method, body: args.body, query: args.query || {} });
      if (response.status < 200 || response.status >= 300) throw new Error(args.endpoint + ': ' + response.status);
      return response.body;
    }, { method, endpoint, body, query });
    async function until(read, predicate) {
      const deadline = Date.now() + 30000;
      while (Date.now() < deadline) {
        const value = await read(); if (predicate(value)) return value;
        await new Promise(resolve => setTimeout(resolve, 150));
      }
      throw new Error('Native state did not settle');
    }
    const health = await api('GET', '/v1/health');
    assert.equal(health.backend, 'null', 'isolated acceptance uses null audio');
    if (process.argv.includes('--restart') || process.argv.includes('--soak')) {
      const preferences = await frame.evaluate(() => Space3D.preferences());
      assert.equal(preferences.qualityMode, 'low', 'saved quality after native restart');
      if (process.argv.includes('--restart')) assert.equal(preferences.sceneSource, 'cover-wall', 'last scene after native restart');
      await frame.evaluate(() => Space3D.open());
      assert.equal(await frame.evaluate(() => Space3D.stats().page), 'home');
      assert.equal(await frame.locator('#sp-canvas canvas').count(), 1);
      await frame.evaluate(() => Space3D.enterStage());
      await frame.waitForFunction(() => Space3D.stats().renderer?.frameCount > 0);
      assert.equal(await frame.evaluate(() => Space3D.stats().renderer.id), preferences.sceneSource);
      assert.equal(await frame.evaluate(() => Space3D.stats().renderer.effectiveQuality), 'low');
      await frame.evaluate(() => Space3D.goHome());
      assert.equal(await frame.locator('#sp-canvas canvas').count(), 1);
      if (process.argv.includes('--restart')) {
        const evidencePath = path.join(output, 'evidence.json');
        const evidence = JSON.parse(fs.readFileSync(evidencePath, 'utf8'));
        evidence.restartPersistence = { qualityMode: 'low', restoredScene: preferences.sceneSource, entryPage: 'home', homeCanvasCount: 1 };
        fs.writeFileSync(evidencePath, JSON.stringify(evidence, null, 2));
        console.log('Native restart: saved quality/scene restored behind the home layer');
      }
      if (process.argv.includes('--soak')) await soak(frame, page, api);
      return;
    }
    const music = path.join(root, 'output/playwright/space-playback-fixtures');
    assert.ok(fs.existsSync(path.join(music, 'Space Playback 1.wav')), 'run playback fixtures first');
    await api('POST', '/v1/library/scan', { root: music });
    const tracks = (await until(() => api('GET', '/v1/tracks', undefined, { limit: 200 }), data => data.tracks.some(t => t.path.startsWith(music)))).tracks.filter(t => t.path.startsWith(music));
    await api('PUT', '/v1/tracks/' + tracks[0].id + '/lyrics', { content: '[00:00.00]音乐在星光中流动\n[00:30.00]听见世界的回声\n[01:00.00]下一刻仍在远方' });
    await frame.evaluate(() => { Space3D.close(); });
    await frame.evaluate(() => {
      window.nativeOriginalSpaceStagePure = SpaceStagePure;
      window.SpaceStagePure = { ...SpaceStagePure, create(canvas, options) {
        const host = nativeOriginalSpaceStagePure.create(canvas, options), draw = host.frame;
        host.frame = function(frame) {
          const result = draw(frame);
          if (result && window.nativeCapture) { window.nativeSnapshot = canvas.toDataURL('image/png'); window.nativeCapture = false; }
          return result;
        };
        return host;
      } };
    });
    await frame.evaluate(() => Space3D.open());
    await frame.waitForFunction(() => Space3D.stats().renderer?.state === 'ready');
    assert.equal(await frame.evaluate(() => Space3D.stats().page), 'home');
    assert.equal(await frame.locator('#sp-canvas canvas').count(), 1);
    await frame.locator('.sh-action-library').click();
    await frame.locator('.sh-panel-body .sh-track[data-track-id="' + tracks[0].id + '"] .sh-track-main').click();
    await until(() => api('GET', '/v1/state'), s => s.playing && s.track_id === tracks[0].id);
    await frame.evaluate(() => SpaceHome.closePanel());
    await frame.locator('#sp-player-handle').click();await frame.locator('#sp-more').click();await frame.locator('#sp-fab').click();
    await frame.locator('#sp-tab-display').click();await frame.locator('#sp-quality').selectOption('low');
    await until(() => api('GET', '/v1/settings'), s => s.space3d?.qualityMode === 'low');
    await frame.locator('#sp-sheet-close').click();
    await page.screenshot({ path: path.join(output, 'native-home.png') });
    const previews = await frame.evaluate(async () => {
      const images = Array.from(document.querySelectorAll('#sp-source option')).map(option => SpaceStagePure.catalog().find(d => d.id === option.value)).filter(Boolean);
      return Promise.all(images.map(def => new Promise(resolve => {
        const image = new Image(); image.onload = () => resolve({ id: def.id, width: image.naturalWidth });
        image.onerror = () => resolve({ id: def.id, width: 0 }); image.src = hertzHost.assetUrl(def.preview);
      })));
    });
    assert.equal(previews.length, 30);
    assert.ok(previews.every(p => p.width > 0), 'every packaged preview loads through native resource protocol');
    const scenes = [];
    for (const { id } of previews) {
      await frame.evaluate(id => Space3D.enterStage(id), id);
      await frame.waitForFunction(id => Space3D.stats().renderer?.id === id && Space3D.stats().renderer.frameCount > 0, id, { timeout: 30000 });
      assert.equal(await frame.locator('#sp-canvas canvas').count(), 1);
      assert.equal(await frame.evaluate(() => Space3D.stats().renderer.effectiveQuality), 'low');
      await frame.evaluate(() => { window.nativeSnapshot = ''; window.nativeCapture = true; Stage.kick(); });
      await frame.waitForFunction(() => !!window.nativeSnapshot);
      const image = Buffer.from((await frame.evaluate(() => window.nativeSnapshot)).split(',')[1], 'base64');
      fs.writeFileSync(path.join(output, 'native-' + id + '.png'), image);
      const { data, info } = await sharp(image).removeAlpha().raw().toBuffer({ resolveWithObject: true });
      let lit = 0;
      for (let i = 0; i < data.length; i += info.channels * 3) if (data[i] + data[i + 1] + data[i + 2] > 35) lit++;
      assert.ok(lit > 50, id + ' native canvas is nonblank');
      scenes.push({ id, lit, stats: await frame.evaluate(() => Space3D.stats().renderer) });
      await frame.evaluate(() => Space3D.goHome());
      assert.equal(await frame.locator('#sp-canvas canvas').count(), 1);
      assert.ok(await frame.evaluate(() => Space3D.stats().renderer));
      assert.equal((await api('GET', '/v1/state')).track_id, tracks[0].id);
    }
    await api('POST', '/v1/player/pause', {});
    assert.deepEqual(errors, []);
    fs.writeFileSync(path.join(output, 'evidence.json'), JSON.stringify({ nativeHost,
      installedCandidate: true, backend: health.backend, audibleOutput: 'unmeasured', ordinaryPc: 'unmeasured',
      libraryPlayback: true, qualityPersistence: true, previews, scenes }, null, 2));
    console.log('Native DBX: installed package, real library playback, settings, 30 previews/scenes, canvas pixels and cleanup passed');
  } finally {
    if (frame) await frame.evaluate(() => {
      Space3D.goHome();
      if (window.nativeOriginalSpaceStagePure) window.SpaceStagePure = window.nativeOriginalSpaceStagePure;
      delete window.nativeOriginalSpaceStagePure; delete window.nativeCapture; delete window.nativeSnapshot;
    }).catch(() => {});
    await browser.close();
  }
}

async function processSample() {
  const command = '$all=Get-CimInstance Win32_Process; $roots=@($all | Where-Object {$_.Name -eq "DBX.exe" -and $_.ExecutablePath -like "*space-dbx-native*"}); $ids=@($roots.ProcessId); do {$children=@($all | Where-Object {$_.ParentProcessId -in $ids -and $_.ProcessId -notin $ids}); $ids+=@($children.ProcessId)} while ($children.Count); @($ids | ForEach-Object {Get-Process -Id $_ -ErrorAction SilentlyContinue} | Select-Object Id,ProcessName,CPU,WorkingSet64,PrivateMemorySize64,HandleCount) | ConvertTo-Json -Compress';
  const { stdout } = await runFile('powershell.exe', ['-NoProfile', '-Command', command], { windowsHide: true });
  return JSON.parse(stdout);
}

async function soak(frame, page, api) {
  const tracks = (await api('GET', '/v1/tracks', undefined, { limit: 200 })).tracks;
  const track = tracks.find(t => t.path.startsWith(path.join(root, 'output/playwright/space-playback-fixtures')));
  assert.ok(track, 'isolated music fixture');
  await frame.locator('.sh-action-library').click();
  await frame.locator('.sh-panel-body .sh-track[data-track-id="' + track.id + '"] .sh-track-main').click();
  await frame.waitForFunction(() => Stage.presentation().playing);
  await frame.evaluate(() => SpaceHome.closePanel());
  const samples = [], started = Date.now();
  try {
    for (let round = 0; round < 20; round++) {
      await api('POST', '/v1/player/seek', { position_ms: 0 });
      await frame.evaluate(() => Space3D.enterStage('coast'));
      await frame.waitForFunction(() => Space3D.stats().renderer?.id === 'coast' && Space3D.stats().renderer.frameCount > 0);
      const sample = { round, elapsedMs: Date.now() - started,
        renderer: await frame.evaluate(() => Space3D.stats().renderer), processes: await processSample() };
      samples.push(sample);
      assert.equal(sample.renderer.tasks, 0, 'settled coast has no queued work');
      const baseline = samples[0].renderer;
      for (const key of ['resources', 'estimatedBytes'])
        assert.equal(sample.renderer[key], baseline[key], key + ' returns to same coast plateau');
      // Upload counters depend on which road chunks have entered the camera frustum.
      for (const key of ['geometries', 'textures', 'programs'])
        assert.ok(sample.renderer[key] <= baseline[key] + 2, key + ' remains bounded across cycles');
      await frame.evaluate(() => Space3D.enterStage('lyric-sonnet'));
      await frame.waitForFunction(() => Space3D.stats().renderer?.lyricId === 'lyric-sonnet' && Space3D.stats().renderer.state === 'ready');
      await page.waitForTimeout(Math.max(0, started + (round + 1) * 30000 - Date.now()));
      await frame.evaluate(() => { Space3D.close(); Space3D.open(); });
      assert.ok(await frame.evaluate(() => Space3D.stats().renderer));
      assert.equal(await frame.locator('#sp-canvas canvas').count(), 1);
      assert.equal((await api('GET', '/v1/state')).track_id, track.id);
      console.log('Native soak: round ' + (round + 1) + '/20, space reopened with one background renderer');
    }
    const finalProcesses = await processSample();
    fs.writeFileSync(path.join(output, 'soak-evidence.json'), JSON.stringify({
      nativeHost, durationMs: Date.now() - started,
      backend: 'null', baselineHardware: false, switches: 20, spaceCycles: 20,
      resourcePlateau: true, samples, finalProcesses,
      processCpuUnit: 'cumulative process CPU seconds; divide deltas by elapsed seconds for occupied cores',
      processMemoryUnit: 'bytes', audibleOutput: 'unmeasured'
    }, null, 2));
    console.log('Native 10-minute soak passed on development hardware; baseline performance remains unmeasured');
  } finally {
    await api('POST', '/v1/player/pause', {});
    await frame.evaluate(() => Space3D.goHome());
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
