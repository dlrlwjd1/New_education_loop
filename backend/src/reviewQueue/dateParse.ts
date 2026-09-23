/**
 * research.md §3: date cells in `내학습/복습큐.md` (처음 틀린 날 / 다음 복습일 /
 * 마스터한 날) accept ONLY strict `YYYY-MM-DD` (ISO-8601 calendar date). No
 * other separator, no natural-language date, no lenient parsing library —
 * a real typo should surface as a row the user has to look at, not get
 * silently coerced into some other date.
 *
 * This is a pure validation helper (never throws), matching the general
 * style of the 001 ingestion code (e.g. `resolveIdentity`'s discriminated
 * `ResolveIdentityResult`) rather than an exception-based API.
 */

export type ParseStrictIsoDateResult =
  | { ok: true; value: string }
  | { ok: false; reason: string };

const STRICT_ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/;

/**
 * Validates that `value` is exactly `YYYY-MM-DD` AND names a real calendar
 * date (e.g. `2026-02-30` is rejected even though it matches the regex).
 */
export function parseStrictIsoDate(value: string): ParseStrictIsoDateResult {
  const trimmed = value.trim();
  if (trimmed === "") {
    return { ok: false, reason: "값이 비어 있음" };
  }

  const match = STRICT_ISO_DATE.exec(trimmed);
  if (!match) {
    return { ok: false, reason: `"${trimmed}"은(는) YYYY-MM-DD 형식이 아님` };
  }

  const [, yearStr, monthStr, dayStr] = match as unknown as [string, string, string, string];
  const year = Number(yearStr);
  const month = Number(monthStr);
  const day = Number(dayStr);

  // Reconstruct via UTC epoch math and compare each field back out — this is
  // the standard way to reject calendar-invalid dates (e.g. 2026-02-30,
  // which Date would otherwise silently roll forward into 2026-03-02) without
  // a month-length lookup table of our own.
  const asDate = new Date(Date.UTC(year, month - 1, day));
  const isRealCalendarDate =
    asDate.getUTCFullYear() === year && asDate.getUTCMonth() === month - 1 && asDate.getUTCDate() === day;

  if (!isRealCalendarDate) {
    return { ok: false, reason: `"${trimmed}"은(는) 실제 달력에 없는 날짜` };
  }

  return { ok: true, value: trimmed };
}
