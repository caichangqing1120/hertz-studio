#!/usr/bin/env node
// SPDX-License-Identifier: MIT
'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const output=path.resolve(__dirname,'../output/space-spatial-native');
async function main(){
  const browser=await chromium.connectOverCDP(process.env.DBX_CDP||'http://127.0.0.1:18943');
  try{
    const page=browser.contexts()[0].pages().find(page=>page.url().startsWith('http://tauri.localhost/'));let frame;
    for(const candidate of page.frames().slice(1))if(await candidate.evaluate(()=>!!window.Space3D))frame=candidate;
    assert.ok(frame,'installed plugin workbench');
    await frame.evaluate(()=>{Space3D.close();Space3D.configure({...Space3D.preferences(),sceneSource:'coast',playerAutoHide:false});Space3D.open();});
    await frame.waitForFunction(()=>Space3D.stats().renderer?.id==='coast'&&Space3D.stats().renderer.state==='ready');
    await frame.evaluate(()=>{window.spatialNativeCanvas=document.querySelector('#sp-canvas canvas');});
    await frame.locator('#sp-page-toggle').click();await frame.locator('#sp-page-toggle').click();
    assert.equal(await frame.evaluate(()=>spatialNativeCanvas===document.querySelector('#sp-canvas canvas')),true,'native home and stage share canvas');
    await frame.locator('#sp-player-handle').click();await page.waitForTimeout(500);
    assert.ok(await frame.locator('#sp-bar button').count()<=9,'native player keeps primary controls only');
    const review=await frame.locator('.sh-daily-review').boundingBox(),date=await frame.locator('.sh-date').boundingBox();
    assert.ok(date.y-review.y<=34,'native date has no empty media region');
    await page.screenshot({path:path.join(output,'spatial-native-home.png')});
    await frame.locator('#sp-collapse').click();assert.equal(await frame.locator('#sp-bar').evaluate(node=>node.inert),true);
    await frame.locator('#sp-player-handle').click();assert.equal(await frame.locator('#sp-bar').evaluate(node=>node.inert),false);
    await frame.locator('#sp-playlist-toggle').click();await frame.locator('#sp-more').click();
    assert.deepEqual(await frame.evaluate(()=>Space3D.stats().panels),['sp-player-options']);
    await frame.locator('#sp-volume-toggle').click();assert.deepEqual(await frame.evaluate(()=>Space3D.stats().panels),['sp-volume-panel']);
    await frame.locator('#sp-page-toggle').click();assert.deepEqual(await frame.evaluate(()=>Space3D.stats().panels),[]);
    await frame.locator('#sp-page-toggle').click();
    await frame.locator('#sh-query').fill('native-search-verification');
    await frame.getByRole('tab',{name:'本地',exact:true}).click();await frame.locator('#sh-query').press('Enter');
    await frame.waitForFunction(()=>document.querySelector('.sh-panel-body').getAttribute('aria-busy')==='false');
    assert.equal(await frame.locator('.sh-panel-layer.is-search').isVisible(),true,'native search opens a floating result layer');
    await page.screenshot({path:path.join(output,'spatial-native-search.png')});await frame.locator('.sh-panel-tools button').last().click();
    await frame.locator('#sp-account').click();
    await frame.waitForFunction(()=>document.querySelector('.qs-connection')?.textContent.includes('已接入'),null,{timeout:45000});
    await frame.getByRole('button',{name:'Cookie',exact:true}).click();assert.equal(await frame.locator('#qr-cookie-input').isVisible(),true);
    await frame.waitForFunction(()=>document.querySelector('.qs-signal')?.getAttribute('d'));
    assert.equal(await frame.locator('.qs-signal').getAttribute('d'),await frame.locator('.qs-link').getAttribute('d'));
    const dash=await frame.locator('.qs-signal').evaluate(node=>getComputedStyle(node).strokeDashoffset);
    await frame.waitForFunction(previous=>getComputedStyle(document.querySelector('.qs-signal')).strokeDashoffset!==previous,dash,{timeout:5000});
    await page.waitForTimeout(400);await page.screenshot({path:path.join(output,'spatial-native-login.png')});
    await frame.locator('#qr-close').click();assert.equal(await frame.evaluate(()=>Space3D.stats().page),'home');
    await frame.locator('#sp-page-toggle').click();await frame.locator('#sp-player-handle').click();
    await frame.locator('#sp-console-toggle').click();await frame.locator('#sp-tab-lyrics').click();
    await frame.locator('#sp-lyric-style').selectOption('lyric-sonnet');await frame.waitForFunction(()=>Space3D.stats().renderer?.lyricId==='lyric-sonnet');
    assert.equal(await frame.evaluate(()=>Space3D.stats().renderer.id),'coast');
    await frame.locator('#sp-tab-stage').click();await frame.locator('#sp-source').selectOption('zodiac');
    await frame.waitForFunction(()=>Space3D.stats().renderer?.id==='zodiac'&&Space3D.stats().renderer.state==='ready');
    assert.equal(await frame.evaluate(()=>Space3D.stats().renderer.lyricId),'lyric-sonnet');
    assert.equal(await frame.evaluate(()=>spatialNativeCanvas===document.querySelector('#sp-canvas canvas')),true);
    await page.screenshot({path:path.join(output,'spatial-native-console-composition.png')});await frame.locator('#sp-sheet-close').click();
    await frame.locator('#sp-more').click();await frame.locator('#sp-immersive').click();assert.equal(await frame.locator('#sp-page-toggle').isVisible(),false);
    assert.equal(await frame.locator('#sp-player-handle').isVisible(),false);
    assert.equal(await frame.locator('#sh-query').isVisible(),false);
    await frame.waitForFunction(()=>!Array.from(document.querySelector('#space3d').querySelectorAll('button,input,select')).some(node=>node.checkVisibility({checkVisibilityCSS:true,checkOpacity:true})));
    assert.equal(await frame.locator('#space3d').evaluate(root=>Array.from(root.querySelectorAll('button,input,select')).some(node=>node.checkVisibility({checkVisibilityCSS:true,checkOpacity:true}))),false);
    await page.screenshot({path:path.join(output,'spatial-native-immersive.png')});
    await page.keyboard.press('Escape');
    assert.equal(await frame.locator('#sp-page-toggle').isVisible(),true);
    await frame.locator('#sp-return-2d').click();assert.equal(await frame.locator('#sp-canvas canvas').count(),0);
    fs.writeFileSync(path.join(output,'spatial-ui-evidence.json'),JSON.stringify({host:'D:/dev-tool/dbx/dbx.exe 0.6.39',installedPackage:true,
      canvasContinuity:true,playerHideReveal:true,compactPlayer:true,dateSpacing:true,exclusivePanels:true,realSourceLoginPresentation:true,immersive:true,closeDisposesRenderer:true,
      composition:true,strictImmersiveChrome:true,searchFloatingLayer:true,loginConnectionMotion:true,credentialsSubmitted:false,audibleOutput:'unmeasured',baselinePerformance:'unmeasured'},null,2));
    console.log('Native spatial UI passed: shared background, player, actual source login, immersive and disposal');
  }finally{await browser.close();}
}
main().catch(error=>{console.error(error);process.exitCode=1;});
