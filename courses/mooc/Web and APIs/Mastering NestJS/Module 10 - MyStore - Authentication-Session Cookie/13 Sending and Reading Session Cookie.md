# Sending and Reading Session Cookie

## 개요
- 로그인 상태를 `response.cookie` 대신 `request.session` 객체에 저장하도록 바꾸고, 세션 클래스에 커스텀 속성을 추가해 여러 컨트롤러에서 로그인 여부를 판단하는 강의.

## 내용
### 쿠키 대신 세션 객체 사용
- 기존에는 `response.cookie`로 `isLoggedIn` 값을 직접 클라이언트에 보내고 있었는데, 이는 안전한 인증 방식이 아니라고 다시 언급한다.
- 이를 개선하기 위해 요청(request) 데코레이터와 `Request` 타입의 request 프로퍼티를 받아, `response.cookie` 대신 `request.session.isLoggedIn`을 `true`로 설정하는 방식으로 바꾼다.

### 세션 클래스에 커스텀 속성 추가하기
- `request.session`에 `isLoggedIn`처럼 정의되지 않은 커스텀 속성(custom property)을 바로 설정하려 하면 타입 오류가 발생한다.
- 해결 방법: `main.ts`에서 열었던 `express-session` 모듈의 타입 선언 파일(declaration file)로 이동해 `Session` 클래스를 찾는다.
- `Session` 클래스에 `isLoggedIn` 속성을 `string` 타입으로 추가한다.
- 이렇게 하면 유저 컨트롤러(user controller)에서 발생하던 오류가 사라진다.

### 로그인·로그아웃 로직에 반영
- 잘못된 비밀번호(invalid password), 잘못된 사용자명(invalid username) 처리 로직에도 동일하게 `session.isLoggedIn` 값을 설정한다.
- 로그아웃(logout) 처리에서는 `session.isLoggedIn`을 `false`로 설정한다.
- 로그인 처리에서는 `isLoggedIn`이라는 상수(constant)를 만들어 `request.session.isLoggedIn` 값을 할당하고, 이를 기반으로 쿠키를 반환한다.
- `isLoggedIn`의 기본값(default)은 `false`로 둔다. 쿠키 값에 따라 로그인 페이지 렌더링 여부가 결정되기 때문에, 값이 없을 경우 문제가 생기지 않도록 초기 상태에서는 로그인되지 않은 것으로 간주해 로그인 페이지를 반환하는 것이 안전하다.

### 세션 쿠키 확인
- 저장 후 유효한 사용자명과 비밀번호로 로그인을 시도한다.
- 브라우저의 쿠키(cookies) 섹션을 확인하면 `connect.sid`라는 이름으로 긴 랜덤 문자열 값을 가진 세션 쿠키가 생성된 것을 볼 수 있다.
- app controller에서도 동일하게 `isLoggedIn` 상수를 만들어 `request.session.isLoggedIn` 값을 할당하고, 이를 기준으로 상품(products)을 로그인 여부에 따라 렌더링하도록 갱신한다.
- 상품 등록 페이지, 회원가입 페이지 등 나머지 메서드들에도 동일하게 세션 쿠키를 반환하는 로직을 적용한다.
- 저장 후 다시 유효한 계정으로 로그인하면, 상품 목록에 수정(edit)·삭제(delete) 옵션, 네비게이션 바(nav bar)의 상품 추가(add products) 옵션, 로그아웃 옵션 등이 세션 쿠키를 기반으로 정상적으로 나타나는 것을 확인한다.

## 예시
```typescript
// express-session 타입 선언 파일(express-session/index.d.ts) — Session 클래스에 커스텀 속성 추가
declare class Session {
  // ... 기존 속성들
  isLoggedIn: string;
}
```

```typescript
// user.controller.ts (로그인 처리)
@Post('login')
login(@Req() request: Request, @Res() response: Response, @Body() loginDto: LoginDto) {
  // 사용자명/비밀번호 검증 로직...

  // 유효하지 않은 사용자명
  request.session.isLoggedIn = false;

  // 유효하지 않은 비밀번호
  request.session.isLoggedIn = false;

  // 로그인 성공 시
  const isLoggedIn = (request.session.isLoggedIn = true);
  return response.cookie('isLoggedIn', isLoggedIn);
}

@Post('logout')
logout(@Req() request: Request) {
  request.session.isLoggedIn = false;
}
```

```typescript
// app.controller.ts (상품 목록 등 렌더링 시 세션 쿠키 반영)
@Get()
getProducts(@Req() request: Request, @Res() response: Response) {
  const isLoggedIn = request.session.isLoggedIn || false;
  return response.cookie('isLoggedIn', isLoggedIn).render('products', { isLoggedIn /* ... */ });
}
```

## 요약
- `response.cookie` 대신 `request.session`에 로그인 상태를 저장하는 방식으로 전환한다.
- 세션에 커스텀 속성을 추가하려면 `express-session` 타입 선언 파일의 `Session` 클래스를 직접 수정해야 타입 오류 없이 사용할 수 있다.
- 로그인 성공/실패, 로그아웃 등 모든 케이스에서 `session.isLoggedIn` 값을 일관되게 갱신한다.
- `isLoggedIn`의 기본값은 `false`로 두어, 값이 없을 때도 로그인 페이지가 안전하게 렌더링되도록 한다.
- 세션 쿠키는 `connect.sid`라는 이름으로 브라우저에 저장되며, 여러 컨트롤러에서 이 값을 기준으로 화면을 조건부 렌더링한다.
