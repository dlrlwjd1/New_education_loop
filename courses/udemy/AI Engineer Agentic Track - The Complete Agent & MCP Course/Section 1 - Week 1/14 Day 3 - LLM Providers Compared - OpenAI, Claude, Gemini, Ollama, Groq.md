# Day 3 - LLM Providers Compared: OpenAI, Claude, Gemini, Ollama, Groq

## 개요
- 여러 모델과 추론 제공자, 로컬 실행 도구를 구분하고 비교 실습의 선택지를 소개한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49771139#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 모델 계열과 크기
강의에서는 OpenAI의 nano·mini·상위 모델, Anthropic의 Haiku·Sonnet·Opus, Google의 Flash Lite·Flash·Pro를 작은 모델부터 큰 모델까지 비교한다. 모델명과 버전은 촬영 시점 기준이며, 실습 목적은 특정 버전 암기보다 비용·속도·성능의 선택을 경험하는 것이다.

### 모델 개발사와 추론 제공자
DeepSeek은 모델을 제공하는 회사로 소개된다. Groq는 여러 공개 모델을 클라우드에서 실행하는 추론 제공자(inference provider)다. xAI의 모델 Grok와 철자·역할이 다르다. Ollama는 로컬 컴퓨터에서 모델을 실행하는 소프트웨어이며, 장비에 맞는 작은 모델을 선택한다.

### OpenRouter와 비교 자료
OpenRouter는 하나의 계정·키로 여러 제공자의 모델에 요청을 전달하는 중개 서비스로 설명한다. Artificial Analysis에서는 모델의 성능·속도·비용을 비교할 수 있지만 벤치마크만으로 업무 적합성을 결정해서는 안 된다고 덧붙인다.

### 무료·로컬 대안의 실습 방식
유료 모델 사용은 선택이다. 강사는 작은 모델이나 무료 대안을 쓰면 프롬프트를 더 다듬고 작업 단계를 작게 나누는 실험이 필요할 수 있다고 설명한다. 모든 제공자의 계정과 키를 만들 필요는 없다.

## 예시
| 구분 | 강의의 예 | 실습에서 확인할 점 |
|---|---|---|
| 모델 개발사 | OpenAI, Anthropic, Google, DeepSeek | 사용할 모델과 제공 API |
| 추론 제공자 | Groq | 호스팅된 공개 모델 |
| 요청 중개 | OpenRouter | 하나의 키로 여러 모델 호출 |
| 로컬 실행 | Ollama | 장비에 적합한 모델 크기 |

각 서비스의 가격·무료 범위는 이 노트에서 현재 조건으로 확정하지 않는다.

## 요약
- 모델 자체와 모델을 실행해 주는 서비스를 구분한다.
- Groq와 Grok는 서로 다르다.
- 자신이 사용하는 모델로 실험하며 비교 조건을 기록한다.
