# Principles of Effective Prompt Engineering for Agents

## 개요
- Prompt가 agent의 행동·coordination·tool use를 결정하는 설계 요소인 이유와 핵심 원칙을 설명한다.

## 내용
- Prompt engineering은 model 재학습 없이 instruction을 개선해 정확성·관련성을 높인다.
- 모호한 prompt는 hallucination, task drift, tool 오용과 비효율적 협업을 만든다.
- Role·persona, goal, context, output structure와 성공 기준을 명확히 정의한다.
- 금지 action, safety·ethical boundary와 tool 사용 조건을 포함한다.
- Prompt는 반복 평가·수정하며 복잡한 task에는 단계와 decision 기준을 제공한다.

## 예시
```text
Role: cautious healthcare analyst
Task: summarize evidence for hospital leaders
Constraints: cite data, define jargon, avoid hype
Output: 3 findings + risks + recommendation
```

## 요약
- 좋은 prompt는 자연어 요청이 아니라 agent 행동을 통제하는 structured behavioral specification이다.
