# Dashboard UI Phase 3 — Main Content

## 개요
- Dashboard UI의 세 번째 phase로 오른쪽 main content area를 구현하는 강의.
- Stat cards, recent collections, pinned items, recent items를 mock data 기반으로 표시한다.
- 구현 중 `page.tsx`가 client component가 된 문제를 발견하고, Next.js 원칙에 맞게 page는 server component로 되돌린다.

## 내용

### Phase 3 범위
Phase 3는 dashboard의 main area를 채운다.

요구사항:
- 오른쪽 main dashboard area 구현
- recent collections section
- pinned items section
- recent items 10개 표시
- 상단 stat cards 4개 표시

참조 파일:
- screenshot
- project overview
- mock data
- dashboard feature specs

### current-feature.md 업데이트
먼저 phase 3 spec을 current feature에 반영한다.

```text
Update @context/current-feature.md to include
@context/features/dashboard-phase-3-spec.md
and set the status to in progress.
```

AI가 goals와 notes를 채우고 status를 `in progress`로 설정한다.

### branch 생성과 구현
구현 요청:

```text
Open a new branch, implement the feature.
```

AI는 feature branch를 만들고 todo list를 생성한다.

주요 작업:
- ShadCN components 설치
- stat cards 생성
- collection card 생성
- collection section 생성
- item card 생성
- pinned items section 생성
- recent items section 생성
- mock data 보강
- dashboard page에 sections 연결

### ShadCN components 추가
Phase 3에서는 card UI와 badge가 필요하다.

예:

```bash
npx shadcn@latest add card badge
```

생성 위치:

```text
src/components/ui/
  card.tsx
  badge.tsx
```

### dashboard component 구조
Dashboard 관련 component는 별도 폴더에 쌓인다.

예상 구조:

```text
src/components/
  dashboard/
    stat-cards.tsx
    collection-card.tsx
    collection-section.tsx
    item-card.tsx
    pinned-items.tsx
    recent-items.tsx
  layout/
    top-bar.tsx
    sidebar.tsx
    mobile-sidebar.tsx
```

`layout`은 top bar/sidebar처럼 app shell에 가까운 요소,
`dashboard`는 dashboard content에 특화된 요소로 나뉜다.

### Stat Cards
Stat cards는 mock data를 사용해 dashboard 상단의 수치를 보여준다.

표시 예:
- total items
- collections
- pinned items
- item types 또는 다른 summary

component는 title, value, icon, color 같은 props를 받을 수 있다.
ShadCN `Card`, `CardContent` 등을 사용한다.

### Collection Cards와 Sections
Collection card는 recent collections를 표시한다.

특징:
- collection title
- item count
- item type icons 또는 color
- favorite 여부
- Tailwind layout

Collection section은 collection card들을 모아서 grid 형태로 렌더링한다.

### Item Cards
Item card는 pinned items와 recent items에 재사용된다.

표시할 수 있는 정보:
- title
- type
- tags
- collection
- updated/recent metadata
- type color
- favorite/pinned state

현재는 UI 표시가 목적이므로 복잡한 동작은 없다.

### Pinned Items
Pinned items section은 mock items에서 `pinned`가 true인 항목을 필터링한다.

동작:
- pinned item이 있으면 section 표시
- pinned item이 없으면 `null` 반환

실제 database를 붙이면 Prisma query로 대체될 예정이다.

### Recent Items
Recent items section은 최근 item 10개를 보여준다.

강사의 spec에 10개가 필요하다고 되어 있었기 때문에, AI가 mock data를 수정하거나 추가한다.

변경 예:
- 일부 item의 `pinned` 값 변경
- item 추가
- item type counts 업데이트

### Manual test
`npm run build`가 통과한 뒤 브라우저에서 확인한다.

확인 결과:
- 상단 stat cards 표시
- latest/recent collections 표시
- pinned items 표시
- recent items 표시
- 전체 dashboard layout이 screenshot에 가까워짐
- console error 없음

### page.tsx의 client component 문제
강사는 구현 결과를 보다가 중요한 문제를 발견한다.

문제:
- `src/app/dashboard/page.tsx`에 `"use client"`가 들어감
- context rule에서는 page는 SSR/server component가 기본이어야 함

원인:
- sidebar collapsed state 같은 client-side state가 page에 들어갔기 때문

강사는 이 부분을 hard rule로 보고 수정한다.

요청:

```text
You have used client on src/app/dashboard/page.tsx.
As I specified in the context, all pages should be SSR and then components.
```

### client logic을 layout component로 분리
AI는 page를 server component로 되돌리고, interactive state를 별도 client component로 옮긴다.

해결 방식:
- `page.tsx`에서 `"use client"` 제거
- sidebar collapsed/mobile drawer state를 dashboard layout component로 이동
- dashboard layout component에는 `"use client"` 유지
- page는 server component로 유지

이 구조는 Next.js에서 강사가 선호하는 방식이다.

핵심:
- page는 SSR/server component
- interaction이 필요한 child component만 client component

### build 재실행과 확인
수정 후 다시 build를 실행한다.

```bash
npm run build
```

build가 통과하고 브라우저에서도 dashboard가 정상 동작한다.

확인:
- `/dashboard` page는 server component
- layout과 interactive components는 client component
- console issue 없음

### commit, merge, push
Phase 3 완료 후 feature branch를 commit하고 main에 merge한다.

요청 예:

```text
Commit the feature branch, merge to main,
delete the feature branch, then push to remote.
```

이번에는 commit message에 Claude co-author가 들어가지 않았다.

그 다음 AI가 `current-feature.md`도 정리한다.

처리 내용:
- description 제거
- status 초기화
- goals 제거
- notes 제거
- history에 Phase 3 추가

### 다음 단계
이로써 dashboard core layout은 완료된다.

다음 강의부터는 database 설정을 시작한다.

## 예시

Phase 3 workflow:

```text
Update current-feature.md
  -> Create feature branch
  -> Add card/badge
  -> Create stat cards
  -> Create collection section
  -> Create item cards
  -> Create pinned/recent items
  -> Update mock data
  -> Run build
  -> Manual browser test
  -> Refactor page.tsx back to server component
  -> Run build again
  -> Commit, merge, delete branch, push
  -> Move feature to history
```

## 요약
- Phase 3는 dashboard main content area를 구현한다.
- Stat cards, recent collections, pinned items, recent items를 mock data로 표시한다.
- 작업이 커지므로 dashboard 전용 components 폴더가 만들어진다.
- AI가 `page.tsx`를 client component로 만들면, Next.js 규칙에 맞게 page는 server component로 되돌리고 client state는 child layout component로 분리한다.
- Dashboard core layout이 완료되었고, 다음 단계는 database 설정이다.
