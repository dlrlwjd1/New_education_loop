# Authentication Audit and Cleanup

## 개요
- Authentication 기능 구현 후 보안 관점의 quick audit을 수행한다.
- 일반 code scanner가 아니라 NextAuth v5 인증 코드에 특화된 sub-agent를 만든다.
- Audit 결과를 `docs/audit-results`에 markdown으로 남기고, 발견된 개선점 중 일부를 바로 반영한다.

## 내용

### 왜 인증 전용 audit agent가 필요한가
이미 code scanner sub-agent가 있지만, 그것은 codebase 전체를 보는 일반 scanner다.

이번에는 인증 코드만 집중적으로 점검한다.

특히 NextAuth는 많은 보안 처리를 자동으로 해주기 때문에, NextAuth가 이미 처리하는 항목을 문제로 보고하면 false positive가 된다.

따라서 강사는 NextAuth v5를 이해하는 authentication audit 전용 sub-agent를 만들었다.

### Auth auditor prompt
Resource files의 section 9 prompts에 있는 `auth audit sub-agent prompt`를 사용한다.

Prompt 요지:

```text
I just added authentication with NextAuth v5,
including credentials and GitHub providers.
Create a sub-agent that audits all auth-related code
for security issues.
```

Agent가 집중할 영역:
- NextAuth가 자동 처리하지 않는 custom auth code
- email verification flow
- password reset flow
- profile page/account actions
- password handling
- token handling
- rate limiting
- input validation

Agent가 피해야 할 것:
- NextAuth가 이미 처리하는 CSRF protection
- NextAuth token validation
- secure cookie flags 같은 기본 처리
- 실제 문제가 아닌 추측성 false positive

### Audit 결과 파일
강사는 audit 결과를 project documentation으로 남기고 싶어 했다.

출력 위치:

```text
docs/audit-results/auth-security-review.md
```

이런 문서는 개발 context와는 별도로 project의 상태를 기록하는 자료로 사용할 수 있다.

예:
- auth security review
- CRUD 구조 설명
- route 문서
- architecture note

### Sub-agent 생성
Prompt를 실행하면 다음 파일이 만들어진다.

```text
.claude/agents/auth-auditor.md
```

Agent 설명:
- Next.js + NextAuth v5 인증 보안 감사 전문가
- custom auth code의 취약점 식별
- false positive 최소화
- 발견 사항을 severity별로 정리
- pass checks도 함께 기록

### Audit 실행
Sub-agent를 만든 뒤 다음처럼 요청한다.

```text
Run an audit on all auth-related code.
```

명시적으로 agent 이름을 부르지 않아도, description이 잘 작성되어 있으면 Claude가 auth auditor를 선택한다.

Audit 중에는 필요한 경우 web search도 사용한다.

강의에서는 다음 내용을 확인하기 위해 검색했다.
- bcrypt 권장 cost factor
- bcrypt password 최대 길이
- denial of service 관련 보안 고려사항

### Audit findings
Audit 결과는 전반적으로 solid foundation이지만 production 전에 보완할 항목이 있다고 정리되었다.

주요 findings:
- auth endpoints에 rate limiting 없음
- bcrypt rounds가 10으로 설정되어 있음
- token verification에 race condition 가능성
- password complexity requirement가 약함
- password reset 후 기존 session invalidation 고려 필요

강사는 이 중 rate limiting은 다음에 구현하기로 하고, bcrypt rounds는 바로 확인했다.

### Pass checks
Audit에는 잘 구현된 항목도 포함된다.

Pass examples:
- password hashing 사용
- protected endpoint에서 session validation 수행
- user input이 아니라 session의 user id 사용
- password 변경 시 current password 요구
- account deletion에서 cascade delete 고려

이런 pass check는 무엇이 제대로 되어 있는지 확인하게 해주므로, 단순히 문제만 나열하는 audit보다 유용하다.

### Rate limiting
가장 중요한 개선점은 rate limiting이었다.

Rate limiting이 없으면 다음 endpoint가 반복 요청에 노출된다.

- register
- login
- forgot password
- reset password
- resend verification

위험:
- brute force attack
- credential stuffing
- email spam
- denial of service

강사는 다음 강의에서 rate limiting을 구현하기로 했다.

### Cleanup command 실행
Audit 후 cleanup command도 실행했다.

Cleanup이 확인한 항목:
- history/current feature 순서
- console log 존재 여부
- unused imports
- stale TODO comments
- orphaned files
- context files와 project state 일치 여부
- environment variables 일치 여부
- `@ts-ignore` comments

처음에는 unused import로 보이는 항목이 보고되었지만, 실제 파일을 읽어 보니 사용 중인 import였다.

이것은 AI audit/cleanup 결과가 항상 정답은 아니라는 좋은 예시다.

### False positive 처리
강사는 cleanup 결과를 그대로 적용하지 않았다.

예:
- `mock-data.ts`는 현재 import되지 않아 orphaned file처럼 보일 수 있음
- 하지만 프로젝트 기록/참고용으로 유지하고 싶어서 삭제하지 않음
- unused import로 보고된 icon들도 실제로는 사용 중이었음

중요한 태도:
- AI가 제안한다고 모두 적용하지 않는다.
- 실제 code를 확인하고 판단한다.
- 프로젝트 의도에 맞는 변경만 선택한다.

### Bcrypt rounds 수정
Audit에서 bcrypt rounds가 낮다고 보고되었다.

강사는 처음에는 이미 12라고 생각했지만, code search로 확인해 보니 실제로는 10이었다.

그래서 password hash rounds를 12로 올렸다.

예:

```ts
bcrypt.hash(password, 12)
```

이 변경은 feature 단위 작업은 아니지만, audit에서 발견된 간단한 보안 개선으로 바로 반영했다.

### Audit 결과 commit
강사는 다음 변경을 stage/commit/push했다.

- auth security review markdown
- bcrypt rounds 변경
- 관련 cleanup 결과

Audit 문서는 다음에 같은 agent를 다시 실행하면 overwrite하고 새 날짜로 갱신할 수 있다.

## 예시

Auth auditor 생성 목표:

```text
Audit auth-related code for actual security issues
that NextAuth v5 does not handle automatically.
```

Audit output path:

```text
docs/audit-results/auth-security-review.md
```

대표 finding:

```text
High: No rate limiting on authentication endpoints.
```

Bcrypt rounds 개선:

```ts
await bcrypt.hash(password, 12);
```

## 요약
- Authentication 구현 후에는 전용 audit agent로 보안 점검을 수행한다.
- NextAuth가 자동 처리하는 항목은 false positive로 보고하지 않도록 agent prompt에 명시한다.
- Audit 결과는 `docs/audit-results`에 문서로 남긴다.
- 가장 중요한 개선점은 auth endpoints의 rate limiting이었다.
- AI cleanup/audit 결과는 그대로 믿지 말고 실제 code를 확인한 뒤 선택적으로 반영해야 한다.
