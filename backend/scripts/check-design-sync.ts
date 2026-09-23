import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "../..");

interface CanvasArtboard {
  file: string;
}

interface CanvasJson {
  artboards: CanvasArtboard[];
}

interface ScreenEntry {
  canvasArtboard: string;
  specScreen: string;
  featureIds: string[];
  routes: string[];
  implementation: string[];
}

interface ScreenMap {
  screens: ScreenEntry[];
  diagrams: { canvasArtboard: string }[];
}

function readJson<T>(relPath: string): T {
  return JSON.parse(readFileSync(path.join(REPO_ROOT, relPath), "utf8")) as T;
}

/**
 * design/README.md의 규칙: `*Note.dc.html`은 화면 설명 박스이고 화면 자체가
 * 아니므로 registry(screen-map.json) 대조 대상에서 제외한다.
 */
function isRealScreenArtboard(file: string): boolean {
  return !file.endsWith("Note.dc.html");
}

function main(): number {
  const canvas = readJson<CanvasJson>("design/canvas/canvas.json");
  const registry = readJson<ScreenMap>("design/screen-map.json");

  const canvasScreenFiles = new Set(canvas.artboards.map((a) => a.file).filter(isRealScreenArtboard));
  const diagramFiles = new Set(registry.diagrams.map((d) => d.canvasArtboard));
  for (const file of diagramFiles) {
    canvasScreenFiles.delete(file);
  }

  const registryFiles = new Set(registry.screens.map((s) => s.canvasArtboard));

  const errors: string[] = [];
  const rows: { status: string; artboard: string; spec: string; impl: string }[] = [];

  // 캔버스엔 있는데 registry엔 없는 아트보드 — 새로 추가된 화면이 아직 등록 안 됨
  for (const file of canvasScreenFiles) {
    if (!registryFiles.has(file)) {
      errors.push(`[미등록] ${file}이 캔버스에 있지만 design/screen-map.json에 등록되지 않았습니다.`);
    }
  }

  // registry엔 있는데 캔버스엔 없는 아트보드 — 삭제되었거나 이름이 바뀜
  for (const entry of registry.screens) {
    if (!canvasScreenFiles.has(entry.canvasArtboard)) {
      errors.push(
        `[캔버스에 없음] design/screen-map.json의 "${entry.canvasArtboard}"가 design/canvas/canvas.json에 없습니다 (삭제되었거나 이름이 바뀌었을 수 있음).`,
      );
    }

    const missingFiles = entry.implementation.filter((relPath) => !existsSync(path.join(REPO_ROOT, relPath)));
    if (missingFiles.length > 0) {
      errors.push(
        `[구현 경로 드리프트] "${entry.specScreen}"(${entry.canvasArtboard})의 구현 파일이 실제로 없습니다: ${missingFiles.join(", ")}`,
      );
    }

    const status = entry.implementation.length === 0 ? "미구현" : missingFiles.length > 0 ? "드리프트" : "구현됨";
    rows.push({
      status,
      artboard: entry.canvasArtboard,
      spec: `${entry.specScreen} (${entry.featureIds.join(", ")})`,
      impl: entry.implementation.length === 0 ? "-" : entry.implementation.join(", "),
    });
  }

  console.log("## 캔버스 디자인 ↔ 구현 대조 결과\n");
  console.table(rows);

  if (errors.length > 0) {
    console.error("\n## 문제\n");
    for (const e of errors) console.error(`- ${e}`);
    console.error(`\n${errors.length}건의 불일치를 발견했습니다. design/screen-map.json을 갱신하거나 구현을 다시 확인하세요.`);
    return 1;
  }

  console.log("\n캔버스와 registry, registry와 실제 구현 파일이 모두 일치합니다.");
  return 0;
}

process.exit(main());
