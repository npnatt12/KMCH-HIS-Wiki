import { execSync } from 'child_process';
import { writeFileSync, mkdirSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, '../public/charts');
mkdirSync(OUTPUT_DIR, { recursive: true });

// Extract flowchart definitions from the TS source
const content = readFileSync(join(__dirname, '../src/lib/flowcharts.ts'), 'utf-8');
const entries = [...content.matchAll(/'([^']+)':\s*`([^`]+)`/gs)];

console.log(`Found ${entries.length} flowcharts to render...`);

for (const [, slug, mermaid] of entries) {
  const inputFile = join(OUTPUT_DIR, `${slug}.mmd`);
  const outputFile = join(OUTPUT_DIR, `${slug}.svg`);
  writeFileSync(inputFile, mermaid.trim());
  try {
    execSync(`npx mmdc -i "${inputFile}" -o "${outputFile}" -b transparent -t neutral`, { stdio: 'pipe' });
    console.log(`✅ ${slug}.svg`);
  } catch (e) {
    console.error(`❌ ${slug}: ${e.stderr?.toString() || e.message}`);
  }
}
