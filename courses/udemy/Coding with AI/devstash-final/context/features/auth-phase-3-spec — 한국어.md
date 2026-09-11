# 인증 UI - 로그인, 회원가입 & 로그아웃

> 원문 [auth-phase-3-spec.md](auth-phase-3-spec.md)의 한국어 번역본입니다.

## 개요 (Overview)

NextAuth 기본 페이지를 커스텀 UI로 교체합니다. 사이드바 하단의 사용자 아이콘, 이메일, 사용자 이름(username)을 업데이트합니다.

## 요구사항 (Requirements)

### 로그인 페이지 (`/sign-in`)

- 이메일과 비밀번호 입력 필드
- "Sign in with GitHub" 버튼
- 회원가입(register) 페이지로의 링크
- 폼 검증(form validation) 및 에러 표시

### 회원가입 페이지 (`/register`)

- 이름, 이메일, 비밀번호, 비밀번호 확인 필드
- 폼 검증 (비밀번호 일치, 이메일 형식)
- `/api/auth/register`로 제출(submit)
- 성공 시 로그인 페이지로 리다이렉트

### 사이드바 하단 (Bottom Of Sidebar)

- 사용자 아바타 표시 (GitHub 이미지 또는 이니셜 폴백(initials fallback))
- 사용자 이름 표시
- 아바타 클릭 시 "Sign out" 링크가 있는 드롭다운/드롭업(dropdown/up)
- 아이콘 클릭 시 "/profile"로 이동해야 함

## 참고 (Notes)

### 아바타 로직 (Avatar Logic)

- 사용자가 `image`를 가지고 있으면 (GitHub에서): 그것을 사용
- 그렇지 않으면: 이름에서 이니셜을 생성 (예: "Brad Traversy" → "BT")

### 이니셜 컴포넌트 (Initials Component)

두 경우를 모두 처리하는 재사용 가능한 아바타 컴포넌트를 생성합니다.

## 테스트 (Testing)

1. `/sign-in`으로 이동 - 커스텀 페이지가 렌더링되는지 확인
2. GitHub로 로그인 - 플로우가 동작하는지 확인
3. 이메일/비밀번호로 로그인 - 플로우가 동작하는지 확인
4. 아바타가 상단 바(top bar)에 표시되는지 확인 (GitHub 이미지 또는 이니셜)
5. 아바타 클릭 - 드롭다운이 나타나는지 확인
6. "Sign out" 클릭 - 로그아웃 및 리다이렉트 확인
7. `/register`로 이동 - 새 계정 생성 - 로그인 페이지로 리다이렉트되는지 확인
