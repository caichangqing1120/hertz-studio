// SPDX-License-Identifier: MIT
// Export the production registry's illustrations; never maintain a second art source.
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const out = path.join(root, 'output/orchestration-art');
const box = { console }; box.window = box;
vm.createContext(box);
for (const file of ['creative-gl.js', 'creative-anime.js'])
  vm.runInContext(fs.readFileSync(path.join(root, 'plugin/ui', file), 'utf8'), box, { filename: file });
const css = fs.readFileSync(path.join(root, 'plugin/ui/creative-anime.css'), 'utf8');
const motion = css.slice(css.indexOf('/* Vector motion'), css.indexOf('/* These drawings'));
const scenes = box.CreativeGL.scenes().filter(s => s.presentation?.family === 'anime');
const descriptions = [
  '晨光里的高山垭口。蔚蓝晴空逐渐过渡到浅金色空气，主峰偏左，不规则雪线沿山脊破碎，沟壑、岩层和受光面统一朝向右上方的光源。远山呈淡蓝紫，近壁带冷青色。奶油白云团以饱满的弧面、蜜桃反光和薰衣草色暗部体现体积，前后交叠，薄雾缓缓穿过山腰。固定镜头，山不动，只见空气流动。',
  '夕照中的退潮海湾。珊瑚粉与杏金天空映在蓝紫海面，落日的碎光随远近改变疏密。左侧风化岩壁托起一座小灯塔，裂隙、暗面与岸脚白浪交代尺度；弧形沙岸从右侧伸向近景，湿沙有冷紫反光，干沙温暖。浪花由断续细线组成，近处石块带短影。地平线固定，潮水层层推进。',
  '蒙蒙细雨里的月夜山谷。月牙映照层叠靛蓝山脊，细长的青蓝客车带着琥珀车窗横穿石拱桥，车窗框、玻璃反光和暗处乘客剪影克制清晰。桥洞内侧有冷暗阴影，拱石缝隙承接月光，谷底细溪与薄雾隐约可见。两层细雨持续斜落，桥、山和接触网全部静止，只有列车、雨丝与薄雾移动。',
  '雨后翡翠色的林间。树干自然收细、弯曲分叉，近处树皮深青，远处树木融入薄荷色空气。树冠与枝叶围出中央的浅金色林隙，蜿蜒小径绕过带苔色的石块，前景蕨叶与林下小叶疏密错落。右侧一盏小灯投出蜂蜜色光晕，三枚萤火缓缓游移。树木、灯具和光束方向稳定，仅萤火、灯的亮度与一簇蕨叶轻微变化。'
];
const concepts = [
  '放空与舒缓聆听。26、19、15.3 秒云团沿水平方向错相流动，11.3 秒山腰薄雾独立变化；43 秒卷云换相，29.3 秒一行候鸟掠空，9.8 秒日光呼吸。山峰与岩壁始终固定。',
  '慢歌与情绪过渡。7.3、9.7 秒涌浪在完全透明时换相，11.9 秒岸线往复，10.9 秒碎光舒展，8.3 秒落日余晖呼吸，12.9 秒波纹缓移，海鸟随之轻浮。',
  '夜行与稳定节奏。24.3 秒列车在画外换相；6.1、4.6 秒细雨沿相邻雨幕连续衔接，14.9 秒薄雾独立漂移，6.7 秒月晕呼吸，7.3 秒车窗微光明暗。接触网与桥梁不移动。',
  '专注与安静陪伴。萤火的横纵位移与亮度使用不同周期，灯光 7.7 秒、斜光亮度 23.3 秒独立变化，蕨叶以 8.3 秒周期轻微转动。树干、灯具和光束方向保持固定。'
];
const names = ['01-sky.svg', '02-coast.svg', '03-rail-rain.svg', '04-forest.svg'];
fs.mkdirSync(out, { recursive: true });
const files = scenes.map((s, i) => {
  const scene = s.id.slice(6);
  const rules = motion.split('\n').filter(line => line.includes('cx-' + scene + '-') && !line.startsWith(' *')).join('\n');
  const embedded = '<style><![CDATA[' + rules + '\n.celx{overflow:hidden}.celx .cx-motion{animation-play-state:running}' +
    '\n@media(prefers-reduced-motion:reduce){.celx .cx-motion{animation:none!important}}]]></style>';
  const svg = s.presentation.art.replace('aria-hidden="true"', 'role="img" aria-label="' + s.label + '"')
    .replace('<defs>', '<title>' + s.label + '</title>' + embedded + '<defs>');
  fs.writeFileSync(path.join(out, names[i]), svg);
  return { file: names[i], bytes: Buffer.byteLength(svg), scene: s.id };
});
const cards = scenes.map((s, i) => `<article class="ws-anime-card"><div class="ws-anime-preview" data-motion="paused">${s.presentation.art}</div><div class="ws-anime-caption"><span class="ws-anime-tag">${s.presentation.tag}</span><h2>${s.label}</h2><p>${s.presentation.description}</p><details><summary>画面描述与循环设计</summary><p>${descriptions[i]}</p><p>${concepts[i]}</p></details><a href="${names[i]}" download>下载 SVG</a></div></article>`).join('\n');
const html = `<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>四处风景 · 高级编排</title><style>${css}
*{box-sizing:border-box}body{margin:0;background:#111c2a;color:#f1ece5;font-family:"Aptos","Microsoft YaHei UI",sans-serif}main{max-width:1160px;margin:0 auto;padding:50px 32px 64px}.ws-anime-gallery{margin:0}.ws-anime-heading{display:flex;align-items:end;justify-content:space-between;gap:24px;margin-bottom:32px}.ws-anime-heading h1{margin:0;font-size:32px;font-weight:500;letter-spacing:.07em}.ws-anime-kicker{margin-bottom:14px}.intro{max-width:560px}.toolbar{display:flex;gap:18px;align-items:center;flex-wrap:wrap}.toolbar button{padding:8px 4px;border:0;border-bottom:1px solid #626f87;background:transparent;color:#e7c99e;cursor:pointer;font:inherit;font-size:12px}.rate{font-size:12px;min-width:3em;font-variant-numeric:tabular-nums}.ws-anime-card{cursor:default}.ws-anime-card:hover{transform:none;border-color:#6f92b7;box-shadow:none}.ws-anime-caption{padding:22px 24px 24px}.ws-anime-caption h2{font-size:19px;font-weight:500;margin:10px 0 0;letter-spacing:.04em}.ws-anime-caption p{color:#b0bbcb;font-size:12px;line-height:1.9;margin:10px 0}.ws-anime-caption a{color:#e7c08c;font-size:11px;text-underline-offset:4px;margin-top:16px;align-self:start}details{margin-top:8px;font-size:11px;color:#b0bbcb}summary{cursor:pointer;color:#c2cddd}footer{margin-top:26px;font-size:11px;line-height:1.9;color:#b0bbcb}.ws-anime-preview{aspect-ratio:8/5}button:focus-visible,a:focus-visible,summary:focus-visible{outline:2px solid #e7c08c;outline-offset:5px}@media(max-width:640px){main{padding:28px 18px}.ws-anime-heading{align-items:start;flex-direction:column}.ws-anime-heading h1{font-size:26px}.ws-anime-grid{grid-template-columns:1fr}.ws-anime-caption{padding:20px}.toolbar{gap:16px}}
</style><main class="ws-anime-gallery" tabindex="0" aria-label="动态风景画册，空格暂停，左右方向键调速" aria-keyshortcuts="Space ArrowLeft ArrowRight"><header class="ws-anime-heading"><div class="intro"><span class="ws-anime-kicker">HERTZ STUDIO / SCENERY STUDIES</span><h1>四处风景，各有呼吸。</h1><p>让云、潮汐、夜行与林间微光，拥有各自流动的时间。</p></div><div class="toolbar"><button id="pause" aria-pressed="false" aria-label="暂停画册动画">暂停动画</button><button id="slower" aria-label="放慢动画">−</button><output class="rate" aria-live="polite">1×</output><button id="faster" aria-label="加快动画">＋</button></div></header><div class="ws-anime-grid">${cards}</div><footer>点击画册留白或按 Tab 聚焦画册：空格暂停 / 继续，← → 调节速度（0.5×–1.5×）。<br>滚出屏幕后暂停；遵循系统的减弱动态效果设置。</footer></main><script>
const gallery=document.querySelector('main'),previews=[...document.querySelectorAll('.ws-anime-preview')];let paused=false,rate=1;const visible=new Set();
function sync(){for(const el of previews){el.dataset.motion=!paused&&!document.hidden&&visible.has(el)?'running':'paused';for(const a of el.getAnimations({subtree:true}))if(a.effect.getTiming().iterations===Infinity&&a.playbackRate!==rate)a.updatePlaybackRate(rate);}document.getElementById('pause').textContent=paused?'继续动画':'暂停动画';document.getElementById('pause').setAttribute('aria-pressed',String(paused));document.querySelector('.rate').textContent=rate+'×';}
function changeSpeed(step){rate=Math.max(.5,Math.min(1.5,rate+step));sync();}
const observer=new IntersectionObserver(entries=>{for(const e of entries){if(e.isIntersecting&&e.intersectionRatio>0)visible.add(e.target);else visible.delete(e.target);}sync();});previews.forEach(el=>observer.observe(el));
document.getElementById('pause').onclick=()=>{paused=!paused;sync();};document.getElementById('slower').onclick=()=>changeSpeed(-.25);document.getElementById('faster').onclick=()=>changeSpeed(.25);
gallery.addEventListener('keydown',e=>{if(e.ctrlKey||e.altKey||e.metaKey)return;if(e.code==='Space'&&e.target===gallery){paused=!paused;e.preventDefault();sync();}else if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();changeSpeed(e.key==='ArrowRight'?.25:-.25);}});
gallery.addEventListener('click',e=>{if(!e.target.closest('button,a,summary,details'))gallery.focus({preventScroll:true});});document.addEventListener('visibilitychange',sync);
</script></html>`;
fs.writeFileSync(path.join(out, 'preview.html'), html);
fs.writeFileSync(path.join(out, 'manifest.json'), JSON.stringify({ files, source: 'plugin/ui/creative-anime.js', generatedBy: 'node scripts/export-workshop-art.js' }, null, 2));
console.log(JSON.stringify({ out, files }, null, 2));
