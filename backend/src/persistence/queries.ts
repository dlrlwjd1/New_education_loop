import type { DatabaseSync } from "node:sqlite";
import { runImport } from "../ingestion/runImport.js";
import { DEFAULT_DB_PATH, buildAndReplace, openExistingForRead } from "./db.js";
import { populateDatabase, recordLoadRun } from "./load.js";
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

  buildAndReplace(dbPath, (db) => {
    populateDatabase(db, batch);
    recordLoadRun(db, batch, startedAt.toISOString(), new Date().toISOString());
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
