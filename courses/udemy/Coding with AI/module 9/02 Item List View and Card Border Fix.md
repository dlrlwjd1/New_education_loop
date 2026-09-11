# Item List View and Card Border Fix

## 개요
- Item list page를 만들기 전에 dashboard item card의 왼쪽 color border 누락을 수정한다.
- `/items/[type]` dynamic route를 만들어 type별 item listing page를 구현한다.
- Server component에서 type별 item을 fetch하고 responsive grid로 표시한다.

## 내용

### Item card border 수정
강사는 dashboard의 item card에 type color를 나타내는 왼쪽 border가 빠진 것을 발견했다.

Collection card에는 이미 border가 있었기 때문에 item card도 동일하게 맞춘다.

작은 UI 수정이라 `/feature` workflow를 쓰지 않고 직접 prompt로 처리했다.

Prompt 요지:

```text
The item cards on the dashboard should have the correct color as a left border,
just like the collection cards.
```

변경 내용:
- item card에 left border style 추가
- item type color를 border color로 사용

### 이전 research 작업 commit
Card border 수정 전후로 이전 강의에서 만든 research docs와 skill 관련 파일이 아직 commit되지 않았다.

강사는 border 수정과 research docs를 함께 commit해 main을 최신 상태로 만든 뒤 item list feature를 시작했다.

### Item list view spec
다음 feature는 item type별 listing page다.

Spec file:

```text
item-list-view-spec.md
```

요구사항:
- dynamic route at `/items/[type]`
- type별 item fetch
- item card grid 표시
- card는 item type color를 왼쪽 border로 표시
- 기존 codebase pattern 준수
- medium 이상에서 2 columns grid 사용

강사는 spec을 수정해 responsive grid를 명확히 지정했다.

```text
Two columns on medium and up
```

### Dynamic route
Item type마다 route folder를 따로 만들지 않는다.

대신 dynamic segment를 사용한다.

구조:

```text
app/items/[type]/page.tsx
```

예:

```text
/items/snippets
/items/prompts
/items/commands
/items/notes
```

### Database helper 추가
Type별 item을 가져오기 위해 `src/lib/db/items.ts`에 helper를 추가한다.

예:

```ts
getItemsByType(typeName)
```

역할:
- 현재 user의 item만 fetch
- type name으로 filter
- listing card에 필요한 data 반환

기존 dashboard는 모든 type의 item을 보여주지만, list page는 특정 type만 보여줘야 한다.

### Page data fetching
`/items/[type]` page는 server component다.

처리 흐름:
1. session 확인
2. 로그인하지 않았으면 sign-in으로 redirect
3. `getItemsByType` 호출
4. stats/count/sidebar data fetch
5. dashboard layout 안에 item grid rendering

이 구조는 기존 dashboard data fetching pattern을 따른다.

### Empty state
특정 type의 item이 없으면 empty state를 보여준다.

예:

```text
No notes created yet
```

### 테스트와 review
Build를 실행한 뒤 browser에서 직접 확인한다.

확인:
- snippets page에 snippets만 표시
- prompts page에 prompts만 표시
- commands page에 commands만 표시
- notes처럼 data가 없는 type은 empty state 표시
- grid가 2 columns로 보임

`/feature review` 중 unused variable이 발견되어 제거했다.

예:

```text
currentType variable declared but unused
```

수정 후 build를 다시 실행하고 `/feature complete`를 진행했다.

### 다음 단계
Item list page는 아직 card 클릭 시 상세 내용을 보여주지 않는다.

다음 단계:
- item card 클릭
- 빠른 drawer open
- drawer에서 full item detail 표시

## 예시

Dynamic route:

```text
app/items/[type]/page.tsx
```

URL 예:

```text
/items/snippets
/items/links
```

Data helper:

```ts
getItemsByType("snippets");
```

Grid 요구사항:

```text
1 column on small screens
2 columns on medium and up
```

## 요약
- Dashboard item card에 type color left border를 추가했다.
- `/items/[type]` dynamic route로 item type별 list page를 만들었다.
- Type별 fetch는 `src/lib/db/items.ts` helper에서 처리한다.
- Page는 server component로 유지하고 session check와 redirect를 포함한다.
- Build와 feature review를 통해 unused variable을 정리했다.
