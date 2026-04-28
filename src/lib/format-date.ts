const TZ = 'Asia/Bangkok';

export function formatBE(d: Date, locale = 'th-TH'): string {
  return d.toLocaleDateString(locale, {
    timeZone: TZ,
    calendar: 'buddhist',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatGregorian(d: Date, locale = 'en-GB'): string {
  return d.toLocaleDateString(locale, {
    timeZone: TZ,
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
