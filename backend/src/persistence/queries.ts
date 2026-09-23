import type { DatabaseSync } from "node:sqlite";
import { runImport } from "../ingestion/runImport.js";
import { DEFAULT_DB_PATH, buildAndReplace, openExistingForRead, openExistingForWrite } from "./db.js";
import { populateDatabase, recordLoadRun, loadReviewQueue, populateReviewQueue, DEFAULT_REVIEW_QUEUE_PATH } from "./load.js";
import type {
  ReloadOptions,
  LoadResult,
  RoadmapSummary,
  RoadmapDetail,
  TrackDetail,
  PhaseDetail,
  LearningItemDetail,
  MaterialSearchQuery,
  MaterialSearchResult,
  ReviewNeededItem,
  ReviewQueueStatus,
  DueReviewItem,
  MasteredItemView,
  ReviewImportErrorView,
} from "./types.js";

/**
 * contracts/persistence-library.md `reload()`.
 *
 * Always performs a full re-parse via 001's `runImport` (research.md §3 —
 * this, not per-file invalidation, is what structurally guarantees "file
 * wins", FR-002) and builds the new cache file at a temp path before
 * atomically replacing `dbPath` (`db.ts`'s `buildAndReplace`, FR-007).
 *
 * Does not inspect the existing cache file at all before rebuilding — a
 * missing/corrupted/version-mismatched (or perfectly fine) existing file are
 * all handled identically, by being unconditionally replaced with a fresh
 * rebuild. This is precisely FR-003's "재생성" branch, and it needs no
 * separate code path because every `reload()` call already is a full
 * rebuild (see `load.ts`'s module doc comment for why a `previousBatch`
 * isn't threaded through `runImport()` here).
 */
export function reload(options: ReloadOptions = {}): LoadResult {
  const dbPath = options.dbPath ?? DEFAULT_DB_PATH;
  const startedAt = new Date();

  const batch = runImport({
    scope: "real",
    studyProgressRoot: options.studyProgressRoot,
    coursesRoot: options.coursesRoot,
  });

  // specs/004-review-queue-persistence: parsed in the SAME atomic-rebuild
  // pass as the roadmap/material batch above (research.md §5) — never a
  // second reload()/second SQLite file, so a reader can never observe the
  // two data sets from two different points in time.
  const reviewQueueResult = loadReviewQueue(options.reviewQueuePath ?? DEFAULT_REVIEW_QUEUE_PATH);

  buildAndReplace(dbPath, (db) => {
    populateDatabase(db, batch);
    recordLoadRun(db, batch, startedAt.toISOString(), new Date().toISOString());
    populateReviewQueue(db, reviewQueueResult);
  });

  const finishedAt = new Date();
  return {
    roadmapCount: batch.roadmaps.length,
    materialCount: batch.materials.length,
    errorCount: batch.errors.length,
    durationMs: finishedAt.getTime() - startedAt.getTime(),
  };
}

function openReadOnlyOrThrow(dbPath: string): DatabaseSync {
  const result = openExistingForRead(dbPath);
  if (!result.ok) {
    throw new Error(
      `영속 저장소를 열 수 없습니다(${result.reason}): ${dbPath} — 먼저 reload()를 호출했는지 확인하세요.`,
    );
  }
  return result.db;
}

/** contracts/persistence-library.md `listRoadmaps()`. */
export function listRoadmaps(dbPath: string = DEFAULT_DB_PATH): RoadmapSummary[] {
  const db = openReadOnlyOrThrow(dbPath);
  try {
    const roadmapRows = db
      .prepare("SELECT id, title, has_phase_docs FROM roadmaps ORDER BY order_index ASC")
      .all() as Array<{ id: string; title: string; has_phase_docs: number }>;

    const countStmt = db.prepare(
      `SELECT
         COUNT(*) FILTER (WHERE li.completed = 1) AS completed,
         COUNT(*) AS total
       FROM learning_items li
       JOIN phases p ON p.id = li.phase_id
       WHERE p.roadmap_id = ? AND p.aggregatable = 1`,
    );
    const needsReviewStmt = db.prepare(
      `SELECT COUNT(*) AS cnt
       FROM learning_items li
       JOIN phases p ON p.id = li.phase_id
       WHERE p.roadmap_id = ? AND li.needs_review = 1`,
    );

    return roadmapRows.map((row) => {
      const counts = countStmt.get(row.id) as { completed: number; total: number };
      const needsReview = needsReviewStmt.get(row.id) as { cnt: number };
      const totalCount = counts.total;
      const completedCount = counts.completed;

      return {
        roadmapId: row.id,
        title: row.title,
        hasPhaseDocs: row.has_phase_docs === 1,
        completedCount,
        totalCount,
        progressRatio: totalCount === 0 ? null : completedCount / totalCount,
        needsReviewCount: needsReview.cnt,
      } satisfies RoadmapSummary;
    });
  } finally {
    db.close();
  }
}

function loadItemDetails(db: DatabaseSync, phaseId: string): LearningItemDetail[] {
  const rows = db
    .prepare(
      "SELECT id, text, completed, completed_date, linked_material_id, needs_review FROM learning_items WHERE phase_id = ? ORDER BY order_index ASC",
    )
    .all(phaseId) as Array<{
    id: string;
    text: string;
    completed: number | null;
    completed_date: string | null;
    linked_material_id: string | null;
    needs_review: number;
  }>;

  return rows.map(
    (row) =>
      ({
        itemId: row.id,
        text: row.text,
        completed: row.completed === null ? null : row.completed === 1,
        completedDate: row.completed_date,
        linkedMaterialId: row.linked_material_id,
        needsReview: row.needs_review === 1,
      }) satisfies LearningItemDetail,
  );
}

function loadPhaseDetails(db: DatabaseSync, roadmapId: string, trackId: string | null): PhaseDetail[] {
  const phaseRows = (
    trackId === null
      ? db
          .prepare(
            "SELECT id, title, aggregatable FROM phases WHERE roadmap_id = ? AND track_id IS NULL ORDER BY order_index ASC",
          )
          .all(roadmapId)
      : db
          .prepare("SELECT id, title, aggregatable FROM phases WHERE track_id = ? ORDER BY order_index ASC")
          .all(trackId)
  ) as Array<{ id: string; title: string; aggregatable: number }>;

  return phaseRows.map((row) => {
    const aggregatable = row.aggregatable === 1;
    return {
      phaseId: row.id,
      title: row.title,
      aggregatable,
      // data-model.md validation rule: non-aggregatable phases have no
      // items persisted in the first place (load.ts stores 001's
      // Phase.items verbatim, which is already [] when aggregatable is
      // false) — the branch here just avoids a pointless query.
      items: aggregatable ? loadItemDetails(db, row.id) : [],
    } satisfies PhaseDetail;
  });
}

/** contracts/persistence-library.md `getRoadmapDetail()`. */
export function getRoadmapDetail(roadmapId: string, dbPath: string = DEFAULT_DB_PATH): RoadmapDetail | null {
  const db = openReadOnlyOrThrow(dbPath);
  try {
    const roadmap = db.prepare("SELECT id, title FROM roadmaps WHERE id = ?").get(roadmapId) as
      | { id: string; title: string }
      | undefined;
    if (!roadmap) {
      return null;
    }

    const trackRows = db
      .prepare("SELECT id, title FROM tracks WHERE roadmap_id = ? ORDER BY order_index ASC")
      .all(roadmapId) as Array<{ id: string; title: string }>;

    const tracks: TrackDetail[] = trackRows.map((t) => ({
      trackId: t.id,
      title: t.title,
      phases: loadPhaseDetails(db, roadmapId, t.id),
    }));

    const phases = loadPhaseDetails(db, roadmapId, null);

    return { roadmapId: roadmap.id, title: roadmap.title, tracks, phases };
  } finally {
    db.close();
  }
}

interface MaterialRow {
  id: string;
  title: string;
  source_path: string;
  category: string;
  provider: string | null;
  course: string | null;
}

function toSearchResult(db: DatabaseSync, row: MaterialRow): MaterialSearchResult {
  const linkedRoadmapIds = (
    db.prepare("SELECT roadmap_id FROM material_roadmap_links WHERE material_id = ?").all(row.id) as Array<{
      roadmap_id: string;
    }>
  ).map((r) => r.roadmap_id);

  return {
    materialId: row.id,
    title: row.title,
    sourcePath: row.source_path,
    category: row.category,
    provider: row.provider,
    course: row.course,
    linkedRoadmapIds,
  };
}

/**
 * contracts/persistence-library.md `searchMaterials()`. Mirrors 001
 * `MaterialIndex`'s filter semantics exactly (FR-004, FR-008 — no
 * reinterpretation): `sourcePath` is an exact single-match lookup (like
 * `MaterialIndex.byPath`); every other field is an exact-match AND filter
 * (like `MaterialIndex.search`); a `provider`/`course` filter never matches
 * a material whose value is NULL (SQL `= ?` already excludes NULL, so this
 * falls out for free); and a query with no fields at all returns `[]`,
 * exactly like `MaterialIndex.search({})` (whose empty `candidateSets`
 * short-circuits to `[]`).
 */
export function searchMaterials(
  query: MaterialSearchQuery,
  dbPath: string = DEFAULT_DB_PATH,
): MaterialSearchResult[] {
  const db = openReadOnlyOrThrow(dbPath);
  try {
    if (query.sourcePath !== undefined) {
      const row = db
        .prepare("SELECT id, title, source_path, category, provider, course FROM materials WHERE source_path = ?")
        .get(query.sourcePath) as MaterialRow | undefined;
      return row ? [toSearchResult(db, row)] : [];
    }

    const hasAnyFilter =
      query.title !== undefined ||
      query.category !== undefined ||
      query.provider !== undefined ||
      query.course !== undefined ||
      query.roadmapId !== undefined;
    if (!hasAnyFilter) {
      return [];
    }

    const params: string[] = [];
    let sql = "SELECT DISTINCT m.id, m.title, m.source_path, m.category, m.provider, m.course FROM materials m";
    if (query.roadmapId !== undefined) {
      sql += " JOIN material_roadmap_links mrl ON mrl.material_id = m.id AND mrl.roadmap_id = ?";
      params.push(query.roadmapId);
    }

    const whereClauses: string[] = [];
    if (query.title !== undefined) {
      whereClauses.push("m.title = ?");
      params.push(query.title);
    }
    if (query.category !== undefined) {
      whereClauses.push("m.category = ?");
      params.push(query.category);
    }
    if (query.provider !== undefined) {
      whereClauses.push("m.provider = ?");
      params.push(query.provider);
    }
    if (query.course !== undefined) {
      whereClauses.push("m.course = ?");
      params.push(query.course);
    }
    if (whereClauses.length > 0) {
      sql += ` WHERE ${whereClauses.join(" AND ")}`;
    }

    const rows = db.prepare(sql).all(...params) as unknown as MaterialRow[];
    return rows.map((row) => toSearchResult(db, row));
  } finally {
    db.close();
  }
}

/**
 * contracts/persistence-library.md `getMaterialById()` (003 Addendum,
 * additive — see that file's section for why this was needed: the linked
 * material ids returned by `getRoadmapDetail()`/`searchMaterials()` are
 * opaque hashes with no other way to look a material up directly). Mirrors
 * `getRoadmapDetail()`'s null-not-throw pattern and reuses `toSearchResult`
 * so the shape stays identical to `searchMaterials()`'s results.
 */
export function getMaterialById(materialId: string, dbPath: string = DEFAULT_DB_PATH): MaterialSearchResult | null {
  const db = openReadOnlyOrThrow(dbPath);
  try {
    const row = db
      .prepare("SELECT id, title, source_path, category, provider, course FROM materials WHERE id = ?")
      .get(materialId) as MaterialRow | undefined;
    return row ? toSearchResult(db, row) : null;
  } finally {
    db.close();
  }
}

function firstLinkedRoadmapId(db: DatabaseSync, materialId: string): string | null {
  const row = db
    .prepare("SELECT roadmap_id FROM material_roadmap_links WHERE material_id = ? LIMIT 1")
    .get(materialId) as { roadmap_id: string } | undefined;
  return row?.roadmap_id ?? null;
}

/**
 * contracts/persistence-library.md `listReviewNeededItems()` (FR-005).
 * Every `import_errors` row produces exactly one result row — nothing is
 * ever silently dropped (SC-005) — regardless of whether `related_entity_id`
 * could be resolved down to one specific learning item at load time (see
 * load.ts's `buildIdentityLookup` doc comment: only item-level
 * `id_collision` errors carry a precise per-item source path; the other
 * three error kinds are recorded by 001 against a Phase's path, which this
 * query still resolves back to a roadmap via a direct `phases.source_path`
 * match even without a `related_entity_id`).
 */
export function listReviewNeededItems(dbPath: string = DEFAULT_DB_PATH): ReviewNeededItem[] {
  const db = openReadOnlyOrThrow(dbPath);
  try {
    const rows = db
      .prepare(
        `SELECT
           ie.source_path AS source_path,
           ie.kind AS kind,
           ie.detail AS detail,
           ie.related_entity_id AS related_entity_id,
           li.id AS item_id,
           p.roadmap_id AS item_roadmap_id,
           p2.roadmap_id AS phase_roadmap_id
         FROM import_errors ie
         LEFT JOIN learning_items li ON li.id = ie.related_entity_id
         LEFT JOIN phases p ON p.id = li.phase_id
         LEFT JOIN phases p2 ON p2.source_path = ie.source_path
         ORDER BY ie.id ASC`,
      )
      .all() as Array<{
      source_path: string;
      kind: string;
      detail: string;
      related_entity_id: string | null;
      item_id: string | null;
      item_roadmap_id: string | null;
      phase_roadmap_id: string | null;
    }>;

    return rows.map((row) => {
      const roadmapIdFromMaterial =
        row.related_entity_id && !row.item_id ? firstLinkedRoadmapId(db, row.related_entity_id) : null;

      return {
        itemId: row.item_id ?? row.related_entity_id ?? "",
        roadmapId: row.item_roadmap_id ?? row.phase_roadmap_id ?? roadmapIdFromMaterial ?? "",
        sourcePath: row.source_path,
        errorKind: row.kind,
        detail: row.detail,
      } satisfies ReviewNeededItem;
    });
  } finally {
    db.close();
  }
}

// ---------------------------------------------------------------------------
// 004 — review queue (contracts/review-queue-library.md)
// ---------------------------------------------------------------------------

/** `YYYY-MM-DD` -> {year, month, day}, or null if not that shape. Dates stored via `populateReviewQueue` are already validated by `parseStrictIsoDate` at load time, but `referenceDate` is caller-supplied at query time and not re-validated here (contract: this function only compares dates, it does not judge "today"). */
function parseIsoDateParts(value: string): { year: number; month: number; day: number } | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) {
    return null;
  }
  const [, yearStr, monthStr, dayStr] = match as unknown as [string, string, string, string];
  return { year: Number(yearStr), month: Number(monthStr), day: Number(dayStr) };
}

/** Whole days between two `YYYY-MM-DD` values (`laterDate` - `earlierDate`). 0 if either is not parseable. */
function daysBetween(laterDate: string, earlierDate: string): number {
  const later = parseIsoDateParts(laterDate);
  const earlier = parseIsoDateParts(earlierDate);
  if (!later || !earlier) {
    return 0;
  }
  const laterMs = Date.UTC(later.year, later.month - 1, later.day);
  const earlierMs = Date.UTC(earlier.year, earlier.month - 1, earlier.day);
  return Math.round((laterMs - earlierMs) / 86_400_000);
}

/**
 * contracts/review-queue-library.md `getReviewQueueStatus()` (spec.md
 * FR-004/FR-005). This function never decides what "today" is — the caller
 * (005-briefing) always resolves that in the user's own timezone and passes
 * it explicitly (spec.md FR-013: this feature does not compute or judge
 * scheduling, only compares dates it is given).
 */
export function getReviewQueueStatus(
  referenceDate?: string,
  dbPath: string = DEFAULT_DB_PATH,
): ReviewQueueStatus {
  const db = openReadOnlyOrThrow(dbPath);
  try {
    const totalRow = db.prepare("SELECT COUNT(*) AS cnt FROM review_queue_items").get() as { cnt: number };
    const totalActiveCount = totalRow.cnt;

    if (referenceDate === undefined) {
      // The contract says callers always pass `referenceDate` explicitly.
      // If one omits it anyway, guessing a timezone here to compute "today"
      // ourselves would risk silently misclassifying items as due/not-due —
      // so instead we report zero due items (never guess), while still
      // returning the real `totalActiveCount` so FR-005's "no items at all"
      // vs "items exist, none matched" distinction is not lost.
      return { totalActiveCount, dueItems: [] };
    }

    const rows = db
      .prepare("SELECT id, item, topic, next_review_date FROM review_queue_items WHERE next_review_date <= ?")
      .all(referenceDate) as Array<{ id: string; item: string; topic: string; next_review_date: string }>;

    const dueItems: DueReviewItem[] = rows
      .map(
        (row) =>
          ({
            id: row.id,
            item: row.item,
            topic: row.topic,
            nextReviewDate: row.next_review_date,
            overdueDays: daysBetween(referenceDate, row.next_review_date),
          }) satisfies DueReviewItem,
      )
      .sort((a, b) => b.overdueDays - a.overdueDays);

    return { totalActiveCount, dueItems };
  } finally {
    db.close();
  }
}

/** contracts/review-queue-library.md `listMasteredItems()` (spec.md FR-006). */
export function listMasteredItems(dbPath: string = DEFAULT_DB_PATH): MasteredItemView[] {
  const db = openReadOnlyOrThrow(dbPath);
  try {
    const rows = db
      .prepare(
        "SELECT id, item, topic, first_wrong_date, mastered_date FROM mastered_items ORDER BY mastered_date ASC",
      )
      .all() as Array<{
      id: string;
      item: string;
      topic: string;
      first_wrong_date: string;
      mastered_date: string;
    }>;

    return rows.map(
      (row) =>
        ({
          id: row.id,
          item: row.item,
          topic: row.topic,
          firstWrongDate: row.first_wrong_date,
          masteredDate: row.mastered_date,
        }) satisfies MasteredItemView,
    );
  } finally {
    db.close();
  }
}

/**
 * contracts/review-queue-library.md `listReviewQueueImportErrors()` (spec.md
 * FR-008, SC-004). `review_import_errors` (004) is a separate table from
 * `import_errors` (001) — never mixed into `listReviewNeededItems()`'s
 * results above, and vice versa.
 */
export function listReviewQueueImportErrors(dbPath: string = DEFAULT_DB_PATH): ReviewImportErrorView[] {
  const db = openReadOnlyOrThrow(dbPath);
  try {
    const rows = db
      .prepare("SELECT source_table, kind, detail, raw_row FROM review_import_errors ORDER BY rowid ASC")
      .all() as Array<{ source_table: string; kind: string; detail: string; raw_row: string }>;

    return rows.map(
      (row) =>
        ({
          sourceTable: row.source_table as "active" | "mastered",
          kind: row.kind as "date_unparseable" | "row_incomplete",
          detail: row.detail,
          rawRow: row.raw_row,
        }) satisfies ReviewImportErrorView,
    );
  } finally {
    db.close();
  }
}

// ---------------------------------------------------------------------------
// 006-study-core-loop — additive extension of 004's contract (data-model.md
// "004 계약의 additive 확장"). 004's five (now eight) existing exported
// function signatures above are UNCHANGED by this addition.
// ---------------------------------------------------------------------------

export interface AppendReviewQueueItemInput {
  /** `computeReviewItemId(item, topic, firstWrongDate)` (reviewQueue/identity.ts) — computed by the caller, not here (this function does not know 004's identity rule, it only stores what it's given). */
  id: string;
  item: string;
  topic: string;
  /** `YYYY-MM-DD`. */
  firstWrongDate: string;
  /** Fixed `"1회차"` in this feature — repetition-stage computation (F06) is out of scope. */
  stageLabel: string;
  /** `YYYY-MM-DD`, `firstWrongDate` + 1 day (the only interval math this feature does). */
  nextReviewDate: string;
}

/**
 * specs/006-study-core-loop/data-model.md "004 계약의 additive 확장" /
 * research.md §3: inserts ONE row directly into the LIVE cache file's
 * `review_queue_items` table — never a full `reload()` (~18s measured),
 * which would make every single wrong answer pay that cost on top of the AI
 * grading call's own 15-20s (research.md §2).
 *
 * Uses `INSERT OR IGNORE` for the same reason `load.ts`'s
 * `populateReviewQueue()` already does: `id` is a deterministic hash of
 * (item, topic, firstWrongDate), so a literal duplicate is the SAME item by
 * this feature's own identity rule, not two (FR-014).
 *
 * `내학습/복습큐.md`'s file itself is NOT written here — that is
 * `study/reviewQueueWriter.ts`'s job (data-model.md: "파일 쓰기와 캐시 쓰기를
 * 한 함수에 몰아넣지 않아, 004의 기존 코드가 SQLite만 다루던 경계를 유지한다").
 *
 * Throws (rather than silently no-opping) if the live cache file doesn't
 * exist yet, is corrupted, or has a mismatched schema version — the same
 * "you must `reload()` first" contract `openReadOnlyOrThrow` already
 * enforces for every read function in this module, so a caller can never
 * mistake "this write silently did nothing" for "this write succeeded".
 */
export function appendReviewQueueItem(item: AppendReviewQueueItemInput, dbPath: string = DEFAULT_DB_PATH): void {
  const opened = openExistingForWrite(dbPath);
  if (!opened.ok) {
    throw new Error(
      `영속 저장소를 열 수 없습니다(${opened.reason}): ${dbPath} — 먼저 reload()를 호출했는지 확인하세요.`,
    );
  }
  const db = opened.db;
  try {
    db.prepare(
      "INSERT OR IGNORE INTO review_queue_items (id, item, topic, first_wrong_date, stage_label, next_review_date) VALUES (?, ?, ?, ?, ?, ?)",
    ).run(item.id, item.item, item.topic, item.firstWrongDate, item.stageLabel, item.nextReviewDate);
  } finally {
    db.close();
  }
}
