// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
//
// 「镜台 · 末班车」场景引擎入口。纯场景层：不感知 hertz-studio 的任何全局，
// 由 plugin/ui/stage-diorama.js 适配层驱动。
//
// 立面（扩展只增不改，见设计文档 §6）：
//   probe()                          是否具备运行条件（WebGL2）
//   mount(canvas, opts)              opts: { quality, reduced, palette, onFrame }
//   unmount()                        完整释放 GL 资源（舞台源互斥切换，不允许泄漏）
//   resize(w, h)
//   setTime({ time, playing })       播放时间（秒）；暂停时世界静止、包络回落
//   setAudio({ bands, onset })       bands 为频谱快照，onset 为低频起音布尔
//   setLyrics(payload)               { v:1, lines, paragraphs }（宿主编好的编制输入）
//   setPrefs(p)                      开放 bag：carrier/reflection/speed/motion/
//                                    lyrics/glow/reduced/palette
//   stats() / debug()                检查口（renderer.info、载体计数、当前页 NDC 边界）
//   pure                             纯函数导出（Node 契约测试用，不碰 DOM/GL）
//
// 模块分工：timeline.js 编制（行→句/牌/段落）、camera.js 行驶与机位、
// world.js 水/轨/星空、lyrics.js 站牌与星幕。后续搬运奇遇事件/后期链时
// 在 main.js 的装配处加一个模块实例即可，立面不动。

import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { clamp, aggregateBands, envelopeBands, damp } from './util.js';
import { compileTimeline } from './timeline.js';
import { distanceAt, poseAt, readingWeight } from './camera.js';
import { createWorld } from './world.js';
import { createLyrics } from './lyrics.js';

const QUALITY = {
  // DPR 双钳制与 stage3d 主场景同一套公式（硬性上限 ∩ 总像素预算），
  // 档位对齐 Stage.tier 0/1/2。
  low: { prCap: 1.0, budget: 1900000, reflScale: 0, bloom: false, msaa: 0 },
  medium: { prCap: 1.15, budget: 3600000, reflScale: 0.85, bloom: true, msaa: 2 },
  high: { prCap: 1.55, budget: 6200000, reflScale: 1.0, bloom: true, msaa: 4 },
};
const BIN_COUNT = 24;
const VOCAL_LO = 5;   // 人声感 ≈ 中频带均值
const VOCAL_HI = 15;
const PAUSE_RENDER_MS = 250; // 暂停时世界冻结，画面最多 4fps 兜底刷新

const EMPTY_TIMELINE = compileTimeline(null);

// 胶片颗粒（参照 optics 的颗粒层）：按播放时间滚动，暂停时冻结。
// 暗角由 stage3d 的 .s3d-vignette 覆盖层承担，这里不重复。
const grainShader = {
  uniforms: { tDiffuse: { value: null }, uTime: { value: 0 } },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
  fragmentShader: `uniform sampler2D tDiffuse; uniform float uTime; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float n = fract(sin(dot(gl_FragCoord.xy + mod(uTime * 37.0, 97.0), vec2(12.9898, 78.233))) * 43758.5453);
      c.rgb += (n - 0.5) * 0.03;
      gl_FragColor = c;
    }`,
};

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
      canvas, antialias: false, powerPreference: 'high-performance',
    });
  } catch (_) {
    return false;
  }
  if (!renderer.getContext()) return false;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;
  renderer.info.autoReset = false;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(48, 16 / 9, 0.1, 2700);
  camera.layers.enable(1); // 预留给「只给主相机」的前景内容（如将来的车窗厢体）

  // 后期链：渲染 -> 泛光 -> 输出（与 coast-stage 同款）。渲染到 RT 时
  // three 会自动跳过材质内建色调映射，ACES + sRGB 由 OutputPass 统一做，
  // 镜像 RT 里的线性颜色因此与主链路一致。
  const size2 = renderer.getDrawingBufferSize(new THREE.Vector2());
  const q = QUALITY[quality];
  const composerRT = new THREE.WebGLRenderTarget(Math.max(2, size2.x), Math.max(2, size2.y),
    { type: THREE.HalfFloatType, samples: q.msaa });
  const composer = new EffectComposer(renderer, composerRT);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(2, 2), 0.45, 0.6, 0.72);
  bloom.enabled = q.bloom;
  composer.addPass(bloom);
  const grain = new ShaderPass(grainShader);
  composer.addPass(grain);
  composer.addPass(new OutputPass());

  const prefs = {
    carrier: 'auto', reflection: true, speed: 1, motion: 1,
    lyrics: true, glow: 1, reduced: !!opts.reduced,
    palette: opts.palette || {},
  };
  const world = createWorld(THREE, scene, {
    quality, palette: prefs.palette, reflection: prefs.reflection,
  });
  const lyrics = createLyrics(THREE, scene);
  const audio = {
    raw: null, onset: false,
    bins: new Float32Array(BIN_COUNT),
    target: new Float32Array(BIN_COUNT),
    zeros: new Float32Array(BIN_COUNT),
    energy: 0, vocal: 0,
  };

  st = {
    canvas, renderer, scene, camera, world, lyrics, quality, prefs, audio,
    composer, bloom, grain,
    timeline: EMPTY_TIMELINE,
    raf: 0, lastFrame: 0, lastTime: -1, time: 0, playing: false,
    width: 0, height: 0, pr: 1, lastRender: 0, dirty: true,
    lastPose: null, onFrame: typeof opts.onFrame === 'function' ? opts.onFrame : null,
  };
  st.raf = requestAnimationFrame(tick);
  return true;
}

export function unmount() {
  if (!st) return;
  if (st.raf) cancelAnimationFrame(st.raf);
  st.raf = 0;
  try { st.lyrics.dispose(); } catch (_) { /* 尽力释放 */ }
  try { st.world.dispose(); } catch (_) { /* 尽力释放 */ }
  try { st.composer.dispose && st.composer.dispose(); } catch (_) { /* 尽力释放 */ }
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
  st.composer.setPixelRatio(st.pr);
  st.composer.setSize(width, height);
  const buffer = st.renderer.getDrawingBufferSize(new THREE.Vector2());
  st.camera.aspect = width / height;
  st.camera.updateProjectionMatrix();
  st.world.resize(buffer.x, buffer.y);
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
  st.timeline = compileTimeline(payload);
  st.lyrics.setTimeline(st.timeline, st.prefs, st.prefs.palette);
}

export function setPrefs(patch = {}) {
  if (!st) return;
  const paletteChanged = patch.palette && JSON.stringify(patch.palette) !== JSON.stringify(st.prefs.palette);
  Object.assign(st.prefs, patch);
  st.world.reflectionEnabled = st.prefs.reflection !== false && st.world.quality !== 'low';
  if (patch.reduced != null) st.prefs.reduced = !!patch.reduced;
  if (paletteChanged) {
    st.world.setPalette(st.prefs.palette);
    st.lyrics.setPalette(st.prefs.palette);
  }
  st.dirty = true;
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
  // 聚合写入预分配缓冲，逐帧路径零分配。
  const target = aggregateBands(st.playing ? st.audio.raw : null, BIN_COUNT, st.audio.target);
  if (seek) st.audio.bins.set(target);
  else envelopeBands(st.audio.bins, target, dt);
  let sum = 0;
  for (let i = 0; i < BIN_COUNT; i += 1) sum += st.audio.bins[i];
  const energyTarget = sum / BIN_COUNT;
  st.audio.energy = seek ? energyTarget : damp(st.audio.energy, energyTarget, 0.3, dt);
  let vsum = 0;
  for (let i = VOCAL_LO; i < VOCAL_HI; i += 1) vsum += st.audio.bins[i];
  const vocalTarget = clamp(vsum / (VOCAL_HI - VOCAL_LO) * 1.35);
  st.audio.vocal = seek ? vocalTarget : damp(st.audio.vocal, vocalTarget, st.audio.vocal < vocalTarget ? 0.06 : 0.4, dt);
  const onsetEnv = st.playing && st.audio.onset ? 1 : 0;
  st.audio.onsetLevel = seek ? onsetEnv : damp(st.audio.onsetLevel || 0, onsetEnv, onsetEnv ? 0.05 : 0.22, dt);

  // 相机：绝对时间求值；阅读注视目标由歌词层按当前句给出。
  const camOpts = { speed: prefs.speed, motion: prefs.motion, reduced: prefs.reduced };
  const d = distanceAt(st.timeline, time, camOpts);
  const reading = st.lyrics.readingTarget(time, d);
  const pose = poseAt(st.timeline, time, camOpts, reading);
  const camera = st.camera;
  camera.position.set(pose.position.x, pose.position.y, pose.position.z);
  camera.up.set(0, 1, 0);
  camera.lookAt(pose.look.x, pose.look.y, pose.look.z);
  camera.rotateZ(pose.roll);
  if (camera.fov !== pose.fov) {
    camera.fov = pose.fov;
    camera.updateProjectionMatrix();
  }
  st.lastPose = pose;

  const audioFrame = {
    bins: st.audio.bins, zeros: st.audio.zeros,
    energy: st.audio.energy, vocal: st.audio.vocal,
    onset: st.audio.onsetLevel, playing: st.playing,
  };
  st.world.update(dt, time, pose, audioFrame, prefs);
  st.lyrics.update(time, d, audioFrame, {
    speed: prefs.speed, motion: prefs.motion, reduced: prefs.reduced,
    lyrics: prefs.lyrics, glow: prefs.glow, carrier: prefs.carrier,
  });

  // 渲染：先镜像反射 RT（主相机渲染前），再走后期合成。暂停时世界冻结，
  // 画面按 4fps 兜底刷新（包络回落还能看到），播放中每帧都画。
  const needRender = st.playing || st.dirty || (now - st.lastRender) > PAUSE_RENDER_MS;
  if (needRender) {
    st.dirty = false;
    st.lastRender = now;
    st.renderer.info.reset();
    st.world.renderReflection(st.renderer, st.scene, camera, pose);
    st.grain.uniforms.uTime.value = time;
    st.composer.render();
  }
  if (st.onFrame) {
    try { st.onFrame(pose); } catch (_) { /* 检查口的消费方不许打断渲染 */ }
  }
}

export function stats() {
  if (!st) return null;
  const info = st.renderer.info;
  return {
    mounted: true, quality: st.quality,
    drawCalls: info.render.calls, triangles: info.render.triangles,
    geometries: info.memory.geometries, textures: info.memory.textures,
    ...st.world.stats(), ...st.lyrics.stats(),
    distance: st.lastPose ? st.lastPose.distance : 0,
    rig: st.lastPose ? st.lastPose.rig : null,
    openness: st.lastPose ? st.lastPose.openness : 0.5,
  };
}

export function debug() {
  if (!st) return null;
  return {
    mounted: true, quality: st.quality, time: st.time, playing: st.playing,
    pose: st.lastPose, reading: st.lyrics.debug(st.camera),
    bins: Array.from(st.audio.bins),
    timeline: {
      phrases: st.timeline.phrases.length, signs: st.timeline.signs.length,
      paragraphs: st.timeline.paragraphs.length, valid: st.timeline.valid,
    },
  };
}

// 同步重画一帧并按行读回像素（读默认帧缓冲必须在渲染后的同一任务里）。
// 返回画面上/中/下三行的平均 RGB，供浏览器契约做构图与差异断言。
export function capture() {
  if (!st || !st.lastPose) return null;
  const pose = st.lastPose;
  st.renderer.info.reset();
  st.world.renderReflection(st.renderer, st.scene, st.camera, pose);
  st.composer.render();
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

// 顶层命名导出即立面（与 coast-stage 同款）：esbuild IIFE 的 exports 对象
// 就是 window.DioramaStagePure。
export const pure = { compileTimeline, distanceAt, poseAt, readingWeight, aggregateBands };
