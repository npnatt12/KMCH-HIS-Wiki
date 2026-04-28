import type { APIRoute } from 'astro';
import { PII_PATTERNS } from '../../../scripts/lint-vault.mjs';

export const prerender = false;

interface SearchLogPayload {
  q: string;
  results_count: number;
  top_score: number;
  ms: number;
}

interface HandleResult {
  status: 204 | 400 | 429;
  reason?: 'invalid' | 'pii' | 'too_long' | 'rate_limit';
}

const RATE_LIMIT_PER_MINUTE = 60;
const buckets = new Map<string, { count: number; windowStart: number }>();

export function _resetRateLimit() {
  buckets.clear();
}

function checkRate(ip: string): boolean {
  const now = Date.now();
  const minute = 60_000;
  const entry = buckets.get(ip);
  if (!entry || now - entry.windowStart >= minute) {
    buckets.set(ip, { count: 1, windowStart: now });
    return true;
  }
  if (entry.count >= RATE_LIMIT_PER_MINUTE) return false;
  entry.count += 1;
  return true;
}

function isPHI(q: string): boolean {
  return Object.values(PII_PATTERNS).some((re) => re.test(q));
}

export function handlePayload(p: Partial<SearchLogPayload>, ip: string): HandleResult {
  if (typeof p.q !== 'string' || typeof p.results_count !== 'number' || typeof p.top_score !== 'number') {
    return { status: 400, reason: 'invalid' };
  }
  if (p.q.length > 200) return { status: 400, reason: 'too_long' };
  if (isPHI(p.q)) return { status: 400, reason: 'pii' };
  if (!checkRate(ip)) return { status: 429, reason: 'rate_limit' };

  console.log(JSON.stringify({
    event: 'search',
    q: p.q,
    results_count: p.results_count,
    top_score: p.top_score,
    ms: p.ms ?? 0,
    ts: Date.now(),
  }));
  return { status: 204 };
}

function clientIp(req: Request): string {
  const fwd = req.headers.get('x-forwarded-for') || '';
  return fwd.split(',')[0].trim() || 'unknown';
}

export const POST: APIRoute = async ({ request }) => {
  let payload: Partial<SearchLogPayload>;
  try {
    payload = await request.json();
  } catch {
    return new Response('invalid json', { status: 400 });
  }
  const result = handlePayload(payload, clientIp(request));
  return new Response(result.reason ?? '', { status: result.status });
};
