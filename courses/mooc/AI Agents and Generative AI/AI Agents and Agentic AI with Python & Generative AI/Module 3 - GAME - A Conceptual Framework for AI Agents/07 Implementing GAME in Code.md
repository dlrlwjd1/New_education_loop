# Implementing GAME in Code — 파일 탐색 에이전트를 프레임워크로 재구현 (3부)

## 개요
- **Module 1**.md)에서 만든 파일 탐색 에이전트(직접 함수 호출 + 조건문 나열)를, [05](05%20Modular%20AI%20Agent%20Design.md)~[06](06%20Agent%20Loop%20Customization.md)에서 만든 **GAME 프레임워크로 다시 구현**한다.

## 내용

### 목표(Goals) 정의
```python
goals = [
    Goal(
        priority=1,
        name="Explore Files",
        description="Explore files in the current directory by listing and reading them"
    ),
    Goal(
        priority=2,
        name="Terminate",
        description="Terminate the session when tasks are complete with a helpful summary"
    )
]
```

### 프레임워크로 Actions 만들기
```python
def list_files() -> List[str]:
    """List files in the current directory."""
    return os.listdir(".")

def read_file(file_name: str) -> str:
    """Read a file's contents."""
    try:
        with open(file_name, "r") as file:
            return file.read()
    except FileNotFoundError:
        return f"Error: {file_name} not found."
    except Exception as e:
        return f"Error: {str(e)}"

def terminate(message: str) -> str:
    """Terminate the agent loop and provide a summary message."""
    return message

action_registry = ActionRegistry()

action_registry.register(Action(
    name="list_files",
    function=list_files,
    description="Returns a list of files in the directory.",
    parameters={},
    terminal=False
))

action_registry.register(Action(
    name="read_file",
    function=read_file,
    description="Reads the content of a specified file in the directory.",
    parameters={
        "type": "object",
        "properties": {"file_name": {"type": "string"}},
        "required": ["file_name"]
    },
    terminal=False
))

action_registry.register(Action(
    name="terminate",
    function=terminate,
    description="Terminates the conversation. Prints the provided message for the user.",
    parameters={
        "type": "object",
        "properties": {"message": {"type": "string"}},
        "required": ["message"]
    },
    terminal=True
))
```
- `terminate` 행동만 `terminal=True`로 설정 — [06](06%20Agent%20Loop%20Customization.md)의 `should_terminate()`가 바로 이 플래그를 확인한다.

### 에이전트 생성 및 실행
```python
file_explorer_agent = Agent(
    goals=goals,
    agent_language=agent_language,
    action_registry=action_registry,
    generate_response=generate_response,
    environment=environment
)

user_input = input("What would you like me to do? ")
final_memory = file_explorer_agent.run(user_input, max_iterations=10)

for item in final_memory.get_memories():
    print(f"\n{item['type'].upper()}: {item['content']}")
```

### 전체 완성 코드 (main 함수)
```python
def main():
    goals = [
        Goal(priority=1, name="Explore Files", description="Explore files in the current directory by listing and reading them"),
        Goal(priority=2, name="Terminate", description="Terminate the session when tasks are complete with a helpful summary")
    ]

    def list_files() -> List[str]:
        """List files in the current directory."""
        return os.listdir(".")

    def read_file(file_name: str) -> str:
        """Read a file's contents."""
        try:
            with open(file_name, "r") as file:
                return file.read()
        except FileNotFoundError:
            return f"Error: {file_name} not found."
        except Exception as e:
            return f"Error: {str(e)}"

    def terminate(message: str) -> str:
        """Terminate the agent loop and provide a summary message."""
        return message

    action_registry = ActionRegistry()
    action_registry.register(Action(name="list_files", function=list_files,
        description="Returns a list of files in the directory.", parameters={}, terminal=False))
    action_registry.register(Action(name="read_file", function=read_file,
        description="Reads the content of a specified file in the directory.",
        parameters={"type": "object", "properties": {"file_name": {"type": "string"}}, "required": ["file_name"]},
        terminal=False))
    action_registry.register(Action(name="terminate", function=terminate,
        description="Terminates the conversation. Prints the provided message for the user.",
        parameters={"type": "object", "properties": {"message": {"type": "string"}}, "required": ["message"]},
        terminal=True))

    agent_language = AgentFunctionCallingActionLanguage()
    environment = Environment()

    file_explorer_agent = Agent(
        goals=goals,
        agent_language=agent_language,
        action_registry=action_registry,
        generate_response=generate_response,
        environment=environment
    )

    user_input = input("What would you like me to do? ")
    final_memory = file_explorer_agent.run(user_input, max_iterations=10)

    for item in final_memory.get_memories():
        print(f"\nMemory: {item['content']}")


if __name__ == "__main__":
    main()
```
- `AgentFunctionCallingActionLanguage()`가 등장 — [Module 2의 Function Calling](../Module%202%20-%20AI%20Agents%2C%20Tools%2C%20Actions%2C%20%26%20Language/07%20Using%20Function%20Calling%20Capabilities%20with%20LLMs.md)을 프레임워크의 `AgentLanguage`로 캡슐화한 구현체 — 자세한 내용은 [09 How Your Agent Communicates with the LLM](09%20How%20Your%20Agent%20Communicates%20with%20the%20LLM%20-%20The%20Agent%20Language.md)에서 다룸.

### GAME 프레임워크로 전환했을 때의 이점
- **더 나은 조직화(Better Organization)**: 각 컴포넌트가 명확한 목적을 갖고 서로 분리됨.
- **재사용성(Reusability)**: 핵심 로직을 바꾸지 않고 actions나 environment 같은 컴포넌트를 교체 가능.
- **확장성(Extensibility)**: 새로운 goals와 actions를 쉽게 추가 가능.
- **표준 인터페이스(Standard Interface)**: `Agent` 클래스를 통해 서로 다른 에이전트와 일관된 방식으로 상호작용.
- **메모리 관리(Memory Management)**: 프레임워크가 메모리 갱신을 자동으로 처리.
- 이 구조는 에이전트가 복잡해질수록 코드를 이해하고 유지보수하기 쉽게 만들어준다.

### 실제 사용 예시
```
What would you like me to do? Tell me what Python files are in this directory and summarize how they fit together.

Agent thinking...
Agent Decision: I'll help you explore the Python files in this directory.

{"tool_name": "list_files", "args": {}}

Action Result: {'tool_executed': True, 'result': ['file1.py', 'file2.py', 'main.py', ...], 'timestamp': '2025-03-02T12:34:56+0000'}

{"tool_name": "read_file", "args": {"file_name": "file1.py"}}

Action Result: {'tool_executed': True, 'result': '# This is file1.py\n\ndef hello_world():\n    print("Hello, World!")\n...', 'timestamp': '...'}

[Additional file readings...]

{"tool_name": "terminate", "args": {"message": "I've explored all Python files in this directory. Here's a summary: file1.py contains a simple hello_world function, file2.py implements a calculator class, and main.py imports both files and uses their functionality."}}
```

## 요약
- 기존의 하드코딩된 if/else 파일 탐색 에이전트를 **Goal 리스트 + ActionRegistry + AgentLanguage + Environment + generate_response**로 구성된 `Agent` 인스턴스로 재구현했다.
- 이 리팩터링의 실질적 이득은 **조직화, 재사용성, 확장성, 표준 인터페이스, 자동 메모리 관리** 다섯 가지 — 에이전트가 커질수록 이 구조의 가치가 커진다.
