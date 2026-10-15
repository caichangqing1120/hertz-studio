#!/usr/bin/env node
// SPDX-License-Identifier: MIT
// Real DOM + shipped login module; all account/QR requests are local fixtures.
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, 'plugin/ui', file), 'utf8');
const html = read('index.html');
const from = html.indexOf('<div id="qr-modal"');
const to = html.indexOf('\n<!-- 播放控制弹窗', from);
assert.ok(from >= 0 && to > from, 'shipped login markup exists');

async function main() {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  try {
    for (const stage of ['sources', 'accounts', 'settings']) {
      for (const outcome of ['success', 'error', ...(stage === 'sources' ? ['empty'] : [])]) {
        const page = await browser.newPage({ viewport: { width: 900, height: 760 } });
        const errors = []; page.on('pageerror', e => errors.push(e.message));
        await page.setContent('<span id="online-account-face"></span><span id="online-account-dot"></span>' + html.slice(from, to));
        for (const file of ['style.css', 'online.css']) await page.addStyleTag({ content: read(file) });
        await page.evaluate(stage => {
          const list = { sources: ['netease', 'qq'].map(id => ({ id, label: id, caps: ['qr_login'] })) };
          let first = true;
          window.calls = [];
          window.VMusicTransport = {
            async get(url) {
              const matches = stage === 'sources' ? url.endsWith('/sources')
                : stage === 'accounts' ? url.includes('account?source=netease') : url.endsWith('/settings');
              if (first && matches) {
                first = false;
                return new Promise((resolve, reject) => {
                  window.settleOld = outcome => outcome === 'error' ? reject(new Error('late failure'))
                    : resolve(outcome === 'empty' ? { sources: [] }
                      : stage === 'sources' ? list : stage === 'accounts' ? { nickname: 'late-account' } : { topAvatarSource: 'netease' });
                });
              }
              if (url.endsWith('/sources')) return list;
              if (url.includes('/account?')) throw { status: 401, code: 'auth_required' };
              if (url.includes('/qr/poll')) return { state: 'waiting' };
              return {};
            },
            async put() {},
            async post(url, body) {
              calls.push({ url, body });
              if (url.endsWith('/qr/start')) return { ticket: body.source,
                qr_image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><text y="16">' + body.source + '</text></svg>', poll_ms: 60000 };
              return { ok: true };
            },
          };
        }, stage);
        await page.addScriptTag({ content: read('online-login.js') });
        await page.evaluate(() => { window.oldOpen = OnlineLogin.open('netease'); });
        await page.waitForFunction(() => typeof settleOld === 'function');
        await page.locator('#qr-close').click();
        assert.equal(await page.locator('#qr-modal').isVisible(), false);
        await page.evaluate(() => OnlineLogin.open('qq'));
        const image = await page.locator('#qr-canvas img').getAttribute('src');
        const status = await page.locator('#qr-status').textContent();
        await page.evaluate(async outcome => { settleOld(outcome); await oldOpen; }, outcome);
        assert.equal(await page.locator('#qr-modal').isVisible(), true);
        assert.equal(await page.locator('#qr-canvas img').getAttribute('src'), image, stage + '/' + outcome);
        assert.equal(await page.locator('#qr-status').textContent(), status);
        assert.equal(await page.locator('#qr-title').textContent(), 'qq 登录');
        const calls = await page.evaluate(() => window.calls);
        assert.deepEqual(calls.filter(c => c.url.endsWith('/qr/start')).map(c => c.body.source), ['qq']);
        assert.ok(!calls.some(c => c.url.endsWith('/qr/cancel') && c.body.ticket === 'qq'));
        await page.keyboard.press('Escape');
        assert.equal(await page.locator('#qr-modal').isVisible(), false);
        assert.deepEqual(errors, []);
        await page.close();
      }
    }
    const page = await browser.newPage({ viewport: { width: 900, height: 760 } });
    await page.setContent('<span id="online-account-face"></span><span id="online-account-dot"></span>' + html.slice(from, to));
    for (const file of ['style.css', 'online.css']) await page.addStyleTag({ content: read(file) });
    await page.evaluate(() => {
      window.calls = [];
      window.accountMode = 'invalid';
      window.VMusicTransport = {
        async get(url) {
          if (url.endsWith('/sources')) return { sources: [
            { id: 'migu', label: '咪咕音乐', caps: ['cookie_login'] },
            { id: 'qishui', label: '汽水音乐', caps: ['cookie_login', 'qr_login'] },
          ] };
          if (url.includes('/account?')) {
            if (accountMode === 'valid') return { source: 'migu', nickname: '测试听众' };
            if (accountMode === 'timeout') throw { status: 504, code: 'upstream_timeout', message: '连接超时' };
            if (accountMode === 'pending') return new Promise(resolve => { window.finishAccount = resolve; });
            throw { status: 401, code: 'auth_required', message: '请先登录' };
          }
          if (url.includes('/qr/poll')) return { state: 'waiting' };
          return {};
        },
        async put() {},
        async post(url, body) {
          calls.push({ url, body });
          if (url.endsWith('/qr/start')) return { ticket: 'fixture', poll_ms: 60000,
            qr_text: 'https://bff-pc.qishui.com/light/invoke/scan_login?token=fixture&os=Windows&computer_name=Hertz+Studio' };
          return { signedIn: true };
        },
      };
    });
    await page.addScriptTag({ content: read('vendor/qrcode.js') });
    await page.addScriptTag({ content: read('online-login.js') });
    await page.evaluate(() => OnlineLogin.open('migu'));
    assert.deepEqual(await page.evaluate(() => calls.filter(c => c.url.endsWith('/qr/start'))), [],
      'cookie-only providers must not request unsupported QR tickets');
    assert.equal(await page.locator('#qr-cookie-input').isVisible(), true);
    assert.equal(await page.locator('#qr-canvas').isVisible(), false);
    assert.match(await page.locator('#qr-status').textContent(), /cookie/i);
    await page.locator('.qr-source[data-source="qishui"]').click();
    await page.locator('#qr-canvas svg').waitFor();
    assert.equal(await page.locator('#qr-canvas').isVisible(), true, 'switching back restores the QR surface');
    assert.deepEqual(await page.evaluate(() => calls.filter(c => c.url.endsWith('/qr/start')).map(c => c.body.source)), ['qishui']);
    await page.locator('.qr-source[data-source="migu"]').click();
    assert.equal(await page.locator('#qr-cookie-input').isVisible(), true);
    assert.equal(await page.locator('#qr-canvas').isVisible(), false);
    await page.locator('#qr-cookie-input').fill('pacmtoken=fixture-invalid');
    await page.locator('#qr-cookie-save').click();
    assert.equal(await page.locator('#qr-modal').isVisible(), true, 'saving token-shaped data is not authenticated login');
    await page.waitForFunction(() => !document.querySelector('#qr-cookie-save').disabled);
    assert.match(await page.locator('#qr-status').textContent(), /未登录|失效|请先登录/);
    await page.evaluate(() => { accountMode = 'timeout'; });
    await page.locator('#qr-cookie-save').click();
    await page.waitForFunction(() => !document.querySelector('#qr-cookie-save').disabled);
    assert.equal(await page.locator('#qr-modal').isVisible(), true);
    assert.match(await page.locator('#qr-status').textContent(), /暂时无法验证/);
    await page.evaluate(() => { accountMode = 'valid'; });
    await page.locator('#qr-cookie-save').click();
    await page.waitForFunction(() => document.querySelector('#qr-modal').hidden);
    await page.evaluate(async () => { await OnlineLogin.start('migu'); accountMode = 'pending'; });
    await page.locator('#qr-cookie-input').fill('pacmtoken=fixture-delayed');
    await page.locator('#qr-cookie-save').click();
    await page.waitForFunction(() => typeof finishAccount === 'function');
    await page.evaluate(() => OnlineLogin.start('qishui'));
    await page.evaluate(() => finishAccount({ source: 'migu', nickname: '迟到的听众' }));
    await page.locator('#qr-canvas svg').waitFor();
    assert.equal(await page.locator('#qr-modal').isVisible(), true);
    assert.match(await page.locator('#qr-title').textContent(), /汽水/);
    await page.close();
    // cookie 取证说明。单独一页、且把 poll_ms 放到 60s：说明是渲染期一次性产物，
    // 而票态会自己往前推——上一版把这两组断言塞进同一个 40ms 轮询的夹具里，
    // 几个 locator 往返之间票已经从 waiting 走到 rejected，把终态那组的断言吃掉了。
    const gp = await browser.newPage({ viewport: { width: 900, height: 760 } });
    await gp.setContent('<span id="online-account-face"></span><span id="online-account-dot"></span>' + html.slice(from, to));
    await gp.evaluate(() => {
      window.VMusicTransport = {
        async get(url) {
          if (url.endsWith('/sources')) return { sources: [{ id: 'qishui', label: '汽水音乐',
            caps: ['cookie_login', 'qr_login'],
            login: { site: 'https://www.qishui.com', keys: ['sessionid', 'sid_guard', 'sid_tt'] } }] };
          if (url.includes('/account?')) throw { status: 401, code: 'auth_required', message: '未登录' };
          return { state: 'waiting' };
        },
        async put() {},
        async post() { return { ticket: 'fixture', poll_ms: 60000, qr_text: 'https://bff-pc.qishui.com/light/invoke/scan_login?token=fixture' }; },
      };
    });
    await gp.addScriptTag({ content: read('vendor/qrcode.js') });
    await gp.addScriptTag({ content: read('online-login.js') });
    await gp.evaluate(async () => { await OnlineLogin.start('qishui'); });
    const guide = await gp.locator('#qr-login-guide').textContent();
    assert.match(guide, /https:\/\/www\.qishui\.com/, '面板要给出官网地址，光说「去官网」等于没说：' + guide.slice(0, 60));
    assert.match(guide, /sid_tt/, '面板要给出判登录态认的字段名，用户才知道自己拷全没有');
    assert.match(guide, /document\.cookie/, '要写明不能用 document.cookie——httpOnly 字段拷不到');
    assert.equal(await gp.locator('#qr-login-guide .qr-guide-copy').count(), 1,
      '官网地址给复制按钮，不给链接：插件 iframe 没有 allow-popups，<a> 会被静默丢弃');
    assert.equal(await gp.locator('#qr-login-guide a').count(), 0, '面板里不放 <a>');
    assert.ok(!/['"]migu['"]/.test(read('online-login.js')),
      'online-login.js 不许按音源名特判——SourceInfo 的契约是「前端只认这张表」');
    await gp.close();

    // 扫码终态：上游把这枚票判死（汽水的 2156 交付失败）之后，前端必须停轮询
    // 并指向 cookie 导入。回归形态是把它当可重试错误，刷「请求失败（3s 后重试）」
    // 对同一枚死票无限重问，用户永远等不到那句「改用 cookie」。
    const dead = await browser.newPage({ viewport: { width: 900, height: 760 } });
    await dead.setContent('<span id="online-account-face"></span><span id="online-account-dot"></span>' + html.slice(from, to));
    await dead.evaluate(() => {
      window.polls = 0; window.allowRejected = false;
      window.VMusicTransport = {
        async get(url) {
          if (url.endsWith('/sources')) return { sources: [{ id: 'qishui', label: '汽水音乐', caps: ['cookie_login', 'qr_login'] }] };
          if (url.includes('/account?')) throw { status: 401, code: 'auth_required', message: '未登录' };
          if (url.includes('/qr/poll')) { window.polls += 1; return { state: window.allowRejected ? 'rejected' : 'waiting' }; }
          return {};
        },
        async put() {},
        async post() {
          return { ticket: 'fixture', poll_ms: 40,
            qr_text: 'https://bff-pc.qishui.com/light/invoke/scan_login?token=fixture&os=Windows&computer_name=Hertz+Studio' };
        },
      };
    });
    await dead.addScriptTag({ content: read('vendor/qrcode.js') });
    await dead.addScriptTag({ content: read('online-login.js') });
    await dead.evaluate(async () => { await OnlineLogin.start('qishui'); });
    await dead.waitForFunction(() => window.polls >= 1);
    assert.match(await dead.locator('#qr-status').textContent(), /汽水音乐 App/,
      '扫码提示要指到真正能完成授权的 App：抖音只会回「请用汽水音乐 App 扫码」');
    await dead.evaluate(() => { window.allowRejected = true; });
    await dead.waitForFunction(() => document.getElementById('qr-status').textContent.includes('cookie'));
    const rejected = await dead.locator('#qr-status').textContent();
    assert.match(rejected, /cookie/, '上游拒绝后要把用户指向 cookie 导入：' + rejected);
    const after = await dead.evaluate(() => window.polls);
    await dead.waitForTimeout(500);
    assert.equal(await dead.evaluate(() => window.polls), after, '上游拒绝后不再对同一枚死票轮询');
    await dead.close();
    console.log('Login Chrome: delayed lifecycle responses, cookie-only login and text QR rendering passed.');
  } finally { await browser.close(); }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
