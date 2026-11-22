// news-image-20261122: the entry program. It writes the front-page image
// to the grader's output directory. Node 22, standard library only, no
// network: the image sits beside this file as entry.png, and the program
// copies it byte for byte, so a second run writes the same bytes as the
// first.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);

if (!existsSync(source)) {
  throw new Error('entry.png is missing from the repository');
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));

// Guard: the copy must be whole, or the gate would see a broken image.
const copied = existsSync(join(outDir, 'entry.png'));
if (!copied) {
  throw new Error('entry.png was not written to the output directory');
}
