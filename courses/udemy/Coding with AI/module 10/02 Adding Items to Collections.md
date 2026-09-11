# Adding Items to Collections

## 개요
- Item을 하나 이상의 collection에 추가할 수 있게 만든다.
- New Item modal과 item drawer edit mode에 collection multi-select picker를 추가한다.
- Create/update item action과 DB query가 collection assignments를 처리하도록 확장한다.

## 내용

### 기능 목표
Collection을 만들 수 있게 되었지만, 아직 item을 collection에 넣을 수 없다.

이번 기능의 목표:
- item 생성 시 collection 선택
- item 수정 시 collection 추가/제거
- 여러 collection에 동시에 속할 수 있음
- user scoped collection만 선택 가능
- collection page display는 다음 단계에서 구현

### Prompt 기반 feature
이번에도 별도 spec file 없이 prompt로 `/feature load`를 실행한다.

Prompt 요지:

```text
Add functionality to an item to add to a single or multiple collections.
Add an input to the new/edit item forms where we can select from the available collections.
Don't worry about displaying the collection pages yet.
```

AI가 current feature에 정리한 작업:
- user collections fetch query
- create item action/query에 collection IDs 처리 추가
- update item action/query에 collection IDs 처리 추가
- ShadCN Popover/Command pattern으로 multi-select UI 구현
- New Item modal과 Item Drawer edit mode에 picker 추가

### Collection picker
Collection 선택 UI는 multi-select picker다.

사용 component:
- ShadCN Popover
- ShadCN Command

새 component 예:

```text
components/collections/collection-picker.tsx
```

역할:
- collection 목록 표시
- 여러 개 선택 가능
- 선택/해제 toggle
- 선택된 collection 이름 표시

### User collections query
현재 로그인한 user의 collection만 가져와야 한다.

`src/lib/db/collections.ts`에 query를 추가한다.

예:

```ts
getUserCollections(userId)
```

이 query는 picker dropdown에 표시할 collection 목록을 반환한다.

### Server action
Collection picker를 client UI에서 사용하려면 collection 목록을 가져오는 action도 추가된다.

예:

```ts
getUserCollectionsAction()
```

Test cases:
- 로그인하지 않으면 error
- collection 목록 반환
- DB error 처리
- collection이 없으면 empty array 반환

### Create item 확장
Item 생성 시 `collectionIds`를 함께 받을 수 있게 한다.

변경 대상:
- create item data interface
- create item server action schema
- create item DB query
- New Item dialog state

동작:
1. New Item modal open
2. collection picker에서 하나 이상 선택
3. form submit
4. create item query가 selected collection IDs 연결

### Update item 확장
Item drawer edit mode에서도 collections를 수정할 수 있게 한다.

변경 대상:
- update item data interface
- update item server action schema
- update item DB query
- item drawer edit form state

동작:
1. item drawer open
2. Edit 클릭
3. collection picker에서 collection 추가/제거
4. Save
5. item의 collection membership 업데이트

### New Item modal integration
`new-item-dialog`에 collections state를 추가한다.

State 예:
- collections
- selectedCollectionIds

동작:
- mount 시 user collections fetch
- picker에 collections 표시
- form reset 시 selected collection IDs도 empty array로 초기화

### Item drawer integration
Drawer edit mode에도 같은 picker를 추가한다.

기존 item이 속한 collection을 초기 선택값으로 보여주고, 저장 시 변경사항을 반영한다.

### Browser 테스트
강사는 command item을 생성하면서 여러 collection을 선택했다.

예:
- item type: command
- title/content/language 입력
- collections: Next.js prompts, Terminal Commands

확인:
- 생성 성공
- collection에 item이 들어가면서 collection color가 바뀜
- Next.js prompts collection이 command type color인 orange outline을 갖게 됨

그 다음 기존 item을 edit해서 다른 collection에도 추가했다.

확인:
- drawer edit mode에서 collection picker 작동
- Save 후 collection assignment 반영

### Tags와 collections 구분
Drawer에서 보이는 label이 collections처럼 보일 수 있지만, 강의 시점의 card/drawer에 표시되는 것은 tags다.

Collections는 item을 묶는 상위 그룹이고, tags는 item metadata다.

Collection page를 만들면 해당 collection에 속한 items를 확인할 수 있다.

### Tests
Feature 구현 후 tests와 build를 실행했다.

생성된 tests:
- get user collections action
- create item이 collection IDs를 전달하는지
- update item이 collection IDs를 처리하는지

결과:
- 72 tests pass

### Feature complete
Add items to collections 기능을 완료한 뒤 `/feature complete`를 실행했다.

다음 단계는 `/collections` page와 `/collections/[id]` detail page를 만드는 것이다.

## 예시

Collection picker flow:

```text
New Item -> Collections picker -> Select multiple -> Create
```

Create item payload:

```ts
{
  title: "Test command",
  type: "command",
  content: "npm hello",
  language: "bash",
  collectionIds: ["collection-1", "collection-2"]
}
```

Edit flow:

```text
Open drawer -> Edit -> Add DevOps collection -> Save
```

## 요약
- Items can now belong to one or multiple collections.
- Collection picker는 ShadCN Popover/Command 기반 multi-select UI로 만든다.
- New Item modal과 drawer edit mode 모두에서 collection assignment를 수정할 수 있다.
- Create/update item action과 DB query에 `collectionIds` 처리를 추가했다.
- Collection display page는 다음 단계에서 구현한다.
