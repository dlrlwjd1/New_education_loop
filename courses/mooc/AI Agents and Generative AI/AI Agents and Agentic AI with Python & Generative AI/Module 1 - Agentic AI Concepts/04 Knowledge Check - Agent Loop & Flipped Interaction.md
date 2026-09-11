# Knowledge Check: Agent Loop & Flipped Interaction

## 개요
- Introduction, Flipped Interaction Pattern, The Agent Loop 세 영상 내용을 점검하는 **연습용(ungraded practice) 퀴즈**. 성적에 반영되지 않으며 무제한 재시도 가능.
- 실제 제출은 하지 않고, 복습용으로 문제만 정리해 둔다.

## 내용

### 문제 구성 (총 3문항, 각 1점)

**Q1. 다음 중 Agentic AI의 동작 방식을 가장 잘 설명한 것은?**
- a) AI가 초기 계획을 세우고 그 계획을 단계별로 그대로 따라간다
- b) AI가 행동(action)을 제안하고, 환경(environment)으로부터 피드백을 받아 다음 단계를 조정한다
- c) AI가 학습 데이터에서 학습한 패턴을 바탕으로 가장 그럴듯한 응답을 선택한다
- → **핵심은 (b)**: "제안 → 피드백 → 조정"의 반복. ([03 The Agent Loop](03%20The%20Agent%20Loop.md) 참고)

**Q2. 사용자가 식당 추천을 요청했을 때, AI가 즉답 대신 한 번에 하나씩 질문(요리 종류, 지역, 선호도 등)을 하며 정보를 업데이트해 나가는 방식의 주된 장점은?**
- a) AI가 점진적으로 맥락(context)을 수집하고, 사용자 응답에 따라 판단을 정교화할 수 있다
- b) AI가 응답을 생성할 때 학습 데이터에 의존할 필요가 줄어든다
- c) 필요한 단계 수를 최소화해 더 빠른 응답을 보장한다
- → **핵심은 (a)**: 이것이 바로 Flipped Interaction Pattern의 핵심 장점. ([02 Flipped Interaction Pattern](02%20Flipped%20Interaction%20Pattern.md) 참고)

**Q3. AI 시스템에서 에이전트 루프(agent loop)가 동작하는 순서를 가장 잘 나타낸 것은?**
- a) 작업 부여 → AI가 행동으로 번역 → 시스템이 실행 → AI가 피드백을 받아 계획을 조정 → 이 사이클 반복
- b) 작업 부여 → AI가 계획 생성 → 사람이 단계를 실행 → 명시적으로 요청할 때만 AI가 계획을 업데이트
- c) 작업 부여 → AI가 행동으로 번역 → 시스템이 실행 → 이전 단계를 다시 보지 않고 종료
- → **핵심은 (a)**: 이것이 정확히 Agent Loop의 6단계 반복 구조. ([03 The Agent Loop](03%20The%20Agent%20Loop.md) 참고)

## 요약
- 세 문항 모두 공통적으로 강조하는 것은 **"행동 → 피드백 → 적응"의 반복 사이클**이 Agentic AI/Agent Loop의 본질이라는 점.
- 정적인 "한 번에 계획 세우고 그대로 실행" 방식이나, 사람이 명시적으로 요청해야만 갱신되는 방식은 **Agentic AI가 아니다**라는 것이 공통 오답 패턴.
