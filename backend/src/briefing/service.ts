/**
 * contracts/briefing-library.md `generateBriefing()` — the single
 * orchestration entry point and the ONLY caller of
 * `store.insertSnapshot()`/`logFile.appendSnapshot()` in this feature
 * ("안정성 계약").
 */
import { getReviewQueueStatus, listRoadmaps } from "../persistence/queries.js";
import type { ReviewQueueStatus } from "../persistence/types.js";
import { buildSnapshot } from "./buildSnapshot.js";
import { appendSnapshot } from "./logFile.js";
import { findLatestSnapshotForKey, insertSnapshot } from "./store.js";
import type { GenerateBriefingResult } from "./types.js";

export interface GenerateBriefingOptions {
  /** Omitted -> `"all"`. A specific `roadmapId` otherwise (FR-001). */
  scope?: string;
  /** `true` skips research.md §1's dedup lookup and always creates a new snapshot — `POST /briefing/rerun`'s contract. */
  forceNew?: boolean;
  /** Omitted -> `"Asia/Seoul"` (spec.md Assumptions). */
  timezone?: string;
  /** Test-only override for "now"; omitted -> the real current time. */
  now?: Date;
  /**
   * Test-only override for this feature's own SQLite file (`store.ts`'s
   * `insertSnapshot`/`findLatestSnapshotForKey`); omitted -> the real
   * `내학습/briefing-history.sqlite`. Without this, `generateBriefing()` was
   * the only write path in this feature with no way to redirect its writes
   * away from the real file (found during QA review — every other function
   * here already takes a `dbPath`/`logPath`, matching 002/004's convention).
   */
  dbPath?: string;
  /** Test-only override for `logFile.ts`'s `appendSnapshot`; omitted -> the real `내학습/브리핑로그.md`. */
  logPath?: string;
}

const DEFAULT_TIMEZONE = "Asia/Seoul";

/**
 * FR-002: "오늘" is the user's own calendar date in `timezone`, never the
 * server process's local date or a raw UTC date. `Intl.DateTimeFormat` with
 * the `en-CA` locale formats as `YYYY-MM-DD` directly, so no date-arithmetic
 * library is needed (none exists in package.json) — and it correctly
 * accounts for the timezone's actual UTC offset/DST rules for `now`, unlike
 * a manual offset calculation would.
 */
function toReferenceDate(now: Date, timezone: string): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

export function generateBriefing(options: GenerateBriefingOptions = {}): GenerateBriefingResult {
  const scope = options.scope ?? "all";
  const timezone = options.timezone ?? DEFAULT_TIMEZONE;
  const now = options.now ?? new Date();
  const referenceDate = toReferenceDate(now, timezone);

  // 002's own failure (cache never loaded / unreadable) is NOT caught here —
  // it propagates up through web/routes/briefing.ts to 003's existing
  // Express error middleware, which already turns it into a 503
  // (research.md §4: only 004's review-data failure gets special
  // partial-degradation handling in this feature).
  const roadmapSummaries = listRoadmaps();

  // FR-018: validated unconditionally, before either the dedup lookup or the
  // forceNew branch below — an invalid scope must never fall through to
  // return a stale/forced snapshot for a roadmap that doesn't exist.
  if (scope !== "all" && !roadmapSummaries.some((summary) => summary.roadmapId === scope)) {
    return { error: "roadmap_not_found" };
  }

  if (!options.forceNew) {
    const existing = findLatestSnapshotForKey(referenceDate, timezone, scope, options.dbPath);
    if (existing) {
      return existing;
    }
  }

  // research.md §4: 004's lookup is isolated in its own try/catch so a
  // review-queue failure degrades gracefully instead of failing the whole
  // briefing. `roadmapSummaries` is reused from the validation call above
  // rather than re-queried (002's data cannot change within one request) —
  // a minor, behavior-preserving simplification of the contract's literal
  // "listRoadmaps() + getReviewQueueStatus()" wording.
  let dueReviewResult: ReviewQueueStatus | Error;
  try {
    dueReviewResult = getReviewQueueStatus(referenceDate);
  } catch (err) {
    dueReviewResult = err instanceof Error ? err : new Error(String(err));
  }

  const built = buildSnapshot({ referenceDate, timezone, scope, roadmapSummaries, dueReviewResult });

  if ("reviewDataUnavailable" in built) {
    // research.md §4: never stored — an incomplete snapshot must not become
    // a permanent "point in time" record (FR-014 would be a lie otherwise).
    return built;
  }

  const stored = insertSnapshot(built, options.dbPath);

  try {
    appendSnapshot(stored, options.logPath);
  } catch (err) {
    // FR-021: a file-log failure must NEVER invalidate the snapshot that is
    // already safely committed to SQLite. Deviation worth flagging (same
    // spirit as 004's documented `INSERT OR IGNORE` choice): rather than add
    // a "fileLogFailed" flag to `BriefingSnapshot` itself — which would force
    // every consumer, including a snapshot freshly re-hydrated from SQLite
    // via `getSnapshotById()`, to carry a field that is meaningless after the
    // fact — this is only logged server-side. FR-021's "재시도할 수 있게
    // 한다" is satisfied structurally: the user can simply reload
    // `GET /briefing` (dedup returns the same already-stored row, no new
    // file-append is attempted) or press "다시 실행" (US3, `forceNew: true`),
    // which calls `appendSnapshot()` again for a brand-new row — there is no
    // separate "retry the log write for snapshot N" affordance because
    // nothing about a past row's file-log entry is user-visible or referenced
    // elsewhere.
    console.error("브리핑 로그 파일(내학습/브리핑로그.md) 기록에 실패했습니다:", err);
  }

  return stored;
}
