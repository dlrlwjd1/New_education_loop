# Day 1 - Intro to Google ADK and the Agent Development Kit

## 개요
- Google ADK를 시작으로 여섯 프레임워크를 같은 다섯 단계로 비교하는 주차를 소개한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821563#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 비교 순서
Google ADK와 A2A, Strands·Pydantic AI, Microsoft Agent Framework·Agno, TypeScript 기반 Mastra를 살펴본다. 마지막에는 각 worker를 큰 Agent Loop에 연결한다.

### 공통 다섯 단계
모델·지침으로 에이전트를 만들고 단순 응답을 실행한다. 그다음 함수 도구, MCP 도구를 추가한 뒤 목표를 수행하는 반복 루프로 확장한다. 같은 과제를 반복해 문법보다 공통 원리를 익힌다.

### ADK 특징
함수를 도구로 직접 사용하고 ADK web으로 관측한다. MCP·A2A 연결과 여러 모델 선택을 지원하는 구성을 소개한다. 사용 언어·팀의 개발 방식·필요한 기능에 맞춰 선택하는 것이 강사의 비교 기준이다.

## 예시
```text
Agent 생성 → 실행 → 함수 도구 → MCP → 목표 수행 루프
같은 다섯 단계를 여섯 프레임워크에 적용
```

## 요약
- 동일 과제로 프레임워크 차이를 비교한다.
- 단순 모델 응답에서 도구 기반 목표 수행으로 확장한다.
