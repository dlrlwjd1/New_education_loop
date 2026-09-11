# How to add short-term memory to your AI agent (Sessions & State Explained)

## 개요
- 업로드일: 2026-03-26
- 채널: Google Cloud Tech (발표자: Annie Wang)
- 재생목록: AI agent crash course (agent memory series 1편, 총 3편 중 첫 번째)
- ADK에서 세션(session)과 상태(state)를 이용해 에이전트에게 단기 기억(short-term memory)을 부여하는 방법을 다룬다. 시리즈 전체 로드맵: 1편 단기 기억(이 영상) → 2편 데이터베이스 기반 영속 기억 → 3편 Vertex AI Memory Bank로 장기 기억.

## 내용

### 세션(session)이란
- 세션은 하나의 연속된 대화(휴대폰의 채팅 스레드 하나)를 의미한다.
- ADK Web UI는 기본적으로 `InMemorySessionService()`를 사용한다. 새 세션을 만들면 에이전트는 매번 사용자를 처음 만나는 것처럼 행동하며, 이전 대화 내용을 전혀 기억하지 못한다.
- 기억 손실 예시: 1턴에서 "리스본 2일 여행 계획해줘" → 에이전트가 1일차 계획 수립. 2턴에서 "2일차도 계획해줘"라고 했을 때, **새 세션**으로 시작하면 도시, 이전 일정, 사용자 관심사 등 모든 맥락을 잊어버린다.
- 해결: 여러 턴에 걸쳐 **동일한 세션**을 재사용하면, 에이전트가 전체 대화를 참고해 계획을 조정할 수 있다.

### 세션의 두 핵심 구성요소: 이벤트(events)와 상태(state)
- **이벤트(events)**: 모든 사용자 메시지, 모든 에이전트 응답, 이미지 등 사용자의 미디어 입력까지 포함하는 대화 기록(transcript). 에이전트가 이전 메시지를 읽을 수 있게 해주는 맥락(context)을 제공한다.
- **상태(state)**: 에이전트가 빠르게 접근해야 하는 값들(레스토랑 이름, 예약 번호, 선택한 테마 등)을 담아두는 작은 메모지(sticky note) 같은 것. 모델이 값 하나를 찾자고 15개 메시지를 다시 읽을 필요 없이, 한 번 저장해두고 재사용하기 위해 사용한다.

### 에이전트 간 통신: 공유 세션 상태
- 예시: 에이전트 A가 레스토랑을 찾고, 에이전트 B가 그곳까지 가는 길을 안내한다.
- 에이전트 A는 레스토랑 이름만 출력하도록 지시받고, 그 출력을 `destination` 같은 키(key)에 매핑한다. 그러면 에이전트 B는 자동으로 `destination` 값을 변수로 전달받는다.
- 이 방식 덕분에 여러 에이전트가 전체 대화 기록을 긁어보지 않고도 협업할 수 있다.

### 중요한 주의사항
- 세션 객체(session object)를 도구(tool) 코드 안에서 **직접 수정하면 안 된다**. 직접 수정하면 그 변경사항이 이벤트 로그(event log)에 기록되지 않고, 영속 서비스(persistent service)가 나중에 저장하지 못한다.
- 반드시 ADK가 제공하는 `context`(tool 또는 callback의 context)를 통해 값을 써야 한다. `context.state`에 쓰면 ADK가 그 변경을 이벤트와 함께 기록하므로, 이후 데이터베이스나 장기 기억으로 넘어갈 때도 저장·복구가 가능하다.

## 예시
개념 요약 코드 (실제 코드는 영상 화면·QR코드의 소스 참고):
```python
from google.adk.sessions import InMemorySessionService
from google.adk.agents import Agent, SequentialAgent

session_service = InMemorySessionService()
session = await session_service.create_session(
    app_name="trip_planner", user_id="u1", session_id="s1"
)
# 이후 모든 턴에서 동일한 session_id="s1"을 재사용해야 기억이 유지된다.

# 도구/콜백 안에서 상태를 쓸 때는 반드시 context를 통해 기록한다.
def save_restaurant_name(tool_context, name: str):
    tool_context.state["destination"] = name  # 올바른 방식

food_agent = Agent(
    name="food_agent",
    instruction="레스토랑을 찾고 이름만 출력하라.",
    output_key="destination",
)
transportation_agent = Agent(
    name="transportation_agent",
    instruction="{destination}까지 가는 방법을 알려줘라.",  # 상태값을 중괄호로 참조
)
```

## 요약
- 세션(session) = 대화 스레드 하나. 이벤트(events) = 대화 기록. 상태(state) = 구조화된 메모지.
- `InMemorySessionService`를 쓸 때는 여러 턴에 걸쳐 **같은 세션**을 재사용해야 기억 손실을 피할 수 있다.
- 상태는 반드시 `context`를 통해 써야 ADK가 이벤트로 기록하고 나중에 저장·복구할 수 있다.
- 이 단기 기억은 RAM처럼 빠르지만 임시적이다. 다음 편에서는 앱 재시작 후에도 살아남는 영속성(persistence)을 추가한다.
