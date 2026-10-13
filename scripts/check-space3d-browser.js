#!/usr/bin/env node
// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
//
// 「三维空间」无头浏览器冒烟（docs/design/space3d-mode.md §10.3 的可执行子集）：
//   1. 内嵌资产新鲜度（space3d.js / space3d.css / space-camera.js 必须来自当前源码）；
//   2. X 键入口：开空间 → inert/焦点快照生效，Stage3D 保持关闭；
//   3. 默认来源＝海岸公路（迁移后首次进入），海岸画布真实挂载；
//   4. 互斥：V 进声场会关空间，X 回空间会关声场（§4 上下文归属）；
//   5. 相机活着：滚轮推拉改变 orbit 半径（SpaceCamera 位姿可观测）；
//   6. 效果网格：来源卡 + 8 个粒子场「待 3D 化」卡一一在列（§7 不静默少项）；
//   7. 歌词双层：StageLyrics 宿主在，切 stanza 视觉后 #sp-stanza 解封；
//   8. 切换 10 次：DOM 节点数与 addEventListener 计数不涨（§10.3 无泄漏）。
//
//   node scripts/check-space3d-browser.js
// 环境变量：SPACE_BASE（默认 http://127.0.0.1:18783）、VMUSIC_DATA_DIR（令牌）、
//           SPACE_OUT（产物目录）、PLAYWRIGHT_MODULE（playwright-core 绝对路径）。

'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const { uiUrl } = require('./ui-token');
const root = path.join(__dirname, '..');
const web = path.join(root, 'plugin', 'ui');
const base = process.env.SPACE_BASE || 'http://127.0.0.1:18783';
const output = process.env.SPACE_OUT || path.join(root, 'output', 'playwright', 'space3d');
const assets = ['space3d.js', 'space3d.css', 'space-camera.js'];
const normalize = text => text.replace(/\r\n/g, '\n').trim();

async function main() {
  for (const file of assets) {
    const response = await fetch(new URL(file, base), { signal: AbortSignal.timeout(10000) });
    assert.ok(response.ok, 'Cannot fetch ' + file);
    assert.equal(normalize(await response.text()), normalize(fs.readFileSync(path.join(web, file), 'utf8')),
      'Stale embedded asset: ' + file + ' —— 先重建二进制再跑（include_str! 内嵌）');
  }
  fs.mkdirSync(output, { recursive: true });

  const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL || 'chrome', headless: process.env.SPACE_HEADED !== '1' });
  const context = await browser.newContext({ viewport: { width: 1440, height: 960 } });
  const page = await context.newPage();
  const errors = [];
  let listenerCount = 0;
  const checks = [];
  const pass = label => { checks.push(label); console.log('PASS ' + label); };
  page.on('pageerror', error => errors.push(error.message));
  await context.addInitScript(() => {
    // 只统计长寿命节点（window/document）上的净监听器：每次开关重建的画布、
    // 效果卡会随节点回收，按 add 全量计数会把「节点回收」误判成泄漏。
    window.__spListeners = 0;
    const origAdd = EventTarget.prototype.addEventListener;
    const origRemove = EventTarget.prototype.removeEventListener;
    const mine = function () { return this === window || this === document; };
    EventTarget.prototype.addEventListener = function (...args) {
      if (mine.call(this)) window.__spListeners += 1;
      return origAdd.apply(this, args);
    };
    EventTarget.prototype.removeEventListener = function (...args) {
      if (mine.call(this)) window.__spListeners -= 1;
      return origRemove.apply(this, args);
    };
  });
  try {
    await page.route('**/v1/**', route => {
      if (['GET', 'HEAD'].includes(route.request().method())) return route.continue();
      // WS 票据放行（与 check-3d-browser 同一坑：一刀切 mock 会把 WS 钉在重连里）。
      if (route.request().url().includes('/v1/auth/ticket')) return route.continue();
      return route.fulfill({ status: 200, json: {} });
    });
    await page.goto(uiUrl(base), { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => !!(window.Space3D && window.Stage3D && window.Stage), null, { timeout: 30000 });

    // —— 2. X 键入口 —— //
    await page.keyboard.press('x');
    await page.waitForFunction(() => document.getElementById('space3d').classList.contains('sp-open'), null, { timeout: 10000 });
    pass('X 键开空间：#space3d.sp-open');
    const inertOthers = await page.evaluate(() =>
      Array.from(document.body.children).every(n =>
        n.id === 'space3d' || /^(SCRIPT|STYLE|SVG)$/.test(n.tagName) || n.inert === true));
    assert.ok(inertOthers, '开空间后 body 其余子节点全部 inert');
    pass('inert 快照生效');
    assert.equal(await page.evaluate(() => window.Stage3D.isActive()), false, '开空间时声场必须关闭');
    pass('互斥：空间开着时声场关闭');

    // —— 3. 默认来源＝海岸公路 —— //
    assert.equal(await page.evaluate(() => Space3D.sourceId()), 'coast', '首次进入默认来源必须是 coast');
    await page.waitForFunction(() => {
      const host = document.getElementById('sp-host-coast');
      return host && !host.hidden && host.querySelector('canvas.coast-canvas');
    }, null, { timeout: 20000 });
    pass('海岸公路默认出画面（coast-canvas 真实挂载）');

    // —— 5. 相机活着：滚轮推拉改半径 —— //
    await page.mouse.move(720, 500);
    const before = await page.evaluate(() => Space3D.stats().camera);
    for (let i = 0; i < 6; i++) await page.mouse.wheel(0, -120);
    await page.waitForTimeout(400);
    const after = await page.evaluate(() => Space3D.stats().camera);
    assert.ok(Math.abs(after.radius - before.radius) > 0.05, '滚轮后 radius 应变化（' + before.radius.toFixed(2) + ' → ' + after.radius.toFixed(2) + '）');
    pass('相机活着：滚轮推拉 radius ' + before.radius.toFixed(2) + '→' + after.radius.toFixed(2));

    // —— 6. 效果网格 —— //
    await page.mouse.move(720, 500); // 唤醒 chrome（打烊后点击会被画布拦截）
    await page.click('#sp-fx-toggle');
    await page.waitForFunction(() => document.getElementById('sp-fx').classList.contains('sp-show'), null, { timeout: 5000 });
    const grid = await page.evaluate(() => {
      const cards = Array.from(document.querySelectorAll('#sp-fx-grid .sp-card'));
      return {
        total: cards.length,
        wait: cards.filter(c => c.disabled && /待 3D 化/.test(c.textContent)).length,
        coast: cards.some(c => /海岸公路/.test(c.textContent) && !c.disabled),
        zodiac: cards.some(c => /星座/.test(c.textContent) && !c.disabled),
        creative: cards.some(c => /创意编排/.test(c.textContent) && !c.disabled),
      };
    });
    assert.equal(grid.coast && grid.zodiac && grid.creative, true, '三个可用来源卡在列');
    assert.equal(grid.wait, 8, '8 个粒子场以待 3D 化在列（实得 ' + grid.wait + '）');
    pass('效果网格：来源卡 + 8 张待 3D 化卡，不静默少项');
    await page.click('#sp-fx-toggle');

    // —— 7. 歌词双层 —— //
    assert.ok(await page.evaluate(() => !!document.querySelector('#sp-reading .sl-rail')), '歌词轨 StageLyrics 宿主在');
    await page.mouse.move(720, 500); // 唤醒 chrome
    await page.click('#sp-fab');     // 设置抽屉里才有歌词视觉下拉
    await page.waitForFunction(() => document.getElementById('sp-sheet').classList.contains('sp-show'), null, { timeout: 5000 });
    await page.selectOption('#sp-visual', 'classic');
    await page.waitForFunction(() => document.getElementById('sp-stanza').hidden === false, null, { timeout: 8000 });
    pass('歌词视觉切到流光：#sp-stanza 解封（stanza 新宿主二次实例化）');
    await page.selectOption('#sp-visual', 'stage');
    await page.waitForFunction(() => document.getElementById('sp-stanza').hidden === true, null, { timeout: 8000 });
    await page.click('#sp-sheet-close');   // 抽屉展开时盖住 FAB（z 7>6），关闭走抽屉自己的键
    await page.waitForFunction(() => !document.getElementById('sp-sheet').classList.contains('sp-show'), null, { timeout: 5000 });

    // —— 8. 切换 10 次无泄漏 —— //
    listenerCount = await page.evaluate(() => window.__spListeners);
    const domBefore = await page.evaluate(() => document.querySelectorAll('*').length);
    for (let i = 0; i < 10; i++) {
      await page.evaluate(() => { Space3D.toggle(); });
      await page.waitForTimeout(60);
      await page.evaluate(() => { Space3D.toggle(); });
      await page.waitForTimeout(60);
    }
    const domAfter = await page.evaluate(() => document.querySelectorAll('*').length);
    const listenersAfter = await page.evaluate(() => window.__spListeners);
    assert.ok(domAfter <= domBefore, '切换 10 次 DOM 节点数不得增长（' + domBefore + ' → ' + domAfter + '；回落是 stanza 实例的正常回收）');
    assert.ok(listenersAfter <= listenerCount + 3, '净在册监听器数不涨（' + listenerCount + ' → ' + listenersAfter + '；+3 容忍 selectOption 触发的控件换绑）');
    pass('切换 10 次：DOM 与监听器计数稳定');

    // —— 4. 互斥（反向）：V 进声场关空间 —— //
    await page.evaluate(() => { if (Space3D.isActive()) Space3D.toggle(); });   // 归零到关闭态
    await page.evaluate(() => { Space3D.toggle(); });   // 开
    await page.waitForFunction(() => document.getElementById('space3d').classList.contains('sp-open'), null, { timeout: 5000 });
    await page.keyboard.press('v');
    await page.waitForFunction(() => window.Stage3D.isActive() === true, null, { timeout: 10000 });
    await page.waitForFunction(() => window.Space3D.isActive() === false, null, { timeout: 10000 });
    pass('互斥反向：V 进声场自动关空间');
    // Esc 在声场里是两击语义（先退原生全屏再关层，无头 Chrome 会授予全屏）。
    for (let i = 0; i < 3 && await page.evaluate(() => window.Stage3D.isActive()); i++) {
      await page.keyboard.press('Escape');
      await page.waitForTimeout(400);
    }
    await page.waitForFunction(() => window.Stage3D.isActive() === false, null, { timeout: 10000 });

    // —— 退出还原 —— //
    const inertRestored = await page.evaluate(() =>
      Array.from(document.body.children).every(n => !n.inert || n.id === 'stage-ctl'));
    assert.ok(inertRestored, '关闭后 inert 快照逐项还原');
    pass('退出后 2D 页面完整可用（inert 还原）');

    if (errors.length) {
      console.error('\n页面错误：'); errors.forEach(e => console.error('  ' + e));
      process.exit(1);
    }
    console.log('\n三维空间冒烟：' + checks.length + ' 项全部通过');
  } catch (error) {
    try {
      await page.screenshot({ path: path.join(output, 'fail.png'), fullPage: false });
      console.error('失败截图：' + path.join(output, 'fail.png'));
    } catch (_) { /* ignore */ }
    if (errors.length) { console.error('页面错误：'); errors.forEach(e => console.error('  ' + e)); }
    console.error(error && error.message || error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

main();
