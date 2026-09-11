# Day 3 - Call 8 LLMs with the OpenAI-Compatible API: GPT, Claude, Gemini

## 개요
- 같은 질문을 여러 제공자의 모델에 보내고 응답을 공통 형식으로 수집한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49771147#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### OpenAI 호환 API
각 제공자의 고유 API 대신 OpenAI 호환 엔드포인트를 사용한다. OpenAI Python 클라이언트를 생성할 때 `base_url`과 `api_key`를 바꾸면 동일한 Chat Completions 호출 형태를 유지할 수 있다. 변수 이름이 `anthropic`이어도 클라이언트 클래스는 OpenAI일 수 있다.

### 비교 데이터 수집
앞 강의에서 생성한 질문을 하나의 `messages` 리스트로 만든다. 각 모델의 이름은 `competitors`, 응답은 `answers`에 같은 순서로 추가한다. 등록과 출력을 도우미 함수로 묶어 중복을 줄인다.

### 클라우드 모델 시연
OpenAI·Claude·Gemini·DeepSeek의 모델을 호출한 다음, Groq를 통해 GPT-OSS를, OpenRouter를 통해 Kimi를 호출한다. “미덕이 과도해지면 어떤 악덕이 되는가”라는 공통 질문에 규율이 경직성으로, 절약이 인색함으로, 겸손이 지나친 자기 억제로 바뀐다는 등의 서로 다른 답이 나온다.

### 실습의 목적
서로 다른 크기의 모델을 섞어 사용하므로 엄밀한 성능 순위 실험은 아니다. 강사는 최강 모델 경쟁보다 여러 호출을 연결하는 흐름을 배우는 것이 목적이며, 모델 버전은 자신이 사용할 수 있는 것으로 바꿔도 된다고 설명한다.

## 예시
```text
동일한 messages
├─ OpenAI API → 응답
├─ Anthropic 호환 API → 응답
├─ Google 호환 API → 응답
├─ DeepSeek 호환 API → 응답
├─ Groq → 호스팅된 GPT-OSS의 응답
└─ OpenRouter → 선택한 Kimi 모델의 응답

각 호출 결과: 모델명과 답변을 같은 인덱스로 보관
```

## 요약
- 호환 API는 클라이언트 사용 형태를 통일한다.
- 모델 개발사와 실제 요청을 받는 제공자를 함께 기록한다.
- 이 강의의 비교는 오케스트레이션 실습이며 보편적인 모델 순위가 아니다.
