# Feature Workflow and Current Feature

## 개요
- 강사가 이 코스에서 **가장 기억하길 원하는 핵심 워크플로**를 설명하는 강의.
- 처음에는 수동 프롬프트와 문서 전달로 진행하지만, 이후에는 `/feature` 커맨드와 여러 argument로 자동화한다.
- 기능 개발은 "바로 만들기"가 아니라 **문서화 → 브랜치 → 구현 → 테스트 → 반복 → 빌드 → 커밋/머지 → 기록**의 흐름으로 진행한다.

## 내용

### 코스 전체에서 사용할 기능 개발 흐름
이 워크플로는 코스 처음부터 끝까지 사용된다.
초기에는 수동으로 진행하고, 나중에는 `/feature` 커맨드를 만들어 각 단계에 맞게 실행한다.

기본 흐름:
1. 기능 문서화
2. feature/fix branch 생성
3. 기능 구현
4. 테스트
5. 실패하면 반복 수정
6. 성공하면 build 확인
7. commit
8. merge
9. main branch push
10. feature branch 삭제
11. current feature 정리 및 history 업데이트
12. production 테스트와 주기적 code review

### 1. 기능 문서화
모든 작업은 기능을 문서화하는 것에서 시작한다.

이때 사용하는 파일이:

```text
context/current-feature.md
```

여기에 현재 기능의 목표, 요구사항, 메모를 기록한다.

기능 정보는 두 가지 방식으로 들어올 수 있다.
- 직접 prompt로 입력
- 별도 spec file로 작성해 AI에 전달

강사는 대부분의 기능에 대해 spec file을 사용할 예정이라고 설명한다.
정확한 방식으로 구현되길 원하는 기능일수록 문서에 자세히 적어두는 편이 좋다.

### 2. feature/fix branch 생성
기능을 문서화한 뒤에는 새 Git branch를 만든다.

- feature branch: 새 기능을 추가할 때
- fix branch: 버그나 문제를 고칠 때

이렇게 하면 main branch를 보호하면서 기능 단위로 작업할 수 있다.

### 3. 구현
브랜치를 만든 뒤 AI에게 해당 기능을 구현하게 한다.

이 단계에서도 AI가 마음대로 작업하지 않도록:
- `current-feature.md`
- project overview
- coding standards
- AI interaction rules

같은 컨텍스트 문서를 기준으로 작업하게 한다.

### 4. 테스트
구현 후에는 테스트를 진행한다.

초기에는 주로 수동 테스트를 한다.
나중에는 Vitest를 도입해 unit test도 작성한다.

테스트 방식:
- manual testing
- test-driven workflow
- unit testing

### 5. 반복 수정
테스트가 실패하면 바로 커밋하지 않는다.

반복 과정:
- 에러 메시지 확인
- AI에게 에러와 상황 전달
- 다른 접근 시도
- 수정 후 다시 테스트

작동할 때까지 prompt를 이어가며 문제를 해결한다.

### 6. build 통과 후 commit
기능이 작동하면 build를 실행한다.

Next.js에서는 다음 명령으로 TypeScript 오류 등을 확인할 수 있다.

```bash
npm run build
```

중요한 규칙:
- build가 통과해야 commit한다.
- 사용자 허락 없이 commit하지 않는다.

### 7. merge, push, branch 삭제
commit 후 feature branch를 main branch에 merge한다.

혼자 작업할 때의 흐름:
- feature branch commit
- main으로 merge
- main branch를 GitHub repo에 push
- 작업 완료된 feature branch 삭제

팀으로 작업한다면 보통 pull request를 만든다.

### 8. 다시 문서화
merge와 branch 삭제가 끝나면 다시 문서화한다.

해야 할 일:
- `current-feature.md`에서 현재 기능 내용 비우기
- 완료된 기능을 history에 추가
- history는 earliest to latest 순서로 유지

이렇게 하면 AI가 지금 무엇을 하는 중인지, 과거에 무엇을 끝냈는지 계속 알 수 있다.

### 이후 확장될 workflow
나중에는 `/feature` 커맨드에 여러 argument를 붙여 workflow를 자동화한다.

예상되는 기능:
- feature 문서 load
- feature start
- feature test
- feature review
- feature close

특히 `review` argument는 문서와 실제 코드를 비교해, 요구사항이 제대로 구현되었는지 확인하는 역할을 하게 된다.

### current-feature.md 생성
이번 강의에서는 실제 기능을 넣지는 않고, 빈 템플릿 파일만 만든다.

파일 위치:

```text
context/current-feature.md
```

파일에 들어갈 섹션:
- Current Feature
- Status
- Goals
- Notes
- History

Status 값은 다음 중 하나로 제한한다.
- not started
- in progress
- completed

History는 이전에 추가한 기능 목록이며, 오래된 것부터 최신 순서로 유지한다.

## 예시

`current-feature.md` 템플릿:

```md
# Current Feature

<!-- Feature name and short description -->

## Status

<!-- not started | in progress | completed -->

## Goals

<!-- Goals and requirements -->

## Notes

<!-- Any extra notes -->

## History

<!-- Keep this updated, earliest to latest -->
```

기능 작업 흐름을 간단히 표현하면:

```text
Document feature
  -> Create branch
  -> Implement
  -> Test
  -> Iterate if needed
  -> Build
  -> Commit
  -> Merge
  -> Delete branch
  -> Update current-feature.md history
```

## 요약
- 코스 전체에서 사용할 핵심 워크플로는 **문서화 → 브랜치 → 구현 → 테스트 → 반복 → 빌드 → 커밋/머지 → 기록**이다.
- `current-feature.md`는 지금 작업 중인 기능을 AI가 계속 알 수 있게 해주는 핵심 파일이다.
- 처음에는 수동으로 관리하지만, 나중에는 `/feature` 커맨드로 workflow를 자동화한다.
- build 통과 전에는 commit하지 않고, 사용자 허락 없이 commit하지 않는다.
- 기능이 끝나면 current feature를 비우고 history를 업데이트해 프로젝트의 진행 맥락을 남긴다.
