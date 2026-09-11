# Building Agents with the BeeAI Framework

> MOOC video · [원본 학습 항목](https://www.mooc.org/learn/agentic-ai-with-langgraph-crewai-autogen-and-beeai/lecture/GLDj4/building-agents-with-the-beeai-framework)

## 개요
- 먼저, 에이전트를 구축하는 데 필요한 RequirementAgent 클래스를 포함하여 에이전트를 구축할 수 있게 해주는 RequirementAgent 클래스와 지속적 컨텍스트를 위한 UnconstrainedMemory 클래스를 포함합니다.

## 내용
- 먼저, 에이전트를 구축하는 데 필요한 RequirementAgent 클래스를 포함하여 에이전트를 구축할 수 있게 해주는 RequirementAgent 클래스와 지속적 컨텍스트를 위한 UnconstrainedMemory 클래스를 포함합니다.
- BeeAI의 ThinkTool을 사용하면 에이전트가 답변을 제공하기 전에 명시적인 사고 과정을 거칠 수 있습니다 답변을 제공하기 전에 에이전트가 명시적인 사고 과정을 수행할 수 있게 해줍니다.
- requirements 매개변수에서 ConditionalRequirement로 ThinkTool을 감싸서 이 도구의 최대 호출 횟수를 3회로 설정하는 등 도구 사용을 제어할 수 있습니다 max invocations=3과 같이 이 도구의 최대 사용 횟수를 설정하는 등 도구 사용을 제어할 수 있습니다.
- 이를 통해 완전한 가시성을 갖춘 전형적인 ‘ReAct, 사고, 행동, 사고, 행동, 최종 답변’ 사이클이 형성되어 를 형성하여 완전한 가시성을 확보하고, 자체 수정 및 투명한 문제 해결을 가능하게 합니다.
- 이 예제에서는 thinkTool에 대한 조건부 요구 사항도 포함시켜 를 위한 조건부 요구 사항도 포함했는데, 이는 작업을 수행하기 전에 권한을 요청하는 ReAct 에이전트를 만들 수 있는지 보여주기 위해 thinkTool에 대한 조건부 요구 사항도 포함했습니다.이 에이전트가 실행되면 WikipediaTool을 사용하기 전에 사람의 승인을 요청할 것입니다.
- 이 에이전트가 실행되면, ReAct 에이전트의 동작인 WikipediaTool을 사용하기 전에 이를 통해 ReAct 에이전트의 동작이 수행됩니다.
- 사용자 정의 도구를 만드는 데는 두 가지 주요 단계가 있으며, 여기서는 간단한 덧셈을 보여주는 ‘Add’ 도구를 추가하는 과정을 통해 이를 시연해 보겠습니다.

## 예시
- 사용자 정의 도구를 만드는 데는 두 가지 주요 단계가 있으며, 여기서는 간단한 덧셈을 보여주는 ‘Add’ 도구를 추가하는 과정을 통해 이를 시연해 보겠습니다.

## 요약
- 이 에이전트가 실행되면, ReAct 에이전트의 동작인 WikipediaTool을 사용하기 전에 이를 통해 ReAct 에이전트의 동작이 수행됩니다. 사용자 정의 도구를 만드는 데는 두 가지 주요 단계가 있으며, 여기서는 간단한 덧셈을 보여주는 ‘Add’ 도구를 추가하는 과정을 통해 이를 시연해 보겠습니다.
