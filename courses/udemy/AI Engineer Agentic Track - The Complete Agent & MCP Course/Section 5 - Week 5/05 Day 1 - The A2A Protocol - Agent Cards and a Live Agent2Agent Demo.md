# Day 1 - The A2A Protocol: Agent Cards and a Live Agent2Agent Demo

## 개요
- A2A의 에이전트 발견·기능 설명·호출을 Agent Card와 번역 데모로 살펴본다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821595#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### A2A의 역할
Agent2Agent는 다른 에이전트의 기능을 발견하고 요청을 전달하는 통신 방식을 정의한다. Agent Card는 이름과 제공 기능 등을 설명하는 JSON 문서다. MCP 도구 호출과 비교하되, 다른 에이전트를 MCP 도구로 감싸는 구현도 가능하다고 설명한다.

### 번역 데모
번역 앱을 A2A endpoint로 노출하고 `.well-known/agent-card.json`을 브라우저나 curl로 확인한다. A2A 데모 폴더에서 ADK web을 시작하면 Spanish concierge가 나타난다. 잘못된 상위 폴더에서 실행하면 다른 앱 목록이 보인다.

### 평가 관점
강사의 보급 수준과 전망 평가는 촬영 당시 의견이다. 업무 문제를 해결하는 데 발견·통신 프로토콜이 필요한지, 이미 가진 도구 호출로 충분한지 비교하는 과제를 제시한다.

## 예시
```text
클라이언트 → Agent Card 조회 → 번역 기능 확인
→ A2A 요청 → 번역 에이전트 → 응답
```

## 요약
- Agent Card는 외부 에이전트의 기능을 설명한다.
- 프로토콜 도입은 실제 통합 요구에 맞춰 판단한다.
