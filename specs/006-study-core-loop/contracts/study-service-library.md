# 인터페이스 계약: 학습 세션 서비스 라이브러리 (`backend/src/study/`)

`backend/src/web/routes/study.ts`는 이 문서가 정의하는 함수만 호출한다. `contracts/ai-grading-contract.md`의 다섯 함수, 002의 `listRoadmaps`/`getRoadmapDetail`/`getMaterialById`, 004의 `getReviewQueueStatus`/`appendReviewQueueItem`을 내부적으로 소비한다.

## `resolveStartTarget(input): ResolveTargetResult`

```ts
interface ResolveStartTargetInput {
  freeText?: string          // 사용자가 입력한 주제명/로드맵명(모호할 수 있음)
  explicitPath?: "topic" | "material" | "roadmap_continue" | "auto"
  materialId?: string        // path="material"일 때, 이미 검색·선택된 자료 id
  roadmapId?: string         // path="roadmap_continue"일 때
}

type ResolveTargetResult =
  | { kind: "resolved"; path: "topic" | "material" | "roadmap_continue"; targetLabel: string; materialId?: string; roadmapId?: string; phaseId?: string; itemId?: string }
  | { kind: "ambiguous"; candidates: Array<{ path: "topic" | "material" | "roadmap_continue"; label: string; materialId?: string; roadmapId?: string }> }
  | { kind: "auto_suggestions"; dueReviewCount: number; inProgressRoadmaps: Array<{ roadmapId: string; title: string }>; candidateRoadmaps: Array<{ roadmapId: string; title: string }> }
  | { kind: "not_found"; reason: string }
```

- **보장**: `freeText`가 주제명인지 로드맵명인지 애매하면(예: 002의 로드맵 제목과 부분 일치하면서 동시에 새로운 주제로도 읽힐 수 있으면) `kind:"ambiguous"`를 반환한다 — 이 함수가 조용히 하나를 확정하지 않는다(FR-002).
- `explicitPath`가 생략되고 `freeText`도 없으면 `kind:"auto_suggestions"`를 반환하며, `dueReviewCount → inProgressRoadmaps → candidateRoadmaps` 순으로 무엇을 먼저 보여줄지는 호출자(라우트)가 이 순서 그대로 판단한다(FR-004).
- `materialId`가 등록되지 않은 값이면 `kind:"not_found"`를 반환한다 — 임의의 서버 경로를 열지 않는다(FR-003).

## `startSession(target, options?): StudySession`

```ts
interface StartSessionOptions {
  timezone?: string   // 생략 시 "Asia/Seoul"
  now?: Date           // 테스트 전용
  dbPath?: string       // 테스트 전용 — study-sessions.sqlite 재정의
}
```

- **보장**: `resolveStartTarget()`의 `kind:"resolved"` 결과 하나를 받아 `StudySession`을 만들고, 그 첫 질문(`kind:"prior_knowledge"`, `currentStep:"awaiting_answer"`)을 함께 생성한다. `path="material"`이면 `getMaterialById()`로 본문을 먼저 읽은 뒤 그 제목과 함께 사전 지식 질문을 만든다(FR-006). 응답 어디에도 자료 요약이나 정답을 포함하지 않는다(FR-007).

## `submitAnswer(questionId, submission, options?): SubmitAnswerResult`

```ts
interface AnswerSubmission {
  submittedText: string
  isDontKnow: boolean
  requestId?: string   // 중복 제출 방지(FR-028) — 같은 requestId 재전송은 새 시도를 만들지 않고 직전 결과를 반환
}

type SubmitAnswerResult =
  | { outcome: "retry_needed"; attemptId: number }
  | { outcome: "correct"; question: StudyQuestionView }
  | { outcome: "hint_given"; question: StudyQuestionView; hint: string }
  | { outcome: "explanation_shown"; question: StudyQuestionView; explanation: string }
  | { outcome: "resolved_incorrect" | "resolved_unknown"; question: StudyQuestionView; reviewItemRegistered: boolean }
```

- **보장**: 이 함수가 이 기능의 유일한 상태 전이 지점이다(FR-027). 내부 순서: (1) 답변을 `study_answer_attempts`에 저장(FR-009, 채점 전에 먼저 저장) → (2) 질문이 `kind:"prior_knowledge"`면 `assessPriorKnowledge()`를, 아니면 `gradeAnswer()`를 호출 → (3) `contracts/ai-grading-contract.md`가 `retry_needed`를 반환하면 이 시도를 그 상태로 저장하고 세션의 `current_step`은 바꾸지 않은 채 반환(FR-021) → (4) 성공하면 `data-model.md`의 상태 기계 표대로 다음 상태를 계산하고, 필요하면 `generateHint()`/`generateExplanation()`을 호출해 그 결과를 저장 → (5) `resolved_incorrect`/`resolved_unknown`이면 004의 `appendReviewQueueItem()`과 `내학습/복습큐.md` append를 수행(FR-013, research.md §3)한다. 이때 이미 같은 (개념·주제·오늘 날짜) 조합이 이 세션 안에서 등록된 적이 있으면 다시 등록하지 않는다(FR-014).
- `requestId`가 이미 처리된 값이면, AI를 다시 호출하지 않고 그 `requestId`로 저장했던 결과를 그대로 반환한다(FR-028).

## `retryGrading(attemptId, options?): SubmitAnswerResult`

- **보장**: `status:"retry_needed"`인 답변 시도에 대해서만 동작한다. 같은 `submittedText`로 채점을 다시 시도하며, 새 답변 입력을 요구하지 않는다(User Story 3).

## `getSessionView(sessionId, options?): StudySessionView | null`

```ts
interface StudyQuestionView {
  questionId: number
  promptText: string
  currentStep: string
  hintsGiven: string[]
  explanation: string | null
  latestAttempt: { status: string; verdict: string | null; correctParts: string | null; incorrectParts: string | null } | null
}

interface StudySessionView {
  sessionId: number
  path: string
  targetLabel: string
  questions: StudyQuestionView[]   // 지금까지의 질문 전부(이력 표시용)
}
```

- **보장**: 답변 전에는 정답·힌트가 화면에 나갈 이유가 없는 시점(`currentStep:"awaiting_answer"`이고 아직 힌트가 없는 첫 질문)에서 `hintsGiven`/`explanation`은 빈 값이어야 한다(FR-007/FR-024). 존재하지 않는 `sessionId`는 예외 대신 `null`.

## 안정성 계약

- 위 함수들의 시그니처를 바꾸는 것은 `web/routes/study.ts`(프론트엔드가 소비)와 QA 테스트에 영향을 준다 — 헌법의 "역할 간 통합 절차"에 따라 통보 후 진행한다.
- 이 계약은 002·004의 공개 함수 시그니처를 바꾸지 않는다(004에 추가하는 `appendReviewQueueItem`은 `contracts/ai-grading-contract.md`가 아니라 004 자신의 계약 문서에 additive로 기록한다).
- `dbPath`(테스트 전용)를 생략하면 실제 `내학습/study-sessions.sqlite`를 쓴다 — 002·004·005와 동일한 관례.
