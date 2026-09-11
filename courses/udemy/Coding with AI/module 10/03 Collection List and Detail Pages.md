# Collection List and Detail Pages

## 개요
- `/collections` page에서 user의 모든 collections를 보여준다.
- `/collections/[id]` page에서 특정 collection에 속한 items를 보여준다.
- Sidebar와 dashboard collection card를 실제 collection pages로 연결한다.

## 내용

### 문제 상황
Collection 생성과 item assignment는 가능하지만, 아직 collection pages가 없다.

현재 상태:
- Sidebar의 collection click이 동작하지 않음
- dashboard collection card click이 동작하지 않음
- `View All Collections`는 `/collections`로 가지만 page가 비어 있음

이번 목표:
- `/collections` page 생성
- `/collections/[id]` detail page 생성
- collection card에 link 추가
- collection detail에서 items 표시

### Prompt 기반 feature
이번에도 section 12 prompts의 Collections Page prompt를 사용한다.

Prompt 요지:

```text
Create the /collections page and show the collections.
Create the /collections/[id] page to show the items in that collection.
Use the existing cards.
Link the View All Collections in the sidebar to the collections page.
Link all collection cards to that specific collection page.
```

### Collections query
`src/lib/db/collections.ts`에 모든 user collections를 가져오는 query를 추가한다.

예:

```ts
getAllCollections(userId)
```

조건:
- 현재 user의 collections만 반환
- collection card display에 필요한 counts/dominant type info 포함

### Items by collection query
특정 collection에 속한 items를 가져오는 query는 `src/lib/db/items.ts`에 추가한다.

예:

```ts
getItemsByCollectionId(collectionId, userId)
```

이 함수는 item을 가져오는 것이므로 collections file이 아니라 items file에 두었다.

조건:
- collection id 기준
- user id 기준 ownership check
- 기존 item card/detail display에 필요한 data 반환

### `/collections` route
App Router에 collections folder를 만든다.

구조:

```text
app/collections/page.tsx
```

역할:
- session 확인
- user data fetch
- collections fetch
- dashboard layout 사용
- collection cards grid 표시

### Inline Prisma query 개선
처음 생성된 code는 page에서 Prisma를 직접 호출했다.

강사는 이를 보고 질문했다.

```text
Can you tell me why you are putting this here?
Should we have it somewhere else and bring it in?
```

AI는 기존 page pattern을 따른 것이라고 설명했지만, 중복을 줄이기 위해 utility extraction을 제안했다.

강사는 반복 코드를 줄이고 싶다고 했고, `lib/db/users.ts` utility가 만들어졌다.

### User utility
새 파일:

```text
src/lib/db/users.ts
```

예상 function:

```ts
getUserById(userId)
```

역할:
- dashboard layout에 필요한 user fields fetch
- 여러 page에서 반복되는 user query 제거

이후 collections page와 collection detail page에서 inline Prisma query 대신 이 utility를 사용한다.

### `/collections/[id]` route
개별 collection page를 만든다.

구조:

```text
app/collections/[id]/page.tsx
```

역할:
- session 확인
- current user fetch
- collection detail fetch
- collection에 속한 items fetch
- 기존 item card components 재사용
- collection이 없거나 user 소유가 아니면 적절히 처리

### Collection cards link
Collection cards는 Link로 감싼다.

동작:
- dashboard collection card click -> `/collections/[id]`
- sidebar collection click -> `/collections/[id]`
- `/collections` page collection card click -> `/collections/[id]`

### Mixed item type display
Collection detail page에서 collection 안의 items를 보여준다.

흥미로운 점:
- image item은 image gallery style로 표시됨
- file item은 file list style로 표시됨
- 일반 item은 existing item card로 표시됨

강사는 이를 보고 기대 이상으로 좋다고 판단했다.

예:
- DevOps collection에 image 추가 -> images section처럼 아래에 표시
- DevOps collection에 file 추가 -> files section처럼 아래에 표시

이 type-specific display 재사용은 좋은 결과였다.

### Browser 테스트
확인한 흐름:
1. Sidebar의 View All Collections 클릭
2. `/collections` page에서 collection cards 확인
3. collection card 클릭
4. `/collections/[id]` page로 이동
5. 해당 collection items 표시 확인
6. image/file item을 collection에 추가
7. collection detail에서 image/file display 확인

### Unit tests
`/feature test`를 실행해 collection detail logic에 대한 tests를 생성했다.

Test 대상:
- get collection by id
- collection dominant color/type calculation
- item type count sorting
- user ownership where clause

Test cases:
- collection이 존재하고 user 소유이면 mapped collection detail 반환
- item이 없으면 dominant color가 null
- item type counts를 count descending으로 정렬
- Prisma where clause에 user ID가 포함되는지 확인

결과:
- 새 tests 5개 추가
- 총 77 tests pass

### Pagination은 나중에
Collection detail page는 현재 모든 items를 보여준다.

강사는 pagination은 다음 section에서 다룰 예정이라고 언급했다.

## 예시

Routes:

```text
/collections
/collections/:id
```

Queries:

```ts
getAllCollections(userId);
getItemsByCollectionId(collectionId, userId);
getUserById(userId);
```

Link wrapping:

```tsx
<Link href={`/collections/${collection.id}`}>
  <CollectionCard collection={collection} />
</Link>
```

## 요약
- `/collections` page와 `/collections/[id]` detail page를 만들었다.
- Collection cards와 sidebar links가 실제 pages로 연결된다.
- User data fetch 중복을 줄이기 위해 `lib/db/users.ts` utility를 추가했다.
- Collection detail에서는 기존 item display components를 재사용해 images/files도 type-specific layout으로 보여준다.
- `/feature test`로 collection detail mapping과 ownership query를 검증했다.
