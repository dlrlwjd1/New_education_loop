# Foundations of multi-agent systems with ADK

## 개요
- 업로드일: 2025-10-01
- 채널: Google Cloud Tech
- 재생목록: AI agent crash course (multi-agent systems 시리즈 1편, 총 2편 중 첫 번째)
- 멀티 에이전트 시스템(multi-agent system)이 무엇인지, Google Agent Development Kit(ADK)가 이를 어떻게 지원하는지, 그리고 에이전트 계층(agent hierarchy)이라는 기초 개념을 다룬다.

## 내용

### 1. 멀티 에이전트 시스템이란
핵심은 여러 에이전트가 함께 작동한다는 것이며, 세 가지 개념으로 이해할 수 있다.
- **분산 제어(decentralized control)**: 단일한 "보스"가 없다. 각 에이전트가 스스로 결정한다. 리더 없이도 놀라운 패턴을 만드는 새 떼(flock of birds)에 비유.
- **지역적 시야(local view)**: 각 에이전트는 자기 주변만 알고 전체 시스템을 알지 못한다. 붐비는 경기장에서 주변 사람만 보고 반응하는 것과 비슷.
- **창발 행동(emerging behavior)**: 개별 에이전트의 단순한 지역 규칙들이 모여 놀라운 전역 패턴을 만들어내는 것. 이 상황에서 에이전트들이 협력해 단일 에이전트로는 풀기 어려운 복잡한 문제를 해결한다.

### 2. ADK가 지원하는 멀티 에이전트 개발
ADK는 멀티 에이전트 지원을 염두에 두고 설계되었으며, 각기 역할이 다른 세 가지 주요 에이전트 유형을 제공한다.
- **LLM 에이전트(LLM agent)**: "두뇌" 역할. Gemini 같은 대규모 언어 모델을 사용해 사용자 입력을 이해하고, 추론(reasoning)해서 어떤 도구를 선택하고 다음에 무엇을 할지 결정한다.
- **워크플로 에이전트(workflow agent)**: "매니저" 역할. 에이전트들이 어떻게 함께 작동해 작업을 완수하는지 조율(orchestrate)한다. 3가지 하위 유형:
  - **순차 에이전트(sequential agent)**: 조립 라인처럼 에이전트를 순서대로 실행.
  - **병렬 에이전트(parallel agent)**: 여러 작업을 동시에 실행 (여러 API를 병렬로 호출하는 것과 유사).
  - **루프 에이전트(loop agent)**: 조건이 만족될 때까지 작업을 반복.
- **커스텀 에이전트(custom agent)**: "전문가" 역할. 완전한 통제가 필요할 때 `BaseAgent`를 상속받아 직접 Python 로직을 작성한다.

### 3. 에이전트 계층 (agent hierarchy)
- ADK로 시스템을 만들면 에이전트들은 조직도(organizational chart)처럼 계층을 형성한다.
- 부모(parent)와 서브에이전트(sub-agent) 관계가 있으며, 하나의 부모 에이전트가 여러 서브에이전트를 관리할 수 있다.
- **단일 부모 규칙(single parent rule)**: 각 서브에이전트는 오직 하나의 부모 에이전트만 가진다.
- 비유: 루트 에이전트(root agent)는 CEO, 서브에이전트들은 VP·매니저·직원. 모두가 자신의 역할을 알고 함께 일을 완수한다.

## 예시
개념 요약 코드:
```python
from google.adk.agents import Agent, SequentialAgent, ParallelAgent, LoopAgent, BaseAgent

# LLM 에이전트 (두뇌)
brain_agent = Agent(name="brain", model="gemini-2.5-flash")

# 워크플로 에이전트 (매니저) - 세 가지 유형
assembly_line = SequentialAgent(name="assembly_line", sub_agents=[step1, step2])
concurrent_calls = ParallelAgent(name="concurrent_calls", sub_agents=[api_a, api_b])
retry_until_done = LoopAgent(name="retry_until_done", sub_agents=[worker], max_iterations=5)

# 커스텀 에이전트 (전문가) - BaseAgent 상속
class MyCustomAgent(BaseAgent):
    async def run_async(self, ctx):
        ...  # 완전히 직접 작성하는 로직

# 계층 구조: 루트 에이전트(CEO) 아래 서브에이전트(VP/매니저/직원)
root_agent = Agent(
    name="ceo_agent",
    sub_agents=[assembly_line, concurrent_calls, retry_until_done],
)
```

## 요약
- 멀티 에이전트 시스템은 분산 제어, 지역적 시야, 창발 행동이라는 세 특징을 가진다.
- ADK는 LLM 에이전트(두뇌), 워크플로 에이전트(매니저: 순차·병렬·루프), 커스텀 에이전트(전문가) 세 범주로 멀티 에이전트 개발을 지원한다.
- 에이전트들은 부모-서브에이전트 관계의 계층(hierarchy)을 이루며, 각 서브에이전트는 단 하나의 부모만 가진다.
- 다음 편([Workflow agents and communication in ADK](2025-10-08%20Workflow%20agents%20and%20communication%20in%20ADK.md))에서는 워크플로 오케스트레이션과 에이전트 간 통신 방식을 더 깊게 다룬다.
