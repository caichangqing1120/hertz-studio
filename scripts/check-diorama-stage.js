// SPDX-License-Identifier: MIT
// 「镜台 · 末班车」舞台的 Node 侧契约：产物存在且不超预算、暴露完整 API、
// 源码哈希与 .build-manifest.json 一致（改了 tools/diorama-stage/src 忘了
// node build.mjs 就在这里红）、时间线纯函数确定性、宿主侧接线完整
// （脚本加载顺序、入口牌/画布/设置项、sceneSource/ownsLyrics 接线、
// 设置可用性派生、内嵌资产登记）。
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
let passed = 0;
function pass(name) { passed += 1; console.log('PASS ' + name); }

// ---- 产物与体积 ----
const bundlePath = path.join(root, 'plugin/ui/vendor/diorama-stage.js');
assert.ok(fs.existsSync(bundlePath), 'vendor/diorama-stage.js 不存在：先跑 tools/diorama-stage 的 node build.mjs');
const bundle = fs.readFileSync(bundlePath, 'utf8');
pass('vendor/diorama-stage.js 存在');
assert.ok(bundle.length < 1.2 * 1024 * 1024, '产物超过 1.2MB 预算：当前 ' + (bundle.length / 1024).toFixed(1) + ' KB');
pass('产物体积 < 1.2MB（' + (bundle.length / 1024).toFixed(1) + ' KB）');
assert.match(bundle, /var DioramaStagePure\s*=/, '产物必须是 IIFE 且挂 DioramaStagePure 全局');
assert.ok(bundle.includes(' SPDX-License-Identifier: MIT'), '产物头必须带许可头与重建说明');
// 产物头允许保留「行为规格参照 VCPChat」的来源声明（NOTICE 同款），但参照项目的
// 代码标识符（模块名/全局名）一处都不许出现 —— 那意味着源文件被拷了进来。
assert.ok(bundle.slice(0, 800).includes('VCPChat'), '产物头缺少来源声明');
assert.ok(!/MusicStageDiorama|MusicStage[A-Z]|diorama-manager|music-stage\/modes/.test(bundle),
  '产物不得包含参照项目的代码标识符');
pass('产物为 DioramaStagePure IIFE 且带头注释（仅署名、无参照源码痕迹）');

// ---- 源码哈希与 manifest 一致（防"改源忘重建"） ----
const manifestPath = path.join(root, 'tools/diorama-stage/.build-manifest.json');
assert.ok(fs.existsSync(manifestPath), '缺少 tools/diorama-stage/.build-manifest.json：跑一次 node build.mjs');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const { createHash } = require('node:crypto');
const srcDir = path.join(root, 'tools/diorama-stage/src');
const onDisk = fs.readdirSync(srcDir).sort();
assert.deepEqual(onDisk, Object.keys(manifest).map(k => k.replace('src/', '')).sort(),
  'src 文件集合与 manifest 不一致：需要重新 node build.mjs');
for (const name of onDisk) {
  const hash = createHash('sha256').update(fs.readFileSync(path.join(srcDir, name))).digest('hex').slice(0, 16);
  assert.equal(hash, manifest['src/' + name], 'src/' + name + ' 已改动但产物未重建：cd tools/diorama-stage && node build.mjs');
}
pass('源码哈希与 .build-manifest.json 一致（产物为最新）');

// ---- API 面：在 Node 沙箱里真实执行产物，断言导出完整 ----
const vm = require('node:vm');
const sandbox = { window: {}, document: { createElement: () => ({ getContext: () => null }) }, Math, console };
sandbox.self = sandbox;
const api = vm.runInNewContext(bundle + ';DioramaStagePure', sandbox, { timeout: 15000 });
for (const fn of ['probe', 'mount', 'unmount', 'resize', 'setTime', 'setAudio', 'setLyrics', 'setPrefs', 'stats', 'debug', 'capture']) {
  assert.equal(typeof api[fn], 'function', 'DioramaStagePure 缺少 ' + fn);
}
for (const fn of ['compileTimeline', 'distanceAt', 'poseAt', 'readingWeight', 'aggregateBands']) {
  assert.equal(typeof api.pure[fn], 'function', 'DioramaStagePure.pure 缺少 ' + fn);
}
assert.ok(fs.existsSync(path.join(root, 'plugin/ui/stage-diorama.js')), '缺少 stage-diorama.js 适配层');
pass('DioramaStagePure API 完整（含 pure 纯函数测试口）');

// ---- 时间线纯函数：确定性、seek 不变量、机位有限性 ----
const { compileTimeline, distanceAt, poseAt, aggregateBands } = api.pure;

const fakePayload = {
  v: 1,
  signature: 'contract',
  lines: [],
  paragraphs: [
    { startLine: 0, endLine: 2, kind: 'verse' },
    { startLine: 3, endLine: 5, kind: 'chorus' },
    { startLine: 6, endLine: 8, kind: 'verse' },
  ],
};
const mkGlyphs = (text, start, end) => {
  const chars = Array.from(text);
  const dur = (end - start) / chars.length;
  return chars.map((ch, i) => ({ text: ch, start: start + i * dur, end: start + (i + 1) * dur }));
};
let t0 = 2;
for (let i = 0; i < 9; i += 1) {
  const text = i < 3 ? '夜行的列车不再停靠' : i < 6 ? '星空在水面上涨潮' : '夜行的列车不再停靠';
  const start = t0;
  const end = t0 + 3.4;
  fakePayload.lines.push({ start, end, text, translation: i === 1 ? 'the night train rolls on' : '',
    glyphs: mkGlyphs(text, start, end) });
  t0 = end + 0.9 + (i % 3) * 0.6;
}
const tl = compileTimeline(fakePayload);
assert.equal(tl.valid, true, '合法载荷必须编译成功');
assert.equal(tl.phrases.length, 9, '九行各成一句');
assert.ok(tl.paragraphs.some(p => p.kind === 'chorus'), '曲式段落必须透传');
const skyPhrases = tl.phrases.filter(p => p.carrier === 'constellation');
const signPhrases = tl.phrases.filter(p => p.carrier === 'sign');
assert.ok(skyPhrases.length === 3 && signPhrases.length === 6,
  '副歌段落升星幕、其余立站牌：sky=' + skyPhrases.length + ' sign=' + signPhrases.length);
// 共牌受「一次经过的可读视距」预算约束：普通句长（3.4s > 预算 3.0s）一牌一句，
// 真快句（总跨度塞得进一次经过）才共牌成页。
assert.equal(tl.signs.length, 6, '普通句长必须一牌一句：signs=' + tl.signs.length);
const quickPayload = {
  v: 1, signature: 'quick', lines: [], paragraphs: [{ startLine: 0, endLine: 3, kind: 'verse' }],
};
{
  let t = 2;
  for (const text of ['快', '句', '连', '唱']) {
    const start = t, end = t + 1.2;
    quickPayload.lines.push({ start, end, text, glyphs: mkGlyphs(text, start, end) });
    t = end + 0.4;
  }
}
const quickTl = compileTimeline(quickPayload);
assert.equal(quickTl.signs.length, 2, '快句按可读视距预算两两共牌：signs=' + quickTl.signs.length);
assert.deepEqual(Array.from(quickTl.signs, s => s.phrases.length), [2, 2], '每牌两页（总跨度都塞得进一次经过）');
pass('时间线编制：共牌受可读视距预算约束、曲式载体分派正确');

// 载体强制覆盖曲式
const forced = compileTimeline({ ...fakePayload, forceCarrier: 'sign' });
assert.equal(forced.phrases.filter(p => p.carrier === 'sign').length, 9, 'forceCarrier=sign 时全部立牌');
pass('载体偏好强制覆盖曲式分派');

// seek 不变量：同一 t 的距离与机位与「怎么到达 t」无关
const opts = { speed: 1, motion: 1 };
const dA = distanceAt(tl, 12.34, opts);
const dB = distanceAt(tl, 12.34, opts);
assert.equal(dA, dB, '同 t 同距离（纯函数）');
assert.ok(distanceAt(tl, 12.4, opts) >= dA, '距离场单调不减');
const pose = poseAt(tl, 12.34, opts, null);
const poseAgain = poseAt(tl, 12.34, opts, null);
assert.deepEqual(pose, poseAgain, '同 t 同机位');
for (const v of [pose.position.x, pose.position.y, pose.position.z, pose.look.x, pose.look.y, pose.look.z, pose.roll, pose.fov]) {
  assert.ok(Number.isFinite(v), '机位数值必须有限');
}
assert.ok(Math.abs(pose.roll) < 0.12, '行驶相机不许出现无人机式滚转');
const poseSeek = poseAt(tl, 12.34 + 30, opts, null); // 直接 seek 到 30s 后
assert.ok(poseSeek.position.z < pose.position.z, '时间前进 = 沿轨向前进');
pass('相机确定性：seek 不变量、数值有限、滚转收敛');

// 空载荷与坏载荷必须安全退化
assert.equal(compileTimeline(null).valid, false);
assert.equal(compileTimeline({ v: 2, lines: [] }).valid, false);
assert.equal(compileTimeline({ v: 1, lines: [{ start: 1, end: 2, text: '', glyphs: [] }] }).phrases.length, 0);
pass('坏载荷安全退化（valid=false / 空编制）');

// 对数频带聚合：全零进全零出，能量进能量出
const zeros = aggregateBands(new Float32Array(64), 24);
assert.equal(zeros.length, 24);
assert.ok(zeros.every(v => v === 0), '全零频谱聚合后必须全零');
const loud = aggregateBands(new Array(64).fill(0.9), 24);
assert.ok(loud.every(v => v > 0.5), '高电平频谱聚合后应普遍偏高');
pass('频带聚合：静噪底与动态压缩行为正确');

// ---- 宿主接线 ----
const index = fs.readFileSync(path.join(root, 'plugin/ui/index.html'), 'utf8');
assert.ok(index.indexOf('vendor/diorama-stage.js') < index.indexOf('stage-diorama.js'),
  'vendor 必须先于 stage-diorama.js 加载');
assert.ok(index.indexOf('stage-diorama.js') < index.indexOf('src="stage3d.js"'),
  'stage-diorama.js 必须先于 stage3d.js 加载');
assert.ok(index.includes('id="s3d-diorama-toggle"'), '缺少「镜台」飞出牌');
assert.ok(index.includes('id="i-diorama"'), '缺少镜台图标');
assert.ok(index.includes('<option value="diorama">'), '舞台来源下拉缺少镜台');
assert.ok(index.includes('id="s3d-diorama-carrier"') && index.includes('id="s3d-diorama-reflection"'),
  '缺少歌词载体/水面反射设置项');
pass('index.html：脚本顺序、飞出牌、下拉项、设置项齐全');

const stage3d = fs.readFileSync(path.join(root, 'plugin/ui/stage3d.js'), 'utf8');
assert.ok(stage3d.includes("'diorama'"), 'stage3d.js 未接入 sceneSource diorama');
assert.ok(stage3d.includes('syncDioramaStage'), 'stage3d.js 缺少 syncDioramaStage');
assert.ok(stage3d.includes('StageDiorama.setHost'), 'stage3d.js 未接 StageDiorama.setHost');
assert.ok(stage3d.includes('dioramaCarrier') && stage3d.includes('dioramaReflection'),
  'stage3d.js 缺少镜台偏好持久化');
assert.ok(stage3d.includes('dioramaOwnsLyrics'), 'stage3d.js 缺少在场歌词接管判定');
pass('stage3d.js：sceneSource/宿主/偏好/ownsLyrics 接线齐全');

const settings = fs.readFileSync(path.join(root, 'plugin/ui/stage-settings.js'), 'utf8');
assert.ok(settings.includes("state.source === 'diorama'"), 'stage-settings.js 未派生镜台可用性');
assert.ok(settings.includes("row('s3d-diorama-carrier'") && settings.includes("row('s3d-diorama-reflection'"),
  'stage-settings.js 缺少镜台设置行');
pass('stage-settings.js：镜台可用性派生齐全');

const assets = fs.readFileSync(path.join(root, 'crates/hertz-studio/src/assets.rs'), 'utf8');
assert.ok(assets.includes('"/vendor/diorama-stage.js"') && assets.includes('"/stage-diorama.js"'),
  'assets.rs 未登记镜台内嵌资产（路由由清单派生，漏登记即 404）');
pass('assets.rs：内嵌资产双登记齐全');

console.log('\ncheck-diorama-stage: ' + passed + ' checks passed');
