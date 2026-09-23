# 인터페이스 계약: AI 채점·질문 생성 (`backend/src/ai/`)

이 문서가 정의하는 다섯 함수가 이 저장소에서 실제로 AI(`claude -p`)를 호출하는 유일한 지점이다(`backend/src/ai/grader.ts`). `backend/src/study/`를 포함한 다른 모든 모듈은 이 다섯 함수만 호출하고, `child_process`나 프롬프트 문자열을 직접 다루지 않는다(research.md §7 — QA가 이 다섯 함수만 모킹해 나머지를 결정적으로 검증할 수 있게 하는 경계).

## 공통 실패 형태

다섯 함수 모두 성공 시 `{ status: "graded", ...}`(함수마다 다른 페이로드), 실패 시 공통으로 `{ status: "retry_needed"; reason: string }`를 반환한다. `reason`은 사람이 읽을 서버 로그용이며 화면에 그대로 노출하지 않는다(research.md §6 — 실패 원인을 세분화해 사용자에게 보여주지 않는다).

```ts
type AiCallResult<T> = ({ status: "graded" } & T) | { status: "retry_needed"; reason: string }
```

`retry_needed`가 나오는 경우: 프로세스 타임아웃(90초, research.md §6), 0이 아닌 종료 코드, 응답 JSON 파싱 실패, `structured_output` 누락, 또는 판정값이 아래 각 함수가 정의한 허용된 열거값이 아닌 경우(FR-022 — 스키마 강제와 별개로 서버가 다시 검증한다).

## `generateRetrievalQuestion(input): AiCallResult<{ questionText: string; conceptLabel: string }>`

```ts
interface GenerateRetrievalQuestionInput {
  path: "topic" | "material"
  targetLabel: string          // 주제명 또는 자료 제목
  materialContext?: string     // path="material"일 때 자료 본문 발췌(002/004가 이미 읽은 것)
  priorKnowledgeNote: string   // 사용자가 "지금 아는 것을 적어 주세요"에 답한 내용
}
```

- **보장**: 반환된 `questionText`는 하나의 질문만 담아야 한다(복수 질문 나열 금지 — FR-008 "한 번에 질문 하나"). `conceptLabel`은 이 질문이 다루는 개념을 짧게 표현한 것으로, 이후 오답 등록 시(FR-013) 복습 항목의 "항목" 칸으로 그대로 쓰인다.

## `assessPriorKnowledge(input): AiCallResult<{ hasMaterial: boolean }>`

```ts
interface AssessPriorKnowledgeInput {
  targetLabel: string
  materialContext?: string
  userNote: string   // "지금 아는 것을 적어 주세요"에 대한 답변
}
```

- **보장**: `hasMaterial: false`는 FR-017의 "재료가 전혀 없다"는 판정과 정확히 대응한다 — 이 값이 `false`면 `study/sessionMachine.ts`는 힌트 세 번을 거치지 않고 곧바로 설명으로 전환한다(data-model.md 상태 기계 참고). 이 함수는 정답·오답을 판정하지 않는다 — "질문을 시작할 재료가 있는가"만 판정한다.

## `gradeAnswer(input): AiCallResult<{ verdict: "correct" | "fluent_but_wrong" | "unknown"; correctParts: string; incorrectParts: string }>`

```ts
interface GradeAnswerInput {
  questionText: string
  materialContext?: string
  submittedText: string
  isDontKnow: boolean   // true면 채점 없이 verdict="unknown"으로 즉시 확정해도 됨(AI 호출 자체를 생략하는 최적화는 구현 재량)
}
```

- **보장**: FR-010의 세 갈래(맞음/유창하지만 틀림/모름) 중 하나만 반환한다. `incorrectParts`는 FR-012가 요구하는 대로 `submittedText`의 표현을 인용해야 한다(품질은 이 계약이 강제하지 않는다 — research.md §7, 실제 채점 품질은 자동 테스트 범위 밖).
- `isDontKnow: true`인 호출은 AI를 부르지 않고 `{status:"graded", verdict:"unknown", correctParts:"", incorrectParts:""}`를 즉시 반환해도 이 계약을 만족한다(구현 재량 — "모르겠습니다"는 판정이 이미 자명하다).

## `generateHint(input): AiCallResult<{ hintText: string }>`

```ts
interface GenerateHintInput {
  questionText: string
  materialContext?: string
  priorIncorrectAnswers: string[]   // 지금까지의 오답들(같은 힌트를 반복하지 않게)
  hintNumber: 1 | 2 | 3
}
```

- **보장**: 정답을 직접 말하지 않는다(FR-024의 "답변 전 정답 노출 금지" 원칙이 힌트에도 적용된다 — 힌트는 정답으로 가는 단서이지 정답 자체가 아니다). 이 계약은 그 경계를 프롬프트 설계(research.md §5)로 강제하며, 형식적으로는 검증하지 않는다.

## `generateExplanation(input): AiCallResult<{ explanationText: string }>`

```ts
interface GenerateExplanationInput {
  questionText: string
  materialContext?: string
}
```

- **보장**: `explanationText`는 FR-018의 제약(5분 분량 이하, 부품 개념 3~5개)을 만족하도록 프롬프트에서 요청한다 — 정확한 분량 준수는 AI 출력 품질에 속하므로 이 계약이 기계적으로 강제하지는 않는다(research.md §7과 동일한 경계).

## 서브프로세스 계약 (`backend/src/ai/claudeProcess.ts`)

위 다섯 함수가 공통으로 쓰는 하위 계층. 다른 모듈은 이 함수를 직접 호출하지 않는다.

```ts
function runClaudeJson<T>(prompt: string, jsonSchema: object, systemPrompt: string): Promise<AiCallResult<T>>
```

- `node:child_process`의 `execFile`(셸 미경유)로 `claude -p <prompt> --output-format json --json-schema <schema> --append-system-prompt <systemPrompt> --restricted --permission-prompts none --strict-mcp-config`를 실행한다(research.md §1).
- 타임아웃 90초(research.md §6). 타임아웃 시 자식 프로세스를 반드시 종료(kill)한다 — 좀비 프로세스를 남기지 않는다.
- stdout을 JSON으로 파싱해 `.structured_output`을 꺼낸다. 파싱 실패·필드 누락·타임아웃·비정상 종료 모두 `{status:"retry_needed", reason}`로 수렴한다.
- `--restricted --strict-mcp-config`는 모든 호출에 고정이다(research.md §5 — 학습 자료·사용자 답변에 섞인 지시문이 도구를 실행하지 못하게 하는 구조적 방어).

## 안정성 계약

- 이 다섯 함수의 시그니처를 바꾸는 것은 `study/service.ts`와 QA 테스트 모두에 영향을 준다 — 헌법의 "역할 간 통합 절차"에 따라 통보 후 진행한다.
- 이 계약은 프롬프트의 정확한 문구를 규정하지 않는다 — 문구는 구현 세부사항이며, `--json-schema`로 강제되는 반환 형태와 위 각 함수의 "보장" 항목만 계약이다.
