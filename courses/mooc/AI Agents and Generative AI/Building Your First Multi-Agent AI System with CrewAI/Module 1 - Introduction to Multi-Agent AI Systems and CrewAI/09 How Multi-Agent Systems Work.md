# How Multi-Agent Systems Work

## 개요
- Multi-agent system의 perception·reasoning·action·interaction·orchestration 흐름과 구조 유형을 설명한다.

## 내용
- Agent는 환경을 관찰하고 판단·행동한 뒤 중간 결과를 다른 agent와 공유한다.
- 구성요소는 독립 목표·능력을 가진 agent, 동작 환경, 상호작용 규칙과 communication channel이다.
- Cooperative, adversarial, mixed, hierarchical, heterogeneous architecture는 목표와 역할 관계가 다르다.
- 전문 agent를 추가해 확장하고 책임을 분산할 수 있어 scalability·reliability·flexibility가 높아진다.
- CrewAI는 역할 기반, LangGraph는 stateful graph, AutoGen은 conversation, LlamaIndex는 retrieval 중심 접근을 제공한다.

## 예시
```text
perceive -> reason -> act -> communicate -> orchestrate toward shared goal
```

## 요약
- Multi-agent system은 전문 agent의 결과를 orchestration해 단일 agent보다 복잡한 workflow를 처리한다.
