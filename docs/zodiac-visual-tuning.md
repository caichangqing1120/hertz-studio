# 星座 Zodiac 视觉参数

「星座 · 十二星图」是粒子三维舞台：十二座风格化星图沿黄道环排布，背景星场
包裹机位，星点随音乐闪烁增辉，连线随低频呼吸。机位在环心缓转，可拖拽环绕、
滚轮推拉、双击复位（静置 6 秒后回到巡航）。

## 构建链

- 场景引擎：`tools/zodiac-stage/src/`
  - `zodiac.js`：十二宫星图数据（星点 `[x, y, mag]` + 连线）与纯几何（环位、景深、缩放钳制）
  - `world.js`：背景星场、星座粒子（自定义点着色器）、连线
  - `main.js`：立面（probe/mount/unmount/resize/setTime/setAudio/setPrefs/stats/capture/debug/pure）、相机巡航与交互
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

## 可调常量

| 位置 | 常量 | 含义 |
| --- | --- | --- |
| `zodiac.js` | `RING_RADIUS` / `SIGN_SCALE` / `DEPTH_SPREAD` | 黄道环半径、星图放大、星点景深散布 |
| `zodiac.js` | `ZODIAC` | 各座星点坐标、星等与连线 |
| `world.js` | `STAR_SIZE` / `STAR_COLOR` / `FIELD_COUNTS` | 星等尺寸/色温与各画质档背景星数 |
| `main.js` | `AUTO_SPIN` / `DIST_DEFAULT/MIN/MAX` / `RESUME_IDLE_MS` | 巡航转速、缩放范围、回巡航静置时间 |
| `main.js` | `QUALITY` | 各档 DPR 上限与像素预算（与 stage3d 主场景同公式） |

## 接线约束

- 星座不接管歌词：歌词由 stage3d 的 `.s3d-reading` / stanza 叠加层照常演出
  （与海岸舞台一致）。
- 用户偏好键：`zodiacLines` / `zodiacField` / `zodiacInteract`，随 Stage3D
  偏好表落库；旧版本的 `sceneSource: 'tunnel'` 在 `configure()` 里一次性迁到
  `'zodiac'`。
- 内部场景 id 为 `zodiac`，宿主节点 `#s3d-zodiac`，源 class `s3d-zodiac-source`。
