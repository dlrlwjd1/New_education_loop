# Configuring Login Page

## 개요
- 회원가입 페이지의 구조를 재사용해 로그인(login) 페이지를 만들고, 라우트(route)와 네비게이션 바(navbar) 링크를 연결하는 강의.

## 내용
### 로그인 템플릿 생성
- `views` 폴더 안에 `login.ejs` 파일을 새로 만든다.
- 로그인 페이지는 회원가입(signup) 페이지와 구조가 거의 비슷하므로, signup 템플릿의 구조를 복사해 붙여 넣는다.
- 제목(title)을 바꾸고, 폼의 `action` 경로를 업데이트하며, 헤딩(heading) 텍스트도 수정한다.
- 로그인에는 비밀번호 확인(confirm password) 필드가 필요 없으므로 이를 제거한다.
- 버튼 텍스트를 "Log In"으로 바꾸고 아이콘을 `bi-person` 계열로 변경한다.
- 자바스크립트의 `switch` 문에서 confirm password 관련 케이스들을 제거하고, confirm password 필드가 없으므로 `validatePassword` 함수도 제거한다.
- 로그인 자격 증명(credentials)을 데이터베이스에서 확인하는 로직은 이후 강의에서 다룰 예정이며, 지금은 필요하면 나중에 코드를 다듬기로 한다.

### 로그인 라우트 핸들러 정의
- `UserController`에 로그인 페이지를 렌더링하는 GET 라우트 핸들러를 정의한다.
- 경로는 `login`으로 지정하고, `renderLoginPage`라는 메서드가 `null`을 반환하며 `@Render()` 데코레이터로 로그인 페이지를 렌더링하도록 한다.

### 네비게이션 바에 로그인 버튼 추가
- 네비게이션 바(navbar) 템플릿을 열어, 기존 `li`를 복사해 텍스트를 "Login"으로, 아이콘을 `bi-person` 계열로 바꾼다.
- `href`를 `/user/login`으로 지정한다.
- 저장 후 홈 페이지를 열면 로그인 옵션이 나타나고, 클릭하면 로그인 페이지가 렌더링되는 것을 확인한다.

## 예시
```typescript
// user.controller.ts
@Get('login')
@Render('login')
renderLoginPage() {
  return null;
}
```

```html
<!-- navbar.ejs 안에 추가되는 login 링크 -->
<li class="nav-item">
  <a class="nav-link" href="/user/login">
    <i class="bi bi-person"></i> Login
  </a>
</li>
```

```html
<!-- login.ejs (signup.ejs 구조 재사용, confirm password 제거) -->
<form action="/user/login" method="post">
  <div class="row">
    <div class="col-12">
      <label>Username <span class="fs-6 text-secondary fst-italic">email</span></label>
      <input type="email" name="username" class="form-control" />
    </div>
  </div>

  <div class="row">
    <label>Password</label>
    <div class="col-10">
      <input type="password" id="passwordInput" name="passwordHidden" onkeyup="" class="form-control" />
    </div>
    <div class="mt-2 mb-3 col-2 btn">
      <i class="bi bi-eye-slash" onclick="toggleDisplay(this)"></i>
    </div>
  </div>

  <button type="submit" class="btn btn-primary">Log In</button>
</form>
```

## 요약
- signup 템플릿을 재사용해 login 템플릿을 만들고, confirm password 필드와 관련 검증 로직(`validatePassword`, switch 문의 confirm password 케이스)을 제거했다.
- `UserController`에 `@Get('login')`, `@Render('login')`을 가진 `renderLoginPage` 핸들러를 추가했다.
- 네비게이션 바에 `/user/login`으로 연결되는 로그인 링크를 추가해 로그인 페이지가 정상 렌더링되는 것을 확인했다.
- 실제 로그인 자격 증명 검증(자격 증명을 DB와 대조하는 로직)은 다음 강의에서 다룬다.
