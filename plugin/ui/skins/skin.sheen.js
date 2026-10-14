// SPDX-License-Identifier: MIT
// Floating browsing panel and settings sheet share the skin's ordered lifecycle.
(function () {
  'use strict';
  var handle = null;
  function mount() {
    if (handle) return;
    handle = document.createElement('button'); handle.id = 'sheen-player-handle';
    handle.type = 'button'; handle.className = 'ctrl sheen-player-handle';
    handle.title = '迷你播放面板'; handle.setAttribute('aria-label', '迷你播放面板');
    handle.setAttribute('aria-expanded', 'false');
    handle.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-headphones"/></svg>';
    handle.onclick = function () {
      var show = document.body.classList.toggle('sheen-mini-open');
      handle.setAttribute('aria-expanded', String(show));
    };
    document.body.appendChild(handle);
    if (window.SkinSettingsSheet) SkinSettingsSheet.mount();
  }
  function unmount() {
    if (window.SkinSettingsSheet) SkinSettingsSheet.unmount();
    if (handle) handle.remove(); handle = null;
    document.body.classList.remove('sheen-mini-open');
  }
  Skins.registerLifecycle('sheen', { mount: mount, unmount: unmount });
})();
