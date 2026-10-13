// SPDX-License-Identifier: MIT
// Browser acceptance for the animated-SVG stage source: mount through the real
// settings path, then verify the artwork, the mirror symmetry, live motion, the
// GL hand-off and the lyrics layer against computed styles (not source text).
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const { uiToken, uiUrl } = require('./ui-token');
const base = process.env.STAGE_ANIME_URL || 'http://127.0.0.1:18777';
const root = path.join(__dirname, '..');
const out = path.join(root, 'output/playwright/stage-anime-svg');

async function main() {
  const health = await fetch(base + '/v1/health').then(r => r.json());
  assert.equal(health.backend, 'null', 'Requires an isolated silent test instance');
  const token = uiToken();
  fs.mkdirSync(out, { recursive: true });
  // 前端走 include_str!：线上资源必须就是磁盘这一份，否则验到的是旧界面。
  for (const file of ['stage-anime-svg.js', 'stage-anime-svg.css', 'stage3d.js', 'stage-settings.js', 'creative-anime.js', 'creative-anime.css', 'index.html']) {
    if (file === 'index.html') continue; // 宿主会注入 token 与指纹，不能整份比。
    const served = await fetch(base + '/' + file).then(r => r.text());
    assert.equal(served.replace(/\r\n/g, '\n'), fs.readFileSync(path.join(root, 'plugin/ui', file), 'utf8').replace(/\r\n/g, '\n'),
      'stale embedded resource: ' + file);
  }
  let checks = 7;

  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 960 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  try {
    await page.goto(uiUrl(base));
    await page.waitForFunction(() => window.Stage3D && document.getElementById('conn').textContent === '服务已连接');
    // 隔离实例可能带着上一轮会话的持久化状态（镜像开着），先归一化到已知起点。
    await page.evaluate(() => {
      const sel = document.getElementById('s3d-scene-source');
      sel.value = 'immersive';
      sel.dispatchEvent(new Event('change', { bubbles: true }));
      const mirror = document.getElementById('s3d-anime-mirror');
      if (mirror) { mirror.checked = false; mirror.dispatchEvent(new Event('change', { bubbles: true })); }
    });
    await page.waitForFunction(() => document.getElementById('s3d-anime').childElementCount === 0);
    // 打开舞台并切到动画绘景（走与下拉框同一条 configure 路径）。
    await page.evaluate(() => { Stage3D.open('aurora'); Stage3D.configure({ sceneSource: 'anime-svg' }); });
    await page.waitForFunction(() => {
      const host = document.getElementById('s3d-anime');
      return host && !host.hidden && host.querySelector('svg');
    });

    const mounted = await page.evaluate(() => {
      const host = document.getElementById('s3d-anime');
      const svg = host.querySelector('svg');
      const canvas = document.querySelector('.s3d-canvas-wrap > .s3d-canvas');
      const reading = document.getElementById('s3d-reading');
      const tuning = document.getElementById('s3d-anime-tuning');
      const sceneSelect = document.getElementById('s3d-anime-scene');
      return {
        svgCount: host.querySelectorAll('svg').length,
        svgClass: svg.getAttribute('class'),
        viewBox: svg.getAttribute('viewBox'),
        preserve: svg.getAttribute('preserveAspectRatio'),
        rawIds: /id="cx-|url\(#cx-/.test(host.innerHTML),
        prefixed: /id="s3da/.test(host.innerHTML),
        motion: host.dataset.motion,
        sourceClass: !!document.querySelector('.s3d-anime-svg-source'),
        canvasVisibility: canvas ? getComputedStyle(canvas).visibility : 'missing',
        // 歌词在绘景之上：z-index 不低于宿主；持同时（aurora 场景规则把双方都压到 2）
        // 靠 DOM 顺序决胜 —— 宿主是 root 的第一个子节点，歌词层排在它后面。
        hostZ: getComputedStyle(host).zIndex,
        readingZ: reading ? getComputedStyle(reading).zIndex : 'missing',
        readingFollows: reading ? !!(host.compareDocumentPosition(reading) & Node.DOCUMENT_POSITION_FOLLOWING) : false,
        tuningHidden: tuning ? tuning.hidden : 'missing',
        sceneOptions: sceneSelect ? Array.from(sceneSelect.options).map(o => o.value) : [],
        audioVar: getComputedStyle(host).getPropertyValue('--s3d-anime-audio').trim(),
        animations: svg.getAnimations({ subtree: true }).length,
        running: svg.getAnimations({ subtree: true }).filter(a => a.playState === 'running').length
      };
    });
    assert.equal(mounted.svgCount, 1, 'one primary artwork layer is mounted');
    assert.ok(/celx/.test(mounted.svgClass), 'the artwork keeps its celx pause gate');
    assert.equal(mounted.viewBox, '0 0 640 400', 'the shared drawing space is kept');
    assert.equal(mounted.preserve, 'xMidYMid meet', 'the artwork shows the full frame, same as the card');
    assert.equal(mounted.rawIds, false, 'no raw cx- ids leak into the stage copy');
    assert.equal(mounted.prefixed, true, 'the stage copy owns its id prefix');
    assert.equal(mounted.motion, 'running', 'the motion gate is open');
    assert.equal(mounted.sourceClass, true, 'the root carries the source class');
    assert.equal(mounted.canvasVisibility, 'hidden', 'the GL canvas yields to the artwork');
    assert.ok(Number(mounted.readingZ) >= Number(mounted.hostZ) &&
      (Number(mounted.readingZ) > Number(mounted.hostZ) || mounted.readingFollows),
      'the lyrics layer paints above the artwork (z ' + mounted.hostZ + ' vs ' + mounted.readingZ + ')');
    assert.equal(mounted.tuningHidden, false, 'the tuning block shows for this source');
    assert.deepEqual(mounted.sceneOptions, ['anime-sky', 'anime-coast', 'anime-rail', 'anime-forest'],
      'the scene picker lists the registry artworks');
    assert.ok(/^\d/.test(mounted.audioVar), 'the audio variable is live: ' + JSON.stringify(mounted.audioVar));
    assert.ok(mounted.animations >= 5 && mounted.running === mounted.animations,
      'every CSS animation is running: ' + mounted.running + '/' + mounted.animations);
    checks += 14;

    // 画面真的在动：同一运动层隔窗取两次几何，必须不同。
    const moved = await page.evaluate(async () => {
      const layer = document.querySelector('#s3d-anime .cx-coast-wash');
      const first = layer.getBoundingClientRect().top;
      await new Promise(resolve => setTimeout(resolve, 700));
      return Math.abs(layer.getBoundingClientRect().top - first) > 0.5;
    });
    assert.equal(moved, true, 'the artwork actually animates over time');
    checks += 1;

    await page.screenshot({ path: path.join(out, 'coast.png') });

    // 换画：注册表里的另一幅作品。
    await page.evaluate(() => Stage3D.configure({ animeScene: 'anime-rail' }));
    await page.waitForFunction(() => /s3da[a-z]\d+-cx-rail-night/.test(document.getElementById('s3d-anime').innerHTML));
    checks += 1;
    await page.screenshot({ path: path.join(out, 'rail.png') });

    // 镜像对称：第二份拷贝 + 计算样式里的水平翻转。
    await page.evaluate(() => Stage3D.configure({ animeScene: 'anime-coast', animeMirror: true }));
    await page.waitForFunction(() => document.getElementById('s3d-anime').querySelectorAll('svg').length === 2);
    const mirror = await page.evaluate(() => {
      const host = document.getElementById('s3d-anime');
      const copies = host.querySelectorAll('svg');
      const second = copies[1];
      return {
        cls: second.getAttribute('class'),
        transform: getComputedStyle(second).transform,
        animations: second.getAnimations({ subtree: true }).length,
        sameArt: copies[0].innerHTML.replace(/s3da[a-z]\d+-/g, '').replace(' s3d-anime-mirror', '')
          === second.innerHTML.replace(/s3da[a-z]\d+-/g, '').replace(' s3d-anime-mirror', '')
      };
    });
    assert.ok(mirror.cls.includes('s3d-anime-mirror'), 'the second copy carries the mirror class');
    assert.equal(mirror.transform, 'matrix(-1, 0, 0, 1, 0, 0)', 'the copy is flipped about the stage centre');
    assert.ok(mirror.animations >= 5, 'the mirrored copy animates too');
    assert.equal(mirror.sameArt, true, 'both sides are literally the same artwork');
    checks += 4;
    await page.screenshot({ path: path.join(out, 'coast-mirror.png') });

    // 切回沉浸声场：宿主卸载、GL 复出、调参块收起。
    await page.evaluate(() => Stage3D.configure({ sceneSource: 'immersive' }));
    const restored = await page.evaluate(() => {
      const host = document.getElementById('s3d-anime');
      const canvas = document.querySelector('.s3d-canvas-wrap > .s3d-canvas');
      const fallback = document.getElementById('s3d-fallback');
      return {
        hidden: host.hidden,
        emptied: host.childElementCount === 0,
        canvasVisibility: canvas ? getComputedStyle(canvas).visibility : 'missing',
        tuningHidden: document.getElementById('s3d-anime-tuning').hidden,
        fallbackHidden: fallback ? fallback.hidden : true
      };
    });
    assert.equal(restored.hidden, true, 'the host hides when the source switches away');
    assert.equal(restored.emptied, true, 'unmount clears the artwork nodes');
    assert.notEqual(restored.canvasVisibility, 'hidden', 'the GL canvas comes back');
    assert.equal(restored.tuningHidden, true, 'the tuning block collapses');
    assert.equal(restored.fallbackHidden, true, 'no fallback banner was shown');
    checks += 5;

    // 偏好持久化：走真实用户路径（改下拉框/复选框并派发 change，句柄才含
    // savePreferences），重载后来源、作品与镜像都该回来。
    await page.evaluate(() => {
      const sel = document.getElementById('s3d-scene-source');
      sel.value = 'anime-svg';
      sel.dispatchEvent(new Event('change', { bubbles: true }));
      const mirror = document.getElementById('s3d-anime-mirror');
      mirror.checked = true;
      mirror.dispatchEvent(new Event('change', { bubbles: true }));
    });
    await page.waitForFunction(() => document.getElementById('s3d-anime').querySelectorAll('svg').length === 2);
    await page.reload();
    await page.waitForFunction(() => window.Stage3D && document.getElementById('conn').textContent === '服务已连接');
    // 恢复是异步的：conn 连通时设置 GET 可能还没回来，等偏好落地再断言。
    await page.waitForFunction(() => Stage3D.preferences().sceneSource === 'anime-svg', null, { timeout: 15000 });
    const persisted = await page.evaluate(() => {
      Stage3D.open('aurora');
      const p = Stage3D.preferences();
      return { source: p.sceneSource, scene: p.animeScene, mirror: p.animeMirror };
    });
    assert.equal(persisted.source, 'anime-svg', 'the source survives a reload');
    assert.equal(persisted.scene, 'anime-coast', 'the scene choice survives a reload');
    assert.equal(persisted.mirror, true, 'the mirror choice survives a reload');
    checks += 3;
  } finally {
    await browser.close();
  }
  assert.deepEqual(errors, [], 'no page errors: ' + errors.join(' | '));
  console.log('PASS ' + checks + ' animated-SVG stage browser checks (mount, motion, mirror, hand-off, persistence)');
}

main().catch(error => { console.error(error); process.exitCode = 1; });
