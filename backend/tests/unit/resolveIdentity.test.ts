import { describe, it, expect } from "vitest";
import { resolveIdentity, computeContentHash } from "../../src/ingestion/resolveIdentity.js";
import type { ImportBatch, ImportMapping } from "../../src/ingestion/types.js";

// T005 (Foundational): FR-003, FR-010, FR-012 — resolveIdentity is the single
// shared identity-resolution function for both roadmap entities and
// materials. Per contracts/ingestion-library.md's design note, `previousBatch`
// must be a genuine *prior* execution's batch (or, for this kind of FR-010
// unit test, a deliberately constructed one) — never the batch the current
// run is itself still building. All four cases below therefore construct
// `previousBatch` explicitly, exactly as the contract's design note
// prescribes for testing this branch in isolation.

function batchOf(mappings: ImportMapping[]): Pick<ImportBatch, "mappings"> {
  return { mappings };
}

describe("resolveIdentity", () => {
  it("(a) path match against previousBatch -> same id reused, status updated", () => {
    const hashV1 = computeContentHash("content v1");
    const previousBatch = batchOf([
      { sourcePath: "roadmap/phase1.md", contentHash: hashV1, entityId: "prior-id-1", entityType: "phase", status: "created" },
    ]);

    const result = resolveIdentity({ sourcePath: "roadmap/phase1.md", contentHash: hashV1 }, previousBatch);

    expect(result).toEqual({ id: "prior-id-1", status: "updated" });
  });

  it("(b) path mismatch but content hash matches a previous mapping at a different path -> move/rename detected, id reused", () => {
    const sharedHash = computeContentHash("moved file content");
    const previousBatch = batchOf([
      { sourcePath: "old/location/file.md", contentHash: sharedHash, entityId: "prior-id-2", entityType: "material", status: "created" },
    ]);

    const result = resolveIdentity({ sourcePath: "new/location/file.md", contentHash: sharedHash }, previousBatch);

    expect(result).toEqual({ id: "prior-id-2", status: "updated" });
  });

  it("(c) same path but different content hash -> new version, status updated, same id reused", () => {
    const oldHash = computeContentHash("old body");
    const newHash = computeContentHash("new body");
    const previousBatch = batchOf([
      { sourcePath: "roadmap/phase1.md", contentHash: oldHash, entityId: "prior-id-3", entityType: "phase", status: "created" },
    ]);

    const result = resolveIdentity({ sourcePath: "roadmap/phase1.md", contentHash: newHash }, previousBatch);

    expect(result).toEqual({ id: "prior-id-3", status: "updated" });
  });

  it("(d) two genuinely different sources normalize to the same candidate id -> held, no exception thrown", () => {
    // Construct a previousBatch entry whose recorded entityId equals the
    // candidate id that THIS call will independently compute for a
    // different (path, hash) pair - simulating "normalization collapsed
    // two different original sources onto the same id" (FR-010).
    const candidatePath = "roadmap/collide.md";
    const candidateHash = computeContentHash("this run's content");

    // First, discover what candidate id resolveIdentity would compute for
    // this path with no previousBatch (status "created" branch), then seed
    // a previousBatch that claims a DIFFERENT source already holds that id.
    const freshResult = resolveIdentity({ sourcePath: candidatePath, contentHash: candidateHash });
    expect(freshResult.status).toBe("created");

    const previousBatch = batchOf([
      {
        sourcePath: "roadmap/other-original.md", // different path
        contentHash: computeContentHash("different content"), // different hash
        entityId: freshResult.id, // but same resolved id -> collision
        entityType: "phase",
        status: "created",
      },
    ]);

    expect(() => resolveIdentity({ sourcePath: candidatePath, contentHash: candidateHash }, previousBatch)).not.toThrow();
    const result = resolveIdentity({ sourcePath: candidatePath, contentHash: candidateHash }, previousBatch);
    expect(result).toEqual({ id: freshResult.id, status: "held" });
  });

  it("brand new path and hash with no previousBatch -> status created", () => {
    const result = resolveIdentity({ sourcePath: "roadmap/brand-new.md", contentHash: computeContentHash("x") });
    expect(result.status).toBe("created");
    expect(typeof result.id).toBe("string");
    expect(result.id.length).toBeGreaterThan(0);
  });

  it("is deterministic: same (path, hash) with no previousBatch always yields the same id", () => {
    const a = resolveIdentity({ sourcePath: "roadmap/stable.md", contentHash: computeContentHash("same") });
    const b = resolveIdentity({ sourcePath: "roadmap/stable.md", contentHash: computeContentHash("same") });
    expect(a.id).toBe(b.id);
  });
});
