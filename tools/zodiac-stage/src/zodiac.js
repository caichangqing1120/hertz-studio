// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
//
// 黄道十二宫「三维粒子造型」数据与纯函数。
//
// 每次只登场一座：成千上万颗粒子从深空云团汇聚成星座的立体造型（动物/器物），
// 停留旋转后散入下一片云，接着是下一座。造型不是平面连线星图，而是由「部件」
// 程序化采样出来的体积点云：椭球（身体/头）、贝塞尔管（四肢/角/尾/水流）、
// 螺旋（弯角/蝎尾/弓）。所有随机都走种子化 PRNG —— 同一座每次汇聚都长得一样，
// seek 到任意时刻与顺播结果一致。
//
// 本文件只有数据与纯函数，不碰 three/DOM/GL，Node 契约可直接验证。

import { clamp, seededRandom } from './util.js';

export const SIGN_COUNT = 12;

// 单座生命周期（秒）：汇聚 → 停留 → 散开；散开终点即下一座汇聚起点。
export const GATHER_SECONDS = 2.8;
export const HOLD_SECONDS = 7.6;
export const DISPERSE_SECONDS = 2.6;
export const CYCLE_SECONDS = GATHER_SECONDS + HOLD_SECONDS + DISPERSE_SECONDS;

// 造型点云的画框：所有部件坐标都在 ±BOX 内，保证各座体量一致、不会出画。
export const SHAPE_BOX = 2.7;

// 归一化后的半宽（世界单位）。十二座原始坐标的尺度不一（狮子只有 ±1.6、
// 摩羯拖到 ±2.2），直接上镜就是「有的撑满、有的缩在中间」。所有产出点云
// 都先按包围盒中心归零、按最长边等比缩到 ±1，再乘这个半宽 —— 体量与居中
// 由数据层保证，渲染层与连线层拿到的都是同一套归一化坐标。
export const FIG_HALF = 2.50;

// 星座连线/星点所在的深度：落在造型（z 约 ±0.5）前方，靠渲染顺序而非深度测试
// 压在最上层。形象图网格跟在造型中段，和粒子云交错但不会糊在一起。
export const CONSTELLATION_Z = 0.72;
export const FIGURE_Z = 0.30;
// 连线的两级宽度（世界单位）：细芯保持矢量清晰，宽晕给一层柔光。
export const LINE_CORE_WIDTH = 0.013;
export const LINE_HALO_WIDTH = 0.040;

// 求归一化包围盒用的固定采样量：与画质档无关，任何档位算出同一套 fit。
const FIT_SAMPLE = 4200;

export const ZODIAC = [
  { id: 'aries', cn: '白羊', en: 'Aries' },
  { id: 'taurus', cn: '金牛', en: 'Taurus' },
  { id: 'gemini', cn: '双子', en: 'Gemini' },
  { id: 'cancer', cn: '巨蟹', en: 'Cancer' },
  { id: 'leo', cn: '狮子', en: 'Leo' },
  { id: 'virgo', cn: '处女', en: 'Virgo' },
  { id: 'libra', cn: '天秤', en: 'Libra' },
  { id: 'scorpius', cn: '天蝎', en: 'Scorpius' },
  { id: 'sagittarius', cn: '射手', en: 'Sagittarius' },
  { id: 'capricornus', cn: '摩羯', en: 'Capricornus' },
  { id: 'aquarius', cn: '水瓶', en: 'Aquarius' },
  { id: 'pisces', cn: '双鱼', en: 'Pisces' },
];

// ---------------------------------------------------------------------------
// 采样原语：rnd 为 mulberry32；返回 [x, y, z]。
// ---------------------------------------------------------------------------

// 高斯近似（三次均匀相加），多数点落在 ±1。
function gauss(rnd) {
  return (rnd() + rnd() + rnd() - 1.5) * 0.82;
}

// 单位球内一个随机方向。
function unitDir(rnd) {
  let x, y, z, l;
  do {
    x = rnd() * 2 - 1; y = rnd() * 2 - 1; z = rnd() * 2 - 1;
    l = x * x + y * y + z * z;
  } while (l > 1 || l < 1e-6);
  const inv = 1 / Math.sqrt(l);
  return [x * inv, y * inv, z * inv];
}

function add3(a, b, s = 1) { return [a[0] + b[0] * s, a[1] + b[1] * s, a[2] + b[2] * s]; }
function mul3(d, r) { return [d[0] * r[0], d[1] * r[1], d[2] * r[2]]; }

function cubic(p0, p1, p2, p3, t) {
  const u = 1 - t;
  const a = u * u * u, b = 3 * u * u * t, c = 3 * u * t * t, d = t * t * t;
  return [
    a * p0[0] + b * p1[0] + c * p2[0] + d * p3[0],
    a * p0[1] + b * p1[1] + c * p2[1] + d * p3[1],
    a * p0[2] + b * p1[2] + c * p2[2] + d * p3[2],
  ];
}

// 椭球：shell=true 只采表面（鬃毛/鳞壳感），否则采实心体积。
function sampleEllipsoid(part, rnd) {
  const dir = unitDir(rnd);
  // 体积点云整体偏外：完全按高斯填实心，加法混合下中心会糊成一团死白，
  // 而参考图里的形象是「壳」——表面清晰、内部通透。
  const fill = part.shell ? 1 + (rnd() - 0.5) * 0.08 : Math.min(1, Math.abs(gauss(rnd)) * 0.80 + 0.20);
  const n = part.noise || 0;
  const rough = 1 + (rnd() - 0.5) * n;
  return add3(part.c, mul3(dir, part.r), fill * rough);
}

// 贝塞尔管：沿线取 t，径向用高斯偏移；taper 让管朝末端收细（角/尾/水流）。
function sampleTube(part, rnd) {
  const t = rnd();
  const center = cubic(part.p0, part.p1, part.p2, part.p3, t);
  const dir = unitDir(rnd);
  const radial = Math.abs(gauss(rnd)) * part.radius * (1 - (part.taper || 0) * t);
  return add3(center, dir, radial);
}

// 螺旋管：弯角/蝎尾/弓。从半径 r1 收/放到 r2，绕轴（默认 +z 方向轴向量少，
// 直接在 xy 平面卷）转 turns 圈，同时沿 z 给一点厚度。
function sampleSpiral(part, rnd) {
  const t = rnd();
  const ang = part.angle0 + part.turns * Math.PI * 2 * t * (part.dir || 1);
  const r = part.r1 + (part.r2 - part.r1) * t;
  const wobble = 1 + (rnd() - 0.5) * 0.06;
  const p = [
    part.c[0] + Math.cos(ang) * r * wobble,
    part.c[1] + Math.sin(ang) * r * wobble,
    part.c[2] + (t - 0.5) * (part.depth || 0) + gauss(rnd) * part.radius,
  ];
  return p;
}

function samplePart(part, rnd) {
  if (part.t === 'ellipsoid') return sampleEllipsoid(part, rnd);
  if (part.t === 'spiral') return sampleSpiral(part, rnd);
  return sampleTube(part, rnd);
}

// 表面采样：椭球只取壳（体积点云取内部会长成一团实心雾，低多边形网格要的是
// 包住造型的「皮」）。管与螺旋本来就是线状壳，直接复用。
function samplePartSurface(part, rnd) {
  if (part.t !== 'ellipsoid') return samplePart(part, rnd);
  const dir = unitDir(rnd);
  const rough = 1 + (rnd() - 0.5) * (part.noise || 0) * 0.6;
  return add3(part.c, mul3(dir, part.r), rough);
}

// 四条腿的小工具：动物身体下沿 c ± 横向/纵向偏移，短管落到 y=-1.45。
function legs(cx, rx, rz, yTop, spread = 0.5) {
  const out = [];
  [[-rx, -rz], [rx, -rz], [-rx, rz], [rx, rz]].forEach(([dx, dz]) => {
    out.push({
      t: 'tube', radius: 0.075, taper: 0.35, weight: 0.7,
      p0: [cx + dx * spread, yTop, dz * 0.9], p1: [cx + dx * spread * 1.1, yTop - 0.35, dz],
      p2: [cx + dx * spread * 1.15, yTop - 0.8, dz * 1.05], p3: [cx + dx * spread * 1.2, -1.5, dz],
    });
  });
  return out;
}

// ---------------------------------------------------------------------------
// 十二宫造型（侧面剪影，头朝 +x；z 为厚度）。weight 决定该部件分到的粒子比例。
// ---------------------------------------------------------------------------

const HORN = (c, r1, r2, turns, angle0, depth, dir = 1) => ({
  t: 'spiral', c, r1, r2, turns, angle0, depth, radius: 0.045, dir, weight: 1.4,
});

function shapeParts(i) {
  switch (i) {
    case 0: // 白羊：椭圆躯干 + 小头 + 一对后卷大弯角 + 短尾
      return [
        { t: 'ellipsoid', c: [-0.1, -0.15, 0], r: [1.0, 0.45, 0.42], weight: 11, noise: 0.1 },
        { t: 'ellipsoid', c: [1.0, 0.2, 0], r: [0.3, 0.27, 0.26], weight: 3.2 },
        HORN([0.92, 0.42, 0.14], 0.42, 0.06, 0.75, 0.5, 0.12),
        HORN([0.92, 0.42, -0.14], 0.42, 0.06, 0.75, 0.5, -0.12),
        { t: 'tube', radius: 0.05, taper: 0.5, weight: 0.8,
          p0: [-1.05, 0.05, 0], p1: [-1.3, 0.3, 0], p2: [-1.42, 0.42, 0], p3: [-1.5, 0.55, 0] },
        ...legs(-0.15, 0.62, 0.3, -0.5),
      ];
    case 1: // 金牛：壮躯干 + 宽吻部 + 一对向上挑的长角
      return [
        { t: 'ellipsoid', c: [-0.15, -0.2, 0], r: [1.12, 0.52, 0.5], weight: 12, noise: 0.1 },
        { t: 'ellipsoid', c: [1.1, 0.28, 0], r: [0.34, 0.32, 0.3], weight: 3.4 },
        { t: 'ellipsoid', c: [1.42, 0.18, 0], r: [0.2, 0.16, 0.18], weight: 1.4 },
        { t: 'tube', radius: 0.06, taper: 0.4, weight: 1.6,
          p0: [1.05, 0.55, 0.13], p1: [1.15, 0.95, 0.13], p2: [1.35, 1.25, 0.13], p3: [1.5, 1.5, 0.13] },
        { t: 'tube', radius: 0.06, taper: 0.4, weight: 1.6,
          p0: [1.05, 0.55, -0.13], p1: [1.15, 0.95, -0.13], p2: [1.35, 1.25, -0.13], p3: [1.5, 1.5, -0.13] },
        ...legs(-0.2, 0.7, 0.34, -0.62),
      ];
    case 2: // 双子：两个并肩站立的人形（头/躯干/手臂/双腿）
      return [0.55, -0.55].flatMap((x) => [
        { t: 'ellipsoid', c: [x, 1.15, 0], r: [0.2, 0.22, 0.2], weight: 2.4 },
        { t: 'ellipsoid', c: [x, 0.5, 0], r: [0.19, 0.46, 0.17], weight: 4 },
        { t: 'tube', radius: 0.05, taper: 0.3, weight: 1,
          p0: [x - 0.12, 0.8, 0], p1: [x - 0.28, 0.5, 0], p2: [x - 0.3, 0.3, 0], p3: [x - 0.22, 0.12, 0] },
        { t: 'tube', radius: 0.05, taper: 0.3, weight: 1,
          p0: [x + 0.12, 0.8, 0], p1: [x + 0.22, 0.62, 0], p2: [x + 0.12, 0.4, 0], p3: [x + 0.02, 0.3, 0] },
        { t: 'tube', radius: 0.06, taper: 0.35, weight: 1.2,
          p0: [x - 0.08, 0.1, 0], p1: [x - 0.1, -0.4, 0], p2: [x - 0.12, -0.9, 0], p3: [x - 0.12, -1.5, 0] },
        { t: 'tube', radius: 0.06, taper: 0.35, weight: 1.2,
          p0: [x + 0.08, 0.1, 0], p1: [x + 0.1, -0.4, 0], p2: [x + 0.12, -0.9, 0], p3: [x + 0.12, -1.5, 0] },
      ]);
    case 3: // 巨蟹：扁圆身体 + 两只大环钳 + 六条外伸腿
      return [
        { t: 'ellipsoid', c: [0, 0, 0], r: [0.62, 0.4, 0.46], weight: 9, noise: 0.14, shell: true },
        { t: 'ellipsoid', c: [0, 0, 0], r: [0.55, 0.34, 0.4], weight: 4 },
        { t: 'tube', radius: 0.07, taper: 0.5, weight: 1.2,
          p0: [0.5, 0.12, 0.12], p1: [0.85, 0.35, 0.14], p2: [1.1, 0.42, 0.14], p3: [1.25, 0.4, 0.14] },
        HORN([1.35, 0.42, 0.14], 0.22, 0.18, 0.85, -0.6, 0.05),
        { t: 'tube', radius: 0.07, taper: 0.5, weight: 1.2,
          p0: [0.5, 0.12, -0.12], p1: [0.85, 0.35, -0.14], p2: [1.1, 0.42, -0.14], p3: [1.25, 0.4, -0.14] },
        HORN([1.35, 0.42, -0.14], 0.22, 0.18, 0.85, -0.6, -0.05, -1),
        ...[0.2, -0.05, -0.3].flatMap((y) => [
          { t: 'tube', radius: 0.04, taper: 0.6, weight: 0.5,
            p0: [0.35, y, 0.2], p1: [0.6, y - 0.1, 0.45], p2: [0.85, y - 0.2, 0.6], p3: [1.05, y - 0.28, 0.68] },
          { t: 'tube', radius: 0.04, taper: 0.6, weight: 0.5,
            p0: [0.35, y, -0.2], p1: [0.6, y - 0.1, -0.45], p2: [0.85, y - 0.2, -0.6], p3: [1.05, y - 0.28, -0.68] },
        ]),
        { t: 'ellipsoid', c: [0.52, 0.3, 0.12], r: [0.05, 0.05, 0.05], weight: 0.3 },
        { t: 'ellipsoid', c: [0.52, 0.3, -0.12], r: [0.05, 0.05, 0.05], weight: 0.3 },
      ];
    case 4: // 狮子：躯干 + 大头与蓬松鬃毛（壳）+ 长腿 + 末端毛簇尾
      return [
        { t: 'ellipsoid', c: [-0.25, -0.18, 0], r: [1.05, 0.45, 0.4], weight: 11, noise: 0.1 },
        { t: 'ellipsoid', c: [0.92, 0.25, 0], r: [0.5, 0.46, 0.44], weight: 6, noise: 0.28, shell: true },
        { t: 'ellipsoid', c: [1.18, 0.28, 0], r: [0.26, 0.24, 0.23], weight: 2.6 },
        { t: 'tube', radius: 0.055, taper: 0.3, weight: 1,
          p0: [-1.2, 0.0, 0], p1: [-1.5, -0.25, 0], p2: [-1.55, -0.55, 0], p3: [-1.4, -0.7, 0] },
        { t: 'ellipsoid', c: [-1.38, -0.72, 0], r: [0.13, 0.13, 0.13], weight: 0.8, shell: true },
        ...legs(-0.3, 0.66, 0.28, -0.55, 0.62),
      ];
    case 5: // 处女：头 + 收腰长袍 + 一臂上扬
      return [
        { t: 'ellipsoid', c: [0, 1.15, 0], r: [0.2, 0.23, 0.2], weight: 2.4 },
        { t: 'ellipsoid', c: [0, 0.55, 0], r: [0.2, 0.42, 0.18], weight: 3.6 },
        { t: 'ellipsoid', c: [0, -0.35, 0], r: [0.42, 0.72, 0.36], weight: 7, noise: 0.08 },
        { t: 'tube', radius: 0.055, taper: 0.4, weight: 1.2,
          p0: [0.12, 0.82, 0], p1: [0.32, 0.95, 0], p2: [0.5, 1.1, 0], p3: [0.55, 1.28, 0] },
        { t: 'tube', radius: 0.055, taper: 0.4, weight: 1.2,
          p0: [-0.12, 0.8, 0], p1: [-0.3, 0.55, 0], p2: [-0.38, 0.3, 0], p3: [-0.3, -0.05, 0] },
      ];
    case 6: // 天秤：立柱 + 横梁 + 两吊盘 + 底座
      return [
        { t: 'tube', radius: 0.055, taper: 0, weight: 2,
          p0: [0, -1.0, 0], p1: [0, -0.3, 0], p2: [0, 0.5, 0], p3: [0, 0.95, 0] },
        { t: 'tube', radius: 0.05, taper: 0, weight: 2.4,
          p0: [-1.0, 0.95, 0], p1: [-0.4, 0.95, 0], p2: [0.4, 0.95, 0], p3: [1.0, 0.95, 0] },
        { t: 'tube', radius: 0.025, taper: 0, weight: 0.5,
          p0: [-0.95, 0.9, 0], p1: [-0.95, 0.7, 0], p2: [-0.95, 0.55, 0], p3: [-0.95, 0.45, 0] },
        { t: 'tube', radius: 0.025, taper: 0, weight: 0.5,
          p0: [0.95, 0.9, 0], p1: [0.95, 0.7, 0], p2: [0.95, 0.55, 0], p3: [0.95, 0.45, 0] },
        HORN([-0.95, 0.32, 0], 0.28, 0.28, 0.7, 0, 0),
        HORN([0.95, 0.32, 0], 0.28, 0.28, 0.7, 0, 0),
        { t: 'ellipsoid', c: [-0.95, 0.12, 0], r: [0.1, 0.05, 0.1], weight: 0.4 },
        { t: 'ellipsoid', c: [0.95, 0.12, 0], r: [0.1, 0.05, 0.1], weight: 0.4 },
        { t: 'tube', radius: 0.06, taper: 0, weight: 1.2,
          p0: [-0.35, -1.05, 0], p1: [-0.1, -1.05, 0], p2: [0.1, -1.05, 0], p3: [0.35, -1.05, 0] },
      ];
    case 7: // 天蝎：沿 S 曲线分节的躯干 + 双钳 + 上卷尾针
      return [
        { t: 'tube', radius: 0.16, taper: 0.2, weight: 3,
          p0: [1.15, 0.35, 0], p1: [0.6, 0.1, 0], p2: [0.2, -0.25, 0], p3: [-0.2, -0.3, 0] },
        { t: 'tube', radius: 0.13, taper: 0.4, weight: 2.6,
          p0: [-0.2, -0.3, 0], p1: [-0.65, -0.5, 0], p2: [-1.0, -0.2, 0], p3: [-1.25, 0.25, 0] },
        { t: 'ellipsoid', c: [1.18, 0.38, 0], r: [0.2, 0.17, 0.17], weight: 1.6 },
        { t: 'tube', radius: 0.05, taper: 0.6, weight: 0.7,
          p0: [1.25, 0.48, 0.1], p1: [1.5, 0.7, 0.12], p2: [1.6, 0.62, 0.12], p3: [1.7, 0.42, 0.12] },
        { t: 'tube', radius: 0.05, taper: 0.6, weight: 0.7,
          p0: [1.25, 0.48, -0.1], p1: [1.5, 0.7, -0.12], p2: [1.6, 0.62, -0.12], p3: [1.7, 0.42, -0.12] },
        HORN([-1.35, 0.55, 0], 0.5, 0.06, 0.85, -0.4, 0.12),
        HORN([-1.35, 0.55, 0], 0.5, 0.06, 0.85, -0.4, -0.12, -1),
        ...[-0.35, -0.7].flatMap((x) => [
          { t: 'tube', radius: 0.035, taper: 0.6, weight: 0.4,
            p0: [x, -0.32, 0.12], p1: [x + 0.1, -0.6, 0.28], p2: [x + 0.2, -0.85, 0.34], p3: [x + 0.28, -1.05, 0.36] },
          { t: 'tube', radius: 0.035, taper: 0.6, weight: 0.4,
            p0: [x, -0.32, -0.12], p1: [x + 0.1, -0.6, -0.28], p2: [x + 0.2, -0.85, -0.34], p3: [x + 0.28, -1.05, -0.36] },
        ]),
      ];
    case 8: // 射手：马身 + 四条腿 + 人躯/头 + 张弓搭箭的手臂
      return [
        { t: 'ellipsoid', c: [-0.25, -0.25, 0], r: [0.85, 0.38, 0.34], weight: 9, noise: 0.1 },
        { t: 'ellipsoid', c: [0.4, 0.5, 0], r: [0.18, 0.42, 0.16], weight: 3.4 },
        { t: 'ellipsoid', c: [0.42, 1.05, 0], r: [0.19, 0.21, 0.19], weight: 2 },
        { t: 'tube', radius: 0.05, taper: 0.4, weight: 1,
          p0: [0.5, 0.78, 0], p1: [0.78, 0.82, 0], p2: [1.02, 0.8, 0], p3: [1.2, 0.78, 0] },
        { t: 'tube', radius: 0.1, taper: 0, weight: 0.9,
          p0: [1.18, 1.15, 0], p1: [1.42, 1.0, 0], p2: [1.42, 0.55, 0], p3: [1.18, 0.4, 0] },
        { t: 'tube', radius: 0.025, taper: 0, weight: 0.4,
          p0: [0.55, 0.78, 0], p1: [0.85, 0.78, 0], p2: [1.15, 0.78, 0], p3: [1.45, 0.78, 0] },
        { t: 'tube', radius: 0.05, taper: 0.5, weight: 0.7,
          p0: [-1.0, 0.0, 0], p1: [-1.3, 0.1, 0], p2: [-1.5, 0.35, 0], p3: [-1.6, 0.55, 0] },
        ...legs(-0.3, 0.55, 0.24, -0.55, 0.6),
      ];
    case 9: // 摩羯：羊身羊头弯角 + 一条展开的鱼尾
      return [
        { t: 'ellipsoid', c: [-0.1, -0.2, 0], r: [0.9, 0.4, 0.36], weight: 9, noise: 0.1 },
        { t: 'ellipsoid', c: [0.85, 0.2, 0], r: [0.27, 0.25, 0.24], weight: 2.8 },
        HORN([0.8, 0.4, 0.12], 0.38, 0.05, 0.7, 0.6, 0.1),
        HORN([0.8, 0.4, -0.12], 0.38, 0.05, 0.7, 0.6, -0.1, -1),
        { t: 'tube', radius: 0.22, taper: 0.85, weight: 3.4,
          p0: [-0.85, -0.05, 0], p1: [-1.25, -0.25, 0], p2: [-1.55, -0.55, 0], p3: [-1.75, -0.85, 0] },
        { t: 'tube', radius: 0.05, taper: 0.5, weight: 0.5,
          p0: [-1.68, -0.78, 0], p1: [-1.9, -0.62, 0], p2: [-2.0, -0.45, 0], p3: [-2.05, -0.32, 0] },
        { t: 'tube', radius: 0.05, taper: 0.5, weight: 0.5,
          p0: [-1.68, -0.78, 0], p1: [-1.95, -0.9, 0], p2: [-2.1, -0.85, 0], p3: [-2.2, -0.75, 0] },
        ...legs(-0.15, 0.55, 0.24, -0.52, 0.55),
      ];
    case 10: // 水瓶：人形举着倾斜水罐，三折水流倾倒而下
      return [
        { t: 'ellipsoid', c: [-0.25, 1.1, 0], r: [0.19, 0.21, 0.19], weight: 2 },
        { t: 'ellipsoid', c: [-0.25, 0.45, 0], r: [0.2, 0.44, 0.18], weight: 3.6 },
        { t: 'tube', radius: 0.055, taper: 0.4, weight: 1,
          p0: [-0.35, 0.75, 0], p1: [-0.1, 0.9, 0], p2: [0.15, 0.98, 0], p3: [0.4, 0.92, 0] },
        { t: 'tube', radius: 0.055, taper: 0.4, weight: 1,
          p0: [-0.15, 0.72, 0], p1: [0.05, 0.55, 0], p2: [0.15, 0.3, 0], p3: [0.05, 0.05, 0] },
        { t: 'tube', radius: 0.06, taper: 0.4, weight: 1,
          p0: [-0.32, 0.05, 0], p1: [-0.34, -0.45, 0], p2: [-0.36, -0.95, 0], p3: [-0.35, -1.5, 0] },
        { t: 'tube', radius: 0.06, taper: 0.4, weight: 1,
          p0: [-0.12, 0.05, 0], p1: [-0.1, -0.45, 0], p2: [-0.08, -0.95, 0], p3: [-0.1, -1.5, 0] },
        { t: 'ellipsoid', c: [0.55, 0.82, 0], r: [0.24, 0.32, 0.24], weight: 3, noise: 0.08 },
        { t: 'tube', radius: 0.045, taper: 0.5, weight: 1.6,
          p0: [0.42, 0.62, 0], p1: [0.3, 0.25, 0], p2: [0.42, -0.15, 0], p3: [0.28, -0.55, 0] },
        { t: 'tube', radius: 0.045, taper: 0.5, weight: 1.4,
          p0: [0.28, -0.55, 0], p1: [0.12, -0.85, 0], p2: [0.3, -1.15, 0], p3: [0.16, -1.45, 0] },
        { t: 'ellipsoid', c: [0.36, 0.05, 0], r: [0.04, 0.04, 0.04], weight: 0.2 },
        { t: 'ellipsoid', c: [0.26, -0.7, 0], r: [0.05, 0.05, 0.05], weight: 0.3 },
        { t: 'ellipsoid', c: [0.2, -1.3, 0], r: [0.05, 0.05, 0.05], weight: 0.3 },
      ];
    case 11: // 双鱼：两条头朝相反方向的鱼，中间一道波浪相连
      return [
        { t: 'ellipsoid', c: [0.6, 0.35, 0], r: [0.55, 0.26, 0.2], weight: 5, noise: 0.08 },
        { t: 'ellipsoid', c: [1.1, 0.4, 0], r: [0.12, 0.12, 0.12], weight: 0.8 },
        { t: 'tube', radius: 0.05, taper: 0.7, weight: 0.6,
          p0: [0.12, 0.35, 0], p1: [-0.1, 0.55, 0], p2: [-0.3, 0.55, 0], p3: [-0.45, 0.6, 0] },
        { t: 'tube', radius: 0.05, taper: 0.7, weight: 0.6,
          p0: [0.12, 0.35, 0], p1: [-0.1, 0.15, 0], p2: [-0.3, 0.15, 0], p3: [-0.45, 0.1, 0] },
        { t: 'ellipsoid', c: [-0.6, -0.35, 0], r: [0.55, 0.26, 0.2], weight: 5, noise: 0.08 },
        { t: 'ellipsoid', c: [-1.1, -0.3, 0], r: [0.12, 0.12, 0.12], weight: 0.8 },
        { t: 'tube', radius: 0.05, taper: 0.7, weight: 0.6,
          p0: [-0.12, -0.35, 0], p1: [0.1, -0.15, 0], p2: [0.3, -0.15, 0], p3: [0.45, -0.1, 0] },
        { t: 'tube', radius: 0.05, taper: 0.7, weight: 0.6,
          p0: [-0.12, -0.35, 0], p1: [0.1, -0.55, 0], p2: [0.3, -0.55, 0], p3: [0.45, -0.6, 0] },
        { t: 'tube', radius: 0.025, taper: 0, weight: 0.8,
          p0: [-0.42, 0.08, 0], p1: [-0.1, -0.18, 0], p2: [0.15, 0.18, 0], p3: [0.42, -0.08, 0] },
      ];
    default:
      return [{ t: 'ellipsoid', c: [0, 0, 0], r: [1, 1, 1], weight: 1 }];
  }
}

// 按权重把 count 颗粒子分到各部件，余数按小数部分大的优先，总数严格等于 count。
// exp 用来压缩权重的动态范围：低多边形网格要的是「每根管都够点连成面」，
// 直接用 weight 会让细腿细角分不到 4 个点、整条腿在网格里消失。
function allocQuotas(parts, count, exp) {
  const w = parts.map((p) => (exp ? Math.pow(Math.max(0.02, p.weight || 1), exp) : (p.weight || 1)));
  const total = w.reduce((a, v) => a + v, 0);
  const quotas = parts.map((p, i) => ({
    n: Math.floor(w[i] / total * count),
    f: w[i] / total * count % 1,
  }));
  const assigned = quotas.reduce((a, q) => a + q.n, 0);
  quotas.map((q, idx) => ({ idx, f: q.f })).sort((a, b) => b.f - a.f)
    .slice(0, count - assigned).forEach((q) => { quotas[q.idx].n += 1; });
  return quotas;
}

// 按配额逐粒采样到 pos（in-place）。
function sampleInto(pos, parts, quotas, count, rnd, surface) {
  const pick = surface ? samplePartSurface : samplePart;
  let k = 0;
  parts.forEach((part, pi) => {
    for (let n = 0; n < quotas[pi].n && k < count; n += 1) {
      const p = pick(part, rnd);
      pos[k * 3] = p[0]; pos[k * 3 + 1] = p[1]; pos[k * 3 + 2] = p[2];
      k += 1;
    }
  });
  while (k < count) {
    const p = pick(parts[0], rnd);
    pos[k * 3] = p[0]; pos[k * 3 + 1] = p[1]; pos[k * 3 + 2] = p[2];
    k += 1;
  }
  return pos;
}

// 归一化参数：包围盒中心 + 等比缩放（最长边 → 2 单位）。纯函数，按 id 缓存，
// 保证造型点云、低多边形网格、星座连线三层拿到同一套坐标。
const fitCache = new Array(SIGN_COUNT).fill(null);

function computeFit(index) {
  const parts = shapeParts(index);
  const rnd = seededRandom('zodiac-fit:' + ZODIAC[index].id);
  const raw = sampleInto(new Float32Array(FIT_SAMPLE * 3), parts,
    allocQuotas(parts, FIT_SAMPLE), FIT_SAMPLE, rnd, false);
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (let i = 0; i < raw.length; i += 3) {
    if (raw[i] < minX) minX = raw[i];
    if (raw[i] > maxX) maxX = raw[i];
    if (raw[i + 1] < minY) minY = raw[i + 1];
    if (raw[i + 1] > maxY) maxY = raw[i + 1];
  }
  const half = Math.max(maxX - minX, maxY - minY) / 2;
  return {
    cx: (minX + maxX) / 2,
    cy: (minY + maxY) / 2,
    k: FIG_HALF / (half > 1e-6 ? half : 1),
    // 归一化后的半宽/半高（世界单位）：星座骨架据此贴住形象图的体量。
    w: (maxX - minX) / 2 * (FIG_HALF / (half > 1e-6 ? half : 1)),
    h: (maxY - minY) / 2 * (FIG_HALF / (half > 1e-6 ? half : 1)),
  };
}

export function shapeFit(index) {
  const i = ((index % SIGN_COUNT) + SIGN_COUNT) % SIGN_COUNT;
  if (!fitCache[i]) fitCache[i] = computeFit(i);
  return fitCache[i];
}

// 把原始坐标就地归一化：中心归零、等比缩到 ±FIG_HALF。
function applyFit(pos, fit) {
  for (let i = 0; i < pos.length; i += 3) {
    pos[i] = (pos[i] - fit.cx) * fit.k;
    pos[i + 1] = (pos[i + 1] - fit.cy) * fit.k;
    pos[i + 2] *= fit.k;
  }
  return pos;
}

// 按权重把 count 颗粒子分到各部件，逐粒采样，返回 {pos: Float32Array(n*3),
// shine: Float32Array(n)}。同一 signId+count 永远得到同一片云。
export function buildShape(index, count) {
  const i = ((index % SIGN_COUNT) + SIGN_COUNT) % SIGN_COUNT;
  const parts = shapeParts(i);
  const rnd = seededRandom('zodiac-shape:' + ZODIAC[i].id + ':' + count);
  const pos = new Float32Array(count * 3);
  const shine = new Float32Array(count);
  const quotas = allocQuotas(parts, count);
  let k = 0;
  parts.forEach((part, pi) => {
    for (let n = 0; n < quotas[pi].n && k < count; n += 1) {
      const p = samplePart(part, rnd);
      pos[k * 3] = p[0]; pos[k * 3 + 1] = p[1]; pos[k * 3 + 2] = p[2];
      // 细部件（角/尾/尖）更亮，身体略暗；再叠每粒随机，主星般的亮斑自然出现。
      const base = part.t === 'ellipsoid' ? (part.shell ? 0.95 : 0.7) : 1.0;
      shine[k] = clamp(base * (0.75 + rnd() * 0.5), 0, 1.2);
      k += 1;
    }
  });
  // 理论上配额已分满；防御性补点。
  while (k < count) {
    const p = samplePart(parts[0], rnd);
    pos[k * 3] = p[0]; pos[k * 3 + 1] = p[1]; pos[k * 3 + 2] = p[2];
    shine[k] = 0.8;
    k += 1;
  }
  applyFit(pos, shapeFit(i));
  for (let n = 0; n < count; n += 1) {
    pos[n * 3] = clamp(pos[n * 3], -SHAPE_BOX, SHAPE_BOX);
    pos[n * 3 + 1] = clamp(pos[n * 3 + 1], -SHAPE_BOX, SHAPE_BOX);
    pos[n * 3 + 2] = clamp(pos[n * 3 + 2], -SHAPE_BOX * 0.7, SHAPE_BOX * 0.7);
  }
  return { pos, shine, sign: ZODIAC[i] };
}

// ---------------------------------------------------------------------------
// 星座连线：十二宫各自的「矢量骨架」。
//
// 关键：坐标写在**造型自己的那一套空间里**（与 shapeParts 同一套，侧视、头朝 +x），
// 之后和点云走同一个 fit 归一化。骨架因此天然贴在形象图上 —— 狮子的镰刀压在
// 鬃毛上、天蝎的钩子顺着 S 形躯干、射手的弓拍在马背上，而不是另画一张悬空的
// 抽象星图。节点第三个数是相对亮度：主星 1.0（大颗十字星芒），暗星 0.3。
// ---------------------------------------------------------------------------
export const CONSTELLATION = [
  // 白羊：尾—背—肩—头连成一线，末端是回卷的角
  { nodes: [[-1.50, 0.55, 0.55], [-0.45, 0.20, 0.40], [0.15, 0.10, 0.50],
    [0.75, 0.30, 0.62], [1.05, 0.28, 1.00], [1.15, 0.85, 0.70], [0.62, 0.72, 0.45]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6]] },
  // 金牛：毕星团 V 形压在头颈，两支长角向上挑
  { nodes: [[0.62, 0.22, 1.00], [0.95, 0.02, 0.60], [-0.25, 0.30, 0.50],
    [0.05, -0.30, 0.55], [1.42, 1.42, 0.82], [1.05, 0.60, 0.45],
    [0.85, -0.55, 0.35], [-0.30, -0.85, 0.30], [0.35, -1.10, 0.50]],
    lines: [[0, 1], [1, 3], [3, 2], [2, 0], [2, 5], [5, 4], [1, 6], [6, 7], [3, 8]] },
  // 双子：两个并肩人形，脚下相连
  { nodes: [[0.55, 1.38, 1.00], [-0.55, 1.35, 0.85], [0.55, 0.60, 0.50],
    [-0.55, 0.55, 0.45], [0.62, -1.25, 0.60], [-0.62, -1.25, 0.50],
    [0.55, -0.20, 0.40], [-0.55, -0.20, 0.35], [0.02, 0.25, 0.28]],
    lines: [[0, 2], [2, 6], [6, 4], [1, 3], [3, 7], [7, 5], [0, 1], [4, 5], [8, 0], [8, 1]] },
  // 巨蟹：暗弱的倒 Y 压在蟹壳上，两臂伸向同一侧的钳与腿
  // （造型的部件本身就是侧视：双钳都在 +x，节点必须跟着部件走）
  { nodes: [[-0.45, 0.32, 0.55], [0.05, 0.00, 0.60], [-0.25, -0.35, 0.42],
    [0.85, 0.35, 0.45], [1.40, 0.42, 0.50], [1.05, -0.25, 0.34], [0.55, -0.45, 0.28]],
    lines: [[0, 1], [1, 2], [1, 3], [3, 4], [1, 5], [1, 6]] },
  // 狮子：镰刀形鬃毛 + 后半身的三角
  { nodes: [[0.55, -0.35, 1.00], [1.05, -0.30, 0.50], [1.05, 0.25, 0.85],
    [0.80, 0.62, 0.50], [0.38, 0.70, 0.40], [0.05, 0.42, 0.55],
    [-0.35, 0.28, 0.60], [-0.60, 0.46, 0.35], [-1.05, -0.25, 0.75]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 2], [2, 6], [6, 8], [6, 7], [7, 8]] },
  // 处女：大 Y 形，Spica 落在裙摆上
  { nodes: [[0.45, -0.95, 1.00], [0.10, -0.30, 0.65], [-0.05, 0.05, 0.40],
    [-0.45, 0.45, 0.50], [0.35, -0.10, 0.45], [0.62, 0.35, 0.55],
    [0.78, 0.08, 0.34], [-0.30, 0.55, 0.28], [0.02, 1.20, 0.45]],
    lines: [[1, 0], [1, 2], [2, 3], [2, 8], [1, 4], [4, 5], [5, 6], [2, 7]] },
  // 天秤：四边形压在横梁上
  { nodes: [[0.05, 0.55, 0.70], [-0.55, 0.10, 0.65], [-0.95, 0.35, 0.50],
    [-0.35, -0.45, 0.55], [0.55, 0.20, 0.40], [-0.75, -0.15, 0.30]],
    lines: [[0, 1], [1, 2], [1, 3], [0, 4], [2, 5], [5, 3]] },
  // 天蝎：钩子形顺着 S 形躯干，尾针上卷
  { nodes: [[1.45, 0.72, 0.60], [1.30, 0.48, 0.50], [0.85, 0.15, 1.00],
    [0.45, -0.05, 0.45], [0.05, -0.15, 0.50], [-0.35, -0.25, 0.40],
    [-0.70, -0.15, 0.40], [-1.00, 0.10, 0.35], [-1.25, 0.35, 0.40],
    [-1.40, 0.60, 0.35], [-1.45, 0.85, 0.40], [-1.30, 1.05, 0.55],
    [-1.10, 1.15, 0.40], [1.05, 0.35, 0.50], [1.25, 0.85, 0.40]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8],
      [8, 9], [9, 10], [10, 11], [11, 12], [13, 2], [14, 0], [14, 1]] },
  // 射手：弓拍在马背，箭穿过弓弦
  { nodes: [[-1.65, 0.45, 0.60], [-1.05, 0.20, 0.62], [-0.10, -0.35, 0.66],
    [0.40, 0.05, 0.52], [0.85, -0.05, 0.50], [1.35, 0.30, 0.50],
    [1.45, 0.70, 0.72], [1.25, 1.15, 0.55], [0.40, 1.20, 0.40],
    [0.55, 0.72, 0.30], [0.30, -0.10, 0.45]],
    lines: [[0, 1], [1, 2], [2, 10], [10, 3], [3, 4], [4, 5], [5, 6], [6, 7],
      [7, 8], [8, 9], [9, 6], [9, 4]] },
  // 摩羯：头角三角 + 北岸长链拖到鱼尾
  { nodes: [[0.95, 0.42, 0.75], [1.05, 0.10, 0.70], [0.45, 0.35, 0.40],
    [0.05, 0.22, 0.40], [-0.10, -0.10, 0.50], [-0.55, -0.45, 0.55],
    [-0.85, -0.55, 0.50], [0.45, -0.35, 0.40], [0.05, -0.70, 0.30]],
    lines: [[0, 1], [1, 7], [7, 8], [8, 0], [0, 2], [2, 3], [3, 4], [4, 5], [5, 6], [5, 0]] },
  // 水瓶：水罐 Y 形 + 三折水流
  { nodes: [[0.45, 1.15, 0.45], [0.62, 1.08, 0.35], [0.80, 1.05, 0.35],
    [0.32, 0.90, 0.50], [0.05, 0.55, 0.80], [-0.55, 0.78, 0.70],
    [-0.45, 0.25, 0.50], [0.10, 0.10, 0.42], [0.45, -0.60, 0.45],
    [-0.05, -1.00, 0.40], [0.68, -0.80, 0.52], [0.75, -0.50, 0.34],
    [0.45, -1.25, 0.30]],
    lines: [[0, 3], [1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [5, 6], [4, 7],
      [7, 8], [8, 9], [8, 10], [10, 11], [10, 12]] },
  // 双鱼：两尾鱼由中间那道波浪形的带子系住
  { nodes: [[0.02, 0.05, 0.62], [1.25, 0.45, 0.55], [0.95, 0.20, 0.40],
    [0.72, 0.52, 0.45], [0.30, 0.45, 0.35], [0.28, 0.12, 0.30],
    [-1.10, -0.60, 0.50], [-0.85, -0.35, 0.40], [-0.60, -0.58, 0.42],
    [-0.22, -0.42, 0.35], [-0.18, -0.12, 0.30]],
    lines: [[0, 1], [1, 2], [2, 5], [5, 3], [3, 4], [4, 0], [0, 6], [6, 7],
      [7, 10], [10, 8], [8, 9], [9, 0]] },
];

// 星座骨架落到世界坐标：与造型点云共用同一套 fit，因此骨架天然贴在形象图上。
// 返回 { x, y, m, nodes, segments, core, halo } —— x/y 是世界坐标，m 是星等亮度，
// core/halo 是两级宽度的连线丝带顶点（三顶点一面的三角形列表）。
export function buildConstellation(index) {
  const i = ((index % SIGN_COUNT) + SIGN_COUNT) % SIGN_COUNT;
  const src = CONSTELLATION[i];
  const fit = shapeFit(i);
  const n = src.nodes.length;
  const x = new Float32Array(n);
  const y = new Float32Array(n);
  const m = new Float32Array(n);
  src.nodes.forEach(([px, py, b], k) => {
    x[k] = (px - fit.cx) * fit.k;
    y[k] = (py - fit.cy) * fit.k;
    m[k] = b == null ? 0.5 : clamp(b, 0.05, 1);
  });
  return {
    x, y, m,
    nodes: n,
    segments: src.lines.length,
    core: buildRibbon(x, y, src.lines, LINE_CORE_WIDTH),
    halo: buildRibbon(x, y, src.lines, LINE_HALO_WIDTH),
  };
}

// ---------------------------------------------------------------------------
// 低多边形网格：造型点云的表面子集 → 平面 Delaunay 三角化 → 按边长筛掉跨缝隙
// 的超长三角形。得到的就是参考图那种「半透明多边形面片 + 清晰网格边」的形象图。
// ---------------------------------------------------------------------------

// Bowyer–Watson 增量三角化。输入 [{x,y}]，返回三角形索引三元组数组。
export function delaunay2(points) {
  const n = points.length;
  if (n < 3) return [];
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (let i = 0; i < n; i += 1) {
    const p = points[i];
    if (p.x < minX) minX = p.x;
    if (p.x > maxX) maxX = p.x;
    if (p.y < minY) minY = p.y;
    if (p.y > maxY) maxY = p.y;
  }
  const dx = maxX - minX || 1;
  const dy = maxY - minY || 1;
  const dmax = Math.max(dx, dy);
  const midX = (minX + maxX) / 2;
  const midY = (minY + maxY) / 2;
  // 超三角形：把全部输入点稳稳包在里面。
  const verts = [
    { x: midX - 20 * dmax, y: midY - dmax },
    { x: midX, y: midY + 20 * dmax },
    { x: midX + 20 * dmax, y: midY - dmax },
  ].concat(points.map((p) => ({ x: p.x, y: p.y })));
  let tris = [[0, 1, 2]];
  const circum = (a, b, c) => {
    const ax = a.x, ay = a.y, bx = b.x, by = b.y, cx2 = c.x, cy2 = c.y;
    const d = 2 * (ax * (by - cy2) + bx * (cy2 - ay) + cx2 * (ay - by));
    if (Math.abs(d) < 1e-12) return { x: 0, y: 0, r: Infinity };
    const a2 = ax * ax + ay * ay;
    const b2 = bx * bx + by * by;
    const c2 = cx2 * cx2 + cy2 * cy2;
    const ux = (a2 * (by - cy2) + b2 * (cy2 - ay) + c2 * (ay - by)) / d;
    const uy = (a2 * (cx2 - bx) + b2 * (ax - cx2) + c2 * (bx - ax)) / d;
    const dx2 = ux - ax, dy2 = uy - ay;
    return { x: ux, y: uy, r: dx2 * dx2 + dy2 * dy2 };
  };
  const cc = [circum(verts[0], verts[1], verts[2])];
  for (let p = 3; p < verts.length; p += 1) {
    const pt = verts[p];
    const bad = [];
    for (let t = 0; t < tris.length; t += 1) {
      const c = cc[t];
      const ddx = pt.x - c.x, ddy = pt.y - c.y;
      if (ddx * ddx + ddy * ddy <= c.r) bad.push(t);
    }
    // 坏三角形的边界边（只出现一次的边）围成空腔多边形。
    const edges = new Map();
    const key = (a, b) => (a < b ? a + ':' + b : b + ':' + a);
    bad.forEach((t) => {
      const [a, b, c] = tris[t];
      [[a, b], [b, c], [c, a]].forEach(([u, v]) => {
        const k = key(u, v);
        const hit = edges.get(k);
        if (hit) hit.n += 1; else edges.set(k, { u, v, n: 1 });
      });
    });
    const keepTris = [];
    const keepCc = [];
    for (let t = 0; t < tris.length; t += 1) {
      if (bad.indexOf(t) < 0) { keepTris.push(tris[t]); keepCc.push(cc[t]); }
    }
    tris = keepTris;
    cc.length = 0;
    keepCc.forEach((c) => cc.push(c));
    edges.forEach((e) => {
      if (e.n !== 1) return;
      tris.push([e.u, e.v, p]);
      cc.push(circum(verts[e.u], verts[e.v], pt));
    });
  }
  // 丢掉与超三角形共享顶点的输出。
  return tris.filter((t) => t[0] > 2 && t[1] > 2 && t[2] > 2)
    .map((t) => [t[0] - 3, t[1] - 3, t[2] - 3]);
}

export const FIGURE_MESH_POINTS = 240;   // 三角化用的表面点（与画质档无关）
export const FIGURE_MESH_EXP = 0.42;     // 网格配额压缩指数：细腿细角也要分到点
const FIGURE_MAX_EDGE = 0.44;            // 归一化坐标下的最大边长：超过就是跨缝隙的长条

// 造型的低多边形形象图：{ cloud, mesh:{pos,tint}, edges, triangles }
//   cloud    表面点云（半透明柔光底，按画质档取量）
//   mesh     非索引三角面片：每面一个随机明度 → 参考图那种面片感
//   edges    去重后的网格边（清晰矢量线）
export function buildFigureMesh(index, cloudCount) {
  const i = ((index % SIGN_COUNT) + SIGN_COUNT) % SIGN_COUNT;
  const fit = shapeFit(i);
  const parts = shapeParts(i);
  // 1) 表面点云（跟随画质档）
  const rndCloud = seededRandom('zodiac-figure-cloud:' + ZODIAC[i].id + ':' + cloudCount);
  const cloud = applyFit(sampleInto(new Float32Array(cloudCount * 3), parts,
    allocQuotas(parts, cloudCount), cloudCount, rndCloud, true), fit);
  // 2) 网格采样点（固定量，任何档位同一张网）
  const rndMesh = seededRandom('zodiac-figure-mesh:' + ZODIAC[i].id);
  const raw = applyFit(sampleInto(new Float32Array(FIGURE_MESH_POINTS * 3), parts,
    allocQuotas(parts, FIGURE_MESH_POINTS, FIGURE_MESH_EXP), FIGURE_MESH_POINTS, rndMesh, true), fit);
  const pts = [];
  for (let n = 0; n < FIGURE_MESH_POINTS; n += 1) pts.push({ x: raw[n * 3], y: raw[n * 3 + 1] });
  const tris = delaunay2(pts).filter(([a, b, c]) => {
    const ab = Math.hypot(pts[a].x - pts[b].x, pts[a].y - pts[b].y);
    const bc = Math.hypot(pts[b].x - pts[c].x, pts[b].y - pts[c].y);
    const ca = Math.hypot(pts[c].x - pts[a].x, pts[c].y - pts[a].y);
    return Math.max(ab, bc, ca) <= FIGURE_MAX_EDGE;
  });
  const tintRnd = seededRandom('zodiac-figure-tint:' + ZODIAC[i].id);
  const meshPos = new Float32Array(tris.length * 9);
  const tint = new Float32Array(tris.length * 9);
  const edgeSet = new Map();
  tris.forEach(([a, b, c], t) => {
    const z = FIGURE_Z;
    const v = [pts[a], pts[b], pts[c]];
    v.forEach((p, n) => {
      meshPos[t * 9 + n * 3] = p.x;
      meshPos[t * 9 + n * 3 + 1] = p.y;
      meshPos[t * 9 + n * 3 + 2] = z;
    });
    // 面片明度：暗面/亮面交错，低多边形才不塌成一块平色。
    const t0 = 0.62 + tintRnd() * 0.66;
    for (let n = 0; n < 3; n += 1) tint[t * 9 + n * 3] = tint[t * 9 + n * 3 + 1] = tint[t * 9 + n * 3 + 2] = t0;
    [[a, b], [b, c], [c, a]].forEach(([u, w]) => {
      const k = u < w ? u + ':' + w : w + ':' + u;
      if (!edgeSet.has(k)) edgeSet.set(k, [u, w]);
    });
  });
  const edgePos = new Float32Array(edgeSet.size * 6);
  let e = 0;
  edgeSet.forEach(([u, w]) => {
    edgePos[e * 6] = pts[u].x; edgePos[e * 6 + 1] = pts[u].y; edgePos[e * 6 + 2] = FIGURE_Z;
    edgePos[e * 6 + 3] = pts[w].x; edgePos[e * 6 + 4] = pts[w].y; edgePos[e * 6 + 5] = FIGURE_Z;
    e += 1;
  });
  return {
    cloud, mesh: { pos: meshPos, tint }, edges: edgePos,
    triangles: tris.length, segmentCount: edgeSet.size,
  };
}

// 连线丝带：二维线段按宽度向两侧挤成四边形（不做屏幕空间的粗线，几何一次性
// 烘死在造型平面里，缩放旋转下始终清晰）。两端各外扩半个线宽，拐角就不会开豁口。
export function buildRibbon(x, y, lines, width) {
  const hw = (width || 0.03) / 2;
  const out = new Float32Array(lines.length * 18);
  lines.forEach(([a, b], s) => {
    let dx = x[b] - x[a], dy = y[b] - y[a];
    const len = Math.hypot(dx, dy) || 1;
    dx /= len; dy /= len;
    const nx = -dy * hw, ny = dx * hw;
    const ex = dx * hw, ey = dy * hw;
    const ax = x[a] - ex, ay = y[a] - ey;
    const bx = x[b] + ex, by = y[b] + ey;
    const v = [
      ax + nx, ay + ny, ax - nx, ay - ny, bx - nx, by - ny,
      ax + nx, ay + ny, bx - nx, by - ny, bx + nx, by + ny,
    ];
    for (let n = 0; n < 6; n += 1) {
      out[s * 18 + n * 3] = v[n * 2];
      out[s * 18 + n * 3 + 1] = v[n * 2 + 1];
      out[s * 18 + n * 3 + 2] = CONSTELLATION_Z;
    }
  });
  return out;
}

// 粒子汇聚前 / 散开后的深空云团：大部分是宽球壳里的远星，小部分拉成星流，
// 让飞行轨迹有「从星海深处冲出来」的纵深。云团围绕 ±4.2..16 的半径。
export function buildCloud(seedStr, count) {
  const rnd = seededRandom('zodiac-cloud:' + seedStr);
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    const stream = rnd() < 0.28;
    if (stream) {
      // 星流：沿随机方向拉长的一条短线段。
      const dir = unitDir(rnd);
      const along = (rnd() - 0.5) * 22;
      const jitter = 0.35;
      pos[i * 3] = dir[0] * along + gauss(rnd) * jitter;
      pos[i * 3 + 1] = dir[1] * along * 0.6 + gauss(rnd) * jitter;
      pos[i * 3 + 2] = dir[2] * along + gauss(rnd) * jitter;
    } else {
      const dir = unitDir(rnd);
      const r = 4.2 + Math.pow(rnd(), 0.7) * 12;
      pos[i * 3] = dir[0] * r;
      pos[i * 3 + 1] = dir[1] * r * 0.7;
      pos[i * 3 + 2] = dir[2] * r;
    }
  }
  return pos;
}

// 每个粒子的随机种子（错峰汇聚/闪烁），全周期复用，单独一片 buffer。
export function buildSeeds(count) {
  const rnd = seededRandom('zodiac-seeds:' + count);
  const seeds = new Float32Array(count);
  for (let i = 0; i < count; i += 1) seeds[i] = rnd();
  return seeds;
}

// 生命周期状态机（纯函数）：time 为播放秒。
// 返回 {index, state: 'gather'|'hold'|'disperse', t: 状态内秒数, cycle}。
export function timelineAt(time) {
  const t = Math.max(0, Number(time) || 0);
  const cycle = Math.floor(t / CYCLE_SECONDS);
  const local = t - cycle * CYCLE_SECONDS;
  if (local < GATHER_SECONDS) {
    return { index: ((cycle % SIGN_COUNT) + SIGN_COUNT) % SIGN_COUNT, state: 'gather', t: local, cycle };
  }
  if (local < GATHER_SECONDS + HOLD_SECONDS) {
    return { index: ((cycle % SIGN_COUNT) + SIGN_COUNT) % SIGN_COUNT, state: 'hold', t: local - GATHER_SECONDS, cycle };
  }
  return { index: ((cycle % SIGN_COUNT) + SIGN_COUNT) % SIGN_COUNT, state: 'disperse', t: local - GATHER_SECONDS - HOLD_SECONDS, cycle };
}

// 低频能量：前 5 个频带的均值，夹 0..1（保留旧立面，供 main 与契约使用）。
export function viewBass(bins) {
  if (!bins || !bins.length) return 0;
  let sum = 0;
  const n = Math.min(5, bins.length);
  for (let i = 0; i < n; i += 1) sum += clamp(Number(bins[i]) || 0);
  return clamp(sum / n);
}

// 缩放距离钳制（纯函数）。
export function zoomClamp(dist, minDist, maxDist) {
  return clamp(dist, minDist || 3, maxDist || 17);
}
