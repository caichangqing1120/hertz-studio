// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
//
// 「三维空间」相机运行时 —— 自上游参考项目的四个相机模块移植的纯数学层
// （出处、行号与许可边界记于 NOTICE「Design lineage」与 docs/design/space3d-mode.md
// §6，作者已同意照搬其本人代码）：01-scene/01-orbit-free-camera.js（orbit 状态与
// 自由镜头）、01-scene/03-focus-cinema-camera.js（updateCamera/updateCinema）、
// 01-scene/02-beat-camera-runtime.js（combo → 镜头映射段 :639-1015）、
// 10-shell/00-gesture-control.js（转台世界旋转段 :39-90,759-780）。
// 零 DOM、零 three，可 Node 直测（scripts/check-space-camera.js）。
//
// 与原作的差异，全部是宿主假设差异，不是数学差异：
//   · 原作所有「每帧固定比例」的缓动在这里换算成 1 − exp(−dt/τ)，τ 按毫秒、
//     由原作的 60fps 每帧系数反解（tauFromFrame）——60Hz 下行为与原作逐位一致，
//     其它刷新率下按墙钟一致。这是 onset.js 头注同一条项目纪律：帧门档位变了，
//     呼吸速度不能变。
//   · 节拍不自带 FFT：beat(pulse, meta) 收 Onset 的脉冲与起音序号。combo 派生
//     （(count-1)%4 四槽 + strength>0.84 时 accent 覆盖、不覆盖 downbeat 槽）与
//     五个 combo 的 amp/zoom/phi/roll 乘数、kick 映射逐字保留
//     （02-beat-camera-runtime.js:575-579,712-718,821-841,974-1014）；
//     djMode / 服务端 beatmap / cinemaTrackProfile 分支不在本项目，整体不搬，
//     动态幅度只保留 cinemaDynamics（能量/低频 → scale）。
//   · 世界旋转的「可见对象」由调用方驱动：worldPose() 给出 0.055/帧逼近层
//     （τ≈295ms）之后的视觉角；轴重置同时平移目标与视觉角，判据是同朝向
//     两次拖拽输出角在 mod 2π 下相等，不是「目标减当前 < 2π」。
//   · 机位基线只有一个 owner（docs/design/space3d-mode.md §12.4）：本模块
//     不留任何按预设 id 索引的基线表，setBaseline(pose) 只收 pose。
(function () {
  'use strict';

  var TAU = Math.PI * 2;
  // —— 源值（逐字来自上列四处，行号见 docs/design/space3d-mode.md §6）—— //
  var BASE_FOV = 45;
  var MIN_PHI = -Math.PI * 0.45, MAX_PHI = Math.PI * 0.45;   // 01-orbit-free-camera.js:6
  var MIN_RADIUS = 2.4, MAX_RADIUS = 14.0;                   // :7
  var FREE_PITCH = Math.PI * 0.49;                           // :58
  var FREE_YAW = Math.PI * 8;                                // :57
  var FREE_ROLL = Math.PI;                                   // :59
  var FREE_FOV_MIN = 26, FREE_FOV_MAX = 72;                  // :60
  var SPIN_X = 0.0032, SPIN_Y = 0.0034, SPIN_MAX = 6.2;      // 00-gesture-control.js:39-43
  var SPIN_DAMPING = 0.90;        // 惯性 pow(0.90, dt*60)   :13,767
  var SPIN_CUTOFF = 0.01;         // 惯性截止                 :769
  var SPIN_LIFT = 0.46;           // 抬手速度系数             :56-57
  var REBASE_LIMIT = Math.PI * 10;                            // :75
  var WORLD_FRAME = 0.055;        // 目标角→视觉角 0.055/帧   11-main-loop.js:635-636
  var RECENTER_K0 = 0.050, RECENTER_KGAIN = 0.080, RECENTER_KMIN = 0.052, RECENTER_KMAX = 0.135;
  var RECENTER_SETTLE = 0.0012, RECENTER_SETTLE_R = 0.014, RECENTER_TIMEOUT = 1800;
  var FOCUS_FRAME = 0.10, FOCUS_FRAME_ACTIVE = 0.16;         // 03-focus-cinema-camera.js:85
  var RADIUS_FRAME = 0.07, RADIUS_FRAME_ACTIVE = 0.12;       // :86
  var FOV_FRAME_IN = 0.24, FOV_FRAME_OUT = 0.12;             // :139
  var PUNCH_FRAME = 0.86;                                    // :142
  var CINE_OFF_FRAME = 0.95;                                 // :274-276
  var WORLD_FRAME_TAU = tauFromFrame(WORLD_FRAME);           // ≈295ms
  // 节拍镜头（00-state/03-beat-dj-state.js:35-55 + 02-beat-camera-runtime.js）
  var BEAT = {
    minInterval: 0.500, realtimeMinInterval: 0.460, mergeWindow: 0.135,
    attack: 0.028, hold: 0.030, release: 0.185, maxEvents: 8
  };
  // kick/包络跟随的每帧系数（02-beat-camera-runtime.js:1010-1014），按字段分开。
  var KICK_FRAME = {
    punch: { up: 0.72, down: 0.38 },
    theta: { up: 0.70, down: 0.36 },
    phi: { up: 0.70, down: 0.36 },
    radius: { up: 0.72, down: 0.34 },
    roll: { up: 0.82, down: 0.44 }
  };
  // 暂停时的衰减：punch pow(0.08,dt)、kick pow(0.05,dt)（:923-927）。
  var PAUSE_PUNCH_TAU = 1000 / -Math.log(0.08);
  var PAUSE_KICK_TAU = 1000 / -Math.log(0.05);
  // cinemaDynamics 的每帧系数（02-beat-camera-runtime.js:85-98）。
  var DYN = { avgUp: 0.010, avgDown: 0.004, lowUp: 0.012, lowDown: 0.005,
    peakDecay: 0.9988, scaleUp: 0.045, scaleDown: 0.022 };

  function tauFromFrame(k) {
    // 60fps 下「每帧靠近 k」等价于时间常数 τ = (1000/60) / −ln(1−k)。
    var kk = Math.min(0.999999, Math.max(1e-6, k));
    return (1000 / 60) / -Math.log(1 - kk);
  }
  function clamp(v, lo, hi) { return v < lo ? lo : (v > hi ? hi : v); }
  function clamp01(v) { return clamp(v, 0, 1); }
  function damp(cur, target, tauMs, dtMs) {
    return cur + (target - cur) * (1 - Math.exp(-Math.max(0, dtMs) / Math.max(0.001, tauMs)));
  }
  function smoothstep(x) { x = clamp01(x); return x * x * (3 - 2 * x); }
  function shortestAngleDelta(from, to) {
    return Math.atan2(Math.sin(to - from), Math.cos(to - from));
  }
  function easeOutCubic01(t) { t = clamp01(t); return 1 - Math.pow(1 - t, 3); }
  var clockFn = (typeof performance !== 'undefined' && performance.now)
    ? function () { return performance.now(); } : function () { return Date.now(); };

  // —— 状态 —— //
  var cam = {
    userT: 0, userP: 0.08, userR: 6.6,           // 目标（基线写入；自由镜头回正也会写回）
    baseT: 0, baseP: 0.08, baseR: 6.6,           // 基线（唯一 owner：Space3D 的注册表）
    curT: 0, curP: 0.08, curR: 6.6,              // 视觉（一阶低通之后）
    cineT: 0, cineP: 0, cineR: 0,                // 电影漂移 + 节拍 kick 混合
    minP: MIN_PHI, maxP: MAX_PHI, minR: MIN_RADIUS, maxR: MAX_RADIUS,
    centerLocked: false, recentering: false, recenterAt: 0,
    focusActive: false, focusT: 0, focusP: 0.08, focusR: 6.6, focusPunch: 0,
    fov: BASE_FOV, punch: 0,                     // punch = 原作的 camPunch（焦点机位冲击）
    cinemaT: 0, cinema: true, shake: 1, rotating: false
  };
  // 转台世界旋转：tx/ty 目标（拖拽+惯性积分），cx/cy 视觉（0.055/帧逼近）。
  var world = { tx: 0, ty: 0, vx: 0, vy: 0, cx: 0, cy: 0 };
  // 节拍镜头（02-beat-camera-runtime.js 的 beatCam，去掉了 djMap/live 双源）。
  // kicks 是跟随层的真值，bc.* 仅供读取（更新统一在 followKick 之后的同步步）。
  var kicks = { punch: 0, theta: 0, phi: 0, radius: 0, roll: 0 };
  var bc = { events: [], punch: 0, thetaKick: 0, phiKick: 0, radiusKick: 0, rollKick: 0, lastTriggerAt: -10 };
  var dyn = { avg: 0, lowAvg: 0, peak: 0.30, scale: 0.82 };
  // 自由镜头（01-orbit-free-camera.js:32-45 defaultFreeCameraState）。
  var free = {
    active: false, locked: false,
    position: [0, 0, 6.6], yaw: 0, pitch: 0, roll: 0, fov: BASE_FOV,
    velocity: [0, 0, 0], keys: {}, tween: null
  };
  var FREE_MOVE_CODES = /^(KeyW|KeyA|KeyS|KeyD|KeyQ|KeyE|Space|ShiftLeft|ShiftRight|ControlLeft|ControlRight)$/;

  // —— orbit —— //
  function defaults() { return { theta: 0, phi: 0.08, radius: 6.6, fov: BASE_FOV }; }
  function setBaseline(pose) {
    if (!pose || typeof pose !== 'object') return;
    cam.baseT = Number(pose.theta) || 0;
    cam.baseP = clamp(Number(pose.phi) || 0, cam.minP, cam.maxP);
    cam.baseR = clamp(Number(pose.radius) || 0, cam.minR, cam.maxR);
    cam.userT = cam.baseT; cam.userP = cam.baseP; cam.userR = cam.baseR;
  }
  function baseline() { return { theta: cam.baseT, phi: cam.baseP, radius: cam.baseR }; }
  function snap() { cam.curT = cam.userT; cam.curP = cam.userP; cam.curR = cam.userR; cam.fov = BASE_FOV; }
  function setCenterLocked(v) { cam.centerLocked = !!v; if (v) cam.recentering = false; }
  function isCenterLocked() { return cam.centerLocked; }
  function setCinema(on, shake) {
    cam.cinema = on !== false;
    if (typeof shake === 'number') cam.shake = clamp(shake, 0, 1.8);
  }
  function setRotating(v) { cam.rotating = !!v; }

  // 焦点机位（03-focus-cinema-camera.js activateFocusZone 的镜头分量；
  // shelf/queue 的取景在此不含 —— 新层的焦点只有「推向一个指定球坐标」）。
  function focus(pose, punch) {
    cam.centerLocked = false;
    cam.focusActive = true;
    cam.focusT = Number(pose && pose.theta) || 0;
    cam.focusP = clamp(Number(pose && pose.phi) || 0, cam.minP, cam.maxP);
    cam.focusR = clamp(Number(pose && pose.radius) || 0, cam.minR, cam.maxR);
    if (punch > 0) cam.punch = Math.max(cam.punch, punch);
  }
  function clearFocus() { cam.focusActive = false; }

  // 回正（03-focus-cinema-camera.js recenterCamera：锁中 + 阻尼脉冲 + 世界旋转归零）。
  function recenter() {
    cam.centerLocked = true;
    cam.recentering = true;
    cam.recenterAt = clockFn();
    dampImpulse(0.32);
    cam.focusActive = false;
    world.tx = 0; world.ty = 0;
    world.vx = 0; world.vy = 0;
  }
  function dampImpulse(d) {
    cam.cineT *= d; cam.cineP *= d; cam.cineR *= d;
    cam.punch *= d; cam.focusPunch *= d;
    bc.punch *= d; bc.thetaKick *= d; bc.phiKick *= d; bc.radiusKick *= d; bc.rollKick *= d;
  }
  function settleRecenter() {
    cam.userT = cam.baseT; cam.userP = cam.baseP; cam.userR = cam.baseR;
    cam.recentering = false; cam.recenterAt = 0;
  }

  // —— 转台世界旋转（00-gesture-control.js）—— //
  function clampSpin(v) {
    if (!isFinite(v)) return 0;
    return Math.max(-SPIN_MAX, Math.min(SPIN_MAX, v));
  }
  function rebaseAxis(axis) {
    var t = axis === 'x' ? world.tx : world.ty;
    if (Math.abs(t) < REBASE_LIMIT) return;
    var offset = Math.round(t / TAU) * TAU;
    if (axis === 'x') { world.tx -= offset; world.cx -= offset; }
    else { world.ty -= offset; world.cy -= offset; }
  }
  // 指针拖拽 → 世界旋转目标 + 惯性速度（:50-59）。拖拽即解锁中视。
  function spinDrag(dx, dy, dtSec) {
    var rx = dy * SPIN_X, ry = dx * SPIN_Y;
    cam.centerLocked = false;
    cam.recentering = false;
    world.tx += rx; world.ty += ry;
    if (dtSec > 0) {
      world.vx = clampSpin(rx / dtSec * SPIN_LIFT);
      world.vy = clampSpin(ry / dtSec * SPIN_LIFT);
    }
    rebaseAxis('x'); rebaseAxis('y');
  }
  function worldPose() { return { x: world.cx, y: world.cy }; }

  // —— 滚轮（00-pointer-cover-particles.js:157-174）—— //
  function wheel(deltaY, opts) {
    if (opts && opts.free && free.active) {
      free.fov = clamp(free.fov + deltaY * 0.018, FREE_FOV_MIN, FREE_FOV_MAX);
      return 'fov';
    }
    cam.centerLocked = false;
    cam.userR = clamp(cam.userR + deltaY * 0.005, cam.minR, cam.maxR);
    cam.recentering = false;
    return 'radius';
  }

  // —— 节拍（02-beat-camera-runtime.js scheduleBeatCamera 非 dj 分支）—— //
  function comboFor(count, strength) {
    // 源：comboSlot = (beatCount - 1) % 4（02-beat-camera-runtime.js:575）。
    var slot = (((count || 0) - 1) % 4 + 4) % 4;
    var combo = slot === 0 ? 'downbeat' : (slot === 1 ? 'push' : (slot === 2 ? 'drop' : 'rebound'));
    // accent 只覆盖非 downbeat 槽（:577-578）。
    if (strength > 0.84 && slot !== 0) combo = 'accent';
    return combo;
  }
  function beat(pulse, meta) {
    if (!cam.cinema || !meta) return null;
    var time = Number(meta.time);
    if (!isFinite(time)) return null;
    var strength = clamp01(meta.strength != null ? meta.strength : pulse);
    var count = meta.count | 0;
    var conf = clamp01(meta.confidence != null ? meta.confidence : strength);
    var low = clamp01(meta.low != null ? meta.low : 0.62);
    var body = clamp01(meta.body != null ? meta.body : 0.22);
    var snap = clamp01(meta.snap != null ? meta.snap : 0.16);
    var toneSum = Math.max(0.001, low + body + snap);
    var lowTone = low / toneSum, bodyTone = body / toneSum, snapTone = snap / toneSum;
    var mass = clamp01(low * 0.76 + body * 0.20);
    var sharpness = snapTone;
    var mode = 'deep';
    if (snapTone > 0.42 && snapTone > lowTone * 1.18 && snapTone > bodyTone * 1.08) mode = 'snap';
    else if (bodyTone > 0.46 && bodyTone > lowTone * 1.12) mode = 'body';
    var amp = clamp(0.15 + strength * 0.34 + conf * 0.06 + mass * 0.13 + snapTone * 0.04, 0.18, 0.72);
    var attack = clamp(BEAT.attack * (1.18 - sharpness * 0.55), 0.014, 0.038);
    var hold = clamp(BEAT.hold * (0.62 + lowTone * 0.55 + bodyTone * 0.25), 0.014, 0.052);
    var release = clamp(BEAT.release * (0.76 + mass * 0.56 + bodyTone * 0.18 - sharpness * 0.18), 0.110, 0.255);
    var zoomAmp = 0.070 + mass * 0.190 + (mode === 'deep' ? 0.095 : 0.018) + strength * 0.045;
    var phiAmp = 0.002 + (mode === 'body' ? 0.012 : (mode === 'snap' ? 0.005 : 0.002));
    var rollAmp = mode === 'snap' ? (0.003 + snapTone * 0.004) : 0.0008;
    var impact = clamp01(strength * 0.46 + conf * 0.20 + low * 0.28);
    var dynScale = clamp(dyn.scale * (0.92 + impact * 0.12 + mass * 0.08), 0.18, 1.18);
    amp *= dynScale;
    zoomAmp *= 0.76 + dynScale * 0.28;
    phiAmp *= 0.82 + dynScale * 0.20;
    rollAmp *= 0.78 + dynScale * 0.24;
    var combo = comboFor(count, strength);
    // 五个 combo 的乘数表（:821-841，非 dj 分支）。
    if (combo === 'downbeat') { amp *= 1.10; zoomAmp *= 1.18; phiAmp *= 0.72; }
    else if (combo === 'push') { amp *= 0.84; zoomAmp *= 0.88; phiAmp *= 0.62; }
    else if (combo === 'drop') { amp *= 0.96; zoomAmp *= 0.72; phiAmp *= 1.22; }
    else if (combo === 'rebound') { amp *= 0.74; zoomAmp *= 0.62; phiAmp *= 0.78; }
    else if (combo === 'accent') { amp *= 1.14; zoomAmp *= 1.08; rollAmp *= 1.35; }
    amp = clamp(amp, 0.08, 0.68);
    if (time - bc.lastTriggerAt < BEAT.minInterval && strength < 0.88) return null;
    bc.lastTriggerAt = time;
    var ev = {
      start: time - attack * 0.42, hit: time, amp: amp, attack: attack, hold: hold, release: release,
      zoomAmp: zoomAmp, phiAmp: phiAmp, rollAmp: rollAmp, mode: mode, combo: combo,
      phase: count * 2.399963 + (snapTone - lowTone) * 1.4,
      low: lowTone, body: bodyTone, snap: snapTone, mass: mass
    };
    bc.events.push(ev);
    if (bc.events.length > BEAT.maxEvents) bc.events.splice(0, bc.events.length - BEAT.maxEvents);
    return ev;
  }

  // cinemaDynamics（:71-99，非 dj 分支）：能量/低频 → scale。
  function updateDynamics(dtMs, energy, low) {
    var e = clamp01(energy || 0), l = clamp01(low || 0);
    var composite = clamp01(e * 0.62 + l * 0.38);
    dyn.avg = damp(dyn.avg, composite, tauFromFrame(composite > dyn.avg ? DYN.avgUp : DYN.avgDown), dtMs);
    dyn.lowAvg = damp(dyn.lowAvg, l, tauFromFrame(l > dyn.lowAvg ? DYN.lowUp : DYN.lowDown), dtMs);
    dyn.peak = Math.max(0.30, dyn.peak * Math.pow(DYN.peakDecay, dtMs / 16.667), composite);
    var floor = Math.max(0.10, dyn.avg * 0.82);
    var span = Math.max(0.18, dyn.peak - floor);
    var lift = smoothstep((composite - floor) / span);
    var target = 0.42 + lift * 0.56 + clamp01((l - dyn.lowAvg) / 0.36) * 0.12;
    if (dyn.avg < 0.18 && l < 0.32) target *= 0.78;
    if (e > 0.48 && l > 0.46) target = Math.max(target, 0.92);
    target = clamp(target, 0.34, 1.08);
    dyn.scale = damp(dyn.scale, target, tauFromFrame(target > dyn.scale ? DYN.scaleUp : DYN.scaleDown), dtMs);
  }

  // 节拍包络与 kick（:920-1015）。t 为音频时间（秒）。
  function updateBeatCamera(dtSec, dtMs, t, playing) {
    if (!playing) {
      kicks.punch *= Math.exp(-dtSec / PAUSE_PUNCH_TAU);
      kicks.theta *= Math.exp(-dtSec / PAUSE_KICK_TAU);
      kicks.phi *= Math.exp(-dtSec / PAUSE_KICK_TAU);
      kicks.radius *= Math.exp(-dtSec / PAUSE_KICK_TAU);
      kicks.roll *= Math.exp(-dtSec / PAUSE_KICK_TAU);
      bc.punch = kicks.punch; bc.thetaKick = kicks.theta; bc.phiKick = kicks.phi;
      bc.radiusKick = kicks.radius; bc.rollKick = kicks.roll;
      bc.events.length = 0;
      return;
    }
    var punch = 0, phiKick = 0, radiusKick = 0, rollKick = 0;
    var lead = null, leadPunch = 0, leadVal = 0;
    for (var i = bc.events.length - 1; i >= 0; i--) {
      var ev = bc.events[i];
      var local = t - ev.start;
      var val = 0;
      if (local < 0) val = 0;
      else if (local < ev.attack) val = smoothstep(local / ev.attack);
      else if (local < ev.attack + ev.hold) val = 1;
      else if (local < ev.attack + ev.hold + ev.release) val = 1 - smoothstep((local - ev.attack - ev.hold) / ev.release);
      else { bc.events.splice(i, 1); continue; }
      var evPunch = val * ev.amp;
      if (evPunch > punch) punch = evPunch;
      if (evPunch > leadPunch) { lead = ev; leadPunch = evPunch; leadVal = val; }
    }
    if (lead) {
      var sign = Math.sin(lead.phase) >= 0 ? 1 : -1;
      var snapFlick = 1 - Math.min(1, Math.max(0, leadVal - 0.25) / 0.75);
      // combo → kick 映射（:978-997，非 dj 分支；thetaKick 仅 dj，不搬）。
      if (lead.combo === 'downbeat') { radiusKick = leadPunch * lead.zoomAmp; phiKick = -leadPunch * 0.0032; }
      else if (lead.combo === 'push') { radiusKick = leadPunch * lead.zoomAmp * 0.72; phiKick = -leadPunch * 0.0014; }
      else if (lead.combo === 'drop') { radiusKick = leadPunch * lead.zoomAmp * 0.46; phiKick = leadPunch * lead.phiAmp * 0.92; }
      else if (lead.combo === 'rebound') { radiusKick = leadPunch * lead.zoomAmp * 0.30; phiKick = -leadPunch * lead.phiAmp * 0.22; }
      else if (lead.combo === 'accent') {
        radiusKick = leadPunch * lead.zoomAmp * 0.90;
        phiKick = -leadPunch * 0.0022;
        rollKick = sign * leadPunch * lead.rollAmp * (0.45 + snapFlick * 0.30);
      } else if (lead.mode === 'deep') { radiusKick = leadPunch * lead.zoomAmp; phiKick = -leadPunch * 0.003; }
    }
    followKick('punch', punch, dtMs);
    followKick('theta', 0, dtMs);
    followKick('phi', phiKick, dtMs);
    followKick('radius', radiusKick, dtMs);
    followKick('roll', rollKick, dtMs);
    bc.punch = kicks.punch; bc.thetaKick = kicks.theta; bc.phiKick = kicks.phi;
    bc.radiusKick = kicks.radius; bc.rollKick = kicks.roll;
  }
  // kick 的非对称跟随：目标更大走 up τ，更小走 down τ（:1010-1014 的每帧系数）。
  function followKick(kind, target, dtMs) {
    var f = KICK_FRAME[kind];
    var cur = kicks[kind];
    var up = kind === 'theta' ? Math.abs(target) > Math.abs(cur) : target > cur;
    kicks[kind] = damp(cur, target, tauFromFrame(up ? f.up : f.down), dtMs);
  }

  // 电影漂移（03-focus-cinema-camera.js updateCinema，非 dj 分支）。
  function updateCinema(dtSec, dtMs) {
    cam.cinemaT += dtSec;
    if (!cam.cinema) {
      cam.cineT = damp(cam.cineT, 0, tauFromFrame(CINE_OFF_FRAME), dtMs);
      cam.cineP = damp(cam.cineP, 0, tauFromFrame(CINE_OFF_FRAME), dtMs);
      cam.cineR = damp(cam.cineR, 0, tauFromFrame(CINE_OFF_FRAME), dtMs);
      return;
    }
    var idleDamp = (cam.rotating ? 0.25 : 1.0) * cam.shake;
    var beatDamp = (cam.focusActive ? 0.55 : 1.0) * cam.shake;
    cam.cineT = Math.sin(cam.cinemaT * 0.08) * 0.012 * idleDamp + bc.thetaKick * beatDamp;
    cam.cineP = Math.sin(cam.cinemaT * 0.06 + 1.0) * 0.010 * idleDamp + bc.phiKick * beatDamp;
    cam.cineR = Math.sin(cam.cinemaT * 0.04 + 2.0) * 0.080 * idleDamp - bc.radiusKick * beatDamp * 1.18;
  }

  // orbit 相机推进（03-focus-cinema-camera.js updateCamera）。
  function updateCamera(dtMs) {
    if (cam.recentering) {
      var dT = shortestAngleDelta(cam.userT, cam.baseT);
      var dP = cam.baseP - cam.userP;
      var dR = cam.baseR - cam.userR;
      var dist = Math.sqrt(dT * dT + dP * dP + Math.pow(dR / Math.max(1, cam.baseR), 2));
      var k = clamp(RECENTER_K0 + dist * RECENTER_KGAIN, RECENTER_KMIN, RECENTER_KMAX);
      var ease = 1 - Math.exp(-dtMs / tauFromFrame(k));
      cam.userT += dT * ease;
      cam.userP += dP * ease;
      cam.userR += dR * ease;
      var settled = Math.abs(shortestAngleDelta(cam.userT, cam.baseT)) < RECENTER_SETTLE &&
        Math.abs(cam.userP - cam.baseP) < RECENTER_SETTLE &&
        Math.abs(cam.userR - cam.baseR) < RECENTER_SETTLE_R;
      if (settled || (cam.recenterAt && clockFn() - cam.recenterAt > RECENTER_TIMEOUT)) settleRecenter();
    }
    var tT, tP, tR;
    if (cam.focusActive) {
      tT = cam.focusT; tP = cam.focusP; tR = cam.focusR;
    } else if (cam.centerLocked) {
      tT = cam.baseT + cam.cineT;
      tP = clamp(cam.baseP + cam.cineP, cam.minP, cam.maxP);
      tR = clamp(cam.baseR + cam.cineR, cam.minR, cam.maxR);
    } else {
      tT = cam.userT + cam.cineT;
      tP = clamp(cam.userP + cam.cineP, cam.minP, cam.maxP);
      tR = clamp(cam.userR + cam.cineR, cam.minR, cam.maxR);
    }
    // 丝滑变速（:85-91）：focus 优先，节拍 punch 时提速。
    var focusK = cam.focusActive ? FOCUS_FRAME_ACTIVE : FOCUS_FRAME;
    var radiusK = cam.focusActive ? RADIUS_FRAME_ACTIVE : RADIUS_FRAME;
    if (bc.punch > 0.01) {
      focusK = Math.max(focusK, 0.12 + bc.punch * 0.12);
      radiusK = Math.max(radiusK, 0.09 + bc.punch * 0.12);
    }
    // theta 的跟随走最短弧（§6.1 角度环绕）：换预设 350°→10° 时从 360° 方向短弧
    // 追过去，不绕 340° 的远路；phi/radius 无环绕语义，裸跟随即可。
    var follow = 1 - Math.exp(-dtMs / tauFromFrame(focusK));
    cam.curT += shortestAngleDelta(cam.curT, tT) * follow;
    cam.curP = damp(cam.curP, tP, tauFromFrame(focusK), dtMs);
    cam.curR = damp(cam.curR, tR, tauFromFrame(radiusK), dtMs);
    // FOV 冲击（:137-142）：非对称、随 punch 衰减。
    var cameraPunch = Math.max(cam.punch * 0.55, bc.punch * 0.54 + bc.radiusKick * 0.16) * cam.shake;
    var fovTarget = (free.active || free.locked ? free.fov : BASE_FOV) - cameraPunch * (free.active || free.locked ? 1.75 : 2.35);
    cam.fov = damp(cam.fov, fovTarget, tauFromFrame(fovTarget < cam.fov ? FOV_FRAME_IN : FOV_FRAME_OUT), dtMs);
    cam.punch *= Math.exp(-dtMs / tauFromFrame(PUNCH_FRAME));
  }

  // 自由镜头（01-orbit-free-camera.js updateFreeCamera + applyFreeCameraToCamera）。
  function freeResetPose() {
    var baseP = clamp(cam.baseP, cam.minP, cam.maxP);
    var baseR = clamp(cam.baseR, cam.minR, cam.maxR);
    var cy = Math.cos(baseP);
    var pos = [
      cam.baseR * cy * Math.sin(cam.baseT),
      cam.baseR * Math.sin(baseP),
      cam.baseR * cy * Math.cos(cam.baseT)
    ];
    var len = Math.max(0.001, Math.sqrt(pos[0] * pos[0] + pos[1] * pos[1] + pos[2] * pos[2]));
    var dx = pos[0] / len, dy = pos[1] / len, dz = pos[2] / len;
    // YXZ 欧拉下看向原点的 yaw/pitch（getDefaultFreeCameraResetPose 同构）。
    var pitch = Math.asin(clamp(dy, -1, 1));
    var yaw = Math.atan2(-dx, -dz);
    return { position: pos, yaw: yaw, pitch: pitch, roll: 0, fov: BASE_FOV };
  }
  function captureFreeFromOrbit() {
    var cy = Math.cos(cam.curP);
    free.position = [
      cam.curR * cy * Math.sin(cam.curT),
      cam.curR * Math.sin(cam.curP),
      cam.curR * cy * Math.cos(cam.curT)
    ];
    var len = Math.max(0.001, Math.sqrt(free.position[0] * free.position[0] + free.position[1] * free.position[1] + free.position[2] * free.position[2]));
    var dx = free.position[0] / len, dy = free.position[1] / len, dz = free.position[2] / len;
    free.pitch = Math.asin(clamp(dy, -1, 1));
    free.yaw = Math.atan2(-dx, -dz);
    free.roll = 0;
    free.fov = clamp(cam.fov, FREE_FOV_MIN, FREE_FOV_MAX);
  }
  function freeToggle() {
    if (free.active) {
      free.active = false; free.locked = true;
      free.keys = {}; free.velocity = [0, 0, 0];
      return false;
    }
    captureFreeFromOrbit();
    free.active = true; free.locked = true;
    free.tween = null; free.keys = {};
    return true;
  }
  function freeReset() {
    var to = freeResetPose();
    free.tween = {
      start: clockFn(), duration: 620,
      from: { position: free.position.slice(), yaw: free.yaw, pitch: free.pitch, roll: free.roll, fov: free.fov },
      to: to
    };
    free.active = false; free.locked = true;
    free.keys = {}; free.velocity = [0, 0, 0];
  }
  function freeKey(code, down) {
    if (!FREE_MOVE_CODES.test(code)) return false;
    free.keys = free.keys || {};
    free.keys[code] = !!down;
    return true;
  }
  function freeLook(dxPx, dyPx) {
    free.yaw = clamp(free.yaw - dxPx * 0.00125, -FREE_YAW, FREE_YAW);
    free.pitch = clamp(free.pitch - dyPx * 0.00125, -FREE_PITCH, FREE_PITCH);
  }
  function isFreeActive() { return free.active; }
  function isFreeEngaged() { return free.active || free.locked; }
  function freeSnapshot() {
    return {
      locked: !!free.locked, active: !!free.active,
      position: { x: free.position[0], y: free.position[1], z: free.position[2] },
      yaw: free.yaw, pitch: free.pitch, roll: free.roll, fov: free.fov
    };
  }
  function freeLoad(raw) {
    if (!raw || typeof raw !== 'object') return;
    var p = raw.position || {};
    free.position = [
      clamp(Number(p.x) || 0, -80, 80),
      clamp(Number(p.y) || 0, -80, 80),
      clamp(Number(p.z) || 6.6, -80, 80)
    ];
    free.yaw = clamp(Number(raw.yaw) || 0, -FREE_YAW, FREE_YAW);
    free.pitch = clamp(Number(raw.pitch) || 0, -FREE_PITCH, FREE_PITCH);
    free.roll = clamp(Number(raw.roll) || 0, -FREE_ROLL, FREE_ROLL);
    free.fov = clamp(Number(raw.fov) || BASE_FOV, FREE_FOV_MIN, FREE_FOV_MAX);
    free.locked = !!(raw.locked || raw.active);
    free.active = false;   // 恢复的位姿只落成「已固定」，绝不带着激活态进新会话。
  }
  function updateFreeCamera(dtSec, dtMs) {
    if (free.tween) {
      var tw = free.tween;
      var t = easeOutCubic01((clockFn() - tw.start) / Math.max(1, tw.duration || 620));
      free.position = [
        tw.from.position[0] + (tw.to.position[0] - tw.from.position[0]) * t,
        tw.from.position[1] + (tw.to.position[1] - tw.from.position[1]) * t,
        tw.from.position[2] + (tw.to.position[2] - tw.from.position[2]) * t
      ];
      free.yaw = tw.from.yaw + shortestAngleDelta(tw.from.yaw, tw.to.yaw) * t;
      free.pitch = tw.from.pitch + (tw.to.pitch - tw.from.pitch) * t;
      free.roll = tw.from.roll + shortestAngleDelta(tw.from.roll, tw.to.roll) * t;
      free.fov = tw.from.fov + (tw.to.fov - tw.from.fov) * t;
      if (t >= 0.999) {
        free.position = tw.to.position.slice();
        free.yaw = tw.to.yaw; free.pitch = tw.to.pitch; free.roll = tw.to.roll; free.fov = tw.to.fov;
        // 回正落点回写 orbit（syncOrbitAfterFreeCameraReset :338-356）。
        var r = clamp(Math.sqrt(free.position[0] * free.position[0] + free.position[1] * free.position[1] + free.position[2] * free.position[2]) || cam.baseR, cam.minR, cam.maxR);
        var theta = Math.atan2(free.position[0], free.position[2]);
        var phi = clamp(Math.asin(clamp(free.position[1] / Math.max(0.001, r), -1, 1)), cam.minP, cam.maxP);
        cam.baseT = theta; cam.baseP = phi; cam.baseR = r;
        cam.userT = theta; cam.userP = phi; cam.userR = r;
        cam.curT = theta; cam.curP = phi; cam.curR = r;
        dampImpulse(0.08);
        cam.centerLocked = true;
        cam.recentering = false;
        free.tween = null; free.active = false; free.locked = false;
      }
      return;
    }
    if (!free.active) return;
    var keys = free.keys || {};
    var mx = (keys.KeyD ? 1 : 0) - (keys.KeyA ? 1 : 0);
    var my = (keys.Space ? 1 : 0) - ((keys.ControlLeft || keys.ControlRight) ? 1 : 0);
    var mz = (keys.KeyS ? 1 : 0) - (keys.KeyW ? 1 : 0);
    var tv = [0, 0, 0];
    if (mx || my || mz) {
      var len = Math.sqrt(mx * mx + my * my + mz * mz);
      mx /= len; my /= len; mz /= len;
      // YXZ：先绕 X 俯仰再绕 Y 偏航，把局部移动向量转到世界系。
      var cp = Math.cos(free.pitch), sp = Math.sin(free.pitch);
      var cyy = Math.cos(free.yaw), syy = Math.sin(free.yaw);
      var lx = mx, ly = my, lz = mz;
      // R_x(pitch)：y' = y·cos − z·sin；z' = y·sin + z·cos
      var ry2 = ly * cp - lz * sp, rz2 = ly * sp + lz * cp;
      // R_y(yaw)：x' = x·cos + z·sin；z' = −x·sin + z·cos
      var rx2 = lx * cyy + rz2 * syy, rz3 = -lx * syy + rz2 * cyy;
      var speed = (keys.ShiftLeft || keys.ShiftRight) ? 6.2 : 2.35;
      tv = [rx2 * speed, ry2 * speed, rz3 * speed];
    }
    var moving = (tv[0] * tv[0] + tv[1] * tv[1] + tv[2] * tv[2]) > 0;
    // velocity.lerp(target, ease·dt) 的时间不变式：1 − exp(−ease·dt)。
    var ease = moving ? 8.2 : 13.5;
    var k = 1 - Math.exp(-dtSec * ease);
    free.velocity[0] += (tv[0] - free.velocity[0]) * k;
    free.velocity[1] += (tv[1] - free.velocity[1]) * k;
    free.velocity[2] += (tv[2] - free.velocity[2]) * k;
    var v2 = free.velocity[0] * free.velocity[0] + free.velocity[1] * free.velocity[1] + free.velocity[2] * free.velocity[2];
    if (v2 < 0.0004) free.velocity = [0, 0, 0];
    free.position[0] += free.velocity[0] * dtSec;
    free.position[1] += free.velocity[1] * dtSec;
    free.position[2] += free.velocity[2] * dtSec;
    var rollDir = (keys.KeyQ ? 1 : 0) - (keys.KeyE ? 1 : 0);
    if (rollDir) free.roll = clamp(free.roll + rollDir * dtSec * 0.9, -FREE_ROLL, FREE_ROLL);
  }

  // 每帧推进。env: { playing, audioTime, energy, low, hidden }。
  function tick(dtMs, env) {
    env = env || {};
    var dt = clamp(dtMs || 16.7, 0, 160) / 1000;
    if (env.energy != null || env.low != null) updateDynamics(dtMs, env.energy, env.low);
    updateBeatCamera(dt, dtMs, Number(env.audioTime) || 0, !!env.playing);
    updateCinema(dt, dtMs);
    updateFreeCamera(dt, dtMs);
    updateCamera(dtMs);
    // 世界旋转：先惯性积分进目标角，再走 0.055/帧（τ≈295ms）的逼近层。
    if (Math.abs(world.vx) > 0.0001 || Math.abs(world.vy) > 0.0001) {
      world.tx += world.vx * dt;
      world.ty += world.vy * dt;
      rebaseAxis('x'); rebaseAxis('y');
    }
    world.vx *= Math.pow(SPIN_DAMPING, dt * 60);
    world.vy *= Math.pow(SPIN_DAMPING, dt * 60);
    if (Math.abs(world.vx) < SPIN_CUTOFF) world.vx = 0;
    if (Math.abs(world.vy) < SPIN_CUTOFF) world.vy = 0;
    var tX = cam.centerLocked ? 0 : world.tx;
    var tY = cam.centerLocked ? 0 : world.ty;
    world.cx = damp(world.cx, tX, WORLD_FRAME_TAU, dtMs);
    world.cy = damp(world.cy, tY, WORLD_FRAME_TAU, dtMs);
  }

  // 当前应渲染的位姿。自由镜头 engaged（active 或已固定的 locked）时它优先 ——
  // 与原作 applyFreeCameraToCamera 的 active||locked 判据一致。
  function pose() {
    if (isFreeEngaged()) {
      return {
        free: true, active: free.active,
        position: free.position.slice(), yaw: free.yaw, pitch: free.pitch, roll: free.roll,
        fov: cam.fov, lookAt: [0, 0, 0]
      };
    }
    return {
      free: false, active: true,
      theta: cam.curT, phi: cam.curP, radius: cam.curR, fov: cam.fov,
      lookAt: [0, 0, 0], roll: 0, world: worldPose()
    };
  }
  // 调试/检查口：内部状态只读视图（契约脚本与 stats 用）。
  function internals() {
    return {
      orbit: { user: [cam.userT, cam.userP, cam.userR], base: [cam.baseT, cam.baseP, cam.baseR],
        cur: [cam.curT, cam.curP, cam.curR], cine: [cam.cineT, cam.cineP, cam.cineR],
        centerLocked: cam.centerLocked, recentering: cam.recentering },
      beat: { punch: bc.punch, kicks: [bc.thetaKick, bc.phiKick, bc.radiusKick, bc.rollKick], events: bc.events.length },
      dyn: { scale: dyn.scale },
      world: { target: [world.tx, world.ty], visual: [world.cx, world.cy], vel: [world.vx, world.vy] },
      free: { active: free.active, locked: free.locked }
    };
  }
  function dispose() {
    bc.events.length = 0;
    free.tween = null;
    free.keys = {};
  }

  var api = {
    defaults: defaults, setBaseline: setBaseline, baseline: baseline, snap: snap,
    focus: focus, clearFocus: clearFocus,
    recenter: recenter, setCenterLocked: setCenterLocked, isCenterLocked: isCenterLocked,
    setCinema: setCinema, setRotating: setRotating,
    spinDrag: spinDrag, worldPose: worldPose, wheel: wheel,
    beat: beat, comboFor: comboFor, tick: tick, pose: pose, internals: internals,
    freeToggle: freeToggle, freeReset: freeReset, freeKey: freeKey, freeLook: freeLook,
    isFreeActive: isFreeActive, isFreeEngaged: isFreeEngaged,
    freeSnapshot: freeSnapshot, freeLoad: freeLoad,
    dispose: dispose,
    _setClock: function (fn) { if (typeof fn === 'function') clockFn = fn; }
  };
  api.CONSTANTS = Object.freeze({
    BASE_FOV: BASE_FOV, MIN_PHI: MIN_PHI, MAX_PHI: MAX_PHI, MIN_RADIUS: MIN_RADIUS, MAX_RADIUS: MAX_RADIUS,
    FREE_PITCH: FREE_PITCH, FREE_YAW: FREE_YAW, FREE_ROLL: FREE_ROLL, FREE_FOV_MIN: FREE_FOV_MIN, FREE_FOV_MAX: FREE_FOV_MAX,
    SPIN_X: SPIN_X, SPIN_Y: SPIN_Y, SPIN_MAX: SPIN_MAX, SPIN_DAMPING: SPIN_DAMPING, SPIN_CUTOFF: SPIN_CUTOFF,
    SPIN_LIFT: SPIN_LIFT, REBASE_LIMIT: REBASE_LIMIT, WORLD_FRAME: WORLD_FRAME,
    RECENTER: { K0: RECENTER_K0, KGAIN: RECENTER_KGAIN, KMIN: RECENTER_KMIN, KMAX: RECENTER_KMAX,
      SETTLE: RECENTER_SETTLE, SETTLE_R: RECENTER_SETTLE_R, TIMEOUT: RECENTER_TIMEOUT },
    FOCUS_FRAME: FOCUS_FRAME, FOCUS_FRAME_ACTIVE: FOCUS_FRAME_ACTIVE,
    RADIUS_FRAME: RADIUS_FRAME, RADIUS_FRAME_ACTIVE: RADIUS_FRAME_ACTIVE,
    FOV_FRAME: { IN: FOV_FRAME_IN, OUT: FOV_FRAME_OUT }, PUNCH_FRAME: PUNCH_FRAME,
    CINE_OFF_FRAME: CINE_OFF_FRAME, BEAT: Object.freeze(BEAT), KICK_FRAME: Object.freeze(KICK_FRAME),
    PAUSE_PUNCH_TAU: PAUSE_PUNCH_TAU, PAUSE_KICK_TAU: PAUSE_KICK_TAU,
    FREE_MOVE_CODES: FREE_MOVE_CODES.source
  });

  var root = typeof window !== 'undefined' ? window : globalThis;
  root.SpaceCamera = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
}());
