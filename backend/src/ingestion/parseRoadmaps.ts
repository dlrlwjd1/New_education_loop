import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import type {
  Roadmap,
  Track,
  Phase,
  LearningItem,
  ImportError,
  ImportMapping,
  EntityType,
  RoadmapParseResult,
} from "./types.js";
import { normalizeCheckboxes } from "./checkboxNormalize.js";
import { parseMarkdown, collectAllListItems, type ChecklistItem } from "./markdownAst.js";
import { resolveIdentity, computeContentHash } from "./resolveIdentity.js";
import type { ListItem } from "mdast";

/** FR-004: only documents whose filename contains "Phase" count toward progress aggregation. */
const PHASE_FILENAME_PATTERN = /Phase/;

const COMPLETED_DATE_PATTERN = /학습일\s*[:-]?\s*(\d{4})-(\d{2})-(\d{2})/;

interface Batch {
  mappings: ImportMapping[];
}

/**
 * Resolve+record an identifier for a structural entity (roadmap/track/phase/item)
 * through the single shared `resolveIdentity` function (contracts/ingestion-library.md).
 * When `resolveIdentity` reports a collision ("held"), records the
 * ImportError(kind="id_collision") the caller is responsible for (see
 * resolveIdentity.ts's doc comment — resolveIdentity itself only signals via
 * `status`, it does not push errors).
 *
 * Deliberately does NOT pass `batch` (the mappings accumulated so far in
 * this same run) as `resolveIdentity`'s `previousBatch` — see
 * resolveIdentity.ts's doc comment: doing that would mistake two distinct,
 * simultaneously-existing entities with identical content for "one entity,
 * moved" and collapse them onto a single id, which is a real, observed
 * failure mode on this repository's data, not a hypothetical one.
 */
function resolveEntityId(
  sourcePath: string,
  contentHash: string,
  entityType: EntityType,
  batch: Batch,
  errors: ImportError[],
): string {
  const result = resolveIdentity({ sourcePath, contentHash });
  batch.mappings.push({ sourcePath, contentHash, entityId: result.id, entityType, status: result.status });
  if (result.status === "held") {
    errors.push({
      sourcePath,
      kind: "id_collision",
      detail: `식별자 충돌: 이 ${entityType} 항목이 기존의 다른 원본과 같은 id(${result.id})를 생성했다. 자동으로 병합하지 않고 보류한다.`,
    });
  }
  return result.id;
}

function structuralHash(childNames: string[]): string {
  return computeContentHash(childNames.slice().sort().join("\n"));
}

/**
 * Explicit order source (FR-001): the numeric prefix of a file/directory
 * name ("01 Phase 1 - ...", "T1 프로그래밍 ...", "00 강의 자료 인덱스.md").
 * We deliberately do not rely on `readdirSync`'s return order (platform-
 * dependent) or on string comparison of the whole name (breaks once a
 * roadmap has 10+ phases unless every prefix happens to be zero-padded).
 */
function extractOrderIndex(name: string, fallbackIndex: number): number {
  const match = /^\D*?(\d+)/.exec(name);
  if (match) {
    return parseInt(match[1] as string, 10);
  }
  return fallbackIndex;
}

function stripMdAndIndex(fileName: string): string {
  // Only strip a short (1-2 digit) index prefix like "01 " / "00 " — NOT a
  // 4-digit year at the start of a date-stamped filename such as
  // "2026-06-03 Beyond Components....md" (materials under courses/youtube
  // are named this way; a greedy `\d+` here would eat "2026" and leave a
  // dangling "-06-03 ..." title).
  return fileName
    .replace(/\.md$/i, "")
    .replace(/^\s*\d{1,2}\s+/, "")
    .trim();
}

function isFileWithExt(entry: { isFile(): boolean; name: string }, ext: string): boolean {
  return entry.isFile() && entry.name.toLowerCase().endsWith(ext);
}

/** Extract the raw (unrendered) markdown for a list item's own label, excluding any nested sub-list. */
function extractRawLabel(normalizedContent: string, item: ListItem): string {
  const labelChildren = item.children.filter((c) => c.type !== "list");
  if (labelChildren.length === 0) {
    return "";
  }
  const first = labelChildren[0] as { position?: { start: { offset?: number } } };
  const last = labelChildren[labelChildren.length - 1] as { position?: { end: { offset?: number } } };
  const start = first.position?.start.offset;
  const end = last.position?.end.offset;
  if (start === undefined || end === undefined) {
    return "";
  }
  return normalizedContent.slice(start, end).trim();
}

function extractCompletedDate(
  rawLabel: string,
  sourcePath: string,
  now: Date,
): { date: string | null; error: ImportError | null } {
  const match = COMPLETED_DATE_PATTERN.exec(rawLabel);
  if (!match) {
    return { date: null, error: null };
  }
  const [whole, yStr, mStr, dStr] = match as unknown as [string, string, string, string];
  const year = Number(yStr);
  const month = Number(mStr);
  const day = Number(dStr);
  const parsed = new Date(Date.UTC(year, month - 1, day));
  const roundTripOk =
    parsed.getUTCFullYear() === year && parsed.getUTCMonth() === month - 1 && parsed.getUTCDate() === day;

  if (!roundTripOk) {
    return {
      date: null,
      error: { sourcePath, kind: "date_invalid", detail: `파싱할 수 없는 날짜 표기: "${whole}"` },
    };
  }
  if (parsed.getTime() > now.getTime()) {
    return {
      date: null,
      error: { sourcePath, kind: "date_invalid", detail: `미래 날짜로 기록된 완료일: ${yStr}-${mStr}-${dStr}` },
    };
  }
  return { date: `${yStr}-${mStr}-${dStr}`, error: null };
}

function buildLearningItems(
  checklistCandidates: ChecklistItem[],
  normalizedContent: string,
  phaseId: string,
  phaseSourcePath: string,
  batch: Batch,
  errors: ImportError[],
  now: Date,
): LearningItem[] {
  return checklistCandidates.map((candidate, index) => {
    const rawLabel = extractRawLabel(normalizedContent, candidate.node);
    // Items get their own identity through the same shared resolveIdentity
    // function, using a virtual per-item source path (phase path + position)
    // and a content hash of the item's own label text. This lets a caller
    // that persists batches across runs detect "item text edited at the
    // same position" (updated) vs. "identical item text moved to a new
    // position" (also reused via hash fallback) instead of just trusting
    // position, matching the spirit of FR-003/FR-012 at item granularity.
    const itemSourcePath = `${phaseSourcePath}#${index}`;
    const itemContentHash = computeContentHash(rawLabel);
    const id = resolveEntityId(itemSourcePath, itemContentHash, "item", batch, errors);

    const { date, error: dateError } = extractCompletedDate(rawLabel, phaseSourcePath, now);
    if (dateError) {
      errors.push(dateError);
    }

    return {
      id,
      phaseId,
      text: rawLabel,
      completed: candidate.checked,
      completedDate: date,
      linkedMaterialId: null,
      isFromCodeBlock: false,
    } satisfies LearningItem;
  });
}

function parsePhaseFile(
  dirAbsPath: string,
  sourcePathPrefix: string,
  fileName: string,
  roadmapId: string,
  trackId: string | null,
  orderIndex: number,
  batch: Batch,
  errors: ImportError[],
  now: Date,
): Phase {
  const absPath = join(dirAbsPath, fileName);
  const sourcePath = `${sourcePathPrefix}/${fileName}`;
  const raw = readFileSync(absPath, "utf8");
  const contentHash = computeContentHash(raw);
  const phaseId = resolveEntityId(sourcePath, contentHash, "phase", batch, errors);

  const { normalized, errors: checkboxErrors, unrecognizedLines } = normalizeCheckboxes(raw, sourcePath);
  errors.push(...checkboxErrors);

  const ast = parseMarkdown(normalized);
  const listItems = collectAllListItems(ast);
  const unrecognizedLineSet = new Set(unrecognizedLines);

  const checklistCandidates = listItems.filter(
    (li) => li.checked !== null || (li.line !== null && unrecognizedLineSet.has(li.line)),
  );

  // FR-015 "형식 확인 필요": we found checkbox-shaped syntax that failed to
  // normalize/parse into ANY usable list item at all — the document's
  // checkbox format itself is broken, not just one stray line among many
  // good ones (that per-item case is handled individually above and does
  // NOT make the whole Phase unaggregatable).
  const aggregatable = !(checklistCandidates.length === 0 && unrecognizedLines.length > 0);

  const items = aggregatable
    ? buildLearningItems(checklistCandidates, normalized, phaseId, sourcePath, batch, errors, now)
    : [];

  return {
    id: phaseId,
    roadmapId,
    trackId,
    sourcePath,
    title: stripMdAndIndex(fileName),
    orderIndex,
    aggregatable,
    items,
  };
}

function parseTrack(
  roadmapAbsPath: string,
  roadmapSourcePath: string,
  trackDirName: string,
  roadmapId: string,
  orderIndex: number,
  batch: Batch,
  errors: ImportError[],
  now: Date,
): Track {
  const trackAbsPath = join(roadmapAbsPath, trackDirName);
  const trackSourcePath = `${roadmapSourcePath}/${trackDirName}`;
  const entries = readdirSync(trackAbsPath, { withFileTypes: true });
  const trackId = resolveEntityId(
    trackSourcePath,
    structuralHash(entries.map((e) => e.name)),
    "track",
    batch,
    errors,
  );

  const phaseFiles = entries
    .filter((e) => isFileWithExt(e, ".md") && PHASE_FILENAME_PATTERN.test(e.name))
    .map((e) => e.name);

  const phases = phaseFiles
    .map((name, idx) => ({ name, order: extractOrderIndex(name, idx) }))
    .sort((a, b) => a.order - b.order)
    .map((f) =>
      parsePhaseFile(trackAbsPath, trackSourcePath, f.name, roadmapId, trackId, f.order, batch, errors, now),
    );

  return { id: trackId, roadmapId, title: trackDirName, orderIndex, phases };
}

function parseOneRoadmap(
  studyProgressRoot: string,
  dirName: string,
  orderIndex: number,
  batch: Batch,
  errors: ImportError[],
  now: Date,
): Roadmap {
  const roadmapAbsPath = join(studyProgressRoot, dirName);
  const roadmapSourcePath = dirName;
  const entries = readdirSync(roadmapAbsPath, { withFileTypes: true });
  const roadmapId = resolveEntityId(
    roadmapSourcePath,
    structuralHash(entries.map((e) => e.name)),
    "roadmap",
    batch,
    errors,
  );

  const trackDirNames = entries.filter((e) => e.isDirectory()).map((e) => e.name);
  const rootPhaseFileNames = entries
    .filter((e) => isFileWithExt(e, ".md") && PHASE_FILENAME_PATTERN.test(e.name))
    .map((e) => e.name);

  const rootPhases = rootPhaseFileNames
    .map((name, idx) => ({ name, order: extractOrderIndex(name, idx) }))
    .sort((a, b) => a.order - b.order)
    .map((f) =>
      parsePhaseFile(roadmapAbsPath, roadmapSourcePath, f.name, roadmapId, null, f.order, batch, errors, now),
    );

  const tracks = trackDirNames
    .map((name, idx) => ({ name, order: extractOrderIndex(name, idx) }))
    .sort((a, b) => a.order - b.order)
    .map((t) => parseTrack(roadmapAbsPath, roadmapSourcePath, t.name, roadmapId, t.order, batch, errors, now));

  const hasPhaseDocs = rootPhases.length > 0 || tracks.some((t) => t.phases.length > 0);

  return {
    id: roadmapId,
    sourcePath: roadmapSourcePath,
    title: dirName,
    hasPhaseDocs,
    tracks,
    rootPhases,
    orderIndex,
  };
}

/**
 * contracts/ingestion-library.md `parseRoadmaps(rootPath)`.
 *
 * `rootPath` must be the absolute path to `study-progress/`. Every immediate
 * subdirectory is one Roadmap (FR-001/FR-002: nested Track subdirectories
 * are followed one level down; Phase documents are recognized purely by
 * "Phase" appearing in the filename, per FR-004, regardless of whether they
 * sit directly under the roadmap root or under a Track). Roadmaps with zero
 * Phase documents anywhere are still returned, with `hasPhaseDocs = false`
 * (FR-015) rather than being dropped.
 */
export function parseRoadmaps(rootPath: string, now: Date = new Date()): RoadmapParseResult {
  const errors: ImportError[] = [];
  const batch: Batch = { mappings: [] };

  const roadmapDirNames = readdirSync(rootPath, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    // No explicit roadmap-level order source exists in this repository
    // (unlike Track/Phase, roadmap directories carry no numeric prefix) —
    // sorted by name only for a deterministic, reproducible order.
    .sort((a, b) => a.localeCompare(b));

  const roadmaps = roadmapDirNames.map((dirName, idx) =>
    parseOneRoadmap(rootPath, dirName, idx, batch, errors, now),
  );

  return { roadmaps, errors, mappings: batch.mappings };
}
