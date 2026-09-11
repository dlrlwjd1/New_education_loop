# Dashboard UI Phase 1 — Shell and Top Bar

## 개요
- Dashboard UI를 한 번에 만들지 않고 **3개의 sub-feature**로 나누어 구현하는 첫 번째 강의.
- Phase 1에서는 dashboard route, ShadCN UI 초기화, dark mode, top bar, sidebar/main placeholder까지 만든다.
- 본격 구현 전에 `current-feature.md`를 spec file 기반으로 업데이트하고, feature branch에서 작업하는 workflow를 실제로 적용한다.

## 내용

### Dashboard UI를 phase로 나누기
Dashboard UI는 생성되는 파일과 컴포넌트가 많기 때문에 한 번에 만들지 않는다.

3단계 구성:
1. Phase 1: dashboard shell, route, top bar, placeholder
2. Phase 2: sidebar
3. Phase 3: main dashboard content

강사는 모든 기능에 같은 workflow를 적용한다.

1. feature 문서화
2. feature branch 생성
3. 구현
4. 수동 테스트
5. 필요하면 반복 수정
6. `npm run build`
7. commit
8. main에 merge
9. branch 삭제
10. `current-feature.md` 완료 처리와 history 업데이트

### spec file을 사용하는 이유
직접 `current-feature.md`를 수정할 수도 있지만, 강사는 feature별 spec file을 먼저 만든다.

위치:

```text
context/features/
```

spec file은 구조화된 긴 prompt 역할을 한다.

장점:
- 요구사항을 더 자세히 전달할 수 있음
- AI가 구현해야 할 범위를 명확히 알 수 있음
- 나중에 어떤 prompt/spec으로 기능을 만들었는지 기록이 남음

### Phase 1 spec 요구사항
`dashboard phase 1 spec`에는 다음 내용이 들어간다.

- phase 1 of 3임을 명시
- dashboard screenshot reference 사용
- ShadCN UI 초기화
- 필요한 ShadCN components 설치
- `/dashboard` route 생성
- dashboard layout 생성
- global styles 조정
- dark mode by default
- top bar 생성
- search input과 new item button 추가
- sidebar와 main area는 placeholder로만 둠

Phase 2에서 sidebar를 만들고, Phase 3에서 main area를 채운다.

### current-feature.md 업데이트
구현 전 먼저 `current-feature.md`를 업데이트한다.

요청 예:

```text
Update @context/current-feature.md to add the feature from
@context/features/dashboard-phase-1-spec.md.
Set the status to in progress.
```

AI는 spec file을 읽고 다음을 채운다.
- feature name/description
- status: `in progress`
- goals
- notes
- history는 유지

### feature branch 생성과 구현 요청
이후 구현을 요청한다.

```text
Open a new branch and implement the feature from @context/current-feature.md.
```

AI가 하는 작업:
- feature branch 생성 및 checkout
- todo list 작성
- ShadCN UI 초기화
- 필요한 components 설치
- dashboard route 생성
- top bar component 생성
- layout metadata 수정
- dark mode 설정
- build 실행

### ShadCN UI 초기화
ShadCN은 일반 component library처럼 package에서 import만 하는 방식이 아니다.
필요한 component 코드를 프로젝트의 `components/ui` 폴더에 직접 추가한다.

Phase 1에서 설치한 예:

```bash
npx shadcn@latest add button input
```

생성되는 구조 예:

```text
src/
  components/
    ui/
      button.tsx
      input.tsx
```

이 파일들은 AI가 직접 만든 코드가 아니라 ShadCN의 기본 component 코드다.

### dashboard route와 top bar
Phase 1에서 생성된 route:

```text
src/app/dashboard/page.tsx
```

Top bar는 별도 component로 만든다.

예상 위치:

```text
src/components/layout/top-bar.tsx
```

Top bar에는 다음이 들어간다.
- search input
- new item button
- icon
- ShadCN `Input`, `Button`

동적 요소가 있으면 `"use client"`가 붙을 수 있다.

### build와 manual test
구현 후 AI가 build를 실행한다.

```bash
npm run build
```

build가 통과하면 브라우저에서 확인한다.

확인 route:

```text
/dashboard
```

Home route는 아직 `dev stash`만 보여주는 상태이고, 실제 작업 대상은 `/dashboard`다.

### dark mode 문제 수정
처음 결과에서 dashboard가 white theme으로 보였다.
강사는 dark mode by default를 원했기 때문에 다시 요청한다.

```text
The layout theme is white, not dark.
```

AI는 Tailwind v4의 dark mode/custom variant 설정을 확인하고 global CSS를 수정한다.

강사는 AI가 Tailwind 3 방식으로 `tailwind.config`를 만들려는 실수를 자주 한다고 언급한다.
이번에는 Tailwind v4에 맞는 방식으로 잘 수정되었다.

### Phase 1 완료 처리
구현과 테스트가 끝나면 `current-feature.md`를 완료 처리한다.

처음에는 AI가 status만 `completed`로 바꾸고 history에 옮기지 않았다.
그래서 추가로 지시한다.

```text
Also clear the info and add the feature to the history section.
```

결과:
- 현재 feature description 제거
- status placeholder 복원
- goals/notes 제거
- history에 `Dashboard UI Phase 1` 추가

### commit, merge, delete branch, push
마지막으로 feature branch 작업을 main에 반영한다.

요청 예:

```text
Commit and merge to main, then delete the feature branch.
```

그 다음 remote에 push한다.

```text
Go ahead and push.
```

주의점:
- AI가 commit message에 `Co-authored-by Claude`를 넣으려 했다.
- context에 금지 규칙이 있어도 AI가 무시할 때가 있다.
- 승인 전에 거절하고 다시 지시해야 한다.

```text
Do not add the Claude co-author to the message.
```

## 예시

Phase 1 workflow:

```text
Create/bring spec file
  -> Update current-feature.md
  -> Create feature branch
  -> Initialize ShadCN
  -> Add button/input
  -> Create /dashboard route
  -> Create top bar
  -> Fix dark mode
  -> npm run build
  -> Manual browser test
  -> Move feature to history
  -> Commit, merge, delete branch, push
```

## 요약
- Dashboard UI는 큰 작업이므로 3개 phase로 나누어 진행한다.
- Phase 1은 shell, `/dashboard` route, ShadCN setup, dark mode, top bar, placeholder를 만든다.
- 구현 전 spec file을 읽어 `current-feature.md`를 `in progress`로 업데이트한다.
- build와 manual test 후 feature를 history로 옮긴다.
- commit/merge/push 전 AI가 만든 commit message를 반드시 확인한다.
