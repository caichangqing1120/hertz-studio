// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
//
// 最小世界：夜空（穹顶/星点/银河/月轮）+ 直线铁轨（钢轨/枕木/电线杆/接触网）
// + 镜面浅水（镜像相机反射 RT + 频谱涟漪）。
//
// 「镜面水」是镜台的签名：歌词与星空都要落进水里。反射用教科书式的平面镜像
// 相机（位置/注视点对水面取反）渲染进 RT，水面着色器按屏幕 UV 采样并做涟漪
// 扰动；低画质档直接关掉 RT，用解析天色近似。轨道是直线，所以钢轨/枕木/
// 电线杆/接触网全部静态实例化 —— 稳态下没有任何逐帧 buffer 更新。
//
// 场景内容按 world.groups 注册表组织：后续搬运站台建筑群、动物奇遇、烟花时
// 各自加组即可，不动其它模块（见设计文档 §6 扩展路线）。

import * as THREE from 'three';
import { clamp, damp, seededRandom } from './util.js';

const TRACK_LEN = 7200;        // 铁轨总长（米），覆盖最长歌曲的行程
const TRACK_START = 60;        // 铁轨向 +Z 延伸的余量（回头看不穿帮）
const SLEEPER_GAP = 0.68;      // 枕木间距
const POLE_GAP = 46;           // 电线杆间距
const POLE_X = 3.7;            // 电线杆横向位置（右侧）
const SKY_R = 2400;            // 天穹半径（大于水面可视距离）
const STAR_R = 2100;
const FAR = 2700;

const PALETTE_DEFAULT = {
  background: '#0a101d',
  accent: '#f2a900',
  secondary: '#76bfae',
  ink: '#f2f0e9',
};

// 镜像相机反射 + 水面。反射 RT 与画布同分辨率（低档关闭）——镜面占半个
// 屏幕，RT 一缩水整个水面都是拉伸的糊斑，这里不省这块显存。
function createWater(THREE, quality) {
  const reflScale = quality === 'high' ? 1.0 : quality === 'medium' ? 0.85 : 0;
  const rt = reflScale > 0
    ? new THREE.WebGLRenderTarget(640, 360, { depthBuffer: true })
    : null;
  const uniforms = {
    tRefl: { value: rt ? rt.texture : null },
    uHasRefl: { value: rt ? 1 : 0 },
    uResolution: { value: new THREE.Vector2(1280, 720) },
    uTime: { value: 0 },
    uEnergy: { value: 0 },
    uOnset: { value: 0 },
    uAccent: { value: new THREE.Color(PALETTE_DEFAULT.accent) },
    uDeep: { value: new THREE.Color('#050a14') },
    uHorizon: { value: new THREE.Color('#101a2c') },
    uZenith: { value: new THREE.Color('#04070f') },
    uMoonXZ: { value: new THREE.Vector2(0.4, -0.9).normalize() },
    uMoonTint: { value: new THREE.Color('#bcd2ff') },
    uCamPos: { value: new THREE.Vector3() },
    uFade: { value: new THREE.Vector2(180, 1500) },
  };
  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: `
      varying vec3 vWorld;
      void main(){
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        gl_Position = projectionMatrix * viewMatrix * world;
      }`,
    fragmentShader: `
      uniform sampler2D tRefl;
      uniform float uHasRefl, uTime, uEnergy, uOnset;
      uniform vec2 uResolution, uMoonXZ, uFade;
      uniform vec3 uAccent, uDeep, uHorizon, uZenith, uMoonTint, uCamPos;
      varying vec3 vWorld;
      void main(){
        vec2 suv = gl_FragCoord.xy / uResolution;
        // 涟漪：三个不可公度的正弦叠加，能量抬振幅；只扰动采样 UV，不动顶点。
        // 扰动幅度压得很小 —— 镜面要能读出倒影，波纹只是让它活着。
        float ripple = sin(vWorld.z * 0.55 + uTime * 1.15) * 0.5
            + sin(vWorld.x * 0.85 - uTime * 0.8) * 0.3
            + sin((vWorld.x + vWorld.z) * 0.23 + uTime * 0.47) * 0.2;
        vec2 distort = vec2(ripple, sin(vWorld.x * 0.4 + uTime * 0.6) * 0.6)
            * (0.0018 + uEnergy * 0.006);
        vec3 refl;
        if (uHasRefl > 0.5) {
          refl = texture2D(tRefl, clamp(suv + distort, vec2(0.001), vec2(0.999))).rgb;
        } else {
          // 低画质兜底：按屏幕高度近似镜像天色（地平线在画面中线附近）。
          refl = mix(uHorizon, uZenith, clamp((0.98 - suv.y) * 1.6, 0.0, 1.0)) * 0.75;
        }
        vec3 V = normalize(vWorld - uCamPos);
        float grazing = pow(clamp(1.0 - max(-V.y, 0.0), 0.0, 1.0), 2.0);
        vec3 col = mix(uDeep, refl, clamp(0.42 + 0.58 * grazing, 0.0, 1.0));
        // 星光碎闪：稀疏网格驻点（~3% 格子）+ 距离衰减 —— 镜面上的零星反光，
        // 不是波点场；起音时整片轻微提亮。
        vec2 cell = floor(vWorld.xz * 0.22);
        vec2 fp = fract(vWorld.xz * 0.22) - 0.5;
        float rnd = fract(sin(dot(cell, vec2(127.1, 311.7))) * 43758.5453);
        float sparkle = step(0.965, rnd) * exp(-dot(fp, fp) * 26.0);
        float dist = length(vWorld.xz - uCamPos.xz);
        sparkle *= exp(-dist * 0.003);
        col += uAccent * sparkle * (0.10 + uOnset * 0.45) * (0.3 + uEnergy);
        // 月光水路：朝月位方向的细长高光带。
        vec2 toPt = vWorld.xz - uCamPos.xz;
        float along = length(toPt) > 0.5 ? dot(normalize(toPt), uMoonXZ) : 0.0;
        col += uMoonTint * pow(clamp(along, 0.0, 1.0), 60.0) * 0.20 * grazing;
        col = mix(col, uHorizon, smoothstep(uFade.x, uFade.y, dist));
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(7600, 7600), material);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = 0;
  mesh.renderOrder = -1;
  return { mesh, rt, uniforms, enabled: !!rt, reflScale };
}

function createSky(THREE) {
  const group = new THREE.Group();
  const uniforms = {
    uHorizon: { value: new THREE.Color('#101a2c') },
    uZenith: { value: new THREE.Color('#04070f') },
    uAccent: { value: new THREE.Color(PALETTE_DEFAULT.accent) },
    uEnergy: { value: 0 },
  };
  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(SKY_R, 32, 18),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms,
      vertexShader: `
        varying vec3 vDir;
        void main(){
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `
        uniform vec3 uHorizon, uZenith, uAccent;
        uniform float uEnergy;
        varying vec3 vDir;
        void main(){
          float h = clamp(vDir.y, -0.25, 1.0);
          vec3 col = mix(uHorizon, uZenith, smoothstep(0.02, 0.5, h));
          // 地平线下的「远处水雾」与水面淡出同色，接缝不可见。
          col = mix(col, uHorizon * 0.85, smoothstep(0.0, -0.2, h));
          // 地平线上方一线暖色城市余光，随能量轻微呼吸。
          col += uAccent * 0.085 * exp(-abs(h - 0.03) * 22.0) * (1.0 + uEnergy * 0.6);
          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
    }),
  );
  dome.renderOrder = -2;
  group.add(dome);

  // 星点：上半球均匀撒 + 各自相位闪烁 + 色温离散（偏蓝的年轻星 / 偏暖的老星）。
  const starCount = 1500;
  const starPos = new Float32Array(starCount * 3);
  const starPhase = new Float32Array(starCount);
  const starSize = new Float32Array(starCount);
  let seeded = 12345;
  const rand = () => {
    // 线性同余：星野不需要密码学随机，但要跨会话一致。
    seeded = (Math.imul(seeded, 1664525) + 1013904223) >>> 0;
    return seeded / 4294967296;
  };
  for (let i = 0; i < starCount; i += 1) {
    // 球面均匀采样，y 压到上半球再抬一手（星星在地平线附近更密更好看）。
    const u = rand() * 2 - 1;
    const theta = rand() * Math.PI * 2;
    const r = Math.sqrt(1 - u * u);
    let y = Math.abs(u);
    y = Math.pow(y, 0.72); // 地平线附近密度抬升
    const rr = Math.sqrt(Math.max(0, 1 - y * y));
    starPos[i * 3] = Math.cos(theta) * rr * STAR_R;
    starPos[i * 3 + 1] = y * STAR_R;
    starPos[i * 3 + 2] = Math.sin(theta) * rr * STAR_R;
    starPhase[i] = rand() * 6.283;
    starSize[i] = 1.4 + rand() * 2.2;
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  starGeo.setAttribute('aPhase', new THREE.BufferAttribute(starPhase, 1));
  starGeo.setAttribute('aSize', new THREE.BufferAttribute(starSize, 1));
  const starMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, fog: false,
    uniforms,
    vertexShader: `
      attribute float aPhase, aSize;
      uniform float uEnergy;
      varying float vAlpha;
      varying float vWarm;
      void main(){
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        float tw = 0.72 + 0.28 * sin(aPhase + uEnergy * 3.0);
        vAlpha = tw;
        vWarm = step(0.62, fract(aPhase * 0.159));
        gl_PointSize = aSize * tw * 2.6;
      }`,
    fragmentShader: `
      varying float vAlpha;
      varying float vWarm;
      void main(){
        vec2 p = gl_PointCoord * 2.0 - 1.0;
        float a = exp(-dot(p, p) * 3.2) * vAlpha;
        vec3 col = mix(vec3(0.78, 0.85, 1.0), vec3(1.0, 0.9, 0.78), vWarm);
        gl_FragColor = vec4(col * a * 1.25, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const stars = new THREE.Points(starGeo, starMat);
  group.add(stars);

  // 银河：沿一条倾斜大圆撒的暗星带 + 少量亮核。
  const milkyCount = 2600;
  const milkyPos = new Float32Array(milkyCount * 3);
  const milkyAlpha = new Float32Array(milkyCount);
  for (let i = 0; i < milkyCount; i += 1) {
    const along = rand() * Math.PI * 2;
    const off = (rand() + rand() + rand() - 1.5) * 0.16; // 高斯散布
    // 大圆：绕 x 轴倾斜 62° 的赤道带。
    const c = Math.cos(along);
    const s = Math.sin(along);
    const tilt = 62 * Math.PI / 180;
    let x = c, y = Math.sin(off) , z = s;
    const y2 = y * Math.cos(tilt) - z * Math.sin(tilt);
    const z2 = y * Math.sin(tilt) + z * Math.cos(tilt);
    const r = STAR_R * (0.92 + rand() * 0.08);
    milkyPos[i * 3] = x * r;
    milkyPos[i * 3 + 1] = Math.abs(y2) * r;
    milkyPos[i * 3 + 2] = z2 * r;
    milkyAlpha[i] = 0.09 + rand() * 0.16;
  }
  const milkyGeo = new THREE.BufferGeometry();
  milkyGeo.setAttribute('position', new THREE.BufferAttribute(milkyPos, 3));
  milkyGeo.setAttribute('aAlpha', new THREE.BufferAttribute(milkyAlpha, 1));
  const milkyMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, fog: false,
    vertexShader: `
      attribute float aAlpha;
      varying float vAlpha;
      void main(){
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        vAlpha = aAlpha;
        gl_PointSize = 1.7;
      }`,
    fragmentShader: `
      varying float vAlpha;
      void main(){
        vec2 p = gl_PointCoord * 2.0 - 1.0;
        float a = exp(-dot(p, p) * 2.6) * vAlpha;
        gl_FragColor = vec4(vec3(0.72, 0.78, 0.95) * a, a);
      }`,
  });
  group.add(new THREE.Points(milkyGeo, milkyMat));

  // 月轮 + 月晕（sprite 软光斑）。
  const moonAzimuth = 0.62;   // 弧度，前方偏左
  const moonElevation = 0.42; // 弧度
  const moonDir = new THREE.Vector3(
    Math.sin(moonAzimuth) * Math.cos(moonElevation),
    Math.sin(moonElevation),
    -Math.cos(moonAzimuth) * Math.cos(moonElevation),
  ).normalize();
  const glowCanvas = document.createElement('canvas');
  glowCanvas.width = glowCanvas.height = 128;
  const gctx = glowCanvas.getContext('2d');
  const grad = gctx.createRadialGradient(64, 64, 8, 64, 64, 64);
  grad.addColorStop(0, 'rgba(224,236,255,0.95)');
  grad.addColorStop(0.2, 'rgba(196,214,255,0.42)');
  grad.addColorStop(0.55, 'rgba(160,185,235,0.12)');
  grad.addColorStop(1, 'rgba(150,180,230,0)');
  gctx.fillStyle = grad;
  gctx.fillRect(0, 0, 128, 128);
  const glowTex = new THREE.CanvasTexture(glowCanvas);
  glowTex.colorSpace = THREE.SRGBColorSpace;
  const moon = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTex, transparent: true, depthWrite: false, fog: false,
    blending: THREE.AdditiveBlending,
  }));
  moon.position.copy(moonDir).multiplyScalar(STAR_R * 0.94);
  moon.scale.setScalar(430);
  group.add(moon);

  return { group, uniforms, moonDir, moon };
}

function createTrack(THREE, palette) {
  const group = new THREE.Group();
  const dark = new THREE.MeshStandardMaterial({ color: 0x241d18, roughness: 0.92, metalness: 0.05 });
  const railMat = new THREE.MeshStandardMaterial({ color: 0x8a939e, roughness: 0.38, metalness: 0.85 });
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x151a20, roughness: 0.8, metalness: 0.3 });

  // 钢轨：两根通长方钢（直轨 ⇒ 静态）。
  const railGeo = new THREE.BoxGeometry(0.085, 0.14, TRACK_LEN + TRACK_START);
  for (const side of [-1, 1]) {
    const rail = new THREE.Mesh(railGeo, railMat);
    rail.position.set(side * 0.72, 0.12, -(TRACK_LEN / 2) + TRACK_START / 2);
    group.add(rail);
  }

  // 枕木：沿全线实例化。
  const sleeperCount = Math.floor((TRACK_LEN + TRACK_START) / SLEEPER_GAP);
  const sleepers = new THREE.InstancedMesh(
    new THREE.BoxGeometry(2.3, 0.09, 0.24), dark, sleeperCount);
  const m = new THREE.Matrix4();
  for (let i = 0; i < sleeperCount; i += 1) {
    m.makeTranslation(0, 0.045, TRACK_START / 2 - i * SLEEPER_GAP);
    sleepers.setMatrixAt(i, m);
  }
  sleepers.instanceMatrix.needsUpdate = true;
  group.add(sleepers);

  // 电线杆 + 横担 + 接触网（带垂度的折线段）。
  const poleCount = Math.floor(TRACK_LEN / POLE_GAP);
  const poles = new THREE.InstancedMesh(
    new THREE.BoxGeometry(0.15, 5.7, 0.15), poleMat, poleCount);
  const arms = new THREE.InstancedMesh(
    new THREE.BoxGeometry(1.75, 0.09, 0.09), poleMat, poleCount);
  const wirePts = [];
  for (let i = 0; i < poleCount; i += 1) {
    const z = -i * POLE_GAP + 8;
    m.makeTranslation(POLE_X, 2.85, z);
    poles.setMatrixAt(i, m);
    m.makeTranslation(POLE_X - 0.35, 5.42, z);
    arms.setMatrixAt(i, m);
    if (i > 0) {
      const zPrev = -(i - 1) * POLE_GAP + 8;
      const steps = 8;
      for (let s = 0; s < steps; s += 1) {
        const t0 = s / steps;
        const t1 = (s + 1) / steps;
        const sag0 = Math.sin(t0 * Math.PI) * -0.34;
        const sag1 = Math.sin(t1 * Math.PI) * -0.34;
        wirePts.push(POLE_X - 0.35, 5.32 + sag0, lerpZ(zPrev, z, t0));
        wirePts.push(POLE_X - 0.35, 5.32 + sag1, lerpZ(zPrev, z, t1));
      }
    }
  }
  poles.instanceMatrix.needsUpdate = true;
  arms.instanceMatrix.needsUpdate = true;
  group.add(poles, arms);
  const wireGeo = new THREE.BufferGeometry();
  wireGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(wirePts), 3));
  group.add(new THREE.LineSegments(wireGeo, new THREE.LineBasicMaterial({
    color: 0x0c1218, transparent: true, opacity: 0.85,
  })));
  return { group };
}

function lerpZ(a, b, t) { return a + (b - a) * t; }

// —— 沿线站台建筑群 ——
// 参照镜台方向的「四类建筑组合」里的两类做独立简化实现：有顶候车月台
// （板/柱/棚/檐下灯带/长椅，含缺失变化）与临水阶梯（踏步/栏柱/灯杆）。
// 直线轨道 ⇒ 全部静态 InstancedMesh（每个部件一张表，整机 ~8 个 draw call），
// 稳态零逐帧更新。灯带只做自发光（参照项目同样不为站台加真实点光），
// 亮度交给泛光与水面反射。
function createStations(THREE, opts = {}) {
  const rnd = seededRandom(opts.seed || 'diorama-stations');
  const placements = [];
  let z = -200;
  let side = 1;
  for (let i = 0; i < 16; i += 1) {
    // 前段密（歌的大部分时间在前 2km）、后段疏，站台交替换边。
    z -= (i < 5 ? 250 : 330) + rnd() * (i < 5 ? 170 : 260);
    if (-z > TRACK_LEN - 200) break;
    side = -side;
    placements.push({ z, side: side * (1 - rnd() * 0.14), type: rnd() < 0.62 ? 'platform' : 'steps' });
  }

  // 第一遍：数清每个部件需要多少实例。
  const need = { slab: 0, canopy: 0, pillar: 0, strip: 0, bench: 0, step: 0, post: 0, pole: 0, lamp: 0 };
  const layouts = placements.map((p) => {
    const r = seededRandom(`${opts.seed || 'diorama-stations'}:${p.z.toFixed(0)}`);
    const l = { ...p, parts: { slab: [], canopy: [], pillar: [], strip: [], bench: [], step: [], post: [], pole: [], lamp: [] } };
    const x = p.side * (8.3 + r() * 1.9);
    if (p.type === 'platform') {
      const w = 9 + r() * 2.2;
      l.parts.slab.push([x, 0.5, p.z, w, 0.5, 3.2]);
      l.parts.canopy.push([x, 3.46, p.z, w + 1.2, 0.14, 3.8]);
      for (const px of [-1, 1]) for (const pz of [-1, 1]) {
        if (r() < 0.08) continue; // 缺柱变化
        l.parts.pillar.push([x + px * (w / 2 - 0.7), 2.1, p.z + pz * 1.15, 0.16, 2.6, 0.16]);
      }
      l.parts.strip.push([x, 3.3, p.z, w - 0.4, 0.07, 0.18]);
      for (const bz of [-1, 1]) {
        if (r() < 0.2) continue; // 缺长椅变化
        l.parts.bench.push([x + p.side * 1.0, 1.02, p.z + bz * 0.85, 1.9, 0.42, 0.5]);
      }
    } else {
      for (let s = 0; s < 5; s += 1) {
        l.parts.step.push([x - p.side * s * 0.62, 0.72 - s * 0.15, p.z, 2.7, 0.22, 1.1]);
      }
      for (const sz of [-1.4, 0, 1.4]) {
        if (r() < 0.14) continue; // 缺栏柱变化
        l.parts.post.push([x + p.side * 1.15, 1.1, p.z + sz, 0.08, 0.85, 0.08]);
      }
      l.parts.pole.push([x + p.side * 2.0, 1.4, p.z + 2.2, 0.1, 2.9, 0.1]);
      l.parts.lamp.push([x + p.side * 2.0, 2.92, p.z + 2.2, 0.34, 0.14, 0.34]);
    }
    for (const k of Object.keys(need)) need[k] += l.parts[k].length;
    return l;
  });

  const group = new THREE.Group();
  const m = new THREE.Matrix4();
  const build = (geo, mat, key) => {
    if (!need[key]) return;
    const inst = new THREE.InstancedMesh(geo, mat, need[key]);
    let n = 0;
    for (const l of layouts) {
      for (const [px, py, pz, sx, sy, sz] of l.parts[key]) {
        m.makeScale(sx, sy, sz);
        m.setPosition(px, py, pz);
        inst.setMatrixAt(n, m);
        n += 1;
      }
    }
    inst.instanceMatrix.needsUpdate = true;
    inst.count = n;
    group.add(inst);
  };
  const concrete = new THREE.MeshStandardMaterial({ color: 0x1b2129, roughness: 0.88, metalness: 0.12 });
  const wood = new THREE.MeshStandardMaterial({ color: 0x2a231a, roughness: 0.92, metalness: 0.05 });
  const canopyMat = new THREE.MeshStandardMaterial({ color: 0x12181f, roughness: 0.6, metalness: 0.45 });
  const stripMat = new THREE.MeshStandardMaterial({
    color: 0x0a0a08, emissive: 0xffd9a0, emissiveIntensity: 2.6, roughness: 0.5,
  });
  const lampMat = new THREE.MeshStandardMaterial({
    color: 0x0a0a08, emissive: 0xffe2b0, emissiveIntensity: 2.2, roughness: 0.5,
  });
  build(new THREE.BoxGeometry(1, 1, 1), concrete, 'slab');
  build(new THREE.BoxGeometry(1, 1, 1), concrete, 'pillar');
  build(new THREE.BoxGeometry(1, 1, 1), canopyMat, 'canopy');
  build(new THREE.BoxGeometry(1, 1, 1), stripMat, 'strip');
  build(new THREE.BoxGeometry(1, 1, 1), wood, 'bench');
  build(new THREE.BoxGeometry(1, 1, 1), concrete, 'step');
  build(new THREE.BoxGeometry(1, 1, 1), poleMat2(), 'post');
  build(new THREE.BoxGeometry(1, 1, 1), poleMat2(), 'pole');
  build(new THREE.BoxGeometry(1, 1, 1), lampMat, 'lamp');
  return { group, count: layouts.length, addresses: layouts.map((l) => -l.z) };
}

function poleMat2() {
  return new THREE.MeshStandardMaterial({ color: 0x10151b, roughness: 0.82, metalness: 0.3 });
}

// —— 地平线剪影：远山脊线（参照「地平线剪影」）——
// 圆筒侧壁顶边按 seeded 噪声起伏，底边没入水下；比天穹近、比水面淡出远，
// 骑在地平线上给夜行一个「远方有陆」的层次。
function createRidge(THREE) {
  const R = 2240;
  const geo = new THREE.CylinderGeometry(R, R, 1, 128, 1, true);
  const p1 = seededRandom('ridge')() * 6.283;
  const p2 = seededRandom('ridge2')() * 6.283;
  const p3 = seededRandom('ridge3')() * 6.283;
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i += 1) {
    const y = pos.getY(i);
    if (y > 0) {
      const ang = Math.atan2(pos.getX(i), pos.getZ(i));
      // 脊线压在 ~0.35° 视角内：一条细远的暗剪影，不是一面墙。
      const h = 9 + 5 * Math.sin(ang * 3.1 + p1) + 3 * Math.sin(ang * 7.3 + p2) + 1.8 * Math.sin(ang * 13.7 + p3);
      pos.setY(i, h);
    } else {
      pos.setY(i, -12);
    }
  }
  geo.computeVertexNormals();
  const mat = new THREE.MeshBasicMaterial({ color: 0x060b13, side: THREE.BackSide, fog: false });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.y = 0;
  mesh.renderOrder = -1;
  return { group: mesh };
}

// —— 流星奇遇（参照「流星、远方烟花」事件的最小子集）——
// 六条 seeded 流星：绝对时间求值（fract 循环 + 长空窗），顶点着色器算头尾，
// 一条 LineSegments 一张 draw call；暂停随 uTime 冻结。
function createMeteors(THREE) {
  const COUNT = 6;
  const positions = new Float32Array(COUNT * 2 * 3);
  const aMeteor = new Float32Array(COUNT * 2);
  const aEnd = new Float32Array(COUNT * 2);
  for (let i = 0; i < COUNT; i += 1) {
    for (const e of [0, 1]) {
      const k = i * 2 + e;
      positions[k * 3] = 0;
      positions[k * 3 + 1] = 0;
      positions[k * 3 + 2] = 0;
      aMeteor[k] = i;
      aEnd[k] = e;
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('aMeteor', new THREE.BufferAttribute(aMeteor, 1));
  geo.setAttribute('aEnd', new THREE.BufferAttribute(aEnd, 1));
  const uniforms = { uTime: { value: 0 } };
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, fog: false, blending: THREE.AdditiveBlending,
    uniforms,
    vertexShader: `
      attribute float aMeteor, aEnd;
      uniform float uTime;
      varying float vA;
      float hash1(float n){ return fract(sin(n * 127.1) * 43758.5453); }
      void main(){
        float seed = aMeteor + 1.0;
        float cycle = 26.0 + hash1(seed) * 24.0;
        float phase = hash1(seed * 1.7) * cycle;
        float p = fract((uTime - phase) / cycle);
        // 每周期只在开头 ~1.4s 可见：切入快、切出略慢（余迹消散）。
        vA = smoothstep(0.0, 0.018, p) * (1.0 - smoothstep(0.035, 0.058, p));
        float ang = hash1(seed * 2.3) * 6.283;
        float ox = (hash1(seed * 3.1) * 2.0 - 1.0) * 1300.0;
        float oz = -500.0 - hash1(seed * 4.7) * 1500.0;
        float oy = 420.0 + hash1(seed * 5.9) * 300.0;
        vec2 dir = normalize(vec2(cos(ang) * 0.4, -0.55));
        float travel = (240.0 + hash1(seed * 6.3) * 160.0) * p;
        vec3 head = vec3(ox + dir.x * travel, oy + dir.y * travel, oz + dir.x * travel * 0.4);
        vec3 tail = head - vec3(dir.x, dir.y, dir.x * 0.4) * 70.0 * (1.0 - p * 2.5);
        vec3 world = mix(head, tail, aEnd);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(world, 1.0);
        gl_PointSize = 1.0;
      }`,
    fragmentShader: `
      varying float vA;
      void main(){
        gl_FragColor = vec4(vec3(0.82, 0.89, 1.0) * vA * 1.6, vA);
      }`,
  });
  const mesh = new THREE.LineSegments(geo, mat);
  mesh.frustumCulled = false;
  return { group: mesh, uniforms };
}

// 组装整个世界。quality: 'low' | 'medium' | 'high'。
export function createWorld(THREE, scene, opts = {}) {
  const quality = opts.quality || 'high';
  const dims = { width: opts.width || 1280, height: opts.height || 720 };
  const water = createWater(THREE, quality);
  const sky = createSky(THREE);
  const track = createTrack(THREE);
  const stations = createStations(THREE, { seed: opts.seed });
  const ridge = createRidge(THREE);
  const meteors = createMeteors(THREE);

  const groups = {
    sky: sky.group,
    track: track.group,
    water: water.mesh,
    stations: stations.group,
    ridge: ridge.group,
    meteors: meteors.group,
  };
  scene.add(groups.sky, groups.track, groups.water, groups.stations, groups.ridge, groups.meteors);

  const hemi = new THREE.HemisphereLight(0x24365a, 0x05070c, 0.72);
  const moonLight = new THREE.DirectionalLight(0xaac4ff, 0.72);
  moonLight.position.copy(sky.moonDir).multiplyScalar(100);
  // 车头灯：跟随相机的暖色点光，给近处轨面与牌面一点「有人在夜里赶路」的温度。
  const headlight = new THREE.PointLight(0xffd9a0, 85, 60, 1.8);
  scene.add(hemi, moonLight, headlight);

  const mirrorCam = new THREE.PerspectiveCamera(48, 16 / 9, 0.1, FAR);
  const env = { energy: 0, onset: 0 };

  const world = {
    groups,
    skyDir: sky.moonDir,
    quality,
    reflectionEnabled: water.enabled && opts.reflection !== false,

    setPalette(p = {}) {
      const accent = new THREE.Color(p.accent || PALETTE_DEFAULT.accent);
      const horizon = new THREE.Color(p.background || PALETTE_DEFAULT.background)
        .lerp(new THREE.Color(p.secondary || '#76bfae'), 0.08)
        .multiplyScalar(2.1);
      const zenith = new THREE.Color(p.background || PALETTE_DEFAULT.background).multiplyScalar(0.45);
      const deep = new THREE.Color(p.background || PALETTE_DEFAULT.background).multiplyScalar(0.5);
      for (const target of [water.uniforms.uHorizon.value, sky.uniforms.uHorizon.value]) target.copy(horizon);
      for (const target of [water.uniforms.uZenith.value, sky.uniforms.uZenith.value]) target.copy(zenith);
      water.uniforms.uDeep.value.copy(deep);
      water.uniforms.uAccent.value.copy(accent);
      water.uniforms.uMoonXZ.value.set(sky.moonDir.x, sky.moonDir.z).normalize();
      sky.uniforms.uAccent.value.copy(accent);
    },

    // 每帧：包络推进 + 天空/水 uniform + 车头灯跟随。time 为播放时间（秒），
    // 暂停时 time 不前进，只有包络按真实 dt 回落（画面静止但光会暗下去）。
    update(dt, time, pose, audio, prefs) {
      const playing = !!audio.playing;
      const moving = !prefs.reduced && playing;
      const targetEnergy = moving ? audio.energy : 0;
      env.energy = damp(env.energy, targetEnergy, moving ? 0.35 : 0.8, dt);
      env.onset = damp(env.onset, moving && audio.onset ? 1 : 0, audio.onset ? 0.05 : 0.24, dt);
      sky.group.position.set(pose.position.x, 0, pose.position.z);
      sky.uniforms.uEnergy.value = env.energy;
      meteors.uniforms.uTime.value = moving ? time : meteors.uniforms.uTime.value;
      water.uniforms.uTime.value = moving ? time : water.uniforms.uTime.value;
      water.uniforms.uEnergy.value = env.energy;
      water.uniforms.uOnset.value = env.onset;
      water.uniforms.uCamPos.value.set(pose.position.x, pose.position.y, pose.position.z);
      water.uniforms.uResolution.value.set(dims.width, dims.height);
      headlight.position.set(pose.position.x + (pose.look.x - pose.position.x) * 0.12,
        1.7, pose.position.z + (pose.look.z - pose.position.z) * 0.12);
      headlight.intensity = 85 * (0.85 + env.onset * 0.5);
    },

    // 镜像相机反射 pass。返回是否真的渲染了 RT（低画质/关闭时跳过，并把
    // 水面切回解析天色 —— RT 不再更新，着色器不许继续采样陈旧纹理）。
    renderReflection(renderer, scene, camera, pose) {
      if (!water.enabled || !world.reflectionEnabled) {
        water.uniforms.uHasRefl.value = 0;
        return false;
      }
      const mc = mirrorCam;
      mc.fov = camera.fov;
      mc.aspect = camera.aspect;
      mc.updateProjectionMatrix();
      mc.position.set(pose.position.x, -pose.position.y, pose.position.z);
      mc.up.set(0, 1, 0);
      mc.lookAt(pose.look.x, -pose.look.y, pose.look.z);
      mc.rotateZ(-pose.roll || 0);
      mc.updateMatrixWorld();
      water.mesh.visible = false;
      water.uniforms.uHasRefl.value = 1;
      const prevTarget = renderer.getRenderTarget();
      renderer.setRenderTarget(water.rt);
      renderer.render(scene, mc);
      renderer.setRenderTarget(prevTarget);
      water.mesh.visible = true;
      return true;
    },

    // width/height 是画布「绘制缓冲」像素（css × DPR）：uResolution 服务于
    // gl_FragCoord（设备像素），反射 RT 与主画布 1:1 才不会有拉伸糊斑。
    resize(width, height) {
      dims.width = width;
      dims.height = height;
      water.uniforms.uResolution.value.set(width, height);
      if (water.rt) water.rt.setSize(
        Math.max(320, Math.round(width * water.reflScale)),
        Math.max(180, Math.round(height * water.reflScale)));
    },

    stats() {
      return {
        reflection: water.enabled && world.reflectionEnabled, track: 'static',
        stations: stations.count, stationAddresses: stations.addresses,
      };
    },

    dispose() {
      scene.remove(groups.sky, groups.track, groups.water, groups.stations, groups.ridge, groups.meteors,
        hemi, moonLight, headlight);
      const junk = [];
      [groups.sky, groups.track, groups.water, groups.stations, groups.ridge, groups.meteors].forEach((g) => g.traverse((o) => {
        if (o.geometry) junk.push(o.geometry);
        const mats = Array.isArray(o.material) ? o.material : (o.material ? [o.material] : []);
        mats.forEach((mt) => junk.push(mt));
      }));
      junk.forEach((x) => { try { x.dispose && x.dispose(); } catch (_) { /* 尽力而为 */ } });
      if (water.rt) water.rt.dispose();
    },
  };
  world.setPalette(opts.palette);
  return world;
}
