# Agent Tools Vs Sub-Agents Vs ADK Tools

## 개요
- AgentTool, Sub-agent handoff와 ADK 도구 종류의 차이를 설명한다.

## 내용
### 제어권 차이
AgentTool은 루트 에이전트가 특정 작업을 위임하고 결과를 돌려받은 뒤 계속 제어한다. Sub-agent handoff는 전문 에이전트에 제어를 완전히 넘기며 기존 에이전트가 흐름에서 빠진다.

ADK는 Function Tool, Long-running Function Tool, AgentTool, MCP Tool, OpenAPI 기반 도구, Google Search·Code Executor와 Google Cloud·서드파티 도구를 제공한다.

## 예시
- 계산 후 원래 작업 계속: AgentTool
- 고객 지원 부서로 대화 인계: Sub-agent handoff

## 요약
- 결과를 루트가 계속 사용할지, 대화 제어를 넘길지에 따라 선택한다.
