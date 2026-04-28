(function () {
  function levenshtein(a, b) {
    if (a === b) return 0;
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    var aArr = Array.from(a);
    var bArr = Array.from(b);
    var prev = new Array(bArr.length + 1);
    var curr = new Array(bArr.length + 1);
    for (var j = 0; j <= bArr.length; j++) prev[j] = j;
    for (var i = 1; i <= aArr.length; i++) {
      curr[0] = i;
      for (var j2 = 1; j2 <= bArr.length; j2++) {
        var cost = aArr[i - 1] === bArr[j2 - 1] ? 0 : 1;
        curr[j2] = Math.min(curr[j2 - 1] + 1, prev[j2] + 1, prev[j2 - 1] + cost);
      }
      var tmp = prev;
      prev = curr;
      curr = tmp;
    }
    return prev[bArr.length];
  }
  function suggest(query, dictionary) {
    var q = String(query || '').trim().toLowerCase();
    if (!q || q.length < 2) return null;
    var best = null;
    var maxDistance = q.length <= 4 ? 1 : 2;
    for (var i = 0; i < dictionary.length; i++) {
      var w = String(dictionary[i] || '').toLowerCase();
      if (w === q) return null;
      var d = levenshtein(q, w);
      if (d > maxDistance) continue;
      if (!best || d < best.distance) best = { word: dictionary[i], distance: d };
    }
    return best ? best.word : null;
  }
  window.KMCHDidYouMean = { suggest: suggest, levenshtein: levenshtein };
})();
