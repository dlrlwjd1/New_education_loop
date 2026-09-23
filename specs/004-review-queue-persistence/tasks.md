---

description: "Task list template for feature implementation"
---

# Tasks: 복습큐 자료 이전·영속화

**Input**: Design documents from `/specs/004-review-queue-persistence/`

**Prerequisites**: [plan.md](plan.md), [spec.md](spec.md), [research.md](research.md), [data-model.md](data-model.md), [contracts/review-queue-library.md](contracts/review-queue-library.md), [quickstart.md](quickstart.md)

**Tests**: 헌법 원칙 IV(QA)가 이 저장소의 모든 기능에 구현과 분리된 QA 검증을 요구하므로, 각 사용자 스토리 및 공유 Foundational 모듈에 회귀 테스트 작업을 포함한다(001·002·003과 동일한 패턴).

**Organization**: 작업은 spec.md의 사용자 스토리(US1~US3)별로 그룹화한다.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: 병렬 가능(다른 파일, 미완료 작업에 의존하지 않음)
- **[Story]**: 이 작업이 속한 사용자 스토리(US1~US3)
- 모든 작업에 정확한 파일 경로를 포함한다

## Path Conventions

plan.md의 Project Structure를 따른다 — 신규 파싱 모듈은 `backend/src/reviewQueue/`, 영속화 확장은 기존 `backend/src/persistence/`(002·003이 이미 만든 파일들을 additive 확장), 테스트는 `backend/tests/`. `backend/src/ingestion/`(001)·`backend/src/web/`(003)은 변경하지 않는다. 이 기능은 UI가 없으므로 `frontend/`는 만들지 않는다.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: 004가 쓸 새 하위 디렉터리 구성. 신규 npm 의존성은 없다(research.md §1, §4 — `unified`/`remark-gfm`/`node:sqlite` 모두 001·002가 이미 도입).

- [X] T001 `backend/src/reviewQueue/`, `backend/tests/fixtures/review-queue/` 디렉터리 생성 — plan.md Project Structure대로

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: 세 사용자 스토리가 공유하는 타입·식별자·날짜 파싱·스키마·픽스처. 이 단계가 끝나기 전에는 어떤 사용자 스토리도 시작하지 않는다.

**⚠️ CRITICAL**: 이 단계 완료 전 사용자 스토리 작업 시작 금지

### Tests for Foundational

- [X] T002 [P] `backend/tests/unit/reviewQueue.dateParse.test.ts`에 `parseStrictIsoDate()`가 유효한 `YYYY-MM-DD` 값은 통과시키고, 다른 구분자·자연어·빈 문자열·존재하지 않는 달력 날짜(예: `2026-02-30`)는 실패로 처리하는지 검증하는 단위 테스트 작성(research.md §3)
- [X] T003 [P] `backend/tests/unit/reviewQueue.identity.test.ts`에 `computeReviewItemId()`가 (a) 같은 item/topic/firstWrongDate 입력에 항상 같은 id를 반환하고(결정적), (b) item·topic이 같아도 firstWrongDate가 다르면 다른 id를 반환하는지(같은 개념의 재발을 별개 항목으로 유지 — spec.md Edge Case) 검증하는 단위 테스트 작성(research.md §2)
- [X] T004 [P] `backend/tests/unit/schema.reviewQueue.test.ts`에 `review_queue_items`/`mastered_items`/`review_import_errors` 테이블이 생성되고, 앞의 두 테이블은 `id`에 `PRIMARY KEY` 제약이 걸려 있으며, `PRAGMA user_version`이 2인지 검증하는 단위 테스트 작성(data-model.md)

### Implementation for Foundational

- [X] T005 [P] `backend/src/reviewQueue/types.ts`에 `ActiveReviewItem`/`MasteredItem`/`ReviewImportError` 타입을 data-model.md의 필드 표대로 정의
- [X] T006 [P] `backend/src/reviewQueue/dateParse.ts`에 `parseStrictIsoDate(value: string)`을 구현 — `YYYY-MM-DD` 정규식과 실제 달력 유효성만 통과시키고, 그 외는 실패 사유를 담아 반환(research.md §3) — depends on T002
- [X] T007 [P] `backend/src/reviewQueue/identity.ts`에 `computeReviewItemId(item, topic, firstWrongDate)`를 구현 — Unicode NFC 정규화·앞뒤 공백 제거 후 `sha256(item + "\0" + topic + "\0" + firstWrongDate)`(research.md §2) — depends on T003
- [X] T008 `backend/src/persistence/schema.ts`에 data-model.md의 `review_queue_items`/`mastered_items`/`review_import_errors` DDL을 그대로 추가하고 `SCHEMA_VERSION`을 1에서 2로 상향 — depends on T004, T005
- [X] T009 [P] `backend/tests/fixtures/review-queue/`에 `normal.md`(연체·오늘·내일 다음 복습일이 섞인 활성 행 5개 이상, 마스터 완료 표 없음), `with-errors.md`(정상 활성 행 4개 + 다음 복습일 형식이 깨진 행 1개), `empty.md`(헤딩만 있고 표 없음), `mastered-only.md`(마스터 완료 표만 존재), `mixed.md`(활성 행 3개 + 마스터 완료 행 2개, 서로 다른 id) 5개 픽스처 파일 작성

**Checkpoint**: 재단 완료 — 사용자 스토리 구현 시작 가능

---

## Phase 3: User Story 1 - 오늘 복습할 항목을 연체 순으로 조회 (Priority: P1) 🎯 MVP

**Goal**: 활성 복습 큐를 파싱해 영속화하고, 다음 복습일이 오늘이거나 지난 항목을 연체 기간이 긴 순서로 반환하는 조회를 제공한다.

**Independent Test**: `normal.md` 픽스처로 적재한 뒤 `getReviewQueueStatus()`를 호출해 오늘·어제 항목만 연체 일수 내림차순으로 나오고 내일 항목은 빠지는지, 재적재해도 결과가 완전히 동일한지, 빈 파일로는 오류 없이 빈 결과가 나오는지 확인한다(quickstart.md 시나리오 1·2·5).

### Tests for User Story 1

- [X] T010 [P] [US1] `backend/tests/unit/reviewQueue.parseReviewQueue.test.ts`에 `parseReviewQueue()`가 `normal.md` 픽스처의 모든 행을 `item`/`topic`/`firstWrongDate`/`stageLabel`/`nextReviewDate`가 정확한 `activeItems`로 반환하고 `masteredItems`/`errors`는 빈 배열인지 검증하는 단위 테스트 작성
- [X] T011 [P] [US1] `backend/tests/integration/persistence.reviewQueue.reload.test.ts`에 `normal.md`를 원본으로 `reload()` 실행 후 `getReviewQueueStatus(referenceDate)`가 `nextReviewDate <= referenceDate`인 항목만, 연체 일수 내림차순으로, `totalActiveCount`는 픽스처 전체 행 수와 일치하게 반환하는지 검증하는 통합 테스트 작성(SC-001)
- [X] T012 [P] [US1] 같은 파일에 `normal.md`로 `reload()`를 두 번 연속 실행해도 `getReviewQueueStatus()` 결과가 완전히 동일하고 `review_queue_items` 행 수가 늘지 않는지 검증하는 테스트 추가(SC-002)
- [X] T013 [P] [US1] 같은 파일에 `empty.md`로 `reload()`를 실행하면 `getReviewQueueStatus()`가 예외 없이 `{ totalActiveCount: 0, dueItems: [] }`를 반환하는지 검증하는 테스트 추가(SC-005, FR-014)

### Implementation for User Story 1

- [X] T014 [US1] `backend/src/reviewQueue/parseReviewQueue.ts`에 활성 큐 표 파싱을 구현 — `unified`/`remark-parse`/`remark-gfm`으로 AST를 만들고, "복습큐" 최상위 헤딩 아래(그리고 "## 마스터 완료" 헤딩 이전)에 있는 GFM 표를 찾아 항목/주제/처음 틀린 날/다음 복습일/상태 칼럼을 `ActiveReviewItem`으로 매핑(T006·T007 헬퍼 사용). "## 마스터 완료" 헤딩이 없거나 그 처리는 아직 하지 않아 `masteredItems`는 빈 배열로 둔다(US3에서 완성) — depends on T005, T006, T007, T010
- [X] T015 [US1] `backend/src/persistence/load.ts`를 확장해, 002의 기존 원자적 재적재 패스 안에서 `내학습/복습큐.md`를 읽고(파일이 없으면 빈 문자열로 취급, FR-014) `parseReviewQueue()`를 호출해 `activeItems`를 새 임시 SQLite 파일의 `review_queue_items`에 적재 — depends on T008, T014
- [X] T016 [US1] `backend/src/persistence/queries.ts`에 `getReviewQueueStatus(referenceDate?, dbPath?)`를 contracts/review-queue-library.md대로 구현 — `next_review_date <= referenceDate`인 행을 조회해 `overdueDays`를 계산하고 내림차순 정렬해 `{ totalActiveCount, dueItems }`로 반환 — depends on T015

**Checkpoint**: US1 단독으로 quickstart.md 시나리오 1·2·5 통과(MVP)

---

## Phase 4: User Story 2 - 형식이 깨진 항목을 놓치지 않고 분리 (Priority: P2)

**Goal**: 날짜 형식이 깨진 행이 있어도 그 행만 "형식 확인 필요"로 분리하고, 나머지 정상 행 처리와 오류 목록 조회를 모두 제공한다.

**Independent Test**: `with-errors.md` 픽스처로 적재한 뒤, 정상 행 4개는 `getReviewQueueStatus()`에 정상 반영되고 깨진 행 1개는 `listReviewQueueImportErrors()`에서만 확인되는지, 그 오류 때문에 적재 전체가 실패하지 않는지 확인한다(quickstart.md 시나리오 3).

### Tests for User Story 2

- [X] T017 [P] [US2] `backend/tests/unit/reviewQueue.parseReviewQueue.test.ts`(기존 파일 확장)에 `with-errors.md` 픽스처로 정상 행 4개는 `activeItems`에, 깨진 행 1개는 `errors`에 `kind: "date_unparseable"`과 원본 행 텍스트(`rawRow`)를 담아 반환하는지 검증하는 테스트 추가
- [X] T018 [P] [US2] `backend/tests/integration/persistence.reviewQueue.errors.test.ts`에 `with-errors.md`로 `reload()` 실행 후 `getReviewQueueStatus().totalActiveCount`에는 깨진 행이 포함되지 않고, `listReviewQueueImportErrors()`에는 정확히 1건이 `kind: "date_unparseable"`과 사람이 읽을 수 있는 `detail`로 확인되는지 검증하는 통합 테스트 작성(SC-004)

### Implementation for User Story 2

- [X] T019 [US2] `backend/src/reviewQueue/parseReviewQueue.ts`를 확장해, T006의 `parseStrictIsoDate()` 실패나 항목/주제 칸이 빈 행을 조용히 버리지 않고 `ReviewImportError`(날짜 실패는 `kind: "date_unparseable"`, 빈 칸은 `kind: "row_incomplete"`)로 라우팅 — depends on T014, T017
- [X] T020 [US2] `backend/src/persistence/load.ts`를 확장해 `parseReviewQueue()`가 반환한 `errors`를 T015와 같은 원자적 재적재 패스 안에서 `review_import_errors`에 적재 — depends on T015, T019
- [X] T021 [US2] `backend/src/persistence/queries.ts`에 `listReviewQueueImportErrors(dbPath?)`를 contracts/review-queue-library.md대로 구현 — depends on T020

**Checkpoint**: US1+US2 — quickstart.md 시나리오 1~3 통과

---

## Phase 5: User Story 3 - 마스터 완료 항목을 활성 큐와 분리해 보관 (Priority: P3)

**Goal**: "## 마스터 완료" 표의 항목을 별도로 파싱·영속화·조회하고, 활성 복습 대상 조회에는 절대 섞이지 않게 한다.

**Independent Test**: `mixed.md` 픽스처로 적재한 뒤 `getReviewQueueStatus().dueItems`와 `listMasteredItems()`의 id가 하나도 겹치지 않는지, 마스터 완료 항목의 필드(개념명·주제·최초 오답일·마스터한 날)가 정확한지 확인한다(quickstart.md 시나리오 4).

### Tests for User Story 3

- [X] T022 [P] [US3] `backend/tests/unit/reviewQueue.parseReviewQueue.test.ts`(기존 파일 확장)에 `mastered-only.md`·`mixed.md` 픽스처로 "## 마스터 완료" 표의 각 행이 `item`/`topic`/`firstWrongDate`/`masteredDate`를 갖춘 `MasteredItem`으로 정확히 추출되고, `mixed.md`에서는 `activeItems`와 `masteredItems`의 id가 서로 겹치지 않는지 검증하는 테스트 추가
- [X] T023 [P] [US3] `backend/tests/integration/persistence.reviewQueue.mastered.test.ts`에 `mixed.md`로 `reload()` 실행 후 `getReviewQueueStatus().dueItems`와 `listMasteredItems()`가 id를 하나도 공유하지 않고, `listMasteredItems()`가 픽스처의 마스터 완료 행과 정확히 일치하는지 검증하는 통합 테스트 작성(SC-003)

### Implementation for User Story 3

- [X] T024 [US3] `backend/src/reviewQueue/parseReviewQueue.ts`를 확장해 "## 마스터 완료" 헤딩 아래의 GFM 표를 찾아 항목/주제/처음 틀린 날/마스터한 날 칼럼을 `MasteredItem`으로 매핑(T007의 동일한 identity 함수를 item+topic+firstWrongDate 키로 재사용) — depends on T014, T022
- [X] T025 [US3] `backend/src/persistence/load.ts`를 확장해 `parseReviewQueue()`가 반환한 `masteredItems`를 T015와 같은 원자적 재적재 패스 안에서 `mastered_items`에 적재 — depends on T015, T024
- [X] T026 [US3] `backend/src/persistence/queries.ts`에 `listMasteredItems(dbPath?)`를 contracts/review-queue-library.md대로 구현 — depends on T025

**Checkpoint**: 세 사용자 스토리 모두 독립적으로 동작 — quickstart.md 시나리오 1~4 전체 통과

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: 여러 스토리에 걸친 검증과 계약 정합성 확인

- [X] T027 [P] `npx vitest run`으로 기존 181개(001: 65, 002: 64, 003: 52) 테스트 전부와 이 기능의 신규 테스트가 함께 회귀 없이 통과하는지 확인하고 전/후 개수를 기록 — 메인 에이전트가 직접 재실행해 확인: 41 test files / 219 tests 전부 통과(기존 181 + 신규 38)
- [X] T028 [P] `npx tsc --noEmit`, `npx eslint src` 클린 확인 — 메인 에이전트가 직접 재실행해 확인: 둘 다 클린(0 오류)
- [X] T029 실제 저장소의 `내학습/복습큐.md`를 대상으로 quickstart.md 시나리오 1~5를 직접 실행하고 실제 출력값을 기록(002의 T030과 동일한 "메인 에이전트가 직접 재실행해 확인" 절차) — 메인 에이전트가 직접 실행: `reload()` 결과 `roadmapCount=9, materialCount=7865, errorCount=0`; `getReviewQueueStatus('2026-09-23')` → `totalActiveCount=10`, `dueItems` 9건이 연체 일수 내림차순(5,5,5,4,4,0,0,0,0)으로 정확히 반환되고 내일(9-25) 예정인 NAT 항목 1건만 제외됨; `listMasteredItems()`/`listReviewQueueImportErrors()` 둘 다 `[]`(실제 파일에 마스터 완료·오류 항목이 없음과 일치)
- [X] T030 [P] `backend/tests/unit/contractConformance.reviewQueue.test.ts`에 contracts/review-queue-library.md가 정의한 네 함수(`parseReviewQueue`, `getReviewQueueStatus`, `listMasteredItems`, `listReviewQueueImportErrors`)의 시그니처와 실제 구현이 일치하는지 검증하는 테스트 작성(001·002의 `contractConformance.test.ts`와 동일 패턴)
- [X] T031 spec.md Edge Cases(파일 자체가 없음, 두 표 모두 비어 있음, 같은 개념·주제 중복 자동 병합 안 함, 다음 복습일·처음 틀린 날 형식 오류 분리, 재적재 시 활성→마스터 완료 이동 반영, 파일이 최신이면 파일 우선) 전부를 실제 코드·테스트 결과와 대조해 구현대로 동작함을 확인 — QA 테스트가 다루지 않은 두 가지(① 원본 파일이 아예 없는 경우, ② 같은 항목이 재적재 사이에 활성→마스터 완료로 이동하는 경우)는 메인 에이전트가 격리된 임시 디렉터리로 직접 재현: ①은 오류 없이 `{totalActiveCount:0, dueItems:[]}`, ②는 첫 번째 `reload()` 후 활성 조회에 있던 항목이 파일을 마스터 완료 표로 고친 뒤 두 번째 `reload()`에서는 `listMasteredItems()`에서만 나타나고 활성 조회에서는 사라지며 id는 그대로 유지됨을 확인. 나머지 항목은 QA의 유닛·통합 테스트(T010/T017/T018/T022/T023)로 이미 커버됨
- [X] T032 헌법 원칙 VI(메인 에이전트 품질 검수) 통과 확인 후, 원칙 VII에 따라 루트 `개발결과.md`에 이 기능의 결과(날짜, 기능명, 변경 파일, 검증 방법과 결과, 담당 서브에이전트)를 기록 — 메인 에이전트가 직접 수행, 서브에이전트에 위임하지 않음

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: 의존성 없음 — 즉시 시작
- **Foundational (Phase 2)**: Setup 완료 후 — 모든 사용자 스토리를 막는다. 테스트(T002~T004)를 먼저 작성해 실패를 확인한 뒤 구현(T005~T008)한다
- **User Stories (Phase 3~5)**: 모두 Foundational 완료에 의존
  - US1(Phase 3)은 다른 스토리에 의존하지 않는다
  - US2(Phase 4)는 US1이 만든 `parseReviewQueue()`/`load.ts`(T014, T015)를 확장하므로 US1 완료 후 시작
  - US3(Phase 5)는 US1이 만든 같은 `parseReviewQueue()`/`load.ts`를 확장하므로 US1 완료 후 시작 — US2와는 서로 다른 부분(오류 처리 vs 마스터 완료 표)을 건드려 US2와 병렬 진행 가능
- **Polish (Phase 6)**: 세 사용자 스토리 완료 후

### User Story Dependencies

- **User Story 1 (P1)**: Foundational 완료 후 시작 가능 — 다른 스토리에 의존하지 않음
- **User Story 2 (P2)**: US1의 `parseReviewQueue()`/`load.ts` 완료 후 시작 — 같은 파일을 확장하지만 US3와 다른 부분(오류 라우팅)이라 US3와 병렬 가능
- **User Story 3 (P3)**: US1의 `parseReviewQueue()`/`load.ts` 완료 후 시작 — 같은 파일을 확장하지만 US2와 다른 부분(마스터 완료 표)이라 US2와 병렬 가능

### Within Each User Story

- 테스트를 먼저 작성해 실패를 확인한 뒤 구현한다
- `reviewQueue/parseReviewQueue.ts`(파싱) → `persistence/load.ts`(적재) → `persistence/queries.ts`(조회) 순서로 구현한다 — 데이터가 있어야 조회를 검증할 수 있다

### Parallel Opportunities

- Foundational의 T002~T004(테스트)는 서로 다른 파일이라 병렬 가능. T005~T007(구현)도 서로 다른 파일이라 병렬 가능. T009(픽스처)는 독립적으로 병렬 가능
- US1의 테스트(T010~T013)는 병렬 가능
- US2와 US3는 Foundational + US1 완료 후 서로 다른 파일 영역(오류 라우팅 vs 마스터 완료 파싱)을 건드리므로 병렬 진행 가능 — 단 둘 다 `parseReviewQueue.ts`/`load.ts`를 같은 파일 안에서 확장하므로 실제 코드 병합 시 충돌 가능성에 유의(각자 다른 함수/분기를 건드리도록 계약이 이미 분리돼 있음)

---

## Parallel Example: User Story 2 + User Story 3 동시 진행

```bash
# US1 완료 후, US2와 US3를 동시에 준비:
Task: "backend/tests/integration/persistence.reviewQueue.errors.test.ts 작성 (T018)"
Task: "backend/tests/integration/persistence.reviewQueue.mastered.test.ts 작성 (T023)"

# 구현도 서로 다른 관심사(오류 라우팅 vs 마스터 완료 파싱)라 병행 가능:
Task: "parseReviewQueue.ts에 오류 라우팅 추가 (T019)"
Task: "parseReviewQueue.ts에 마스터 완료 표 파싱 추가 (T024)"
```

---

## Implementation Strategy

### MVP 먼저 (User Story 1만)

1. Phase 1: Setup 완료
2. Phase 2: Foundational 완료 (필수 — 모든 스토리를 막음, 타입·식별자·날짜 파싱·스키마·픽스처 포함)
3. Phase 3: User Story 1 완료
4. **중단하고 검증**: quickstart.md 시나리오 1·2·5로 US1을 독립적으로 확인
5. 이 시점에서 이미 005-briefing이 의존할 핵심 조회(`getReviewQueueStatus`)가 완성됨

### 점진적 전달

1. Setup + Foundational 완료 → 기반 준비
2. US1 추가 → 독립 검증(MVP) → 오늘 복습 대상 조회 확보
3. US2 추가 → 독립 검증 → 형식 오류가 있어도 나머지가 안전하게 조회됨을 확보
4. US3 추가 → 독립 검증(US2와 병렬 가능) → 마스터 완료 항목이 활성 조회에 섞이지 않음을 확보
5. Phase 6 Polish → 실제 저장소 전체 대상 quickstart.md 검증 + 계약 정합성 확인 + 원칙 VI/VII 마감

### Parallel Team Strategy

여러 명이 동시에 작업한다면: Foundational 완료 후 한 명이 US1을 먼저 끝내고, 그 위에서 다른 두 명이 US2(오류 처리)와 US3(마스터 완료)를 동시에 맡는 분담이 자연스럽다.

---

## Notes

- [P] 작업 = 다른 파일, 의존성 없음
- [Story] 라벨은 작업을 특정 사용자 스토리에 매핑한다(추적용). Foundational·Setup·Polish는 라벨 없음
- 각 사용자 스토리는 독립적으로 완료·검증 가능해야 한다
- 구현 전에 테스트가 실패하는지 확인한다(T002~T004, T010~T013, T017~T018, T022~T023)
- 논리적 작업 단위마다 커밋한다
- 어떤 체크포인트에서든 멈춰서 해당 스토리를 독립적으로 검증할 수 있다
- 이 기능은 화면(UI)이나 HTTP API를 만들지 않는다(spec.md Assumptions) — 그런 작업은 이 tasks.md에 없다, 005-briefing 이후 별도 기능에서 다룬다
