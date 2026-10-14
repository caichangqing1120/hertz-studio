# 星座 Zodiac 视觉参数

「星座 · 十二星图」是粒子三维舞台：每次只登场一座 —— 粒子从深空云团汇聚成
星座的立体造型（动物/器物），停留微摆、随音乐呼吸增辉，随后散开飞入下一片
云，12 座循环。机位绕造型缓转，可拖拽环绕、滚轮推拉、双击复位。

镜头上不再是「黑底上一团白粒子」，而是参考图那套语言：**深蓝渐变星空 +
半透明低多边形形象图 + 清晰的矢量星座连线与星点**。

## 图层（由远及近，靠 renderOrder 排序）

所有图层的材质都是 `depthWrite:false` + `depthTest:false`，深度只由 renderOrder
表达，不靠 z 值大小。改顺序 = 改 `renderOrder`，不要试图用 z 拉开。

| renderOrder | 图层 | 构成 |
| --- | --- | --- |
| -1000 | 天空穹顶 | 倒扣球（r=140）+ 纵向三段渐变 + 顶点级 FBM 星云 + 屏幕暗角 |
| -900 | 星场 | 细密星点（冷蓝白，尺寸 3.4 次幂长尾） |
| -890 | 星云斑块 | 26 个大尺度柔斑（紫/靛/青） |
| -880 | 星光点缀 | 四芒星 + 十字光刺 + 柔晕 |
| -100 | 形象图柔光 | 造型表面点云，大点径、低透明 → 半透明「体量」 |
| -90 | 形象图网格 | 非索引三角面片 + 逐面随机明度（低多边形面片） |
| -80 | 形象图网格边 | 去重网格边，矢量线 |
| -10 | 主粒子池 | entry/shape/exit 三组位置缓冲，着色器内插值 |
| 10 | 星座连线（晕） | 宽丝带柔光 |
| 11 | 星座连线（芯） | 细丝带，矢量清晰 |
| 12 | 星座星点 | 四芒星，主星最大 |

`-1000 / -900~-880 / -10` 各是一组，`-100 ~ 12` 全部挂在 `root` 下跟着造型
一起微摆；`field` 偏好开关整组背景星云（星场 + 星云斑块 + 星光点缀）。

## 三层坐标对齐（这一条错了全盘皆错）

**造型点云、形象图网格、星座骨架共用同一套 fit**（`shapeFit(i)`，按 id 缓存的
纯函数）：先把采样点的包围盒中心归零、按最长边等比缩到 ±1，再乘 `FIG_HALF`。
因此

- 十二座在镜头里体量一致、居中（不会出现「狮子偏小又靠下」）；
- 形象图与骨架天然贴在粒子上，不需要二次对位；
- 骨架的坐标写在**造型自己那套空间里**（侧视、头朝 +x），加新星座时要照着
  `shapeParts(i)` 的部件坐标摆节点，不是照天空里的真实星图摆。

`SHAPE_BOX` 是最后一道裁剪；`FIG_HALF` 是体量归一化的目标半宽。

## 构建链

- 场景引擎：`tools/zodiac-stage/src/`
  - `zodiac.js`：十二宫元数据、部件 DSL（椭球体积/壳、贝塞尔管、螺旋）、
    `shapeParts` / `buildShape`（点云采样）、`shapeFit`（归一化参数）、
    `buildFigureMesh`（表面点云 + Delaunay 低多边形面片 + 去重网格边）、
    `CONSTELLATION` / `buildConstellation` / `buildRibbon`（星座骨架与连线丝带）、
    `buildCloud`（深空云团）、`buildSeeds`、`timelineAt`，全部纯函数
  - `world.js`：十一层图层的搭建与逐帧驱动
  - `main.js`：立面、轨道相机与交互、时间线驱动、GPU 资源预热
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
（`smooth01((k-0.42)/0.5)`），散开前段就撤（`1 - smooth01(k/0.62)`），六层共用
同一个 `figAlpha`；为 0 时整组 `visible=false`，省掉六次 draw call。

## 可调常量

| 位置 | 常量 | 含义 |
| --- | --- | --- |
| `zodiac.js` | `GATHER/HOLD/DISPERSE_SECONDS` | 单座三段时长 |
| `zodiac.js` | `FIG_HALF` | 造型归一化后的半宽（体量一致性的唯一旋钮） |
| `zodiac.js` | `SHAPE_BOX` | 造型画框（最后一道裁剪） |
| `zodiac.js` | `FIGURE_Z` / `CONSTELLATION_Z` | 形象图 / 连线的深度（前者必须更小） |
| `zodiac.js` | `LINE_CORE_WIDTH` / `LINE_HALO_WIDTH` | 连线细芯 / 光晕宽度（世界单位） |
| `zodiac.js` | `FIGURE_MESH_POINTS` / `FIGURE_MESH_EXP` | 三角化采样点数 / 配额压缩指数 |
| `zodiac.js` | `shapeParts(i)` | 每座的部件清单与采样权重 |
| `zodiac.js` | `CONSTELLATION[i]` | 每座的骨架节点与连线（造型空间坐标） |
| `world.js` | `SHAPE_/FIGURE_/FIELD_COUNTS`、`SPARKLE_COUNTS` | 各画质档的点数 |
| `world.js` | `SKY_VERT/FRAG` 的 uniform 默认值 | 天空三段色、星云色与强度、暗角 |
| `world.js` | `figureOpacity` / `update()` 里的 opacity 系数 | 形象图与连线的浓度 |
| `world.js` | `SHAPE_VERT` | 汇聚螺旋、呼吸、散开轨迹的形态参数 |
| `main.js` | `DIST_DEFAULT/MIN/MAX` / `CAMERA_DRIFT` | 缩放范围、机位漂移速度 |
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
- **低多边形网格的配额要压缩**（`FIGURE_MESH_EXP`）：直接用部件权重，细腿细角
  分不到几个点，整条腿在网格里消失；权重开 0.42 次方后每根管都够点连成面。
- **Delaunay 必须按边长筛三角形**（`FIGURE_MAX_EDGE`）：不筛的话两条腿之间、
  尾巴与身体之间会连出跨缝隙的大长条，一眼假。
- **自转改成按播放时间求值的微摆**：连续自转会把「平面形象图」转到侧棱上变成
  一条线，而且 seek 到任意时刻要对得上。
- **每座每层一套预建几何**（共 88 个）+ **预热**（`main.js` 的 `warmup()`）：
  three 按 `BufferAttribute` **包装对象**认 GPU buffer，把新 attribute 塞进同一个
  几何时旧 buffer 不会被回收（弱引用只跟对象走，几何 dispose 也只删当时挂着的那几个）
  —— 所以「一个几何反复换 attribute」既漏 buffer 又收不干净。12 座各配一套几何、
  与座次无关的 attribute 跨座复用同一批对象，`dispose()` 才真的能把住。
  换座 = 六个对象各指一次几何，零分配。预热把 88 套缓冲与程序先上传一次，
  `stats().geometries` 从此恒定，契约里的驻留数断言才有意义。
- **返回值来自 vm 沙箱**（Node 契约里）：`deepStrictEqual` 会因原型不同而假红，
  一律用长度/数值比较。

## 接线约束

- 星座不接管歌词：歌词由 stage3d 的 `.s3d-reading` / stanza 叠加层照常演出。
- 用户偏好键：`zodiacField`（背景星云）/ `zodiacInteract`（交互旋转），随
  Stage3D 偏好表落库；旧版本的 `sceneSource: 'tunnel'` 在 `configure()` 里
  一次性迁到 `'zodiac'`。形象图与星座骨架**不设开关**，常驻。
- 入口只在设置面板「舞台来源」与舞台控制舱分段（头部那排不挂舞台效果钮）。
- 内部场景 id 为 `zodiac`，宿主节点 `#s3d-zodiac`，源 class `s3d-zodiac-source`。
