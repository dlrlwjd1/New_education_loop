# Modular AI Agent Design — GAME을 재사용 가능한 프레임워크로 코드화하기 (1부)

## 개요
- GAME으로 에이전트를 설계했다면, **코드도 그 설계를 그대로 반영**하도록 만들고 싶다. GAME의 각 요소는 에이전트마다 바뀌지만 **핵심 루프(core loop)는 그대로 유지**되므로, GAME 조각들을 핵심 루프(규칙) 변경 없이 쉽게 갈아끼울 수 있는 **재사용 가능한 프레임워크**를 설계한다.
- 처음엔 복잡도가 늘어나는 것처럼 보이지만(실제로 그렇다), 이는 **유연하고 재사용 가능한 프레임워크**를 만들기 위해 필요한 복잡도다.

### G — Goals 구현
```python
@dataclass(frozen=True)
class Goal:
    priority: int
    name: str
    description: str
```
- Goal을 객체로 캡슐화하면 에이전트 지시사항이 "거대한 텍스트 덩어리"가 되는 것을 피할 수 있다.
- `priority`를 추가하면 어떤 목표를 먼저 추구할지, 프롬프트에 결합할 때 어떻게 정렬/포맷할지 결정하는 데 도움이 된다.
- "Goal"이라는 용어는 **"무엇을"** 달성할지와 **"어떻게"** 접근할지를 모두 포괄한다. 중요한 유형의 목표로는 **특정 상황에서 어떻게 추론해야 하는지 보여주는 예시(examples)**, 시스템의 모든 에이전트에 공통되는 핵심 규칙, 특정 유형의 작업을 푸는 특별 지침 등이 있다.

```python
from game.core import Goal

file_management_goal = Goal(
    priority=1,
    name="file_management",
    description="""Manage files in the current directory by:
    1. Listing files when needed
    2. Reading file contents when needed
    3. Searching within files when information is required
    4. Providing helpful explanations about file contents"""
)
```

### A — Actions 구현 (JSON Schema 포함)
- Actions는 에이전트의 "도구 상자(toolkit)" — 환경에서 실행 가능한 개별 능력. **Action 클래스**와 **ActionRegistry** 두 부분으로 구성.

```python
class Action:
    def __init__(self,
                 name: str,
                 function: Callable,
                 description: str,
                 parameters: Dict,
                 terminal: bool = False):
        self.name = name
        self.function = function
        self.description = description
        self.terminal = terminal
        self.parameters = parameters

    def execute(self, **args) -> Any:
        """Execute the action's function"""
        return self.function(**args)
```
- 처음엔 이전 구현과 크게 달라 보이지 않지만, 나중에 **핵심 루프를 건드리지 않고 도구만 바꿔서 다른 에이전트를 쉽게 만들 수 있게** 해준다.
- 에이전트 응답은 JSON으로 오는데, 그 JSON이 가리키는 행동에 대응하는 실제 객체를 찾아야 한다 — 이를 위해 **ActionRegistry**로 이름별 등록/조회를 관리한다.

```python
class ActionRegistry:
    def __init__(self):
        self.actions = {}

    def register(self, action: Action):
        self.actions[action.name] = action

    def get_action(self, name: str) -> [Action, None]:
        return self.actions.get(name, None)

    def get_actions(self) -> List[Action]:
        """Get all registered actions"""
        return list(self.actions.values())
```

- 파일 관리 에이전트를 위한 도구 정의 예시:
```python
def list_files() -> list:
    """List all files in the current directory."""
    return os.listdir('.')

def read_file(file_name: str) -> str:
    """Read and return the contents of a file."""
    with open(file_name, 'r') as f:
        return f.read()

def search_in_file(file_name: str, search_term: str) -> list:
    """Search for a term in a file and return matching lines."""
    results = []
    with open(file_name, 'r') as f:
        for i, line in enumerate(f.readlines()):
            if search_term in line:
                results.append((i+1, line.strip()))
    return results

registry = ActionRegistry()

registry.register(Action(
    name="list_files",
    function=list_files,
    description="List all files in the current directory",
    parameters={"type": "object", "properties": {}, "required": []},
    terminal=False
))

registry.register(Action(
    name="read_file",
    function=read_file,
    description="Read the contents of a specific file",
    parameters={
        "type": "object",
        "properties": {
            "file_name": {"type": "string", "description": "Name of the file to read"}
        },
        "required": ["file_name"]
    },
    terminal=False
))

registry.register(Action(
    name="search_in_file",
    function=search_in_file,
    description="Search for a term in a specific file",
    parameters={
        "type": "object",
        "properties": {
            "file_name": {"type": "string", "description": "Name of the file to search in"},
            "search_term": {"type": "string", "description": "Term to search for"}
        },
        "required": ["file_name", "search_term"]
    },
    terminal=False
))
```

### M — Memory 구현
- 거의 모든 에이전트는 반복(iteration) 간에 무슨 일이 있었는지 기억해야 한다.
```python
class Memory:
    def __init__(self):
        self.items = []  # Basic conversation history

    def add_memory(self, memory: dict):
        """Add memory to working memory"""
        self.items.append(memory)

    def get_memories(self, limit: int = None) -> List[Dict]:
        """Get formatted conversation history for prompt"""
        return self.items[:limit]
```
- 처음엔 단순한 메시지 리스트만 써도 될 텐데, 왜 굳이 클래스로 감쌀까? **핵심 루프를 건드리지 않고 나중에 기능을 추가할 수 있기 때문**이다. 예를 들어 메모리를 데이터베이스에 저장하거나, 메모리 상태 분석에 따라 매 반복마다 에이전트에게 보여줄 메모리를 동적으로 바꾸는 것도 가능해진다. 이 단순한 인터페이스 덕분에 핵심 루프를 바꾸지 않고도 **다른 메모리 전략을 구현하는 서브클래스**를 만들 수 있다.
- 중요한 점: 메모리는 결국 프롬프트에서 **항상 메시지 리스트 형태로 표현**되어야 한다. 그래서 마지막 N개의 메시지를 올바른 형식으로 반환하는 단순한 인터페이스를 제공한다 — 메모리를 그래프 구조처럼 복잡하게 저장하더라도, 결국 LLM에는 리스트/메시지 형식으로 전달해야 하기 때문에 이 인터페이스는 저장 방식과 무관(agnostic)하게 유지된다.

### E — Environment 구현
- 기존 구현에서는 "환경" 인터페이스를 if/else 문과 함수 호출의 나열로 하드코딩했다. 이제는 **행동이 어떻게 구현되어 있는지 몰라도, 루프 안에 조건 분기 로직 없이 행동을 실행할 수 있는 모듈화된 인터페이스**를 원한다. 이것이 **Environment 컴포넌트**의 역할 — 에이전트와 외부 세계를 잇는 다리, 행동을 실행하고 결과를 반환.

```python
class Environment:
    def execute_action(self, action: Action, args: dict) -> dict:
        """Execute an action and return the result."""
        try:
            result = action.execute(**args)
            return self.format_result(result)
        except Exception as e:
            return {
                "tool_executed": False,
                "error": str(e),
                "traceback": traceback.format_exc()
            }

    def format_result(self, result: Any) -> dict:
        """Format the result with metadata."""
        return {
            "tool_executed": True,
            "result": result,
            "timestamp": time.strftime("%Y-%m-%dT%H:%M:%S%z")
        }
```
- `execute_action`이 예외를 잡아 **일관된 형식의 에러 결과**로 반환한다는 점에 주목 — [Module 2 - 04 Tool Results and Agent Feedback](../Module%202%20-%20AI%20Agents%2C%20Tools%2C%20Actions%2C%20%26%20Language/04%20Tool%20Results%20and%20Agent%20Feedback.md)의 원칙(에이전트가 이해할 수 있는 명확한 에러)을 프레임워크 차원에서 자동으로 보장.

## 요약
- GAME의 4요소를 각각 **클래스로 캡슐화**했다: `Goal`(dataclass), `Action`+`ActionRegistry`(이름→객체 매핑), `Memory`(메시지 리스트를 감싼 인터페이스), `Environment`(실행+에러 처리+결과 포맷팅).
- 이렇게 캡슐화하는 이유는 지금 당장의 단순함이 아니라, **핵심 Agent Loop를 건드리지 않고 GAME 조각만 교체/확장할 수 있는 재사용성**을 얻기 위함이다.
- 다음 자료([06 Agent Loop Customization](06%20Agent%20Loop%20Customization.md), [07 Implementing GAME in Code](07%20Implementing%20GAME%20in%20Code.md))에서 이 컴포넌트들을 실제 Agent Loop와 결합하는 방법을 다룬다.
