# Editing and Deleting Collections

## 개요
- Collection detail page와 collection cards에 edit/delete actions를 추가한다.
- Edit은 metadata(name, description)를 수정하는 modal로 처리하고, delete는 confirmation dialog를 거친다.
- Collection을 삭제해도 item 자체는 삭제되지 않고, 해당 collection과의 연결만 사라진다.

## 내용

### 기능 목표
이전 단계에서 `/collections`와 `/collections/[id]` page를 만들었다.

이번에는 collection 관리 기능을 추가한다.

필요한 기능:
- collection detail page에 Edit, Delete, Favorite button 추가
- Favorite은 아직 구현하지 않고 icon/button만 배치
- Edit modal에서 title/name과 description 수정
- Delete confirmation dialog 표시
- `/collections`, dashboard collection card의 three dots menu에서 Edit/Delete/Favorite 표시
- card의 다른 영역을 클릭하면 collection detail page로 이동

### Prompt 기반 feature
Section 12 prompts의 Collection Edit Delete Prompt를 사용했다.

Prompt 요지:

```text
Add buttons on /collections/[id] to Edit, Delete, and Favorite.
Do not implement Favorites yet, just the icon button.
Add a modal for Edit to edit the metadata.
Add a confirmation on Delete.
Items should not be deleted.
On cards at /collections and dashboard, have the three dots icon show a dropdown with Edit, Delete, and Favorite.
Clicking anywhere else in the card goes to that collection page.
```

### DB query
`src/lib/db/collections.ts`에 update/delete query를 추가한다.

Update:
- collection id 확인
- user id로 ownership 검증
- name/description 수정

Delete:
- collection id와 user id로 삭제
- collection 자체만 삭제
- collection에 속한 items는 삭제하지 않음

Collection과 item 관계만 사라지는 구조다.

### Server actions
`src/actions/collections.ts`에 update/delete server action을 추가한다.

역할:
- session 확인
- user 확인
- Zod validation
- DB query 호출
- success/error response 반환

Update schema:
- id required
- name required
- description optional

Delete schema:
- id required

### Edit collection dialog
새 component를 만든다.

예:

```text
components/collections/edit-collection-dialog.tsx
```

역할:
- 기존 name/description 표시
- 수정 후 save
- success toast
- dialog close
- router refresh

Create collection dialog와 비슷한 구조다.

### Delete collection dialog
Delete confirmation에는 ShadCN AlertDialog를 사용한다.

예:

```text
components/collections/delete-collection-dialog.tsx
```

역할:
- destructive action 확인
- delete action 호출
- success toast
- collection list/page refresh 또는 redirect

### Collection action dropdown
Collection card의 three dots icon은 dropdown menu를 연다.

Menu items:
- Edit
- Favorite
- Delete

Favorite은 아직 동작하지 않는 placeholder다.

Card click behavior:
- three dots 클릭: menu open
- card의 다른 영역 클릭: `/collections/[id]`로 이동

이를 위해 card 전체를 단순히 Link로 감싸는 방식에서 action 영역과 navigation 영역을 분리했다.

### Detail page action buttons
`/collections/[id]` page 상단에도 action buttons를 추가한다.

표시:
- Edit
- Favorite
- Delete

Edit button은 modal을 열고, Delete button은 confirmation을 연다.

### Browser 테스트
강사는 다음 흐름을 확인했다.

1. `/collections` page에서 card three dots 클릭
2. Edit/Delete/Favorite menu 표시 확인
3. collection detail page에서도 action buttons 표시 확인
4. Edit modal 열기
5. description 수정 후 save
6. UI에 반영 확인
7. Delete confirmation 열기
8. collection 삭제
9. item은 여전히 존재하는지 확인

삭제된 collection에 들어 있던 test command는 `/items/commands`에 그대로 남아 있었다.

### Delete redirect bug
처음에는 `/collections/[id]` page에서 collection을 삭제한 뒤 현재 detail page에 그대로 남는 문제가 있었다.

문제:
- collection은 삭제되었지만 deleted page에 머무름

수정:
- delete 성공 후 `router.replace("/collections")` 사용
- refresh보다 replace가 이 상황에 더 적합함

테스트:
1. dummy collection 생성
2. detail page 이동
3. delete 실행
4. `/collections`로 redirect 확인

### Unit tests
AI가 update/delete collection action에 대한 tests를 생성했다.

Test cases:
- 로그인하지 않으면 error
- empty name validation error
- missing id validation error
- update 성공
- delete 성공
- delete target 없음 또는 권한 없음 처리

Tests와 build가 통과한 뒤 feature를 완료했다.

### Collections CRUD 완료
이 기능으로 collection도 기본 CRUD 흐름을 갖게 되었다.

완성된 흐름:
- Create collection
- Read collection list/detail
- Update collection metadata
- Delete collection
- Item은 삭제하지 않고 관계만 제거

## 예시

Collection action menu:

```text
...
Edit
Favorite
Delete
```

Delete behavior:

```text
Delete collection -> items remain -> redirect to /collections
```

Action structure:

```ts
updateCollectionAction({ id, name, description });
deleteCollectionAction({ id });
```

## 요약
- Collection edit/delete 기능을 추가해 collection CRUD 기본 흐름을 완성했다.
- Collection 삭제는 item 삭제가 아니라 collection 관계 제거로 동작한다.
- Cards에는 three dots dropdown을 추가하고, detail page에는 action buttons를 추가했다.
- Detail page에서 delete 후 `/collections`로 redirect되도록 버그를 수정했다.
- Favorite은 아직 placeholder로만 배치했다.
