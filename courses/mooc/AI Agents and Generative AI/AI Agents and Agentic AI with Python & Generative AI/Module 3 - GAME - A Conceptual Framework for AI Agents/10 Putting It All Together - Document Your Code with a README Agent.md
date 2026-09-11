# Putting It All Together — README Agent 만들기 (5부, Module 3 마무리)

## 개요
- Module 3에서 배운 모든 컴포넌트(Goal, Action, ActionRegistry, Memory, Environment, AgentLanguage, Agent)를 조립해, **프로젝트의 Python 파일들을 분석하고 README를 작성하는 실용적인 에이전트**를 완성한다.

## 내용

### 에이전트의 목적
1. 프로젝트 디렉토리에서 Python 파일 찾기
2. 각 파일의 내용 읽기
3. 발견한 내용 분석
4. 분석을 바탕으로 README 생성
- 이 작업은 **어떤 파일을 읽을지 결정하고, 정보를 반복적으로 처리하고, 최종 출력을 만들어내야** 하기 때문에 프레임워크를 보여주기에 적합하다.

### 목표(Goals) 정의
```python
goals = [
    Goal(
        priority=1,
        name="Gather Information",
        description="Read each file in the project"
    ),
    Goal(
        priority=1,
        name="Terminate",
        description="Call the terminate call when you have read all the files "
                   "and provide the content of the README in the terminate message"
    )
]
```
- 작업을 **두 개의 명확한 목표**로 나눴다 — 첫 번째는 파일 탐색을 유도하고, 두 번째는 언제 멈추고 결과를 낼지 알려준다. 순차적 단계이므로 둘 다 같은 우선순위(priority=1).

### 행동(Actions) 생성
```python
def read_project_file(name: str) -> str:
    with open(name, "r") as f:
        return f.read()

def list_project_files() -> List[str]:
    return sorted([file for file in os.listdir(".")
                  if file.endswith(".py")])

action_registry = ActionRegistry()
action_registry.register(Action(
    name="list_project_files",
    function=list_project_files,
    description="Lists all files in the project.",
    parameters={},
    terminal=False
))

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

action_registry.register(Action(
    name="terminate",
    function=lambda message: f"{message}\nTerminating...",
    description="Terminates the session and prints the message to the user.",
    parameters={
        "type": "object",
        "properties": {"message": {"type": "string"}},
        "required": []
    },
    terminal=True
))
```
- 각 행동은 다음을 갖춘다: 목적을 설명하는 명확한 이름, 실제로 구현하는 함수, LLM이 언제 써야 할지 알려주는 설명, 파라미터를 정의하는 스키마, 에이전트 실행을 끝내는지 나타내는 `terminal` 플래그.

### AgentLanguage 선택
```python
agent_language = AgentFunctionCallingActionLanguage()
```
- README 에이전트는 **Function Calling 방식**을 선택 — 행동을 구조화하는 가장 신뢰할 수 있는 방법이기 때문. AgentLanguage가 목표를 system 메시지로 포맷하고, 행동을 함수 정의로 제시하고, 메모리에 대화 기록을 유지하고, LLM 응답에서 함수 호출을 파싱하는 일을 담당한다.

### 환경(Environment) 설정
```python
environment = Environment()
```
- 로컬 파일만 다루는 단순한 작업이라 **기본 Environment 구현**을 그대로 사용. 더 복잡한 에이전트라면 특정 실행 맥락이나 에러 케이스를 처리하도록 커스터마이징이 필요할 수 있다.

### 조립 및 실행
```python
agent = Agent(
    goals=goals,
    agent_language=AgentFunctionCallingActionLanguage(),
    action_registry=action_registry,
    generate_response=generate_response,
    environment=environment
)

user_input = "Write a README for this project."
final_memory = agent.run(user_input)
```

### 실행 흐름 이해하기
- **1차 반복**: 목표/행동을 담은 프롬프트 구성 → LLM이 (논리적 출발점으로) 먼저 파일 목록 조회를 선택 → Environment가 `list_project_files` 실행 → 결과가 메모리에 저장.
- **중간 반복들**: 파일 목록이 맥락에 포함됨 → LLM이 파일명을 보고 읽을 파일을 선택 → 각 선택된 파일에 대해 `read_project_file` 실행 → 파일 내용이 메모리에 누적.
- **마지막 반복**: 에이전트가 충분한 정보를 모았다고 판단 → LLM이 README 내용을 생성 → `terminate` 행동으로 결과를 전달.

### 이 설계가 쉽게 확장 가능한 이유
- 새로운 행동을 추가해 **다른 파일 형식**을 처리하도록 확장 가능
- 목표를 바꿔 **다른 종류의 문서**를 생성하도록 변경 가능
- 환경을 수정해 **원격 파일**과 작업하도록 확장 가능
- agent language를 바꿔 **다른 LLM 제공자**를 사용하도록 전환 가능
- 이 모든 확장이 **핵심 Agent Loop나 다른 컴포넌트를 바꾸지 않고도** 가능하다는 것이 프레임워크의 실용적 가치.

### 완성된 전체 코드
```python
def main():
    goals = [
        Goal(priority=1, name="Gather Information", description="Read each file in the project"),
        Goal(priority=1, name="Terminate", description="Call the terminate call when you have read all the files "
                                                       "and provide the content of the README in the terminate message")
    ]

    agent_language = AgentFunctionCallingActionLanguage()

    def read_project_file(name: str) -> str:
        with open(name, "r") as f:
            return f.read()

    def list_project_files() -> List[str]:
        return sorted([file for file in os.listdir(".") if file.endswith(".py")])

    action_registry = ActionRegistry()
    action_registry.register(Action(
        name="list_project_files", function=list_project_files,
        description="Lists all files in the project.", parameters={}, terminal=False))
    action_registry.register(Action(
        name="read_project_file", function=read_project_file,
        description="Reads a file from the project.",
        parameters={"type": "object", "properties": {"name": {"type": "string"}}, "required": ["name"]},
        terminal=False))
    action_registry.register(Action(
        name="terminate", function=lambda message: f"{message}\nTerminating...",
        description="Terminates the session and prints the message to the user.",
        parameters={"type": "object", "properties": {"message": {"type": "string"}}, "required": []},
        terminal=True))

    environment = Environment()

    agent = Agent(goals, agent_language, action_registry, generate_response, environment)

    user_input = "Write a README for this project."
    final_memory = agent.run(user_input)

    print(final_memory.get_memories())


if __name__ == "__main__":
    main()
```

## 요약
- README 에이전트는 Module 3에서 배운 **GAME + AgentLanguage** 프레임워크를 처음부터 끝까지 적용한 완결된 예시다: 두 개의 순차적 목표, 세 개의 행동(list/read/terminate), Function Calling 언어, 기본 환경.
- 핵심 메시지: **관심사 분리(separation of concerns)** 덕분에 각 컴포넌트가 명확한 책임을 가지며, 핵심 루프를 건드리지 않고도 행동/목표/환경/언어 중 무엇이든 바꿔서 새로운 용도의 에이전트를 쉽게 만들 수 있다.
