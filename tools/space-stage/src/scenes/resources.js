// SPDX-License-Identifier: MIT
// Visible resources only: callers retain current/neighbor rows and covers.
import { layoutLyricText } from './text-layout.js';
export function createSpatialResources(THREE, onInvalidate, resolveCover = url => url) {
  let disposed = false, stamp = null, uploaded = false;
  const texts = new Map(), covers = new Map(), queue = [];
  function canvas(w, h) {
    if (typeof document === 'undefined') return null;
    const el = document.createElement('canvas'); el.width = w; el.height = h; return el;
  }
  function remove(map, key, entry) {
    if (entry.refs > 0) return;
    const pending = queue.indexOf(entry); if (pending >= 0) queue.splice(pending, 1);
    entry.cancel?.(); entry.texture?.dispose(); map.delete(key);
  }
  function trim(map, limit) {
    for (const [key, entry] of map) {
      if (map.size <= limit) break;
      remove(map, key, entry);
    }
  }
  function release(map, key) {
    const entry = map.get(key); if (!entry) return;
    entry.refs = Math.max(0, entry.refs - 1);
    if (!entry.refs) remove(map, key, entry);
  }
  const text = {
    acquire(value, font = 'sans-serif', maxWidth = 1792) {
      const line = String(value || '').slice(0, 120).replace(/[\uD800-\uDBFF]$/, ''), key = font + ':' + maxWidth + ':' + line;
      let entry = texts.get(key);
      if (!entry && texts.size < 7) {
        entry = { key, line, font, maxWidth, refs: 0, texture: null, aspect: 8 };
        texts.set(key, entry); queue.push(entry);
      }
      if (!entry) return null;
      entry.refs++; return entry;
    },
    release(entry) { if (entry) release(texts, entry.key); }
  };
  const cover = {
    acquire(url, signal) {
      if (!url || disposed || signal?.aborted) return null;
      const key = String(url); let entry = covers.get(key);
      if (!entry && covers.size < 12) {
        entry = { key, refs: 0, texture: null, failed: false }; covers.set(key, entry);
        if (typeof Image !== 'undefined') {
          const img = new Image(); img.crossOrigin = 'anonymous'; img.decoding = 'async';
          let canceled = false;
          const fail = () => {
            if (canceled || disposed || signal?.aborted || !entry.refs) return;
            entry.failed = true; onInvalidate?.();
          };
          entry.cancel = () => { canceled = true; img.onload = img.onerror = null; img.src = ''; };
          img.onload = () => {
            if (canceled || disposed || signal?.aborted || !entry.refs) return;
            const el = canvas(768, 768), ctx = el?.getContext('2d');
            if (!ctx) { fail(); return; }
            try {
              const side = Math.min(img.naturalWidth, img.naturalHeight);
              ctx.drawImage(img, (img.naturalWidth - side) / 2, (img.naturalHeight - side) / 2, side, side, 0, 0, 768, 768);
              entry.texture = new THREE.CanvasTexture(el); entry.texture.colorSpace = THREE.SRGBColorSpace;
              entry.texture.userData.spaceShared = true;
              entry.texture.minFilter = THREE.LinearMipmapLinearFilter;
              onInvalidate?.();
            } catch { fail(); }
          };
          img.onerror = fail;
          Promise.resolve().then(() => resolveCover(key)).then(url => {
            if (canceled || disposed || signal?.aborted || !entry.refs) return;
            if (url) img.src = url; else fail();
          }).catch(fail);
        }
      }
      if (!entry) return null;
      entry.refs++; return entry;
    },
    release(entry) { if (entry) release(covers, entry.key); }
  };
  return {
    text, cover,
    beginFrame(now) {
      if (disposed) return;
      if (stamp !== now) { stamp = now; uploaded = false; }
      if (uploaded) return;
      while (queue.length) {
        const entry = queue.shift();
        if (!entry.refs || !texts.has(entry.key)) continue;
        const el = canvas(1, 1), ctx = el?.getContext('2d');
        if (!ctx) break;
        const layout = layoutLyricText(ctx, entry.line, entry.font, entry.maxWidth);
        el.width = layout.width; el.height = layout.height; ctx.font = layout.font;
        entry.layout = layout; entry.aspect = layout.width / layout.height;
        entry.start = layout.rows[0].left; entry.end = layout.rows[0].right;
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = '#ffffff';
        layout.rows.forEach(row => ctx.fillText(entry.line.slice(row.start, row.end), layout.width / 2, row.baseline));
        entry.texture = new THREE.CanvasTexture(el); entry.texture.generateMipmaps = false;
        entry.texture.userData.spaceShared = true;
        entry.texture.minFilter = THREE.LinearFilter; uploaded = true; break;
      }
      trim(texts, 7); trim(covers, 12);
      if (queue.length) onInvalidate?.();
    },
    stats() { return { textTextures: texts.size, coverTextures: covers.size, queued: queue.length,
      bytes: [...texts.values()].reduce((sum, entry) => sum + (entry.layout ? entry.layout.width * entry.layout.height * 4 : 0), 0) + covers.size * 768 * 768 * 4 * 4 / 3 }; },
    dispose() {
      if (disposed) return; disposed = true;
      for (const map of [texts, covers]) { for (const entry of map.values()) { entry.refs = 0; entry.cancel?.(); entry.texture?.dispose(); } map.clear(); }
      queue.length = 0;
    }
  };
}
