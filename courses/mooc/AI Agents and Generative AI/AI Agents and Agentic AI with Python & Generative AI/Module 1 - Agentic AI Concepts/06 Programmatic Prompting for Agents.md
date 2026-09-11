# Programmatic Prompting for Agents (프로그래밍적으로 프롬프트 보내기)

## 개요
- 에이전트를 만들기 위해 필요한 두 가지 핵심 능력을 소개하는 실습(Ungraded Plugin) 자료: **프로그래밍적 프롬프팅(programmatic prompting)**과 **메모리 관리(memory management)**.
- 다음 강의들에서 만들 Agent Loop의 기초가 되는 내용.

## 내용

### 왜 필요한가
- 지금까지는 사람이 직접 프롬프트를 입력하고, LLM의 응답을 보고 다음 행동을 결정하는 **수동적인 대화(conversation)** 방식이었다.
- 에이전트를 만들려면 이 "프롬프트 → 응답 → 행동 결정" 사이클을 **코드로 자동화**해야 한다 — 이것이 프로그래밍적 프롬프팅(programmatic prompting)이다.
- 또한 LLM이 **각 반복(iteration)마다 무엇을 알고/기억하는지**를 통제할 방법이 필요하다. 예를 들어 방금 어떤 API를 호출했는지, 그 결과가 무엇이었는지를 기억하도록 관리해야 한다 — 이것이 메모리 관리(memory management)이다.
- 이 두 능력이 합쳐져서 이후 배울 **Agent Loop**의 기초가 된다.

### 기본 사용법 — LiteLLM으로 프롬프트 보내기
- LiteLLM의 `completion()` 함수를 사용해 LLM에 메시지 목록(`messages`)을 보내고 응답을 받는다.
- 메시지는 `role`(예: `system`, `user`)과 `content`로 구성된 딕셔너리의 리스트(List[Dict]) 형태.
- `system` 메시지로 LLM의 역할/페르소나를 지정하고, `user` 메시지로 실제 요청을 전달한다.

## 예시
```python
#
# Set your API key as shown in the Google Colab notebook
#

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

## 요약
- 에이전트 개발의 출발점은 **① 프롬프트를 코드로 자동 전송하기**, **② 반복마다 무엇을 기억시킬지 관리하기** 두 가지.
- `litellm.completion()`에 `model` + `messages`(role/content 딕셔너리 리스트)를 넘기면 응답을 받을 수 있다.
- 이 기본 패턴이 이후 Agent Loop 구현의 토대가 된다. (실습 코드는 다음 항목의 Google Colab 노트북에서 직접 실행 가능)
