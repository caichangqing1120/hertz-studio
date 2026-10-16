// SPDX-License-Identifier: MIT
'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const { startFixture } = require('./ui-browser-fixture');

(async () => {
  const fixture = await startFixture();
  let browser;
  try {
    browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL || 'chrome', headless: true });
    const context = await browser.newContext();
    await fixture.connect(context);
    const token = (await context.cookies(fixture.base)).find(cookie => cookie.name === 'vmusic_session').value;
    const page = await context.newPage();
    const web = path.resolve(__dirname, '../plugin/ui');
    await page.route(fixture.base + '/**', route => {
      const url = new URL(route.request().url());
      const file = path.join(web, decodeURIComponent(url.pathname).replace(/^\//, '') || 'index.html');
      const type = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript' }[path.extname(file)];
      if (!type || !fs.existsSync(file)) return route.continue();
      return route.fulfill({ body: fs.readFileSync(file, 'utf8').replace('__VMUSIC_TOKEN_VALUE__', token), contentType: type });
    });
    await page.goto(fixture.base, { waitUntil: 'networkidle' });
    const output = path.resolve(__dirname, '../output/playwright/sheen-picker');
    fs.mkdirSync(output, { recursive: true });
    for (const width of [1240, 1440, 1241, 1200, 1024, 901, 900, 620, 390, 360]) {
      await page.setViewportSize({ width, height: 900 });
      await page.evaluate(() => Skins.apply('sheen'));
      const button = page.locator('#skin-btn');
      assert.ok(await button.isVisible(), width + ': skin picker is visible');
      const geometry = await button.evaluate(el => {
        const r = el.getBoundingClientRect();
        const hit = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2);
        const rail = document.querySelector('.rail').getBoundingClientRect();
        const tools = document.querySelector('.top-right').getBoundingClientRect();
        return { inside: r.left >= 0 && r.right <= innerWidth,
          clickable: el.contains(hit),
          overlap: rail.left < tools.right && rail.right > tools.left && rail.top < tools.bottom && rail.bottom > tools.top };
      });
      assert.ok(geometry.inside && geometry.clickable, width + ': skin picker is inside viewport and receives clicks');
      assert.ok(!geometry.overlap, width + ': navigation does not overlap topbar tools');
      await button.click();
      assert.equal(await button.getAttribute('aria-expanded'), 'true');
      assert.ok(await page.locator('#skin-menu').isVisible());
      await page.screenshot({ path: path.join(output, width + '.png') });
      await page.locator('#skin-menu .skin-option[data-skin-id="classic"]').click();
      assert.equal(await page.evaluate(() => Skins.currentId()), 'classic', width + ': menu switches skin');
      console.log('PASS sheen skin picker at ' + width + 'px');
    }
  } finally {
    if (browser) await browser.close();
    await fixture.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
