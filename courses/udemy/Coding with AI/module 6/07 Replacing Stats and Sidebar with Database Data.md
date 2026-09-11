# Replacing Stats and Sidebar with Database Data

## 개요
- Dashboard에서 남아 있던 mock data 영역인 stats와 sidebar를 database data로 교체하는 강의.
- 작은 feature 단위로 나눠 진행하는 이유와, AI가 지시를 오해했을 때 prompt를 정확히 고쳐야 하는 점을 보여준다.
- 이 작업을 마치면 dashboard UI의 core data는 모두 Neon/Prisma database에서 온다.

## 내용

### 왜 계속 작게 나누는가
Collections, items, sidebar, stats를 한 번에 모두 바꿀 수도 있었다.

하지만 강사는 작은 chunk로 나누는 방식을 선호한다.

이유:
- 더 구체적으로 지시 가능
- AI가 한 번에 너무 많은 코드를 바꾸지 않음
- 변경 사항을 더 잘 이해하고 검증 가능
- 문제가 생겼을 때 원인을 좁히기 쉬움
- 전체적으로 더 통제된 workflow가 됨

나중에 code review와 subagent를 사용해 unused variables/imports, component 분리, 구조 개선 등을 점검할 예정이다.

### context clear
새 feature를 시작하기 전 context를 clear한다.

강사는 feature마다 fresh context로 시작하는 것을 선호한다.

```text
/clear
```

### stats sidebar spec
Resource file에서 spec을 가져온다.

```text
context/features/stats-sidebar-spec.md
```

Spec 요구사항:
- main area stats를 mock data에서 database data로 교체
- sidebar item types를 system item types database data로 표시
- sidebar collections를 database data로 표시
- 기존 디자인과 layout 유지
- item type link는 `/items/{typeName}` 형태
- collections 아래에 View All Collections link 추가
- favorite collections는 star icon 유지
- recent collections는 dominant item type color dot 표시

### prompt wording 주의
처음에 강사가 다음처럼 요청하자 AI가 바로 구현을 시작하려 했다.

```text
Add a new feature from ...
```

강사의 의도는 `current-feature.md` 업데이트뿐이었지만, "add a new feature"가 구현 요청처럼 해석될 수 있었다.

그래서 prompt를 더 명확히 바꾼다.

```text
Update the current feature in @context/current-feature.md
to @context/features/stats-sidebar-spec.md.
Set the status to in progress.
```

교훈:
- AI가 애매한 prompt를 다르게 해석할 수 있음
- strict workflow를 원하면 "update current feature only"처럼 명확히 말하기
- 원하는 단계가 아니면 멈추고 다시 지시하기

### branch 생성과 구현
current feature가 업데이트된 뒤 구현한다.

```text
Create a new branch and implement.
```

AI가 만든 todo list:
- stats/sidebar용 database functions 추가
- stat cards component를 props 기반으로 변경
- sidebar data를 database data로 교체
- colored circles 추가
- View All Collections link 추가
- build 실행

### Dashboard stats data
Stats는 database data를 기반으로 계산한다.

예상 function:

```ts
getDashboardStats()
```

추가되는 type:
- item type with count
- dashboard stats interface

Stats 예:
- total items
- collections count
- favorite items
- favorite collections

강사는 stats function이 `items.ts`에 들어간 것을 보고 collections count도 있으니 애매하다고 느끼지만, 별도 stats DB file을 만들 정도는 아니라고 판단한다.

### Sidebar collections data
Sidebar collections는 `src/lib/db/collections.ts` 쪽에 추가한다.

예상 function:

```ts
getSidebarCollections()
```

반환 data:
- favorite collections
- recent collections
- dominant item type color
- item count
- collection id/name

Dominant color는 collection 안에서 가장 많이 사용된 item type 기준으로 계산한다.
이 로직은 여러 곳에서 쓰일 수 있으므로 나중에 utility로 분리할 수도 있다.

### StatCards component 업데이트
기존 stat cards는 mock/hard-coded data를 사용했다.

수정 후:
- props로 database stats를 받음
- dashboard page에서 fetch한 stats를 전달
- 기존 card design 유지

### Dashboard page 업데이트
`page.tsx` 또는 server component에서 필요한 database functions를 가져온다.

가져오는 data:
- dashboard stats
- item types with counts
- sidebar collections
- existing collections/items data

그리고 dashboard layout/component에 props로 전달한다.

### Dashboard layout과 sidebar props
Dashboard layout은 sidebar에 필요한 data를 props로 받는다.

예:
- item types with counts
- sidebar collections
- user data

Sidebar는 더 이상 mock data를 import하지 않는다.

### Mobile sidebar cleanup
Desktop sidebar뿐 아니라 mobile sidebar에도 mock data가 남아 있을 수 있다.

AI가 mobile sidebar의 남은 mock imports/elements를 정리한다.

### build와 manual test
구현 후 build를 실행한다.

```bash
npm run build
```

브라우저에서 확인:
- item types가 database에서 옴
- item type counts가 실제 DB data와 일치
- stats가 database counts 기반
- sidebar recent collections가 database data 기반
- View All Collections link 표시
- recent collection에 colored dot 표시

### item type 순서 조정
처음에는 item types 순서가 마음에 들지 않았다.

강사는 원하는 순서를 지정한다.

```text
Can you reorder the item types in the sidebar?
I want snippets, prompts, commands, notes, files, images, and links.
```

AI는 order array를 만들어 sidebar 표시 순서를 조정한다.

### favorite collections가 안 보이는 문제
Sidebar에서 favorite collections가 사라진 것처럼 보였다.

확인해보니 seed data에서 모든 collection의 `isFavorite` 값이 false였다.
즉 UI 문제가 아니라 data 문제였다.

AI가 seed file을 수정해 일부 collection을 favorite으로 표시한다.

예:
- AI Workflows
- React Patterns

그 다음 seed를 다시 실행한다.

결과:
- favorite collections가 sidebar에 표시됨
- star icon 유지

### current-feature.md history 순서
Feature 완료 처리 중 AI가 history entry를 맨 위에 추가하려 했다.

강사는 history를 earliest to latest 순서로 유지하고 싶어 한다.

수정 지시:

```text
The current feature should go to the bottom of the history, not the top.
```

교훈:
- 사소해 보여도 consistency를 계속 확인해야 함
- AI가 context 규칙을 항상 완벽히 지키지는 않음
- diff를 보고 승인 전에 고치기

### Git 정리
마지막으로 feature branch를 main에 반영한다.

```text
Commit to feature,
merge feature to main,
push main,
delete feature.
```

이제 dashboard UI는 database data로 동작한다.

### 다음 단계
Dashboard data 전환이 끝났으므로 다음 단계는 production 배포다.

다음 강의 목표:
- Vercel deployment
- production environment setup
- GitHub push 시 continuous deployment

## 예시

Stats/sidebar database 전환 흐름:

```text
/clear
  -> Update current-feature.md from stats-sidebar-spec.md
  -> Create feature branch
  -> Add getDashboardStats()
  -> Add getSidebarCollections()
  -> Update stat cards props
  -> Update dashboard page data fetching
  -> Update sidebar/mobile sidebar props
  -> npm run build
  -> Reorder item types
  -> Fix seed favorites
  -> Rerun seed
  -> Complete feature, history at bottom
  -> Commit, merge, push, delete branch
```

## 요약
- Stats와 sidebar를 database data로 교체해 dashboard의 core mock data 제거를 마무리한다.
- Prompt가 애매하면 AI가 바로 구현을 시작할 수 있으므로, current feature 업데이트와 구현 단계를 명확히 분리한다.
- Sidebar item types는 DB data 기반으로 표시하고, 원하는 순서로 정렬한다.
- Favorite collections가 안 보인 원인은 UI가 아니라 seed data였고, seed를 수정해 해결한다.
- 다음 단계는 Vercel 배포와 production 환경 설정이다.
