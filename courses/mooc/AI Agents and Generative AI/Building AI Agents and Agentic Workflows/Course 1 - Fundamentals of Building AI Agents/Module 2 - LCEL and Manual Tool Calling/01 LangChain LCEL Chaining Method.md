# LangChain LCEL Chaining Method

> MOOC video · [원본 학습 항목](https://www.mooc.org/learn/fundamentals-of-building-ai-agents/lecture/8joBM/langchain-lcel-chaining-method)

## 개요
- LangChain의 최신 프롬프트 엔지니어링 접근 방식을 활용하여 유연하고 조합 가능한 체인을 구축하는 방법을 설명할 수 있습니다.

## 내용
- LangChain의 최신 프롬프트 엔지니어링 접근 방식을 활용하여 유연하고 조합 가능한 체인을 구축하는 방법을 설명할 수 있습니다.
- LangChain 표현 언어(LCEL)는 파이프(|) 연산자를 사용하여 구성 요소를 연결하는 LangChain 애플리케이션을 구축하기 위한 패턴입니다.
- Runnable sequence는 구성 요소를 순차적으로 연결하여, 한 구성 요소의 출력을 다음 구성 요소의 입력으로 전달합니다.
- 예를 들어, 실행 가능한 시퀀스를 사용하는 대신, 실행 가능한 1과 실행 가능한 2를 파이프로 간단히 연결하여 동일한 순차적 체인을 생성할 수 있으며, 이를 통해 구조가 더 가독적이고 직관적으로 됩니다.
- runnable 1과 runnable 2를 파이프로 연결하기만 하면 동일한 순차적 체인을 만들 수 있어, 구조를 더 읽기 쉽고 직관적으로 만들 수 있습니다.
- 사전을 사용하면, 여러 작업을 동시에 실행하는 실행 가능한 병렬(runnable parallel)이 됩니다.
- 이 체인의 RunnableLambda는 format_prompt 함수를 감싸서, 이를 LangChain에서 사용할 수 있는 실행 가능한 컴포넌트로 변환합니다.

## 예시
- 예를 들어, 실행 가능한 시퀀스를 사용하는 대신, 실행 가능한 1과 실행 가능한 2를 파이프로 간단히 연결하여 동일한 순차적 체인을 생성할 수 있으며, 이를 통해 구조가 더 가독적이고 직관적으로 됩니다.

## 요약
- 사전을 사용하면, 여러 작업을 동시에 실행하는 실행 가능한 병렬(runnable parallel)이 됩니다. 이 체인의 RunnableLambda는 format_prompt 함수를 감싸서, 이를 LangChain에서 사용할 수 있는 실행 가능한 컴포넌트로 변환합니다.
