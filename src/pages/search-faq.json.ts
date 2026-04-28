import type { APIRoute } from 'astro';
import { getSearchRecordsByCollection } from '../lib/search-index';

export const prerender = true;

export const GET: APIRoute = async () => {
  const records = await getSearchRecordsByCollection('faq');
  return new Response(
    JSON.stringify({
      generatedAt: new Date().toISOString(),
      collection: 'faq',
      count: records.length,
      records,
    }),
    {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    },
  );
};
