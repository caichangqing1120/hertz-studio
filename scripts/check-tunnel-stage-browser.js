// SPDX-License-Identifier: MIT
// 「隧图 · 深空」舞台的浏览器冒烟：真实 WebGL 像素 + 歌词接线（桩歌词数据、
// 真实 字素→引擎 管线）+ 星流/天体开关 + 音频反应 + 设置面板 + 泄漏浸泡。
// 对 null 后端 fixture 跑完整页面；歌词源/时钟/频谱打桩（diorama 同款手法），
// 适配层到引擎之间的一切走生产代码。
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const { startFixture } = require('./ui-browser-fixture');
const { uiUrl } = require('./ui-token');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'output/playwright/tunnel-stage');
const report = { checks: [], errors: [] };
const pass = name => { report.checks.push(name); console.log('PASS ' + name); };
const sum = arr => arr[0] + arr[1] + arr[2];

// 桩歌词：两句主歌 + 一句带译文的副歌感长句，间隔拉大让出口动画在行间演完。
const LINES = [];
{
  let t = 2.0;
  const blocks = [
    ['点阵凝成遥远的行星', '星河在隧道的尽头拐弯'],
    ['把名字写进深空的尾迹'],
  ];
  for (const block of blocks) {
    for (const text of block) {
      const start = t, end = t + 3.4;
      const chars = Array.from(text);
      const toks = chars.map((ch, i) => ({
        text: ch, start_ms: start * 1000 + (end - start) * 1000 * i / chars.length,
        end_ms: start * 1000 + (end - start) * 1000 * (i + 1) / chars.length,
      }));
      toks.wordLevel = true;
      LINES.push({ start_ms: start * 1000, end_ms: end * 1000, text, __toks: toks });
      t = end + 6.8;
    }
  }
}
const FIRST_LINE_MS = LINES[0].start_ms;
const SECOND_LINE_MS = LINES[1].start_ms;

async function main() {
  fs.mkdirSync(output, { recursive: true });
  const fixture = await startFixture();
  process.env.VMUSIC_DATA_DIR = fixture.dataDir;
  const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL || 'chrome', headless: process.env.TUNNEL_HEADED !== '1' });
  const context = await browser.newContext({ viewport: { width: 1440, height: 960 } });
  await fixture.connect(context);
  const page = await context.newPage();
  page.on('pageerror', error => report.errors.push(error.message));
  const wakeChrome = async () => {
    await page.mouse.move(600, 500);
    await page.mouse.move(620, 520);
    await page.waitForFunction(() => document.getElementById('stage3d').classList.contains('s3d-chrome'));
  };
  try {
    await page.goto(uiUrl(fixture.base));
    await page.waitForFunction(() => window.Stage3D && window.Stage && window.StageTunnel
      && window.TunnelStagePure && document.getElementById('conn').textContent === '服务已连接');
    pass('页面加载：Stage3D / StageTunnel / TunnelStagePure 就绪');

    assert.equal(await page.evaluate(() => StageTunnel.available()), true, 'WebGL2 探测应可用');
    pass('StageTunnel.available() === true');

    // ---- 桩：歌词源 / 字素时钟 / 播放时钟 / 频谱（先于挂载喂入） ----
    await page.evaluate(lines => {
      const state = { baseMs: 0, t0: Date.now(), frozenMs: null };
      window.__tunnelCheck = state;
      window.__tunnelLines = lines;
      const original = Stage.presentation.bind(Stage);
      Stage.lyrics = () => ({ lines, index: 0 });
      Stage.lyricTokens = line => (line && line.__toks) || [];
      Stage.lyricTranslation = i => (i === 1 ? 'write your name into the wake' : '');
      Stage.presentation = () => ({ ...original(),
        track: { id: 'tunnel-fixture', title: 'Tunnel browser fixture', artist: 'Check' },
        position: state.frozenMs != null ? state.frozenMs : state.baseMs + (Date.now() - state.t0),
        duration: 60000, playing: state.frozenMs == null, cover: null });
      Stage.spectrum = () => new Array(64).fill(0.05);
      window.__seek = ms => { state.baseMs = ms; state.t0 = Date.now(); state.frozenMs = null; };
      window.__freeze = () => { state.frozenMs = state.baseMs + (Date.now() - state.t0); };
    }, LINES);
    pass('歌词/时钟/频谱桩就位（管线走生产代码）');

    // ---- 打开大舞台并切到隧图 ----
    await page.evaluate(() => {
      Stage3D.configure({ motion: 1, cruise: true, shelfMode: 'off', stanzaVisual: 'stage', stanzaBg: 'stage', lyrics: true });
      Stage3D.open();
    });
    await page.waitForFunction(() => Stage3D.isActive());
    await page.evaluate(() => Stage3D.configure({ sceneSource: 'tunnel' }));
    await page.waitForFunction(() => Stage3D.preferences().sceneSource === 'tunnel');
    await page.waitForFunction(() => {
      const host = document.getElementById('s3d-tunnel');
      return host && !host.hidden && host.querySelector('.tunnel-canvas');
    });
    await page.waitForFunction(() => TunnelStagePure.stats() !== null && StageTunnel.degradedBecause() === null);
    assert.equal(await page.evaluate(() => document.getElementById('s3d-tunnel-toggle').getAttribute('aria-pressed')), 'true');
    pass('隧图入画：sceneSource=tunnel、画布挂载、入口牌按下态');

    // ---- 歌词编制真实到达引擎（字素 → 引擎行表） ----
    await page.waitForFunction(() => {
      const d = TunnelStagePure.debug();
      return d && d.lines === 3;
    }, undefined, { timeout: 15000 });
    pass('歌词编制到达引擎：3 行全部入编');

    // ---- 唱句在画：seek 到首句，散点凝聚、当前行入 stats ----
    await page.evaluate(ms => window.__seek(ms), FIRST_LINE_MS + 500);
    await page.waitForFunction(() => {
      const s = TunnelStagePure.stats();
      return s && s.line === '点阵凝成遥远的行星' && s.particles > 0;
    }, undefined, { timeout: 15000 });
    pass('唱句在画：当前行进入场景、散点粒子已生成');

    // ---- 构图：非全黑 + 中轴（字形/尾迹）显著亮于上下星场 ----
    await page.waitForFunction(() => {
      const c = TunnelStagePure.capture();
      return c && c.middle.some(v => v > 6);
    }, undefined, { timeout: 30000 });
    const frame = await page.evaluate(() => TunnelStagePure.capture());
    assert.ok(Math.max(...frame.top) > 2, '画面不应全黑：top=' + frame.top);
    assert.ok(Math.max(...frame.bottom) > 2, '星场应铺满视高（隧道没有遮幅）：bottom=' + frame.bottom);
    assert.ok(sum(frame.middle) - sum(frame.top) > 30,
      '中轴（歌词/尾迹）应显著亮于星场：middle=' + frame.middle + ' top=' + frame.top);
    pass('构图合理：非全黑、中轴亮于星场');

    // ---- 歌词开关：关掉后中央字形退场 ----
    const withLyrics = await page.evaluate(() => TunnelStagePure.capture());
    await page.evaluate(() => Stage3D.configure({ lyrics: false }));
    await page.waitForFunction(() => TunnelStagePure.stats().line === null, undefined, { timeout: 15000 });
    const withoutLyrics = await page.evaluate(() => TunnelStagePure.capture());
    assert.ok(Math.abs(sum(withLyrics.middle) - sum(withoutLyrics.middle)) > 2,
      '关歌词后中轴画面应有可见变化（字形退场）');
    await page.evaluate(() => Stage3D.configure({ lyrics: true }));
    await page.waitForFunction(() => TunnelStagePure.stats().line !== null, undefined, { timeout: 15000 });
    pass('歌词开关：在场歌词随「显示歌词」整体退场/回归');

    // ---- 星流/天体开关：偏好写回引擎，可见性标志随之翻转 ----
    //（星点/尾迹在行平均像素里太稀疏测不到，行为断言走 stats 可见性标志）
    await page.evaluate(() => Stage3D.configure({ tunnelWarp: false }));
    await page.waitForFunction(() => TunnelStagePure.debug().prefs.warp === false
      && TunnelStagePure.stats().warpVisible === false, undefined, { timeout: 15000 });
    await page.evaluate(() => Stage3D.configure({ tunnelWarp: true }));
    await page.waitForFunction(() => TunnelStagePure.debug().prefs.warp === true
      && TunnelStagePure.stats().warpVisible === true);
    pass('星流开关：tunnelWarp 偏好写回引擎且背景层可见性翻转');

    // ---- 音频反应：低频包络与 FOV 呼吸随频谱联动（行为链断言） ----
    await page.evaluate(ms => window.__seek(ms), FIRST_LINE_MS + 500);
    await page.waitForFunction(() => TunnelStagePure.stats().line !== null, undefined, { timeout: 15000 });
    await page.evaluate(() => { Stage.spectrum = () => null; });
    await page.waitForFunction(() => TunnelStagePure.debug().bass < 0.05, undefined, { timeout: 15000 });
    const fovQuiet = await page.evaluate(() => TunnelStagePure.debug().fov);
    await page.evaluate(() => { Stage.spectrum = () => new Array(64).fill(0.9); });
    await page.waitForFunction(() => TunnelStagePure.debug().bass > 0.5, undefined, { timeout: 15000 });
    const fovLoud = await page.evaluate(() => TunnelStagePure.debug().fov);
    assert.ok(fovLoud - fovQuiet > 0.5,
      '高电平应张开 FOV（速度/低频呼吸）：quiet=' + fovQuiet.toFixed(2) + ' loud=' + fovLoud.toFixed(2));
    pass('音频反应生效：低频包络驱动 FOV 呼吸');
    await page.evaluate(() => { Stage.spectrum = () => new Array(64).fill(0.05); });

    // ---- 换行：第二句起唱后当前行更新 ----
    await page.evaluate(ms => window.__seek(ms), SECOND_LINE_MS + 500);
    await page.waitForFunction(() => TunnelStagePure.stats().line === '把名字写进深空的尾迹', undefined, { timeout: 15000 });
    pass('换行接管：起唱后当前行更新为下一句');

    // ---- 设置面板：隧图专属项可见、开关写回偏好、下拉同步 ----
    await wakeChrome();
    await page.hover('#s3d-head-trigger');
    await page.click('#s3d-settings-toggle');
    await page.waitForFunction(() => !document.getElementById('s3d-settings').hidden);
    assert.equal(await page.evaluate(() => document.getElementById('s3d-tunnel-tuning').hidden), false,
      'tunnel 激活时显示星流/天体设置');
    await page.evaluate(() => {
      const box = document.getElementById('s3d-tunnel-objects');
      box.checked = false;
      box.dispatchEvent(new Event('change', { bubbles: true }));
    });
    assert.equal(await page.evaluate(() => Stage3D.preferences().tunnelObjects), false,
      '天体开关应写回偏好表');
    await page.waitForFunction(() => TunnelStagePure.debug().prefs.objects === false
      && TunnelStagePure.stats().entitiesVisible === false);
    assert.equal(await page.evaluate(() => document.getElementById('s3d-scene-source').value), 'tunnel',
      '背景源下拉与当前源同步');
    await page.evaluate(() => {
      const box = document.getElementById('s3d-tunnel-objects');
      box.checked = true;
      box.dispatchEvent(new Event('change', { bubbles: true }));
    });
    await page.waitForFunction(() => TunnelStagePure.debug().prefs.objects === true);
    await page.evaluate(() => document.getElementById('s3d-settings-close').click());
    pass('设置面板：tunnel 专属项可见、开关持久化且即时生效、下拉同步');

    // ---- 泄漏浸泡：暂停冻结在唱句时刻（窗口静止），计数必须恒定 ----
    await page.evaluate(ms => window.__seek(ms), FIRST_LINE_MS + 500);
    await page.waitForFunction(() => TunnelStagePure.stats().line !== null, undefined, { timeout: 15000 });
    await page.evaluate(() => window.__freeze());
    await page.waitForTimeout(2500);
    const statsBefore = await page.evaluate(() => TunnelStagePure.stats());
    await page.waitForTimeout(6000);
    const statsAfter = await page.evaluate(() => TunnelStagePure.stats());
    assert.equal(statsAfter.geometries, statsBefore.geometries, '冻结时几何驻留数必须恒定');
    assert.equal(statsAfter.textures, statsBefore.textures, '冻结时纹理驻留数必须恒定');
    pass('冻结浸泡无泄漏：geometries=' + statsAfter.geometries + ' textures=' + statsAfter.textures);

    // ---- 回到沉浸声场：画布卸载、GL 资源释放、stanza 叠层回归 ----
    await wakeChrome();
    await page.hover('#s3d-head-trigger');
    await page.click('#s3d-tunnel-toggle');
    await page.waitForFunction(() => Stage3D.preferences().sceneSource === 'immersive');
    await page.waitForFunction(() => TunnelStagePure.stats() === null);
    assert.equal(await page.evaluate(() => document.getElementById('s3d-tunnel').hidden), true);
    assert.equal(await page.evaluate(() => document.getElementById('s3d-tunnel-toggle').getAttribute('aria-pressed')), 'false');
    pass('回到沉浸声场：隧图画布卸载、上下文释放');

    assert.deepEqual(report.errors, [], '页面无未捕获错误');
    fs.writeFileSync(path.join(output, 'result.json'), JSON.stringify(report, null, 2));
  } catch (error) {
    report.failure = error.message;
    fs.writeFileSync(path.join(output, 'result.json'), JSON.stringify(report, null, 2));
    await page.screenshot({ path: path.join(output, 'failure.png') }).catch(() => {});
    throw error;
  } finally {
    await browser.close();
    await fixture.close();
  }
  console.log('Tunnel browser checks passed: ' + report.checks.length);
}

main().catch(error => { console.error(error.message); process.exitCode = 1; });
