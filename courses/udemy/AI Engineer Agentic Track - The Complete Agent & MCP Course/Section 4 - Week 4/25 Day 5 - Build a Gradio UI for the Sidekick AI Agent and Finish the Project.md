# Day 5 - Build a Gradio UI for the Sidekick AI Agent and Finish the Project

## 개요
- Sidekick에 과제·성공 기준·할 일·승인 상태를 표시하는 Gradio 화면을 붙인다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821451#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 화면 구성
기본 UI와 styles.py를 분리한다. 채팅, 요청, 성공 기준, 실행 버튼, 계획 목록을 표시한다. 작업 중 할 일의 진행·완료 상태가 화면에 반영된다.

### 승인과 완료
항공편 조사 예제를 실행하면 문서 작성 뒤 알림 승인을 기다린다. 승인 후 계속하기를 누르면 발송과 평가가 끝난다. sandbox의 flights.md와 LangSmith trace를 확인한다. 초기 실행·승인 재개·평가가 별도 trace로 보일 수 있다.

### 개인 업무에 적용
업무 지식과 필요한 도구, 성공 기준을 프롬프트에 반영해 자신의 Sidekick으로 바꾸는 것이 과제다. 화면만 꾸미는 데서 끝내지 않고 실제 일의 완료 기준에 맞춘다.

## 예시
```text
요청·성공 기준 입력 → 실행 → 진행 목록 갱신
→ 승인 대기 → 승인 후 계속 → 평가 완료
→ 생성 파일과 trace 대조
```

## 요약
- UI는 실제 실행 상태를 보여줘야 한다.
- 업무 지식·도구·성공 기준을 함께 맞춘다.
