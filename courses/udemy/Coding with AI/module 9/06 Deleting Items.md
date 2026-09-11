# Deleting Items

## 개요
- Item drawer에서 delete icon을 눌러 item을 삭제하는 기능을 구현한다.
- ShadCN confirmation dialog와 success toast를 사용한다.
- Delete도 edit과 같은 패턴으로 `lib/db` query function과 server action을 나누고, unit test를 추가한다.

## 내용

### Context clear와 feature-based workflow
강사는 각 video/feature 전에 `/clear`로 context를 비운다고 설명한다.

이유:
- 프로젝트의 기본 context는 이미 `CLAUDE.md`, coding standards, project overview 등에 있음
- 새 작업은 current feature에 요구사항만 로드하면 충분함
- feature 단위로 branch와 구현을 관리하기 때문

필요하다면 매 session 끝에 요약 문서를 만들고 다음 session에서 참조할 수도 있지만, 강사는 현재 구조만으로 충분하다고 설명한다.

### Delete feature prompt
이번 작업은 단순해서 별도 spec file 없이 `/feature load`에 직접 prompt를 입력했다.

Prompt 요지:

```text
Create the delete functionality for items.
There should be a ShadCN UI confirmation and a toast on success.
```

AI가 current feature에 정리한 내용:
- delete item server action
- Zod validation
- ownership check
- `lib/db/items.ts`의 Prisma delete query
- confirmation dialog
- drawer trash icon wiring
- success toast

### 경로 수정
AI가 처음에는 `lib/queries`라는 잘못된 위치를 제안했다.

강사는 즉시 수정했다.

```text
There is no lib/queries. It is lib/db.
```

이 예시는 AI가 context를 잘 따라도 구조를 틀릴 수 있으므로, 개발자가 프로젝트 구조를 알고 있어야 한다는 점을 보여준다.

### DB delete query
실제 Prisma delete logic은 `src/lib/db/items.ts`에 둔다.

역할:
- item 존재 확인
- item이 현재 user 소유인지 확인
- 소유자일 때만 삭제
- 성공 여부 반환

예상 동작:
- item 없음: false
- 다른 user item: false
- 본인 item: delete 후 true

### Server action
Server action은 `src/actions/items.ts`에 추가한다.

역할:
- session/user 확인
- Zod로 item id validation
- `deleteItem` query 호출
- 실패/성공 response 반환

Drawer component는 이 server action을 호출한다.

### Delete confirmation dialog
UI는 ShadCN AlertDialog를 사용한다.

역할:
- 실수 삭제 방지
- delete action 전 확인
- 취소/삭제 button 제공

구성:

```text
components/items/delete-item-dialog.tsx
```

### Drawer 연결
`item-drawer.tsx`에서 delete dialog state를 추가한다.

동작:
1. Trash icon 클릭
2. confirmation dialog 표시
3. Delete 클릭
4. server action 호출
5. 성공 시 toast 표시
6. drawer 닫기
7. item card/list refresh

### AI workflow에 대한 태도
강사는 AI가 작성한 모든 line을 직접 쓴 것처럼 완벽히 알 수는 없다고 말한다.

하지만 다음 정도는 알아야 한다.

- 어떤 파일이 생성/수정되는지
- 데이터 흐름이 어디서 어디로 가는지
- 문제가 생기면 어디를 봐야 하는지
- 전체 구조의 70~80% 정도

즉, AI에게 맡기더라도 구조적 이해는 개발자의 책임이다.

### Tests
`/feature test`를 실행해 delete logic에 대한 test를 생성했다.

Server action tests:
- 로그인하지 않으면 error
- item not found면 error
- delete 성공 시 success

DB query tests:
- item이 없으면 false
- 다른 user 소유 item이면 false
- user가 소유한 item이면 delete 후 true

기존 tests와 함께 실행했고, 총 26개 test가 모두 pass했다.

### Browser 테스트
강사는 link item 하나를 삭제해 실제 동작을 확인했다.

테스트 흐름:
1. Drawer에서 link item open
2. Delete 클릭
3. confirmation dialog 확인
4. Delete confirm
5. card가 list에서 사라짐
6. `/items/links` page에서도 사라짐
7. refresh 후에도 사라진 상태 유지

### Feature review와 complete
`/feature review`로 목표 달성 여부를 확인했다.

결과:
- goals checklist 충족
- no scope creep
- build 통과

그 후 `/feature complete`로 merge/branch delete를 진행했다.

## 예시

Delete action flow:

```text
Trash icon -> AlertDialog -> Confirm Delete -> Server action -> DB delete -> Toast
```

DB query behavior:

```ts
deleteItem(userId, itemId) // returns boolean
```

Test cases:

```text
returns false when item does not exist
returns false when item belongs to a different user
deletes item and returns true when user owns the item
```

## 요약
- Delete 기능은 confirmation dialog와 toast를 포함해 drawer에서 처리한다.
- 실제 delete는 `lib/db/items.ts`, mutation entry point는 server action에 둔다.
- Ownership check를 통해 다른 user의 item 삭제를 막는다.
- `/feature test`로 server action과 DB query test를 추가했다.
- Browser에서 삭제 후 list와 refresh 상태까지 확인했다.
