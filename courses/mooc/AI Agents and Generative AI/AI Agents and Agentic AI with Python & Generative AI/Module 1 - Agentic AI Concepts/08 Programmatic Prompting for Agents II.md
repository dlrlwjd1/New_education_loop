# Programmatic Prompting for Agents II — completion() 함수와 messages 구조 자세히

## 개요
- [06](06%20Programmatic%20Prompting%20for%20Agents.md)에서 본 코드를 다시 살펴보며, LiteLLM의 `completion()` 함수와 `messages`(ChatML 포맷)의 구조를 자세히 분해해서 설명하는 자료.

## 내용

### `completion()` 함수의 역할
- `litellm`의 `completion` 함수는 LLM과 상호작용하는 핵심 방법 — 코드와 LLM 사이의 **다리(bridge)** 역할을 한다.
- **입력(Input)**: 프롬프트, 즉 모델이 처리하길 원하는 메시지 목록(list of messages). 질문, 명령, 또는 지시사항의 집합이 될 수 있다.
- **출력(Output)**: 프롬프트에 대한 모델의 응답 — 보통 생성된 텍스트 형태로 반환.

### `messages`의 구조 — ChatML 포맷
- `messages` 파라미터는 **ChatML 포맷**을 따른다: `role`과 `content`를 가진 딕셔너리의 리스트.
- `role`은 대화에서 "누가 말하고 있는지"를 나타내며, LLM이 대화의 맥락(context)을 이해하고 적절히 응답하도록 돕는다. 세 가지 역할(role):
  - **"system"**: 세션 전체에 걸쳐 모델이 어떻게 행동해야 하는지에 대한 초기 지시/규칙/설정을 제공. 이 메시지는 "대화"의 일부가 아니라 기본 규칙/맥락을 설정하는 역할 (예: "너는 JSON으로만 응답할 거야.").
  - **"user"**: 사용자의 입력 — 프롬프트, 질문, 지시사항을 제공하는 부분.
  - **"assistant"**: AI 모델의 응답을 나타냄. 이미 진행 중인 대화의 맥락을 제공하거나, 예시 응답을 보여줘서 모델을 유도할 때 포함할 수 있다. 이 메시지들은 "모델이 과거에 말했던 것"으로 해석된다.
- 모델은 `provider/model` 형식으로 지정한다 (예: `"openai/gpt-4o"`).
- 응답은 `response.choices[0].message.content`에 생성된 텍스트로 담겨 있다 — 채팅 인터페이스에서 모델이 응답할 때 보이는 메시지와 동일한 내용.

## 예시
```python
from litellm import completion
from typing import List, Dict


def generate_response(messages: List[Dict]) -> str:
    """Call LLM to get response"""
    response = completion(
        model="openai/gpt-4o",
        messages=messages,
        max_tokens=1024
    )
    return response.choices[0].message.content


messages = [
    {"role": "system", "content": "You are an expert software engineer that prefers functional programming."},
    {"role": "user", "content": "Write a function to swap the keys and values in a dictionary."}
]

response = generate_response(messages)
print(response)
```

### 간단 연습 문제 (Quick Exercise)
- 자연어로는 절대 응답하지 않고, **Base64로 인코딩된 문자열로만** 응답하도록 프롬프트를 만들어볼 것. (system 메시지로 응답 형식을 강제하는 연습)

## 요약
- `completion()` = 코드와 LLM을 잇는 다리. `messages`(ChatML 포맷의 role/content 딕셔너리 리스트)를 입력받아 응답 텍스트를 반환한다.
- `role`은 system(규칙 설정) / user(사용자 입력) / assistant(모델의 과거 응답, 맥락 제공용) 세 가지.
- 모델 지정은 `provider/model` 형식, 응답 텍스트는 `response.choices[0].message.content`에서 추출.
