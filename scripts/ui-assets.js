'use strict';
// Read the production registry, rather than maintaining a second asset list.
const fs = require('node:fs');
const path = require('node:path');
const ROOT = path.join(__dirname, '..');
const FILE = path.join(ROOT, 'crates/hertz-studio/src/assets.rs');
function readAssets(source = fs.readFileSync(FILE, 'utf8')) {
  return Array.from(source.matchAll(/"(\/[^"\s]+)"\s*,\s*(JS|CSS)\s*=>\s*const\s+(\w+)\s*:\s*&str\s*=\s*edition_ui!\(\s*"([^"]+)"\s*\)\s*;/g), m => ({
    path: m[1], mime: m[2], name: m[3], rel: '../../../plugin/ui/' + m[4],
    file: path.resolve(ROOT, 'plugin/ui', m[4])
  }));
}
function hasAsset(route) {
  const item = readAssets().find(a => a.path === route);
  return !!item && fs.existsSync(item.file);
}
module.exports = { readAssets, hasAsset, FILE };
