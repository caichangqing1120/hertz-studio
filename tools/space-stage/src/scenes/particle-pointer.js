// SPDX-License-Identifier: MIT
// Resolve the shared frame pointer against the particle object's actual camera plane.
export function createParticlePointer(ctx, object, { surface = false, depth = 0, radius = 1.25 } = {}) {
  const T = ctx.THREE, ray = new T.Raycaster(), ndc = new T.Vector2(), plane = new T.Plane();
  const origin = new T.Vector3(), normal = new T.Vector3(), hit = new T.Vector3(), inverse = new T.Matrix4();
  const uniforms = {
    uPointer: { value: new T.Vector3() }, uPointerNormal: { value: new T.Vector3(0, 0, 1) },
    uPointerAmount: { value: 0 }, uPointerRadius: { value: radius }
  };
  let lastNow = null, following = false;
  return {
    uniforms,
    update(frame, strength = 1) {
      const now = Number.isFinite(frame.now) ? frame.now : 0;
      const dt = lastNow === null ? 1 / 60 : Math.max(0, Math.min(.05, (now - lastNow) / 1000));
      lastNow = now;
      if (frame.reduced) { uniforms.uPointerAmount.value = 0; following = false; return; }
      const pointer = frame.pointer;
      let active = false;
      if (pointer?.active && Number.isFinite(pointer.x) && Number.isFinite(pointer.y)) {
        object.updateWorldMatrix(true, false); ctx.camera.updateMatrixWorld();
        inverse.copy(object.matrixWorld).invert();
        if (surface) normal.set(0, 0, 1).transformDirection(object.matrixWorld);
        else ctx.camera.getWorldDirection(normal).negate();
        origin.set(0, 0, depth).applyMatrix4(object.matrixWorld);
        plane.setFromNormalAndCoplanarPoint(normal, origin);
        ndc.set(pointer.x, pointer.y); ray.setFromCamera(ndc, ctx.camera);
        if (Math.abs(ray.ray.direction.dot(normal)) > .15 && ray.ray.intersectPlane(plane, hit)) {
          hit.applyMatrix4(inverse);
          active = !surface || Math.abs(hit.x) < 4.5 && Math.abs(hit.y) < 4.5;
          if (active) {
            if (!following) uniforms.uPointer.value.copy(hit);
            else uniforms.uPointer.value.lerp(hit, 1 - Math.exp(-32 * dt));
            uniforms.uPointerNormal.value.copy(normal).transformDirection(inverse);
          }
        }
      }
      following = active;
      const target = active ? strength : 0;
      uniforms.uPointerAmount.value += (target - uniforms.uPointerAmount.value) * (1 - Math.exp(-14 * dt));
      if (Math.abs(target - uniforms.uPointerAmount.value) < .0002) uniforms.uPointerAmount.value = target;
    }
  };
}

export const particlePointerShader = `
uniform vec3 uPointer,uPointerNormal;
uniform float uPointerAmount,uPointerRadius;
vec3 indentParticle(vec3 p){
 vec3 delta=p-uPointer;
 float depth=dot(delta,uPointerNormal);
 vec3 tangent=delta-uPointerNormal*depth;
 float distance=length(tangent)/uPointerRadius;
 float bowl=exp(-distance*distance*3.5)*uPointerAmount*exp(-abs(depth)*.24);
 float shoulder=exp(-pow((distance-.95)*5.0,2.0))*uPointerAmount*.09;
 return p-uPointerNormal*(bowl*.9-shoulder)-tangent*bowl*.075;
}`;

export const particleNoiseShader = `
float particleHash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
float particleNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);
 return mix(mix(mix(particleHash(i),particleHash(i+vec3(1,0,0)),f.x),mix(particleHash(i+vec3(0,1,0)),particleHash(i+vec3(1,1,0)),f.x),f.y),
 mix(mix(particleHash(i+vec3(0,0,1)),particleHash(i+vec3(1,0,1)),f.x),mix(particleHash(i+vec3(0,1,1)),particleHash(i+vec3(1,1,1)),f.x),f.y),f.z)*2.0-1.0;}
`;
