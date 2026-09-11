# Day 1 - Build Your First Agent with OpenAI Agents SDK: Runner and Tracing

## 개요
- 첫 SDK 에이전트를 실행하고 결과 객체·추적·스트리밍을 확인한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49820381#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 패키지명과 import명
설치 배포명은 `openai-agents`, 코드에서 가져오는 모듈명은 `agents`다. 강사는 이름만 보고 다른 패키지인 `agents`를 설치하면 충돌할 수 있다고 지적한다. 수업 환경에는 필요한 의존성이 준비되어 있다.

### Jokester 실행
이름, 농담을 만드는 지시, 모델을 지정해 Agent를 만든다. `Runner.run`만 호출하면 코루틴 객체가 나오므로 `await`를 붙인다. 실행 후 `result.final_output`에서 최종 답을, `result.to_input_list()`에서 후속 입력에 사용할 메시지 목록을 확인한다.

### 추적의 실제 내용
`with trace`로 실행에 이름을 붙인 뒤 추적 화면에서 지시, 사용자 입력, 모델 응답, 소요 시간을 본다. 추적은 모델 자체가 아니라 SDK에서 처리하므로 다른 제공자의 모델을 사용해도 구성할 수 있다. 강의는 추적 비활성화와 다른 관측 플랫폼 연결도 안내한다.

### 스트리밍
`Runner.run_streamed`를 호출하고 `result.stream_events()`를 `async for`로 순회한다. 여러 이벤트 중 텍스트 변화에 해당하는 이벤트를 골라 출력하면 완성된 답을 기다리지 않고 생성 중인 내용을 볼 수 있다. 시연에서는 에이전트 관련 농담 다섯 개를 요청한다.

## 예시
```text
에이전트 생성 → await Runner.run → result.final_output
                       └─ result.to_input_list(): 다음 호출의 이력에 활용

스트리밍 실행 → 이벤트 순회 → 텍스트 이벤트만 표시
```

추적 화면에서는 한 번의 요청 안에 어떤 호출이 있었는지 확인한다.

## 요약
- 설치 이름 `openai-agents`와 import 이름 `agents`를 구분한다.
- 실행 결과의 최종 출력과 메시지 목록은 용도가 다르다.
- 추적과 스트리밍은 실행 관찰과 사용자 피드백을 돕는다.
