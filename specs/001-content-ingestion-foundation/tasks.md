---

description: "Task list template for feature implementation"
---

# Tasks: 자료 이전 기반 (Content Ingestion Foundation)

**Input**: Design documents from `/specs/001-content-ingestion-foundation/`

**Prerequisites**: [plan.md](plan.md), [spec.md](spec.md), [research.md](research.md), [data-model.md](data-model.md), [contracts/ingestion-library.md](contracts/ingestion-library.md), [quickstart.md](quickstart.md)

**Tests**: 헌법 원칙 IV(QA)가 이 저장소의 모든 기능에 구현과 분리된 QA 검증을 요구하므로, 각 사용자 스토리 및 공유 Foundational 모듈에 회귀 테스트 작업을 포함한다.

**Organization**: 작업은 spec.md의 사용자 스토리(US1~US4)별로 그룹화한다.

**Revision note (2026-09-18, `/speckit-analyze` 후속 수정, 2차)**: `/speckit-analyze`에서 발견한 커버리지 격차를 반영해 다음을 수정했다 — (1) Phase 5(US3)에 자료 색인 제공처·강좌 필드, 학습 항목-자료 연결(FR-013), 깨진 링크 감지(FR-014 `link_broken`)를 추가. (2) 자료용 식별자 충돌 감지를 T006(공유 `resolveIdentity`)에 통합해 중복 작업을 제거. (3) 자체 검증 중 발견: Foundational의 핵심 분기 로직(`checkboxNormalize`, `resolveIdentity`)에 전용 단위 테스트가 없었던 것을 추가(T005, T006). (4) `MaterialVersion` 추가 책임을 계약(`parseMaterials`가 호출자)과 일치하도록 T022(materialIndex가 아니라 parseMaterials)로 재배치. 전체 작업 수: 30 → 31 → **33**.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: 병렬 가능(다른 파일, 미완료 작업에 의존하지 않음)
- **[Story]**: 이 작업이 속한 사용자 스토리(US1~US4)
- 모든 작업에 정확한 파일 경로를 포함한다

## Path Conventions

plan.md의 Project Structure를 따른다 — `backend/src/ingestion/`, `backend/tests/`. 이 기능은 UI가 없으므로 `frontend/`는 만들지 않는다.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: 백엔드 패키지 초기 구성(저장소에 아직 코드가 전혀 없어 이 기능이 처음 만든다)

- [x] T001 `backend/`, `backend/src/ingestion/`, `backend/tests/{fixtures,unit,integration}` 디렉터리 구조를 plan.md Project Structure대로 생성
- [x] T002 `backend/`에 Node.js/TypeScript 프로젝트 초기화(`package.json`, `tsconfig.json`) — 의존성: `unified`, `remark-parse`, `remark-gfm`, `vitest`(research.md §1, §2, §6)
- [x] T003 [P] `backend/`에 ESLint + Prettier 설정

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: 모든 사용자 스토리가 공유하는 타입·유틸리티. 이 단계가 끝나기 전에는 어떤 사용자 스토리도 시작하지 않는다.

**⚠️ CRITICAL**: 이 단계 완료 전 사용자 스토리 작업 시작 금지

### Tests for Foundational

이 두 모듈은 모든 사용자 스토리가 의존하는 분기 로직(정규화, 매칭·충돌)을 담고 있어 통합 테스트로는 실패 지점을 정확히 좁히기 어렵다 — 전용 단위 테스트를 둔다.

- [x] T004 [P] `backend/tests/unit/checkboxNormalize.test.ts`에 `[x]`/`[X]`/`[ x]`/`[x ]` 등 정상 변형과, 정규화해도 해석 불가한 표기(예: `[o]`, `[✓]`)가 각각 기대대로 처리되는지 검증하는 단위 테스트 작성(FR-006)
- [x] T005 [P] `backend/tests/unit/resolveIdentity.test.ts`에 (a) 경로 일치, (b) 경로 불일치·해시 일치(이동/이름 변경), (c) 경로 일치·해시 불일치(새 버전), (d) 서로 다른 원본의 정규화 id 충돌(→ `held`) 네 가지 케이스를 검증하는 단위 테스트 작성(FR-003, FR-010, FR-012)

### Implementation for Foundational

- [x] T006 [P] data-model.md의 엔티티(Roadmap, Track, Phase, LearningItem, Material, MaterialVersion, ImportBatch, ImportMapping, ImportError, ImportMetrics — Material은 `provider`/`course` 필드 포함)에 대응하는 TypeScript 타입을 `backend/src/ingestion/types.ts`에 정의
- [x] T007 `backend/src/ingestion/checkboxNormalize.ts`에 체크박스 정규화 구현 — `[x]`, `[X]`, `[ x]`, `[x ]` 등 공백 변형을 표준 GFM 문법(`[x]`/`[ ]`)으로 정규화하고, 정규화해도 해석할 수 없는 표기는 `ImportError(kind="checkbox_unrecognized")`로 남긴다(FR-006) — depends on T004(테스트가 먼저 실패하는지 확인), T006
- [x] T008 `backend/src/ingestion/resolveIdentity.ts`에 식별자 매칭 구현 — **로드맵 엔티티와 자료 양쪽 모두가 공유하는 단일 함수**로 만든다(대상 종류별 별도 구현을 두지 않음, contracts/ingestion-library.md). 경로를 1차 키로 매칭하고, 경로가 일치하지 않으면 내용 SHA-256 해시로 재확인한다. 경로가 같고 해시가 다르면 `status: "updated"`(새 버전), 둘 다 다르면 신규 `id`. 서로 다른 `sourcePath`+`contentHash` 쌍이 같은 정규화 후보 `id`로 충돌하면 예외를 던지지 않고 `ImportError(kind="id_collision")`를 추가한 뒤 `status: "held"`로 반환한다(FR-003, FR-010, FR-012) — depends on T005(테스트가 먼저 실패하는지 확인), T006
- [x] T009 `backend/src/ingestion/markdownAst.ts`에 공유 Markdown AST 파싱 헬퍼 구현 — `unified().use(remarkParse).use(remarkGfm)`으로 파싱한 뒤 `code` 노드와 `checked` 속성이 있는 `listItem` 노드를 구조적으로 구분해 반환(research.md §2) — depends on T002

**Checkpoint**: 재단 완료 — 사용자 스토리 구현 시작 가능

---

## Phase 3: User Story 1 - 기존 로드맵·진도를 그대로 가져오기 (Priority: P1) 🎯 MVP

**Goal**: `study-progress/`를 파싱해 로드맵별 완료/전체 항목 수가 원본 체크박스 수와 100% 일치하는 결과를 만들고, 재실행 시 중복을 만들지 않는다.

**Independent Test**: 실제 `study-progress/` 전체를 가져온 뒤 각 로드맵의 완료/전체 수치를 원본 체크박스를 직접 센 값과 대조하고, 동일 실행을 두 번 반복해도 중복 항목이 생기지 않는지 확인한다(quickstart.md 1~2단계).

### Tests for User Story 1

- [x] T010 [P] [US1] `backend/tests/integration/parseRoadmaps.basic.test.ts`에 트랙 없는 로드맵 픽스처(직접 개수를 센 완료/전체 값 포함)를 파싱해 수치가 정확히 일치하는지 검증하는 통합 테스트 작성
- [x] T011 [P] [US1] `backend/tests/integration/runImport.dedupe.test.ts`에 동일 픽스처로 가져오기를 두 번 실행해 `metrics.duplicateCount === 0`이고 두 실행의 엔티티 id가 동일한지 검증하는 통합 테스트 작성

### Implementation for User Story 1

- [x] T012 [US1] `backend/src/ingestion/parseRoadmaps.ts`에 트랙 없는 로드맵 파싱 구현 — `study-progress/<로드맵>/` 하위에서 파일명에 "Phase"가 포함된 문서만 읽어 순서 보존된 `LearningItem[]`을 추출하고(코드 블록 안 체크박스는 T009 헬퍼로 이미 제외됨, FR-005), 부록·인덱스 문서는 집계에서 제외한다(FR-004). 체크박스 형식이 깨져 집계 불가한 Phase는 `aggregatable=false`로 표시한다(FR-015). **Phase 문서가 하나도 없는 로드맵은 `hasPhaseDocs=false`로 표시하고 "진행 자료 없음"으로 보고한다**(FR-015, data-model.md 검증 규칙) — depends on T006, T007, T008, T009
- [x] T013 [US1] `parseRoadmaps.ts`에 `LearningItem.completedDate` 파싱 추가 — 파싱 불가·미래 날짜 등 손상된 날짜는 오늘 날짜로 임의 변환하지 않고 `null` + `ImportError(kind="date_invalid")`로 남긴다(spec.md Edge Cases) — depends on T012
- [x] T014 [US1] `backend/src/ingestion/runImport.ts` 진입점 구현 — `parseRoadmaps` + `resolveIdentity`를 엮어 로드맵별 `metrics.completedItemCount`/`totalItemCount`를 포함한 `ImportBatch`를 산출한다(FR-014) — depends on T012, T008
- [x] T015 [US1] `backend/src/ingestion/cli.ts`에 `npm run ingest -- --roadmaps-only` CLI 진입점 추가 — quickstart.md 1~2단계가 요구하는 대로 `ImportBatch`를 JSON으로 출력한다 — depends on T014

**Checkpoint**: US1 단독으로 완전히 동작하고 테스트 가능(트랙 없는 로드맵 기준)

---

## Phase 4: User Story 2 - 트랙 아래 중첩된 Phase 구조 인식 (Priority: P1)

**Goal**: 트랙(대분류) 아래 여러 Phase가 중첩된 로드맵(예: 인공지능융합공학부)도 누락 없이, 원문 논리적 순서로 인식한다.

**Independent Test**: 트랙 3개(트랙마다 Phase 2~4개)를 가진 픽스처를 가져와 모든 트랙·Phase·항목이 나타나고, 결과 순서가 파일명 문자열 정렬이 아닌 원문의 논리적 순서와 일치하는지 확인한다(quickstart.md 1단계 중첩 구조 부분).

### Tests for User Story 2

- [x] T016 [P] [US2] `backend/tests/integration/parseRoadmaps.nestedTracks.test.ts`에 트랙 3개(Phase 2~4개씩)를 가진 픽스처로 트랙·Phase·항목 누락이 0건이고, 순서가 픽스처의 명시적 순서 매니페스트와 일치하는지(문자열 정렬 결과와는 다르게) 검증하는 통합 테스트 작성

### Implementation for User Story 2

- [x] T017 [US2] `parseRoadmaps.ts`를 확장해 하위에 Phase 파일을 담은 트랙 서브디렉터리를 감지하도록 구현 — 트랙·Phase의 `orderIndex`는 파일명 문자열 정렬이 아니라 명시적 순서 소스(디렉터리 내 순번·README 순서 등)에서 보존한다(FR-001, FR-002) — depends on T012
- [x] T018 [US2] `runImport.ts`의 집계 로직을 갱신해 Track → Phase → Item 계층을 따라 완료/전체 수치를 누적하도록 구현(SC-002) — depends on T017, T014

**Checkpoint**: US1+US2 — quickstart.md 1단계(중첩 구조 포함) 전체 통과

---

## Phase 5: User Story 3 - 강의 자료 색인 (Priority: P2)

**Goal**: `courses/`의 자료 7,865개를 식별자·제목·경로·분류(및 추론 가능한 제공처·강좌)로 직접 조회 가능한 색인으로 만들고, 로드맵의 학습 항목이 가리키는 자료 연결을 실제로 해석해 깨진 링크를 보고한다.

**Independent Test**: 색인에 포함된 자료 수가 원본 파일 수와 정확히 일치하고, 한글·공백·URL 인코딩이 섞인 경로 100건을 조회했을 때 오류가 0건이며, 존재하는/존재하지 않는 자료 참조가 각각 정확히 연결/보고되는지 확인한다(quickstart.md 3단계).

### Tests for User Story 3

- [x] T019 [P] [US3] `backend/tests/integration/parseMaterials.count.test.ts`에 `courses/` 서브셋 픽스처를 파싱해 반환된 자료 수가 픽스처 파일 수와 정확히 같은지 검증하는 통합 테스트 작성
- [x] T020 [P] [US3] `backend/tests/unit/materialIndex.test.ts`에 한글·공백·URL 인코딩이 섞인 경로를 가진 픽스처로 `MaterialIndex.byPath`/`byId`/`search`(제공처·강좌 조건 포함)가 전체 목록 스캔 없이(모킹으로 검증) 오류 없이 해석되는지 검증하는 단위 테스트 작성
- [x] T021 [P] [US3] `backend/tests/integration/resolveMaterialLinks.test.ts`에 유효한 자료를 가리키는 학습 항목과 존재하지 않는 자료를 가리키는 학습 항목이 섞인 픽스처로 — 유효한 참조는 `linkedMaterialId`가 채워지고 해당 `Material.linkedRoadmapIds`에 중복 없이 반영되며, 존재하지 않는 참조는 `linkedMaterialId=null` + `ImportError(kind="link_broken")`로 보고되는지 검증하는 통합 테스트 작성(FR-013, FR-014, spec.md US3 Acceptance Scenario 3)

### Implementation for User Story 3

- [x] T022 [P] [US3] `backend/src/ingestion/parseMaterials.ts`에 `courses/` 재귀 파싱 구현 — 상대 경로·공백·한글·URL 인코딩·중첩 디렉터리·앵커를 원문 그대로 보존하며(FR-009), 최상위 폴더로부터 분류(`articles`/`deeplearning-ai`/`mooc`/`udemy`/`youtube`/그 외)를 추론하고, 경로 구조에서 추론 가능한 경우 `provider`/`course`도 채운다(추론 불가하면 null, FR-007). 식별자는 `resolveIdentity`(경로 우선, 해시 재확인)로 부여하고, **`status: "updated"`가 돌아오면 이 함수가 직접 그 자료의 버전 이력에 새 `MaterialVersion`을 추가한다**(FR-012, contracts/ingestion-library.md — 호출자 책임) — depends on T008, T009
- [x] T023 [US3] `backend/src/ingestion/materialIndex.ts`에 `MaterialIndex` 구현 — `parseMaterials` 결과로 한 번만 맵을 구성해 `byId`/`byPath`/`search`(제공처·강좌 조건 포함)가 매 호출마다 전체 목록을 순차 비교하지 않도록 한다(FR-008) — depends on T022
- [x] T024 [US3] `backend/src/ingestion/resolveMaterialLinks.ts`에 `resolveMaterialLinks` 구현(contracts/ingestion-library.md) — `parseRoadmaps`/`parseMaterials` 결과의 학습 항목 원문에서 자료 참조를 찾아 `MaterialIndex.byPath`로 해석하고, 성공하면 `LearningItem.linkedMaterialId`를 채우고 해당 `Material.linkedRoadmapIds`에 로드맵 ID를 중복 없이 추가한다. 해석에 실패하면 `linkedMaterialId=null` + `ImportError(kind="link_broken")`로 보고하고 나머지 항목 처리는 계속한다(FR-013, FR-014) — depends on T012, T017, T023
- [x] T025 [US3] `runImport.ts`·`cli.ts`에 `parseMaterials` + `MaterialIndex` + `resolveMaterialLinks`를 연결하고 `--materials-only` 플래그를 추가(quickstart.md 3단계) — depends on T023, T024, T014

**Checkpoint**: US1+US2+US3 — quickstart.md 1~3단계 전체 통과, 학습 항목-자료 연결과 깨진 링크 보고까지 검증됨

---

## Phase 6: User Story 4 - 예시 데이터와 실제 기록 분리 (Priority: P2)

**Goal**: 사용자가 선택한 범위(`real`/`example`)에 따라 예시 데이터가 실제 기록 결과에 섞이지 않게 한다.

**Independent Test**: 예시 데이터와 실제 기록이 함께 있는 저장소에서 `scope: "real"`로 가져오면 `metrics.exampleItemCount === 0`인지, `scope: "example"`로 가져오면 예시 항목이 실제 진도와 분리돼 나오는지 확인한다(quickstart.md 4단계).

### Tests for User Story 4

- [x] T026 [P] [US4] `backend/tests/integration/runImport.scopeSeparation.test.ts`에 예시·실제 항목이 섞인 픽스처로 `scope: "real"` 실행 시 `metrics.exampleItemCount === 0`이고 예시 항목의 `sourcePath`가 `mappings`에 전혀 나타나지 않는지 검증하는 통합 테스트 작성

### Implementation for User Story 4

- [x] T027 [US4] `backend/src/ingestion/exampleSeparation.ts`에 예시/실제 분류 구현 — `사용과개선.md`에 명시된 표시를 근거로 판별하고, 명확히 표시되지 않은 항목은 실제 기록으로 간주한다(spec.md Assumptions) — depends on T006
- [x] T028 [US4] `runImport.ts`에 `options.scope` 처리를 연결 — `scope: "real"`이면 예시로 분류된 항목을 매핑·집계에서 제외하고, `scope: "example"`이면 실제 기록 결과와 분리된 별도 결과 집합으로 산출한다(FR-011) — depends on T027, T014, T018, T025
- [x] T029 [US4] `cli.ts`에 `--scope` 플래그 추가(quickstart.md 4단계) — depends on T028

**Checkpoint**: 4개 사용자 스토리 모두 독립적으로 동작 — quickstart.md 1~4단계 전체 통과

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: 여러 스토리에 걸친 검증과 계약 정합성 확인

- [x] T030 [P] 실제 저장소(`study-progress/`, `courses/`) 전체를 대상으로 quickstart.md 1~5단계를 실행하고 SC-001~006 결과를 기록. 전체 실행 시간도 관찰값으로 함께 기록한다(plan.md Performance Goals가 수치 목표 없이 "합리적 시간"으로 유보돼 있음 — 이 관찰치가 향후 목표 설정의 기준이 된다)
- [x] T031 spec.md Edge Cases(날짜 오류, 체크박스 해석 불가, 정규화 충돌, 코드 블록 예시, 로드맵 간 독립적 완료 상태, 재가져오기 매핑 실패, 깨진 자료 링크, Phase 문서 없음)를 실제 `ImportError`/`Roadmap.hasPhaseDocs` 출력과 대조해 모두 구현대로 동작하는지 확인
- [x] T032 [P] `backend/tests/unit/contractConformance.test.ts`에 `contracts/ingestion-library.md`에 정의한 함수 시그니처(`parseRoadmaps`, `parseMaterials`, `MaterialIndex`, `resolveIdentity`, `resolveMaterialLinks`, `runImport`)와 실제 구현이 일치하는지 검증하는 테스트 작성
- [x] T033 헌법 원칙 VI(메인 에이전트 품질 검수) 통과 확인 후, 원칙 VII에 따라 루트 `개발결과.md`에 이 기능의 결과(날짜, 기능명, 변경 파일, 검증 방법과 결과, 담당 서브에이전트)를 기록 — 메인 에이전트가 직접 수행, 서브에이전트에 위임하지 않음

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: 의존성 없음 — 즉시 시작
- **Foundational (Phase 2)**: Setup 완료 후 — 모든 사용자 스토리를 막는다. 이 단계 자체도 테스트(T004, T005)를 먼저 작성해 실패를 확인한 뒤 구현(T007, T008)한다
- **User Stories (Phase 3~6)**: 모두 Foundational 완료에 의존
  - US1(Phase 3)은 다른 스토리에 의존하지 않는다
  - US2(Phase 4)는 US1의 `parseRoadmaps.ts`/`runImport.ts` 파일을 확장하므로 US1 구현 작업(T012, T014) 완료 후 시작
  - US3(Phase 5)의 자료 색인 부분(T022, T023)은 US1/US2와 독립적으로 병렬 가능하지만, 링크 해석(T024)은 US1·US2의 학습 항목 파싱(T012, T017)이 끝나야 시작할 수 있다
  - US4(Phase 6)는 US1·US2·US3의 `runImport.ts` 변경(T014, T018, T025)이 모두 끝난 뒤 그 위에 scope 필터를 얹으므로 마지막에 온다
- **Polish (Phase 7)**: 수행하고자 하는 모든 사용자 스토리 완료 후

### Parallel Opportunities

- Setup의 [P] 작업(T003)은 T001·T002와 병렬 가능한 부분만 병렬
- Foundational의 T004, T005(테스트)는 서로 다른 파일이라 병렬 가능. T006은 독립적으로 병렬 가능. T007은 T004에, T008은 T005에 의존해 순차
- US1과 US3 자료 색인 부분의 테스트 작업(T010, T011, T019, T020)은 서로 다른 파일이라 병렬 가능. T021(링크 해석 테스트)은 T012/T017 구현이 끝나야 픽스처를 완성할 수 있어 늦게 시작
- US3의 자료 색인 구현(T022, T023)은 US1/US2 구현과 파일이 겹치지 않아 병렬 진행 가능 — 다만 T024(링크 해석)는 T012·T017·T023이 모두 끝난 뒤에만 시작할 수 있고, US4가 시작되려면 US1·US2·US3의 `runImport.ts` 변경이 모두 끝나야 한다

---

## Parallel Example: User Story 1 + User Story 3(자료 색인) 동시 진행

```bash
# Foundational 완료 후, US1과 US3 테스트를 동시에 작성:
Task: "backend/tests/integration/parseRoadmaps.basic.test.ts 작성 (T010)"
Task: "backend/tests/integration/parseMaterials.count.test.ts 작성 (T019)"

# US1과 US3 자료 색인 구현도 대부분 다른 파일이라 동시 진행 가능:
Task: "backend/src/ingestion/parseRoadmaps.ts 구현 (T012)"
Task: "backend/src/ingestion/parseMaterials.ts 구현 (T022)"

# 단, 링크 해석(T024)은 위 둘이 끝난 뒤에만 시작한다.
```

---

## Implementation Strategy

### MVP 먼저 (User Story 1만)

1. Phase 1: Setup 완료
2. Phase 2: Foundational 완료 (필수 — 모든 스토리를 막음, 공유 로직 단위 테스트 포함)
3. Phase 3: User Story 1 완료
4. **중단하고 검증**: quickstart.md 1~2단계(트랙 없는 로드맵 기준)로 US1을 독립적으로 확인
5. 이 시점에서 이미 "원본과 진도가 100% 일치하는 가져오기"라는 이 기능의 핵심 가치가 검증됨

### 점진적 전달

1. Setup + Foundational 완료 → 기반 준비(공유 로직 단위 테스트 포함)
2. US1 추가 → 독립 검증(MVP) → 트랙 없는 로드맵의 정확한 가져오기 확보
3. US2 추가 → 독립 검증 → 중첩 트랙 구조까지 확장
4. US3 추가 → 독립 검증 → 자료 색인 + 학습 항목-자료 연결·깨진 링크 보고까지 확장(자료 색인 부분은 US1/US2와 병렬 진행 가능)
5. US4 추가 → 독립 검증 → 예시/실제 분리로 마무리
6. Phase 7 Polish → 실제 저장소 전체 대상 quickstart.md 검증 + 계약 정합성 확인 + 원칙 VI/VII 마감

---

## Notes

- [P] 작업 = 다른 파일, 의존성 없음
- [Story] 라벨은 작업을 특정 사용자 스토리에 매핑한다(추적용). Foundational·Setup·Polish는 라벨 없음
- 각 사용자 스토리는 독립적으로 완료·검증 가능해야 한다
- 구현 전에 테스트가 실패하는지 확인한다(T004/T005/T010/T011/T016/T019/T020/T021/T026)
- 논리적 작업 단위마다 커밋한다
- 어떤 체크포인트에서든 멈춰서 해당 스토리를 독립적으로 검증할 수 있다
- 이 기능은 영속 저장소·API를 만들지 않는다(FR-016) — 그런 작업은 이 tasks.md에 없다, 3단계 계획에서 다룬다
