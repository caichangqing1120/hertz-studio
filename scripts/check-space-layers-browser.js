#!/usr/bin/env node
// SPDX-License-Identifier: MIT
// Real layout, movable art host and background pixels, without backend writes.
'use strict';
const assert = require('node:assert/strict');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const web = path.resolve(__dirname, '../plugin/ui');

async function fixture(browser, width = 1707) {
  const page = await browser.newPage({ viewport: { width, height: 898 } });
  await page.setContent('<body><div id="stage"></div><div id="stage3d" aria-hidden="false"><div id="legacy-art"></div><div class="sl-line is-active">Legacy lyric</div></div><div id="space3d" class="sp"><div id="sp-bg"></div><div id="sp-art"></div><div id="sp-reading" class="s3d-reading sp-reading"><div class="sl-line is-active">Visible Space3D lyric</div></div></div></body>');
  await page.addStyleTag({ path: path.join(web, 'stage3d.css') });
  await page.addStyleTag({ path: path.join(web, 'space-layers.css') });
  await page.addStyleTag({ content: 'body{margin:0}#space3d,#stage3d{position:fixed;inset:0}#sp-bg,#sp-art,#legacy-art{position:absolute;inset:0}.sl-line{font:24px system-ui;opacity:1;transform:none}#stage3d .sl-line{top:300px}.hd-layer{position:absolute;inset:0}.hd-svg{width:100%;height:100%}' });
  await page.evaluate(() => {
    document.querySelector('#space3d').dataset.spaceTheme = 'venue';
    window.playing = false; window.hostVisible = true; window.gates = {};
    window.Stage = { gate: (name, fps, tick) => { gates[name] = { fps, tick }; }, kick() {},
      position: () => 2500, presentation: () => ({ playing, reduced: false }),
      isHidden: () => true, isStageVisible: () => false, spectrum: () => new Float32Array(64), energy: () => 0 };
    window.pixelHash = canvas => {
      const pixels = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height).data;
      let hash = 0; for (let i = 0; i < pixels.length; i += 31) hash = (hash * 31 + pixels[i]) | 0;
      return hash;
    };
  });
  return page;
}

async function layout(browser) {
  for (const width of [1707, 640]) {
    const page = await fixture(browser, width);
    try {
      const sizes = await page.evaluate(() => ['venue', 'diorama', 'tempo', 'still'].map(theme => {
        document.querySelector('#space3d').dataset.spaceTheme = theme;
        const rect = document.querySelector('#sp-reading').getBoundingClientRect();
        return { theme, width: rect.width, center: rect.left + rect.width / 2 };
      }));
      for (const item of sizes) assert.ok(Math.abs(item.center - width / 2) < 1, item.theme + ' lyric layout centers at ' + width + 'px');
      if (width > 700) assert.equal(new Set(sizes.map(item => Math.round(item.width))).size, 4, 'themes have distinct lyric widths');
    } finally { await page.close(); }
  }
}

async function hand(browser) {
  const page = await fixture(browser, 640);
  try {
    await page.addScriptTag({ path: path.join(web, 'handdrawn.js') });
    const initial = await page.evaluate(() => {
      HandDrawn.setStageHost(document.querySelector('#sp-art'), { lyricsRoot: document.querySelector('#sp-reading'), visible: () => hostVisible });
      HandDrawn.apply({ on: true, paper: false, annot: true, style: 'manga' });
      const manga = document.querySelector('#sp-art .hd-frame').getAttribute('d');
      HandDrawn.apply({ style: 'anime' });
      return { annot: document.querySelector('#sp-art .hd-annot').getAttribute('d'), changed: manga !== document.querySelector('#sp-art .hd-frame').getAttribute('d') };
    });
    assert.ok(initial.annot.length > 0, 'Space3D annotates the visible sibling lyrics while sidebar is hidden');
    assert.ok(initial.changed, 'paused narrow host repaints style changes');
    assert.equal(await page.evaluate(() => { playing = true; return HandDrawn.stats().fps; }), 15, 'Space3D uses host visibility for playback gate');
    assert.equal(await page.evaluate(() => { hostVisible = false; return HandDrawn.stats().fps; }), 0, 'hidden host stops the art gate');
    const cleared = await page.evaluate(() => {
      hostVisible = true; playing = false; document.querySelector('#sp-reading').hidden = true;
      HandDrawn.refreshAnnotation(); return document.querySelector('#sp-art .hd-annot').getAttribute('d');
    });
    assert.equal(cleared, '', 'paused lyric visibility refresh clears old annotation');
    assert.ok(await page.evaluate(() => {
      HandDrawn.setStageHost(document.querySelector('#legacy-art')); HandDrawn.refreshAnnotation();
      return document.querySelector('#legacy-art .hd-annot').getAttribute('d').length > 0;
    }), 'legacy Stage3D host still resolves surrounding lyrics');
    assert.ok(await page.evaluate(() => {
      const stage = document.querySelector('#stage'); stage.style.cssText = 'position:fixed;inset:0';
      stage.innerHTML = '<div class="stage-lyrics"><div class="lyric active" style="position:absolute;top:300px;left:80px">Sidebar lyric</div></div>';
      Stage.isHidden = () => false; Stage.isStageVisible = () => true;
      HandDrawn.setStageHost(null); HandDrawn.refreshAnnotation();
      return HandDrawn.stats().host === 'stage' && document.querySelector('#stage .hd-annot').getAttribute('d').length > 0 && document.querySelectorAll('.hd-layer').length === 1;
    }), 'returning to the sidebar resets the host contract and preserves the single layer');
  } finally { await page.close(); }
}

async function background(browser, staticImage) {
  const page = await fixture(browser);
  try {
    for (const name of ['backgrounds.js', 'space-layers.js']) await page.addScriptTag({ path: path.join(web, name) });
    await page.evaluate(staticImage => {
      const sample = document.createElement('canvas'); sample.width = sample.height = 64;
      const ctx = sample.getContext('2d'); ctx.fillStyle = '#ea2413'; ctx.fillRect(0, 0, 64, 64);
      ctx.fillStyle = '#0033ff'; ctx.fillRect(0, 32, 32, 32);
      ctx.fillStyle = '#ff8800'; ctx.fillRect(32, 0, 32, 64);
      window.coverUrl = sample.toDataURL();
      window.layers = SpaceLayers.create(document.querySelector('#space3d'));
      Backgrounds.apply(staticImage ? { type: 'media', media: 'image', url: coverUrl, blur: 0 } : { type: 'cover', blur: 0 });
      layers.configure({ bgwall: true });
      layers.update(100, { playing: staticImage, timeSec: 1 });
    }, staticImage);
    if (staticImage) {
      await page.waitForFunction(() => document.querySelector('.creative-bg-media').naturalWidth > 0);
      const counts = await page.evaluate(() => {
        layers.update(100, { playing: true, timeSec: 1.1 });
        let draws = 0; const original = CanvasRenderingContext2D.prototype.drawImage;
        CanvasRenderingContext2D.prototype.drawImage = function () { if (this.canvas.classList.contains('sp-wall-panel')) draws++; return original.apply(this, arguments); };
        for (let i = 0; i < 20; i++) layers.update(100, { playing: true, timeSec: 1.2 + i * .1 });
        const unchanged = draws;
        document.querySelector('#space3d').style.right = '100px'; layers.update(100, { playing: true, timeSec: 3.3 });
        const resized = draws - unchanged;
        layers.setBackground(Object.assign(Backgrounds.values(), { opacity: 40, blur: 10, blend: 'screen' }));
        layers.update(100, { playing: true, timeSec: 3.4 });
        const styled = draws - unchanged - resized;
        const opacity = document.querySelector('.sp-wall-panel').style.opacity;
        const version = Backgrounds.sourceFrame().version;
        Backgrounds.apply(Backgrounds.values());
        layers.update(100, { playing: true, timeSec: 3.5 });
        return { unchanged, resized, styled, opacity, sameVersion: version === Backgrounds.sourceFrame().version, reapplied: draws - unchanged - resized - styled };
      });
      assert.equal(counts.unchanged, 0, 'unchanged static image copies no wall pixels during playback');
      assert.equal(counts.resized, 16, 'wall resize copies each tile once');
      assert.equal(counts.styled, 0, 'wall styling does not copy unchanged static pixels');
      assert.equal(counts.opacity, '0.4', 'wall styling remains live');
      assert.ok(counts.sameVersion && counts.reapplied === 0, 'reapplying the same image preserves its frame version and tiles');
      assert.equal(await page.evaluate(() => {
        layers.update(0, { playing: false, timeSec: 3.5 });
        Backgrounds.apply({ type: 'media', media: 'image', url: '' });
        return layers.stats().wallReady;
      }), false, 'removing a paused media source invalidates its previous wall frame');
    } else {
      const before = await page.evaluate(() => ({ source: pixelHash(document.querySelector('#creative-bg-canvas')), wall: pixelHash(document.querySelector('.sp-wall-panel')) }));
      await page.evaluate(() => { Backgrounds.setCover(coverUrl); Backgrounds.palette(); });
      await page.waitForFunction(old => pixelHash(document.querySelector('#creative-bg-canvas')) !== old, before.source);
      const after = await page.evaluate(() => pixelHash(document.querySelector('.sp-wall-panel')));
      assert.notEqual(after, before.wall, 'asynchronous paused cover palette repaints the wall without another host frame');
    }
  } finally { await page.close(); }
}

async function dynamic(browser) {
  const page = await fixture(browser);
  try {
    for (const name of ['backgrounds.js', 'space-layers.js']) await page.addScriptTag({ path: path.join(web, name) });
    const result = await page.evaluate(() => {
      window.layers = SpaceLayers.create(document.querySelector('#space3d'));
      Backgrounds.apply({ type: 'mesh' }); layers.configure({ bgwall: true });
      layers.update(100, { playing: true, timeSec: 1 });
      let frames = 0, draws = 0;
      const off = Backgrounds.onSourceFrame(() => frames++);
      const initial = Backgrounds.sourceFrame();
      const original = CanvasRenderingContext2D.prototype.drawImage;
      CanvasRenderingContext2D.prototype.drawImage = function () {
        if (this.canvas.classList.contains('sp-wall-panel')) draws++;
        return original.apply(this, arguments);
      };
      for (let i = 0; i < 3; i++) {
        gates.background.tick(100); layers.update(100, { playing: true, timeSec: 1.1 + i * .1 });
      }
      const advanced = Backgrounds.sourceFrame().version - initial.version;
      const dynamicDraws = draws;
      off(); gates.background.tick(100);
      const unsubscribed = frames === 3;
      layers.dispose(); const before = draws;
      Backgrounds.apply({ type: 'cover' });
      const disposedDraws = draws - before;
      // A ready real video is unnecessary for the sampling classification.
      Backgrounds.apply({ type: 'media', media: 'video', url: 'data:video/webm;base64,' });
      const videoDynamic = Backgrounds.sourceFrame().dynamic;
      return { advanced, dynamicDraws, unsubscribed, disposedDraws, videoDynamic,
        generatedDynamic: initial.dynamic, ready: initial.ready };
    });
    assert.ok(result.generatedDynamic && result.ready, 'generated source exposes ready dynamic frames');
    assert.equal(result.advanced, 3, 'each completed generator frame advances its source version');
    assert.equal(result.dynamicDraws, 48, 'generated background continues sampling all wall tiles');
    assert.ok(result.videoDynamic, 'video remains classified for continuous sampling');
    assert.ok(result.unsubscribed, 'source subscriptions can be released');
    assert.equal(result.disposedDraws, 0, 'disposed wall no longer consumes source notifications');
  } finally { await page.close(); }
}

async function budget(browser) {
  for (const hostHz of [30, 60]) {
    const page = await fixture(browser);
    try {
      for (const name of ['backgrounds.js', 'space-layers.js']) await page.addScriptTag({ path: path.join(web, name) });
      const counts = await page.evaluate(hostHz => {
        document.body.classList.add('is-playing');
        const layers = SpaceLayers.create(document.querySelector('#space3d'));
        Backgrounds.apply({ type: 'mesh' }); layers.configure({ bgwall: true });
        layers.update(0, { playing: true, timeSec: 1 });
        let draws = 0;
        const original = CanvasRenderingContext2D.prototype.drawImage;
        CanvasRenderingContext2D.prototype.drawImage = function () {
          if (this.canvas.classList.contains('sp-wall-panel')) draws++;
          return original.apply(this, arguments);
        };
        const target = gates.background.fps(), divider = Math.ceil(hostHz / target);
        for (let i = 0; i < hostHz; i++) {
          if ((i + 1) % divider === 0) gates.background.tick(1000 * divider / hostHz);
          layers.update(1000 / hostHz, { playing: true, timeSec: 1 + (i + 1) / hostHz });
        }
        const sampled = draws / 16;
        const beforeSize = draws;
        document.querySelector('#space3d').style.right = '100px'; layers.update(0, { playing: true, timeSec: 2 });
        const resized = (draws - beforeSize) / 16;
        layers.update(0, { playing: false, timeSec: 2 });
        const beforePaused = draws;
        Backgrounds.update(Object.assign(Backgrounds.values(), { hue: 180 }));
        const paused = (draws - beforePaused) / 16;
        layers.dispose();
        return { target, sampled, resized, paused };
      }, hostHz);
      assert.equal(counts.target, 12, 'flat Space3D limits the real background gate to 12Hz');
      assert.ok(counts.sampled <= 12 && counts.sampled >= 9,
        'generated frames stay within the 12Hz copy budget at a ' + hostHz + 'Hz host: ' + counts.sampled);
      assert.equal(counts.resized, 1, 'structural size changes paint immediately at ' + hostHz + 'Hz');
      assert.equal(counts.paused, 1, 'paused source invalidation paints immediately at ' + hostHz + 'Hz');
      console.log('Wall budget ' + hostHz + 'Hz host: ' + counts.sampled + ' tile frames/sec');
    } finally { await page.close(); }
  }
}

async function main() {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const cases = { layout, hand, cover: browser => background(browser, false), static: browser => background(browser, true), dynamic, budget };
  let failures = 0;
  try {
    for (const [name, run] of Object.entries(cases)) {
      if (process.argv[2] && process.argv[2] !== name) continue;
      try { await run(browser); console.log('PASS ' + name); } catch (error) { failures++; console.error('FAIL ' + name + ': ' + error.message); }
    }
  } finally { await browser.close(); }
  if (failures) process.exitCode = 1;
}
main().catch(error => { console.error(error); process.exitCode = 1; });
