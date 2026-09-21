import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const importPattern = /@import url\(['"](.+?)['"]\);/g;

function inlineImports(file) {
  const directory = dirname(file);
  return readFileSync(file, 'utf8').replace(importPattern, (_, relativePath) =>
    inlineImports(resolve(directory, relativePath)),
  );
}

mkdirSync('build', { recursive: true });
writeFileSync('build/theme.css', inlineImports(resolve('theme/theme.css')));
console.log('Bundled modular theme to build/theme.css.');
