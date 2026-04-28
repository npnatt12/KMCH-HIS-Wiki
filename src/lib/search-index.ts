import { getCollection } from 'astro:content';
import { slugify } from './slug';
import dictionary from './search-dictionary.json';

type SearchType = 'module' | 'workflow' | 'concept' | 'entity' | 'how-to' | 'troubleshooting';

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

const SEARCH_COLLECTIONS = ['modules', 'workflows', 'concepts', 'entities', 'faq'] as const;

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
  const records: SearchRecord[] = [];

  for (const collection of SEARCH_COLLECTIONS) {
    const entries = await getCollection(collection);

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

export function getQueryHints() {
  return QUERY_HINTS.map((hint) => hint.terms).flat();
}

function getType(collection: (typeof SEARCH_COLLECTIONS)[number], id: string): SearchType {
  if (collection === 'faq' && id.toLowerCase().includes('troubleshooting')) return 'troubleshooting';
  if (collection === 'faq') return 'how-to';
  if (collection === 'modules') return 'module';
  if (collection === 'workflows') return 'workflow';
  if (collection === 'concepts') return 'concept';
  return 'entity';
}

function getUrl(collection: (typeof SEARCH_COLLECTIONS)[number], id: string) {
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

function buildKeywords(title: string, heading: string, tags: string[], body: string) {
  const set = new Set<string>();
  const base = `${title} ${heading} ${tags.join(' ')}`;

  for (const word of base.split(/[^a-z0-9ก-๙]+/i)) {
    if (word.length > 1) set.add(word.toLowerCase());
  }

  for (const hint of QUERY_HINTS) {
    if (hint.match.test(body) || hint.match.test(base)) {
      hint.terms.forEach((term) => set.add(term.toLowerCase()));
    }
  }

  return Array.from(set).slice(0, 48);
}

function scorePriority(type: SearchType, heading: string, body: string) {
  const searchable = `${heading} ${body}`.toLowerCase();
  let score = 0;

  for (const term of TROUBLE_TERMS) {
    if (searchable.includes(term.toLowerCase())) score += 4;
  }

  if (type === 'troubleshooting') score += 28;
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
  ] as const;

  return modules.find(([, pattern]) => pattern.test(text))?.[0];
}

function typeRank(type: SearchType) {
  switch (type) {
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
