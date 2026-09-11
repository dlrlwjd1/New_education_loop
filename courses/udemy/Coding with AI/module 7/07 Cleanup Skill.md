# Cleanup Skill

## 개요
- 본격적인 sub-agent code review로 넘어가기 전에, 간단한 housekeeping task를 수행하는 `/cleanup` skill을 추가하는 강의.
- Cleanup skill은 unused imports, console logs, stale comments, current feature history order 같은 작은 문제를 점검한다.
- `check`는 보고만 하고, `run` 또는 `fix`는 발견 항목을 보여준 뒤 사용자가 선택한 것만 수정한다.

## 내용

### Cleanup skill의 목적
Sub-agent는 다음 강의에서 code review, security issue, optimization, component split 같은 더 깊은 검토에 사용할 예정이다.

이번 `/cleanup` skill은 더 가벼운 housekeeping 용도다.

예:
- unused imports 확인
- unnecessary console logs 확인
- stale TODO comments 확인
- orphaned/unused files 확인
- current feature history order 확인
- env variable consistency 확인

### Skill 추가
Course resources의 Skills folder에서 Cleanup folder를 가져온다.

Project 위치:

```text
.claude/
  skills/
    cleanup/
      SKILL.md
```

Claude Code를 restart하면 slash command로 사용할 수 있다.

```text
/cleanup
/cleanup check
/cleanup run
```

### Front matter
Cleanup skill metadata:

```md
---
name: cleanup
description: Cleanup project housekeeping tasks
argument-hint: check|run
---
```

### check와 run
Argument:

- no argument: check와 동일
- `check`: 발견사항만 보고, 수정하지 않음
- `run` 또는 `fix`: 발견사항을 번호로 보여주고, 어떤 것을 고칠지 물어봄

중요:
- `run`이어도 바로 수정하지 않음
- 먼저 findings를 보여줌
- user가 번호, all, none 중 선택
- 선택한 것만 수정

### Cleanup checks
Skill이 수행하는 점검:

1. `current-feature.md` history가 oldest to newest 순서인지 확인
2. 불필요한 `console.log` 찾기
3. unused imports 찾기
4. stale TODO comments 확인
5. orphaned or unused files 찾기
6. context files가 실제 project state와 맞는지 확인
7. `.env.production`과 `.env`의 variable names 비교
8. stale `@ts-ignore` comments 찾기

### current-feature.md history order
기존 workflow에서 AI가 history entry를 맨 위에 추가하는 일이 있었다.

강사는 history를 다음 순서로 유지하고 싶어 한다.

```text
oldest -> newest
```

Cleanup skill은 이 순서를 확인한다.

### console.log cleanup
AI가 debugging 중 `console.log`를 추가하고 지우지 않을 수 있다.

Cleanup skill은 불필요한 logs를 찾는다.

### unused imports
Unused imports는 lint/build에서 잡히기도 하지만, cleanup skill에서도 점검한다.

강의 예시에서는 lint가 통과했다.

### stale TODO comments
오래된 TODO가 남아 있으면 실제 task인지, 이미 끝난 흔적인지 모호해진다.

Cleanup skill이 stale TODO를 찾아 알려준다.

### orphaned or unused files
이제 쓰지 않는 file을 찾는다.

강의 예시:

```text
src/lib/mock-data.ts
```

이 파일은 database data로 전환한 뒤 더 이상 app에서 사용하지 않는다.
하지만 강사는 course final repo에서 참고용으로 남기고 싶어 삭제하지 않는다.

### context files와 project state
AI workflow에서는 context files가 중요하다.

Cleanup skill은 project overview나 context docs가 실제 code 상태와 크게 어긋나는지 확인한다.

### .env.production consistency
강사는 Vercel production variables를 참고하기 위해 `.env.production`을 local에 둔다.

이 파일이 실제 app에서 쓰이는 것은 아니지만, `.env`와 같은 variable names를 갖고 있는지 확인한다.

예:
- `.env`에 `DATABASE_URL`이 있으면
- `.env.production`에도 `DATABASE_URL`이 있어야 함

값은 다를 수 있다.
중요한 것은 variable names가 맞는지다.

### @ts-ignore comments
`@ts-ignore`는 임시 회피로 남았다가 stale해질 수 있다.

Cleanup skill은 이런 comments를 찾아 알려준다.

### /cleanup run 실행
실행:

```text
/cleanup run
```

Skill은 먼저 check를 수행하고 findings를 보여준다.

강의 결과:
- current feature history order 정상
- console logs 없음
- unused imports 없음
- stale TODO 없음
- context files match
- `.env`와 `.env.production` variable names 일치
- stale `@ts-ignore` 없음
- orphaned file 하나 발견: `mock-data.ts`

Cleanup skill이 삭제할지 물어봤지만, 강사는 참고용으로 남기기 위해 다음처럼 답한다.

```text
none
```

### 변경사항 commit
Cleanup skill 추가 등 문서/skill 변경사항을 commit한다.

요청:

```text
Commit all files as document updates and push to main.
```

AI가 commit message에 Claude co-author를 넣으려 하면 거절하고 다시 지시한다.

```text
Do not add Claude to the authors.
```

### 다음 단계
이제 `/cleanup` command를 언제든 실행할 수 있다.

다음 강의에서는 sub-agents를 사용해 더 깊은 code review와 분석을 시작한다.

## 예시

Cleanup skill 사용:

```text
/cleanup
/cleanup check
/cleanup run
```

Run mode flow:

```text
/cleanup run
  -> report findings
  -> ask which items to fix
  -> user responds all / none / item numbers
  -> fix selected items only
```

## 요약
- `/cleanup` skill은 codebase housekeeping을 위한 가벼운 점검 command다.
- `check`는 보고만 하고, `run`은 사용자 선택 후 수정한다.
- current feature history order, console logs, unused imports, stale TODO, orphan files, env variable consistency 등을 확인한다.
- 강의 예시에서는 `mock-data.ts`가 unused로 잡혔지만 course reference를 위해 남겼다.
- 다음은 sub-agent 기반 code review로 넘어간다.
