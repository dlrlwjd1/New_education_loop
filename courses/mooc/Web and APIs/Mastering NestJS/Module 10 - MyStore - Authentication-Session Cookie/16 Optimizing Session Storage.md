# Optimizing Session Storage

## 개요
- 잘못된 로그인 정보를 입력해도 세션이 생성되어 데이터베이스에 불필요하게 쌓이는 문제를 해결하고, 등록된(registered) 사용자에 대해서만 세션이 생성되도록 최적화하는 강의.

## 내용
### 문제 상황 — 잘못된 자격 증명에도 세션이 생성됨
- 현재는 잘못된 사용자 자격 증명(invalid user credential)을 입력해도 등록되지 않은 사용자를 위한 세션이 생성되는 결함(flaw)이 있다.
- 사용자는 유효하지 않기 때문에 로그인은 되지 않지만, 세션은 여전히 생성되고 그 데이터가 데이터베이스에 저장된다.
- 이를 고쳐서 등록된 사용자에 대해서만 세션이 생성되도록 만든다.

### session에 username, message 속성 추가
- POST 로그인 라우트(route)에서 유효한 사용자인지 확인하는 부분에 `username`과 `message`라는 커스텀 속성을 세션에 추가한다.
- 먼저 이 두 속성을 `express-session` 타입 선언 파일(declaration file)의 `Session` 클래스에 `string` 타입으로 정의한다(`isLoggedIn` 아래에 추가).

### 유효한 사용자 로그인 처리
- 사용자가 유효(valid)할 경우, `session.username`에 사용자명을 할당한다.
- 이전 메시지를 지우기 위해 `message`는 빈 문자열(empty string)로 유지한다.
- 이후 `request.session.save` 메서드를 호출해 세션을 저장한다. 이 메서드도 에러를 전달받는 콜백을 인자로 받으며, 에러가 발생하면 콘솔에 로그(log)를 남긴다.

### 잘못된 비밀번호/사용자명 처리 — 세션 생성 방지
- 잘못된 비밀번호(invalid password)인 경우에는 `request.session.destroy`를 호출해 잘못된 사용자를 위한 세션이 생성되는 것을 방지한다.
- 기존에 있던 `response.redirect`는 `destroy` 메서드의 콜백 안으로 옮긴다.
- 메시지 전달을 위해 로그인 경로(login path)로 리다이렉트할 때 쿼리(query)로 `message=invalid password. Please try again`과 `username` 값을 함께 전달한다.
- 잘못된 사용자명(invalid username)의 경우도 동일한 방식으로 처리하되, 메시지 내용만 다르게 준다.

### 로그인 GET 라우트에서 쿼리 파라미터 받기
- 로그인 페이지를 보여주는 라우트에서 쿼리 파라미터를 받기 위해 `@Query()` 데코레이터를 사용한다.
- `message` 파라미터를 `string` 타입으로, `username` 파라미터도 `string` 타입으로 받는다.
- 이 두 값을 뷰(view)로 그대로 반환(return)한다.

### 동작 확인 — 세션 미생성
- 잘못된 사용자명과 비밀번호로 로그인을 시도하면, 브라우저의 쿠키(cookies) 탭에 세션이 생성되지 않는 것을 확인한다.

### 템플릿에 메시지 표시
- 로그인 템플릿(login template)의 로그인 제목(heading) 아래에 `if message` 조건문을 추가한다.
- 조건이 참이면 `alert alert-danger form-control mb-3 p-4` 클래스와 `role="alert"`를 가진 `div`를 표시하고, 세션 쿠키로부터 전달된 `message` 변수를 바인딩(bind)한다.
- 사용자명 입력 필드는 `value` 속성에 `username` 값을 지정해 입력값이 유지되도록 한다.

### 최종 테스트
- 잘못된 사용자명을 입력하면 템플릿에 "사용자가 등록되어 있지 않다(user is not registered)"는 취지의 메시지가 표시된다.
- 등록된 사용자명과 잘못된 비밀번호를 입력하면 "잘못된 비밀번호(invalid password)" 메시지가 표시되고, 사용자명 필드는 값이 유지되는 반면 비밀번호 필드는 비워진다.
- 유효한 비밀번호를 입력하면 로그인에 성공하고 세션이 생성된다.
- 데이터베이스를 확인하면 등록된 사용자에 대한 세션 하나만 존재하는 것을 확인할 수 있다.

## 예시
```typescript
// express-session 타입 선언 파일 — Session 클래스에 속성 추가
declare class Session {
  isLoggedIn: string;
  username: string;
  message: string;
}
```

```typescript
// user.controller.ts (POST /login)
@Post('login')
login(@Req() request: Request, @Res() response: Response, @Body() loginDto: LoginDto) {
  // 사용자명이 등록되어 있지 않은 경우
  if (/* 사용자 없음 */ false) {
    request.session.destroy(() => {
      return response.redirect(
        `/login?message=user is not registered&username=${loginDto.username}`,
      );
    });
    return;
  }

  // 비밀번호가 일치하지 않는 경우
  if (/* 비밀번호 불일치 */ false) {
    request.session.destroy(() => {
      return response.redirect(
        `/login?message=invalid password. Please try again&username=${loginDto.username}`,
      );
    });
    return;
  }

  // 유효한 사용자
  request.session.username = loginDto.username;
  request.session.message = '';
  request.session.save((error) => {
    if (error) {
      console.log(error);
    }
  });
  // ...
}

// GET /login
@Get('login')
getLogin(@Query('message') message: string, @Query('username') username: string) {
  return { message, username };
}
```

```html
<!-- login 템플릿 -->
<h1>Login</h1>
<% if (message) { %>
  <div class="alert alert-danger form-control mb-3 p-4" role="alert"><%= message %></div>
<% } %>
<input type="text" name="username" value="<%= username %>" />
```

## 요약
- 잘못된 사용자명/비밀번호 입력 시 `request.session.destroy`를 호출해 세션이 데이터베이스에 생성되지 않도록 막는다.
- 유효한 사용자일 때만 `session.username`을 설정하고 `session.save`로 세션을 저장한다.
- 로그인 실패 메시지와 입력했던 사용자명은 쿼리 파라미터(`message`, `username`)로 로그인 페이지에 전달해 화면에 표시한다.
- 템플릿에서는 `message`가 있을 때만 경고(alert) 박스를 보여주고, 사용자명 입력값은 유지하되 비밀번호는 비운다.
- 결과적으로 등록된 사용자에 대해서만 세션이 생성되어 데이터베이스에 불필요한 세션이 쌓이지 않는다.
