const FENCE_RE = /```[\s\S]*?```/g;
const MARKDOWN_IMG_RE = /!\[[^\]]*\]\([^)]+\)/;
const HTML_IMG_RE = /<(img|figure)\b/i;

export function hasImages(body: string): boolean {
  const stripped = body.replace(FENCE_RE, '');
  return MARKDOWN_IMG_RE.test(stripped) || HTML_IMG_RE.test(stripped);
}
