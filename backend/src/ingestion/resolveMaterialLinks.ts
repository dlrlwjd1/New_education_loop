import type { LearningItem, MaterialIndex, ImportError, Roadmap } from "./types.js";

interface PhaseContext {
  roadmapId: string;
  phaseSourcePath: string;
}

function buildPhaseContextMap(roadmaps: Roadmap[]): Map<string, PhaseContext> {
  const map = new Map<string, PhaseContext>();
  for (const roadmap of roadmaps) {
    for (const phase of roadmap.rootPhases) {
      map.set(phase.id, { roadmapId: roadmap.id, phaseSourcePath: phase.sourcePath });
    }
    for (const track of roadmap.tracks) {
      for (const phase of track.phases) {
        map.set(phase.id, { roadmapId: roadmap.id, phaseSourcePath: phase.sourcePath });
      }
    }
  }
  return map;
}

const LINK_PATTERN = /\]\(([^)]+)\)/;

/**
 * Pull the `courses/`-relative path out of a raw checkbox label such as
 * "[06 The OSI Model.md](../../courses/mooc/DevOps%20and%20SRE/.../06%20The%20OSI%20Model.md)
 * — 학습일 2026-09-17". Deliberately does NOT try to resolve the leading
 * `../../` segments by simulating directory depth (that breaks the moment a
 * Phase file lives one Track directory deeper — root-level roadmaps need
 * 2 levels up to reach the repo root, tracked roadmaps need 3). Instead it
 * locates the literal "courses/" marker in the (decoded) href and takes
 * everything after it — robust regardless of nesting depth, and exactly
 * what `MaterialIndex.byPath` expects (paths relative to `courses/`).
 *
 * Returns null when the label has no link at all, or the link does not
 * point into `courses/` (e.g. an external http(s) URL) — neither case is a
 * broken reference, just "this item has no material to resolve".
 */
function extractCoursesRelativePath(rawLabel: string): string | null {
  const match = LINK_PATTERN.exec(rawLabel);
  if (!match) {
    return null;
  }
  let href = (match[1] as string).trim();

  // FR-009: strip a genuine in-document anchor, if present. This MUST
  // happen on the raw (not-yet-decoded) href, using a literal, unencoded
  // "#" — a real URL fragment is never percent-encoded. A "#" that is part
  // of an actual path segment is encoded as "%23" by whatever produced the
  // link (confirmed on the real dataset: a directory literally named
  // "Module 1 - Achieving Focus and #Winning" appears in a Phase file's
  // link as "...%20and%20%23Winning...", i.e. an encoded "%23", not a bare
  // "#"). Decoding first and then cutting at the first "#" would truncate
  // that real path in the middle, as it did before this fix.
  const rawHashIdx = href.indexOf("#");
  if (rawHashIdx !== -1) {
    href = href.slice(0, rawHashIdx);
  }

  const marker = "courses/";
  const idx = href.indexOf(marker);
  if (idx === -1) {
    return null;
  }
  const tail = href.slice(idx + marker.length);
  if (tail === "" || tail.endsWith("/")) {
    // A trailing "/" means this links to a whole directory ("go look at
    // this entire module"), not one file — confirmed on the real dataset
    // (e.g. ".../Module 1 - Create and Execute Sprint Plans/"). That is
    // structurally not a `Material` reference at all (MaterialIndex only
    // indexes individual files), not a broken/missing one, so it must not
    // be reported as ImportError(kind="link_broken").
    return null;
  }
  try {
    return decodeURIComponent(tail);
  } catch {
    return null;
  }
}

/**
 * contracts/ingestion-library.md `resolveMaterialLinks(items, index)`.
 *
 * Note on signature: the contract as written takes only `items` and
 * `index`, but neither carries which Roadmap a LearningItem belongs to
 * (needed for `Material.linkedRoadmapIds`, FR-013) nor a source path to
 * attach to a `link_broken` ImportError. This implementation adds a third
 * parameter, `roadmaps: Roadmap[]` (exactly the array `parseRoadmaps`
 * already returns), to make that information available — see this
 * function's entry in the final implementation report for why the literal
 * two-parameter signature is not operationally sufficient.
 *
 * Mutates the given LearningItem objects in place (setting
 * `linkedMaterialId`) and the matched Material's `linkedRoadmapIds`
 * in place (via the same object reference `MaterialIndex.byPath` returns),
 * so that a caller holding the original `Roadmap[]`/`Material[]` trees sees
 * the resolved links without any extra merge step. `linked` in the return
 * value is the same items array, returned for contract-shape compliance.
 */
export function resolveMaterialLinks(
  items: LearningItem[],
  index: MaterialIndex,
  roadmaps: Roadmap[],
): { linked: LearningItem[]; errors: ImportError[] } {
  const phaseContext = buildPhaseContextMap(roadmaps);
  const errors: ImportError[] = [];

  for (const item of items) {
    const context = phaseContext.get(item.phaseId);
    const coursesRelativePath = extractCoursesRelativePath(item.text);

    if (coursesRelativePath === null) {
      continue; // no material reference in this item's text
    }

    const material = index.byPath(coursesRelativePath);
    if (!material) {
      item.linkedMaterialId = null;
      errors.push({
        sourcePath: context?.phaseSourcePath ?? item.phaseId,
        kind: "link_broken",
        detail: `연결된 자료를 찾을 수 없음: "${coursesRelativePath}" (학습 항목: ${item.text})`,
      });
      continue;
    }

    if (context && !material.linkedRoadmapIds.includes(context.roadmapId)) {
      material.linkedRoadmapIds.push(context.roadmapId);
    }
    item.linkedMaterialId = material.id;
  }

  return { linked: items, errors };
}
