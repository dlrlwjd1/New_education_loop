# How Your Agent Communicates with the LLM — The Agent Language (4부)

## 개요
- GAME(Goals/Actions/Memory/Environment) 외에 **다섯 번째 핵심 컴포넌트, `AgentLanguage`**를 다룬다. 이는 우리의 구조화된 에이전트 컴포넌트와 LLM의 텍스트 기반 입출력 형식 사이의 **번역가(interpreter)** 역할을 한다.
- 다음 행동을 프롬프트하는 방법(텍스트 파싱 vs Function Calling), 메모리를 표현하는 방법(문자열 결합 vs ChatML 메시지) 등 다양한 선택지가 있는데, `AgentLanguage`는 이런 관심사를 **재사용 가능한 전략으로 캡슐화**해 에이전트에 꽂아넣을 수 있게 해준다.

## 내용

### AgentLanguage의 두 가지 책임
```python
class AgentLanguage:
    def construct_prompt(self,
                        actions: List[Action],
                        environment: Environment,
                        goals: List[Goal],
                        memory: Memory) -> Prompt:
        raise NotImplementedError("Subclasses must implement this method")

    def parse_response(self, response: str) -> dict:
        raise NotImplementedError("Subclasses must implement this method")
```
1. **프롬프트 구성(Prompt Construction)** — GAME 컴포넌트를 LLM이 이해할 수 있는 형식으로 변환.
2. **응답 파싱(Response Parsing)** — LLM 응답을 해석해 에이전트가 취할 행동을 결정.

### Agent Loop에서 AgentLanguage가 개입하는 지점
```python
def run(self, user_input: str, memory=None, max_iterations: int = 50) -> Memory:
    memory = memory or Memory()
    self.set_current_task(memory, user_input)

    for _ in range(max_iterations):
        # 1. Build prompt using AgentLanguage
        prompt = self.construct_prompt(self.goals, memory, self.actions)
        # 2. Get LLM response
        response = self.prompt_llm_for_action(prompt)
        # 3. Parse response using AgentLanguage
        action, invocation = self.get_action(response)
        # 4. Execute action in environment
        result = self.environment.execute_action(action, invocation["args"])
        # 5. Update memory
        self.update_memory(memory, response, result)

        if self.should_terminate(response):
            break

    return memory
```
- **1단계(프롬프트 구성)**와 **3단계(응답 파싱)**, 이 두 지점에서 AgentLanguage가 구조화된 세계와 LLM의 텍스트 기반 세계 사이를 통역한다.

### 1단계 — 프롬프트 구성 상세
```python
def construct_prompt(self, goals: List[Goal], memory: Memory, actions: ActionRegistry):
    prompt = []
    prompt += self.format_goals(goals)          # 목표를 지시문으로 변환
    prompt += self.format_actions(actions.get_actions())  # 행동을 도구 설명으로 변환
    prompt += self.format_memory(memory)        # 메모리를 대화 맥락으로 변환
    return Prompt(messages=prompt, tools=tools)
```
- Function Calling을 쓸 경우 결과 예시:
```json
{
  "messages": [
    {"role": "system", "content": "Your goal is to process all files..."},
    {"role": "user", "content": "Please analyze file.txt"},
    {"role": "assistant", "content": "I'll read the file..."}
  ],
  "tools": [
    {"type": "function", "function": {
      "name": "read_file",
      "description": "Reads a file from the system",
      "parameters": {"type": "object", "properties": {"file_path": {"type": "string"}}}
    }}
  ]
}
```

### 2단계 — 응답 파싱 상세
```python
def get_action(self, response):
    invocation = self.agent_language.parse_response(response)
    action = self.actions.get_action(invocation["tool"])
    return action, invocation
```
- 예: JSON 액션 형식을 쓸 경우, LLM 응답이 수다스러운 설명과 마크다운 액션 블록이 섞여 올 수 있다:
```
Let me analyze the contents of the file.

```action
{
    "tool": "read_file",
    "args": {
        "file_path": "file.txt"
    }
}
```
```
- AgentLanguage가 이를 파싱해 구조화된 행동으로 추출:
```json
{"tool": "read_file", "args": {"file_path": "file.txt"}}
```
- **핵심**: LLM이 어떤 방식(Function Calling, JSON 블록, 자연어)으로 소통하든, **AgentLanguage가 그 차이를 흡수**해주기 때문에 에이전트의 핵심 루프는 전혀 바뀌지 않는다. 서로 다른 언어를 위한 통역사를 여러 명 두는 것과 같다 — 의미는 같지만 표현 방식만 청중에 맞게 조정된다.

### 예시 1 — JSON Action Language (프롬프트 엔지니어링 + 파싱 방식)
```python
class AgentJsonActionLanguage(AgentLanguage):
    action_format = """
<Stop and think step by step. Insert your thoughts here.>

```action
{
    "tool": "tool_name",
    "args": {...fill in arguments...}
}
```"""

    def format_actions(self, actions: List[Action]) -> List:
        action_descriptions = [
            {"name": action.name, "description": action.description, "args": action.parameters}
            for action in actions
        ]
        return [{
            "role": "system",
            "content": f"""
Available Tools: {json.dumps(action_descriptions, indent=4)}

{self.action_format}"""
        }]

    def parse_response(self, response: str) -> dict:
        """Extract and parse the action block"""
        try:
            start_marker = "```action"
            end_marker = "```"
            stripped_response = response.strip()
            start_index = stripped_response.find(start_marker)
            end_index = stripped_response.rfind(end_marker)
            json_str = stripped_response[
                start_index + len(start_marker):end_index
            ].strip()
            return json.loads(json_str)
        except Exception as e:
            print(f"Failed to parse response: {str(e)}")
            raise e
```

### 예시 2 — Function Calling Language
```python
class AgentFunctionCallingActionLanguage(AgentLanguage):
    def format_actions(self, actions: List[Action]) -> List:
        """Convert actions to function descriptions"""
        return [
            {
                "type": "function",
                "function": {
                    "name": action.name,
                    "description": action.description[:1024],
                    "parameters": action.parameters,
                },
            }
            for action in actions
        ]

    def construct_prompt(self,
                        actions: List[Action],
                        environment: Environment,
                        goals: List[Goal],
                        memory: Memory) -> Prompt:
        prompt = []
        prompt += self.format_goals(goals)
        prompt += self.format_memory(memory)

        tools = self.format_actions(actions)

        return Prompt(messages=prompt, tools=tools)

    def parse_response(self, response: str) -> dict:
        """Parse the function call response"""
        try:
            return json.loads(response)
        except Exception as e:
            return {
                "tool": "terminate",
                "args": {"message": response}
            }
```
- Function Calling 방식의 장점: 자유 형식 텍스트를 파싱하는 부담을 덜어준다. 단점: **LLM의 추론 과정(reasoning)을 볼 수 없을 수도** 있다. 대신 유효한 JSON을 얻는 것이 훨씬 단순해진다.
- 파싱 실패 시 `terminate` 도구로 폴백해서, 응답 자체를 메시지로 담아 안전하게 종료하도록 처리하는 점도 주목할 만하다.

### 교체 가능한 언어(Swappable Languages)의 힘
```python
# 간단한 작업엔 자연어 기반 에이전트
simple_agent = Agent(
    goals=goals,
    agent_language=AgentJsonActionLanguage(),
    action_registry=registry,
    generate_response=llm.generate,
    environment=env
)

# 복잡한 작업엔 Function Calling 기반 에이전트
complex_agent = Agent(
    goals=goals,
    agent_language=AgentFunctionCallingActionLanguage(),
    action_registry=registry,
    generate_response=llm.generate,
    environment=env
)
```
- 같은 에이전트가 **language 구현만 바꿔도 완전히 다르게 동작**할 수 있다. 이 관심사 분리 덕분에:
  - 에이전트 로직을 바꾸지 않고 다양한 프롬프트 형식을 실험 가능
  - 서로 다른 LLM 제공자의 소통 스타일(강점)에 맞춰 프롬프팅 방식을 조정 가능
  - 기존 코드를 건드리지 않고 새로운 응답 형식 추가 가능
  - 에러 처리/재시도 로직을 언어 레벨에서 관리 가능

## AgentLanguage가 중요한 이유 — 정리
- **소통 로직의 중앙화**: 모든 프롬프트 구성과 응답 파싱이 한 곳에 모임.
- **실험 용이성**: 새로운 언어 구현을 만들어 다양한 프롬프트 전략을 시도 가능.
- **신뢰성 향상**: 구조화된 응답 형식과 에러 처리로 에이전트가 더 견고해짐.
- **진화 가능성**: LLM의 능력이 발전해도, 에이전트의 핵심 로직을 바꾸지 않고 소통 방식만 적응시킬 수 있음.

## 요약
- `AgentLanguage`는 GAME에 추가되는 다섯 번째 요소로, **"무엇을 할지"(GAME)와 "어떻게 소통할지"(Language)를 분리**하는 핵심 추상화다.
- `AgentJsonActionLanguage`(파싱 기반)와 `AgentFunctionCallingActionLanguage`(Function Calling 기반) 두 구현 예시를 통해, **같은 Agent 클래스가 language만 바꿔서 완전히 다른 소통 방식을 취할 수 있음**을 보여준다.
- 이 분리 덕분에 LLM 제공자나 프롬프트 전략이 바뀌어도 에이전트의 핵심 로직(Goals/Actions/Memory/Environment)은 그대로 유지된다.
