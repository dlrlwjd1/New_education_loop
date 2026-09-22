---

description: "Task list template for feature implementation"
---

# Tasks: 영속 저장소 계층 (Persistence Layer)

**Input**: Design documents from `/specs/002-persistence-layer/`

**Prerequisites**: [plan.md](plan.md), [spec.md](spec.md), [research.md](research.md), [data-model.md](data-model.md), [contracts/persistence-library.md](contracts/persistence-library.md), [quickstart.md](quickstart.md)

**Tests**: 헌법 원칙 IV(QA)가 이 저장소의 모든 기능에 구현과 분리된 QA 검증을 요구하므로, 각 사용자 스토리 및 공유 Foundational 모듈에 회귀 테스트 작업을 포함한다(001과 동일한 패턴).

**Organization**: 작업은 spec.md의 사용자 스토리(US1~US4)별로 그룹화한다.

**Revision note (2026-09-22, `/speckit-implement` 구현 중 수정)**: T016/T018을 구현하는 과정에서 원안(재적재마다 `previousBatch`를 구성해 001 `runImport()`에 주입)이 **001의 현재 계약으로는 불가능함**이 드러났다 — `RunImportOptions`/`parseRoadmaps`/`parseMaterials`에 `previousBatch`를 받을 매개변수가 아예 없고, 안전하게 추가하려면 001의 "`status: 'updated'`가 무변경 재적재와 실제 변경을 구분 못 함" 문제도 함께 고쳐야 한다(안 그러면 매 재적재마다 `material_versions`가 무의미하게 수천 행씩 불어남). 001은 이미 완료·배포된 기능이라 이번 범위에서 확장하지 않기로 하고: T016(`buildPreviousBatchFromLastRun`)은 죽은 코드였음이 확인돼 제거했고, T017(`recordLoadRun`)은 "쓰기 전용 감사 기록"으로 목적을 재정의해 유지했고, T018(`reload()`)은 `previousBatch` 없이 단순화했다. FR-006/SC-004(재적재해도 중복 없음)는 이것과 무관하게 이미 성립한다(001의 식별자가 애초에 경로의 결정적 함수이고, 매 재적재가 새 파일을 통째로 만들기 때문). `research.md` §3, `data-model.md`, `contracts/persistence-library.md`를 함께 갱신했다. 자료 버전 이력(`material_versions`)이 실제로 채워지려면 001 계약 확장이 필요하며, 그 필요가 생기면 별도 기능으로 다룬다.

**Addendum (2026-09-22, `/speckit-plan` for 003-roadmap-materials-screens)**: 003 계획 중 `contracts/persistence-library.md`에 `getMaterialById(materialId, dbPath?)` 함수를 추가했다(기존 다섯 함수 시그니처는 변경 없음, additive) — `getRoadmapDetail()`의 `linkedMaterialId`와 `searchMaterials()`의 `materialId`가 불투명 식별자라 역산이 불가능한데, 원안의 다섯 함수 중 어느 것도 id 하나로 자료를 직접 조회하는 방법을 제공하지 않아 003의 FR-011("연결된 자료로 이동")을 구현할 수 없었다. 실제 구현(`backend/src/persistence/queries.ts`에 함수 추가)은 이 파일이 아니라 003의 tasks.md Foundational 단계에서 이뤄진다 — `materials.id`가 이미 `PRIMARY KEY`라 스키마 변경 없이 조회 하나만 추가하면 된다.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: 병렬 가능(다른 파일, 미완료 작업에 의존하지 않음)
- **[Story]**: 이 작업이 속한 사용자 스토리(US1~US4)
- 모든 작업에 정확한 파일 경로를 포함한다

## Path Conventions

plan.md의 Project Structure를 따른다 — `backend/src/persistence/`, `backend/tests/`. 001(`backend/src/ingestion/`)은 변경하지 않고 그대로 재사용한다(FR-008). 이 기능도 UI가 없으므로 `frontend/`는 만들지 않는다.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: 002가 쓸 새 하위 디렉터리 구성. 신규 npm 의존성은 없다(research.md §1 — `node:sqlite`는 Node 24 내장, `@types/node` 26.6.1에 타입 포함 확인됨).

- [X] T001 `backend/src/persistence/`, `backend/tests/fixtures/persistence-*`(재적재·손상·구버전 시나리오용 픽스처 디렉터리) 생성 — plan.md Project Structure대로
- [X] T002 [P] 루트 `.gitignore`에 SQLite 파생 캐시 경로(`backend/.cache/`)가 이미 커버되는지 확인하고, 안 되어 있으면 항목 추가(FR-010, 구현전_결정사항.md 7.1)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: 모든 사용자 스토리가 공유하는 스키마·DB 오픈/원자적 교체 기반. 이 단계가 끝나기 전에는 어떤 사용자 스토리도 시작하지 않는다.

**⚠️ CRITICAL**: 이 단계 완료 전 사용자 스토리 작업 시작 금지

### Tests for Foundational

- [X] T003 [P] `backend/tests/unit/schema.test.ts`에 data-model.md의 전체 테이블(`roadmaps`~`load_run_file_snapshots`)과 제약(PRIMARY KEY/UNIQUE/FOREIGN KEY, 특히 `materials.source_path UNIQUE`, `material_versions`의 `(material_id, content_hash)` 복합 유일 제약, `material_roadmap_links`의 `(material_id, roadmap_id)` 복합 유일 제약)이 생성되는지, `PRAGMA user_version`이 기대 상수와 일치하는지 검증하는 단위 테스트 작성
- [X] T004 [P] `backend/tests/unit/db.test.ts`에 (a) 정상 완료 시 임시 파일이 목적 경로로 원자적 교체됨, (b) 교체 전 예외가 나면 기존 파일이 그대로 남음(FR-007), (c) 파일이 없거나 손상됐거나 `PRAGMA user_version`이 코드 기대값과 다르면 예외를 던지지 않고 "재생성 필요" 신호를 반환함(FR-003) — 세 가지를 검증하는 단위 테스트 작성

### Implementation for Foundational

- [X] T005 [P] `backend/src/persistence/types.ts`에 contracts/persistence-library.md의 반환 타입(`LoadResult`, `RoadmapSummary`, `RoadmapDetail`, `PhaseDetail`, `MaterialSearchResult`, `listReviewNeededItems`의 반환 항목 타입) 정의
- [X] T006 `backend/src/persistence/schema.ts`에 data-model.md 전체 테이블의 DDL(`CREATE TABLE IF NOT EXISTS ...`, 외래키·유일 제약 포함)과 `PRAGMA user_version` 상수 구현 — depends on T003, T005
- [X] T007 `backend/src/persistence/db.ts`에 `node:sqlite`(`DatabaseSync`) 오픈 헬퍼, 새 DB를 임시 경로에 완성한 뒤 `fs.renameSync`로 원자적 교체하는 헬퍼, 기존 파일 오픈 시 스키마 버전·무결성 확인(손상/구버전이면 예외 대신 "재생성 필요" 반환) 구현(research.md §2, §5) — depends on T004, T006

**Checkpoint**: 재단 완료 — 사용자 스토리 구현 시작 가능

---

## Phase 3: User Story 1 - 매번 다시 읽지 않고 즉시 조회 (Priority: P1) 🎯 MVP

**Goal**: 저장소를 한 번 적재하면, 로드맵 목록 반복 조회와 자료 경로 검색이 매번 `study-progress/`·`courses/`를 다시 순회하지 않고 즉시 응답한다(SC-001).

**Independent Test**: 실제 저장소로 1회 적재 후 `listRoadmaps()`를 100회 반복해 평균 응답 시간이 최초 적재 시간의 1% 미만인지, `searchMaterials({ sourcePath })`가 즉시 그 자료를 반환하는지 확인한다(quickstart.md 시나리오 1).

### Tests for User Story 1

- [X] T008 [P] [US1] `backend/tests/integration/persistence.load.test.ts`에 축소 픽스처(001의 기존 픽스처 재사용)로 `runImport()` 결과를 적재한 뒤, `roadmaps`/`materials`/`learning_items` 등 테이블 행이 그 `ImportBatch`와 정확히 일치하는지 검증하는 통합 테스트 작성
- [X] T009 [P] [US1] `backend/tests/integration/persistence.queries.performance.test.ts`에 `reload()` 1회 후 `listRoadmaps()` 100회 반복 평균 응답 시간이 최초 적재 시간의 1% 미만인지(SC-001), `searchMaterials({ sourcePath })` 호출이 파일시스템을 다시 순회하지 않는지(코스 디렉터리를 지운 뒤 조회해 확인) 검증하는 통합 테스트 작성 — 생성된 합성 픽스처(로드맵 10개·자료 500개) 기준 비율 임계값은 여유를 두어 0.05로 검증(타이머 해상도 노이즈 방지); 메인 에이전트가 실제 저장소(로드맵 8개·자료 7,865개)로 독립 재실행한 결과는 비율 0.00014로 SC-001을 훨씬 여유 있게 통과

### Implementation for User Story 1

- [X] T010 [US1] `backend/src/persistence/load.ts`에 `ImportBatch`를 T007의 임시 파일 헬퍼로 새 SQLite 파일에 적재하는 핵심 로직 구현 — data-model.md 매핑대로 `roadmaps`/`tracks`/`phases`/`learning_items`/`materials`/`material_versions`/`material_roadmap_links`/`import_errors`를 전부 채우고(`learning_items.needs_review`는 대응하는 `import_errors` 존재 여부로 계산), 완료되면 원자적으로 교체 — depends on T006, T007, T005
- [X] T011 [US1] `backend/src/persistence/queries.ts`에 `listRoadmaps()` 구현 — data-model.md "로드맵 요약" 계산 규칙(`completedCount`/`totalCount`는 `phases.aggregatable = 1`인 Phase만 집계, `totalCount = 0`이면 `progressRatio = null`, `needsReviewCount` 집계)대로, `order_index` 순서로 정렬해 반환 — depends on T010
- [X] T012 [US1] `queries.ts`에 `searchMaterials({ sourcePath })` 우선 구현 — `materials.source_path` UNIQUE 인덱스로 정확히 일치하는 자료 하나를 즉시 조회(001 `MaterialIndex.byPath`와 동일한 보장) — depends on T010
- [X] T013 [US1] `queries.ts`에 최초 버전의 `reload()` 진입점 구현 — `runImport({ scope: "real", ...roots })` 호출 후 T010의 적재 로직을 실행하고 `LoadResult`를 반환(이 시점에는 `previousBatch` 없이 매 실행이 처음부터 적재하는 것으로 충분 — 식별자 안정성 정교화는 US2에서) — depends on T010

**Checkpoint**: US1 단독으로 quickstart.md 시나리오 1 통과

---

## Phase 4: User Story 2 - 파일이 원본, 파일을 고치면 반영됨 (Priority: P1)

**Goal**: 원본 Phase 파일의 체크박스를 고치고 재적재하면 조회 결과에 정확히 반영되고(SC-002), 재적재를 여러 번 실행해도 저장소 행 수가 늘지 않는다(FR-006, SC-004).

**Independent Test**: 픽스처의 미완료 체크박스 하나를 완료로 고친 뒤 `reload()`를 실행해 `listRoadmaps()`의 완료 수가 정확히 1 증가하는지, 재적재 전 조회는 이전 값을 유지하는지, 동일 픽스처로 재적재를 두 번 반복해도 행 수가 늘지 않는지 확인한다(quickstart.md 시나리오 2).

### Tests for User Story 2

- [X] T014 [P] [US2] `backend/tests/integration/persistence.reload.fileWins.test.ts`에 픽스처 Phase 파일의 체크박스를 프로그램적으로 고친 뒤 `reload()` 전/후 `listRoadmaps()`의 `completedCount`를 비교해 정확히 +1 되는지, 재적재 전에는 이전 값 그대로인지 검증하는 통합 테스트 작성(SC-002)
- [X] T015 [P] [US2] `backend/tests/integration/persistence.reload.dedupe.test.ts`에 동일 픽스처로 `reload()`를 두 번(실제 저장소 기준으로는 메인 에이전트가 세 번째로 독립 재실행) 연속 실행해 `roadmaps`/`materials`/`learning_items` 행 수가 늘지 않고 동일 식별자가 재사용되는지 검증하는 통합 테스트 작성(FR-006, SC-004) — Revision note대로 `previousBatch` 기반 이동/이름변경 회귀는 범위에서 제외(001에 previousBatch를 넘기지 않으므로 해당 없음), id가 경로의 결정적 함수라는 점으로 대체 검증

### Implementation for User Story 2

- [X] T016 ~~[US2] `backend/src/persistence/load.ts`에 직전 성공한 적재의 `load_run_file_snapshots`를 모아 001 `resolveIdentity`가 요구하는 `previousBatch` 형태로 구성하는 로직 추가~~ — **범위 조정(Revision note 참고)**: 001의 현재 계약으로는 구성한 `previousBatch`를 안전하게 소비할 곳이 없음이 구현 중 확인돼(001의 `status: "updated"`가 무변경 재적재와 실제 변경을 구분 못 함), 이 로직은 만들지 않기로 확정. FR-006/SC-004는 이것 없이 이미 성립(T015에서 검증)
- [X] T017 [US2] `backend/src/persistence/load.ts`에 이번 적재 실행의 `load_runs`/`load_run_file_snapshots` 행을 감사 기록으로 남기는 `recordLoadRun` 구현(data-model.md) — depends on T010
- [X] T018 [US2] `queries.ts`의 `reload()`를 완성 — T013의 최초 버전에서 그대로 유지(001 `runImport()`는 `previousBatch` 없이 호출, Revision note 참고) — depends on T013, T017

**Checkpoint**: US1+US2 — quickstart.md 시나리오 1~2 통과

---

## Phase 5: User Story 3 - 캐시를 지워도 무손실 재생성 (Priority: P2)

**Goal**: 저장소 파일을 통째로 지우거나 손상되거나 스키마 버전이 오래돼도, 재적재 시 원본 파일로부터 완전히 동일한 결과가 오류 없이 재생성된다(SC-003, FR-003). 적재 도중 오류가 나도 이전 조회 가능 상태는 훼손되지 않는다(FR-007).

**Independent Test**: 정상 적재 후 저장소 파일을 삭제하고 재적재해 로드맵·자료 수·완료/전체 수치가 삭제 전과 100% 동일한지, 손상/구버전 파일로도 오류 없이 재생성되는지, 적재 도중 강제로 실패시켜도 이전 조회 결과가 유지되는지 확인한다(quickstart.md 시나리오 3).

### Tests for User Story 3

- [X] T019 [P] [US3] `backend/tests/integration/persistence.rebuild.deleted.test.ts`에 정상 적재 후 DB 파일을 삭제하고 `reload()`를 실행해 로드맵·자료 수·완료/전체 수치가 삭제 전과 100% 동일한지 검증하는 통합 테스트 작성(SC-003) — 메인 에이전트가 실제 저장소로도 독립 재검증(로드맵 8/자료 7865, 삭제 전후 `listRoadmaps()` 완전 동일)
- [X] T020 [P] [US3] `backend/tests/integration/persistence.rebuild.corrupted.test.ts`에 (a) 임의 바이트로 손상시킨 DB 파일, (b) 빈 파일, (c) `PRAGMA user_version`이 오래된(유효하지만 다른 버전의) DB 파일로 각각 `reload()`가 예외 없이 처음부터 재생성하는지 검증하는 통합 테스트 작성(FR-003, Edge Cases) — 메인 에이전트가 실제 저장소로 손상 케이스 독립 재검증
- [X] T021 [P] [US3] `backend/tests/integration/persistence.reload.atomicFailure.test.ts`에 `db.ts`의 `buildAndReplace(dbPath, populate)`에 도중에 예외를 던지는 `populate` 콜백을 직접 주입(테스트 전용 훅 불필요)해, 조회 함수가 여전히 직전 성공 상태를 그대로 반환하고(바이트 단위로 기존 파일과 동일), 임시 파일이 남지 않으며, 이후 재적재가 정상 복구되는지 검증하는 통합 테스트 작성(FR-007)

### Implementation for User Story 3

- [X] T022 [US3] `reload()`가 기존 파일의 상태(정상/손상/구버전/없음)를 사전에 검사하지 않고 **항상** T007의 원자적 교체 헬퍼로 새로 빌드하도록 구현 — 별도 "재생성 필요" 분기가 필요 없다는 것이 더 단순한 실제 설계다: 모든 `reload()` 호출 자체가 이미 전체 재생성이므로 기존 파일이 무엇이었든 결과가 같다(FR-003) — depends on T007, T018
- [X] T023 [US3] `load.ts`의 적재 파이프라인 전체(001 `runImport` 호출 ~ 테이블 채우기)가 T007의 원자적 교체 헬퍼 안에서만 파일 쓰기를 수행하도록 배선을 점검·보완해, 어느 단계에서 예외가 나도 임시 파일만 버려지고 기존 파일은 그대로 남도록 보장(FR-007) — depends on T010, T022

**Checkpoint**: US1+US2+US3 — quickstart.md 시나리오 1~3 통과

---

## Phase 6: User Story 4 - 화면이 바로 쓸 수 있는 조회 함수 (Priority: P2)

**Goal**: 로드맵 상세, 제목/분류/제공처/강좌/로드맵 조건을 포함한 자료 검색, "확인 필요" 항목 노출까지 — 화면이 001/002 내부 스키마를 몰라도 되는 조회 함수 전체를 완성한다(FR-004, FR-005).

**Independent Test**: 저장소 내부 스키마를 모르는 상태에서 `getRoadmapDetail()`로 트랙·Phase·항목이 원문 순서로 반환되는지, `searchMaterials()`의 다양한 조건 조합이 001과 동일한 결과를 내는지, `listReviewNeededItems()`가 001이 보고한 오류 100%를 노출하는지 확인한다(quickstart.md 시나리오 4).

### Tests for User Story 4

- [X] T024 [P] [US4] `backend/tests/integration/persistence.queries.roadmapDetail.test.ts`에 트랙이 있는 로드맵과 없는 로드맵 각각에 대해 `getRoadmapDetail()`이 트랙·Phase·항목을 `order_index` 순서로 반환하고, `aggregatable: false`인 Phase는 `items: []`를 반환하며, 존재하지 않는 `roadmapId`는 `null`을 반환하는지(예외 아님) 검증하는 통합 테스트 작성
- [X] T025 [P] [US4] `backend/tests/integration/persistence.queries.materialSearch.test.ts`에 `sourcePath`/`title`/`category`/`provider`/`course`/`roadmapId` 조건 조합으로 `searchMaterials()`가 001 `MaterialIndex.search`/`byPath`와 동일한 결과를 반환하는지, `provider`/`course`가 null인 자료는 해당 조건으로 찾지 못하는지, 빈 질의는 `[]`인지 검증하는 통합 테스트 작성(FR-004)
- [X] T026 [P] [US4] `backend/tests/integration/persistence.queries.reviewNeeded.test.ts`에 신규 픽스처(체크박스 해석 불가·날짜 오류·링크 깨짐 포함)로 적재한 뒤 `listReviewNeededItems()`가 그 오류 100%를 노출하고 조용히 사라진 항목이 0건인지 검증하는 통합 테스트 작성(FR-005) — 메인 에이전트가 실제 저장소로도 확인(현재 오류 0건, `listReviewNeededItems()` 결과 `[]`로 일치)

### Implementation for User Story 4

- [X] T027 [P] [US4] `queries.ts`에 `getRoadmapDetail(roadmapId)` 구현 — `tracks`/`phases`/`learning_items`를 `order_index`로 조인·정렬해 반환, 트랙 없는 로드맵은 `tracks: []` + 최상위 `phases`로 반환 — depends on T010
- [X] T028 [US4] `queries.ts`의 `searchMaterials()`를 확장해 `title`/`category`/`provider`/`course`/`roadmapId` 조건을 모두 지원하도록 완성(FR-004, `material_roadmap_links` 조인 포함) — depends on T012
- [X] T029 [US4] `queries.ts`에 `listReviewNeededItems()` 구현 — `import_errors`를 `learning_items`/`materials`와 `source_path`로 연결해 반환(FR-005) — depends on T010

**Checkpoint**: 4개 사용자 스토리 모두 독립적으로 동작 — quickstart.md 시나리오 1~4 전체 통과

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: 여러 스토리에 걸친 검증과 계약 정합성 확인

- [X] T030 [P] 실제 저장소(`study-progress/`, `courses/`) 전체를 대상으로 quickstart.md 시나리오 1·3을 실행하고 SC-001~004 결과를 기록 — 메인 에이전트가 직접 실행: `reload()` 2회 연속(roadmapCount=8, materialCount=7865, errorCount=0, 두 실행 완전 동일), `listRoadmaps()` 100회 평균/최초 적재 비율 0.00014(SC-001 여유 통과), 캐시 삭제 후 재적재·손상시킨 뒤 재적재 모두 삭제 전과 완전히 동일한 `listRoadmaps()` 결과(SC-003)로 확인. (시나리오 2는 실제 `study-progress/` 파일을 프로그램적으로 고치는 것이라 사용자의 실제 진도 데이터를 건드리게 되어 여기서는 재현하지 않음 — QA의 격리된 픽스처 테스트 T014로 대체 검증됨)
- [X] T031 spec.md Edge Cases(재적재 도중 동시 편집 — 매 재적재가 그 시점 파일 상태를 전체로 다시 읽으므로 구조적으로 성립, 별도 코드 경로 불필요; 001 오류 항목의 "확인 필요" 노출 — T026; 손상/구버전 스키마 재생성 — T020, T030; 적재 중단 시 조회 결과 유지 — T021; `courses/`에 실제/예시 구분 미적용 — 002가 항상 `scope:"real"`로만 001을 호출해 자료 자체엔 애초에 예시 구분 로직이 닿지 않음, 001 FR-011 경계 그대로 상속)를 실제 코드·테스트 결과와 대조해 전부 구현대로 동작함을 확인
- [X] T032 [P] `backend/tests/unit/contractConformance.persistence.test.ts`에 contracts/persistence-library.md에 정의한 다섯 함수(`reload`, `listRoadmaps`, `getRoadmapDetail`, `searchMaterials`, `listReviewNeededItems`) 시그니처와 실제 구현이 일치하는지 검증하는 테스트 작성(001의 `contractConformance.test.ts`와 동일 패턴)
- [X] T033 헌법 원칙 VI(메인 에이전트 품질 검수) 통과 확인 후, 원칙 VII에 따라 루트 `개발결과.md`에 이 기능의 결과(날짜, 기능명, 변경 파일, 검증 방법과 결과, 담당 서브에이전트)를 기록 — 메인 에이전트가 직접 수행, 서브에이전트에 위임하지 않음

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: 의존성 없음 — 즉시 시작
- **Foundational (Phase 2)**: Setup 완료 후 — 모든 사용자 스토리를 막는다. 테스트(T003, T004)를 먼저 작성해 실패를 확인한 뒤 구현(T006, T007)한다
- **User Stories (Phase 3~6)**: 모두 Foundational 완료에 의존
  - US1(Phase 3)은 다른 스토리에 의존하지 않는다
  - US2(Phase 4)는 US1이 만든 `load.ts`/`queries.ts`의 `reload()`(T010, T013)를 확장하므로 US1 완료 후 시작
  - US3(Phase 5)는 US2가 완성한 `reload()`(T018)에 재생성 분기를 추가하므로 US2 완료 후 시작
  - US4(Phase 6)의 세 조회 함수(T027~T029)는 US1의 `load.ts`(T010)만 있으면 되므로 US2·US3와 독립적으로 병렬 가능하지만, `searchMaterials()` 확장(T028)은 US1의 T012에 의존
- **Polish (Phase 7)**: 수행하고자 하는 모든 사용자 스토리 완료 후

### User Story Dependencies

- **User Story 1 (P1)**: Foundational 완료 후 시작 가능 — 다른 스토리에 의존하지 않음
- **User Story 2 (P1)**: US1의 `load.ts`/`reload()` 완료 후 시작 — 같은 파일을 확장
- **User Story 3 (P2)**: US2의 `reload()` 완료 후 시작 — 재생성 분기가 그 위에 얹힘
- **User Story 4 (P2)**: US1의 `load.ts`(T010) 완료 후 시작 가능 — US2·US3와 파일이 겹치지 않아 병렬 진행 가능

### Within Each User Story

- 테스트를 먼저 작성해 실패를 확인한 뒤 구현한다
- `load.ts`(적재) 변경 후 `queries.ts`(조회) 변경 — 데이터가 있어야 조회를 검증할 수 있다
- 스토리 완료 후 다음 우선순위로 이동

### Parallel Opportunities

- Setup의 T001, T002는 서로 다른 파일이라 병렬 가능
- Foundational의 T003, T004(테스트)는 서로 다른 파일이라 병렬 가능. T005는 독립적으로 병렬 가능. T006은 T003에, T007은 T004·T006에 의존해 순차
- US1의 테스트(T008, T009)는 서로 다른 파일이라 병렬 가능
- US2의 테스트(T014, T015)는 서로 다른 파일이라 병렬 가능
- US3의 테스트(T019, T020, T021)는 서로 다른 파일이라 병렬 가능
- US4의 테스트(T024, T025, T026)와 구현 중 T027은 US2·US3 작업과 파일이 겹치지 않아 병렬 진행 가능 — 다만 T028은 US1의 T012가 끝나야 시작할 수 있다

---

## Parallel Example: User Story 1 + User Story 4(조회 함수 완성 부분) 동시 진행

```bash
# Foundational 완료 후, US1 구현과 US4 테스트를 동시에 준비:
Task: "backend/src/persistence/load.ts 구현 (T010)"
Task: "backend/tests/integration/persistence.queries.roadmapDetail.test.ts 작성 (T024)"

# T010이 끝나면 US1의 나머지와 US4의 getRoadmapDetail 구현을 동시 진행:
Task: "backend/src/persistence/queries.ts에 listRoadmaps() 구현 (T011)"
Task: "backend/src/persistence/queries.ts에 getRoadmapDetail() 구현 (T027)"

# 단, US2(T016~T018)와 US3(T022~T023)는 순서대로 그 위에 쌓아야 한다.
```

---

## Implementation Strategy

### MVP 먼저 (User Story 1만)

1. Phase 1: Setup 완료
2. Phase 2: Foundational 완료 (필수 — 모든 스토리를 막음, 스키마·원자적 교체 단위 테스트 포함)
3. Phase 3: User Story 1 완료
4. **중단하고 검증**: quickstart.md 시나리오 1로 US1을 독립적으로 확인
5. 이 시점에서 이미 "반복 조회가 즉시 응답한다"는 이 기능의 핵심 가치가 검증됨

### 점진적 전달

1. Setup + Foundational 완료 → 기반 준비(스키마·원자적 교체 단위 테스트 포함)
2. US1 추가 → 독립 검증(MVP) → 즉시 조회 확보
3. US2 추가 → 독립 검증 → "파일이 원본" 원칙과 재적재 안정성(중복 없음) 확보
4. US3 추가 → 독립 검증 → 캐시 삭제·손상·구버전에도 무손실 재생성 확보(US4와 병렬 진행 가능)
5. US4 추가 → 독립 검증 → 화면이 바로 쓸 조회 함수 전체 완성으로 마무리
6. Phase 7 Polish → 실제 저장소 전체 대상 quickstart.md 검증 + 계약 정합성 확인 + 원칙 VI/VII 마감

### Parallel Team Strategy

여러 명이 동시에 작업한다면: Foundational 완료 후 한 명은 US1(→US2→US3 순차, 같은 파일을 계속 확장하므로), 다른 한 명은 US4(조회 함수 완성, US1의 `load.ts`만 있으면 독립 진행 가능)를 맡는 분담이 자연스럽다.

---

## Notes

- [P] 작업 = 다른 파일, 의존성 없음
- [Story] 라벨은 작업을 특정 사용자 스토리에 매핑한다(추적용). Foundational·Setup·Polish는 라벨 없음
- 각 사용자 스토리는 독립적으로 완료·검증 가능해야 한다
- 구현 전에 테스트가 실패하는지 확인한다(T003/T004/T008/T009/T014/T015/T019/T020/T021/T024/T025/T026)
- 논리적 작업 단위마다 커밋한다
- 어떤 체크포인트에서든 멈춰서 해당 스토리를 독립적으로 검증할 수 있다
- 이 기능은 화면(UI)이나 HTTP API를 만들지 않는다(spec.md Assumptions) — 그런 작업은 이 tasks.md에 없다, 이후 별도 기능(3단계 화면)에서 다룬다
