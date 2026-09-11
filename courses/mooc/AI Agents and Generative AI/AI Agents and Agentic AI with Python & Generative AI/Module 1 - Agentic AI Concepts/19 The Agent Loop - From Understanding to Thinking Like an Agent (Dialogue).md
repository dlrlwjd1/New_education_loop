# The Agent Loop: From Understanding to Thinking Like an Agent (Dialogue)

## 개요
- MOOC Coach와의 **대화형 복습 세션**. **16~18**.md)에서 직접 구현한 Agent Loop(프롬프트 구성 → 응답 생성 → 파싱 → 실행 → 메모리 갱신 → 종료 판단)를 "기계적으로 이해하는 단계"에서 "에이전트처럼 사고하는 단계"로 넘어가도록 돕는 세션.
- Dialogue는 AI가 실시간으로 진행하므로 매번 대화 내용이 달라질 수 있어 고정된 스크립트는 없음.

## 내용
- 이 Dialogue의 목적은 지금까지 배운 개별 코드 조각(agent_rules, memory, parse_action, 도구 실행, 종료 조건)을 **"에이전트가 왜 이렇게 설계되었는가"라는 관점에서 다시 통합적으로 사고**해보는 것.
- 참고할 이전 자료: **16 Building Your First Agent**.md), **17 AI Agent / Environment Interface**.md), **18 AI Agent Feedback and Memory**.md).
- Dialogue는 AI가 진행하므로 실수가 있을 수 있어 내용을 검증하며 진행할 것. 개인정보/민감정보는 공유하지 않는다.

## 요약
- 이 Dialogue는 새로운 개념을 배우는 자리가 아니라, Module 1에서 구현한 **전체 Agent Loop(6단계)를 개념적으로 통합 정리**하며 "코드를 따라 치는 수준"에서 "에이전트 설계자로서 사고하는 수준"으로 넘어가는 복습 세션이다.
