# Rendering DOM Based on Login Status

## 개요
- `isLoggedIn` 쿠키 값을 템플릿(EJS)에 전달해, 로그인 여부에 따라 수정(edit)·삭제(delete) 버튼, 상품 추가(add product) 메뉴, 로그인/회원가입/로그아웃 메뉴가 조건부로 렌더링(conditional rendering)되도록 구현하는 강의.

## 내용
### 요구사항 재확인
- 사용자가 로그인하지 않은 상태에서는 edit·delete 버튼이 보이지 않아야 하고, add product 메뉴도 보이지 않아야 하며, sign up·login 메뉴 대신 logout 옵션이 보이면 안 된다(로그인하지 않았으므로 sign up·login이 보여야 한다).
- 이 모든 것을 쿠키 값(cookie value)을 기준으로 구현한다.

### 컨트롤러에서 isLoggedIn 값을 템플릿으로 전달
- `AppController`에서 이전에 넣었던 콘솔(console) 출력 구문은 주석 처리하고, 대신 쿠키 값을 반환(return)한다.
- 반환 객체에 `isLoggedIn` 프로퍼티를 추가하고 `cookies.isLoggedIn` 값을 할당한다.
- 이렇게 쿠키 값을 프로퍼티로 반환하는 이유는, 템플릿 안에서 이 값을 변수로 사용해 DOM 요소를 로그인 상태에 따라 렌더링해야 하기 때문이다.

### 홈 템플릿에서 edit/delete 버튼 조건부 렌더링
- `home.ejs` 템플릿에서 edit·delete 버튼 바로 위에 EJS `if` 조건문을 넣는다. `isLoggedIn`이 문자열 `"true"`와 같으면 그 아래 버튼을 담은 `div`를 조건문 안으로 옮긴다.
- 문자열 `"true"`와 비교하는 이유는, 쿠키가 텍스트(text)로 전달되기 때문에 불리언(boolean)이 아니라 문자열로 비교해야 하기 때문이다.
- 저장 후 확인하면, 유효한 자격 증명으로 로그인한 상태에서는 버튼이 렌더링되고, 잘못된 자격 증명으로 다시 로그인해 쿠키 값이 바뀌면 홈 페이지에서 edit·delete 버튼이 더 이상 렌더링되지 않는 것을 확인한다.

### 네비게이션 바에서 add product 메뉴 조건부 렌더링
- add product 옵션을 로그인하지 않았을 때 숨기려면 `navbar.ejs`에서도 조건문이 필요하고, 그러려면 `isLoggedIn` 값이 navbar 템플릿에도 전달되어야 한다.
- 홈 라우트 핸들러가 navbar를 include 하는 부분에, 콤마(comma)를 추가해 객체 리터럴로 `isLoggedIn: isLoggedIn`을 전달한다.
- `navbar.ejs` 파일에서 add product 링크 위에 `if (isLoggedIn === 'true')` 조건문을 추가하고, 해당 `li`를 조건문 안으로 옮긴다.
- 저장 후 새로고침하면 add product 옵션이 사라져, 네비게이션 바가 로그인 상태의 영향을 받는 것을 확인한다.

### 로그인/회원가입 vs 로그아웃 메뉴 전환
- 마지막으로, 로그인한 상태에서는 logout 옵션을, 그렇지 않으면 sign up·login 옵션을 보여주도록 구현한다.
- `navbar.ejs`에서 sign up 링크 위에 `if (isLoggedIn === 'true')` 조건문을 추가한다.
- 로그인 상태라면(logout 링크를 보여줘야 하므로) sign up 링크를 복사해 조건문 안에 붙여넣고, 텍스트를 "Logout"으로, URL을 `/mystore/home`으로 바꾼다.
- `else` 절에서는 기존의 login과 sign up 옵션을 그대로 보여준다.
- 저장 후 로그인 상태(쿠키 값)를 `true`로 바꾸면 네비게이션 바에 logout 옵션이 나타나는 것을 확인한다.

## 예시
```typescript
// app.controller.ts
@Get()
@Render('home')
renderHomePage(@Req() req: Request) {
  const isLoggedIn = req.cookies.isLoggedIn;
  // console.log(cookies);
  return {
    // ...상품 목록 등 기존 데이터
    isLoggedIn: isLoggedIn,
  };
}
```

```html
<!-- home.ejs -->
<% if (isLoggedIn === 'true') { %>
  <div>
    <button class="btn btn-primary">Edit</button>
    <button class="btn btn-danger">Delete</button>
  </div>
<% } %>
```

```html
<!-- home.ejs에서 navbar include 시 isLoggedIn 전달 -->
<%- include('navbar', { isLoggedIn: isLoggedIn }) %>
```

```html
<!-- navbar.ejs -->
<% if (isLoggedIn === 'true') { %>
  <li class="nav-item">
    <a class="nav-link" href="/mystore/add-product">Add Product</a>
  </li>
<% } %>

<% if (isLoggedIn === 'true') { %>
  <li class="nav-item">
    <a class="nav-link" href="/mystore/home">
      <i class="bi box-arrow-in-right"></i> Logout
    </a>
  </li>
<% } else { %>
  <li class="nav-item">
    <a class="nav-link" href="/user/login">
      <i class="bi bi-person"></i> Login
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/mystore/signup">
      <i class="bi box-arrow-in-right"></i> Sign Up
    </a>
  </li>
<% } %>
```

## 요약
- 컨트롤러에서 `req.cookies.isLoggedIn` 값을 `isLoggedIn` 프로퍼티로 템플릿에 반환하도록 했다. 쿠키가 텍스트이므로 템플릿에서는 문자열 `'true'`와 비교한다.
- `home.ejs`에서 `isLoggedIn === 'true'`일 때만 edit·delete 버튼을 렌더링하도록 EJS `if` 조건문으로 감쌌다.
- navbar를 include 할 때 `isLoggedIn` 값을 함께 전달해, `navbar.ejs`에서도 add product 링크를 조건부로 렌더링하도록 했다.
- navbar에서 로그인 상태면 logout 링크를, 아니면 login·sign up 링크를 보여주도록 `if`/`else` 조건문을 구성했다.
