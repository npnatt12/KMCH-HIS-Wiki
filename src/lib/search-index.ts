import { slugify } from './slug';
import dictionary from './search-dictionary.json';
import { ROOMS } from './rooms';
import { tokenizeThai } from './thai-tokens';

type SearchType = 'room' | 'module' | 'workflow' | 'concept' | 'entity' | 'how-to' | 'troubleshooting';

export interface SearchRecord {
  id: string;
  title: string;
  section: string;
  type: SearchType;
  url: string;
  module?: string;
  summary: string;
  body: string;
  keywords: string[];
  priority: number;
}

export const SEARCH_COLLECTIONS = ['modules', 'workflows', 'concepts', 'entities', 'faq', 'rooms'] as const;
export type SearchCollection = (typeof SEARCH_COLLECTIONS)[number];
export type ContentSearchCollection = Exclude<SearchCollection, 'rooms'>;

export interface SearchEntryInput {
  id: string;
  body?: string;
  data: { title: string; tags?: string[] };
}

const TROUBLE_TERMS = [
  'ไม่ได้',
  'ไม่พบ',
  'ไม่ขึ้น',
  'ไม่แสดง',
  'ค้าง',
  'ผิด',
  'ซ้ำ',
  'ปฏิเสธ',
  'ยกเลิก',
  'เตือน',
  'แถบแดง',
  'error',
  'alert',
  'reject',
  'cancel',
  'discharge',
  'duplicate',
  'no stock',
  'required',
  'mandatory',
  'validation',
  'restriction',
  'disabled',
];

const QUERY_HINTS: Array<{ match: RegExp; terms: string[] }> = dictionary.groups.map(
  (g) => ({ match: new RegExp(g.match, 'i'), terms: g.terms }),
);

export async function getSearchRecords(): Promise<SearchRecord[]> {
  const { getCollection } = await import('astro:content');
  const buckets: Array<{ collection: ContentSearchCollection; entries: SearchEntryInput[] }> = [];

  for (const collection of SEARCH_COLLECTIONS) {
    if (collection === 'rooms') continue;
    const entries = await getCollection(collection);
    buckets.push({ collection, entries: entries as unknown as SearchEntryInput[] });
  }

  const native = [...buildSearchRecords(buckets), ...buildRoomSearchRecords()];
  const manifest = await loadPhase4Manifest();
  return injectPhase4Records(native, manifest);
}

export async function getSearchRecordsByCollection(target: SearchCollection): Promise<SearchRecord[]> {
  if (target === 'rooms') return buildRoomSearchRecords();
  const { getCollection } = await import('astro:content');
  const entries = await getCollection(target);
  const native = buildSearchRecords([{ collection: target, entries: entries as unknown as SearchEntryInput[] }]);
  const manifest = await loadPhase4Manifest();
  return injectPhase4Records(native, manifest);
}

export function buildSearchRecords(
  buckets: Array<{ collection: ContentSearchCollection; entries: SearchEntryInput[] }>,
): SearchRecord[] {
  const records: SearchRecord[] = [];

  for (const { collection, entries } of buckets) {
    for (const entry of entries) {
      const title = entry.data.title;
      const body = entry.body ?? '';
      const pageType = getType(collection, entry.id);
      const url = getUrl(collection, entry.id);
      const module = inferModule(entry.id, entry.data.tags ?? [], body);
      const tags = entry.data.tags ?? [];

      splitMarkdown(body).forEach((section, index) => {
        const cleanBody = cleanMarkdown(section.markdown);
        if (cleanBody.length < 45) return;

        const keywords = buildKeywords(title, section.heading, tags, cleanBody);
        const priority = scorePriority(pageType, section.heading, cleanBody);

        records.push({
          id: `${collection}:${entry.id}:${index}`,
          title,
          section: section.heading,
          type: pageType,
          url: withHeading(url, section.heading),
          module,
          summary: summarize(cleanBody),
          body: cleanBody.slice(0, 4200),
          keywords,
          priority,
        });
      });
    }
  }

  return records.sort((a, b) => b.priority - a.priority || typeRank(a.type) - typeRank(b.type));
}

export function buildRoomSearchRecords(): SearchRecord[] {
  return ROOMS.flatMap((room) => {
    const sharedKeywords = [
      room.slug,
      room.department,
      room.title,
      room.titleTh,
      ...room.staff,
      ...room.searchTerms,
    ].map((value) => value.toLowerCase());

    const sections = [
      {
        id: 'overview',
        section: 'Overview',
        summary: room.summary,
        body: [
          room.summary,
          room.titleTh,
          room.department,
          room.staff.join(', '),
          room.searchTerms.join(', '),
        ].join(' '),
        priority: 36,
      },
      {
        id: 'start',
        section: 'Start Here',
        summary: room.startHere.join(' '),
        body: room.startHere.join(' '),
        priority: 44,
      },
      {
        id: 'mistakes',
        section: 'Common Mistakes',
        summary: room.commonMistakes.map((item) => item.symptom).join(' '),
        body: room.commonMistakes.map((item) => `${item.symptom} ${item.fix}`).join(' '),
        priority: 52,
      },
    ];

    return sections.map((section) => ({
      id: `rooms:${room.slug}:${section.id}`,
      title: `${room.titleTh} / ${room.title}`,
      section: section.section,
      type: 'room' as const,
      url: section.section === 'Overview' ? `/rooms/${room.slug}/` : `/rooms/${room.slug}/#${slugify(section.section)}`,
      module: room.department.toLowerCase(),
      summary: section.summary.slice(0, 240),
      body: section.body.slice(0, 4200),
      keywords: Array.from(new Set([...sharedKeywords, ...buildKeywords(room.title, section.section, room.searchTerms, section.body)])),
      priority: section.priority,
    }));
  });
}

export function getQueryHints() {
  return QUERY_HINTS.map((hint) => hint.terms).flat();
}

function getType(collection: ContentSearchCollection, id: string): SearchType {
  if (collection === 'faq' && id.toLowerCase().includes('troubleshooting')) return 'troubleshooting';
  if (collection === 'faq') return 'how-to';
  if (collection === 'modules') return 'module';
  if (collection === 'workflows') return 'workflow';
  if (collection === 'concepts') return 'concept';
  return 'entity';
}

function getUrl(collection: ContentSearchCollection, id: string) {
  if (collection === 'faq') return '/faq/';
  return `/${collection}/${slugify(id.replace(/\.md$/, ''))}/`;
}

function withHeading(url: string, heading: string) {
  if (!heading || heading === 'Overview') return url;
  return `${url}#${slugify(heading)}`;
}

function splitMarkdown(markdown: string) {
  const lines = markdown.split(/\r?\n/);
  const sections: Array<{ heading: string; markdown: string }> = [];
  let heading = 'Overview';
  let buffer: string[] = [];

  for (const line of lines) {
    const match = /^(#{2,3})\s+(.+)$/.exec(line);
    if (match && buffer.length > 0) {
      sections.push({ heading, markdown: buffer.join('\n') });
      buffer = [];
    }
    if (match) {
      heading = cleanInline(match[2]);
    }
    buffer.push(line);
  }

  if (buffer.length > 0) sections.push({ heading, markdown: buffer.join('\n') });
  return sections;
}

function cleanMarkdown(markdown: string) {
  return markdown
    .replace(/```[\s\S]*?```/g, (match) => match.replace(/```/g, ''))
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2')
    .replace(/\[\[([^\]]+)\]\]/g, '$1')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/gm, '')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/[*_`>#]/g, '')
    .replace(/\r?\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanInline(text: string) {
  return cleanMarkdown(text).replace(/\s+/g, ' ').trim();
}

function summarize(text: string) {
  const candidates = text
    .split(/(?<=[.!?。])\s+|\s+-\s+|\s{2,}/)
    .map((part) => part.trim())
    .filter((part) => part.length > 36);

  return (candidates[0] || text).slice(0, 240).trim();
}

export function buildKeywords(title: string, heading: string, tags: string[], body: string) {
  const set = new Set<string>();
  const base = `${title} ${heading} ${tags.join(' ')}`;

  for (const word of base.split(/[^a-z0-9ก-๙]+/i)) {
    if (word.length > 1) set.add(word.toLowerCase());
  }

  const thaiSources = `${title} ${heading} ${body}`;
  for (const tok of tokenizeThai(thaiSources)) {
    set.add(tok.toLowerCase());
  }

  for (const hint of QUERY_HINTS) {
    if (hint.match.test(body) || hint.match.test(base)) {
      hint.terms.forEach((term) => set.add(term.toLowerCase()));
    }
  }

  return Array.from(set).slice(0, 96);
}

function scorePriority(type: SearchType, heading: string, body: string) {
  const searchable = `${heading} ${body}`.toLowerCase();
  let score = 0;

  for (const term of TROUBLE_TERMS) {
    if (searchable.includes(term.toLowerCase())) score += 4;
  }

  if (type === 'troubleshooting') score += 28;
  if (type === 'room') score += 18;
  if (type === 'workflow') score += 10;
  if (type === 'entity') score += 8;
  if (/วิธีแก้|สาเหตุ|ปัญหา|ข้อจำกัด|validation|restriction|behavior/i.test(heading)) score += 18;

  return Math.min(score, 100);
}

function inferModule(id: string, tags: string[], body: string) {
  const text = `${id} ${tags.join(' ')} ${body.slice(0, 500)}`.toLowerCase();
  const modules = [
    ['registration', /registration|ลงทะเบียน|patient search|demographics/],
    ['opd', /\bopd\b|ผู้ป่วยนอก|screening/],
    ['er', /\ber\b|ฉุกเฉิน|triage|whiteboard/],
    ['billing', /billing|การเงิน|deposit|settlement|bill/],
    ['admission', /admission|admit|รับผู้ป่วยใน/],
    ['ipd', /\bipd\b|ward|bed|discharge|ผู้ป่วยใน/],
    ['pharmacy', /pharmacy|ยา|drug|dispens|med reject/],
    ['lab', /\blab\b|specimen|สิ่งส่งตรวจ/],
    ['xray', /xray|radiology|รังสี/],
    ['mrd', /\bmrd\b|เวชระเบียน|merge/],
    ['inventory', /inventory|stock|สินค้า/],
    ['order-entry', /order entry|cpoe|คำสั่ง/],
    ['room', /room|ห้อง|จุดบริการ/],
  ] as const;

  return modules.find(([, pattern]) => pattern.test(text))?.[0];
}

function typeRank(type: SearchType) {
  switch (type) {
    case 'room':
      return 0;
    case 'troubleshooting':
      return 1;
    case 'workflow':
      return 2;
    case 'entity':
      return 3;
    case 'module':
      return 4;
    case 'how-to':
      return 5;
    case 'concept':
      return 6;
  }
}

export interface Phase4Asset {
  file: string;
  thumb: string;
  caption: string;
  ocrTerms: string[];
  filename: string;
  sourceSlug: string;
  page: string;
  searchable: boolean;
}

export interface Phase4Page {
  displayName: string;
  totalCount: number;
  displayCount: string;
  assets: Phase4Asset[];
}

export interface Phase4Manifest {
  generatedAt: string;
  pages: Record<string, Phase4Page>;
}

function urlToSlug(url: string): string | null {
  const cleanUrl = url.split('#')[0];
  const m = /^\/[^/]+\/([^/]+)\/$/.exec(cleanUrl);
  return m ? m[1] : null;
}

export function injectPhase4Records(
  records: SearchRecord[],
  manifest: Phase4Manifest,
): SearchRecord[] {
  const seenSlugs = new Set<string>();
  const phase4Records: SearchRecord[] = [];

  for (const r of records) {
    const slug = urlToSlug(r.url);
    if (!slug || seenSlugs.has(slug)) continue;
    seenSlugs.add(slug);
    const page = manifest.pages[slug];
    if (!page) continue;
    for (const asset of page.assets) {
      if (!asset.searchable) continue;
      const body = [asset.caption, asset.ocrTerms.join(', ')]
        .filter((s) => s && s.length > 0)
        .join('\n\n');
      const keywords = [
        asset.filename.toLowerCase(),
        ...asset.ocrTerms.map((t) => t.toLowerCase()),
      ];
      phase4Records.push({
        id: `${r.type}:${slug}:phase-4:${asset.filename}`,
        title: r.title,
        section: `Screenshot: ${asset.filename}`,
        type: r.type,
        url: r.url,
        module: r.module,
        summary: asset.caption.slice(0, 240),
        body,
        keywords,
        priority: 4,
      });
    }
  }

  return [...records, ...phase4Records];
}

let phase4ManifestCache: Phase4Manifest | null = null;

async function loadPhase4Manifest(): Promise<Phase4Manifest> {
  if (phase4ManifestCache !== null) return phase4ManifestCache;
  try {
    const fs = await import('node:fs/promises');
    const path = await import('node:path');
    const cwd = process.cwd();
    const manifestPath = path.resolve(cwd, 'public', 'phase-4-manifest.json');
    const raw = await fs.readFile(manifestPath, 'utf-8');
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object' && 'pages' in parsed) {
      phase4ManifestCache = parsed as Phase4Manifest;
    } else {
      phase4ManifestCache = { generatedAt: '', pages: {} };
    }
  } catch (e) {
    phase4ManifestCache = { generatedAt: '', pages: {} };
  }
  return phase4ManifestCache;
}
