# Item Detail Drawer

## 개요
- Item card를 클릭하면 별도 page 이동 없이 오른쪽 drawer에서 item detail을 보여준다.
- Card list는 필요한 최소 data만 server-side로 가져오고, full item detail은 click 시 API route로 fetch한다.
- Drawer 구현 후 `/feature test`로 `getItemById`의 authorization/data mapping logic을 테스트한다.

## 내용

### Seeder 중복 문제
강사는 item drawer 구현 전에 seed script에서 demo data가 중복 생성되는 문제를 언급했다.

문제:
- seed를 다시 실행할 때 demo user의 collections/items가 중복됨
- snippets가 두 개씩 보이는 현상 발생

해결 방향:
- demo user는 유지
- demo user의 기존 collections/items는 먼저 삭제
- 그 다음 seed data를 다시 생성

이 문제는 사용자 환경마다 다를 수 있으므로, 같은 증상이 있으면 seeder cleanup logic을 추가하면 된다.

### Drawer UX 목표
Item detail은 별도 page가 아니라 drawer로 보여준다.

이유:
- DevStash는 빠르게 item을 훑고 여는 경험이 중요함
- list에서 detail로 이동했다가 back하는 흐름을 피함
- snippet, command, link 등을 빠르게 비교하고 열 수 있음

사용 흐름:
1. Item card 클릭
2. 오른쪽 drawer open
3. full detail 표시
4. 다른 card 클릭 시 빠르게 다른 detail 표시

### Data fetching 결정
강사는 drawer 구현 전 data fetching 방식을 명확히 결정했다.

Option 1:
- list page load 시 모든 item의 full content까지 가져옴
- drawer는 이미 받은 data를 표시

Option 2:
- list page에서는 card에 필요한 최소 data만 가져옴
- card 클릭 시 API route로 해당 item detail만 fetch

강사는 Option 2를 선택했다.

이유:
- snippet content나 file detail이 길 수 있음
- item이 많아질수록 initial load가 무거워짐
- click 시 필요한 item만 가져오는 것이 더 효율적임

### Item drawer spec
Spec file:

```text
item-drawer-spec.md
```

요구사항:
- item card click 시 right side slide-in drawer open
- separate item page 없음
- ShadCN Sheet component 사용
- dashboard와 item list pages 모두에서 동작
- action bar 표시: favorite, pin, edit, copy 등
- extras는 나중에 구현
- skeleton loading state 표시
- full item detail은 `/api/items/[id]`에서 fetch
- API route는 `src/lib/db/items.ts`의 DB function 사용

### API route
Full item detail을 가져오기 위해 API route를 만든다.

구조:

```text
app/api/items/[id]/route.ts
```

역할:
- session 확인
- 로그인한 user 확인
- item id로 item 조회
- item이 현재 user에게 속하는지 확인
- full detail 반환

로그인하지 않았거나 다른 user의 item이면 접근할 수 없어야 한다.

### DB helper
`src/lib/db/items.ts`에 `getItemById` function을 추가한다.

역할:
- Prisma query 실행
- item id와 user id로 ownership 확인
- item type, collections, tags 등 detail data mapping
- drawer에서 필요한 full content 포함

이 function은 API route가 호출한다.

### Drawer provider
Drawer state는 client side에서 관리한다.

구성:

```text
components/items/item-drawer-provider.tsx
components/items/item-drawer.tsx
```

Provider 역할:
- drawer open/close state 관리
- selected item id 관리
- item detail fetch
- loading/error state 관리

`use client`가 필요한 이유는 click interaction과 state가 있기 때문이다.

### Item drawer component
Drawer component는 ShadCN Sheet를 사용한다.

표시 내용:
- title
- item type
- description
- content
- type-specific fields
- action icons
- skeleton loading state

Code editor나 type별 고급 UI는 나중에 추가한다.

이번 목표는 drawer 자체와 full item data fetching을 검증하는 것이다.

### Item card 클릭 처리
기존 item card는 단순 표시용이었다.

Drawer 구현 후에는 card click 시 provider의 `openDrawer(itemId)` 같은 함수를 호출한다.

동작 위치:
- dashboard item cards
- `/items/[type]` listing cards

둘 다 같은 drawer provider를 통해 detail을 연다.

### Layout 통합
Drawer provider는 dashboard layout과 item list page 모두에서 사용할 수 있도록 통합한다.

목표:
- dashboard에서도 card click으로 drawer open
- item type list page에서도 card click으로 drawer open
- drawer component는 한 번 구현하고 공유

### 테스트
구현 후 build와 test를 실행한다.

Browser 확인:
- snippets page에서 card 클릭
- drawer open 확인
- title/description/content 표시 확인
- command, link 등 다른 type에서도 detail 표시 확인
- dashboard card에서도 drawer open 확인
- skeleton loading이 빠르게 표시되는지 확인

### `/feature test`
Drawer feature 후 `/feature test`를 실행한다.

AI가 testable logic으로 판단한 부분:

```text
getItemById
```

이유:
- Prisma query argument
- ownership authorization check
- nested relation mapping
- null handling

API route는 thin delegation layer라 별도 test보다 `getItemById` test가 더 가치 있다고 판단했다.

### 추가된 tests
`src/lib/db/items.test.ts` 같은 test file이 만들어진다.

Test cases:
- item이 존재하고 user에게 속하면 mapped detail 반환
- item이 없으면 `null` 반환
- item이 다른 user 소유면 `null` 반환
- empty tags/collections mapping
- multiple collections mapping
- Prisma query arguments 확인

기존 date tests와 새 item tests를 함께 실행해 모두 pass하는지 확인한다.

### Feature complete
테스트와 build가 통과한 뒤 `/feature complete`를 실행한다.

완료 과정:
- tests 실행
- build 실행
- 변경사항 stage/commit
- feature branch merge
- branch 삭제

다음 단계는 drawer 안에서 item을 edit하는 기능이다.

## 예시

Detail API route:

```text
GET /api/items/:id
```

DB helper:

```ts
getItemById(itemId, userId)
```

Drawer flow:

```text
Card data loaded by server component
-> user clicks card
-> client fetches /api/items/:id
-> drawer renders full detail
```

Test cases:

```text
returns mapped item detail when item belongs to user
returns null when item does not exist
returns null when item belongs to another user
```

## 요약
- Item detail은 별도 page가 아니라 right-side drawer로 보여준다.
- Initial list에서는 card에 필요한 최소 data만 fetch하고, full detail은 click 시 API route로 가져온다.
- `getItemById`는 ownership check와 detail mapping을 담당한다.
- Drawer state는 client provider에서 관리하고, dashboard와 item list page 모두에서 공유한다.
- `/feature test`로 `getItemById`의 핵심 logic을 unit test했다.
