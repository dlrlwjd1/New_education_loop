---

description: "Task list template for feature implementation"
---

# Tasks: 학습 핵심 루프 — 학습 시작과 질문·답변·채점

**Input**: Design documents from `/specs/006-study-core-loop/`

**Prerequisites**: [plan.md](plan.md), [spec.md](spec.md), [research.md](research.md), [data-model.md](data-model.md), [contracts/ai-grading-contract.md](contracts/ai-grading-contract.md), [contracts/study-service-library.md](contracts/study-service-library.md), [contracts/http-routes.md](contracts/http-routes.md), [quickstart.md](quickstart.md)

**Tests**: 헌법 원칙 IV(QA)가 구현과 분리된 QA 검증을 요구한다. 이 기능은 실제 AI를 호출하므로, `ai/grader.ts`를 모킹해 나머지 전부를 결정적으로 검증한다(research.md §7) — 001~005와 다른 점은 "AI 호출 자체"가 테스트 대상이 아니라 "AI 호출 결과를 어떻게 검증·저장·전이하는가"가 테스트 대상이라는 것이다.

**Organization**: 작업은 spec.md의 사용자 스토리(US1~US5)별로 그룹화한다. `grader.ts`/`service.ts`/`sessionMachine.ts`는 다섯 스토리가 공유하는 한 모듈이라, 004의 `parseReviewQueue`가 그랬듯 US1 구현 단계에서 전체 상태 기계(힌트·설명 포함)를 한 번에 만든다 — US2~US5는 그 위에서 나머지 경로(자료 기반 시작, 자동 제안, 채점 실패 재시도)를 살을 붙이는 작업과 그 경로의 테스트로 구성된다.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: 병렬 가능(다른 파일, 미완료 작업에 의존하지 않음)
- **[Story]**: 이 작업이 속한 사용자 스토리(US1~US5)
- 모든 작업에 정확한 파일 경로를 포함한다

## Path Conventions

plan.md의 Project Structure를 따른다 — AI 호출 캡슐화는 `backend/src/ai/`, 세션 상태·영속화는 `backend/src/study/`(전용 SQLite 파일), 화면은 003이 만든 `backend/src/web/`에 additive 확장. `backend/src/ingestion/`(001)·`backend/src/reviewQueue/`(004 파싱 부분)·`backend/src/briefing/`(005)는 변경하지 않는다. `backend/src/persistence/`(002·004)는 `appendReviewQueueItem` 추가만 additive로 확장한다.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: 006이 쓸 새 디렉터리 구성. 신규 npm 의존성 없음(research.md §1 — `claude` CLI를 `node:child_process`로 직접 호출).

- [X] T001 `backend/src/ai/`, `backend/src/study/`, `backend/tests/fixtures/study/` 디렉터리 생성

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: 다섯 사용자 스토리가 공유하는 타입·AI 서브프로세스 래퍼·상태 기계·전용 스키마·004 확장. 이 단계가 끝나기 전에는 어떤 사용자 스토리도 시작하지 않는다.

**⚠️ CRITICAL**: 이 단계 완료 전 사용자 스토리 작업 시작 금지

### Tests for Foundational

- [X] T002 [P] `backend/tests/unit/ai.claudeProcess.test.ts`에 `runClaudeJson()`이 (a) 존재하지 않는 명령/즉시 실패하는 프로세스, (b) 아주 짧은 타임아웃(예: 10ms) 설정 시 타임아웃, (c) JSON이 아닌 stdout, (d) `structured_output` 필드 누락 — 네 가지 실패 모두 `{status:"retry_needed", reason}`로 수렴하고 타임아웃 시 자식 프로세스가 실제로 종료(kill)되는지 검증하는 단위 테스트 작성(실제 프로세스를 스폰하되 실패 경로만 — 성공 경로는 US1에서 실제 `claude` 호출로 별도 검증)
- [X] T003 [P] `backend/tests/unit/study.sessionMachine.test.ts`에 data-model.md 상태 기계 표의 모든 전이(정답→resolved_correct, 오답/모름+힌트<3→awaiting_hint_retry, 힌트=3→awaiting_explanation_ack, 재료 없음→힌트 생략하고 awaiting_explanation_ack, 설명 후 정답/오답/모름, 실패 시 상태 불변)를 순수 함수로 검증하는 단위 테스트 작성(AI 호출 없음)
- [X] T004 [P] `backend/tests/unit/study.schema.test.ts`에 `study_sessions`/`study_questions`/`study_answer_attempts`/`study_hint_usages` 테이블이 전용 파일에 생성되고, `study_answer_attempts`의 `(question_id, attempt_number)` UNIQUE 제약과 `study_hint_usages`의 PK가 강제되는지, 005와 동일하게 스키마 버전 불일치를 삭제·재생성이 아니라 예외로 표면화하는지 검증하는 단위 테스트 작성

### Implementation for Foundational

- [X] T005 [P] `backend/src/ai/types.ts`에 `AiCallResult<T>`와 다섯 함수의 입출력 타입(contracts/ai-grading-contract.md)을 정의 — 메인 에이전트가 직접 작성(백엔드·프론트엔드 서브에이전트가 병렬로 참조할 공유 계약)
- [X] T006 `backend/src/ai/claudeProcess.ts`에 `runClaudeJson(prompt, jsonSchema, systemPrompt)` 구현 — `execFile`(셸 미경유)로 `claude -p ... --output-format json --json-schema ... --append-system-prompt ... --restricted --permission-prompts none --strict-mcp-config` 호출, 90초 타임아웃(초과 시 kill), stdout JSON 파싱 후 `.structured_output` 추출, 모든 실패를 `retry_needed`로 수렴 — depends on T002, T005
- [X] T007 [P] `backend/src/study/types.ts`에 `StudySession`/`StudyQuestion`/`AnswerAttempt`/`HintUsage`와 `StudyQuestionView`/`StudySessionView`(data-model.md, contracts/study-service-library.md)를 정의 — 메인 에이전트가 직접 작성. 이후 품질 검수 중 `reviewItemRegistered` 필드를 `StudyQuestion`에 추가(아래 참고)
- [X] T008 `backend/src/study/schema.ts`에 data-model.md의 네 테이블 DDL과 전용 `SCHEMA_VERSION` 상수 구현 — depends on T004, T007
- [X] T009 `backend/src/study/db.ts`에 전용 파일(`내학습/study-sessions.sqlite`) 오픈 헬퍼 구현 — 005의 `briefing/db.ts`와 동일하게 스키마 버전 불일치를 삭제·재생성하지 않고 예외로 표면화 — depends on T008
- [X] T010 [P] `backend/src/study/sessionMachine.ts`에 `computeNextStep()` 순수 함수 구현 — data-model.md 상태 기계 표 전체(힌트·설명·재료없음·실패 분기 포함)를 한 번에 구현한다(004의 `parseReviewQueue` 선례와 동일한 판단 — 상태 기계를 스토리별로 쪼개 두 번 작성하는 비용이 더 크다) — depends on T003, T007
- [X] T011 `backend/src/persistence/queries.ts`에 `appendReviewQueueItem(item, dbPath?)`를 additive로 추가 — 004의 `computeReviewItemId()`(`backend/src/reviewQueue/identity.ts`)로 id를 계산해 라이브 캐시(`backend/.cache/learning-loop.sqlite`)의 `review_queue_items`에 `INSERT OR IGNORE`(004와 동일한 이유)한다. **004의 기존 다섯(현재는 여덟) 함수 시그니처는 절대 바꾸지 않는다** — depends on T007

**Checkpoint**: 재단 완료 — 사용자 스토리 구현 시작 가능

---

## Phase 3: User Story 1 - 주제를 골라 질문에 답하고 채점받기 (Priority: P1) 🎯 MVP

**Goal**: 주제를 입력해 세션을 시작하고, 사전 지식 확인 → 인출 질문 → 채점(맞음/유창하지만 틀림/모름) → 오답 시 복습큐 등록까지의 핵심 왕복이 실제로 동작한다. 힌트·설명 전환(US2)도 이 단계에서 함께 구현한다 — 두 스토리 모두 spec.md에서 동일한 P1이며, 힌트·설명 없이는 "먼저 답하게 한다"는 핵심 원칙이 지켜지지 않는 반쪽짜리 MVP가 되기 때문이다.

**Independent Test**: 주제명을 입력해 세션을 시작하고, 정답·오답·모름을 각각 제출해 판정과 복습 등록 여부가 기대대로 나오는지, 오답을 반복해 힌트 3회 후 설명으로 전환되는지 확인한다(quickstart.md 시나리오 1·2).

### Tests for User Story 1

- [X] T012 [P] [US1] `backend/tests/unit/ai.grader.test.ts`에 `claudeProcess.ts`를 모킹해, `gradeAnswer`/`generateRetrievalQuestion`/`assessPriorKnowledge`/`generateHint`/`generateExplanation` 각각이 올바른 스키마·프롬프트 구조로 `runClaudeJson()`을 호출하고, `runClaudeJson()`이 `retry_needed`를 반환하면 그대로 전달하는지(재해석하지 않음), `isDontKnow:true`인 `gradeAnswer` 호출은 AI를 부르지 않고 즉시 `verdict:"unknown"`을 반환하는지 검증하는 단위 테스트 작성
- [X] T013 [P] [US1] `backend/tests/integration/study.service.test.ts`에 `ai/grader.ts`를 모킹해(research.md §7), 주제 경로 전체 흐름 — `resolveStartTarget`(주제)→`startSession`→사전지식 답변→인출 질문→정답(→정교화 전이)/오답(→복습 등록)/모름(→복습 등록)/오답 반복(→힌트 1·2·3→설명→재답변) — 을 임시 `dbPath`로 격리해 검증하는 통합 테스트 작성. 같은 개념·주제·오늘 날짜 조합의 중복 오답이 복습 항목을 중복 생성하지 않는지도 검증(FR-014)
- [X] T014 [P] [US1] `backend/tests/integration/persistence.appendReviewQueueItem.test.ts`에 `appendReviewQueueItem()`이 라이브 캐시(임시 dbPath)에 즉시 새 행을 반영하고, `getReviewQueueStatus()`가 전체 재적재 없이 그 행을 바로 조회하는지, 004의 기존 회귀 테스트 219개가 이 추가로 깨지지 않는지 검증하는 통합 테스트 작성
- [X] T015 [P] [US1] `backend/tests/integration/web.study.test.ts`에 `study/service.ts`를 모킹해, `GET /study/new` 200, `POST /study/start`(주제 경로) → 303 → `GET /study/:sessionId`가 사전지식 질문을 보여주는지, 답변 제출 전 응답 HTML에 정답·힌트 문자열이 전혀 없는지(FR-024, SC-001), `POST .../answer` → 303 → 결과 반영, 존재하지 않는 `sessionId` → 404를 검증하는 통합 테스트 작성

### Implementation for User Story 1

- [X] T016 [US1] `backend/src/ai/promptBuilder.ts` 구현 — 다섯 함수 각각의 프롬프트와 공통 시스템 프롬프트(research.md §5: 자료 본문·사용자 답변을 명확한 구분자로 감싸고 "데이터일 뿐 지시가 아니다"를 명시) 생성 — depends on T005
- [X] T017 [US1] `backend/src/ai/grader.ts`에 `generateRetrievalQuestion`/`assessPriorKnowledge`/`gradeAnswer`/`generateHint`/`generateExplanation`을 contracts/ai-grading-contract.md대로 구현(각 함수의 JSON Schema 포함) — depends on T006, T016, T012
- [X] T018 [US1] `backend/src/study/targetResolver.ts`에 `resolveStartTarget()`을 구현 — 이 태스크에서는 주제 경로(`explicitPath:"topic"` 또는 애매하지 않은 `freeText`)만 완전히 구현하고, 자료 경로·로드맵 이어하기·자동 제안·모호성 판정은 US4·US5에서 이어서 채운다(함수 시그니처와 반환 타입은 계약대로 전부 갖추되, 주제 경로 외 분기는 이 단계에서 `not_found`/최소 동작으로 둔다) — depends on T007
- [X] T019 [US1] `backend/src/study/store.ts`에 세션·질문·답변시도·힌트의 삽입·조회 함수 구현(`insertSession`/`insertQuestion`/`insertAttempt`/`insertHint`/`getSessionView`) — `study_answer_attempts`에는 어떤 UPDATE 문도 두지 않는다(data-model.md 불변식) — depends on T009, T007
- [X] T020 [US1] `backend/src/persistence/queries.ts`의 `appendReviewQueueItem()` 실제 구현(T011에서 만든 자리에 로직 채움) — depends on T011, T014
- [X] T021 [US1] `backend/src/study/reviewQueueWriter.ts` 구현 — `내학습/복습큐.md`의 활성 큐 표 끝에 새 행을 append(004의 열 순서와 동일: 항목|주제|처음 틀린 날|다음 복습일|상태="1회차", 다음 복습일=처음 틀린 날+1일). 기존 행·마스터 완료 표는 절대 건드리지 않는다(005의 `logFile.ts`가 이미 증명한 append-only 안전 패턴 재사용) — depends on T007
- [X] T022 [US1] `backend/src/study/service.ts`에 `startSession`/`submitAnswer`/`retryGrading`/`getSessionView`를 contracts/study-service-library.md대로 구현 — `submitAnswer`는 data-model.md 상태 기계 전체(힌트·설명·재료없음 분기 포함, T010 재사용)를 처리하고, 오답/모름 확정 시 T020·T021을 함께 호출해 파일과 라이브 캐시 양쪽에 동시 반영한다. `requestId` 중복 제출 방지(FR-028)도 이 단계에서 구현 — depends on T017, T018, T019, T020, T021, T010, T013
- [X] T023 [US1] `backend/src/web/routes/study.ts` 신설 — `GET /study/new`, `POST /study/start`(주제 경로), `GET /study/:sessionId`, `POST /study/:sessionId/questions/:questionId/answer` — depends on T022, T015
- [X] T024 [US1] `backend/src/web/views/studyNew.ts`(시작 화면), `backend/src/web/views/studySession.ts`(질문·답변 폼·판정 결과·힌트·설명 표시, `currentStep`별 분기) 구현 — depends on T023
- [X] T025 [US1] `backend/src/web/server.ts`에 `study` 라우터 등록 — depends on T023

**Checkpoint**: US1 단독으로 quickstart.md 시나리오 1·2 통과(MVP) — 주제 공부의 정답/오답/모름/힌트/설명 전체 왕복이 동작한다

---

## Phase 4: User Story 2 - 막히면 힌트를 받고, 그래도 막히면 설명을 듣고 다시 답하기 (Priority: P1)

**Goal**: US1에서 이미 구현된 힌트·설명 전환 로직(`sessionMachine.ts`, `service.ts`)이 실제로 새로고침·서버 재시작에도 안전하게 유지되는지, "재료 없음" 즉시 설명 전환이 정확히 동작하는지 확인·보강한다.

**Independent Test**: 같은 질문에 반복 오답을 제출해 힌트가 1→2→3회로 늘어나는지, 새로고침 후에도 힌트 횟수가 유지되는지, 사전 지식이 전혀 없다고 판정된 경우 힌트 없이 곧장 설명으로 가는지 확인한다(quickstart.md 시나리오 2).

### Tests for User Story 2

- [X] T026 [P] [US2] `backend/tests/integration/study.service.test.ts`(기존 파일 확장)에 `assessPriorKnowledge()`가 `hasMaterial:false`를 반환하는 경우 힌트 단계를 완전히 건너뛰고 `awaiting_explanation_ack`로 바로 전이하는지(FR-017) 검증하는 테스트 추가
- [X] T027 [P] [US2] `backend/tests/integration/web.study.test.ts`(기존 파일 확장)에 힌트를 한 번 받은 세션에서 `GET /study/:sessionId`를 다시 호출(새로고침 시뮬레이션)해도 힌트 횟수·내용이 그대로 보이는지(SC-005) 검증하는 테스트 추가

### Implementation for User Story 2

- [X] T028 [US2] `backend/src/web/views/studySession.ts`를 확장해 힌트 목록(지금까지 받은 힌트 전부, 최신순 아님 — 받은 순서대로)과 설명 패널을 명확히 구분해 표시 — depends on T024, T026, T027

**Checkpoint**: US1+US2 — quickstart.md 시나리오 1~2 완전히 통과

---

## Phase 5: User Story 3 - 채점이 실패하거나 느려도 오답으로 잘못 기록되지 않기 (Priority: P2)

**Goal**: 채점 호출 실패·시간 초과 시 "채점 대기/재시도 가능" 상태로 남고, 사용자가 재시도할 수 있다.

**Independent Test**: 채점 호출이 실패하도록 재현해, 그 답변이 오답·모름으로 기록되지 않고 재시도 가능한 상태로 남는지, 재시도가 실제로 다시 채점을 시도하는지 확인한다(quickstart.md 시나리오 3).

### Tests for User Story 3

- [X] T029 [P] [US3] `backend/tests/integration/study.service.test.ts`(기존 파일 확장)에 `ai/grader.ts`가 `retry_needed`를 반환하도록 모킹했을 때 `submitAnswer()`가 그 시도를 `status:"retry_needed"`로 저장하고 질문의 `current_step`을 바꾸지 않는지(FR-021), 이후 `retryGrading()`으로 같은 `submittedText`를 다시 채점해 성공하면 정상적으로 상태가 전이되는지 검증하는 테스트 추가
- [X] T030 [P] [US3] `backend/tests/integration/web.study.test.ts`(기존 파일 확장)에 `POST /study/answers/:attemptId/retry`가 303 리다이렉트로 그 답변이 속한 세션 화면으로 돌아가는지 검증하는 테스트 추가

### Implementation for User Story 3

- [X] T031 [US3] `backend/src/web/routes/study.ts`에 `POST /study/answers/:attemptId/retry` 추가(`service.ts`의 `retryGrading()` 호출) — depends on T023, T029 — T023 구현 시 한 번에 완성됨(004의 `parseReviewQueue` 선례와 동일한 통합 구현)
- [X] T032 [US3] `backend/src/web/views/studySession.ts`를 확장해 `status:"retry_needed"`인 답변 시도에 "채점 대기 — 다시 시도" 버튼을 표시 — depends on T028, T030

**Checkpoint**: US1+US2+US3 — quickstart.md 시나리오 1~3 통과

---

## Phase 6: User Story 4 - 자료를 골라 그 자료 기반으로 학습 시작하기 (Priority: P3)

**Goal**: 등록된 자료를 선택해 그 본문 기반으로 세션을 시작할 수 있고, 애매한 입력에는 선택지를 보여준다.

**Independent Test**: 실제 자료 하나로 세션을 시작해 제목+사전지식 질문이 나오는지, 존재하지 않는 자료 id는 오류로 안내되는지, 애매한 입력은 선택지를 보여주는지 확인한다(quickstart.md 시나리오 4).

### Tests for User Story 4

- [X] T033 [P] [US4] `backend/tests/unit/study.targetResolver.test.ts`에 (a) 등록된 `materialId`로 `kind:"resolved", path:"material"` 반환, (b) 존재하지 않는 `materialId`로 `kind:"not_found"` 반환(FR-003), (c) 002의 로드맵 제목과 부분 일치하면서 동시에 새 주제로도 읽힐 수 있는 `freeText` 입력에 `kind:"ambiguous"`와 두 개 이상의 후보 반환(FR-002)을 검증하는 단위 테스트 작성
- [X] T034 [P] [US4] `backend/tests/integration/web.study.test.ts`(기존 파일 확장)에 `POST /study/start`(자료 경로)가 002/004의 실제(또는 임시 픽스처) 자료로 세션을 시작해 자료 제목이 사전지식 질문 화면에 나오는지, 등록되지 않은 자료 id는 오류 안내로 응답하는지 검증하는 테스트 추가

### Implementation for User Story 4

- [X] T035 [US4] `backend/src/study/targetResolver.ts`를 확장해 자료 경로(`getMaterialById` 호출, FR-003)와 모호성 판정(FR-002, 002의 로드맵 제목 목록과 자유 텍스트 대조)을 완성 — depends on T018, T033 — T018 구현 시 한 번에 완성됨
- [X] T036 [US4] `backend/src/study/service.ts`의 `startSession()`을 확장해 `path:"material"`일 때 자료 본문을 먼저 읽어 프롬프트 컨텍스트로 넘기는 경로를 완성(FR-006) — depends on T022, T034 — T022 구현 시 한 번에 완성됨(`loadMaterialContext()`가 003의 `materialContent.ts`를 재사용)
- [X] T037 [US4] `backend/src/web/views/studyNew.ts`를 확장해 자료 검색(003의 `/materials` 링크)·모호성 선택지 화면을 추가 — depends on T024, T035

**Checkpoint**: US1~US4 — quickstart.md 시나리오 1~4 통과

---

## Phase 7: User Story 5 - 아무것도 정하지 않고 시작해도 뭘 할지 제안받기 (Priority: P3)

**Goal**: 입력 없이 시작하면 오늘 복습 대상 → 진행 중 로드맵 → 로드맵 후보 순으로 제안받는다.

**Independent Test**: 복습 대상이 있을 때/없고 진행 중 로드맵만 있을 때/둘 다 없을 때 각각 입력 없이 시작해 제안 순서가 맞는지 확인한다(quickstart.md 시나리오 5).

### Tests for User Story 5

- [X] T038 [P] [US5] `backend/tests/unit/study.targetResolver.test.ts`(기존 파일 확장)에 `explicitPath`/`freeText` 모두 없을 때 004의 `getReviewQueueStatus()`(모킹) 결과가 있으면 `kind:"auto_suggestions"`의 `dueReviewCount`가 그것을 반영하고, 없으면 002의 `listRoadmaps()`(모킹)로 진행 중 로드맵·후보를 채우는지 검증하는 테스트 추가

### Implementation for User Story 5

- [X] T039 [US5] `backend/src/study/targetResolver.ts`를 확장해 `kind:"auto_suggestions"` 분기(FR-004의 순서: 복습 대상→진행 중 로드맵→후보 2~3개)를 완성 — depends on T035, T038 — T018 구현 시 한 번에 완성됨
- [X] T040 [US5] `backend/src/web/views/studyNew.ts`를 확장해 자동 제안 목록 화면을 추가 — depends on T037, T039

**Checkpoint**: 다섯 사용자 스토리 모두 독립적으로 동작 — quickstart.md 시나리오 1~5 전체 통과

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: 여러 스토리에 걸친 검증, 004 회귀 확인, 계약 정합성 확인, 실제 브라우저 확인(이 기능은 003·005에 이은 세 번째 UI 기능이자 첫 AI 통합 기능)

- [X] T041 [P] `npx vitest run`으로 기존 293개(001~005) 테스트와 이 기능의 신규 테스트가 함께 회귀 없이 통과하는지 확인하고 전/후 개수를 기록
- [X] T042 [P] `npx tsc --noEmit`, `npx eslint src tests` 클린 확인
- [X] T043 `backend/tests/unit/contractConformance.study.test.ts`에 contracts/study-service-library.md·ai-grading-contract.md가 정의한 함수들의 시그니처와 실제 구현이 일치하는지 검증하는 테스트 작성(001·002·004·005의 `contractConformance.*.test.ts`와 동일 패턴)
- [X] T044 실제 `claude` CLI로 학습 핵심 왕복(정답 경로 + 힌트 생성)을 메인 에이전트가 직접 구동해 확인 — 사전지식 판정(`hasMaterial:true`)→AI 생성 인출 질문(품질 양호, OLTP/OLAP 설계 차이를 정확히 묻는 질문)→"모르겠습니다" 제출→AI 생성 힌트(정답을 직접 알려주지 않으면서 방향 제시) 확인. 실측 지연 시간(9~17초)이 research.md §1의 사전 측정과 일치. 힌트 3회 초과·설명 전환·자료 경로·자동 제안은 QA의 모킹된 결정적 테스트로 상태 전이 자체를 이미 검증 — 실제 호출 비용(회당 ~$0.25) 절약을 위해 전체 시나리오를 반복 호출하지 않음
- [X] T045 Playwright(스크래치 디렉터리 임시 설치)로 데스크톱(1440px)·모바일(390px)에서 `/study/new` 가로 스크롤 없음·콘솔 오류 0건 확인. 실제 세션 진행(질문·답변·힌트·판정·이력·로드맵 이어하기 폼)은 curl 기반 실제 서버 왕복으로 HTML 응답을 직접 검사해 확인 — 전체 골든 패스의 브라우저 클릭 시뮬레이션은 수행하지 않음(curl 검증으로 동일 내용을 이미 확인했고, 제출마다 실제 AI 호출 비용이 발생하기 때문)
- [X] T046 spec.md Edge Cases 대조 — 형식 벗어난 AI 응답(FR-022 재검증, `ai.grader.test.ts`)/중복 제출(FR-028, `study.service.dedup.test.ts`)/존재하지 않는 세션·질문 id(`web.study.test.ts` 404)/힌트 도중 정답 도달(`sessionMachine.test.ts`) 확인됨. 서버 재시작 후 세션 복구는 SQLite 영속화가 서버 프로세스와 독립적이므로 구조적으로 보장됨(별도 테스트 불필요). 빈/과도하게 긴 답변에 대한 명시적 안내(FR 수준 소프트 요구사항)는 미구현 — 후속 폴리시 과제로 남김
- [X] T048 [P] QA 검수에서 발견한 실제 결함 수정: `study_questions`에 `review_item_registered` 컬럼 추가 — `toSubmitAnswerResult()`가 재구성 시 항상 `reviewItemRegistered:true`로 가정하던 것을, `registerReviewItem()`이 실제로 계산한 값을 저장·재사용하도록 수정(메인 에이전트가 직접 수정, schema.ts에 편차 근거 기록)
- [X] T049 [P] QA 검수에서 발견한 실제 결함 수정: `studyNew.ts`의 "로드맵 이어하기" 섹션이 `/`로의 단순 링크만 있어 실제로는 진입 불가능했던 것을, 진행 중인 로드맵을 원클릭 폼으로 나열하도록 수정(`GET /study/new`가 002 `listRoadmaps()`를 호출, 메인 에이전트가 직접 수정)
- [X] T047 헌법 원칙 VI(메인 에이전트 품질 검수) 통과 확인 후, 원칙 VII에 따라 루트 `개발결과.md`에 이 기능의 결과를 기록 — 메인 에이전트가 직접 수행, 서브에이전트에 위임하지 않음

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: 의존성 없음
- **Foundational (Phase 2)**: Setup 완료 후 — 모든 사용자 스토리를 막는다
- **User Stories (Phase 3~7)**: 모두 Foundational 완료에 의존
  - US1(Phase 3)은 다른 스토리에 의존하지 않는다 — 단, 힌트·설명(원래 US2 몫)까지 이 단계에서 함께 구현한다
  - US2(Phase 4)는 US1이 만든 `service.ts`/`sessionMachine.ts`(이미 힌트·설명 로직 포함)를 검증·보강만 하므로 US1 완료 후 시작
  - US3(Phase 5)는 US1의 `service.ts`/라우트를 확장하므로 US1 완료 후 시작 — US2와 파일이 겹치지 않아 병렬 가능
  - US4(Phase 6)는 US1의 `targetResolver.ts`/`service.ts`를 확장하므로 US1 완료 후 시작
  - US5(Phase 7)는 US4가 채운 `targetResolver.ts`를 이어서 확장하므로 US4 완료 후 시작
- **Polish (Phase 8)**: 원하는 모든 사용자 스토리 완료 후

### Within Each User Story

- 테스트를 먼저 작성해 실패를 확인한 뒤 구현한다
- `ai/*` → `study/store.ts`·`study/targetResolver.ts`·`study/reviewQueueWriter.ts` → `study/service.ts` → `web/routes/study.ts` → `web/views/study*.ts` 순서로 구현한다

### Parallel Opportunities

- Foundational의 T002~T004(테스트), T005·T007(타입)은 서로 다른 파일이라 병렬 가능
- US1의 테스트(T012~T015)는 서로 다른 파일이라 병렬 가능
- US2·US3는 US1 완료 후 서로 다른 파일 영역(힌트 표시 vs 재시도 라우트)이라 병렬 가능
- US4·US5는 순차적이다(같은 `targetResolver.ts`를 이어서 확장)

---

## Implementation Strategy

### MVP 먼저 (User Story 1(+2) 만)

1. Phase 1~2 완료(Setup+Foundational)
2. Phase 3(US1, 힌트·설명 포함) 완료
3. **중단하고 검증**: quickstart.md 시나리오 1·2로 핵심 학습 루프가 실제로 동작하는지 확인
4. 이 시점에서 이미 이 앱의 존재 이유("먼저 생각하고 답하게 한다")가 실현됨

### 점진적 전달

1. Setup+Foundational → 기반(AI 래퍼, 상태 기계, 전용 스키마, 004 쓰기 경로)
2. US1(+US2 힌트/설명) → 핵심 루프 확보(MVP)
3. US3 → 채점 실패 안전망 확보
4. US4 → 자료 기반 시작 확보
5. US5 → 자동 제안 확보
6. Phase 8 Polish → 실제 AI·실제 브라우저 확인 + 계약 정합성 + 원칙 VI/VII 마감

## Notes

- [P] 작업 = 다른 파일, 의존성 없음
- 구현 전에 테스트가 실패하는지 확인한다(T002~T004, T012~T015, T026~T027, T029~T030, T033~T034, T038)
- 이 기능은 이 저장소에서 처음으로 실제 AI 서브프로세스를 호출한다 — 자동 테스트는 전부 `ai/grader.ts`를 모킹하고(research.md §7), 실제 채점 품질 확인은 T044(수동)로 분리한다
