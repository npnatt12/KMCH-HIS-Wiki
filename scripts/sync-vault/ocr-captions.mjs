import { readFile } from 'node:fs/promises';

const CONFIDENCE_FLOOR = 0.85;

/**
 * Load codex's OCR map JSON. Returns Map<parent_page_id, Caption[]>.
 * Missing file returns empty map (no-op when codex hasn't shipped yet).
 */
export async function loadOcrMap(path) {
  let raw;
  try {
    raw = await readFile(path, 'utf-8');
  } catch (err) {
    if (err.code === 'ENOENT') return new Map();
    throw err;
  }
  const data = JSON.parse(raw);
  const captions = Array.isArray(data?.captions) ? data.captions : [];
  const grouped = new Map();
  for (const c of captions) {
    if (typeof c?.parent_page_id !== 'string') continue;
    if (typeof c?.confidence !== 'number' || c.confidence < CONFIDENCE_FLOOR) continue;
    const list = grouped.get(c.parent_page_id) ?? [];
    list.push({
      filename: c.filename ?? 'unknown',
      th: c.ocr_caption_th ?? '',
      en: c.ocr_caption_en ?? '',
    });
    grouped.set(c.parent_page_id, list);
  }
  return grouped;
}

/**
 * Append OCR caption sections to a page body. Pure function.
 * Returns body unchanged when the map has no entries for this page.
 */
export function applyOcrCaptions(body, pageId, ocrMap) {
  const captions = ocrMap.get(pageId);
  if (!captions || captions.length === 0) return body;
  const sections = captions
    .map((c) => `\n\n## Screenshot: ${c.filename}\n\n${c.th}\n\n${c.en}\n`)
    .join('');
  return body + sections;
}
