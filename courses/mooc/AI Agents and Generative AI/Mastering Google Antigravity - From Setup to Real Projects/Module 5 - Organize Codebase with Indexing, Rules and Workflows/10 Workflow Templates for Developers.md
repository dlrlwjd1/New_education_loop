# Workflow Templates for Developers

## 개요

- 개발 workflow의 실제 template과 설명을 제공한다.
- 코드 품질, Git commit, unit tests 등을 바로 참고할 수 있다.

## 내용

Evaluate Code Quality는 기능, 명확성, 구조, 중복, 성능, 접근성, test coverage, 유지보수성을 점수화하고 우선 수정사항을 제시한다.

Git Commit은 staged changes에서 Conventional Commit 메시지를 생성한다. Unit Tests workflow는 테스트 대상 조사, 케이스 작성, 실행과 실패 수정 절차를 제공한다. 원본은 [예제 저장소](https://github.com/dvasyliev/ai-dev-tools-getting-started/tree/main/antigravity/workflows)에서 확인한다.

## 예시

```text
Evaluate Code Quality → 점수 + 우선 개선사항
Git Commit → Conventional Commit
Unit Tests → 계획 + 생성 + 실행 + 수정
```

## 요약

- 검증된 template을 프로젝트 명령에 맞게 조정한다.
- workflow에는 성공 조건과 실패 처리도 포함한다.
