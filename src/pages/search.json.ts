import type { APIRoute } from 'astro';
import { getSearchRecords, getQueryHints } from '../lib/search-index';

export const prerender = true;

// Deprecated in v2.4 — replaced by /search-manifest.json + /search-{collection}.json.
// Kept for one release so cached clients keep working. Remove in v2.5.
export const GET: APIRoute = async () => {
  const records = await getSearchRecords();
  return new Response(
    JSON.stringify({
      generatedAt: new Date().toISOString(),
      count: records.length,
      hints: getQueryHints(),
      records,
    }),
    {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
        'X-Deprecated': 'use /search-manifest.json + /search-{collection}.json',
        'X-Deprecation-Removal': 'v2.5',
      },
    },
  );
};
