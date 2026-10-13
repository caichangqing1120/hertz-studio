// SPDX-License-Identifier: MIT
// 「星座 · 十二星图」舞台的浏览器冒烟：真实 WebGL 像素 + 十二座挂载 +
// 连线/星场开关 + 音频反应 + 交互（拖拽/滚轮/双击）+ 设置面板 + 旧偏好迁移
// + 泄漏浸泡。对 null 后端 fixture 跑完整页面；播放时钟/频谱打桩，
// 适配层到引擎之间的一切走生产代码。
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const { startFixture } = require('./ui-browser-fixture');
const { uiUrl } = require('./ui-token');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'output/playwright/zodiac-stage');
const report = { checks: [], errors: [] };
const pass = name => { report.checks.push(name); console.log('PASS ' + name); };
const sum = arr => arr[0] + arr[1] + arr[2];

async function main() {
  fs.mkdirSync(output, { recursive: true });
  const fixture = await startFixture();
  process.env.VMUSIC_DATA_DIR = fixture.dataDir;
  const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL || 'chrome', headless: process.env.ZODIAC_HEADED !== '1' });
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
    await page.waitForFunction(() => window.Stage3D && window.Stage && window.StageZodiac
      && window.ZodiacStagePure && document.getElementById('conn').textContent === '服务已连接');
    pass('页面加载：Stage3D / StageZodiac / ZodiacStagePure 就绪');

    assert.equal(await page.evaluate(() => StageZodiac.available()), true, 'WebGL2 探测应可用');
    pass('StageZodiac.available() === true');

    // ---- 桩：播放时钟 / 频谱（先于挂载喂入） ----
    await page.evaluate(() => {
      const state = { baseMs: 0, t0: Date.now(), frozenMs: null };
      window.__zodiacCheck = state;
      const original = Stage.presentation.bind(Stage);
      Stage.presentation = () => ({ ...original(),
        track: { id: 'zodiac-fixture', title: 'Zodiac browser fixture', artist: 'Check' },
        position: state.frozenMs != null ? state.frozenMs : state.baseMs + (Date.now() - state.t0),
        duration: 60000, playing: state.frozenMs == null, cover: null });
      Stage.spectrum = () => new Array(64).fill(0.05);
      window.__seek = ms => { state.baseMs = ms; state.t0 = Date.now(); state.frozenMs = null; };
      window.__freeze = () => { state.frozenMs = state.baseMs + (Date.now() - state.t0); };
    });
    pass('时钟/频谱桩就位（管线走生产代码）');

    // ---- 旧偏好迁移：存的是 tunnel，恢复后必须落到 zodiac ----
    await page.evaluate(() => {
      Stage3D.configure({ motion: 1, cruise: true, shelfMode: 'off', stanzaVisual: 'stage', stanzaBg: 'stage', lyrics: true });
      Stage3D.open();
      Stage3D.configure({ sceneSource: 'tunnel' });
    });
    await page.waitForFunction(() => Stage3D.isActive());
    await page.waitForFunction(() => Stage3D.preferences().sceneSource === 'zodiac');
    await page.waitForFunction(() => {
      const host = document.getElementById('s3d-zodiac');
      return host && !host.hidden && host.querySelector('.zodiac-canvas');
    });
    await page.waitForFunction(() => ZodiacStagePure.stats() !== null && StageZodiac.degradedBecause() === null);
    assert.equal(await page.evaluate(() => document.getElementById('s3d-zodiac-toggle').getAttribute('aria-pressed')), 'true');
    pass('旧偏好迁移 + 星座入画：sceneSource=tunnel→zodiac、画布挂载、入口牌按下态');

    // ---- 十二宫齐活：12 座星点与连线全部构建 ----
    await page.waitForFunction(() => {
      const s = ZodiacStagePure.stats();
      return s && s.starPoints >= 60 && s.lineSegments >= 30;
    }, undefined, { timeout: 15000 });
    const built = await page.evaluate(() => ZodiacStagePure.stats());
    assert.ok(built.fieldPoints > 0, '背景星场应有粒子');
    pass('十二座粒子星图就位：星点=' + built.starPoints + ' 连线=' + built.lineSegments + ' 星场=' + built.fieldPoints);

    // ---- 构图：非全黑（星点/星场铺满视高） ----
    await page.waitForFunction(() => {
      const c = ZodiacStagePure.capture();
      return c && (Math.max(...c.middle) > 4 || Math.max(...c.top) > 4 || Math.max(...c.bottom) > 4);
    }, undefined, { timeout: 30000 });
    const frame = await page.evaluate(() => ZodiacStagePure.capture());
    assert.ok(Math.max(...frame.top) > 2, '画面不应全黑：top=' + frame.top);
    assert.ok(Math.max(...frame.bottom) > 2, '星场应铺满视高：bottom=' + frame.bottom);
    pass('构图合理：非全黑（middle=' + frame.middle + '），累计亮度 ' + sum(frame.middle));

    // ---- 连线开关：偏好写回引擎，可见性翻转 ----
    await page.evaluate(() => Stage3D.configure({ zodiacLines: false }));
    await page.waitForFunction(() => ZodiacStagePure.debug().prefs.lines === false
      && ZodiacStagePure.stats().linesVisible === false, undefined, { timeout: 15000 });
    const linesOff = await page.evaluate(() => ZodiacStagePure.capture());
    await page.evaluate(() => Stage3D.configure({ zodiacLines: true }));
    await page.waitForFunction(() => ZodiacStagePure.debug().prefs.lines === true
      && ZodiacStagePure.stats().linesVisible === true);
    const linesOn = await page.evaluate(() => ZodiacStagePure.capture());
    assert.ok(sum(linesOn.middle) + sum(linesOn.top) + sum(linesOn.bottom)
      >= sum(linesOff.middle) + sum(linesOff.top) + sum(linesOff.bottom) - 1,
      '连线开启时总亮度不应低于关闭（加法连线只增亮）');
    pass('星座连线开关：zodiacLines 偏好写回引擎且可见性翻转');

    // ---- 背景星场开关 ----
    await page.evaluate(() => Stage3D.configure({ zodiacField: false }));
    await page.waitForFunction(() => ZodiacStagePure.debug().prefs.field === false
      && ZodiacStagePure.stats().fieldVisible === false);
    await page.evaluate(() => Stage3D.configure({ zodiacField: true }));
    await page.waitForFunction(() => ZodiacStagePure.debug().prefs.field === true
      && ZodiacStagePure.stats().fieldVisible === true);
    pass('背景星场开关：zodiacField 偏好写回引擎且可见性翻转');

    // ---- 音频反应：低频包络随频谱联动 ----
    await page.evaluate(() => { Stage.spectrum = () => null; });
    await page.waitForFunction(() => ZodiacStagePure.debug().bass < 0.05, undefined, { timeout: 15000 });
    await page.evaluate(() => { Stage.spectrum = () => new Array(64).fill(0.9); });
    await page.waitForFunction(() => ZodiacStagePure.debug().bass > 0.5, undefined, { timeout: 15000 });
    pass('音频反应生效：低频包络随频谱涨落');
    await page.evaluate(() => { Stage.spectrum = () => new Array(64).fill(0.05); });

    // ---- 交互：滚轮推拉改变距离，双击复位 ----
    const dist0 = await page.evaluate(() => ZodiacStagePure.debug().dist);
    const box = await page.locator('#s3d-zodiac .zodiac-canvas').boundingBox();
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.wheel(0, 360);
    await page.waitForFunction(d0 => Math.abs(ZodiacStagePure.debug().dist - d0) > 0.5, dist0, { timeout: 5000 });
    const distZoomed = await page.evaluate(() => ZodiacStagePure.debug().dist);
    assert.ok(distZoomed > dist0, '滚轮下滚应拉远：' + dist0.toFixed(2) + ' → ' + distZoomed.toFixed(2));
    await page.mouse.dblclick(box.x + box.width / 2, box.y + box.height / 2);
    await page.waitForFunction(() => Math.abs(ZodiacStagePure.debug().dist - 9) < 0.01);
    pass('交互缩放/复位：滚轮推拉距离改变，双击回到默认机位');

    // ---- 拖拽环绕：水平拖拽改变偏航角 ----
    const yaw0 = await page.evaluate(() => ZodiacStagePure.debug().yaw);
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    await page.mouse.move(box.x + box.width / 2 - 220, box.y + box.height / 2 + 40, { steps: 8 });
    await page.mouse.up();
    const yaw1 = await page.evaluate(() => ZodiacStagePure.debug().yaw);
    assert.ok(Math.abs(yaw1 - yaw0) > 0.2, '拖拽应改变视角偏航：' + yaw0.toFixed(2) + ' → ' + yaw1.toFixed(2));
    pass('交互旋转：拖拽环绕改变偏航/俯仰');

    // ---- 关闭交互后画布不再接收指针 ----
    await page.evaluate(() => Stage3D.configure({ zodiacInteract: false }));
    await page.waitForFunction(() => ZodiacStagePure.debug().prefs.interactive === false);
    assert.equal(await page.evaluate(() => document.getElementById('s3d-zodiac').classList.contains('zodiac-interact')), false,
      '关闭交互后宿主应放开指针事件');
    const distBefore = await page.evaluate(() => ZodiacStagePure.debug().dist);
    await page.mouse.wheel(0, 360);
    await page.waitForTimeout(300);
    assert.equal(await page.evaluate(() => ZodiacStagePure.debug().dist), distBefore,
      '关闭交互后滚轮不应再改变距离');
    await page.evaluate(() => Stage3D.configure({ zodiacInteract: true }));
    pass('交互开关：zodiacInteract 控制指针接管');

    // ---- 设置面板：星座专属项可见、开关写回偏好、下拉同步 ----
    await wakeChrome();
    await page.hover('#s3d-head-trigger');
    await page.click('#s3d-settings-toggle');
    await page.waitForFunction(() => !document.getElementById('s3d-settings').hidden);
    assert.equal(await page.evaluate(() => document.getElementById('s3d-zodiac-tuning').hidden), false,
      'zodiac 激活时显示连线/星场/交互设置');
    await page.evaluate(() => {
      const box = document.getElementById('s3d-zodiac-field');
      box.checked = false;
      box.dispatchEvent(new Event('change', { bubbles: true }));
    });
    assert.equal(await page.evaluate(() => Stage3D.preferences().zodiacField), false,
      '星场开关应写回偏好表');
    await page.waitForFunction(() => ZodiacStagePure.debug().prefs.field === false
      && ZodiacStagePure.stats().fieldVisible === false);
    assert.equal(await page.evaluate(() => document.getElementById('s3d-scene-source').value), 'zodiac',
      '背景源下拉与当前源同步');
    await page.evaluate(() => {
      const box = document.getElementById('s3d-zodiac-field');
      box.checked = true;
      box.dispatchEvent(new Event('change', { bubbles: true }));
    });
    await page.waitForFunction(() => ZodiacStagePure.debug().prefs.field === true);
    await page.evaluate(() => document.getElementById('s3d-settings-close').click());
    pass('设置面板：zodiac 专属项可见、开关持久化且即时生效、下拉同步');

    // ---- 泄漏浸泡：暂停冻结，驻留计数必须恒定 ----
    await page.evaluate(() => window.__freeze());
    await page.waitForTimeout(2500);
    const statsBefore = await page.evaluate(() => ZodiacStagePure.stats());
    await page.waitForTimeout(6000);
    const statsAfter = await page.evaluate(() => ZodiacStagePure.stats());
    assert.equal(statsAfter.geometries, statsBefore.geometries, '冻结时几何驻留数必须恒定');
    assert.equal(statsAfter.textures, statsBefore.textures, '冻结时纹理驻留数必须恒定');
    assert.equal(statsAfter.starPoints, statsBefore.starPoints, '冻结时星点规模必须恒定');
    pass('冻结浸泡无泄漏：geometries=' + statsAfter.geometries + ' starPoints=' + statsAfter.starPoints);

    // 降档：单 canvas、背景星场点数减少。
    await page.evaluate(() => document.dispatchEvent(new CustomEvent('stage:fps', { detail: { lowfx: true } })));
    await page.waitForFunction(() => ZodiacStagePure.stats().quality === 'low');
    assert.equal(await page.locator('#s3d-zodiac .zodiac-canvas').count(), 1,
      '降档重建不能遗留失去上下文的 canvas');
    assert.ok((await page.evaluate(() => ZodiacStagePure.stats().fieldPoints)) < built.fieldPoints,
      '低档应降低背景星场点数');
    pass('自动降档：单 canvas、星场点数减少');

    // ---- 回到沉浸声场：画布卸载、GL 资源释放 ----
    await wakeChrome();
    await page.hover('#s3d-head-trigger');
    await page.click('#s3d-zodiac-toggle');
    await page.waitForFunction(() => Stage3D.preferences().sceneSource === 'immersive');
    await page.waitForFunction(() => ZodiacStagePure.stats() === null);
    assert.equal(await page.evaluate(() => document.getElementById('s3d-zodiac').hidden), true);
    assert.equal(await page.evaluate(() => document.getElementById('s3d-zodiac-toggle').getAttribute('aria-pressed')), 'false');
    pass('回到沉浸声场：星座画布卸载、上下文释放');

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
  console.log('Zodiac browser checks passed: ' + report.checks.length);
}

main().catch(error => { console.error(error.message); process.exitCode = 1; });
