import type { APIRoute } from 'astro';
import { getSearchRecordsByCollection } from '../lib/search-index';

export const prerender = true;

export const GET: APIRoute = async () => {
  const records = await getSearchRecordsByCollection('rooms');
  return new Response(
    JSON.stringify({
      generatedAt: new Date().toISOString(),
      collection: 'rooms',
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
