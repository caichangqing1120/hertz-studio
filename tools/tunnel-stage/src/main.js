// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
//
// 「隧图 · 深空」场景引擎入口。纯场景层：不感知 hertz-studio 的任何全局，
// 由 plugin/ui/stage-tunnel.js 适配层驱动。
//
// 立面（与 coast/diorama 引擎同构，扩展只增不改）：
//   probe()                          是否具备运行条件（WebGL2）
//   mount(canvas, opts)              opts: { quality, reduced, palette }
//   unmount()                        完整释放 GL 资源（舞台源互斥切换，不允许泄漏）
//   resize(w, h)
//   setTime({ time, playing })       播放时间（秒）；暂停时世界冻结、包络回落
//   setAudio({ bands, onset })       bands 为频谱快照，onset 为低频起音布尔
//   setLyrics(payload)               { v:1, lines:[{start,end,text,translation,glyphs}] }
//                                    （宿主编好的编制输入；引擎按播放时钟选行）
//   setPrefs(p)                      开放 bag：warp/objects/glow/speed/motion/
//                                    reduced/palette（引擎内部另收 VCPChat 同名
//                                    细分键，宿主不暴露）
//   stats() / capture()              检查口（renderer.info、绘制统计、画面三行采样）
//   pure                             纯函数导出（Node 契约测试用，不碰 DOM/GL）
//
// 模块分工：camera.js 行驶距离与路由（确定性核心）、world.js 星场/尾迹/流光/
// 门框/冲击波/天体、lyrics.js 字形平面与粒子云。

import * as THREE from 'three';
import { clamp, aggregateBands, envelopeBands, damp } from './util.js';
import { deterministicTravel, routeCenter, wakeRoute, speedModulator } from './camera.js';
import { createWorld } from './world.js';
import { createLyrics } from './lyrics.js';

const QUALITY = {
  // DPR 双钳制与 stage3d 主场景同一套公式（硬性上限 ∩ 总像素预算），
  // 档位对齐 Stage.tier 0/1/2。
  low: { prCap: 1.0, budget: 1900000 },
  medium: { prCap: 1.15, budget: 3600000 },
  high: { prCap: 1.55, budget: 6200000 },
};
const BIN_COUNT = 24;
const BASS_HI = 5;    // 低频 ≈ 低频带均值
const VOCAL_HI = 15;  // 人声感 ≈ 中频带均值
const PAUSE_RENDER_MS = 250; // 暂停时世界冻结，画面最多 4fps 兜底刷新
const FOG_DENSITY = 0.00038;
const CAMERA_DEFAULTS = { breath: 0.5, shake: 1, hold: 0.32, pause: 0.9, dissolve: 0.72 };

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
  renderer.toneMappingExposure = 1.06;
  renderer.info.autoReset = false;

  const scene = new THREE.Scene();
  const initialBg = new THREE.Color('#0a0d11');
  scene.background = initialBg;
  scene.fog = new THREE.FogExp2(initialBg, FOG_DENSITY);
  const camera = new THREE.PerspectiveCamera(56, 1, 0.1, 4600);
  camera.position.set(0, 0, 0);

  const prefs = {
    warp: true, objects: true, glow: 1, speed: 1, motion: 1,
    reduced: !!opts.reduced,
    palette: opts.palette || {},
  };
  const world = createWorld(THREE, scene);
  const lyrics = createLyrics(THREE, scene);
  const audio = {
    raw: null, onset: false,
    bins: new Float32Array(BIN_COUNT),
    energy: 0, vocal: 0, bass: 0,
  };

  st = {
    canvas, renderer, scene, camera, world, lyrics, quality, prefs, audio,
    raf: 0, lastFrame: 0, lastTime: -1, time: 0, playing: false,
    width: 0, height: 0, pr: 1, lastRender: 0, dirty: true,
    lines: [], lastLineRef: null, lastTravel: 0,
    fov: 56, cameraRoll: 0,
  };
  world.setPalette(prefs.palette);
  st.raf = requestAnimationFrame(tick);
  return true;
}

export function unmount() {
  if (!st) return;
  if (st.raf) cancelAnimationFrame(st.raf);
  st.raf = 0;
  try { st.lyrics.dispose(); } catch (_) { /* 尽力释放 */ }
  try { st.world.dispose(); } catch (_) { /* 尽力释放 */ }
  try { st.renderer.dispose(); st.renderer.forceContextLoss(); } catch (_) { /* 尽力释放 */ }
  st = null;
}

// DPR 双钳制（与 stage3d 主场景同一套公式）：硬性档位上限 ∩ 总像素预算
// ∩ 设备 DPR ∩ 纹理上限。只写 min(dpr, cap) 在 4K 上会爆显存带宽。
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
  st.world.resize(width, height, st.pr);
  st.lyrics.resize(width, height, st.pr);
  st.lyrics.setViewAspect(width / height);
  st.dirty = true;
}

export function setTime(frame = {}) {
  if (!st) return;
  st.time = clamp(Number(frame.time) || 0, 0, 3600 * 4);
  st.playing = !!frame.playing;
  st.dirty = true;
}

export function setAudio(frame = {}) {
  if (!st) return;
  st.audio.raw = frame.bands && frame.bands.length ? frame.bands : null;
  st.audio.onset = !!frame.onset;
  st.dirty = true;
}

export function setLyrics(payload) {
  if (!st) return;
  const raw = payload && Array.isArray(payload.lines) ? payload.lines : [];
  const lines = [];
  for (let i = 0; i < raw.length; i += 1) {
    const line = raw[i];
    const start = Number(line && line.start);
    if (!Number.isFinite(start)) continue;
    const end = Number(line.end);
    lines.push({
      index: i,
      start,
      end: Number.isFinite(end) && end > start ? end : start + 4,
      text: String(line.text || ''),
      translation: String(line.translation || ''),
      glyphs: Array.isArray(line.glyphs) ? line.glyphs : [],
    });
  }
  lines.sort((a, b) => a.start - b.start);
  st.lines = lines;
  st.lastLineRef = null;
  st.dirty = true;
}

export function setPrefs(patch = {}) {
  if (!st) return;
  const paletteChanged = patch.palette && JSON.stringify(patch.palette) !== JSON.stringify(st.prefs.palette);
  if (typeof patch.warp === 'boolean') st.prefs.warp = patch.warp;
  if (typeof patch.objects === 'boolean') st.prefs.objects = patch.objects;
  if (patch.glow != null) st.prefs.glow = clamp(Number(patch.glow), 0, 2);
  if (patch.speed != null) st.prefs.speed = clamp(Number(patch.speed), 0.15, 3);
  if (patch.motion != null) st.prefs.motion = clamp(Number(patch.motion), 0, 2);
  if (patch.reduced != null) st.prefs.reduced = !!patch.reduced;
  if (patch.palette) st.prefs.palette = patch.palette;
  if (paletteChanged) {
    st.world.setPalette(st.prefs.palette);
    st.lyrics.setPalette(st.prefs.palette);
  }
  st.dirty = true;
}

// 行窗口：起点到「出口动画播完」为止（exitStart + exitDuration），下一行
// 起唱则立即让位。这样出口淡出一定有机会演完，不依赖宿主行窗的尾部余量。
export function lineWindowAt(lines, time, opts = {}) {
  const hold = Number.isFinite(opts.hold) ? opts.hold : CAMERA_DEFAULTS.hold;
  const pause = Number.isFinite(opts.pause) ? opts.pause : CAMERA_DEFAULTS.pause;
  const dissolve = Number.isFinite(opts.dissolve) ? opts.dissolve : CAMERA_DEFAULTS.dissolve;
  let active = null;
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (line.start > time) break;
    const glyphEnd = line.vocalEnd || line.end;
    const exitStart = glyphEnd + Math.min(0.8, hold * 0.5 + pause * 0.15);
    const exitEnd = exitStart + 0.45 + dissolve * 0.55;
    const next = lines[i + 1];
    if (time < Math.min(exitEnd, next ? next.start : Infinity)) active = line;
  }
  return active;
}

function tick(now) {
  if (!st) return;
  st.raf = requestAnimationFrame(tick);
  const dt = st.lastFrame ? Math.min((now - st.lastFrame) / 1000, 0.1) : 0.016;
  st.lastFrame = now;
  const prefs = st.prefs;
  const time = st.time;
  const seek = st.lastTime < 0 || Math.abs(time - st.lastTime) > 0.5;
  st.lastTime = time;

  // 频带包络：seek 直接落位，否则快攻慢放；暂停时目标为零（世界静下来）。
  const target = aggregateBands(st.playing ? st.audio.raw : null, BIN_COUNT);
  if (seek) st.audio.bins.set(target);
  else envelopeBands(st.audio.bins, target, dt);
  let bsum = 0;
  for (let i = 0; i < BASS_HI; i += 1) bsum += st.audio.bins[i];
  const bassTarget = clamp(bsum / BASS_HI);
  let vsum = 0;
  for (let i = BASS_HI; i < VOCAL_HI; i += 1) vsum += st.audio.bins[i];
  const vocalTarget = clamp(vsum / (VOCAL_HI - BASS_HI) * 1.35);
  if (seek || !st.playing) {
    st.audio.bass = seek ? bassTarget : damp(st.audio.bass, 0, 0.3, dt);
    st.audio.vocal = seek ? vocalTarget : damp(st.audio.vocal, 0, 0.3, dt);
  } else {
    st.audio.bass = damp(st.audio.bass, bassTarget, 0.1, dt);
    st.audio.vocal = damp(st.audio.vocal, vocalTarget, st.audio.vocal < vocalTarget ? 0.06 : 0.3, dt);
  }
  const onsetEnv = st.playing && st.audio.onset ? 1 : 0;
  st.audio.onsetLevel = seek ? onsetEnv : damp(st.audio.onsetLevel || 0, onsetEnv, onsetEnv ? 0.05 : 0.22, dt);

  // 选行：窗口内保持（出口演完或下一行起唱前）。
  const lines = st.lines;
  lines.forEach((line) => {
    if (line.vocalEnd == null) {
      line.vocalEnd = (line.glyphs || []).reduce((acc, g) => (
        g && String(g.text).trim() ? Math.max(acc, Number(g.end) || 0) : acc
      ), line.start);
    }
  });
  const active = lineWindowAt(lines, time, prefs);
  if (active !== st.lastLineRef) {
    st.lastLineRef = active;
    st.lyrics.setLine(active);
  }

  // 行驶距离（确定性）：前后 0.025s 各求值一次给流光拉伸当速度导数。
  const travelOpts = { speed: prefs.speed, motion: prefs.motion };
  const travel = deterministicTravel(time, lines, travelOpts);
  st.lastTravel = travel;
  const travelAhead = deterministicTravel(time + 0.025, lines, travelOpts);
  const travelBehind = deterministicTravel(Math.max(0, time - 0.025), lines, travelOpts);

  // 相机：路由跟随 + 呼吸漂移 + 低频抖动 + FOV 呼吸。
  const reduced = prefs.reduced;
  const motionPower = (reduced ? 0 : 1) * clamp(prefs.motion, 0, 2);
  const bass = st.audio.bass;
  const breath = CAMERA_DEFAULTS.breath;
  const shake = CAMERA_DEFAULTS.shake;
  const driftTime = time * 0.14;
  const driftX = (Math.sin(driftTime * 0.42) * 0.72 + Math.cos(driftTime * 0.23) * 0.35) * breath;
  const driftY = (Math.cos(driftTime * 0.34) * 0.48 + Math.sin(driftTime * 0.19) * 0.22) * breath;
  const shakeX = Math.sin(time * 17.0) * bass * 0.22 * shake;
  const shakeY = Math.cos(time * 19.0) * bass * 0.16 * shake;
  const routeDistance = travel * 0.42;
  const routeNow = routeCenter(routeDistance);
  const routeAhead = routeCenter(routeDistance + 180);
  const camera = st.camera;
  camera.position.x = routeNow.x * motionPower * 0.20 + driftX * motionPower + shakeX;
  camera.position.y = routeNow.y * motionPower * 0.18 + driftY * motionPower + shakeY;
  camera.position.z = 0;
  // 适度侧移；注视前方但不把歌词拽出画面。
  const lookX = camera.position.x + clamp(routeAhead.x - routeNow.x, -6, 6) * motionPower * 0.55;
  const lookY = camera.position.y + clamp(routeAhead.y - routeNow.y, -4, 4) * motionPower * 0.45;
  camera.up.set(0, 1, 0);
  camera.lookAt(lookX, lookY, -300);
  st.cameraRoll = Math.sin(driftTime * 0.17) * 0.004 * breath * motionPower
    + bass * 0.002 * Math.sin(time * 0.8);
  camera.rotation.z = st.cameraRoll;

  // FOV：速度与低频缓慢张开。逐句速度调制只进 FOV，不进行程（行程确定性）。
  const progress = active ? clamp((time - active.start) / Math.max(0.6, active.end - active.start)) : 0;
  const speedMod = speedModulator(progress, Boolean(active));
  const cruiseSpeed = prefs.speed * prefs.motion * speedMod * (reduced ? 0 : 1);
  const fovTarget = 54 + clamp(cruiseSpeed - 0.8, 0, 1.3) * 5 * motionPower + bass * 2.5 * shake;
  if (Math.abs(fovTarget - st.fov) > 0.01) {
    st.fov = fovTarget;
    camera.fov = fovTarget;
    camera.updateProjectionMatrix();
  }

  const lineClock = {
    hasLine: Boolean(active),
    progress,
    lineStart: active ? active.start : 0,
    vocalEnd: active ? Math.max(active.start, active.vocalEnd) : 0,
    hold: CAMERA_DEFAULTS.hold, pause: CAMERA_DEFAULTS.pause, dissolve: CAMERA_DEFAULTS.dissolve,
  };
  const ctx = {
    travel, travelAhead, travelBehind,
    motion: motionPower, bass, vocal: st.audio.vocal,
    dt, playing: st.playing, seek, reduced,
    glow: prefs.glow, warp: prefs.warp, objects: prefs.objects,
    roll: st.cameraRoll, lineClock,
  };
  st.world.update(time, ctx);
  st.lyrics.update(time, {
    clock: lineClock, bass, motion: prefs.motion, reduced, glow: prefs.glow,
  });

  // 渲染：播放中每帧都画；暂停时世界冻结，按 4fps 兜底刷新（包络回落可见）。
  const needRender = st.playing || st.dirty || (now - st.lastRender) > PAUSE_RENDER_MS;
  if (needRender) {
    st.dirty = false;
    st.lastRender = now;
    st.renderer.info.reset();
    st.renderer.render(st.scene, st.camera);
  }
}

export function stats() {
  if (!st) return null;
  const info = st.renderer.info;
  return {
    mounted: true, quality: st.quality,
    drawCalls: info.render.calls, points: info.render.points,
    geometries: info.memory.geometries, textures: info.memory.textures,
    ...st.world.stats(), ...st.lyrics.stats(),
    distance: st.lastTravel || 0,
    time: st.time, playing: st.playing,
    line: st.lastLineRef ? st.lastLineRef.text : null,
  };
}

export function debug() {
  if (!st) return null;
  return {
    mounted: true, quality: st.quality, time: st.time, playing: st.playing,
    fov: st.fov, roll: st.cameraRoll, bass: st.audio.bass, vocal: st.audio.vocal,
    lines: st.lines.length, line: st.lastLineRef ? st.lastLineRef.text : null,
    prefs: { ...st.prefs },
  };
}

// 同步重画一帧并按行读回像素（读默认帧缓冲必须在渲染后的同一任务里）。
// 返回画面上/中/下三行的平均 RGB，供浏览器契约做构图与差异断言。
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

// 顶层命名导出即立面（与 coast/diorama 同款）：esbuild IIFE 的 exports 对象
// 就是 window.TunnelStagePure。
export const pure = { deterministicTravel, routeCenter, wakeRoute, speedModulator, lineWindowAt, aggregateBands };
