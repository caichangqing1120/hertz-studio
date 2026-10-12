// SPDX-License-Identifier: MIT
// 舞台设置能力：只从宿主状态派生，不保存另一份用户偏好。
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.StageSettings = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  // 与 VCP 的模式配置、Folia 的 visualizer registry 一样，由模式能力决定可编辑项。
  function resolve(state) {
    var visual = state.visual || 'stage';
    var effective = state.effective || visual;
    var visuals = state.visuals || [];
    function definition(id) {
      return visuals.find(function (item) { return item.id === id; }) || { id: id, label: id };
    }
    var selected = definition(visual);
    var stanza = visual !== 'stage';
    var creative = state.source === 'creative';
    var coast = state.source === 'coast';
    var diorama = state.source === 'diorama';
    var svgScene = state.source === 'anime-svg';
    var covered = creative || coast || diorama || svgScene || stanza && state.background !== 'stage';
    var scene = !!state.webgl && !covered;
    var lyrics = state.lyrics !== false;
    var animated = !state.reduced;
    var rows = {};
    function row(id, enabled, reason) { rows[id] = { enabled: !!enabled, reason: enabled ? '' : reason }; }
    row('s3d-fl-bg-mode', !creative && !coast && !diorama && !svgScene,
      diorama ? '当前歌词由镜台场景内演出；切回沉浸声场后使用此设置'
        : coast ? '当前背景为「纯真3D」海岸公路；切回沉浸声场后使用此设置'
        : svgScene ? '当前背景由动画绘景舞台接管；切回沉浸声场后使用此设置'
        : '当前背景由创意工坊编排；切回沉浸声场后使用此设置');
    row('s3d-coast-tod', coast, '选择「海岸公路」背景后生效');
    row('s3d-coast-interact', coast, '选择「海岸公路」背景后生效');
    row('s3d-diorama-carrier', diorama, '选择「镜台 · 末班车」背景后生效');
    row('s3d-diorama-reflection', diorama, '选择「镜台 · 末班车」背景后生效');
    row('s3d-layout', !stanza, '当前歌词视觉使用独立排版；切回舞台 3D 歌词轨后生效');
    row('s3d-bloom', scene,
      coast ? '海岸舞台的光效随时刻与音乐自动变化'
        : diorama ? '镜台的光效随曲式与音乐自动变化'
        : creative ? '请在创意工坊的参数中调整场景泛光'
        : svgScene ? '动画绘景是矢量舞台，不使用 3D 光晕'
        : covered ? '当前背景覆盖了 3D 场景；选择「舞台场景（3D）」后生效'
        : '当前设备未启用 3D 渲染');
    row('s3d-motion', animated && (scene || stanza && lyrics),
      state.reduced ? '减少动态效果已开启' : svgScene ? '动画绘景的节奏由作品自身的循环决定' : '显示歌词或启用 3D 场景后生效');
    row('s3d-reactivity', animated && (scene || stanza && lyrics),
      state.reduced ? '减少动态效果已开启' : svgScene ? '动画绘景的音频响应是内置的呼吸辉光' : '显示歌词或启用 3D 场景后生效');
    row('s3d-fl-size', lyrics, '显示歌词后生效');
    row('s3d-fl-subtitle', lyrics, '显示歌词后生效');
    row('s3d-fl-opacity', state.background === 'fluid', '仅用于「流体」封面背景');
    row('s3d-fl-phrase', lyrics && state.lyricLayout === 'phrases', lyrics ? '仅用于「词组断行」排布' : '显示歌词后生效');
    ['s3d-fl-accents', 's3d-fl-atmosphere', 's3d-fl-halation'].forEach(function (id) {
      row(id, lyrics && state.background !== 'anime', lyrics ? '商籁壁纸背景使用透明排版，不叠加此效果' : '显示歌词后生效');
    });
    return { visual: visual, effective: effective, stanza: stanza, covered: covered,
      scene: scene, lyrics: lyrics, rows: rows,
      label: selected.kind === 'director' ? selected.label + ' · 当前演出：' + definition(effective).label : selected.label,
      backgroundNote: creative ? '创意编排正在大舞台演出；场景、背景与音乐响应在创意工坊中调整。' :
        coast ? '「纯真3D」海岸公路正在演出；时刻与交互在下方调整。' :
        diorama ? '「镜台 · 末班车」正在演出；歌词是沿途站牌与水面上的光，载体与反射在下方调整。' :
        svgScene ? '动画绘景正在大舞台演出；绘景作品与镜像对称在下方「动画绘景」中调整。' :
        covered ? '当前使用独立背景，已隐藏 3D 场景；原场景设置已保留。' :
        scene ? '3D 背景与歌词同时生效。' : '当前设备未启用 3D 渲染。' };
  }
  return { resolve: resolve };
});
