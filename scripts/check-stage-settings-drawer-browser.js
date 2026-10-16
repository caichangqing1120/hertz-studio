'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const { uiUrl, uiToken } = require('./ui-token');
const root = path.resolve(__dirname, '..');
const base = process.env.PLAYER_UI_URL || 'http://127.0.0.1:18796';
let checks = 0;
function check(value, label) { assert.ok(value, label); checks++; console.log('PASS ' + label); }

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true,
    args: ['--disable-features=LocalNetworkAccessChecks,LocalNetworkAccessChecksWebSockets'] });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    if (process.env.PLAYER_SOURCE_ASSETS === '1') await page.route('**/*', async route => {
      const url = new URL(route.request().url());
      if (url.pathname === '/') {
        const response = await route.fetch();
        return route.fulfill({ response, contentType: 'text/html', body: fs.readFileSync(path.join(root, 'plugin/ui/index.html'), 'utf8').replaceAll('__VMUSIC_TOKEN_VALUE__', uiToken()) });
      }
      const file = path.join(root, 'plugin/ui', decodeURIComponent(url.pathname));
      if (!url.pathname.startsWith('/v1/') && fs.existsSync(file) && fs.statSync(file).isFile()) return route.fulfill({ path: file });
      return route.continue();
    });
    await page.goto(uiUrl(base));
    await page.waitForFunction(() => window.Stage3D && window.Space3D && document.getElementById('conn').textContent === '\u670d\u52a1\u5df2\u8fde\u63a5');
    await page.evaluate(() => Stage3D.open('aurora'));
    await page.mouse.move(720, 450);
    check(await page.locator('.s3d-head button').count() === 1, 'top right contains only close');
    check(await page.locator('#s3d-head-trigger').count() === 0, 'old hover toolbar removed');
    const trigger = page.locator('#s3d-settings-toggle'), panel = page.locator('#s3d-settings');
    check(await trigger.evaluate(el => el.classList.contains('sp-fab')), 'settings uses the shared floating gear');
    const styles = el => {
      const s = getComputedStyle(el), r = el.getBoundingClientRect();
      return { width: r.width, height: r.height, top: r.top, right: innerWidth - r.right, radius: s.borderRadius, padding: s.padding, background: s.backgroundColor };
    };
    await trigger.click();
    await page.waitForFunction(() => document.getElementById('s3d-settings').getAnimations().every(a => a.playState === 'finished'));
    check(await trigger.getAttribute('aria-expanded') === 'true' && await panel.isVisible(), 'one click opens settings');
    const stageStyles = await panel.evaluate(styles);
    check(stageStyles.top === 0 && stageStyles.height === 900 && stageStyles.right < 1, 'settings spans the right edge');
    check(await panel.locator('#s3d-lyrics-toggle').isVisible(), 'lyrics control lives in settings');
    const lyrics = panel.locator('#s3d-lyrics-toggle');
    await lyrics.uncheck();
    check(await page.evaluate(() => !Stage3D.preferences().lyrics), 'lyrics checkbox updates the preference');
    await page.locator('#s3d-settings-close').focus();
    await page.keyboard.press('l');
    check(await lyrics.isChecked(), 'L shortcut updates the checkbox');
    await page.locator('#s3d-motion').fill('40');
    await page.locator('#s3d-motion').dispatchEvent('change');
    check(await page.evaluate(() => Stage3D.preferences().motion === .4), 'motion slider remains functional');
    check(await panel.locator('#s3d-reset').count() === 1 && await panel.locator('#s3d-fs').count() === 1, 'camera and fullscreen actions live in settings');
    await panel.locator('#s3d-fs').click();
    await page.waitForFunction(() => document.fullscreenElement?.id === 'stage3d');
    check(await panel.locator('#s3d-fs').getAttribute('aria-pressed') === 'true', 'fullscreen action works inside the drawer');
    await panel.locator('#s3d-fs').click();
    await page.waitForFunction(() => !document.fullscreenElement);
    check(await panel.locator('#s3d-fs').getAttribute('aria-pressed') === 'false', 'fullscreen action exits without closing settings');
    await page.keyboard.press('Escape');
    check(await page.evaluate(() => Stage3D.isActive()) && await trigger.getAttribute('aria-expanded') === 'false', 'Escape closes drawer before leaving stage');
    check(await trigger.evaluate(el => el === document.activeElement), 'closing returns focus to gear');
    await trigger.click();
    await page.locator('#s3d-settings-close').click();
    check(await trigger.getAttribute('aria-expanded') === 'false', 'close button updates drawer state');
    await page.evaluate(() => { Stage3D.close(); Space3D.open(); });
    await page.locator('#sp-fab').click();
    await page.waitForFunction(() => document.getElementById('sp-sheet').getAnimations().every(a => a.playState === 'finished'));
    const spaceStyles = await page.locator('#sp-sheet').evaluate(styles);
    assert.deepEqual(stageStyles, spaceStyles, 'both modes share the same drawer geometry and material'); checks++;
    await page.evaluate(() => { Space3D.close(); Stage3D.open('aurora'); });
    const out = path.join(root, 'output/playwright/stage-settings-drawer'); fs.mkdirSync(out, { recursive: true });
    for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }, { width: 844, height: 390 }]) {
      await page.setViewportSize(viewport);
      await page.mouse.move(viewport.width / 2, viewport.height / 2);
      await page.screenshot({ path: path.join(out, viewport.width + '-closed.png'), animations: 'disabled' });
      check(await trigger.evaluate(el => {
        const r = el.getBoundingClientRect();
        const player = document.getElementById('s3d-player').getBoundingClientRect();
        return r.left >= 0 && r.right <= innerWidth && r.top >= 0 && r.bottom <= innerHeight &&
          (r.right <= player.left || r.left >= player.right || r.bottom <= player.top || r.top >= player.bottom);
      }), viewport.width + ' floating gear clears playback bar');
      await trigger.click();
      await page.waitForFunction(() => document.getElementById('s3d-settings').getAnimations().every(a => a.playState === 'finished'));
      check(await panel.evaluate(el => el.scrollHeight > el.clientHeight && el.scrollWidth <= el.clientWidth + 1), viewport.width + ' drawer scrolls vertically without horizontal overflow');
      await page.screenshot({ path: path.join(out, viewport.width + '-open.png'), animations: 'disabled' });
      await page.locator('#s3d-settings-close').click();
    }
    await trigger.click();
    await page.evaluate(() => Stage3D.close());
    await page.evaluate(() => Stage3D.open('aurora'));
    check(await trigger.getAttribute('aria-expanded') === 'false', 'reopening starts with drawer closed');
    check(errors.length === 0, 'no browser errors: ' + errors.join('; '));
    console.log(checks + ' drawer checks passed');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
