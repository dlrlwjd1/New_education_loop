# Creating Mock Data

## 개요
- dashboard UI를 구현하기 전에 임시 mock data를 준비하는 강의.
- database를 붙이기 전까지 사용할 dashboard data를 component 안에 하드코딩하지 않고, **single source of truth** 파일로 분리한다.
- Claude Code에게 project overview와 screenshot을 참고하게 해서 `src/lib/mock-data.ts`를 생성한다.

## 내용

### 왜 mock data 파일이 필요한가
Dashboard UI에는 collections, items, item types, user 같은 데이터가 필요하다.

하지만 아직 database를 구현하지 않았으므로 임시 데이터가 필요하다.

피해야 할 방식:
- component file 안에 직접 하드코딩
- 여러 component에 같은 mock data 반복 작성
- UI 구현 중 데이터 구조가 여기저기 흩어지는 것

대신 하나의 파일을 만들고, 필요한 component에서 import해서 사용한다.

```text
src/lib/mock-data.ts
```

### Claude Code에 전달한 prompt
강사는 resource file의 `prompts/section 5 prompts` 안에 준비된 mock data prompt를 사용한다.

핵심 요청:
- database 구현 전까지 dashboard UI에서 사용할 single source of truth 생성
- project overview 읽기
- screenshot을 보고 data structure 참고
- `src/lib/mock-data.ts` 생성
- items, collections, item types, current user 포함
- 너무 복잡하게 만들지 않기
- helper method 만들지 않기
- import해서 쓸 수 있는 단순 data file로 유지

예시 prompt:

```text
We need a single source of truth for mock data to use for the dashboard UI
until we implement a database.

Read the project overview and look at the screenshot to see the data structure.
Create a new file at src/lib/mock-data.ts and create a simple data structure
for the dashboard UI.

It should include items, collections, item types, and a user for the current logged in user.
Do not make this too complex.
It is only for displaying data in the dashboard, like the screenshot.
Do not create helper methods, just a simple data file to import.
```

### 생성된 mock data 구조
Claude Code는 `lib` 폴더와 `mock-data.ts` 파일을 생성한다.

포함된 데이터:
- mock user
- mock item types
- mock collections
- mock items
- mock item type counts

### mock user
강사는 demo user email을 코스 전체에서 일관되게 사용하기 위해 수정한다.

```ts
email: "demo@devstash.io"
```

현재 단계에서 user data가 꼭 쓰일지는 모르지만, 앞으로 demo user 기준으로 맞춰둔다.

### mock item types
item type에는 DevStash의 시스템 타입 정보가 들어간다.

예:
- snippet
- prompt
- command
- note
- link

각 type은 다음 정보를 가질 수 있다.
- icon
- color
- `isSystem`

이 정보는 dashboard에서 item type별 색상과 icon을 표시하는 데 사용된다.

### mock collections
collections는 dashboard 상단이나 sidebar에서 보여줄 묶음 데이터다.

예:
- React Patterns
- Python Snippets
- Interview Prep

이 단계에서는 database relationship을 정교하게 구현하지 않고, UI 표시용으로 충분한 단순 구조만 둔다.

### mock items
items는 실제 dashboard card와 drawer에서 보여줄 핵심 데이터다.

예:
- Use Auth Hook
- API Error Handling Pattern
- Code Review Prompt
- Git Reset

item에는 다음과 같은 정보가 포함될 수 있다.
- title
- type
- content
- collection
- favorite 여부
- pinned 여부
- tags

code snippet의 실제 코드 내용은 `content`에 들어간다.

### mock item type counts
Dashboard에 stats component를 만들 예정이므로 item type별 count도 mock data에 포함한다.

예:
- snippets count
- prompts count
- commands count
- notes count

이 데이터도 아직은 실제 계산 로직이 아니라 UI 표시용이다.

### comment 정리
생성된 파일에 불필요한 comment가 많다면 정리해도 된다.
중요한 것은 복잡한 helper나 로직을 넣지 않고, import 가능한 단순 data file로 유지하는 것이다.

### Git에 push하기
변경 후에는 main branch를 최신 상태로 유지하는 것이 좋다.

이유:
- 다음 기능 작업에서 separate feature branch를 만들 예정
- main이 밀려 있으면 merge 과정이 복잡해질 수 있음
- AI가 Git 상태를 혼동할 가능성을 줄임

Claude Code에게 자연어로 요청할 수 있다.

```text
Push to main.
```

이때 Claude Code는 보통 다음을 수행한다.
- `git status`
- file staging
- commit
- push

### commit message 주의
강사는 Claude Code가 commit message에 `Co-authored-by` 문구를 넣으려는 것을 발견한다.
이미 context에 금지 규칙을 넣었어도 AI가 가끔 무시할 수 있음을 보여주는 예시다.

이럴 때는 승인을 거절하고 다시 지시한다.

```text
Do not ever add co-authored by Claude in the message.
```

수정된 commit message 예:

```text
feat: add mock data
```

중요한 점:
- AI가 context를 항상 완벽하게 따르지는 않는다.
- Git commit 전에는 message와 command를 꼭 확인한다.
- 원하지 않는 metadata는 승인 전에 제거하게 한다.

### 다음 단계
이제 dashboard UI를 구현할 준비가 되었다.

다만 dashboard UI는 큰 작업이므로 한 번에 전부 만들지 않고, 여러 phase로 나누어 진행한다.

## 예시

예상 파일 위치:

```text
src/
  lib/
    mock-data.ts
```

mock data file의 역할:

```ts
export const mockUser = {
  name: "Demo User",
  email: "demo@devstash.io",
};

export const mockItemTypes = [
  // snippet, prompt, command, note, link...
];

export const mockCollections = [
  // React Patterns, Python Snippets, Interview Prep...
];

export const mockItems = [
  // Use Auth Hook, API Error Handling Pattern...
];

export const mockItemTypeCounts = {
  // dashboard stats data
};
```

## 요약
- dashboard UI 구현 전, 임시 데이터를 `src/lib/mock-data.ts`에 single source of truth로 만든다.
- mock data에는 user, item types, collections, items, item type counts를 포함한다.
- component에 데이터를 하드코딩하거나 중복하지 않는다.
- helper method 없이 단순 import용 data file로 유지한다.
- 변경 후 main branch를 최신 상태로 push하되, commit message에 원치 않는 `Co-authored-by` 문구가 들어가지 않도록 확인한다.
