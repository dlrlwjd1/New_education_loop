# 라이브러리 계약: 영속 저장소 계층

이 기능도 001과 마찬가지로 외부에 HTTP API를 노출하지 않는다(spec.md Assumptions — "조회 가능한 상태를 만든다"까지). 대신 3단계(사용자·읽기 화면)가 그대로 재사용할 **내부 라이브러리 인터페이스**를 계약으로 정의한다. 이 계약이 바뀌면 3단계 작업에 영향을 준다는 뜻이므로, 변경 시 헌법의 "역할 간 통합 절차"에 따라 백엔드·QA 서브에이전트에게 통보한다.

001의 계약(`specs/001-content-ingestion-foundation/contracts/ingestion-library.md`)이 반환하는 타입(`Roadmap`, `Material`, `ImportBatch` 등)을 이 문서 전반에서 그대로 가리키며, 재정의하지 않는다(FR-008).

## `reload(options?: { studyProgressRoot?: string; coursesRoot?: string; dbPath?: string }): LoadResult`

- **입력**: 001 `runImport`에 그대로 전달할 루트 경로 옵션(테스트에서 픽스처를 가리키기 위함, 001 계약과 동일한 이유로 존재). `dbPath`(옵션, 기본값은 실제 캐시 파일 경로)는 테스트가 임시 DB 파일을 쓰도록 한다.
- **동작**:
  1. 001 `runImport({ scope: "real", ...roots })`를 호출한다(`previousBatch` 없이 — Research §3, 구현 중 확정: 001의 현재 계약은 `previousBatch`를 받는 매개변수가 없고, 안전하게 추가하려면 001의 "updated 상태가 무변경 재적재와 실제 변경을 구분 못 하는" 문제도 함께 고쳐야 해서 이번 범위에서는 보류한다).
  2. 결과(`ImportBatch`)를 새 SQLite 파일(임시 경로)에 `data-model.md` 스키마대로 적재한다.
  3. 임시 파일을 `dbPath`로 원자적 교체한다(Research §2).
  4. 이 실행의 `load_runs`/`load_run_file_snapshots` 행을 감사 기록으로 남긴다(현재는 쓰기 전용 — 다음 재적재가 읽어서 쓰지 않는다).
- **출력**: `LoadResult = { roadmapCount: number; materialCount: number; errorCount: number; durationMs: number }` — FR-001~003 시나리오를 호출자가 확인할 수 있는 최소 요약.
- **보장**:
  - 이 함수가 예외 없이 반환하면, 이후 아래 조회 함수들은 이번 실행 결과를 반영한다(FR-002, FR-003).
  - 이 함수가 예외로 중단되면, `dbPath`의 기존 파일은 호출 전 상태 그대로 남는다 — 조회 함수는 절반만 반영된 상태를 절대 보지 않는다(FR-007).
  - `dbPath`가 없거나 손상됐거나 `PRAGMA user_version`이 코드 기대값과 다르면, 이 함수는 오류를 던지지 않고 `previousBatch` 없이(빈 상태 취급) 처음부터 재생성한다(FR-003).
  - 같은 원본으로 이 함수를 두 번 호출해도 `roadmapCount`/`materialCount`가 동일하고, 저장소의 행 수가 늘지 않는다(FR-006, SC-004).

## `listRoadmaps(dbPath?: string): RoadmapSummary[]`

```ts
interface RoadmapSummary {
  roadmapId: string
  title: string
  hasPhaseDocs: boolean
  completedCount: number
  totalCount: number
  progressRatio: number | null   // totalCount === 0 이면 null
  needsReviewCount: number
}
```

- **보장**: `data-model.md`의 "로드맵 요약" 계산 규칙을 그대로 따른다. 호출자는 001의 `Roadmap`/`LearningItem` 내부 구조를 몰라도 된다(FR-004). `orderIndex` 순서로 정렬돼 반환된다.

## `getRoadmapDetail(roadmapId: string, dbPath?: string): RoadmapDetail | null`

```ts
interface RoadmapDetail {
  roadmapId: string
  title: string
  tracks: Array<{
    trackId: string
    title: string
    phases: PhaseDetail[]
  }>
  phases: PhaseDetail[]   // 트랙 없는 로드맵의 최상위 Phase(001 Roadmap.tracks가 빈 배열인 경우)
}

interface PhaseDetail {
  phaseId: string
  title: string
  aggregatable: boolean
  items: Array<{
    itemId: string
    text: string
    completed: boolean | null
    completedDate: string | null
    linkedMaterialId: string | null
    needsReview: boolean
  }>
}
```

- **보장**: 존재하지 않는 `roadmapId`는 `null`을 반환한다(예외 아님). 트랙·Phase·항목은 `order_index` 순서를 보존한다(001 FR-001 상속). `aggregatable: false`인 Phase는 `items: []`를 반환한다(data-model.md 검증 규칙).

## `searchMaterials(query: { sourcePath?: string; title?: string; category?: string; provider?: string; course?: string; roadmapId?: string }, dbPath?: string): MaterialSearchResult[]`

```ts
interface MaterialSearchResult {
  materialId: string
  title: string
  sourcePath: string
  category: string
  provider: string | null
  course: string | null
  linkedRoadmapIds: string[]
}
```

- **보장**: 001 `MaterialIndex.byPath`/`search`와 동일한 필터 의미를 유지한다(FR-004 — "자료 검색(제목·경로·분류·제공처·강좌)") — `sourcePath`가 주어지면 001 `MaterialIndex.byPath`와 동일하게 정확히 일치하는 자료 하나만 반환하고, `provider`/`course`가 null인 자료는 그 조건으로 찾지 못한다(001 계약 그대로 상속, 재해석하지 않음). 전체 목록 선형 탐색이 아니라 SQLite 인덱스(`materials.source_path` UNIQUE, `category`/`provider`/`course` 보조 인덱스)를 통해 조회한다.

## `listReviewNeededItems(dbPath?: string): Array<{ itemId: string; roadmapId: string; sourcePath: string; errorKind: string; detail: string }>`

- **보장**: `import_errors`와 연결된 모든 항목을 반환하며, 조용히 누락되는 항목이 없다(FR-005, SC-005 상속 — 001의 "예시 데이터 0건"과 별개로 002는 "오류 100% 노출"을 이 함수로 보장).

## `getMaterialById(materialId: string, dbPath?: string): MaterialSearchResult | null`

**003 계획 단계에서 추가(additive, 기존 다섯 함수 시그니처는 바뀌지 않음)**: `getRoadmapDetail()`이 반환하는 `LearningItemDetail.linkedMaterialId`와 `searchMaterials()`가 반환하는 `materialId`는 둘 다 001이 부여한 불투명 식별자(경로의 SHA-256 해시)라 역산이 불가능하다 — 003이 "연결된 자료로 이동"(FR-011)을 구현하려면 이 id 하나로 자료를 직접 조회하는 방법이 반드시 있어야 하는데, 원안의 다섯 함수 중 어떤 것도 이를 제공하지 않았다(`searchMaterials`는 `sourcePath`/`title`/`category`/`provider`/`course`/`roadmapId`만 받는다). `materials.id`가 이미 SQLite `PRIMARY KEY`이므로 구현은 단순한 인덱스 조회 하나를 추가하는 것뿐이다.

- **보장**: `getRoadmapDetail()`과 동일한 패턴 — 존재하지 않는 `materialId`는 예외 대신 `null`을 반환한다. 반환 타입은 `searchMaterials()`와 동일한 `MaterialSearchResult`이며 별도 타입을 새로 만들지 않는다.

## 안정성 계약

- 위 여섯 함수의 시그니처를 바꾸는 것은 3단계(로드맵 탐색·자료실 화면) 작업에 영향을 준다 — 헌법의 "역할 간 통합 절차"에 따라 통보 후 진행한다.
- 이 계약은 이 기능이 내부적으로 쓰는 SQLite 스키마(`data-model.md`)를 외부에 노출하지 않는다 — 3단계는 이 다섯 함수만 호출하고 테이블 구조를 직접 쿼리하지 않는다(FR-004의 "내부 구조를 몰라도 된다"는 보장을 지키기 위함).
- `dbPath` 인자는 테스트 전용이며, 생략 시 실제 캐시 파일 경로(`backend/.cache/learning-loop.sqlite`, `db.ts`에 상수로 고정)를 사용한다.
