# Create and Run Your Own Workflow

## 개요

- UI 또는 Markdown 파일로 global·workspace workflow를 만든다.
- 필요한 컨텍스트와 함께 사용자가 명시적으로 실행한다.

## 내용

디버깅, 코드 리뷰, 기능 계획, 문서 생성, starter project 생성처럼 반복되는 작업을 단계별로 정의한다. workspace workflow는 프로젝트와 공유하고 global workflow는 개인의 여러 프로젝트에서 사용한다.

Workflow는 자동으로 항상 실행되는 규칙이 아니다. slash command로 호출하고 현재 작업의 추가 조건을 함께 전달한다.

## 예시

```text
/evaluate-code-quality src/components/EventForm.tsx
```

## 요약

- scope에 따라 global과 workspace 위치를 선택한다.
- 실행 방법, 입력, 단계, 산출물을 명확히 작성한다.
