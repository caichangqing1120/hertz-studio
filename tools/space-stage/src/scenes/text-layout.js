// SPDX-License-Identifier: MIT
const fonts = {
  'sans-serif': '"Segoe UI", "Microsoft YaHei", "PingFang SC", sans-serif',
  serif: '"Noto Serif CJK SC", "Songti SC", SimSun, serif'
};
const graphemes = new Intl.Segmenter(undefined, { granularity: 'grapheme' });

export function layoutLyricText(ctx, value, family = 'sans-serif', maxWidth = 1792) {
  const text = String(value || '').slice(0, 120).replace(/[\uD800-\uDBFF]$/, ''), padding = 64;
  const maxRows = maxWidth < 1792 ? 6 : 4;
  let fontSize = 112, rows;
  do {
    ctx.font = '600 ' + fontSize + 'px ' + (fonts[family] || family);
    rows = []; let start = 0, end = 0, lastSpace = -1;
    for (const { segment, index } of graphemes.segment(text)) {
      if (ctx.measureText(text.slice(start, index + segment.length)).width > maxWidth && index > start) {
        end = lastSpace > start ? lastSpace : index;
        rows.push({ start, end }); start = end; lastSpace = -1;
      }
      if (/\s/.test(segment)) lastSpace = index + segment.length;
    }
    if (start < text.length || !rows.length) rows.push({ start, end: text.length });
    if (rows.length <= maxRows || fontSize <= 32) break;
    fontSize -= 8;
  } while (true);
  const lineHeight = Math.ceil(fontSize * 1.42), height = lineHeight * rows.length + padding * 2;
  const width = Math.min(2048, Math.max(256, Math.ceil(Math.max(...rows.map(row => ctx.measureText(text.slice(row.start, row.end)).width)) + padding * 2)));
  rows.forEach((row, index) => {
    row.width = ctx.measureText(text.slice(row.start, row.end)).width;
    row.left = (width - row.width) / (2 * width); row.right = 1 - row.left;
    row.baseline = padding + lineHeight * (index + .5);
    row.bottom = 1 - (padding + lineHeight * (index + 1)) / height;
    row.top = 1 - (padding + lineHeight * index) / height;
    row.advances = new Float32Array(row.end - row.start + 1);
    for (const { segment, index: offset } of graphemes.segment(text.slice(row.start, row.end))) {
      const left = ctx.measureText(text.slice(row.start, row.start + offset)).width;
      const right = ctx.measureText(text.slice(row.start, row.start + offset + segment.length)).width;
      for (let n = 0; n <= segment.length; n++) row.advances[offset + n] = row.left + (left + (right - left) * n / segment.length) / width;
    }
  });
  return { text, width, height, padding, fontSize, font: ctx.font, rows };
}

export function lyricFill(layout, line, playback, progress) {
  let position = Math.max(0, Math.min(1, Number(progress) || 0)) * layout.text.length;
  if (line?.tokens?.length) {
    position = 0; let cursor = 0;
    for (let i = 0; i < Math.min(120, line.tokens.length); i++) {
      const token = line.tokens[i], text = String(token.text || ''), at = layout.text.indexOf(text, cursor);
      if (at < 0 || !text) continue;
      const start = Number(token.start) || 0, end = Math.max(start + .01, Number(token.end) || start + .1);
      if (playback < start) break;
      const fraction = Math.max(0, Math.min(1, (playback - start) / (end - start)));
      position = at + text.length * fraction; cursor = at + text.length;
      if (fraction < 1) break;
      if (i === line.tokens.length - 1) position = layout.text.length;
    }
  }
  return layout.rows.map(row => {
    if (position <= row.start) return row.left - .02;
    if (position >= row.end) return row.right + .02;
    const offset = position - row.start, n = Math.floor(offset);
    return row.advances[n] + (row.advances[n + 1] - row.advances[n]) * (offset - n);
  });
}
