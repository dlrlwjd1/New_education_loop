# Data Model: 학습 핵심 루프

research.md의 결정(§3 복습큐 쓰기, §4 전용 파일, §6 실패 처리)을 반영한다. 질문 하나 단위로 상태 기계를 두고(세션 단위가 아니다 — 세션은 질문 여러 개를 순서대로 담는 그릇일 뿐), 답변 시도는 절대 덮어쓰지 않고 매번 새 행으로 쌓는다(001·004·005가 지켜 온 "이미 저장된 사실은 재계산해 덮어쓰지 않는다" 원칙과 동일).

## 질문 단위 상태 기계 (`study_questions.current_step`)

```text
awaiting_answer
  ├─ 채점: 정답(근거 포함) ──────────────────────────→ resolved_correct
  ├─ 채점: 오답/모름, 사전지식 있음, 힌트<3회 ────────→ awaiting_hint_retry (힌트 1개 생성)
  ├─ 채점: 사전지식 확인에서 "재료 없음" 판정 ────────→ awaiting_explanation_ack (힌트 생략)
  └─ 채점 호출 실패/시간초과 ──────────────────────────→ awaiting_answer 유지, 이 시도만 retry_needed

awaiting_hint_retry
  ├─ 재채점: 정답 ─────────────────────────────────────→ resolved_correct
  ├─ 재채점: 오답/모름, 힌트<3회 ──────────────────────→ awaiting_hint_retry (힌트 추가 생성)
  ├─ 재채점: 오답/모름, 힌트=3회 ──────────────────────→ awaiting_explanation_ack
  └─ 채점 호출 실패/시간초과 ──────────────────────────→ awaiting_hint_retry 유지, 이 시도만 retry_needed

awaiting_explanation_ack
  ├─ 재채점: 정답 ─────────────────────────────────────→ resolved_correct
  ├─ 재채점: 오답 ─────────────────────────────────────→ resolved_incorrect (복습 등록)
  ├─ 재채점: 모름 ─────────────────────────────────────→ resolved_unknown (복습 등록)
  └─ 채점 호출 실패/시간초과 ──────────────────────────→ awaiting_explanation_ack 유지, 이 시도만 retry_needed

resolved_correct / resolved_incorrect / resolved_unknown  (종결 상태 — 이 기능 범위에서는 더 진행하지 않음)
```

이 표는 FR-011(정답→정교화 전이), FR-015~017(힌트·설명 전환 조건), FR-021(실패는 상태를 바꾸지 않음)을 그대로 코드화한 것이며, `study/sessionMachine.ts`가 이 표만을 근거로 다음 상태를 계산하는 순수 함수여야 한다(FR-027 — 클라이언트가 다음 상태를 주장해도 서버가 이 표로만 판단한다).

## 엔티티

### `StudySession`

| 필드 | 타입 | 설명 |
|---|---|---|
| `id` | `number` | |
| `path` | `"topic" \| "material" \| "auto"` | FR-001 |
| `targetLabel` | `string` | 화면에 보여줄 이름(주제명 또는 자료 제목·로드맵명) |
| `targetMaterialId` | `string \| null` | `path="material"`일 때 002/004가 부여한 자료 id(FR-003 — 등록된 id로만 연다) |
| `targetRoadmapId` / `targetPhaseId` / `targetItemId` | `string \| null` | 로드맵 이어하기 경로일 때(FR-004의 "진행 중 로드맵" 제안 포함) |
| `timezone` | `string` | 005와 동일하게 기본값 `Asia/Seoul` |
| `startedAt` | `string` | ISO-8601 |
| `status` | `"active"` | F07(세션 마무리)이 범위 밖이라 종결 상태는 이 기능에서 다루지 않는다 |

### `StudyQuestion`

| 필드 | 타입 | 설명 |
|---|---|---|
| `id` | `number` | |
| `sessionId` | `number` | |
| `orderIndex` | `number` | 세션 내 순서 |
| `kind` | `"prior_knowledge" \| "retrieval"` | FR-005/006(사전지식) vs FR-008(인출 질문) |
| `promptText` | `string` | |
| `conceptLabel` | `string \| null` | 오답 등록 시(FR-013) 복습 항목의 "항목" 칸으로 쓸 이름 |
| `currentStep` | 위 상태 기계의 상태값 | |
| `explanationText` | `string \| null` | FR-018 — 5분/3~5개념 이하로 생성된 설명 |
| `explanationShownAt` | `string \| null` | |

### `AnswerAttempt`

| 필드 | 타입 | 설명 |
|---|---|---|
| `id` | `number` | |
| `questionId` | `number` | |
| `attemptNumber` | `number` | 질문 내 순번(1부터) |
| `submittedText` | `string` | "모르겠습니다"도 이 칸에 그대로 저장 |
| `isDontKnow` | `boolean` | FR-008 — 명시적 "모름" 제출과 오답을 구분해 집계할 수 있게 별도 플래그로 둔다 |
| `status` | `"graded" \| "retry_needed"` | FR-021 — 실패는 오답/모름이 아니라 이 상태로 |
| `verdict` | `"correct" \| "fluent_but_wrong" \| "unknown" \| null` | `status="retry_needed"`면 `null` |
| `correctParts` / `incorrectParts` | `string \| null` | FR-010/012 |
| `submittedAt` / `gradedAt` | `string \| string \| null` | |

**불변식**: 한 질문의 답변 시도는 오직 INSERT만 되고 절대 UPDATE되지 않는다 — 재시도(FR-021의 재시도 버튼)는 같은 질문에 새 `attemptNumber`로 새 행을 추가하는 것이다. 이렇게 하면 "몇 번 만에 맞혔는지" 같은 이력이 자연히 보존된다(F10 학습 기록이 나중에 이 이력을 그대로 읽을 수 있다).

### `HintUsage`

| 필드 | 타입 | 설명 |
|---|---|---|
| `questionId` | `number` | |
| `hintNumber` | `number` | 1~3 (FR-016의 3회 상한) |
| `hintText` | `string` | |
| `createdAt` | `string` | |

## 영속화 단계: 전용 SQLite 스키마 (`backend/src/study/schema.ts`, 파일: `내학습/study-sessions.sqlite`)

001~005의 어떤 캐시와도 FK로 얽히지 않는 독립 파일이다(research.md §4).

```sql
CREATE TABLE IF NOT EXISTS study_sessions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  path TEXT NOT NULL,
  target_label TEXT NOT NULL,
  target_material_id TEXT NULL,
  target_roadmap_id TEXT NULL,
  target_phase_id TEXT NULL,
  target_item_id TEXT NULL,
  timezone TEXT NOT NULL,
  started_at TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'active'
);

CREATE TABLE IF NOT EXISTS study_questions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id INTEGER NOT NULL REFERENCES study_sessions(id),
  order_index INTEGER NOT NULL,
  kind TEXT NOT NULL,
  prompt_text TEXT NOT NULL,
  concept_label TEXT NULL,
  current_step TEXT NOT NULL DEFAULT 'awaiting_answer',
  explanation_text TEXT NULL,
  explanation_shown_at TEXT NULL,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS study_answer_attempts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  question_id INTEGER NOT NULL REFERENCES study_questions(id),
  attempt_number INTEGER NOT NULL,
  submitted_text TEXT NOT NULL,
  is_dont_know INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL,
  verdict TEXT NULL,
  correct_parts TEXT NULL,
  incorrect_parts TEXT NULL,
  submitted_at TEXT NOT NULL,
  graded_at TEXT NULL,
  UNIQUE (question_id, attempt_number)
);

CREATE TABLE IF NOT EXISTS study_hint_usages (
  question_id INTEGER NOT NULL REFERENCES study_questions(id),
  hint_number INTEGER NOT NULL,
  hint_text TEXT NOT NULL,
  created_at TEXT NOT NULL,
  PRIMARY KEY (question_id, hint_number)
);

CREATE INDEX IF NOT EXISTS idx_study_questions_session ON study_questions(session_id, order_index);
CREATE INDEX IF NOT EXISTS idx_study_attempts_question ON study_answer_attempts(question_id, attempt_number);
```

- 005와 동일하게 `db.ts`는 스키마 버전 불일치를 삭제·재생성이 아니라 예외로 표면화한다(research.md §4) — 진행 중이던 학습 세션은 그 자체가 유일한 기록이다.
- `study_answer_attempts`에 UPDATE 문이 코드 어디에도 없어야 한다(위 불변식) — 이는 스키마가 아니라 `store.ts` 구현 규칙이므로 코드 리뷰(원칙 VI)에서 확인한다.

## 004 계약의 additive 확장 — 새 스키마 아님

`review_queue_items` 테이블(004가 이미 정의)에 새 컬럼을 추가하지 않는다. 이 기능은 그 테이블에 **행을 추가하는 새 함수**만 필요하다:

```ts
// backend/src/persistence/queries.ts — additive
function appendReviewQueueItem(item: {
  id: string          // 004 computeReviewItemId(item, topic, firstWrongDate)와 동일한 계산식
  item: string
  topic: string
  firstWrongDate: string   // YYYY-MM-DD
  stageLabel: string       // "1회차" 고정(F06 범위 밖 — 반복 단계 계산은 하지 않는다)
  nextReviewDate: string   // firstWrongDate + 1일(웹전환 명세 F06 "최초 오답 → 오답 발생일 + 1일" 규칙만 재사용)
}, dbPath?: string): void
```

- **보장**: 라이브 SQLite 파일(임시 파일 교체가 아니라 열려 있는 실제 캐시 파일)에 직접 `INSERT OR IGNORE`(004의 기존 관례와 동일한 이유 — 같은 id의 중복 삽입이 전체를 실패시키지 않게)한다. `내학습/복습큐.md`의 활성 큐 표 append는 이 함수의 책임이 아니라 `study/service.ts`가 별도로 수행한다(파일 쓰기와 캐시 쓰기를 한 함수에 몰아넣지 않아, 004의 기존 코드가 SQLite만 다루던 경계를 유지한다).

## 관계 요약

```text
study_sessions 1--* study_questions 1--* study_answer_attempts
study_questions 1--* study_hint_usages
```

`study_*` 테이블은 002/004/005의 어떤 테이블과도 FK로 연결되지 않는다 — `target_material_id`/`target_roadmap_id` 등은 생성 시점의 값을 복사해 둔 것일 뿐이다(005가 `roadmap_id`/`item_id`를 다룬 방식과 동일한 원칙).
