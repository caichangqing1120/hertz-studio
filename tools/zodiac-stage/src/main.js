// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
//
// 「星座 · 十二星图」场景引擎入口。纯场景层：不感知 hertz-studio 的任何全局，
// 由 plugin/ui/stage-zodiac.js 适配层驱动。
//
// 立面（与 coast 引擎同构）：
//   probe()                          是否具备运行条件（WebGL2）
//   mount(canvas, opts)              opts: { quality, reduced, palette, interactive }
//   unmount()                        完整释放 GL 资源（舞台源互斥切换，不允许泄漏）
//   resize(w, h)
//   setTime({ time, playing })       播放时间（秒）；暂停时星图冻结、能量回落
//   setAudio({ bands, onset })       bands 为频谱快照，onset 为低频起音布尔
//   setPrefs(p)                      { lines, field, interact, glow, speed,
//                                     reduced, palette } 即时生效
//   stats() / debug() / capture()    检查口（renderer.info、绘制统计、像素采样）
//   pure                             纯函数导出（Node 契约测试用，不碰 DOM/GL）
//
// 模块分工：zodiac.js 星图数据与纯几何、world.js 背景星场/粒子星图/连线。

import * as THREE from 'three';
import { clamp, aggregateBands, envelopeBands, damp } from './util.js';
import { ZODIAC, SIGN_COUNT, ringTransform, viewBass, zoomClamp } from './zodiac.js';
import { createWorld } from './world.js';

const QUALITY = {
  // DPR 双钳制与 stage3d 主场景同一套公式（硬性上限 ∩ 总像素预算），
  // 档位对齐 Stage.tier 0/1/2。
  low: { prCap: 1.0, budget: 1900000 },
  medium: { prCap: 1.15, budget: 3600000 },
  high: { prCap: 1.55, budget: 6200000 },
};
const BIN_COUNT = 24;
const BASS_HI = 5;
const PAUSE_RENDER_MS = 250; // 暂停时星图冻结，画面最多 4fps 兜底刷新
const BG_COLOR = '#05060a';
const CAM_EYE_Y = 1.4;
const DIST_DEFAULT = 9;
const DIST_MIN = 3;
const DIST_MAX = 17;
const PITCH_LIMIT = 0.6;
const AUTO_SPIN = 0.018;      // 缓转基速（rad/s，约 5.8 分钟一周）
const RESUME_IDLE_MS = 6;     // 静置 6s 后拖拽偏移平滑回到巡航机位

export function probe() {
  try {
    const canvas = document.createElement('canvas');
    return !!(canvas.getContext && canvas.getContext('webgl2'));
  } catch (_) {
    return false;
  }
}

let st = null;

export function mount(canvas, opts = {}) {
  if (st) unmount();
  const quality = QUALITY[opts.quality] ? opts.quality : 'high';
  let renderer = null;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas, antialias: true, powerPreference: 'high-performance',
    });
  } catch (_) {
    return false;
  }
  if (!renderer.getContext()) return false;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;
  renderer.info.autoReset = false;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(BG_COLOR);
  const camera = new THREE.PerspectiveCamera(56, 1, 0.1, 400);
  camera.position.set(0, CAM_EYE_Y, DIST_DEFAULT);

  const prefs = {
    lines: true, field: true, interactive: opts.interactive !== false,
    glow: 1, speed: 1, reduced: !!opts.reduced,
    palette: opts.palette || {},
  };
  const world = createWorld(THREE, scene, { quality });
  world.setPalette(prefs.palette);
  const audio = {
    raw: null, onset: false,
    bins: new Float32Array(BIN_COUNT),
    target: new Float32Array(BIN_COUNT),
    bass: 0, onsetLevel: 0,
  };

  // 相机：自动缓转（spin）+ 拖拽偏移（yaw/pitch）+ 滚轮推拉（dist）。
  // 静置后偏移回到 0，机位继续沿环巡航。
  const rig = {
    spin: 0, yaw: 0, pitch: 0.04, dist: DIST_DEFAULT,
    dragging: false, lastInput: -99, fov: 56,
  };

  function onPointerDown(e) {
    if (!prefs.interactive) return;
    rig.dragging = true;
    rig.lastInput = st ? st.time : 0;
    try { canvas.setPointerCapture(e.pointerId); } catch (_) { /* 老环境无捕获也能拖 */ }
  }
  function onPointerMove(e) {
    if (!prefs.interactive || !rig.dragging || !(e.buttons & 1)) return;
    rig.yaw -= e.movementX * 0.005;
    rig.pitch = clamp(rig.pitch + e.movementY * 0.004, -PITCH_LIMIT, PITCH_LIMIT);
    rig.lastInput = st ? st.time : 0;
  }
  function onPointerUp() { rig.dragging = false; }
  function onWheel(e) {
    if (!prefs.interactive) return;
    e.preventDefault();
    rig.dist = zoomClamp(rig.dist * (1 + e.deltaY * 0.001), DIST_MIN, DIST_MAX);
    rig.lastInput = st ? st.time : 0;
  }
  function onDouble() {
    if (!prefs.interactive) return;
    rig.yaw = 0; rig.pitch = 0.04; rig.dist = DIST_DEFAULT;
    rig.lastInput = st ? st.time : 0;
  }
  function bindInput() {
    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    canvas.addEventListener('wheel', onWheel, { passive: false });
    canvas.addEventListener('dblclick', onDouble);
    canvas.style.touchAction = prefs.interactive ? 'none' : '';
  }
  function unbindInput() {
    canvas.removeEventListener('pointerdown', onPointerDown);
    canvas.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    canvas.removeEventListener('wheel', onWheel);
    canvas.removeEventListener('dblclick', onDouble);
    canvas.style.touchAction = '';
  }

  st = {
    canvas, renderer, scene, camera, world, quality, prefs, audio, rig,
    raf: 0, lastFrame: 0, lastRender: 0, lastTime: -1,
    time: 0, sceneTime: 0, playing: false, dirty: true,
    width: 0, height: 0, pr: 1,
    bindInput, unbindInput,
  };
  bindInput();
  st.raf = requestAnimationFrame(tick);
  return true;
}

export function unmount() {
  if (!st) return;
  if (st.raf) cancelAnimationFrame(st.raf);
  st.raf = 0;
  try { st.unbindInput(); } catch (_) { /* 尽力释放 */ }
  try { st.world.dispose(); } catch (_) { /* 尽力释放 */ }
  try { st.renderer.dispose(); st.renderer.forceContextLoss(); } catch (_) { /* 尽力释放 */ }
  st = null;
}

function computeDpr(width, height, quality) {
  const q = QUALITY[quality];
  const dev = (typeof window !== 'undefined' && window.devicePixelRatio) || 1;
  const budgetCap = Math.sqrt(q.budget / Math.max(1, width * height));
  let maxSize = Infinity;
  try {
    const gl = st && st.renderer.getContext();
    if (gl) maxSize = Math.min(gl.getParameter(gl.MAX_TEXTURE_SIZE), gl.getParameter(gl.MAX_RENDERBUFFER_SIZE));
  } catch (_) { /* 探测失败按无上限 */ }
  return Math.min(dev, q.prCap, budgetCap, maxSize / Math.max(width, height));
}

export function resize(width, height) {
  if (!st || !(width > 0) || !(height > 0)) return;
  st.width = width;
  st.height = height;
  st.pr = computeDpr(width, height, st.quality);
  st.renderer.setPixelRatio(st.pr);
  st.renderer.setSize(width, height, false);
  st.camera.aspect = width / height;
  st.camera.updateProjectionMatrix();
  st.world.setPixelRatio(st.pr);
  st.dirty = true;
}

export function setTime(frame = {}) {
  if (!st) return;
  const time = clamp(Number(frame.time) || 0, 0, 3600 * 4);
  const playing = !!frame.playing;
  if (time !== st.time || playing !== st.playing) st.dirty = true;
  st.time = time;
  st.playing = playing;
}

export function setAudio(frame = {}) {
  if (!st) return;
  st.audio.raw = frame.bands && frame.bands.length ? frame.bands : null;
  st.audio.onset = !!frame.onset;
}

export function setPrefs(patch = {}) {
  if (!st) return;
  if (typeof patch.lines === 'boolean') {
    st.prefs.lines = patch.lines;
    st.world.setLinesVisible(st.prefs.lines);
  }
  if (typeof patch.field === 'boolean') {
    st.prefs.field = patch.field;
    st.world.setFieldVisible(st.prefs.field);
  }
  if (typeof patch.interactive === 'boolean') {
    st.prefs.interactive = patch.interactive;
    st.canvas.style.touchAction = st.prefs.interactive ? 'none' : '';
  }
  if (patch.glow != null) st.prefs.glow = clamp(Number(patch.glow), 0, 2);
  if (patch.speed != null) st.prefs.speed = clamp(Number(patch.speed), 0.15, 3);
  if (patch.reduced != null) st.prefs.reduced = !!patch.reduced;
  if (patch.palette) {
    st.prefs.palette = patch.palette;
    st.world.setPalette(st.prefs.palette);
  }
  st.dirty = true;
}

function tick(now) {
  if (!st) return;
  st.raf = requestAnimationFrame(tick);
  if (!st.playing && !st.dirty && now - st.lastRender < PAUSE_RENDER_MS) return;
  const dt = st.lastFrame ? Math.min((now - st.lastFrame) / 1000, st.playing ? 0.1 : 0.25) : 0.016;
  st.lastFrame = now;
  const prefs = st.prefs;
  const time = st.time;
  const seek = st.lastTime < 0 || Math.abs(time - st.lastTime) > 0.5;
  st.lastTime = time;

  // 频带包络：seek 直接落位，否则快攻慢放；暂停时目标为零（星图静下来）。
  const target = aggregateBands(st.playing ? st.audio.raw : null, BIN_COUNT, st.audio.target);
  if (seek) st.audio.bins.set(target);
  else envelopeBands(st.audio.bins, target, dt);
  const bassTarget = viewBass(st.audio.bins);
  if (seek || !st.playing) st.audio.bass = seek ? bassTarget : damp(st.audio.bass, 0, 0.3, dt);
  else st.audio.bass = damp(st.audio.bass, bassTarget, 0.1, dt);
  const onsetEnv = st.playing && st.audio.onset ? 1 : 0;
  st.audio.onsetLevel = seek ? onsetEnv
    : damp(st.audio.onsetLevel || 0, onsetEnv, onsetEnv ? 0.05 : 0.22, dt);

  // 减弱动效只保留极慢缓转；显式 seek 直接落位场景时钟。
  if (!prefs.reduced || seek) st.sceneTime = time;
  const rig = st.rig;
  const spinGain = (prefs.reduced ? 0.25 : 1) * prefs.speed;
  rig.spin += dt * AUTO_SPIN * spinGain + dt * st.audio.bass * 0.05 * spinGain;

  // 静置后拖拽偏移平滑回到巡航机位（仍继续缓转）。
  if (time - rig.lastInput > RESUME_IDLE_MS && !rig.dragging) {
    rig.yaw = damp(rig.yaw, 0, 1.6, dt);
    rig.pitch = damp(rig.pitch, 0.04, 1.6, dt);
    rig.dist = damp(rig.dist, DIST_DEFAULT, 1.6, dt);
  }
  const effYaw = rig.spin + rig.yaw;
  const cp = Math.cos(rig.pitch);
  const camera = st.camera;
  camera.position.set(
    Math.sin(effYaw) * cp * rig.dist,
    CAM_EYE_Y + Math.sin(rig.pitch) * rig.dist,
    Math.cos(effYaw) * cp * rig.dist,
  );
  camera.lookAt(
    Math.sin(effYaw) * 40,
    CAM_EYE_Y + Math.tan(rig.pitch) * 26,
    Math.cos(effYaw) * 40,
  );

  // FOV：低频轻微呼吸（±1.4°），阻尼收敛，30/60/120Hz 表现一致。
  const fovTarget = 56 + st.audio.bass * 1.4;
  rig.fov = seek ? fovTarget : damp(rig.fov, fovTarget, 0.32, dt);
  if (Math.abs(camera.fov - rig.fov) > 0.001) {
    camera.fov = rig.fov;
    camera.updateProjectionMatrix();
  }

  st.world.setCameraPos(camera.position);
  st.world.update(st.sceneTime, {
    bass: st.audio.bass, onset: st.audio.onsetLevel,
    reduced: prefs.reduced, glow: prefs.glow, dt,
  });

  st.dirty = false;
  st.lastRender = now;
  st.renderer.info.reset();
  st.renderer.render(st.scene, camera);
}

export function stats() {
  if (!st) return null;
  const info = st.renderer.info;
  return {
    mounted: true,
    quality: st.quality,
    drawCalls: info.render.calls,
    points: info.render.points,
    ...st.world.stats(),
    bass: st.audio.bass,
    onset: st.audio.onsetLevel,
    yaw: st.rig.spin + st.rig.yaw,
    dist: st.rig.dist,
    time: st.time,
    playing: st.playing,
  };
}

export function debug() {
  if (!st) return null;
  return {
    mounted: true,
    quality: st.quality,
    time: st.time,
    playing: st.playing,
    bass: st.audio.bass,
    fov: st.rig.fov,
    spin: st.rig.spin,
    yaw: st.rig.yaw,
    pitch: st.rig.pitch,
    dist: st.rig.dist,
    prefs: { ...st.prefs },
  };
}

// 同步重画一帧并按行读回像素（读默认帧缓冲必须在渲染后的同一任务里）。
export function capture() {
  if (!st) return null;
  st.renderer.info.reset();
  st.renderer.render(st.scene, st.camera);
  const gl = st.renderer.getContext();
  const w = gl.drawingBufferWidth;
  const h = gl.drawingBufferHeight;
  const sample = (yFrac) => {
    const y = Math.max(0, Math.min(h - 1, Math.floor(h * yFrac)));
    const row = new Uint8Array(w * 4);
    gl.readPixels(0, y, w, 1, gl.RGBA, gl.UNSIGNED_BYTE, row);
    let r = 0, g = 0, b = 0;
    for (let i = 0; i < row.length; i += 4) { r += row[i]; g += row[i + 1]; b += row[i + 2]; }
    return [Math.round(r / w), Math.round(g / w), Math.round(b / w)];
  };
  return { top: sample(0.8), middle: sample(0.5), bottom: sample(0.15), width: w, height: h };
}

// 顶层命名导出即立面：esbuild IIFE 的 exports 对象就是 window.ZodiacStagePure。
export const pure = {
  ZODIAC, SIGN_COUNT, ringTransform, viewBass, zoomClamp, aggregateBands,
};
