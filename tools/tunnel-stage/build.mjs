// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
//
// 产出 plugin/ui/vendor/tunnel-stage.js：IIFE 单文件（three + 场景引擎），
// 全局名 TunnelStagePure。产物入库，运行时按普通 <script defer> 加载。
// 改了 src/ 之后必须重跑 node build.mjs —— check-tunnel-stage.js 会核对哈希。
// 与 coast-stage / diorama-stage 同一条边界：产物是纯场景引擎，
// hertz-studio 集成全部住在 plugin/ui/stage-tunnel.js 适配层。
import { build } from 'esbuild';
import { createHash } from 'node:crypto';
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const minify = !process.argv.includes('--dev');

const res = await build({
  entryPoints: [resolve(here, 'src/main.js')],
  bundle: true,
  format: 'iife',
  globalName: 'TunnelStagePure',
  minify,
  target: ['es2020'],
  legalComments: 'none',
  logLevel: 'warning',
  write: false,
});

const out = resolve(here, '../../plugin/ui/vendor/tunnel-stage.js');
mkdirSync(dirname(out), { recursive: true });
// 产物头注明来源与重建命令，避免「这份大文件是谁的」变成悬案
const banner = `// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
//
// 「隧图 · 深空」three.js 歌词舞台场景引擎（three r186 + 星场/尾迹/跃迁流光/点阵天体/字形歌词）。
// 生成产物 —— 源码在 tools/tunnel-stage/src/，改动后执行：
//   cd tools/tunnel-stage && npm install && node build.mjs
// 行为规格参照 VCPChat music-stage 的隧图（tunnel）模式；代码为本项目独立实现
// （见 NOTICE「Design lineage」），不包含参照项目的源文件。
`;
writeFileSync(out, banner + res.outputFiles[0].text);

// 记录本次产物对应的源码哈希：check-tunnel-stage.js 据此发现「改了 src 忘了重建」。
const manifest = {};
for (const name of readdirSync(resolve(here, 'src')).sort()) {
  manifest['src/' + name] = createHash('sha256')
    .update(readFileSync(resolve(here, 'src', name))).digest('hex').slice(0, 16);
}
writeFileSync(resolve(here, '.build-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`plugin/ui/vendor/tunnel-stage.js ${(res.outputFiles[0].text.length / 1024).toFixed(1)} KB (${minify ? 'minified' : 'dev'})`);
