# Creating Collections

## 개요
- DevStash의 collection CRUD를 시작하면서 먼저 collection create 기능을 구현한다.
- Top bar의 `New Collection` button이 modal을 열고, name과 description을 입력해 collection을 생성하게 만든다.
- 기존 item CRUD와 같은 패턴으로 `lib/db` query function, server action, Zod validation, toast, unit test를 사용한다.

## 내용

### Collections로 넘어가는 이유
Item CRUD와 display 기능을 마무리한 뒤, 이제 collection 기능을 구현한다.

현재 상태:
- dashboard에 collection card가 있음
- sidebar에 collection 목록이 있음
- top bar에 collection 생성 button이 있음
- 하지만 button이나 collection page 기능은 아직 완성되지 않음

목표:
- collection 생성
- item을 collection에 추가
- collection 목록 page
- collection detail page
- 이후 favorite/pin 같은 special behavior

### Prompt 기반 feature
이번 기능은 비교적 단순하므로 별도 spec file 대신 prompt로 `/feature load`를 실행한다.

Prompt 요지:

```text
Implement collection create.
We need a button in the top bar to create a new collection with a description.
Follow the same patterns as items.
Collections should be user scoped.
Fetch from server components via lib/db functions.
Use API routes for client-side calls if needed.
Show toast on success or failure.
Update the UI with the new collection on save.
```

강사는 프로젝트마다 data fetching/mutation 구조가 다를 수 있으므로, 자신의 application architecture에 맞게 prompt를 조정해야 한다고 강조했다.

### Architecture 확인
이 프로젝트의 기존 패턴:
- Prisma 직접 접근은 `src/lib/db/*`
- Mutation entry point는 `src/actions/*`
- Validation은 Zod
- UI는 modal/dialog component
- 성공/실패는 toast
- server component는 `lib/db` helper를 호출

AI에게 맡기더라도 이 구조를 개발자가 알고 있어야 올바른 위치에 코드가 생성되는지 판단할 수 있다.

### Collection DB query
기존에 collection fetch를 위해 `src/lib/db/collections.ts`가 이미 있었다.

이번 기능에서는 여기에 create query를 추가한다.

예상 data:

```ts
type CreateCollectionData = {
  name: string;
  description?: string;
};
```

역할:
- 현재 user id 기준으로 collection 생성
- name/description 저장
- 생성된 collection 반환

### Collection server action
새 action file을 만든다.

예:

```text
src/actions/collections.ts
```

역할:
- 현재 user 확인
- Zod schema로 입력 검증
- `lib/db/collections.ts`의 create query 호출
- success/error response 반환

Validation 예:
- name required
- name 길이 제한
- description optional

### New collection dialog
새 modal component를 만든다.

예:

```text
components/collections/new-collection-dialog.tsx
```

State:
- open
- loading
- name
- description

동작:
1. `New Collection` 클릭
2. dialog open
3. name/description 입력
4. create submit
5. success toast
6. form reset
7. dialog close
8. page refresh/update

### Top bar 연결
Top bar에는 이미 button이 있었지만 동작하지 않았다.

이번 구현에서:
- `NewCollectionDialog` import
- open state 추가
- button click 시 dialog open
- dialog component rendering

### Browser 테스트
강사는 dashboard에서 직접 collection을 생성했다.

예:

```text
Name: Next.js prompts
Description: This is a test
```

확인:
- modal이 열림
- collection 생성 성공
- dashboard/sidebar에 새 collection 표시
- collection count가 증가

새 collection에는 아직 item이 없으므로 dominant color/outline이 없다.

Collection color는 해당 collection 안에서 가장 많은 item type의 color를 기준으로 결정된다.

### Unit tests
`/feature test`를 실행해 collection create action에 대한 tests를 생성했다.

Test cases:
- 로그인하지 않으면 error
- empty name validation error
- name이 100자를 넘으면 validation error
- create 성공 시 created collection 반환

결과:
- 새 unit tests 8개 추가
- 기존 tests 포함 66개 tests pass

### Feature complete
Create collection 기능이 동작하고 tests가 통과한 뒤 `/feature complete`를 실행했다.

다음 단계는 item을 하나 이상의 collection에 추가하는 기능이다.

## 예시

Create collection flow:

```text
New Collection -> Dialog -> Name/Description -> Create -> Toast -> UI refresh
```

Server action:

```ts
createCollectionAction({
  name: "Next.js prompts",
  description: "Prompts for Next.js work",
});
```

Validation:

```ts
z.object({
  name: z.string().trim().min(1).max(100),
  description: z.string().optional(),
});
```

## 요약
- Collection create는 item CRUD와 같은 architecture pattern을 따른다.
- DB query는 `lib/db/collections.ts`, mutation은 `actions/collections.ts`에 둔다.
- Top bar button은 New Collection dialog를 열도록 연결한다.
- 생성 후 toast와 UI refresh로 새 collection을 즉시 확인한다.
- `/feature test`로 collection create action의 기본 validation과 success path를 테스트했다.
