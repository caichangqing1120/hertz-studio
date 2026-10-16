// SPDX-License-Identifier: MIT
import assert from 'node:assert/strict';
import * as geometry from '../tools/zodiac-stage/src/zodiac.js';
for (let i = 0; i < 12; i++) {
  const mesh = geometry.buildFigureMesh(i, 500);
  const depths = Array.from(mesh.mesh.pos).filter((_, k) => k % 3 === 2);
  assert.ok(Math.max(...depths) - Math.min(...depths) > .65,
    geometry.ZODIAC[i].id + ': figure must have a front surface and real thickness');
  assert.ok(mesh.frontTriangles > 0 && mesh.triangles > mesh.frontTriangles * 2,
    'Volume must include a back and side walls');
  const stars = geometry.buildConstellation(i);
  assert.equal(stars.z.length, stars.nodes);
  for (let k = 0; k < stars.nodes; k++) {
    assert.ok(stars.z[k] >= geometry.FIGURE_Z, 'Stars sit on the front surface');
  }
}
assert.equal(typeof geometry.transitionStyle, 'function');
const styles = Array.from({length:24}, (_, i) => geometry.transitionStyle(i));
assert.ok(new Set(styles.map(s => s.gather)).size >= 4);
assert.ok(new Set(styles.map(s => s.disperse)).size >= 4);
assert.notDeepEqual(geometry.transitionStyle(0), geometry.transitionStyle(12),
  'The same sign should return with a different transition on the next zodiac cycle');
assert.deepEqual(geometry.transitionStyle(17), geometry.transitionStyle(17), 'Seek must remain deterministic');
console.log('PASS twelve closed volumes, surface stars and varied deterministic transitions');
