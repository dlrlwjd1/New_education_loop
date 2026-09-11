# Using Function Calling Capabilities with LLMs

## 개요
- [Module 1 - 15 Adding Structure to AI Agent Outputs](../Module%201%20-%20Agentic%20AI%20Concepts/15%20Adding%20Structure%20to%20AI%20Agent%20Outputs.md)에서 예고했던 **두 번째 접근법 — Function Calling API**를 본격적으로 다루는 자료.
- 지금까지는 프롬프트 엔지니어링으로 JSON 형식 출력을 강제하고 직접 파싱했는데, 이는 **모델마다 형식이 조금씩 달라지거나 필수 필드가 빠지는 등 불안정**하다. Function Calling은 이 문제를 근본적으로 해결한다.

## 내용

### Function Calling이란
- 대부분의 LLM은 **함수 호출 API(function calling API)**를 제공해, 자유 텍스트 생성 대신 **구조화된 실행을 보장**한다.
- 도구를 **JSON Schema**로 명시적으로 정의해 모델에 전달하면, 모델이 스스로 언제/어떻게 그 함수를 호출할지 결정한다.
- 모델의 응답은 둘 중 하나:
  - **함수 호출(function call)** — 도구 이름과 인자를 구조화된 JSON으로 반환.
  - **일반 텍스트 응답** — 함수가 필요 없다고 판단한 경우.
- 이 방식은 "출력 형식을 강제하기 위한 프롬프트 엔지니어링"을 없애고, 에이전트가 **의사결정(decision-making)에만 집중**하게 해준다.

### 함수 호출 8단계

**1. 실제 도구 함수 정의**
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
```

**2. 함수 레지스트리(registry) 생성** — 이름 → 실제 함수 매핑
```python
tool_functions = {
    "list_files": list_files,
    "read_file": read_file
}
```

**3. JSON Schema로 도구 명세(tools) 정의**
```python
tools = [
    {
        "type": "function",
        "function": {
            "name": "list_files",
            "description": "Returns a list of files in the directory.",
            "parameters": {"type": "object", "properties": {}, "required": []}
        }
    },
    {
        "type": "function",
        "function": {
            "name": "read_file",
            "description": "Reads the content of a specified file in the directory.",
            "parameters": {
                "type": "object",
                "properties": {"file_name": {"type": "string"}},
                "required": ["file_name"]
            }
        }
    }
]
```
- `name`은 `tool_functions` 딕셔너리의 키와 일치해야 한다. `description`은 모델이 언제 이 도구를 쓸지 판단하는 근거. `parameters`는 JSON Schema로 입력 형식을 정의 (`list_files`는 파라미터 없음, `read_file`은 `file_name` 문자열 필수).

**4. 에이전트 규칙(system 메시지) 설정**
```python
agent_rules = [{
    "role": "system",
    "content": """
You are an AI agent that can perform tasks by using available tools.

If a user asks about files, documents, or content, first list the files before reading them.
"""
}]
```
- Function Calling을 쓰면 **출력 형식을 어떻게 만들지 지시할 필요가 없다** — 의사결정 로직에만 집중하면 된다.

**5. 대화 맥락 준비**
```python
user_task = input("What would you like me to do? ")
memory = [{"role": "user", "content": user_task}]
messages = agent_rules + memory
```

**6. `tools` 파라미터를 포함해 API 호출**
```python
response = completion(
    model="openai/gpt-4o",
    messages=messages,
    tools=tools,
    max_tokens=1024
)
```
- 핵심 차이점: **`tools` 파라미터**를 전달하는 것 — 이것이 함수 호출 메커니즘을 활성화한다.

**7. 구조화된 응답 처리**
```python
tool = response.choices[0].message.tool_calls[0]
tool_name = tool.function.name
tool_args = json.loads(tool.function.arguments)
```
- 응답은 자유 텍스트가 아니라 전용 `tool_calls` 배열로 온다 — **함수 이름이 정확히 식별**되고, **인자가 유효한 JSON으로 올바르게 포맷**되므로, 비정형 텍스트에서 파싱/추출할 필요가 없다.

**8. 제공된 인자로 함수 실행**
```python
result = tool_functions**tool_name**
```
- 레지스트리에서 해당 함수를 찾아 모델이 제공한 인자로 호출. `**tool_args`가 JSON 객체를 키워드 인자로 풀어준다.

### Function Calling API의 핵심 이점
- **구조화된 응답을 위한 프롬프트 엔지니어링이 불필요** — 모델에게 JSON을 강제로 출력하게 만들 필요가 없다.
- **표준화된 JSON Schema 사용** — API 문서화에 쓰이던 형식을 AI 상호작용에도 그대로 적용.
- **텍스트 응답과 도구 실행을 혼합 가능** — 모델이 도구가 필요한지 스스로 판단해서 자연어로 응답할 수도 있음.
- **파싱 로직 단순화** — 일관성 없는 출력을 처리할 필요 없이, 응답에 `tool_calls`가 있는지만 확인하면 됨.
- **문법적으로 올바른 인자 보장** — 모델이 자동으로 인자를 예상된 파라미터 형식에 맞춰준다.

## 요약
- Function Calling API = **도구를 JSON Schema로 명시 → 모델이 구조화된 `tool_calls`로 응답 → 파싱 없이 바로 실행**하는 방식.
- [Module 1 - 15](../Module%201%20-%20Agentic%20AI%20Concepts/15%20Adding%20Structure%20to%20AI%20Agent%20Outputs.md)의 "프롬프트 엔지니어링 + 파싱" 방식과 대비되는 **두 번째 접근법**으로, 출력 형식 강제라는 골칫거리를 없애고 에이전트가 의사결정에만 집중하게 해준다.
- 다음 자료에서는 **데코레이터(decorator)를 이용해 도구를 동적으로 등록하는 방법**을 다룰 예정.
