// Thai tokenizer wrapper.
//
// Goal: segment Thai-language input into searchable sub-tokens so a doc that
// says `จ่ายยา` matches the query `การจ่ายยา`. The plan (KMCH Wiki v2.2,
// Task 2.1) prescribes the `thai-tokenizer` npm package as the primary path,
// with a hand-rolled n-gram fallback if the dependency is unavailable.
//
// At install time the `thai-tokenizer` package was not published to the npm
// registry (404). Per the plan's documented fallback block we drop the
// dependency and ship the n-gram-only path. The runtime browser tokens
// (Task 2.4) already plan for n-gram-only output, so this matches the
// downstream contract.
//
// We expand the documented fallback (2-grams + 3-grams) to also emit
// 4-grams. This is required to satisfy the spec test's assertion that the
// 4-character token `จ่าย` is present in the tokenization of `การจ่ายยา`.
//
// Exports:
//   - hasThai(input): true if `input` contains any character in U+0E00–U+0E7F.
//   - tokenizeThai(input): unique sub-tokens (length >= 2) extracted from
//     each contiguous Thai run in `input`.

const THAI_RANGE = /[฀-๿]/;
const THAI_RUN_RE = /[฀-๿]+/g;

export function hasThai(input: string): boolean {
  return THAI_RANGE.test(input);
}

export function tokenizeThai(input: string): string[] {
  if (!hasThai(input)) return [];
  const runs = input.match(THAI_RUN_RE) ?? [];
  const tokens = new Set<string>();
  for (const run of runs) {
    if (run.length >= 2) tokens.add(run);
    for (const ng of ngrams(run, 4)) tokens.add(ng);
    for (const ng of ngrams(run, 3)) tokens.add(ng);
    for (const ng of ngrams(run, 2)) tokens.add(ng);
  }
  return Array.from(tokens);
}

function ngrams(input: string, n: number): string[] {
  const out: string[] = [];
  for (let i = 0; i + n <= input.length; i++) {
    out.push(input.slice(i, i + n));
  }
  return out;
}
