# AI agent design patterns

## 개요
- 업로드일: 2026-02-27
- 채널: Google Cloud Tech (발표자: Annie Wang)
- 재생목록: AI agent crash course (agentic pattern series 1편)
- Google Agent Development Kit(ADK)로 에이전트를 설계할 때 쓰는 기본 패턴 3가지 — 단일 에이전트(single agent), 순차 에이전트(sequential agent), 병렬 에이전트(parallel agent) — 를 실습 코드와 함께 소개한다.

## 내용

### 1. 단일 에이전트 (single agent)
- 여행 계획 예시: 하나의 에이전트에게 도구(tool)를 어떻게 쓸지 지시문(instruction)으로 알려주고, 실제 도구 선택·순서 결정은 모델의 추론(reasoning) 능력에 맡긴다.
- 데모에서는 Google Search 도구 하나만 사용해 "샌프란시스코 여행 계획해줘" 같은 단순 요청을 한 번에 처리한다.
- 요청이 복잡해질수록(예: "늦게까지 여는 스시집 찾고 거기까지 가는 가장 빠른 길도 찾아줘") 하나의 거대한 시스템 프롬프트에 모든 로직을 욱여넣어야 하고, LLM이 비결정적(non-deterministic)이라 다단계 로직을 항상 정확히 따른다는 보장이 없다.
- **장점**: 구현이 매우 단순하고 직관적인 다단계 작업에 적합.
- **단점**: 통제력이 낮고, 작업이 복잡해질수록 신뢰도가 떨어짐.

### 2. 순차 에이전트 (sequential agent)
- 순서가 고정된, 반복 가능한 작업에 적합한 첫 번째 멀티 에이전트 패턴. 조립 라인(assembly line)처럼 한 서브에이전트의 출력이 다음 서브에이전트의 입력이 된다.
- 예시: 음식 찾기 에이전트(food finding agent) → 교통 에이전트(transportation agent) 순서로 항상 실행되도록 고정.
- 서브에이전트 간 통신은 공유 세션 상태(shared session state)를 통해 이뤄진다. 첫 에이전트가 결과를 상태에 쓰면, 두 번째 에이전트가 시스템 프롬프트에서 중괄호(`{}`) 문법으로 그 값을 읽는다. 이는 에이전트 시스템의 단기 기억(short-term memory) 역할을 한다.
- **장점**: 높은 통제력과 예측 가능성, 단일 에이전트보다 신뢰도 높음.
- **단점**: 정해진 구조라 유연성이 떨어져 동적인 상황에 대응하기 어려움.

### 3. 병렬 에이전트 (parallel agent)
- 순서가 필요 없는 독립적인 작업들을 동시에 실행하는 패턴. 예: 박물관 찾기, 공연 찾기, 레스토랑 찾기를 각각 담당하는 3개의 에이전트를 동시에 실행.
- 순차적으로 처리할 때보다 훨씬 빠르다.
- 병렬로 찾은 결과를 하나로 합치려면 보통 마지막에 취합(aggregator) 에이전트를 순차 에이전트 형태로 덧붙인다 (병렬 검색 → 순차적 결과 종합).
- **장점**: 지연 시간(latency)을 크게 줄임. 독립적인 하위 작업으로 나뉘는 작업에 특히 유용.
- **단점**: 여러 에이전트를 동시에 돌리므로 초기 비용이 높아지고, 결과를 모으는 취합 단계가 추가로 필요해 설계 복잡도가 늘어남.

## 예시
영상에서 다룬 ADK 코드 구조 (개념 요약, 실제 코드는 영상 화면 참고):
```python
from google.adk.agents import Agent, SequentialAgent, ParallelAgent

# 1) 단일 에이전트
trip_planner = Agent(
    name="trip_planner",
    model="gemini-2.5-flash",
    instruction="여행 계획을 세울 때 Google Search 도구를 사용하라.",
    tools=[google_search],
)

# 2) 순차 에이전트 (food -> transportation)
sequential_trip_agent = SequentialAgent(
    name="sequential_trip_agent",
    sub_agents=[food_finding_agent, transportation_agent],
)

# 3) 병렬 에이전트 (museum, concert, restaurant 동시 검색) + 취합 에이전트
parallel_finder = ParallelAgent(
    name="parallel_finder",
    sub_agents=[museum_agent, concert_agent, restaurant_agent],
)
final_trip_agent = SequentialAgent(
    name="final_trip_agent",
    sub_agents=[parallel_finder, aggregator_agent],
)
```
- `adk web` 명령으로 실행한 ADK Web UI의 tracing 탭에서 각 에이전트가 실행되는 순서와 세션 상태(session state) 값을 실시간으로 확인할 수 있다.

## 요약
- 단일 에이전트: 구현이 간단하지만 통제력이 낮다.
- 순차 에이전트: 통제력·신뢰도는 높지만 유연성이 낮다.
- 병렬 에이전트: 빠르고 효율적이지만 비용·복잡도가 늘어난다.
- 세 패턴 모두 공유 세션 상태(shared session state)를 통해 서로 정보를 주고받는다.
- 다음 편(3 Advanced AI agent design patterns)에서는 루프/비평(loop and critique) 패턴, 코디네이터(coordinator) 패턴, 에이전트를 도구로 쓰는(agent as tool) 패턴을 다룬다.
