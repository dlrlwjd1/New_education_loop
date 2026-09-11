# Day 3 - Intro to LangChain create_agent: The Easy Way to Build AI Agents

## 개요
- create_agent가 일반 에이전트 루프의 그래프 구성을 대신하는 방식을 소개한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821341#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 고수준 구성
모델·도구·시스템 프롬프트를 전달하면 create_agent가 실행 가능한 LangGraph 루프를 만든다. 직접 노드와 엣지를 작성할 때의 세밀한 제어를 일부 줄이는 대신 기본 에이전트를 간단히 구성한다.

### 이번 실습 범위
invoke와 비동기 ainvoke, 도구, 메모리, 구조화 출력, middleware를 차례로 붙인다. 이후 Node와 Playwright MCP로 브라우저를 사용할 수 있게 한다. 하위 그래프 엔진을 이해하되 매번 직접 재구현하지 않는 것이 요지다.

## 예시
```text
모델 + 시스템 지침 + 도구
→ create_agent
→ 내부 그래프 구성
→ invoke / await ainvoke
```

## 요약
- create_agent는 그래프를 구성하는 고수준 함수다.
- 체크포인트 등 하위 계층의 기능도 활용할 수 있다.
