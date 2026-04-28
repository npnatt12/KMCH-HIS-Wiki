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
    const url = resolveWikilinkTarget(target, index);
    if (url) return `[${alias}](${url})`;
    warnings.push({ type: 'unresolved-wikilink', target: target.trim() });
    return alias;
  });

  body = body.replace(SIMPLE_WIKILINK_RE, (_, target) => {
    const url = resolveWikilinkTarget(target, index);
    const display = stripWikilinkAnchor(target.trim()).replace(/^.*\//, '').replace(/\\+$/, '');
    if (url) return `[${display}](${url})`;
    warnings.push({ type: 'unresolved-wikilink', target: target.trim() });
    return display;
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

function stripWikilinkAnchor(value) {
  const hashIdx = value.indexOf('#');
  return hashIdx === -1 ? value : value.slice(0, hashIdx);
}

function anchorSlug(anchor) {
  return anchor
    .replace(/\.md$/, '')
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Mark}\p{Number}\s-]/gu, '')
    .trim()
    .replace(/\s+/g, '-');
}

// Resolve a wikilink target to a portal URL. Handles three forms:
//   - bare:        [[Page Name]]
//   - folder:      [[entities/Page Name]] (vault-aware folder prefix is redundant; strip & retry)
//   - anchor:      [[Page Name#Section]] (resolve page; append fragment)
//   - combined:    [[entities/Page Name#Section]]
// Trailing backslashes (markdown line-continuation artefacts) are stripped before lookup.
// Returns the URL string or null if unresolvable.
function resolveWikilinkTarget(target, index) {
  const raw = String(target).trim();
  let path = stripWikilinkAnchor(raw);
  const anchor = raw.slice(path.length);
  path = path.replace(/\\+$/, '').trim();

  let url = index.get(path);
  if (!url) {
    const slashIdx = path.lastIndexOf('/');
    if (slashIdx !== -1) {
      url = index.get(path.slice(slashIdx + 1));
    }
  }
  if (!url) return null;

  if (anchor.length > 1) {
    const slug = anchorSlug(anchor.slice(1));
    if (slug) return `${url}#${slug}`;
  }
  return url;
}
