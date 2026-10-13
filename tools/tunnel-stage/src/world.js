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

import { clamp, smooth, easeOutCubic, seededRandom } from './util.js';
import { routeCenter } from './camera.js';

export const TUNNEL_LENGTH = 3200;
// 尾迹与相机注视走 0.42 倍行程：镜头显得比星场慢半拍，纵深更耐看。
export const ROUTE_SHARE = 0.42;
// 天体槽位相对星场更快（0.72 倍），逼近镜头前才完成凝结。
export const ENTITY_SHARE = 0.72;
const CELESTIAL_CYCLE = 1750;

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

export function createWorld(THREE, scene) {
  const root = new THREE.Group();
  scene.add(root);
  let viewportAspect = 1;
  const factories = createTemplateFactory();

  /* ---------- 星场：双层视差 ---------- */
  const STAR_FAR = 420;
  const STAR_NEAR = 90;
  const starCount = STAR_FAR + STAR_NEAR;
  const starBase = new Float32Array(starCount * 3);
  const starSizes = new Float32Array(starCount);
  const starSeeds = new Float32Array(starCount * 3);
  {
    const rand = seededRandom('tunnel-stars-v6');
    for (let i = 0; i < starCount; i += 1) {
      const near = i >= STAR_FAR;
      const angle = rand() * Math.PI * 2;
      const radius = near ? 18 + Math.pow(rand(), 1.1) * 120 : 40 + Math.pow(rand(), 0.8) * 320;
      starBase[i * 3] = Math.cos(angle) * radius;
      starBase[i * 3 + 1] = Math.sin(angle) * radius * (near ? 0.62 : 0.85);
      starBase[i * 3 + 2] = -rand() * TUNNEL_LENGTH;
      starSizes[i] = near ? 1.8 + rand() * 2.6 : 0.7 + rand() * 1.4;
      starSeeds[i * 3] = rand();
      starSeeds[i * 3 + 1] = rand();
      starSeeds[i * 3 + 2] = rand();
    }
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(starBase), 3).setUsage(THREE.DynamicDrawUsage));
  starGeo.setAttribute('aSize', new THREE.BufferAttribute(starSizes, 1));
  starGeo.setAttribute('aSeed', new THREE.BufferAttribute(starSeeds, 3));
  const starMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      tint: { value: new THREE.Color('#8fa4b3') },
      time: { value: 0 },
      pixelRatio: { value: 1 },
    },
    vertexShader: `
        attribute float aSize;
        attribute vec3 aSeed;
        uniform float time;
        uniform float pixelRatio;
        varying float vAlpha;
        varying float vTwinkle;
        void main() {
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            gl_Position = projectionMatrix * mv;
            float depth = max(0.1, -mv.z);
            gl_PointSize = clamp(aSize * pixelRatio * 300.0 / depth, 1.0, 26.0);
            float nearFade = smoothstep(14.0, 55.0, depth);
            float farFade = 1.0 - smoothstep(1600.0, 2500.0, depth);
            // 每颗星独立节律的缓慢闪烁
            vTwinkle = 0.72 + 0.28 * sin(time * (0.4 + aSeed.y * 1.2) + aSeed.x * 40.0);
            vAlpha = nearFade * farFade * (0.18 + aSeed.x * 0.5) * vTwinkle;
        }
    `,
    fragmentShader: `
        uniform vec3 tint;
        varying float vAlpha;
        varying float vTwinkle;
        void main() {
            vec2 p = gl_PointCoord * 2.0 - 1.0;
            float r = dot(p, p);
            if (r > 1.0) discard;
            float core = exp(-r * 7.0);
            float halo = exp(-r * 2.4) * 0.3 * vTwinkle;
            gl_FragColor = vec4(tint * (core * 1.4 + halo), (core + halo) * vAlpha);
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
  const RAIL_SEGMENTS = 640;
  const RAIL_STEP = 4;
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
            // 吸附到 4 单位空间格：旧样本不随镜头游动。
            float s=(floor(travel/4.0)+aRoute.x)*4.0;
            vec3 p=wakeAt(s,aRoute.y,motion,travel);
            vec4 mv=modelViewMatrix*vec4(p,1.0);
            vec4 clip=projectionMatrix*mv;
            vec4 next=projectionMatrix*modelViewMatrix*vec4(wakeAt(s+0.5,aRoute.y,motion,travel),1.0);
            vec2 delta=(next.xy/max(next.w,0.1)-clip.xy/max(clip.w,0.1))*viewport;
            vec2 tangent=delta/max(length(delta),0.001);
            vec2 normal=vec2(-tangent.y,tangent.x);
            float width=2.2+1.0*sin(s*0.013+aRoute.y*2.0);
            clip.xy+=normal*aRoute.z*width*2.0/viewport*clip.w;
            gl_Position=clip;
            vSide=aRoute.z;vLane=aRoute.y;
            float depth=max(0.0,-mv.z);
            float cell=floor(s/42.0);
            float h=fract(sin(cell*12.9898+aRoute.y*78.233)*43758.5453);
            float gaps=smoothstep(0.10,0.28,h);
            float flow=fract(s*0.0018-time*0.11+aRoute.y*0.37);
            vFlash=exp(-pow((flow-0.5)*15.0,2.0));
            float envelope=0.55+0.45*sin(s*0.007+aRoute.y*2.2);
            // 中央留给歌词阅读：尾迹框景而不是穿词。
            vec2 ndc=clip.xy/max(clip.w,0.1);
            float reading=smoothstep(0.35,0.75,length(ndc*vec2(1.0,1.5)));
            vAlpha=smoothstep(18.0,85.0,depth)
                *(1.0-smoothstep(1700.0,2500.0,depth))
                *gaps*(0.13+envelope*0.18+vFlash*0.38)
                *(0.2+reading*0.8)*(1.0+pulse*0.25);
        }`,
    fragmentShader: `
        uniform vec3 tint,accent;
        uniform float glow;
        varying float vSide,vLane,vAlpha,vFlash;
        void main() {
            float crossSection=exp(-vSide*vSide*5.0)
                +exp(-vSide*vSide*1.5)*0.18*glow;
            vec3 color=mix(tint,accent,vLane);
            gl_FragColor=vec4(color*(1.0+vFlash*0.55),
                crossSection*vAlpha);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
        }`,
  });
  const railMesh = new THREE.Mesh(railGeo, railMat);
  railMesh.frustumCulled = false;
  root.add(railMesh);

  /* ---------- 跃迁流光：静态端点 + 播放时钟回绕 ---------- */
  const STREAK_COUNT = 220;
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
      travel: { value: 0 },
      stretch: { value: 0 },
      glow: { value: 1 },
    },
    vertexShader: `
        attribute vec3 aSeed;
        attribute float aEnd;
        uniform float travel, stretch;
        varying float vAlpha;
        void main() {
            vec3 p = position;
            p.z = -mod(-position.z - travel, ${TUNNEL_LENGTH.toFixed(1)});
            // 双端共享同一回绕地址：回收缝上不拉出横跨画面的长线。
            float len = 2.0 + stretch * (24.0 + aSeed.y * 100.0);
            float headDepth = -p.z;
            p.z -= aEnd * len;
            vec4 mv = modelViewMatrix * vec4(p, 1.0);
            gl_Position = projectionMatrix * mv;
            float depth = max(0.1, -mv.z);
            float fade = smoothstep(24.0, 85.0, headDepth)
                * (1.0 - smoothstep(1400.0, 2400.0, depth));
            vAlpha = fade * stretch * (0.12 + aSeed.x * 0.35)
                * mix(1.0, 0.08, aEnd);
        }
    `,
    fragmentShader: `
        uniform vec3 tint;
        uniform float glow;
        varying float vAlpha;
        void main() {
            gl_FragColor = vec4(tint * (1.0 + glow * 0.35), vAlpha);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
        }
    `,
  });
  const streakLines = new THREE.LineSegments(streakGeo, streakMat);
  streakLines.frustumCulled = false;
  root.add(streakLines);

  /* ---------- 低频冲击波脉冲环 ---------- */
  const PULSE_COUNT = 3;
  const pulseGeo = new THREE.RingGeometry(0.96, 1.0, 96);
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
    pulses.push({ mesh: m, age: 99, life: 1.4 });
  }
  let pulseCursor = 0;
  let prevBass = 0;

  /* ---------- 点阵天体槽位 ---------- */
  const ENTITY_SLOTS = 6;
  const POINTS_PER_ENTITY = 2400;
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
  // 分镜槽位：构图遵循「三分法 + 巨大体量对比」。
  const slotConfigs = [
    { type: 'flagship', initialZ: -300, x: -18, y: -17, rotSpeed: 0.018, rotPhase: 0, scale: 1.85 },
    { type: 'planet', initialZ: -760, x: -42, y: 22, rotSpeed: 0.042, rotPhase: 1.2, scale: 0.92 },
    { type: 'rings', initialZ: -1120, x: 42, y: 8, rotSpeed: 0.055, rotPhase: 2.4, scale: 0.92 },
    { type: 'station', initialZ: -760, x: 34, y: -10, rotSpeed: 0.032, rotPhase: 3.1, scale: 1.55 },
    { type: 'scout', initialZ: -1820, x: 18, y: -20, rotSpeed: 0.075, rotPhase: 4.0, scale: 0.82 },
    { type: 'planet', initialZ: -2260, x: 48, y: 28, rotSpeed: 0.034, rotPhase: 5.3, scale: 0.78 },
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
            // 球面法线光照 + 边缘辉光：点阵天体保留体积感。
            // aTarget 带整条航道的 z 深度；只取横截面构造稳定局部法线，
            // 避免深度把光照压扁。
            vec3 localNormal = normalize(vec3(aTarget.x * 0.08, aTarget.y * 0.08, 1.0));
            float lambert = 0.5 + 0.5 * dot(localNormal, normalize(vec3(-0.55, 0.72, 0.85)));
            float rim = pow(1.0 - max(0.0, dot(localNormal, vec3(0.0, 0.0, 1.0))), 2.4);
            vLight = clamp(lambert * 0.82 + rim * 0.42 + (aShade < 0.5 ? 0.08 : 0.0), 0.22, 1.35);
            vec4 mv = modelViewMatrix * vec4(currentPos, 1.0);
            gl_Position = projectionMatrix * mv;
            float depth = max(0.1, -mv.z);
            gl_PointSize = clamp((aSize + cohesion * (0.8 + audioPulse * 0.22)) * pixelRatio * 340.0 / depth, 1.0, 40.0);
            float nearFade = smoothstep(12.0, 50.0, depth);
            float farFade = 1.0 - smoothstep(1900.0, 2500.0, depth);
            // 按空间散布溶解，而不是整片淡出：离开剪影的粒子仍可见。
            vAlpha = nearFade * farFade * clamp(aSeed.z, 0.0, 1.0)
                * (0.72 + cohesion * 0.28) * (1.0 + audioPulse * 0.10);
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
            float halo = exp(-r * 2.2) * 0.32;
            float edge = smoothstep(1.0, 0.08, r);
            gl_FragColor = vec4(vColor * (core * 1.75 + halo) * vLight, (core + halo) * vAlpha * edge);
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
          else if (sh === 2) c = danger;   // 引擎喷口：朱砂红
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
          if (sh === 2) c = danger;      // 航行灯：朱砂
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
    paletteColors.background.set(pick('background', '#0a0d11'));
    // 深空压暗背景，保证黑场
    const bgColor = paletteColors.background.clone().multiplyScalar(0.55);
    if (scene.background && scene.background.copy) scene.background.copy(bgColor);
    else scene.background = bgColor;
    if (scene.fog && scene.fog.color) scene.fog.color.copy(bgColor);
    starMat.uniforms.tint.value.copy(paletteColors.muted);
    streakMat.uniforms.tint.value.copy(paletteColors.ink);
    railMat.uniforms.tint.value.copy(paletteColors.secondary);
    railMat.uniforms.accent.value.copy(paletteColors.accent);
    gateArcMaterials.forEach((m, index) => m.color.copy(paletteColors.accent).offsetHSL(index * 0.015, 0, 0));
    pulses.forEach((p) => p.mesh.material.color.copy(paletteColors.accent));
    applyEntityPalette();
  }

  /* ---------- 逐帧更新 ---------- */
  // ctx: { travel, travelAhead, travelBehind, motion, bass(已平滑), vocal, dt,
  //        playing, reduced, glow, warp, objects, roll,
  //        lineClock: { hasLine, progress, lineStart, vocalEnd, hold, pause, dissolve } }
  // 低频包络由 main.js 统一平滑后传入；这里只维护「上一帧值」做增量检测。
  const starPosArr = starGeo.attributes.position.array;
  const objPositions = entityGeo.attributes.position.array;
  const objTargets = entityGeo.attributes.aTarget.array;
  const objSeedsArr = entityGeo.attributes.aSeed.array;

  function update(time, ctx) {
    const dt = ctx.dt;
    const bassSmooth = Number(ctx.bass) || 0;
    const reduced = ctx.reduced;
    const warpOn = ctx.warp !== false;
    const clock = ctx.lineClock || {};

    // 冲击波检测：低频包络在 0.55 以上且仍在快速抬升时发射。
    if (ctx.seek) { prevBass = 0; pulses.forEach((p) => { p.age = 99; p.mesh.visible = false; }); }
    if (ctx.playing && !reduced && bassSmooth > 0.55 && bassSmooth - prevBass > 0.18) {
      const p = pulses[pulseCursor % PULSE_COUNT];
      pulseCursor += 1;
      p.age = 0;
      p.mesh.visible = true;
    }
    prevBass = bassSmooth;
    pulses.forEach((p) => {
      if (!p.mesh.visible) return;
      p.age += dt;
      const t = p.age / p.life;
      if (t >= 1) { p.mesh.visible = false; p.mesh.material.opacity = 0; return; }
      const scale = 4 + easeOutCubic(t) * 90;
      p.mesh.scale.set(scale, scale, 1);
      p.mesh.position.set(0, 0, -50 - easeOutCubic(t) * 60);
      p.mesh.material.opacity = (1 - t) * 0.32;
    });

    // 门框：句内正弦 + 低频脉动；唱完按 hold/pause/dissolve 淡出。
    // 滚转补偿 0.35：机位侧滚时门框跟着转一点，歌词仍正对观众。
    heroGate.visible = warpOn;
    heroGate.rotation.z = Math.sin(time * 0.16) * 0.018 + (Number(ctx.roll) || 0) * 0.35;
    const gatePulse = 0.16 + bassSmooth * 0.22 + (clock.hasLine ? Math.sin(clamp(clock.progress) * Math.PI) * 0.16 : 0);
    gateArcMaterials.forEach((m, index) => {
      m.opacity = Math.max(0.03, gatePulse - index * 0.035);
    });
    const gateEnd = Math.max(Number(clock.lineStart) + 0.001 || 0.001, Number(clock.vocalEnd) || 0);
    const gateProgress = clock.hasLine ? clamp((time - clock.lineStart) / Math.max(0.001, gateEnd - clock.lineStart)) : 0;
    const gateFadeStart = gateEnd + Math.min(0.8,
      clamp(Number(clock.hold), 0, 0.8) * 0.5 + clamp(Number(clock.pause), 0, 3) * 0.15);
    const gateFade = 1 - smooth((time - gateFadeStart) / (0.45 + clamp(Number(clock.dissolve), 0, 1) * 0.55));
    gateProgressLines.forEach((line, index) => {
      const fraction = clamp(gateProgress * 4 - index);
      const count = line.geometry.attributes.position.count;
      line.geometry.setDrawRange(0, fraction > 0 ? Math.max(2, Math.ceil(fraction * count)) : 0);
      line.material.color.copy(gateArcMaterials[index].color);
      line.material.opacity = gateFade * (0.5 + bassSmooth * 0.2);
      line.visible = Boolean(clock.hasLine) && gateFade > 0;
    });

    // 星场流动：远星慢近星快，行程取模回绕。
    starMat.uniforms.time.value = time;
    starPoints.visible = warpOn;
    railMesh.visible = warpOn;
    streakLines.visible = warpOn && !reduced;
    if (warpOn) {
      for (let i = 0; i < starCount; i += 1) {
        const idx = i * 3;
        const parallax = i >= STAR_FAR ? 1.0 : 0.45;
        let z = (starBase[idx + 2] + ctx.travel * parallax) % TUNNEL_LENGTH;
        if (z > 0) z -= TUNNEL_LENGTH;
        starPosArr[idx + 2] = z;
      }
      starGeo.attributes.position.needsUpdate = true;
    }
    railMat.uniforms.time.value = reduced ? 0 : time;
    railMat.uniforms.travel.value = ctx.travel * ROUTE_SHARE;
    railMat.uniforms.motion.value = ctx.motion;
    railMat.uniforms.pulse.value = bassSmooth;
    railMat.uniforms.glow.value = clamp(Number(ctx.glow), 0, 2);

    // 流光拉伸：行驶速度导数为主，低频只加成。
    const span = time < 0.025 ? time + 0.025 : 0.05;
    const travelVelocity = Math.max(0, (ctx.travelAhead - ctx.travelBehind) / span);
    streakMat.uniforms.travel.value = ctx.travel * 1.55;
    streakMat.uniforms.stretch.value = reduced ? 0
      : clamp((travelVelocity / 18 - 0.65) * 0.42 + bassSmooth * 0.25) * Math.min(1, ctx.motion);
    streakMat.uniforms.glow.value = clamp(Number(ctx.glow), 0, 2);

    // 点阵天体：6 槽位独立循环回绕 + 凝聚生命周期。
    entityMat.uniforms.time.value = time;
    entityMat.uniforms.breath.value = bassSmooth * 0.8;
    entityMat.uniforms.audioPulse.value = clamp(bassSmooth * 1.25 + ctx.vocal * 0.22, 0, 1);
    entityPoints.visible = ctx.objects !== false;
    const entityTravel = ctx.travel * ENTITY_SHARE;
    for (let s = 0; s < ENTITY_SLOTS; s += 1) {
      const slot = slotConfigs[s];
      const tilt = slotTilt[s];
      let depth = (slot.initialZ + entityTravel) % CELESTIAL_CYCLE;
      if (depth > 0) depth -= CELESTIAL_CYCLE;
      const tmpl = templates[slot.type];
      // 凝聚生命周期：远方成雾 → 逼近凝聚 → 黄金展示 → 掠过消散
      let cohesion = 0;
      if (depth < -190) cohesion = 0;
      else if (depth < -112) cohesion = easeOutCubic((depth + 190) / 78);
      else if (depth < -76) cohesion = 1.0;
      else cohesion = smooth((-depth - 8) / 68);
      // 自转只用时间：音频不摇整剪影。
      const rotA = time * slot.rotSpeed + slot.rotPhase;
      const cosY = Math.cos(rotA), sinY = Math.sin(rotA);
      const cosX = Math.cos(tilt.x), sinX = Math.sin(tilt.x);
      const cosZ = Math.cos(tilt.z), sinZ = Math.sin(tilt.z);
      const offset = s * POINTS_PER_ENTITY;
      for (let p = 0; p < POINTS_PER_ENTITY; p += 1) {
        const pi = (offset + p) * 3;
        if (ctx.objects === false) {
          objPositions[pi] = 0; objPositions[pi + 1] = 0; objPositions[pi + 2] = 99999;
          objTargets[pi] = 0; objTargets[pi + 1] = 0; objTargets[pi + 2] = 99999;
          objSeedsArr[pi + 1] = 0;
          continue;
        }
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
        objTargets[pi] = fx;
        objTargets[pi + 1] = fy;
        objTargets[pi + 2] = fz;
        const randSeed = (p * 0.23 + s * 0.71) % 1;
        const stationMist = slot.type === 'station' ? 1.55 : 1.0;
        const scatterR = (1 - cohesion) * stationMist * (24.0 + randSeed * 58.0);
        const phase = time * (0.32 + randSeed * 0.24) + p * 0.071 + s * 1.7;
        const curl = Math.sin(phase) * 0.55 + Math.cos(phase * 0.63) * 0.35;
        objPositions[pi] = fx + (Math.sin(p * 2.1 + phase) + curl) * scatterR;
        objPositions[pi + 1] = fy + (Math.cos(p * 1.7 + phase * 0.8) - curl * 0.55) * scatterR;
        objPositions[pi + 2] = fz + (randSeed - 0.5 + Math.sin(phase * 0.7) * 0.18) * scatterR * 1.3;
        objSeedsArr[pi] = randSeed;
        objSeedsArr[pi + 1] = cohesion;
        // 入口压住未成形的远景尘雾；出口保持散开粒子可见。
        objSeedsArr[pi + 2] = depth < -112 ? smooth((cohesion - 0.35) / 0.65) : 1;
      }
    }
    entityGeo.attributes.position.needsUpdate = true;
    entityGeo.attributes.aTarget.needsUpdate = true;
    entityGeo.attributes.aSeed.needsUpdate = true;
  }

  function resize(w, h, ratio) {
    viewportAspect = Math.max(0.1, Number(w) / Math.max(1, Number(h)));
    starMat.uniforms.pixelRatio.value = ratio;
    railMat.uniforms.pixelRatio.value = ratio;
    railMat.uniforms.viewport.value.set(Math.max(1, w * ratio), Math.max(1, h * ratio));
    entityMat.uniforms.pixelRatio.value = ratio;
  }

  function dispose() {
    scene.remove(root);
    starGeo.dispose();
    railGeo.dispose();
    streakGeo.dispose();
    entityGeo.dispose();
    pulseGeo.dispose();
    gateGeometries.forEach((g) => g.dispose());
    [starMat, railMat, streakMat, entityMat].forEach((m) => m.dispose());
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
        warpVisible: starPoints.visible || railMesh.visible || streakLines.visible,
        entitiesVisible: entityPoints.visible,
        activePulses: pulses.filter((p) => p.mesh.visible).length,
      };
    },
    get aspect() { return viewportAspect; },
  };
}
