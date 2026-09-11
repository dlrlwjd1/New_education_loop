# Capability 아키텍처 패턴

## 핵심 개념

도구(tool)는 에이전트가 사용할 수 있는 **개별 기능**을 제공한다.
하지만 때로는 특정 도구 하나를 추가하는 수준이 아니라, 에이전트 루프 자체의 동작 방식을 더 근본적으로 확장해야 한다.

**Capability 패턴**은 에이전트 루프의 여러 지점에 개입해 동작을 수정하면서도, 핵심 루프 코드는 깨끗하고 유지보수 가능하게 유지하는 설계 방식이다.

---

## Capability 패턴이 필요한 이유

에이전트에 특수한 행동이 필요할 때마다 `Agent.run()` 내부를 직접 수정하면 코드가 빠르게 복잡해진다.

예를 들어 다음과 같은 요구가 생길 수 있다.

- LLM에 보내는 프롬프트를 매번 기록하기
- 에이전트 응답에 메타데이터 추가하기
- 데이터베이스 연결을 열고 닫기
- 현재 시간 정보를 항상 프롬프트에 포함하기
- 특정 조건에서 에이전트 루프를 중단하기

이런 기능들은 단순한 tool과 다르다.
tool은 에이전트가 **필요할 때 호출하는 기능**이지만, Capability는 에이전트 루프의 **흐름 자체에 참여하는 확장 기능**이다.

---

## 기본 아이디어

Capability 패턴의 핵심은 에이전트 루프의 특정 적응(adaptation)을 하나의 클래스로 캡슐화하는 것이다.

```
Agent Loop
  ├─ Capability.init()
  ├─ Capability.start_agent_loop()
  ├─ Capability.process_prompt()
  ├─ Capability.process_response()
  ├─ Capability.process_action()
  ├─ Capability.process_result()
  ├─ Capability.end_agent_loop()
  └─ Capability.terminate()
```

에이전트는 Capability 목록을 가지고 있고, 각 Capability는 루프의 여러 단계에서 호출된다.
즉, 에이전트 루프 코드를 직접 수정하지 않고도 필요한 동작을 조립(composition)할 수 있다.

---

## Agent Loop 안의 Capability 호출 지점

에이전트 루프는 대략 다음과 같은 방식으로 Capability를 호출한다.

```python
def run(self, user_input: str, memory=None, action_context_props=None):

    # Initialize capabilities
    for capability in self.capabilities:
        capability.init(self, action_context)

    while True:
        # Start of loop capabilities
        can_start_loop = reduce(
            lambda a, c: c.start_agent_loop(self, action_context),
            self.capabilities,
            False
        )

        # Construct prompt with capability modifications
        prompt = reduce(
            lambda p, c: c.process_prompt(self, action_context, p),
            self.capabilities,
            base_prompt
        )

        # Process response with capabilities
        response = reduce(
            lambda r, c: c.process_response(self, action_context, r),
            self.capabilities,
            response
        )

        # Process action with capabilities
        action = reduce(
            lambda a, c: c.process_action(self, action_context, a),
            self.capabilities,
            action
        )

        # Process result with capabilities
        result = reduce(
            lambda r, c: c.process_result(
                self, action_context, response, action_def, action, r
            ),
            self.capabilities,
            result
        )

        # End of loop capabilities
        for capability in self.capabilities:
            capability.end_agent_loop(self, action_context)
```

각 호출 지점은 에이전트의 동작을 수정하거나 강화할 수 있는 **hook**처럼 작동한다.
웹 프레임워크의 middleware나 lifecycle event와 비슷하게 이해하면 된다.

---

## Capability 클래스 구조

Capability는 에이전트 루프의 여러 단계에 대응하는 메서드를 가진다.

```python
class Capability:
    def __init__(self, name: str, description: str):
        self.name = name
        self.description = description

    def init(self, agent, action_context: ActionContext) -> dict:
        """Called once when the agent starts running."""
        pass

    def start_agent_loop(self, agent, action_context: ActionContext) -> bool:
        """Called at the start of each iteration through the agent loop."""
        return True

    def process_prompt(self, agent, action_context: ActionContext,
                       prompt: Prompt) -> Prompt:
        """Called right before the prompt is sent to the LLM."""
        return prompt

    def process_response(self, agent, action_context: ActionContext,
                         response: str) -> str:
        """Called after getting a response from the LLM."""
        return response

    def process_action(self, agent, action_context: ActionContext,
                       action: dict) -> dict:
        """Called after parsing the response into an action."""
        return action

    def process_result(self, agent, action_context: ActionContext,
                       response: str, action_def: Action,
                       action: dict, result: any) -> any:
        """Called after executing the action."""
        return result

    def process_new_memories(self, agent, action_context: ActionContext,
                             memory: Memory, response, result,
                             memories: List[dict]) -> List[dict]:
        """Called when new memories are being added."""
        return memories

    def end_agent_loop(self, agent, action_context: ActionContext):
        """Called at the end of each iteration through the agent loop."""
        pass

    def should_terminate(self, agent, action_context: ActionContext,
                         response: str) -> bool:
        """Called to check if the agent should stop running."""
        return False

    def terminate(self, agent, action_context: ActionContext) -> dict:
        """Called when the agent is shutting down."""
        pass
```

---

## 실행 단계별 역할

| 단계 | 메서드 | 역할 |
|---|---|---|
| 초기화 | `init()` | 에이전트 실행 시작 시 한 번 호출된다. 초기 상태 설정, 메모리 추가, 연결 준비 등에 사용한다. |
| 루프 시작 | `start_agent_loop()` | 각 반복이 시작될 때 호출된다. 다음 반복을 진행할 수 있는지 확인하거나 준비 작업을 수행한다. |
| 프롬프트 구성 | `process_prompt()` | LLM에 프롬프트를 보내기 직전에 호출된다. 시스템 메시지나 추가 컨텍스트를 삽입할 수 있다. |
| 응답 처리 | `process_response()` | LLM의 원시 응답을 받은 직후 호출된다. 응답 검증, 정규화, 로깅 등에 사용할 수 있다. |
| 액션 처리 | `process_action()` | 응답이 action으로 파싱된 뒤 호출된다. 실행 전 action을 보정하거나 메타데이터를 추가할 수 있다. |
| 결과 처리 | `process_result()` | action 실행 후 호출된다. 결과 형식을 바꾸거나 추가 정보를 붙일 수 있다. |
| 메모리 업데이트 | `process_new_memories()` | 새 메모리를 저장하기 전에 호출된다. 저장할 내용을 필터링하거나 보강할 수 있다. |
| 루프 종료 | `end_agent_loop()` | 각 반복이 끝날 때 호출된다. 정리 작업이나 로깅에 적합하다. |
| 종료 판단 | `should_terminate()` | 에이전트를 중단해야 하는지 판단한다. |
| 최종 종료 | `terminate()` | 에이전트가 종료될 때 호출된다. 연결 해제, 최종 로그 기록 등에 사용한다. |

각 메서드는 `agent`와 `action_context`를 함께 받는다.
따라서 Capability는 에이전트 상태, 메모리, 실행 컨텍스트에 접근하면서 필요한 확장을 수행할 수 있다.

---

## reduce()를 통한 순차 적용

에이전트는 여러 Capability를 순서대로 적용한다.

```python
prompt = reduce(
    lambda p, c: c.process_prompt(self, action_context, p),
    self.capabilities,
    base_prompt
)
```

예를 들어 Capability 목록이 다음과 같다고 하자.

```python
capabilities=[
    TimeAwareCapability(),
    LoggingCapability(log_level="INFO"),
    MetricsCapability(metrics_server="prometheus:9090")
]
```

그러면 `TimeAwareCapability`가 프롬프트에 현재 시간을 추가하고,
그 다음 `LoggingCapability`가 시간이 추가된 프롬프트를 기록할 수 있다.
마지막으로 `MetricsCapability`가 실행 지표를 수집할 수 있다.

즉, 복잡한 행동을 하나의 거대한 클래스에 넣는 것이 아니라,
작고 집중된 Capability들을 조합해서 만든다.

---

## Agent에 Capability 추가하기

Agent 생성자는 Capability 목록을 받을 수 있다.

```python
class Agent:
    def __init__(self,
                 goals: List[Goal],
                 agent_language: AgentLanguage,
                 action_registry: ActionRegistry,
                 generate_response: Callable[[Prompt], str],
                 environment: Environment,
                 capabilities: List[Capability] = [],
                 max_iterations: int = 10,
                 max_duration_seconds: int = 180):
        """
        Initialize an agent with its core GAME components and capabilities.

        Goals, Actions, Memory, and Environment (GAME) form the core of the agent,
        while capabilities provide ways to extend and modify the agent's behavior.
        """
        self.goals = goals
        self.generate_response = generate_response
        self.agent_language = agent_language
        self.actions = action_registry
        self.environment = environment
        self.capabilities = capabilities or []
        self.max_iterations = max_iterations
        self.max_duration_seconds = max_duration_seconds
```

이 구조 덕분에 에이전트는 필요한 Capability만 골라 조립할 수 있다.

```python
agent = Agent(
    goals=[
        Goal(
            name="scheduling",
            description="Schedule meetings considering current time and availability"
        )
    ],
    agent_language=JSONAgentLanguage(),
    action_registry=registry,
    generate_response=llm.generate,
    environment=PythonEnvironment(),
    capabilities=[
        TimeAwareCapability(),
        LoggingCapability(log_level="INFO"),
        MetricsCapability(metrics_server="prometheus:9090")
    ]
)
```

---

## 예시: 시간 인식 Capability

이제 Capability 패턴을 사용해 에이전트가 현재 시간을 인식하도록 만들어보자.

시간을 이해하는 에이전트는 다음과 같은 작업에서 더 나은 판단을 할 수 있다.

- 회의 일정 잡기
- 마감일 판단하기
- 오늘 처리할 수 있는 일과 다음 영업일로 넘길 일을 구분하기
- 시간에 민감한 작업 우선순위 정하기

---

## TimeAwareCapability 구현

`TimeAwareCapability`는 두 가지 일을 한다.

1. 에이전트 시작 시 현재 시간 정보를 메모리에 저장한다.
2. 매 프롬프트마다 최신 현재 시간 정보를 시스템 메시지에 추가한다.

```python
from datetime import datetime
from zoneinfo import ZoneInfo

class TimeAwareCapability(Capability):
    def __init__(self):
        super().__init__(
            name="Time Awareness",
            description="Allows the agent to be aware of time"
        )

    def init(self, agent, action_context: ActionContext) -> dict:
        """Set up time awareness at the start of agent execution."""
        # Get timezone from context or use default
        time_zone_name = action_context.get("time_zone", "America/Chicago")
        timezone = ZoneInfo(time_zone_name)

        # Get current time in specified timezone
        current_time = datetime.now(timezone)

        # Format time in both machine and human-readable formats
        iso_time = current_time.strftime("%Y-%m-%dT%H:%M:%S%z")
        human_time = current_time.strftime("%H:%M %A, %B %d, %Y")

        # Store time information in memory
        memory = action_context.get_memory()
        memory.add_memory({
            "type": "system",
            "content": f"""Right now, it is {human_time} (ISO: {iso_time}).
            You are in the {time_zone_name} timezone.
            Please consider the day/time, if relevant, when responding."""
        })

    def process_prompt(self, agent, action_context: ActionContext,
                       prompt: Prompt) -> Prompt:
        """Update time information in each prompt."""
        time_zone_name = action_context.get("time_zone", "America/Chicago")
        current_time = datetime.now(ZoneInfo(time_zone_name))

        # Add current time to system message
        system_msg = (
            f"Current time: "
            f"{current_time.strftime('%H:%M %A, %B %d, %Y')} "
            f"({time_zone_name})\n\n"
        )

        # Add to existing system message or create new one
        messages = prompt.messages
        if messages and messages[0]["role"] == "system":
            messages[0]["content"] = system_msg + messages[0]["content"]
        else:
            messages.insert(0, {
                "role": "system",
                "content": system_msg
            })

        return Prompt(messages=messages)
```

---

## TimeAwareCapability 사용하기

이 Capability를 Agent 생성 시 추가하면 된다.

```python
agent = Agent(
    goals=[Goal(name="task", description="Complete the assigned task")],
    agent_language=JSONAgentLanguage(),
    action_registry=registry,
    generate_response=llm.generate,
    environment=PythonEnvironment(),
    capabilities=[
        TimeAwareCapability()
    ]
)
```

이제 에이전트는 매번 최신 시간을 알고 판단할 수 있다.

예를 들어 사용자가 이렇게 요청했다고 하자.

```python
agent.run("Schedule a team meeting for today")
```

에이전트는 다음과 같이 응답할 수 있다.

```text
Since it's already 5:30 PM on Friday, I recommend scheduling the meeting
for Monday morning instead. Would you like me to look for available times
on Monday?
```

핵심은 "회의를 잡는다"는 tool 자체가 바뀐 것이 아니다.
에이전트의 판단 과정에 **현재 시간이라는 컨텍스트**가 지속적으로 주입된 것이다.

---

## 시간 인식이 에이전트 행동을 바꾸는 방식

`TimeAwareCapability`는 두 지점에서 에이전트 행동을 바꾼다.

### 1. `init()`을 통한 기준 시간 설정

에이전트가 시작될 때 현재 시간을 메모리에 추가한다.
이를 통해 에이전트는 실행 시작 시점부터 시간 감각을 가진다.

### 2. `process_prompt()`를 통한 최신 시간 갱신

LLM에 프롬프트를 보내기 직전에 현재 시간을 다시 계산해 삽입한다.
장시간 실행되는 에이전트라도 매 반복마다 더 최신의 시간 정보를 사용할 수 있다.

이 모든 변화는 Agent 클래스의 핵심 루프를 직접 수정하지 않고 이루어진다.
이것이 Capability 패턴의 장점이다.

---

## 확장 예시: 실행 시간 추적

시간 인식 Capability를 더 발전시키면 action 실행 시점과 실행 시간을 추적할 수도 있다.

```python
class EnhancedTimeAwareCapability(TimeAwareCapability):
    def process_action(self, agent, action_context: ActionContext,
                       action: dict) -> dict:
        """Add timing information to action results."""
        # Add execution time to action metadata
        action["execution_time"] = datetime.now(
            ZoneInfo(action_context.get("time_zone", "America/Chicago"))
        ).isoformat()
        return action

    def process_result(self, agent, action_context: ActionContext,
                       response: str, action_def: Action,
                       action: dict, result: any) -> any:
        """Add duration information to results."""
        if isinstance(result, dict):
            time_zone_name = action_context.get("time_zone", "America/Chicago")
            result["action_duration"] = (
                datetime.now(ZoneInfo(time_zone_name)) -
                datetime.fromisoformat(action["execution_time"])
            ).total_seconds()
        return result
```

이 버전은 각 action이 언제 실행됐는지, 얼마나 걸렸는지를 결과에 추가한다.
이런 정보는 디버깅, 성능 측정, 실행 로그 분석에 유용하다.

---

## Tool과 Capability의 차이

| 구분 | Tool | Capability |
|---|---|---|
| 목적 | 특정 작업 수행 | 에이전트 루프 자체 확장 |
| 호출 방식 | LLM이 필요할 때 선택해 호출 | 루프의 정해진 지점에서 자동 호출 |
| 예시 | 검색, 계산, 이메일 전송, DB 조회 | 시간 인식, 로깅, 메트릭 수집, 응답 후처리 |
| 영향 범위 | 개별 action | 프롬프트, 응답, action, result, memory, 종료 조건 |
| 설계 관점 | 에이전트가 사용하는 기능 | 에이전트를 감싸는 행동 확장 계층 |

**정리하면:** tool은 에이전트의 손에 쥐여주는 도구이고, Capability는 에이전트의 실행 방식을 바꾸는 확장 장치다.

---

## 핵심 정리

1. **Capability 패턴**은 에이전트 루프의 여러 단계에 hook을 제공하는 확장 구조다.
2. Agent의 핵심 루프를 직접 수정하지 않고도 특수한 행동을 추가할 수 있다.
3. Capability는 `init`, `process_prompt`, `process_response`, `process_action`, `process_result`, `terminate` 등 다양한 lifecycle 지점에 개입한다.
4. 여러 Capability를 조합하면 시간 인식, 로깅, 메트릭, 검증 같은 기능을 독립적으로 추가할 수 있다.
5. `TimeAwareCapability`는 현재 시간을 메모리와 프롬프트에 주입해 에이전트가 시간에 민감한 결정을 내리게 만든다.
6. 이 패턴은 웹 프레임워크의 middleware처럼, 핵심 로직을 오염시키지 않고 주변 동작을 확장하는 데 적합하다.

> **좋은 에이전트 설계는 모든 기능을 Agent 클래스 안에 몰아넣는 것이 아니라, 핵심 루프는 단순하게 유지하고 변화하는 행동은 Capability로 분리하는 것이다.**
