# Configuring Edit Product Route

## 개요
- Edit Product 페이지로 이동하는 라우트를 `AppController`에 정의하고, 홈 페이지의 수정(edit) 링크와 연결한 뒤, navbar와 Bootstrap 링크를 붙이는 강의.

## 내용
### Edit Product 라우트 정의
- 이전에 이미 만들어 둔 `editproduct.ejs` 템플릿을 렌더링하기만 하면 된다.
- `AppController`에 GET 라우트 핸들러를 추가한다. 경로는 `editproduct`이며, 메서드는 `renderEditProductPage`이고 현재는 `null`을 반환한다.
- 이 핸들러는 `editproduct` 템플릿을 렌더링한다.

### 홈 페이지에서 Edit 링크 연결
- `home.ejs`에서 이미 정의해 둔 수정(edit) 아이콘의 `<a>` 태그 `href`를 `/mystore/editproduct`로 설정한다.
- 브라우저에서 홈 페이지를 열고 수정(edit) 옵션을 클릭하면 Edit Product 템플릿으로 이동하는 것을 URL 경로에서 확인할 수 있다.

### Edit Product 페이지에 navbar와 Bootstrap 추가
- `editproduct.ejs` 템플릿의 body 안에 스크립틀릿의 include 문법으로 `includes/navbar` 경로를 지정해 navbar를 표시한다.
- `home.ejs`에서 사용한 Bootstrap CDN 링크도 Edit Product 페이지의 `<head>`에 붙여넣는다.
- 페이지를 새로고침하면 navbar가 정상적으로 렌더링된다.
- 이렇게 해서 Edit Product 페이지의 라우트 설정이 끝났으며, 다음 단계에서는 이 페이지의 인터페이스를 디자인하고 스타일링할 예정이라고 언급한다.

## 예시
```typescript
// app.controller.ts
@Get('mystore/editproduct')
@Render('editproduct')
renderEditProductPage() {
  return null;
}
```

```html
<!-- views/home.ejs (Edit 아이콘 링크) -->
<a href="/mystore/editproduct" class="btn btn-outline-dark mx-1 mt-4 edit-buttons hover-yellow">
  <i class="bi bi-pencil-fill"></i>
</a>
```

```html
<!-- views/editproduct.ejs -->
<!DOCTYPE html>
<html>
<head>
  <title>Edit Product</title>
  <!-- Bootstrap CDN 링크 -->
</head>
<body>
  <%- include('includes/navbar') %>
  <!-- 이후 강의에서 인터페이스 디자인 -->
</body>
</html>
```

## 요약
- Edit Product 페이지 라우트(`mystore/editproduct`)를 `AppController`에 추가해 기존 `editproduct.ejs` 템플릿을 렌더링한다.
- 홈 페이지 상품 카드의 수정 아이콘 `href`를 새 라우트 경로로 연결한다.
- Edit Product 페이지에도 navbar include와 Bootstrap CDN 링크를 추가해 다른 페이지와 일관된 레이아웃을 유지한다.
- 라우트 연결까지 완료했으며, 다음 단계에서 인터페이스 디자인을 진행할 예정이다.
