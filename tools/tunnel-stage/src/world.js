// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
//
// 「隧图 · 深空」世界层：星场、双股尾迹、跃迁流光、英雄门框、低频冲击波、
// 点阵天体槽位。所有背景元素按行驶行程取模回绕 —— 任意 seek 落点与顺播
// 到该处画面一致。音频只装饰（脉动/抖动/拉伸），永不移动路由或天体轨道。
//
// 着色器书写约定（见项目记忆 stage3d GLSL 坑）：浮点字面量一律带小数点；
// 不用 pow 处理可能为负的底数；GLSL 1 里 `wordProgress[wi]` 这类非常量下标
// 数组取值必须落在 GLSL ES 3.0 语义内（本文件只用常量下标或分支钳制）。

import { clamp, smooth, easeOutCubic, easeOutQuart, seededRandom } from './util.js';
import { routeCenter } from './camera.js';

export const TUNNEL_LENGTH = 3200;
// 尾迹与相机注视走 0.42 倍行程：镜头显得比星场慢半拍，纵深更耐看。
export const ROUTE_SHARE = 0.42;
// 天体槽位相对星场更快（0.72 倍），逼近镜头前才完成凝结。
export const ENTITY_SHARE = 0.72;
// 周期 1750 → 1200：6 槽位按 200 等距铺满整个周期，凝聚窗口（-260..0）
// 宽于槽位间距，任意时刻至少有一个、多数时候两个天体处于成形状态，
// 从进画第一秒起画面里就有实体，不再出现「只剩光圈」的空档。
const CELESTIAL_CYCLE = 1200;

// 点阵天体模板生成器：极简笔触 + shade 子结构通道（0..3 标识部件，
// 供材质着色分级与尺寸分级）。
function createTemplateFactory() {
  // 巨型行星：斐波那契球面 + 纬向暗纹 + 极冠辉点
  // shade: 0=纬线暗纹 1=主体表面 2=极冠辉点
  function planet(radius, count, seed) {
    const rand = seededRandom(seed);
    const pos = new Float32Array(count * 3);
    const shade = new Float32Array(count);
    const golden = Math.PI * (3 - Math.sqrt(5));
    const latBands = [-0.52, -0.18, 0.22, 0.55];
    for (let i = 0; i < count; i += 1) {
      const u = rand();
      if (u < 0.10) {
        const pole = rand() < 0.5 ? 1 : -1;
        const theta = rand() * Math.PI * 2;
        const capR = radius * (0.10 + rand() * 0.30);
        pos[i * 3] = Math.cos(theta) * capR;
        pos[i * 3 + 1] = pole * Math.sqrt(Math.max(0, radius * radius - capR * capR)) * (0.995 + rand() * 0.01);
        pos[i * 3 + 2] = Math.sin(theta) * capR;
        shade[i] = 2;
      } else if (u < 0.24) {
        const lat = latBands[Math.floor(rand() * latBands.length)] + (rand() - 0.5) * 0.03;
        const rr = Math.sqrt(Math.max(0, 1 - lat * lat)) * radius;
        const theta = rand() * Math.PI * 2;
        pos[i * 3] = Math.cos(theta) * rr;
        pos[i * 3 + 1] = lat * radius;
        pos[i * 3 + 2] = Math.sin(theta) * rr;
        shade[i] = 0;
      } else {
        const k = i + 0.5;
        const y = 1 - (k / count) * 2;
        const r = Math.sqrt(Math.max(0, 1 - y * y));
        const phi = k * golden;
        const jitter = 0.99 + rand() * 0.02;
        pos[i * 3] = Math.cos(phi) * r * radius * jitter;
        pos[i * 3 + 1] = y * radius * jitter;
        pos[i * 3 + 2] = Math.sin(phi) * r * radius * jitter;
        shade[i] = 1;
      }
    }
    return { pos, shade };
  }

  // 行星环：三段剖面 + 卡西尼缝
  // shade: 0=内亮带 1=中带 2=外散晕
  function rings(innerRadius, outerRadius, count, seed) {
    const rand = seededRandom(seed);
    const pos = new Float32Array(count * 3);
    const shade = new Float32Array(count);
    const span = outerRadius - innerRadius;
    for (let i = 0; i < count; i += 1) {
      const u = rand();
      let r;
      if (u < 0.40) { r = innerRadius + span * rand() * 0.30; shade[i] = 0; }
      else if (u < 0.70) { r = innerRadius + span * (0.34 + rand() * 0.28); shade[i] = 1; }
      else { r = innerRadius + span * (0.66 + Math.pow(rand(), 1.7) * 0.34); shade[i] = 2; }
      const theta = rand() * Math.PI * 2;
      const thick = (rand() - 0.5) * (shade[i] === 2 ? 1.1 : 0.30);
      pos[i * 3] = Math.cos(theta) * r;
      pos[i * 3 + 1] = thick;
      pos[i * 3 + 2] = Math.sin(theta) * r;
    }
    return { pos, shade };
  }

  // 环形空间站：12 模块外环 + 4 辐条 + 中轴龙骨 + 航行灯
  // shade: 0=骨架辐条 1=舱体模块 2=航行灯 3=中轴
  function station(radius, count, seed) {
    const rand = seededRandom(seed);
    const pos = new Float32Array(count * 3);
    const shade = new Float32Array(count);
    for (let i = 0; i < count; i += 1) {
      const u = rand();
      if (u < 0.46) {
        const modIdx = Math.floor(rand() * 12);
        const a = (modIdx / 12) * Math.PI * 2 + (rand() - 0.5) * 0.30;
        const r = radius + (rand() - 0.5) * 2.4;
        pos[i * 3] = Math.cos(a) * r;
        pos[i * 3 + 1] = Math.sin(a) * r;
        pos[i * 3 + 2] = (rand() - 0.5) * 2.2;
        shade[i] = 1;
      } else if (u < 0.70) {
        const spoke = Math.floor(rand() * 4);
        const a = (spoke / 4) * Math.PI * 2;
        const d = rand() * radius * 0.94;
        pos[i * 3] = Math.cos(a) * d;
        pos[i * 3 + 1] = Math.sin(a) * d;
        pos[i * 3 + 2] = (rand() - 0.5) * 0.5;
        shade[i] = 0;
      } else if (u < 0.90) {
        const r = Math.pow(rand(), 0.6) * 3.0;
        const a = rand() * Math.PI * 2;
        pos[i * 3] = Math.cos(a) * r;
        pos[i * 3 + 1] = Math.sin(a) * r;
        pos[i * 3 + 2] = (rand() - 0.5) * 10.0;
        shade[i] = 3;
      } else {
        const a = rand() * Math.PI * 2;
        pos[i * 3] = Math.cos(a) * radius;
        pos[i * 3 + 1] = Math.sin(a) * radius;
        pos[i * 3 + 2] = (rand() - 0.5) * 2.2;
        shade[i] = 2;
      }
    }
    return { pos, shade };
  }

  // 母舰：楔形龙骨 + 舰桥塔 + 双脊线 + 引擎阵 + 等离子尾焰
  // shade: 0=舰体 1=舰桥/脊线 2=引擎喷口 3=尾焰流光
  function flagship(scale, count, seed) {
    const rand = seededRandom(seed);
    const pos = new Float32Array(count * 3);
    const shade = new Float32Array(count);
    for (let i = 0; i < count; i += 1) {
      const u = rand();
      if (u < 0.40) {
        const v = rand();
        const halfSpan = (1 - Math.pow(v, 1.5)) * 36 * scale;
        pos[i * 3] = (rand() - 0.5) * 2 * halfSpan;
        pos[i * 3 + 1] = (rand() - 0.5) * (1 - Math.abs(pos[i * 3]) / (halfSpan + 0.01)) * 6.5 * scale;
        pos[i * 3 + 2] = (v - 0.5) * 64 * scale;
        // 舰艏冷色小面片：与舰艉暖色引擎带相对，航向才读得出来。
        shade[i] = pos[i * 3 + 2] < -22 * scale && rand() < 0.42 ? 1 : 0;
      } else if (u < 0.58) {
        if (rand() < 0.5) {
          // 舰桥塔：前 1/3 处隆起的指挥岛
          const w = rand();
          pos[i * 3] = (rand() - 0.5) * 6.5 * scale * (1 - w * 0.5);
          pos[i * 3 + 1] = (2.0 + w * 5.5) * scale;
          pos[i * 3 + 2] = (-18 + w * 14 + (rand() - 0.5) * 3) * scale;
        } else {
          // 双脊线
          const side = rand() < 0.5 ? -1 : 1;
          pos[i * 3] = side * (4.5 + rand() * 1.5) * scale;
          pos[i * 3 + 1] = (1.2 + rand() * 1.4) * scale;
          pos[i * 3 + 2] = (rand() - 0.5) * 48 * scale;
        }
        shade[i] = 1;
      } else if (u < 0.78) {
        // 引擎喷口阵列（4 具，舰艉分布）
        const eng = Math.floor(rand() * 4) - 1.5;
        pos[i * 3] = eng * 7.2 * scale + (rand() - 0.5) * 2.4;
        pos[i * 3 + 1] = (rand() - 0.5) * 2.6;
        pos[i * 3 + 2] = (30 + rand() * 4.5) * scale;
        shade[i] = 2;
      } else {
        // 等离子尾焰：明确位于舰艉，向后拉长发散
        const t = Math.pow(rand(), 1.4);
        const eng = Math.floor(rand() * 4) - 1.5;
        const spread = 1 + t * 3.2;
        pos[i * 3] = eng * 7.2 * scale * spread * 0.4 + (rand() - 0.5) * 2.0 * spread;
        pos[i * 3 + 1] = (rand() - 0.5) * 2.0 * spread;
        pos[i * 3 + 2] = (34 + t * 62) * scale;
        shade[i] = 3;
      }
    }
    // 相机沿隧道轴看，把生成的舰体旋进屏幕空间，观众读到的是宽大的
    // 载体剪影：屏幕 -x 是舰艏，+x 背着引擎阵列与尾焰。
    for (let i = 0; i < count; i += 1) {
      const idx = i * 3;
      const x = pos[idx];
      pos[idx] = pos[idx + 2] * 0.82;
      pos[idx + 1] *= 1.65;
      pos[idx + 2] = x * 0.72;
    }
    return { pos, shade };
  }

  // 侦察机：锐利三角翼 + 双引擎
  // shade: 0=机翼 1=机身 2=引擎
  function scout(scale, count, seed) {
    const rand = seededRandom(seed);
    const pos = new Float32Array(count * 3);
    const shade = new Float32Array(count);
    for (let i = 0; i < count; i += 1) {
      const u = rand();
      if (u < 0.55) {
        const v = rand();
        const halfSpan = (1 - v) * 8.5 * scale;
        pos[i * 3] = (rand() - 0.5) * 2 * halfSpan;
        pos[i * 3 + 1] = (rand() - 0.5) * 1.4 * scale;
        pos[i * 3 + 2] = (v - 0.5) * 14 * scale;
        shade[i] = 0;
      } else if (u < 0.82) {
        pos[i * 3] = (rand() - 0.5) * 2.2 * scale;
        pos[i * 3 + 1] = (rand() - 0.5) * 1.6 * scale;
        pos[i * 3 + 2] = (rand() - 0.5) * 15 * scale;
        shade[i] = 1;
      } else {
        const side = rand() < 0.5 ? -1 : 1;
        pos[i * 3] = side * (2.2 + rand() * 0.8) * scale;
        pos[i * 3 + 1] = (rand() - 0.5) * 0.8;
        pos[i * 3 + 2] = (7 + rand() * 4) * scale;
        shade[i] = 2;
      }
    }
    return { pos, shade };
  }

  return { planet, rings, station, flagship, scout };
}

export function createWorld(THREE, scene, { quality = 'high' } = {}) {
  const root = new THREE.Group();
  scene.add(root);
  const low = quality === 'low';
  let viewportAspect = 1;
  const factories = createTemplateFactory();

  /* ---------- 尽头辉光 + 暗角：单三角形全屏氛围层（1 draw call，无纹理） ----------
   * 不透明、renderOrder 垫底，先于一切加色元素铺满：底色与场景清屏色严格一致，
   * 只额外提供「隧道尽头的双色呼吸辉光」与四周暗角。中央阅读带压暗，
   * 辉光随低频起伏、20s 级缓慢漂移；reduced/关星流时整片隐藏。 */
  const backGeo = new THREE.BufferGeometry();
  backGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([
    -1, -1, 0, 3, -1, 0, -1, 3, 0,
  ]), 3));
  const backMat = new THREE.ShaderMaterial({
    depthTest: false,
    depthWrite: false,
    uniforms: {
      uTime: { value: 0 },
      uPulse: { value: 0 },
      uMotion: { value: 1 },
      uAspect: { value: 1 },
      uBg: { value: new THREE.Color('#05070a') },
      uGlowA: { value: new THREE.Color('#76bfae') },
      uGlowB: { value: new THREE.Color('#f2a900') },
    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = position.xy * 0.5 + 0.5;
            gl_Position = vec4(position.xy, 0.999, 1.0);
        }
    `,
    fragmentShader: `
        uniform float uTime, uPulse, uMotion, uAspect;
        uniform vec3 uBg, uGlowA, uGlowB;
        varying vec2 vUv;
        void main() {
            vec2 p = vUv - 0.5;
            vec2 pa = p * vec2(uAspect, 1.0);
            float r = length(pa);
            // 暗角：只压最远的四角（最多 22%），视线轻微收向灭点，不伤中下部星场
            float vig = 1.0 - smoothstep(0.78, 1.18, r) * 0.22;
            // 尽头主晕（松石）+ 暖核（琥珀）：紧挂在歌词上方，超慢漂移；
            // 峰值约 30/255，点出「隧道尽头有光」且足够绚丽，不洗灰中央阅读带。
            vec2 drift = vec2(sin(uTime * 0.05), cos(uTime * 0.043)) * 0.018 * uMotion;
            vec2 cA = vec2(0.0, 0.13) + drift;
            vec2 cB = cA + vec2(0.05, 0.04);
            float breathe = 0.85 + uPulse * 0.9 * uMotion;
            float glowA = exp(-dot(pa - cA, pa - cA) * 8.0) * 0.034 * breathe;
            float glowB = exp(-dot(pa - cB, pa - cB) * 13.0) * 0.020 * breathe;
            // 中央歌词阅读带：辉光最多保留 35%，不给歌词加底噪
            float keep = mix(0.35, 1.0, smoothstep(0.0, 0.20, abs(p.y - 0.02)));
            vec3 col = uBg * vig + (uGlowA * glowA + uGlowB * glowB) * keep;
            gl_FragColor = vec4(col, 1.0);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
        }
    `,
  });
  const backdrop = new THREE.Mesh(backGeo, backMat);
  backdrop.frustumCulled = false;
  backdrop.renderOrder = -10;
  root.add(backdrop);

  /* ---------- 星场：双层视差 ---------- */
  const STAR_FAR = low ? 420 : 640;
  const STAR_NEAR = low ? 60 : 110;
  const starCount = STAR_FAR + STAR_NEAR;
  const starBase = new Float32Array(starCount * 3);
  const starSizes = new Float32Array(starCount);
  const starSeeds = new Float32Array(starCount * 3);
  {
    const rand = seededRandom('tunnel-stars-v6');
    for (let i = 0; i < starCount; i += 1) {
      const near = i >= STAR_FAR;
      const angle = rand() * Math.PI * 2;
      const radius = near ? 18 + Math.pow(rand(), 1.1) * 120 : 40 + Math.pow(rand(), 0.8) * 380;
      starBase[i * 3] = Math.cos(angle) * radius;
      starBase[i * 3 + 1] = Math.sin(angle) * radius * (near ? 0.62 : 0.85);
      starBase[i * 3 + 2] = -rand() * TUNNEL_LENGTH;
      starSizes[i] = near ? 1.9 + rand() * 2.7 : 0.7 + rand() * 1.4;
      starSeeds[i * 3] = rand();
      starSeeds[i * 3 + 1] = rand();
      // 远星视差再压慢（0.32→0.26）：远近层速度差更大，纵深一眼可读。
      starSeeds[i * 3 + 2] = near ? 1.0 : 0.26;
    }
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.BufferAttribute(starBase, 3));
  starGeo.setAttribute('aSize', new THREE.BufferAttribute(starSizes, 1));
  starGeo.setAttribute('aSeed', new THREE.BufferAttribute(starSeeds, 3));
  const starMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      tint: { value: new THREE.Color('#8fa4b3') },
      accent: { value: new THREE.Color('#f2a900') },
      time: { value: 0 },
      travel: { value: 0 },
      pixelRatio: { value: 1 },
    },
    vertexShader: `
        attribute float aSize;
        attribute vec3 aSeed;
        uniform float time;
        uniform float travel;
        uniform float pixelRatio;
        varying float vAlpha;
        varying float vTwinkle;
        varying float vWarm;
        void main() {
            vec3 p = position;
            float parallax = aSeed.z;
            p.z = -mod(-position.z - travel * parallax, ${TUNNEL_LENGTH.toFixed(1)});
            vec4 mv = modelViewMatrix * vec4(p, 1.0);
            gl_Position = projectionMatrix * mv;
            float depth = max(0.1, -mv.z);
            gl_PointSize = clamp(aSize * pixelRatio * 300.0 / depth, 1.0, 26.0);
            float nearFade = smoothstep(14.0, 55.0, depth);
            float farFade = 1.0 - smoothstep(1600.0, 2700.0, depth);
            // 每颗星独立节律的缓慢闪烁（振幅 0.18，星点有呼吸不喧闹）
            vTwinkle = 0.82 + 0.18 * sin(time * (0.3 + aSeed.y * 0.5) + aSeed.x * 40.0);
            // 约三成星点走主题暖色，其余冷色：星场从此有色彩层次
            vWarm = smoothstep(0.62, 0.86, aSeed.x);
            vAlpha = nearFade * farFade * (0.20 + aSeed.x * 0.42) * vTwinkle;
        }
    `,
    fragmentShader: `
        uniform vec3 tint;
        uniform vec3 accent;
        varying float vAlpha;
        varying float vTwinkle;
        varying float vWarm;
        void main() {
            vec2 p = gl_PointCoord * 2.0 - 1.0;
            float r = dot(p, p);
            if (r > 1.0) discard;
            float core = exp(-r * 7.0);
            float halo = exp(-r * 2.4) * 0.3 * vTwinkle;
            vec3 col = mix(tint, accent, vWarm * 0.75);
            gl_FragColor = vec4(col * (core * 1.45 + halo), (core + halo) * vAlpha);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
        }
    `,
  });
  const starPoints = new THREE.Points(starGeo, starMat);
  starPoints.frustumCulled = false;
  root.add(starPoints);

  /* ---------- 英雄门框：给歌词一块可读的前景舞台 ---------- */
  const heroGate = new THREE.Group();
  heroGate.position.z = -42;
  const gateArcMaterials = [];
  const gateProgressLines = [];
  const gateGeometries = [];
  for (let g = 0; g < 4; g += 1) {
    const start = g * Math.PI * 0.5 + 0.16;
    const curve = new THREE.EllipseCurve(0, 0, 27, 14, start, start + Math.PI * 0.5 - 0.32, false, 0);
    const points = curve.getPoints(96).map((p) => new THREE.Vector3(p.x, p.y, 0));
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color: new THREE.Color('#f2a900'),
      transparent: true,
      opacity: 0.30 - g * 0.025,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const line = new THREE.Line(geometry, material);
    line.rotation.z = g % 2 ? 0.025 : -0.018;
    heroGate.add(line);
    gateGeometries.push(geometry);
    gateArcMaterials.push(material);
    // 进度亮线：同弧线克隆，drawRange 由逐字时间轴推进。
    const brightGeometry = geometry.clone();
    brightGeometry.setDrawRange(0, 0);
    const brightMaterial = material.clone();
    brightMaterial.opacity = 0.75;
    const bright = new THREE.Line(brightGeometry, brightMaterial);
    bright.rotation.copy(line.rotation);
    bright.position.z = 0.02;
    heroGate.add(bright);
    gateProgressLines.push(bright);
    gateGeometries.push(brightGeometry);
  }
  root.add(heroGate);

  /* ---------- 双股尾迹：世界锚定的带状轨道 ---------- */
  // 路由表达式与 camera.js 的 routeCenter/wakeRoute 同式（GLSL 侧权威拷贝）。
  const routeGLSL = `
      vec2 routeCenterAt(float s) {
          return vec2(sin(s*0.0031)*8.0+sin(s*0.0073+0.8)*4.0,
              cos(s*0.0027+0.4)*4.0+sin(s*0.0061)*2.0);
      }
      vec3 wakeAt(float s, float lane, float motion, float travel) {
          float phase=s*0.009+0.75*sin(s*0.0021)
              +0.32*sin(s*0.0053+lane*1.7)+lane*3.14159265;
          float radius=38.0+12.0*sin(s*0.0037+lane*1.9)
              +6.0*cos(s*0.0081+lane*0.6);
          vec2 orbit=vec2(cos(phase)*radius,
              sin(phase)*(22.0+7.0*cos(s*0.0043+lane)));
          orbit+=vec2(sin(s*0.0059+lane*2.4)*7.0,
              cos(s*0.0077+lane)*3.5);
          return vec3(routeCenterAt(s)*motion+orbit,-(s-travel));
      }`;
  const RAIL_SEGMENTS = low ? 320 : 640;
  const RAIL_STEP = low ? 8 : 4;
  // 每段 6 顶点两个三角（左下/右下/左上 ×2），aRoute 记 (段地址, 股道, 横向侧)。
  const railAddress = new Float32Array(RAIL_SEGMENTS * 2 * 6 * 3);
  const railCorners = [[0, -1], [1, -1], [0, 1], [0, 1], [1, -1], [1, 1]];
  {
    let railVertex = 0;
    for (let lane = 0; lane < 2; lane += 1) {
      for (let i = 0; i < RAIL_SEGMENTS; i += 1) {
        for (const [end, side] of railCorners) {
          railAddress[railVertex * 3] = i + end;
          railAddress[railVertex * 3 + 1] = lane;
          railAddress[railVertex * 3 + 2] = side;
          railVertex += 1;
        }
      }
    }
  }
  const railGeo = new THREE.BufferGeometry();
  railGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(RAIL_SEGMENTS * 2 * 6 * 3), 3));
  railGeo.setAttribute('aRoute', new THREE.BufferAttribute(railAddress, 3));
  const railMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    uniforms: {
      tint: { value: new THREE.Color('#76bfae') },
      accent: { value: new THREE.Color('#f2a900') },
      time: { value: 0 }, travel: { value: 0 },
      motion: { value: 1 }, pulse: { value: 0 },
      pixelRatio: { value: 1 }, glow: { value: 1 },
      viewport: { value: new THREE.Vector2(1, 1) },
    },
    vertexShader: `
        attribute vec3 aRoute;
        uniform float travel,motion,time,pulse,glow;
        uniform vec2 viewport;
        varying float vSide,vLane,vAlpha,vFlash;
        ${routeGLSL}
        void main() {
            // 世界锚定采样；低档保持相同航道长度。
            float s=(floor(travel/${RAIL_STEP.toFixed(1)})+aRoute.x)*${RAIL_STEP.toFixed(1)};
            vec3 p=wakeAt(s,aRoute.y,motion,travel);
            vec4 mv=modelViewMatrix*vec4(p,1.0);
            vec4 clip=projectionMatrix*mv;
            vec4 next=projectionMatrix*modelViewMatrix*vec4(wakeAt(s+0.5,aRoute.y,motion,travel),1.0);
            vec2 delta=(next.xy/max(next.w,0.1)-clip.xy/max(clip.w,0.1))*viewport;
            vec2 tangent=delta/max(length(delta),0.001);
            vec2 normal=vec2(-tangent.y,tangent.x);
            float width=(2.8+0.6*sin(s*0.013+aRoute.y*2.0))*mix(0.5,1.0,1.0-smoothstep(180.0,1300.0,-mv.z));
            clip.xy+=normal*aRoute.z*width*2.0/viewport*clip.w;
            gl_Position=clip;
            vSide=aRoute.z;vLane=aRoute.y;
            float depth=max(0.0,-mv.z);
            float gaps=0.72+0.28*smoothstep(-0.4,0.5,sin(s*0.024+aRoute.y*2.0));
            // 沿轨流光走得更快（0.11→0.14），两股错相，持续向前奔涌
            float flow=fract(s*0.0018-time*0.14+aRoute.y*0.37);
            float flashDistance=(flow-0.5)*15.0;
            vFlash=exp(-flashDistance*flashDistance);
            float envelope=0.55+0.45*sin(s*0.007+aRoute.y*2.2);
            // 中央留给歌词阅读：尾迹框景而不是穿词。
            vec2 ndc=clip.xy/max(clip.w,0.1);
            float reading=smoothstep(0.35,0.75,length(ndc*vec2(1.0,1.5)));
            vAlpha=smoothstep(18.0,85.0,depth)
                *(1.0-smoothstep(1700.0,2500.0,depth))
                *gaps*(0.22+envelope*0.16+vFlash*0.52)
                *(0.2+reading*0.8)*(1.0+pulse*0.35);
        }`,
    fragmentShader: `
        uniform vec3 tint,accent;
        uniform float glow;
        varying float vSide,vLane,vAlpha,vFlash;
        void main() {
            float crossSection=exp(-vSide*vSide*5.0)
                +exp(-vSide*vSide*1.5)*0.22*glow;
            vec3 color=mix(tint,accent,vLane);
            // 轻微提饱和：两股尾迹的松石/琥珀更鲜，大屏不发灰
            float luma=dot(color,vec3(0.299,0.587,0.114));
            color=mix(vec3(luma),color,1.28);
            gl_FragColor=vec4(color*(1.0+vFlash*0.85),
                crossSection*vAlpha);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
        }`,
  });
  const railMesh = new THREE.Mesh(railGeo, railMat);
  railMesh.frustumCulled = false;
  root.add(railMesh);

  /* ---------- 纵深轮廓：同一 draw call 的稀疏断弧 ---------- */
  const DEPTH_GATES = low ? 8 : 14;
  const GATE_STEPS = 128;
  const gateAddresses = new Float32Array(DEPTH_GATES * GATE_STEPS * 6 * 3);
  let gateVertex = 0;
  for (let g = 0; g < DEPTH_GATES; g += 1) {
    for (let a = 0; a < GATE_STEPS; a += 1) {
      for (const [end, side] of railCorners) {
        gateAddresses[gateVertex++] = g;
        gateAddresses[gateVertex++] = (a + end) / GATE_STEPS * Math.PI * 2;
        gateAddresses[gateVertex++] = side;
      }
    }
  }
  const depthGeo = new THREE.BufferGeometry();
  depthGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(gateAddresses.length), 3));
  depthGeo.setAttribute('aGate', new THREE.BufferAttribute(gateAddresses, 3));
  const depthMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    uniforms: {
      travel: { value: 0 }, time: { value: 0 }, pulse: { value: 0 }, motion: { value: 1 },
      tint: { value: new THREE.Color('#76bfae') }, accent: { value: new THREE.Color('#f2a900') },
    },
    vertexShader: `
      attribute vec3 aGate;
      uniform float travel,time,pulse,motion;
      varying float vSide,vAlpha,vNear,vAngle,vHaze;
      ${routeGLSL}
      void main() {
        float span=${(DEPTH_GATES * 110).toFixed(1)};
        float depth=mod(aGate.x*110.0-travel,span);
        float s=travel+depth;
        // 呼吸 ±1.6%，低频额外 ±1.2%（原 1.2/0.8）
        float breath=1.0+sin(time*0.75-s*0.004)*0.016*motion+pulse*0.012*motion;
        // 螺旋扭转：门环随逼近缓慢旋转，整段隧道像被拧着吸入灭点
        float angle=aGate.y+0.10*sin(s*0.0018)*motion+s*0.00042*motion;
        // 强制透视：远端再收 10%，灭点更集中、推进感更强
        float taper=1.0-0.10*smoothstep(200.0,span,depth);
        vec2 radius=vec2(96.0,58.0)*breath*taper+vec2(aGate.z*0.42);
        vec2 center=routeCenterAt(s)*motion;
        vec3 p=vec3(center+vec2(cos(angle),sin(angle))*radius,-depth);
        vec4 clip=projectionMatrix*modelViewMatrix*vec4(p,1.0);
        gl_Position=clip;
        vec2 ndc=clip.xy/max(clip.w,0.1);
        float reading=smoothstep(0.20,0.72,length(ndc*vec2(1.0,1.7)));
        vSide=aGate.z;vAngle=aGate.y;
        vNear=1.0-smoothstep(70.0,700.0,depth);
        // 空气透视：远端门环沉进黑里，层次逐层分离
        vHaze=1.0-smoothstep(640.0,span-60.0,depth);
        vAlpha=smoothstep(24.0,100.0,depth)
          *(1.0-smoothstep(${(DEPTH_GATES * 58).toFixed(1)},span,depth))
          *(0.09+vNear*0.36)*(0.12+reading*0.88)*(1.0+pulse*0.12);
      }`,
    fragmentShader: `
      uniform vec3 tint,accent;
      varying float vSide,vAlpha,vNear,vAngle,vHaze;
      void main() {
        float arc=smoothstep(0.12,0.28,abs(sin(vAngle*2.0)));
        float edge=exp(-vSide*vSide*3.4);
        // 近处暖色占比 60%，冷远暖近对比更强
        vec3 color=mix(tint,accent,vNear*0.60);
        float luma=dot(color,vec3(0.299,0.587,0.114));
        color=mix(vec3(luma),color,1.30);
        color*=mix(0.40,1.0,vHaze);
        gl_FragColor=vec4(color,edge*arc*vAlpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const depthMesh = new THREE.Mesh(depthGeo, depthMat);
  depthMesh.frustumCulled = false;
  root.add(depthMesh);

  /* ---------- 跃迁流光：静态端点 + 播放时钟回绕 ---------- */
  const STREAK_COUNT = low ? 110 : 220;
  const streakSeeds = new Float32Array(STREAK_COUNT * 2 * 3);
  const streakEnds = new Float32Array(STREAK_COUNT * 2);
  const streakPos = new Float32Array(STREAK_COUNT * 2 * 3);
  {
    const rand = seededRandom('tunnel-warp-v1');
    for (let i = 0; i < STREAK_COUNT; i += 1) {
      const angle = rand() * Math.PI * 2;
      const radius = 24 + Math.pow(rand(), 1.3) * 110;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius * 0.7;
      const z = -rand() * TUNNEL_LENGTH;
      const seed = [rand(), rand(), rand()];
      for (let e = 0; e < 2; e += 1) {
        const index = i * 2 + e;
        streakPos[index * 3] = x;
        streakPos[index * 3 + 1] = y;
        streakPos[index * 3 + 2] = z;
        streakSeeds.set(seed, index * 3);
        streakEnds[index] = e;
      }
    }
  }
  const streakGeo = new THREE.BufferGeometry();
  streakGeo.setAttribute('position', new THREE.BufferAttribute(streakPos, 3));
  streakGeo.setAttribute('aSeed', new THREE.BufferAttribute(streakSeeds, 3));
  streakGeo.setAttribute('aEnd', new THREE.BufferAttribute(streakEnds, 1));
  const streakMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      tint: { value: new THREE.Color('#cfd8dd') },
      accent: { value: new THREE.Color('#f2a900') },
      travel: { value: 0 },
      stretch: { value: 0 },
      glow: { value: 1 },
    },
    vertexShader: `
        attribute vec3 aSeed;
        attribute float aEnd;
        uniform float travel, stretch;
        varying float vAlpha;
        varying float vWarm;
        void main() {
            vWarm=smoothstep(0.7,0.92,aSeed.z);
            vec3 p = position;
            p.z = -mod(-position.z - travel, ${TUNNEL_LENGTH.toFixed(1)});
            // 双端共享同一回绕地址：回收缝上不拉出横跨画面的长线。
            float len = 3.0 + stretch * (26.0 + aSeed.y * 72.0);
            float headDepth = -p.z;
            p.z -= aEnd * len;
            vec4 mv = modelViewMatrix * vec4(p, 1.0);
            gl_Position = projectionMatrix * mv;
            float depth = max(0.1, -mv.z);
            float fade = smoothstep(24.0, 85.0, headDepth)
                * (1.0 - smoothstep(1400.0, 2400.0, depth));
            vec2 ndc=gl_Position.xy/max(gl_Position.w,0.1);
            fade *= 0.18+0.82*smoothstep(0.25,0.8,length(ndc*vec2(1.0,1.5)));
            vAlpha = fade * stretch * (0.14 + aSeed.x * 0.40)
                * mix(1.0, 0.08, aEnd);
        }
    `,
    fragmentShader: `
        uniform vec3 tint;
        uniform vec3 accent;
        uniform float glow;
        varying float vAlpha;
        varying float vWarm;
        void main() {
            vec3 col = mix(tint, accent, vWarm * 0.7);
            gl_FragColor = vec4(col * (1.0 + glow * 0.45), vAlpha);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
        }
    `,
  });
  const streakLines = new THREE.LineSegments(streakGeo, streakMat);
  streakLines.frustumCulled = false;
  root.add(streakLines);

  /* ---------- 低频冲击波脉冲环 ---------- */
  const PULSE_COUNT = 2;
  const pulseGeo = new THREE.RingGeometry(0.989, 1.0, 96);
  const pulses = [];
  for (let i = 0; i < PULSE_COUNT; i += 1) {
    const m = new THREE.Mesh(pulseGeo, new THREE.MeshBasicMaterial({
      color: new THREE.Color('#f2a900'),
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }));
    m.visible = false;
    root.add(m);
    pulses.push({ mesh: m, start: -Infinity, life: 1.2 });
  }
  let pulseCursor = 0;
  let prevOnset = 0;
  let lastPulseTime = -Infinity;

  /* ---------- 点阵天体槽位 ---------- */
  const ENTITY_SLOTS = 6;
  const POINTS_PER_ENTITY = low ? 1200 : 2400;
  const totalEntityPoints = ENTITY_SLOTS * POINTS_PER_ENTITY;
  const entityTargets = new Float32Array(totalEntityPoints * 3);
  const entitySeeds = new Float32Array(totalEntityPoints * 3);
  const entitySizes = new Float32Array(totalEntityPoints);
  const entityShade = new Float32Array(totalEntityPoints);
  const templates = {
    flagship: factories.flagship(1.0, POINTS_PER_ENTITY, 'seed-flagship-v2'),
    planet: factories.planet(30, POINTS_PER_ENTITY, 'seed-planet-v2'),
    rings: factories.rings(34, 62, POINTS_PER_ENTITY, 'seed-rings-v2'),
    station: factories.station(38, POINTS_PER_ENTITY, 'seed-station-v3'),
    scout: factories.scout(2.0, POINTS_PER_ENTITY, 'seed-scout-v2'),
  };
  // 分镜槽位：沿周期 200 等距铺排，槽 0 初始就在黄金展示深度（进画即见实体）；
  // 体量按「近大远小」分配，近处母舰/空间站给足压迫感，远处行星/侦察机做点缀。
  const slotConfigs = [
    { type: 'flagship', initialZ: -150, x: -44, y: -24, rotSpeed: 0.018, rotPhase: 0, scale: 0.85 },
    { type: 'planet', initialZ: -320, x: 36, y: 19, rotSpeed: 0.042, rotPhase: 1.2, scale: 0.88 },
    { type: 'rings', initialZ: -520, x: -40, y: 11, rotSpeed: 0.055, rotPhase: 2.4, scale: 0.84 },
    { type: 'station', initialZ: -720, x: 31, y: -15, rotSpeed: 0.032, rotPhase: 3.1, scale: 1.2 },
    { type: 'scout', initialZ: -920, x: -15, y: 19, rotSpeed: 0.075, rotPhase: 4.0, scale: 0.8 },
    { type: 'planet', initialZ: -1120, x: 40, y: 23, rotSpeed: 0.034, rotPhase: 5.3, scale: 0.72 },
  ];
  // 环带预设倾角
  const slotTilt = [
    { x: 0.06, z: 0.0 },
    { x: 0.18, z: -0.10 },
    { x: 0.72, z: 0.28 },
    { x: 0.48, z: 0.32 },
    { x: -0.06, z: 0.06 },
    { x: 0.12, z: 0.04 },
  ];
  // 每点尺寸只依赖 (槽位类型, shade)：构建期一次写入，逐帧路径不再触碰。
  {
    for (let s = 0; s < ENTITY_SLOTS; s += 1) {
      const type = slotConfigs[s].type;
      const tmpl = templates[type];
      const offset = s * POINTS_PER_ENTITY;
      for (let p = 0; p < POINTS_PER_ENTITY; p += 1) {
        const sh = tmpl.shade[p];
        entityShade[offset + p] = sh;
        entitySizes[offset + p] =
          type === 'flagship' ? (sh === 3 ? 2.0 : sh === 2 ? 1.9 : 1.5) :
          type === 'planet' ? (sh === 2 ? 2.4 : sh === 0 ? 1.4 : 1.9) :
          type === 'rings' ? (sh === 0 ? 1.8 : sh === 2 ? 1.0 : 1.4) :
          type === 'station' ? (sh === 2 ? 1.7 : 1.3) :
          (sh === 2 ? 1.8 : 1.3);
      }
    }
  }
  const entityGeo = new THREE.BufferGeometry();
  entityGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(totalEntityPoints * 3), 3).setUsage(THREE.DynamicDrawUsage));
  entityGeo.setAttribute('aTarget', new THREE.BufferAttribute(entityTargets, 3).setUsage(THREE.DynamicDrawUsage));
  entityGeo.setAttribute('aColor', new THREE.BufferAttribute(new Float32Array(totalEntityPoints * 3), 3).setUsage(THREE.DynamicDrawUsage));
  entityGeo.setAttribute('aSeed', new THREE.BufferAttribute(entitySeeds, 3).setUsage(THREE.DynamicDrawUsage));
  entityGeo.setAttribute('aSize', new THREE.BufferAttribute(entitySizes, 1).setUsage(THREE.DynamicDrawUsage));
  entityGeo.setAttribute('aShade', new THREE.BufferAttribute(entityShade, 1).setUsage(THREE.DynamicDrawUsage));
  entityGeo.setAttribute('aNormal', new THREE.BufferAttribute(new Float32Array(totalEntityPoints * 3), 3).setUsage(THREE.DynamicDrawUsage));
  const entityMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      pixelRatio: { value: 1 },
      time: { value: 0 },
      breath: { value: 0 },
      audioPulse: { value: 0 },
    },
    vertexShader: `
        attribute vec3 aTarget;
        attribute vec3 aColor;
        attribute vec3 aSeed;
        attribute vec3 aNormal;
        attribute float aSize;
        attribute float aShade;
        uniform float pixelRatio;
        uniform float time;
        uniform float breath;
        uniform float audioPulse;
        varying vec3 vColor;
        varying float vAlpha;
        varying float vLight;
        void main() {
            float cohesion = clamp(aSeed.y, 0.0, 1.0);
            vec3 currentPos = mix(position, aTarget, cohesion);
            // 凝聚后的有机微呼吸
            vec3 jitterDir = normalize(currentPos - aTarget + vec3(0.001));
            currentPos += jitterDir * sin(time * 1.4 + aSeed.x * 20.0) * breath * cohesion * 0.35;
            // 音频位移压到很小，成形剪影保持稳定
            vec3 pulseDir = normalize(aTarget - currentPos + vec3(0.001));
            currentPos += pulseDir * sin(time * 2.8 + aSeed.x * 31.0) * audioPulse * cohesion * 0.07;
            // 未凝聚时的缓慢漂浮
            currentPos.y += sin(time * 0.7 + aSeed.x * 12.0) * (1.0 - cohesion) * 0.8;
            // 随天体旋转的局部径向法线，不受槽位横移/航道深度污染。
            vec3 localNormal = normalize(aNormal + vec3(0.0001));
            float lambert = max(0.0, dot(localNormal, normalize(vec3(-0.55, 0.72, 0.85))));
            // 环境光压低、漫反射与边缘光抬升：亮面更亮、暗面更沉，体积感更强
            float rim = pow(1.0 - abs(localNormal.z), 2.8);
            vLight = clamp(0.14 + lambert * 1.02 + rim * 0.38, 0.14, 1.30);
            vec4 mv = modelViewMatrix * vec4(currentPos, 1.0);
            gl_Position = projectionMatrix * mv;
            float depth = max(0.1, -mv.z);
            gl_PointSize = clamp((aSize * 1.12 + cohesion * (1.0 + audioPulse * 0.26)) * pixelRatio * 370.0 / depth, 1.0, 40.0);
            float nearFade = smoothstep(12.0, 50.0, depth);
            // 周期缩短到 1200，最远天体也落在远裁淡入之内
            float farFade = 1.0 - smoothstep(1500.0, 2400.0, depth);
            // 按空间散布溶解，而不是整片淡出：离开剪影的粒子仍可见。
            vAlpha = nearFade * farFade * clamp(aSeed.z, 0.0, 1.0)
                * (0.78 + cohesion * 0.30) * (1.0 + audioPulse * 0.12);
            vColor = aColor;
        }
    `,
    fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;
        varying float vLight;
        void main() {
            vec2 p = gl_PointCoord * 2.0 - 1.0;
            float r = dot(p, p);
            if (r > 1.0) discard;
            float core = exp(-r * 7.0);
            float halo = exp(-r * 2.2) * 0.24;
            float edge = 1.0 - smoothstep(0.08, 1.0, r);
            vec3 col = vColor;
            // 天体点色提饱和：松石行星/琥珀环带/骨白舰体在大屏上更鲜艳
            float luma = dot(col, vec3(0.299, 0.587, 0.114));
            col = mix(vec3(luma), col, 1.22);
            gl_FragColor = vec4(col * (core * 1.5 + halo) * vLight, (core + halo) * vAlpha * edge);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
        }
    `,
  });
  const entityPoints = new THREE.Points(entityGeo, entityMat);
  entityPoints.frustumCulled = false;
  root.add(entityPoints);

  /* ---------- 调色 ---------- */
  const paletteColors = {
    accent: new THREE.Color('#f2a900'),
    secondary: new THREE.Color('#76bfae'),
    ink: new THREE.Color('#f2f0e9'),
    muted: new THREE.Color('#a7afb1'),
    danger: new THREE.Color('#e06c5f'),
    background: new THREE.Color('#0a0d11'),
  };
  function applyEntityPalette() {
    const arr = entityGeo.attributes.aColor.array;
    const { accent, secondary, ink, muted, danger } = paletteColors;
    for (let s = 0; s < ENTITY_SLOTS; s += 1) {
      const type = slotConfigs[s].type;
      const tmpl = templates[type];
      const offset = s * POINTS_PER_ENTITY;
      for (let p = 0; p < POINTS_PER_ENTITY; p += 1) {
        const gi = offset + p;
        const pi = gi * 3;
        const sh = tmpl.shade[p];
        let c;
        if (type === 'flagship') {
          if (sh === 3) c = accent;        // 尾焰：琥珀金渐消
          else if (sh === 2) c = danger;   // 引擎喷口：主题暖色高光
          else if (sh === 1) c = secondary; // 舰桥/脊线：松石信号灯
          else c = ink;                    // 舰体：骨白
          const dim = sh === 3 ? 0.9 : 1.0;
          arr[pi] = c.r * dim; arr[pi + 1] = c.g * dim; arr[pi + 2] = c.b * dim;
        } else if (type === 'planet') {
          if (sh === 2) { arr[pi] = secondary.r * 1.25; arr[pi + 1] = secondary.g * 1.25; arr[pi + 2] = secondary.b * 1.25; }
          else if (sh === 0) { arr[pi] = secondary.r * 0.5; arr[pi + 1] = secondary.g * 0.55; arr[pi + 2] = secondary.b * 0.6; }
          else { arr[pi] = secondary.r * 0.85; arr[pi + 1] = secondary.g * 0.92; arr[pi + 2] = secondary.b; }
        } else if (type === 'rings') {
          if (sh === 0) { arr[pi] = accent.r * 1.3; arr[pi + 1] = accent.g * 1.3; arr[pi + 2] = accent.b * 1.3; }
          else if (sh === 1) { arr[pi] = accent.r; arr[pi + 1] = accent.g; arr[pi + 2] = accent.b; }
          else { arr[pi] = accent.r * 0.55; arr[pi + 1] = accent.g * 0.55; arr[pi + 2] = accent.b * 0.55; }
        } else if (type === 'station') {
          if (sh === 2) c = danger;      // 航行灯：主题暖色高光
          else if (sh === 3) c = accent; // 中轴：琥珀
          else if (sh === 1) c = ink;    // 舱体：骨白
          else c = muted;                // 辐条骨架：金属灰
          arr[pi] = c.r; arr[pi + 1] = c.g; arr[pi + 2] = c.b;
        } else {
          // 侦察机
          if (sh === 2) c = danger;
          else if (sh === 1) c = accent;
          else c = secondary;
          arr[pi] = c.r; arr[pi + 1] = c.g; arr[pi + 2] = c.b;
        }
      }
    }
    entityGeo.attributes.aColor.needsUpdate = true;
    entityGeo.attributes.aShade.needsUpdate = true;
  }
  applyEntityPalette();

  function setPalette(palette = {}) {
    const pick = (key, fallback) => {
      const v = palette[key];
      return typeof v === 'string' && v ? v : fallback;
    };
    paletteColors.accent.set(pick('accent', '#f2a900'));
    paletteColors.secondary.set(pick('secondary', '#76bfae'));
    paletteColors.ink.set(pick('ink', '#f2f0e9'));
    paletteColors.muted.set(pick('muted', '#a7afb1'));
    // 深空世界是独立舞台：跟随当前主题，但向经典琥珀/松石深空配色锚定 40%，
    // 防止低饱和 folia 主题把星体与光轨洗成灰调（歌词层仍完全跟随主题）。
    const ANCHOR = 0.40;
    paletteColors.accent.lerp(new THREE.Color('#f2a900'), ANCHOR);
    paletteColors.secondary.lerp(new THREE.Color('#76bfae'), ANCHOR);
    paletteColors.ink.lerp(new THREE.Color('#f2f0e9'), ANCHOR);
    paletteColors.muted.lerp(new THREE.Color('#a7afb1'), ANCHOR);
    paletteColors.background.set(pick('background', '#0a0d11'));
    paletteColors.danger.copy(paletteColors.accent).lerp(paletteColors.ink, 0.12);
    // 直接沿用主题底色（不再二次压暗）：Midnight 底本身近黑，大屏依旧是黑场；
    // 亮色主题靠下方 0.004 线性上限兜底。边缘星带行不会被采样成全零。
    const bgColor = paletteColors.background.clone();
    bgColor.multiplyScalar(Math.min(1, 0.004 / Math.max(0.0001, bgColor.r, bgColor.g, bgColor.b)));
    if (scene.background && scene.background.copy) scene.background.copy(bgColor);
    else scene.background = bgColor;
    if (scene.fog && scene.fog.color) scene.fog.color.copy(bgColor);
    backMat.uniforms.uBg.value.copy(bgColor);
    backMat.uniforms.uGlowA.value.copy(paletteColors.secondary);
    backMat.uniforms.uGlowB.value.copy(paletteColors.accent);
    starMat.uniforms.tint.value.copy(paletteColors.muted).lerp(paletteColors.secondary, 0.30);
    starMat.uniforms.accent.value.copy(paletteColors.accent);
    streakMat.uniforms.tint.value.copy(paletteColors.ink).lerp(paletteColors.secondary, 0.22);
    streakMat.uniforms.accent.value.copy(paletteColors.accent);
    railMat.uniforms.tint.value.copy(paletteColors.secondary);
    railMat.uniforms.accent.value.copy(paletteColors.accent);
    depthMat.uniforms.tint.value.copy(paletteColors.secondary);
    depthMat.uniforms.accent.value.copy(paletteColors.accent);
    gateArcMaterials.forEach((m) => m.color.copy(paletteColors.accent));
    pulses.forEach((p) => p.mesh.material.color.copy(paletteColors.accent));
    applyEntityPalette();
  }

  /* ---------- 逐帧更新 ---------- */
  // ctx: { travel, travelAhead, travelBehind, motion, bass(已平滑), vocal, onset,
  //        playing, reduced, glow, warp, objects, roll,
  //        lineClock: { hasLine, progress, lineStart, vocalEnd, hold, pause, dissolve } }
  // 包络由 main.js 统一平滑；这里只检测起音上升沿，环的寿命用播放时间。
  const objPositions = entityGeo.attributes.position.array;
  const objTargets = entityGeo.attributes.aTarget.array;
  const objSeedsArr = entityGeo.attributes.aSeed.array;
  const objNormals = entityGeo.attributes.aNormal.array;

  function update(time, ctx) {
    const bassSmooth = Number(ctx.bass) || 0;
    const reduced = ctx.reduced;
    const warpOn = ctx.warp !== false;
    const clock = ctx.lineClock || {};

    // 已有起音包络的上升沿；寿命跟播放时间，暂停不消耗节拍环。
    const onset = Number(ctx.onset) || 0;
    if (ctx.seek || reduced || !warpOn) {
      prevOnset = onset;
      lastPulseTime = -Infinity;
      pulses.forEach((p) => { p.start = -Infinity; p.mesh.visible = false; });
    }
    if (ctx.playing && !ctx.seek && !reduced && warpOn && onset > 0.45 && prevOnset <= 0.45
      && time - lastPulseTime >= 0.48) {
      const p = pulses[pulseCursor % PULSE_COUNT];
      pulseCursor += 1;
      p.start = time;
      lastPulseTime = time;
      p.mesh.visible = true;
    }
    prevOnset = onset;
    pulses.forEach((p) => {
      if (!p.mesh.visible) return;
      const t = (time - p.start) / p.life;
      if (t >= 1) { p.mesh.visible = false; p.mesh.material.opacity = 0; return; }
      // 四次缓出：起音瞬间快速弹开（26→108），再沿隧道滑行消散
      const grow = easeOutQuart(t);
      const scale = 26 + grow * 82;
      p.mesh.scale.set(scale, scale * 0.60, 1);
      p.mesh.position.set(0, 0, -46 - grow * 70);
      p.mesh.material.opacity = smooth(t / 0.10) * (1 - t) * 0.2;
    });

    // 门框：句内正弦 + 低频脉动；唱完按 hold/pause/dissolve 淡出。
    // 滚转补偿 0.35：机位侧滚时门框跟着转一点，歌词仍正对观众。
    heroGate.visible = warpOn;
    heroGate.rotation.z = reduced ? 0 : Math.sin(time * 0.16) * 0.010 + (Number(ctx.roll) || 0) * 0.35;
    const gatePulse = 0.09 + bassSmooth * 0.12 + (clock.hasLine ? Math.sin(clamp(clock.progress) * Math.PI) * 0.10 : 0);
    gateArcMaterials.forEach((m, index) => {
      m.opacity = Math.max(0.03, gatePulse - index * 0.035);
    });
    const gateEnd = Math.max(Number(clock.lineStart) + 0.001 || 0.001, Number(clock.vocalEnd) || 0);
    const lyricTime = Number(clock.time) || 0;
    const gateProgress = clock.hasLine ? clamp((lyricTime - clock.lineStart) / Math.max(0.001, gateEnd - clock.lineStart)) : 0;
    const gateFadeStart = gateEnd + Math.min(0.8,
      clamp(Number(clock.hold), 0, 0.8) * 0.5 + clamp(Number(clock.pause), 0, 3) * 0.15);
    const gateFade = 1 - smooth((lyricTime - gateFadeStart) / (0.45 + clamp(Number(clock.dissolve), 0, 1) * 0.55));
    gateProgressLines.forEach((line, index) => {
      const fraction = clamp(gateProgress * 4 - index);
      const count = line.geometry.attributes.position.count;
      line.geometry.setDrawRange(0, fraction > 0 ? Math.max(2, Math.ceil(fraction * count)) : 0);
      line.material.color.copy(gateArcMaterials[index].color);
      line.material.opacity = gateFade * (0.40 + bassSmooth * 0.15);
      line.visible = Boolean(clock.hasLine) && gateFade > 0;
    });

    // 星场流动：远星慢近星快，行程取模回绕。
    starMat.uniforms.time.value = time;
    starMat.uniforms.travel.value = ctx.travel;
    starPoints.visible = warpOn;
    railMesh.visible = warpOn;
    depthMesh.visible = warpOn;
    streakLines.visible = warpOn && !reduced;
    backdrop.visible = warpOn;
    backMat.uniforms.uTime.value = time;
    backMat.uniforms.uPulse.value = reduced ? 0 : bassSmooth;
    backMat.uniforms.uMotion.value = ctx.motion;
    railMat.uniforms.time.value = reduced ? 0 : time;
    railMat.uniforms.travel.value = ctx.travel * ROUTE_SHARE;
    railMat.uniforms.motion.value = ctx.motion;
    railMat.uniforms.pulse.value = bassSmooth;
    railMat.uniforms.glow.value = clamp(Number(ctx.glow), 0, 2);
    depthMat.uniforms.travel.value = ctx.travel * ROUTE_SHARE;
    depthMat.uniforms.time.value = time;
    depthMat.uniforms.pulse.value = reduced ? 0 : bassSmooth;
    depthMat.uniforms.motion.value = ctx.motion;

    // 流光拉伸：行驶速度导数为主，低频只加成。
    const span = time < 0.025 ? time + 0.025 : 0.05;
    const travelVelocity = Math.max(0, (ctx.travelAhead - ctx.travelBehind) / span);
    streakMat.uniforms.travel.value = ctx.travel * 1.55;
    streakMat.uniforms.stretch.value = reduced ? 0
      : clamp((travelVelocity / 18 - 0.55) * 0.5 + bassSmooth * 0.35) * Math.min(1, ctx.motion);
    streakMat.uniforms.glow.value = clamp(Number(ctx.glow), 0, 2);

    // 点阵天体：6 槽位独立循环回绕 + 凝聚生命周期。
    entityMat.uniforms.time.value = time;
    entityMat.uniforms.breath.value = reduced ? 0 : bassSmooth * 0.55;
    entityMat.uniforms.audioPulse.value = reduced ? 0 : clamp(bassSmooth * 0.9 + ctx.vocal * 0.15, 0, 1);
    entityPoints.visible = ctx.objects !== false;
    if (!entityPoints.visible) return;
    const entityTravel = ctx.travel * ENTITY_SHARE;
    for (let s = 0; s < ENTITY_SLOTS; s += 1) {
      const slot = slotConfigs[s];
      const tilt = slotTilt[s];
      let depth = (slot.initialZ + entityTravel) % CELESTIAL_CYCLE;
      if (depth > 0) depth -= CELESTIAL_CYCLE;
      const tmpl = templates[slot.type];
      // 凝聚生命周期：远方成雾（-260 起可见）→ 逼近凝聚 → 黄金展示 → 掠过消散。
      // 可见窗口 260 宽于 200 的槽间距，两批天体在画面里交叠，永不断档。
      let cohesion = 0;
      if (depth < -260) cohesion = 0;
      else if (depth < -140) cohesion = easeOutCubic((depth + 260) / 120);
      else if (depth < -80) cohesion = 1.0;
      else cohesion = smooth((-depth - 10) / 70);
      // 自转只用时间：音频不摇整剪影。
      const rotA = time * slot.rotSpeed + slot.rotPhase;
      const cosY = Math.cos(rotA), sinY = Math.sin(rotA);
      const cosX = Math.cos(tilt.x), sinX = Math.sin(tilt.x);
      const cosZ = Math.cos(tilt.z), sinZ = Math.sin(tilt.z);
      const offset = s * POINTS_PER_ENTITY;
      for (let p = 0; p < POINTS_PER_ENTITY; p += 1) {
        const pi = (offset + p) * 3;
        const tx0 = tmpl.pos[p * 3] * slot.scale;
        const ty0 = tmpl.pos[p * 3 + 1] * slot.scale;
        const tz0 = tmpl.pos[p * 3 + 2] * slot.scale;
        // Y 自转 → X 倾角 → Z 微倾
        const rx = tx0 * cosY - tz0 * sinY;
        let rz = tx0 * sinY + tz0 * cosY;
        let ry = ty0;
        const ry2 = ry * cosX - rz * sinX;
        rz = ry * sinX + rz * cosX;
        ry = ry2;
        const rx2 = rx * cosZ - ry * sinZ;
        const ry3 = rx * sinZ + ry * cosZ;
        const fx = slot.x + rx2;
        const fy = slot.y + ry3;
        const fz = depth + rz;
        objNormals[pi] = rx2;
        objNormals[pi + 1] = ry3;
        objNormals[pi + 2] = rz;
        objTargets[pi] = fx;
        objTargets[pi + 1] = fy;
        objTargets[pi + 2] = fz;
        const randSeed = (p * 0.23 + s * 0.71) % 1;
        const stationMist = slot.type === 'station' ? 1.35 : 1.0;
        // 贴近镜头（-120..-40）逐步收束散雾：轮廓在眼前温柔解体而不是炸开糊屏；
        // 远方成雾阶段（depth<-120）保持大散布，远远看着就是一团星云。
        const nearTame = smooth(clamp((-depth - 40) / 80));
        const scatterR = (1 - cohesion) * stationMist * (18.0 + randSeed * 44.0) * nearTame;
        const phase = time * (0.32 + randSeed * 0.24) + p * 0.071 + s * 1.7;
        const curl = Math.sin(phase) * 0.55 + Math.cos(phase * 0.63) * 0.35;
        objPositions[pi] = fx + (Math.sin(p * 2.1 + phase) + curl) * scatterR;
        objPositions[pi + 1] = fy + (Math.cos(p * 1.7 + phase * 0.8) - curl * 0.55) * scatterR;
        objPositions[pi + 2] = fz + (randSeed - 0.5 + Math.sin(phase * 0.7) * 0.18) * scatterR * 1.3;
        objSeedsArr[pi] = randSeed;
        objSeedsArr[pi + 1] = cohesion;
        // 入口压住未成形的远景尘雾（-260 起随凝聚渐显）；出口保持散开粒子可见。
        objSeedsArr[pi + 2] = depth < -80 ? smooth((cohesion - 0.3) / 0.7) : 1;
      }
    }
    entityGeo.attributes.position.needsUpdate = true;
    entityGeo.attributes.aTarget.needsUpdate = true;
    entityGeo.attributes.aSeed.needsUpdate = true;
    entityGeo.attributes.aNormal.needsUpdate = true;
  }

  function resize(w, h, ratio) {
    viewportAspect = Math.max(0.1, Number(w) / Math.max(1, Number(h)));
    backMat.uniforms.uAspect.value = viewportAspect;
    starMat.uniforms.pixelRatio.value = ratio;
    railMat.uniforms.pixelRatio.value = ratio;
    railMat.uniforms.viewport.value.set(Math.max(1, w * ratio), Math.max(1, h * ratio));
    entityMat.uniforms.pixelRatio.value = ratio;
  }

  function dispose() {
    scene.remove(root);
    backGeo.dispose();
    backMat.dispose();
    starGeo.dispose();
    railGeo.dispose();
    depthGeo.dispose();
    streakGeo.dispose();
    entityGeo.dispose();
    pulseGeo.dispose();
    gateGeometries.forEach((g) => g.dispose());
    [starMat, railMat, depthMat, streakMat, entityMat].forEach((m) => m.dispose());
    gateArcMaterials.forEach((m) => m.dispose());
    gateProgressLines.forEach((l) => l.material.dispose());
    pulses.forEach((p) => p.mesh.material.dispose());
  }

  return {
    update,
    resize,
    setPalette,
    dispose,
    stats() {
      return {
        slots: ENTITY_SLOTS, stars: starCount, pulses: PULSE_COUNT,
        depthGates: DEPTH_GATES, streaks: STREAK_COUNT, entityPoints: totalEntityPoints,
        warpVisible: starPoints.visible || railMesh.visible || streakLines.visible,
        entitiesVisible: entityPoints.visible,
        activePulses: pulses.filter((p) => p.mesh.visible).length,
      };
    },
    get aspect() { return viewportAspect; },
  };
}
