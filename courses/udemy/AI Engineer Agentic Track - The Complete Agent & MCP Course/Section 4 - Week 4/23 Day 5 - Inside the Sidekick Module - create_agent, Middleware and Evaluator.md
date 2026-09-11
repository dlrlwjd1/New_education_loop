# Day 5 - Inside the Sidekick Module: create_agent, Middleware and Evaluator

## 개요
- Sidekick 클래스로 작업자 설정·오류 처리·평가와 재시도를 모듈화한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821435#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 작업자 설정
setup에서 worker와 evaluator를 만든다. worker에는 현재 날짜를 포함한 지침과 도구, 할 일·개인정보·호출 제한·사용자 승인 middleware를 붙인다. 날짜처럼 변하는 정보는 고정 지침 뒤에 두는 구성을 설명한다.

### 오류와 사용자 도움
도구 호출 래퍼는 실행을 시도하고 실패하면 다른 접근을 요청하는 도구 결과를 반환한다. 알림 발송과 사용자 도움 요청 도구에서 중단하도록 설정한다.

### 평가 결과
별도 모델에 과제·성공 기준·실제 출력을 주고 피드백, 충족 여부, 추가 사용자 입력 필요 여부를 구조화해 받는다. run_turn과 advance는 승인 상태와 재시도를 조율한다. 평가자 응답도 실제 산출물과 대조해야 한다.

## 예시
```text
run_turn(과제, 성공 기준)
→ worker → 승인 필요 여부 처리
→ evaluator → 완료 또는 피드백 재시도
```

## 요약
- 모듈은 실행 상태와 도구 수명을 함께 관리한다.
- 평가에는 요청과 실제 결과를 모두 전달한다.
