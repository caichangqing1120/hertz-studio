#!/usr/bin/env node
// SPDX-License-Identifier: MIT
// 顶栏三个弹层（主题色 / 界面皮肤 / 更多工具）互斥：开一个，其余收起。
//
// 为什么必须真开一遍：三个按钮的 onclick 都 stopPropagation，彼此那套
// 「点外部就关」的 document 监听收不到对方的按钮点击——纯 DOM 结构检查
// 看不出这种时序问题，用户实际看到的是两个面板叠着开（主题色菜单盖在
// 界面皮肤菜单上）。互斥由 topbar:popup 广播约定实现，app.js 与
// skins/skins.js 各自监听并发出同一条事件。
//
// 判定口径：
//   ① 点皮肤按钮时，主题色菜单必须已经收起（本次报的 bug）
//   ② 反向同理：点主题色按钮时皮肤菜单收起；点更多工具时两个都收起
//   ③ 互斥不能破坏原有开合：按钮再点一下照常关、Escape 照常关、
//      点外部照常关
//   ④ 页面无运行时错误
'use strict';
const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const { startFixture } = require('./ui-browser-fixture');

(async () => {
  const fixture = await startFixture();
  let browser;
  try {
    await fixture.seed();
    browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL || 'chrome', headless: true });
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    await fixture.connect(ctx);
    const page = await ctx.newPage();
    page.setDefaultTimeout(20000);
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));

    await page.goto(fixture.base, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('.topbar');
    await page.waitForTimeout(300);

    const visible = sel => page.locator(sel).isVisible();

    // ① 开着主题色去点皮肤按钮：主题色必须先收（修复前两个叠着开）。
    await page.click('#theme-btn');
    assert.ok(await visible('#theme-menu'), '主题色菜单能打开');
    await page.click('#skin-btn');
    assert.ok(await visible('#skin-menu'), '皮肤菜单能打开');
    assert.equal(await visible('#theme-menu'), false, '开皮肤菜单时主题色菜单必须收起');

    // ② 更多工具对另外两个也一样；反向（皮肤开着点主题色）再验一遍。
    await page.click('#top-more-btn');
    assert.ok(await visible('#top-more-menu'), '更多工具菜单能打开');
    assert.equal(await visible('#skin-menu'), false, '开更多工具时皮肤菜单必须收起');
    assert.equal(await visible('#theme-menu'), false, '开更多工具时主题色菜单必须收起');
    await page.click('#skin-btn');
    assert.ok(await visible('#skin-menu'), '皮肤菜单反向能打开');
    assert.equal(await visible('#top-more-menu'), false, '开皮肤菜单时更多工具必须收起');
    await page.click('#theme-btn');
    assert.ok(await visible('#theme-menu'), '主题色菜单反向能打开');
    assert.equal(await visible('#skin-menu'), false, '开主题色时皮肤菜单必须收起');

    // ③ 原有开合路径一个都不能被广播破坏。
    await page.click('#theme-btn'); // 再点一下照常关
    assert.equal(await visible('#theme-menu'), false, '按钮再点一下照常收起');
    await page.click('#theme-btn');
    await page.keyboard.press('Escape');
    assert.equal(await visible('#theme-menu'), false, 'Escape 照常收起主题色菜单');
    await page.click('#skin-btn');
    await page.mouse.click(400, 500); // 点外部照常收
    assert.equal(await visible('#skin-menu'), false, '点外部照常收起皮肤菜单');

    assert.equal(errors.length, 0, '页面无运行时错误：' + errors.join(' | '));
    console.log('check-topbar-popup-browser: all green');
  } finally {
    if (browser) await browser.close();
    await fixture.close();
  }
})().catch(e => { console.error(e); process.exit(1); });
