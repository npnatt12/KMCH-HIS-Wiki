export function slugify(value: string): string {
  return value
    .replace(/\.md$/, '')
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Mark}\p{Number}\s-]/gu, '')
    .trim()
    .replace(/\s+/g, '-');
}
