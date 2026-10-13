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
assert.ok(api.pure && typeof api.pure.ringTransform === 'function', 'ZodiacStagePure.pure 缺少 ringTransform');
assert.ok(fs.existsSync(path.join(root, 'plugin/ui/stage-zodiac.js')), '缺少 stage-zodiac.js 适配层');
pass('ZodiacStagePure API 完整（含 pure 纯函数测试口）');

// ---- 星图数据：十二宫齐全、链接下标合法、纯几何确定 ----
const { ZODIAC, ringTransform, viewBass, zoomClamp } = api.pure;
assert.equal(ZODIAC.length, 12, '必须是 12 个星座');
const ids = new Set();
ZODIAC.forEach((sign) => {
  assert.ok(sign.id && sign.cn && sign.en, sign.id + ' 缺 id/中文名/英文名');
  assert.ok(!ids.has(sign.id), '星座 id 重复：' + sign.id);
  ids.add(sign.id);
  assert.ok(sign.stars.length >= 4, sign.cn + ' 至少 4 颗主星');
  assert.ok(sign.links.length >= 3, sign.cn + ' 至少 3 条连线');
  sign.links.forEach(([a, b]) => {
    assert.ok(a < sign.stars.length && b < sign.stars.length, sign.cn + ' 连线越界');
  });
});
assert.equal(ringTransform(0, 12, 24).angle, 0);
assert.ok(Math.abs(ringTransform(3, 12, 24).angle - Math.PI / 2) < 1e-9, '第三座应在 90°');
const p = ringTransform(3, 12, 24);
assert.ok(Math.abs(p.x - 24) < 1e-9 && Math.abs(p.z) < 1e-9, '第三座应在 +x 端');
const p6 = ringTransform(6, 12, 24);
assert.ok(Math.abs(p6.x) < 1e-9 && Math.abs(p6.z + 24) < 1e-9, '第六座应在 -z 端');
assert.equal(viewBass([0, 0, 0, 0, 0]), 0);
assert.equal(viewBass([1, 1, 1, 1, 1]), 1);
assert.equal(zoomClamp(100, 3, 17), 17);
assert.equal(zoomClamp(1, 3, 17), 3);
pass('十二宫星图数据与纯几何（环位/低频/缩放钳制）正确');

// ---- 宿主接线 ----
const index = fs.readFileSync(path.join(root, 'plugin/ui/index.html'), 'utf8');
assert.ok(index.indexOf('vendor/zodiac-stage.js') < index.indexOf('stage-zodiac.js'),
  'vendor 必须先于 stage-zodiac.js 加载');
assert.ok(index.indexOf('stage-zodiac.js') < index.indexOf('src="stage3d.js"'),
  'stage-zodiac.js 必须先于 stage3d.js 加载');
assert.ok(!index.includes('id="s3d-zodiac-toggle"'),
  '舞台效果不进头部那一排：星座只从「舞台来源」进');
assert.ok(index.includes('id="i-zodiac"'), '缺少星座图标');
assert.ok(index.includes('<option value="zodiac">星座</option>'), '舞台来源下拉缺少星座');
assert.ok(index.includes('id="s3d-zodiac-lines"') && index.includes('id="s3d-zodiac-field"')
  && index.includes('id="s3d-zodiac-interact"'),
  '缺少星座连线/背景星场/交互设置项');
pass('index.html：脚本顺序、飞出组、来源下拉、设置项齐全');

const stage3d = fs.readFileSync(path.join(root, 'plugin/ui/stage3d.js'), 'utf8');
assert.ok(stage3d.includes("'zodiac'"), 'stage3d.js 未接入 sceneSource zodiac');
assert.ok(stage3d.includes('syncZodiacStage'), 'stage3d.js 缺少 syncZodiacStage');
assert.ok(stage3d.includes('StageZodiac.setHost'), 'stage3d.js 未接 StageZodiac.setHost');
assert.ok(stage3d.includes('zodiacLines') && stage3d.includes('zodiacField')
  && stage3d.includes('zodiacInteract'), 'stage3d.js 缺少星座偏好持久化');
assert.ok(stage3d.includes("value.sceneSource === 'tunnel'") && stage3d.includes("'zodiac'"),
  '旧偏好 sceneSource=tunnel 必须迁移到 zodiac');
pass('stage3d.js：sceneSource/宿主/偏好/旧值迁移接线齐全');

const settings = fs.readFileSync(path.join(root, 'plugin/ui/stage-settings.js'), 'utf8');
assert.ok(settings.includes("state.source === 'zodiac'"), 'stage-settings.js 未派生星座可用性');
assert.ok(settings.includes("row('s3d-zodiac-lines'") && settings.includes("row('s3d-zodiac-field'")
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
