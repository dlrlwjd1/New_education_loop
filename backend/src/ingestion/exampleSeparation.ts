import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import type { Roadmap } from "./types.js";

const EXAMPLE_MARKER = /<!--\s*scope\s*:\s*example\s*-->/i;

function fileHasExampleMarker(absPath: string): boolean {
  if (!existsSync(absPath)) {
    return false;
  }
  return EXAMPLE_MARKER.test(readFileSync(absPath, "utf8"));
}

export interface ExampleScopeClassification {
  exampleRoadmapIds: Set<string>;
  examplePhaseIds: Set<string>;
}

/**
 * FR-011 / spec.md Assumptions: "예시 데이터"의 판별 기준은 사용과개선.md에
 * 명시된 고지를 근거로 하며, 명확히 표시되지 않은 항목은 실제 기록으로
 * 간주한다.
 *
 * 사용과개선.md's notice is prose describing *which sessions* were assumed
 * (가정) for an assignment write-up — it is not a machine-readable tag on
 * any file in `study-progress/`. There is currently no structural marker in
 * this repository distinguishing example checkbox completions from real
 * ones at the file level. Rather than guess at unmarked data, this function
 * defines the minimal concrete marker convention this stage introduces so
 * the separation is mechanically checkable: an HTML comment
 * `<!-- scope: example -->` in a roadmap's README.md marks the whole
 * roadmap as example data; the same comment inside one Phase document
 * marks just that Phase. Per the "명확히 표시되지 않은 항목은 실제 기록으로
 * 간주" rule, anything without this marker — which today is everything in
 * `study-progress/` — classifies as real. See the implementation report for
 * why this is called out as an assumption rather than a spec-given rule.
 */
export function classifyExampleScope(roadmaps: Roadmap[], studyProgressRoot: string): ExampleScopeClassification {
  const exampleRoadmapIds = new Set<string>();
  const examplePhaseIds = new Set<string>();

  for (const roadmap of roadmaps) {
    const readmeAbsPath = join(studyProgressRoot, roadmap.sourcePath, "README.md");
    if (fileHasExampleMarker(readmeAbsPath)) {
      exampleRoadmapIds.add(roadmap.id);
      continue;
    }

    const allPhases = [...roadmap.rootPhases, ...roadmap.tracks.flatMap((t) => t.phases)];
    for (const phase of allPhases) {
      const phaseAbsPath = join(studyProgressRoot, phase.sourcePath);
      if (fileHasExampleMarker(phaseAbsPath)) {
        examplePhaseIds.add(phase.id);
      }
    }
  }

  return { exampleRoadmapIds, examplePhaseIds };
}
