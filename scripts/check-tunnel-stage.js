// SPDX-License-Identifier: MIT
// 「隧图 · 深空」舞台的 Node 侧契约：产物存在且不超预算、暴露完整 API、
// 源码哈希与 .build-manifest.json 一致（改了 tools/tunnel-stage/src 忘了
// node build.mjs 就在这里红）、行驶距离/路由/行窗口纯函数确定性、宿主侧
// 接线完整（脚本加载顺序、飞出牌/图标/下拉项/设置项、sceneSource 接线、
// 设置可用性派生、内嵌资产登记、NOTICE 渊源声明）。
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
let passed = 0;
function pass(name) { passed += 1; console.log('PASS ' + name); }

// ---- 产物与体积 ----
const bundlePath = path.join(root, 'plugin/ui/vendor/tunnel-stage.js');
assert.ok(fs.existsSync(bundlePath), 'vendor/tunnel-stage.js 不存在：先跑 tools/tunnel-stage 的 node build.mjs');
const bundle = fs.readFileSync(bundlePath, 'utf8');
pass('vendor/tunnel-stage.js 存在');
assert.ok(bundle.length < 1.2 * 1024 * 1024, '产物超过 1.2MB 预算：当前 ' + (bundle.length / 1024).toFixed(1) + ' KB');
pass('产物体积 < 1.2MB（' + (bundle.length / 1024).toFixed(1) + ' KB）');
assert.match(bundle, /var TunnelStagePure\s*=/, '产物必须是 IIFE 且挂 TunnelStagePure 全局');
assert.ok(bundle.includes(' SPDX-License-Identifier: MIT'), '产物头必须带许可头与重建说明');
// 产物头允许保留「行为规格参照 VCPChat」的来源声明（NOTICE 同款），但参照项目的
// 代码标识符（模块名/全局名）一处都不许出现 —— 那意味着源文件被拷了进来。
assert.ok(bundle.slice(0, 800).includes('VCPChat'), '产物头缺少来源声明');
assert.ok(!/MusicStageTunnel|MusicStage[A-Z]|tunnel-manager|music-stage\/modes/.test(bundle),
  '产物不得包含参照项目的代码标识符');
pass('产物为 TunnelStagePure IIFE 且带头注释（仅署名、无参照源码痕迹）');

// ---- 源码哈希与 manifest 一致（防"改源忘重建"） ----
const manifestPath = path.join(root, 'tools/tunnel-stage/.build-manifest.json');
assert.ok(fs.existsSync(manifestPath), '缺少 tools/tunnel-stage/.build-manifest.json：跑一次 node build.mjs');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const { createHash } = require('node:crypto');
const srcDir = path.join(root, 'tools/tunnel-stage/src');
const onDisk = fs.readdirSync(srcDir).sort();
assert.deepEqual(onDisk, Object.keys(manifest).map(k => k.replace('src/', '')).sort(),
  'src 文件集合与 manifest 不一致：需要重新 node build.mjs');
for (const name of onDisk) {
  const hash = createHash('sha256').update(fs.readFileSync(path.join(srcDir, name))).digest('hex').slice(0, 16);
  assert.equal(hash, manifest['src/' + name], 'src/' + name + ' 已改动但产物未重建：cd tools/tunnel-stage && node build.mjs');
}
pass('源码哈希与 .build-manifest.json 一致（产物为最新）');

// ---- API 面：在 Node 沙箱里真实执行产物，断言导出完整 ----
const vm = require('node:vm');
const sandbox = { window: {}, document: { createElement: () => ({ getContext: () => null }) }, Math, console };
sandbox.self = sandbox;
const api = vm.runInNewContext(bundle + ';TunnelStagePure', sandbox, { timeout: 15000 });
for (const fn of ['probe', 'mount', 'unmount', 'resize', 'setTime', 'setAudio', 'setLyrics', 'setPrefs', 'stats', 'debug', 'capture']) {
  assert.equal(typeof api[fn], 'function', 'TunnelStagePure 缺少 ' + fn);
}
for (const fn of ['deterministicTravel', 'routeCenter', 'wakeRoute', 'speedModulator', 'lineWindowAt', 'aggregateBands']) {
  assert.equal(typeof api.pure[fn], 'function', 'TunnelStagePure.pure 缺少 ' + fn);
}
assert.ok(fs.existsSync(path.join(root, 'plugin/ui/stage-tunnel.js')), '缺少 stage-tunnel.js 适配层');
pass('TunnelStagePure API 完整（含 pure 纯函数测试口）');

// ---- 行驶距离：确定性、单调性、seek 不变量 ----
const { deterministicTravel, routeCenter, wakeRoute, speedModulator, lineWindowAt, aggregateBands } = api.pure;
const lines = [];
{
  let t = 2;
  for (let i = 0; i < 6; i += 1) {
    const text = i % 2 ? '星河在隧道的尽头拐弯' : '点阵凝成遥远的行星';
    const start = t;
    const end = t + 3.2;
    const chars = Array.from(text);
    const dur = (end - start) / chars.length;
    lines.push({
      start, end, text,
      translation: i === 1 ? 'the river of stars bends' : '',
      glyphs: chars.map((ch, k) => ({ text: ch, start: start + k * dur, end: start + (k + 1) * dur })),
    });
    t = end + 0.8;
  }
}
const opts = { speed: 1, motion: 1 };
assert.equal(deterministicTravel(12.34, lines, opts), deterministicTravel(12.34, lines, opts),
  '同 t 同距离（纯函数）');
assert.equal(deterministicTravel(0, null, opts), 0, '零时刻零里程');
assert.ok(deterministicTravel(12.4, lines, opts) >= deterministicTravel(12.34, lines, opts),
  '距离场单调不减');
// 歌词冲刺必须真实进入里程：有词比无词跑得远（同一 t）。
assert.ok(deterministicTravel(12.34, lines, opts) > deterministicTravel(12.34, [], opts),
  '歌词边界冲刺必须计入里程');
// 速度参数生效且受限
const fast = deterministicTravel(12.34, lines, { speed: 2, motion: 1 });
assert.ok(fast > deterministicTravel(12.34, lines, opts), 'speed 越大里程越大');
assert.ok(Number.isFinite(deterministicTravel(100, lines, { speed: 99, motion: 9 })),
  '越界 speed/motion 被钳制后仍有限');
pass('行驶距离：确定性、单调、歌词冲刺计入、参数钳制');

// ---- 路由：连续有限、GLSL 同式常量、左右股道相位差 π ----
for (const s of [0, 100, 1337, 8000]) {
  const c = routeCenter(s);
  assert.ok(Number.isFinite(c.x) && Number.isFinite(c.y), '路由中心必须有限');
  const w0 = wakeRoute(s, 0, 1, 0);
  const w1 = wakeRoute(s, 1, 1, 0);
  assert.ok(Number.isFinite(w0.x) && Number.isFinite(w0.y) && Number.isFinite(w0.z), '尾迹坐标有限');
  assert.ok(Math.abs(w0.x - w1.x) + Math.abs(w0.y - w1.y) > 1,
    '左右股道必须明显分离（相位差 π）');
}
// travel 平移：z 随 travel 线性移动
assert.ok(Math.abs((wakeRoute(10, 0, 1, 5).z - wakeRoute(10, 0, 1, 0).z) - 5) < 1e-9,
  'travel 推进 5 单位，尾迹 z 前移 5');
pass('路由：连续有限、双股分离、travel 平移一致');

// ---- 速度调制：句首缓入 / 句尾加速 / 无句放慢 ----
assert.ok(Math.abs(speedModulator(0.5, false) - 0.82) < 1e-9, '无句时段 0.82');
const entrance = speedModulator(0.1, true);
const mid = speedModulator(0.5, true);
const exit = speedModulator(0.95, true);
assert.ok(entrance > 0.6 && entrance <= 1.05, '句首从 1.05 缓入');
assert.ok(mid >= 0.63 && mid <= 1.05, '句中在缓入下限之上');
assert.ok(exit > mid, '句尾加速抬升');
assert.ok(speedModulator(0, true) >= speedModulator(0.2, true), '入场单调不增（前 22%）');
pass('速度调制：三段式包络正确');

// ---- 行窗口：入场到出口演完，下一行起唱让位 ----
const hold = 0.32, pause = 0.9, dissolve = 0.72;
// 专用夹具：两行之间留 6.8s 大间隔，出口动画在间隔内演完。
const windowLines = [
  { start: 2, end: 5.2, text: '点阵凝成遥远的行星', glyphs: lines[0].glyphs },
  { start: 12, end: 15.2, text: '星河在隧道的尽头拐弯', glyphs: lines[1].glyphs },
];
const firstWin = windowLines[0];
const glyphEnd = firstWin.glyphs[firstWin.glyphs.length - 1].end;
const exitStart = glyphEnd + Math.min(0.8, hold * 0.5 + pause * 0.15);
const exitEnd = exitStart + 0.45 + dissolve * 0.55;
assert.ok(exitEnd < windowLines[1].start, '夹具前置：出口必须在下一行起唱前结束');
assert.equal(lineWindowAt(windowLines, firstWin.start - 0.1, {}), null, '起唱前无行');
assert.equal(lineWindowAt(windowLines, firstWin.start + 0.1, {}), firstWin, '句中在窗口内');
assert.equal(lineWindowAt(windowLines, exitEnd - 0.05, {}), firstWin, '出口动画期间仍在窗口');
assert.equal(lineWindowAt(windowLines, exitEnd + 0.05, {}), null, '出口演完即让位（间隔期无行）');
assert.equal(lineWindowAt(windowLines, windowLines[1].start + 0.1, {}), windowLines[1], '下一行起唱立即接管');
pass('行窗口：入场/出口/让位边界正确');

// ---- 频带聚合 ----
const zeros = aggregateBands(new Float32Array(64), 24);
assert.equal(zeros.length, 24);
assert.ok(Array.from(zeros).every(v => v === 0), '全零频谱聚合后必须全零');
const loud = aggregateBands(new Array(64).fill(0.9), 24);
assert.ok(Array.from(loud).every(v => v > 0.5), '高电平频谱聚合后应普遍偏高');
pass('频带聚合：静噪底与动态压缩行为正确');

// ---- 宿主接线 ----
const index = fs.readFileSync(path.join(root, 'plugin/ui/index.html'), 'utf8');
assert.ok(index.indexOf('vendor/tunnel-stage.js') < index.indexOf('stage-tunnel.js'),
  'vendor 必须先于 stage-tunnel.js 加载');
assert.ok(index.indexOf('stage-tunnel.js') < index.indexOf('src="stage3d.js"'),
  'stage-tunnel.js 必须先于 stage3d.js 加载');
assert.ok(index.includes('id="s3d-tunnel-toggle"'), '缺少「隧图」飞出牌');
assert.ok(index.includes('id="i-tunnel"'), '缺少隧图图标');
assert.ok(index.includes('<option value="tunnel">'), '舞台来源下拉缺少隧图');
assert.ok(index.includes('id="s3d-tunnel-warp"') && index.includes('id="s3d-tunnel-objects"'),
  '缺少星流/天体设置项');
assert.ok(index.includes('id="s3d-tunnel-tuning"'), '缺少隧图调谐面板');
pass('index.html：脚本顺序、飞出牌、下拉项、设置项齐全');

const stage3d = fs.readFileSync(path.join(root, 'plugin/ui/stage3d.js'), 'utf8');
assert.ok(stage3d.includes("'tunnel'"), 'stage3d.js 未接入 sceneSource tunnel');
assert.ok(stage3d.includes('syncTunnelStage'), 'stage3d.js 缺少 syncTunnelStage');
assert.ok(stage3d.includes('StageTunnel.setHost'), 'stage3d.js 未接 StageTunnel.setHost');
assert.ok(stage3d.includes('tunnelWarp') && stage3d.includes('tunnelObjects'),
  'stage3d.js 缺少隧图偏好持久化');
assert.ok(stage3d.includes('tunnelOwnsLyrics'), 'stage3d.js 缺少在场歌词接管判定');
pass('stage3d.js：sceneSource/宿主/偏好/ownsLyrics 接线齐全');

const settings = fs.readFileSync(path.join(root, 'plugin/ui/stage-settings.js'), 'utf8');
assert.ok(settings.includes("state.source === 'tunnel'"), 'stage-settings.js 未派生隧图可用性');
assert.ok(settings.includes("row('s3d-tunnel-warp'") && settings.includes("row('s3d-tunnel-objects'"),
  'stage-settings.js 缺少隧图设置行');
pass('stage-settings.js：隧图可用性派生齐全');

const assets = fs.readFileSync(path.join(root, 'crates/hertz-studio/src/assets.rs'), 'utf8');
assert.ok(assets.includes('"/vendor/tunnel-stage.js"') && assets.includes('"/stage-tunnel.js"'),
  'assets.rs 未登记隧图内嵌资产（路由由清单派生，漏登记即 404）');
pass('assets.rs：内嵌资产双登记齐全');

const notice = fs.readFileSync(path.join(root, 'NOTICE'), 'utf8');
assert.ok(notice.includes('tunnel') && notice.includes('CC BY-NC-SA 4.0') && notice.includes('Deep Space Transit'),
  'NOTICE 缺少隧图设计渊源声明');
pass('NOTICE：隧图渊源声明齐全（只参照行为规格）');

console.log('\ncheck-tunnel-stage: ' + passed + ' checks passed');
