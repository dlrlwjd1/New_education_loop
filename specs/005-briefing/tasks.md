---

description: "Task list template for feature implementation"
---

# Tasks: 브리핑 — 오늘의 학습 현황 한눈에 보기

**Input**: Design documents from `/specs/005-briefing/`

**Prerequisites**: [plan.md](plan.md), [spec.md](spec.md), [research.md](research.md), [data-model.md](data-model.md), [contracts/briefing-library.md](contracts/briefing-library.md), [contracts/http-routes.md](contracts/http-routes.md), [quickstart.md](quickstart.md)

**Tests**: 헌법 원칙 IV(QA)가 구현과 분리된 QA 검증을 요구하므로, 각 사용자 스토리 및 공유 Foundational 모듈에 회귀 테스트 작업을 포함한다(001~004와 동일한 패턴). 이 기능은 003 이후 두 번째로 화면(UI)이 있는 기능이라, 원칙 I·IV에 따라 자동 테스트만으로는 완료로 보지 않고 실제 브라우저 확인(T031)을 별도로 둔다.

**Organization**: 작업은 spec.md의 사용자 스토리(US1~US3)별로 그룹화한다.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: 병렬 가능(다른 파일, 미완료 작업에 의존하지 않음)
- **[Story]**: 이 작업이 속한 사용자 스토리(US1~US3)
- 모든 작업에 정확한 파일 경로를 포함한다

## Path Conventions

plan.md의 Project Structure를 따른다 — 신규 서비스·영속화 모듈은 `backend/src/briefing/`(002·004와 물리적으로 분리된 전용 SQLite 파일), 화면은 003이 이미 만든 `backend/src/web/`에 additive 확장(`routes/briefing.ts`, `views/briefing.ts`, `views/briefingHistory.ts`). `backend/src/ingestion/`(001)·`backend/src/persistence/`(002·004)·`backend/src/reviewQueue/`(004)는 공개 함수만 호출하고 변경하지 않는다.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: 005가 쓸 새 디렉터리와, 파일 로그 append 테스트에 쓸 픽스처 구성. 신규 npm 의존성은 없다(003이 이미 도입한 express·002·004가 이미 도입한 node:sqlite 재사용).

- [ ] T001 `backend/src/briefing/`, `backend/tests/fixtures/briefing/` 디렉터리 생성. `backend/tests/fixtures/briefing/`에 현재 `내학습/브리핑로그.md`의 기존 3행(2026-09-16/18/22, 5열 요약 표)을 그대로 복사한 `legacy-log.md`를 만들어, T012의 "기존 행 보존" 테스트가 실제 파일을 건드리지 않고 격리된 사본으로 검증할 수 있게 한다

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: 세 사용자 스토리가 공유하는 타입·진행률 표시 규칙·전용 SQLite 스키마. 이 단계가 끝나기 전에는 어떤 사용자 스토리도 시작하지 않는다.

**⚠️ CRITICAL**: 이 단계 완료 전 사용자 스토리 작업 시작 금지

### Tests for Foundational

- [X] T002 [P] `backend/tests/unit/briefing.schema.test.ts`에 전용 파일에 `briefing_snapshots`/`briefing_snapshot_roadmaps`/`briefing_snapshot_review_items` 테이블이 생성되는지, 002·004의 `SCHEMA_VERSION` 방식과 달리 **버전 불일치를 삭제·재생성이 아니라 예외로 표면화**하는지(research.md §2) 검증하는 단위 테스트 작성
- [X] T003 [P] `backend/tests/unit/briefing.formatProgress.test.ts`에 `formatProgress()`가 FR-004/FR-005의 모든 경계(완료 0건 → "0% (미시작)", 소수 첫째 자리도 0.0 → "<0.1% (진행 중, N/M)", 반올림 100.0인데 미완료 존재 → "<100%", 그 외 소수 첫째 자리, `hasPhaseDocs=false` → "진행 자료 없음", `totalCount=0`(문서는 있음) → "형식 확인 필요")를 정확히 반환하는지 검증하는 단위 테스트 작성

### Implementation for Foundational

- [ ] T004 [P] `backend/src/briefing/types.ts`에 `RoadmapProgressStatus`/`RoadmapProgressView`/`DueReviewItemView`/`BriefingSnapshot` 타입을 data-model.md대로 정의
- [X] T005 [P] `backend/src/briefing/formatProgress.ts`에 `formatProgress(completedCount, totalCount, hasPhaseDocs)`를 contracts/briefing-library.md대로 구현 — depends on T003, T004
- [X] T006 `backend/src/briefing/schema.ts`에 data-model.md의 세 테이블 DDL과 이 기능 전용 `SCHEMA_VERSION` 상수를 구현 — depends on T002, T004
- [X] T007 `backend/src/briefing/db.ts`에 전용 파일(`내학습/briefing-history.sqlite`) 오픈 헬퍼를 구현 — 002·004의 `db.ts`와 달리 스키마 버전 불일치를 발견하면 삭제·재생성하지 않고 예외를 던져 사람이 확인하게 한다(research.md §2, data-model.md 검증 규칙) — depends on T006

**Checkpoint**: 재단 완료 — 사용자 스토리 구현 시작 가능

---

## Phase 3: User Story 1 - 전체 현황을 한 화면에서 확인 (Priority: P1) 🎯 MVP

**Goal**: 002(로드맵 진행률)·004(복습 대상)를 조합해 브리핑 화면을 만들고, 새로고침으로 기록이 중복 생성되지 않게 하며, 004 조회 실패 시에도 로드맵 진행률만이라도 보여준다.

**Independent Test**: `/briefing`을 열어 복습 우선순위와 로드맵별 진행률이 함께 나오는지, 새로고침해도 기록이 늘지 않는지, 004 캐시를 임시로 없앤 상태에서도 로드맵 진행률만 정상 표시되는지 확인한다(quickstart.md 시나리오 1, 엣지 케이스).

### Tests for User Story 1

- [X] T008 [P] [US1] `backend/tests/unit/briefing.buildSnapshot.test.ts`에 `buildSnapshot()`이 `scope:"all"`일 때 전체 로드맵을 포함하고, 평균 진행률을 `totalCount>0`인 로드맵만으로 계산하며(분모 0 제외), `dueReviewResult`가 `Error`이면 `{reviewDataUnavailable:true, roadmaps}`만 반환하는지(dueItems·평균 없음) 검증하는 단위 테스트 작성
- [X] T009 [P] [US1] `backend/tests/unit/briefing.store.test.ts`에 임시 파일 기준으로 `insertSnapshot`/`getSnapshotById`/`findLatestSnapshotForKey`/`listSnapshotsByDate`의 기본 동작(저장한 값 그대로 조회, 없는 키는 `null`/빈 배열)을 검증하는 단위 테스트 작성
- [X] T010 [P] [US1] `backend/tests/integration/briefing.service.test.ts`에 격리된 임시 002·004 캐시(또는 그 조회 함수를 가리키는 임시 dbPath)로 `generateBriefing({})` 정상 흐름을 실행해 반환된 스냅샷 내용이 002·004 데이터와 일치하는지, 같은 날짜·스코프로 다시 호출하면(`forceNew` 없이) 새 레코드가 생기지 않고 첫 결과의 `id`가 그대로 반환되는지(SC-004 일부) 검증하는 통합 테스트 작성
- [X] T011 [P] [US1] `backend/tests/integration/web.briefing.test.ts`에 `GET /briefing`이 200으로 로드맵 진행률과 복습 목록을 함께 반환하는지, 로드맵이 하나도 없거나 복습 대상이 없을 때 오류가 아닌 안내 문구가 나오는지, 미시작(0%) 로드맵이 4개를 넘으면 이름 목록으로 접히는지(FR-010) 검증하는 통합 테스트 작성
- [X] T012 [P] [US1] `backend/tests/integration/briefing.logFile.test.ts`에 T001의 `legacy-log.md` 사본을 대상으로 `appendSnapshot()` 실행 후 기존 3행이 글자 하나 안 바뀌고 그대로 남아 있으며, 그 아래 `## 상세 기록 (웹)` 섹션에 새 스냅샷 내용이 추가됐는지(research.md §7) 검증하는 통합 테스트 작성

### Implementation for User Story 1

- [X] T013 [US1] `backend/src/briefing/buildSnapshot.ts`에 `buildSnapshot()`을 contracts/briefing-library.md대로 구현 — `scope`가 `"all"`이 아니면 그 로드맵 하나로 필터링(US2까지 내다본 시그니처지만 이 태스크에서 함께 구현 — 필터링 로직 자체는 단순하여 US1/US2로 쪼개 두 번 작업하는 비용이 더 크다, 004의 `parseReviewQueue` 선례와 동일한 판단) — depends on T005, T008
- [X] T014 [US1] `backend/src/briefing/store.ts`에 `insertSnapshot`/`findLatestSnapshotForKey`/`getSnapshotById`/`listSnapshotsByDate`를 구현 — depends on T007, T009
- [X] T015 [US1] `backend/src/briefing/logFile.ts`에 `appendSnapshot()`을 구현 — `내학습/브리핑로그.md`가 없으면 헤더부터 새로 만들고, 있으면 기존 내용을 절대 덮어쓰지 않고 파일 끝에 이어 붙인다 — depends on T012
- [X] T016 [US1] `backend/src/briefing/service.ts`에 `generateBriefing()`을 구현 — `scope` 검증(002 `listRoadmaps()`로 존재 확인, FR-018) → `store.findLatestSnapshotForKey()` 조회(비-`forceNew`) → 004 `getReviewQueueStatus()` 호출을 try/catch로 분리(실패 시 `reviewDataUnavailable` 경로, research.md §4 — 이 경우 저장하지 않음) → `buildSnapshot()` → `store.insertSnapshot()` → `logFile.appendSnapshot()`. 파일 기록이 실패해도 예외를 던지지 않고 반환값에 표시만 한다(FR-021) — 재시도는 사용자가 "다시 실행"(US3)을 다시 누르는 것으로 충분하다고 판단해 별도 재시도 버튼은 만들지 않는다(이 판단 근거를 코드 주석에 남긴다) — depends on T013, T014, T015
- [X] T017 [US1] `backend/src/web/routes/briefing.ts`를 신설해 `GET /briefing`(스코프 기본값 `"all"`)을 구현 — depends on T016
- [X] T018 [US1] `backend/src/web/views/briefing.ts`를 신설해 로드맵 진행률 표, 복습 대상 목록, `reviewDataUnavailable`일 때의 열화 표시("복습 데이터를 불러올 수 없음")를 렌더링 — depends on T017
- [X] T019 [US1] `backend/src/web/server.ts`에 `briefing` 라우터를 등록 — depends on T017

**Checkpoint**: US1 단독으로 quickstart.md 시나리오 1과 004 실패 엣지 케이스 통과(MVP)

---

## Phase 4: User Story 2 - 특정 로드맵으로 좁혀 보기 (Priority: P2)

**Goal**: `roadmapId` 쿼리 파라미터로 진행률 표만 좁히고, 복습 목록은 항상 전체를 유지하며, 존재하지 않는 로드맵은 명확히 오류로 안내한다.

**Independent Test**: `/briefing?roadmapId=<유효한 id>`로 진행률 표는 하나만, 복습 목록은 전체가 나오는지, 존재하지 않는 id는 404가 나오는지 확인한다(quickstart.md 시나리오 2).

### Tests for User Story 2

- [X] T020 [P] [US2] `backend/tests/integration/web.briefing.test.ts`(기존 파일 확장)에 `GET /briefing?roadmapId=<유효 id>`가 진행률 표에는 그 로드맵만, 복습 목록에는 전체가 나오고 평균 진행률이 그 로드맵의 비율과 같아지는지(research.md §3), `GET /briefing?roadmapId=<존재하지 않는 id>`가 404를 반환하고 전체 결과로 대체되지 않는지(FR-018) 검증하는 테스트 추가

### Implementation for User Story 2

- [X] T021 [US2] `backend/src/web/routes/briefing.ts`를 확장해 `roadmapId` 쿼리 파라미터를 읽어 `generateBriefing({scope})`에 전달하고, `{error:"roadmap_not_found"}` 반환을 404 응답으로 매핑 — depends on T017, T020
- [X] T022 [US2] `backend/src/web/views/briefing.ts`를 확장해 스코프가 `"all"`이 아닐 때 "필터링됨: {로드맵 제목}" 같은 표시를 추가 — depends on T018, T021

**Checkpoint**: US1+US2 — quickstart.md 시나리오 1~2 통과

---

## Phase 5: User Story 3 - 지난 브리핑 기록 다시 보기 (Priority: P3)

**Goal**: 사용자가 명시적으로 "다시 실행"하면 항상 새 기록을 만들고, 과거 기록을 날짜별로 열람할 수 있으며, 과거 기록은 현재 값으로 재계산되지 않는다.

**Independent Test**: "다시 실행"을 눌러 새 기록이 하나 더 생기는지, 이후 진도를 바꿔도 그 과거 기록을 다시 열면 당시 값 그대로인지 확인한다(quickstart.md 시나리오 3).

### Tests for User Story 3

- [X] T023 [P] [US3] `backend/tests/integration/briefing.service.dedup.test.ts`에 `generateBriefing({forceNew:true})`는 같은 (날짜, 시간대, 스코프) 키에 기존 기록이 있어도 항상 새 레코드를 만들고, `forceNew` 없이 호출하면 기존 레코드를 재사용하는지(SC-004, Acceptance Scenario US3-2) 검증하는 통합 테스트 작성
- [X] T024 [P] [US3] `backend/tests/integration/web.briefing.history.test.ts`에 `POST /briefing/rerun`이 303으로 새로 만든 스냅샷의 `GET /briefing/history/:id`로 리다이렉트하는지, `GET /briefing/history`가 날짜 내림차순(같은 날짜 안에서는 생성 시각 내림차순)으로 목록을 반환하는지, `GET /briefing/history/:id`가 그 이후 로드맵·복습 데이터가 바뀌어도 당시 값 그대로 반환하는지(FR-014), 존재하지 않는 id는 404인지 검증하는 통합 테스트 작성

### Implementation for User Story 3

- [X] T025 [US3] `backend/src/web/routes/briefing.ts`에 `POST /briefing/rerun`을 추가 — `generateBriefing({scope, forceNew:true})` 호출 후 303으로 `/briefing/history/:id`로 리다이렉트(PRG 패턴, research.md §6) — depends on T021
- [X] T026 [US3] `backend/src/web/routes/briefing.ts`에 `GET /briefing/history`, `GET /briefing/history/:id`를 추가(각각 `store.listSnapshotsByDate()`, `store.getSnapshotById()` 호출) — depends on T014
- [X] T027 [US3] `backend/src/web/views/briefingHistory.ts`를 신설해 기록 목록·상세 화면을 구현하고, `views/briefing.ts`의 메인 화면에 "다시 실행" 버튼과 "기록 이력 보기" 링크를 추가 — depends on T026, T022

**Checkpoint**: 세 사용자 스토리 모두 독립적으로 동작 — quickstart.md 시나리오 1~3 전체 통과

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: 여러 스토리에 걸친 검증과 계약 정합성 확인, 그리고 이 기능에서 처음 요구되는 실제 브라우저 확인(003 이후 두 번째 UI 기능)

- [ ] T028 [P] `npx vitest run`으로 기존 001~004의 219개 테스트와 이 기능의 신규 테스트가 함께 회귀 없이 통과하는지 확인하고 전/후 개수를 기록
- [ ] T029 [P] `npx tsc --noEmit`, `npx eslint src` 클린 확인
- [X] T030 `backend/tests/unit/contractConformance.briefing.test.ts`에 contracts/briefing-library.md가 정의한 함수(`formatProgress`, `buildSnapshot`, `generateBriefing`, `listSnapshotsByDate`, `getSnapshotById`)의 시그니처와 실제 구현이 일치하는지 검증하는 테스트 작성(001·002·004의 `contractConformance.*.test.ts`와 동일 패턴)
- [ ] T031 실제 브라우저(데스크톱·모바일 뷰포트)로 quickstart.md 시나리오 1~3과 004 실패 엣지 케이스 전체를 직접 구동해 골든 패스와 반응형 레이아웃(가로 스크롤 없음)을 확인 — 메인 에이전트가 직접 수행(헌법 원칙 I·IV, 003의 Playwright 검증 절차와 동일)
- [ ] T032 spec.md Edge Cases 전부(4개 초과 미시작 로드맵 접힘, 복습 날짜 형식 오류 항목의 "형식 확인 필요" 표시, 004 응답 실패 시 부분 열화, 새로고침·의도적 재실행 구분, 파일 기록 실패 시 처리, 자정·시간대 경계)를 실제 코드·테스트 결과와 대조해 구현대로 동작함을 확인
- [ ] T033 헌법 원칙 VI(메인 에이전트 품질 검수) 통과 확인 후, 원칙 VII에 따라 루트 `개발결과.md`에 이 기능의 결과를 기록 — 메인 에이전트가 직접 수행, 서브에이전트에 위임하지 않음
- [X] T034 [P] FR-009 보완: `BriefingSnapshot`에 `totalActiveCount` 추가해 "아직 쌓인 오답이 없습니다"/"밀린 복습 없음"을 구분(메인 에이전트 품질 검수에서 발견 — data-model.md/contracts/briefing-library.md에도 반영됨)
- [X] T035 [P] 안전 공백 보완: `generateBriefing()`에 `dbPath`/`logPath` 테스트 전용 옵션 추가 — 이 함수가 이 기능의 유일한 쓰기 진입점인데 유일하게 실제 파일 경로를 재정의할 방법이 없었다(QA 검증 중 발견, 메인 에이전트가 직접 수정 — `contracts/briefing-library.md`에도 반영됨)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: 의존성 없음 — 즉시 시작
- **Foundational (Phase 2)**: Setup 완료 후 — 모든 사용자 스토리를 막는다. 테스트(T002~T003)를 먼저 작성해 실패를 확인한 뒤 구현(T004~T007)한다
- **User Stories (Phase 3~5)**: 모두 Foundational 완료에 의존
  - US1(Phase 3)은 다른 스토리에 의존하지 않는다
  - US2(Phase 4)는 US1의 라우트(T017)·뷰(T018)를 확장하므로 US1 완료 후 시작
  - US3(Phase 5)는 US1의 스토어(T014)·US2의 라우트(T021)를 확장하므로 US1·US2 완료 후 시작
- **Polish (Phase 6)**: 세 사용자 스토리 완료 후

### User Story Dependencies

- **User Story 1 (P1)**: Foundational 완료 후 시작 가능 — 다른 스토리에 의존하지 않음
- **User Story 2 (P2)**: US1의 `web/routes/briefing.ts`·`web/views/briefing.ts` 완료 후 시작
- **User Story 3 (P3)**: US1의 `briefing/store.ts`, US2의 `web/routes/briefing.ts` 완료 후 시작

### Within Each User Story

- 테스트를 먼저 작성해 실패를 확인한 뒤 구현한다
- `briefing/*.ts`(서비스·저장) → `web/routes/briefing.ts`(라우팅) → `web/views/*.ts`(렌더링) 순서로 구현한다

### Parallel Opportunities

- Foundational의 T002~T003(테스트)는 서로 다른 파일이라 병렬 가능. T004~T005(구현)도 서로 다른 파일이라 병렬 가능
- US1의 테스트(T008~T012)는 서로 다른 파일이라 병렬 가능
- US2·US3는 각각 US1 완료 후 순차 진행이 필요하다(같은 라우트·뷰 파일을 이어서 확장하므로 완전한 병렬은 어렵다) — 다만 US2의 테스트 작성과 US3의 서비스 레벨 테스트(T023, 라우트에 의존하지 않음)는 US1 완료 직후 병렬로 준비 가능

---

## Parallel Example: Foundational

```bash
# Foundational 시작 시 테스트 2개, 구현 2개를 동시에 준비:
Task: "backend/tests/unit/briefing.schema.test.ts 작성 (T002)"
Task: "backend/tests/unit/briefing.formatProgress.test.ts 작성 (T003)"
Task: "backend/src/briefing/types.ts 구현 (T004)"
```

---

## Implementation Strategy

### MVP 먼저 (User Story 1만)

1. Phase 1: Setup 완료
2. Phase 2: Foundational 완료 (필수 — 타입·진행률 표시 규칙·전용 스키마)
3. Phase 3: User Story 1 완료
4. **중단하고 검증**: quickstart.md 시나리오 1 + 004 실패 엣지 케이스로 US1을 독립적으로 확인
5. 이 시점에서 이미 F01의 핵심 가치("오늘 뭐부터 해야 하는지 한 화면에서 보기")가 검증됨

### 점진적 전달

1. Setup + Foundational 완료 → 기반 준비
2. US1 추가 → 독립 검증(MVP) → 전체 브리핑 확보
3. US2 추가 → 독립 검증 → 로드맵별 좁혀 보기 확보
4. US3 추가 → 독립 검증 → 재실행·기록 이력 확보
5. Phase 6 Polish → 실제 브라우저 검증(003 이후 두 번째, 원칙 I/IV 필수) + 계약 정합성 확인 + 원칙 VI/VII 마감

### Parallel Team Strategy

여러 명이 동시에 작업한다면: Foundational 완료 후 한 명이 US1을 끝내고, 그 위에서 다른 한 명이 US2→US3를 순차로(같은 라우트·뷰 파일을 계속 확장하므로) 맡는 분담이 자연스럽다. US3의 서비스 레벨 dedup 테스트(T023)는 US1의 `store.ts`만 있으면 되므로 US2 작업과 병렬 준비 가능하다.

---

## Notes

- [P] 작업 = 다른 파일, 의존성 없음
- [Story] 라벨은 작업을 특정 사용자 스토리에 매핑한다(추적용). Foundational·Setup·Polish는 라벨 없음
- 각 사용자 스토리는 독립적으로 완료·검증 가능해야 한다
- 구현 전에 테스트가 실패하는지 확인한다(T002~T003, T008~T012, T020, T023~T024)
- 논리적 작업 단위마다 커밋한다
- 어떤 체크포인트에서든 멈춰서 해당 스토리를 독립적으로 검증할 수 있다
- 이 기능은 003 이후 두 번째로 화면(UI)이 있는 기능이다 — 자동 테스트 통과만으로는 완료로 보지 않고 T031의 실제 브라우저 확인을 반드시 거친다(헌법 원칙 I·IV)
