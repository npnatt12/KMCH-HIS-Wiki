const HTML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => HTML_ESCAPES[c]);
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function highlight(source: string, tokens: string[]): string {
  if (!source) return '';
  const escaped = escapeHtml(source);
  const usable = tokens
    .map((t) => String(t || '').trim())
    .filter((t) => t.length >= 1);
  if (usable.length === 0) return escaped;

  // Sort longest-first so we don't double-wrap nested matches
  usable.sort((a, b) => b.length - a.length);
  const pattern = new RegExp(usable.map(escapeRegex).join('|'), 'gi');
  return escaped.replace(pattern, (match) => `<mark>${match}</mark>`);
}
