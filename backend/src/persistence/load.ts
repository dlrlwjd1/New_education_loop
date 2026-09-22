import type { DatabaseSync, StatementSync } from "node:sqlite";
import type { ImportBatch, Roadmap, Phase } from "../ingestion/types.js";

interface PhaseInsertStmts {
  insertPhase: StatementSync;
  insertLearningItem: StatementSync;
}

/**
 * Populates a freshly-created (schema already applied), empty SQLite
 * database from one 001 `ImportBatch`, per data-model.md's mapping table
 * (FR-008: 001's returned types/fields are the only basis — nothing here
 * recomputes roadmap/material data, it only reshapes it into rows).
 *
 * Must only ever be called against a brand-new temp-path database inside
 * `db.ts`'s `buildAndReplace` (T023 — every write this module performs goes
 * through that atomic-replace helper, never against the live `dbPath`
 * directly, so an exception here never corrupts/half-updates the previous
 * cache file, FR-007).
 *
 * ## Known follow-up: `previousBatch` is recorded but not yet consumed
 *
 * `recordLoadRun` below persists each run's file snapshots
 * (`load_runs`/`load_run_file_snapshots`, data-model.md "적재 실행 기록") as a
 * write-only audit trail today. It is **not** fed back into 001's
 * `resolveIdentity` as a `previousBatch` on the next `reload()`, even though
 * research.md §3 originally intended that. Two independent blockers, found
 * during implementation (see `research.md` for the corrected decision):
 *
 *   1. `RunImportOptions`/`parseRoadmaps`/`parseMaterials` have no parameter
 *      a caller could use to inject a `previousBatch` — only the standalone
 *      `resolveIdentity` export accepts one, and 001's own pipeline always
 *      calls it with none. Adding this would mean extending 001's contract
 *      (`specs/001-content-ingestion-foundation/contracts/ingestion-library.md`),
 *      out of scope for this feature.
 *   2. More importantly, `parseMaterials.ts` pushes a new `MaterialVersion`
 *      whenever `resolveIdentity` reports `status: "updated"` — but that
 *      status covers BOTH "content actually changed" and "re-imported with
 *      identical content" (resolveIdentity.ts's own doc comment admits the
 *      status enum can't tell these apart). If 002 fed a `previousBatch` on
 *      every `reload()`, essentially every material would read back as
 *      "updated" on every single reload (matched by path), and
 *      `material_versions` would grow by ~7,865 rows per reload even when
 *      nothing changed. Wiring `previousBatch` through safely would first
 *      require 001 to compare against the *matched* previous mapping's
 *      `contentHash` before treating something as a real new version — a
 *      real (if latent, currently unexercised) gap in 001, not a mechanical
 *      plumbing job.
 *
 * FR-006/SC-004 (no duplicate growth across reloads) hold today regardless,
 * from two independent guarantees that don't need `previousBatch` at all:
 * (a) every id `runImport` assigns is `sha256(normalizedSourcePath)` — a
 * pure function of the path alone, stable across separate process runs on
 * its own — and (b) every reload rebuilds a brand-new SQLite file from
 * scratch rather than upserting into the old one. What is actually missing
 * is only the nicer behavior research.md originally described — a moved/
 * renamed file keeping the same id, and `material_versions` accumulating a
 * real history of content changes over time — plus a currently-latent
 * consequence: `material_versions` never receives a row today (its
 * `status === "updated"` trigger never fires without a `previousBatch`), so
 * the table exists per data-model.md but stays empty until 001 is extended.
 */
export function populateDatabase(db: DatabaseSync, batch: ImportBatch): void {
  const stmts = {
    insertRoadmap: db.prepare(
      "INSERT INTO roadmaps (id, source_path, title, has_phase_docs, order_index) VALUES (?, ?, ?, ?, ?)",
    ),
    insertTrack: db.prepare("INSERT INTO tracks (id, roadmap_id, title, order_index) VALUES (?, ?, ?, ?)"),
    insertPhase: db.prepare(
      "INSERT INTO phases (id, roadmap_id, track_id, source_path, title, order_index, aggregatable) VALUES (?, ?, ?, ?, ?, ?, ?)",
    ),
    insertLearningItem: db.prepare(
      "INSERT INTO learning_items (id, phase_id, order_index, text, completed, completed_date, linked_material_id, needs_review) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    ),
    insertMaterial: db.prepare(
      "INSERT INTO materials (id, source_path, title, category, provider, course, content_hash) VALUES (?, ?, ?, ?, ?, ?, ?)",
    ),
    insertMaterialVersion: db.prepare(
      "INSERT INTO material_versions (material_id, content_hash, captured_at) VALUES (?, ?, ?)",
    ),
    insertMaterialRoadmapLink: db.prepare(
      "INSERT INTO material_roadmap_links (material_id, roadmap_id) VALUES (?, ?)",
    ),
    insertImportError: db.prepare(
      "INSERT INTO import_errors (source_path, kind, detail, related_entity_id) VALUES (?, ?, ?, ?)",
    ),
  };

  // Roadmaps first: material_roadmap_links.roadmap_id, tracks.roadmap_id and
  // phases.roadmap_id all reference roadmaps(id).
  for (const roadmap of batch.roadmaps) {
    stmts.insertRoadmap.run(
      roadmap.id,
      roadmap.sourcePath,
      roadmap.title,
      toInt(roadmap.hasPhaseDocs),
      roadmap.orderIndex,
    );
  }

  // Materials next: learning_items.linked_material_id and
  // material_roadmap_links.material_id both reference materials(id).
  for (const material of batch.materials) {
    stmts.insertMaterial.run(
      material.id,
      material.sourcePath,
      material.title,
      material.category,
      material.provider,
      material.course,
      material.contentHash,
    );
  }
  for (const version of batch.materialVersions) {
    stmts.insertMaterialVersion.run(version.materialId, version.contentHash, version.capturedAt);
  }
  for (const material of batch.materials) {
    for (const roadmapId of material.linkedRoadmapIds) {
      stmts.insertMaterialRoadmapLink.run(material.id, roadmapId);
    }
  }

  // FR-005 lookups: which import_errors row (if any) belongs to which
  // learning_item / material, and which items must be flagged needs_review
  // beyond the guaranteed `completed IS NULL` case. Built from the batch's
  // own tree structures — no DB reads required.
  const { itemVirtualPathToId, materialPathToId } = buildIdentityLookup(batch);
  const reviewNeededItemIds = new Set<string>();
  for (const error of batch.errors) {
    const itemId = itemVirtualPathToId.get(error.sourcePath) ?? null;
    const relatedEntityId = itemId ?? materialPathToId.get(error.sourcePath) ?? null;
    if (itemId) {
      reviewNeededItemIds.add(itemId);
    }
    stmts.insertImportError.run(error.sourcePath, error.kind, error.detail, relatedEntityId);
  }

  // Tracks/phases/learning_items last: phases.track_id references tracks(id),
  // learning_items.linked_material_id references materials(id) (already
  // inserted above).
  for (const roadmap of batch.roadmaps) {
    for (const track of roadmap.tracks) {
      stmts.insertTrack.run(track.id, roadmap.id, track.title, track.orderIndex);
      for (const phase of track.phases) {
        insertPhaseWithItems(stmts, roadmap.id, track.id, phase, reviewNeededItemIds);
      }
    }
    for (const phase of roadmap.rootPhases) {
      insertPhaseWithItems(stmts, roadmap.id, null, phase, reviewNeededItemIds);
    }
  }
}

function insertPhaseWithItems(
  stmts: PhaseInsertStmts,
  roadmapId: string,
  trackId: string | null,
  phase: Phase,
  reviewNeededItemIds: Set<string>,
): void {
  stmts.insertPhase.run(
    phase.id,
    roadmapId,
    trackId,
    phase.sourcePath,
    phase.title,
    phase.orderIndex,
    toInt(phase.aggregatable),
  );

  phase.items.forEach((item, index) => {
    const needsReview = item.completed === null || reviewNeededItemIds.has(item.id);
    stmts.insertLearningItem.run(
      item.id,
      phase.id,
      index,
      item.text,
      nullableBoolToInt(item.completed),
      item.completedDate,
      item.linkedMaterialId,
      toInt(needsReview),
    );
  });
}

function toInt(flag: boolean): number {
  return flag ? 1 : 0;
}

function nullableBoolToInt(flag: boolean | null): number | null {
  return flag === null ? null : flag ? 1 : 0;
}

function collectPhases(roadmap: Roadmap): Phase[] {
  return [...roadmap.rootPhases, ...roadmap.tracks.flatMap((t) => t.phases)];
}

/**
 * Reconstructs, from the batch's own tree (no DB access needed), the two
 * lookups `import_errors.source_path` needs to resolve
 * `related_entity_id` (data-model.md):
 *   - `itemVirtualPathToId`: `${phase.sourcePath}#${index}` -> item id. This
 *     is exactly the per-item virtual source path parseRoadmaps.ts's
 *     `buildLearningItems` uses as `resolveIdentity`'s candidate — so it is
 *     the ONLY error kind precisely resolvable to one item: `id_collision`
 *     on an item (whose `ImportError.sourcePath` is that same virtual path).
 *     `checkbox_unrecognized`/`date_invalid`/`link_broken` errors are
 *     recorded by 001 against the *phase's* sourcePath, not a specific
 *     item's — ambiguous by construction when a phase has more than one
 *     affected line, so they intentionally do not resolve to a single item
 *     here (they still appear in `import_errors`/`listReviewNeededItems`,
 *     just without a resolved `related_entity_id`).
 *   - `materialPathToId`: material sourcePath -> material id (always exact,
 *     materials.source_path is 1:1).
 */
function buildIdentityLookup(batch: ImportBatch): {
  itemVirtualPathToId: Map<string, string>;
  materialPathToId: Map<string, string>;
} {
  const itemVirtualPathToId = new Map<string, string>();
  for (const roadmap of batch.roadmaps) {
    for (const phase of collectPhases(roadmap)) {
      phase.items.forEach((item, index) => {
        itemVirtualPathToId.set(`${phase.sourcePath}#${index}`, item.id);
      });
    }
  }

  const materialPathToId = new Map<string, string>();
  for (const material of batch.materials) {
    materialPathToId.set(material.sourcePath, material.id);
  }

  return { itemVirtualPathToId, materialPathToId };
}

/**
 * Records this run's `load_runs` row and its `load_run_file_snapshots`
 * (data-model.md — "적재 실행 기록"), from `batch.mappings`. `"held"`
 * mappings are skipped: a held mapping is a collision 001 refused to
 * materialize into any real entity (FR-010), so there is nothing for a
 * future `previousBatch` to usefully anchor to at that source path.
 */
export function recordLoadRun(db: DatabaseSync, batch: ImportBatch, startedAt: string, finishedAt: string): void {
  const insertLoadRun = db.prepare(
    "INSERT INTO load_runs (started_at, finished_at, roadmap_count, material_count, error_count) VALUES (?, ?, ?, ?, ?)",
  );
  const insertSnapshot = db.prepare(
    "INSERT INTO load_run_file_snapshots (load_run_id, source_path, content_hash) VALUES (?, ?, ?)",
  );

  const result = insertLoadRun.run(
    startedAt,
    finishedAt,
    batch.roadmaps.length,
    batch.materials.length,
    batch.errors.length,
  );
  const loadRunId = Number(result.lastInsertRowid);

  const seen = new Set<string>();
  for (const mapping of batch.mappings) {
    if (mapping.status === "held") {
      continue;
    }
    // A (sourcePath) can legitimately repeat across mapping kinds only if
    // 001 itself never produces duplicates for the same run; guard anyway
    // so a duplicate does not crash the whole reload (data-model.md PK is
    // (load_run_id, source_path)).
    if (seen.has(mapping.sourcePath)) {
      continue;
    }
    seen.add(mapping.sourcePath);
    insertSnapshot.run(loadRunId, mapping.sourcePath, mapping.contentHash);
  }
}

