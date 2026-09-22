#!/usr/bin/env node
import { runImport, applyScope, DEFAULT_STUDY_PROGRESS_ROOT, DEFAULT_COURSES_ROOT } from "./runImport.js";
import { parseRoadmaps } from "./parseRoadmaps.js";
import { parseMaterials } from "./parseMaterials.js";
import type { ImportScope } from "./types.js";

interface CliFlags {
  scope: ImportScope;
  roadmapsOnly: boolean;
  materialsOnly: boolean;
}

function parseArgs(argv: string[]): CliFlags {
  const flags: CliFlags = { scope: "real", roadmapsOnly: false, materialsOnly: false };
  for (const arg of argv) {
    if (arg.startsWith("--scope=")) {
      const value = arg.slice("--scope=".length);
      if (value === "real" || value === "example") {
        flags.scope = value;
      } else {
        console.error(`알 수 없는 --scope 값: "${value}" (real|example만 허용)`);
        process.exit(1);
      }
    } else if (arg === "--roadmaps-only") {
      flags.roadmapsOnly = true;
    } else if (arg === "--materials-only") {
      flags.materialsOnly = true;
    } else if (arg === "--help" || arg === "-h") {
      printUsage();
      process.exit(0);
    } else {
      console.error(`알 수 없는 옵션: "${arg}"`);
      printUsage();
      process.exit(1);
    }
  }
  return flags;
}

function printUsage(): void {
  console.error(
    [
      "사용법: npm run ingest -- [--scope=real|example] [--roadmaps-only|--materials-only]",
      "",
      "  --scope=real      실제 기록만 가져온다 (기본값)",
      "  --scope=example   예시 데이터만, 실제 기록과 분리된 별도 공간으로 가져온다",
      "  --roadmaps-only   study-progress/ 만 파싱한다 (courses/ 색인·링크 해석 생략)",
      "  --materials-only  courses/ 만 색인한다 (study-progress/ 파싱·링크 해석 생략)",
    ].join("\n"),
  );
}

function main(): void {
  const flags = parseArgs(process.argv.slice(2));

  if (flags.roadmapsOnly && flags.materialsOnly) {
    console.error("--roadmaps-only 와 --materials-only 는 동시에 쓸 수 없다.");
    process.exit(1);
  }

  if (flags.roadmapsOnly) {
    const now = new Date();
    const parsed = parseRoadmaps(DEFAULT_STUDY_PROGRESS_ROOT, now);
    const { roadmaps, exampleItemCount } = applyScope(parsed.roadmaps, DEFAULT_STUDY_PROGRESS_ROOT, flags.scope);
    process.stdout.write(
      JSON.stringify(
        { scope: flags.scope, roadmaps, errors: parsed.errors, mappings: parsed.mappings, exampleItemCount },
        null,
        2,
      ),
    );
    process.stdout.write("\n");
    return;
  }

  if (flags.materialsOnly) {
    const now = new Date();
    const parsed = parseMaterials(DEFAULT_COURSES_ROOT, now);
    process.stdout.write(JSON.stringify(parsed, null, 2));
    process.stdout.write("\n");
    return;
  }

  const batch = runImport({ scope: flags.scope });
  process.stdout.write(JSON.stringify(batch, null, 2));
  process.stdout.write("\n");
}

main();
