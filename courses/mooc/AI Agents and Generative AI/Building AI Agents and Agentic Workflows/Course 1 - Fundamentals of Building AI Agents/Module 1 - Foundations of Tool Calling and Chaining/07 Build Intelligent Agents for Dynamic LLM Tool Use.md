# Build Intelligent Agents for Dynamic LLM Tool Use

> MOOC video · [원본 학습 항목](https://www.mooc.org/learn/fundamentals-of-building-ai-agents/lecture/jfG49/build-intelligent-agents-for-dynamic-llm-tool-use)

## 개요
- 또한, 유형이 지정된 입출력을 가진 구조화된 도구를 정의하고 입력 및 출력 유형을 지정하고, 서로 다른 LLM과 도구를 결합하는 방법을 배우게 됩니다.

## 내용
- 또한, 유형이 지정된 입출력을 가진 구조화된 도구를 정의하고 입력 및 출력 유형을 지정하고, 서로 다른 LLM과 도구를 결합하는 방법을 배우게 됩니다.
- LangChain에서 에이전트는 LLM과 하나 이상의 도구를 결합하여, 추론하고, 행동하며, 실제 데이터와 상호작용할 수 있는 지능형 응용 프로그램을 구축할 수 있게 해줍니다.
- 먼저, langchain_ibm 통합 기능을 사용하여 IBM watsonx.ai 언어 모델인 Granite로 LLM을 초기화하면, 이를 통해 LangChain 워크플로우 내에서 LLM으로 사용할 수 있게 됩니다.
- 여기서는 제로샷 ReAct 에이전트가 간단한 쿼리에 어떻게 반응하는지 보여주기 위한 첫 번째 도구로 간단한 쿼리에 어떻게 반응하며 처리하는지 보여주기 위한 첫 번째 도구로 사용됩니다.
- verbose=True를 설정하면 에이전트의 추론 과정을 단계별로 출력하고, handle_parsing_errors=True를 설정하면 LLM의 도구 출력이 약간 형식이 틀린 경우에도 에이전트가 복구할 수 있습니다.
- 에이전트를 "structured-chat-zero-shot-react-description"으로 설정하면, 유형 지정된 입력과 구조화된 출력을 지원하는 유형 지정된 입력과 구조화된 출력을 지원합니다.
- 그런 다음 initialize_agent를 사용하여 openai-functions 에이전트를 생성하고, 도구(add_numbers_with_options)와 LLM을 전달하여 openai-functions 에이전트를 생성합니다.

## 예시
- 이 모든 과정이 구체적인 예시를 전혀 보여주지 않고 이루어지므로 제로샷이라고 합니다.

## 요약
- 에이전트를 "structured-chat-zero-shot-react-description"으로 설정하면, 유형 지정된 입력과 구조화된 출력을 지원하는 유형 지정된 입력과 구조화된 출력을 지원합니다. 그런 다음 initialize_agent를 사용하여 openai-functions 에이전트를 생성하고, 도구(add_numbers_with_options)와 LLM을 전달하여 openai-functions 에이전트를 생성합니다.
