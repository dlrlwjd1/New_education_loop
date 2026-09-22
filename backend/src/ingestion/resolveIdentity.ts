import { createHash } from "node:crypto";
import type { ImportBatch, ResolveIdentityCandidate, ResolveIdentityResult } from "./types.js";

/**
 * Normalize a source path for identity purposes: Unicode NFC (so the same
 * Korean filename typed via two different composition forms doesn't look
 * like two different paths), OS-independent separators, and no accidental
 * leading/trailing/duplicate slashes. This does NOT touch case or percent-
 * encoding — those are preserved exactly as found on disk (FR-009).
 */
export function normalizeSourcePath(sourcePath: string): string {
  return sourcePath.normalize("NFC").replace(/\\/g, "/").replace(/\/+/g, "/").trim();
}

/** SHA-256 hex digest of file content (used both as Material.contentHash and for move/rename detection). */
export function computeContentHash(content: string | Buffer): string {
  return createHash("sha256").update(content).digest("hex");
}

function computeCandidateId(normalizedPath: string): string {
  return createHash("sha256").update(normalizedPath).digest("hex");
}

/**
 * contracts/ingestion-library.md: the single identity-resolution function
 * shared by roadmap entities (roadmap/track/phase/item) and materials alike
 * — callers never implement their own per-kind matching logic.
 *
 * Matching order (FR-003, FR-012):
 *   1. Path match against `previousBatch.mappings` -> same entity, id reused,
 *      status "updated" (this covers both "re-imported unchanged" and
 *      "same path, new content/new version" — the contract's status enum
 *      has no separate "unchanged" value, so both collapse to "updated").
 *   2. No path match, but content hash matches a previous mapping at a
 *      different path -> the source moved/was renamed; id reused, status
 *      "updated" (FR-003 move/rename detection).
 *   3. Neither matches -> brand new candidate id = sha256(normalizedPath).
 *      If that id already belongs to a genuinely different previous source
 *      (different path AND different content hash), FR-010 applies: do not
 *      silently overwrite -> status "held" (the caller is responsible for
 *      recording an ImportError(kind="id_collision") when it sees "held").
 *   4. Otherwise -> status "created".
 *
 * Design note for callers: `previousBatch` must be a genuine *prior*
 * execution's batch (or, for FR-010 unit testing, a deliberately
 * constructed one) — never the batch the current run is itself still
 * building. `courses/` legitimately contains distinct files with
 * byte-identical content (e.g. the same spec/template reused verbatim
 * across two course modules — confirmed on the real dataset: 21 such pairs
 * as of this writing). Feeding a same-run accumulating ledger into this
 * function as `previousBatch` would make branch 2 above mistake each such
 * pair for "one file, moved" and collapse two real, simultaneously-existing
 * entities onto a single id. `parseRoadmaps`/`parseMaterials`/`runImport`
 * therefore call this function with NO `previousBatch` during a normal run
 * (this stage has no persisted store to carry one between separate CLI
 * invocations anyway — FR-016). That means every mapping this stateless
 * library itself produces today is `status: "created"`; the "updated"/
 * "held" branches only activate for a future caller that persists batches
 * across runs and supplies a real one here — which is exactly why this is
 * a *shared, exported* function rather than inlined into `runImport`.
 */
export function resolveIdentity(
  candidate: ResolveIdentityCandidate,
  previousBatch?: Pick<ImportBatch, "mappings">,
): ResolveIdentityResult {
  const normalizedPath = normalizeSourcePath(candidate.sourcePath);
  const candidateId = computeCandidateId(normalizedPath);
  const priorMappings = previousBatch?.mappings ?? [];

  const byPath = priorMappings.find((m) => normalizeSourcePath(m.sourcePath) === normalizedPath);
  if (byPath) {
    return { id: byPath.entityId, status: "updated" };
  }

  const byHash = priorMappings.find((m) => m.contentHash === candidate.contentHash);
  if (byHash) {
    return { id: byHash.entityId, status: "updated" };
  }

  const collision = priorMappings.find(
    (m) =>
      m.entityId === candidateId &&
      normalizeSourcePath(m.sourcePath) !== normalizedPath &&
      m.contentHash !== candidate.contentHash,
  );
  if (collision) {
    return { id: candidateId, status: "held" };
  }

  return { id: candidateId, status: "created" };
}
