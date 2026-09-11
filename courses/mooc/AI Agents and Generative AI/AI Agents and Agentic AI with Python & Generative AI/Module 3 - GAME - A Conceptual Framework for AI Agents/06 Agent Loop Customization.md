# Agent Loop Customization — GAME 컴포넌트를 하나의 Agent 클래스로 조립하기 (2부)

## 개요
- [05 Modular AI Agent Design](05%20Modular%20AI%20Agent%20Design.md)에서 만든 `Goal`, `Action`/`ActionRegistry`, `Memory`, `Environment`를 **하나의 재사용 가능한 `Agent` 클래스**로 조립한다. 이 클래스는 프롬프트 구성, 행동 실행, 메모리 관리를 캡슐화하며, **핵심 루프를 건드리지 않고 goals/actions/environment만 바꿔서 다른 에이전트**를 만들 수 있게 해준다.

## 내용

### Agent 클래스 전체 코드
```python
class Agent:
    def __init__(self,
                 goals: List[Goal],
                 agent_language: AgentLanguage,
                 action_registry: ActionRegistry,
                 generate_response: Callable[[Prompt], str],
                 environment: Environment):
        """
        Initialize an agent with its core GAME components
        """
        self.goals = goals
        self.generate_response = generate_response
        self.agent_language = agent_language
        self.actions = action_registry
        self.environment = environment

    def construct_prompt(self, goals: List[Goal], memory: Memory, actions: ActionRegistry) -> Prompt:
        """Build prompt with memory context"""
        return self.agent_language.construct_prompt(
            actions=actions.get_actions(),
            environment=self.environment,
            goals=goals,
            memory=memory
        )

    def get_action(self, response):
        invocation = self.agent_language.parse_response(response)
        action = self.actions.get_action(invocation["tool"])
        return action, invocation

    def should_terminate(self, response: str) -> bool:
        action_def, _ = self.get_action(response)
        return action_def.terminal

    def set_current_task(self, memory: Memory, task: str):
        memory.add_memory({"type": "user", "content": task})

    def update_memory(self, memory: Memory, response: str, result: dict):
        """
        Update memory with the agent's decision and the environment's response.
        """
        new_memories = [
            {"type": "assistant", "content": response},
            {"type": "user", "content": json.dumps(result)}
        ]
        for m in new_memories:
            memory.add_memory(m)

    def prompt_llm_for_action(self, full_prompt: Prompt) -> str:
        response = self.generate_response(full_prompt)
        return response

    def run(self, user_input: str, memory=None, max_iterations: int = 50) -> Memory:
        """
        Execute the GAME loop for this agent with a maximum iteration limit.
        """
        memory = memory or Memory()
        self.set_current_task(memory, user_input)

        for _ in range(max_iterations):
            # Construct a prompt that includes the Goals, Actions, and the current Memory
            prompt = self.construct_prompt(self.goals, memory, self.actions)

            print("Agent thinking...")
            # Generate a response from the agent
            response = self.prompt_llm_for_action(prompt)
            print(f"Agent Decision: {response}")

            # Determine which action the agent wants to execute
            action, invocation = self.get_action(response)

            # Execute the action in the environment
            result = self.environment.execute_action(action, invocation["args"])
            print(f"Action Result: {result}")

            # Update the agent's memory with information about what happened
            self.update_memory(memory, response, result)

            # Check if the agent has decided to terminate
            if self.should_terminate(response):
                break

        return memory
```

### 루프의 각 단계 자세히 보기

**Step 1 — 프롬프트 구성**
- `construct_prompt`는 **AgentLanguage** 컴포넌트를 활용해 목표(goals), 사용 가능한 행동(actions), 현재 메모리 맥락, 환경 세부사항을 포함한 구조화된 프롬프트를 만든다.
- `AgentLanguage`는 프롬프트 형식을 만들고 LLM의 응답을 파싱하는 역할 — 대부분 Function Calling을 쓸 것이므로 파싱은 그냥 반환된 tool call을 읽는 것이지만, `AgentLanguage`를 바꾸면 **Function Calling 없이도 같은 에이전트를 구현**할 수 있다. ([09 How Your Agent Communicates with the LLM](09%20How%20Your%20Agent%20Communicates%20with%20the%20LLM%20-%20The%20Agent%20Language.md)에서 자세히 다룸)

**Step 2 — 응답 생성**
- `generate_response`는 초기화 시 전달되는 단순한 Python 함수 — 이 추상화 덕분에 **핵심 루프를 바꾸지 않고 다른 LLM으로 교체** 가능. (LiteLLM 사용을 기본으로 하되 다른 provider로 쉽게 교체 가능)

**Step 3 — 응답 파싱**
- `get_action`이 `agent_language.parse_response(response)`로 호출(invocation)을 얻고, `ActionRegistry`에서 이름으로 실제 `Action`을 조회한다.
- **`action`**은 에이전트가 "할 수 있는 것"의 인터페이스 정의, **`invocation`**은 이번에 선택한 구체적 파라미터. 이 단계에서 invocation 파라미터가 action이 기대하는 파라미터와 일치하는지 **검증(validation)**을 추가할 수도 있다.

**Step 4 — 행동 실행**
- `self.environment.execute_action(action, invocation["args"])`로 실제 실행 — API 호출, 파일 읽기/쓰기, DB 쿼리, 데이터 처리 등. 행동은 `ActionRegistry`에 정의되어 있지만 **실행은 Environment의 맥락 안에서** 이뤄진다.

**Step 5 — 메모리 갱신**
- `update_memory`가 에이전트의 결정(assistant)과 결과(user)를 메모리에 추가 — 이것이 향후 반복의 맥락이 되는 **에이전트 추론과 행동의 연속 기록**을 만든다.

**Step 6 — 종료 판단**
- `should_terminate`가 선택된 action의 `terminal` 속성을 확인 — "terminate" 같은 특정 행동이 에이전트가 작업을 마쳤음을 알릴 수 있게 한다.

### 루프 한 번을 통과하는 정보 흐름 정리
1. **Memory**가 사용자가 요청한 것과 과거 결정/결과에 대한 맥락을 제공
2. **Goals**가 에이전트가 달성하려는 것과 그 규칙을 정의
3. **ActionRegistry**가 에이전트가 할 수 있는 것을 정의하고 이름으로 조회 가능하게 함
4. **AgentLanguage**가 Memory/Actions/Goals를 LLM용 프롬프트로 포맷
5. LLM이 행동을 선택하는 응답을 생성
6. **AgentLanguage**가 응답을 행동 호출(invocation)로 파싱 (보통 tool call에서 추출)
7. **Environment**가 주어진 인자로 행동을 실행
8. 결과가 다시 **Memory**에 저장됨
9. 에이전트가 종료(terminal) 도구를 호출하거나 최대 반복 횟수에 도달할 때까지 루프 반복

### 특화된 에이전트 만들기 — 핵심 루프는 그대로, GAME만 교체
```python
# A research agent
research_agent = Agent(
    goals=[Goal("Find and summarize information on topic X")],
    agent_language=ResearchLanguage(),
    action_registry=ActionRegistry([SearchAction(), SummarizeAction(), ...]),
    generate_response=openai_call,
    environment=WebEnvironment()
)

# A coding agent
coding_agent = Agent(
    goals=[Goal("Write and debug Python code for task Y")],
    agent_language=CodingLanguage(),
    action_registry=ActionRegistry([WriteCodeAction(), TestCodeAction(), ...]),
    generate_response=anthropic_call,
    environment=DevEnvironment()
)
```
- 각 에이전트는 **동일한 근본 루프**로 동작하지만, GAME 컴포넌트가 다르기 때문에 **완전히 다른 행동**을 보인다.

## 요약
- `Agent` 클래스는 GAME 4요소 + `AgentLanguage`(프롬프트 포맷/파싱) + `generate_response`(LLM 호출 함수)를 받아 `run()` 메서드 하나로 전체 루프를 실행한다.
- 루프 자체(구성→생성→파싱→실행→메모리 갱신→종료 판단)는 **모든 에이전트에서 동일하게 유지**되고, `goals`/`action_registry`/`environment`/`generate_response`/`agent_language`만 바꾸면 완전히 다른 목적의 에이전트를 만들 수 있다 — 이것이 [01](01%20Overview%20of%20the%20GAME%20Framework.md)에서 말한 "재사용성"의 실제 구현.
