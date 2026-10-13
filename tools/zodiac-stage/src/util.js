// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
//
// 「星座」引擎共享数学工具。全部纯函数：同一输入永远得到同一输出，
// 时间求值不依赖调用顺序 —— seek 到任意时刻的画面与顺着播到那里完全一致。

export const clamp = (v, a = 0, b = 1) => (v < a ? a : v > b ? b : v);

export const lerp = (a, b, t) => a + (b - a) * t;

// smoothstep 形的缓动（3-2 多项式）。
export function smooth(v) {
  const t = clamp(v);
  return t * t * (3 - 2 * t);
}

// 字符串 → 32 位种子（FNV-1a 变体）。同一星座永远得到同一片景深分布。
export function hashString(str) {
  let h = 0x811c9dc5;
  const s = String(str == null ? '' : str);
  for (let i = 0; i < s.length; i += 1) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

// mulberry32：种子化 PRNG。背景星场、星座景深散点都用它，换曲重进世界不变。
export function seededRandom(seed) {
  let a = (typeof seed === 'number' ? seed : hashString(seed)) >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// 线性频谱 → 对数频带聚合。峰值与均方根各占一半，弱信号做压缩增强，
// 快攻慢放的包络由调用方接手（这里只做一次性的聚合映射）。
// 输出 band[i] ∈ [0, 1]，bands 为空/全零时输出同长的零数组。
// 传入 out 时写入调用方的缓冲（逐帧路径零分配），否则新建。
export function aggregateBands(bands, count, out) {
  const target = out || new Float32Array(count);
  const src = bands && bands.length ? bands : null;
  if (!src) {
    target.fill(0, 0, count);
    return target;
  }
  const n = src.length;
  for (let i = 0; i < count; i += 1) {
    // 对数切分：低频占宽频带、高频占细频带，与听感的频率分辨率一致。
    const from = Math.floor(Math.pow(n + 1, i / count) - 1);
    const to = Math.min(n, Math.max(from + 1, Math.ceil(Math.pow(n + 1, (i + 1) / count) - 1)));
    let peak = 0;
    let sum = 0;
    for (let bin = from; bin < to; bin += 1) {
      const v = clamp(Number(src[bin]) || 0);
      if (v > peak) peak = v;
      sum += v * v;
    }
    const level = 0.6 * peak + 0.4 * Math.sqrt(sum / (to - from));
    target[i] = clamp(Math.pow(Math.max(0, level - 0.008), 0.6) * 1.65);
  }
  return target;
}

// 频带包络：攻击 1/24s、释放 1/6s 的一阶低通（按帧率无关公式）。
export function envelopeBands(cur, target, dtSec) {
  const out = cur;
  for (let i = 0; i < out.length && i < target.length; i += 1) {
    const up = target[i] > out[i];
    out[i] = damp(out[i], target[i], up ? 1 / 24 : 1 / 6, dtSec);
  }
  return out;
}

// 帧率无关的一阶低通。tau 是「追到 63% 所需秒数」。
export function damp(cur, target, tauSec, dtSec) {
  if (!(tauSec > 0)) return target;
  return cur + (target - cur) * (1 - Math.exp(-Math.max(0, dtSec) / tauSec));
}
