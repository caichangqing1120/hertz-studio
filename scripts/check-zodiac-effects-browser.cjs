// SPDX-License-Identifier: MIT
// Isolate sky breathing and particle recipes with a fixed WebGL camera.
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const { build } = require('../tools/zodiac-stage/node_modules/esbuild');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'output/playwright/zodiac-effects');

async function main() {
  fs.mkdirSync(output, { recursive: true });
  const bundle = await build({
    stdin: { contents: "import * as THREE from 'three'; import {createWorld} from './src/world.js'; window.effects={THREE,createWorld};",
      resolveDir: path.join(root, 'tools/zodiac-stage') },
    bundle: true, format: 'iife', write: false, minify: true,
  });
  const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL || 'chrome', headless: true });
  const errors = [], shots = [];
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    page.on('pageerror', e => errors.push(e.message));
    page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
    await page.setContent('<style>body{margin:0;background:#030405}canvas{display:block}</style><canvas></canvas>');
    await page.addScriptTag({ content: bundle.outputFiles[0].text });
    await page.evaluate(() => {
      const { THREE, createWorld } = effects;
      const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('canvas'), antialias: true, preserveDrawingBuffer: true });
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.setSize(1440, 900);
      const camera = new THREE.PerspectiveCamera(42, 1440 / 900, .1, 300);
      const world = createWorld(THREE, scene, { quality: 'high' });
      world.setSign(4);
      window.draw = (time, context = {}, yaw = 0) => {
        camera.position.set(Math.sin(yaw) * 10, 0, Math.cos(yaw) * 10);
        camera.lookAt(0, 0, 0);
        world.update(time, { state: 'hold', k: 1, cameraPos: camera.position, ...context });
        if (context.particlesOnly) {
          scene.traverse(o => {
            if (o.renderOrder === -10 && o.material?.uniforms?.uTwinkle) o.material.uniforms.uTwinkle.value = 0;
          });
        }
        // Remove scene rotation so pixel differences measure shader motion only.
        scene.children.forEach(o => { if (o.isGroup) o.rotation.set(0, 0, 0); });
        scene.children.forEach(o => { if (o.isMesh && o.material.uniforms?.uNeb) o.material.uniforms.uTime.value = 0; });
        renderer.render(scene, camera);
        const gl = renderer.getContext(), pixels = new Uint8Array(1440 * 900 * 4);
        gl.readPixels(0, 0, 1440, 900, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
        return pixels;
      };
      window.compare = (a, b) => {
        let changed = 0, total = 0, bright = 0;
        for (let k = 0; k < a.length; k += 4) {
          const delta = Math.abs(a[k]-b[k])+Math.abs(a[k+1]-b[k+1])+Math.abs(a[k+2]-b[k+2]);
          total += delta;
          if (delta > 9) changed++;
          if (Math.max(a[k],a[k+1],a[k+2]) > 30) bright++;
        }
        return { changed, total, bright };
      };
      window.world = world;
      window.scene = scene;
      window.dustFrame = (time, reduced = false) => {
        const visible = [];
        scene.traverse(o => {
          if (o.isMesh || o.isPoints) {
            visible.push([o,o.visible]);
            o.visible = o.renderOrder === -10;
          }
        });
        const pixels = draw(time, { reduced, particlesOnly: true });
        visible.forEach(([o,value]) => { o.visible = value; });
        return pixels;
      };
    });
    const breathing = await page.evaluate(() => {
      const context = { state: 'disperse', k: 1 };
      const a = draw(0, context), b = draw(4, context);
      const normal = compare(a, b), stable = compare(b, draw(4, context));
      const reduced = compare(draw(0, { ...context, reduced: true }), draw(4, { ...context, reduced: true }));
      return { normal, stable, reduced };
    });
    assert.ok(breathing.normal.bright > 100, 'Background stars must render');
    assert.ok(breathing.normal.changed > 100, 'Fixed-camera stars must breathe over time');
    assert.equal(breathing.stable.total, 0, 'Frozen time must freeze star breathing');
    assert.ok(breathing.reduced.total < breathing.normal.total * .6, 'Reduced motion must soften breathing');
    const colors = await page.evaluate(() => {
      // The application supplies its theme accent even when all signs share it.
      world.setPalette({ accent: '#276eff' });
      const background = draw(4, { state: 'disperse', k: 1 });
      const out = [];
      for (let i = 0; i < 12; i++) {
        world.setSign(i);
        const skyDelta = compare(background, draw(4, { state: 'disperse', k: 1 })).total;
        const pixels = draw(5.2), rgb = [0, 0, 0];
        for (let k = 0; k < pixels.length; k += 4) {
          const max = Math.max(pixels[k],pixels[k+1],pixels[k+2]);
          const min = Math.min(pixels[k],pixels[k+1],pixels[k+2]);
          if (max > 40 && (max-min)/max > .22) {
            for (let c = 0; c < 3; c++) rgb[c] += pixels[k+c];
          }
        }
        const total = rgb.reduce((a,b)=>a+b,0);
        out.push({ sign: world.stats().sign, rgb: rgb.map(v=>v/total), skyDelta });
      }
      world.setSign(4);
      return out;
    });
    assert.ok(colors.every(c => c.skyDelta === 0), 'Sign colors must not tint the natural sky');
    assert.ok(new Set(colors.map(c=>c.rgb.map(v=>v.toFixed(2)).join(','))).size >= 8,
      'A shared application theme must preserve independent sign colors');
    const colorFor = sign => colors.find(c=>c.sign===sign).rgb;
    const aries = colorFor('aries'), taurus = colorFor('taurus'), leo = colorFor('leo'), sagittarius = colorFor('sagittarius');
    assert.ok(aries[0]>aries[2]*1.2 && leo[0]>leo[2]*1.2, 'Coral and amber must retain warm colors');
    assert.ok(taurus[1]>taurus[0]*1.12, 'Jade must retain green');
    assert.ok(sagittarius[2]>sagittarius[1]*1.1, 'Violet must retain its hue');
    const starlight = await page.evaluate(() => {
      const full = draw(5.2);
      let surface;
      scene.traverse(o => { if (o.isMesh && o.renderOrder === -90) surface = o; });
      surface.visible = false;
      const dustOnly = draw(5.2);
      surface.visible = true;
      let energy = 0;
      for (let k = 0; k < full.length; k += 4) energy += full[k] + full[k+1] + full[k+2];
      const a = dustFrame(5.2), b = dustFrame(6.2);
      const flow = compare(a,b);
      const frozen = compare(b,dustFrame(6.2));
      const reducedFlow = compare(dustFrame(5.2,true),dustFrame(6.2,true));
      return { surfaceFraction: compare(full, dustOnly).total / energy, flow, frozen, reducedFlow };
    });
    assert.ok(starlight.surfaceFraction < .10,
      'Starlight figures must be carried by particles and stars, not a solid surface: ' + JSON.stringify(starlight));
    assert.ok(starlight.flow.changed > 100, 'Particle flow must remain visible with fixed camera and no star twinkle');
    assert.equal(starlight.frozen.total, 0, 'Frozen playback time must freeze the star-dust flow');
    assert.ok(starlight.reducedFlow.total < starlight.flow.total * .6,
      'Reduced motion must soften the star-dust flow');
    await page.evaluate(() => { world.setFieldVisible(false); });
    const recipes = [];
    for (const state of ['gather', 'disperse']) {
      const hashes = new Set();
      for (let cycle = 0; cycle < 5; cycle++) {
        const data = await page.evaluate(({ state, cycle }) => {
          const pixels = draw(1.4, { state, cycle, k: .4 });
          let hash = 2166136261, lit = 0;
          for (let k = 0; k < pixels.length; k += 4) {
            hash = Math.imul(hash ^ pixels[k], 16777619);
            hash = Math.imul(hash ^ pixels[k+1], 16777619);
            if (pixels[k+2] > 40) lit++;
          }
          return { hash: hash >>> 0, lit, png: document.querySelector('canvas').toDataURL(), recipe: world.stats().transition };
        }, { state, cycle });
        assert.ok(data.lit > 200, state + cycle + ': moving particles must render');
        hashes.add(data.hash);
        const name = state + '-' + cycle;
        fs.writeFileSync(path.join(output, name + '.png'), Buffer.from(data.png.split(',')[1], 'base64'));
        shots.push({ name, png: data.png });
        recipes.push({ state, cycle, hash: data.hash, lit: data.lit, recipe: data.recipe });
      }
      assert.equal(hashes.size, 5, state + ': all five recipes must produce distinct pixels');
    }
    await page.evaluate(() => { world.setFieldVisible(true); });
    for (const [name, yaw] of [['front', 0], ['side', .85]]) {
      const png = await page.evaluate(yaw => { draw(5.2, {}, yaw); return document.querySelector('canvas').toDataURL(); }, yaw);
      fs.writeFileSync(path.join(output, name + '.png'), Buffer.from(png.split(',')[1], 'base64'));
      shots.push({ name, png });
    }
    await page.evaluate(() => world.dispose());
    await page.setContent('<style>body{margin:0;background:#030405;color:#eee;font:14px system-ui}main{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:8px}figure{margin:0}img{display:block;width:100%}figcaption{padding:4px}</style><main>'
      + shots.map(s => '<figure><img src="' + s.png + '"><figcaption>' + s.name + '</figcaption></figure>').join('') + '</main>');
    await page.screenshot({ path: path.join(output, 'contact-sheet.jpg'), fullPage: true });
    assert.deepEqual(errors, [], 'No WebGL or shader errors');
    fs.writeFileSync(path.join(output, 'result.json'), JSON.stringify({ breathing, colors, starlight, recipes, errors }, null, 2));
    console.log(JSON.stringify(breathing));
    console.log('PASS breathing, twelve independent colors under shared theme, unchanged sky, motion variants and side captures');
  } finally { await browser.close(); }
}
main().catch(e => { console.error(e); process.exitCode = 1; });
