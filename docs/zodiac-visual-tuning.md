# 星座 Zodiac 视觉参数

「星座 · 十二星图」逐座汇聚、停留、散开。造型采用可识别的动物、人物与器物
剪影，内部为通透的青色三角网，主星及白色连线覆盖其上。可以拖拽环绕、滚轮
缩放、双击复位，低频和起音驱动呼吸与增辉。

## 轮廓和坐标归属

`tools/zodiac-stage/src/figures.js` 是十二座轮廓、孔洞和主星坐标的唯一来源。
原始数据以左上角为原点的 100 单位画布手绘，导出时转换为 y 向上坐标。
白羊保留回卷角与四肢，狮子采用卧姿，巨蟹采用正面俯视；双子为相连的人形，
射手为拉弓人马，处女保留双翼、裙摆，摩羯保留羊首鱼尾。
用户的 11 张参考图包含两张射手，金牛与水瓶按同一视觉语言补齐。

`zodiac.js` 使用 three 已包含的 Earcut 对闭合轮廓及孔洞进行三角化，再沿最长边
细分到固定 560 个顶点。共享边两侧的面片同步切分，避免裂缝。
不会用无约束三角化连接蟹钳口、腿间、弓弦或秤盘悬绳之间的空白。
各座的原始轮廓及三角网按座缓存，换画质只改变点云量。
公开的 `delaunay2` 纯函数保留兼容，造型生成已改用 Earcut。

`shapeFit(i)` 根据轮廓的精确包围盒计算等比缩放和中心，落到 1.78 的设计框：

```text
k = min(2 * FIG_HALF_W / width, 2 * FIG_HALF / height)
worldX = (rawX - cx) * k
worldY = (rawY - cy) * k
```

网格、粒子、柔光与主星共用此变换。**星图不再独立放大或居中**，否则主星会
偏离对应的身体部位。主粒子按面片面积采样，18% 沿外轮廓采样以保留细节，
深度在背面和正面之间采样。正面按到轮廓的距离隆起（最高约 0.77），背面
向后延伸，边界侧壁封闭体积；主星、网格边与柔光贴合正面。

## 图层与材质

实体面片开启深度测试及写入，使用平面法线的 `MeshStandardMaterial`，由环境光、
主光、轮廓光和补光表现体积。背景和辉光关闭深度测试，按 `renderOrder` 绘制。

| renderOrder | 图层 | 构成 |
| --- | --- | --- |
| -1000 | 天空 | 近黑球面、顶点 FBM 银河尘埃与暗带、暗角 |
| -900 / -890 / -880 | 背景 | 细密星场、星云柔斑、四芒星 |
| -100 | 形象图柔光 | 轮廓内低透明度点云 |
| -90 | 形象图面片 | 青绿色受光体积，正面、背面及侧壁 |
| -82 / -80 | 网格边 | 宽晕、细芯丝带 |
| -78 | 网格顶点 | 小亮点 |
| -10 | 主粒子池 | 预建 entry / shape / exit，五种曲线轨迹及方向拖尾 |
| 10 / 11 / 12 | 主星层 | 连线宽晕、白色细芯、四芒星 |

停留时主粒子透明度降到 0.42，面片透明度为 0.44，网格细芯为 0.25，宽晕为
0.055（随低频增辉）。主星尺寸标量为 280；网格顶点为 52。
内部线网比主连线细、暗，避免整张造型过曝成白色线团。

`figureOpacity(state,k)` 统一驱动形象图和主星的显隐：汇聚后段浮现，散开前段
撤去，完全透明时跳过绘制。天空不随背景星云开关消失。

背景星点以白色为主，少量冷暖色，尺寸采用长尾分布。星光用逐星随机相位、
约 12–29 秒的缓慢周期改变亮度和光晕尺寸；减弱动效降低呼吸幅度。
银河及星云仅保留低透明度灰白纹理，避免蓝色铺满背景。

`transitionStyle(cycle)` 按完整座次选择旋涡、纵深星流、波浪、轨道及放射轨迹，
汇聚和散开分别选择轨迹与旋转方向。同一座下一轮有不同组合，seek 仍然确定。
粒子错峰飞行、汇聚减速、散开加速，移动时使用沿屏幕速度方向的拉长光点。

## 机位、生命周期与资源

`main.js` 根据画幅比例、设计框和 `FRAME_MARGIN=1.30` 计算机位距离。
resize 重算适配距离但保留用户缩放；双击将 zoom 复位为 1。
距离上限随适配距离和最大缩放倍率扩展，竖屏不会被桌面 18 单位上限裁切。
机位与造型按播放时间微摆，避免持续转到侧面后剪影变成一条线。

单座生命周期为 `2.8s gather → 7.6s hold → 2.6s disperse`，共 13 秒。
十二座预建几何并预热，应用验证中 GPU 驻留为 112 个几何、1 个纹理。
换座使用对应几何对象，不反复替换 BufferAttribute；unmount 统一销毁。
数据层缓存最多十二座，不含 GPU 对象。

## 构建与验证

```powershell
node tools/zodiac-stage/build.mjs
node scripts/check-zodiac-artwork.mjs
node scripts/check-zodiac-volume.mjs
node scripts/check-zodiac-stage.js
node scripts/capture-zodiac-artwork.cjs
node scripts/check-zodiac-motion-browser.js
node scripts/check-zodiac-effects-browser.cjs
cargo build --locked -p hertz-studio
node scripts/check-zodiac-stage-browser.js
```

浏览器脚本需要 Playwright 和 Chrome，可以用 `PLAYWRIGHT_MODULE` 指向已有安装。
全页面验证使用隔离服务及 null 音频后端，不改用户资料或当前播放。
生成产物及源码哈希位于 `plugin/ui/vendor/zodiac-stage.js` 和
`tools/zodiac-stage/.build-manifest.json`。桌面/手机十二座截图及像素报告位于
`output/playwright/zodiac-reference/after/`，包括 `contact-sheet.jpg`。
独立相机的星光呼吸像素报告、五种入场/散场和侧面截图位于
`output/playwright/zodiac-effects/`。
服务内嵌 UI 资源，修改产物后需重新构建应用并重新打开实例。

## 修改时保留的约束

- 轮廓、网格、点云和主星共用一套坐标，不增加第二次星图归一化。
- 网格必须完整覆盖轮廓并保留孔洞，不能筛掉长三角形后留下断肢。
- 网格与主连线使用丝带；WebGL 的 LineBasicMaterial 无法提供可控线宽。
- 网格和粒子使用一致色彩管线，内置材质显式 `toneMapped:false`。
- 几何与 attribute 预建复用，切换十二座后资源数量必须保持有界。
- 造型数据改变后重跑面积覆盖、轮廓内采样、主星对齐和桌面/手机截图检查。
