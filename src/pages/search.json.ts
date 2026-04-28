import type { APIRoute } from 'astro';
import { getSearchRecords, getQueryHints } from '../lib/search-index';

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
      },
    }
  );
};
