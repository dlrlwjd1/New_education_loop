import { fileURLToPath } from "node:url";
import path from "node:path";
import { parseRoadmaps } from "./parseRoadmaps.js";
import { parseMaterials } from "./parseMaterials.js";
import { buildMaterialIndex } from "./materialIndex.js";
import { resolveMaterialLinks } from "./resolveMaterialLinks.js";
import { classifyExampleScope } from "./exampleSeparation.js";
import type {
  ImportBatch,
  ImportScope,
  Roadmap,
  Phase,
  LearningItem,
  ImportError,
  ImportMapping,
} from "./types.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
// backend/src/ingestion -> backend/src -> backend -> repo root
const DEFAULT_REPO_ROOT = path.resolve(HERE, "..", "..", "..");
export const DEFAULT_STUDY_PROGRESS_ROOT = path.join(DEFAULT_REPO_ROOT, "study-progress");
export const DEFAULT_COURSES_ROOT = path.join(DEFAULT_REPO_ROOT, "courses");

export interface RunImportOptions {
  scope: ImportScope;
  /**
   * Not part of contracts/ingestion-library.md's documented
   * `runImport(options: { scope })` signature — added because the contract
   * as written has no way to point this stateless library at anything
   * other than the real repository, which makes it impossible to unit-test
   * `runImport` itself against small fixtures (as tasks.md T011/T026
   * require) without it. Omit to use the real `study-progress/`/`courses/`.
   */
  studyProgressRoot?: string;
  coursesRoot?: string;
  /** Deterministic clock for date-validity checks; defaults to real time. */
  now?: Date;
}

function flattenLearningItems(roadmaps: Roadmap[]): LearningItem[] {
  const items: LearningItem[] = [];
  for (const roadmap of roadmaps) {
    for (const phase of roadmap.rootPhases) items.push(...phase.items);
    for (const track of roadmap.tracks) {
      for (const phase of track.phases) items.push(...phase.items);
    }
  }
  return items;
}

function countAggregatableItems(phases: Phase[]): number {
  return phases.filter((p) => p.aggregatable).reduce((sum, p) => sum + p.items.length, 0);
}

function totalRoadmapItemCount(roadmap: Roadmap): number {
  return (
    countAggregatableItems(roadmap.rootPhases) +
    roadmap.tracks.reduce((sum, t) => sum + countAggregatableItems(t.phases), 0)
  );
}

function computePerRoadmapCounts(roadmaps: Roadmap[]): {
  completedItemCount: Record<string, number>;
  totalItemCount: Record<string, number>;
} {
  const completedItemCount: Record<string, number> = {};
  const totalItemCount: Record<string, number> = {};
  for (const roadmap of roadmaps) {
    const allPhases = [...roadmap.rootPhases, ...roadmap.tracks.flatMap((t) => t.phases)];
    let completed = 0;
    let total = 0;
    for (const phase of allPhases) {
      if (!phase.aggregatable) continue;
      for (const item of phase.items) {
        total += 1;
        if (item.completed === true) completed += 1;
      }
    }
    completedItemCount[roadmap.id] = completed;
    totalItemCount[roadmap.id] = total;
  }
  return { completedItemCount, totalItemCount };
}

function filterOutExample(
  roadmap: Roadmap,
  exampleRoadmapIds: Set<string>,
  examplePhaseIds: Set<string>,
): Roadmap | null {
  if (exampleRoadmapIds.has(roadmap.id)) {
    return null;
  }
  const rootPhases = roadmap.rootPhases.filter((p) => !examplePhaseIds.has(p.id));
  const tracks = roadmap.tracks.map((t) => ({
    ...t,
    phases: t.phases.filter((p) => !examplePhaseIds.has(p.id)),
  }));
  return {
    ...roadmap,
    rootPhases,
    tracks,
    hasPhaseDocs: rootPhases.length > 0 || tracks.some((t) => t.phases.length > 0),
  };
}

function filterToOnlyExample(
  roadmap: Roadmap,
  exampleRoadmapIds: Set<string>,
  examplePhaseIds: Set<string>,
): Roadmap | null {
  if (exampleRoadmapIds.has(roadmap.id)) {
    return roadmap;
  }
  const rootPhases = roadmap.rootPhases.filter((p) => examplePhaseIds.has(p.id));
  const tracks = roadmap.tracks
    .map((t) => ({ ...t, phases: t.phases.filter((p) => examplePhaseIds.has(p.id)) }))
    .filter((t) => t.phases.length > 0);
  if (rootPhases.length === 0 && tracks.length === 0) {
    return null;
  }
  return { ...roadmap, rootPhases, tracks, hasPhaseDocs: true };
}

/**
 * Count example items that remain present in a roadmap that has already
 * been through {@link filterOutExample}/kept-as-is. This is a leak
 * detector, not an exclusion tally (see `applyScope`'s `exampleItemCount`
 * doc comment below) — on correctly-filtered input it is always 0.
 */
function countExampleItemsRemaining(
  roadmap: Roadmap,
  exampleRoadmapIds: Set<string>,
  examplePhaseIds: Set<string>,
): number {
  if (exampleRoadmapIds.has(roadmap.id)) {
    return totalRoadmapItemCount(roadmap);
  }
  const examplePhasesRoot = roadmap.rootPhases.filter((p) => examplePhaseIds.has(p.id));
  const examplePhasesTracked = roadmap.tracks.flatMap((t) => t.phases.filter((p) => examplePhaseIds.has(p.id)));
  return countAggregatableItems(examplePhasesRoot) + countAggregatableItems(examplePhasesTracked);
}

/**
 * ImportMapping entries only carry `sourcePath` (not roadmap/phase ids), so
 * scope-filtering them requires matching on the same roadmap/phase
 * `sourcePath` prefixes used to build the `roadmaps` tree, not on ids.
 * Roadmap-derived sourcePaths look like `<roadmapDir>`, `<roadmapDir>/<track>`,
 * `<roadmapDir>/<track>/<phaseFile>` or `<phaseSourcePath>#<itemIndex>` (see
 * parseRoadmaps.ts) — so "belongs to this roadmap" is a `===`/`startsWith(.. + "/")`
 * check, and "belongs to this phase" is `===`/`startsWith(.. + "#")`.
 */
function isExampleMappingSourcePath(
  sourcePath: string,
  exampleRoadmapPaths: readonly string[],
  examplePhasePaths: readonly string[],
): boolean {
  return (
    exampleRoadmapPaths.some((rp) => sourcePath === rp || sourcePath.startsWith(`${rp}/`)) ||
    examplePhasePaths.some((pp) => sourcePath === pp || sourcePath.startsWith(`${pp}#`))
  );
}

function collectExampleSourcePaths(
  roadmaps: Roadmap[],
  exampleRoadmapIds: Set<string>,
  examplePhaseIds: Set<string>,
): { exampleRoadmapPaths: string[]; examplePhasePaths: string[] } {
  const exampleRoadmapPaths: string[] = [];
  const examplePhasePaths: string[] = [];
  for (const roadmap of roadmaps) {
    if (exampleRoadmapIds.has(roadmap.id)) {
      exampleRoadmapPaths.push(roadmap.sourcePath);
      continue;
    }
    const allPhases = [...roadmap.rootPhases, ...roadmap.tracks.flatMap((t) => t.phases)];
    for (const phase of allPhases) {
      if (examplePhaseIds.has(phase.id)) examplePhasePaths.push(phase.sourcePath);
    }
  }
  return { exampleRoadmapPaths, examplePhasePaths };
}

/**
 * FR-011 (US4): split parsed roadmaps (and, optionally, the ImportMapping
 * entries derived from them) into the scope the caller asked for.
 * Exported (beyond what runImport's contract signature needs) so the CLI's
 * `--roadmaps-only` mode can apply the same real/example rule that a full
 * `runImport` run would, instead of silently ignoring `--scope` in that mode.
 *
 * `mappings` is optional and defaults to `[]` so existing callers (like the
 * CLI's `--roadmaps-only` path) that only care about `roadmaps`/
 * `exampleItemCount` keep compiling unchanged; when omitted, the returned
 * `mappings` is simply empty.
 */
export function applyScope(
  roadmaps: Roadmap[],
  studyProgressRoot: string,
  scope: ImportScope,
  mappings: ImportMapping[] = [],
): { roadmaps: Roadmap[]; exampleItemCount: number; mappings: ImportMapping[] } {
  const { exampleRoadmapIds, examplePhaseIds } = classifyExampleScope(roadmaps, studyProgressRoot);
  const { exampleRoadmapPaths, examplePhasePaths } = collectExampleSourcePaths(
    roadmaps,
    exampleRoadmapIds,
    examplePhaseIds,
  );

  if (scope === "real") {
    const kept: Roadmap[] = [];
    for (const roadmap of roadmaps) {
      if (exampleRoadmapIds.has(roadmap.id)) {
        continue;
      }
      const filtered = filterOutExample(roadmap, exampleRoadmapIds, examplePhaseIds);
      if (filtered) kept.push(filtered);
    }
    // data-model.md: "'실제 기록만' 범위에서 포함된 예시 데이터 수(SC-005, 0이어야
    // 함)" — this counts example items still INCLUDED in the real-scope
    // result, not the ones excluded above. It must be 0 whenever exclusion
    // worked; computed from `kept` (the returned roadmaps) rather than from
    // the exclusion step so a future filtering bug is caught here too.
    const exampleItemCount = kept.reduce(
      (sum, r) => sum + countExampleItemsRemaining(r, exampleRoadmapIds, examplePhaseIds),
      0,
    );
    const filteredMappings = mappings.filter(
      (m) => !isExampleMappingSourcePath(m.sourcePath, exampleRoadmapPaths, examplePhasePaths),
    );
    return { roadmaps: kept, exampleItemCount, mappings: filteredMappings };
  }

  // scope === "example": a separate space containing only the marked data,
  // never affecting the real-record space (spec.md US4 Acceptance Scenario 2).
  const kept: Roadmap[] = [];
  for (const roadmap of roadmaps) {
    const filtered = filterToOnlyExample(roadmap, exampleRoadmapIds, examplePhaseIds);
    if (filtered) kept.push(filtered);
  }
  const exampleItemCount = kept.reduce((sum, r) => sum + totalRoadmapItemCount(r), 0);
  const filteredMappings = mappings.filter((m) =>
    isExampleMappingSourcePath(m.sourcePath, exampleRoadmapPaths, examplePhasePaths),
  );
  return { roadmaps: kept, exampleItemCount, mappings: filteredMappings };
}

/**
 * contracts/ingestion-library.md `runImport(options: { scope })`.
 *
 * Ties `parseRoadmaps` + `parseMaterials` + `MaterialIndex` +
 * `resolveMaterialLinks` + the FR-011 scope split together into one
 * `ImportBatch`. FR-016: nothing here is written back into `study-progress/`
 * or `courses/`, and no database/HTTP server is created — the returned
 * `ImportBatch` is the whole output (an in-memory object the CLI happens to
 * print as JSON).
 */
export function runImport(options: RunImportOptions): ImportBatch {
  const startedAt = new Date();
  const now = options.now ?? startedAt;
  const studyProgressRoot = options.studyProgressRoot ?? DEFAULT_STUDY_PROGRESS_ROOT;
  const coursesRoot = options.coursesRoot ?? DEFAULT_COURSES_ROOT;

  const roadmapResult = parseRoadmaps(studyProgressRoot, now);
  const materialResult = parseMaterials(coursesRoot, now);

  const errors: ImportError[] = [...roadmapResult.errors, ...materialResult.errors];

  const index = buildMaterialIndex(materialResult.materials);
  const allItems = flattenLearningItems(roadmapResult.roadmaps);
  const linkResult = resolveMaterialLinks(allItems, index, roadmapResult.roadmaps);
  errors.push(...linkResult.errors);

  // FR-011 (US4): scope-filter both the returned `roadmaps` tree AND the
  // roadmap-derived `mappings` entries by the same real/example rule —
  // `applyScope` matches mapping sourcePaths against the roadmap/phase
  // sourcePaths it excludes/includes so no example-data mapping ever
  // leaks into `batch.mappings` under scope="real" (tasks.md T026).
  // Material mappings are never scope-filtered: `applyScope` only
  // classifies `study-progress/` roadmaps/phases, not `courses/` materials.
  const {
    roadmaps: effectiveRoadmaps,
    exampleItemCount,
    mappings: effectiveRoadmapMappings,
  } = applyScope(roadmapResult.roadmaps, studyProgressRoot, options.scope, roadmapResult.mappings);

  const mappings: ImportMapping[] = [...effectiveRoadmapMappings, ...materialResult.mappings];

  const { completedItemCount, totalItemCount } = computePerRoadmapCounts(effectiveRoadmaps);

  // SC-004: newly-created duplicate/colliding entities this run had to hold
  // back rather than silently merge (FR-010) — see resolveIdentity.ts's doc
  // comment for why this is measured this way in a library with no
  // persisted cross-run state.
  const duplicateCount = mappings.filter((m) => m.status === "held").length;

  const finishedAt = new Date();

  return {
    id: `import-${startedAt.getTime()}`,
    scope: options.scope,
    startedAt: startedAt.toISOString(),
    finishedAt: finishedAt.toISOString(),
    mappings,
    errors,
    metrics: {
      roadmapCount: effectiveRoadmaps.length,
      completedItemCount,
      totalItemCount,
      materialCount: materialResult.materials.length,
      duplicateCount,
      exampleItemCount,
    },
    roadmaps: effectiveRoadmaps,
    materials: materialResult.materials,
    materialVersions: materialResult.materialVersions,
  };
}
