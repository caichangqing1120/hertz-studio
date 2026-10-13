// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
//
// 歌词时间线：把宿主编好的「行/字素/段落」载荷编译成镜台的演出编制。
//
// 职责边界：曲式（段落/副歌/反复）由宿主的 StanzaSongForm 判定，本模块只消费
// 结论 —— 引擎保持纯场景层，不重复实现一份曲式分析。这里做的是演出侧的编制：
//   · 行 → 乐句（phrase，镜台的一页词）；
//   · 相邻短句共牌成站（sign，多页同牌，页在句间留白交接）；
//   · 段落曲式 → 歌词载体（副歌/终章升空成星幕，其余沿路立站牌）；
//   · 段落 → 机位编制（camera.js 的 rig 表输入）。
// 全部求值都是绝对时间的纯函数：seek、回拖、重播落到同一编制。

import { clamp, hashString } from './util.js';

// 相邻两句间隙小于该值（秒）就共牌：一次经过读多句，牌体在句间留白里换页。
// 快句连唱时避免「一牌一句」把沿路变成广告牌长廊。
const SIGN_GROUP_GAP = 3.6;
// 共牌的**总时长预算**：一块牌的可读窗口 ≈ 进站视距（约 24m ÷ 巡航速度），
// 超过它，后排页面要在牌被驶过之后才轮到唱、永远不可读。所以只有「一组快句
// 的总跨度」塞得进一次经过时才共牌；普通句长的歌词一句一牌。
const SIGN_SPAN_BUDGET = 3.0;
// 一块牌承载的页数上限：超出的句子另立新牌。
const SIGN_MAX_PAGES = 4;

// 段落曲式 → 歌词载体与机位编制。chorus/outro 升空成星幕（副歌隆重、终章收束），
// 其余沿路立牌。宿主强制 carrier 时此表被覆盖（见 compileTimeline 的 forceCarrier）。
export function carrierOf(kind, forceCarrier) {
  if (forceCarrier === 'sign' || forceCarrier === 'constellation') return forceCarrier;
  return kind === 'chorus' || kind === 'outro' ? 'constellation' : 'sign';
}

// 整编载荷。payload.v === 1：
//   lines:       [{ start, end, text, translation, glyphs: [{ text, start, end }] }]
//   paragraphs:  [{ startLine, endLine, kind }]（startLine/endLine 为行下标，闭区间）
// 编译结果：
//   phrases:     [{ id, line, start, end, text, glyphs, translation, sign, carrier, kind }]
//   signs:       [{ id, side, phrases }]
//   paragraphs:  [{ kind, start, end, firstLine, lastLine }]
//   phraseIndex: Map（phrase 对象 → 全局下标，供载体窗口查找）
export function compileTimeline(payload) {
  const empty = { phrases: [], signs: [], paragraphs: [], phraseIndex: new Map(), duration: 0, valid: false };
  if (!payload || payload.v !== 1 || !Array.isArray(payload.lines)) return empty;
  const lines = payload.lines;
  if (!lines.length) return empty;

  // 行下标 → 段落（曲式段落不重叠、按行区间给出）。
  const paraOfLine = new Array(lines.length).fill(null);
  const paragraphs = [];
  (Array.isArray(payload.paragraphs) ? payload.paragraphs : []).forEach((p) => {
    if (!p || !Number.isFinite(p.startLine) || !Number.isFinite(p.endLine)) return;
    const first = Math.max(0, Math.min(lines.length - 1, Math.floor(p.startLine)));
    const last = Math.max(first, Math.min(lines.length - 1, Math.floor(p.endLine)));
    const para = { kind: String(p.kind || 'verse'), startLine: first, endLine: last };
    paragraphs.push(para);
    for (let i = first; i <= last; i += 1) paraOfLine[i] = para;
  });
  // 曲式没覆盖到的行（开头器乐段后的散句等）按普通主歌处理。
  paragraphs.sort((a, b) => a.startLine - b.startLine);

  const phrases = [];
  const signs = [];
  let current = null; // 正在收集同牌句子的桶

  const flushSign = () => {
    if (!current || !current.phrases.length) return;
    signs.push(current);
    current = null;
  };

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (!line || !Number.isFinite(line.start)) continue;
    const text = String(line.text == null ? '' : line.text).trim();
    if (!text) continue;
    const start = line.start;
    const end = Number.isFinite(line.end) && line.end > start ? line.end : start + 3;
    const glyphs = (Array.isArray(line.glyphs) ? line.glyphs : [])
      .filter((g) => g && Number.isFinite(g.start) && g.text)
      .map((g) => ({ text: String(g.text), start: g.start, end: Number.isFinite(g.end) && g.end > g.start ? g.end : g.start + 0.12 }));
    if (!glyphs.length) {
      // 没有字素（纯器乐占位行等）就不进编制：镜台只演有唱词的句子。
      continue;
    }
    const para = paraOfLine[i];
    const kind = para ? para.kind : 'verse';
    const carrier = carrierOf(kind, payload.forceCarrier);
    const phrase = {
      id: `p${phrases.length}`,
      line: i,
      start, end, text, glyphs,
      translation: String(line.translation || ''),
      kind, carrier,
      paraStart: para ? para.startLine : i,
      order0: glyphs[0].start,
    };

    // 星幕逐句独立（每句一片自己的星空）；站牌才需要共牌分组。
    if (carrier === 'constellation') {
      phrase.sign = null;
      flushSign();
      phrases.push(phrase);
      continue;
    }
    const prev = current ? current.phrases[current.phrases.length - 1] : null;
    const sameCarrier = prev && prev.carrier === 'sign';
    const gapOk = prev && start - prev.end <= SIGN_GROUP_GAP;
    const spanOk = prev && (phrase.end - current.phrases[0].start) <= SIGN_SPAN_BUDGET;
    const roomOk = prev && current.phrases.length < SIGN_MAX_PAGES;
    if (!(sameCarrier && gapOk && spanOk && roomOk)) {
      flushSign();
      current = {
        id: `s${signs.length}`,
        // 左右交错由种子微调，避免完全机械的左右左右。
        side: (signs.length % 2 === 0 ? 1 : -1) * (1 - 0.18 * (hashString(`side:${signs.length}`) % 3) / 2),
        phrases: [],
      };
    }
    phrase.sign = current;
    current.phrases.push(phrase);
    phrases.push(phrase);
  }
  flushSign();

  // 段落时间区间（供相机 rig 表与遮幅开合消费）。
  const spans = paragraphs
    .map((p) => {
      const first = lines[p.startLine];
      const last = lines[p.endLine];
      if (!first || !Number.isFinite(first.start)) return null;
      const start = first.start;
      const end = Number.isFinite(last && last.end) && last.end > start ? last.end : start + 3;
      return { kind: p.kind, start, end, firstLine: p.startLine, lastLine: p.endLine };
    })
    .filter(Boolean)
    .sort((a, b) => a.start - b.start);

  const phraseIndex = new Map();
  phrases.forEach((p, i) => phraseIndex.set(p, i));

  return {
    phrases,
    signs,
    paragraphs: spans,
    phraseIndex,
    signature: payload.signature || `d${phrases.length}`,
    duration: phrases.length ? phrases[phrases.length - 1].end : 0,
    valid: true,
  };
}

// t 时刻正在演唱（或最近一句）的乐句下标；无歌词返回 -1。
export function phraseAt(timeline, t) {
  const { phrases } = timeline;
  if (!phrases.length) return -1;
  let lo = 0;
  let hi = phrases.length - 1;
  let found = -1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (phrases[mid].start <= t) { found = mid; lo = mid + 1; } else hi = mid - 1;
  }
  return found;
}

// t 时刻所在段落；段间空隙沿用上一个段落（机位在空隙里保持，不在留白里乱切）。
export function paragraphAt(timeline, t) {
  const { paragraphs } = timeline;
  if (!paragraphs.length) return null;
  let found = null;
  for (let i = 0; i < paragraphs.length; i += 1) {
    if (paragraphs[i].start <= t) found = paragraphs[i];
    else break;
  }
  return found;
}
