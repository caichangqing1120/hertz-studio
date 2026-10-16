import { build } from 'esbuild';
import { createHash } from 'node:crypto';
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '../..');
const require = createRequire(import.meta.url);
const result = await build({ entryPoints: [resolve(here, 'src/main.js')], bundle: true, format: 'iife', globalName: 'SpaceStagePure', minify: !process.argv.includes('--dev'), target: ['es2020'], legalComments: 'none', write: false,
  plugins: [{ name: 'single-three-version', setup(builder) { builder.onResolve({ filter: /^three(?:\/|$)/ }, args => ({ path: args.path === 'three' ? resolve(here, 'node_modules/three/build/three.module.js') : require.resolve(args.path) })); } }] });
const output = resolve(root, 'plugin/ui/vendor/space-stage.js');
mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, '// SPDX-License-Identifier: MIT\n// Generated from tools/space-stage; rebuild with npm run build. Three.js r186.\n' + result.outputFiles[0].text);
const manifest = {};
function scan(path) {
  for (const entry of readdirSync(path, { withFileTypes: true }).sort((a,b) => a.name.localeCompare(b.name))) {
    const file = resolve(path, entry.name);
    if (entry.isDirectory()) scan(file);
    else manifest[relative(root, file).replaceAll('\\', '/')] = createHash('sha256').update(readFileSync(file)).digest('hex').slice(0,16);
  }
}
for (const source of ['tools/space-stage/src', 'tools/coast-stage/src', 'tools/zodiac-stage/src']) scan(resolve(root, source));
manifest['plugin/ui/vendor/space-stage.js'] = createHash('sha256').update(readFileSync(output)).digest('hex').slice(0,16);
writeFileSync(resolve(here, '.build-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`SpaceStagePure ${(result.outputFiles[0].text.length / 1024).toFixed(1)} KiB`);
