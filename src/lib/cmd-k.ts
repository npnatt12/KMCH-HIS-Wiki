type IndexEntry = {
  title: string;
  href: string;
  type: string;
  text?: string;
  roles?: string[];
};

let modal: HTMLDivElement | null = null;
let cachedIndex: IndexEntry[] | null = null;

async function loadIndex(): Promise<IndexEntry[]> {
  if (cachedIndex) return cachedIndex;
  try {
    const COLLECTIONS = ['modules', 'workflows', 'entities', 'concepts', 'faq', 'rooms'];
    const buckets = await Promise.all(
      COLLECTIONS.map((name) =>
        fetch(`/search-${name}.json`).then((r) => (r.ok ? r.json() : { records: [] })),
      ),
    );
    const raw: Array<{
      title?: string;
      url?: string;
      href?: string;
      type?: string;
      body?: string;
      keywords?: string[];
    }> = buckets.flatMap((b) => b.records ?? []);
    cachedIndex = raw.map((r) => ({
      title: r.title ?? '',
      href: r.url ?? r.href ?? '/',
      type: r.type ?? '—',
      text: r.body,
      roles: r.keywords,
    }));
    return cachedIndex;
  } catch {
    return [];
  }
}

function ensureModal() {
  if (modal) return modal;
  const m = document.createElement('div');
  m.id = 'kmch-search-modal';
  m.innerHTML = `
    <div class="kmch-search-backdrop" data-close></div>
    <div class="kmch-search-panel" role="dialog" aria-label="ค้นหา / Search">
      <div class="kmch-search-header">
        <span class="kmch-search-icon" aria-hidden="true">🔍</span>
        <input
          type="search"
          id="kmch-search-input"
          placeholder="พิมพ์เพื่อค้นหาห้อง workflow หน้าจอ หรือ concept..."
          autocomplete="off"
          autocorrect="off"
          autocapitalize="off"
          spellcheck="false"
        />
        <kbd class="kmch-search-esc">esc</kbd>
      </div>
      <ul id="kmch-search-results" role="listbox"></ul>
      <div class="kmch-search-footer">
        <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
        <span><kbd>↵</kbd> open</span>
        <span><kbd>esc</kbd> close</span>
      </div>
    </div>
  `;
  document.body.appendChild(m);
  modal = m;

  const style = document.createElement('style');
  style.textContent = `
    #kmch-search-modal {
      position: fixed; inset: 0; z-index: 9999;
      display: none; align-items: flex-start; justify-content: center;
      padding-top: 12vh;
    }
    #kmch-search-modal[data-open="true"] { display: flex; }
    .kmch-search-backdrop {
      position: absolute; inset: 0;
      background: rgba(31, 27, 22, 0.5);
      backdrop-filter: blur(4px);
    }
    .kmch-search-panel {
      position: relative;
      width: min(640px, calc(100% - 32px));
      max-height: 70vh;
      background: var(--color-surface);
      border: 1px solid var(--color-border-strong);
      border-radius: 1rem;
      box-shadow: var(--shadow-card-hover);
      display: flex; flex-direction: column;
      overflow: hidden;
      font-family: var(--font-sans);
    }
    .kmch-search-header {
      display: flex; align-items: center; gap: 0.75rem;
      padding: 0.85rem 1rem;
      border-bottom: 1px solid var(--color-border);
      background: var(--color-bg);
    }
    .kmch-search-header .kmch-search-icon { font-size: 1.1rem; opacity: 0.6; }
    .kmch-search-header input {
      flex: 1; border: none; outline: none; background: transparent;
      font-size: 1.05rem;
      color: var(--color-ink);
      font-family: inherit;
    }
    .kmch-search-header input::placeholder {
      color: var(--color-ink-muted);
    }
    .kmch-search-esc {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      padding: 0.2rem 0.5rem;
      border-radius: 0.4rem;
      border: 1px solid var(--color-border-strong);
      background: var(--color-surface-tint);
      color: var(--color-ink-muted);
    }
    #kmch-search-results {
      list-style: none; margin: 0; padding: 0.5rem;
      overflow-y: auto;
      flex: 1;
    }
    #kmch-search-results li {
      padding: 0;
    }
    #kmch-search-results a {
      display: flex; align-items: center; gap: 0.75rem;
      padding: 0.7rem 0.85rem;
      border-radius: 0.6rem;
      color: var(--color-ink);
      text-decoration: none;
      font-size: 0.95rem;
    }
    #kmch-search-results a:hover,
    #kmch-search-results a[aria-selected="true"] {
      background: var(--color-surface-tint);
    }
    #kmch-search-results .kmch-search-type {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--color-ink-muted);
      padding: 0.15rem 0.5rem;
      background: var(--color-bg-strong);
      border-radius: 0.4rem;
      flex-shrink: 0;
      min-width: 4.5rem;
      text-align: center;
    }
    #kmch-search-results .kmch-search-title {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .kmch-search-empty {
      padding: 2rem 1rem;
      text-align: center;
      color: var(--color-ink-muted);
      font-size: 0.9rem;
    }
    .kmch-search-footer {
      display: flex; gap: 1.5rem;
      padding: 0.6rem 1rem;
      border-top: 1px solid var(--color-border);
      background: var(--color-bg);
      font-size: 0.75rem;
      color: var(--color-ink-muted);
    }
    .kmch-search-footer kbd {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      padding: 0.1rem 0.4rem;
      border-radius: 0.3rem;
      background: var(--color-surface-tint);
      border: 1px solid var(--color-border);
      margin: 0 0.15rem;
    }
    @media (prefers-reduced-motion: reduce) {
      .kmch-search-backdrop { backdrop-filter: none; }
    }
  `;
  document.head.appendChild(style);

  // Click backdrop closes
  m.querySelector('[data-close]')?.addEventListener('click', closeModal);

  return m;
}

function openModal() {
  const m = ensureModal();
  m.setAttribute('data-open', 'true');
  const input = m.querySelector<HTMLInputElement>('#kmch-search-input')!;
  input.value = '';
  setTimeout(() => input.focus(), 10);
  renderResults('');
}

function closeModal() {
  if (modal) modal.removeAttribute('data-open');
}

let activeIndex = -1;

async function renderResults(query: string) {
  const m = ensureModal();
  const list = m.querySelector<HTMLUListElement>('#kmch-search-results')!;
  const idx = await loadIndex();
  const q = query.trim().toLowerCase();
  let items: IndexEntry[];
  if (!q) {
    items = idx.slice(0, 8); // Empty state: show first 8
  } else {
    items = idx
      .map((e) => ({
        e,
        score:
          (e.title?.toLowerCase().includes(q) ? 3 : 0) +
          (e.text?.toLowerCase().includes(q) ? 1 : 0) +
          ((e.roles ?? []).some((r) => r.toLowerCase().includes(q)) ? 2 : 0),
      }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 30)
      .map((x) => x.e);
  }
  if (items.length === 0) {
    list.innerHTML = `<div class="kmch-search-empty">ไม่พบผลลัพธ์ — ลองคีย์เวิร์ดอื่น</div>`;
    return;
  }
  list.innerHTML = items
    .map(
      (e, i) => `
      <li>
        <a href="${e.href}" data-index="${i}" ${i === 0 ? 'aria-selected="true"' : ''}>
          <span class="kmch-search-type">${e.type ?? '—'}</span>
          <span class="kmch-search-title">${escapeHtml(e.title ?? e.href)}</span>
        </a>
      </li>
    `,
    )
    .join('');
  activeIndex = 0;
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
}

function setActive(delta: number) {
  if (!modal) return;
  const items = Array.from(modal.querySelectorAll<HTMLAnchorElement>('#kmch-search-results a'));
  if (items.length === 0) return;
  activeIndex = Math.max(0, Math.min(items.length - 1, activeIndex + delta));
  items.forEach((a, i) => a.setAttribute('aria-selected', i === activeIndex ? 'true' : 'false'));
  items[activeIndex].scrollIntoView({ block: 'nearest' });
}

function activateSelected() {
  if (!modal) return;
  const item = modal.querySelector<HTMLAnchorElement>(`#kmch-search-results a[aria-selected="true"]`);
  if (item) location.href = item.href;
}

export function initCmdK() {
  if (typeof window === 'undefined') return;

  document.addEventListener('keydown', (e) => {
    const isMac = navigator.platform.toLowerCase().includes('mac');
    const cmd = isMac ? e.metaKey : e.ctrlKey;

    // Open
    if (cmd && e.key === 'k') {
      e.preventDefault();
      openModal();
      return;
    }

    // Modal-only keys
    if (modal?.getAttribute('data-open') === 'true') {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActive(1);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActive(-1);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        activateSelected();
      }
    }
  });

  // Click on top-bar search trigger opens too
  document.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    if (t.closest('#search-trigger')) {
      openModal();
    }
  });

  // Live-update results
  document.addEventListener('input', (e) => {
    const t = e.target as HTMLInputElement;
    if (t.id === 'kmch-search-input') {
      renderResults(t.value);
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCmdK);
  } else {
    initCmdK();
  }
}
