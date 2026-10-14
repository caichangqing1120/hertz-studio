// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
//
// Optional final image pass for SpaceFields. This module owns effect metadata,
// sanitization and shader source only; SpaceFields owns every GL resource.
//
// Integration contract:
//   1. Compile vertex/fragment, collect the locations named by uniforms.
//   2. Render the existing tone-mapped composite to a separate RGBA target.
//      Bind that premultiplied display-color texture on unit 0 (uScene).
//   3. Optionally bind the scene's unfiltered hardware depth texture on unit 1
//      (uDepth) and pass hasDepth/near/far/focusDistance/focusRange in env.
//      Without depth, bokeh keeps the central focus area sharp.
//   4. Bind an output FBO distinct from uScene, disable depth/blend/cull, call
//      bind(gl, locations, values, env), then draw TRIANGLES with 3 vertices.
//      The vertex shader uses gl_VertexID; no attribute buffer is needed.
//   5. When active(values) is false, bypass this pass and its intermediate FBO.
//
// env.width/height are drawing-buffer pixels; timeSec is the host's visual clock
// (freeze it on pause). reducedMotion fixes the noise seed at zero. quality 0/1/2
// costs at most 13/23/33 scene samples, plus one optional depth sample. Disabled
// effects skip their sampling branches. No scene geometry, colors, context,
// texture, timer, frame loop or persisted state is owned here.
(function () {
  'use strict';

  // Keep the parameter identities/ranges from stage-control's lens/grain groups.
  // Space preferences are independent, so all nine additional effects start off.
  var specs = [
    { key: 'halftone', label: '半调网点', group: 'grain', min: 0, max: 40, step: 1, unit: '%', def: 0 },
    { key: 'grain', label: '胶片颗粒', group: 'grain', min: 0, max: 40, step: 1, unit: '%', def: 0 },
    { key: 'vignette', label: '镜头暗角', group: 'grain', min: 0, max: 100, step: 1, unit: '%', def: 0 },
    { key: 'softness', label: '光晕柔化', group: 'grain', min: 0, max: 20, step: 1, unit: 'px', def: 0 },
    { key: 'bokeh', label: '焦点虚化', group: 'lens', min: 0, max: 20, step: 1, unit: 'px', def: 0 },
    { key: 'chroma', label: '径向色散', group: 'lens', min: 0, max: 12, step: 1, unit: 'px', def: 0 },
    { key: 'aberration', label: '镜头光学瑕疵', group: 'lens', min: 0, max: 12, step: 1, unit: 'px', def: 0 },
    { key: 'distort', label: '胶片散眩', group: 'lens', min: 0, max: 12, step: 1, unit: 'px', def: 0 },
    { key: 'bloom', label: '对比度辉映', group: 'lens', min: 0, max: 12, step: 1, unit: 'px', def: 0 }
  ];
  var effectUniforms = ['uHalftone', 'uGrain', 'uVignette', 'uSoftness', 'uBokeh',
    'uChroma', 'uAberration', 'uDistort', 'uBloom'];
  var uniformNames = ['uScene', 'uDepth', 'uResolution', 'uTime', 'uEnabled',
    'uHasDepth', 'uNear', 'uFar', 'uFocusDistance', 'uFocusRange', 'uKernelTaps',
    'uGlareTaps'].concat(effectUniforms);
  var own = Object.prototype.hasOwnProperty;
  function finite(value, fallback) { return typeof value === 'number' && isFinite(value) ? value : fallback; }
  function clamp(value, min, max) { return Math.min(max, Math.max(min, value)); }
  function amount(values, spec) {
    return clamp(values && typeof values === 'object' && !Array.isArray(values) && own.call(values, spec.key)
      ? finite(values[spec.key], spec.def) : spec.def, spec.min, spec.max);
  }
  function catalog() {
    return specs.map(function (spec) {
      var copy = {};
      Object.keys(spec).forEach(function (key) { copy[key] = spec[key]; });
      return copy;
    });
  }
  function normalize(values) {
    var result = {};
    specs.forEach(function (spec) { result[spec.key] = amount(values, spec); });
    return result;
  }
  function defaults() { return normalize(null); }
  function active(values) {
    for (var i = 0; i < specs.length; i += 1) if (amount(values, specs[i]) > 0) return true;
    return false;
  }

  var vertex = `#version 300 es
precision highp float;
out vec2 vUV;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUV = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;

  var fragment = `#version 300 es
precision highp float;
in vec2 vUV;
uniform sampler2D uScene;
uniform sampler2D uDepth;
uniform vec2 uResolution;
uniform float uTime;
uniform int uEnabled;
uniform int uHasDepth;
uniform float uNear;
uniform float uFar;
uniform float uFocusDistance;
uniform float uFocusRange;
uniform int uKernelTaps;
uniform int uGlareTaps;
uniform float uHalftone;
uniform float uGrain;
uniform float uVignette;
uniform float uSoftness;
uniform float uBokeh;
uniform float uChroma;
uniform float uAberration;
uniform float uDistort;
uniform float uBloom;
out vec4 frag;

// Four axial samples work on low quality. The other tiers add diagonals and
// an inner ring; fixed loop bounds also work on conservative WebGL drivers.
const vec2 KERNEL[12] = vec2[12](
  vec2(1.0, 0.0), vec2(-1.0, 0.0), vec2(0.0, 1.0), vec2(0.0, -1.0),
  vec2(0.7071, 0.7071), vec2(-0.7071, 0.7071),
  vec2(0.7071, -0.7071), vec2(-0.7071, -0.7071),
  vec2(0.5, 0.0), vec2(-0.5, 0.0), vec2(0.0, 0.5), vec2(0.0, -0.5));
float luma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
float noise(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
vec4 scene(vec2 uv) {
  // Do not rely on the owner's wrap mode when a lens moves the UV off-screen.
  vec2 edge = 0.5 / uResolution;
  return texture(uScene, clamp(uv, edge, 1.0 - edge));
}
vec4 highlights(vec4 c) {
  float light = luma(c.rgb / max(c.a, 0.0001));
  return c * smoothstep(0.55, 0.92, light);
}
float defocus(vec2 uv) {
  if (uHasDepth == 1) {
    float z = texture(uDepth, clamp(uv, 0.0, 1.0)).r * 2.0 - 1.0;
    float eyeDepth = (2.0 * uNear * uFar) / max(uFar + uNear - z * (uFar - uNear), 0.0001);
    return smoothstep(0.0, uFocusRange, abs(eyeDepth - uFocusDistance));
  }
  // Focus fallback for owners with a depth renderbuffer: an elliptical focus
  // area, rather than making the entire scene equally soft.
  vec2 d = (uv - 0.5) * vec2(uResolution.x / uResolution.y, 1.0);
  return smoothstep(0.16, 0.64, length(d));
}

void main() {
  if (uEnabled == 0) { frag = texture(uScene, vUV); return; }
  vec2 d = vUV - 0.5;
  // Mild barrel distortion is optical aberration; radial R/B offsets below
  // keep chromatic aberration independently adjustable.
  vec2 uv = 0.5 + d * (1.0 + uAberration / 12.0 * dot(d, d) * 0.18);
  vec4 c = scene(uv);
  if (uChroma > 0.0) {
    vec2 offset = d * (uChroma * 2.0) / uResolution;
    c.r = scene(uv + offset).r;
    c.b = scene(uv - offset).b;
  }

  float focus = uBokeh > 0.0 ? defocus(uv) : 0.0;
  float blurRadius = max(uSoftness * 0.45, uBokeh * focus);
  if (blurRadius > 0.0) {
    vec4 blurred = c * 4.0;
    for (int i = 0; i < 12; i += 1) {
      if (i >= uKernelTaps) break;
      blurred += scene(uv + KERNEL[i] * blurRadius / uResolution);
    }
    blurred /= 4.0 + float(uKernelTaps);
    float mixAmount = max(uSoftness / 20.0 * 0.72, uBokeh / 20.0 * focus);
    c = mix(c, blurred, mixAmount);
  }

  // Contrast bloom follows the creative compositor's luminance extraction.
  // Its own radius keeps the softness/bokeh controls independent of bloom.
  if (uBloom > 0.0) {
    vec4 halo = highlights(c) * 2.0;
    float radius = 4.0 + uBloom * 0.7;
    for (int i = 0; i < 12; i += 1) {
      if (i >= uKernelTaps) break;
      halo += highlights(scene(uv + KERNEL[i] * radius / uResolution));
    }
    halo *= (uBloom / 12.0 * 0.78) / (2.0 + float(uKernelTaps));
    // Screen-like light addition preserves detail in already bright pixels.
    c.rgb += halo.rgb * (1.0 - c.rgb);
    c.a = max(c.a, halo.a);
  }

  if (uDistort > 0.0) {
    vec4 glare = vec4(0.0);
    for (int i = 0; i < 6; i += 1) {
      if (i >= uGlareTaps) break;
      float side = (i % 2) == 0 ? -1.0 : 1.0;
      float distance = (floor(float(i) * 0.5) + 1.0) * (3.0 + uDistort);
      vec2 offset = vec2(side * distance, side * distance * 0.12) / uResolution;
      glare += highlights(scene(uv + offset));
    }
    glare *= uDistort / 12.0 * 0.48 / float(uGlareTaps);
    c.rgb += glare.rgb * (1.0 - c.rgb);
    c.a = max(c.a, glare.a);
  }

  if (uHalftone > 0.0) {
    // The creative pass's derivative-smoothed print dots, colored by the
    // existing scene instead of introducing another theme/color owner.
    float spacing = max(4.0, min(uResolution.x, uResolution.y) / 110.0);
    vec2 grid = mat2(0.866, -0.5, 0.5, 0.866) * (vUV * uResolution) / spacing;
    float light = luma(c.rgb / max(c.a, 0.0001));
    float radius = 0.10 + 0.22 * (1.0 - smoothstep(0.10, 0.65, light));
    float distance = length(fract(grid) - 0.5);
    float aa = max(fwidth(distance), 0.02);
    float ink = 1.0 - smoothstep(radius - aa, radius + aa, distance);
    c.rgb *= 1.0 - ink * uHalftone / 40.0 * 0.65;
  }
  if (uGrain > 0.0) {
    float seed = mod(floor(uTime * 24.0), 4096.0);
    float grain = noise(floor(vUV * uResolution) + vec2(seed * 17.0, seed * 7.0)) - 0.5;
    c.rgb *= 1.0 + grain * uGrain / 40.0 * 0.35;
  }
  if (uVignette > 0.0) {
    vec2 corner = (vUV - vec2(0.5, 0.45)) * vec2(1.0, 1.12);
    float falloff = smoothstep(0.24, 0.76, length(corner));
    c.rgb *= 1.0 - falloff * uVignette / 100.0 * 0.72;
  }
  // Preserve premultiplied coverage, including zero-alpha backgrounds.
  frag = vec4(clamp(c.rgb, vec3(0.0), vec3(c.a)), clamp(c.a, 0.0, 1.0));
}`;

  // The owner has already selected the program. Locations may be absent after
  // driver optimization. Do not change texture units, FBOs, VAOs or GL state.
  function bind(gl, locations, values, env) {
    env = env || {};
    function has(name) { return locations[name] !== null && locations[name] !== undefined; }
    function f(name, value) { if (has(name)) gl.uniform1f(locations[name], value); }
    function i(name, value) { if (has(name)) gl.uniform1i(locations[name], value); }
    var quality = Math.floor(clamp(finite(env.quality, 1), 0, 2));
    // JS has a larger numeric range than GLSL floats. These bounds also keep
    // the depth interval distinct after uniform1f converts it to float32.
    var width = Math.floor(clamp(finite(env.width, 1), 1, 65536));
    var height = Math.floor(clamp(finite(env.height, 1), 1, 65536));
    var near = clamp(finite(env.near, 0.1), 0.001, 10000);
    var far = clamp(finite(env.far, 100), near + 0.01, 1000000);
    i('uScene', 0); i('uDepth', 1); i('uEnabled', active(values) ? 1 : 0);
    i('uHasDepth', env.hasDepth === true ? 1 : 0);
    i('uKernelTaps', (quality + 1) * 4); i('uGlareTaps', (quality + 1) * 2);
    if (has('uResolution')) gl.uniform2f(locations.uResolution, width, height);
    // Grain already repeats every 4096 frames; 4096 seconds is an exact
    // multiple of that period and bounds the input without changing its phase.
    f('uTime', env.reducedMotion === true ? 0 : finite(env.timeSec, 0) % 4096);
    f('uNear', near); f('uFar', far);
    f('uFocusDistance', clamp(finite(env.focusDistance, 8), near, far));
    f('uFocusRange', clamp(finite(env.focusRange, 3), 0.001, 1000000));
    for (var n = 0; n < specs.length; n += 1) f(effectUniforms[n], amount(values, specs[n]));
  }

  window.SpacePost = {
    catalog: catalog, defaults: defaults, normalize: normalize, active: active,
    vertex: vertex, fragment: fragment, uniforms: Object.freeze(uniformNames), bind: bind
  };
})();
