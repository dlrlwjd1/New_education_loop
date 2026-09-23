/**
 * contracts/briefing-library.md's four store functions. This module is the
 * ONLY place `briefing_snapshots`/`briefing_snapshot_roadmaps`/
 * `briefing_snapshot_review_items` are ever written — no UPDATE statement
 * exists anywhere here (data-model.md's validation rule, FR-014: a stored
 * snapshot's values never change again).
 */
import type { DatabaseSync } from "node:sqlite";
import { DEFAULT_BRIEFING_DB_PATH, openBriefingDb } from "./db.js";
import type {
  BriefingSnapshot,
  BriefingSnapshotListItem,
  DueReviewItemView,
  RoadmapProgressStatus,
  RoadmapProgressView,
} from "./types.js";

interface SnapshotRow {
  id: number;
  reference_date: string;
  timezone: string;
  scope: string;
  created_at: string;
  average_progress_ratio: number | null;
  average_progress_roadmap_count: number;
  due_review_count: number;
  total_active_count: number;
}

function loadRoadmaps(db: DatabaseSync, snapshotId: number): RoadmapProgressView[] {
  const rows = db
    .prepare(
      `SELECT roadmap_id, title, completed_count, total_count, status, percent_label
       FROM briefing_snapshot_roadmaps
       WHERE snapshot_id = ?
       ORDER BY order_index ASC`,
    )
    .all(snapshotId) as Array<{
    roadmap_id: string;
    title: string;
    completed_count: number;
    total_count: number;
    status: string;
    percent_label: string;
  }>;

  return rows.map(
    (row) =>
      ({
        roadmapId: row.roadmap_id,
        title: row.title,
        completedCount: row.completed_count,
        totalCount: row.total_count,
        status: row.status as RoadmapProgressStatus,
        percentLabel: row.percent_label,
      }) satisfies RoadmapProgressView,
  );
}

function loadReviewItems(db: DatabaseSync, snapshotId: number): DueReviewItemView[] {
  const rows = db
    .prepare(
      `SELECT item_id, item, topic, next_review_date, overdue_days
       FROM briefing_snapshot_review_items
       WHERE snapshot_id = ?
       ORDER BY order_index ASC`,
    )
    .all(snapshotId) as Array<{
    item_id: string;
    item: string;
    topic: string;
    next_review_date: string;
    overdue_days: number;
  }>;

  return rows.map(
    (row) =>
      ({
        id: row.item_id,
        item: row.item,
        topic: row.topic,
        nextReviewDate: row.next_review_date,
        overdueDays: row.overdue_days,
      }) satisfies DueReviewItemView,
  );
}

function hydrate(db: DatabaseSync, row: SnapshotRow): BriefingSnapshot {
  return {
    id: row.id,
    referenceDate: row.reference_date,
    timezone: row.timezone,
    scope: row.scope,
    createdAt: row.created_at,
    roadmaps: loadRoadmaps(db, row.id),
    averageProgressRatio: row.average_progress_ratio,
    averageProgressRoadmapCount: row.average_progress_roadmap_count,
    dueItems: loadReviewItems(db, row.id),
    dueReviewCount: row.due_review_count,
    totalActiveCount: row.total_active_count,
  };
}

const SNAPSHOT_COLUMNS =
  "id, reference_date, timezone, scope, created_at, average_progress_ratio, average_progress_roadmap_count, due_review_count, total_active_count";

/**
 * contracts/briefing-library.md `insertSnapshot()` (implied by
 * `generateBriefing()`'s "안정성 계약": this function is the only writer).
 * Writes the parent row plus both child tables, preserving array order via
 * `order_index`, inside one transaction — either all three tables gain their
 * rows for this snapshot or none do.
 */
export function insertSnapshot(
  snapshot: Omit<BriefingSnapshot, "id">,
  dbPath: string = DEFAULT_BRIEFING_DB_PATH,
): BriefingSnapshot {
  const db = openBriefingDb(dbPath);
  try {
    db.exec("BEGIN");
    try {
      const result = db
        .prepare(
          `INSERT INTO briefing_snapshots
             (reference_date, timezone, scope, created_at, average_progress_ratio, average_progress_roadmap_count, due_review_count, total_active_count)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        )
        .run(
          snapshot.referenceDate,
          snapshot.timezone,
          snapshot.scope,
          snapshot.createdAt,
          snapshot.averageProgressRatio,
          snapshot.averageProgressRoadmapCount,
          snapshot.dueReviewCount,
          snapshot.totalActiveCount,
        );
      const id = Number(result.lastInsertRowid);

      const insertRoadmap = db.prepare(
        `INSERT INTO briefing_snapshot_roadmaps
           (snapshot_id, order_index, roadmap_id, title, completed_count, total_count, status, percent_label)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      );
      snapshot.roadmaps.forEach((roadmap, index) => {
        insertRoadmap.run(
          id,
          index,
          roadmap.roadmapId,
          roadmap.title,
          roadmap.completedCount,
          roadmap.totalCount,
          roadmap.status,
          roadmap.percentLabel,
        );
      });

      const insertReviewItem = db.prepare(
        `INSERT INTO briefing_snapshot_review_items
           (snapshot_id, order_index, item_id, item, topic, next_review_date, overdue_days)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
      );
      snapshot.dueItems.forEach((item, index) => {
        insertReviewItem.run(id, index, item.id, item.item, item.topic, item.nextReviewDate, item.overdueDays);
      });

      db.exec("COMMIT");
      return { ...snapshot, id };
    } catch (err) {
      db.exec("ROLLBACK");
      throw err;
    }
  } finally {
    db.close();
  }
}

/**
 * research.md §1's dedup key: the latest (by `created_at`) snapshot, if any,
 * for exactly this `(referenceDate, timezone, scope)` triple. `service.ts`
 * calls this instead of creating a new snapshot unless `forceNew` is set.
 */
export function findLatestSnapshotForKey(
  referenceDate: string,
  timezone: string,
  scope: string,
  dbPath: string = DEFAULT_BRIEFING_DB_PATH,
): BriefingSnapshot | null {
  const db = openBriefingDb(dbPath);
  try {
    const row = db
      .prepare(
        `SELECT ${SNAPSHOT_COLUMNS}
         FROM briefing_snapshots
         WHERE reference_date = ? AND timezone = ? AND scope = ?
         ORDER BY created_at DESC, id DESC
         LIMIT 1`,
      )
      .get(referenceDate, timezone, scope) as SnapshotRow | undefined;
    return row ? hydrate(db, row) : null;
  } finally {
    db.close();
  }
}

/**
 * contracts/briefing-library.md `getSnapshotById()`. Returned exactly as
 * stored, never recomputed against current 002/004 data (FR-014, SC-005).
 */
export function getSnapshotById(id: number, dbPath: string = DEFAULT_BRIEFING_DB_PATH): BriefingSnapshot | null {
  const db = openBriefingDb(dbPath);
  try {
    const row = db.prepare(`SELECT ${SNAPSHOT_COLUMNS} FROM briefing_snapshots WHERE id = ?`).get(id) as
      | SnapshotRow
      | undefined;
    return row ? hydrate(db, row) : null;
  } finally {
    db.close();
  }
}

/**
 * contracts/briefing-library.md `listSnapshotsByDate()` (FR-015): date
 * descending, ties (same-day reruns) broken by creation time descending.
 */
export function listSnapshotsByDate(dbPath: string = DEFAULT_BRIEFING_DB_PATH): BriefingSnapshotListItem[] {
  const db = openBriefingDb(dbPath);
  try {
    const rows = db
      .prepare(
        `SELECT id, reference_date, scope, created_at, average_progress_ratio, due_review_count
         FROM briefing_snapshots
         ORDER BY reference_date DESC, created_at DESC`,
      )
      .all() as Array<{
      id: number;
      reference_date: string;
      scope: string;
      created_at: string;
      average_progress_ratio: number | null;
      due_review_count: number;
    }>;

    return rows.map(
      (row) =>
        ({
          id: row.id,
          referenceDate: row.reference_date,
          scope: row.scope,
          createdAt: row.created_at,
          averageProgressRatio: row.average_progress_ratio,
          dueReviewCount: row.due_review_count,
        }) satisfies BriefingSnapshotListItem,
    );
  } finally {
    db.close();
  }
}
