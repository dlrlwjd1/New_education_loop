# Single-Agent vs Multi-Agent AI Architectures

## 개요
- 한 agent가 모든 reasoning·tool을 담당하는 구조와 역할별 agent가 협력하는 multi-agent architecture를 비교한다.

## 내용
- Single-agent system은 한 agent가 input을 해석하고 memory·tool을 사용해 output을 만든다.
- 구조가 단순하고 coordination overhead가 낮지만 prompt·context가 커지고 전문성·확장성·failure isolation이 제한된다.
- Multi-agent system은 여러 agent가 communication, coordination, cooperation, negotiation을 통해 shared objective를 수행한다.
- Coordinator가 요청을 subtask로 분해하고 specialist agent에 delegate한 뒤 결과를 통합할 수 있다.
- Multi-agent는 복합 workflow에 유리하지만 handoff schema, shared context, conflict resolution과 관측성이 필요하다.

## 예시
```text
Single: User -> General Agent -> tools -> answer
Multi: User -> Coordinator -> Research/Analysis/Writer -> integrated answer
```

## 요약
- 단순하고 제한된 task에는 single agent, 전문 역할·병렬 작업·복합 목표에는 통제된 multi-agent 구조가 적합하다.
