// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
//
// 世界：夜空（穹顶/星点/银河/月轮/地平线雾带）+ 直线铁轨（道床/钢轨/枕木/
// 电线杆/接触网/信号机）+ 镜面浅水（镜像相机反射 RT + 频谱涟漪）+ 站台建筑群
// + 道旁草丛 + 浮尘 + 近景散焦光斑 + 车头灯体积光锥。
//
// 「镜面水」是镜台的签名：歌词与星空都要落进水里。反射用教科书式的平面镜像
// 相机（位置/注视点对水面取反）渲染进 RT，水面着色器按屏幕 UV 采样并做涟漪
// 扰动；低画质档直接关掉 RT，用解析天色近似。轨道是直线，所以钢轨/枕木/
// 电线杆/接触网/草丛全部静态实例化 —— 稳态下没有任何逐帧 buffer 更新。
//
// —— 纵深分层（本轮视觉迭代的主轴）—— //
//   背景：天穹 / 星野 / 银河 / 月轮 / 地平线雾带（fog:false，不吃大气雾，
//         靠自身渐变与雾带承担「远」）；
//   中景：远山脊线、沿线站台、信号机与灯晕（入场退场由到相机的距离驱动，
//         MeshStandardMaterial 吃 FogExp2，越远越淡）；
//   前景：道床、道旁草丛（掠过速度最快）、近景散焦光斑（镜头前的失焦光斑，
//         提供景深虚化的视觉线索）、车头灯体积光锥。
//   各层的运动速度天然不同（近快远慢），大气雾再叠一层连续的亮度衰减，
//   纵深由「视差速度 + 雾浓度 + 散焦尺度」三件事共同给出。
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
const SIGNAL_GAP = 214;        // 信号机间距（米）：中景里匀速掠过的暖/冷光点
const SIGNAL_X = 2.28;         // 信号机到轨心的横向距离
const SKY_R = 2400;            // 天穹半径（大于水面可视距离）
const STAR_R = 2100;
const FAR = 2700;

// —— 大气与分层参数（可调，详见 docs/diorama-visual-tuning.md）—— //
const FOG_DENSITY = 0.00082;   // FogExp2 密度：0.0004（薄）/ 0.0016（浓）
const FOG_TINT = 0.92;         // 雾色相对地平线色的明暗倍率
const MOTE_RANGE = 260;        // 浮尘沿轨循环的纵深窗口（米）
const MOTE_FRONT = 0.72;       // 窗口里位于相机前方的比例
const SHAFT_LEN = 58;          // 车头灯体积光锥长度（米）
const SHAFT_RADIUS = 9.8;      // 光锥底半径（米）
const SHAFT_STRENGTH = 0.05;   // 光锥基础不透明度 0..0.14
const BOKEH_NEAR = -3.5;       // 近景散焦光斑的 z 区间（相机局部坐标）
const BOKEH_FAR = -18;
const GLOW_NEAR = 26;          // 灯晕贴近相机后开始淡出的距离（米）
const GLOW_FADE = 430;         // 灯晕完全没入雾里的距离（米）
const WIND_BASE = 0.055;       // 草丛基础弯折（米/米²）
const WIND_ENERGY = 0.05;      // 能量额外带来的弯折

const PALETTE_DEFAULT = {
  background: '#0a101d',
  accent: '#f2a900',
  secondary: '#76bfae',
  ink: '#f2f0e9',
};

// 径向渐变软光斑贴图。散焦光斑、灯晕、接触阴影共用一套生成器 —— 这些都是
//「一团软而无结构的颜色」，不需要各自的贴图。
function radialSprite(THREE, size, stops) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  stops.forEach(([at, color]) => g.addColorStop(at, color));
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

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
    uCool: { value: new THREE.Color(PALETTE_DEFAULT.secondary) },
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
      uniform vec3 uAccent, uCool, uDeep, uHorizon, uZenith, uMoonTint, uCamPos;
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
        // 菲涅尔加陡：视线的掠射角越平反射越强，脚下的水（视角陡）几乎只剩
        // 深水色 —— 镜面的「能照见东西」集中在画面中上段，前景安静下来。
        vec3 col = mix(uDeep, refl, clamp(0.40 + 0.60 * pow(grazing, 1.35), 0.0, 1.0));
        // 星光碎闪：稀疏网格驻点（~3% 格子）+ 距离衰减 —— 镜面上的零星反光，
        // 不是波点场；起音时整片轻微提亮。
        vec2 cell = floor(vWorld.xz * 0.22);
        vec2 fp = fract(vWorld.xz * 0.22) - 0.5;
        float rnd = fract(sin(dot(cell, vec2(127.1, 311.7))) * 43758.5453);
        float sparkle = step(0.965, rnd) * exp(-dot(fp, fp) * 26.0);
        float dist = length(vWorld.xz - uCamPos.xz);
        sparkle *= exp(-dist * 0.003);
        col += uAccent * sparkle * (0.10 + uOnset * 0.45) * (0.3 + uEnergy);
        // 月光水路：朝月位方向的细长高光带（近窄远宽两条叠加，像被波纹拉长）。
        vec2 toPt = vWorld.xz - uCamPos.xz;
        float along = length(toPt) > 0.5 ? dot(normalize(toPt), uMoonXZ) : 0.0;
        float path = pow(clamp(along, 0.0, 1.0), 60.0) * 0.2
            + pow(clamp(along, 0.0, 1.0), 11.0) * 0.05;
        col += uMoonTint * path * grazing * (0.75 + uEnergy * 0.35);
        // 冷暖分离：脚下的深水压向冷色（主题辅色），远处倒影保持原色 ——
        // 于是水面自带一条从冷到暖的纵深梯度。
        vec3 coolTint = mix(vec3(1.0), uCool * 1.3 + 0.1, 0.55);
        col *= mix(vec3(1.0), coolTint, 0.34 - 0.24 * grazing);
        // 近处压暗两档：脚下的水最接近镜头、离光源最近，压暗它既符合物理
        // （视线掠过角越陡反射越弱），又让中景倒影与月光水路从明暗里立起来
        // —— 纵深的第二个来源。
        // 近处压轻一档：脚下水面别抢中景倒影与月光水路的戏，但镜面关系
        // （下亮上暗）要保住 —— 这是构图契约「上/下分区差异」的物理来源。
        col *= mix(0.82, 1.0, smoothstep(4.0, 60.0, dist));
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

// 天穹的渐变：环境贴图（金属反射）与天穹本体共用同一份着色器源，改一处即可。
const SKY_DOME_VERT = `
  varying vec3 vDir;
  void main(){
    vDir = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`;
const SKY_DOME_FRAG = `
  uniform vec3 uHorizon, uZenith, uAccent, uSecondary;
  uniform float uEnergy, uHaze;
  varying vec3 vDir;
  void main(){
    float h = clamp(vDir.y, -0.25, 1.0);
    vec3 col = mix(uHorizon, uZenith, smoothstep(0.02, 0.5, h));
    // 地平线下的「远处水雾」与水面淡出同色，接缝不可见。
    col = mix(col, uHorizon * 0.85, smoothstep(0.0, -0.2, h));
    // 地平线雾带：厚度随方位起伏的低雾，给「远方有陆」垫一层，随能量轻微抬升。
    float az = atan(vDir.z, vDir.x);
    float bank = 0.55 + 0.45 * sin(az * 2.3 + 1.7) + 0.22 * sin(az * 5.1 + 0.6);
    float haze = exp(-pow((h - 0.012) / 0.055, 2.0)) * bank;
    col += mix(uSecondary, uHorizon, 0.55) * haze * uHaze * (0.7 + uEnergy * 0.5);
    // 地平线上方一线暖色城市余光，随能量轻微呼吸。
    col += uAccent * 0.085 * exp(-abs(h - 0.03) * 22.0) * (1.0 + uEnergy * 0.6);
    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`;

function createSky(THREE) {
  const group = new THREE.Group();
  const uniforms = {
    uHorizon: { value: new THREE.Color('#101a2c') },
    uZenith: { value: new THREE.Color('#04070f') },
    uAccent: { value: new THREE.Color(PALETTE_DEFAULT.accent) },
    uSecondary: { value: new THREE.Color(PALETTE_DEFAULT.secondary) },
    uEnergy: { value: 0 },
    uHaze: { value: 0.5 },
  };
  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(SKY_R, 32, 18),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms,
      vertexShader: SKY_DOME_VERT,
      fragmentShader: SKY_DOME_FRAG,
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
  const glowTex = radialSprite(THREE, 128, [
    [0, 'rgba(224,236,255,0.95)'],
    [0.2, 'rgba(196,214,255,0.42)'],
    [0.55, 'rgba(160,185,235,0.12)'],
    [1, 'rgba(150,180,230,0)'],
  ]);
  const moon = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTex, transparent: true, depthWrite: false, fog: false,
    blending: THREE.AdditiveBlending,
  }));
  moon.position.copy(moonDir).multiplyScalar(STAR_R * 0.94);
  moon.scale.setScalar(430);
  group.add(moon);

  return { group, uniforms, moonDir, moon, glowTex };
}

function lerpZ(a, b, t) { return a + (b - a) * t; }

// 铁轨：道床 + 钢轨 + 枕木 + 电线杆 + 接触网 + 信号机。
// 道床是本轮补的：原来钢轨悬在水面上，缺了「落在地上」的那一层，接触阴影
// 也无处可落。信号机给中景一排匀速掠过的暖/冷光点（灯晕在 glow 层）。
function createTrack(THREE, palette) {
  const group = new THREE.Group();
  const ballastMat = new THREE.MeshStandardMaterial({ color: 0x111419, roughness: 0.99, metalness: 0.0 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x241d18, roughness: 0.92, metalness: 0.05 });
  const railMat = new THREE.MeshStandardMaterial({
    color: 0x8a939e, roughness: 0.34, metalness: 0.9, envMapIntensity: 1.5,
  });
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x151a20, roughness: 0.8, metalness: 0.3 });
  const warmLampMat = new THREE.MeshStandardMaterial({
    color: 0x0b0906, emissive: 0xffc178, emissiveIntensity: 3.1, roughness: 0.4,
  });
  const coolLampMat = new THREE.MeshStandardMaterial({
    color: 0x06090b, emissive: 0x5fe0c4, emissiveIntensity: 2.6, roughness: 0.4,
  });

  // 道床：一条压在水面上的暗色路基（0..0.06m），枕木露出约 3cm。
  const ballast = new THREE.Mesh(
    new THREE.BoxGeometry(3.9, 0.06, TRACK_LEN + TRACK_START), ballastMat);
  ballast.position.set(0, 0.03, -(TRACK_LEN / 2) + TRACK_START / 2);
  group.add(ballast);

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

  // 信号机：灯柱 + 灯头（暖/冷交替）。灯头本身很小，真正的「光」是 glow 层
  // 的软光斑——它同时被水面反射，形成水里的竖向光柱。
  const sigCount = Math.floor((TRACK_LEN - 300) / SIGNAL_GAP);
  const sigPoles = new THREE.InstancedMesh(
    new THREE.BoxGeometry(0.09, 1.62, 0.09), poleMat, sigCount);
  const warmHeads = [];
  const coolHeads = [];
  const signals = [];
  const rnd = seededRandom('diorama-signals');
  for (let i = 0; i < sigCount; i += 1) {
    const z = -120 - i * SIGNAL_GAP;
    const side = i % 2 === 0 ? 1 : -1;
    const x = side * SIGNAL_X;
    m.makeTranslation(x, 0.81, z);
    sigPoles.setMatrixAt(i, m);
    const warm = rnd() < 0.62;
    (warm ? warmHeads : coolHeads).push([x, 1.58, z]);
    signals.push([x, 1.58, z, warm ? 1 : 0]);
  }
  sigPoles.instanceMatrix.needsUpdate = true;
  group.add(sigPoles);
  const headGeo = new THREE.BoxGeometry(0.17, 0.26, 0.15);
  if (warmHeads.length) {
    const inst = new THREE.InstancedMesh(headGeo, warmLampMat, warmHeads.length);
    warmHeads.forEach(([x, y, z], i) => { m.makeTranslation(x, y, z); inst.setMatrixAt(i, m); });
    inst.instanceMatrix.needsUpdate = true;
    group.add(inst);
  }
  if (coolHeads.length) {
    const inst = new THREE.InstancedMesh(headGeo, coolLampMat, coolHeads.length);
    coolHeads.forEach(([x, y, z], i) => { m.makeTranslation(x, y, z); inst.setMatrixAt(i, m); });
    inst.instanceMatrix.needsUpdate = true;
    group.add(inst);
  }
  return { group, signals };
}

// —— 道旁草丛（前景层）—— //
// 前景是纵深最便宜也最有效的来源：离镜头最近的东西掠过得最快。草丛用
// 三角锥实例化（每丛 3 个三角形），风摆放在顶点着色器里按 world 位置取相位，
// CPU 每帧只推一个 uniform。
function createFoliage(THREE, quality, wind) {
  const count = quality === 'low' ? 1100 : quality === 'medium' ? 2000 : 3100;
  const geo = new THREE.ConeGeometry(0.085, 0.52, 3, 1, true);
  geo.translate(0, 0.26, 0); // 底面落在 y=0，弯折才好按高度平方给
  const mat = new THREE.MeshStandardMaterial({
    color: 0x121b16, roughness: 0.95, metalness: 0.0, side: THREE.DoubleSide,
  });
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uWindTime = wind.uTime;
    shader.uniforms.uWindAmp = wind.uAmp;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uWindTime;\nuniform float uWindAmp;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        #ifdef USE_INSTANCING
          float wSeed = instanceMatrix[3][0] * 0.7 + instanceMatrix[3][2] * 0.31;
        #else
          float wSeed = 0.0;
        #endif
        float bend = max(transformed.y, 0.0) * max(transformed.y, 0.0) * uWindAmp;
        transformed.x += sin(uWindTime * 1.15 + wSeed) * bend;
        transformed.z += cos(uWindTime * 0.92 + wSeed * 1.7) * bend * 0.55;`);
  };
  const inst = new THREE.InstancedMesh(geo, mat, count);
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const pos = new THREE.Vector3();
  const scl = new THREE.Vector3();
  const rnd = seededRandom('diorama-foliage');
  for (let i = 0; i < count; i += 1) {
    const side = rnd() < 0.5 ? -1 : 1;
    const x = side * (1.62 + rnd() * 1.05);
    const z = TRACK_START - rnd() * (TRACK_LEN + TRACK_START);
    const h = 0.45 + rnd() * 0.85;
    pos.set(x, -0.02 + rnd() * 0.03, z);
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rnd() * 6.283);
    scl.set(0.7 + rnd() * 0.7, h / 0.52, 0.7 + rnd() * 0.7);
    m.compose(pos, q, scl);
    inst.setMatrixAt(i, m);
  }
  inst.instanceMatrix.needsUpdate = true;
  const group = new THREE.Group();
  group.add(inst);
  return { group, count };
}

// —— 灯晕 / 雾团（中景光斑层）—— //
// 一个 Points 承担三类东西：站台檐下灯带的光晕、信号机灯头的光晕、地平线低雾。
// kind=0 走世界坐标 + 透视缩放（越远越小，同时按距离淡入淡出 —— 这就是元素
// 入场退场）；kind=1 走相机相对坐标 + 固定像素尺寸（远到不该被透视影响）。
function createGlowField(THREE, items) {
  const n = Math.max(1, items.length);
  const pos = new Float32Array(n * 3);
  const meta = new Float32Array(n * 3); // size, kind, warm
  const phase = new Float32Array(n);
  for (let i = 0; i < items.length; i += 1) {
    const it = items[i];
    pos[i * 3] = it.x;
    pos[i * 3 + 1] = it.y;
    pos[i * 3 + 2] = it.z;
    meta[i * 3] = it.size;
    meta[i * 3 + 1] = it.kind;
    meta[i * 3 + 2] = it.warm;
    phase[i] = ((i * 2654435761) % 1000) / 1000 * 6.283;
  }
  const uniforms = {
    uMap: { value: radialSprite(THREE, 128, [
      [0, 'rgba(255,255,255,1)'],
      [0.28, 'rgba(255,255,255,0.55)'],
      [0.62, 'rgba(255,255,255,0.14)'],
      [1, 'rgba(255,255,255,0)'],
    ]) },
    uTime: { value: 0 },
    uProj: { value: 900 },
    uEnergy: { value: 0 },
    uOnset: { value: 0 },
    uWarm: { value: new THREE.Color('#ffc178') },
    uCool: { value: new THREE.Color('#7fd8e8') },
    uFade: { value: new THREE.Vector2(GLOW_NEAR, GLOW_FADE) },
  };
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aMeta', new THREE.BufferAttribute(meta, 3));
  geo.setAttribute('aPhase', new THREE.BufferAttribute(phase, 1));
  const mat = new THREE.ShaderMaterial({
    uniforms,
    transparent: true, depthWrite: false, fog: false,
    blending: THREE.AdditiveBlending,
    vertexShader: `
      attribute vec3 aMeta;
      attribute float aPhase;
      uniform float uTime, uProj, uEnergy, uOnset;
      uniform vec2 uFade;
      uniform vec3 uWarm, uCool;
      varying vec3 vColor;
      varying float vAlpha;
      void main(){
        float kind = aMeta.y;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        float dist = max(length(mv.xyz), 1.0);
        // 世界灯：透视缩放；贴脸时淡出，远处没入雾里（= 入场 / 退场）
        float worldA = smoothstep(2.0, uFade.x, dist) * (1.0 - smoothstep(uFade.x * 3.0, uFade.y, dist));
        float worldS = clamp(aMeta.x * uProj / dist, 1.5, 260.0);
        // 相机相对雾团：固定像素尺寸，只做极慢的浓淡起伏
        float skyA = 0.55 + 0.45 * sin(uTime * 0.045 + aPhase);
        float skyS = aMeta.x;
        vAlpha = mix(worldA, skyA, kind) * (0.46 + uEnergy * 0.42 + uOnset * 0.3);
        vColor = mix(uCool, uWarm, aMeta.z);
        gl_PointSize = mix(worldS, skyS, kind);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `
      uniform sampler2D uMap;
      varying vec3 vColor;
      varying float vAlpha;
      void main(){
        float a = texture2D(uMap, gl_PointCoord).a;
        gl_FragColor = vec4(vColor, a * vAlpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  return { group: points, uniforms };
}

// —— 浮尘 / 水汽（氛围粒子层）—— //
// 相机相对的一盒微粒，沿轨方向按「已行驶距离」取模循环 —— 于是它们是播放
// 时间的纯函数，暂停即静止、seek 到同一位置粒子分布完全一致。
function createMotes(THREE, quality) {
  const count = quality === 'low' ? 170 : quality === 'medium' ? 360 : 620;
  const pos = new Float32Array(count * 3);
  const meta = new Float32Array(count * 3); // phase, size, warm
  const rnd = seededRandom('diorama-motes');
  for (let i = 0; i < count; i += 1) {
    pos[i * 3] = (rnd() * 2 - 1) * 15;
    pos[i * 3 + 1] = 0.15 + rnd() * 5.4;
    pos[i * 3 + 2] = rnd() * MOTE_RANGE;
    meta[i * 3] = rnd() * 6.283;
    meta[i * 3 + 1] = 0.05 + rnd() * 0.14;
    meta[i * 3 + 2] = rnd();
  }
  const uniforms = {
    uTime: { value: 0 }, uTravel: { value: 0 }, uProj: { value: 900 },
    uEnergy: { value: 0 }, uOnset: { value: 0 }, uRange: { value: MOTE_RANGE },
    uFront: { value: MOTE_FRONT },
    uWarm: { value: new THREE.Color('#ffd9a8') },
    uCool: { value: new THREE.Color('#9fc2e8') },
  };
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aMeta', new THREE.BufferAttribute(meta, 3));
  const mat = new THREE.ShaderMaterial({
    uniforms,
    transparent: true, depthWrite: false, fog: false,
    blending: THREE.AdditiveBlending,
    vertexShader: `
      attribute vec3 aMeta;
      uniform float uTime, uTravel, uProj, uEnergy, uOnset, uRange, uFront;
      uniform vec3 uWarm, uCool;
      varying vec3 vColor;
      varying float vAlpha;
      void main(){
        vec3 p = position;
        // 沿轨循环：+uTravel 让微粒从前方（z 负）掠向身后
        p.z = mod(p.z + uTravel, uRange) - uRange * uFront;
        p.x += sin(uTime * 0.33 + aMeta.x) * 0.55;
        p.y += sin(uTime * 0.24 + aMeta.x * 1.7) * 0.32;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float dist = max(-mv.z, 1.0);
        float fade = smoothstep(2.0, 15.0, dist) * (1.0 - smoothstep(70.0, 205.0, dist));
        vAlpha = fade * (0.20 + uEnergy * 0.34 + uOnset * 0.26);
        vColor = mix(uCool, uWarm, aMeta.z * 0.85);
        gl_PointSize = clamp(aMeta.y * uProj / dist, 1.0, 26.0);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `
      varying vec3 vColor;
      varying float vAlpha;
      void main(){
        vec2 q = gl_PointCoord * 2.0 - 1.0;
        float a = exp(-dot(q, q) * 2.6);
        gl_FragColor = vec4(vColor, a * vAlpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  const group = new THREE.Group();
  group.add(points);
  return { group, uniforms, count };
}

// —— 近景散焦光斑（景深虚化的视觉线索）—— //
// 贴在镜头前几米的大号软光斑：它们不参与场景透视（跟着相机走），尺寸被钳在
// 大像素区间、透明度极低 —— 读起来就是「镜头前的光失焦了」。起音时轻轻一跳，
// 作为最贴身的节奏反馈。低画质整层关闭（它的价值在质感，不在信息量）。
function createBokeh(THREE, quality) {
  const count = quality === 'low' ? 0 : quality === 'medium' ? 8 : 14;
  if (!count) return null;
  const pos = new Float32Array(count * 3);
  const meta = new Float32Array(count * 2); // size, warm
  const phase = new Float32Array(count);
  const rnd = seededRandom('diorama-bokeh');
  for (let i = 0; i < count; i += 1) {
    pos[i * 3] = (rnd() * 2 - 1) * 7;
    pos[i * 3 + 1] = -1.2 + rnd() * 5.8;
    pos[i * 3 + 2] = BOKEH_FAR + rnd() * (BOKEH_NEAR - BOKEH_FAR);
    meta[i * 2] = 0.45 + rnd() * 1.05;
    meta[i * 2 + 1] = rnd();
    phase[i] = rnd() * 6.283;
  }
  const uniforms = {
    uTime: { value: 0 }, uProj: { value: 900 },
    uEnergy: { value: 0 }, uOnset: { value: 0 },
    uWarm: { value: new THREE.Color('#ffcf8e') },
    uCool: { value: new THREE.Color('#8fc6e8') },
  };
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aMeta', new THREE.BufferAttribute(meta, 2));
  geo.setAttribute('aPhase', new THREE.BufferAttribute(phase, 1));
  const mat = new THREE.ShaderMaterial({
    uniforms,
    transparent: true, depthWrite: false, depthTest: false, fog: false,
    blending: THREE.AdditiveBlending,
    vertexShader: `
      attribute vec2 aMeta;
      attribute float aPhase;
      uniform float uTime, uProj, uEnergy, uOnset;
      uniform vec3 uWarm, uCool;
      varying vec3 vColor;
      varying float vAlpha;
      void main(){
        vec3 p = position;
        p.x += sin(uTime * 0.085 + aPhase) * 0.6;
        p.y += cos(uTime * 0.067 + aPhase * 1.3) * 0.45;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float dist = max(-mv.z, 1.0);
        vAlpha = (0.028 + uEnergy * 0.03 + uOnset * 0.05) * smoothstep(1.2, 5.0, dist);
        vColor = mix(uCool, uWarm, aMeta.y);
        gl_PointSize = clamp(aMeta.x * uProj / dist, 12.0, 130.0);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `
      varying vec3 vColor;
      varying float vAlpha;
      void main(){
        vec2 q = gl_PointCoord * 2.0 - 1.0;
        float d = length(q);
        // 散焦光斑：中心亮、边缘一圈更亮的软环，外沿平滑收干净
        float a = (1.0 - smoothstep(0.62, 1.0, d)) * 0.30 + exp(-d * d * 4.0) * 0.5;
        gl_FragColor = vec4(vColor, a * vAlpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  points.renderOrder = 6; // 压在所有场景内容之上（它就是镜头上的东西）
  const group = new THREE.Group();
  group.add(points);
  return { group, uniforms };
}

// —— 车头灯体积光锥 —— //
// 锥尖钉在相机上、锥底朝注视方向延伸，双面叠加的壳层在轮廓处最亮（边上光程
// 更长），近端与远端各留一段淡入淡出。反射 pass 里整个藏起来 —— 镜像相机的
// 锥体会指错方向。
function createLightShaft(THREE) {
  const H = SHAFT_LEN;
  const geo = new THREE.ConeGeometry(SHAFT_RADIUS, H, 22, 1, true);
  const uniforms = {
    uStrength: { value: SHAFT_STRENGTH },
    uHeight: { value: H },
    uWarm: { value: new THREE.Color('#ffd2a0') },
    uCool: { value: new THREE.Color('#9fc4ff') },
    uMix: { value: 0.74 },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms,
    transparent: true, depthWrite: false, fog: false,
    blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    vertexShader: `
      uniform float uHeight;
      varying float vAlong;
      varying vec3 vN;
      varying vec3 vV;
      void main(){
        vAlong = 0.5 - position.y / uHeight;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vN = normalize(normalMatrix * normal);
        vV = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `
      uniform float uStrength, uMix;
      uniform vec3 uWarm, uCool;
      varying float vAlong;
      varying vec3 vN;
      varying vec3 vV;
      void main(){
        float rim = abs(dot(normalize(vN), normalize(vV)));
        float body = 1.0 - rim * 0.82;
        float near = smoothstep(0.0, 0.14, vAlong);
        float far = 1.0 - smoothstep(0.45, 1.0, vAlong);
        float a = uStrength * body * near * far;
        gl_FragColor = vec4(mix(uCool, uWarm, uMix) * a, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.rotation.x = -Math.PI / 2;   // 局部 +Y 转到 -Z
  mesh.position.z = H / 2;          // 锥尖落到 pivot 原点，锥底在前方 H 米处
  mesh.frustumCulled = false;
  const pivot = new THREE.Group();
  pivot.add(mesh);
  return { group: pivot, uniforms };
}

// —— 接触阴影 —— //
// 物体落地的地方压一团软影：不是真阴影贴图（这么长的直线轨道上 shadow map
// 只会得到一张糊掉的巨大图），而是给站台/信号机脚下贴一枚径向渐变贴片。
// 一处 draw call，换来「东西踩在地上」而不是浮着。
function createGroundShade(THREE, blobs) {
  if (!blobs.length) return null;
  const tex = radialSprite(THREE, 128, [
    [0, 'rgba(0,0,0,0.62)'],
    [0.5, 'rgba(0,0,0,0.3)'],
    [1, 'rgba(0,0,0,0)'],
  ]);
  const mat = new THREE.MeshBasicMaterial({
    map: tex, transparent: true, depthWrite: false, fog: false,
    color: 0x000000, opacity: 0.85,
  });
  const inst = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1), mat, blobs.length);
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0));
  const pos = new THREE.Vector3();
  const scl = new THREE.Vector3();
  blobs.forEach(([x, z, sx, sz], i) => {
    pos.set(x, 0.015, z);
    scl.set(sx, sz, 1);
    m.compose(pos, q, scl);
    inst.setMatrixAt(i, m);
  });
  inst.instanceMatrix.needsUpdate = true;
  inst.renderOrder = 1;
  const group = new THREE.Group();
  group.add(inst);
  return { group };
}

// —— 沿线站台建筑群 —— //
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

  // 灯位与落地阴影登记：交给 glow / shade 两层去用（本模块只出数据）。
  const lamps = [];
  const shades = [];
  for (const l of layouts) {
    const strip = l.parts.strip[0];
    const lamp = l.parts.lamp[0];
    if (strip) {
      lamps.push([strip[0], strip[1] + 0.1, strip[2], 2.3]);
      shades.push([strip[0], strip[2], Math.abs(strip[3]) + 3.4, 6.4]);
    }
    if (lamp) {
      lamps.push([lamp[0], lamp[1] + 0.05, lamp[2], 1.5]);
      shades.push([lamp[0], lamp[2], 3.0, 3.0]);
    }
  }
  return { group, count: layouts.length, addresses: layouts.map((l) => -l.z), lamps, shades };
}

function poleMat2() {
  return new THREE.MeshStandardMaterial({ color: 0x10151b, roughness: 0.82, metalness: 0.3 });
}

// —— 地平线剪影：远山脊线（参照「地平线剪影」）——
// 圆筒侧壁顶边按 seeded 噪声起伏，底边没入水下；比天穹近、比水面淡出远，
// 骑在地平线上给夜行一个「远方有陆」的层次。不吃雾（它是剪影，靠自身极暗
// 与雾色的反差立住）。
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
  return { group: mesh, material: mat };
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

// 环境贴图：把天穹渐变烘成一张小 PMREM，给金属件（钢轨/雨棚/牌框）一点
// 夜空反射 —— 没有环境光的金属是死黑的一片，有了它才读得出材质。
// 只在挂载与换色时烘一次，失败（无浮点 RT / 极端驱动）就静默跳过。
function buildEnv(THREE, renderer, uniforms, prev) {
  let pmrem = null;
  let dome = null;
  try {
    pmrem = new THREE.PMREMGenerator(renderer);
    const envScene = new THREE.Scene();
    dome = new THREE.Mesh(
      new THREE.SphereGeometry(60, 24, 16),
      new THREE.ShaderMaterial({
        side: THREE.BackSide, depthWrite: false, fog: false, uniforms,
        vertexShader: SKY_DOME_VERT, fragmentShader: SKY_DOME_FRAG,
      }),
    );
    envScene.add(dome);
    const rt = pmrem.fromScene(envScene, 0.04, 0.1, 100);
    if (prev) prev.dispose();
    return rt;
  } catch (_) {
    return prev || null;
  } finally {
    try { if (pmrem) pmrem.dispose(); } catch (_) { /* 尽力而为 */ }
    try {
      if (dome) { dome.geometry.dispose(); dome.material.dispose(); }
    } catch (_) { /* 尽力而为 */ }
  }
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
  const wind = { uTime: { value: 0 }, uAmp: { value: WIND_BASE } };
  const foliage = createFoliage(THREE, quality, wind);
  const motes = createMotes(THREE, quality);
  const bokeh = createBokeh(THREE, quality);
  const shaft = createLightShaft(THREE);

  // 光晕清单：站台灯 + 信号机灯（世界坐标，透视缩放）+ 地平线低雾（相机相对）。
  const glowItems = [];
  for (const [x, y, z, size] of stations.lamps) {
    glowItems.push({ x, y, z, size, kind: 0, warm: 0.88 });
  }
  for (const [x, y, z, warm] of track.signals) {
    glowItems.push({ x, y, z, size: warm ? 1.05 : 0.95, kind: 0, warm: warm ? 0.9 : 0.12 });
  }
  const mistRnd = seededRandom('diorama-mist');
  for (let i = 0; i < 5; i += 1) {
    const az = (i / 5) * 6.283 + mistRnd() * 0.7;
    glowItems.push({
      x: Math.sin(az) * 2050, y: 14 + mistRnd() * 56, z: -Math.cos(az) * 2050,
      size: 320 + mistRnd() * 220, kind: 1, warm: 0.18,
    });
  }
  const glow = createGlowField(THREE, glowItems);

  // 接触阴影清单：站台脚下（大团）+ 信号机灯柱脚下（小团）。
  const shadeBlobs = stations.shades.slice();
  for (const [x, , z] of track.signals) shadeBlobs.push([x, z, 1.5, 1.5]);
  const shade = createGroundShade(THREE, shadeBlobs);

  const groups = {
    sky: sky.group,
    track: track.group,
    water: water.mesh,
    stations: stations.group,
    ridge: ridge.group,
    meteors: meteors.group,
    foliage: foliage.group,
    glow: glow.group,
    motes: motes.group,
    bokeh: bokeh ? bokeh.group : null,
    shaft: shaft.group,
    shade: shade ? shade.group : null,
  };
  scene.add(groups.sky, groups.track, groups.water, groups.stations, groups.ridge,
    groups.meteors, groups.foliage, groups.glow, groups.motes, groups.shaft);
  if (groups.bokeh) scene.add(groups.bokeh);
  if (groups.shade) scene.add(groups.shade);

  // 大气雾：只作用于 MeshStandardMaterial（轨道/站台/草丛），天穹/星野/脊线/
  // 水面各自有雾 — 它们要么不吃雾，要么自带距离淡出，不重复。
  const fog = new THREE.FogExp2(0x101a2c, FOG_DENSITY);
  scene.fog = fog;

  // 灯光三件套：冷（月）· 更冷（天光）· 暖（城市余晖 + 车头灯）。
  const hemi = new THREE.HemisphereLight(0x2b4a7a, 0x060a10, 0.8);
  const moonLight = new THREE.DirectionalLight(0xaac4ff, 0.95);
  moonLight.position.copy(sky.moonDir).multiplyScalar(100);
  // 城市余晖：从地平线后方打过来的一束暖光，与月光形成冷暖对峙。
  const cityLight = new THREE.DirectionalLight(0xff9a52, 0.32);
  cityLight.position.set(sky.moonDir.x * -60, 14, sky.moonDir.z * -60);
  // 车头灯：跟随相机的暖色点光，给近处轨面与牌面一点「有人在夜里赶路」的温度。
  const headlight = new THREE.PointLight(0xffd9a0, 85, 60, 1.8);
  scene.add(hemi, moonLight, cityLight, headlight);

  let envRT = null;
  const mirrorCam = new THREE.PerspectiveCamera(48, 16 / 9, 0.1, FAR);
  const env = { energy: 0, onset: 0 };
  let clock = 0;       // 世界时钟：暂停时冻结，只让包络回落
  let projScale = 900; // ≈ drawingBufferHeight / (2*tan(fov/2))，点精灵的像素换算
  const allGroups = () => Object.keys(groups).map((k) => groups[k]).filter(Boolean);

  const world = {
    groups,
    skyDir: sky.moonDir,
    quality,
    reflectionEnabled: water.enabled && opts.reflection !== false,

    setPalette(p = {}) {
      const accent = new THREE.Color(p.accent || PALETTE_DEFAULT.accent);
      const secondary = new THREE.Color(p.secondary || PALETTE_DEFAULT.secondary);
      const horizon = new THREE.Color(p.background || PALETTE_DEFAULT.background)
        .lerp(secondary, 0.08)
        .multiplyScalar(2.1);
      const zenith = new THREE.Color(p.background || PALETTE_DEFAULT.background).multiplyScalar(0.45);
      const deep = new THREE.Color(p.background || PALETTE_DEFAULT.background).multiplyScalar(0.5);
      for (const target of [water.uniforms.uHorizon.value, sky.uniforms.uHorizon.value]) target.copy(horizon);
      for (const target of [water.uniforms.uZenith.value, sky.uniforms.uZenith.value]) target.copy(zenith);
      water.uniforms.uDeep.value.copy(deep);
      water.uniforms.uAccent.value.copy(accent);
      water.uniforms.uCool.value.copy(secondary);
      water.uniforms.uMoonXZ.value.set(sky.moonDir.x, sky.moonDir.z).normalize();
      sky.uniforms.uAccent.value.copy(accent);
      sky.uniforms.uSecondary.value.copy(secondary);
      ridge.material.color.copy(new THREE.Color(p.background || PALETTE_DEFAULT.background).multiplyScalar(0.62));
      fog.color.copy(horizon).multiplyScalar(FOG_TINT);
      glow.uniforms.uWarm.value.copy(accent).lerp(new THREE.Color('#ffd9a0'), 0.45);
      glow.uniforms.uCool.value.copy(secondary).lerp(new THREE.Color('#9fd8e8'), 0.5);
      motes.uniforms.uWarm.value.copy(accent).lerp(new THREE.Color('#ffe0b0'), 0.4);
      motes.uniforms.uCool.value.copy(secondary).lerp(new THREE.Color('#a9c8e8'), 0.5);
      shaft.uniforms.uWarm.value.copy(accent).lerp(new THREE.Color('#ffd2a0'), 0.5);
      if (bokeh) bokeh.uniforms.uWarm.value.copy(accent).lerp(new THREE.Color('#ffdfae'), 0.35);
      if (world.renderer) envRT = buildEnv(THREE, world.renderer, sky.uniforms, envRT);
      if (envRT) scene.environment = envRT.texture;
    },

    // 每帧：包络推进 + 各层 uniform + 相机跟随。time 为播放时间（秒），
    // 暂停时 time 不前进，只有包络按真实 dt 回落（画面静止但光会暗下去）。
    update(dt, time, pose, audio, prefs) {
      const playing = !!audio.playing;
      const moving = !prefs.reduced && playing;
      const targetEnergy = moving ? audio.energy : 0;
      env.energy = damp(env.energy, targetEnergy, moving ? 0.35 : 0.8, dt);
      env.onset = damp(env.onset, moving && audio.onset ? 1 : 0, audio.onset ? 0.05 : 0.24, dt);
      if (moving) clock = time;
      const e = env.energy;
      const o = env.onset;
      // 距离 = 已行驶里程，粒子循环与景深节奏的唯一时基
      const travel = Math.max(0, pose.distance || 0);

      sky.group.position.set(pose.position.x, 0, pose.position.z);
      sky.uniforms.uEnergy.value = e;
      sky.moon.scale.setScalar(430 * (1 + e * 0.05 + o * 0.03));
      sky.moon.material.opacity = clamp(0.85 + e * 0.2 + o * 0.12, 0, 1);
      meteors.uniforms.uTime.value = clock;
      water.uniforms.uTime.value = clock;
      water.uniforms.uEnergy.value = e;
      water.uniforms.uOnset.value = o;
      water.uniforms.uCamPos.value.set(pose.position.x, pose.position.y, pose.position.z);
      water.uniforms.uResolution.value.set(dims.width, dims.height);

      // 前景：草丛风摆（能量越大摆得越明显）
      wind.uTime.value = clock;
      wind.uAmp.value = WIND_BASE + WIND_ENERGY * e;

      // 中景：灯晕 / 低雾
      glow.uniforms.uTime.value = clock;
      glow.uniforms.uEnergy.value = e;
      glow.uniforms.uOnset.value = o;
      glow.uniforms.uProj.value = projScale;

      // 浮尘：跟着相机走，沿轨按里程循环
      motes.group.position.set(pose.position.x, 0, pose.position.z);
      motes.uniforms.uTime.value = clock;
      motes.uniforms.uTravel.value = travel;
      motes.uniforms.uEnergy.value = e;
      motes.uniforms.uOnset.value = o;
      motes.uniforms.uProj.value = projScale;

      // 近景散焦光斑：贴着相机，只随注视方向转
      if (bokeh) {
        bokeh.group.position.set(pose.position.x, pose.position.y, pose.position.z);
        const dx = pose.look.x - pose.position.x;
        const dz = pose.look.z - pose.position.z;
        bokeh.group.rotation.y = Math.atan2(-dx, -dz);
        bokeh.uniforms.uTime.value = clock;
        bokeh.uniforms.uEnergy.value = e;
        bokeh.uniforms.uOnset.value = o;
        bokeh.uniforms.uProj.value = projScale;
      }

      // 体积光锥：钉在相机上，朝注视方向
      shaft.group.position.set(pose.position.x, pose.position.y, pose.position.z);
      shaft.group.lookAt(pose.look.x, pose.look.y, pose.look.z);
      shaft.uniforms.uStrength.value = SHAFT_STRENGTH * (0.75 + e * 0.55 + o * 0.5);

      headlight.position.set(pose.position.x + (pose.look.x - pose.position.x) * 0.12,
        1.7, pose.position.z + (pose.look.z - pose.position.z) * 0.12);
      headlight.intensity = 85 * (0.85 + o * 0.5 + e * 0.25);
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
      // 体积光锥是「相机上的东西」，镜像后方向是错的 —— 反射里不画它。
      shaft.group.visible = false;
      water.uniforms.uHasRefl.value = 1;
      const prevTarget = renderer.getRenderTarget();
      renderer.setRenderTarget(water.rt);
      renderer.render(scene, mc);
      renderer.setRenderTarget(prevTarget);
      water.mesh.visible = true;
      shaft.group.visible = true;
      return true;
    },

    // width/height 是画布「绘制缓冲」像素（css × DPR）：uResolution 服务于
    // gl_FragCoord（设备像素），反射 RT 与主画布 1:1 才不会有拉伸糊斑。
    // pr 为设备像素比 —— 点精灵的 gl_PointSize 是设备像素，得跟着缩放。
    resize(width, height, pr) {
      dims.width = width;
      dims.height = height;
      const ratio = pr && pr > 0 ? pr : dims.pr || 1;
      dims.pr = ratio;
      projScale = (height / (2 * Math.tan((48 * Math.PI / 180) / 2)));
      water.uniforms.uResolution.value.set(width, height);
      if (water.rt) water.rt.setSize(
        Math.max(320, Math.round(width * water.reflScale)),
        Math.max(180, Math.round(height * water.reflScale)));
    },

    stats() {
      return {
        reflection: water.enabled && world.reflectionEnabled, track: 'static',
        stations: stations.count, stationAddresses: stations.addresses,
        layers: {
          foliage: foliage.count, glow: glowItems.length, motes: motes.count,
          bokeh: !!bokeh, shaft: true, shade: !!shade, fog: FOG_DENSITY,
        },
      };
    },

    dispose() {
      scene.remove(...allGroups());
      scene.remove(hemi, moonLight, cityLight, headlight);
      const junk = [];
      allGroups().forEach((g) => g.traverse((o) => {
        if (o.geometry) junk.push(o.geometry);
        const mats = Array.isArray(o.material) ? o.material : (o.material ? [o.material] : []);
        mats.forEach((mt) => junk.push(mt));
      }));
      junk.forEach((x) => { try { x.dispose && x.dispose(); } catch (_) { /* 尽力而为 */ } });
      if (water.rt) water.rt.dispose();
      if (envRT) envRT.dispose();
      envRT = null;
      scene.environment = null;
      scene.fog = null;
    },
  };

  // renderer 只用于烘环境贴图；拿不到就跳过（材质照常，只是金属不发夜空）。
  world.renderer = opts.renderer || null;
  world.setPalette(opts.palette);
  return world;
}
