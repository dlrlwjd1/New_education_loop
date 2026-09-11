# Editing Items Inline in the Drawer

## 개요
- Item drawer 안에서 별도 edit page 없이 inline edit mode를 구현한다.
- 변경 가능한 field를 input/textarea로 바꾸고, save/cancel로 view mode와 edit mode를 전환한다.
- Mutation은 server action을 통해 처리하고, 실제 Prisma update는 `lib/db/items.ts` query function에 둔다.

## 내용

### UX 목표
DevStash의 중요한 방향은 빠른 사용성이다.

따라서 item edit도 별도 page로 이동하지 않는다.

원하는 흐름:
1. Item card 클릭
2. Drawer open
3. Edit icon 클릭
4. 같은 drawer 안에서 editable fields가 input으로 변경
5. Save 또는 Cancel
6. View mode로 복귀

이 방식은 item list와 detail 사이를 빠르게 오가게 해준다.

### Edit spec
Spec file:

```text
item-drawer-edit-spec.md
```

핵심 요구사항:
- drawer action bar의 edit icon/button 클릭 시 edit mode 전환
- 같은 drawer 유지
- editable fields를 inputs로 변경
- cancel은 변경사항 discard 후 view mode 복귀
- save는 server action으로 변경사항 저장
- 저장 후 drawer data refresh
- toast notification 표시

### Editable fields
수정 가능한 공통 field:
- title
- description
- tags

Type-specific field:
- snippet/command: content, language
- prompt/note: content
- link: url

나중에 code editor를 붙일 수 있지만, 이번 단계에서는 일반 textarea/input으로 처리한다.

### Non-editable fields
이번 edit 기능에서 바꾸지 않는 항목:
- item type
- collections
- dates

Item type을 snippet에서 prompt로 바꾸는 식의 변환은 지원하지 않는다.

Collections 관리는 별도 기능으로 분리한다.

### Zod validation
Server action에서 Zod schema를 사용해 validation을 수행한다.

예:
- title은 trim된 string이며 최소 1자 필요
- description은 optional/nullable
- content는 type에 따라 optional
- url은 link type에서 필요

Client에서도 save button을 title empty 상태에서 disable할 수 있지만, 최종 검증의 single source of truth는 server action의 Zod schema다.

### DB query function
실제 Prisma update는 `src/lib/db/items.ts`에 둔다.

예상 function:

```ts
updateItem(userId, itemId, data)
```

역할:
- item ownership 확인
- item update
- tag 처리
- updated item detail 반환

### Tag update 처리
Tag는 update 시 기존 연결을 모두 끊고 새 tag를 connect-or-create 방식으로 처리한다.

흐름:
1. 기존 tags disconnect
2. 입력된 tag list 정리
3. 존재하는 tag는 connect
4. 없는 tag는 create

### Server action
Server action file:

```text
src/actions/items.ts
```

역할:
- 현재 user/session 확인
- Zod validation 수행
- validation error를 object response로 반환
- `lib/db/items.ts`의 update query 호출
- 성공 시 updated item detail 반환

Response 형태:

```ts
{
  success: boolean;
  data?: ItemDetail;
  error?: string;
  fieldErrors?: Record<string, string[]>;
}
```

### Drawer UI 수정
`item-drawer.tsx`에 edit mode state를 추가한다.

State 예:
- `isEditing`
- `isSaving`
- title
- description
- content
- language
- url
- tags

Form library는 사용하지 않고 controlled inputs로 단순하게 처리한다.

### Save 후 refresh
Save 성공 후에는 다음을 수행한다.

- toast 표시
- edit mode 종료
- drawer data 업데이트
- `router.refresh()` 호출

`router.refresh()`가 중요한 이유는 drawer 안의 detail뿐 아니라 뒤에 보이는 item card도 새 title/description으로 갱신되어야 하기 때문이다.

### Tests
Feature workflow가 update action에 대한 test를 생성했다.

Test 대상:
- auth module mock
- DB module mock
- update item server action

Test cases:
- 로그인하지 않았을 때 error 반환
- empty title validation error
- invalid URL validation error
- item not found error
- update 성공 시 updated item 반환

테스트 파일은 source 옆에 둔다.

예:

```text
src/actions/items.test.ts
```

또는 관련 item logic 옆 test file.

### Browser 테스트
강사는 snippets page에서 item을 열고 edit을 테스트했다.

확인한 흐름:
1. Drawer open
2. Edit 클릭
3. title, description, content, language, tags 입력 가능 확인
4. title/description 변경
5. Save
6. "Item updated" toast 확인
7. drawer와 underlying card 모두 변경 확인
8. refresh 후에도 변경 유지 확인
9. tag 추가 확인

Tests와 build도 모두 통과했다.

## 예시

Edit flow:

```text
View mode -> Edit click -> Inputs shown -> Save -> View mode
```

Update action:

```ts
await updateItemAction(itemId, {
  title,
  description,
  content,
  language,
  tags,
});
```

Zod title validation:

```ts
z.string().trim().min(1, "Title is required")
```

## 요약
- Item edit은 drawer 안에서 inline으로 처리한다.
- Mutation은 server action, Prisma update는 `lib/db/items.ts` query function에 둔다.
- Zod validation을 server action에서 수행해 validation의 기준을 하나로 만든다.
- Save 후 `router.refresh()`로 drawer와 card UI를 함께 갱신한다.
- Update action에 대한 unit test를 추가하고 browser에서 실제 edit flow를 확인했다.
