import type { APIRoute } from 'astro';
import { getQueryHints, SEARCH_COLLECTIONS, getSearchRecordsByCollection } from '../lib/search-index';

export const prerender = true;

export const GET: APIRoute = async () => {
  const collections = await Promise.all(
    SEARCH_COLLECTIONS.map(async (name) => {
      const records = await getSearchRecordsByCollection(name);
      return { name, count: records.length };
    }),
  );

  return new Response(
    JSON.stringify({
      generatedAt: new Date().toISOString(),
      collections,
      hints: getQueryHints(),
    }),
    {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    },
  );
};
