# Setting Up the Sign-Up Route

## 개요
- 네비게이션 바(navbar)에 회원가입(sign up) 링크를 추가하고, 이를 클릭했을 때 회원가입 폼이 렌더링되도록 라우트(route)와 템플릿(template)을 연결하는 강의.

## 내용
### 회원가입 링크를 네비게이션 바에 추가
- 사용자 이름(user name, 즉 이메일)과 비밀번호(password), 비밀번호 확인(confirm password) 필드를 입력받을 회원가입 페이지를 만드는 것부터 시작한다.
- 네비게이션 바(navbar)에 `li` 태그를 추가하고 그 안에 `a` 태그로 "signup" 텍스트를 넣는다.
- `navbar`, `nav`, `nav-item`, `li` 관련 클래스와 앵커(anchor) 태그에 필요한 다른 클래스들을 기존 요소에서 복사해 붙여 넣는다.
- 결과를 확인하면 화면 오른쪽에 sign up 링크가 나타난다.

### 회원가입 라우트 설정
- sign up 링크를 클릭했을 때 회원가입 폼이 나오려면 라우트(route)를 설정해야 한다.
- `href`에 `/mystore/signup` 경로를 지정한다.
- sign up 텍스트 앞에는 아이콘(icon) 클래스로 `bi box-arrow-in-right`를 붙인다.

### 템플릿 파일과 라우트 핸들러 작성
- `signup.ejs` 템플릿 파일을 만들고, 기본 구조와 네비게이션 바(navbar)를 include 하며, 부트스트랩(bootstrap) 스타일링도 붙여넣는다.
- `h1` 태그에 "Sign Up Page" 텍스트를 넣는다.
- `app.controller`를 열어 `signup` 라우트에 대한 GET 라우트 핸들러(route handler)를 정의한다. `@Render()` 데코레이터를 사용해 `renderSignUpPage`라는 메서드가 `signup` 템플릿을 렌더링하도록 하며, 이 메서드는 `null`을 반환한다.
- 저장 후 sign up 링크를 클릭하면 회원가입 페이지가 렌더링되는 것을 확인한다.

## 예시
```typescript
// app.controller.ts
@Get('signup')
@Render('signup')
renderSignUpPage() {
  return null;
}
```

```html
<!-- navbar.ejs 안에 추가되는 sign up 링크 -->
<li class="nav-item">
  <a class="nav-link" href="/mystore/signup">
    <i class="bi box-arrow-in-right"></i> Sign Up
  </a>
</li>
```

```html
<!-- signup.ejs 기본 구조 -->
<%- include('navbar') %>
<h1>Sign Up Page</h1>
```

## 요약
- 네비게이션 바에 sign up 링크를 추가하고 `/mystore/signup` 경로로 연결했다.
- `signup.ejs` 템플릿 파일을 만들고 `app.controller`에 `@Get('signup')`과 `@Render('signup')`을 사용한 라우트 핸들러를 정의했다.
- 다음 강의에서는 회원가입 폼(sign up form) 자체를 디자인한다.
