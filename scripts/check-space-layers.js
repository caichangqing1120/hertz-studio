#!/usr/bin/env node
// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
'use strict';

// DOM ownership and bounded geometry contracts; no browser or audio backend needed.
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');
const sourcePath = path.join(__dirname, '..', 'plugin', 'ui', 'space-layers.js');
assert.ok(fs.existsSync(sourcePath), 'SpaceLayers must supply the remaining visual layers');
const source = fs.readFileSync(sourcePath, 'utf8');
let checks = 0;
function check(value, message) { assert.ok(value, message); checks++; }

class Element {
  constructor(tag) {
    this.tagName = tag.toUpperCase(); this.children = []; this.parentNode = null;
    this.dataset = {}; this.hidden = false; this.className = ''; this.id = '';
    this.clientWidth = 1707; this.clientHeight = 898; this.attributes = {};
    this.style = { setProperty(k, v) { this[k] = String(v); }, removeProperty(k) { delete this[k]; }, getPropertyValue(k) { return this[k] || ''; } };
    this.classList = { contains: c => this.className.split(' ').includes(c), toggle: (c, on) => {
      const classes = this.className.split(' ').filter(Boolean).filter(v => v !== c);
      if (on) classes.push(c); this.className = classes.join(' ');
    }, add: c => this.classList.toggle(c, true), remove: c => this.classList.toggle(c, false) };
  }
  appendChild(child) { return this.insertBefore(child, null); }
  append(...children) { children.forEach(child => this.appendChild(child)); }
  insertBefore(child, next) {
    if (child.parentNode) child.remove();
    const index = next ? this.children.indexOf(next) : -1;
    this.children.splice(index < 0 ? this.children.length : index, 0, child); child.parentNode = this;
    return child;
  }
  remove() { if (this.parentNode) { this.parentNode.children.splice(this.parentNode.children.indexOf(this), 1); this.parentNode = null; } }
  get nextSibling() { return this.parentNode && this.parentNode.children[this.parentNode.children.indexOf(this) + 1] || null; }
  setAttribute(k, v) { this.attributes[k] = String(v); }
  getAttribute(k) { return Object.prototype.hasOwnProperty.call(this.attributes, k) ? this.attributes[k] : null; }
  removeAttribute(k) { delete this.attributes[k]; }
  querySelectorAll(selector) {
    const all = [];
    const matches = el => selector.split(',').some(s => {
      s = s.trim(); return s[0] === '#' ? el.id === s.slice(1) : s[0] === '.' ? el.classList.contains(s.slice(1)) : el.tagName === s.toUpperCase();
    });
    function visit(el) { el.children.forEach(c => { if (matches(c)) all.push(c); visit(c); }); }
    visit(this); return all;
  }
  querySelector(selector) { return this.querySelectorAll(selector)[0] || null; }
  getContext(kind) {
    assert.strictEqual(kind, '2d', 'visual layers may not create a GL context');
    return { clearRect() {}, drawImage() {}, fillRect() {}, setTransform() {} };
  }
}

function fixture(stageHost) {
  const body = new Element('body'), html = new Element('html'); html.append(body);
  const previous = new Element('div'); previous.id = stageHost ? 's3d-host-creative' : 'home'; body.append(previous);
  const bg = new Element('div'); bg.id = 'creative-bg'; previous.append(bg);
  const sibling = new Element('div'); previous.append(sibling);
  const pixels = new Element('canvas'); pixels.id = 'creative-bg-canvas'; pixels.width = 384; pixels.height = 202; bg.append(pixels);
  const root = new Element('div'); root.id = 'space3d'; root.className = 'sp'; body.append(root);
  const target = new Element('div'); target.id = 'sp-bg'; root.append(target);
  const lyric = new Element('div'); lyric.id = 'sp-reading'; root.append(lyric);
  const snapshot = { type: 'mesh', opacity: 71, blur: 9, blend: 'screen', depthMode: 'scene' };
  let spec = { ...snapshot }, host = stageHost ? previous : null, stageState = null;
  const owner = {
    values: () => ({ ...spec }),
    update: value => { spec = { ...value }; return { ...spec }; },
    defaults: () => ({ opacity: 90, blur: 38 }),
    setStageHost: value => { host = value; (value || previous).insertBefore(bg, value ? null : sibling); },
    stats: () => ({ host: host ? 'stage3d' : 'home' }),
    setStageState: value => { stageState = value; },
    setLocalFile: file => { spec = { type: 'media', media: 'image', url: 'blob:local-file', name: file.name, depthMode: 'flat' }; return spec; }
  };
  const document = { body, documentElement: html, hidden: false,
    createElement: tag => new Element(tag), getElementById: id => html.querySelector('#' + id) };
  const sandbox = { document, console, Math, isFinite, Float32Array, Backgrounds: owner,
    getComputedStyle: () => ({ getPropertyValue: () => '' }),
    requestAnimationFrame() { throw Error('SpaceLayers must use its host clock'); },
    Stage: new Proxy({}, { get() { throw Error('SpaceLayers must consume its host audio snapshot'); } }) };
  sandbox.window = sandbox; vm.runInNewContext(source, sandbox, { filename: 'space-layers.js' });
  return { api: sandbox.SpaceLayers, root, bg, previous, target, sibling, snapshot,
    get spec() { return spec; }, get host() { return host; }, get state() { return stageState; } };
}

const f = fixture(false), api = f.api;
check(api && typeof api.create === 'function', 'module exposes a host adapter');
const originalDefaults = JSON.stringify(api.defaults());
const changedDefaults = api.defaults(); changedDefaults.dust = 9999;
check(JSON.stringify(api.defaults()) === originalDefaults, 'default snapshots cannot mutate future instances');
const bad = api.normalize({ stagePreset: 'broken', dust: 9999, ripples: -9, karaoke: 'false', discRing: true, bgwall: true });
check(bad.stagePreset === 'venue' && bad.dust === 100 && bad.ripples === 0 && bad.karaoke === false, 'corrupt preferences clamp safely');
check(api.normalize({ dust: NaN }).dust === api.defaults().dust, 'nonfinite density uses default');
const catalog = api.catalog();
check(catalog.find(v => v.key === 'stagePreset').options.length === 4, 'all four layout themes are selectable');
check(api.backgroundCatalog().find(v => v.key === 'type').options.length === 6, 'theme plus all five background generators are selectable');
check(api.backgroundCatalog().find(v => v.key === 'blend').options.length === 5, 'all five blend modes are selectable');

const layers = api.create(f.root);
check(f.bg.parentNode === f.target, 'background pixels are moved into the active space');
check(f.state.flat && f.spec.depthMode === 'scene', 'existing GL background wall is suspended without altering configured depth');
layers.configure({ karaoke: true, discRing: true, dust: 100, ripples: 100, bgwall: true, stagePreset: 'diorama' });
layers.update(40, { timeSec: 1, playing: true, pose: { theta: .2, phi: .1, radius: 7 }, bands: new Float32Array(64).fill(.5), beat: .8 });
check(f.root.dataset.spaceTheme === 'diorama' && f.root.classList.contains('sp-karaoke'), 'theme and lyric presentation apply only to the space root');
const stats = layers.stats();
check(stats.dust <= 72 && stats.discBars === 64 && stats.wallPanels <= 24, 'all geometry has bounded density');
check(stats.wallPanels > 2 && stats.wallReady, 'shared source is sampled onto a curved surface');
check(f.root.querySelectorAll('.sp-dust-point').some(p => /translate3d\([^,]+,[^,]+,(?!0px)/.test(p.style.transform)), 'dust has world depth');
const panels = f.root.querySelectorAll('.sp-wall-panel');
check(new Set(panels.map(p => p.style.transform)).size > 2, 'wall panels occupy different positions and orientations');
layers.setBackground({ type: 'theme' });
check(!f.target.classList.contains('sp-has-wall') && !layers.stats().wallReady && layers.stats().warning,
  'an unavailable wall source retains the original background and explains what is missing');
layers.setBackground({ type: 'mesh', blur: 4, opacity: 66, blend: 'overlay' });
const points = f.root.querySelectorAll('.sp-dust-point');
const positionBefore = points.map(p => p.style.transform).join('|');
const spectrumBefore = f.root.querySelectorAll('.sp-disc-bar').map(p => p.style.transform).join('|');
layers.update(1000, { timeSec: 30, playing: false, pose: { theta: .2, phi: .1, radius: 7 }, bands: new Float32Array(64).fill(1) });
check(points.map(p => p.style.transform).join('|') === positionBefore, 'pausing freezes drifting particles across clock jumps');
check(f.root.querySelectorAll('.sp-disc-bar').map(p => p.style.transform).join('|') === spectrumBefore, 'paused ring retains its last spectrum instead of reacting to new samples');
check(f.state && f.state.paused, 'background playback follows the same paused state');
layers.update(1000, { timeSec: 31, playing: true, reduced: true, pose: { theta: .2, phi: .1, radius: 7 } });
check(points.map(p => p.style.transform).join('|') === positionBefore, 'reduced motion freezes particle drift');
check(f.state.reduced, 'background honors reduced motion');
layers.update(100, { timeSec: 31.1, playing: true, pose: { theta: .8, phi: .2, radius: 7 }, bands: [NaN, Infinity, -4, 9] });
check(!f.root.querySelectorAll('span').some(p => /NaN|Infinity/.test(p.style.transform || '')), 'invalid spectrum values never enter transforms');
layers.setBackground({ type: 'flow', blur: 4, opacity: 66, blend: 'overlay' });
check(f.spec.type === 'flow' && f.spec.blend === 'overlay' && f.state.flat, 'background changes go through the original owner');
layers.setLocalFile({ name: 'local.png', type: 'image/png' });
check(f.spec.url === 'blob:local-file', 'local media remains owned by Backgrounds');
layers.configure({ dust: 0, ripples: 0, discRing: false, bgwall: false });
check(layers.stats().dust === 0 && layers.stats().wallPanels === 0, 'disabled effects release geometry immediately');
layers.dispose(); layers.dispose();
check(f.bg.parentNode === f.previous && f.bg.nextSibling === f.sibling && f.host === null, '2D background owner and exact DOM order are restored');
check(f.spec.url === 'blob:local-file', 'ownership returns without revoking the selected shared media');
check(f.state === null && !f.root.querySelector('.sp-layers'), 'dispose removes only owned geometry and clears host playback state');
check(!f.root.classList.contains('sp-karaoke') && !f.root.dataset.spaceTheme, 'space-only presentation state is restored');
const priorSpec = JSON.stringify(f.spec); layers.setBackground({ type: 'mesh' });
check(JSON.stringify(f.spec) === priorSpec, 'disposed adapters cannot overwrite global settings');

const g = fixture(true), second = g.api.create(g.root); second.dispose();
check(g.host === g.previous && g.bg.parentNode === g.previous, 'an existing Stage3D background owner is restored too');
const css = fs.readFileSync(sourcePath.replace(/\.js$/, '.css'), 'utf8');
check(css.includes('--sl-fill') && css.includes('mask-image'), 'karaoke erases using StageLyrics timing rather than a second parser');
check(css.includes('preserve-3d') && css.includes('perspective'), 'the layer hierarchy preserves projected depth');
check(!/requestAnimationFrame\s*\(|getContext\(['"]webgl/.test(source), 'adapter adds no animation loop or GL context');
console.log('SpaceLayers: ' + checks + ' contracts passed.');
