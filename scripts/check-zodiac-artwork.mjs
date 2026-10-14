// SPDX-License-Identifier: MIT
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';

assert.ok(existsSync(new URL('../tools/zodiac-stage/src/figures.js', import.meta.url)),
  'Reference artwork needs explicit silhouettes instead of ellipsoid/tube assemblies');
const { FIGURES } = await import('../tools/zodiac-stage/src/figures.js');
const { buildFigureMesh, buildShape, shapeFit, buildConstellation, FIGURE_MESH_POINTS } =
  await import('../tools/zodiac-stage/src/zodiac.js');
const area = ring => Math.abs(ring.reduce((s, p, i) => {
  const q = ring[(i + 1) % ring.length];
  return s + p[0] * q[1] - q[0] * p[1];
}, 0)) / 2;
function inside(p, ring) {
  let hit = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const a = ring[i], b = ring[j];
    const cross = (p[0] - a[0]) * (b[1] - a[1]) - (p[1] - a[1]) * (b[0] - a[0]);
    if (Math.abs(cross) < 1e-3 && p[0] >= Math.min(a[0], b[0]) - 1e-4
      && p[0] <= Math.max(a[0], b[0]) + 1e-4 && p[1] >= Math.min(a[1], b[1]) - 1e-4
      && p[1] <= Math.max(a[1], b[1]) + 1e-4) return true;
    if ((a[1] > p[1]) !== (b[1] > p[1])
      && p[0] < (b[0] - a[0]) * (p[1] - a[1]) / (b[1] - a[1]) + a[0]) hit = !hit;
  }
  return hit;
}
assert.equal(FIGURES.length, 12);
for (let i = 0; i < FIGURES.length; i++) {
  const fig = FIGURES[i], fit = shapeFit(i), mesh = buildFigureMesh(i, 900);
  const raw = (x, y) => [x / fit.k + fit.cx, y / fit.k + fit.cy];
  const contains = p => fig.regions.some(r => inside(p, r.outline)
    && !(r.holes || []).some(h => inside(p, h)));
  const expected = fig.regions.reduce((s, r) => s + area(r.outline)
    - (r.holes || []).reduce((a, h) => a + area(h), 0), 0) * fit.k ** 2;
  let measured = 0;
  for (let t = 0; t < mesh.frontTriangles * 9; t += 9) {
    const v = [0, 3, 6].map(k => [mesh.mesh.pos[t + k], mesh.mesh.pos[t + k + 1]]);
    measured += area(v);
    // Edge midpoints catch bridges across narrow negative spaces as well as missing faces.
    for (const [a, b, c] of [[1/3,1/3,1/3], [.5,.5,0], [0,.5,.5], [.5,0,.5]]) {
      assert.ok(contains(raw(v[0][0]*a + v[1][0]*b + v[2][0]*c,
        v[0][1]*a + v[1][1]*b + v[2][1]*c)), fig.id + ': triangle crosses silhouette gap');
    }
  }
  assert.ok(Math.abs(measured / expected - 1) < 1e-5, fig.id + ': mesh must cover entire silhouette');
  assert.equal(mesh.nodes.length, FIGURE_MESH_POINTS * 3);
  for (const points of [buildShape(i, 2600).pos, mesh.cloud]) {
    for (let k = 0; k < points.length; k += 3) {
      assert.ok(contains(raw(points[k], points[k + 1])), fig.id + ': particle escaped silhouette');
    }
  }
  const stars = buildConstellation(i);
  fig.nodes.forEach(([x, y], k) => {
    assert.ok(Math.abs(stars.x[k] - (x - fit.cx) * fit.k) < 1e-5
      && Math.abs(stars.y[k] - (y - fit.cy) * fit.k) < 1e-5, fig.id + ': star drifted from artwork');
  });
  console.log('PASS ' + fig.id + ': full contour coverage, negative spaces, particles and stars');
}
