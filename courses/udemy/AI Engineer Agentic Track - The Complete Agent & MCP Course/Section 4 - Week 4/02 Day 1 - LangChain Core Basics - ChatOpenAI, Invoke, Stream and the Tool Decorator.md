# Day 1 - LangChain Core Basics: ChatOpenAI, Invoke, Stream and the Tool Decorator

## 개요
- ChatOpenAI·메시지 객체·invoke·stream·tool 데코레이터를 실습한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821319#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 모델과 메시지
ChatOpenAI 같은 래퍼가 공급자 호출을 감싼다. invoke는 실행 결과를 반환하고 stream은 출력 조각을 순회하게 한다. SystemMessage·HumanMessage·AIMessage로 대화 역할을 표현하며 메시지 사전도 사용할 수 있다.

### 공급자 전환
OpenAI 호환 endpoint에는 base URL과 해당 공급자의 키를 지정한다. 영상은 OpenRouter 경유 모델도 호출해 본다.

### 도구 정의
타입 힌트와 docstring이 있는 함수를 tool 데코레이터로 감싼다. 가짜 주가 사전을 조회하는 예제로 도구의 이름·설명·인수 스키마와 invoke 결과를 확인한다. 이는 실제 시장 데이터 조회가 아니다.

## 예시
```text
일반 호출: 모델.invoke(메시지)
스트리밍: 모델.stream(메시지)의 조각 순회
도구: 함수 + 타입 힌트 + docstring → 이름·설명·입력 스키마
```

## 요약
- invoke는 실행 가능한 구성요소에 공통으로 쓰이는 인터페이스다.
- 도구 설명과 입력 구조는 함수 정의에서 만들어진다.
