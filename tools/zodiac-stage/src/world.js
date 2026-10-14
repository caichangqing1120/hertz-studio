// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
//
// 「星座」世界：深浅渐变星空穹顶 + 星场/星芒 + 单粒子池 + 半透明形象图 + 星座骨架。
//
// 图层由远及近（renderOrder 决定，全部 depthWrite:false + depthTest:false，
// 深度只由顺序表达，不靠 z 值大小）：
//   -1000 天空穹顶      纵向三段渐变 + 顶点级 FBM 星云 + 屏幕暗角
//    -900 星场           细密星点（加法混合）
//    -890 星云斑块       大尺度柔斑
//    -880 星光点缀       四芒星闪烁（大颗亮星）
//    -100 形象图柔光     造型表面点云，大点径低透明 → 半透明的「体量」
//     -90 形象图网格     低多边形面片（半透明 + 每面随机明度）
//     -82 网格边宽晕     低多边形辉光
//     -80 网格边细芯     矢量清晰的实线
//     -78 网格顶点       三角形顶点上的亮点
//     -10 主粒子池       汇聚/停留/散开
//      10 星座连线晕     宽丝带柔光
//      11 星座连线芯     细丝带，矢量清晰
//      12 星座星点       四芒星，主星最大
//
// 十二座的全部几何在一次构建里做好（零分配、零 GC、零重建，也不依赖
// three 的 attribute 替换语义），换座只是把九个对象指向另一套几何。
// 预建的几何在 dispose() 里逐个释放 —— 挂在同一个几何上的 attribute 被换掉时
// three 不会回收旧 buffer（弱引用只跟包装对象走），只有「每座一个几何」才收得干净。

import {
  ZODIAC, SIGN_COUNT, buildShape, buildCloud, buildSeeds, buildFigureMesh,
  buildConstellation, CONSTELLATION_Z, FIGURE_Z, FIGURE_MESH_POINTS,
} from './zodiac.js';
import { clamp, seededRandom } from './util.js';

// 归一化改成「落到 1.78 的设计框」之后，横宽的星座比原来大了约 1.8 倍，
// 同样的粒子数摊在更大的面积上会显稀 —— 三个池子跟着上调一档。
const SHAPE_COUNTS = { low: 2600, medium: 4200, high: 6000 };
const FIGURE_COUNTS = { low: 1000, medium: 1700, high: 2600 };
const FIELD_COUNTS = { low: 3000, medium: 5200, high: 8200 };
const SPARKLE_COUNTS = { low: 70, medium: 112, high: 160 };
const NEBULA = 36;
const DISC_SLOTS = 18;   // 单座骨架最多 18 个星点（当前最大 15，留余量）

// —— 天空穹顶 ——
// 星云噪声在顶点上算（球面 64×40，两千多个顶点），片元只做插值与混合：
// 全屏 FBM 在集显上会直接吃掉帧预算，而星云本身就是大尺度的柔斑，
// 顶点插值完全够用。
const SKY_VERT = (oct) => [
  'varying float vY;',
  'varying vec2 vNeb;',
  'varying vec3 vNdc;',
  'uniform float uTime;',
  'float hash31(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453123); }',
  'float noise3(vec3 p) {',
  '  vec3 i = floor(p); vec3 f = fract(p); f = f*f*(3.0-2.0*f);',
  '  float a = mix(mix(hash31(i), hash31(i+vec3(1.0,0.0,0.0)), f.x),',
  '                mix(hash31(i+vec3(0.0,1.0,0.0)), hash31(i+vec3(1.0,1.0,0.0)), f.x), f.y);',
  '  float b = mix(mix(hash31(i+vec3(0.0,0.0,1.0)), hash31(i+vec3(1.0,0.0,1.0)), f.x),',
  '                mix(hash31(i+vec3(0.0,1.0,1.0)), hash31(i+vec3(1.0,1.0,1.0)), f.x), f.y);',
  '  return mix(a, b, f.z);',
  '}',
  'float fbm(vec3 p) {',
  '  float a = 0.5; float s = 0.0;',
  `  for (int i = 0; i < ${oct}; i++) { s += a * noise3(p); p *= 2.03; a *= 0.5; }`,
  '  return s;',
  '}',
  'void main() {',
  '  vec3 dir = normalize(position);',
  '  vY = dir.y;',
  '  vNeb = vec2(',
  '    fbm(dir * 2.35 + vec3(0.0, uTime * 0.0055, uTime * 0.0042)),',
  '    fbm(dir * 5.10 - vec3(uTime * 0.0044, 0.0, uTime * 0.0031)));',
  '  vec4 pos = projectionMatrix * modelViewMatrix * vec4(position, 1.0);',
  '  vNdc = pos.xyw;',
  '  gl_Position = pos;',
  '}',
].join('\n');

const SKY_FRAG = [
  'precision mediump float;',
  'uniform vec3 uTop;',
  'uniform vec3 uMid;',
  'uniform vec3 uBot;',
  'uniform vec3 uNeb1;',
  'uniform vec3 uNeb2;',
  'uniform float uNeb;',
  'uniform float uVignette;',
  'varying float vY;',
  'varying vec2 vNeb;',
  'varying vec3 vNdc;',
  'void main() {',
  '  float y = clamp(vY * 0.5 + 0.5, 0.0, 1.0);',
  '  vec3 col = mix(uBot, uMid, smoothstep(0.0, 0.58, y));',
  '  col = mix(col, uTop, smoothstep(0.46, 1.0, y));',
  // 星云：两条不同尺度的带子，紫与青错开，避免整片天空一个颜色。
  '  col += uNeb1 * (smoothstep(0.22, 0.92, vNeb.x) * 1.00) * uNeb;',
  '  col += uNeb2 * (smoothstep(0.30, 0.95, vNeb.y) * 0.62) * uNeb;',
  // 暗角：屏幕边缘压暗才有纵深，也让画面中心的造型更跳出来。
  '  vec2 ndc = vNdc.xy / max(1e-4, vNdc.z);',
  '  col *= 1.0 - uVignette * smoothstep(0.28, 1.18, length(ndc * vec2(0.84, 1.0)));',
  '  gl_FragColor = vec4(max(col, vec3(0.0)), 1.0);',
  '}',
].join('\n');

function makeSkyMaterial(THREE, oct) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      // 参考图的底是天青石蓝（中段约 #24459f），不是近黑的藏青 —— 天空太暗时
      // 整屏读成「黑底上一团白粒子」，层次全靠造型自己在撑。这里把三段的绝对值
      // 整体抬上去，并让**中段最亮**（原来三分量一路向上加亮，最亮在画面顶部）。
      uTop: { value: new THREE.Color(0.066, 0.113, 0.408) },
      uMid: { value: new THREE.Color(0.146, 0.252, 0.595) },
      uBot: { value: new THREE.Color(0.043, 0.067, 0.247) },
      uNeb1: { value: new THREE.Color(0.245, 0.189, 0.595) },
      uNeb2: { value: new THREE.Color(0.114, 0.284, 0.587) },
      uNeb: { value: 1.00 },
      uVignette: { value: 0.54 },
    },
    vertexShader: SKY_VERT(oct),
    fragmentShader: SKY_FRAG,
    side: THREE.BackSide,
    depthTest: false,
    depthWrite: false,
  });
}

// —— 主粒子（星座造型）着色器 ——
const SHAPE_VERT = [
  'attribute vec3 aEntry;',
  'attribute vec3 aShape;',
  'attribute vec3 aExit;',
  'attribute float aShine;',
  'attribute float aPhase;',
  'attribute float aSeed;',
  'uniform float uTime;',
  'uniform float uPixelRatio;',
  'uniform float uBoost;',
  'uniform float uTwinkle;',
  'uniform int uState;',        // 0 gather / 1 hold / 2 disperse
  'uniform float uK;',         // 状态内线性进度 0..1
  'varying float vAlpha;',
  'varying float vShine;',
  'varying float vCore;',
  'float smooth01(float x) { x = clamp(x, 0.0, 1.0); return x*x*(3.0-2.0*x); }',
  'void main() {',
  '  float stagger = (aSeed - 0.5) * 0.55;',
  '  vec3 p;',
  '  float k = 0.0;',
  '  if (uState == 0) {',
  '    k = smooth01(uK * 1.22 + stagger);',
  '    p = mix(aEntry, aShape, k);',
  // 飞行途中绕 y 轴卷一下：半径在 k=0.5 最大、两端归零，错峰由 aSeed 决定。
  '    float ang = k * 5.2 * (0.35 + aSeed);',
  '    float swirl = sin(k * 3.14159265) * 2.6 * (0.25 + aSeed * 0.9);',
  '    p.xz += vec2(cos(ang), sin(ang)) * swirl;',
  '    vAlpha = smooth01(k * 1.6);',
  '  } else if (uState == 2) {',
  '    k = clamp(uK * 1.22 + stagger, 0.0, 1.0);',
  '    float ke = k * k;',
  '    p = mix(aShape, aExit, ke);',
  '    float outR = ke * ke * 2.2 * (0.4 + aSeed);',
  '    p += normalize(aShape + vec3(0.0001)) * outR;',
  '    vAlpha = 1.0 - smooth01((k - 0.55) / 0.45);',
  '  } else {',
  '    p = aShape;',
  // 停留时沿造型外法线轻微呼吸 + 各自的相位漂移，点云是活的。
  '    vec3 n = normalize(aShape + vec3(0.0001));',
  '    float breathe = sin(uTime * 1.5 + aPhase) * 0.035 + sin(uTime * 0.45 + aSeed * 20.0) * 0.025;',
  '    p += n * breathe;',
  '    vAlpha = 1.0;',
  '  }',
  '  vec4 mv = modelViewMatrix * vec4(p, 1.0);',
  '  float tw = 1.0 + uTwinkle * sin(uTime * 1.9 + aPhase) * 0.45;',
  '  float boost = 1.0 + (uBoost - 1.0) * (0.55 + aShine * 0.45);',
  // 细密点阵：基础点径很小，靠密度与加法混合堆出造型；亮星略大。
  // 停留态收得更细：这一段的主角是形象图网格边，点云退成「网格上的星尘」，
  // 否则一层白雾把三角形结构整个盖住（参考图里点云根本不存在）。
  '  float settle = uState == 1 ? 0.82 : 1.0;',
  '  float size = (0.18 + aShine * 0.28) * settle * tw * boost * (46.0 / max(1.0, -mv.z)) * uPixelRatio;',
  '  gl_PointSize = size;',
  '  vShine = aShine;',
  '  vCore = clamp(aShine, 0.0, 1.0);',
  '  gl_Position = projectionMatrix * mv;',
  '}',
].join('\n');

const SHAPE_FRAG = [
  'precision mediump float;',
  'uniform vec3 uAccent;',
  'varying float vAlpha;',
  'varying float vShine;',
  'varying float vCore;',
  'void main() {',
  '  vec2 q = gl_PointCoord - vec2(0.5);',
  '  float d = length(q);',
  '  float halo = smoothstep(0.5, 0.12, d);',
  '  float core = smoothstep(0.12, 0.0, d);',
  '  float a = halo * halo * vAlpha * 0.46;',
  // 冷蓝白打底，越亮的点越往强调色（暖白/主题色）走。
  '  vec3 base = mix(vec3(0.72, 0.84, 1.0), vec3(0.96, 0.98, 1.0), 0.55 + vShine * 0.3);',
  '  vec3 col = mix(base, uAccent, clamp((vShine - 0.75) * 1.4, 0.0, 0.55));',
  '  col += core * vCore * 0.35;',
  '  gl_FragColor = vec4(col, a);',
  '}',
].join('\n');

// —— 星点 / 星云斑块 / 形象图柔光：同一套软圆斑着色器，靠 aSize/aAlpha 分流 ——
const FIELD_VERT = [
  'attribute float aSize;',
  'attribute vec3 aColor;',
  'attribute float aPhase;',
  'attribute float aAlpha;',
  'uniform float uTime;',
  'uniform float uPixelRatio;',
  'uniform float uSizeScale;',
  'uniform float uAlpha;',
  'uniform float uTwinkle;',
  'varying vec3 vColor;',
  'varying float vAlpha;',
  'void main() {',
  '  vColor = aColor;',
  '  vec4 mv = modelViewMatrix * vec4(position, 1.0);',
  '  float tw = 1.0 - uTwinkle * 0.3 * (1.0 - sin(uTime * 1.2 + aPhase));',
  '  gl_PointSize = clamp(aSize * uSizeScale * tw * (1.0 / max(1.0, -mv.z)) * uPixelRatio, 1.0, 512.0);',
  '  vAlpha = aAlpha * tw * uAlpha;',
  '  gl_Position = projectionMatrix * mv;',
  '}',
].join('\n');

const FIELD_FRAG = [
  'precision mediump float;',
  'varying vec3 vColor;',
  'varying float vAlpha;',
  'void main() {',
  '  vec2 q = gl_PointCoord - vec2(0.5);',
  '  float d = length(q);',
  // 大颗（星云斑块/柔光）用超柔边，普通星点用紧核。
  '  float halo = smoothstep(0.5, 0.0, d);',
  '  float a = halo * halo * vAlpha;',
  '  gl_FragColor = vec4(vColor, a);',
  '}',
].join('\n');

// —— 四芒星：核心 + 十字光刺 + 柔晕。大颗亮星是画面里最锋利的一层。 ——
const GLINT_VERT = [
  'attribute float aSize;',
  'attribute float aBright;',
  'attribute float aPhase;',
  'uniform float uTime;',
  'uniform float uPixelRatio;',
  'uniform float uSizeScale;',
  'uniform float uBrightness;',
  'uniform float uTwinkle;',
  'varying float vBright;',
  'void main() {',
  '  vec4 mv = modelViewMatrix * vec4(position, 1.0);',
  '  float tw = 1.0 + uTwinkle * 0.26 * sin(uTime * 1.6 + aPhase);',
  '  gl_PointSize = clamp(aSize * uSizeScale * tw * (1.0 / max(1.0, -mv.z)) * uPixelRatio, 1.0, 320.0);',
  '  vBright = aBright * uBrightness;',
  '  gl_Position = projectionMatrix * mv;',
  '}',
].join('\n');

const GLINT_FRAG = [
  'precision highp float;',
  'uniform vec3 uColor;',
  'varying float vBright;',
  'void main() {',
  '  vec2 q = gl_PointCoord - vec2(0.5);',
  '  float r = length(q);',
  '  float ax = abs(q.x);',
  '  float ay = abs(q.y);',
  // 核心 + 两条细长光刺（沿 q 的一个轴收得很紧、另一个轴放得很开）。
  '  float core = exp(-r * r * 96.0);',
  '  float sx = exp(-ax * ax * 1300.0 - ay * ay * 20.0);',
  '  float sy = exp(-ay * ay * 1300.0 - ax * ax * 20.0);',
  '  float halo = exp(-r * r * 13.0) * 0.32;',
  '  float spike = sx + sy;',
  '  float a = clamp((core + spike * 0.60 + halo) * vBright, 0.0, 1.0);',
  '  vec3 col = mix(uColor, vec3(1.0), clamp(core * 1.3 + spike * 0.55, 0.0, 1.0));',
  '  gl_FragColor = vec4(col * clamp(vBright, 0.0, 1.4), a);',
  '}',
].join('\n');

function makeShapeMaterial(THREE) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uPixelRatio: { value: 1 },
      uBoost: { value: 1 },
      uTwinkle: { value: 1 },
      uState: { value: 0 },
      uK: { value: 0 },
      uAccent: { value: new THREE.Color('#b9d3ff') },
    },
    vertexShader: SHAPE_VERT,
    fragmentShader: SHAPE_FRAG,
    transparent: true,
    depthWrite: false,
    depthTest: false,
    blending: THREE.AdditiveBlending,
  });
}

function makeFieldMaterial(THREE) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uPixelRatio: { value: 1 },
      uSizeScale: { value: 1 },
      uAlpha: { value: 1 },
      uTwinkle: { value: 1 },
    },
    vertexShader: FIELD_VERT,
    fragmentShader: FIELD_FRAG,
    transparent: true,
    depthWrite: false,
    depthTest: false,
    blending: THREE.AdditiveBlending,
  });
}

function makeGlintMaterial(THREE, color) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uPixelRatio: { value: 1 },
      uSizeScale: { value: 1 },
      uBrightness: { value: 1 },
      uTwinkle: { value: 1 },
      uColor: { value: new THREE.Color(color) },
    },
    vertexShader: GLINT_VERT,
    fragmentShader: GLINT_FRAG,
    transparent: true,
    depthWrite: false,
    depthTest: false,
    blending: THREE.AdditiveBlending,
  });
}

// 软圆斑几何（星场/星云/形象图柔光共用）：位置各是各的，色/尺寸/相位/透明
// 走 shared —— 注意共享的必须是**同一批 BufferAttribute 对象**：three 按包装
// 对象认 GPU buffer，各建一个新包装看着像共享，实际是每座多传一份。
function softGeometry(THREE, positions, shared) {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('aColor', shared.color);
  geo.setAttribute('aSize', shared.size);
  geo.setAttribute('aPhase', shared.phase);
  geo.setAttribute('aAlpha', shared.alpha);
  return geo;
}

function softAttrs(THREE, col, size, phase, alpha) {
  return {
    color: new THREE.BufferAttribute(col, 3),
    size: new THREE.BufferAttribute(size, 1),
    phase: new THREE.BufferAttribute(phase, 1),
    alpha: new THREE.BufferAttribute(alpha, 1),
  };
}

// 四芒星几何（aPhase 同样可以跨座共享）。
function glintGeometry(THREE, pos, size, bright, phase) {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
  geo.setAttribute('aBright', new THREE.BufferAttribute(bright, 1));
  geo.setAttribute('aPhase', phase);
  return geo;
}

export function createWorld(THREE, scene, opts) {
  const quality = SHAPE_COUNTS[opts.quality] ? opts.quality : 'high';
  const count = SHAPE_COUNTS[quality];
  const figureCount = FIGURE_COUNTS[quality];
  const fieldCount = FIELD_COUNTS[quality];
  const sparkleCount = SPARKLE_COUNTS[quality];
  const lowQ = quality === 'low';
  const disposables = [];

  // =========================================================================
  // 1) 天空穹顶（常驻，不受星云开关影响）
  // =========================================================================
  const skyGeo = new THREE.SphereGeometry(140, lowQ ? 40 : 64, lowQ ? 26 : 40);
  const skyMat = makeSkyMaterial(THREE, lowQ ? 2 : 4);
  const sky = new THREE.Mesh(skyGeo, skyMat);
  sky.frustumCulled = false;
  sky.renderOrder = -1000;
  scene.add(sky);
  disposables.push(skyGeo, skyMat);

  // =========================================================================
  // 2) 星场 + 星云斑块 + 星光点缀（背景星云开关控制整组）
  // =========================================================================
  const fieldGroup = new THREE.Group();
  scene.add(fieldGroup);

  const frnd = seededRandom('zodiac-field-3');
  const fieldPos = new Float32Array(fieldCount * 3);
  const fieldCol = new Float32Array(fieldCount * 3);
  const fieldSize = new Float32Array(fieldCount);
  const fieldPhase = new Float32Array(fieldCount);
  const fieldAlpha = new Float32Array(fieldCount);
  for (let i = 0; i < fieldCount; i += 1) {
    const u = frnd() * 2 - 1;
    const t = frnd() * Math.PI * 2;
    const r = 22 + Math.pow(frnd(), 0.5) * 68;
    const s = Math.sqrt(1 - u * u);
    fieldPos[i * 3] = Math.cos(t) * s * r;
    fieldPos[i * 3 + 1] = u * r * 0.8;
    fieldPos[i * 3 + 2] = Math.sin(t) * s * r;
    // 冷蓝白为主，间或一颗偏青/偏暖的白，密度与色差撑起「星光点缀」。
    // 参考图的星场是可读的「银河」而不是背景噪点，亮度整体比原来高半档。
    const tone = 0.50 + frnd() * 0.52;
    const pick = frnd();
    fieldCol[i * 3] = tone * (pick > 0.88 ? 1.0 : 0.76);
    fieldCol[i * 3 + 1] = tone * (pick > 0.5 ? 0.90 : 0.83);
    fieldCol[i * 3 + 2] = tone * (pick > 0.35 ? 1.0 : 0.92);
    // 尺寸：绝大多数是细砂，少数明显大颗（3 次幂拉开长尾）。
    fieldSize[i] = 1.0 + Math.pow(frnd(), 3.0) * 3.0;
    fieldPhase[i] = frnd() * Math.PI * 2;
    fieldAlpha[i] = 0.36 + frnd() * 0.60;
  }
  const fieldGeo = softGeometry(THREE, fieldPos,
    softAttrs(THREE, fieldCol, fieldSize, fieldPhase, fieldAlpha));
  const fieldMat = makeFieldMaterial(THREE);
  fieldMat.uniforms.uSizeScale.value = 96;
  const fieldPoints = new THREE.Points(fieldGeo, fieldMat);
  fieldPoints.frustumCulled = false;
  fieldPoints.renderOrder = -900;
  fieldGroup.add(fieldPoints);
  disposables.push(fieldGeo, fieldMat);

  const nrnd = seededRandom('zodiac-nebula-3');
  const nebulaPalette = [
    [0.30, 0.24, 0.72], [0.52, 0.28, 0.78], [0.18, 0.42, 0.78], [0.26, 0.52, 0.76],
  ];
  const nPos = new Float32Array(NEBULA * 3);
  const nCol = new Float32Array(NEBULA * 3);
  const nSize = new Float32Array(NEBULA);
  const nPhase = new Float32Array(NEBULA);
  const nAlpha = new Float32Array(NEBULA);
  for (let i = 0; i < NEBULA; i += 1) {
    const u = nrnd() * 2 - 1;
    const t = nrnd() * Math.PI * 2;
    const r = 30 + nrnd() * 48;
    const s = Math.sqrt(1 - u * u);
    nPos[i * 3] = Math.cos(t) * s * r;
    nPos[i * 3 + 1] = u * r * 0.65;
    nPos[i * 3 + 2] = Math.sin(t) * s * r;
    const c = nebulaPalette[i % nebulaPalette.length];
    const tone = 0.45 + nrnd() * 0.55;
    nCol[i * 3] = c[0] * tone; nCol[i * 3 + 1] = c[1] * tone; nCol[i * 3 + 2] = c[2] * tone;
    nSize[i] = 70 + nrnd() * 150;
    nPhase[i] = nrnd() * Math.PI * 2;
    nAlpha[i] = 0.055 + nrnd() * 0.095;
  }
  const nebulaGeo = softGeometry(THREE, nPos, softAttrs(THREE, nCol, nSize, nPhase, nAlpha));
  const nebulaMat = makeFieldMaterial(THREE);
  nebulaMat.uniforms.uSizeScale.value = 120;
  const nebulaPoints = new THREE.Points(nebulaGeo, nebulaMat);
  nebulaPoints.frustumCulled = false;
  nebulaPoints.renderOrder = -890;
  fieldGroup.add(nebulaPoints);
  disposables.push(nebulaGeo, nebulaMat);

  const srnd = seededRandom('zodiac-sparkle-3');
  const sPos = new Float32Array(sparkleCount * 3);
  const sSize = new Float32Array(sparkleCount);
  const sBright = new Float32Array(sparkleCount);
  const sPhase = new Float32Array(sparkleCount);
  for (let i = 0; i < sparkleCount; i += 1) {
    const u = srnd() * 2 - 1;
    const t = srnd() * Math.PI * 2;
    const r = 52 + srnd() * 34;
    const s = Math.sqrt(1 - u * u);
    sPos[i * 3] = Math.cos(t) * s * r;
    sPos[i * 3 + 1] = u * r * 0.85;
    sPos[i * 3 + 2] = Math.sin(t) * s * r;
    // 大颗的极少：长尾分布，避免「满天都是大星」的廉价感。
    sSize[i] = 3.0 + Math.pow(srnd(), 2.8) * 12;
    sBright[i] = 0.34 + srnd() * 0.66;
    sPhase[i] = srnd() * Math.PI * 2;
  }
  const sparkleGeo = glintGeometry(THREE, sPos, sSize, sBright,
    new THREE.BufferAttribute(sPhase, 1));
  const sparkleMat = makeGlintMaterial(THREE, '#cce6ff');
  sparkleMat.uniforms.uSizeScale.value = 260;
  const sparklePoints = new THREE.Points(sparkleGeo, sparkleMat);
  sparklePoints.frustumCulled = false;
  sparklePoints.renderOrder = -880;
  fieldGroup.add(sparklePoints);
  disposables.push(sparkleGeo, sparkleMat);

  // =========================================================================
  // 3) 逐座预建：主粒子池 + 形象图（柔光/面片/网格边）+ 星座骨架（连线/星点）
  // =========================================================================
  const root = new THREE.Group();
  scene.add(root);
  const figureGroup = new THREE.Group();
  root.add(figureGroup);

  const shapeMat = makeShapeMaterial(THREE);
  const meshMat = new THREE.MeshBasicMaterial({
    color: new THREE.Color('#4fcdf2'),
    vertexColors: true,
    transparent: true,
    opacity: 0.18,
    side: THREE.DoubleSide,
    depthTest: false,
    depthWrite: false,
    toneMapped: false,
  });
  const ribbonMat = (color, opacity) => new THREE.MeshBasicMaterial({
    color: new THREE.Color(color),
    transparent: true,
    opacity,
    side: THREE.DoubleSide,
    depthTest: false,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    toneMapped: false,
  });
  // 形象图网格边：细芯 + 宽晕两级丝带。原来是 LineBasicMaterial —— WebGL 下
  // linewidth 恒为 1px，1024 宽的舞台上那根线细到看不见，点云一盖就没了。
  // 芯色是青白（B>G>R）而不是纯白：参考图量出来线色 #afd2ef~#d5e1f5，
  // 用白色加法叠密了会整片过曝（L>235 占比一度是参考图的 5 倍）。
  const edgeCoreMat = ribbonMat('#a9dcff', 0.56);
  const edgeHaloMat = ribbonMat('#2fb9ff', 0.15);
  const nodeMat = makeFieldMaterial(THREE);
  nodeMat.uniforms.uSizeScale.value = 84;
  const haloMat = ribbonMat('#3fb9ff', 0.20);
  const coreMat = ribbonMat('#e2f5ff', 0.90);
  const hazeMat = makeFieldMaterial(THREE);
  hazeMat.uniforms.uSizeScale.value = 310;
  const discMat = makeGlintMaterial(THREE, '#dff1ff');
  discMat.uniforms.uSizeScale.value = 190;
  disposables.push(shapeMat, meshMat, edgeCoreMat, edgeHaloMat, nodeMat,
    haloMat, coreMat, hazeMat, discMat);

  const seeds = buildSeeds(count);
  const poolPhase = new Float32Array(count);
  for (let i = 0; i < count; i += 1) poolPhase[i] = seeds[i] * Math.PI * 2;
  // 与座次无关的 attribute 包一次做好，12 座共用同一批对象。
  const poolPhaseAttr = new THREE.BufferAttribute(poolPhase, 1);
  const seedAttr = new THREE.BufferAttribute(seeds, 1);

  // 形象图柔光的尺寸/亮度/相位/色与座次无关：12 套几何共享同一批 attribute，
  // 只有位置各是各的（同一片 buffer 也就只上传一次）。
  const hazeShare = (() => {
    const hr = seededRandom('zodiac-haze-1');
    const col = new Float32Array(figureCount * 3);
    const size = new Float32Array(figureCount);
    const phase = new Float32Array(figureCount);
    const alpha = new Float32Array(figureCount);
    for (let i = 0; i < figureCount; i += 1) {
      const tone = 0.55 + hr() * 0.45;
      col[i * 3] = tone * 0.52;
      col[i * 3 + 1] = tone * 0.80;
      col[i * 3 + 2] = tone * 1.0;
      // 大部分是均匀的柔雾，少数颗粒大一圈 → 半透明形象图里透出「颗粒感」。
      size[i] = 0.8 + Math.pow(hr(), 2.4) * 2.4;
      phase[i] = hr() * Math.PI * 2;
      alpha[i] = 0.020 + hr() * 0.040;
    }
    return softAttrs(THREE, col, size, phase, alpha);
  })();
  const discPhaseAttr = (() => {
    const dr = seededRandom('zodiac-disc-1');
    const phase = new Float32Array(DISC_SLOTS);
    for (let i = 0; i < DISC_SLOTS; i += 1) phase[i] = dr() * Math.PI * 2;
    return new THREE.BufferAttribute(phase, 1);
  })();
  // 网格顶点亮点的尺寸/亮度：十二座点数固定（FIGURE_MESH_POINTS），跨座共享。
  const nodeShare = (() => {
    const nr = seededRandom('zodiac-node-1');
    const col = new Float32Array(FIGURE_MESH_POINTS * 3);
    const size = new Float32Array(FIGURE_MESH_POINTS);
    const phase = new Float32Array(FIGURE_MESH_POINTS);
    const alpha = new Float32Array(FIGURE_MESH_POINTS);
    for (let i = 0; i < FIGURE_MESH_POINTS; i += 1) {
      const tone = 0.70 + nr() * 0.30;
      col[i * 3] = tone * 0.60;
      col[i * 3 + 1] = tone * 0.86;
      col[i * 3 + 2] = tone * 1.0;
      size[i] = 0.30 + Math.pow(nr(), 1.8) * 0.55;
      phase[i] = nr() * Math.PI * 2;
      alpha[i] = 0.46 + nr() * 0.40;
    }
    return softAttrs(THREE, col, size, phase, alpha);
  })();

  const pools = [];
  const hazes = [];
  const meshes = [];
  const edgeCores = [];
  const edgeHalos = [];
  const nodeSets = [];
  const halos = [];
  const cores = [];
  const discSets = [];
  const lines = [];
  const figures = [];

  for (let i = 0; i < SIGN_COUNT; i += 1) {
    const shape = buildShape(i, count);
    const clouds = [
      buildCloud(ZODIAC[i].id, count),
      buildCloud(ZODIAC[(i + 1) % SIGN_COUNT].id, count),
    ];
    const fig = buildFigureMesh(i, figureCount);
    const line = buildConstellation(i);
    figures.push(fig);
    lines.push(line);

    // 主粒子池：入场云 / 造型 / 出场云 + 亮度，一套几何一座
    const pgeo = new THREE.BufferGeometry();
    // three 的渲染入口要求几何必须带 position 属性（否则 renderBufferDirect
    // 直接跳过这个对象）；真实位置由 aEntry/aShape/aExit 在着色器里插值，这里
    // 放一片零占位移除该门槛。
    pgeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(count * 3), 3));
    pgeo.setAttribute('aEntry', new THREE.BufferAttribute(clouds[0], 3));
    pgeo.setAttribute('aShape', new THREE.BufferAttribute(shape.pos, 3));
    pgeo.setAttribute('aExit', new THREE.BufferAttribute(clouds[1], 3));
    pgeo.setAttribute('aShine', new THREE.BufferAttribute(shape.shine, 1));
    pgeo.setAttribute('aPhase', poolPhaseAttr);
    pgeo.setAttribute('aSeed', seedAttr);
    pools.push(pgeo);
    disposables.push(pgeo);

    // 形象图柔光
    const hg = softGeometry(THREE, fig.cloud, hazeShare);
    hazes.push(hg);
    disposables.push(hg);

    // 形象图网格（非索引三角面片 + 逐顶点明度）
    const mg = new THREE.BufferGeometry();
    mg.setAttribute('position', new THREE.BufferAttribute(fig.mesh.pos, 3));
    mg.setAttribute('color', new THREE.BufferAttribute(fig.mesh.tint, 3));
    meshes.push(mg);
    disposables.push(mg);

    // 网格边：细芯与宽晕两套丝带 + 顶点亮点
    const ecg = new THREE.BufferGeometry();
    ecg.setAttribute('position', new THREE.BufferAttribute(fig.edgeCore, 3));
    edgeCores.push(ecg);
    const ehg = new THREE.BufferGeometry();
    ehg.setAttribute('position', new THREE.BufferAttribute(fig.edgeHalo, 3));
    edgeHalos.push(ehg);
    const ngeo = softGeometry(THREE, fig.nodes, nodeShare);
    nodeSets.push(ngeo);
    disposables.push(ecg, ehg, ngeo);

    // 星座连线两级丝带
    const hgeo = new THREE.BufferGeometry();
    hgeo.setAttribute('position', new THREE.BufferAttribute(line.halo, 3));
    halos.push(hgeo);
    const cgeo = new THREE.BufferGeometry();
    cgeo.setAttribute('position', new THREE.BufferAttribute(line.core, 3));
    cores.push(cgeo);
    disposables.push(hgeo, cgeo);

    // 星座星点
    const dpos = new Float32Array(DISC_SLOTS * 3);
    const dsize = new Float32Array(DISC_SLOTS);
    const dbright = new Float32Array(DISC_SLOTS);
    const n = Math.min(line.nodes, DISC_SLOTS);
    for (let k = 0; k < n; k += 1) {
      dpos[k * 3] = line.x[k];
      dpos[k * 3 + 1] = line.y[k];
      dpos[k * 3 + 2] = CONSTELLATION_Z;
      // 参考图里的主星是大颗的四芒星（带一大片辉光），次星也明显可见 ——
      // 「每颗都是小圆点」是上一版最不像的地方之一。
      dsize[k] = 0.55 + line.m[k] * 1.75;
      dbright[k] = 0.55 + line.m[k] * 0.85;
    }
    const dg = glintGeometry(THREE, dpos, dsize, dbright, discPhaseAttr);
    dg.setDrawRange(0, n);
    discSets.push(dg);
    disposables.push(dg);
  }

  const points = new THREE.Points(pools[0], shapeMat);
  points.frustumCulled = false;
  points.renderOrder = -10;
  root.add(points);

  const haze = new THREE.Points(hazes[0], hazeMat);
  haze.frustumCulled = false;
  haze.renderOrder = -100;
  figureGroup.add(haze);

  const mesh = new THREE.Mesh(meshes[0], meshMat);
  mesh.frustumCulled = false;
  mesh.renderOrder = -90;
  figureGroup.add(mesh);

  const edgeHalo = new THREE.Mesh(edgeHalos[0], edgeHaloMat);
  const edgeCore = new THREE.Mesh(edgeCores[0], edgeCoreMat);
  const nodes = new THREE.Points(nodeSets[0], nodeMat);
  edgeHalo.frustumCulled = false;
  edgeCore.frustumCulled = false;
  nodes.frustumCulled = false;
  edgeHalo.renderOrder = -82;
  edgeCore.renderOrder = -80;
  nodes.renderOrder = -78;
  figureGroup.add(edgeHalo);
  figureGroup.add(edgeCore);
  figureGroup.add(nodes);

  const lineHalo = new THREE.Mesh(halos[0], haloMat);
  const lineCore = new THREE.Mesh(cores[0], coreMat);
  lineHalo.frustumCulled = false;
  lineCore.frustumCulled = false;
  lineHalo.renderOrder = 10;
  lineCore.renderOrder = 11;
  figureGroup.add(lineHalo);
  figureGroup.add(lineCore);

  const discs = new THREE.Points(discSets[0], discMat);
  discs.frustumCulled = false;
  discs.renderOrder = 12;
  figureGroup.add(discs);

  let current = -1;
  let fieldVisible = true;
  let figAlpha = 1;

  function setSign(i) {
    const idx = ((i % SIGN_COUNT) + SIGN_COUNT) % SIGN_COUNT;
    if (idx === current) return ZODIAC[idx];
    current = idx;
    points.geometry = pools[idx];
    haze.geometry = hazes[idx];
    mesh.geometry = meshes[idx];
    edgeHalo.geometry = edgeHalos[idx];
    edgeCore.geometry = edgeCores[idx];
    nodes.geometry = nodeSets[idx];
    lineHalo.geometry = halos[idx];
    lineCore.geometry = cores[idx];
    discs.geometry = discSets[idx];
    return ZODIAC[idx];
  }

  function setPixelRatio(pr) {
    shapeMat.uniforms.uPixelRatio.value = pr;
    [fieldMat, nebulaMat, hazeMat].forEach((m) => { m.uniforms.uPixelRatio.value = pr; });
    sparkleMat.uniforms.uPixelRatio.value = pr;
    discMat.uniforms.uPixelRatio.value = pr;
  }

  function setPalette(palette) {
    if (!palette || !palette.accent) return;
    shapeMat.uniforms.uAccent.value = new THREE.Color(palette.accent);
  }

  function smooth01(v) {
    const x = clamp(v);
    return x * x * (3 - 2 * x);
  }

  // 形象图/连线的出现时机：粒子把造型「拼」出来之后才显影，散开时先撤。
  function figureOpacity(state, k) {
    if (state === 'gather') return smooth01((k - 0.42) / 0.5);
    if (state === 'disperse') return 1 - smooth01(k / 0.62);
    return 1;
  }

  function update(time, ctx) {
    const c = ctx || {};
    const reduced = !!c.reduced;
    const state = c.state || 'hold';
    const k = c.k || 0;
    const bass = c.bass || 0;
    const onset = c.onset || 0;

    skyMat.uniforms.uTime.value = time;
    shapeMat.uniforms.uTime.value = time;
    shapeMat.uniforms.uBoost.value = 1 + bass * 0.6 + onset * 0.8;
    shapeMat.uniforms.uTwinkle.value = reduced ? 0.15 : 1;
    shapeMat.uniforms.uState.value = state === 'gather' ? 0 : state === 'disperse' ? 2 : 1;
    shapeMat.uniforms.uK.value = k;

    // 背景星场：只有闪烁快慢受减弱动效影响，星云与星点常驻。
    const fTw = reduced ? 0.2 : 1;
    fieldMat.uniforms.uTime.value = time;
    fieldMat.uniforms.uTwinkle.value = fTw;
    nebulaMat.uniforms.uTime.value = time;
    nebulaMat.uniforms.uTwinkle.value = fTw * 0.35;
    sparkleMat.uniforms.uTime.value = time;
    sparkleMat.uniforms.uTwinkle.value = fTw;
    sparkleMat.uniforms.uBrightness.value = 0.82 + onset * 0.3;

    // 造型自转改成「以播放时间为唯一输入」的微摆：seek 到任意时刻画面一致，
    // 暂停时真正冻结；也保证半透明的平面形象图不会转到侧棱上变成一条线。
    const sway = reduced ? 0.04 : 0.22;
    root.rotation.y = Math.sin(time * 0.30) * sway + Math.sin(time * 0.085 + 1.3) * sway * 0.34;
    root.rotation.x = Math.sin(time * 0.11) * (reduced ? 0 : 0.03);
    const pulse = 1 + onset * 0.05 + bass * 0.02;
    root.scale.setScalar(state === 'gather' ? pulse * (0.92 + k * 0.08) : pulse);

    // 形象图 / 连线：随生命周期淡入淡出（每帧只算一次，九层共用）。
    // 透明度是材质标量，改它不触发着色器重编译，逐帧写没有代价。
    figAlpha = figureOpacity(state, k);
    hazeMat.uniforms.uAlpha.value = figAlpha;
    hazeMat.uniforms.uTime.value = time;
    meshMat.opacity = 0.15 * figAlpha;
    edgeCoreMat.opacity = 0.56 * figAlpha;
    edgeHaloMat.opacity = (0.15 + bass * 0.12) * figAlpha;
    nodeMat.uniforms.uAlpha.value = figAlpha;
    nodeMat.uniforms.uTime.value = time;
    nodeMat.uniforms.uTwinkle.value = reduced ? 0.25 : 1;
    coreMat.opacity = (0.90 + bass * 0.06) * figAlpha;
    haloMat.opacity = (0.20 + bass * 0.16) * figAlpha;
    discMat.uniforms.uBrightness.value = figAlpha * (1 + onset * 0.35);
    discMat.uniforms.uTime.value = time;
    discMat.uniforms.uTwinkle.value = reduced ? 0.25 : 1;
    // 完全透明时整组跳过绘制：汇聚/散开阶段省掉九次 draw call。
    figureGroup.visible = figAlpha > 0.002;

    fieldGroup.rotation.y = time * (reduced ? 0 : 0.0022);
    fieldGroup.position.copy(c.cameraPos || { x: 0, y: 0, z: 0 });
  }

  function setFieldVisible(v) { fieldVisible = !!v; fieldGroup.visible = fieldVisible; }

  function stats() {
    return {
      signIndex: current < 0 ? 0 : current,
      sign: current < 0 ? null : ZODIAC[current].id,
      signCn: current < 0 ? null : ZODIAC[current].cn,
      signEn: current < 0 ? null : ZODIAC[current].en,
      particleCount: count,
      fieldPoints: fieldCount + NEBULA + sparkleCount,
      fieldVisible,
      figureTriangles: current < 0 ? 0 : figures[current].triangles,
      figureEdges: current < 0 ? 0 : figures[current].segmentCount,
      figurePoints: figureCount,
      figureMeshPoints: FIGURE_MESH_POINTS,
      constellationNodes: current < 0 ? 0 : lines[current].nodes,
      constellationSegments: current < 0 ? 0 : lines[current].segments,
      figureAlpha: Math.round(figAlpha * 1000) / 1000,
      sky: true,
      layers: 13,
    };
  }

  function dispose() {
    disposables.forEach((d) => { d.dispose(); });
    scene.remove(root);
    scene.remove(fieldGroup);
    scene.remove(sky);
  }

  setFieldVisible(true);

  return {
    setSign, update, dispose, stats, setPalette, setPixelRatio, setFieldVisible,
  };
}
