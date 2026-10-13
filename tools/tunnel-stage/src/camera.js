// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
//
// 「隧图 · 深空」行驶与路由。核心不变量：**播放时钟是唯一权威**。
// 行驶距离是 (时间, 歌词行, 偏好) 的纯函数 —— seek、暂停续播、重播落在
// 同一个镜头位置，不继承任何"顺播攒下来的里程"，也不依赖帧计数。
// 路由函数同时以 JS 与 GLSL 两份同式实现（world.js 的尾迹顶点着色器内嵌
// 同一段表达式）：音频只装饰路由，永远不移动路由。

import { clamp, smooth } from './util.js';

// 行驶距离（世界单位）。基础巡航 18 单位/秒；每句已开始的歌词行按
// 「句龄 / 句距」的 smoothstep 补一段缓动冲刺，给镜头乐句感。
// gap 缺失（末句）按 3.5s 计，句距下限 0.25s 防除零。
export function deterministicTravel(time, lines, opts = {}) {
  const speed = clamp(Number(opts.speed), 0.15, 3) || 1;
  const motion = clamp(Number(opts.motion), 0, 2);
  const t = Math.max(0, Number(time) || 0);
  let distance = t * 18 * speed;
  const list = Array.isArray(lines) ? lines : [];
  for (let i = 0; i < list.length; i += 1) {
    const start = Number(list[i] && list[i].start);
    if (!Number.isFinite(start) || start > t) continue;
    const next = Number(list[i + 1] && list[i + 1].start);
    const gap = Number.isFinite(next) ? Math.max(0.25, next - start) : 3.5;
    const age = clamp((t - start) / gap);
    distance += smooth(age) * 10 * speed * (0.35 + motion * 0.25);
  }
  return distance;
}

// 航道中心线：两条慢正弦叠加的不规则横向漂移。GLSL 侧（world.js 尾迹与
// 相机注视）保持同一组系数 —— 任何一侧改动都要同步另一侧。
export function routeCenter(s) {
  return {
    x: Math.sin(s * 0.0031) * 8 + Math.sin(s * 0.0073 + 0.8) * 4,
    y: Math.cos(s * 0.0027 + 0.4) * 4 + Math.sin(s * 0.0061) * 2,
  };
}

// 尾迹轨道：在中心线外绕一条大半径螺旋（左右两股相位差 π）。
// 与 GLSL wakeAt() 同式；返回世界坐标（z 轴随 travel 平移）。
export function wakeRoute(s, lane, motion, travel) {
  const phase = s * 0.009 + 0.75 * Math.sin(s * 0.0021)
    + 0.32 * Math.sin(s * 0.0053 + lane * 1.7) + lane * Math.PI;
  const radius = 38 + 12 * Math.sin(s * 0.0037 + lane * 1.9)
    + 6 * Math.cos(s * 0.0081 + lane * 0.6);
  const ox = Math.cos(phase) * radius;
  const oy = Math.sin(phase) * (22 + 7 * Math.cos(s * 0.0043 + lane));
  const wobbleX = Math.sin(s * 0.0059 + lane * 2.4) * 7;
  const wobbleY = Math.cos(s * 0.0077 + lane) * 3.5;
  const center = routeCenter(s);
  return {
    x: center.x * motion + ox + wobbleX,
    y: center.y * motion + oy + wobbleY,
    z: -(s - travel),
  };
}

// 逐句速度调制：句首缓入（前 22% 由 1.05 落到 0.63），句尾加速冲出
// （后 22% 由 0.42 抬到 1.24），句中匀速，无句时段整体放慢到 0.82。
export function speedModulator(progress, hasLine) {
  if (!hasLine) return 0.82;
  const p = clamp(progress);
  if (p < 0.78) {
    const entrance = 1.05 - 0.42 * easeOutQuartCurve(p / 0.22);
    return entrance;
  }
  return 0.42 + 0.82 * easeInCubicCurve((p - 0.78) / 0.22);
}

// 行内四次的缓动族（避免与 util 的通用版签名混淆，这里只服务速度调制）。
function easeOutQuartCurve(v) {
  const t = clamp(v);
  const inv = 1 - t;
  return 1 - inv * inv * inv * inv;
}
function easeInCubicCurve(v) {
  const t = clamp(v);
  return t * t * t;
}
