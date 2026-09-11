# Testing the Feature Skill

## 개요
- 구현한 `/feature` skill을 작은 실제 feature로 테스트하는 강의.
- Sidebar의 `files`와 `images` item type에 `PRO` badge를 추가한다.
- `/feature load`, `start`, `explain`, `review`, `complete` 전체 흐름을 사용해 기존 수동 workflow를 command 기반으로 실행한다.

## 내용

### 테스트 feature: PRO badge
테스트할 작은 feature:

```text
Add a PRO badge to files and images in the sidebar.
```

Files와 images는 나중에 Pro user만 생성할 수 있는 type이므로 sidebar에 `PRO` badge를 표시한다.

간단한 feature이기 때문에 inline prompt로도 가능하다.
하지만 이번에는 spec file workflow를 보여주기 위해 file을 만든다.

### spec file 생성
`context/features`에 새 spec file을 만든다.

```text
context/features/add-pro-badge-sidebar.md
```

내용 구조:

```md
# Add Pro Badge to Sidebar

## Overview

Add a pro badge to the files and the images type in the sidebar.

## Requirements

- Use ShadCN UI badge component.
- Make badge clean and subtle.
- Make PRO all uppercase.
```

### /feature load
Spec file을 current feature에 로드한다.

```text
/feature load add-pro-badge-sidebar.md
```

File path를 전부 쓰지 않아도 된다.
Feature skill이 `context/features/` 안에서 spec file을 찾도록 만들었기 때문이다.

Load action 결과:
- current feature H1 업데이트
- description 추가
- status: `not started`
- goals 추가
- notes 추가
- ready to start 안내

중요:
- `load`는 구현하지 않는다.
- current feature file만 업데이트한다.

### /feature start
이제 구현을 시작한다.

```text
/feature start
```

Start action이 하는 일:
- status를 `in progress`로 변경
- feature branch 생성
- goals 출력
- todo list 작성
- desktop sidebar 수정
- mobile sidebar 수정
- build 실행

구현 내용:
- ShadCN `Badge` component import
- `files`, `images` type인지 확인
- 해당 type 옆에 `PRO` badge 표시
- desktop sidebar와 mobile sidebar 모두 처리

### Build와 manual test
Feature skill이 build를 실행한다.

```bash
npm run build
```

브라우저 확인:
- sidebar `files` 옆에 `PRO` badge 표시
- sidebar `images` 옆에 `PRO` badge 표시
- badge는 subtle하고 clean한 스타일
- mobile sidebar에서도 동일하게 표시

필요하면 색상이나 style을 iterate할 수 있지만, 강사는 기본 결과를 그대로 유지한다.

### /feature explain
선택적으로 변경 내용을 설명하게 한다.

```text
/feature explain
```

Explain action은 `git diff main` 기반으로 변경 파일을 확인한다.

변경 파일 예:
- `context/current-feature.md`
- desktop sidebar component
- mobile sidebar component

설명 내용:
- 어떤 파일이 바뀌었는지
- Badge import가 어디에 추가되었는지
- `files/images` type check가 어떻게 동작하는지
- sidebar와 mobile sidebar가 어떻게 연결되는지

이 단계는 Next.js나 React에 익숙하지 않은 학습자에게 특히 도움이 된다.

### /feature review
구현이 요구사항을 만족하는지 검토한다.

```text
/feature review
```

Review action은:
- current feature goals 확인
- changed files 확인
- requirements met 여부 체크
- scope creep 여부 확인
- complete 가능한지 판단

이번 feature에서는:
- ShadCN Badge 사용됨
- files/images에만 badge 표시
- PRO uppercase
- style subtle
- scope creep 없음

Verdict:

```text
Ready to complete
```

### /feature complete
마지막으로 feature를 완료한다.

```text
/feature complete
```

Complete action이 하는 일:
- final review
- changes stage
- commit
- main에 merge
- main push
- feature branch 삭제
- current feature reset
- history 맨 아래에 feature 추가

이전까지 직접 prompt로 입력하던 작업을 command 하나로 처리한다.

### Vercel continuous deployment 확인
`/feature complete`가 main에 push하면 Vercel CI/CD가 자동으로 build/deploy를 시작한다.

Vercel dashboard에서:
- build running 확인
- ready 상태 확인

Production URL에서:

```text
/dashboard
```

확인:
- files/images 옆에 `PRO` badge 표시
- production에도 feature 반영됨

### Workflow의 의미
이번 feature는 작지만 전체 workflow를 잘 보여준다.

흐름:

```text
/feature load
  -> /feature start
  -> manual test
  -> /feature explain
  -> /feature review
  -> /feature complete
  -> Vercel deploy
```

강사는 이 방식이 AI coding에서 fundamental strategy가 될 수 있다고 설명한다.
정답은 하나가 아니지만, 명확한 workflow를 갖는 것이 중요하다.

## 예시

Spec file:

```text
context/features/add-pro-badge-sidebar.md
```

Commands:

```text
/feature load add-pro-badge-sidebar.md
/feature start
/feature explain
/feature review
/feature complete
```

## 요약
- `/feature` skill을 실제 작은 feature로 테스트한다.
- `load`는 current feature에 spec을 로드하고, `start`가 구현을 시작한다.
- `explain`은 변경사항을 학습용으로 설명하고, `review`는 요구사항 충족 여부를 확인한다.
- `complete`는 commit/merge/push/branch 삭제/current feature reset까지 처리한다.
- main push 후 Vercel CI/CD로 production에도 자동 반영된다.
