// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
//
// 皮肤：heijiao（黑胶）—— 生命周期 + 唱片拖转
// --------------------------------------------------------------------------
// 这套皮肤要两件事，都必须由 JS 做，理由各自不同：
//
// 1) **封面卡可点开歌词**（生命周期的一部分）
//    展开/收起是一个**用户动作**，而皮肤 CSS 有一条纪律：不许写交互状态
//    选择器，状态语义由 style.css 全站统一（见 skin.heijiao.css 文件头）。
//    于是"点一下展开"只能由生命周期来做，CSS 只负责两个状态各自的几何。
//
// 2) **唱片可拖转 + 惯性**（本文件的主体）
//    转一个元素的最直接办法是 pointer 事件 + requestAnimationFrame。
//    CSS 动画做不到"跟着手指走"：style.css 里那条 disc-spin 的 transform
//    会与 JS 写的 transform 互相覆盖（表现是"唱片每帧被拽回 0°"），
//    所以 CSS 里把它停掉，角度一律走 --hj-turn 这一个通道。
//
// 关键实现决策（都是踩过才知道的，写下来免得日后重犯）：
//
// · **只用 Pointer Events**，不碰 Mouse/Touch Events。
//   分开写三套事件处理是这类交互最常见的 bug 源：双写会在触屏上触发两次
//   （合成 mouse 事件），三写则要处理"pointercancel 后触摸流还在继续"。
//   pointer 事件本身就覆盖鼠标/触摸/笔，且自带 capture。
//
// · **惯性用 rAF 指数衰减，不用 CSS transition**。
//   惯性需要"从当前速度连续衰减"，那是逐帧积分的活；写成 transition 就变成
//   "松手后匀速转固定角度"，快甩和轻推表现一样，失真。
//
// · **角度不取模**。--hj-turn 存的是连续累加的角度（可以到几千度），
//   取模到 [0,360) 会在跨过 360° 那一帧产生 359°→0° 的跳变
//   （CSS 在两个值之间插值，于是唱片"倒转一整圈"）。
//
// · **旋转不触发页面滚动**：CSS 侧 `touch-action: pan-y` 声明"我只要横向"，
//   JS 侧只在**横向位移超过阈值且横向占优**之后才 setPointerCapture，
//   纵向手势原样放行让页面滚。两边都要，缺一半就不成立。
//
// · **prefers-reduced-motion 保留拖转、关掉自转与惯性**。
//   拖转是用户主动发起的直接操作（关掉等于卡片变成死图）；
//   自转与惯性是"没人要求它自己动"的那种动效，量最大、最该关。

(function () {
  'use strict';

  var SKIN_ID = 'heijiao';
  var OPEN_CLASS = 'hj-lyrics-open';
  var GRAB_CLASS = 'hj-grabbing';
  var STORE_KEY = 'vmusic.heijiao.lyrics';

  var AUTO_DEG_PER_SEC = 14;      // 播放中自转：约 26s 一圈，与基础 disc-spin 同速
  var FLICK_DEG_PER_SEC = 720;    // 惯性初速上限：1 圈/秒
  var COAST_FLOOR = 40;           // 低于这个角速度就认定"松手即停"
  var DRAG_THRESHOLD_PX = 6;      // 位移超过它才认定为"旋转"而不是误触
  var SAMPLE_WINDOW_MS = 90;      // 速度采样窗口：只取最近这一段，甩得越快越跟手
  var FRICTION = 0.94;            // 每帧保留的比例（≈每秒衰减到 2.5%）
  var KEY_STEP = 10;              // 方向键一档
  var KEY_STEP_FAST = 30;         // Shift + 方向键一档

  var mounted = false;
  var discWrap = null;
  var toggleBtn = null;

  // 旋转状态。全部收在闭包里，不挂 window —— 挂上去就成了全局可变状态，
  // 切皮肤时清不干净（这类"漏一处就在别的皮肤里继续转"的残留最难查）。
  var angle = 0;          // 当前角度（连续，不取模）
  var dragging = false;   // 是否正在拖
  var pointerId = null;   // 当前捕获的指针
  var startX = 0;
  var startY = 0;
  var startAngle = 0;
  var turned = false;     // 本次按下是否已越过横向阈值
  var samples = [];       // 速度采样 [{ t, deg }]
  var spinVel = 0;        // 惯性角速度（度/秒）
var rafId = 0;
var looping = false;   // 本轮 rAF 是否正在进行（"起新轮"与"续下一帧"的判据）
var lastFrame = 0;
  var reduceMotion = false;
  var mql = null;

  function el(id) { return document.getElementById(id); }

  function readReduceMotion() {
    try {
      return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    } catch (e) { return false; }
  }

  // 用户中途改系统动效设置时必须能立刻生效，不能只在 mount 时读一次。
  function onMotionPrefChange(e) {
    reduceMotion = !!e.matches;
    if (reduceMotion) spinVel = 0;
    ensureLoop();
  }

  /// 唯一的角度出口。自转 / 拖转 / 惯性三条路都从这里落到 CSS 变量上 ——
  /// 集中在一处才能保证它们不会互相踩。
  function writeAngle() {
    if (!discWrap) return;
    discWrap.style.setProperty('--hj-turn', angle.toFixed(2) + 'deg');
    discWrap.setAttribute('aria-valuenow',
      String(Math.round(((angle % 360) + 360) % 360)));
  }

  // ---------------------------------------------------------------------------
  // 展开 / 收起歌词
  // ---------------------------------------------------------------------------

  function isOpen() {
    return document.body.classList.contains(OPEN_CLASS);
  }

  /// 唯一写入口。持久化写在这里而不是点击回调里：任何未来新增的展开路径
  /// （快捷键、其它入口）都自动被记住，不会漏。
  function setOpen(open) {
    document.body.classList.toggle(OPEN_CLASS, !!open);
    if (toggleBtn) {
      toggleBtn.textContent = open ? '收起歌词' : '展开歌词';
      toggleBtn.setAttribute('aria-expanded', String(!!open));
      toggleBtn.setAttribute('aria-label', toggleBtn.textContent);
    }
    // localStorage 里的是**用户的选择**，不是临时状态，unmount 不删 ——
    // 切走再切回来，歌词该是展开的就展开着。
    try { localStorage.setItem(STORE_KEY, open ? 'open' : 'closed'); } catch (e) { /* 隐私模式 */ }
  }

  function readStored() {
    try { return localStorage.getItem(STORE_KEY); } catch (e) { return null; }
  }

  // ---------------------------------------------------------------------------
  // 旋转：指针
  // ---------------------------------------------------------------------------

  /// 横向位移 → 角度增量。系数 0.5 是"转一整圈需要划过约 2 倍直径"的手感：
  /// 1.0 太灵敏（一小抖转过 180°），0.25 太钝（划出卡片还没转一圈）。
  function onDown(e) {
    if (!mounted || dragging) return;
    // 只接主键 / 单指。右键要走上下文菜单，拦下来会让用户在唱片上
    // 点不出任何东西（菜单是业务节点的行为，不该被皮肤抢走）。
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    dragging = true;
    turned = false;
    pointerId = e.pointerId;
    startX = e.clientX;
    startY = e.clientY;
    startAngle = angle;
    spinVel = 0;
    samples = [{ t: e.timeStamp, deg: angle }];
    // 不立刻 capture：先看用户往哪走。纵向为主时不抢（见文件头说明）。
  }

  function onMove(e) {
    if (!dragging || e.pointerId !== pointerId) return;
    var dx = e.clientX - startX;
    var dy = e.clientY - startY;

    if (!turned) {
      if (Math.abs(dx) < DRAG_THRESHOLD_PX && Math.abs(dy) < DRAG_THRESHOLD_PX) return;
      // 判定方向：横向占优才接管。相等时判为纵向（放行滚动）——
      // 45° 对角线上两种意图无法区分，让给滚动更安全（滚动总能划回来，
      // 唱片转过去了用户却不知道怎么转回来）。
      if (Math.abs(dx) <= Math.abs(dy)) { dragging = false; return; }
      turned = true;
      // 到这一步才捕获指针：此刻起即使用户划出卡片，手势也归我们。
      try { discWrap.setPointerCapture(e.pointerId); } catch (err) { /* 已释放 */ }
      if (discWrap) discWrap.classList.add(GRAB_CLASS);
    }

    e.preventDefault();
    angle = startAngle + dx * 0.5;
    samples.push({ t: e.timeStamp, deg: angle });
    // 采样窗口外的丢掉。窗口太短会对单帧抖动敏感（甩一下被判成极快速，
    // 松手后唱片疯转好几圈）；太长则拖了 3 秒再松手，按的是 3 秒前的速度。
    while (samples.length > 2 && e.timeStamp - samples[0].t > SAMPLE_WINDOW_MS) {
      samples.shift();
    }
    writeAngle();
  }

  function onUp(e) {
    if (!dragging || (pointerId !== null && e.pointerId !== pointerId)) return;
    var wasTurned = turned;
    dragging = false;
    turned = false;
    pointerId = null;
    if (discWrap) discWrap.classList.remove(GRAB_CLASS);
    try { discWrap.releasePointerCapture(e.pointerId); } catch (err) { /* 未捕获 */ }

    // 松手时的角速度（度/秒），供惯性用。
    var vel = 0;
    if (wasTurned && samples.length >= 2) {
      var a = samples[0];
      var b = samples[samples.length - 1];
      var dt = (b.t - a.t) / 1000;
      if (dt > 0.001) vel = (b.deg - a.deg) / dt;
    }
    samples = [];
    // 给一个下限而不是严格 >0：慢拖的最后一帧常有量化噪声
    // （触摸屏尤其明显），否则唱片会莫名其妙自己转起来。
    spinVel = (!reduceMotion && wasTurned && Math.abs(vel) > COAST_FLOOR)
      ? Math.max(-FLICK_DEG_PER_SEC, Math.min(FLICK_DEG_PER_SEC, vel))
      : 0;
    ensureLoop();
  }

  /// 指针在中途被系统打断（来电、通知、系统手势）。此时不该有惯性：
  /// 用户已经不在拖了，唱片继续转是"幽灵动作"。
  function onCancel(e) {
    if (!dragging || (pointerId !== null && e.pointerId !== pointerId)) return;
    dragging = false;
    turned = false;
    pointerId = null;
    spinVel = 0;
    samples = [];
    if (discWrap) {
      discWrap.classList.remove(GRAB_CLASS);
      try { discWrap.releasePointerCapture(e.pointerId); } catch (err) { /* 已释放 */ }
    }
    ensureLoop();
  }

  // ---------------------------------------------------------------------------
  // 键盘旋转
  // ---------------------------------------------------------------------------
  // 唱片是这套皮肤唯一的交互，不能只绑指针 —— 否则纯键盘用户手里
  // 它就是一张静态图。用方向键旋转、Home 归零。
  function onKey(e) {
    var step = e.shiftKey ? KEY_STEP_FAST : KEY_STEP;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') angle -= step;
    else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') angle += step;
    else if (e.key === 'Home') angle = 0;
    else return;
    e.preventDefault();
    spinVel = 0;          // 键盘操作不该引发自转
    ensureLoop();
    writeAngle();
  }

  // ---------------------------------------------------------------------------
  // 旋转：帧循环
  // ---------------------------------------------------------------------------

  /// 一条 rAF 承担自转与惯性两件事。空闲时（无惯性、没在播放）自动停 ——
  /// 常驻 rAF 在标签页里烧电，且会让这台机器永远醒着（笔记本风扇转）。
  ///
  /// 这个函数**只负责"起"与"停"**，续帧不归它管（续帧在 tick 末尾显式重排）。
  /// 混在一起是本文件最难查的一个 bug：`looping` 用 rafId 判不起新轮、
  /// 不重置时基，两次都不对 ——
  ///   · 判 `!rafId` → 每帧重置 lastFrame，dt 恒为 0，角度永不推进；
  ///   · 判 `!looping` → 续帧时 looping 仍是 true，本帧不发下一帧，
  ///     循环在第一帧后就静默停住（实测 51 帧里只有第 1 帧真积分过）。
  /// 两种症状一模一样：循环在跑、速度在衰减、角度不动、控制台不报错。
  function ensureLoop() {
    var playing = document.body.classList.contains('is-playing');
    var needs = spinVel !== 0 || (playing && !reduceMotion && !dragging);
    if (needs && !looping) {
      looping = true;
      lastFrame = 0;              // 只有起新的一轮才清时基
      rafId = requestAnimationFrame(tick);
    } else if (!needs && looping) {
      looping = false;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = 0;
      lastFrame = 0;
    }
  }

  function tick(now) {
    rafId = 0;
    // 首帧没有上一次的时基，算出来的 dt 是 NaN 或巨大值，一帧转过几千度。
    if (!lastFrame) lastFrame = now;
    // dt 夹在 50ms：切标签页回来的第一帧 dt 可能是好几秒，不夹的话
    // 唱片会"瞬移"转过几圈（用户看到的是一次抽搐）。
    var dt = Math.min((now - lastFrame) / 1000, 0.05);
    lastFrame = now;

    if (!dragging) {
      if (spinVel !== 0) {
        angle += spinVel * dt;
        // 指数衰减：越转越慢，与真唱片被轴承摩擦拖停的观感一致。
        // 线性减速会在停下时突然一顿。
        spinVel *= FRICTION;
        if (Math.abs(spinVel) < 4) spinVel = 0;   // 4°/s 已是肉眼不可辨
      } else if (!reduceMotion && document.body.classList.contains('is-playing')) {
        angle += AUTO_DEG_PER_SEC * dt;
      }
    }
    // 拖拽中不叠加任何自动运动：手在拖时再加自转，等于"跟手"永远差一点。

    writeAngle();
    // ⚠ 续帧必须**在这里显式重排**，不能交回 ensureLoop 用条件判断。
    // 本帧开头已经把 rafId 置 0，而 ensureLoop 的两种判据都发不出这一帧：
    //   · 用 `!rafId` 判 → 每帧都判定成"起新轮"，于是每帧重置 lastFrame，
    //     dt 恒为 0，角度永不推进；
    //   · 用 `!looping` 判 → 本轮 looping 仍是 true，同样发不出下一帧，
    //     循环在第一帧后就静默停住（实测：51 帧里只有第 1 帧真正执行过
    //     积分，之后 rafId 一直是 0）。
    // 两种症状都是"循环在跑、速度在衰减、角度不动"，且都不报错。
    // 正确写法：帧末自己排下一帧，停止与否交给 ensureLoop 判断。
    if (looping) rafId = requestAnimationFrame(tick);
    ensureLoop();
  }

  /// 播放态跳变。事件由 stage.js 派发（见那里的 playingChanged 分支），
  /// 挂在 body 上是因为它随快照高频刷新，走类切换比查 WS 状态便宜。
  function onPlayingChange() {
    spinVel = 0;      // 从暂停切到播放，别把暂停前的惯性续上
    ensureLoop();
  }

  // ---------------------------------------------------------------------------
  // 生命周期
  // ---------------------------------------------------------------------------

  function mount() {
    if (mounted) return;
    // 唱片容器判空是硬要求：下面要往它身上加事件、写 style、设 tabIndex，
    // 缺节点时直接抛 TypeError，会把整条生命周期（连设置浮层的挂载）掀掉。
    // 契约脚本的沙箱也只喂部分节点，那里必须安静地什么都不做。
    discWrap = document.querySelector('.stage .disc-wrap');
    reduceMotion = readReduceMotion();
    angle = 0;
    spinVel = 0;
    samples = [];
    dragging = false;
    mounted = true;

    if (discWrap) {
      writeAngle();
      discWrap.addEventListener('pointerdown', onDown);
      discWrap.addEventListener('pointermove', onMove);
      discWrap.addEventListener('pointerup', onUp);
      discWrap.addEventListener('pointercancel', onCancel);
      discWrap.addEventListener('keydown', onKey);
      // 键盘可达。role=slider + aria-valuenow 让读屏能播报当前角度。
      discWrap.tabIndex = 0;
      discWrap.setAttribute('role', 'slider');
      discWrap.setAttribute('aria-label', '唱片，可拖动或用方向键旋转');
      discWrap.setAttribute('aria-valuemin', '0');
      discWrap.setAttribute('aria-valuemax', '360');
    }

    if (window.matchMedia) {
      try {
        mql = window.matchMedia('(prefers-reduced-motion: reduce)');
        // Safari 14 以下只有 addListener。两种都得认，否则那条皮肤在旧
        // Safari 上改不动效设置却不报错（静默失效最难查）。
        if (mql.addEventListener) mql.addEventListener('change', onMotionPrefChange);
        else if (mql.addListener) mql.addListener(onMotionPrefChange);
      } catch (e) { mql = null; }
    }
    document.addEventListener('stage:playing-changed', onPlayingChange);

    // 切换按钮是皮肤自造的节点，业务 HTML 里没有。卸载时统一摘掉。
    var stage = el('stage');
    if (stage && !toggleBtn) {
      toggleBtn = document.createElement('button');
      toggleBtn.type = 'button';
      toggleBtn.className = 'hj-lyric-toggle';
      toggleBtn.onclick = function () { setOpen(!isOpen()); };
      stage.appendChild(toggleBtn);
    }
    // 先设文案再落状态类：反过来会让按钮上留着一帧"收起歌词"
    // 而歌词还没展开。
    setOpen(readStored() === 'open');

    // 设置浮层与所有皮肤共用一份（skins/skin-settings-sheet.js）：
    // #view-settings 搬进浮层，setView('settings') 被拦截成开浮层，
    // 持久化逻辑与其它皮肤完全一致。
    if (window.SkinSettingsSheet) window.SkinSettingsSheet.mount();

    ensureLoop();
  }

  function unmount() {
    // 顺序有讲究：先摘状态类与监听，再摘节点。反过来的话，摘节点那一帧
    // body 上还留着 OPEN_CLASS，CSS 会对着一个已经不在的元素算样式。
    // 设置浮层是共用的业务节点载体，必须先于自己的节点归还，否则
    // 锚点还原会把 #view-settings 留在已被删除的浮层里。
    if (window.SkinSettingsSheet) window.SkinSettingsSheet.unmount();
    document.body.classList.remove(OPEN_CLASS);

    if (rafId) { cancelAnimationFrame(rafId); rafId = 0; }
    // looping 必须一并复位：留着 true 的话，下次挂载时 ensureLoop 的
    // "needs && !looping" 永远不成立 → 唱片再也转不起来（且不报错）。
    looping = false;
    lastFrame = 0;
    if (mql) {
      if (mql.removeEventListener) mql.removeEventListener('change', onMotionPrefChange);
      else if (mql.removeListener) mql.removeListener(onMotionPrefChange);
      mql = null;
    }
    document.removeEventListener('stage:playing-changed', onPlayingChange);

    if (discWrap) {
      discWrap.removeEventListener('pointerdown', onDown);
      discWrap.removeEventListener('pointermove', onMove);
      discWrap.removeEventListener('pointerup', onUp);
      discWrap.removeEventListener('pointercancel', onCancel);
      discWrap.removeEventListener('keydown', onKey);
      if (discWrap.classList) discWrap.classList.remove(GRAB_CLASS);
      // --hj-turn 是皮肤写的，摘掉免得切回别的皮肤时残留一个角度。
      discWrap.style.removeProperty('--hj-turn');
      // 摘掉皮肤加的键盘可达性：role/aria 是给 slider 用的，留着会让
      // 读屏在别的皮肤里仍播报"唱片，可拖动"。tabIndex 退回 -1 而不是 0：
      // 基础样式没给 .disc-wrap 任何 tabindex，0 会凭空多出一个 Tab 停靠点。
      discWrap.removeAttribute('role');
      discWrap.removeAttribute('aria-label');
      discWrap.removeAttribute('aria-valuemin');
      discWrap.removeAttribute('aria-valuemax');
      discWrap.removeAttribute('aria-valuenow');
      discWrap.removeAttribute('tabindex');
    }

    if (toggleBtn && toggleBtn.parentNode) toggleBtn.parentNode.removeChild(toggleBtn);
    toggleBtn = null;
    discWrap = null;
    mounted = false;
    angle = 0;
    spinVel = 0;
    samples = [];
    // 故意不删 localStorage：那是用户的选择。
  }

  window.Skins.registerLifecycle(SKIN_ID, { mount: mount, unmount: unmount });

  /// 暴露仅用于排障 / 契约脚本。
  window.__heijiaoSkin = {
    isMounted: function () { return mounted; },
    isOpen: isOpen,
    angle: function () { return angle; },
    hasDisc: function () { return !!discWrap; },
    isDragging: function () { return dragging; },
    isReducingMotion: function () { return reduceMotion; }
  };
})();