# Creating "Add Product" Interface

## 개요
- Add Product 페이지에 navbar를 붙이고, 상품 이름(product name), 가격(price), 이미지(image)를 입력받는 폼(form)을 만들어 Bootstrap으로 레이아웃과 스타일을 정리하는 강의.

## 내용
### navbar 추가 및 Bootstrap 링크
- `addproduct.ejs` 파일의 body 안에서 기존 `<h1>`을 제거하고, 스크립틀릿의 include 문법으로 `includes/navbar` 경로를 지정해 navbar를 표시한다.
- `home.ejs`에서 사용한 Bootstrap CDN 링크를 복사해 `addproduct.ejs`의 `<head>` 섹션에도 붙여넣는다.
- 브라우저에서 Add Product 페이지를 열면 navbar가 정상적으로 표시된다.

### 폼(form) 구조
- `container-fluid mt-5` 클래스를 가진 `<div>`를 정의한다.
- 그 안에 `<form>` 태그를 두고 클래스 `w-25`, `action="/mystore/addproduct"`(Add Product 라우트), `method="post"`를 지정한다.
- 폼 안에는 `<h2>` 제목으로 "Add Product" 텍스트를 넣는다.
- 제목 아래에 `form-control` 클래스의 컨테이너 `<div>`와, 그 안에 라벨(label)과 입력(input) 태그를 담는 하위 `<div>`를 정의한다.
- 라벨은 "Product Name" 텍스트, 입력은 `type="text"`이며 `name` 속성을 `productname`으로 설정한다.
- 라벨에는 Bootstrap의 `form-label` 클래스, 입력에는 `form-control` 클래스를 적용한다.

### 나머지 필드 추가
- 같은 구조의 `<div>`를 두 번 더 복사해, 두 번째는 라벨을 "Price"로, 입력의 `name`도 `price`로 바꾼다.
- 세 번째는 라벨을 "Select Image"로, 입력의 `name`을 `image`로, 입력 타입은 이미지를 선택해야 하므로 `type="file"`로 바꾼다.

### 제출 버튼
- `<button>` 태그를 만들어 텍스트를 "Add Product"로, Bootstrap 클래스 `btn btn-primary fs-4 m-3 w-100`을 적용하고, `type="submit"`으로 설정한다.

### 폼 정렬 및 스타일 정리
- 폼을 감싸는 컨테이너 `<div>`에 `display: flex`, `justify-content: center`를 적용해 폼을 화면 가운데 정렬한다.
- 제목(`<h2>`)에는 `fw-bold text-muted display-3 m-4 mb-2` 클래스를 적용한다.
- `form-control` 컨테이너에는 `m-3 p-4`를 적용한다.
- 상품 이름과 가격 필드를 나란히(side by side) 배치하기 위해 `row` 클래스의 `<div>`로 그리드 레이아웃(grid layout)을 만든다.
- 상품 이름 라벨의 `<div>`에는 `col-8 mt-2 mb-3` 클래스를, 라벨 자체에는 `fs-4`를 적용한다.
- 가격 필드의 `<div>`에는 `col-4 mt-2 mb-3` 클래스를, 라벨에도 `fs-4`를 적용한다.
- 이미지 선택 필드의 `<div>`에는 `m-3`(상하 margin) 클래스를 적용한다.

### 아이콘 추가
- Add Product 버튼에 텍스트와 함께 카트 아이콘을 표시하기 위해 버튼 뒤에 `bi bi-cart-plus-fill` 클래스와 `p-1` 패딩을 가진 아이콘을 추가한다.
- Bootstrap Icons CDN 링크를 `home.ejs`에서 복사해 `addproduct.ejs`의 `<head>` 섹션에도 붙여넣는다.
- 결과를 확인하면 Add Product 아이콘이 정상적으로 표시되며, 이로써 Add Product 인터페이스가 완성된다.

## 예시
```html
<!-- views/addproduct.ejs -->
<!DOCTYPE html>
<html>
<head>
  <title>Add Product</title>
  <!-- Bootstrap CDN, Bootstrap Icons CDN -->
</head>
<body>
  <%- include('includes/navbar') %>

  <div class="container-fluid mt-5" style="display: flex; justify-content: center;">
    <form class="w-25" action="/mystore/addproduct" method="post">
      <h2 class="fw-bold text-muted display-3 m-4 mb-2">Add Product</h2>

      <div class="row">
        <div class="col-8 mt-2 mb-3 form-control m-3 p-4">
          <label class="form-label fs-4">Product Name</label>
          <input type="text" name="productname" class="form-control">
        </div>
        <div class="col-4 mt-2 mb-3 form-control m-3 p-4">
          <label class="form-label fs-4">Price</label>
          <input type="text" name="price" class="form-control">
        </div>
      </div>

      <div class="m-3 form-control p-4">
        <label class="form-label">Select Image</label>
        <input type="file" name="image" class="form-control">
      </div>

      <button type="submit" class="btn btn-primary fs-4 m-3 w-100">
        Add Product
        <i class="bi bi-cart-plus-fill p-1"></i>
      </button>
    </form>
  </div>
</body>
</html>
```

## 요약
- Add Product 페이지에도 `<%- include('includes/navbar') %>`로 navbar와 Bootstrap CDN을 동일하게 적용한다.
- 폼은 `action="/mystore/addproduct"`, `method="post"`로 설정하고, 상품 이름(`productname`)·가격(`price`)·이미지(`image`, `type="file"`) 세 필드를 갖는다.
- `row`, `col-8`, `col-4` 같은 Bootstrap 그리드 클래스로 상품 이름과 가격 필드를 나란히 배치한다.
- 컨테이너에 `display: flex; justify-content: center`를 적용해 폼을 화면 중앙에 정렬한다.
- 제출 버튼에 Bootstrap Icons(`bi-cart-plus-fill`)를 추가해 시각적으로 강조한다.
