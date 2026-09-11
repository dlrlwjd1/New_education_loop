# Popular Community Workflow Examples

## 개요

- 일반 개발 작업을 자동화하는 커뮤니티 workflow를 살펴본다.
- commit, code review, tests, security, README, project setup 예제가 있다.

## 내용

Git Commit workflow는 staged changes를 분석해 Conventional Commit type과 메시지를 만든다. Code Quality workflow는 기능, 명확성, 구조, 중복, 성능, 접근성, test coverage, 유지보수성을 평가한다.

다른 예제는 unit tests, security review, README 생성, Next.js 초기화 등을 절차화한다. 실제 저장소의 명령과 정책에 맞춰 수정해야 한다.

## 예시

```text
staged diff → type(scope): message
source code → scored quality review → top fixes
```

## 요약

- 자주 수행하는 품질·Git 작업이 좋은 workflow 후보다.
- 외부 예제를 실행하기 전에 명령과 변경 범위를 검토한다.
