# Refactoring Our README Agent — 데코레이터 적용하기

## 개요
- [Module 3 - 10 README Agent](../Module%203%20-%20GAME%20-%20A%20Conceptual%20Framework%20for%20AI%20Agents/10%20Putting%20It%20All%20Together%20-%20Document%20Your%20Code%20with%20a%20README%20Agent.md)에서 수동으로 `Action`을 등록했던 방식을, [01 데코레이터](01%20Keeping%20Agent%20Tools%20Up%20to%20Date%20with%20Python%20Decorators.md)와 [02 태그 조직화](02%20Tool%20Organization%20for%20Agents.md)를 적용해 리팩터링한다.

## 내용

### 기존 방식의 문제
```python
def read_project_file(name: str) -> str:
    with open(name, "r") as f:
        return f.read()

# Later, separately, we define metadata about the function
action_registry.register(Action(
    name="read_project_file",
    function=read_project_file,
    description="Reads a file from the project.",
    parameters={
        "type": "object",
        "properties": {"name": {"type": "string"}},
        "required": ["name"]
    },
    terminal=False
))
```
- 함수 파라미터가 바뀌면 스키마도 같이 바꿔야 하고, 함수 동작이 바뀌면 설명도 같이 바꿔야 한다 — 이 수동 작업은 실수하기 쉽고, 개발자와 LLM 모두에게 혼란을 줄 수 있다.

### 데코레이터로 리팩터링한 전체 코드
```python
# First, we'll define our tools using decorators
@register_tool(tags=["file_operations", "read"])
def read_project_file(name: str) -> str:
    """Reads and returns the content of a specified project file.

    Opens the file in read mode and returns its entire contents as a string.
    Raises FileNotFoundError if the file doesn't exist.

    Args:
        name: The name of the file to read

    Returns:
        The contents of the file as a string
    """
    with open(name, "r") as f:
        return f.read()


@register_tool(tags=["file_operations", "list"])
def list_project_files() -> List[str]:
    """Lists all Python files in the current project directory.

    Scans the current directory and returns a sorted list of all files
    that end with '.py'.

    Returns:
        A sorted list of Python filenames
    """
    return sorted([file for file in os.listdir(".")
                   if file.endswith(".py")])


@register_tool(tags=["system"], terminal=True)
def terminate(message: str) -> str:
    """Terminates the agent's execution with a final message.

    Args:
        message: The final message to return before terminating

    Returns:
        The message with a termination note appended
    """
    return f"{message}\nTerminating..."


def main():
    # Define the agent's goals
    goals = [
        Goal(priority=1,
             name="Gather Information",
             description="Read each file in the project in order to build a deep understanding of the project in order to write a README"),
        Goal(priority=1,
             name="Terminate",
             description="Call terminate when done and provide a complete README for the project in the message parameter")
    ]

    # Create an agent instance with tag-filtered actions
    agent = Agent(
        goals=goals,
        agent_language=AgentFunctionCallingActionLanguage(),
        # The ActionRegistry now automatically loads tools with these tags
        action_registry=PythonActionRegistry(tags=["file_operations", "system"]),
        generate_response=generate_response,
        environment=Environment()
    )

    # Run the agent with user input
    user_input = "Write a README for this project."
    final_memory = agent.run(user_input)
    print(final_memory.get_memories())


if __name__ == "__main__":
    main()
```

### 이 리팩터링이 가져오는 개선점

**1. 자기 문서화(Self-Documenting) 도구**
- 각 도구가 Python docstring을 통해 자체 문서를 갖는다. 데코레이터가 이 문서를 자동으로 추출해 도구 설명으로 사용한다.
- 문서가 그것을 설명하는 코드와 함께 존재하고, 함수가 바뀌면 자연스럽게 문서도 갱신되며, docstring 힌트로 IDE 통합도 좋아진다.

**2. 자동 파라미터 추론**
- 데코레이터가 함수의 타입 힌트와 시그니처를 검사해 파라미터 스키마를 자동 구축한다.
- 파라미터 타입이 자동으로 동기화되고, 필수 파라미터가 함수 시그니처에서 감지되며, 별도 스키마를 수동으로 유지할 필요가 없다.

**3. 태그를 통한 논리적 조직화**
- `file_operations`(파일 관련 도구), `read`/`list`(작업 유형), `system`(종료 같은 관리 기능)처럼 목적을 설명하는 태그로 도구를 조직화한다.
- 이 태깅 시스템 덕분에 관련 도구를 그룹화하고, 에이전트를 만들 때 도구를 필터링하고, 한눈에 도구의 목적을 파악할 수 있다.

**4. 단순화된 에이전트 생성**
```python
agent = Agent(
    goals=goals,
    agent_language=AgentFunctionCallingActionLanguage(),
    action_registry=ActionRegistry(tags=["file_operations", "system"]),
    generate_response=generate_response,
    environment=Environment()
)
```
- 더 이상 행동을 수동으로 등록할 필요가 없다 — **원하는 태그만 지정**하면 `ActionRegistry`가 알아서 해당 도구들을 포함시킨다.

**5. 더 쉬운 유지보수**
- 함수를 데코레이트하기만 하면 새 도구 추가, 등록 코드를 건드리지 않고 기존 도구 수정, 태그 조정으로 도구 조직 변경, 데코레이터 제거/태그 변경으로 도구 제거가 모두 쉬워진다.

### 전체 흐름 정리
1. 코드가 로드될 때, 데코레이터들이 자동으로 모든 도구를 중앙 레지스트리에 등록한다.
2. 특정 태그로 `ActionRegistry`를 만들면 자동으로 일치하는 도구를 로드한다.
3. `Agent`는 수동 등록 단계 없이 이 사전 구성된 도구들을 사용한다.
- 이 자동화는 에러를 줄이고 코드를 더 유지보수하기 쉽게 만든다. README 에이전트에 새 기능을 추가하고 싶으면, 적절한 데코레이터와 태그로 새 함수를 만들기만 하면 된다.

## 요약
- [Module 3 - 10](../Module%203%20-%20GAME%20-%20A%20Conceptual%20Framework%20for%20AI%20Agents/10%20Putting%20It%20All%20Together%20-%20Document%20Your%20Code%20with%20a%20README%20Agent.md)의 수동 `Action` 등록을 `@register_tool(tags=[...])` 데코레이터로 교체한 리팩터링 버전.
- 핵심 이득: **문서(docstring)와 스키마(타입 힌트)가 코드와 항상 동기화**되고, **태그 기반 필터링**으로 에이전트 생성이 극도로 단순해진다.
- 다음 자료([04 Try Out the README Agent with the Decorator](04%20Try%20Out%20the%20README%20Agent%20with%20the%20Decorator.md))에서 이 리팩터링된 버전을 직접 실행해본다.
