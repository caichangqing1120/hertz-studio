// SPDX-License-Identifier: MIT
// 「纯真3D」海岸舞台的浏览器冒烟：真实 WebGL 像素 + 飞出入口交互 + 音频反应
// + 时刻切换 + 巡航/交互相机 + 泄漏浸泡。对 null 后端 fixture 跑完整页面。
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const { startFixture } = require('./ui-browser-fixture');
const { uiUrl } = require('./ui-token');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'output/playwright/coast-stage');
const report = { checks: [], errors: [] };
const pass = name => { report.checks.push(name); console.log('PASS ' + name); };

async function main() {
  fs.mkdirSync(output, { recursive: true });
  const fixture = await startFixture();
  // uiUrl 的令牌来自 VMUSIC_DATA_DIR 下的 token 文件；fixture 起完才有这个目录。
  process.env.VMUSIC_DATA_DIR = fixture.dataDir;
  const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL || 'chrome', headless: process.env.COAST_HEADED !== '1' });
  const context = await browser.newContext({ viewport: { width: 1440, height: 960 } });
  await fixture.connect(context);
  const page = await context.newPage();
  page.on('pageerror', error => report.errors.push(error.message));
  // chrome 静止 2.6s 后 pointer-events:none（s3d-chrome 类摘除）。唤醒靠真实
  // pointermove —— hover 的命中预检发生在注入移动之前，必须先原生动一下鼠标。
  const wakeChrome = async () => {
    await page.mouse.move(600, 500);
    await page.mouse.move(620, 520);
    await page.waitForFunction(() => document.getElementById('stage3d').classList.contains('s3d-chrome'));
  };
  try {
    await page.goto(uiUrl(fixture.base));
    await page.waitForFunction(() => window.Stage3D && window.Stage && window.StageCoast
      && window.CoastStagePure && document.getElementById('conn').textContent === '服务已连接');
    pass('页面加载：Stage3D / StageCoast / CoastStagePure 就绪');

    assert.equal(await page.evaluate(() => StageCoast.available()), true, 'WebGL2 探测应可用');
    pass('StageCoast.available() === true');

    // ---- 打开大舞台（与 check-3d-browser 同款 presentation 桩） ----
    await page.evaluate(() => {
      const original = Stage.presentation.bind(Stage);
      window.__coastCheck = { position: 12000, duration: 180000 };
      Stage.presentation = function () {
        const fixture = window.__coastCheck;
        return { ...original(), track: { id: 'coast-fixture', title: 'Coast browser fixture', artist: 'Check' },
          position: fixture.position, duration: fixture.duration, playing: false, cover: null };
      };
      Stage3D.configure({ motion: 0, cruise: false, shelfMode: 'off', stanzaVisual: 'stage', stanzaBg: 'stage', lyrics: false });
      Stage3D.open();
    });
    await page.waitForFunction(() => Stage3D.isActive());
    pass('大舞台已开启');

    // ---- 飞出按钮组：收拢态 ----
    const menuButtons = await page.evaluate(() => Array.from(document.querySelectorAll('#s3d-head-menu .s3d-btn')).map(b => b.id));
    assert.deepEqual(menuButtons, ['s3d-lyrics-toggle', 's3d-settings-toggle', 's3d-coast-toggle', 's3d-zodiac-toggle', 's3d-reset', 's3d-fs'],
      '飞出菜单必须是 歌词/设置/纯真3D/星座/复位/全屏 六颗');
    const collapsedOpacity = await page.evaluate(() =>
      getComputedStyle(document.getElementById('s3d-lyrics-toggle')).opacity);
    assert.equal(Number(collapsedOpacity), 0, '收拢态功能牌不可见');
    assert.equal(await page.evaluate(() => document.getElementById('s3d-close').checkVisibility()), true,
      '关闭按钮独立常驻');
    pass('头部按钮组收拢态：菜单隐藏、关闭独立常驻');

    // ---- 悬停展开 + 触发按钮转向 ----
    await page.hover('#s3d-head-trigger');
    await page.waitForFunction(() => Number(getComputedStyle(document.getElementById('s3d-lyrics-toggle')).opacity) === 1);
    const rotated = await page.evaluate(() =>
      getComputedStyle(document.querySelector('#s3d-head-trigger svg')).transform);
    assert.ok(rotated !== 'none' && !rotated.startsWith('matrix(1, 0, 0, 1'), '悬停时触发按钮图标应旋转');
    pass('悬停展开：五牌可见、触发图标转向');

    // ---- 触屏/点击路径：is-open + aria-expanded，Esc 收回 ----
    await page.mouse.move(10, 300); // 移开鼠标，消除 hover 态
    await page.click('#s3d-head-trigger');
    assert.equal(await page.evaluate(() => document.getElementById('s3d-head-cluster').classList.contains('is-open')), true);
    assert.equal(await page.evaluate(() => document.getElementById('s3d-head-trigger').getAttribute('aria-expanded')), 'true');
    await page.keyboard.press('Escape');
    await page.waitForFunction(() => !document.getElementById('s3d-head-cluster').classList.contains('is-open'));
    assert.equal(await page.evaluate(() => document.getElementById('s3d-head-trigger').getAttribute('aria-expanded')), 'false');
    pass('点击展开 / Esc 收回：aria-expanded 同步');

    // ---- 「纯真3D」入画 ----
    await page.click('#s3d-head-trigger');
    await page.click('#s3d-coast-toggle');
    await page.waitForFunction(() => Stage3D.preferences().sceneSource === 'coast');
    await page.waitForFunction(() => {
      const host = document.getElementById('s3d-coast');
      return host && !host.hidden && host.querySelector('.coast-canvas');
    });
    await page.waitForFunction(() => CoastStagePure.stats() !== null && StageCoast.degradedBecause() === null);
    assert.equal(await page.evaluate(() => document.getElementById('s3d-coast-toggle').getAttribute('aria-pressed')), 'true');
    pass('「纯真3D」入画：sceneSource=coast、画布挂载、入口牌按下态');

    // ---- 构图：天空在上、路面在下、非全黑 ----
    await page.waitForFunction(() => {
      const c = CoastStagePure.capture();
      return c && c.top.some(v => v > 25) && c.bottom.some(v => v > 25);
    }, undefined, { timeout: 30000 });
    const frame = await page.evaluate(() => CoastStagePure.capture());
    const sum = arr => arr[0] + arr[1] + arr[2];
    assert.ok(Math.max(...frame.top) > 25, '画面不应全黑');
    assert.ok(Math.abs(sum(frame.top) - sum(frame.bottom)) > 30,
      '上（天空）下（路面）分区亮度应有明显差异：top=' + frame.top + ' bottom=' + frame.bottom);
    pass('构图合理：非全黑、上/下分区亮度差异明显');

    // ---- 相机交互：拖拽环绕 -> 双击复位 -> 静置回归巡航 ----
    const yaw0 = await page.evaluate(() => CoastStagePure.debug().rig.yaw0);
    const canvasBox = await (await page.$('#s3d-coast .coast-canvas')).boundingBox();
    await page.mouse.move(canvasBox.x + canvasBox.width / 2, canvasBox.y + canvasBox.height / 2);
    await page.mouse.down();
    await page.mouse.move(canvasBox.x + canvasBox.width / 2 - 160, canvasBox.y + canvasBox.height / 2 + 60, { steps: 8 });
    await page.mouse.up();
    const dragged = await page.evaluate(() => CoastStagePure.debug().rig);
    assert.ok(Math.abs(dragged.yaw - yaw0) > 0.3, '拖拽应改变水平角');
    assert.ok(dragged.dist === dragged.dist0, '纯拖拽不改变推拉距离');
    await page.evaluate(() => CoastStagePure.debug()); // 快照口可用性
    await page.mouse.dblclick(canvasBox.x + canvasBox.width / 2, canvasBox.y + canvasBox.height / 2);
    await page.waitForFunction(y0 => Math.abs(CoastStagePure.debug().rig.yaw - y0) < 0.01, yaw0);
    pass('拖拽环绕生效、双击立即复位');

    const wheelBefore = await page.evaluate(() => CoastStagePure.debug().rig.dist);
    await page.mouse.move(canvasBox.x + canvasBox.width / 2, canvasBox.y + canvasBox.height / 2);
    await page.mouse.wheel(0, -480);
    await page.waitForFunction(before => CoastStagePure.debug().rig.dist < before - 0.3, wheelBefore);
    await page.waitForFunction(y0 => Math.abs(CoastStagePure.debug().rig.yaw - y0) < 0.02
      && Math.abs(CoastStagePure.debug().rig.dist - CoastStagePure.debug().rig.dist0) < 0.05, yaw0, { timeout: 12000 });
    pass('滚轮推拉生效、静置约 4 秒自动回归巡航机位');

    // ---- 音频反应：从集成点注入（桩掉 Stage.spectrum）----
    // 适配层每帧都会用自己的 setAudio 覆盖外部直呼，所以必须沿生产路径喂。
    await page.evaluate(() => { Stage.spectrum = () => null; });
    await page.waitForFunction(() => CoastStagePure.debug().audio.level < 0.05);
    const quiet = await page.evaluate(() => CoastStagePure.capture());
    await page.evaluate(() => { Stage.spectrum = () => new Array(64).fill(0.9); });
    await page.waitForFunction(() => CoastStagePure.debug().audio.level > 0.8 && CoastStagePure.debug().audio.bass > 0.9);
    const loud = await page.evaluate(() => CoastStagePure.capture());
    const drift = Math.abs(sum(loud.top) - sum(quiet.top)) + Math.abs(sum(loud.bottom) - sum(quiet.bottom));
    assert.ok(drift > 12, '高电平应可见地改变画面（曝光/浪高/速度）：drift=' + drift.toFixed(1));
    assert.ok(await page.evaluate(() => CoastStagePure.debug().speed) > 0.1, '巡航在推进');
    pass('音频反应生效：电平驱动画面差异、低频驱动浪高');
    await page.evaluate(() => { Stage.spectrum = () => null; });
    await page.waitForFunction(() => CoastStagePure.debug().audio.level < 0.05);

    // ---- 时刻：黄昏 -> 午夜 ----
    const dusk = await page.evaluate(() => CoastStagePure.capture());
    await page.evaluate(() => CoastStagePure.setTimeOfDay(0.5));
    await page.waitForFunction(() => CoastStagePure.debug().night > 0.6 && Math.abs(CoastStagePure.debug().hour - 0.1) < 0.05);
    const midnight = await page.evaluate(() => CoastStagePure.capture());
    assert.ok(Math.abs(sum(dusk.top) - sum(midnight.top)) > 60, '黄昏与午夜的天色应有明显差异');
    pass('时刻滑杆映射：黄昏→午夜，天色可见变化');

    // ---- 泄漏浸泡：预热一轮（远处分块对象陆续首次渲染会抬高计数），
    //      再测 60 秒几何/纹理驻留恒定（分块流式回收要稳） ----
    await page.waitForTimeout(65000);
    const statsBefore = await page.evaluate(() => CoastStagePure.stats());
    await page.waitForTimeout(60000);
    const statsAfter = await page.evaluate(() => CoastStagePure.stats());
    assert.equal(statsAfter.geometries, statsBefore.geometries, '60s 后几何驻留数必须恒定');
    assert.equal(statsAfter.textures, statsBefore.textures, '60s 后纹理驻留数必须恒定');
    pass('60s 浸泡无泄漏：geometries=' + statsAfter.geometries + ' textures=' + statsAfter.textures);

    // ---- 设置面板：海岸专属项可见、滑杆写回偏好 ----
    await wakeChrome();
    await page.hover('#s3d-head-trigger'); // 菜单里的按钮要先展开才点得到
    await page.click('#s3d-settings-toggle');
    await page.waitForFunction(() => !document.getElementById('s3d-settings').hidden);
    assert.equal(await page.evaluate(() => document.getElementById('s3d-coast-tuning').hidden), false,
      'coast 激活时显示时刻/交互设置');
    await page.evaluate(() => {
      const input = document.getElementById('s3d-coast-tod');
      input.value = '0.75';
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });
    assert.ok(Math.abs(await page.evaluate(() => Stage3D.preferences().coastTod) - 0.75) < 1e-6,
      '时刻滑杆应写回偏好表');
    assert.equal(await page.evaluate(() => document.getElementById('s3d-scene-source').value), 'coast',
      '背景源下拉与当前源同步');
    pass('设置面板：coast 专属项可见、滑杆持久化、下拉同步');

    // ---- 回到沉浸声场：画布卸载、GL 资源释放 ----
    await page.evaluate(() => document.getElementById('s3d-settings-close').click());
    await wakeChrome();
    await page.hover('#s3d-head-trigger');
    await page.click('#s3d-coast-toggle');
    await page.waitForFunction(() => Stage3D.preferences().sceneSource === 'immersive');
    await page.waitForFunction(() => CoastStagePure.stats() === null);
    assert.equal(await page.evaluate(() => document.getElementById('s3d-coast').hidden), true);
    assert.equal(await page.evaluate(() => document.getElementById('s3d-coast-toggle').getAttribute('aria-pressed')), 'false');
    pass('回到沉浸声场：coast 画布卸载、上下文释放');

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
  console.log('Coast browser checks passed: ' + report.checks.length);
}

main().catch(error => { console.error(error.message); process.exitCode = 1; });
