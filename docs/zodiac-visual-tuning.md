# 星座 Zodiac 视觉参数

「星座 · 十二星图」是粒子三维舞台：每次只登场一座 —— 粒子从深空云团汇聚成
星座的立体造型（动物/器物），停留微摆、随音乐呼吸增辉，随后散开飞入下一片
云，12 座循环。机位绕造型缓转，可拖拽环绕、滚轮推拉、双击复位。

镜头上不再是「黑底上一团白粒子」，而是参考图那套语言：**深蓝渐变星空 +
半透明低多边形形象图 + 清晰的矢量星座连线与星点**，十二座统一落到同一条
1.78 的「设计画框」里。

## 图层（由远及近，靠 renderOrder 排序）

所有图层的材质都是 `depthWrite:false` + `depthTest:false`，深度只由 renderOrder
表达，不靠 z 值大小。改顺序 = 改 `renderOrder`，不要试图用 z 拉开。

| renderOrder | 图层 | 构成 |
| --- | --- | --- |
| -1000 | 天空穹顶 | 倒扣球（r=140）+ 纵向三段渐变 + 顶点级 FBM 星云 + 屏幕暗角 |
| -900 | 星场 | 细密星点（冷蓝白，尺寸 3.4 次幂长尾） |
| -890 | 星云斑块 | 36 个大尺度柔斑（紫/靛/青） |
| -880 | 星光点缀 | 四芒星 + 十字光刺 + 柔晕 |
| -100 | 形象图柔光 | 造型表面点云，大点径、低透明 → 半透明「体量」 |
| -90 | 形象图网格 | 非索引三角面片 + 逐面随机明度（低多边形面片） |
| -82 | 网格边宽晕 | 网格边的宽丝带（低多边形辉光） |
| -80 | 网格边细芯 | 网格边的细丝带（矢量清晰） |
| -78 | 网格顶点 | 三角形顶点上的亮点 |
| -10 | 主粒子池 | entry/shape/exit 三组位置缓冲，着色器内插值 |
| 10 | 星座连线（晕） | 宽丝带柔光 |
| 11 | 星座连线（芯） | 细丝带，矢量清晰 |
| 12 | 星座星点 | 四芒星，主星最大 |

`-1000 / -900~-880 / -10` 各是一组，`-100 ~ 12` 全部挂在 `root` 下跟着造型
一起微摆；`field` 偏好开关整组背景星云（星场 + 星云斑块 + 星光点缀）。

## 画框归一化（十二座体量一致的根本）

**从「最长边缩到 ±FIG_HALF」改成「等比落到 1.78 的设计框」**：`computeFit`
按造型包围盒算 `k = min(FIG_HALF_W*2/宽, FIG_HALF*2/高)`（谁先顶到按谁定标，
`FIG_HALF_W = FIG_HALF × FIG_ASPECT = 4.45`）。旧写法下竖高的星座（处女座
5.0×4.2，按高度定标）只有画框一半宽；现在十二座都会顶到设计框的至少一条边。

**深度也要定标**：`fit.kz = FIGURE_DEPTH / maxZ`，把每座自己的 z 范围压到
±0.45。不定标的话，造型厚度差异会被透视放大成不同的投影尺寸 —— 实测巨蟹
最大 z=1.14 时投影超出设计框 71%，`maxY` 量出 2.126（不可能的量）。

`SHAPE_BOX / SHAPE_BOX_V / SHAPE_BOX_Z` 是最后一道裁剪（按设计框 ×1.06 留量）。

## 三层坐标对齐（这一条错了全盘皆错）

**造型点云、形象图网格、星座骨架共用同一套 fit**（`shapeFit(i)`，按 id 缓存的
纯函数）。因此

- 十二座在镜头里体量一致、居中；
- 形象图与骨架天然贴在粒子上，不需要二次对位；
- 骨架的坐标写在**造型自己那套空间里**（侧视、头朝 +x），加新星座时要照着
  `shapeParts(i)` 的部件坐标摆节点，不是照天空里的真实星图摆。

**星图还要走第二步「两级归位」**（`buildConstellation`）：先按造型 fit 缩放
（保留「骨架贴在形象图上」这层关系），再按骨架自己的包围盒落到设计框的
88%（`LINE_FILL`）。没有第二步时，天生小的骨架（天秤、摩羯）只有造型的
七八成宽 —— 星图比形象图还小，就只剩「贴在动物身上的一根细线」。偏心保留
`LINE_CENTER_KEEP = 0.25`，十二座各自的星图才不塌成同一张居中的网。

## 机位按宽高比算（`main.js`）

`fitDistance(aspect)` 由舞台宽高比 + 设计框（含 `FRAME_MARGIN = 1.30` 边距）
算「恰好装下画框」的距离；用户缩放是 `rig.zoom` 倍率（`ZOOM_MIN/MAX`），
`updateDist()` 把两者合成实际距离。窗口比例变化只重算 `distFit`，**不重置
用户缩放**。双击复位 `zoom = 1`。

## 构建链

- 场景引擎：`tools/zodiac-stage/src/`
  - `zodiac.js`：十二宫元数据、部件 DSL（椭球体积/壳、贝塞尔管、螺旋）、
    `shapeParts` / `buildShape`（点云采样）、`shapeFit`（画框 + 深度定标参数）、
    `buildFigureMesh`（表面点云 + **逐部件** Delaunay 面片 + 去重网格边丝带 +
    顶点亮点）、`CONSTELLATION` / `buildConstellation` / `buildRibbon`
    （星座骨架与连线丝带）、`buildCloud`（深空云团）、`buildSeeds`、`timelineAt`，
    全部纯函数
  - `world.js`：十三层图层的搭建与逐帧驱动
  - `main.js`：立面、按宽高比的轨道机位与交互、时间线驱动、GPU 资源预热
  - `util.js`：频带聚合、包络、种子随机
- 适配层：`plugin/ui/stage-zodiac.js`（window.StageZodiac）
- 产物：`plugin/ui/vendor/zodiac-stage.js`（IIFE，three r186 打包）

```
cd tools/zodiac-stage
node build.mjs           # 改了 src 必须重建（check-zodiac-stage.js 核对哈希）
node scripts/check-zodiac-stage.js
node scripts/check-zodiac-stage-browser.js   # 需要真浏览器 + fixture
node scripts/check-zodiac-motion-browser.js
```

## 生命周期

`GATHER_SECONDS 2.8 → HOLD_SECONDS 7.6 → DISPERSE_SECONDS 2.6`（共 13 秒），
由 `timelineAt(time)` 纯函数驱动；粒子错峰由各自 `aSeed` 在着色器内完成，
seek 到任意时刻与顺播结果一致。

形象图与骨架的显影时机由 `figureOpacity(state, k)` 单点决定：汇聚后段才浮现
（`smooth01((k-0.42)/0.5)`），散开前段就撤（`1 - smooth01(k/0.62)`），九层共用
同一个 `figAlpha`；为 0 时整组 `visible=false`，省掉九次 draw call。

## 可调常量

| 位置 | 常量 | 含义 |
| --- | --- | --- |
| `zodiac.js` | `GATHER/HOLD/DISPERSE_SECONDS` | 单座三段时长 |
| `zodiac.js` | `FIG_HALF` / `FIG_ASPECT` / `FIG_HALF_W` | 设计画框的半高 / 宽高比 / 半宽（体量一致性的唯一旋钮） |
| `zodiac.js` | `FIGURE_DEPTH` | 深度定标目标（`kz = FIGURE_DEPTH / maxZ`） |
| `zodiac.js` | `SHAPE_BOX/_V/_Z` | 造型画框（最后一道裁剪） |
| `zodiac.js` | `FIGURE_Z` / `CONSTELLATION_Z` | 形象图 / 连线的深度（前者必须更小） |
| `zodiac.js` | `LINE_CORE/HALO_WIDTH` | 连线细芯 / 光晕宽度（丝带世界单位） |
| `zodiac.js` | `EDGE_CORE/HALO_WIDTH` | 网格边细芯 / 宽晕宽度 |
| `zodiac.js` | `LINE_FILL` / `LINE_CENTER_KEEP` | 星图撑满设计框的比例 / 偏心保留 |
| `zodiac.js` | `FIGURE_MESH_POINTS/EXP` / `FIGURE_MAX_EDGE` | 三角化采样点数 / 配额压缩指数 / 最大边长 |
| `zodiac.js` | `shapeParts(i)` | 每座的部件清单与采样权重 |
| `zodiac.js` | `CONSTELLATION[i]` | 每座的骨架节点与连线（造型空间坐标） |
| `world.js` | `SHAPE_/FIGURE_/FIELD_COUNTS`、`SPARKLE_COUNTS`、`NEBULA` | 各画质档的点数与星云斑块数 |
| `world.js` | `SKY_VERT/FRAG` 的 uniform 默认值 | 天空三段色、星云色与强度、暗角 |
| `world.js` | `figureOpacity` / `update()` 里的 opacity 系数 | 形象图与连线的浓度 |
| `main.js` | `FRAME_MARGIN` / `FOV_BASE` | 机位边距 / 视场角 |
| `main.js` | `DIST_MIN/MAX` / `ZOOM_MIN/MAX` | 距离钳制 / 缩放倍率范围 |
| `main.js` | `QUALITY` | 各档 DPR 上限与像素预算 |

## 踩过的坑（改这里之前先读）

- **自定义着色器不走 three 的色调映射**（要 `#include <tonemapping_fragment>`
  才生效），天空/粒子/连线的颜色是「写什么显示什么」；内置材质（面片/丝带/
  网格边）必须显式 `toneMapped:false`，否则两套色彩管线混在一起没法调色。
  `renderer.toneMapping` 因此设为 `NoToneMapping`。
- **星云噪声在顶点上算**（球面 64×40），片元只做插值。全屏 FBM 在集显上会直接
  吃掉帧预算，而星云本身就是大尺度柔斑，顶点插值完全够用。
- **体积点云要偏壳**：完全按高斯填实心，加法混合下中心会糊成一团死白。参考图
  里的形象是「壳」——表面清晰、内部通透，所以 `sampleEllipsoid` 的 `fill` 偏外。
- **Delaunay 必须逐部件做，不能全局做**：全局三角化会把包围盒相邻、实际分离的
  部件连成长条，被最大边长一筛就整片消失 —— 实测狮子只有鬃毛那块留下网格，
  身子全是裸点。逐部件成网后每根管、每条腿都有自己的面。面片数因此从 ~340
  涨到 640~1429。
- **低多边形网格的配额要压缩**（`FIGURE_MESH_EXP`）：直接用部件权重，细腿细角
  分不到几个点，整条腿在网格里消失；权重开 0.42 次方后每根管都够点连成面。
- **WebGL 下 `LineBasicMaterial` 的 `linewidth` 恒为 1px**：网格边和星座连线都
  必须用**丝带几何**（`buildRibbon` 把二维线段挤成四边形，两级宽度各一条），
  否则参考图那种「矢量清晰的粗线」画不出来。
- **深度定标不止为造型厚薄**：透视会对不同厚度产生不同放大，不定标时巨蟹
  （z 到 1.14）投影超设计框 71%，`maxY` 量出 2.126。
- **自转改成按播放时间求值的微摆**：连续自转会把「平面形象图」转到侧棱上变成
  一条线，而且 seek 到任意时刻要对得上。
- **每座每层一套预建几何**（共 112 个）+ **预热**（`main.js` 的 `warmup()`）：
  three 按 `BufferAttribute` **包装对象**认 GPU buffer，把新 attribute 塞进同一个
  几何时旧 buffer 不会被回收（弱引用只跟对象走，几何 dispose 也只删当时挂着的那几个）
  —— 所以「一个几何反复换 attribute」既漏 buffer 又收不干净。12 座各配一套几何、
  与座次无关的 attribute 跨座复用同一批对象，`dispose()` 才真的能把住。
  换座 = 九个对象各指一次几何，零分配。预热把全部缓冲与程序先上传一次，
  `stats().geometries` 从此恒定，契约里的驻留数断言才有意义。
- **天空色做过定量校正**：把产出与参考图都解码成像素，统计亮度 ≤150 的「背景
  像素」均值与分位，两轮才收敛到与参考差几个 RGB 单位内。肉眼比对会偏，量着调。
- **返回值来自 vm 沙箱**（Node 契约里）：`deepStrictEqual` 会因原型不同而假红，
  一律用长度/数值比较。

## 接线约束

- 星座不接管歌词：歌词由 stage3d 的 `.s3d-reading` / stanza 叠加层照常演出。
- 用户偏好键：`zodiacField`（背景星云）/ `zodiacInteract`（交互旋转），随
  Stage3D 偏好表落库；旧版本的 `sceneSource: 'tunnel'` 在 `configure()` 里
  一次性迁到 `'zodiac'`。形象图与星座骨架**不设开关**，常驻。
- 入口只在设置面板「舞台来源」与舞台控制舱分段（头部那排不挂舞台效果钮）。
- 内部场景 id 为 `zodiac`，宿主节点 `#s3d-zodiac`，源 class `s3d-zodiac-source`。
