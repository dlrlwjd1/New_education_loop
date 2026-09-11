# Authentication Phase 2 — Credentials Provider

## 개요
- Authentication phase 2에서는 email/password login을 위한 **Credentials provider**와 registration API를 추가한다.
- GitHub OAuth는 phase 1에서 완료했고, 이번에는 bcrypt password validation과 user registration을 구현한다.
- 구현 후 NextAuth 기본 sign-in route에서 credentials login을 직접 테스트한다.

## 내용

### Phase 1 이후 정리
Phase 1은 NextAuth base setup과 GitHub OAuth가 가장 큰 작업이었다.

강사는 phase 1 완료 후 `/feature complete`를 실행해 current feature와 Git 상태를 정리한다.

또한 feature complete action을 개선했다.
기존에는 feature branch push, main push, current feature update push 등 push가 여러 번 발생했지만, 이제는 마지막에 한 번만 push하도록 refactor했다.

### Phase 2 목표
Phase 2에서 구현할 것:
- Credentials provider 추가
- email/password login 지원
- bcrypt password validation
- registration API route 생성
- name/email/password/confirm password validation
- user exists check
- password hash 저장
- build/test

### Password field 확인
Spec에는 password field migration이 필요하면 추가하라고 되어 있다.
하지만 현재 Prisma schema의 User model에는 이미 `password` field가 있다.

따라서 새 migration은 필요하지 않다.

### bcrypt.js
Password는 plain text로 저장하지 않는다.

사용:

```text
bcrypt.js
```

이미 seed data에서 bcrypt를 설치했다면 추가 설치가 필요 없을 수 있다.

### Feature workflow
Context를 clear한 뒤 phase 2 spec을 load한다.

```text
/feature load auth-phase-2-spec.md
```

구현 시작:

```text
/feature start
```

### Credentials provider 추가
기존 auth config에는 GitHub provider가 있다.

Phase 2에서 추가:
- Credentials provider
- email field
- password field
- bcrypt compare
- user lookup
- invalid credentials handling

NextAuth default sign-in page에 GitHub button과 credentials form이 함께 표시된다.

### Registration API route
Registration endpoint를 만든다.

예상 위치:

```text
src/app/api/auth/register/route.ts
```

역할:
1. request body에서 name, email, password, confirmPassword 추출
2. required fields 검증
3. password와 confirmPassword 일치 확인
4. password length 확인
5. existing user 확인
6. bcrypt로 password hash
7. user 생성
8. success response 반환

### cURL로 registration 테스트
Build 후 registration API를 cURL로 테스트한다.

예:

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@test.com","password":"password123","confirmPassword":"password123"}'
```

성공하면 user id와 email 등 response가 돌아온다.

### Credentials sign-in 테스트
NextAuth 기본 sign-in route에서 credentials form이 보인다.

테스트:
1. cURL로 user register
2. sign-in page 열기
3. email 입력
4. password 입력
5. Sign in
6. dashboard로 redirect

예:

```text
test@test.com
password123
```

### Browser cookie 확인
로그인 후 browser Application tab에서 auth cookies를 확인한다.

이제 credentials login도 session cookie를 만든다.

### /feature review
구현 후 review 실행:

```text
/feature review
```

확인:
- credentials provider 추가됨
- registration API route 생성됨
- bcrypt validation 적용됨
- password minimum validation 있음
- no scope creep

### /feature complete
마무리:

```text
/feature complete
```

Complete action:
- branch merge
- current feature reset
- history append
- main push
- Vercel deployment trigger

### Commit message 규칙 강화
AI가 commit message에 Claude co-author를 넣으려 한다.

강사는 `CLAUDE.md`에 더 강하게 추가한다.

```text
Do not add Claude to any commit messages.
```

그래도 AI가 가끔 무시할 수 있으므로 commit 전 확인한다.

### 다음 단계
Phase 2로 credentials login과 registration API는 동작한다.

하지만 아직 실제 app UI는 없다.
현재는 NextAuth default sign-in page로 테스트 중이다.

Phase 3에서는:
- custom sign-in page
- custom register page
- sign-out UI
- sidebar user display

를 구현한다.

## 예시

Phase 2 흐름:

```text
/feature load auth-phase-2-spec.md
/feature start
  -> Add Credentials provider
  -> Add registration API route
  -> Run build
  -> Register user with curl
  -> Sign in with credentials
/feature review
/feature complete
```

## 요약
- Auth phase 2는 email/password login을 위한 Credentials provider를 추가한다.
- Registration API는 user validation, password match, bcrypt hash, duplicate email check를 처리한다.
- cURL로 user를 만들고 NextAuth 기본 sign-in page에서 credentials login을 테스트한다.
- 다음 phase에서는 실제 sign-in/register UI와 sidebar user display를 만든다.
