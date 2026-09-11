# Day 5 - Run the Sidekick: An Autonomous AI Agent on Real-World Tasks

## 개요
- Sidekick으로 웹 기사와 항공편 후보를 조사하고 승인·파일·평가 결과를 확인한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821439#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 간단한 검증
Hacker News의 현재 첫 기사 제목을 요청하고 성공 기준을 명시한다. 브라우저에서 읽은 결과와 평가자 판정을 확인한다. 그래프 시각화의 이름 처리 버그는 실행 로직과 별도의 문제로 다룬다.

### 복합 과제
뉴욕–런던 왕복 항공편을 가격 우선, 다음으로 이동 시간, 과도한 환승 제외 조건으로 조사한다. 세 후보를 Markdown에 쓰고 최선 후보를 알림으로 보내도록 요청한다. 실제 예매를 하는 과제는 아니다.

### 완료 검증
알림 직전 승인을 요청하는지, 할 일 상태가 갱신되는지, sandbox에 flights.md가 생겼는지 확인한다. 평가자의 성공 판정 뒤에도 파일을 직접 열어 세 후보가 있는지 대조한다.

## 예시
```text
조건 입력 → 브라우저 조사 → 세 후보 문서화
→ 알림 승인 대기 → 승인 후 발송
→ evaluator 판정 + 실제 Markdown 확인
```

## 요약
- 과제의 성공 기준을 검증 가능한 산출물로 적는다.
- 최종 답변만 보지 않고 승인 상태와 파일을 확인한다.
