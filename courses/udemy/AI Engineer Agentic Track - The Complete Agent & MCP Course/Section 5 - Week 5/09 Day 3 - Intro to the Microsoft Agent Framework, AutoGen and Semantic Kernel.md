# Day 3 - Intro to the Microsoft Agent Framework, AutoGen and Semantic Kernel

## 개요
- Microsoft Agent Framework와 AutoGen·Semantic Kernel의 관계를 소개한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821621#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 계보 이해
영상은 원래 AutoGen, 커뮤니티의 AG2, 재설계된 Microsoft AutoGen을 구분하고 Microsoft Agent Framework가 AutoGen·Semantic Kernel의 방향을 모으는 플랫폼이라고 설명한다. 제품의 지원 상태와 전망은 촬영 시점 설명이다.

### 기능과 선택 기준
Python·.NET, 일반 함수 도구, MCP, 에이전트 실행과 더 복잡한 workflow 기능을 소개한다. 이번 실습은 기본 Agent.run 루프에 집중한다. 이름과 API가 바뀐 이력이 있어 설치 버전과 예제의 대응을 확인해야 한다.

## 예시
```text
기본 실습: Agent + 함수 tools + MCP → run
추가 기능: 더 복잡한 workflow·telemetry·.NET 연동
```

## 요약
- AG2와 Microsoft 계열의 이름을 혼동하지 않는다.
- 프레임워크의 계보와 현재 실습 API를 구분한다.
