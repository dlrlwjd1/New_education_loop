# Day 1 - LangChain Ecosystem Explained: The Four Layers for Building AI Agents

## 개요
- LangChain 생태계를 네 추상화 계층으로 나누어 설명한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821315#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 네 계층
기본 구성요소는 모델 호출·메시지·도구·구조화 출력을 표준화한다. LangGraph는 상태와 작업 의존성을 그래프로 조율한다. LangChain의 create_agent는 일반적인 도구 호출 루프를 LangGraph 위에 만들어 준다. Deep Agents는 여기에 계획·파일·하위 에이전트 등 준비된 기능을 더한다.

### 이름이 헷갈리는 이유
LangChain의 고수준 에이전트가 LangGraph 위에서 실행되고, 그 그래프가 다시 LangChain 기본 구성요소를 사용할 수 있다. LangSmith는 관측·평가 제품이며 배포 제품과 라이브러리도 구분해야 한다.

### 학습 순서
이번 주는 기본 호출에서 그래프, create_agent, Deep Agents 순으로 올라간다. 일반 에이전트를 만들기 위해 모든 저수준 구성을 매번 직접 작성할 필요는 없다.

## 예시
```text
Deep Agents
    ↓
LangChain create_agent
    ↓
LangGraph 실행·상태 조율
    ↓
모델·메시지·도구 등 기본 구성요소
```

## 요약
- 각 계층이 해결하는 문제를 구분한다.
- LangSmith 관측과 에이전트 라이브러리는 역할이 다르다.
