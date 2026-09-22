---

description: "Task list template for feature implementation"
---

# Tasks: 로드맵 탐색·자료실 화면 (Roadmap & Materials Screens)

**Input**: Design documents from `/specs/003-roadmap-materials-screens/`

**Prerequisites**: [plan.md](plan.md), [spec.md](spec.md), [research.md](research.md), [data-model.md](data-model.md), [contracts/http-routes.md](contracts/http-routes.md), [quickstart.md](quickstart.md)

**Tests**: 헌법 원칙 IV(QA)가 구현과 분리된 검증을 요구하므로, 공유 Foundational 모듈과 각 사용자 스토리에 테스트 작업을 포함한다(001/002와 동일한 패턴). 이 기능은 처음으로 UI를 포함하므로, 유닛·통합 테스트만으로는 "완료"로 보지 않는다 — Polish 단계(T026)에서 실제 브라우저 확인이 별도로 필요하다(헌법 원칙 I/IV).

**Organization**: 작업은 spec.md의 사용자 스토리(US1~US5)별로 그룹화한다.

**Note (002 계약 추가)**: T022는 이 기능(003)이 아니라 002-persistence-layer의 `backend/src/persistence/`에 파일을 추가하는 작업이다 — `/speckit-plan` 단계에서 `contracts/persistence-library.md`에 `getMaterialById`를 additive로 추가하기로 확정했고(002 tasks.md Addendum 참고), 실제 구현을 이 tasks.md의 US5에 배치했다.

**Revision note (2026-09-22, `/speckit-implement` 품질 검수 중 발견·수정)**:
- T026(실제 브라우저 확인)에서 모바일 뷰포트(390px)의 자료 검색 결과 화면이 가로로 넘치는 버그를 발견했다 — `연결된 로드맵` 링크가 64자 해시를 공백 없이 그대로 보여줘 브라우저가 줄바꿈하지 못했다. `backend/src/web/public/styles.css`의 `body`에 `overflow-wrap: anywhere`를 추가해 수정하고, Playwright로 수정 전/후 스크린샷과 `scrollWidth`/`clientWidth` 수치로 직접 재검증했다(Edge Cases "좁은 뷰포트에서 가로로 넘치지 않아야 한다" 요구 충족).
- `server.ts`에 에러 처리 미들웨어를 추가했다 — 백엔드 구현 중 002 캐시가 아직 적재되지 않았을 때 라우트가 예외를 던지면 Express 기본 오류 페이지(스택 트레이스)로 노출된다는 것이 발견됐는데, 이는 spec.md Edge Cases("적재가 필요하다는 것을 알 수 있는 상태를 보인다")를 위반한다. 해당 예외를 감지해 503 + 안내 메시지로 대체하도록 수정하고, 캐시 파일을 임시로 치운 뒤 직접 재현·검증했다.
- QA가 테스트 편의성 문제로 지적한 대로 `materialContent.ts`의 `renderMaterialBody`에 `coursesRootOverride` 선택 인자를 추가했다(기본값은 기존과 동일, 하위 호환).
- `materialSearch.ts`의 "다음 N개 보기" 링크 href가 `escapeHtml`을 거치지 않고 있던 것을 발견해 수정했다(실질적 위험은 없었으나 — URL 값 자체는 `URLSearchParams`가 이미 퍼센트 인코딩함 — 일관성과 HTML 유효성을 위해 반영).

## Format: `[ID] [P?] [Story] Description`

- **[P]**: 병렬 가능(다른 파일, 미완료 작업에 의존하지 않음)
- **[Story]**: 이 작업이 속한 사용자 스토리(US1~US5)
- 모든 작업에 정확한 파일 경로를 포함한다

## Path Conventions

plan.md의 Project Structure를 따른다 — `backend/src/web/`(신규), `backend/tests/`. 001(`backend/src/ingestion/`)·002(`backend/src/persistence/`)는 T022 외에는 변경하지 않는다. 서버 렌더링 단일 앱(research.md §1)이므로 `frontend/`는 만들지 않는다.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: 003이 쓸 새 디렉터리와 의존성 구성.

- [X] T001 `backend/src/web/{routes,views,public}` 디렉터리 생성 — plan.md Project Structure대로
- [X] T002 [P] `backend/package.json`에 `express`, `remark-rehype`, `rehype-raw`, `rehype-sanitize`, `rehype-stringify`(dependencies)와 `supertest`(devDependency) 추가, `"web": "tsx src/web/server.ts"` 스크립트 추가(research.md §1, §2, §4, §8)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: 5개 사용자 스토리 전부가 공유하는 이스케이프 헬퍼·레이아웃·서버 진입점. 이 단계가 끝나기 전에는 어떤 사용자 스토리도 시작하지 않는다.

**⚠️ CRITICAL**: 이 단계 완료 전 사용자 스토리 작업 시작 금지

- [X] T003 [P] `backend/src/web/html.ts`에 `escapeHtml` 이스케이프 헬퍼 구현 — 로드맵 제목·자료 제목처럼 파일 시스템에서 온 신뢰할 수 없는 문자열은 반드시 이 헬퍼를 거쳐야 하며, 직접 문자열 결합으로 출력되면 안 된다(FR-014, data-model.md 검증 규칙, research.md §3)
- [X] T004 [P] `backend/src/web/views/layout.ts`에 모든 화면이 공유하는 HTML 뼈대(문서 구조, 내비게이션) 구현
- [X] T005 `backend/src/web/server.ts`에 Express 앱 생성, 정적 자산(`public/`) 서빙, 라우트 마운트 진입점 구현(아직 라우트 핸들러가 없어도 서버가 뜨는 상태) — depends on T003, T004

**Checkpoint**: 재단 완료 — 사용자 스토리 구현 시작 가능

---

## Phase 3: User Story 1 - 로드맵 목록에서 진행 상황 한눈에 보기 (Priority: P1) 🎯 MVP

**Goal**: `GET /`이 모든 로드맵을 제목·완료/전체·진행률과 함께 보여준다.

**Independent Test**: 실제 저장소로 `/`를 열어 로드맵 8개 전부가 나타나고, "진행 자료 없음"·"확인 필요" 표시가 올바르게 구분되는지 확인한다(quickstart.md 시나리오 1).

### Tests for User Story 1

- [X] T006 [P] [US1] `backend/tests/integration/web.roadmapList.test.ts`에 supertest로 `GET /` 요청 시 로드맵이 제목·완료/전체·진행률과 함께 나타나는지, `hasPhaseDocs=false`와 `progressRatio=null`(totalCount=0)이 서로 다른 문구로 표시되는지(FR-003 — "둘을 같은 '0%'로 뭉뚱그리면 안 된다"), `needsReviewCount>0`인 로드맵에 확인 필요 배지가 나타나는지(FR-004) 검증하는 통합 테스트 작성

### Implementation for User Story 1

- [X] T007 [US1] `backend/src/web/views/roadmapList.ts`에 002 `listRoadmaps()` 결과를 `RoadmapListView`(data-model.md)로 옮겨 렌더링하는 함수 구현 — 로드맵이 하나도 없으면 "아직 로드맵이 없다" 안내(Edge Cases, 오류 아님) — depends on T003, T004
- [X] T008 [US1] `backend/src/web/routes/roadmaps.ts`에 `GET /` 핸들러 구현, `server.ts`에 마운트(contracts/http-routes.md) — depends on T005, T007

**Checkpoint**: US1 단독으로 quickstart.md 시나리오 1 통과

---

## Phase 4: User Story 2 - 로드맵 상세에서 트랙·Phase·학습 항목 탐색 (Priority: P1)

**Goal**: `GET /roadmaps/:roadmapId`가 트랙·Phase·학습 항목을 원문 순서로 보여준다.

**Independent Test**: 트랙 있는 로드맵과 없는 로드맵을 각각 열어 누락 없이 원문 순서로 나타나는지, 존재하지 않는 id는 404인지 확인한다(quickstart.md 시나리오 2).

### Tests for User Story 2

- [X] T009 [P] [US2] `backend/tests/integration/web.roadmapDetail.test.ts`에 트랙이 있는 로드맵과 없는 로드맵 각각 `GET /roadmaps/:id`로 열어 트랙·Phase·항목이 `order_index` 순서로, 누락 없이 나타나는지(FR-002), `aggregatable=false` Phase가 "형식 확인 필요" 안내로 대체되는지(FR-003), 연결된 자료가 있는 항목에 `/materials/:linkedMaterialId` 링크가 나타나는지(FR-011), 존재하지 않는 `roadmapId`는 404인지 검증하는 통합 테스트 작성

### Implementation for User Story 2

- [X] T010 [US2] `backend/src/web/views/roadmapDetail.ts`에 002 `getRoadmapDetail()` 결과를 `RoadmapDetailView`(data-model.md)로 렌더링하는 함수 구현 — depends on T003, T004
- [X] T011 [US2] `backend/src/web/routes/roadmaps.ts`에 `GET /roadmaps/:roadmapId` 핸들러 추가(`getRoadmapDetail`이 `null`이면 404, contracts/http-routes.md) — depends on T008, T010

**Checkpoint**: US1+US2 — quickstart.md 시나리오 1~2 통과

---

## Phase 5: User Story 3 - "이어서 공부"로 다음 위치 안내받기 (Priority: P2)

**Goal**: `GET /roadmaps/:roadmapId/continue`가 원문 순서상 가장 먼저 나오는 미완료 항목으로 안내한다.

**Independent Test**: 완료/미완료가 섞인 로드맵에서 정확한 위치로 이동하는지, 확인 필요(null) 항목은 건너뛰는지, 전부 완료/확인필요면 "없음"을 안내하는지 확인한다(quickstart.md 시나리오 3).

### Tests for User Story 3

- [X] T012 [P] [US3] `backend/tests/unit/continueStudy.test.ts`에 (a) 완료/미완료/확인필요(null)가 섞인 트리에서 원문 순서상 첫 `completed=false` 항목을 정확히 찾는지, (b) `completed=null`인 항목은 절대 `found`의 대상으로 반환하지 않고 `skippedNeedsReviewCount`에만 반영되는지(research.md §6, data-model.md 검증 규칙), (c) `completed=false`인 항목이 하나도 없으면(전부 완료 또는 전부 확인 필요) `found=false`인지 검증하는 단위 테스트 작성
- [X] T013 [P] [US3] `backend/tests/integration/web.continueStudy.test.ts`에 `GET /roadmaps/:id/continue`가 `found=true`면 302로 `/roadmaps/:roadmapId#item-:itemId`로 리다이렉트하는지, `found=false`면 200으로 "더 이상 이어서 공부할 항목이 없다" 페이지를 직접 렌더링하는지(임의 항목으로 이동하지 않음, FR-005) 검증하는 통합 테스트 작성

### Implementation for User Story 3

- [X] T014 [US3] `backend/src/web/continueStudy.ts`에 `RoadmapDetailView` 트리를 순서대로 순회해 `ContinueStudyTarget`(data-model.md)을 계산하는 순수 함수 구현 — depends on T003
- [X] T015 [US3] `backend/src/web/routes/roadmaps.ts`에 `GET /roadmaps/:roadmapId/continue` 핸들러 추가(contracts/http-routes.md의 302/200 분기) — depends on T011, T014

**Checkpoint**: US1+US2+US3 — quickstart.md 시나리오 1~3 통과

---

## Phase 6: User Story 4 - 자료실에서 조건으로 자료 찾기 (Priority: P2)

**Goal**: `GET /materials`가 제공처·강좌·분류·경로·제목 조건으로 자료를 검색한다.

**Independent Test**: 조건별·조합 검색이 002 `searchMaterials`와 정확히 같은 결과를 내는지, 결과 없음이 명확히 표시되는지 확인한다(quickstart.md 시나리오 4). US1~US3와 파일이 겹치지 않아 병렬 진행 가능.

### Tests for User Story 4

- [X] T016 [P] [US4] `backend/tests/integration/web.materialSearch.test.ts`에 `sourcePath`/`title`/`category`/`provider`/`course`/`roadmapId` 조건(개별·조합)으로 검색한 결과가 002 `searchMaterials()`와 정확히 일치하는지(FR-007, FR-008), 조건 없음이면 검색 폼만 보이는지, 결과 0건이면 "조건에 맞는 자료가 없다"가 오류로 보이지 않는지, `offset`/`limit` 페이지네이션(research.md §7)이 올바르게 슬라이스하는지 검증하는 통합 테스트 작성

### Implementation for User Story 4

- [X] T017 [US4] `backend/src/web/views/materialSearch.ts`에 002 `searchMaterials()` 결과를 `MaterialSearchView[]`(data-model.md)로 렌더링(검색 폼 + 결과 목록 + "다음 N개 보기" 링크) 구현 — depends on T003, T004
- [X] T018 [US4] `backend/src/web/routes/materials.ts`에 `GET /materials` 핸들러 구현(쿼리 파라미터 → `searchMaterials()` 호출 → `offset`/`limit` 슬라이스), `server.ts`에 마운트 — depends on T005, T017

**Checkpoint**: US4가 독립적으로 quickstart.md 시나리오 4 통과 (US1~US3과 병렬 진행 가능했음)

---

## Phase 7: User Story 5 - 자료 본문을 안전하게 열람하기 (Priority: P2)

**Goal**: `GET /materials/:materialId`가 자료 본문을 원본과 같게, 안전하게 보여준다.

**Independent Test**: 표·코드 블록·내부 링크가 섞인 자료를 열어 원본과 같이 표시되는지, 악성 스크립트가 섞인 자료를 열어도 실행되지 않는지, 열람만으로 학습 항목이 완료 처리되지 않는지 확인한다(quickstart.md 시나리오 5).

### Tests for User Story 5

- [X] T019 [P] [US5] `backend/tests/unit/materialContent.test.ts`에 (a) 표·코드 블록·내부 링크·원본 출처 링크가 있는 Markdown이 원본과 같은 내용의 안전한 HTML로 변환되는지(FR-009), (b) `<script>`/인라인 이벤트 핸들러(`onerror` 등)/`javascript:` URL이 섞인 픽스처가 결과 HTML에서 전부 제거되는지(FR-010, SC-005), (c) `sourcePath`에 `../` 등 상위 경로 탈출 시도가 섞여도 `courses/` 밖의 파일을 읽지 않는지(research.md §5 보안 검증) 검증하는 단위 테스트 작성
- [X] T020 [P] [US5] `backend/tests/unit/persistence.getMaterialById.test.ts`에 002에 추가하는 `getMaterialById()`(002 contracts/persistence-library.md Addendum)가 존재하는 `materialId`는 `MaterialSearchResult`를 반환하고, 존재하지 않는 `materialId`는 예외 대신 `null`을 반환하는지 검증하는 단위 테스트 작성
- [X] T021 [P] [US5] `backend/tests/integration/web.materialView.test.ts`에 `GET /materials/:materialId`가 200(정상)/404(메타데이터 없음)/200+`renderError`(원본 파일 읽기 실패) 세 경우를 각각 검증하고, 자료를 한 번 이상 열람한 뒤에도 연결된 학습 항목의 `completed` 값이(같은 로드맵을 `GET /roadmaps/:id`로 다시 조회해 비교) 바뀌지 않는지(FR-012) 검증하는 통합 테스트 작성

### Implementation for User Story 5

- [X] T022 [US5] 002 `backend/src/persistence/queries.ts`(및 `types.ts`)에 `getMaterialById(materialId, dbPath?)` 구현 — `materials.id` `PRIMARY KEY`로 단순 조회, 존재하지 않으면 `null`(002 contracts/persistence-library.md·tasks.md Addendum) — depends on T020
- [X] T023 [US5] `backend/src/web/materialContent.ts`에 `sourcePath`를 001 `DEFAULT_COURSES_ROOT` 기준으로 결합·정규화한 뒤 그 하위 경로인지 확인(벗어나면 거부, research.md §5)하고, `fs.readFileSync` → `unified` + `remark-parse` + `remark-gfm`(001 재사용) + `remark-rehype({ allowDangerousHtml: true })` + `rehype-raw` + `rehype-sanitize` + `rehype-stringify` 파이프라인으로 안전한 HTML을 생성하는 함수 구현(research.md §4 — `rehype-raw` 없이는 Markdown에 섞인 raw HTML이 렌더링되지 않고 텍스트로만 남아 F09 요구를 충족하지 못한다) — depends on T019
- [X] T024 [US5] `backend/src/web/views/materialView.ts`에 `MaterialBodyView`(data-model.md) 렌더링 구현 — `renderError`가 있으면 그 메시지를 조용히 빈 화면 대신 표시 — depends on T003, T004
- [X] T025 [US5] `backend/src/web/routes/materials.ts`에 `GET /materials/:materialId` 핸들러 구현(`getMaterialById` → 실패 시 404 → `materialContent` → `renderError` 분기 → 뷰) — depends on T018, T022, T023, T024

**Checkpoint**: 5개 사용자 스토리 모두 독립적으로 동작 — quickstart.md 시나리오 1~5 전체 통과

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: 여러 스토리에 걸친 검증과 계약 정합성 확인, 그리고 이 기능이 처음 포함하는 UI에 대한 실제 브라우저 확인(헌법 원칙 I/IV)

- [X] T026 [P] 실제 브라우저(데스크톱·모바일 뷰포트)로 quickstart.md 시나리오 1~5의 골든 패스를 확인 — 로드맵 목록→상세→이어서 공부, 검색→본문 열람까지 전부. 타입체크·유닛/통합 테스트 통과만으로는 완료로 보지 않는다(헌법 원칙 I "타입 체크 통과는 기능 완성의 증거가 아니다", 원칙 IV) — 메인 에이전트가 직접 수행
- [X] T027 spec.md Edge Cases(로드맵이 하나도 없는 신규 사용자, 002 캐시가 미적재·오래됨, 검색·목록 결과가 매우 많음, 자료 전사·요약 품질이 낮음, 표시 제목과 내부 식별자가 다름) 전체를 실제 화면 출력과 대조해 구현대로 동작하는지 확인
- [X] T028 [P] `backend/tests/integration/web.routesContract.test.ts`에 contracts/http-routes.md에 정의한 5개 라우트(`GET /`, `GET /roadmaps/:id`, `GET /roadmaps/:id/continue`, `GET /materials`, `GET /materials/:id`)가 문서화된 상태 코드(200/302/404)로 응답하는지 확인하는 최소 스모크 테스트 작성
- [X] T029 헌법 원칙 VI(메인 에이전트 품질 검수, 이번엔 실제 브라우저 확인 포함) 통과 확인 후, 원칙 VII에 따라 루트 `개발결과.md`에 이 기능의 결과(날짜, 기능명, 변경 파일, 검증 방법과 결과 — 자동 테스트 + 브라우저 확인, 담당 서브에이전트)를 기록 — 메인 에이전트가 직접 수행, 서브에이전트에 위임하지 않음

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: 의존성 없음 — 즉시 시작
- **Foundational (Phase 2)**: Setup 완료 후 — 모든 사용자 스토리를 막는다
- **User Stories (Phase 3~7)**: 모두 Foundational 완료에 의존
  - US1(Phase 3), US2(Phase 4), US3(Phase 5)는 같은 파일(`routes/roadmaps.ts`)을 순서대로 확장하므로 US1→US2→US3 순서로 진행
  - US4(Phase 6)는 `routes/materials.ts`를 새로 만들어 US1~US3과 파일이 겹치지 않으므로 Foundational 완료 후 언제든 병렬 진행 가능
  - US5(Phase 7)는 US4가 만든 `routes/materials.ts`를 확장하므로 US4 완료 후 시작하며, 002에 `getMaterialById`를 추가하는 T022도 포함한다
- **Polish (Phase 8)**: 수행하고자 하는 모든 사용자 스토리 완료 후

### User Story Dependencies

- **US1 (P1)**: Foundational 완료 후 시작 가능 — 다른 스토리에 의존하지 않음
- **US2 (P1)**: US1의 `routes/roadmaps.ts`(T008) 완료 후 시작 — 같은 파일 확장
- **US3 (P2)**: US2의 `routes/roadmaps.ts`(T011)·`getRoadmapDetail` 렌더링(T010) 완료 후 시작
- **US4 (P2)**: Foundational 완료 후 시작 가능 — US1~US3과 독립(다른 파일)
- **US5 (P2)**: US4의 `routes/materials.ts`(T018) 완료 후 시작

### Parallel Opportunities

- Setup의 T002는 T001과 병렬 가능
- Foundational의 T003, T004는 서로 다른 파일이라 병렬 가능. T005는 둘 다에 의존해 순차
- US1의 테스트(T006)는 단일 파일. US2의 테스트(T009)도 마찬가지
- US3의 테스트(T012, T013)는 서로 다른 파일이라 병렬 가능
- **US4(Phase 6) 전체는 US1~US3(Phase 3~5)과 파일이 겹치지 않아 Foundational 완료 직후부터 병렬로 진행할 수 있다** — 우선순위상 P1(US1·US2)을 먼저 끝내는 것을 권장하지만, 인력이 있다면 US4를 동시에 시작해도 무방하다
- US5의 테스트(T019, T020, T021)는 서로 다른 파일이라 병렬 가능

---

## Parallel Example: User Story 1~3(로드맵 계열)과 User Story 4(자료 검색) 동시 진행

```bash
# Foundational 완료 후, 서로 다른 파일이라 동시 진행 가능:
Task: "backend/src/web/views/roadmapList.ts 구현 (T007, US1 시작)"
Task: "backend/src/web/views/materialSearch.ts 구현 (T017, US4 시작)"

# 이후 US1→US2→US3는 routes/roadmaps.ts를 순서대로 확장하고,
# US4→US5는 routes/materials.ts를 순서대로 확장 — 두 흐름은 서로 기다리지 않는다.
```

---

## Implementation Strategy

### MVP 먼저 (User Story 1만)

1. Phase 1: Setup 완료
2. Phase 2: Foundational 완료 (필수 — 이스케이프 헬퍼·레이아웃·서버 진입점)
3. Phase 3: User Story 1 완료
4. **중단하고 검증**: quickstart.md 시나리오 1로 US1을 실제 브라우저에서 독립적으로 확인(헌법 원칙 I/IV)
5. 이 시점에서 이미 "로드맵 진행 상황을 한눈에 본다"는 핵심 가치가 검증됨

### 점진적 전달

1. Setup + Foundational 완료 → 기반 준비
2. US1 추가 → 독립 검증(MVP) → 로드맵 목록 확보
3. US2 추가 → 독립 검증 → 로드맵 상세 탐색까지 확장
4. US3 추가 → 독립 검증 → "이어서 공부" 안내까지 확장(US1·US2 완료 후)
5. US4 추가 → 독립 검증 → 자료 검색 확보(US1~US3과 병렬 진행 가능했음)
6. US5 추가 → 독립 검증 → 자료 본문 열람까지 확장(US4 완료 후, 002에 `getMaterialById` 추가 포함)
7. Phase 8 Polish → 실제 브라우저 골든 패스 확인(필수) + Edge Cases 대조 + 계약 정합성 확인 + 원칙 VI/VII 마감

### Parallel Team Strategy

여러 명이 동시에 작업한다면: Foundational 완료 후 한 명은 US1→US2→US3(로드맵 계열, 같은 파일을 계속 확장), 다른 한 명은 US4→US5(자료실 계열, 다른 파일)를 맡는 분담이 자연스럽다.

---

## Notes

- [P] 작업 = 다른 파일, 의존성 없음
- [Story] 라벨은 작업을 특정 사용자 스토리에 매핑한다(추적용). Foundational·Setup·Polish는 라벨 없음
- 각 사용자 스토리는 독립적으로 완료·검증 가능해야 한다
- 구현 전에 테스트가 실패하는지 확인한다(T006/T009/T012/T013/T016/T019/T020/T021)
- 논리적 작업 단위마다 커밋한다
- 어떤 체크포인트에서든 멈춰서 해당 스토리를 독립적으로 검증할 수 있다
- **이 기능은 UI를 포함하는 첫 기능이다 — 자동 테스트 통과만으로 어떤 사용자 스토리도 "완료"로 보고하지 않는다.** T026(실제 브라우저 확인)을 거치기 전까지 헌법 원칙 VI 검수를 통과한 것으로 간주하지 않는다
- 이 기능은 002의 계약을 additive하게 한 곳만 확장한다(`getMaterialById`, T022) — 그 외 001/002 코드는 건드리지 않는다
