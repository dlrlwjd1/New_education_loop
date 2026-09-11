# AI Agent / Environment Interface — Part 2: 응답 파싱과 행동 실행

## 개요
- **16**.md)에 이어지는 "Building a Simple AI Agent" 시리즈 Part 2. 에이전트가 응답을 생성한 뒤, **그 응답을 환경(environment)의 실제 행동으로 연결하는 인터페이스**를 다룬다.
- 흐름: 에이전트의 응답이 어떤 행동에 대응하는지 파악 → 올바른 행동이 결정되면 인터페이스가 그 행동을 실행 → 실행 결과를 다시 에이전트에게 피드백.

## 내용

### Step 3 — 응답 파싱 (Parse the Response)
- LLM 출력에서 의도된 행동과 파라미터를 추출하는 단계. 응답은 마크다운 코드 블록(` ```action `) 안에 JSON 형식으로 감싸인 사전 정의된 구조를 따라야 한다.
- 구현: ` ```action ` 마커 사이의 내용을 찾아 추출. **유효한 action 블록이 없으면 기본적으로 종료(termination) 행동으로 처리**하고 원본 응답을 메시지로 반환.

```python
def parse_action(response: str) -> Dict:
    """Parse the LLM response into a structured action dictionary."""
    try:
        response = extract_markdown_block(response, "action")
        response_json = json.loads(response)
        if "tool_name" in response_json and "args" in response_json:
            return response_json
        else:
            return {"tool_name": "error", "args": {"message": "You must respond with a JSON tool invocation."}}
    except json.JSONDecodeError:
        return {"tool_name": "error", "args": {"message": "Invalid JSON response. You must respond with a JSON tool invocation."}}
```

- 파싱 결과 예시:
```json
{
    "tool_name": "list_files",
    "args": {}
}
```
- `tool_name`과 `args`로 분해함으로써 에이전트가 다음 행동과 그 입력을 정확히 결정할 수 있다.
- **오류 복구(fallback) 메커니즘**: 유효한 action 블록이 없으면, 에이전트에게 유효한 JSON 도구 호출을 요구하는 에러 메시지를 반환한다. 이 에러 메시지는 마치 "user"가 보낸 것처럼 처리되어 다음 프롬프트에 들어간다 — 에이전트가 잘못된 형식으로 응답하기 시작해도 스스로 복구할 수 있게 해주는 장치.

### Step 4 — 행동 실행 (Execute the Action)
- 파싱된 `tool_name`과 `args`를 이용해 대응하는 함수를 실행. system 지시사항에 정의된 각 "도구"는 코드 상의 특정 함수와 대응한다.

```python
if action["tool_name"] == "list_files":
    result = {"result": list_files()}
elif action["tool_name"] == "read_file":
    result = {"result": read_file(action["args"]["file_name"])}
elif action["tool_name"] == "error":
    result = {"error": action["args"]["message"]}
elif action["tool_name"] == "terminate":
    print(action["args"]["message"])
    break
else:
    result = {"error": "Unknown action: " + action["tool_name"]}
```

- 예: `tool_name`이 `list_files`이고 `args`가 비어있으면 → `list_files()` 호출 → 디렉토리 내 파일 목록 반환. `read_file`이면 인자에서 파일명을 추출해 내용을 가져옴.
- **실행 단계는 에이전트가 실질적인 작업을 수행하는 지점** — 파일과 상호작용하거나 콘솔에 메시지를 출력하는 등. 의사결정 과정과 구체적인 결과를 연결해, 이후 반복을 위해 에이전트의 메모리에 피드백된다.

## 요약
- Part 2는 Agent Loop의 3~4단계(파싱·실행)를 구체화한다: **`parse_action()`으로 JSON 행동을 안전하게 추출**하고(실패 시 에러로 자기 복구 유도), **`tool_name` 분기로 실제 함수를 실행**한다.
- 이 파싱↔실행 인터페이스가 바로 [15](15%20Adding%20Structure%20to%20AI%20Agent%20Outputs.md)에서 말한 "AI 환경 인터페이스"의 실제 구현체다.
