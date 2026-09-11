# Multi-Agent Customer Support Project

## 개요
- 강좌의 agent·task·crew·flow 설계를 고객지원 assistant에 적용하는 공개 practice project 지침을 정리한다.

## 내용

### 문제와 역할 분해
- 고객 요청을 category·urgency로 분류하는 triage agent를 둔다.
- knowledge agent는 승인된 문서에서 관련 정책·제품 정보를 찾는다.
- response agent는 검색 결과와 고객 context로 답변 초안을 만들고 quality/safety agent가 근거·tone·정책 준수를 확인한다.
- 환불, 보안, 법적 문제나 불확실한 답은 human support로 escalation한다.

### Task와 flow
- 각 task의 input·expected output을 schema로 정의하고 request ID로 artifact와 trace를 연결한다.
- `triage -> retrieve -> draft -> validate -> respond/escalate` 흐름에 timeout, bounded retry와 fallback을 둔다.
- 개인 정보는 필요한 범위만 전달하고 log·prompt에서 masking한다.

### 검증 기준
- intent routing 정확도, source-grounded answer, 정책 위반, 해결률, escalation 적절성, latency와 cost를 측정한다.
- 정상 문의뿐 아니라 문서에 없는 질문, prompt injection, 모순된 고객 정보와 tool failure를 시험한다.
- generated response와 근거 source를 함께 검토해 그럴듯하지만 틀린 답을 탐지한다.

## 예시
```text
Request -> TriageAgent -> KnowledgeAgent -> ResponseAgent
                                      -> SafetyReviewer
                                      -> answer | HumanSupport
```

## 요약
- Module 4 practice project는 collaborative customer support crew를 설계하며, 채점 평가는 노트에서 제외했다.
