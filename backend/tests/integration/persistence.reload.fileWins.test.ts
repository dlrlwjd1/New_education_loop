import { describe, it, expect, afterEach } from "vitest";
import { mkdtempSync, rmSync, cpSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { reload, listRoadmaps } from "../../src/persistence/queries.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const FIXTURE_SOURCE = path.join(HERE, "..", "fixtures", "persistence-reload", "study-progress");
const COURSES_ROOT = path.join(HERE, "..", "fixtures", "scope-separation", "courses-empty");
const PHASE_FILE = path.join("로드맵", "01 Phase 1 - 테스트.md");

// T014 (US2): editing an unchecked checkbox in the on-disk Phase file and
// reloading must bump completedCount by exactly 1 (SC-002); querying BEFORE
// the reload must still show the old value (Edge Cases - no live watching).
//
// The fixture is copied into a fresh temp directory per test and mutated
// there, so the checked-in fixture under tests/fixtures/ is never touched.

const tmpDirs: string[] = [];

function copyFixture(): string {
  const dir = mkdtempSync(path.join(tmpdir(), "persistence-filewins-"));
  tmpDirs.push(dir);
  const studyProgressRoot = path.join(dir, "study-progress");
  cpSync(FIXTURE_SOURCE, studyProgressRoot, { recursive: true });
  return studyProgressRoot;
}

function freshDbPath(): string {
  const dir = mkdtempSync(path.join(tmpdir(), "persistence-filewins-db-"));
  tmpDirs.push(dir);
  return path.join(dir, "cache.sqlite");
}

afterEach(() => {
  while (tmpDirs.length > 0) {
    const dir = tmpDirs.pop() as string;
    rmSync(dir, { recursive: true, force: true });
  }
});

describe("reload() - file wins over the cached snapshot (US2, T014, SC-002)", () => {
  it("checking off a previously-unchecked item and reloading increases completedCount by exactly 1", () => {
    const studyProgressRoot = copyFixture();
    const dbPath = freshDbPath();

    reload({ studyProgressRoot, coursesRoot: COURSES_ROOT, dbPath });
    const before = listRoadmaps(dbPath)[0]!;
    expect(before.completedCount).toBe(1);
    expect(before.totalCount).toBe(3);

    const phaseAbsPath = path.join(studyProgressRoot, PHASE_FILE);
    const original = readFileSync(phaseAbsPath, "utf8");
    const edited = original.replace(
      "- [ ] 항목 2 - 미완료(재적재 시 완료로 고침)",
      "- [x] 항목 2 - 미완료(재적재 시 완료로 고침)",
    );
    expect(edited).not.toBe(original); // sanity: the replace actually matched something
    writeFileSync(phaseAbsPath, edited);

    const after = listRoadmaps(dbPath)[0]!;
    expect(after.completedCount).toBe(1); // no reload yet - still the old cached value

    reload({ studyProgressRoot, coursesRoot: COURSES_ROOT, dbPath });
    const afterReload = listRoadmaps(dbPath)[0]!;
    expect(afterReload.completedCount).toBe(2); // exactly +1
    expect(afterReload.totalCount).toBe(3); // total unaffected
  });

  it("un-checking a previously-checked item and reloading decreases completedCount by exactly 1 (file wins in both directions)", () => {
    const studyProgressRoot = copyFixture();
    const dbPath = freshDbPath();

    reload({ studyProgressRoot, coursesRoot: COURSES_ROOT, dbPath });
    expect(listRoadmaps(dbPath)[0]!.completedCount).toBe(1);

    const phaseAbsPath = path.join(studyProgressRoot, PHASE_FILE);
    const original = readFileSync(phaseAbsPath, "utf8");
    writeFileSync(phaseAbsPath, original.replace("- [x] 항목 1 - 완료됨", "- [ ] 항목 1 - 완료됨"));

    reload({ studyProgressRoot, coursesRoot: COURSES_ROOT, dbPath });
    expect(listRoadmaps(dbPath)[0]!.completedCount).toBe(0);
  });
});
