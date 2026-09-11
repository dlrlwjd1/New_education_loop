# Multiagent LLM Coordination Agent

## 개요
- 루트 LLM 에이전트가 전문 에이전트를 도구처럼 호출하는 동적 오케스트레이션을 구현한다.

## 내용
### 연구·요약 팀
Research Agent는 Google Search로 자료를 찾고 결과를 `research_finding` 상태 키에 저장한다. Summarizer Agent는 이를 3~5개 핵심 포인트로 정리한다. Root Coordinator는 두 에이전트를 `AgentTool`로 받아 호출 순서를 판단하고 최종 응답을 만든다.

## 예시
```text
Root Coordinator
→ Research Agent
→ shared state
→ Summarizer Agent
→ 최종 요약
```

## 요약
- 전문 역할을 분리하면 프롬프트와 디버깅 범위가 작아진다.
- LLM 기반 조정은 유연하지만 실행 순서가 완전히 보장되지는 않는다.
