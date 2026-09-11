# Creating Navbar with "Includes"

## 개요
- 홈 페이지뿐 아니라 다른 페이지에서도 공통으로 쓰일 내비게이션 바(navbar)를 EJS의 **include** 기능으로 만들고, Bootstrap 스타일을 적용해 화면에 표시하는 강의.

## 내용
### includes 폴더와 navbar.ejs
- 내비게이션 바는 홈 페이지와 상품 페이지 등 여러 곳에서 반복(repeated)되는 공통 DOM 요소이므로, EJS의 **include**로 만든다.
- `views` 폴더 안에 `includes`라는 폴더를 만들고, 그 안에 `navbar.ejs` 파일을 생성한다.

### navbar 마크업과 Bootstrap 클래스
- `<nav>` 태그를 정의하고 Bootstrap 클래스 `navbar navbar-expand-lg bg-dark`를 적용한다.
- 안쪽에 `container-fluid` 클래스를 가진 `<div>`를 두고, 그 안에 메뉴 항목의 순서 없는 목록(unordered list)을 담을 또 다른 `<div>`를 둔다.
- 이 안쪽 `<div>`에는 `collapse navbar-collapse justify-content-between` 클래스를 지정한다.
- `<ul>` 태그에 `navbar-nav` 클래스를, `<li>`에는 `nav-item` 클래스를 지정한다.
- 첫 번째 `<li>` 안의 `<a>` 태그는 `href="/"`(루트 라우트)로 설정하고, 클래스는 `nav-link text-light fs-4 px-3`(폰트 크기와 패딩 정렬)로 지정하며 텍스트는 "Home"으로 한다.
- 두 번째 `<li>`도 같은 방식으로 `nav-item` 클래스를 주고, `<a>` 태그의 `href`를 `/addproduct`로, 클래스는 동일하게 `nav-link text-light fs-4 px-3`으로 지정하며 텍스트는 "Add Product"로 한다.

### addproduct.ejs, editproduct.ejs 생성
- `views` 폴더 안에 `addproduct.ejs`와 `editproduct.ejs` 파일을 생성한다.
- `editproduct.ejs`에는 기본 HTML 보일러플레이트를 작성하고 타이틀을 "Edit Product"로 바꾸며, body 안에 `<h1>` 제목을 넣는다.
- `addproduct.ejs`에도 같은 방식으로 작성한다.

### home.ejs에 navbar include
- `home.ejs`의 body 안에서 EJS 스크립틀릿(scriptlet)의 `<%- include(...) %>` 문법을 사용해 navbar 템플릿의 경로를 지정하고 include한다.
- 이 시점에서 결과를 확인하면 Home과 Add Product 두 개의 링크가 화면에 표시된다.

### Bootstrap 링크 추가
- 메뉴에 스타일을 적용하려면 Bootstrap 링크를 `home.ejs` 템플릿에 붙여야 한다.
- Bootstrap 공식 사이트에서 CDN 링크를 복사해 `home.ejs`에 붙여넣는다.
- 페이지를 새로고침하면 navbar가 스타일이 적용된 상태로 정상적으로 표시된다.
- 다음 강의에서는 홈 화면(home interface)을 만들 예정이라고 언급한다.

## 예시
```html
<!-- views/includes/navbar.ejs -->
<nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <div class="collapse navbar-collapse justify-content-between">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="/" class="nav-link text-light fs-4 px-3">Home</a>
        </li>
        <li class="nav-item">
          <a href="/addproduct" class="nav-link text-light fs-4 px-3">Add Product</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

```html
<!-- views/home.ejs -->
<!DOCTYPE html>
<html>
<head>
  <title>My Store</title>
  <!-- Bootstrap CDN 링크 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.x/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <%- include('includes/navbar') %>
  <h1><%= message %></h1>
</body>
</html>
```

```html
<!-- views/editproduct.ejs -->
<!DOCTYPE html>
<html>
<head>
  <title>Edit Product</title>
</head>
<body>
  <h1>Edit Product</h1>
</body>
</html>
```

## 요약
- 여러 페이지에서 공통으로 쓰이는 UI 요소는 EJS의 **include** 기능을 이용해 `includes` 폴더의 별도 템플릿(`navbar.ejs`)으로 분리한다.
- navbar는 Bootstrap의 `navbar`, `navbar-expand-lg`, `bg-dark`, `container-fluid`, `navbar-nav`, `nav-item`, `nav-link` 클래스로 스타일링한다.
- `home.ejs`에서는 `<%- include('includes/navbar') %>` 형태로 navbar를 불러와 사용한다.
- Bootstrap CDN 링크를 템플릿에 추가해야 클래스로 지정한 스타일이 실제로 적용된다.
- `addproduct.ejs`, `editproduct.ejs` 같은 페이지별 템플릿 파일도 `views` 폴더에 미리 생성해 둔다.
