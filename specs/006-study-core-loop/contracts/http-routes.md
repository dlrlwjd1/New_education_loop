# 인터페이스 계약: HTTP 라우트 (`backend/src/web/routes/study.ts`)

001~005와 동일하게 서버 렌더링 단일 앱이다(research.md §2 — 매 턴이 완결된 요청/응답). 모든 응답은 `text/html`. 각 라우트는 `contracts/study-service-library.md`의 함수만 호출한다.

## `GET /study/new`

- **역할**: 학습 시작 화면(User Story 1·4·5). 주제 입력창, 자료 검색 진입(003의 `/materials` 재사용 링크), 로드맵 이어하기 진입(003의 `/roadmaps` 재사용 링크), "무엇을 할지 찾기" 버튼을 보여준다.
- **응답**: 200. 이 화면 자체는 아직 세션을 만들지 않는다 — `resolveStartTarget()`을 호출하지 않는다.

## `POST /study/start`

- **역할**: 실제 시작 처리. 폼 파라미터는 `contracts/study-service-library.md`의 `ResolveStartTargetInput`과 동일한 필드(`freeText?`, `explicitPath?`, `materialId?`, `roadmapId?`).
- **데이터**: `resolveStartTarget()` → 결과에 따라 분기.
- **응답**:
  - `kind:"resolved"` → `startSession()` 호출 후 303으로 `/study/:sessionId`로 리다이렉트(005의 PRG 패턴과 동일한 이유 — 새로고침 시 세션이 중복 생성되지 않게).
  - `kind:"ambiguous"` → 200으로 선택지 화면(각 후보가 다시 `POST /study/start`를 명시적 `explicitPath`/`materialId`/`roadmapId`로 호출하는 폼).
  - `kind:"auto_suggestions"` → 200으로 제안 목록 화면(FR-004 순서 그대로: 복습 대상 → 진행 중 로드맵 → 로드맵 후보).
  - `kind:"not_found"` → 200(또는 422)으로 오류 안내 + 다른 자료 선택/주제 모드 전환 링크(FR-026).

## `GET /study/:sessionId`

- **역할**: 현재 세션 상태 화면(모든 User Story의 메인 화면). `getSessionView()`로 조회.
- **응답**: 200(존재), 404(`getSessionView`가 `null` — FR-007의 "존재하지 않는 세션에 임의 데이터를 보여주지 않는다"에 대응, spec.md Edge Cases). 화면은 `currentStep`에 따라 다르게 렌더링한다 — 답변 입력 폼(`awaiting_answer`/`awaiting_hint_retry`), 설명 패널(`awaiting_explanation_ack`), 종결 안내(`resolved_*`).
- **보장**: 답변을 아직 제출하지 않은 질문에는 정답·힌트가 응답 HTML 어디에도 없다(FR-024, SC-001/SC-006 — 실제 네트워크 응답을 검사해 검증 가능해야 한다).

## `POST /study/:sessionId/questions/:questionId/answer`

- **역할**: 답변(또는 "모르겠습니다") 제출(User Story 1·2). 폼 파라미터: `submittedText`, `isDontKnow`(체크박스), `requestId`(hidden field, 폼 렌더링 시 서버가 생성해 심어둠 — FR-028 중복 제출 방지).
- **데이터**: `submitAnswer(questionId, { submittedText, isDontKnow, requestId })`.
- **응답**: 303으로 `GET /study/:sessionId`로 리다이렉트(PRG 패턴 — 채점에 15~20초가 걸리므로research.md §2, 그 시간 동안 이 POST 요청이 응답을 지연시킨 뒤에 리다이렉트한다). 리다이렉트된 화면이 `outcome`에 따라 판정 결과·힌트·설명·복습 등록 여부를 보여준다.
- **보장**: 같은 `requestId`로 두 번 도착해도 채점이 두 번 일어나지 않는다(FR-028).

## `POST /study/answers/:attemptId/retry`

- **역할**: "채점 대기/재시도 가능" 상태의 답변을 다시 채점(User Story 3).
- **데이터**: `retryGrading(attemptId)`.
- **응답**: 303으로 그 답변이 속한 `GET /study/:sessionId`로 리다이렉트.

## 안정성 계약

- 이 라우트들의 경로·파라미터·상태 코드 의미를 바꾸는 것은 프론트엔드·QA 서브에이전트 모두에게 영향을 준다 — 헌법의 "역할 간 통합 절차"에 따라 통보 후 진행한다.
- 이 계약은 `study-service-library.md`/`ai-grading-contract.md`의 함수 시그니처를 바꾸지 않는다 — 라우트는 오직 호출자다.
- 채점이 진행되는 동안(15~20초, research.md §1) 브라우저는 표준 폼 제출 대기 상태를 보인다 — 이 계약은 별도의 "채점 중" 중간 화면을 요구하지 않지만, 프론트엔드가 제출 버튼에 대기 표시(예: 버튼 비활성화 + "채점 중입니다" 텍스트)를 추가하는 것은 권장된다(quickstart.md 참고).
