// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
//
// 歌词载体：镜台的歌词不是叠在画面上的字幕，而是世界里的物体。
//   · 站牌（sign carrier）：沿途左右交错的实体牌，连续短句共牌成页，页在句间
//     留白交接；牌底一条随频谱起伏的发光曲线，演唱中的句子把牌面点亮。
//   · 星幕（constellation carrier）：副歌/终章的句子升到夜空里，字素逐个浮出、
//     演唱结束后散去；水面反射自动呈现它的倒影（镜像相机照常渲染）。
//
// 实现骨架：每页一块 canvas 字形图集（白字，颜色由着色器统一调）→ 逐字四边形
// 共享图集（quad 不重叠，字素时序作为顶点 attribute 经 varying 带进片元），
// 位移/亮度全部按绝对播放时间在着色器里求值，CPU 每帧只推十几个 uniform。
// 歌词缺字素时宿主已经兜过底（Stage.lyricTokens 的估算时序），这里不再有
// 第二条估时路径。

import * as THREE from 'three';
import { clamp, smooth, hashString } from './util.js';
import { distanceAt, readingWeight } from './camera.js';
import { phraseAt } from './timeline.js';

const FONT_STACK = '"Microsoft YaHei","PingFang SC","Noto Sans SC",sans-serif';
const ATLAS_H = 208;            // 字形图集高度（px）
const ATLAS_FONT = 140;         // 图集字号（px）
const ATLAS_MARGIN = 26;        // 图集左右留白（px）
const ATLAS_MAX_W = 4096;
const SIGN_LEAD_MIN = 9;        // 牌址 = 句起点距离 + 旅程占比（钳在这两档之间）
const SIGN_LEAD_MAX = 30;
const SKY_LEAD_MIN = 24;
const SKY_LEAD_MAX = 48;
const BOARD_H = 1.42;           // 牌面高度（米）
const BOARD_X = 4.8;            // 牌到轨心的横向距离
const SKY_HEIGHT = [6.6, 8.2];  // 星幕字高区间（米）
const SKY_SHARE = 0.165;        // 星幕字高占观看距离屏高的比例
const ENTER_SIGN = 0.5;         // 页入场/退场时长（秒）：站牌快、星幕慢
const EXIT_SIGN = 0.42;
const ENTER_SKY = 1.7;
const EXIT_SKY = 2.1;

const PALETTE_DEFAULT = {
  background: '#0a101d', accent: '#f2a900', secondary: '#76bfae', ink: '#f2f0e9',
};

// 页窗口：入场占前句间隙的一半、退场占后句间隙的一半（同牌两侧不得同时
// 换页），星幕窗口可以与前句重叠淡入淡出。
function phraseWindows(timeline) {
  const ps = timeline.phrases;
  return ps.map((p, i) => {
    const prevEnd = i > 0 ? ps[i - 1].end : -1e9;
    const nextStart = i + 1 < ps.length ? ps[i + 1].start : 1e9;
    const isSky = p.carrier === 'constellation';
    const enterAt = p.start - Math.min(isSky ? 2.2 : 1.4,
      Math.max(0.15, (p.start - prevEnd) * (isSky ? 0.8 : 0.5)));
    const exitAt = p.end + Math.min(isSky ? 3.2 : 2.0,
      Math.max(0.15, (nextStart - p.end) * (isSky ? 0.8 : 0.55)));
    return { enterAt, exitAt };
  });
}

function makeAtlas(phrase) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const font = `700 ${ATLAS_FONT}px ${FONT_STACK}`;
  ctx.font = font;
  const glyphs = phrase.glyphs;
  const advances = glyphs.map((g) => Math.max(2, ctx.measureText(g.text).width));
  const total = advances.reduce((a, b) => a + b, 0);
  const fit = Math.min(1, (ATLAS_MAX_W - ATLAS_MARGIN * 2) / total);
  canvas.width = Math.max(64, Math.min(ATLAS_MAX_W, Math.ceil((total + ATLAS_MARGIN * 2) * fit)));
  canvas.height = ATLAS_H;
  ctx.font = font;
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#ffffff';
  const rights = [];
  let x = 0;
  ctx.save();
  ctx.translate(ATLAS_MARGIN * fit, 0);
  ctx.scale(fit, 1);
  for (let i = 0; i < glyphs.length; i += 1) {
    ctx.fillText(glyphs[i].text, x, ATLAS_H / 2);
    x += advances[i];
    rights.push((ATLAS_MARGIN + x) * fit / canvas.width);
  }
  ctx.restore();
  return { canvas, rights };
}

// 站牌宽度估算（建牌时页还没建，用字符宽度的快速估计代替量图集）：
// CJK/全角按 1em、其余按 0.55em，与 canvas measureText 的偏差不超过一成。
function estimateAspect(phrase) {
  let w = 0;
  for (const g of phrase.glyphs) {
    for (const ch of g.text) w += ch.charCodeAt(0) > 0x2e80 ? 1 : 0.55;
  }
  return (w * ATLAS_FONT * 0.94 + ATLAS_MARGIN * 2) / ATLAS_H;
}

// 牌背后的呼吸光晕：一张径向渐变贴片，牌上有人在唱时从背后透出来。它是
// 「自发光」最便宜的形式 —— 一枚贴片，没有点光、没有额外 pass。
function haloTexture(THREE) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,255,255,0.85)');
  g.addColorStop(0.42, 'rgba(255,255,255,0.28)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(canvas);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function atlasTexture(THREE, canvas) {
  const t = new THREE.CanvasTexture(canvas);
  t.colorSpace = THREE.SRGBColorSpace;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.magFilter = THREE.LinearFilter;
  t.generateMipmaps = true;
  t.anisotropy = 8;
  return t;
}

// 逐字四边形几何：共享图集，quad i 覆盖图集 u ∈ [prevRight, right_i]。
// position 的 x 直接用 u 空间（mesh.scale 承担世界尺寸），时序进 attribute。
function glyphGeometry(THREE, rights, glyphs) {
  const pos = [];
  const uvs = [];
  const timing = [];
  const index = [];
  for (let i = 0; i < glyphs.length; i += 1) {
    const uL = i === 0 ? 0 : rights[i - 1];
    const uR = rights[i];
    const first = pos.length / 3;
    const order = glyphs.length > 1 ? i / (glyphs.length - 1) : 0;
    for (const [u, v] of [[uL, 0], [uR, 0], [uR, 1], [uL, 1]]) {
      pos.push(u - 0.5, v - 0.5, 0);
      uvs.push(u, v);
      timing.push(glyphs[i].start, glyphs[i].end, order);
    }
    index.push(first, first + 1, first + 2, first, first + 2, first + 3);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setAttribute('aTiming', new THREE.Float32BufferAttribute(timing, 3));
  geo.setIndex(index);
  return geo;
}

function glyphMaterial(THREE, palette, map) {
  return new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.DoubleSide,
    uniforms: {
      map: { value: map },
      uTime: { value: 0 }, uFade: { value: 0 }, uEnter: { value: 1 }, uExit: { value: 0 },
      uGlow: { value: 1 }, uVocal: { value: 0 }, uSky: { value: 0 }, uMotion: { value: 1 },
      uAccent: { value: new THREE.Color(palette.accent || PALETTE_DEFAULT.accent) },
      uInk: { value: new THREE.Color(palette.ink || PALETTE_DEFAULT.ink) },
      uCold: { value: new THREE.Color(palette.secondary || PALETTE_DEFAULT.secondary) },
    },
    vertexShader: `
      attribute vec3 aTiming;
      uniform float uTime, uEnter, uExit, uSky, uMotion;
      varying vec2 vUv;
      varying float vStart, vEnd, vSing, vEmph;
      void main(){
        vUv = uv;
        vStart = aTiming.x;
        vEnd = aTiming.y;
        float age = max(0.0, uTime - aTiming.x);
        float dur = max(0.04, aTiming.y - aTiming.x);
        float singing = step(aTiming.x, uTime) * (1.0 - step(aTiming.y, uTime));
        // 演唱中的字先起后落；入场按字序错峰从下方浮出，星幕另有纵深展开
        // 与缓慢的悬浮呼吸。
        vSing = singing;
        vEmph = singing * sin(clamp(age / dur, 0.0, 1.0) * 3.14159);
        float stagger = clamp((uEnter - aTiming.z * 0.18) / 0.82, 0.0, 1.0);
        stagger = stagger * stagger * (3.0 - 2.0 * stagger);
        float incoming = 1.0 - stagger;
        float sky = uSky;
        vec3 p = position;
        p.y += uMotion * (vEmph * mix(0.016, 0.065, sky)
            - incoming * mix(0.06, 0.42, sky)
            + uExit * sky * 0.24
            + sky * 0.05 * sin(uTime * 0.5 + aTiming.z * 4.2));
        p.z += uMotion * sky * (incoming * (0.28 + aTiming.z * 0.5) - uExit * (0.55 + aTiming.z * 0.3));
        p.x += uMotion * sky * (incoming * 0.1 - uExit * 0.16) * sin(aTiming.z * 8.0);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }`,
    fragmentShader: `
      uniform sampler2D map;
      uniform float uTime, uFade, uGlow, uVocal, uSky;
      uniform vec3 uAccent, uInk, uCold;
      varying vec2 vUv;
      varying float vStart, vEnd, vSing, vEmph;
      void main(){
        vec2 suv = vUv;
        if (uSky > 0.5) suv.y += sin(vUv.x * 7.0 + uTime * 0.55) * 0.004;
        float a = texture2D(map, suv).a;
        // 未唱的字保持墨色，演唱中的字转强调色并提亮，已唱的字向冷色沉降。
        float passed = smoothstep(0.0, 0.6, uTime - vEnd) * (1.0 - vSing);
        vec3 col = mix(uInk, uAccent, vEmph);
        col = mix(col, mix(uAccent, uCold, 0.55), passed);
        // 星幕是「字升上天空变成星星」：整体向月白偏移并提亮一档。
        col = mix(col, vec3(0.96, 0.97, 1.0), uSky * 0.35);
        float brightness = 1.0 + vEmph * uGlow * 0.75 + vSing * uVocal * 0.18 * uGlow + uSky * 0.35;
        gl_FragColor = vec4(col * brightness, a * uFade);
      }`,
  });
}

// —— 站牌频谱曲线（24 对数频带的三次插值光带）——
function stripMaterial(THREE, palette) {
  return new THREE.ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: {
      uBins: { value: new Float32Array(24) },
      uLight: { value: 0 }, uRunner: { value: -1 }, uEnergy: { value: 0 },
      uAccent: { value: new THREE.Color(palette.accent || PALETTE_DEFAULT.accent) },
    },
    vertexShader: `
      varying vec2 vUv;
      void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: `
      uniform float uBins[24];
      uniform float uLight, uRunner, uEnergy;
      uniform vec3 uAccent;
      varying vec2 vUv;
      float band(float idx){
        float v = 0.0;
        for (int i = 0; i < 24; i++) { if (abs(float(i) - clamp(idx, 0.0, 23.0)) < 0.5) v = uBins[i]; }
        return v;
      }
      void main(){
        // 频带之间的三次插值：曲线不是折线，与牌面的静谧匹配。
        float x = vUv.x * 23.0;
        float i1 = floor(x);
        float t = clamp(x - i1, 0.0, 1.0);
        float b0 = band(i1 - 1.0), b1 = band(i1), b2 = band(i1 + 1.0), b3 = band(i1 + 2.0);
        float m1 = 0.5 * (b2 - b0);
        float m2 = 0.5 * (b3 - b1);
        float t2 = t * t, t3 = t2 * t;
        float level = (2.0 * t3 - 3.0 * t2 + 1.0) * b1 + (t3 - 2.0 * t2 + t) * m1
            + (-2.0 * t3 + 3.0 * t2) * b2 + (t3 - t2) * m2;
        level = clamp(level, min(b1, b2), max(b1, b2));
        float curve = 0.14 + level * 0.72;
        float d = vUv.y - curve;
        float aa = max(fwidth(d), 0.006);
        float line = 1.0 - smoothstep(0.012, 0.012 + aa, abs(d));
        float halo = exp(-abs(d) * 30.0) * 0.15;
        float fill = (1.0 - smoothstep(-aa, aa, d))
            * pow(clamp(vUv.y / max(curve, 0.001), 0.0, 1.0), 2.0) * 0.12;
        // 句尾跑灯：页面退场时沿曲线走一粒光，像站牌在说「下一句见」。
        float runner = exp(-pow((vUv.x - uRunner) * 14.0, 2.0))
            * step(0.0, uRunner) * (1.0 - step(0.999, uRunner));
        float edge = smoothstep(0.0, 0.04, vUv.x) * (1.0 - smoothstep(0.96, 1.0, vUv.x));
        float alpha = edge * ((line * 0.7 + halo + fill) * (0.4 + uLight * 0.68 + uEnergy * 0.15)
            + runner * 0.55);
        gl_FragColor = vec4(uAccent * (0.8 + uLight * 0.5), clamp(alpha, 0.0, 1.0));
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
}

// —— 译文副行（canvas 平面，白字由材质着色）——
function makeTranslation(THREE, text, worldW) {
  const content = String(text || '').trim();
  if (!content) return null;
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 160;
  const ctx = canvas.getContext('2d');
  ctx.font = `44px ${FONT_STACK}`;
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const lines = content.split('\n').slice(0, 2);
  lines.forEach((line, i) => ctx.fillText(line, 512, 50 + i * 62, 980));
  const tex = atlasTexture(THREE, canvas);
  const mat = new THREE.MeshBasicMaterial({
    map: tex, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide,
    color: new THREE.Color('#e8e6df'),
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat);
  const w = Math.max(worldW, 2.6);
  mesh.scale.set(w, w / 6.4, 1);
  return { mesh, mat, tex };
}

export function createLyrics(THREE, scene) {
  const plane = new THREE.PlaneGeometry(1, 1);
  const haloTex = haloTexture(THREE);
  const live = new Map();     // key: 'sign:s0' / 'sky:p3' → node
  const addrCache = new Map(); // 载体地址按 (id, speed) 记忆化
  let timeline = null;
  let windows = [];
  let palette = { ...PALETTE_DEFAULT };
  let prefs = {};
  let lastT = 0;
  let viewAspect = 1.6;       // 视口纵横比（引擎 resize 时同步，星幕宽度钳制用）

  const accent = () => new THREE.Color(palette.accent || PALETTE_DEFAULT.accent);
  const backingColor = () => new THREE.Color(palette.background || PALETTE_DEFAULT.background)
    .lerp(new THREE.Color(palette.ink || PALETTE_DEFAULT.ink), 0.18)
    .multiplyScalar(2.3);
  const trimColor = () => new THREE.Color(palette.secondary || PALETTE_DEFAULT.secondary);
  const signSideOf = (p) => (p.sign ? (p.sign.side >= 0 ? 1 : -1) : 1);

  // 载体地址：句起点处的前方余量随句长伸展（长句更早进入视距），按速度档记忆化。
  function addressOf(p, isSky) {
    const speed = clamp(prefs.speed == null ? 1 : prefs.speed, 0.2, 3);
    const key = `${p.id}:${isSky ? 1 : 0}:${speed.toFixed(2)}`;
    let addr = addrCache.get(key);
    if (addr !== undefined) return addr;
    const travel = distanceAt(timeline, p.end, prefs) - distanceAt(timeline, p.start, prefs);
    const lead = isSky
      ? clamp(travel * 0.52, SKY_LEAD_MIN, SKY_LEAD_MAX)
      : clamp(travel * 0.42, SIGN_LEAD_MIN, SIGN_LEAD_MAX);
    addr = distanceAt(timeline, p.start, prefs) + lead;
    if (addrCache.size > 512) addrCache.clear();
    addrCache.set(key, addr);
    return addr;
  }

  function buildSignCarrier(sign) {
    const address = addressOf(sign.phrases[0], false);
    const side = sign.side >= 0 ? 1 : -1;
    const group = new THREE.Group();
    group.position.set(side * BOARD_X, 0, -address);
    group.rotation.y = -side * 0.46;
    const boardY = 2.06 + (hashString(sign.id) % 100) / 100 * 0.22;
    // 牌宽由最长页的估算宽高比决定。
    let boardW = 3.4;
    for (const p of sign.phrases) {
      boardW = Math.max(boardW, estimateAspect(p) * (BOARD_H * 0.56) + 0.62);
    }
    boardW = Math.min(boardW, 7.2);

    const backingMat = new THREE.MeshStandardMaterial({
      color: backingColor(), roughness: 0.55, metalness: 0.35,
      emissive: accent(), emissiveIntensity: 0,
    });
    const trimMat = new THREE.MeshStandardMaterial({
      color: trimColor(), roughness: 0.34, metalness: 0.72,
      emissive: accent(), emissiveIntensity: 0,
    });
    const backing = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), backingMat);
    backing.scale.set(boardW + 0.34, BOARD_H + 0.26, 0.07);
    backing.position.set(0, boardY, 0);
    const trim = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), trimMat);
    trim.scale.set(boardW + 0.52, 0.055, 0.11);
    trim.position.set(0, boardY + BOARD_H / 2 + 0.17, 0);
    const legMat = new THREE.MeshStandardMaterial({ color: 0x10151c, roughness: 0.85, metalness: 0.3 });
    const legs = [-1, 1].map((s) => {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), legMat);
      leg.scale.set(0.09, boardY, 0.09);
      leg.position.set(s * boardW * 0.34, boardY / 2, -0.1);
      return leg;
    });
    const stripMat = stripMaterial(THREE, palette);
    const strip = new THREE.Mesh(plane, stripMat);
    strip.scale.set(boardW - 0.1, 0.3, 1);
    strip.position.set(0, boardY - BOARD_H / 2 + 0.22, 0.045);
    // 背光晕：贴在牌后一点点，牌上有人在唱时亮起来，牌本身仍是实体。
    const haloMat = new THREE.MeshBasicMaterial({
      map: haloTex, transparent: true, opacity: 0, depthWrite: false, fog: false,
      blending: THREE.AdditiveBlending, color: accent(),
    });
    const halo = new THREE.Mesh(plane, haloMat);
    halo.scale.set(boardW + 2.2, BOARD_H + 2.0, 1);
    halo.position.set(0, boardY, -0.14);
    group.add(backing, trim, ...legs, strip, halo);

    const node = {
      kind: 'sign', sign, address, side, group, boardY, boardW,
      backing, trim, legs, strip, stripMat, backingMat, trimMat, halo, haloMat,
      pages: new Map(),
    };
    scene.add(group);
    live.set(`sign:${sign.id}`, node);
    return node;
  }

  function buildSkyCarrier(phrase) {
    const address = addressOf(phrase, true);
    const group = new THREE.Group();
    const height = SKY_HEIGHT[0] + (hashString(phrase.id) % 100) / 100 * (SKY_HEIGHT[1] - SKY_HEIGHT[0]);
    group.position.set(0, height, -address);
    // 字号按「句起点处到星幕的实际距离」定：星幕始终占屏高约 16%，宽度
    // 超出视口 76% 再收 —— 句长再夸张也不会糊出画面两侧。
    const page = buildPage(phrase, { sky: true, skyDist: Math.max(12, address - distanceAt(timeline, phrase.start, prefs)) });
    group.add(page.group);
    scene.add(group);
    live.set(`sky:${phrase.id}`, { kind: 'sky', phrase, address, group, height, page });
    return page;
  }

  // 一页词：字形图集 + 逐字 quad（+ 译文副行）。
  function buildPage(phrase, opts = {}) {
    const { canvas, rights } = makeAtlas(phrase);
    const tex = atlasTexture(THREE, canvas);
    const mat = glyphMaterial(THREE, palette, tex);
    mat.uniforms.uSky.value = opts.sky ? 1 : 0;
    const geo = glyphGeometry(THREE, rights, phrase.glyphs);
    const text = new THREE.Mesh(geo, mat);
    text.frustumCulled = false;

    const page = new THREE.Group();
    page.add(text);
    const aspect = canvas.width / canvas.height;
    let textW;
    let textH;
    if (opts.sky) {
      // 星幕：字高按实际观看距离的屏高占比定，宽度超出视口 76% 再收。
      const dist = opts.skyDist || SKY_LEAD_MAX;
      const halfH = dist * Math.tan((50 * Math.PI / 180) / 2);
      textH = halfH * 2 * SKY_SHARE;
      textW = textH * aspect;
      const cap = halfH * 2 * viewAspect * 0.76;
      if (textW > cap) { textW = cap; textH = cap / aspect; }
      text.scale.set(textW, textH, 1);
      const trans = makeTranslation(THREE, phrase.translation, textW * 0.72);
      if (trans) {
        trans.mesh.position.set(0, -textH * 0.72, 0);
        page.add(trans.mesh);
        page.userData.trans = trans;
      }
    } else {
      // 站牌：字高占牌面大部分，宽度收进牌面内沿。
      textH = BOARD_H * 0.56;
      textW = textH * aspect;
      const innerW = opts.innerW || 4.2;
      if (textW > innerW) { textW = innerW; textH = innerW / aspect; }
      text.scale.set(textW, textH, 1);
      text.position.set(0, 0.1, 0.05);
      const trans = makeTranslation(THREE, phrase.translation, textW);
      if (trans) {
        trans.mesh.position.set(0, -BOARD_H / 2 - 0.36, 0.05);
        page.add(trans.mesh);
        page.userData.trans = trans;
      }
    }
    page.userData.text = text;
    return { group: page, mat, tex, geo, textW, textH };
  }

  function disposePage(page, junk) {
    page.group.traverse((o) => {
      if (o.geometry && o.geometry !== plane) junk.push(o.geometry);
    });
    junk.push(page.mat, page.tex);
    const trans = page.group.userData.trans;
    if (trans) junk.push(trans.mat, trans.tex, trans.mesh.geometry);
  }

  function release(node) {
    if (!node) return;
    const key = node.kind === 'sign' ? `sign:${node.sign.id}` : `sky:${node.phrase.id}`;
    if (!live.delete(key)) return;
    scene.remove(node.group);
    const junk = [];
    if (node.kind === 'sign') {
      // strip / halo 用的是共享的 plane，回收时不能跟着一起 dispose ——
      // 别的牌还在用它（three 会在下一帧重新上传，但那是白扔一次显存带宽）。
      junk.push(node.backing.geometry, node.trim.geometry,
        node.backingMat, node.trimMat, node.stripMat, node.haloMat);
      node.pages.forEach((page) => disposePage(page, junk));
      node.legs.forEach((leg) => junk.push(leg.geometry));
    } else {
      disposePage(node.page, junk);
    }
    junk.forEach((x) => { try { x.dispose && x.dispose(); } catch (_) { /* 尽力而为 */ } });
  }

  function applyPagePalette(page) {
    page.mat.uniforms.uAccent.value.copy(accent());
    page.mat.uniforms.uInk.value.set(palette.ink || PALETTE_DEFAULT.ink);
    page.mat.uniforms.uCold.value.set(palette.secondary || PALETTE_DEFAULT.secondary);
    const trans = page.group.userData.trans;
    if (trans) trans.mat.color.set(palette.ink || PALETTE_DEFAULT.ink);
  }

  return {
    setTimeline(next, nextPrefs, nextPalette) {
      timeline = next;
      prefs = nextPrefs || prefs;
      if (nextPalette) palette = { ...palette, ...nextPalette };
      Array.from(live.values()).forEach(release);
      live.clear();
      addrCache.clear();
      windows = timeline && timeline.valid ? phraseWindows(timeline) : [];
    },

    // 星幕字号的视口宽钳制随窗口比例走（已建好的星幕不重建：下一句自然用新值）。
    setViewAspect(a) { if (a > 0.2) viewAspect = a; },

    setPalette(next) {
      palette = { ...palette, ...next };
      live.forEach((node) => {
        if (node.kind === 'sign') {
          node.backingMat.color.copy(backingColor());
          node.trimMat.color.copy(trimColor());
          node.backingMat.emissive.copy(accent());
          node.trimMat.emissive.copy(accent());
          node.stripMat.uniforms.uAccent.value.copy(accent());
          node.haloMat.color.copy(accent());
          node.pages.forEach((page) => applyPagePalette(page));
        } else {
          applyPagePalette(node.page);
        }
      });
    },

    // 相机阅读注视目标：当前句的载体中心 + 接近权重。
    readingTarget(t, d) {
      if (!timeline || !timeline.valid) return null;
      const idx = phraseAt(timeline, t);
      if (idx < 0) return null;
      const p = timeline.phrases[idx];
      const isSky = p.carrier === 'constellation';
      const address = addressOf(p, isSky);
      const win = windows[idx];
      if (t < win.enterAt - 0.6 || t > p.end + 0.4) return null;
      const w = readingWeight(d, address, isSky ? 40 : 24) * (isSky ? 0.62 : 1);
      if (w <= 0.001) return null;
      return isSky
        ? { x: 0, y: 4.6, z: -(address - 4), weight: w, side: 0 }
        : { x: signSideOf(p) * BOARD_X * 0.82, y: 2.2, z: -address, weight: w, side: signSideOf(p) };
    },

    update(time, d, audio, prefsNow) {
      if (!timeline || !timeline.valid) return;
      lastT = time;
      prefs = prefsNow || prefs;
      const glow = clamp(prefs.glow == null ? 1 : prefs.glow, 0, 2);
      const motion = prefs.reduced ? 0 : clamp(prefs.motion == null ? 1 : prefs.motion, 0, 2);
      const showLyrics = prefs.lyrics !== false;
      const zeros = audio.zeros;

      // —— 窗口管理：站牌按行驶距离预建/回收，星幕按时间窗口 —— //
      for (const sign of timeline.signs) {
        const key = `sign:${sign.id}`;
        const rel = addressOf(sign.phrases[0], false) - d;
        const anyActive = sign.phrases.some((p) => {
          const w = windows[timeline.phraseIndex.get(p)];
          return w && time >= w.enterAt - 0.8 && time <= w.exitAt + 0.8;
        });
        if (!live.has(key) && showLyrics && ((rel > -80 && rel < 180) || anyActive)) {
          buildSignCarrier(sign);
        } else if (live.has(key) && ((rel < -95 && !anyActive) || !showLyrics)) {
          release(live.get(key));
        }
      }
      for (let i = 0; i < timeline.phrases.length; i += 1) {
        const p = timeline.phrases[i];
        if (p.carrier !== 'constellation') continue;
        const key = `sky:${p.id}`;
        const w = windows[i];
        const active = time >= w.enterAt - 1.0 && time <= w.exitAt + 1.0;
        if (!live.has(key) && showLyrics && active) buildSkyCarrier(p);
        else if (live.has(key) && (!active || !showLyrics)) release(live.get(key));
      }

      // —— 每页 uniform —— //
      live.forEach((node) => {
        const pages = node.kind === 'sign' ? node.sign.phrases : [node.phrase];
        let nodeAct = 0;
        for (const p of pages) {
          const idx = timeline.phraseIndex.get(p);
          const w = windows[idx];
          if (!w) continue;
          const active = time >= w.enterAt - 0.5 && time <= w.exitAt + 0.5;
          if (node.kind === 'sign') {
            let page = node.pages.get(p.id);
            const rel = node.address - d;
            // 页面按距离窗口提前构建（不等到开唱）：把 canvas 图集的纹理上传
            // 摊进进站过程，避免起唱瞬间的上传尖峰；可见性仍由页窗口的 fade 管。
            if (!page && rel > -40 && rel < 130) {
              page = buildPage(p, { innerW: node.boardW - 0.5 });
              page.group.position.set(0, node.boardY + 0.06, 0.05);
              node.group.add(page.group);
              node.pages.set(p.id, page);
              page.group.visible = false;
            } else if (page && (rel < -55 || time > w.exitAt + 6)) {
              const junk = [];
              disposePage(page, junk);
              junk.forEach((x) => { try { x.dispose && x.dispose(); } catch (_) { /* 尽力而为 */ } });
              node.group.remove(page.group);
              node.pages.delete(p.id);
              continue;
            }
            if (!page) continue;
            const enterD = Math.max(0.12, Math.min(ENTER_SIGN, p.start - w.enterAt));
            const exitD = Math.max(0.12, Math.min(EXIT_SIGN, w.exitAt - p.end));
            const enter = smooth((time - w.enterAt) / enterD);
            const exit = smooth((time - p.end) / exitD);
            const fade = enter * (1 - exit);
            page.group.visible = fade > 0.001;
            page.mat.uniforms.uTime.value = time;
            page.mat.uniforms.uFade.value = fade;
            page.mat.uniforms.uEnter.value = motion > 0 ? enter : 1;
            page.mat.uniforms.uExit.value = motion > 0 ? exit : 0;
            page.mat.uniforms.uMotion.value = motion;
            page.mat.uniforms.uGlow.value = glow;
            page.mat.uniforms.uVocal.value = clamp(audio.vocal || 0);
            const trans = page.group.userData.trans;
            if (trans) trans.mat.opacity = 0.72 * fade;
            // 牌面点亮：这句话里正在唱的字给出激活强度；句尾跑灯跟随退场。
            let act = 0;
            for (const g of p.glyphs) {
              if (time >= g.start && time < g.end) {
                act = Math.max(act, 0.55 + Math.exp(-(time - g.start) * 7) * 0.45);
              }
            }
            node.stripMat.uniforms.uLight.value = Math.max(node.stripMat.uniforms.uLight.value, act * fade);
            node.stripMat.uniforms.uRunner.value = time >= p.end ? exit : -1;
            node.backingMat.emissiveIntensity = Math.max(node.backingMat.emissiveIntensity, act * fade * 0.05);
            node.trimMat.emissiveIntensity = Math.max(node.trimMat.emissiveIntensity, act * fade * 0.3);
            nodeAct = Math.max(nodeAct, act * fade);
          } else {
            const page = node.page;
            const enter = smooth((time - w.enterAt) / ENTER_SKY);
            const exit = smooth((time - w.exitAt) / EXIT_SKY);
            const fade = enter * (1 - exit);
            node.group.visible = fade > 0.001;
            page.mat.uniforms.uTime.value = time;
            page.mat.uniforms.uFade.value = fade;
            page.mat.uniforms.uEnter.value = motion > 0 ? enter : 1;
            page.mat.uniforms.uExit.value = motion > 0 ? exit : 0;
            page.mat.uniforms.uMotion.value = motion;
            page.mat.uniforms.uGlow.value = glow;
            page.mat.uniforms.uVocal.value = clamp(audio.vocal || 0);
          }
        }
        if (node.kind === 'sign') {
          node.stripMat.uniforms.uBins.value.set(audio.bins || zeros);
          node.stripMat.uniforms.uEnergy.value = clamp(audio.energy || 0);
          // 背光晕随「这一句里正在唱的字」呼吸：没人在唱时，牌只是一块牌子。
          node.haloMat.opacity = nodeAct * (0.14 + glow * 0.2);
        }
      });
    },

    stats() {
      let signs = 0;
      let pages = 0;
      let sky = 0;
      live.forEach((node) => {
        if (node.kind === 'sign') { signs += 1; pages += node.pages.size; } else sky += 1;
      });
      return { signs, pages, sky };
    },

    debug(camera) {
      if (!timeline || !timeline.valid) return null;
      const idx = phraseAt(timeline, lastT);
      if (idx < 0) return null;
      const p = timeline.phrases[idx];
      const node = live.get(p.carrier === 'constellation' ? `sky:${p.id}` : (p.sign ? `sign:${p.sign.id}` : ''));
      if (!node) return { phraseId: p.id, carrier: p.carrier, mounted: false };
      const page = node.kind === 'sign' ? node.pages.get(p.id) : node.page;
      if (!page) return { phraseId: p.id, carrier: p.carrier, mounted: true, pageBuilt: false };
      const textNode = page.group.userData.text;
      textNode.updateMatrixWorld(true);
      camera.updateMatrixWorld();
      const corners = [[0, 0], [1, 0], [1, 1], [0, 1]].map(([u, v]) => {
        const v3 = new THREE.Vector3(u - 0.5, v - 0.5, 0).applyMatrix4(textNode.matrixWorld);
        v3.project(camera);
        return v3;
      });
      const xs = corners.map((c) => c.x);
      const ys = corners.map((c) => c.y);
      return {
        phraseId: p.id, carrier: p.carrier, mounted: true, pageBuilt: true,
        onScreen: corners.every((c) => Math.abs(c.x) <= 1.05 && Math.abs(c.y) <= 1.05 && Math.abs(c.z) <= 1),
        bounds: {
          left: Math.min(...xs), right: Math.max(...xs),
          bottom: Math.min(...ys), top: Math.max(...ys),
        },
      };
    },

    dispose() {
      Array.from(live.values()).forEach(release);
      live.clear();
      addrCache.clear();
      plane.dispose();
      haloTex.dispose();
      timeline = null;
    },
  };
}
