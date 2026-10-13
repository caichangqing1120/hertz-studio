// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
//
// 皮肤：heijiao（黑胶）—— 生命周期 + 唱片拖转 + 导航抽屉 + 队列排布切换
// --------------------------------------------------------------------------
// 这套皮肤要三件事，都必须由 JS 做，理由各自不同：
//
// 1) **封面卡可点开歌词**（生命周期的一部分）
//    展开/收起是一个**用户动作**，而皮肤 CSS 有一条纪律：不许写交互状态
//    选择器，状态语义由 style.css 全站统一（见 skin.heijiao.css 文件头）。
//    于是"点一下展开"只能由生命周期来做，CSS 只负责两个状态各自的几何。
//    展开有两条路：点「展开歌词」按钮，或**直接点唱片**（网易云式翻面）——
//    后者复用同一套指针事件：拖转必须越过横向阈值，没越过的按下-抬起
//    就是一次点击，翻面。
//
// 2) **唱片可拖转 + 惯性**（本文件的主体）
//    转一个元素的最直接办法是 pointer 事件 + requestAnimationFrame。
//    CSS 动画做不到"跟着手指走"：style.css 里那条 disc-spin 的 transform
//    会与 JS 写的 transform 互相覆盖（表现是"唱片每帧被拽回 0°"），
//    所以 CSS 里把它停掉，角度一律走 --hj-turn 这一个通道。
//
// 3) **导航抽屉**（通栏换抽屉之后的新增件）
//    把手按钮与展开状态类都是皮肤自造的，业务 HTML 里没有；「当前视图名」
//    跟着业务层 setView 走，靠 MutationObserver 盯 .rail 的类变化同步 ——
//    业务层没有（也不该有）"通知皮肤"的钩子。
//
// 4) **队列排布两档**（卡片 / 行列表）
//    同样是皮肤自造的按钮组 + 状态类。切档只写一个类，几何交给 CSS：
//    卡片档的规则整组挂在 `.q-list:not(.hj-queue-list)` 下，列表档 = 撤掉
//    覆盖、落回 style.css 的行列表基线，本文件里不量任何像素。
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
  var NAV_OPEN_CLASS = 'hj-nav-open';
  var NAV_LEAVE_GRACE_MS = 350;   // 指针从把手走到菜单项的余量

  // 队列排布（卡片 / 行列表）。状态类打在 #queue-list 自己身上，CSS 用
  // .q-list:not(.hj-queue-list) 收口 —— 列表档因此直接落回 style.css 的
  // 行列表基线，不需要皮肤再写一份行几何（写了就会跟基线漂移）。
  var QUEUE_STORE_KEY = 'vmusic.heijiao.queue';
  var QUEUE_LIST_ID = 'queue-list';
  var QUEUE_LIST_CLASS = 'hj-queue-list';

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
  var navHandle = null;
  var navObserver = null;
  var navRail = null;
  var navPinned = false;
  var navHover = false;
  var navSuppress = false;   // 点把手关掉之后，压住悬停直到指针真的离开
  var navHoverCapable = true;
  var navLeaveTimer = 0;
  var armNode = null;
  var queueViews = null;

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

  function readStored(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  // ---------------------------------------------------------------------------
  // 导航抽屉
  // ---------------------------------------------------------------------------

  function isNavOpen() {
    return document.body.classList.contains(NAV_OPEN_CLASS);
  }

  /// 展开态 = 钉住 || 悬停。钉住只对**触屏**存在（触屏没有悬停可依赖，一次点按
  /// 必须自己开关）；有指针的设备上它恒为 false，抽屉完全跟着指针走。
  /// 两样都不落库：一个移开就收的浮层，把"开着"记进 localStorage 只会在下次
  /// 开机时凭空盖住内容。
  function syncNav() {
    var open = navPinned || navHover;
    if (isNavOpen() === open) return;
    document.body.classList.toggle(NAV_OPEN_CLASS, open);
    if (navHandle) navHandle.setAttribute('aria-expanded', String(open));
  }

  function setNavPinned(pinned) {
    navPinned = !!pinned;
    syncNav();
  }

  function navEnter() {
    if (!navHoverCapable || navSuppress) return;
    if (navLeaveTimer) { clearTimeout(navLeaveTimer); navLeaveTimer = 0; }
    navHover = true;
    syncNav();
  }

  /// 把手与抽屉之间隔着 16px 空隙（把手 10~48、抽屉 64~121），指针从把手走向
  /// 菜单项的路上必然先 leave 再 enter。不留这点余量，抽屉会在半路收掉，
  /// 表现就是"永远点不到菜单项"。
  function navLeave() {
    // 指针真的离开了，"点把手关掉"那次意图就过期了：再划回来算新的一次。
    navSuppress = false;
    if (navLeaveTimer) clearTimeout(navLeaveTimer);
    navLeaveTimer = setTimeout(function () {
      navLeaveTimer = 0;
      navHover = false;
      syncNav();
    }, NAV_LEAVE_GRACE_MS);
  }

  /// 点把手。**开着的时候点必须真的关掉** —— 用户报的"点击关闭无效果"就是
  /// 早先只翻钉住位造成的：指针停在把手上时悬停那一项恒为真，翻完还是开着。
  /// 所以这里关掉之外还要压住悬停，直到指针离开（navLeave 里解除），
  /// 否则同一次悬停会立刻把它顶回来，看上去仍然"点了没反应"。
  /// 关着的时候点 = 打开并保持（触屏没有悬停可用，这是它唯一的开关）。
  function navToggle() {
    if (isNavOpen()) {
      navPinned = false;
      navHover = false;
      navSuppress = true;
      if (navLeaveTimer) { clearTimeout(navLeaveTimer); navLeaveTimer = 0; }
      syncNav();
    } else {
      setNavPinned(true);
    }
  }

  function navEscape() {
    navHover = false;
    navSuppress = true;
    if (navLeaveTimer) { clearTimeout(navLeaveTimer); navLeaveTimer = 0; }
    setNavPinned(false);
  }

  /// 把手的文字 = 当前视图名。来源只能是 DOM：setView 在业务层切 active 类，
  /// 皮肤没有（也不该有）被通知的钩子；aria-label 优先 —— 队列条目上挂着
  /// 角标 <em>，textContent 会把数字也捞进来。
  function syncNavLabel() {
    if (!navHandle) return;
    var label = navHandle.querySelector('.hj-nav-label');
    if (!label) return;
    var rail = el('rail');
    var active = rail ? rail.querySelector('.rail-item.active') : null;
    var text = active
      ? (active.getAttribute('aria-label') || active.textContent || '').trim()
      : '导航';
    if (label.textContent !== text) label.textContent = text;
  }

  /// 键盘/触屏的出口：Escape 连钉住一起解掉。鼠标侧不需要"点别处收起"——
  /// 移开就收，所以这里也不挂文档级 click（那条会把点菜单项当成"外面"，
  /// 还会在切皮肤时把 mount 途中恢复的展开态一并收掉）。
  function onDocKeyDown(e) {
    if (e.key === 'Escape' && isNavOpen()) navEscape();
  }

  function mountNavDrawer() {
    var rail = el('rail');
    if (!rail || navHandle) return;
    navHandle = document.createElement('button');
    navHandle.type = 'button';
    navHandle.className = 'hj-nav-handle';
    navHandle.setAttribute('aria-controls', 'rail');
    navHandle.setAttribute('aria-expanded', 'false');
    navHandle.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-chevron-down"/></svg>' +
      '<span class="hj-nav-label"></span>';
    navHandle.onclick = navToggle;
    navRail = rail;
    // 触屏没有"悬停"这回事：手指按下会同时派发 pointerenter，若照收，
    // 一次点击就是"开→立刻关"，看上去点了没反应。所以只在设备真有指针
    // 悬停能力时才走悬停那条路，触屏交给上面的 navToggle 单点开关。
    try {
      navHoverCapable = !window.matchMedia || window.matchMedia('(hover: hover)').matches;
    } catch (e) { navHoverCapable = true; }
    // pointerenter/leave 不冒泡（与 mouseenter 同族），正好只认这两个节点自己。
    // 抽屉收起时是 visibility:hidden，收不到指针事件，所以热区只有把手。
    navHandle.addEventListener('pointerenter', navEnter);
    navHandle.addEventListener('pointerleave', navLeave);
    rail.addEventListener('pointerenter', navEnter);
    rail.addEventListener('pointerleave', navLeave);
    document.body.appendChild(navHandle);
    syncNavLabel();
    // 视图切换（点击、快捷键、命令面板）最终都落在 .rail 条目的 active 类上，
    // 盯类变化就覆盖了全部入口；hidden 变化（设置里关掉某个导航项）也要跟。
    if (typeof MutationObserver === 'function') {
      navObserver = new MutationObserver(syncNavLabel);
      navObserver.observe(rail, {
        subtree: true, childList: true,
        attributes: true, attributeFilter: ['class', 'hidden']
      });
    }
    document.addEventListener('keydown', onDocKeyDown);
    syncNav();   // 初始就是收起：抽屉只跟随指针，没有"上次开着"这回事
  }

  function unmountNavDrawer() {
    document.removeEventListener('keydown', onDocKeyDown);
    if (navLeaveTimer) { clearTimeout(navLeaveTimer); navLeaveTimer = 0; }
    if (navRail) {
      navRail.removeEventListener('pointerenter', navEnter);
      navRail.removeEventListener('pointerleave', navLeave);
      navRail = null;
    }
    if (navHandle) {
      navHandle.removeEventListener('pointerenter', navEnter);
      navHandle.removeEventListener('pointerleave', navLeave);
    }
    if (navObserver) { navObserver.disconnect(); navObserver = null; }
    document.body.classList.remove(NAV_OPEN_CLASS);
    navHover = false;
    navPinned = false;
    navSuppress = false;
    if (navHandle && navHandle.parentNode) navHandle.parentNode.removeChild(navHandle);
    navHandle = null;
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

    // 没越过横向阈值的按下-抬起 = 一次点击 → 翻面（网易云式：点封面看歌词，
    // 再点小唱片翻回去）。越过阈值的（真拖转）与被滚动判定接管的纵向手势
    // （onMove 里已把 dragging 置 false，走不到这里）都不算点击。
    if (!wasTurned) setOpen(!isOpen());

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
  // 它就是一张静态图。用方向键旋转、Home 归零、Enter/Space 翻面。
  function onKey(e) {
    var step = e.shiftKey ? KEY_STEP_FAST : KEY_STEP;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') angle -= step;
    else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') angle += step;
    else if (e.key === 'Home') angle = 0;
    else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpen(!isOpen());
      return;
    }
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
  // 唱机：唱臂节点
  // ---------------------------------------------------------------------------

  /// 唱臂是皮肤自造的节点（业务 HTML 里 .disc-wrap 只有唱片与律动环）。
  /// 它只负责"画"：落臂/抬臂完全由 CSS 读 body.is-playing，JS 不接播放态 ——
  /// 已经有一条 stage:playing-changed 在驱动自转，再挂一条就会两处状态互相追。
  /// viewBox 是 100×100 且与 .disc-wrap 同框（1 单位 = 盘面 1%），
  /// 支点 (108,40) 落在盘面右缘外，所以臂会探出方框 —— 靠 svg 的
  /// overflow:visible 画出来，不放大容器（放大就等于把唱臂算进拖转命中区）。
  function mountArm() {
    if (!discWrap || armNode) return;
    armNode = document.createElement('div');
    armNode.className = 'hj-arm';
    armNode.setAttribute('aria-hidden', 'true');
    armNode.innerHTML =
      '<svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">' +
        '<line class="hj-arm-rest" x1="98" y1="88.5" x2="104" y2="88.5"/>' +
        '<g class="hj-arm-swing">' +
          '<line class="hj-arm-tube" x1="105" y1="40" x2="79" y2="79"/>' +
          '<line class="hj-arm-glint" x1="105" y1="40" x2="79" y2="79"/>' +
          '<line class="hj-arm-stub" x1="105" y1="40" x2="107.5" y2="36"/>' +
          '<rect class="hj-arm-head" x="75.4" y="77.2" width="7.2" height="3.6" rx="1.1" transform="rotate(124 79 79)"/>' +
          '<circle class="hj-arm-weight" cx="107.5" cy="36" r="2.1"/>' +
        '</g>' +
        '<circle class="hj-arm-pivot" cx="105" cy="40" r="3.6"/>' +
        '<circle class="hj-arm-pin" cx="105" cy="40" r="1.1"/>' +
      '</svg>';
    discWrap.appendChild(armNode);
  }

  // ---------------------------------------------------------------------------
  // 队列排布：卡片 / 行列表
  // ---------------------------------------------------------------------------
  // 卡片是本皮肤对所有列表的统一做法，但队列同时是**有序清单**：想一眼看清
  // "下一首是谁"时，一屏五列的卡片反而不如一行一首按序号排下来读得快。
  // 所以只有队列给两档，曲库 / 收藏 / 歌单详情不给 —— 它们没有顺序语义。
  //
  // 状态类打在 #queue-list 上而不是 body 上：CSS 那侧要用
  // `.q-list:not(.hj-queue-list)` 把整组卡片规则一起关掉，行几何完全交回
  // style.css 的基线（见 skin.heijiao.css 第 4 节）。

  /// 唯一写入口，与 setOpen 同一条纪律：持久化写在这里而不是点击回调里，
  /// 将来任何新增的切换路径（快捷键、命令面板）都自动被记住。
  /// 不认识的值回落到卡片 —— 那是本皮肤的默认档。
  function setQueueMode(mode, persist) {
    var want = mode === 'list' ? 'list' : 'grid';
    var list = el(QUEUE_LIST_ID);
    if (list) list.classList.toggle(QUEUE_LIST_CLASS, want === 'list');
    if (queueViews) {
      var buttons = queueViews.querySelectorAll('button[data-hj-q-view]');
      for (var i = 0; i < buttons.length; i++) {
        var on = buttons[i].getAttribute('data-hj-q-view') === want;
        buttons[i].classList.toggle('active', on);
        buttons[i].setAttribute('aria-pressed', String(on));
      }
    }
    if (persist !== false) {
      try { localStorage.setItem(QUEUE_STORE_KEY, want); } catch (e) { /* 隐私模式 */ }
    }
  }

  function queueMode() {
    var list = el(QUEUE_LIST_ID);
    return list && list.classList.contains(QUEUE_LIST_CLASS) ? 'list' : 'grid';
  }

  /// 按钮组是皮肤自造的节点（业务 HTML 里没有），挂进队列视图的工具行，
  /// 卸载时摘掉 —— 与 .hj-lyric-toggle 同一套约定。
  function mountQueueViews() {
    var tools = document.querySelector('#view-queue .col-tools');
    if (!tools || queueViews) return;
    queueViews = document.createElement('div');
    queueViews.className = 'hj-q-views';
    queueViews.setAttribute('role', 'group');
    queueViews.setAttribute('aria-label', '队列显示方式');
    [['grid', '卡片'], ['list', '列表']].forEach(function (pair) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip';
      b.setAttribute('data-hj-q-view', pair[0]);
      b.textContent = pair[1];
      b.setAttribute('aria-pressed', 'false');
      b.onclick = function () { setQueueMode(pair[0]); };
      queueViews.appendChild(b);
    });
    // 排在「存为歌单」之前：它是**怎么看**，不是对队列内容做的操作。
    tools.insertBefore(queueViews, tools.firstChild);
    // 恢复一律 persist=false：开机那次无条件写回会把"没选过"和"选过"压成
    // 同一个值，默认档就此再也改不动（与 setPlaylistMode 同一条理由）。
    setQueueMode(readStored(QUEUE_STORE_KEY), false);
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
      // 键盘可达。role=slider + aria-valuenow 让读屏能播报当前角度；
      // Enter/Space 是翻面，标签里说清楚。
      discWrap.tabIndex = 0;
      discWrap.setAttribute('role', 'slider');
      discWrap.setAttribute('aria-label', '唱片，可拖动或用方向键旋转，回车展开或收起歌词');
      discWrap.setAttribute('aria-valuemin', '0');
      discWrap.setAttribute('aria-valuemax', '360');
      mountArm();
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
    setOpen(readStored(STORE_KEY) === 'open');

    // 导航抽屉：把手挂 body 上（fixed 浮件，不参与 .app 的栅格），
    // 卸载时统一摘掉。
    mountNavDrawer();

    // 队列的卡片/列表切换按钮，同样是皮肤自造节点、卸载时摘掉。
    mountQueueViews();

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
    unmountNavDrawer();
    document.body.classList.remove(OPEN_CLASS);
    // 排布状态类也在这一步摘：#queue-list 是业务节点，切走后它还在 DOM 里，
    // 留着类就是把黑胶的选择带进别的皮肤；再切回来时要从存储重新解析一次。
    var queueList = el(QUEUE_LIST_ID);
    if (queueList) queueList.classList.remove(QUEUE_LIST_CLASS);

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

    if (armNode && armNode.parentNode) armNode.parentNode.removeChild(armNode);
    armNode = null;
    if (toggleBtn && toggleBtn.parentNode) toggleBtn.parentNode.removeChild(toggleBtn);
    toggleBtn = null;
    if (queueViews && queueViews.parentNode) queueViews.parentNode.removeChild(queueViews);
    queueViews = null;
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
    isReducingMotion: function () { return reduceMotion; },
    isNavOpen: isNavOpen,
    queueMode: queueMode,
    navLabel: function () {
      var label = navHandle ? navHandle.querySelector('.hj-nav-label') : null;
      return label ? label.textContent : '';
    }
  };
})();