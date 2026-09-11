# Server-Side Pagination

## 개요
- Items와 collections pages에 server-side pagination을 추가한다.
- 모든 resource를 한 번에 가져온 뒤 client에서 자르는 방식이 아니라, DB query 단계에서 필요한 page만 fetch한다.
- Reusable pagination component를 만들어 items, collections, collection detail 등 여러 page에서 재사용한다.

## 내용

### 먼저 cleanup 실행
Pagination을 시작하기 전에 `/cleanup` command를 실행했다.

발견된 항목:
- current feature history 순서가 어긋남
- 최신 항목이 위에 있고 initial setup이 아래로 밀려 있음
- icon component render 관련 ESLint warning

강사는 React 19 compiler를 사용하므로 icon memoization warning은 false positive일 수 있다고 확인했다.

정리:
- history order만 수정
- earliest first, latest last 순서로 다시 정렬

### Pagination spec
Spec file:

```text
pagination-spec.md
```

요구사항:
- items와 collections에 pagination 추가
- bottom에 numbered page links 표시
- prev/next links 제공
- prev/next가 불가능한 경우 disabled 처리
- pagination constants 사용
- dashboard collections/recent items도 limit 적용
- 모든 resource를 한 번에 fetch하지 않음
- server-side pagination 적용

### Server-side pagination 원칙
중요한 요구사항은 다음이다.

```text
Do not fetch all resources at once.
Only fetch the amount a page requires.
```

즉, client에서 전체 data를 받은 뒤 slice하는 방식이 아니다.

DB query에서:
- `skip`
- `take`
- total count
- current page
- total pages

를 처리한다.

### Pagination constants
Pagination 값을 한곳에서 관리하기 위해 constants file을 만든다.

예:

```text
src/lib/constants/pagination.ts
```

강의에서 사용한 값:

```ts
ITEMS_PER_PAGE = 21;
COLLECTIONS_PER_PAGE = 21;
DASHBOARD_COLLECTIONS_LIMIT = 6;
DASHBOARD_RECENT_ITEMS_LIMIT = 10;
```

Items는 3 columns grid 기준으로 7 rows가 되도록 21개를 사용한다.

값을 바꾸고 싶으면 이 constants file을 수정하면 된다.

### Paginated result shape
기존 item list query는 items array만 반환했다.

Pagination 적용 후에는 metadata도 함께 반환한다.

예:

```ts
type PaginatedItems = {
  items: ItemWithType[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
};
```

Collections도 유사한 형태를 사용한다.

### Item query 수정
`src/lib/db/items.ts`의 type별 item query와 collection items query에 pagination을 추가한다.

예:

```ts
getItemsByType(userId, type, page, limit)
getItemsByCollectionId(collectionId, userId, page, limit)
```

Prisma query에서:

```ts
skip: (page - 1) * limit
take: limit
```

을 사용한다.

총 page 수를 계산하려면 별도 count query도 필요하다.

### Collections query 수정
Collections list도 pagination을 지원하도록 바꾼다.

처음 구현에서는 `/collections` page에 pagination이 빠졌고, browser test 중 발견했다.

강사가 지적:

```text
The pagination was not implemented on the /collections page.
```

이후 `/collections` page에도 같은 reusable pagination component를 추가했다.

### Reusable pagination component
새 component:

```text
components/ui/pagination.tsx
```

또는 project 구조에 맞는 shared component 위치.

Props:

```ts
currentPage
totalPages
baseUrl
```

역할:
- total pages가 1 이하이면 null 반환
- page numbers 생성
- first/prev/next page link 처리
- disabled 상태 처리
- URL에 `?page=` query param 추가

Reusable하게 만들어 items와 collections 모두에서 사용한다.

예:

```tsx
<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  baseUrl="/items/snippets"
/>
```

### URL 방식
Pagination은 URL query parameter를 사용한다.

예:

```text
/items/commands?page=2
/collections?page=2
/collections/:id?page=2
```

이 방식은 server component에서 page 값을 읽고 DB query에 전달하기 좋다.

### Dashboard limits
Dashboard는 full pagination UI를 보여주지 않고, 정해진 수만 가져온다.

설정:
- collections: 6개
- recent items: 10개

Pinned items는 사용자가 직접 pin한 것이므로 별도 pagination 없이 유지한다.

### Browser 테스트
실제 data가 21개보다 적으면 pagination이 보이지 않는다.

그래서 강사는 constants를 임시로 2로 바꿔 pagination을 테스트했다.

테스트:
1. `ITEMS_PER_PAGE = 2`로 변경
2. snippets page에서 pagination 표시 확인
3. commands page에서 3 pages 표시 확인
4. page number click 확인
5. first page에서 prev disabled 확인
6. last page에서 next disabled 확인
7. `/collections` page에도 pagination 표시 확인
8. constants를 원래 값으로 복구

원래 값으로 되돌리면 data가 적은 page에서는 pagination이 다시 사라진다.

### Tests
이번 기능은 server actions를 새로 만들지 않고 DB query와 UI pagination을 바꾸는 작업이다.

강사는 별도 unit test는 생략했다.

Build와 manual browser test로 확인하고 `/feature complete`를 실행했다.

## 예시

Pagination constants:

```ts
export const ITEMS_PER_PAGE = 21;
export const COLLECTIONS_PER_PAGE = 21;
export const DASHBOARD_COLLECTIONS_LIMIT = 6;
export const DASHBOARD_RECENT_ITEMS_LIMIT = 10;
```

Prisma pagination:

```ts
const skip = (page - 1) * limit;

const items = await prisma.item.findMany({
  where,
  skip,
  take: limit,
});
```

Pagination URL:

```text
/items/snippets?page=2
```

## 요약
- Items와 collections에 server-side pagination을 추가했다.
- Query에서 `skip`/`take`를 사용해 필요한 page data만 가져온다.
- Pagination constants를 만들어 page size와 dashboard limits를 한곳에서 관리한다.
- Reusable pagination component를 만들어 여러 page에서 재사용한다.
- Manual test를 위해 page size를 2로 임시 변경한 뒤, 동작 확인 후 원래 값으로 복구했다.
