# What Is CrewAI?

## 개요
- CrewAI가 역할 기반 autonomous agent team을 구성·조정하는 Python framework인 이유를 설명한다.

## 내용
- 조직의 반복 coordination, siloed knowledge와 manual handoff를 agent orchestration으로 줄이는 것이 목적이다.
- 큰 문제를 작은 task로 분해하고 명확한 role·goal을 가진 agent에게 delegate한다.
- Event-driven orchestration, fine-grained control, native crew integration과 여러 LLM·structured output을 지원한다.
- Content, customer support, research/report, business operation, stock analysis와 email automation에 적용할 수 있다.
- 사전 설계·configuration, token/API 비용과 multi-agent debugging·monitoring 복잡성이 trade-off다.

## 예시
```text
ResearchAgent + WriterAgent + ReviewerAgent -> coordinated report crew
```

## 요약
- CrewAI는 고립된 AI tool을 명시적 역할과 task로 연결해 협업 가능한 team으로 만든다.
