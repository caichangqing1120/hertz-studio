// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
//
// 行驶相机：绝对时间求值的确定性距离场 + 段落机位 + 站牌阅读注视。
//
// 设计约束（来自参照项目踩过的坑，见 NOTICE「Design lineage」）：
//   · 相机是「行驶」，不是「飞行」——俯仰与横滚收敛到接近零，路径不许有
//     无人机式的起伏；高度/侧偏的变化全部来自段落机位在边界处的缓动混合。
//   · 一切都是 t 的纯函数：不逐帧积分、不输出阻尼。seek/回拖/重播落到同一
//     机位，暂停时世界静止而不是继续漂。
//   · 手持感来自多个不可公度频率的微小晃动叠加，而不是「每句重复同一条
//     正弦」的机械节奏。

import { clamp, lerp, smooth, hashString } from './util.js';
import { paragraphAt } from './timeline.js';

const BASE_SPEED = 12.2;          // m/s，巡航基速
const SURGE = 8.5;                // 每个乐句起点的加速冲量（米）
const RIG_BLEND = 2.4;            // 段落机位过渡时长（秒）
const READING_REACH = 24;         // 距站牌多远开始注视（米）
// 呼吸：机位不求值逐帧积分，而是 t 的慢频叠加 —— 于是 seek 到同一秒的画面
// 与顺着播到那里完全一致（这条不变量是全部契约的地基）。
const BREATH_FOV = 0.85;          // 视野呼吸幅度（度）：0 = 死定，2 = 明显推拉
const BREATH_AHEAD = 0.06;        // 注视前距的呼吸比例（景别随呼吸微开合）
const BOB_AMP = 0.055;            // 眼高上下浮动（米）

// 段落曲式 → 机位编制。height 是轨面以上的眼高，side 是横向偏置（正=右），
// openness 驱动遮幅开合（副歌最开阔）。
const RIGS = {
  verse: { height: 2.25, side: 0, fov: 48, lookAhead: 26, openness: 0.45 },
  chorus: { height: 3.7, side: 0, fov: 52, lookAhead: 34, openness: 1.0 },
  breath: { height: 2.55, side: 1.9, fov: 46, lookAhead: 18, openness: 0.32 },
  lift: { height: 2.95, side: -1.3, fov: 50, lookAhead: 30, openness: 0.72 },
  outro: { height: 4.5, side: 0.7, fov: 46, lookAhead: 44, openness: 0.6 },
};
const RIG_FALLBACK = RIGS.verse;
// 未知段落 kind 的兜底 + 段落间空隙沿用上一种机位。
const RIG_KEYS = Object.keys(RIGS);

function rigFor(kind) {
  return RIGS[kind] || RIG_FALLBACK;
}

// 行驶距离场。基速随 speed 偏好缩放；每个乐句起点给一段缓动的加速冲量
//（行程随乐句呼吸），reduced-motion 时冲量整个关掉。
export function distanceAt(timeline, t, opts = {}) {
  const speed = clamp(opts.speed == null ? 1 : opts.speed, 0.2, 3);
  const motion = opts.motion == null ? 1 : clamp(opts.motion, 0, 2);
  let d = Math.max(0, t) * BASE_SPEED * speed;
  const phrases = timeline.phrases || [];
  const surgeScale = motion > 0 ? speed * (0.35 + motion * 0.25) : 0;
  for (let i = 0; i < phrases.length; i += 1) {
    const p = phrases[i];
    if (p.start > t) break; // phrases 按 start 升序
    const next = phrases[i + 1];
    const gap = next ? Math.max(0.4, next.start - p.start) : 3.5;
    d += smooth(clamp((t - p.start) / gap)) * SURGE * surgeScale;
  }
  return d;
}

// 当前 rig：段落边界处 RIG_BLEND 秒内从上一段落混合到本段落；段落之间的
// 空隙沿用最近的段落（留白里保持行驶节奏，不乱切机位）。
function rigAt(timeline, t) {
  const spans = timeline.paragraphs || [];
  let prev = null;
  let cur = null;
  for (let i = 0; i < spans.length; i += 1) {
    if (spans[i].start <= t) { prev = cur; cur = spans[i]; } else break;
  }
  if (!cur) {
    // 没有段落编制（器乐曲/歌词未定位）：按副歌前的「主歌」行驶。
    return { rig: { ...RIG_FALLBACK }, openness: RIG_FALLBACK.openness };
  }
  const curRig = rigFor(cur.kind);
  if (!prev || cur.start - prev.start < RIG_BLEND) {
    // 曲式表里段落首行间隔小于过渡时长时，直接落位（混合还没铺开就到下一段了）。
    return { rig: { ...curRig }, openness: curRig.openness };
  }
  const w = smooth(clamp((t - cur.start) / RIG_BLEND));
  const prevRig = rigFor(prev.kind);
  const mix = (key) => lerp(prevRig[key], curRig[key], w);
  return {
    rig: {
      height: mix('height'), side: mix('side'), fov: mix('fov'),
      lookAhead: mix('lookAhead'), openness: mix('openness'),
    },
    openness: mix('openness'),
  };
}

// 机位求值。reading 可空：{ x, y, z, weight, side }（歌词模块按当前页给出）。
// 返回值直接喂 three 的 PerspectiveCamera；数值保证有限（脏时间线兜底）。
export function poseAt(timeline, t, opts = {}, reading = null) {
  const motion = opts.motion == null ? 1 : clamp(opts.motion, 0, 2);
  const reduced = !!opts.reduced;
  const d = distanceAt(timeline, t, opts);
  const { rig, openness } = rigAt(timeline, t);
  const swayAmp = reduced ? 0 : 0.32 * motion;
  const bobAmp = reduced ? 0 : BOB_AMP * motion;
  // 三个不可公度的慢频率叠加：不再有「每句同一朵波形」的机械感。
  const sway = swayAmp * (Math.sin(t * 0.113) * 0.6 + Math.sin(t * 0.041 + 2.1) * 0.4);
  const bob = bobAmp * (Math.sin(t * 0.71) * 0.5 + Math.sin(t * 0.23 + 1.3) * 0.5)
    + bobAmp * 0.8 * Math.sin(t * 0.097 + 0.6);
  // 呼吸：视野与注视前距同相位地开合，像坐在车厢里随路面的起伏。
  const breath = reduced ? 0 : motion * (Math.sin(t * 0.187) * 0.6 + Math.sin(t * 0.071 + 2.3) * 0.4);
  const seed = hashString(timeline.signature || 'diorama') % 1000;
  const x = rig.side * (1 + 0.06 * Math.sin(t * 0.052 + seed)) + sway;
  const y = Math.max(1.2, rig.height + bob);
  const z = -d;
  const lookAhead = rig.lookAhead * (1 + BREATH_AHEAD * breath);

  let lx = x * 0.25;
  let ly = 1.35 + 0.1 * Math.sin(t * 0.067);
  let lz = -(d + lookAhead);
  let roll = 0;
  if (reading && reading.weight > 0) {
    const w = clamp(reading.weight) * 0.9;
    lx = lerp(lx, reading.x, w);
    ly = lerp(ly, reading.y, w);
    lz = lerp(lz, reading.z, w);
    // 注视侧牌时轻微向牌侧压滚转，像乘客转头看窗外。
    roll = clamp(reading.side || 0) * -0.05 * w * motion;
  }
  return {
    position: { x, y, z },
    look: { x: lx, y: ly, z: lz },
    roll, fov: rig.fov + BREATH_FOV * breath, openness, rig: curKindOf(timeline, t),
    distance: d, breath,
  };
}

function curKindOf(timeline, t) {
  const span = paragraphAt(timeline, t);
  return span ? span.kind : 'verse';
}

// 阅读权重的几何部分由歌词模块按站牌地址给出；这里只提供工具：
// 距离 d 距离牌址 A 多近时开始/结束注视（进出各留 15% 缓动）。
export function readingWeight(d, address, reach = READING_REACH) {
  const rel = (address - d) / reach; // 1=刚进入视距，0=正经过，<0=已驶过
  if (rel > 1 || rel < -0.45) return 0;
  // 接近段平滑升权重，驶过段更快放手（前路比后视重要）。
  return rel >= 0 ? smooth(1 - rel) : smooth(1 + rel / 0.45);
}
