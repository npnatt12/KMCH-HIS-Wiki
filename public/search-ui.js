(function () {
  var indexPromise = null;
  var records = [];

  var expansions = [];

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
      indexPromise = Promise.all([
        fetch('/search.json').then(function (r) {
          if (!r.ok) throw new Error('Search index failed to load');
          return r.json();
        }),
        fetch('/search-dictionary.json').then(function (r) {
          if (!r.ok) throw new Error('Dictionary failed to load');
          return r.json();
        }),
      ]).then(function (results) {
        var payload = results[0];
        var dict = results[1];
        records = payload.records || [];
        expansions = (dict.groups || []).map(function (g) {
          return { match: new RegExp(g.match, 'i'), terms: g.terms };
        });
        return records;
      });
    }
    return indexPromise;
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
    if (!normalize(query)) return [];

    return records
      .map(function (record) {
        return { record: record, score: score(record, query, tokens) };
      })
      .filter(function (result) {
        return result.score > 0;
      })
      .sort(function (a, b) {
        return b.score - a.score;
      })
      .slice(0, 8)
      .map(function (result) {
        return result.record;
      });
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

  function render(resultsEl, statusEl, results, query) {
    if (!query.trim()) {
      resultsEl.innerHTML = '';
      statusEl.textContent = 'พิมพ์อาการจริงที่เจอในระบบ หรือเลือกตัวอย่างด้านบน';
      return;
    }

    if (!results.length) {
      resultsEl.innerHTML = '<div class="kmch-search-empty">ไม่พบผลลัพธ์ ลองใช้คำกว้างขึ้น เช่น ชื่อแผนก, ปุ่ม, สถานะ หรือ HN</div>';
      statusEl.textContent = 'ไม่พบผลลัพธ์';
      return;
    }

    statusEl.textContent = 'พบ ' + results.length + ' ผลลัพธ์ที่น่าจะเกี่ยวข้อง';
    resultsEl.innerHTML = results
      .map(function (record) {
        var module = record.module ? '<span>' + escapeHtml(record.module) + '</span>' : '';
        var section = record.section && record.section !== 'Overview' ? '<span>' + escapeHtml(record.section) + '</span>' : '';

        return [
          '<a class="kmch-search-card" role="listitem" href="' + escapeHtml(record.url) + '">',
          '<div class="kmch-search-card-top">',
          '<span class="kmch-search-type">' + escapeHtml(typeLabel(record.type)) + '</span>',
          module,
          section,
          '</div>',
          '<div class="kmch-search-card-title">' + escapeHtml(record.title) + '</div>',
          '<p>' + escapeHtml(record.summary) + '</p>',
          '</a>',
        ].join('');
      })
      .join('');
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
        loadIndex()
          .then(function () {
            render(results, status, search(query), query);
          })
          .catch(function () {
            status.textContent = 'โหลดระบบค้นหาไม่สำเร็จ';
          });
      }, 80);
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
