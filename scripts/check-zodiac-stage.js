// SPDX-License-Identifier: MIT
// 「星座 · 十二星图」舞台的 Node 侧契约：产物存在且不超预算、暴露完整 API、
// 源码哈希与 .build-manifest.json 一致（改了 tools/zodiac-stage/src 忘了
// node build.mjs 就在这里红），宿主侧接线完整（脚本加载顺序、入口/画布/
// 设置项、sceneSource 接线、设置可用性派生），并钉住「镜台/隧图已删除」。
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
let passed = 0;
function pass(name) { passed += 1; console.log('PASS ' + name); }

// ---- 产物与体积 ----
const bundlePath = path.join(root, 'plugin/ui/vendor/zodiac-stage.js');
assert.ok(fs.existsSync(bundlePath), 'vendor/zodiac-stage.js 不存在：先跑 tools/zodiac-stage 的 node build.mjs');
const bundle = fs.readFileSync(bundlePath, 'utf8');
pass('vendor/zodiac-stage.js 存在');
assert.ok(bundle.length < 1.2 * 1024 * 1024, '产物超过 1.2MB 预算：当前 ' + (bundle.length / 1024).toFixed(1) + ' KB');
pass('产物体积 < 1.2MB（' + (bundle.length / 1024).toFixed(1) + ' KB）');
assert.match(bundle, /var ZodiacStagePure\s*=/, '产物必须是 IIFE 且挂 ZodiacStagePure 全局');
assert.ok(bundle.includes(' SPDX-License-Identifier: MIT'), '产物头必须带许可头与重建说明');
assert.ok(!/StageTunnel|TunnelStagePure|DioramaStagePure/.test(bundle),
  '星座产物里不许残留旧引擎全局名');
pass('产物为 ZodiacStagePure IIFE 且带头注释、无旧引擎痕迹');

// ---- 源码哈希与 manifest 一致（防"改源忘重建"） ----
const manifestPath = path.join(root, 'tools/zodiac-stage/.build-manifest.json');
assert.ok(fs.existsSync(manifestPath), '缺少 tools/zodiac-stage/.build-manifest.json：跑一次 node build.mjs');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const { createHash } = require('node:crypto');
const srcDir = path.join(root, 'tools/zodiac-stage/src');
const onDisk = fs.readdirSync(srcDir).sort();
assert.deepEqual(onDisk, Object.keys(manifest).map(k => k.replace('src/', '')).sort(),
  'src 文件集合与 manifest 不一致：需要重新 node build.mjs');
for (const name of onDisk) {
  const hash = createHash('sha256').update(fs.readFileSync(path.join(srcDir, name))).digest('hex').slice(0, 16);
  assert.equal(hash, manifest['src/' + name], 'src/' + name + ' 已改动但产物未重建：cd tools/zodiac-stage && node build.mjs');
}
pass('源码哈希与 .build-manifest.json 一致（产物为最新）');

// ---- API 面：在 Node 沙箱里真实执行产物，断言导出完整 ----
const vm = require('node:vm');
const sandbox = { window: {}, document: { createElement: () => ({ getContext: () => null }) }, Math, console };
sandbox.self = sandbox;
const api = vm.runInNewContext(bundle + ';ZodiacStagePure', sandbox, { timeout: 15000 });
for (const fn of ['probe', 'mount', 'unmount', 'setAudio', 'setTime', 'setPrefs', 'resize', 'stats', 'capture', 'debug']) {
  assert.equal(typeof api[fn], 'function', 'ZodiacStagePure 缺少 ' + fn);
}
assert.ok(api.pure && typeof api.pure.timelineAt === 'function', 'ZodiacStagePure.pure 缺少 timelineAt');
assert.ok(fs.existsSync(path.join(root, 'plugin/ui/stage-zodiac.js')), '缺少 stage-zodiac.js 适配层');
pass('ZodiacStagePure API 完整（含 pure 纯函数测试口）');

// ---- 数据与纯函数：十二宫元数据、造型采样、云团、时间线 ----
const { ZODIAC, SIGN_COUNT, GATHER_SECONDS, HOLD_SECONDS, DISPERSE_SECONDS, CYCLE_SECONDS,
  SHAPE_BOX, buildShape, buildCloud, buildSeeds, timelineAt } = api.pure;
assert.equal(ZODIAC.length, 12, '必须是 12 个星座');
assert.equal(SIGN_COUNT, 12);
const ids = new Set();
ZODIAC.forEach((sign) => {
  assert.ok(sign.id && sign.cn && sign.en, sign.id + ' 缺 id/中文名/英文名');
  assert.ok(!ids.has(sign.id), '星座 id 重复：' + sign.id);
  ids.add(sign.id);
});
pass('十二宫元数据齐全');

// 造型点云：数量严格等于配额、确定性、坐标在画框内、亮度在域内。
const COUNT = 3200;
const a = buildShape(0, COUNT);
const b = buildShape(0, COUNT);
assert.equal(a.pos.length, COUNT * 3, '点云坐标数 = count*3');
assert.equal(a.shine.length, COUNT, '亮度数 = count');
assert.ok(Buffer.from(a.pos.buffer).equals(Buffer.from(b.pos.buffer)), '同座同量必须确定性一致');
assert.ok(Buffer.from(a.shine.buffer).equals(Buffer.from(b.shine.buffer)), '亮度也必须确定');
let outOfBox = 0;
for (let i = 0; i < a.pos.length; i += 3) {
  if (Math.abs(a.pos[i]) > SHAPE_BOX || Math.abs(a.pos[i + 1]) > SHAPE_BOX
    || Math.abs(a.pos[i + 2]) > SHAPE_BOX) outOfBox += 1;
}
assert.equal(outOfBox, 0, '造型点不允许出画框');
assert.ok(a.shine.some(v => v >= 1), '每座至少有亮斑（主星级粒子）');
// 12 座都能采、互不相同（造型真有 12 种，不是同一个球）。
const sigs = new Set();
for (let i = 0; i < 12; i += 1) {
  const s = buildShape(i, COUNT);
  sigs.add(Buffer.from(s.pos.buffer).toString('base64').slice(0, 200));
}
assert.equal(sigs.size, 12, '12 座造型必须互不相同');
pass('造型点云：配额/确定性/画框/亮度/12 座互异');

// 入场云团：数量、确定性、与造型不重合（汇聚才有位移）。
const c1 = buildCloud('aries', COUNT);
const c2 = buildCloud('aries', COUNT);
assert.equal(c1.length, COUNT * 3);
assert.ok(Buffer.from(c1.buffer).equals(Buffer.from(c2.buffer)), '云团确定性一致');
assert.ok(!Buffer.from(c1.buffer).equals(Buffer.from(a.pos.buffer)), '云团不应等于造型位置');
const seeds = buildSeeds(COUNT);
assert.equal(seeds.length, COUNT);
assert.ok(seeds.every(v => v >= 0 && v <= 1), '粒子种子在 0..1');
pass('云团与种子：数量/确定性/与造型分离');

// 时间线：三段时长与循环、状态推进、取模换座。
assert.ok(Math.abs(CYCLE_SECONDS - (GATHER_SECONDS + HOLD_SECONDS + DISPERSE_SECONDS)) < 1e-9);
assert.equal(timelineAt(0).state, 'gather');
assert.equal(timelineAt(GATHER_SECONDS - 0.01).state, 'gather');
assert.equal(timelineAt(GATHER_SECONDS).state, 'hold');
assert.equal(timelineAt(GATHER_SECONDS + HOLD_SECONDS).state, 'disperse');
assert.equal(timelineAt(CYCLE_SECONDS - 0.01).state, 'disperse');
assert.equal(timelineAt(CYCLE_SECONDS).state, 'gather');
assert.equal(timelineAt(CYCLE_SECONDS).index, 1, '第二循环从第 2 座开始');
assert.equal(timelineAt(CYCLE_SECONDS * 12).index, 0, '12 座循环后回到第一座');
assert.equal(timelineAt(0).index, timelineAt(CYCLE_SECONDS * 12 + 1).index, '循环取模');
pass('汇聚/停留/散开时间线与 12 座循环正确');

// ---- 形象图与星座骨架：几何在 Node 侧就能验，不必开浏览器 ----
const { CONSTELLATION, buildFigureMesh, buildConstellation, buildRibbon, delaunay2,
  shapeFit, FIG_HALF, CONSTELLATION_Z, FIGURE_Z } = api.pure;
assert.equal(typeof buildFigureMesh, 'function', 'pure 缺少 buildFigureMesh');
assert.equal(typeof buildConstellation, 'function', 'pure 缺少 buildConstellation');
assert.equal(typeof buildRibbon, 'function', 'pure 缺少 buildRibbon');
assert.equal(typeof delaunay2, 'function', 'pure 缺少 delaunay2');
assert.equal(typeof shapeFit, 'function', 'pure 缺少 shapeFit');
assert.ok(Number.isFinite(FIG_HALF) && FIG_HALF > 1.5 && FIG_HALF < 3.2, 'FIG_HALF 应在合理区间');
assert.ok(FIGURE_Z < CONSTELLATION_Z, '形象图网格必须落在星座连线之后（深度次序）');
pass('形象图/骨架纯函数与深度常量齐备');

// 骨架数据：每座至少 6 个星点、5 条连线，索引合法、无自环、节点不重合。
assert.equal(CONSTELLATION.length, 12, '骨架必须是 12 座');
CONSTELLATION.forEach((c, i) => {
  assert.ok(c.nodes.length >= 6, ZODIAC[i].id + ' 骨架星点少于 6 个');
  assert.ok(c.lines.length >= 5, ZODIAC[i].id + ' 骨架连线少于 5 条');
  const seen = new Set();
  c.nodes.forEach((n) => {
    assert.equal(n.length, 3, ZODIAC[i].id + ' 节点必须是 [x, y, 亮度]');
    assert.ok(Number.isFinite(n[0]) && Number.isFinite(n[1]), ZODIAC[i].id + ' 节点坐标必须是有限数');
    assert.ok(n[2] > 0 && n[2] <= 1, ZODIAC[i].id + ' 节点亮度必须在 (0, 1]');
    seen.add(n[0].toFixed(3) + ',' + n[1].toFixed(3));
  });
  assert.equal(seen.size, c.nodes.length, ZODIAC[i].id + ' 骨架里有重合的星点');
  c.lines.forEach(([a, b]) => {
    assert.ok(a !== b, ZODIAC[i].id + ' 骨架连线不能自环');
    assert.ok(a >= 0 && a < c.nodes.length && b >= 0 && b < c.nodes.length,
      ZODIAC[i].id + ' 骨架连线索引越界');
  });
});
pass('十二宫骨架数据合法（星点数/连线数/索引/亮度/无重合）');

// 骨架与造型共用同一套归一化：都在画框内，两级丝带的顶点数严格对得上连线数。
for (let i = 0; i < 12; i += 1) {
  const c = buildConstellation(i);
  assert.equal(c.nodes, CONSTELLATION[i].nodes.length, ZODIAC[i].id + ' 骨架落地后星点数变了');
  assert.equal(c.segments, CONSTELLATION[i].lines.length, ZODIAC[i].id + ' 骨架落地后连线数变了');
  assert.equal(c.core.length, c.segments * 18, ZODIAC[i].id + ' 连线丝带（细芯）顶点数 = 连线数 × 18');
  assert.equal(c.halo.length, c.segments * 18, ZODIAC[i].id + ' 连线丝带（光晕）顶点数 = 连线数 × 18');
  for (let k = 0; k < c.nodes; k += 1) {
    assert.ok(Math.abs(c.x[k]) <= SHAPE_BOX && Math.abs(c.y[k]) <= SHAPE_BOX,
      ZODIAC[i].id + ' 骨架星点出画框');
    assert.ok(c.m[k] > 0 && c.m[k] <= 1, ZODIAC[i].id + ' 骨架星点亮度越界');
  }
  // 丝带的 z 必须落在连线的那个平面上（否则连线会穿进造型里）
  for (let v = 2; v < c.core.length; v += 3) {
    assert.ok(Math.abs(c.core[v] - CONSTELLATION_Z) < 1e-5,
      ZODIAC[i].id + ' 连线丝带不在连线平面上');
  }
}
pass('骨架与造型同坐标：不出画、亮度在域、丝带顶点数与深度正确');

// 低多边形形象图：表面点云 + 三角面片 + 去重网格边，确定、不出画。
for (let i = 0; i < 12; i += 1) {
  const n = 900;
  const a2 = buildFigureMesh(i, n);
  const b2 = buildFigureMesh(i, n);
  assert.equal(a2.cloud.length, n * 3, ZODIAC[i].id + ' 形象图柔光点数 = count × 3');
  assert.ok(a2.triangles >= 120, ZODIAC[i].id + ' 三角面片太少（' + a2.triangles + '）');
  assert.equal(a2.mesh.pos.length, a2.triangles * 9, ZODIAC[i].id + ' 面片顶点数 = 三角形数 × 9');
  assert.equal(a2.mesh.tint.length, a2.triangles * 9, ZODIAC[i].id + ' 面片明度数 = 三角形数 × 9');
  assert.ok(a2.segmentCount > a2.triangles, ZODIAC[i].id + ' 网格边应多于三角形（去重前）');
  assert.equal(a2.edges.length, a2.segmentCount * 6, ZODIAC[i].id + ' 网格边顶点数 = 边数 × 6');
  assert.ok(Buffer.from(a2.cloud.buffer).equals(Buffer.from(b2.cloud.buffer)),
    ZODIAC[i].id + ' 形象图柔光点云必须确定性');
  assert.ok(Buffer.from(a2.mesh.pos.buffer).equals(Buffer.from(b2.mesh.pos.buffer)),
    ZODIAC[i].id + ' 形象图面片必须确定性');
  for (let v = 0; v < a2.cloud.length; v += 3) {
    assert.ok(Math.abs(a2.cloud[v]) <= SHAPE_BOX && Math.abs(a2.cloud[v + 1]) <= SHAPE_BOX
      && Math.abs(a2.cloud[v + 2]) <= SHAPE_BOX, ZODIAC[i].id + ' 形象图柔光点出画框');
  }
  for (let v = 0; v < a2.mesh.pos.length; v += 3) {
    assert.ok(Math.abs(a2.mesh.pos[v]) <= SHAPE_BOX && Math.abs(a2.mesh.pos[v + 1]) <= SHAPE_BOX,
      ZODIAC[i].id + ' 形象图面片出画框');
  }
}
pass('低多边形形象图：柔光/面片/网格边数量正确、确定、不出画');

// 造型归一化：十二座体量一致且居中（最长边都顶到 ±FIG_HALF，中心贴原点）。
const fits = [];
for (let i = 0; i < 12; i += 1) {
  const s = buildShape(i, 2600);
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (let v = 0; v < s.pos.length; v += 3) {
    minX = Math.min(minX, s.pos[v]); maxX = Math.max(maxX, s.pos[v]);
    minY = Math.min(minY, s.pos[v + 1]); maxY = Math.max(maxY, s.pos[v + 1]);
  }
  const w = maxX - minX;
  const h = maxY - minY;
  const spread = Math.max(w, h) / (FIG_HALF * 2);
  // 上界留一点余量：fit 用固定 4200 点求包围盒，别的采样量极值会略微超出，
  // 差的那一点由 SHAPE_BOX 的裁剪兜住。
  assert.ok(spread > 0.88 && spread <= 1.15,
    ZODIAC[i].id + ' 归一化后最长边应顶到 ±FIG_HALF（实测 ' + spread.toFixed(3) + '）');
  assert.ok(Math.abs((minX + maxX) / 2) < 0.18 && Math.abs((minY + maxY) / 2) < 0.18,
    ZODIAC[i].id + ' 归一化后应居中（质心偏移过大）');
  fits.push(spread);
}
assert.ok(fits.every((v) => v > 0.88), '十二座体量必须一致：' + fits.map((v) => v.toFixed(2)).join(','));
pass('造型归一化：十二座体量一致（' + fits.map((v) => v.toFixed(2)).join('/') + '）且居中');

// Delaunay 与丝带的纯函数自检（不依赖浏览器）。
const sq = [[0, 0], [1, 0], [1, 1], [0, 1], [0.5, 0.5]].map(([x, y]) => ({ x, y }));
const sqTri = delaunay2(sq);
assert.equal(sqTri.length, 4, '正方形 + 中心点必须切出 4 个三角形，实测 ' + sqTri.length);
sqTri.forEach((t) => {
  assert.equal(t.length, 3, '三角形必须是三个索引');
  t.forEach((idx) => assert.ok(idx >= 0 && idx < sq.length, '三角形索引必须指向输入点'));
});
// 注意：返回值来自 vm 沙箱（另一个 realm），deepStrictEqual 会因原型不同而假红，
// 一律用长度/数值比较。
assert.equal(delaunay2([{ x: 0, y: 0 }, { x: 1, y: 1 }]).length, 0, '少于 3 个点不应产生三角形');
const rb = buildRibbon(new Float32Array([0, 0, 1, 1]), new Float32Array([0, 0, 1, 1]),
  [[0, 1], [1, 0]], 0.1);
assert.equal(rb.length, 2 * 18, '丝带顶点数 = 连线数 × 6 顶点 × 3 分量');
pass('Delaunay 与丝带纯函数自检通过');

// 归一化参数按座缓存：同一座反复取必须拿到同一个对象（否则每次重建又慢又漂）。
assert.equal(shapeFit(3), shapeFit(3), 'shapeFit 必须按座缓存');
assert.ok(shapeFit(3).k > 0 && Number.isFinite(shapeFit(3).w), 'shapeFit 必须给出缩放与半宽');
pass('shapeFit 按座缓存且参数有效');


const index = fs.readFileSync(path.join(root, 'plugin/ui/index.html'), 'utf8');
assert.ok(index.indexOf('vendor/zodiac-stage.js') < index.indexOf('stage-zodiac.js'),
  'vendor 必须先于 stage-zodiac.js 加载');
assert.ok(index.indexOf('stage-zodiac.js') < index.indexOf('src="stage3d.js"'),
  'stage-zodiac.js 必须先于 stage3d.js 加载');
assert.ok(!index.includes('id="s3d-zodiac-toggle"'),
  '舞台效果不进头部那一排：星座只从「舞台来源」进');
assert.ok(index.includes('id="i-zodiac"'), '缺少星座图标');
assert.ok(index.includes('<option value="zodiac">星座</option>'), '舞台来源下拉缺少星座');
assert.ok(index.includes('id="s3d-zodiac-field"')
  && index.includes('id="s3d-zodiac-interact"'),
  '缺少星座星云/交互设置项');
assert.ok(!index.includes('s3d-zodiac-lines'), '旧的连线设置项必须移除');
pass('index.html：脚本顺序、飞出组、来源下拉、设置项齐全');

const stage3d = fs.readFileSync(path.join(root, 'plugin/ui/stage3d.js'), 'utf8');
assert.ok(stage3d.includes("'zodiac'"), 'stage3d.js 未接入 sceneSource zodiac');
assert.ok(stage3d.includes('syncZodiacStage'), 'stage3d.js 缺少 syncZodiacStage');
assert.ok(stage3d.includes('StageZodiac.setHost'), 'stage3d.js 未接 StageZodiac.setHost');
assert.ok(stage3d.includes('zodiacField') && stage3d.includes('zodiacInteract'),
  'stage3d.js 缺少星座偏好持久化');
assert.ok(!/zodiacLines/.test(stage3d), '旧的「星座连线」偏好必须移除');
assert.ok(stage3d.includes("value.sceneSource === 'tunnel'") && stage3d.includes("'zodiac'"),
  '旧偏好 sceneSource=tunnel 必须迁移到 zodiac');
pass('stage3d.js：sceneSource/宿主/偏好/旧值迁移接线齐全');

const settings = fs.readFileSync(path.join(root, 'plugin/ui/stage-settings.js'), 'utf8');
assert.ok(settings.includes("state.source === 'zodiac'"), 'stage-settings.js 未派生星座可用性');
assert.ok(settings.includes("row('s3d-zodiac-field'")
  && settings.includes("row('s3d-zodiac-interact'"),
  'stage-settings.js 缺少星座设置行');
pass('stage-settings.js：星座可用性派生齐全');

const assets = fs.readFileSync(path.join(root, 'crates/hertz-studio/src/assets.rs'), 'utf8');
assert.ok(assets.includes('"/vendor/zodiac-stage.js"') && assets.includes('"/stage-zodiac.js"'),
  'assets.rs 未登记星座内嵌资产（路由由清单派生，漏登记即 404）');
pass('assets.rs：星座资产已登记');

// ---- 负面不变量：镜台/隧图已彻底移除（2D「纸雕剧场」预设同名 diorama，不在此列） ----
assert.ok(!fs.existsSync(path.join(root, 'plugin/ui/stage-diorama.js')), 'stage-diorama.js 必须删除');
assert.ok(!fs.existsSync(path.join(root, 'plugin/ui/vendor/diorama-stage.js')), 'vendor/diorama-stage.js 必须删除');
assert.ok(!fs.existsSync(path.join(root, 'plugin/ui/stage-tunnel.js')), 'stage-tunnel.js 必须删除');
assert.ok(!fs.existsSync(path.join(root, 'plugin/ui/vendor/tunnel-stage.js')), 'vendor/tunnel-stage.js 必须删除');
assert.ok(!fs.existsSync(path.join(root, 'tools/diorama-stage')), 'tools/diorama-stage 必须删除');
assert.ok(!fs.existsSync(path.join(root, 'tools/tunnel-stage')), 'tools/tunnel-stage 必须删除');
assert.ok(!index.includes('s3d-diorama') && !index.includes('s3d-tunnel'),
  'index.html 不许残留镜台/隧图节点 id');
assert.ok(!index.includes('value="diorama"') && !index.includes('value="tunnel"'),
  'index.html 舞台来源下拉不许残留镜台/隧图选项');
assert.ok(!assets.includes('diorama-stage') && !assets.includes('tunnel-stage'),
  'assets.rs 不许残留旧舞台资产');
assert.ok(!/StageDiorama|StageTunnel|syncDioramaStage|syncTunnelStage/.test(stage3d),
  'stage3d.js 不许残留旧舞台调用');
assert.ok(!fs.existsSync(path.join(root, 'scripts/check-diorama-stage.js'))
  && !fs.existsSync(path.join(root, 'scripts/check-tunnel-stage.js')),
  '旧舞台的 Node 契约脚本必须删除');
pass('镜台 · 末班车 / 隧图 · 深空 代码与资源引用已彻底移除');

console.log('\ncheck-zodiac-stage: ' + passed + ' checks passed');
