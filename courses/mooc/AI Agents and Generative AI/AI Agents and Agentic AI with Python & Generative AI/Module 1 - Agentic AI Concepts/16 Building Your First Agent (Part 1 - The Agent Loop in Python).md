# Building Your First Agent — Part 1: Agent Loop를 Python으로 구현하기

## 개요
- 지금까지 배운 Agent Loop 개념과 프롬프트 설계 방법을 실제로 **Python 코드로 구현**하는 실습. 디렉토리 파일 목록 조회, 파일 내용 읽기, 그 내용에 대한 질문 답변이 가능한 간단한 에이전트를 만든다.
- "Building a Simple AI Agent" 3부작 중 Part 1 — 에이전트 루프의 각 단계(입력 수신 → 행동 결정 → 실행 → 메모리 갱신)를 하나씩 뜯어본다.

## 내용

### Agent Loop의 6단계 (Python 구현 관점)
1. **Construct Prompt** — 에이전트의 메모리(memory) + 사용자 입력 + 시스템 규칙(system rules)을 하나의 프롬프트로 결합. 매 반복마다 LLM이 다음 행동을 결정하는 데 필요한 모든 맥락을 갖도록 보장.
2. **Generate Response** — 구성된 프롬프트를 LLM에 보내고 응답을 받음.
3. **Parse Response** — LLM 출력에서 의도된 행동(action)과 파라미터를 추출. 응답은 반드시 사전에 정의된 구조(예: JSON)를 따라야 정확히 해석 가능.
4. **Execute Action** — 추출된 행동/파라미터로 적절한 도구(tool)를 이용해 실제 작업 수행 (파일 목록 조회, 내용 읽기, 메시지 출력 등).
5. **Convert Result to String** — 실행 결과를 문자열로 변환해 메모리에 저장하고 피드백으로 제공.
6. **Continue Loop?** — 현재 행동/결과를 바탕으로 루프를 계속할지 판단. "terminate" 행동이 지정되거나 작업이 완료되면 종료.

### 코드로 본 Agent Loop
```python
# The Agent Loop
while iterations < max_iterations:

    # 1. Construct prompt: Combine agent rules with memory
    prompt = agent_rules + memory

    # 2. Generate response from LLM
    print("Agent thinking...")
    response = generate_response(prompt)
    print(f"Agent response: {response}")

    # 3. Parse response to determine action
    action = parse_action(response)

    result = "Action executed"

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

    print(f"Action result: {result}")

    # 5. Update memory with response and results
    memory.extend([
        {"role": "assistant", "content": response},
        {"role": "user", "content": json.dumps(result)}
    ])

    # 6. Check termination condition
    if action["tool_name"] == "terminate":
        break

    iterations += 1
```

### Step 1 — 프롬프트 구성: `agent_rules` + `memory`
- `prompt = agent_rules + memory`
- **agent_rules**: 에이전트가 지켜야 할 사전 정의된 system 지시사항 — 사용 가능한 도구(tools)와 행동 제약을 명시.
- **memory**: 과거 상호작용의 기록 전체(사용자 입력, 에이전트 응답, 실행된 행동의 결과).
- 이렇게 구성하면 에이전트가 반복마다 **연속성(continuity)**을 유지하며, 이전 행동/결과를 바탕으로 행동을 조정할 수 있다.

### Agent Rules — 에이전트의 행동 정의
- system 메시지로 명시되며, 에이전트가 예측 가능하고 정해진 범위 안에서 행동하도록 보장하는 핵심 요소.

```python
agent_rules = [{
    "role": "system",
    "content": """
You are an AI agent that can perform tasks by using available tools.

Available tools:
- list_files() -> List[str]: List all files in the current directory.
- read_file(file_name: str) -> str: Read the content of a file.
- terminate(message: str): End the agent loop and print a summary to the user.

If a user asks about files, list them before reading.

Every response MUST have an action.
Respond in this format:

```action
{
    "tool_name": "insert tool_name",
    "args": {...fill in any required arguments here...}
}
"""
}]
```

- **system 역할**: 대화 전체의 기본 규칙을 세워 LLM이 무엇을 할 수 있고 어떻게 행동해야 하는지 이해하게 함.
- **도구 설명(Tools description)**: 사용 가능한 도구를 명시적으로 나열해 환경과 상호작용하는 구조화된 인터페이스 제공.
- **출력 형식(Output format)**: `` ```action {...} `` 형식을 강제해 파싱과 실행을 쉽고 오류 적게 만듦.

### 핵심 통찰 — "무엇을 할지"와 "어떻게 할지"의 분리
- system 프롬프트의 각 "도구(tool)"는 코드상의 함수와 1:1로 대응한다. **에이전트는 어떤 함수를 언제 실행할지, 어떤 파라미터로 실행할지를 선택할 뿐**, 함수 자체를 만들지는 않는다 — 도구의 내부 로직은 코드에 미리 정의되어 있고, 에이전트는 그 오케스트레이션(orchestration)만 담당.
- 에이전트는 루프가 진행됨에 따라 적응할 수 있으므로, 현재 맥락과 작업 요구사항에 따라 **동적으로 어떤 도구를 쓸지 결정**할 수 있다.
  - 예: 사용자가 특정 파일 내용을 읽어달라고 하면 → 먼저 `list_files`로 사용 가능한 파일을 확인 → 그 결과를 바탕으로 `read_file`을 쓸지, 파일이 없다는 에러로 응답할지 결정.
- 이 분리(reasoning은 LLM, 실행은 코드) 덕분에 **모듈화되고 확장 가능한 프레임워크**가 만들어지며, 도구를 다시 작성하지 않고도 점점 복잡한 작업을 처리할 수 있다.
- 또한 에이전트 루프는 전통적으로 필요했던 "접착 코드(glue code)"를 상당 부분 없애준다 — 워크플로우를 하드코딩하는 대신, 에이전트가 작업 달성에 필요한 행동 순서를 동적으로 결정한다.

### 예시 — "여기 어떤 파일이 있어?"
- system 규칙에 따라 LLM은 이렇게 응답:
```json
{"tool_name": "list_files", "args": {}}
```
- 이후 `memory`는 다음과 같이 쌓인다:
```python
memory = [
    {"role": "user", "content": "What files are in this directory?"},
    {"role": "assistant", "content": "```action\n{\"tool_name\":\"list_files\",\"args\":{}}\n```"},
    {"role": "user", "content": "[\"file1.txt\", \"file2.txt\"]"}
]
```

### Step 2 — 응답 생성 (Generate Response)
```python
response = generate_response(prompt)
```
- `generate_response`는 LiteLLM으로 프롬프트를 LLM에 보내고 응답을 받는다. 이 응답이 다음 단계에서 파싱·실행될 구조화된 행동(action)을 담고 있다 — 즉 **이 지점이 LLM이 다음 행동을 "결정"하는 곳**.

## 요약
- Agent Loop = **프롬프트 구성(agent_rules + memory) → 응답 생성 → 파싱 → 도구 실행 → 결과 문자열화 → 메모리 갱신 → 종료 판단**의 반복.
- `agent_rules`(system 메시지, 도구 목록 + 출력 형식 강제)와 `memory`(누적된 상호작용 기록)의 조합이 매 반복의 프롬프트를 구성한다.
- 핵심 설계 원칙: **에이전트는 "무엇을 할지"만 결정하고, "어떻게 할지"(도구의 실제 구현)는 코드에 미리 정의**되어 있다 — 이 분리가 에이전트 루프를 강력하고 확장 가능하게 만드는 이유.
