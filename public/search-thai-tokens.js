(function () {
  var THAI_RANGE = /[฀-๿]/;
  var THAI_RUN_RE = /[฀-๿]+/g;

  function hasThai(input) {
    return THAI_RANGE.test(input);
  }

  function ngrams(input, n) {
    var out = [];
    for (var i = 0; i + n <= input.length; i++) {
      out.push(input.slice(i, i + n));
    }
    return out;
  }

  function tokenizeThai(input) {
    if (!hasThai(input)) return [];
    var runs = String(input).match(THAI_RUN_RE) || [];
    var seen = Object.create(null);
    var result = [];
    function add(t) {
      if (t.length >= 2 && !seen[t]) {
        seen[t] = 1;
        result.push(t);
      }
    }
    for (var r = 0; r < runs.length; r++) {
      var run = runs[r];
      add(run);
      var threes = ngrams(run, 3);
      for (var i = 0; i < threes.length; i++) add(threes[i]);
      var twos = ngrams(run, 2);
      for (var i = 0; i < twos.length; i++) add(twos[i]);
    }
    return result;
  }

  window.KMCHThaiTokens = { tokenizeThai: tokenizeThai, hasThai: hasThai };
})();
