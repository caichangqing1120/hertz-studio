// SPDX-License-Identifier: MIT
// Exercise the SVG stage adapter against the real registry, plus the wiring that
// keeps the new scene source reachable (routes, options, settings capability).
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ui = path.resolve(__dirname, '../plugin/ui');

function makeEl(tag) {
  const el = {
    tagName: tag,
    children: [],
    dataset: {},
    classes: new Set(),
    styleProps: {},
    _html: '',
    _first: null,
    hidden: false,
    appendChild(child) { el.children.push(child); return child; },
    setAttribute() {},
    getAttribute() { return null; },
    classList: {
      add(name) { el.classes.add(name); },
      contains(name) { return el.classes.has(name); }
    },
    style: { setProperty(key, value) { el.styleProps[key] = value; } }
  };
  Object.defineProperty(el, 'innerHTML', {
    get() { return el._html; },
    set(value) {
      el._html = String(value);
      if (tag === 'template') {
        el._first = makeEl('svg');
        el._first._html = el._html;
      }
    }
  });
  // 真 DOM 的 textContent 赋值会拆掉全部子节点，挂载重建靠它清场。
  Object.defineProperty(el, 'textContent', {
    get() { return ''; },
    set() { el.children.length = 0; }
  });
  Object.defineProperty(el, 'content', {
    get() { return { firstElementChild: el._first }; }
  });
  return el;
}

// withRegistry=false 模拟 creative-anime.js 没加载（注册表缺席）的降级路径。
function makeBox(withRegistry) {
  const listeners = {};
  const rafQueue = [];
  const spectrum = { value: null };
  const box = {
    console, Uint8Array, Float32Array, Float64Array,
    setTimeout: () => 0, clearTimeout() {}, setInterval: () => 0,
    requestAnimationFrame(fn) { rafQueue.push(fn); return rafQueue.length; },
    cancelAnimationFrame() {},
    matchMedia: () => ({ matches: false }),
    document: {
      hidden: false,
      getElementById: () => null,
      addEventListener(type, fn) { (listeners[type] = listeners[type] || []).push(fn); },
      createElement: tag => makeEl(tag)
    },
    Stage: {
      presentation: () => ({ reduced: false, playing: true }),
      spectrum: () => spectrum.value
    }
  };
  box.window = box;
  box.__listeners = listeners;
  box.__rafQueue = rafQueue;
  box.__spectrum = spectrum;
  vm.createContext(box);
  for (const file of ['onset.js', 'creative-gl.js']) {
    vm.runInContext(fs.readFileSync(path.join(ui, file), 'utf8'), box, { filename: file });
  }
  if (withRegistry) {
    vm.runInContext(fs.readFileSync(path.join(ui, 'creative-anime.js'), 'utf8'), box, { filename: 'creative-anime.js' });
  }
  vm.runInContext(fs.readFileSync(path.join(ui, 'stage-anime-svg.js'), 'utf8'), box, { filename: 'stage-anime-svg.js' });
  return box;
}

function pump(box, count, step) {
  for (let i = 0; i < count; i += 1) {
    const queue = box.__rafQueue.splice(0);
    queue.forEach(fn => fn(1000 + i * (step || 16)));
  }
}

function fire(box, type, event) {
  (box.__listeners[type] || []).forEach(fn => fn(event || {}));
}

async function main() {
  let checks = 0;
  const box = makeBox(true);
  const A = box.StageAnimeSvg;
  const GL = box.CreativeGL;
  assert.ok(A, 'adapter is exported on window');
  checks += 1;

  const scenes = GL.scenes().filter(s => s.presentation && s.presentation.family === 'anime');
  assert.equal(scenes.length, 4, 'registry still carries the four illustrated scenes');
  checks += 1;

  // ---- 可用性：注册表在则可用，不在则置灰 ----
  assert.equal(A.available(), true, 'available with the registry present');
  const bare = makeBox(false);
  assert.equal(bare.StageAnimeSvg.available(), false, 'available is false without the registry');
  assert.equal(bare.StageAnimeSvg.setHost(makeEl('div')), false, 'mount refuses without the registry');
  assert.ok(/模块未加载/.test(bare.StageAnimeSvg.degradedBecause()), 'degraded reason names the missing module');
  checks += 3;

  // ---- 挂载：同画稿字符串 + 实例前缀 + 铺满比例 ----
  const host = makeEl('div');
  assert.equal(A.setHost(host), true, 'mount succeeds');
  assert.equal(host.children.length, 1, 'one primary layer is mounted');
  const art = host.children[0]._html;
  assert.ok(art.startsWith('<svg'), 'the mounted node is the registry artwork');
  assert.ok(art.includes('class="ws-scene-art celx celx-coast"'), 'the celx pause gate travels with the artwork');
  assert.ok(art.includes('preserveAspectRatio="xMidYMid meet"'), 'artwork keeps the full frame like the card');
  assert.ok(!/id="cx-/.test(art) && !/url\(#cx-/.test(art) && !/href="#cx-/.test(art),
    'no raw cx- ids survive: the workshop card owns those');
    assert.ok(/id="s3dap1-cx-coast-sky"/.test(art), 'definitions carry the instance prefix');
    assert.ok(/url\(#s3dap1-cx-coast-sky\)/.test(art), 'references are rewritten to the same prefix');
    // 剥掉实例前缀与注入的取景属性后，必须与注册表里的画稿逐字相同——舞台与
    // 工坊卡片挂的是同一份资产，"和小图一致"才有物质基础。
    assert.equal(art.replace(/s3da[a-z]\d+-/g, '').replace(' preserveAspectRatio="xMidYMid meet"', ''),
      GL.sceneById('anime-coast').presentation.art, 'the stage mounts the registry artwork verbatim');
  assert.equal(A.degradedBecause(), null, 'no degradation after a clean mount');
  checks += 8;

  // ---- 换画：同一宿主重建，前缀换新 ----
  A.setPrefs({ scene: 'anime-rail' });
  assert.equal(host.children.length, 1, 'scene swap keeps a single primary layer');
  assert.ok(/id="s3dap2-cx-rail-night"/.test(host.children[0]._html), 'scene swap mounts the requested artwork');
  assert.ok(/href="#s3dap2-cx-rail-rain-far"/.test(host.children[0]._html), 'use references are rewritten too');
  checks += 2;

  // ---- 镜像：第二份拷贝 + 翻转类 ----
  A.setPrefs({ mirror: true });
  assert.equal(host.children.length, 2, 'mirror adds a second copy of the same artwork');
  assert.ok(host.children[1].classes.has('s3d-anime-mirror'), 'the copy carries the mirror class');
  assert.notEqual(host.children[0]._html, host.children[1]._html, 'the copy owns its own id prefix');
  checks += 2;

  // ---- 偏好没变不重建（节点身份保持） ----
  const before = host.children[0];
  A.setPrefs({ scene: 'anime-rail', mirror: true });
  assert.equal(host.children[0], before, 'unchanged prefs do not remount');
  checks += 1;

  // ---- 卸载：清空 + 可再挂 ----
  assert.equal(A.setHost(null), true, 'unmount succeeds');
  assert.equal(host.children.length, 0, 'unmount clears the host');
  assert.equal(A.setHost(host), true, 'remount after unmount succeeds');
  assert.equal(host.children.length, 2, 'remount restores both layers (mirror pref persists)');
  assert.ok(host.children[1].classes.has('s3d-anime-mirror'), 'the mirror copy returns with the pref');
  assert.equal(host.dataset.motion, 'running', 'motion gate opens on mount');
  checks += 4;

  // ---- 音频：频谱经 onset 写进宿主 CSS 变量 ----
  box.__spectrum.value = new Float64Array(24).fill(0.8);
  pump(box, 40);
  const audio = host.styleProps['--s3d-anime-audio'];
  assert.ok(typeof audio === 'string' && Number(audio) > 0, 'audio energy reaches the host CSS variable');
  checks += 1;

  // ---- 离屏暂停 / 帧门降档 ----
  box.document.hidden = true;
  fire(box, 'visibilitychange');
  assert.equal(host.dataset.motion, 'paused', 'hidden tab pauses the artwork');
  box.document.hidden = false;
  fire(box, 'visibilitychange');
  assert.equal(host.dataset.motion, 'running', 'returning to the tab resumes the artwork');
  fire(box, 'stage:fps', { detail: { lowfx: true } });
  assert.ok(host.classes.has('s3d-anime-lowfx'), 'lowfx drops the audio breath layer');
  checks += 3;

  // ---- 未知作品：拒绝挂载并说明原因 ----
  const other = makeEl('div');
  A.setPrefs({ scene: 'anime-rail' });
  assert.equal(A.setHost(other), true, 'known scene mounts');
  A.setPrefs({ scene: 'anime-nope' });
  assert.equal(A.setHost(other), false, 'unknown scene refuses to mount');
  assert.ok(/anime-nope/.test(A.degradedBecause()), 'degraded reason names the missing scene');
  checks += 2;

  // ---- 四幅作品逐个可挂 ----
  for (const scene of scenes) {
    const h = makeEl('div');
    A.setPrefs({ scene: scene.id, mirror: false });
    assert.equal(A.setHost(h), true, scene.label + ' mounts');
    assert.ok(h.children[0]._html.includes('viewBox="0 0 640 400"'), scene.label + ' keeps the shared drawing space');
  }
  checks += scenes.length * 2;

  // ---- 静态接线：漏一条路，这个源就到不了舞台 ----
  const html = fs.readFileSync(path.join(ui, 'index.html'), 'utf8');
  assert.ok(html.includes('href="stage-anime-svg.css"'), 'the stylesheet is linked');
  assert.ok(html.includes('src="stage-anime-svg.js"'), 'the adapter script is loaded');
  assert.ok(html.includes('value="anime-svg"'), 'the source select offers the new stage');
  assert.ok(html.includes('id="s3d-anime-scene"') && html.includes('id="s3d-anime-mirror"'), 'the tuning block exists');
  const assets = fs.readFileSync(path.resolve(__dirname, '../crates/hertz-studio/src/assets.rs'), 'utf8');
  assert.ok(assets.includes('"/stage-anime-svg.js"') && assets.includes('stage-anime-svg.js"'),
    'the adapter route is embedded (missing route = 404)');
  assert.ok(assets.includes('"/stage-anime-svg.css"'), 'the stylesheet route is embedded');
  const stage = fs.readFileSync(path.join(ui, 'stage3d.js'), 'utf8');
  // 宿主同步挂在布局同步里（与 coast/zodiac 并列，顺序不定；新的来源继续往里加）。
  assert.ok(/syncLayout\(\)\s*\{[^}]*syncAnimeSvgStage\(\);/.test(stage),
    'the host sync runs with the layout sync');
  assert.ok(stage.includes("value.sceneSource === 'anime-svg'"), 'restore accepts the new source');
  assert.ok(stage.includes('animeScene: animeScene, animeMirror: animeMirror'), 'prefs carry the new fields');
  // sceneCovered 与 bg.setMode 都按函数级切片查：新来源加进来后中间会陆续排上
  // 别的来源（coast/zodiac 就是这么加进来的），逐字比对中间形态必崩。
  const covered = stage.slice(stage.indexOf('function sceneCovered()'), stage.indexOf('function sceneOwnsLyrics()'));
  assert.ok(covered.includes("sceneSource === 'anime-svg'"), 'the new source covers the 3D scene');
  assert.ok(stage.includes("stanza.bg.setMode(sceneSource === 'creative'"), 'the lyric background yields to the new source');
  assert.ok(/stanza\.bg\.setMode\([^)]*'anime-svg'/.test(stage), 'the new source is in the setMode list');
  assert.ok(stage.includes('animeSceneIds().indexOf(value.animeScene)'), 'restored scene ids are validated');
  const css = fs.readFileSync(path.join(ui, 'stage-anime-svg.css'), 'utf8');
  assert.ok(css.includes('.s3d-anime-mirror { transform: scaleX(-1); }'), 'the mirror rule exists');
  assert.ok(css.includes('[data-motion="running"] .cx-motion'), 'the motion gate exists');
  assert.ok(css.includes('body.reduce-motion .s3d-anime .celx *'), 'the app-level reduced motion rule exists');
  const settings = fs.readFileSync(path.join(ui, 'stage-settings.js'), 'utf8');
  assert.ok(settings.includes("state.source === 'anime-svg'"), 'settings capability derives the new source');
  checks += 16;

  console.log('PASS ' + checks + ' SVG stage adapter, audio, mirror, pause, degrade and wiring checks');
}

main().catch(error => { console.error(error); process.exitCode = 1; });
