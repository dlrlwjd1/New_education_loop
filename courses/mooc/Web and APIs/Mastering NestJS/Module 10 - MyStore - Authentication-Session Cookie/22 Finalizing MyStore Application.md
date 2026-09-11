# Finalizing MyStore Application

## 개요
- 회원가입(sign-up) 흐름에 중복 사용자명 확인과 성공/실패 메시지를 추가해, MyStore 애플리케이션을 사용자 친화적으로 마무리하는 강의.

## 내용
### 기존 문제 — 회원가입 시 안내 메시지 부재
- 현재는 사용자가 데이터베이스에 등록되면 아무런 안내 메시지 없이 곧바로 로그인 페이지로 이동한다.
- 이미 존재하는 사용자명(username)으로 다시 회원가입을 시도할 때도 적절한 안내 메시지가 없다.
- 이번 강의에서는 이 두 가지 상황에 맞는 메시지를 추가해 프로젝트를 마무리한다.

### 기존 사용자명 확인
- 회원가입 라우트(signup route)의 POST 핸들러 안에서 `try` 블록을 만든다.
- `existingUser` 상수를 만들고 `await this.userService.findUserByUsername(username)`을 할당해 해당 사용자명이 데이터베이스에 존재하는지 확인한다.
- 사용자명이 이미 존재하면, `response` 데코레이터로 받은 `response` 객체를 사용해 `/mystore/signup` 경로로 리다이렉트하면서 쿼리(query)로 `message=User is already registered. Please choose a new username.`을 전달한다.
- 로그인 템플릿에서 이미 `message` 쿼리 변수를 표시하고 있으므로, 동일한 변수명을 계속 사용한다.

### 신규 사용자 가입 처리와 에러 처리
- 사용자명이 존재하지 않으면 회원가입을 진행한다. 기존의 `createUser` 메서드 호출을 `try` 블록 안으로 옮긴다.
- `catch` 블록에서는 에러를 잡아 `"error during sign up"`이라는 메시지와 함께 에러 객체를 로그(log)로 남기고, `/mystore/signup` 경로로 `message=Sign up failed. Please try again.` 쿼리와 함께 리다이렉트한다.

### 회원가입 성공 메시지
- `createUser` 메서드 호출 아래에 `return response.redirect(...)`를 추가해, `/user/login` 경로로 `message=Sign up successful. Please log in now.` 쿼리와 함께 리다이렉트한다.
- 이 메시지 쿼리를 가져오기 위해 app 컨트롤러의 회원가입 라우트에서 `Query` 데코레이터를 import하고 `message` 속성을 반환하도록 한다.

### 템플릿에 메시지 표시
- 회원가입(signup) 템플릿의 제목(heading) 아래에 `if` 조건문을 추가해, `message`가 존재하면 `div`로 메시지를 표시한다. Bootstrap 클래스는 `alert alert-danger form-control mb-3 p-4`, `role="alert"`를 사용하고 `message` 속성 값을 바인딩한다.
- 등록된 사용자를 로그인 페이지로 리다이렉트하면서 회원가입 성공 메시지도 함께 보여줘야 하므로, 로그인 템플릿에서도 메시지를 표시하도록 갱신한다.
- 로그인 템플릿에서는 스크립틀릿(scriptlet)으로 `message`에 `"successful"`이라는 단어가 포함되어 있는지 확인해, 포함되어 있으면 클래스를 `alert-success`로, 그렇지 않으면 `alert-danger`로 설정한다.

### 최종 동작 확인
- 이미 등록된 사용자명으로 회원가입을 시도하면 "사용자가 이미 등록되어 있다(user is already registered)"는 메시지가 표시된다.
- 새로운 사용자명으로 회원가입을 진행하면 로그인 페이지로 리다이렉트되며 "회원가입 성공(signup successful)" 메시지가 표시된다.
- 이로써 MyStore 애플리케이션 구현이 완료된다.

## 예시
```typescript
// user.controller.ts (POST /signup)
@Post('signup')
async signup(@Req() request: Request, @Res() response: Response, @Body() createUserDto: CreateUserDto) {
  try {
    const existingUser = await this.userService.findUserByUsername(createUserDto.username);

    if (existingUser) {
      return response.redirect(
        '/mystore/signup?message=User is already registered. Please choose a new username.',
      );
    }

    await this.userService.createUser(createUserDto);

    return response.redirect(
      '/user/login?message=Sign up successful. Please log in now.',
    );
  } catch (error) {
    console.log('error during sign up', error);
    return response.redirect(
      '/mystore/signup?message=Sign up failed. Please try again.',
    );
  }
}
```

```typescript
// app.controller.ts (GET /signup)
@Get('signup')
getSignup(@Query('message') message: string) {
  return { message };
}
```

```html
<!-- signup 템플릿 -->
<h1>Sign Up</h1>
<% if (message) { %>
  <div class="alert alert-danger form-control mb-3 p-4" role="alert"><%= message %></div>
<% } %>
```

```html
<!-- login 템플릿 -->
<h1>Login</h1>
<% if (message) { %>
  <div class="alert <%= message.includes('successful') ? 'alert-success' : 'alert-danger' %> form-control mb-3 p-4" role="alert">
    <%= message %>
  </div>
<% } %>
```

## 요약
- 회원가입 시 기존 사용자명 여부를 먼저 확인해, 중복이면 회원가입 페이지로 메시지와 함께 리다이렉트한다.
- 가입 처리는 `try`/`catch`로 감싸, 실패 시에도 사용자에게 실패 메시지를 안내한다.
- 가입 성공 시에는 로그인 페이지로 리다이렉트하면서 성공 메시지를 함께 전달한다.
- 로그인 템플릿에서는 메시지에 `"successful"` 포함 여부로 성공(`alert-success`)과 실패(`alert-danger`) 스타일을 구분해 보여준다.
- 이 강의를 끝으로 세션 쿠키, JWT 토큰, 미들웨어, 비밀번호 해싱까지 반영된 MyStore 인증 기능이 완성된다.
