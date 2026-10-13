// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
//
// 产出 plugin/ui/vendor/coast-stage.js：IIFE 单文件（three + 场景引擎），
// 全局名 CoastStagePure。产物入库，运行时按普通 <script defer> 加载。
// 改了 src/ 之后必须重跑 node build.mjs —— check-coast-stage.js 会核对哈希。
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
  globalName: 'CoastStagePure',
  minify,
  target: ['es2020'],
  legalComments: 'none',
  logLevel: 'warning',
  write: false,
});

const out = resolve(here, '../../plugin/ui/vendor/coast-stage.js');
mkdirSync(dirname(out), { recursive: true });
// 产物头注明来源与重建命令，避免"这份大文件是谁的"变成悬案
const banner = `// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
//
// 「纯真3D」海岸公路舞台场景引擎（three r186 + 世界/海面/天穹程序化场景）。
// 生成产物 —— 源码在 tools/coast-stage/src/，改动后执行：
//   cd tools/coast-stage && npm install && node build.mjs
// 场景数学移植自 pelican-bike（claude-demo）的 ocean/sky/world/textures/util。
`;
writeFileSync(out, banner + res.outputFiles[0].text);

// 记录本次产物对应的源码哈希：check-coast-stage.js 据此发现"改了 src 忘了重建"。
const manifest = {};
for (const name of readdirSync(resolve(here, 'src')).sort()) {
  manifest['src/' + name] = createHash('sha256')
    .update(readFileSync(resolve(here, 'src', name))).digest('hex').slice(0, 16);
}
writeFileSync(resolve(here, '.build-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`plugin/ui/vendor/coast-stage.js ${(res.outputFiles[0].text.length / 1024).toFixed(1)} KB (${minify ? 'minified' : 'dev'})`);
