// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
//
// 「隧图 · 深空」歌词层。歌词是场景正中的实体：入场时 3400 颗散点从深空
// 凝聚成字形，实心字平面随后逐字"擦亮"接棒（横向光幕推进，唱过的字从
// 待唱色翻到已唱色），句尾先恢复字形再散开消融。播放时钟是唯一权威 ——
// 同一时刻的画面与 seek 落点一致，逐字时间轴由宿主编制好传入。
//
// 行生命周期（绝对时间，秒）：
//   入场 entry 0.22s：粒子凝聚（smooth(entry/0.78)），实心字在 entry 60%
//   后渐入接管；出口 exitStart = vocalEnd + min(0.8, hold*0.5 + pause*0.15)，
//   exitPhase 在 0..0.18 抬回粒子、0.18 后 departure 随 dissolve 散开，
//   时长 0.45 + dissolve*0.55。

import { clamp, smooth, seededRandom } from './util.js';

const LYRIC_PARTICLE_CAP = 3400;
const MAX_ROW_WIDTH = 1400;      // canvas 像素：主行折行阈值
const MAIN_FONT = '900 82px "Microsoft YaHei","PingFang SC","Segoe UI",sans-serif';
const SUB_FONT = '500 32px "Microsoft YaHei","Segoe UI",sans-serif';

export function createLyrics(THREE, scene) {
  const glyphStage = new THREE.Group();
  glyphStage.renderOrder = 30;
  scene.add(glyphStage);

  // 点阵粒子云：position=当前散点，aTarget=字形目标点
  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(LYRIC_PARTICLE_CAP * 3), 3).setUsage(THREE.DynamicDrawUsage));
  particleGeo.setAttribute('aTarget', new THREE.BufferAttribute(new Float32Array(LYRIC_PARTICLE_CAP * 3), 3).setUsage(THREE.DynamicDrawUsage));
  particleGeo.setAttribute('aSeed', new THREE.BufferAttribute(new Float32Array(LYRIC_PARTICLE_CAP * 3), 3).setUsage(THREE.DynamicDrawUsage));
  particleGeo.setAttribute('aColor', new THREE.BufferAttribute(new Float32Array(LYRIC_PARTICLE_CAP * 3), 3).setUsage(THREE.DynamicDrawUsage));
  const particleMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    depthTest: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      tint: { value: new THREE.Color('#f2a900') },
      pixelRatio: { value: 1 },
      cohesion: { value: 0 },
      disperse: { value: 0 },
      time: { value: 0 },
      opacity: { value: 1 },
    },
    vertexShader: `
        attribute vec3 aTarget;
        attribute vec3 aSeed;
        attribute vec3 aColor;
        uniform float pixelRatio;
        uniform float cohesion;
        uniform float disperse;
        uniform float time;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
            vec3 pos = mix(position, aTarget, cohesion);
            if (disperse > 0.001) {
                pos.z += disperse * (60.0 + aSeed.z * 160.0);
                pos.x += (aSeed.x - 0.5) * disperse * 55.0;
                pos.y += (aSeed.y - 0.5) * disperse * 36.0;
            }
            vec4 mv = modelViewMatrix * vec4(pos, 1.0);
            gl_Position = projectionMatrix * mv;
            float depth = max(0.1, -mv.z);
            gl_PointSize = clamp((1.7 + cohesion * 0.9) * pixelRatio * 340.0 / depth, 1.0, 28.0);
            float nearFade = smoothstep(4.0, 18.0, depth);
            vAlpha = nearFade * (0.22 + cohesion * 0.78) * (1.0 - disperse * 0.9);
            vColor = aColor;
        }
    `,
    fragmentShader: `
        uniform vec3 tint;
        uniform float opacity;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
            vec2 p = gl_PointCoord * 2.0 - 1.0;
            float r = dot(p, p);
            if (r > 1.0) discard;
            float core = exp(-r * 7.5);
            float halo = exp(-r * 2.2) * 0.32;
            gl_FragColor = vec4(mix(tint, vColor, 0.55) * (core * 1.5 + halo), (core + halo) * vAlpha * opacity);
        }
    `,
  });
  const particlePoints = new THREE.Points(particleGeo, particleMat);
  particlePoints.frustumCulled = false;
  particlePoints.renderOrder = 0;
  glyphStage.add(particlePoints);

  // 当前状态
  let activePointCount = 0;
  let lineKey = '';
  let lineIndex = 0;
  let vocalEnd = 0;
  let rollAngle = 0;
  let viewAspect = 1;
  let currentLine = null;
  let colors = {
    accent: new THREE.Color('#f2a900'),
    secondary: new THREE.Color('#76bfae'),
    ink: new THREE.Color('#f2f0e9'),
  };

  function clearGlyphStage() {
    for (let i = glyphStage.children.length - 1; i >= 0; i -= 1) {
      const mesh = glyphStage.children[i];
      if (mesh === particlePoints) continue;
      glyphStage.remove(mesh);
      if (mesh.material) {
        if (mesh.material.uniforms && mesh.material.uniforms.map) mesh.material.uniforms.map.value.dispose();
        mesh.material.dispose();
      }
      if (mesh.geometry) mesh.geometry.dispose();
    }
    lineKey = '';
  }

  // 单个字素 → 白字 canvas 平面（着色器按时间窗横扫上色）。
  function addGlyph(label, px, py, advance, unit, start, end, subtitle) {
    if (!String(label).trim()) return;
    const canvas = document.createElement('canvas');
    canvas.width = Math.ceil(advance + 48);
    canvas.height = subtitle ? 96 : 152;
    const ctx2d = canvas.getContext('2d');
    ctx2d.font = subtitle ? SUB_FONT : MAIN_FONT;
    ctx2d.textBaseline = 'middle';
    ctx2d.fillStyle = '#fff';
    ctx2d.shadowColor = '#fff';
    ctx2d.shadowBlur = subtitle ? 3 : 8;
    ctx2d.fillText(label, 24, canvas.height / 2);
    const map = new THREE.CanvasTexture(canvas);
    map.generateMipmaps = false;
    map.minFilter = THREE.LinearFilter;
    const material = new THREE.ShaderMaterial({
      transparent: true, depthTest: false, depthWrite: false,
      uniforms: {
        map: { value: map }, begin: { value: start }, finish: { value: end },
        alpha: { value: 1 }, motion: { value: 1 }, glow: { value: 1 },
        uTime: { value: 0 },
        wait: { value: subtitle ? colors.secondary.clone() : colors.ink.clone().multiplyScalar(0.65) },
        sung: { value: subtitle ? colors.secondary.clone() : colors.accent.clone() },
      },
      vertexShader: `
            uniform float begin,finish,motion,uTime;
            varying vec2 vUv;
            void main(){
                vUv=uv;
                float p=clamp((uTime-begin)/max(0.001,finish-begin),0.0,1.0);
                float beat=sin(p*3.14159265)*motion;
                vec3 pos=position;
                pos.xy*=1.0+beat*0.055;
                pos.y+=beat*0.28;
                gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);
            }`,
      fragmentShader: `
            uniform sampler2D map;
            uniform float begin,finish,alpha,glow,uTime;
            uniform vec3 wait,sung;
            varying vec2 vUv;
            void main(){
                float coverage=texture2D(map,vUv).a;
                float p=clamp((uTime-begin)/max(0.001,finish-begin),0.0,1.0);
                float wipe=1.0-smoothstep(p-0.025,p+0.025,vUv.x);
                if(p<=0.0)wipe=0.0;
                if(p>=1.0)wipe=1.0;
                float core=smoothstep(0.15,0.75,coverage);
                float a=clamp(core+coverage*(1.0-core)*glow*0.65,0.0,1.0)*alpha;
                gl_FragColor=vec4(mix(wait,sung,wipe),a);
                #include <tonemapping_fragment>
                #include <colorspace_fragment>
            }`,
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(canvas.width * unit, canvas.height * unit), material);
    mesh.position.set(px + advance * unit / 2, py, 0);
    mesh.renderOrder = 30;
    glyphStage.add(mesh);
    return mesh;
  }

  // 行内容/排版/调色变化时重建字素平面并重采样粒子。
  function rebuild(line) {
    clearGlyphStage();
    const glyphs = Array.isArray(line.glyphs) ? line.glyphs : [];
    const text = String(line.text || '');
    const translation = String(line.translation || '');
    lineIndex = Number(line.index) || 0;
    // 行间左右交替的轻微滚转，隧道里的句子像铺在弯道上的灯牌。
    rollAngle = lineIndex % 2 === 0 ? 0.085 : -0.068;

    // 字素时间轴缺失时按行时长均分（宿主没有逐字 timing 的兜底）。
    let timeline = glyphs.filter((g) => g && g.text);
    if (!timeline.length && text) {
      const chars = Array.from(text);
      const start = Number(line.start) || 0;
      const end = Math.max(start + 0.6, Number(line.end) || start + 4);
      timeline = chars.map((ch, i) => ({
        text: ch,
        start: start + (end - start) * i / chars.length,
        end: start + (end - start) * (i + 1) / chars.length,
      }));
    }
    vocalEnd = timeline.reduce((acc, g) => (String(g.text).trim() ? Math.max(acc, Number(g.end) || 0) : acc), Number(line.start) || 0);

    // 主行折行：按 canvas 像素宽测字，超 1400 换行。
    const measure = document.createElement('canvas').getContext('2d');
    measure.font = MAIN_FONT;
    const rows = [[]];
    let rowWidth = 0;
    timeline.forEach((g) => {
      const advance = measure.measureText(g.text).width;
      if (rowWidth + advance > MAX_ROW_WIDTH && rows[rows.length - 1].length) {
        rows.push([]);
        rowWidth = 0;
      }
      rows[rows.length - 1].push({ ...g, advance });
      rowWidth += advance;
    });
    const maxWidth = Math.max(1, ...rows.map((row) => row.reduce((sum, g) => sum + g.advance, 0)));
    const fontScale = clamp(Number(line.fontScale) || 1, 0.65, 1.5);
    const unit = Math.min(0.025 * fontScale, 42 / maxWidth, 13 / (rows.length * 110 + 80));
    rows.forEach((row, ri) => {
      let x = -row.reduce((sum, g) => sum + g.advance, 0) * unit / 2;
      const y = ((rows.length - 1) / 2 - ri) * 110 * unit + 0.6;
      row.forEach((g) => {
        addGlyph(g.text, x, y, g.advance, unit, Number(g.start) || 0, Number(g.end) || 0, false);
        x += g.advance * unit;
      });
    });
    // 译文：逐字素小字，超宽整体等比收进可读宽度。
    if (translation) {
      measure.font = SUB_FONT;
      const labels = Array.from(translation);
      const advances = labels.map((s) => measure.measureText(s).width);
      const total = advances.reduce((a, b) => a + b, 0);
      const fit = Math.min(1, MAX_ROW_WIDTH / Math.max(1, total));
      let x = -total * unit * fit / 2;
      labels.forEach((s, i) => {
        const mesh = addGlyph(s, x, -(rows.length * 55 + 50) * unit, advances[i], unit, -1, -0.5, true);
        if (mesh) {
          mesh.scale.x = fit;
          mesh.position.x = x + advances[i] * unit * fit / 2;
        }
        x += advances[i] * unit * fit;
      });
    }
    rebuildParticles();
  }

  // 从已建字形平面 5px 网格采样目标点（含译文），生成散点起点。
  function rebuildParticles() {
    const samples = [];
    glyphStage.children.forEach((mesh) => {
      if (mesh === particlePoints || !mesh.geometry) return;
      const canvas = mesh.material.uniforms.map.value.image;
      const ctx2d = canvas.getContext('2d');
      const pixels = ctx2d.getImageData(0, 0, canvas.width, canvas.height).data;
      const w = mesh.geometry.parameters.width * mesh.scale.x;
      const h = mesh.geometry.parameters.height * mesh.scale.y;
      const color = mesh.material.uniforms.sung.value;
      for (let y = 0; y < canvas.height; y += 5) {
        for (let x = 0; x < canvas.width; x += 5) {
          if (pixels[(y * canvas.width + x) * 4 + 3] < 150) continue;
          samples.push({
            x: mesh.position.x + ((x + 0.5) / canvas.width - 0.5) * w,
            y: mesh.position.y + (0.5 - (y + 0.5) / canvas.height) * h,
            color,
          });
        }
      }
    });
    const rand = seededRandom(`tunnel-lyric-particles:${lineKey}`);
    activePointCount = Math.min(LYRIC_PARTICLE_CAP, samples.length);
    const pos = particleGeo.attributes.position.array;
    const target = particleGeo.attributes.aTarget.array;
    const seeds = particleGeo.attributes.aSeed.array;
    const colArr = particleGeo.attributes.aColor.array;
    for (let i = 0; i < LYRIC_PARTICLE_CAP; i += 1) {
      if (i < activePointCount) {
        const sample = samples[Math.floor(i * samples.length / activePointCount)];
        target[i * 3] = sample.x;
        target[i * 3 + 1] = sample.y;
        target[i * 3 + 2] = 0;
        pos[i * 3] = sample.x + (rand() - 0.5) * 65;
        pos[i * 3 + 1] = sample.y + (rand() - 0.5) * 40;
        pos[i * 3 + 2] = -80 - rand() * 160;
        seeds[i * 3] = rand();
        seeds[i * 3 + 1] = rand();
        seeds[i * 3 + 2] = rand();
        colArr[i * 3] = sample.color.r;
        colArr[i * 3 + 1] = sample.color.g;
        colArr[i * 3 + 2] = sample.color.b;
      } else {
        // 超出采样数的粒子沉到视线之外，drawRange 只画前段，双保险。
        target[i * 3 + 2] = 99999;
        pos[i * 3 + 2] = 99999;
      }
    }
    particleGeo.setDrawRange(0, activePointCount);
    ['position', 'aTarget', 'aSeed', 'aColor'].forEach((name) => {
      particleGeo.attributes[name].needsUpdate = true;
    });
  }

  function setPalette(palette = {}) {
    const pick = (key, fallback) => {
      const v = palette[key];
      return typeof v === 'string' && v ? v : fallback;
    };
    colors.accent.set(pick('accent', '#f2a900'));
    colors.secondary.set(pick('secondary', '#76bfae'));
    colors.ink.set(pick('ink', '#f2f0e9'));
    particleMat.uniforms.tint.value.copy(colors.accent);
    // 已建平面上的 wait/sung 是建行时的快照，换主题后整体重排一次。
    if (lineKey) {
      const current = currentLine;
      if (current) rebuild(current);
    }
  }

  return {
    // 宿主侧检测行更替后调用；line=null 清场。
    setLine(line) {
      currentLine = line || null;
      if (!line) {
        clearGlyphStage();
        activePointCount = 0;
        particleGeo.setDrawRange(0, 0);
        vocalEnd = 0;
        return;
      }
      const key = `${line.index || 0}:${line.start || 0}:${line.text || ''}`;
      if (key === lineKey) return;
      lineKey = key;
      rebuild(line);
    },

    // 逐帧：生命周期相位与浮动。clock: { start, vocalEnd, hold, pause, dissolve }
    update(time, ctx = {}) {
      const clock = ctx.clock || {};
      const reduced = ctx.reduced;
      const motion = reduced ? 0 : clamp(Number(ctx.motion), 0, 2);
      const start = Number(clock.start) || 0;
      const vEnd = Math.max(start, Number(clock.vocalEnd) || vocalEnd || start);
      const hold = clamp(Number(clock.hold), 0, 0.8);
      const pause = clamp(Number(clock.pause), 0, 3);
      const dissolve = clamp(Number(clock.dissolve), 0, 1);
      const exitStart = vEnd + Math.min(0.8, hold * 0.5 + pause * 0.15);
      const exitDuration = 0.45 + dissolve * 0.55;
      const entryPhase = clamp((time - start) / 0.22);
      const exitPhase = clamp((time - exitStart) / exitDuration);
      const hasLine = Boolean(currentLine) && Number.isFinite(time) && time >= start;
      const alive = hasLine && time < exitStart + exitDuration;
      const entrance = reduced ? 1 : smooth(entryPhase / 0.78);
      const solidIn = reduced ? 1 : smooth((entryPhase - 0.60) / 0.40);
      const solidOut = 1 - smooth(exitPhase / 0.28);
      const departure = smooth((exitPhase - 0.18) / 0.82);
      const releaseIn = smooth(exitPhase / 0.20);
      const releaseOut = 1 - smooth((exitPhase - 0.55) / 0.45);
      const glyphAlpha = alive ? solidIn * solidOut : 0;
      const particleAlpha = !alive || reduced ? 0
        : (1 - solidIn) * 0.9 + solidIn * releaseIn * releaseOut * dissolve;

      glyphStage.visible = alive;
      glyphStage.children.forEach((mesh) => {
        if (mesh === particlePoints) return;
        if (mesh.material && mesh.material.uniforms) {
          mesh.material.uniforms.uTime.value = Number(time) || 0;
          mesh.material.uniforms.motion.value = motion;
          mesh.material.uniforms.glow.value = clamp(Number(ctx.glow), 0, 2);
          mesh.material.uniforms.alpha.value = glyphAlpha;
        }
      });
      particlePoints.visible = particleAlpha > 0 && activePointCount > 0;
      particleMat.uniforms.cohesion.value = entrance;
      particleMat.uniforms.disperse.value = departure * dissolve;
      particleMat.uniforms.opacity.value = particleAlpha;
      particleMat.uniforms.time.value = Number(time) || 0;

      // 场景整体轻微浮动 + 低频上浮 + 行间滚转；字形组按视口横纵比钳制。
      const floatX = Math.sin(time * 0.28) * 0.45 * motion;
      const floatY = (Math.cos(time * 0.23) * 0.3 + Number(ctx.bass) * 0.25) * motion;
      glyphStage.position.set(floatX, floatY, -34);
      glyphStage.rotation.z = rollAngle * motion;
      glyphStage.scale.setScalar(Math.min(1, viewAspect * 0.7));
    },

    setViewAspect(aspect) {
      viewAspect = Math.max(0.1, Number(aspect) || 1);
    },

    setPalette,

    resize(_w, _h, ratio) {
      particleMat.uniforms.pixelRatio.value = ratio;
    },

    dispose() {
      clearGlyphStage();
      scene.remove(glyphStage);
      particleGeo.dispose();
      particleMat.dispose();
    },

    stats() {
      return { glyphs: glyphStage.children.length - 1, particles: activePointCount };
    },

    get vocalEndValue() { return vocalEnd; },
  };
}
