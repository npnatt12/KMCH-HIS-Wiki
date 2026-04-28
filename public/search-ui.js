(function () {
  var indexPromise = null;
  var records = [];
  var expansions = [];
  var dyMDictionary = [];

  function normalize(value) {
    return String(value || '')
      .toLowerCase()
      .normalize('NFKC')
      .replace(/[\u200B-\u200D\uFEFF]/g, '')
      .replace(/[“”"']/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function tokenize(value) {
    var normalized = normalize(value);
    if (!normalized) return [];
    var tokens = normalized.split(/[\s,;:()[\]{}\\/|+]+/).filter(function (token) {
      return token.length > 1;
    });

    // Thai segmentation: if query contains Thai, also produce sub-tokens.
    if (window.KMCHThaiTokens && window.KMCHThaiTokens.hasThai(normalized)) {
      var thaiTokens = window.KMCHThaiTokens.tokenizeThai(normalized);
      for (var i = 0; i < thaiTokens.length; i++) tokens.push(normalize(thaiTokens[i]));
    }

    expansions.forEach(function (rule) {
      if (rule.match.test(value)) {
        rule.terms.forEach(function (term) {
          tokens.push(normalize(term));
        });
      }
    });

    return Array.from(new Set(tokens));
  }

  function loadIndex() {
    if (!indexPromise) {
      var COLLECTIONS = ['modules', 'workflows', 'entities', 'concepts', 'faq'];
      indexPromise = Promise.all([
        fetch('/search-manifest.json').then(function (r) {
          if (!r.ok) throw new Error('Manifest failed to load');
          return r.json();
        }),
      ].concat(COLLECTIONS.map(function (name) {
        return fetch('/search-' + name + '.json').then(function (r) {
          if (!r.ok) throw new Error('Collection ' + name + ' failed to load');
          return r.json();
        });
      }))).then(function (results) {
        var manifest = results[0];
        var buckets = results.slice(1);
        records = buckets.reduce(function (acc, bucket) {
          return acc.concat(bucket.records || []);
        }, []);
        expansions = (manifest.hints || []).map(function (term) {
          return { match: new RegExp(escapeRegex(term), 'i'), terms: [term] };
        });
        var dymTerms = [];
        records.forEach(function (r) {
          if (r.title) dymTerms.push(r.title.toLowerCase());
          if (r.section && r.section !== 'Overview') dymTerms.push(r.section.toLowerCase());
          if (r.module) dymTerms.push(r.module.toLowerCase());
        });
        (manifest.hints || []).forEach(function (term) {
          dymTerms.push(String(term).toLowerCase());
        });
        dyMDictionary = Array.from(new Set(dymTerms));
        return records;
      });
    }
    return indexPromise;
  }

  function escapeRegex(s) {
    return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function highlight(source, tokens) {
    if (!source) return '';
    var escaped = escapeHtml(source);
    var usable = (tokens || [])
      .map(function (t) { return String(t || '').trim(); })
      .filter(function (t) { return t.length >= 1; });
    if (usable.length === 0) return escaped;
    usable.sort(function (a, b) { return b.length - a.length; });
    var pattern = new RegExp(usable.map(escapeRegex).join('|'), 'gi');
    return escaped.replace(pattern, function (match) { return '<mark>' + match + '</mark>'; });
  }

  function score(record, query, tokens) {
    var phrase = normalize(query);
    var title = normalize(record.title);
    var section = normalize(record.section);
    var body = normalize(record.body);
    var summary = normalize(record.summary);
    var keywords = normalize((record.keywords || []).join(' '));
    var searchText = title + ' ' + section + ' ' + summary + ' ' + body + ' ' + keywords;
    var total = record.priority || 0;

    if (phrase && title.includes(phrase)) total += 120;
    if (phrase && section.includes(phrase)) total += 100;
    if (phrase && keywords.includes(phrase)) total += 80;
    if (phrase && body.includes(phrase)) total += 45;

    tokens.forEach(function (token) {
      if (title.includes(token)) total += 36;
      if (section.includes(token)) total += 32;
      if (keywords.includes(token)) total += 24;
      if (summary.includes(token)) total += 18;
      if (body.includes(token)) total += 8;
      if (record.module && normalize(record.module).includes(token)) total += 14;
    });

    if (record.type === 'troubleshooting') total += 30;
    if (record.type === 'workflow') total += 12;
    if (record.type === 'entity') total += 8;

    var matched = tokens.filter(function (token) {
      return searchText.includes(token);
    }).length;
    if (tokens.length > 1) total += matched * 10;
    if (matched === 0 && !searchText.includes(phrase)) return 0;

    return total;
  }

  function search(query) {
    var tokens = tokenize(query);
    if (!normalize(query)) return { records: [], topScore: 0 };
    var scored = records
      .map(function (record) {
        return { record: record, score: score(record, query, tokens) };
      })
      .filter(function (result) {
        return result.score > 0;
      })
      .sort(function (a, b) {
        return b.score - a.score;
      })
      .slice(0, 8);
    return {
      records: scored.map(function (r) { return r.record; }),
      topScore: scored.length > 0 ? scored[0].score : 0,
    };
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function typeLabel(type) {
    var labels = {
      troubleshooting: 'แก้ปัญหา',
      'how-to': 'วิธีใช้งาน',
      workflow: 'Workflow',
      entity: 'Screen',
      module: 'Module',
      concept: 'Concept',
    };
    return labels[type] || type;
  }

  function logSearch(query, hits, ms) {
    var q = String(query || '').trim();
    if (!q || q.length < 2) return;
    try {
      var body = JSON.stringify({
        q: q,
        results_count: (hits.records || []).length,
        top_score: hits.topScore || 0,
        ms: ms,
      });
      if (navigator.sendBeacon) {
        var blob = new Blob([body], { type: 'application/json' });
        navigator.sendBeacon('/api/log-search', blob);
      } else {
        fetch('/api/log-search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: body,
          keepalive: true,
        }).catch(function () {});
      }
    } catch (_) {
      // ignore — telemetry is best-effort
    }
  }

  function render(resultsEl, statusEl, hits, query) {
    if (!query.trim()) {
      resultsEl.innerHTML = '';
      statusEl.textContent = 'พิมพ์อาการจริงที่เจอในระบบ หรือเลือกตัวอย่างด้านบน';
      return;
    }
    var results = hits.records;
    var topScore = hits.topScore;
    var dymWord = window.KMCHDidYouMean && dyMDictionary.length
      ? window.KMCHDidYouMean.suggest(query, dyMDictionary)
      : null;

    if (!results.length) {
      var dymHtml = dymWord
        ? '<button type="button" class="kmch-search-dym" data-search-dym="' + escapeHtml(dymWord) + '">หมายถึง <strong>' + escapeHtml(dymWord) + '</strong>?</button>'
        : '';
      resultsEl.innerHTML = '<div class="kmch-search-empty">ไม่พบผลลัพธ์ ลองใช้คำกว้างขึ้น เช่น ชื่อแผนก, ปุ่ม, สถานะ หรือ HN ' + dymHtml + '</div>';
      statusEl.textContent = 'ไม่พบผลลัพธ์';
      return;
    }

    statusEl.textContent = 'พบ ' + results.length + ' ผลลัพธ์ที่น่าจะเกี่ยวข้อง';
    var queryTokens = tokenize(query);
    var listHtml = results.map(function (record) {
      var module = record.module ? '<span>' + escapeHtml(record.module) + '</span>' : '';
      var section = record.section && record.section !== 'Overview' ? '<span>' + escapeHtml(record.section) + '</span>' : '';
      return [
        '<a class="kmch-search-card" role="listitem" href="' + escapeHtml(record.url) + '">',
        '<div class="kmch-search-card-top">',
        '<span class="kmch-search-type">' + escapeHtml(typeLabel(record.type)) + '</span>',
        module,
        section,
        '</div>',
        '<div class="kmch-search-card-title">' + highlight(record.title, queryTokens) + '</div>',
        '<p>' + highlight(record.summary, queryTokens) + '</p>',
        '</a>',
      ].join('');
    }).join('');

    var lowScoreDymHtml = (topScore < 50 && dymWord)
      ? '<button type="button" class="kmch-search-dym" data-search-dym="' + escapeHtml(dymWord) + '">หมายถึง <strong>' + escapeHtml(dymWord) + '</strong>?</button>'
      : '';

    resultsEl.innerHTML = listHtml + lowScoreDymHtml;
  }

  function bind(root) {
    if (root.dataset.ready === 'true') return;
    root.dataset.ready = 'true';

    var input = root.querySelector('.kmch-search-input');
    var clear = root.querySelector('.kmch-search-clear');
    var status = root.querySelector('[data-search-status]');
    var results = root.querySelector('[data-search-results]');
    var examples = root.querySelectorAll('[data-search-example]');
    var timer = null;

    function run() {
      var query = input.value;
      if (clear) clear.hidden = !query;
      status.textContent = query ? 'กำลังค้นหา...' : 'พิมพ์อาการจริงที่เจอในระบบ หรือเลือกตัวอย่างด้านบน';

      clearTimeout(timer);
      timer = setTimeout(function () {
        var startedAt = Date.now();
        loadIndex()
          .then(function () {
            var hits = search(query);
            render(results, status, hits, query);
            attachDymHandler(input);
            logSearch(query, hits, Date.now() - startedAt);
          })
          .catch(function () {
            status.textContent = 'โหลดระบบค้นหาไม่สำเร็จ';
          });
      }, 80);
    }

    function attachDymHandler(inputEl) {
      var btn = root.querySelector('[data-search-dym]');
      if (!btn) return;
      btn.addEventListener('click', function () {
        inputEl.value = btn.getAttribute('data-search-dym') || '';
        run();
      });
    }

    input.addEventListener('input', run);
    root.querySelector('.kmch-search-form').addEventListener('submit', function (event) {
      event.preventDefault();
      run();
    });

    if (clear) {
      clear.addEventListener('click', function () {
        input.value = '';
        input.focus();
        run();
      });
    }

    examples.forEach(function (button) {
      button.addEventListener('click', function () {
        input.value = button.dataset.searchExample || '';
        input.focus();
        run();
      });
    });
  }

  window.KMCHSearch = {
    init: function () {
      document.querySelectorAll('[data-kmch-search]').forEach(bind);
    },
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.KMCHSearch.init);
  } else {
    window.KMCHSearch.init();
  }
  document.addEventListener('astro:page-load', window.KMCHSearch.init);
})();
