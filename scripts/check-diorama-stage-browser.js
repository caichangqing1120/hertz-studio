// SPDX-License-Identifier: MIT
// 「镜台 · 末班车」舞台的浏览器冒烟：真实 WebGL 像素 + 歌词接线（桩歌词数据、
// 真实 字素→曲式→引擎 管线）+ 站牌/星幕载体 + 反射开关 + 音频反应 + 泄漏浸泡。
// 对 null 后端 fixture 跑完整页面；歌词源/时钟/频谱打桩（海岸舞台同款手法），
// 适配层到引擎之间的一切走生产代码。
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const { startFixture } = require('./ui-browser-fixture');
const { uiUrl } = require('./ui-token');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'output/playwright/diorama-stage');
const report = { checks: [], errors: [] };
const pass = name => { report.checks.push(name); console.log('PASS ' + name); };
const sum = arr => arr[0] + arr[1] + arr[2];

// 桩歌词：主歌（各句不同）/ 副歌（同句重复，与下一次出现隔 ≥4 行）/ 主歌 / 副歌。
// 段间 4.6s 留白让曲式切段；经真实 StanzaSongForm 判定为 verse/chorus/verse/chorus
// —— 副歌段升星幕，主歌段立站牌（Node 侧已验证该分类）。
const LINES = [];
{
  let t = 2.0;
  const blocks = [
    ['夜行的列车不再停靠', '铁轨把月光缝进水声', '枕木数着心跳往前赶'],
    ['星光在水面上涨潮', '星光在水面上涨潮', '星光在水面上涨潮'],
    ['车灯劈开雾里的站名', '风把地名念了一遍', '终点还睡在地平线'],
    ['星光在水面上涨潮', '星光在水面上涨潮', '星光在水面上涨潮'],
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
      t = end + 0.8;
    }
    t += 0.4;
  }
}
const CHORUS_START_MS = LINES[3].start_ms;
const VERSE_START_MS = LINES[0].start_ms;

async function main() {
  fs.mkdirSync(output, { recursive: true });
  const fixture = await startFixture();
  process.env.VMUSIC_DATA_DIR = fixture.dataDir;
  const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL || 'chrome', headless: process.env.DIORAMA_HEADED !== '1' });
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
    await page.waitForFunction(() => window.Stage3D && window.Stage && window.StageDiorama
      && window.DioramaStagePure && document.getElementById('conn').textContent === '服务已连接');
    pass('页面加载：Stage3D / StageDiorama / DioramaStagePure 就绪');

    assert.equal(await page.evaluate(() => StageDiorama.available()), true, 'WebGL2 探测应可用');
    pass('StageDiorama.available() === true');

    // ---- 桩：歌词源 / 字素时钟 / 播放时钟 / 频谱（先于挂载喂入） ----
    await page.evaluate(([lines, chorusMs]) => {
      const state = { baseMs: 0, t0: Date.now(), frozenMs: null };
      window.__dioramaCheck = state;
      window.__dioramaLines = lines;
      const original = Stage.presentation.bind(Stage);
      Stage.lyrics = () => ({ lines, index: 0 });
      Stage.lyricTokens = line => (line && line.__toks) || [];
      Stage.lyricTranslation = i => (i === 1 ? 'the night train rolls on' : '');
      Stage.presentation = () => ({ ...original(),
        track: { id: 'diorama-fixture', title: 'Diorama browser fixture', artist: 'Check' },
        position: state.frozenMs != null ? state.frozenMs : state.baseMs + (Date.now() - state.t0),
        duration: 60000, playing: state.frozenMs == null, cover: null });
      Stage.spectrum = () => new Array(64).fill(0.05);
      window.__seek = ms => { state.baseMs = ms; state.t0 = Date.now(); state.frozenMs = null; };
      window.__freeze = () => { state.frozenMs = state.baseMs + (Date.now() - state.t0); };
      window.__chorusMs = chorusMs;
    }, [LINES, CHORUS_START_MS]);
    pass('歌词/时钟/频谱桩就位（管线走生产代码）');

    // ---- 打开大舞台并切到镜台 ----
    await page.evaluate(() => {
      Stage3D.configure({ motion: 1, cruise: true, shelfMode: 'off', stanzaVisual: 'stage', stanzaBg: 'stage', lyrics: true });
      Stage3D.open();
    });
    await page.waitForFunction(() => Stage3D.isActive());
    await page.evaluate(() => Stage3D.configure({ sceneSource: 'diorama' }));
    await page.waitForFunction(() => Stage3D.preferences().sceneSource === 'diorama');
    await page.waitForFunction(() => {
      const host = document.getElementById('s3d-diorama');
      return host && !host.hidden && host.querySelector('.diorama-canvas');
    });
    await page.waitForFunction(() => DioramaStagePure.stats() !== null && StageDiorama.degradedBecause() === null);
    assert.equal(await page.evaluate(() => document.getElementById('s3d-diorama-toggle').getAttribute('aria-pressed')), 'true');
    pass('镜台入画：sceneSource=diorama、画布挂载、入口牌按下态');

    // ---- 歌词编制真实到达引擎（字素 → 曲式 → 时间线） ----
    await page.waitForFunction(() => {
      const d = DioramaStagePure.debug();
      return d && d.timeline.valid && d.timeline.phrases === 12 && d.timeline.signs >= 2;
    }, undefined, { timeout: 15000 });
    const timeline = await page.evaluate(() => DioramaStagePure.debug().timeline);
    assert.ok(timeline.paragraphs >= 3, '段间留白应切出多段落：' + JSON.stringify(timeline));
    pass('歌词编制到达引擎：12 句 / ' + timeline.signs + ' 牌 / ' + timeline.paragraphs + ' 段落');

    // ---- 场景内容对齐：站台建筑群（月台/阶梯两类）+ 流星系统在场景里 ----
    const sceneStats = await page.evaluate(() => DioramaStagePure.stats());
    assert.ok(sceneStats.stations >= 10, '沿线站台建筑群应成规模：stations=' + sceneStats.stations);
    pass('场景对齐：' + sceneStats.stations + ' 座站台建筑、地平线剪影与流星系统在场景内');

    // ---- 纵深分层在场景里：雾 / 前景草丛 / 灯晕 / 浮尘 / 散焦光斑 / 体积光 ----
    // 任何一层悄悄掉线（着色器编译失败、材质参数被改、低档误关）都在这里红。
    const layers = sceneStats.layers || {};
    assert.ok(layers.foliage >= 1100, '前景草丛应在场景里：foliage=' + layers.foliage);
    assert.ok(layers.glow >= 40, '站台/信号机灯晕与地平线低雾应在场：glow=' + layers.glow);
    assert.ok(layers.motes >= 170, '浮尘粒子应在场：motes=' + layers.motes);
    assert.ok(layers.bokeh === true, '近景散焦光斑应在场（high 档）');
    assert.ok(layers.shaft === true && layers.shade === true, '体积光锥与接触阴影应在场');
    assert.ok(layers.fog > 0.0004 && layers.fog < 0.0016, '大气雾密度应在有效区间：fog=' + layers.fog);
    pass('纵深分层齐全：草丛 ' + layers.foliage + ' / 灯晕 ' + layers.glow
      + ' / 浮尘 ' + layers.motes + ' / 散焦+体积光+接触阴影+大气雾 在场');

    // ---- 站牌在唱：seek 到主歌中段，页构建、入画、可读 ----
    await page.evaluate(ms => window.__seek(ms), VERSE_START_MS + 600);
    await page.waitForFunction(() => {
      const r = DioramaStagePure.debug().reading;
      return r && r.mounted && r.pageBuilt && r.onScreen;
    }, undefined, { timeout: 15000 });
    assert.equal(await page.evaluate(() => DioramaStagePure.debug().reading.carrier), 'sign');
    pass('站牌载体：页已构建、当前句投影在画面内');

    // ---- 构图：非全黑 + 天/地分区差异 ----
    // 「上（星空）vs 下（水面）」在基线上就不稳：注视站牌的机位周期里，月亮
    // 入画 / 道床占底部行的比例变化，单帧行和差实测在 -29..+1 之间摆。
    // 稳定且同样表达「画面有纵向结构」的量是中段（地平线光带 + 雾 + 水面
    // 倒影）对顶段（暗星空）的差 —— 实测 190..360，画面平坦才会归零。
    // 取 5 帧中位数：构图是「一段时间里的样子」，不是某一帧。
    await page.waitForFunction(() => {
      const c = DioramaStagePure.capture();
      return c && c.top.some(v => v > 8);
    }, undefined, { timeout: 30000 });
    const compDiff = await page.evaluate(async () => {
      const sum = a => a[0] + a[1] + a[2];
      const rows = [];
      for (let i = 0; i < 5; i += 1) {
        const c = DioramaStagePure.capture();
        rows.push(sum(c.middle) - sum(c.top));
        await new Promise(r => setTimeout(r, 240));
      }
      rows.sort((a, b) => a - b);
      return rows[2];
    });
    const frame = await page.evaluate(() => DioramaStagePure.capture());
    assert.ok(Math.max(...frame.top) > 8, '画面不应全黑');
    assert.ok(compDiff > 60,
      '中段（地平线/水面）应对顶段（星空）有明显亮度差：median diff=' + compDiff);
    pass('构图合理：非全黑、天/地分区亮度差异明显（中位数 ' + compDiff + '）');

    // ---- 歌词开关：冻结时钟再比像素 ----
    // 世界在动的时候，前后两帧的差异混入了掠过的灯晕/浮尘；冻结后画面静止，
    // 差异只可能来自歌词本身。取三行的最大差，避免站牌恰好不在中段行上。
    // seek 要落在「牌还在前方视距里」的窗口（t≈2.6s，rel≈0.44）：再晚牌就
    // 甩到相机身后，画面里本来就没有歌词，差值恒为 0。
    await page.evaluate(ms => window.__seek(ms), VERSE_START_MS + 450);
    await page.waitForTimeout(120);
    await page.evaluate(() => window.__freeze());
    await page.waitForTimeout(2000); // 等包络落到静息，前后帧才可比
    const withLyrics = await page.evaluate(() => DioramaStagePure.capture());
    await page.evaluate(() => Stage3D.configure({ lyrics: false }));
    await page.waitForFunction(() => {
      const s = DioramaStagePure.stats();
      return s && s.signs === 0 && s.sky === 0;
    }, undefined, { timeout: 15000 });
    await page.waitForTimeout(600);
    const withoutLyrics = await page.evaluate(() => DioramaStagePure.capture());
    const lyricDiff = Math.max(
      Math.abs(sum(withLyrics.top) - sum(withoutLyrics.top)),
      Math.abs(sum(withLyrics.middle) - sum(withoutLyrics.middle)),
      Math.abs(sum(withLyrics.bottom) - sum(withoutLyrics.bottom)));
    assert.ok(lyricDiff > 4, '关歌词后画面应有可见变化：diff=' + lyricDiff);
    await page.evaluate(() => Stage3D.configure({ lyrics: true }));
    await page.evaluate(ms => window.__seek(ms), VERSE_START_MS + 600);
    pass('歌词开关：在场歌词随「显示歌词」整体退场/回归（冻结差 ' + lyricDiff + '）');

    // ---- 星幕载体：seek 到副歌，句升空 ----
    await page.evaluate(ms => window.__seek(ms), CHORUS_START_MS + 400);
    await page.waitForFunction(() => {
      const s = DioramaStagePure.stats();
      const r = DioramaStagePure.debug().reading;
      return s && s.sky >= 1 && r && r.carrier === 'constellation' && r.pageBuilt;
    }, undefined, { timeout: 15000 });
    pass('星幕载体：副歌句升空、倒影随水面渲染');

    // ---- 水面反射开关：冻结时钟再比像素（同理，隔离世界的运动） ----
    await page.evaluate(ms => window.__seek(ms), VERSE_START_MS + 450);
    await page.waitForTimeout(120);
    await page.evaluate(() => window.__freeze());
    await page.waitForTimeout(1500);
    const reflOn = await page.evaluate(() => DioramaStagePure.capture());
    await page.evaluate(() => Stage3D.configure({ dioramaReflection: false }));
    await page.waitForFunction(() => DioramaStagePure.stats().reflection === false);
    await page.waitForTimeout(600);
    const reflOff = await page.evaluate(() => DioramaStagePure.capture());
    const reflDiff = Math.max(
      Math.abs(sum(reflOn.bottom) - sum(reflOff.bottom)),
      Math.abs(sum(reflOn.middle) - sum(reflOff.middle)));
    assert.ok(reflDiff > 4,
      '关闭镜面反射应可见地改变水面：diff=' + reflDiff);
    await page.evaluate(() => Stage3D.configure({ dioramaReflection: true }));
    await page.evaluate(ms => window.__seek(ms), VERSE_START_MS + 600);
    pass('水面镜反射：开关有真实的像素差异（冻结差 ' + reflDiff + '）');

    // ---- 音频反应：从集成点注入（桩掉 Stage.spectrum 的电平） ----
    await page.evaluate(() => { Stage.spectrum = () => null; });
    await page.waitForFunction(() => Math.max(...DioramaStagePure.debug().bins) < 0.05);
    const quiet = await page.evaluate(() => DioramaStagePure.capture());
    await page.evaluate(() => { Stage.spectrum = () => new Array(64).fill(0.9); });
    await page.waitForFunction(() => Math.max(...DioramaStagePure.debug().bins) > 0.8);
    const loud = await page.evaluate(() => DioramaStagePure.capture());
    const drift = Math.abs(sum(loud.middle) - sum(quiet.middle)) + Math.abs(sum(loud.bottom) - sum(quiet.bottom));
    assert.ok(drift > 2, '高电平应可见地改变画面（频带曲线/涟漪/点亮）：drift=' + drift.toFixed(1));
    pass('音频反应生效：频谱驱动画面差异');
    await page.evaluate(() => { Stage.spectrum = () => new Array(64).fill(0.05); });

    // ---- 设置面板：镜台专属项可见、载体写回偏好、下拉同步 ----
    await wakeChrome();
    await page.hover('#s3d-head-trigger');
    await page.click('#s3d-settings-toggle');
    await page.waitForFunction(() => !document.getElementById('s3d-settings').hidden);
    assert.equal(await page.evaluate(() => document.getElementById('s3d-diorama-tuning').hidden), false,
      'diorama 激活时显示载体/反射设置');
    await page.evaluate(() => {
      const sel = document.getElementById('s3d-diorama-carrier');
      sel.value = 'sign';
      sel.dispatchEvent(new Event('change', { bubbles: true }));
    });
    assert.equal(await page.evaluate(() => Stage3D.preferences().dioramaCarrier), 'sign',
      '载体下拉应写回偏好表');
    assert.equal(await page.evaluate(() => document.getElementById('s3d-scene-source').value), 'diorama',
      '背景源下拉与当前源同步');
    // 载体强制=sign：副歌时刻也不再升空，改立站牌
    await page.evaluate(ms => window.__seek(ms), CHORUS_START_MS + 400);
    await page.waitForFunction(() => {
      const r = DioramaStagePure.debug().reading;
      return r && r.carrier === 'sign' && r.pageBuilt;
    }, undefined, { timeout: 15000 });
    await page.evaluate(() => {
      const sel = document.getElementById('s3d-diorama-carrier');
      sel.value = 'auto';
      sel.dispatchEvent(new Event('change', { bubbles: true }));
    });
    await page.evaluate(() => document.getElementById('s3d-settings-close').click());
    pass('设置面板：diorama 专属项可见、载体持久化且即时重编、下拉同步');

    // ---- 泄漏浸泡：暂停冻结在站牌时刻（窗口静止），计数必须恒定 ----
    await page.evaluate(ms => window.__seek(ms), VERSE_START_MS + 600);
    await page.waitForFunction(() => {
      const r = DioramaStagePure.debug().reading;
      return r && r.pageBuilt;
    }, undefined, { timeout: 15000 });
    await page.evaluate(() => window.__freeze());
    await page.waitForTimeout(2500);
    const statsBefore = await page.evaluate(() => DioramaStagePure.stats());
    await page.waitForTimeout(6000);
    const statsAfter = await page.evaluate(() => DioramaStagePure.stats());
    assert.equal(statsAfter.geometries, statsBefore.geometries, '冻结时几何驻留数必须恒定');
    assert.equal(statsAfter.textures, statsBefore.textures, '冻结时纹理驻留数必须恒定');
    pass('冻结浸泡无泄漏：geometries=' + statsAfter.geometries + ' textures=' + statsAfter.textures);

    // ---- 回到沉浸声场：画布卸载、GL 资源释放、stanza 叠层回归 ----
    await wakeChrome();
    await page.hover('#s3d-head-trigger');
    await page.click('#s3d-diorama-toggle');
    await page.waitForFunction(() => Stage3D.preferences().sceneSource === 'immersive');
    await page.waitForFunction(() => DioramaStagePure.stats() === null);
    assert.equal(await page.evaluate(() => document.getElementById('s3d-diorama').hidden), true);
    assert.equal(await page.evaluate(() => document.getElementById('s3d-diorama-toggle').getAttribute('aria-pressed')), 'false');
    pass('回到沉浸声场：镜台画布卸载、上下文释放');

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
  console.log('Diorama browser checks passed: ' + report.checks.length);
}

main().catch(error => { console.error(error.message); process.exitCode = 1; });
