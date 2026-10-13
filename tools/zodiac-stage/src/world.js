// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
//
// 「星座」世界：背景星场 + 黄道环上的 12 座粒子星图 + 星座连线。
// three.js 只负责承载；星点走自定义着色器（软圆斑 + 独立闪烁相位 +
// 低频/起音增辉），连线用加法混合 LineSegments。所有几何一次性构建，
// 逐帧只改 uniform / 透明度 / 轻微姿态，不做任何增删。

import { ZODIAC, SIGN_COUNT, RING_RADIUS, localStar, ringTransform } from './zodiac.js';
import { seededRandom } from './util.js';

// 星等 → 星点基准尺寸（像素 @ 透视衰减基准）与色温。
// 主星暖白、亮星冷白、暗星偏蓝；主星额外叠一点金色高光。
const STAR_SIZE = { 1: 2.1, 2: 1.45, 3: 1.0 };
const STAR_COLOR = {
  1: [1.0, 0.95, 0.82],
  2: [0.88, 0.93, 1.0],
  3: [0.66, 0.75, 0.95],
};
const FIELD_COUNTS = { low: 1100, medium: 2000, high: 3200 };

const VERT = [
  'attribute float aSize;',
  'attribute vec3 aColor;',
  'attribute float aPhase;',
  'attribute float aGain;',
  'uniform float uTime;',
  'uniform float uPixelRatio;',
  'uniform float uBoost;',
  'uniform float uTwinkle;',
  'varying vec3 vColor;',
  'varying float vCore;',
  'void main() {',
  '  vColor = aColor;',
  '  vec4 mv = modelViewMatrix * vec4(position, 1.0);',
  '  float tw = 1.0 + uTwinkle * sin(uTime * 1.7 + aPhase) * 0.5;',
  '  float boost = 1.0 + (uBoost - 1.0) * aGain;',
  '  gl_PointSize = aSize * tw * boost * (130.0 / max(1.0, -mv.z)) * uPixelRatio;',
  '  vCore = clamp(aSize / 2.1, 0.0, 1.0);',
  '  gl_Position = projectionMatrix * mv;',
  '}',
].join('\n');

const FRAG = [
  'precision mediump float;',
  'varying vec3 vColor;',
  'varying float vCore;',
  'void main() {',
  '  vec2 q = gl_PointCoord - vec2(0.5);',
  '  float d = length(q);',
  '  float halo = smoothstep(0.5, 0.08, d);',
  '  float core = smoothstep(0.16, 0.0, d);',
  '  float a = halo * halo;',
  '  vec3 col = vColor + core * vCore * 0.6;',
  '  gl_FragColor = vec4(col, a);',
  '}',
].join('\n');

export function createWorld(THREE, scene, opts) {
  const quality = FIELD_COUNTS[opts.quality] ? opts.quality : 'high';
  const root = new THREE.Group();
  scene.add(root);

  const uniforms = {
    uTime: { value: 0 },
    uPixelRatio: { value: 1 },
    uBoost: { value: 1 },
    uTwinkle: { value: 1 },
  };
  const starMaterial = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: VERT,
    fragmentShader: FRAG,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  const geometries = [];
  const materials = [starMaterial];
  const lineMaterials = [];
  const innerGroups = [];

  // —— 背景星场：包裹机位的球壳，跟着相机平移，永远在星座环之外。 ——
  const fieldCount = FIELD_COUNTS[quality];
  const fieldGeo = new THREE.BufferGeometry();
  const fPos = new Float32Array(fieldCount * 3);
  const fCol = new Float32Array(fieldCount * 3);
  const fSize = new Float32Array(fieldCount);
  const fPhase = new Float32Array(fieldCount);
  const fGain = new Float32Array(fieldCount);
  const frnd = seededRandom('zodiac-field');
  for (let i = 0; i < fieldCount; i += 1) {
    // 均匀球面采样；半径 60..150。
    const u = frnd() * 2 - 1;
    const t = frnd() * Math.PI * 2;
    const r = 60 + Math.pow(frnd(), 0.6) * 90;
    const s = Math.sqrt(1 - u * u);
    fPos[i * 3] = Math.cos(t) * s * r;
    fPos[i * 3 + 1] = u * r;
    fPos[i * 3 + 2] = Math.sin(t) * s * r;
    const tone = 0.55 + frnd() * 0.45;
    const warm = frnd();
    fCol[i * 3] = tone * (warm > 0.82 ? 1.0 : 0.85);
    fCol[i * 3 + 1] = tone * 0.92;
    fCol[i * 3 + 2] = tone * (warm > 0.82 ? 0.8 : 1.0);
    fSize[i] = 0.55 + Math.pow(frnd(), 2.2) * 1.15;
    fPhase[i] = frnd() * Math.PI * 2;
    fGain[i] = 0.35;
  }
  fieldGeo.setAttribute('position', new THREE.BufferAttribute(fPos, 3));
  fieldGeo.setAttribute('aColor', new THREE.BufferAttribute(fCol, 3));
  fieldGeo.setAttribute('aSize', new THREE.BufferAttribute(fSize, 1));
  fieldGeo.setAttribute('aPhase', new THREE.BufferAttribute(fPhase, 1));
  fieldGeo.setAttribute('aGain', new THREE.BufferAttribute(fGain, 1));
  geometries.push(fieldGeo);
  const field = new THREE.Points(fieldGeo, starMaterial);
  field.frustumCulled = false;
  scene.add(field);

  // —— 12 座粒子星图 —— //
  let starPoints = 0;
  let lineSegments = 0;
  const accent = new THREE.Color('#9fc0ff');

  ZODIAC.forEach((sign, signIndex) => {
    const pose = ringTransform(signIndex, SIGN_COUNT, RING_RADIUS);
    const outer = new THREE.Group();
    const inner = new THREE.Group();
    const rnd = seededRandom('zodiac-pose:' + sign.id);
    outer.position.set(pose.x, (rnd() - 0.5) * 1.6, pose.z);
    // 星图平面朝向环心；每座再给一点俯仰/摇摆，环面才是立体的。
    outer.rotation.order = 'YXZ';
    outer.rotation.y = pose.angle + Math.PI;
    outer.rotation.x = (rnd() - 0.5) * 0.24;
    outer.rotation.z = (rnd() - 0.5) * 0.12;
    outer.add(inner);
    root.add(outer);
    innerGroups.push({ inner, phase: rnd() * Math.PI * 2 });

    const n = sign.stars.length;
    starPoints += n;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(n * 3);
    const col = new Float32Array(n * 3);
    const size = new Float32Array(n);
    const phase = new Float32Array(n);
    const gain = new Float32Array(n);
    for (let i = 0; i < n; i += 1) {
      const s = sign.stars[i];
      const p = localStar(s, sign.id, i);
      pos[i * 3] = p[0];
      pos[i * 3 + 1] = p[1];
      pos[i * 3 + 2] = p[2];
      const c = STAR_COLOR[s[2] || 2] || STAR_COLOR[2];
      col[i * 3] = c[0]; col[i * 3 + 1] = c[1]; col[i * 3 + 2] = c[2];
      size[i] = STAR_SIZE[s[2] || 2] || STAR_SIZE[2];
      phase[i] = (i * 1.7 + signIndex * 0.9) % (Math.PI * 2);
      gain[i] = 1.0;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('aColor', new THREE.BufferAttribute(col, 3));
    geo.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
    geo.setAttribute('aPhase', new THREE.BufferAttribute(phase, 1));
    geo.setAttribute('aGain', new THREE.BufferAttribute(gain, 1));
    geometries.push(geo);
    const points = new THREE.Points(geo, starMaterial);
    points.frustumCulled = false;
    inner.add(points);

    // 连线：每条线段两个端点，颜色按端点复制。
    const links = sign.links || [];
    lineSegments += links.length;
    const lineGeo = new THREE.BufferGeometry();
    const lp = new Float32Array(links.length * 2 * 3);
    const lc = new Float32Array(links.length * 2 * 3);
    const hueColor = accent.clone();
    hueColor.offsetHSL((signIndex / SIGN_COUNT) * 0.12 - 0.06, 0, (rnd() - 0.5) * 0.08);
    links.forEach((link, li) => {
      for (let e = 0; e < 2; e += 1) {
        const p = localStar(sign.stars[link[e]], sign.id, link[e]);
        const o = (li * 2 + e) * 3;
        lp[o] = p[0]; lp[o + 1] = p[1]; lp[o + 2] = p[2];
        lc[o] = hueColor.r; lc[o + 1] = hueColor.g; lc[o + 2] = hueColor.b;
      }
    });
    lineGeo.setAttribute('position', new THREE.BufferAttribute(lp, 3));
    lineGeo.setAttribute('color', new THREE.BufferAttribute(lc, 3));
    geometries.push(lineGeo);
    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    materials.push(lineMat);
    lineMaterials.push(lineMat);
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    lines.frustumCulled = false;
    inner.add(lines);
  });

  let linesVisible = true;
  let fieldVisible = true;

  function setPalette(palette) {
    if (!palette || !palette.accent) return;
    const base = new THREE.Color(palette.accent);
    lineMaterials.forEach((m, i) => {
      const c = base.clone();
      c.offsetHSL((i / SIGN_COUNT) * 0.12 - 0.06, 0, 0);
      m.color.copy(c);
    });
  }

  function setPixelRatio(pr) { uniforms.uPixelRatio.value = pr; }

  function update(time, ctx) {
    const c = ctx || {};
    const bass = c.bass || 0;
    const onset = c.onset || 0;
    uniforms.uTime.value = time;
    uniforms.uBoost.value = 1 + bass * 0.7 + onset * 0.8;
    uniforms.uTwinkle.value = c.reduced ? 0 : 1;
    const pulse = 1 + onset * 0.04 + bass * 0.015;
    innerGroups.forEach((item) => {
      item.inner.scale.setScalar(pulse);
      item.inner.rotation.z = Math.sin(time * 0.2 + item.phase) * (c.reduced ? 0 : 0.02);
    });
    const lineOpacity = linesVisible ? 0.2 + bass * 0.3 + onset * 0.24 : 0;
    lineMaterials.forEach((m) => { m.opacity = lineOpacity; });
    field.rotation.y = time * (c.reduced ? 0 : 0.003);
    field.rotation.x = Math.sin(time * 0.02) * (c.reduced ? 0 : 0.02);
  }

  function setCameraPos(v) { field.position.copy(v); }
  function setLinesVisible(v) { linesVisible = !!v; lineMaterials.forEach((m) => { m.visible = linesVisible; }); }
  function setFieldVisible(v) { fieldVisible = !!v; field.visible = fieldVisible; }

  function stats() {
    return {
      starPoints,
      fieldPoints: fieldCount,
      lineSegments,
      linesVisible,
      fieldVisible,
      geometries: geometries.length,
      textures: 0,
    };
  }

  function dispose() {
    geometries.forEach((g) => g.dispose());
    materials.forEach((m) => m.dispose());
    scene.remove(root);
    scene.remove(field);
  }

  setLinesVisible(true);
  setFieldVisible(true);

  return {
    update, dispose, stats, setPalette, setPixelRatio, setCameraPos,
    setLinesVisible, setFieldVisible,
  };
}
