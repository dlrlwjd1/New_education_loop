# Creating Items

## 개요
- Item CRUD의 마지막 주요 기능인 create item을 구현한다.
- Top bar의 `New Item` button을 누르면 modal dialog가 열리고, item type에 따라 form fields가 달라진다.
- Create도 기존 패턴대로 DB query function, server action, Zod validation, toast, tests를 포함한다.

## 내용

### Create UX
기존 item을 보는 것은 drawer에서 처리하지만, 새 item 생성은 modal dialog로 처리한다.

강사의 UX 결정:
- drawer는 existing item detail/edit 용도로 유지
- create는 top bar의 `New Item` button에서 modal dialog로 열기

이렇게 하면 "기존 item을 보는 흐름"과 "새 item을 만드는 흐름"이 구분된다.

### Create spec
Spec file:

```text
item-create-spec.md
```

요구사항:
- `New Item` button에서 modal dialog open
- ShadCN Dialog 사용
- item type selector 제공
- 선택한 type에 따라 field 표시
- server action으로 create
- DB query function 사용
- 성공 toast 표시
- modal close
- router refresh

### Type-specific fields
모든 item type 공통 field:
- title
- description
- tags

Type별 추가 field:
- snippets: content, language
- commands: content, language
- prompts: content
- notes: content
- links: url

File/image type은 강의 시점에서 pro 또는 별도 처리 대상이므로 복잡한 업로드 기능은 다루지 않는다.

### ShadCN components
Create modal에는 일반 dialog와 form fields가 필요하다.

사용 component:
- Dialog
- Select
- Input
- Textarea
- Button

Delete에서 사용한 것은 AlertDialog이고, create에서는 form이 들어가는 일반 Dialog를 사용한다.

차이:
- AlertDialog: destructive confirmation
- Dialog: form이나 일반 modal content

### DB create query
실제 Prisma create는 `src/lib/db/items.ts`에 추가한다.

역할:
- user ownership 기준으로 item 생성
- 선택한 item type 확인
- tags connect/create 처리
- 필요한 relation 포함
- 생성된 item detail 반환

기존 edit/delete와 같은 레이어링을 유지한다.

### Server action
Server action은 `src/actions/items.ts`에 추가한다.

역할:
- 현재 user 확인
- Zod validation
- type별 required field 확인
- `createItem` DB query 호출
- success/error object 반환

Validation 예:
- title required
- link type은 url required
- url format invalid면 error
- type이 유효한 item type인지 확인

### New item dialog
새 component를 만든다.

예:

```text
components/items/new-item-dialog.tsx
```

State:
- selected type
- title
- description
- content
- language
- url
- tags
- isLoading

Type selector가 바뀌면 form에 보이는 field도 바뀐다.

예:
- command 선택: content + language 표시
- link 선택: url 표시, content 숨김

### New Item button 연결
Top bar의 `New Item` button을 dialog trigger와 연결한다.

이후 어느 page에서든 새 item을 만들 수 있다.

Create 성공 후:
- toast 표시
- dialog close
- form reset
- `router.refresh()`로 list/card 갱신

### Tests
`/feature test`를 실행해 create action test를 추가했다.

Test cases:
- 로그인하지 않으면 error
- empty title validation error
- invalid URL validation error
- link type인데 URL이 없으면 error
- creation 실패 시 error
- creation 성공 시 created item 반환

이 test들은 create server action의 핵심 조건을 검증한다.

### Browser 테스트
강사는 commands page에서 새 command item을 만들었다.

테스트 예:
- type: command
- title: List folder contents
- description: List all contents in a folder
- content: `ls`
- language: bash

Create 후:
- 새 card가 list에 표시됨
- drawer에서 detail 확인 가능
- edit으로 `ls -a` 같은 내용 수정 가능
- delete로 삭제 가능

이 흐름으로 create, read, update, delete 전체가 연결되어 있음을 확인했다.

### Test 결과
Create tests를 추가한 후 전체 test suite를 실행했다.

결과:
- 새 unit tests 7개 추가
- 총 33개 tests pass
- 3개 test files pass

### CRUD 완료
Create가 추가되면서 item CRUD의 기본 기능이 완성되었다.

완성된 흐름:
- Read: item list와 drawer detail
- Update: drawer inline edit
- Delete: drawer delete confirmation
- Create: New Item modal

## 예시

Create flow:

```text
New Item -> Dialog -> Select type -> Fill fields -> Create -> Toast -> Refresh
```

Type별 field 예:

```text
Command: title, description, tags, content, language
Link: title, description, tags, url
Note: title, description, tags, content
```

Create action validation:

```text
title required
valid item type required
url required for link
valid URL format for link
```

## 요약
- Create item은 drawer가 아니라 modal dialog에서 처리한다.
- Item type selector에 따라 form fields가 동적으로 바뀐다.
- Create 역시 `lib/db` query + server action + Zod validation 패턴을 따른다.
- `/feature test`로 create action의 주요 validation/error/success path를 테스트했다.
- Create, read, update, delete가 모두 연결되어 item CRUD 기본 흐름이 완성되었다.
