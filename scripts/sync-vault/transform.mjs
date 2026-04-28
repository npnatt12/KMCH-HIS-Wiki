const FRONTMATTER_RE = /^---\n([\s\S]*?)\n---\n/;
const COMMENT_RE = /%%[\s\S]*?%%/g;
const ALIASED_WIKILINK_RE = /\[\[([^\]|]+)\|([^\]]+)\]\]/g;
const SIMPLE_WIKILINK_RE = /\[\[([^\]]+)\]\]/g;
const FENCE_RE = /```[\s\S]*?```/g;

export function transformMarkdown(input, index, opts = {}) {
  const warnings = [];
  let { frontmatter, body } = splitFrontmatter(input);

  // Protect code fences: replace with placeholders, transform, then restore.
  const fences = [];
  body = body.replace(FENCE_RE, (match) => {
    const placeholder = ` FENCE_${fences.length} `;
    fences.push(match);
    return placeholder;
  });

  body = body.replace(COMMENT_RE, '');

  body = body.replace(ALIASED_WIKILINK_RE, (_, target, alias) => {
    const url = index.get(target.trim());
    if (url) return `[${alias}](${url})`;
    warnings.push({ type: 'unresolved-wikilink', target: target.trim() });
    return alias;
  });

  body = body.replace(SIMPLE_WIKILINK_RE, (_, target) => {
    const trimmed = target.trim();
    const url = index.get(trimmed);
    if (url) return `[${trimmed}](${url})`;
    warnings.push({ type: 'unresolved-wikilink', target: trimmed });
    return trimmed;
  });

  // Restore fences
  body = body.replace(/ FENCE_(\d+) /g, (_, i) => fences[Number(i)]);

  const out = frontmatter ? `${frontmatter}${body}` : body;

  if (opts.collectWarnings) return { content: out, warnings };
  return out;
}

function splitFrontmatter(input) {
  const match = input.match(FRONTMATTER_RE);
  if (!match) return { frontmatter: '', body: input };
  return {
    frontmatter: match[0],
    body: input.slice(match[0].length),
  };
}
