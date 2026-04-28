import dictionary from '../lib/search-dictionary.json';

export const GET = () =>
  new Response(JSON.stringify(dictionary), {
    headers: { 'Content-Type': 'application/json' },
  });
