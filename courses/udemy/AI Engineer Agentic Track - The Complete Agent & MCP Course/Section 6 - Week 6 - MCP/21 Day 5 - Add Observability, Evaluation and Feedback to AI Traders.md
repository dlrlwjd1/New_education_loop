# Day 5 - Add Observability, Evaluation and Feedback to AI Traders

## 개요
- SDK trace를 앱에 저장하고 성과를 전략 수정에 반영하는 피드백을 추가한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/50768373#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 사용자에게 보이는 관측
TracingProcessor를 상속한 LogTracer가 trace·span 시작과 종료 정보를 수집해 SQLite에 저장한다. add_trace_processor로 등록하면 SDK 실행 중 콜백이 호출된다. 저장한 정보를 사용자 화면이나 관리자 화면에 필요한 수준으로 보여준다.

### 전략 변경 도구
계좌 서버의 change_strategy는 새 전략을 계좌에 기록한다. 재조정 프롬프트는 보유 성과를 돌아보고 필요한 교훈을 전략에 반영하도록 지시한다.

### 개선의 의미
결과 측정·피드백·전략 수정의 연결을 만드는 실습이다. 전략 문구가 바뀌었다고 성능이 자동으로 개선되는 것은 아니므로 이후 결과를 다시 평가해야 한다. 평가 전용 단계를 더 강화하는 확장도 제시한다.

## 예시
```text
SDK trace 이벤트 → LogTracer → SQLite → 앱 표시
거래 성과 → 재조정 지침 → change_strategy
→ 다음 실행 성과 재측정
```

## 요약
- 관측 정보를 앱 안에서 활용할 수 있다.
- 전략 수정과 실제 성과 개선은 별도로 검증한다.
