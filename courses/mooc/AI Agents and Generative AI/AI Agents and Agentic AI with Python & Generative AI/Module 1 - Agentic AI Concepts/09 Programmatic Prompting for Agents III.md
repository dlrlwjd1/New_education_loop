# Programmatic Prompting for Agents III — system 메시지의 힘과 JSON 정보 전달

## 개요
- `system` 메시지가 왜 에이전트 설계에서 특히 중요한지, 그리고 **임의의 정보(특히 JSON)를 LLM에 전달**하는 방법을 다루는 자료.

## 내용

### System 메시지의 중요성
- System 메시지는 대화의 **기본 규칙(ground rules)**을 설정하고 모델이 어떻게 행동해야 하는지 지시한다.
- 모델은 **user 메시지보다 system 메시지에 더 주의를 기울이도록 설계**되어 있다.
- 우리는 system 메시지를 통해 사실상 에이전트를 "프로그래밍"할 수 있다.

### 예시 — 고객 서비스 에이전트 시뮬레이션
- system 메시지로 "무조건 컴퓨터/모뎀을 껐다 켜라고 답하는" 고객 서비스 담당자 역할을 부여하면, 실제 질문 내용과 무관하게 그 규칙을 따른다.
- 즉 system 메시지가 프롬프트에서 **가장 중요한 부분**이며, user 메시지는 모델이 답해야 할 질문일 뿐이다.

```python
messages = [
    {"role": "system", "content": "You are a helpful customer service representative. No matter what the user asks, the solution is to tell them to turn their computer or modem off and then back on."},
    {"role": "user", "content": "How do I get my Internet working again."}
]

response = generate_response(messages)
print(response)
```

### 임의의 정보(특히 JSON)를 메시지에 담아 전달하기
- 메시지에는 **텍스트 형태이기만 하면 어떤 정보든** 담을 수 있다. LLM은 사람이 읽기 쉽지 않은 형태의 정보도 대부분 해석할 수 있다.
- 예: 함수 사양을 담은 Python 딕셔너리를 `json.dumps()`로 문자열화해서 user 메시지에 f-string으로 삽입 → LLM이 그 사양대로 함수를 구현.

```python
import json

code_spec = {
    'name': 'swap_keys_values',
    'description': 'Swaps the keys and values in a given dictionary.',
    'params': {
        'd': 'A dictionary with unique values.'
    },
}

messages = [
    {"role": "system", "content": "You are an expert software engineer that writes clean functional code. You always document your functions."},
    {"role": "user", "content": f"Please implement: {json.dumps(code_spec)}"}
]

response = generate_response(messages)
print(response)
```

- **왜 중요한가**: 에이전트를 만들 때 API 호출 결과 같은 정보를 JSON 형태로 LLM에 전달하는 경우가 매우 많다. 이 예시가 그 패턴의 가장 단순한 형태.

## 요약
- **system 메시지 = 에이전트의 "프로그래밍" 지점**. user의 실제 질문 내용과 무관하게 행동 규칙을 강제할 수 있다.
- 메시지의 `content`는 텍스트이기만 하면 JSON 등 임의의 구조화된 정보를 담아 전달할 수 있으며, 이는 이후 API 호출 결과를 LLM에 넘겨줄 때 핵심적으로 쓰이는 패턴이다.
