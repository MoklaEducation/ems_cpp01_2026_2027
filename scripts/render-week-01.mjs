import { mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const marp = join('node_modules', '@marp-team', 'marp-cli', 'marp-cli.js');
const source = join('slides', 'weeks', 'week-01.md');
const output = join('materials', 'week-01', 'week-01-slides.pdf');

mkdirSync(join(output, '..'), { recursive: true });

const result = spawnSync(
  process.execPath,
  [marp, '--theme-set', 'build/theme.css', '--allow-local-files', source, '-o', output],
  { encoding: 'utf8', stdio: 'inherit' },
);

if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);

console.log(`Rendered ${source} to ${output}.`);
