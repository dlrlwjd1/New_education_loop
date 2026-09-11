# Global Fuzzy Search Palette

## 개요
- DevStash 전역에서 items와 collections를 빠르게 찾는 command palette search를 구현한다.
- Top bar search input과 `Cmd+K`/`Ctrl+K` shortcut으로 palette를 열 수 있다.
- Item 선택 시 drawer를 열고, collection 선택 시 collection page로 이동한다.

## 내용

### 기능 목표
DevStash의 중요한 가치 중 하나는 빠른 접근이다.

검색 기능도 일반 input filter보다 빠른 command palette 형태로 만든다.

목표:
- global fuzzy search
- `Cmd+K` 또는 `Ctrl+K`로 열기
- top bar search input click 시 palette 열기
- item과 collection을 함께 검색
- 결과를 그룹으로 표시
- keyboard navigation 지원
- item 선택 시 drawer open
- collection 선택 시 page navigation

### Fuzzy search란
Fuzzy search는 정확히 일치하지 않아도 유사한 결과를 찾아주는 검색 방식이다.

예:
- typo
- 일부 단어
- 축약된 입력
- 제목/설명 일부

하지만 너무 lenient하면 관련 없는 결과가 많이 나올 수 있으므로 조정이 필요하다.

### Global search spec
Spec file:

```text
global-search-spec.md
```

요구사항:
- command palette UI
- `Cmd+K`/`Ctrl+K` shortcut
- items와 collections 검색
- grouped results
- item section과 collection section
- arrow keys navigation
- Enter로 선택
- item type icon 표시
- collection item count 표시
- item 선택 시 drawer open
- collection 선택 시 collection page 이동
- top bar search input은 직접 typing이 아니라 palette trigger
- search input에 shortcut hint 표시

### Search data queries
검색 대상 data를 가져오기 위해 DB helper를 추가한다.

`src/lib/db/items.ts`:

```ts
getSearchableItems(userId)
```

`src/lib/db/collections.ts`:

```ts
getSearchableCollections(userId)
```

역할:
- 현재 user scope로만 검색 data fetch
- item title, description, content preview, type 정보 포함
- collection name, description, item count 포함

### Search server action
새 action file:

```text
src/actions/search.ts
```

Server action:

```ts
getSearchData()
```

동작:
1. session/user 확인
2. `getSearchableItems(userId)` 호출
3. `getSearchableCollections(userId)` 호출
4. `Promise.all`로 병렬 fetch
5. items/collections data 반환

실패 시 success false와 error를 반환한다.

### Search provider
전역 open state와 search data를 공유하기 위해 context provider를 만든다.

예:

```text
components/search/search-provider.tsx
```

관리할 상태:
- palette open/closed
- search data
- loading state
- selected item 처리

이 provider는 여러 component에서 palette를 열고 결과 선택을 처리할 수 있게 한다.

### Command palette component
ShadCN Command components를 사용한다.

예:
- CommandDialog
- CommandInput
- CommandList
- CommandGroup
- CommandItem
- CommandEmpty

결과 처리:
- item select -> item drawer open
- collection select -> `/collections/[id]`로 navigate

Palette는 VS Code command palette와 비슷한 경험을 목표로 한다.

### Top bar integration
Top bar search input은 실제 typing input이 아니라 palette trigger 역할을 한다.

동작:
- click -> command palette open
- `Cmd+K`/`Ctrl+K` -> command palette open
- shortcut hint 표시

이 패턴은 개발 도구에서 많이 쓰이는 방식이다.

### Initial browser test
강사는 top bar search input을 클릭해 palette가 열리는지 확인했다.

확인:
- input click 시 palette open
- shortcut으로 palette open
- search results 표시
- item click 시 drawer open

Command key는 개인 keyboard 설정에 따라 다르게 동작할 수 있다.

강사의 환경에서는 Mac에서 command/control을 바꿔 사용해 `Ctrl+K`로 동작했다.

### Unit tests
`/feature test`를 실행해 search action tests를 생성했다.

Test cases:
- user ID가 없으면 error
- items와 collections를 성공적으로 반환
- user data가 없으면 empty arrays 반환
- item query 실패 시 error
- collection query 실패 시 error

결과:
- 총 101 tests pass

### Search가 너무 lenient한 문제
처음 구현된 fuzzy search는 너무 많은 결과를 보여줬다.

예:
- `test`를 입력했는데 거의 모든 item이 표시됨
- 실제로 title/content에 test가 없는 항목도 나옴

강사는 다음처럼 요청했다.

```text
Everything works, but I think the search is too lenient.
I type the word test and almost all items come up.
Check the search logic.
```

### Stricter filter
원인:
- ShadCN Command의 기본 fuzzy matching이 매우 lenient함
- title/content preview까지 넓게 잡으면서 관련 없는 결과가 노출됨

수정:
- command palette에 custom filter 추가
- search term이 continuous substring으로 포함될 때 match
- match면 score 1, 아니면 0

수정 후 `test` 검색 시 실제 관련된 결과만 표시되었다.

### UX 방향
검색은 DevStash의 핵심 사용성 포인트다.

좋은 검색 경험:
- 빠르게 열림
- 키보드로 탐색 가능
- 결과가 과하지 않음
- item은 즉시 drawer로 열림
- collection은 즉시 page로 이동

강사는 더 snappy하게 만들 수 있는 아이디어가 있으면 계속 적용해도 좋다고 설명했다.

## 예시

Shortcut:

```text
Cmd+K
Ctrl+K
```

Search action:

```ts
const [items, collections] = await Promise.all([
  getSearchableItems(userId),
  getSearchableCollections(userId),
]);
```

Custom filter concept:

```ts
value.toLowerCase().includes(search.toLowerCase()) ? 1 : 0
```

Selection behavior:

```text
Item result -> open drawer
Collection result -> navigate to /collections/:id
```

## 요약
- 전역 command palette search를 추가해 items와 collections를 빠르게 찾을 수 있게 했다.
- Top bar search input과 `Cmd+K`/`Ctrl+K` shortcut으로 palette를 연다.
- Search data는 user scoped DB query와 server action으로 가져온다.
- Item 선택은 drawer open, collection 선택은 collection page navigation으로 처리한다.
- 기본 fuzzy matching이 너무 lenient해 custom stricter filter로 검색 품질을 조정했다.
