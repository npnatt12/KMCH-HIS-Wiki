const LINK_MAP: Record<string, string> = {};

export function buildLinkMap(collections: { id: string; type: string }[]) {
  for (const entry of collections) {
    const slug = entry.id.toLowerCase().replace(/\s+/g, '-');
    const name = entry.id;
    LINK_MAP[name.toLowerCase()] = `/${entry.type}s/${slug}/`;
  }
}

export function transformWikilinks(html: string): string {
  return html.replace(/\[\[([^\]]+)\]\]/g, (_match, inner: string) => {
    const parts = inner.split('|');
    const target = parts[0].trim();
    const display = (parts[1] || parts[0]).trim();
    const url = LINK_MAP[target.toLowerCase()];
    if (url) {
      return `<a href="${url}" class="text-blue-700 underline hover:text-blue-900">${display}</a>`;
    }
    return `<span class="text-gray-500">${display}</span>`;
  });
}
