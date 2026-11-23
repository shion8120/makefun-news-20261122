// news-image-20261122 entry: copies the pre-rendered poster (entry.png, made from image.html) to the output folder.
// MAKEFUN_OUTPUT_DIR overrides the grader's /output when run locally.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

const source = fileURLToPath(new URL('./entry.png', import.meta.url));
const target = join(outDir, 'entry.png');
copyFileSync(source, target);
console.log(`wrote ${target}`);
