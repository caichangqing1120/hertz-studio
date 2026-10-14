// SPDX-License-Identifier: MIT
// 「星座 · 十二星图」粒子舞台浏览器冒烟：真实 WebGL 像素 + 单座生命周期
//（粒子汇聚 → 停留 → 散开 → 换下一座，12 座循环）+ 星云开关 + 音频反应 +
// 交互（拖拽/滚轮/双击）+ 设置面板 + 旧偏好迁移 + 泄漏浸泡。
// 对 null 后端 fixture 跑完整页面；播放时钟/频谱打桩，适配层到引擎走生产代码。
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
const lum = c => c.middle[0] + c.middle[1] + c.middle[2] + c.top[0] + c.top[1] + c.top[2]
  + c.bottom[0] + c.bottom[1] + c.bottom[2];
// 浏览器内没有 lum 帮助函数，evaluate 里用这个表达式取值。
const pageLum = () => {
  const c = ZodiacStagePure.capture();
  return [].concat(c.middle, c.top, c.bottom).reduce((a, b) => a + b, 0);
};

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
  // 直接把播放时钟 seek 到某一秒并等引擎状态落定。
  const seekWait = async (sec, pred, arg, timeout = 15000) => {
    await page.evaluate(s => window.__seek(s * 1000), sec);
    await page.waitForFunction(pred, arg, { timeout });
  };
  try {
    await page.goto(uiUrl(fixture.base));
    await page.waitForFunction(() => window.Stage3D && window.Stage && window.StageZodiac
      && window.ZodiacStagePure && document.getElementById('conn').textContent === '服务已连接');
    pass('页面加载：Stage3D / StageZodiac / ZodiacStagePure 就绪');

    assert.equal(await page.evaluate(() => StageZodiac.available()), true, 'WebGL2 探测应可用');
    pass('StageZodiac.available() === true');

    // ---- 桩：播放时钟 / 频谱 ----
    await page.evaluate(() => {
      const state = { baseMs: 0, t0: Date.now(), frozenMs: null };
      window.__zodiacCheck = state;
      const original = Stage.presentation.bind(Stage);
      Stage.presentation = () => ({ ...original(),
        track: { id: 'zodiac-fixture', title: 'Zodiac browser fixture', artist: 'Check' },
        position: state.frozenMs != null ? state.frozenMs : state.baseMs + (Date.now() - state.t0),
        duration: 600000, playing: state.frozenMs == null, cover: null });
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
    assert.equal(await page.evaluate(() => document.getElementById('s3d-scene-source').value), 'zodiac');
    pass('旧偏好迁移 + 星座入画：sceneSource=tunnel→zodiac、画布挂载、来源下拉同步');

    // ---- 单粒子池就位（只登场一座，不是十二座同屏） ----
    await page.waitForFunction(() => {
      const s = ZodiacStagePure.stats();
      return s && s.particleCount >= 2000 && s.sign && s.signCn;
    });
    const built = await page.evaluate(() => ZodiacStagePure.stats());
    assert.ok(built.fieldPoints > 0, '背景星云应有粒子');
    assert.equal(built.sign, 'aries', '第 0 秒应从白羊开始');
    assert.equal(built.state, 'gather', '开场处于汇聚状态');
    assert.ok(built.sky === true && built.layers >= 10, '天空穹顶与图层数应上报');
    pass('单粒子池就位：粒子=' + built.particleCount + ' 星云=' + built.fieldPoints + ' 首座=' + built.signCn);

    // ---- 形象图 / 星座骨架：三层几何都建好、且 GPU 资源已预热（驻留数恒定的前提）----
    await page.waitForFunction(() => ZodiacStagePure.stats().warmed === true, undefined, { timeout: 15000 });
    const warmed = await page.evaluate(() => ZodiacStagePure.stats());
    assert.ok(warmed.geometries >= 60 && warmed.geometries <= 145,
      '十二座的几何应全部预建（实测 ' + warmed.geometries + '）');
    assert.ok(warmed.programs >= 4, '着色器程序应已编译（实测 ' + warmed.programs + '）');
    assert.ok(warmed.figurePoints > 0, '形象图柔光应有粒子');
    pass('GPU 资源预热：geometries=' + warmed.geometries + ' textures=' + warmed.textures);

    await seekWait(5.2, () => ZodiacStagePure.stats().state === 'hold' && ZodiacStagePure.stats().morph === 1);
    const holdFig = await page.evaluate(() => ZodiacStagePure.stats());
    assert.ok(holdFig.figureTriangles >= 120,
      '低多边形形象图面片太少：' + holdFig.figureTriangles);
    assert.ok(holdFig.constellationNodes >= 6 && holdFig.constellationSegments >= 5,
      '星座骨架星点/连线太少：' + holdFig.constellationNodes + '/' + holdFig.constellationSegments);
    assert.equal(holdFig.figureAlpha, 1, '停留时形象图应全显');
    const holdGeoms = holdFig.geometries;
    // 再换两座，几何驻留数必须一动不动（换座只换引用）
    await seekWait(await page.evaluate(() => ZodiacStagePure.stats().cycleSeconds) * 2 + 5.2,
      () => ZodiacStagePure.stats().signIndex === 2 && ZodiacStagePure.stats().state === 'hold');
    assert.equal((await page.evaluate(() => ZodiacStagePure.stats().geometries)), holdGeoms,
      '换座不得重建几何（geometries 必须恒定）');
    pass('形象图与骨架：面片=' + holdFig.figureTriangles + ' 星点=' + holdFig.constellationNodes
      + ' 换座后 geometries 恒定');

    // ---- 汇聚 → 停留：形态亮度明显抬升 ----
    await seekWait(1.0, () => ZodiacStagePure.stats().state === 'gather');
    const gathering = await page.evaluate(pageLum);
    await seekWait(5.2, () => ZodiacStagePure.stats().state === 'hold' && ZodiacStagePure.stats().morph === 1);
    const hold = await page.evaluate(() => ZodiacStagePure.capture());
    const holdLum = lum(hold);
    assert.ok(holdLum > gathering + 8, '汇聚完成应显著亮于汇聚途中：' + gathering + ' → ' + holdLum);
    assert.ok(Math.max(...hold.middle, ...hold.top, ...hold.bottom) > 10, '停留造型不应全黑');
    pass('粒子汇聚成形：状态 gather→hold，中心亮度抬升');

    // ---- 停留 → 散开：末段粒子飞离，亮度回落 ----
    await seekWait(12.6, () => ZodiacStagePure.stats().state === 'disperse'
      && ZodiacStagePure.stats().morph > 0.85);
    const dispersing = await page.evaluate(pageLum);
    assert.ok(dispersing < holdLum - 5, '散开末段应暗于停留：hold=' + holdLum + ' disperse=' + dispersing);
    pass('粒子散开：disperse 末段造型飞离、亮度回落');

    // ---- 换座：跨越周期边界后是下一座；连扫 6 个周期座次推进，12 周期回白羊 ----
    const seen = [];
    for (let cyc = 0; cyc < 6; cyc += 1) {
      const C = await page.evaluate(() => ZodiacStagePure.stats().cycleSeconds);
      await seekWait(C * (cyc + 1) + 4.0,
        idx => ZodiacStagePure.stats().state === 'hold' && ZodiacStagePure.stats().signIndex === idx,
        (cyc + 1) % 12);
      seen.push(await page.evaluate(() => ZodiacStagePure.stats().sign));
    }
    assert.ok(new Set(seen).size >= 5, '前 6 周期至少见到 5 座不同星座：' + seen.join(','));
    const C = await page.evaluate(() => ZodiacStagePure.stats().cycleSeconds);
    await seekWait(C * 12 + 4.0,
      () => ZodiacStagePure.stats().signIndex === 0 && ZodiacStagePure.stats().state === 'hold');
    pass('换座循环：粒子逐座汇聚，12 座后回到白羊（见到 ' + seen.join('/') + '）');

    // ---- 背景星云开关 ----
    await page.evaluate(() => Stage3D.configure({ zodiacField: false }));
    await page.waitForFunction(() => ZodiacStagePure.debug().prefs.field === false
      && ZodiacStagePure.stats().fieldVisible === false);
    const fieldOff = await page.evaluate(pageLum);
    await page.evaluate(() => Stage3D.configure({ zodiacField: true }));
    await page.waitForFunction(() => ZodiacStagePure.debug().prefs.field === true
      && ZodiacStagePure.stats().fieldVisible === true);
    const fieldOn = await page.evaluate(pageLum);
    assert.ok(fieldOn >= fieldOff, '星云开启时总亮度不应低于关闭');
    pass('背景星云开关：zodiacField 写回引擎且可见性翻转');

    // ---- 音频反应：低频包络随频谱联动 ----
    await page.evaluate(() => { Stage.spectrum = () => null; });
    await page.waitForFunction(() => ZodiacStagePure.debug().bass < 0.05, undefined, { timeout: 15000 });
    await page.evaluate(() => { Stage.spectrum = () => new Array(64).fill(0.9); });
    await page.waitForFunction(() => ZodiacStagePure.debug().bass > 0.5, undefined, { timeout: 15000 });
    pass('音频反应生效：低频包络随频谱涨落');
    await page.evaluate(() => { Stage.spectrum = () => new Array(64).fill(0.05); });

    // ---- 交互：滚轮推拉、双击复位、拖拽环绕 ----
    const box = await page.locator('#s3d-zodiac .zodiac-canvas').boundingBox();
    const cx = box.x + box.width / 2, cy = box.y + box.height / 2;
    const dist0 = await page.evaluate(() => ZodiacStagePure.debug().dist);
    await page.mouse.move(cx, cy);
    await page.mouse.wheel(0, 360);
    await page.waitForFunction(d0 => Math.abs(ZodiacStagePure.debug().dist - d0) > 0.5, dist0, { timeout: 5000 });
    const distZoomed = await page.evaluate(() => ZodiacStagePure.debug().dist);
    assert.ok(distZoomed > dist0, '滚轮下滚应拉远：' + dist0.toFixed(2) + ' → ' + distZoomed.toFixed(2));
    await page.mouse.dblclick(cx, cy);
    // 机位距离是按舞台宽高比算出来的（不是常数），复位判据要用引擎自己报的默认值。
    await page.waitForFunction(() => {
      const d = ZodiacStagePure.debug();
      return Math.abs(d.zoom - 1) < 0.001 && Math.abs(d.dist - d.distDefault) < 0.01;
    });
    pass('交互缩放/复位：滚轮推拉距离改变，双击回到默认机位');

    const yaw0 = await page.evaluate(() => ZodiacStagePure.debug().yaw);
    await page.mouse.move(cx, cy);
    await page.mouse.down();
    await page.mouse.move(cx - 220, cy + 40, { steps: 8 });
    await page.mouse.up();
    const yaw1 = await page.evaluate(() => ZodiacStagePure.debug().yaw);
    assert.ok(Math.abs(yaw1 - yaw0) > 0.2, '拖拽应改变视角偏航：' + yaw0.toFixed(2) + ' → ' + yaw1.toFixed(2));
    pass('交互旋转：拖拽环绕改变偏航/俯仰');

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

    // ---- 设置面板：星座专属项可见、开关写回、下拉同步 ----
    await wakeChrome();
    await page.hover('#s3d-head-trigger');
    await page.click('#s3d-settings-toggle');
    await page.waitForFunction(() => !document.getElementById('s3d-settings').hidden);
    assert.equal(await page.evaluate(() => document.getElementById('s3d-zodiac-tuning').hidden), false,
      'zodiac 激活时显示星云/交互设置');
    await page.evaluate(() => {
      const box = document.getElementById('s3d-zodiac-field');
      box.checked = false;
      box.dispatchEvent(new Event('change', { bubbles: true }));
    });
    assert.equal(await page.evaluate(() => Stage3D.preferences().zodiacField), false, '星云开关应写回偏好表');
    await page.waitForFunction(() => ZodiacStagePure.debug().prefs.field === false
      && ZodiacStagePure.stats().fieldVisible === false);
    assert.equal(await page.evaluate(() => document.getElementById('s3d-scene-source').value), 'zodiac');
    await page.evaluate(() => {
      const box = document.getElementById('s3d-zodiac-field');
      box.checked = true;
      box.dispatchEvent(new Event('change', { bubbles: true }));
    });
    await page.waitForFunction(() => ZodiacStagePure.debug().prefs.field === true);
    await page.evaluate(() => document.getElementById('s3d-settings-close').click());
    pass('设置面板：zodiac 专属项可见、开关持久化且即时生效、下拉同步');

    // ---- 泄漏浸泡：暂停冻结，驻留计数恒定 ----
    await page.evaluate(() => window.__freeze());
    await page.waitForTimeout(2500);
    const statsBefore = await page.evaluate(() => ZodiacStagePure.stats());
    await page.waitForTimeout(6000);
    const statsAfter = await page.evaluate(() => ZodiacStagePure.stats());
    assert.equal(statsAfter.geometries, statsBefore.geometries, '冻结时几何驻留数必须恒定');
    assert.equal(statsAfter.textures, statsBefore.textures, '冻结时纹理驻留数必须恒定');
    assert.equal(statsAfter.particleCount, statsBefore.particleCount, '冻结时粒子规模必须恒定');
    assert.equal(statsAfter.signIndex, statsBefore.signIndex, '冻结时星座不应轮换');
    pass('冻结浸泡无泄漏：geometries=' + statsAfter.geometries + ' particles=' + statsAfter.particleCount);

    // ---- 降档：单 canvas、粒子与星云点数都减少 ----
    await page.evaluate(() => document.dispatchEvent(new CustomEvent('stage:fps', { detail: { lowfx: true } })));
    await page.waitForFunction(() => ZodiacStagePure.stats().quality === 'low');
    assert.equal(await page.locator('#s3d-zodiac .zodiac-canvas').count(), 1,
      '降档重建不能遗留失去上下文的 canvas');
    assert.ok((await page.evaluate(() => ZodiacStagePure.stats().particleCount)) < built.particleCount,
      '低档应降低造型粒子数');
    assert.ok((await page.evaluate(() => ZodiacStagePure.stats().fieldPoints)) < built.fieldPoints,
      '低档应降低星云粒子数');
    pass('自动降档：单 canvas、粒子规模下降');

    // ---- 回到沉浸声场：画布卸载、GL 资源释放 ----
    await wakeChrome();
    await page.hover('#s3d-head-trigger');
    await page.click('#s3d-settings-toggle');
    await page.waitForFunction(() => !document.getElementById('s3d-settings').hidden);
    await page.selectOption('#s3d-scene-source', 'immersive');
    await page.waitForFunction(() => Stage3D.preferences().sceneSource === 'immersive');
    await page.waitForFunction(() => ZodiacStagePure.stats() === null);
    assert.equal(await page.evaluate(() => document.getElementById('s3d-zodiac').hidden), true);
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
