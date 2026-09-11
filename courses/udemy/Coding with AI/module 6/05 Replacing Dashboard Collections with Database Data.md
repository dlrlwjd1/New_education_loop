# Replacing Dashboard Collections with Database Data

## 개요
- Dashboard main area의 collection cards를 mock data에서 Neon database data로 교체하는 강의.
- 한 번에 dashboard 전체를 바꾸지 않고, 먼저 **collections**만 database에서 가져오도록 feature를 작게 나눈다.
- Next.js server component에서 Prisma query를 사용하되, query logic은 `src/lib/db/collections.ts`에 분리한다.

## 내용

### Mock data를 database data로 교체하기
이전까지 dashboard collection cards는 `src/lib/mock-data.ts`에서 가져온 data를 표시했다.

이번 단계의 목표:
- main dashboard의 recent collections만 database data로 교체
- sidebar는 아직 mock data 유지
- pinned items/recent items도 아직 mock data 유지
- items는 다음 feature에서 처리

작업을 작게 나누면 AI가 한 번에 너무 많은 파일을 바꾸지 않고, 검증도 쉬워진다.

### dashboard collections spec
Resource file에서 collections 전환용 spec을 가져온다.

```text
context/features/dashboard-collections-spec.md
```

Spec 내용:
- dashboard main area의 dummy collection data 교체
- Neon database에서 Prisma로 data fetch
- 현재처럼 6개 recent collection card 표시
- items underneath는 아직 추가하지 않음
- 기존 디자인 유지

### Architect decision: 어디서 data를 fetch할 것인가
Next.js에서는 data fetching 위치를 여러 방식으로 선택할 수 있다.

가능한 선택지:
- server action
- API route
- server component 안에서 직접 fetch
- lib/db layer를 두고 server component에서 호출

강사는 다음 구조를 선택한다.

```text
src/lib/db/collections.ts
```

이 파일에는 collections 관련 fetch method를 둔다.
나중에 items는 다음 위치에 둘 수 있다.

```text
src/lib/db/items.ts
```

### 왜 lib/db 폴더를 쓰는가
장점:
- database query logic이 component에 흩어지지 않음
- collections/items별로 query를 분리 가능
- server component에서 필요한 data만 호출 가능
- 나중에 auth/user filter를 적용하기 쉬움

이번 단계에서는 auth가 아직 없으므로 demo user를 임시로 사용한다.

### current-feature.md 업데이트
먼저 current feature를 업데이트한다.

```text
Update @context/current-feature.md using
@context/features/dashboard-collections-spec.md.
Set the status to in progress.
```

Spec file에 요구사항이 들어 있으므로 이후 prompt는 짧게 유지할 수 있다.

### branch 생성과 구현
구현 요청:

```text
Create a new branch and implement the feature.
```

AI는 현재 dashboard 구조를 먼저 탐색한 뒤 구현한다.

예상 작업:
- `src/lib/db/` directory 생성
- `src/lib/db/collections.ts` 생성
- Prisma query 작성
- demo user lookup 추가
- collection section component 수정
- dashboard page에서 collections fetch
- build 실행

### collections query
`collections.ts`에는 recent collections를 가져오는 function이 들어간다.

예상 function:

```ts
getRecentCollections()
```

내부에서는 Prisma를 사용한다.

```ts
prisma.collection.findMany(...)
```

필요한 data:
- collection id/name
- item count
- collection에 포함된 item types
- most used item type 또는 type colors/icons
- favorite/recent 표시용 metadata

### Demo user 임시 처리
Auth를 아직 구현하지 않았기 때문에 demo user를 사용한다.

예상 helper:

```ts
getDemoUser()
```

나중에 authentication을 붙이면 이 부분을 current logged-in user로 교체한다.

### Collection card 업데이트
Collection card는 mock data type에서 database return type에 맞게 수정된다.

유지해야 할 UI:
- 기존 card design
- item count 표시
- collection별 border/color
- 작은 item type icons 표시

예:
- Design Resources는 links만 있으므로 link icon만 표시
- DevOps는 link/snippet/command가 섞여 있으므로 여러 icon 표시
- AI Workflows는 prompts count 표시

### Collections section 업데이트
`collections-section.tsx`는 더 이상 mock collections를 직접 import하지 않는다.

대신 page/server component에서 가져온 database collections를 props로 받아 렌더링한다.

흐름:

```text
dashboard page
  -> getRecentCollections()
  -> CollectionsSection collections={recentCollections}
  -> CollectionCard
```

### Dashboard page 업데이트
`src/app/dashboard/page.tsx` 또는 server component 영역에서 collections를 fetch한다.

중요:
- database fetch는 server side에서 수행
- mock data 제거
- UI component에는 필요한 data만 props로 전달

### build와 manual test
구현 후 build를 실행한다.

```bash
npm run build
```

브라우저에서 `/dashboard` 확인:
- main area collections가 database에서 옴
- sidebar는 아직 mock data
- pinned/recent items는 아직 mock data
- collections card count/icon이 seed data와 일치

검증 예:
- Design Resources: 4 links라 link icon만 표시
- DevOps: link, snippet, command icon 표시
- AI Workflows: prompts count 표시

### feature 완료 처리
테스트가 끝나면 current feature를 완료 처리한다.

```text
Set the current feature to completed,
clear the info,
and add it to history.
```

History에 dashboard collections database 전환 작업이 추가된다.

강사는 이제 workflow가 반복되었으므로, 곧 `/feature` custom slash command로 이 과정을 자동화할 예정이라고 말한다.

### commit, merge, push
마지막으로 Git 정리:

```text
Commit to feature,
merge to main,
push,
and delete feature branch.
```

Git 관련 작업도 나중에 `/feature` command에 통합할 예정이다.

### 다음 단계
다음에는 dashboard의 나머지 mock data를 database data로 교체한다.

대상:
- pinned items
- recent items
- sidebar item types
- sidebar collections

## 예시

Collections database 전환 흐름:

```text
Add dashboard-collections-spec.md
  -> Update current-feature.md
  -> Create feature branch
  -> Create src/lib/db/collections.ts
  -> Fetch collections with Prisma
  -> Use demo user until auth
  -> Pass collections into dashboard UI
  -> npm run build
  -> Manual dashboard test
  -> Move feature to history
  -> Commit, merge, push, delete branch
```

## 요약
- Dashboard 전체를 한 번에 database로 바꾸지 않고, collections부터 교체한다.
- Database query logic은 `src/lib/db/collections.ts`에 둔다.
- Server component에서 Prisma로 collections를 fetch하고, UI component에는 props로 전달한다.
- Auth 전까지는 demo user를 임시로 사용한다.
- 다음 feature에서는 pinned/recent items와 sidebar data를 database로 바꾼다.
