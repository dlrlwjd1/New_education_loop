# Using Phoenix to Trace Execution Steps

## 개요
- **Arize Phoenix**를 사용해 AI 파이프라인 내부의 실행을 추적(trace)하는 방법 — 경량 설정, 워터폴 뷰(waterfall view), 커스텀 스팬, 트레이스 필터링·내보내기라는 5가지 핵심 기능을 다루는 5분 영상. "Tracing and Debugging with Arize Phoenix" 레슨의 두 번째 영상.

## 내용

### 왜 Phoenix가 필요한가
- 많은 AI 프로덕션 시스템에서 팀은 답이 틀렸다는 것은 알지만 실패가 실제로 어디서 일어났는지는 모름 — Phoenix가 이 문제를 해결하는 데 도움.
- 핵심 아이디어: **전체 체인을 볼 수 있다면, 전체 체인을 디버깅할 수 있다.** 관측 가능성이 숨겨진 실행을 가시적이고 설명 가능한 것으로 전환함.

### Phoenix의 5가지 핵심 기능
1. **경량 설정(Lightweight Setup)**: 몇 줄의 코드로 Phoenix를 실행하고 OpenAI 호출을 계측(instrument)할 수 있음.
2. **트레이스 워터폴(Trace Waterfall)**: 모든 스팬이 입력, 출력, 지연시간, 토큰 수를 보여줄 수 있음.
3. **커스텀 스팬(Custom Spans)**: 팀이 자체 비즈니스 로직을 데코레이션해, 모델 호출뿐 아니라 애플리케이션 로직도 가시화할 수 있음.
4. **트레이스 필터링(Filtering Traces)**: 예를 들어 검색 점수가 0.6 미만이면 위험할 수 있음 — 팀이 그런 트레이스만 필터링해 문제가 되는 사례만 검사할 수 있음.
5. **대시보드·트렌드 분석을 위한 지표 내보내기**.
- 핵심 요점: Phoenix는 단순한 디버깅 도구가 아니라 시간에 따른 품질, 지연시간, 실패 패턴을 이해하기 위한 **관측 가능성 도구**.

### 가시성 제로에서 완전한 추적성으로
- 트레이싱 전에는 팀이 틀린 답을 보고도 왜 그런지 전혀 알 수 없음 — 몇 줄의 설정을 추가한 후, Phoenix는 자동으로 실행 세부사항을 포착하기 시작함.
- 팀은 프로덕션과 유사한 질의를 실행하고 UI에서 검사 가능 — 워터폴 뷰가 검색 스팬, 생성 스팬, 그리고 문제가 시작되는 지점을 보여줌.
- 좋은 학습 전략: 좋은 관측 가능성이 항상 거대한 엔지니어링 노력을 요구하는 것은 아님 — 때로는 작은 설정이 디버깅에 큰 개선을 만들어낼 수 있음.
- 유용한 예시: 낮은 점수의 검색 스팬 다음에 환각을 일으키는 생성 스팬 — 이는 실패 경로를 미스터리가 아니라 가시적으로 만듦.

### 핵심 원칙 4가지
1. **설정이 작음(Setup is Small)**: 팀이 프로덕션에서 트레이싱을 건너뛸 변명의 여지가 거의 없음.
2. **워터폴(Waterfall)**: 검색, 컨텍스트, 생성을 타이밍과 출력과 함께 보여주는 강력한 뷰.
3. **커스텀 스팬(Custom Spans)**: 표준 LLM 호출뿐 아니라 비즈니스 로직도 관찰 가능하게 만듦.
4. **필터링과 내보내기**: 팀이 단일 사례 디버깅에서 더 폭넓은 트렌드 분석으로 이동하는 데 도움.
- 핵심 요점: 트레이싱은 팀이 추측에서 **증거 기반 디버깅**으로 이동하는 데 도움 — "모델이 이상해 보인다"고 말하는 대신, 정확히 어떤 스팬이 실패했고 왜인지 말할 수 있게 됨.

### 계측 예시
- 하나의 스팬이 검색 단계를 감싸고 문서 개수(document count)를 기록.
- 다른 스팬이 생성 단계를 감싸고 사용량(usage)을 기록.
- 이것이 강력한 이유: 최종 답변만 확인하는 대신, 시스템이 무엇을 하고 있는지에 대한 구조화된 가시성을 팀에게 제공함.
- 핵심 메시지: 메시지 내부의 작은 로그, 올바른 스팬이 시스템 행동의 많은 부분을 설명할 수 있음.

### 실전 교훈
- 검색(retrieval), 재순위(re-ranking), 생성(generation)을 별개의 세그먼트로 취급할 수 있음.
- 문서 개수, 토큰 사용량, 도구 지연시간 같은 값을 로깅하면 품질이나 속도가 어디서 떨어졌는지 이해하기 쉬워짐.
- 결과: 디버깅이 추측이 아니라 **트레이스 검토(trace review)**가 됨.
- 핵심 요점: 계측(instrumentation)은 모든 스팬이 결정을 설명하기에 충분한 맥락을 담고 있을 때 가장 강력함.

## 예시
```python
# Phoenix 계측 패턴 (개념 구조)
import phoenix as px
from openinference.instrumentation.openai import OpenAIInstrumentor

px.launch_app()
OpenAIInstrumentor().instrument()

@custom_span("retrieval")
def retrieve(query):
    docs = vector_store.search(query)
    log_span_attribute("doc_count", len(docs))
    return docs

@custom_span("generation")
def generate(query, docs):
    response = llm.generate(query, docs)
    log_span_attribute("token_usage", response.usage.total_tokens)
    return response
```

```text
[Phoenix 워터폴 뷰 예시]
Span: retrieval    — 검색 점수 0.43(낮음), 문서 3건
        │
        ▼
Span: generation   — 관련 없는 컨텍스트로 환각 발생

→ 필터링: retrieval_score < 0.6 인 트레이스만 검사
```

## 요약
- Arize Phoenix는 몇 줄의 경량 설정으로 AI 파이프라인의 검색·생성 등 모든 단계를 워터폴 뷰로 가시화하고, 커스텀 스팬으로 비즈니스 로직까지 관찰 가능하게 만들며, 검색 점수 같은 조건으로 트레이스를 필터링하고 대시보드용 지표를 내보낼 수 있게 해, 팀이 "모델이 이상해 보인다"는 추측에서 "정확히 어떤 스팬이 실패했는가"라는 증거 기반 디버깅으로 전환하도록 돕는 관측 가능성 도구다.
