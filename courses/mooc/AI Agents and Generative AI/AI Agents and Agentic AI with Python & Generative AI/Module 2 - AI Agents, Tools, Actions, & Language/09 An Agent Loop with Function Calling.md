# An Agent Loop with Function Calling — Function Calling으로 Agent Loop 단순화하기

## 개요
- [07 Using Function Calling Capabilities with LLMs](07%20Using%20Function%20Calling%20Capabilities%20with%20LLMs.md)에서 배운 Function Calling을 **Module 1의 Agent Loop**.md)에 적용해, **전체 루프를 얼마나 단순화할 수 있는지** 보여준다.
- 기존 방식: 엄격한 출력 형식을 프롬프트 엔지니어링으로 강제 → 검증 → 형식 이탈 시 에러 처리까지 직접 구현해야 했음.
- Function Calling 방식: 모델이 **네이티브하게 구조화된 응답**(유효한 함수 호출 또는 일반 텍스트)을 보장 → 파싱/행동 처리의 복잡도가 크게 줄어든다.

## 내용

### Function Calling 기반 Agent Loop 전체 코드
```python
import json
import os
from typing import List
from litellm import completion

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

def terminate(message: str) -> None:
    """Terminate the agent loop and provide a summary message."""
    print(f"Termination message: {message}")

tool_functions = {
    "list_files": list_files,
    "read_file": read_file,
    "terminate": terminate
}

tools = [
    {"type": "function", "function": {
        "name": "list_files",
        "description": "Returns a list of files in the directory.",
        "parameters": {"type": "object", "properties": {}, "required": []}
    }},
    {"type": "function", "function": {
        "name": "read_file",
        "description": "Reads the content of a specified file in the directory.",
        "parameters": {"type": "object", "properties": {"file_name": {"type": "string"}}, "required": ["file_name"]}
    }},
    {"type": "function", "function": {
        "name": "terminate",
        "description": "Terminates the conversation. No further actions or interactions are possible after this. Prints the provided message for the user.",
        "parameters": {"type": "object", "properties": {"message": {"type": "string"}}, "required": ["message"]}
    }}
]

agent_rules = [{
    "role": "system",
    "content": """
You are an AI agent that can perform tasks by using available tools.

If a user asks about files, documents, or content, first list the files before reading them.

When you are done, terminate the conversation by using the "terminate" tool and I will provide the results to the user.
"""
}]

iterations = 0
max_iterations = 10

user_task = input("What would you like me to do? ")
memory = [{"role": "user", "content": user_task}]

# The Agent Loop
while iterations < max_iterations:

    messages = agent_rules + memory

    response = completion(
        model="openai/gpt-4o",
        messages=messages,
        tools=tools,
        max_tokens=1024
    )

    if response.choices[0].message.tool_calls:
        tool = response.choices[0].message.tool_calls[0]
        tool_name = tool.function.name
        tool_args = json.loads(tool.function.arguments)

        action = {"tool_name": tool_name, "args": tool_args}

        if tool_name == "terminate":
            print(f"Termination message: {tool_args['message']}")
            break
        elif tool_name in tool_functions:
            try:
                result = {"result": tool_functions**tool_name**}
            except Exception as e:
                result = {"error": f"Error executing {tool_name}: {str(e)}"}
        else:
            result = {"error": f"Unknown tool: {tool_name}"}

        print(f"Executing: {tool_name} with args {tool_args}")
        print(f"Result: {result}")

        memory.extend([
            {"role": "assistant", "content": json.dumps(action)},
            {"role": "user", "content": json.dumps(result)}
        ])
    else:
        result = response.choices[0].message.content
        print(f"Response: {result}")
        break
```

### 무엇이 달라졌는가
- **커스텀 파싱 로직 불필요** — 엄격한 텍스트 출력 파싱을 설계할 필요 없이, 모델이 함수 호출을 항상 구조화된 JSON으로 반환.
- **동적 실행(Dynamic Execution)** — 에이전트가 뭘 해야 할지 수동으로 체크하는 경직된 루프 대신, 함수 호출을 그대로 읽어서 실행.
- **텍스트/행동 처리 통합(Unified Text & Action Handling)** — 함수 호출이 필요 없으면 모델이 그냥 메시지로 응답 → 대화형 흐름과 행동 기반 흐름을 자연스럽게 섞을 수 있음 (`tool_calls`가 없으면 `response.choices[0].message.content`를 출력하고 종료).
- **자동화된 함수 실행** — `tool_functionstool_name`로 모델이 지정한 도구 이름을 실제 Python 함수에 자동 매핑해서 실행.

### 그래도 에러는 발생할 수 있다
- Function Calling이 구조화된 실행을 개선하지만, **모든 문제를 없애주지는 않는다**. 모델이 여전히 형식이 잘못된 JSON이나 유효하지 않은 도구 호출을 반환할 수 있다 (문법 오류, 필수 필드 누락, 잘못된 값 형식 등).
- 대응: `json.loads()` 주변에 에러 처리를 추가해 `json.JSONDecodeError`를 잡고, 파싱 에러 발생 시 **다시 요청을 보내도록 재시도**하면 루프 전체가 중단되지 않고 견고해진다. (연습 문제로 직접 구현해볼 만한 부분.)
- JSON 형식이 올바르더라도, 파일 누락·잘못된 인자·예상치 못한 엣지 케이스로 **런타임 에러**는 여전히 발생할 수 있다 — `try/except`로 감싸서 실행이 완전히 멈추지 않고 의미 있는 피드백을 제공하도록 한다 (위 코드의 `try/except Exception as e: result = {"error": ...}` 부분).

## 요약
- Function Calling을 쓰면 Agent Loop에서 **파싱 단계가 사실상 사라지고**, `response.choices[0].message.tool_calls` 유무만 확인하면 된다.
- 그래도 **JSON 디코딩 에러 처리(재시도)**와 **함수 실행 중 런타임 에러 처리**는 여전히 필요하다 — Function Calling은 신뢰성을 높여주지만 완전한 만능은 아니다.
- 다음 레슨에서는 **데코레이터(decorator)로 도구를 동적으로 등록**해 유연성과 유지보수성을 더 높이는 방법을 다룰 예정 (Module 4에서 본격적으로 다룸).
