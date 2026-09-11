# Day 5 - Sidekick Setup: Tools, Middleware and Evaluator with create_agent

## 개요
- Sidekick의 도구 모음과 middleware, 작업자·평가자 루프를 구성한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821423#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 기능 구성
검색·Wikipedia·알림·브라우저·파일 도구를 별도 모듈에 모은다. 브라우저 연결은 세션을 유지해 호출마다 창이 재생성되지 않도록 관리한다.

### 실행 제어
할 일 목록, 이메일 가림, 30회 모델 호출 제한, 사용자 승인 middleware를 붙인다. 사용자 정의 도구 오류 래퍼는 실패를 예외 종료 대신 모델이 이해할 결과로 돌려준다.

### 외부 평가 루프
worker 결과를 구조화 출력 평가자가 검사한다. 성공 기준이 충족되면 종료하고 아니면 피드백을 반영해 다시 시도한다. 호출 수 제한은 지출액 자체의 정확한 상한과는 다르다.

## 예시
```text
worker 실행 → evaluator 판정
  충족 → 결과 전달
  미충족 → 피드백과 재시도
도구 실패 → 오류 메시지 반환 → 다른 접근 시도
```

## 요약
- 실행 제어를 middleware로 조합한다.
- 에이전트 루프 바깥에 별도 평가 흐름을 둔다.
