/**
 * extract-images.mjs
 * Extracts embedded images from MEDHIS .docx files, converts to WebP,
 * creates thumbnails, and writes a manifest.json.
 */

import AdmZip from 'adm-zip';
import sharp from 'sharp';
import { DOMParser } from '@xmldom/xmldom';
import { mkdirSync, writeFileSync, existsSync } from 'fs';
import { join, extname, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DOCX_DIR = '/Users/prakoonsuksapan/Desktop/KMCH manual/KMCH HIS manual';
const OUTPUT_DIR = join(__dirname, '../public/screenshots');
const MIN_SIZE_BYTES = 1024; // skip images < 1KB

// Docx filename → module slug mapping
const SLUG_MAP = {
  '1.MEDHIS Manual_MRD_V2.docx': 'mrd',
  '2.MEDHIS Manual_Registration V.2.docx': 'registration',
  '3.MEDHIS_Manual_OPD V.1.docx': 'opd',
  '4.MEDHIS Manual_ER V.1.docx': 'er',
  '5.MEDHIS Manual_Billing V.1.docx': 'billing',
  '6.MEDHIS Manual_Admission V.1.docx': 'admission',
  '7.MEDHIS_Manual_IPD V.1.docx': 'ipd',
  '8.MEDHIS Manual_ANC V.1.docx': 'anc',
  '9.MEDHIS Manual_LAB V.1.docx': 'lab',
  '10.MEDHIS Manual_XRAY V.1.docx': 'xray',
  '11.MEDHIS Manual_OR V.1.docx': 'or',
  '12.MEDHIS Manual_Laboor and Newborn V.1.docx': 'labour-and-newborn',
  '13.MEDHIS Manual_Pharmacy V.1.docx': 'pharmacy',
  '14.MEDHIS Manual_Inventory V.1.docx': 'inventory',
  '15.MEDHIS Manual_Diet V.1.docx': 'diet',
  '16.MEDHIS Manual_CSSD V.1.docx': 'cssd',
  '17.MEDHIS Manual_EMR_Doctor V.2.docx': 'emr-doctor',
  '18.MEDHIS Manual_Order V.2.docx': 'order-entry',
};

// Supported image extensions that sharp can handle
const SUPPORTED_EXTS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.tiff', '.tif', '.bmp', '.webp']);

/**
 * Parse word/_rels/document.xml.rels to build a map: rId → target filename
 */
function parseRels(zip) {
  const relsMap = {};
  try {
    const relsEntry = zip.getEntry('word/_rels/document.xml.rels');
    if (!relsEntry) return relsMap;
    const xmlStr = relsEntry.getData().toString('utf-8');
    const doc = new DOMParser().parseFromString(xmlStr, 'text/xml');
    const rels = doc.getElementsByTagName('Relationship');
    for (let i = 0; i < rels.length; i++) {
      const rel = rels[i];
      const id = rel.getAttribute('Id');
      const target = rel.getAttribute('Target');
      if (id && target) {
        // Target is like "media/image1.png" — normalize to just the filename
        const filename = target.split('/').pop();
        relsMap[id] = filename;
      }
    }
  } catch (e) {
    // best-effort
  }
  return relsMap;
}

/**
 * Parse word/document.xml to build a map: image filename → nearest heading text
 * We walk through the XML nodes looking for headings (Heading1–Heading9, Title)
 * and inline drawing/image references.
 */
function parseDocumentSections(zip, relsMap) {
  const imageSection = {}; // filename → section heading text
  try {
    const docEntry = zip.getEntry('word/document.xml');
    if (!docEntry) return imageSection;
    const xmlStr = docEntry.getData().toString('utf-8');
    const doc = new DOMParser().parseFromString(xmlStr, 'text/xml');

    // Get all paragraph elements
    const body = doc.getElementsByTagName('w:body')[0];
    if (!body) return imageSection;

    const paragraphs = body.getElementsByTagName('w:p');
    let currentSection = 'General';

    const headingStyles = new Set([
      'heading1', 'heading2', 'heading3', 'heading4', 'heading5',
      'heading6', 'heading7', 'heading8', 'heading9',
      'title', '1', '2', '3', '4', '5',
    ]);

    for (let i = 0; i < paragraphs.length; i++) {
      const para = paragraphs[i];

      // Check if this paragraph is a heading
      const pStyle = para.getElementsByTagName('w:pStyle');
      let isHeading = false;
      let headingText = '';

      if (pStyle.length > 0) {
        const styleVal = (pStyle[0].getAttribute('w:val') || '').toLowerCase();
        if (headingStyles.has(styleVal) || styleVal.startsWith('heading')) {
          isHeading = true;
          // Extract text from all w:t elements in this paragraph
          const textNodes = para.getElementsByTagName('w:t');
          const parts = [];
          for (let j = 0; j < textNodes.length; j++) {
            const t = textNodes[j].textContent || '';
            if (t.trim()) parts.push(t.trim());
          }
          headingText = parts.join(' ').trim();
        }
      }

      if (isHeading && headingText) {
        currentSection = headingText;
      }

      // Check for images in this paragraph (via blip/embed references)
      const blips = para.getElementsByTagName('a:blip');
      for (let j = 0; j < blips.length; j++) {
        const embed = blips[j].getAttribute('r:embed');
        if (embed && relsMap[embed]) {
          const filename = relsMap[embed];
          if (!imageSection[filename]) {
            imageSection[filename] = currentSection;
          }
        }
      }

      // Also check v:imagedata (older format)
      const imageData = para.getElementsByTagName('v:imagedata');
      for (let j = 0; j < imageData.length; j++) {
        const rid = imageData[j].getAttribute('r:id');
        if (rid && relsMap[rid]) {
          const filename = relsMap[rid];
          if (!imageSection[filename]) {
            imageSection[filename] = currentSection;
          }
        }
      }
    }
  } catch (e) {
    // best-effort
  }
  return imageSection;
}

async function processDocx(docxPath, slug) {
  const results = [];
  const moduleDir = join(OUTPUT_DIR, slug);
  mkdirSync(moduleDir, { recursive: true });

  let zip;
  try {
    zip = new AdmZip(docxPath);
  } catch (e) {
    console.error(`  ERROR opening ${docxPath}: ${e.message}`);
    return results;
  }

  const relsMap = parseRels(zip);
  const imageSection = parseDocumentSections(zip, relsMap);

  // Collect all entries in word/media/
  const mediaEntries = zip.getEntries().filter(entry =>
    entry.entryName.startsWith('word/media/') && !entry.isDirectory
  );

  // Sort entries by name for deterministic ordering
  mediaEntries.sort((a, b) => a.entryName.localeCompare(b.entryName, undefined, { numeric: true }));

  let imageIndex = 0;

  for (const entry of mediaEntries) {
    const originalName = entry.entryName.split('/').pop();
    const ext = extname(originalName).toLowerCase();

    // Skip unsupported formats (EMF, WMF, etc.)
    if (!SUPPORTED_EXTS.has(ext)) {
      continue;
    }

    // Get raw buffer
    let buffer;
    try {
      buffer = entry.getData();
    } catch (e) {
      continue;
    }

    // Skip tiny images (icons/bullets)
    if (buffer.length < MIN_SIZE_BYTES) {
      continue;
    }

    imageIndex++;
    const paddedIndex = String(imageIndex).padStart(3, '0');
    const outFilename = `image-${paddedIndex}.webp`;
    const thumbFilename = `image-${paddedIndex}-thumb.webp`;
    const outPath = join(moduleDir, outFilename);
    const thumbPath = join(moduleDir, thumbFilename);

    // Determine section
    const section = imageSection[originalName] || 'General';

    // Convert to WebP
    try {
      await sharp(buffer)
        .webp({ quality: 80 })
        .toFile(outPath);

      // Create 200px-wide thumbnail
      await sharp(buffer)
        .resize({ width: 200, withoutEnlargement: true })
        .webp({ quality: 75 })
        .toFile(thumbPath);

      results.push({
        file: `screenshots/${slug}/${outFilename}`,
        thumb: `screenshots/${slug}/${thumbFilename}`,
        section,
        index: imageIndex,
      });
    } catch (e) {
      // Skip images sharp can't handle (corrupted, unsupported variant, etc.)
      imageIndex--; // reuse the index slot
    }
  }

  return results;
}

async function main() {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  const manifest = {};
  let grandTotal = 0;

  for (const [filename, slug] of Object.entries(SLUG_MAP)) {
    // Skip temp files
    if (filename.startsWith('~$')) continue;

    const docxPath = join(DOCX_DIR, filename);
    if (!existsSync(docxPath)) {
      console.warn(`WARN: File not found: ${docxPath}`);
      manifest[slug] = [];
      continue;
    }

    console.log(`Processing ${filename} → ${slug} ...`);
    const images = await processDocx(docxPath, slug);
    manifest[slug] = images;
    grandTotal += images.length;
    console.log(`  ${images.length} images extracted`);
  }

  // Write manifest
  const manifestPath = join(OUTPUT_DIR, 'manifest.json');
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

  console.log(`\nDone. Total images: ${grandTotal}`);
  console.log(`Manifest written to ${manifestPath}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
