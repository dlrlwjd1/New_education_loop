# Workflow agents and communication in ADK

## 개요
- 업로드일: 2025-10-08
- 채널: Google Cloud Tech
- 재생목록: AI agent crash course (multi-agent systems 시리즈 2편/완결편, [1편 - Foundations of multi-agent systems with ADK](2025-10-01%20Foundations%20of%20multi-agent%20systems%20with%20ADK.md) 후속)
- 1편에서 다룬 에이전트 계층(agent hierarchy)에 이어, 작업 흐름을 제어하는 3가지 워크플로 에이전트와 에이전트 간 통신을 가능하게 하는 3가지 메커니즘을 다룬다.

## 내용

### 1. 워크플로 에이전트 (workflow agent) 3종
1편에서 에이전트가 계층(조직도)을 이룬다는 것을 배웠지만, 작업의 흐름 자체는 어떻게 제어할까? 이때 워크플로 에이전트가 등장한다.
- **순차 에이전트(sequential agent)**: 조립 라인처럼 각 서브에이전트가 고정된 순서로 실행되며 결과를 다음으로 전달한다. 데이터를 가져오고(fetch) → 정제(clean)하고 → 분석(analyze)하고 → 요약(summarize)하는 식의 사례에 적합.
- **병렬 에이전트(parallel agent)**: 매니저가 세 직원에게 동시에 작업을 할당하는 것처럼, 서로 독립적인 작업에 적합. 예: 여러 API에서 동시에 데이터를 가져오는 경우.
- **루프 에이전트(loop agent)**: 조건이 만족되거나 최대 반복 횟수에 도달할 때까지 작업을 반복 실행. "될 때까지 디버깅을 반복하는" 것에 비유.

### 2. 에이전트 간 통신(communication) 3가지 메커니즘
계층 구조와 워크플로 에이전트를 알아도, 에이전트끼리 실제로 어떻게 정보를 주고받는지가 중요하다. ADK는 세 가지 통신 메커니즘을 제공한다.
- **공유 세션 상태(shared session state)**: 공유 화이트보드에 비유. 한 에이전트가 결과를 상태에 쓰고, 다음 에이전트가 그 상태를 읽는다. 예: LLM 에이전트가 결과를 상태에 저장하면 다른 에이전트가 그 값을 읽어 사용.
- **LLM 기반 위임(LLM-driven delegation)**: 코디네이터 에이전트가 CEO처럼 행동하며, 요청을 보고 어떤 서브에이전트에게 위임할지 스스로 판단한다. 예: "청구서를 생성해줘"라는 요청이 오면 청구(billing) 에이전트로 라우팅한다.
- **명시적 호출 / 에이전트를 도구로 (explicit invocation, agent as a tool)**: 한 에이전트가 다른 에이전트를 서브에이전트가 아니라 함수처럼 호출하는 방식. 대상 에이전트를 도구(tool)로 감싸고, 부모 에이전트가 언제 이 도구를 호출할지 스스로 결정한다. 예: 분석을 수행하는 부모 에이전트가 수학 계산이 필요할 때마다 계산기 에이전트를 도구로 호출.

### 서브에이전트 vs 에이전트를 도구로(agent as a tool) — 차이 정리
- **서브에이전트(sub-agent)**: 조직도의 일부이며, 항상 부모 에이전트가 관리한다.
- **에이전트를 도구로(agent as a tool)**: 컨설턴트를 불러오는 것에 비유. 필요할 때만 부르며, 핵심 계층 구조의 일부는 아니다.

## 예시
개념 요약 코드:
```python
from google.adk.agents import Agent, SequentialAgent, ParallelAgent, LoopAgent
from google.adk.tools import agent_tool

# 워크플로 에이전트
pipeline = SequentialAgent(name="pipeline", sub_agents=[fetch, clean, analyze, summarize])
fan_out = ParallelAgent(name="fan_out", sub_agents=[api_a, api_b, api_c])
retry_loop = LoopAgent(name="retry_loop", sub_agents=[worker], max_iterations=5)

# 통신 메커니즘 1: 공유 세션 상태 (output_key로 쓰고, {} 로 읽음)
writer_agent = Agent(name="writer_agent", output_key="result")
reader_agent = Agent(name="reader_agent", instruction="결과: {result}")

# 통신 메커니즘 2: LLM 기반 위임 (코디네이터가 서브에이전트에게 위임)
coordinator = Agent(name="coordinator", sub_agents=[billing_agent, support_agent])

# 통신 메커니즘 3: 에이전트를 도구로 (명시적 호출)
analyst_agent = Agent(
    name="analyst_agent",
    tools=[agent_tool.AgentTool(agent=calculator_agent)],
)
```

## 요약
- 워크플로 에이전트 3종: 순차(고정 순서), 병렬(동시 실행), 루프(조건 만족까지 반복).
- 통신 메커니즘 3종: 공유 세션 상태(화이트보드), LLM 기반 위임(CEO의 라우팅), 명시적 호출/에이전트를 도구로(필요할 때 부르는 컨설턴트).
- 서브에이전트는 조직도에 항상 속하지만, 에이전트를 도구로 쓰는 방식은 핵심 계층 밖에서 필요할 때만 호출된다.
- 이 두 편으로 멀티 에이전트 시스템 입문 시리즈가 마무리되며, 이 조합을 통해 구조화되어 있으면서도 협업적이고 유연한 시스템을 만들 수 있다.
