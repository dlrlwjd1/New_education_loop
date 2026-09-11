# 인증 자격 증명 - 이메일/비밀번호 Provider

> 원문 [auth-phase-2-spec.md](auth-phase-2-spec.md)의 한국어 번역본입니다.

## 개요 (Overview)
회원가입(registration)을 포함한 이메일/비밀번호 인증을 위한 Credentials 프로바이더(provider)를 추가합니다.

## 요구사항 (Requirements)
- 해싱(hashing)에 bcryptjs를 사용합니다 (이미 설치됨)
- 아직 없다면 마이그레이션(migration)을 통해 User 모델에 password 필드를 추가합니다
- `auth.config.ts`를 Credentials 프로바이더 플레이스홀더(placeholder)로 업데이트합니다
- `auth.ts`를 업데이트하여 bcrypt 검증(validation)으로 Credentials를 오버라이드(override)합니다
- `/api/auth/register`에 회원가입 API 라우트를 생성합니다

## 회원가입 API 라우트 (Registration API Route)
`POST /api/auth/register`
- 입력받기: name, email, password, confirmPassword
- 비밀번호 일치 검증
- 사용자가 이미 존재하는지 확인
- bcryptjs로 비밀번호 해싱
- 데이터베이스에 사용자 생성
- 성공/에러 응답 반환

## 참고 (Notes)
### 분할 패턴에서의 Credentials Provider (Credentials Provider in Split Pattern)
- `auth.config.ts`: `authorize: () => null` 플레이스홀더로 Credentials 프로바이더 추가
- `auth.ts`: 실제 bcrypt 검증 로직으로 Credentials 프로바이더 오버라이드

## 테스트 (Testing)
1. curl로 회원가입 테스트:
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","password":"password123","confirmPassword":"password123"}'
```
2. `/api/auth/signin`으로 이동
3. 이메일/비밀번호로 로그인
4. `/dashboard`로 리다이렉트되는지 확인
5. GitHub OAuth가 여전히 동작하는지 확인

## 참고 자료 (References)
- Credentials 프로바이더: https://authjs.dev/getting-started/authentication/credentials
