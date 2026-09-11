# Understand Workflows for Repeated Tasks

## 개요

- Workflow는 반복되는 다단계 작업을 Markdown 절차로 저장한다.
- slash command로 동일한 프로세스를 다시 실행한다.

## 내용

배포, pull request 대응, 코드 리뷰처럼 여러 단계가 연결된 작업을 매번 새로 설명하지 않고 workflow로 만든다. 파일은 저장소에 공유하거나 개인 global 위치에 둘 수 있다.

성공적으로 끝낸 대화의 단계를 Agent에게 workflow로 변환하도록 요청할 수도 있다. 실행 전에 입력과 위험한 단계, 성공 조건을 명확히 한다.

## 예시

```text
/deploy-service
1. tests
2. build
3. deployment checks
4. deploy
```

## 요약

- Rules는 지속 제약, Workflows는 실행 절차다.
- 검증된 반복 작업을 workflow로 전환한다.
