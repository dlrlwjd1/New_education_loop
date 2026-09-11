# Replacing Dashboard Items with Database Data

## 개요
- Dashboard main area의 pinned items와 recent items를 mock data에서 database data로 교체하는 강의.
- Collections 전환과 같은 패턴으로, 이번에는 `src/lib/db/items.ts`를 만들어 item 관련 Prisma query를 분리한다.
- 아직 auth는 없으므로 demo user 기준으로 data를 가져오고, 나중에 logged-in user로 교체할 수 있게 구조를 잡는다.

## 내용

### 현재 상태
이전 강의에서 main dashboard의 collections는 database에서 가져오도록 바뀌었다.

아직 mock data를 쓰는 영역:
- pinned items
- recent items
- sidebar item types
- sidebar collections
- stats

이번 강의에서는 그중 pinned items와 recent items만 처리한다.

### dashboard items spec
Resource file에서 dashboard items spec을 project에 가져온다.

```text
context/features/dashboard-items-spec.md
```

Spec 내용:
- dashboard main area의 dummy item data 교체
- pinned items와 recent items 모두 포함
- Neon database에서 Prisma로 data fetch
- 기존 UI 모양 유지
- pinned item이 없으면 pinned section은 표시하지 않음
- item card icon/border는 item type에서 파생
- item tags 표시
- screenshot은 필요하면 참고

### lib/db/items.ts
Collections 전환 때 `src/lib/db/collections.ts`를 만들었듯이, item 관련 query는 별도 파일로 분리한다.

```text
src/lib/db/items.ts
```

역할:
- pinned items fetch
- recent items fetch
- item과 item type을 함께 가져오기
- user 기준 filter 적용

나중에 auth가 들어오면 demo user 대신 현재 로그인한 user id를 사용하게 된다.

### current-feature.md 업데이트
먼저 current feature를 업데이트한다.

```text
Update the current feature with the feature from
@context/features/dashboard-items-spec.md.
Set the status to in progress.
```

AI가 feature description, goals, notes를 채운다.

### branch 생성과 구현
구현 요청:

```text
Create a new branch and implement the new feature from @context/current-feature.md.
```

AI가 만든 todo list:
- feature branch 생성
- current pinned/recent items components 탐색
- `src/lib/db/items.ts` 생성
- pinned items component 업데이트
- recent items component 업데이트
- item card type 수정
- dashboard page 업데이트
- build 실행

### getPinnedItems
Pinned items를 가져오는 database function을 만든다.

예상 흐름:

```ts
getPinnedItems(userId)
```

Prisma query는 다음 조건을 사용한다.
- 해당 user의 item
- `pinned`가 true
- item type 포함
- tags/collection 등 UI에 필요한 data 포함

Pinned item이 없다면 component는 `null`을 반환해 section 자체를 숨긴다.

### getRecentItems
Recent items를 가져오는 database function도 만든다.

예상 흐름:

```ts
getRecentItems(userId)
```

정렬:
- newest first

표시:
- recent items 목록
- type icon
- type color border
- tags
- collection metadata

Seed data가 거의 동시에 만들어졌기 때문에 정확한 순서는 timestamp에 따라 비슷하게 보일 수 있다.

### Item card 업데이트
기존 item card는 mock data type에 의존했다.

수정 후:
- `mockItemTypes` import 제거
- `ItemWithType` 같은 database return type 사용
- type의 icon/color로 UI 표시
- tags 표시

이렇게 하면 item card가 실제 Prisma query 결과를 표시할 수 있다.

### PinnedItems component 업데이트
기존:
- mock data import
- local filter

수정 후:
- props로 pinned items를 받거나 server component에서 fetch된 data 사용
- database에서 이미 filtering된 data 표시
- 빈 배열이면 표시하지 않음

### RecentItems component 업데이트
기존:
- mock data import
- local slice/filter

수정 후:
- database에서 가져온 recent items 표시
- item card 재사용

### Dashboard page 업데이트
Dashboard page/server component에서 item data를 가져온다.

가져오는 function:
- `getPinnedItems`
- `getRecentItems`

그리고 해당 data를 dashboard sections에 전달한다.

### build와 manual test
구현 후 build를 실행한다.

```bash
npm run build
```

브라우저에서 `/dashboard`를 새로고침해 확인한다.

확인할 것:
- pinned items가 database에서 옴
- recent items가 database에서 옴
- item title이 Prisma Studio/DB data와 일치
- link/command/snippet icons가 표시됨
- newest first 정렬
- pinned items가 실제 `isPinned` true data와 일치

예:
- Lucide Icons
- Radix UI Primitives
- ShadCN Components
- Use Debounce Hook
- Git Undo Last Commit

### Prisma Studio로 비교
Prisma Studio의 items table에서 dashboard에 표시되는 title과 pinned 상태를 비교한다.

검증:
- dashboard recent items title과 DB title 일치
- pinned item은 DB에서 `pinned` true
- link items는 link icon/color 사용

### feature 완료 처리
문제 없이 동작하면 feature를 닫는다.

```text
Mark the feature as completed.
```

AI는 `current-feature.md`를 정리하고 history에 dashboard items feature를 추가한다.

### Git 정리
마지막으로 Git workflow를 실행한다.

```text
Commit to feature,
merge feature to main,
push main,
delete feature.
```

강사는 곧 이 반복 작업을 custom slash command로 자동화할 예정이라고 다시 언급한다.

### 다음 단계
남은 mock data 영역:
- stats
- sidebar item types
- sidebar collections

다음 강의에서 이 부분을 database data로 바꾼다.

## 예시

Items database 전환 흐름:

```text
Add dashboard-items-spec.md
  -> Update current-feature.md
  -> Create feature branch
  -> Create src/lib/db/items.ts
  -> Add getPinnedItems()
  -> Add getRecentItems()
  -> Update item card
  -> Update pinned/recent sections
  -> Update dashboard page
  -> npm run build
  -> Compare with Prisma Studio
  -> Complete feature
  -> Commit, merge, push, delete branch
```

## 요약
- Dashboard collections 다음으로 pinned items와 recent items를 database data로 교체한다.
- Item query logic은 `src/lib/db/items.ts`에 둔다.
- Item card는 mock type이 아니라 database item type의 icon/color/tag 정보를 사용한다.
- Pinned item이 없으면 section을 숨긴다.
- 다음 단계는 stats와 sidebar를 database data로 전환하는 것이다.
