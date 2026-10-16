// SPDX-License-Identifier: MIT
import { basicInstance, level, own, qualityDensity, root } from './factories.js';
import { createSpatialResources } from './resources.js';

const vertex = `
uniform float uTime,uBass;
varying vec3 vNormal,vSurface;
void main(){vSurface=normalize(position);vNormal=normalize(normalMatrix*normal);
 float wave=sin(vSurface.y*8.0+uTime*.3)*cos(vSurface.x*6.0-uTime*.2);
 vec3 p=position+normal*wave*uBass*.035;
 gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);}`;
const artwork = `
uniform sampler2D uCover;uniform float uHasCover;
varying vec3 vNormal,vSurface;
vec3 art(){
 vec3 n=normalize(vSurface);float arc=acos(clamp(abs(n.z),0.0,1.0));
 // Arc-length projection keeps artwork continuous across the curved surface.
 vec2 direction=n.xy/max(length(n.xy),.0001);
 vec2 uv=clamp(.5+direction*arc/2.05,.002,.998);
 vec3 fallback=mix(vec3(.025,.06,.08),vec3(.14,.23,.25),uv.y);
 return mix(fallback,texture2D(uCover,uv).rgb,uHasCover);
}`;
const surface = artwork + `
void main(){
 vec3 n=normalize(vNormal),l=normalize(vec3(-.4,.65,1.0));
 float diffuse=max(0.0,dot(n,l));float rim=pow(1.0-max(n.z,0.0),3.0);
 float spec=pow(max(0.0,dot(n,normalize(l+vec3(0,0,1)))),90.0);
 float grain=sin(vSurface.x*1100.0)*sin(vSurface.y*1100.0)*.006;
 vec3 c=art()*(.62+.42*diffuse+grain)+vec3(.8,.92,1.0)*spec*.16;
 c+=mix(art(),vec3(.52,.72,.78),.35)*rim*.18;
 gl_FragColor=vec4(c,1.0);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}`;
const atmosphere = artwork + `
void main(){float edge=pow(1.0-abs(normalize(vNormal).z),4.0);
 gl_FragColor=vec4(mix(art(),vec3(.52,.75,.8),.3),edge*.17);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}`;

export function createCoverSphere(ctx) {
  const T = ctx.THREE, group = root(ctx), globe = new T.Group(); group.add(globe);
  const resources = ctx.services.spatialResources || createSpatialResources(T), local = !ctx.services.spatialResources;
  const uniforms = { uCover: { value: null }, uHasCover: { value: 0 }, uTime: { value: 0 }, uBass: { value: 0 } };
  const geometry = own(ctx, new T.SphereGeometry(3.2, 96, 64));
  globe.add(new T.Mesh(geometry, own(ctx, new T.ShaderMaterial({ uniforms, vertexShader: vertex, fragmentShader: surface }))));
  const shell = new T.Mesh(own(ctx, new T.SphereGeometry(3.26, 48, 32)), own(ctx, new T.ShaderMaterial({
    uniforms, vertexShader: vertex, fragmentShader: atmosphere, side: T.BackSide, transparent: true, depthWrite: false
  }))); globe.add(shell);
  const count = 10000, positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const y = 1 - 2 * (i + .5) / count, r = Math.sqrt(1 - y * y), a = i * 2.39996323;
    positions.set([Math.cos(a) * r * 3.207, y * 3.207, Math.sin(a) * r * 3.207], i * 3);
  }
  const grains = own(ctx, new T.BufferGeometry()); grains.setAttribute('position', new T.BufferAttribute(positions, 3));
  const grainsMaterial = own(ctx, new T.PointsMaterial({ color: 0xe4f5f0, size: .012, transparent: true, opacity: .13, depthWrite: false }));
  globe.add(new T.Points(grains, grainsMaterial));
  let entry = null, key = '', profile = ctx.quality, params = ctx.params, disposed = false, aspect = 16 / 9;
  function density() { grains.setDrawRange(0, Math.floor(count * qualityDensity(profile) * (params.density ?? 1))); }
  function cleanup() { if (disposed) return; disposed = true; resources.cover.release(entry); if (local) resources.dispose(); }
  ctx.scope.defer(cleanup); density();
  return basicInstance(group, params, profile, {
    update(frame, p) {
      const source = ctx.services.coverUrl, url = (typeof source === 'function' ? source() : source) || frame.coverUrl || '';
      if (url !== key) { resources.cover.release(entry); key = url; entry = resources.cover.acquire(url, ctx.signal); }
      uniforms.uCover.value = entry?.texture || null; uniforms.uHasCover.value = entry?.texture ? 1 : 0;
      const time = (frame.sceneTime ?? frame.time ?? 0) * (p.speed ?? .6);
      uniforms.uTime.value = time; uniforms.uBass.value = level(frame, 'bass') * (p.reactivity ?? .7);
      globe.rotation.set(Math.sin(time * .16) * .035, Math.sin(time * .12) * .16, Math.sin(time * .09) * .025);
      const breath = 1 + Math.sin(time * .7) * .003 + level(frame, 'bass') * .012 * (p.reactivity ?? .7);
      // Keep the complete silhouette in portrait, including when the host uses a free camera.
      globe.scale.setScalar(breath * Math.min(1, aspect / .95)); group.scale.setScalar(p.scale ?? 1);
    },
    params(p) { params = p; density(); }, quality(q) { profile = q; density(); },
    resize(w, h) { aspect = w / Math.max(1, h); }, dispose: cleanup,
    stats: () => ({ covers: entry?.texture ? 1 : 0, particles: grains.drawRange.count, drawCalls: 3, triangles: 15168 })
  });
}
