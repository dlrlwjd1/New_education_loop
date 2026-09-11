# Dashboard UI Phase 2 — Sidebar

## 개요
- Dashboard UI의 두 번째 phase로 **collapsible sidebar**를 구현하는 강의.
- sidebar는 mock data를 사용해 item types, counts, favorite collections, recent collections, user avatar area를 표시한다.
- mobile에서는 drawer 형태로 열리도록 ShadCN `Sheet` component를 사용한다.

## 내용

### context 정리 후 다음 feature 시작
Phase 1을 끝낸 뒤 강사는 context 사용량을 확인한다.

예시:
- 61,000 / 200,000 tokens 사용

다음 feature를 시작하기 전에 `/clear`로 context를 비운다.
필요한 정보는 `CLAUDE.md`와 context files에서 다시 로드된다.

### Phase 2 spec
`dashboard UI phase 2 spec`은 sidebar 구현을 위한 요구사항을 담고 있다.

참조 파일:
- screenshot reference
- project overview
- mock data
- phase 1/2/3 feature specs

mock data를 명시하는 이유:
- sidebar에 item types가 필요함
- type별 count가 필요함
- collections 목록이 필요함
- current user 표시가 필요함

### Phase 2 요구사항
핵심 요구사항:
- collapsible sidebar
- items/types navigation
- type link는 `/items/{type}` 형태
- favorite collections 표시
- recent collections 표시
- user avatar area를 bottom에 표시
- drawer icon으로 열고 닫기
- mobile view에서는 항상 drawer로 동작

예:

```text
/items/snippets
/items/prompts
```

아직 route가 실제로 동작하지 않아도, link path는 올바르게 만들어 둔다.

### current-feature.md 업데이트
먼저 현재 feature를 Phase 2로 갱신한다.

```text
Update current feature to @context/features/dashboard-phase-2-spec.md.
Make the status in progress.
```

AI가 status를 `not started`로 두려 할 수 있으므로, `in progress`를 명확히 지시한다.

### feature 구현 요청
current feature가 업데이트되면 다음처럼 요청한다.

```text
Create the feature.
```

AI는 `current-feature.md`와 reference files를 읽고 구현 계획을 만든다.

todo list 예:
- sidebar component 생성
- collapse functionality 추가
- item navigation with links/counts
- favorite/recent collections 표시
- avatar area 표시
- mobile drawer 구현
- responsive behavior 테스트

### ShadCN components 추가
Sidebar와 mobile drawer를 위해 필요한 ShadCN components를 추가한다.

예:
- `sheet`
- `avatar`
- `separator`

생성 위치:

```text
src/components/ui/
  sheet.tsx
  avatar.tsx
  separator.tsx
```

### Sidebar component
Sidebar는 interactive하므로 client component다.

특징:
- `"use client"`
- `useState` 사용
- Lucide icons 사용
- ShadCN components 사용
- `cn` utility 사용
- mock data import

mock data에서 가져오는 것:
- item types
- collections
- type counts
- mock user

props 예:
- `collapsed: boolean`
- `onToggle: () => void`

Collections section은 expand/collapse 상태를 가질 수 있다.

### Mobile Sidebar
Mobile view에서는 sidebar가 항상 drawer처럼 열린다.
AI는 별도 `MobileSidebar` component를 생성한다.

사용 component:
- ShadCN `Sheet`
- mobile menu button
- sidebar content 재사용

Top bar에도 mobile menu button을 열기 위한 prop이 추가된다.

예:
- `onMenuClick`

### Dashboard page 업데이트
`/dashboard` page는 다음 상태를 관리한다.

- sidebar collapsed state
- mobile sidebar open state

Phase 2에서는 이 상태들이 page 또는 layout에 들어갈 수 있다.
다만 이후 phase에서 Next.js page는 server component로 유지해야 한다는 점을 다시 점검하게 된다.

### manual test
브라우저에서 `/dashboard`를 확인한다.

확인할 것:
- snippets, prompts 등 item types 표시
- counts 표시
- collections section collapse 가능
- sidebar collapse 시 icon은 남음
- item type 클릭 시 `/items/{type}`으로 이동
- mobile menu button 표시
- mobile에서 drawer가 slide open

아직 target route가 구현되지 않았기 때문에 이동 후 페이지가 없어도 괜찮다.
중요한 것은 올바른 path로 이동하는 것이다.

### responsive 이슈
Mobile에서 sidebar drawer는 잘 작동하지만, 나머지 layout은 다소 crowded하게 보일 수 있다.
강사는 이 단계에서는 sidebar 기능 자체가 잘 동작하는지에 집중한다.

### Phase 2 완료 처리
테스트가 끝나면 `current-feature.md`를 완료 처리한다.

```text
Set the current feature to be completed,
remove the info, and add it to the history.
```

history에는 다음처럼 쌓인다.
- Initial setup
- Dashboard UI Phase 1
- Dashboard UI Phase 2

이 history는 프로젝트에서 어떤 feature를 끝냈는지 AI와 개발자 모두에게 알려준다.

### commit, merge, push
한 번에 요청할 수 있다.

```text
Commit to the feature branch and merge to main.
Delete the feature branch and push to remote.
```

이번에도 AI가 commit message에 `Co-authored-by Claude`를 넣으려 한다.
승인 전에 다시 지시한다.

```text
Do not add Claude to the message.
```

## 예시

Sidebar feature 흐름:

```text
/clear
  -> Update current-feature.md from phase 2 spec
  -> Set status in progress
  -> Implement sidebar
  -> Add Sheet/Avatar/Separator
  -> Add desktop collapsible sidebar
  -> Add mobile drawer sidebar
  -> Test /dashboard
  -> Move feature to history
  -> Commit, merge, delete branch, push
```

## 요약
- Phase 2는 dashboard sidebar 구현에 집중한다.
- Sidebar에는 item types/counts, favorite collections, recent collections, user avatar area가 들어간다.
- Desktop에서는 collapsible sidebar, mobile에서는 drawer로 동작한다.
- ShadCN `Sheet`, `Avatar`, `Separator`를 추가한다.
- 완료 후 `current-feature.md`를 history로 정리하고 feature branch를 main에 merge/push한다.
