# Running the Code Scanner Sub-Agent

## 개요
- 이전 강의에서 만든 `code-scanner` sub-agent를 실제로 실행해 codebase audit 결과를 받는 강의.
- Sub-agent 결과는 참고 자료로 보고, false positive와 아직 구현하지 않은 기능 관련 지적은 걸러낸다.
- Low-risk quick wins만 feature workflow로 반영하고, migration과 Vercel deployment까지 확인한다.

## 내용

### Code scanner 실행 전 태도
Code scanner는 light audit 용도다.

주의:
- 결과를 그대로 모두 반영하지 않기
- false positive 가능성 있음
- 아직 구현하지 않은 기능을 issue로 보고할 수 있음
- 프로젝트마다 결과가 달라질 수 있음
- Next.js를 잘 모르면 결과를 이해하기 어려울 수 있음

핵심은 sub-agent 사용법을 배우는 것이고, 모든 제안을 무조건 고치는 것이 아니다.

### Sub-agent 호출
Prompt에서 sub-agent를 명시적으로 호출한다.

```text
Use the code-scanner subagent to check the entire code base and report your findings.
```

Sub-agent의 codebase exploration은 별도 context window에서 진행된다.
Main conversation에는 최종 report만 들어온다.

이것이 sub-agent의 주요 장점이다.

### Scanner 결과 예시
강사가 받은 findings:

- Critical: authentication 없음
- Database pool config 없음
- Missing indexes
- bcrypt cost factor
- N+1 query 가능성
- unused mock data
- missing error boundary
- duplicate icon map
- insufficient filtering
- duplicate date formatting
- no rate limiting
- hard-coded color values

하지만 이 중 일부는 false positive거나 아직 구현하지 않은 기능이다.

### False positive 걸러내기
예:
- authentication은 아직 구현 전이므로 issue로 다루지 않음
- `.env` leak 같은 지적은 `.gitignore` 확인 후 무시 가능
- Prisma connection setup은 docs 권장 방식이면 당장 수정하지 않음
- bcrypt rounds 12는 충분하다고 판단
- mock data는 course reference로 남기고 싶음

Sub-agent가 제안했다고 모두 고치지 않는다.
개발자가 판단해야 한다.

### Quick wins feature 만들기
Low-risk 변경만 feature로 묶는다.

Prompt:

```text
Add a new feature to @context/current-feature.md with any quick wins from the list,
meaning little to no risk.
Authentication has not been implemented yet, so do not add that.
```

처음 goals에 mock data 삭제가 포함되었지만, 강사는 이를 제외한다.

추가 지시:

```text
Leave the mock data file.
For the N+1 issue, do not use any raw SQL.
Stick to Prisma conventions.
```

### Quick wins에 포함한 항목
반영한 개선:
- N+1 query 개선
- database indexes 추가
- duplicate icon map centralized
- shared date utility 추가
- loading state 추가
- error boundary 추가
- query limit validation 추가
- unsafe icon fallback 개선

제외:
- authentication
- unused mock data 삭제
- raw SQL 기반 최적화

### /feature start
Current feature가 준비되면 feature workflow를 실행한다.

```text
/feature start
```

추가 지시:

```text
Make sure you use migrations for the indexes because we need to sync the dev and prod branches.
```

AI는 feature branch를 만들고 status를 `in progress`로 변경한다.

### N+1 query 개선
Collections query에서 nested include가 무거웠기 때문에 개선한다.

수정 예:
- `_count` 사용
- sample limit 추가
- Prisma convention 유지
- raw SQL 사용하지 않음

### Database indexes와 migration
Schema에 indexes를 추가한다.

예:
- `isPinned`
- `isFavorite`
- `updatedAt`

중요:
- schema 변경이므로 반드시 migration 생성
- `prisma migrate dev --name add-query-indexes`
- migration file을 Git에 포함
- Vercel deploy 시 `prisma migrate deploy`가 production DB에 적용

### Shared icon map
여러 파일에 중복되던 icon mapping을 하나로 모은다.

예상 위치:

```text
src/constants/item-types.ts
```

적용 대상:
- sidebar
- mobile sidebar
- item card
- 기타 item type icon을 쓰는 component

### Shared date utility
중복 date formatting logic을 utility로 분리한다.

예상 위치:

```text
src/utils/date.ts
```

Function 예:

```ts
formatRelativeDate()
```

이를 item card 등에서 import해 사용한다.

### Loading state
Next.js route에 loading UI를 추가한다.

파일:

```text
src/app/dashboard/loading.tsx
```

ShadCN Skeleton component를 사용해 content loading 중 skeleton을 보여준다.

### Error boundary
Next.js error boundary를 추가한다.

파일:

```text
src/app/dashboard/error.tsx
```

역할:
- dashboard route error 처리
- user-friendly fallback UI 표시
- error logging

### Query limit validation
DB query function에 max limit을 둔다.

예:

```text
MAX_QUERY_LIMIT = 100
```

목적:
- abuse 방지
- 너무 많은 data fetch 방지

### Build와 manual test
변경 후 build 실행:

```bash
npm run build
```

브라우저에서 `/dashboard` 확인:
- UI 정상 표시
- console error 없음
- server console error 없음
- loading/error boundary 파일 추가 후 문제 없음

### /feature review
Feature complete 전 review를 실행한다.

```text
/feature review
```

Review 결과:
- goals met
- no scope creep
- ready to complete

### /feature complete
Feature 완료:

```text
/feature complete
```

작업:
- stage changes
- commit
- merge to main
- push main
- delete feature branch
- current feature reset
- history 추가

AI가 commit message에 `Co-authored-by Claude`를 넣으면 거절한다.

```text
Do not add Claude as an author.
```

### Vercel deployment issue
Main push 후 Vercel이 자동 deploy한다.

문제:
- production deploy 중 database timeout 발생
- Neon serverless cold start로 migration이 timeout될 수 있음

에러 요지:

```text
Database server was reached but timed out.
```

AI의 판단:
- Neon cold start timeout issue
- DB가 warm해졌으니 redeploy하면 될 수 있음
- 필요하면 migration timeout 관련 environment variable 추가

### Vercel environment variable 추가와 redeploy
Vercel project settings에서 environment variable을 추가한다.

위치:

```text
Vercel -> Project -> Settings -> Environment Variables
```

그 다음 latest deployment를 redeploy한다.

```text
Deployments -> Redeploy
```

두 번째 deploy는 성공한다.

### Production migration 확인
Neon production branch의 `_prisma_migrations` table을 확인한다.

확인:
- initial migration
- add query indexes migration

또는 Prisma command:

```bash
npx prisma migrate status
```

Drift가 있으면 이 command에서 확인할 수 있다.

### 다음 단계
이제 sub-agent 생성과 실행 workflow를 경험했다.

다음 주제는 MCP(Model Context Protocol)다.

## 예시

Code scanner workflow:

```text
Use code-scanner subagent
  -> Review findings critically
  -> Pick low-risk quick wins
  -> Update current-feature.md
  -> /feature start
  -> Add indexes through migration
  -> Refactor duplicate code
  -> Add loading/error boundary
  -> npm run build
  -> /feature review
  -> /feature complete
  -> Vercel deploy
  -> Fix/retry deployment if needed
```

## 요약
- Code scanner sub-agent는 codebase audit에 유용하지만, 결과를 그대로 믿으면 안 된다.
- 실제 issue와 false positive, 아직 구현하지 않은 기능을 구분해야 한다.
- Low-risk quick wins만 feature로 묶어 반영했다.
- Database index는 migration으로 추가해 production DB와 sync되도록 했다.
- Vercel deploy에서 Neon cold start timeout이 생길 수 있고, redeploy/환경 변수로 해결할 수 있다.
