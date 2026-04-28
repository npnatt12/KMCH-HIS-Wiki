export function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const aArr = Array.from(a);
  const bArr = Array.from(b);
  let prev: number[] = new Array(bArr.length + 1);
  let curr: number[] = new Array(bArr.length + 1);

  for (let j = 0; j <= bArr.length; j++) prev[j] = j;

  for (let i = 1; i <= aArr.length; i++) {
    curr[0] = i;
    for (let j = 1; j <= bArr.length; j++) {
      const cost = aArr[i - 1] === bArr[j - 1] ? 0 : 1;
      curr[j] = Math.min(curr[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
    }
    [prev, curr] = [curr, prev];
  }

  return prev[bArr.length];
}

export function suggest(query: string, dictionary: string[]): string | null {
  const q = query.trim().toLowerCase();
  if (!q || q.length < 2) return null;

  let best: { word: string; distance: number } | null = null;
  const maxDistance = q.length <= 4 ? 1 : 2;

  for (const word of dictionary) {
    const w = word.toLowerCase();
    if (w === q) return null;
    const d = levenshtein(q, w);
    if (d > maxDistance) continue;
    if (!best || d < best.distance) best = { word, distance: d };
  }

  return best ? best.word : null;
}
