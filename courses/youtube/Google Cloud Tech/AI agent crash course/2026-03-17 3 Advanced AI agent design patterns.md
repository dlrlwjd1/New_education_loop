# 3 Advanced AI agent design patterns

## 개요
- 업로드일: 2026-03-17
- 채널: Google Cloud Tech (발표자: Annie Wang)
- 재생목록: AI agent crash course (agentic pattern series 2편, [1편 - AI agent design patterns](2026-02-27%20AI%20agent%20design%20patterns.md) 후속)
- 1편에서 다룬 단일/순차/병렬 에이전트에 이어, 더 복잡하고 동적인 문제를 위한 고급 패턴 3가지 — 루프(리뷰·비평) 패턴, 코디네이터/라우터 패턴, 에이전트를 도구로 쓰는(agent as tool) 패턴 — 를 다룬다.

## 내용

### 1. 루프 · 리뷰&비평 패턴 (loop / review & critique pattern)
- 에이전트 출력이 반드시 만족해야 하는 조건(non-negotiable requirement)이 있을 때 사용. 예: 호텔과 행사장 사이 이동 시간이 30분 이내여야 함.
- 구조: 생성 에이전트(generator agent)가 초안 계획을 만들면, 비평 에이전트(critique agent)가 조건 충족 여부를 평가한다. 조건을 만족하지 못하면 피드백과 함께 다시 생성 에이전트로 돌아가고, 이 과정을 조건이 만족되거나 최대 반복 횟수(max iteration)에 도달할 때까지 반복한다(무한 루프 방지).
- 구현은 비평 에이전트를 `LoopAgent`로 감싸고, 생성 에이전트와 비평 에이전트를 다시 `SequentialAgent`로 묶는 형태다.
- **장점**: 특정 품질 기준·제약 조건을 반드시 만족시켜야 할 때 유용.
- **단점**: 반복 횟수가 늘어날수록 지연 시간과 비용이 증가하고, 종료 조건(exit condition) 설계를 신중히 해야 해서 복잡도가 늘어난다.

### 2. 코디네이터 · 라우터 패턴 (coordinator / router pattern)
- 지금까지의 워크플로 에이전트(순차·병렬·루프)는 흐름이 미리 정해져 있었다. 코디네이터 에이전트는 마치 유능한 프로젝트 매니저처럼 사용자 요청을 분석해 적절한 전문 서브에이전트에게 위임(delegate)한다.
- 계층적 작업 분해(hierarchical task decomposition) 예시: 최상위 코디네이터 에이전트 아래에 음식&교통 순차 에이전트(1편에서 만든 것), 주변 장소 병렬 에이전트(1편에서 만든 것), 여행 비용 에이전트를 서브에이전트로 둔다. 이때 서브에이전트 연결은 LLM 에이전트(`LlmAgent`)로 구현한다.
- 데모: "스시 찾고 거기 가는 법 알려줘" → 코디네이터가 음식&교통 서브에이전트에게 전체를 위임 → 그 서브에이전트가 자신의 순차 흐름을 실행. 이어서 "박물관이랑 공연도 찾아줘" → 코디네이터가 주변 장소 병렬 에이전트에게 위임 → 병렬로 검색 후 결과 종합.
- **장점**: 매우 유연하며, 복잡한 문제를 잘게 쪼개서 해결할 수 있다.
- **단점**: 라우팅을 위한 추가 모델 호출로 지연·비용이 늘고, 다단계 구조라 설계와 디버깅이 더 복잡해진다.

### 3. 에이전트를 도구로 쓰는 패턴 (agent as tool)
- 겉보기엔 코디네이터 패턴과 비슷하지만(주 에이전트 + 여러 전문 서브에이전트), 핵심 차이는 통제권과 상태 관리 방식이다.
- 코디네이터 패턴: 메인 에이전트가 작업을 위임하면, 서브에이전트가 그 작업의 전체 통제권을 가지고 스스로 해결한다.
- 에이전트를 도구로 쓰는 패턴: 주 에이전트가 서브에이전트를 상태 없는(stateless) 단순 도구처럼 취급한다. 서브에이전트를 호출해 결과를 돌려받을 뿐, 전체 상태 관리와 통제권은 계속 주 에이전트가 가진다.
- 비유: 코디네이터는 프로젝트를 직원에게 맡기는 매니저, 에이전트를 도구로 쓰는 패턴은 작업 단계마다 필요한 도구를 집었다 놓는 장인(craftsman)에 가깝다.

## 예시
개념적으로 요약한 ADK 코드 구조:
```python
from google.adk.agents import Agent, LoopAgent, SequentialAgent
from google.adk.tools import agent_tool

# 1) 루프: 생성 -> 비평 -> (조건 미충족 시) 재생성
critique_loop = LoopAgent(
    name="critique_loop",
    sub_agents=[critique_agent],
    max_iterations=5,
)
plan_and_review = SequentialAgent(
    name="plan_and_review",
    sub_agents=[generator_agent, critique_loop],
)

# 2) 코디네이터: LLM이 서브에이전트에게 위임
coordinator_agent = Agent(
    name="coordinator_agent",
    model="gemini-2.5-flash",
    sub_agents=[food_and_transport_agent, nearby_places_agent, trip_cost_agent],
)

# 3) 에이전트를 도구로 사용
coordinator_as_tool = Agent(
    name="coordinator_as_tool",
    model="gemini-2.5-flash",
    tools=[
        agent_tool.AgentTool(agent=food_and_transport_agent),
        agent_tool.AgentTool(agent=nearby_places_agent),
    ],
)
```

## 요약
| 패턴 | 용도 | 특징 |
| --- | --- | --- |
| 단일 에이전트 | 간단한 프로토타입 | 구현 쉬움, 통제력 낮음 |
| 순차·병렬 에이전트 | 신뢰할 수 있는 구조화된 워크플로 | 예측 가능, 유연성 낮음 |
| 루프 (리뷰&비평) | 특정 기준을 반드시 만족해야 할 때 | 품질 보장, 지연·비용 증가 |
| 코디네이터 / 에이전트를 도구로 | 동적이고 유연한 라우팅이 필요할 때 | 유연함, 복잡도·비용 증가 |
- 코디네이터와 에이전트를 도구로 쓰는 패턴의 차이는 **서브에이전트가 조직도의 일부(상시 관리 대상)인지, 필요할 때만 불러 쓰는 도구인지**에 있다.
