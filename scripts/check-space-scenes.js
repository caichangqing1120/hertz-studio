#!/usr/bin/env node
// SPDX-License-Identifier: MIT
'use strict';
const assert = require('assert/strict');
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const base = path.resolve(__dirname, '..'), stage = path.join(base, 'tools/space-stage');
const read = relative => fs.readFileSync(path.join(base, relative), 'utf8');
const load = relative => import(pathToFileURL(path.join(stage, relative)).href);

(async () => {
  const THREE = await load('node_modules/three/build/three.module.js');
  const { createRegistry } = await load('src/registry.js'), { createScope } = await load('src/scope.js');
  const { registerScenes } = await load('src/scenes/index.js'), { registerEffects, createPostChain } = await load('src/effects/index.js');
  const { createSpatialResources } = await load('src/scenes/resources.js'), { PROFILES } = await load('src/quality.js');
  const registry = createRegistry(), effects = createRegistry(); registerScenes(registry); registerEffects(effects);
  const { createParticlePointer } = await load('src/scenes/particle-pointer.js');
  const pointerCamera = new THREE.PerspectiveCamera(54, 1.6, .05, 100);
  pointerCamera.position.set(3, 2, 10); pointerCamera.lookAt(0, 0, 0); pointerCamera.updateMatrixWorld();
  const parent = new THREE.Group(), sheet = new THREE.Group(); parent.add(sheet);
  parent.rotation.set(.14, -.25, .1); parent.scale.setScalar(1.3); sheet.scale.setScalar(.7);
  parent.updateMatrixWorld(true);
  const localHit = new THREE.Vector3(.8, -.4, 0), ndc = sheet.localToWorld(localHit.clone()).project(pointerCamera);
  const pointer = createParticlePointer({ THREE, camera: pointerCamera }, sheet, { surface: true });
  for (let i = 0; i < 60; i++) pointer.update({ now: i * 16, pointer: { active: true, x: ndc.x, y: ndc.y } });
  assert.ok(pointer.uniforms.uPointer.value.distanceTo(localHit) < .0001, 'pointer follows actual rotated/scaled camera/object transforms');
  assert.equal(pointer.uniforms.uPointerAmount.value, 1, 'hover reaches configured indentation');
  for (let i = 60; i < 120; i++) pointer.update({ now: i * 16, pointer: { active: false } });
  assert.equal(pointer.uniforms.uPointerAmount.value, 0, 'leaving settles exactly with no extra clock');
  pointer.update({ now: 2000, reduced: true, pointer: { active: true, x: ndc.x, y: ndc.y } });
  assert.equal(pointer.uniforms.uPointerAmount.value, 0, 'reduced motion suppresses indentation');
  const manifest = JSON.parse(read('tools/space-stage/migration.json'));
  const checkInventory = (source, ids) => ids.forEach(oldId => assert.ok(manifest.entries.some(e => e.source === source && e.oldId === oldId), source + ':' + oldId + ' migration missing'));
  const stageSource = read('plugin/ui/stage3d.js');
  checkInventory('Stage3D.STAGES', [...stageSource.slice(stageSource.indexOf('var STAGES ='), stageSource.indexOf('// 着色器公共段')).matchAll(/id: '([^']+)'/g)].map(m => m[1]));
  checkInventory('CreativeGL', [...read('plugin/ui/creative-gl.js').matchAll(/^    id: '([^']+)'/gm)].map(m => m[1]));
  checkInventory('HandDrawn', [...read('plugin/ui/handdrawn.js').matchAll(/\{ id: '([^']+)', label:/g)].map(m => m[1]));
  checkInventory('SpacePost', [...read('plugin/ui/space-post.js').matchAll(/\{ key: '([^']+)', label:/g)].map(m => m[1]));
  checkInventory('SpaceLayers.stagePreset', ['venue', 'diorama', 'tempo', 'still']);
  checkInventory('Backgrounds', ['theme', 'mesh', 'flow', 'spectrogram', 'cover', 'media']);
  checkInventory('Stage3D.lyric', ['stage', 'classic', 'cadenza', 'sonnet', 'tempera', 'starborn']);
  const tempera = read('plugin/ui/stanza/stanza-tempera.js');
  checkInventory('Tempera.composition', [...tempera.slice(tempera.indexOf('var COMPOSITIONS ='), tempera.indexOf('var COMPOSITION_KINDS')).matchAll(/'([^']+)': function/g)].map(m => m[1]));
  checkInventory('Tempera.colorMode', ['duo', 'mono', 'vivid']);
  const sonnetFx = read('plugin/ui/stanza/stanza-sonnet-fx.js');
  for (const [source, variable] of [['Sonnet.shot', 'SHOT_KINDS'], ['Sonnet.scene', 'SCENE_KINDS']]) {
    const list = sonnetFx.match(new RegExp('var ' + variable + ' = \\[([\\s\\S]*?)\\]'))[1];
    checkInventory(source, [...list.matchAll(/'([^']+)'/g)].map(m => m[1]));
  }
  for (const entry of manifest.entries) {
    if (entry.state === 'removed') {
      assert.equal(registry.resolve(entry.plugin), undefined, 'Removed preset ' + entry.plugin);
      assert.equal(registry.resolve('immersive/' + entry.oldId), undefined, 'Removed legacy preset ' + entry.oldId);
      continue;
    }
    if (entry.plugin && !['coast', 'zodiac'].includes(entry.plugin)) {
      assert.ok(registry.resolve(entry.plugin), 'Missing new plugin ' + entry.plugin);
      if (entry.params) registry.validateParams(entry.plugin, entry.params);
    }
    if (entry.effect) assert.ok(effects.resolve(entry.effect), 'Missing effect ' + entry.effect);
    if (entry.state === 'excluded') assert.equal(registry.resolve(entry.oldId), undefined);
  }
  let uploads = 0;
  global.document = { createElement: () => ({ width: 0, height: 0, getContext: () => ({ clearRect() {}, measureText: text => ({ width: text.length * 32 }), fillText() { uploads++; }, drawImage() {} }) }) };
  const shared = createSpatialResources(THREE);
  const pending = ['one', 'two', 'three'].map(s => shared.text.acquire(s));
  shared.beginFrame(1); shared.beginFrame(1); assert.equal(uploads, 1, 'at most one text upload per frame');
  shared.beginFrame(2); assert.equal(uploads, 2);
  pending.forEach(e => shared.text.release(e)); assert.equal(shared.stats().queued, 0, 'released work removed immediately');
  for (let i = 0; i < 100; i++) { const entry = shared.text.acquire('rapid ' + i); shared.text.release(entry); }
  assert.equal(shared.stats().queued, 0, 'switching without frames cannot grow task queue'); shared.dispose();
  let created = 0;
  for (const definition of registry.catalog()) {
    for (const mode of ['high', 'medium', 'low']) {
      const scope = createScope(), scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(58, 16 / 9, .05, 900), resources = createSpatialResources(THREE);
      const params = registry.normalizeState(definition.id).params;
      const ctx = { THREE, scene, camera, scope, signal: scope.signal, params, quality: PROFILES[mode], services: { spatialResources: resources } };
      const instance = registry.get(definition.id).create(ctx); created++;
      const frame = { now: 1000, time: 1, dt: .016, playing: true, bands: { bass: .7, mid: .4, treble: .2 }, onset: 1,
        spectrum: new Float32Array(64).fill(.5), lyrics: { index: 1, progress: .4, lines: [{ text: 'Before', start: 0, end: 1 }, { text: 'Current spatial words', start: 1, end: 2, tokens: [{ text: 'Current', start: 1, end: 1.5 }, { text: 'words', start: 1.5, end: 2 }] }, { text: 'After', start: 2, end: 3 }] } };
      instance.update(frame); instance.update({ ...frame, now: 1016, time: 1.016 }); instance.resize(360, 740);
      let points = 0, triangles = 0, calls = 0, depth = false; const geometries = new Set();
      scene.updateMatrixWorld(true);
      scene.traverse(object => {
        assert.ok(object.matrixWorld.elements.every(Number.isFinite), definition.id + ' finite matrix');
        if (!object.geometry) return;
        geometries.add(object.geometry);
        assert.ok([...object.geometry.attributes.position.array].every(Number.isFinite), definition.id + ' finite vertices');
        const array = object.geometry.attributes.position.array;
        let minZ = Infinity, maxZ = -Infinity;
        for (let i = 2; i < array.length; i += 3) { minZ = Math.min(minZ, array[i]); maxZ = Math.max(maxZ, array[i]); }
        depth ||= maxZ - minZ > .01 || object.isInstancedMesh || Math.abs(object.position.z) > .01;
        if (!object.visible || !object.parent.visible) return;
        calls++;
        const count = Math.min(object.geometry.drawRange.count, object.geometry.index?.count ?? object.geometry.attributes.position.count);
        if (object.isPoints) points += count;
        else triangles += count / 3 * (object.isInstancedMesh ? object.count : 1);
      });
      assert.ok(depth, definition.id + ' has spatial depth'); assert.ok(points <= PROFILES[mode].particles, definition.id + ' particle budget');
      assert.ok(triangles <= PROFILES[mode].triangles, definition.id + ' triangle budget'); assert.ok(calls <= PROFILES[mode].drawCalls, definition.id + ' call budget');
      assert.ok(scope.stats().estimatedBytes + resources.stats().bytes < PROFILES[mode].memoryBytes, definition.id + ' estimated memory budget');
      instance.setQuality(PROFILES.low); instance.setQuality(PROFILES.high);
      const after = new Set(); scene.traverse(o => { if (o.geometry) after.add(o.geometry); }); assert.deepEqual(after, geometries, definition.id + ' quality reuses geometry pools');
      instance.setParams({ ...params, director: true, cue: 'chorus', dust: .5, discRing: true, ripples: .5 }); instance.update({ ...frame, now: 1032, time: 1.032 });
      const frozenFrame = { ...frame, now: 2000, time: 2, sceneTime: 1, reduced: true, dynamicDt: 0 };
      for (let i = 0; i < 8; i++) instance.update({ ...frozenFrame, now: 2000 + i * 16 });
      const snapshot = () => {
        scene.updateMatrixWorld(true); const result = [];
        scene.traverse(o => {
          const uniforms = {};
          for (const [key, uniform] of Object.entries(o.material?.uniforms || {})) {
            if (['uFill', 'uProgress'].includes(key)) continue; // Playback highlighting remains live during seeks.
            const value = uniform.value;
            if (typeof value === 'number') uniforms[key] = value;
            else if (ArrayBuffer.isView(value)) uniforms[key] = Array.from(value);
            else if (value?.toArray && !value.isTexture) uniforms[key] = value.toArray();
          }
          result.push({ matrix: o.matrixWorld.elements.slice(), instances: o.instanceMatrix ? Array.from(o.instanceMatrix.array) : null, uniforms });
        }); return result;
      };
      const frozen = snapshot();
      instance.update({ ...frozenFrame, now: 3000, time: 3, bands: { bass: .1, mid: .9, treble: .8 }, spectrum: new Float32Array(64).fill(.9), onset: 0 });
      const still = snapshot();
      assert.deepEqual(still, frozen, definition.id + ' reduced scene clock/spectrum preserve geometry');
      instance.dispose(); instance.dispose(); scope.dispose(); scope.dispose(); resources.dispose();
      assert.equal(scene.children.length, 0, definition.id + ' scene cleanup'); assert.equal(scope.stats().resources, 0);
    }
  }
  const scope = createScope(), ctx = { THREE, scope, signal: scope.signal, params: {}, camera: new THREE.PerspectiveCamera(), quality: PROFILES.low, services: {} };
  const post = createPostChain(ctx); post.resize(800, 600);
  const calls = [], fakeRenderer = { autoClear: false, getRenderTarget: () => null, setRenderTarget: target => calls.push(target), render: () => calls.push('render') };
  post.render(fakeRenderer, new THREE.Scene(), ctx.camera); assert.equal(post.stats().bytes, 0, 'no post target while disabled');
  post.setParams({ grain: 10, bokeh: 10 }); post.update({ time: 1 }); post.render(fakeRenderer, new THREE.Scene(), ctx.camera);
  assert.equal(post.stats().drawCalls, 1); assert.ok(post.stats().bytes <= 800 * 600 * 8 / 4); assert.equal(fakeRenderer.autoClear, false, 'renderer state restored');
  post.setParams({ grain: 0, bokeh: 0 }); assert.equal(post.stats().bytes, 0, 'disabled chain releases target'); post.dispose(); scope.dispose();
  for (const directory of ['src/scenes', 'src/effects']) for (const name of fs.readdirSync(path.join(stage, directory))) {
    const source = fs.readFileSync(path.join(stage, directory, name), 'utf8'); assert.doesNotMatch(source, /requestAnimationFrame|new\s+\w*\.?WebGLRenderer|AudioContext|Stage3D\.|CreativeGL\./, name + ' independent host or old renderer');
  }
  console.log('Space scene checks passed: ' + registry.catalog().length + ' scenes, ' + effects.catalog().length + ' effects, ' + created + ' real Three.js lifecycles, ' + manifest.entries.length + ' migration rows. Ordinary-PC/DBX GPU qualification unmeasured.');
})().catch(error => { console.error(error); process.exitCode = 1; });
