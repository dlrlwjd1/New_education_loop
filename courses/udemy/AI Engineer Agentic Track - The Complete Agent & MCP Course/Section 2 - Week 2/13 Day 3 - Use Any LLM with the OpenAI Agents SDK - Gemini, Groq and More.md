# Day 3 - Use Any LLM with the OpenAI Agents SDK: Gemini, Groq and More

## 개요
- 같은 SDK 안에서 서로 다른 제공자의 모델을 영업 에이전트 도구로 연결한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49820713#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 모델 연결의 세 단계
제공자의 OpenAI 호환 기본 URL을 정하고, 그 URL과 키로 `AsyncOpenAI` 클라이언트를 만든다. 이어서 클라이언트와 모델명을 `OpenAIChatCompletionsModel`에 넣는다. 이번에는 모델명 문자열 대신 이 모델 객체를 Agent에 전달한다.

### 프롬프트는 같게, 모델은 다르게
이전 실습은 같은 모델에 서로 다른 스타일을 주었지만 여기서는 같은 영업 지시에 Gemini, OpenRouter를 통한 Kimi, Groq를 통한 GPT-OSS를 사용한다. 세 Agent를 `as_tool`로 바꾸어 관리자에게 준다. 관리자는 OpenAI 모델을 사용한다.

### 메시지 도구 재사용과 수정
전달 코드는 `messenger.py`로 분리해 가져온다. 강사는 앞선 버전에서 공통 전달 함수 대신 이메일 함수를 직접 호출해 Pushover 대안을 건너뛰던 문제를 수정했다고 설명한다. 도구는 선택한 전달 수단을 따르는 `send_message`로 연결해야 한다.

### 실행 결과 비교
trace에서 각 모델의 소요 시간과 출력을 비교한다. 시연에서는 Kimi가 가장 오래 걸렸고 관리자가 그 초안을 선택했다. 이는 해당 실행 결과이며 모델의 보편적 성능 순위는 아니다. 중요한 것은 서로 다른 제공자의 실행도 하나의 협업 흐름에서 추적할 수 있다는 점이다.

## 예시
```text
제공자 URL + API 키 → AsyncOpenAI
AsyncOpenAI + 모델 ID → OpenAIChatCompletionsModel
모델 객체 + 공통 지시 → Agent → as_tool → 관리자
```

## 요약
- 타사 모델은 비동기 클라이언트와 SDK 모델 어댑터로 연결한다.
- 지시와 모델을 따로 바꾸어 비교할 수 있다.
- 전달 도구의 우회 호출 같은 연결 오류도 확인한다.
