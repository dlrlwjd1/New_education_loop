# Day 3 - Intro to Agno: The Fast, Lightweight AI Agent Framework

## 개요
- Agno의 가벼운 Agent 구성과 AgentOS의 역할을 소개한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821629#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 프레임워크와 실행 제품
영상은 Agno를 이전 Phidata에서 이어진 가벼운 프레임워크로 소개한다. AgentOS는 배포·실행·확장을 위한 별도 제품군이다. 생성 오버헤드가 작다는 특성과 모델 응답 지연 자체는 구분해야 한다.

### 기본 인터페이스
모델 객체·instructions·일반 함수 도구를 사용하고 비동기 arun으로 실행한다. MCP 도구도 연결할 수 있다. 버전 변경에 따른 API 차이와 배포 제품의 제공 조건은 사용 환경에서 확인할 사항이다.

## 예시
```text
Agno: 에이전트·모델·도구 구성
AgentOS: 구성한 에이전트의 운영 환경
```

## 요약
- 가벼운 객체 생성과 LLM 추론 속도는 다른 지표다.
- 라이브러리와 운영 제품을 구분한다.
