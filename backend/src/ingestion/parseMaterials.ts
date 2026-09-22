import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import type { Material, MaterialVersion, ImportError, ImportMapping, MaterialParseResult } from "./types.js";
import { resolveIdentity, computeContentHash } from "./resolveIdentity.js";

interface Batch {
  mappings: ImportMapping[];
}

function stripMdAndIndex(fileName: string): string {
  // Only strip a short (1-2 digit) index prefix like "01 " — NOT a 4-digit
  // year at the start of a date-stamped filename such as
  // "2026-06-03 Beyond Components....md" (courses/youtube/* is named this
  // way; a greedy `\d+` here would eat "2026" and leave a dangling
  // "-06-03 ..." title).
  return fileName
    .replace(/\.md$/i, "")
    .replace(/^\s*\d{1,2}\s+/, "")
    .trim();
}

/**
 * FR-007: provider/course inference from path structure only, per
 * data-model.md's hint that provider may come from the "최상위/차상위"
 * (top-level or second-level) path segment:
 *  - `deeplearning-ai`/`udemy` are single-provider categories, so the
 *    category itself names the provider; the next segment is the course.
 *  - `youtube` is a multi-channel category — the channel (2nd segment) is
 *    the meaningful "provider" analog, and a 3rd segment (a playlist folder
 *    under the channel) is the course, when one exists.
 *  - `mooc` mixes many providers under one category with no reliable
 *    structural marker for *which* provider, so provider stays null; the
 *    2nd segment (a specific course/specialization name) is still usable.
 *  - `articles` has no course/provider substructure at all.
 *  - any other (future) category defaults conservatively to provider=null,
 *    course=2nd segment if the file is nested at least one level deep.
 */
function inferProviderCourse(
  category: string,
  restSegments: string[],
): { provider: string | null; course: string | null } {
  switch (category) {
    case "deeplearning-ai":
      return { provider: "DeepLearning.AI", course: restSegments[0] ?? null };
    case "udemy":
      return { provider: "Udemy", course: restSegments[0] ?? null };
    case "youtube":
      return {
        provider: restSegments[0] ?? null,
        course: restSegments.length >= 2 ? (restSegments[1] as string) : null,
      };
    case "mooc":
      return { provider: null, course: restSegments[0] ?? null };
    case "articles":
      return { provider: null, course: null };
    default:
      return { provider: null, course: restSegments[0] ?? null };
  }
}

interface FoundFile {
  /** Path relative to `courses/`, exactly as returned by the filesystem (FR-009). */
  relPath: string;
  absPath: string;
}

function walk(absDir: string, relPrefix: string, out: FoundFile[]): void {
  const entries = readdirSync(absDir, { withFileTypes: true });
  for (const entry of entries) {
    const relPath = relPrefix ? `${relPrefix}/${entry.name}` : entry.name;
    const absPath = join(absDir, entry.name);
    if (entry.isDirectory()) {
      walk(absPath, relPath, out);
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
      out.push({ relPath, absPath });
    }
  }
}

/**
 * contracts/ingestion-library.md `parseMaterials(rootPath)`.
 *
 * `rootPath` must be the absolute path to `courses/`. Returns exactly one
 * Material per `.md` file found by a full recursive walk (SC-003) — no
 * filtering by category, so a future new category (Assumptions: today's
 * five are not exhaustive) is still picked up.
 *
 * `now` is an optional deterministic clock for the version-capture
 * timestamp; it defaults to the real current time and does not appear in
 * the contract's documented signature, but is backward compatible with
 * `parseMaterials(rootPath)` call sites (see also parseRoadmaps.ts).
 */
export function parseMaterials(rootPath: string, now: Date = new Date()): MaterialParseResult {
  const errors: ImportError[] = [];
  const batch: Batch = { mappings: [] };
  const materials: Material[] = [];
  const materialVersions: MaterialVersion[] = [];

  const files: FoundFile[] = [];
  walk(rootPath, "", files);

  for (const file of files) {
    const segments = file.relPath.split("/");
    const category = segments[0] ?? "";
    const rest = segments.slice(1, -1);
    const { provider, course } = inferProviderCourse(category, rest);

    const raw = readFileSync(file.absPath, "utf8");
    const contentHash = computeContentHash(raw);

    // Deliberately no `previousBatch` argument here — see
    // resolveIdentity.ts's doc comment and parseRoadmaps.ts's
    // resolveEntityId comment: threading this run's own accumulating
    // ledger back in would mistake two distinct files that happen to share
    // byte-identical content (confirmed to occur in courses/, e.g. reused
    // spec templates) for "one file, moved", collapsing them onto one id.
    const result = resolveIdentity({ sourcePath: file.relPath, contentHash });
    batch.mappings.push({
      sourcePath: file.relPath,
      contentHash,
      entityId: result.id,
      entityType: "material",
      status: result.status,
    });

    if (result.status === "held") {
      // FR-010: a genuine id collision against a different source — do not
      // silently pick a winner. The material is left out of the index and
      // reported, rather than overwriting whichever one holds the id.
      errors.push({
        sourcePath: file.relPath,
        kind: "id_collision",
        detail: `식별자 충돌: 이 자료가 기존의 다른 원본과 같은 id(${result.id})를 생성했다. 자동으로 병합하지 않고 보류한다.`,
      });
      continue;
    }

    const fileName = segments[segments.length - 1] as string;
    materials.push({
      id: result.id,
      sourcePath: file.relPath,
      title: stripMdAndIndex(fileName),
      category,
      provider,
      course,
      contentHash,
      linkedRoadmapIds: [],
    });

    // FR-012 / data-model.md validation rule: contracts/ingestion-library.md
    // makes the *caller* of resolveIdentity (this function) responsible for
    // appending a MaterialVersion whenever status is "updated" (same path,
    // new content — resolveIdentity does not do this itself).
    if (result.status === "updated") {
      materialVersions.push({ materialId: result.id, contentHash, capturedAt: now.toISOString() });
    }
  }

  return { materials, materialVersions, errors, mappings: batch.mappings };
}
