# Creating Home Interface

## 개요
- 홈 페이지에 상품 카드(product card) 인터페이스를 만드는 강의. 아직 데이터베이스 연동 전이므로 정적(static)인 상품 데이터를 배열로 만들어 EJS의 반복문으로 카드 UI를 렌더링하고, 커스텀 CSS와 Bootstrap 아이콘으로 스타일을 다듬는다.

## 내용
### 정적 상품 데이터 준비
- 루트 디렉터리 안에 `public` 폴더를 만들고, 그 안에 상품 이미지들을 담은 `images` 폴더를 둔다.
- 아직은 인터페이스를 만드는 단계이므로 상품 정보를 정적으로(static) 표시하며, 이후 진행되면서 데이터베이스에서 오는 동적(dynamic) 데이터로 바뀔 예정이라고 설명한다.
- `products` 폴더 안에 `product.ts` 파일을 만들고, 객체 배열인 `products` 상수를 정의한다. 각 객체는 `id`, `name`, `price`, `image`(이미지 폴더의 파일명과 일치) 속성을 가지며, Apple, Orange, Banana, Pineapple 총 4개의 상품 객체를 정의한다.

### AppController와 정적 파일 서빙
- `AppController`에서 기존의 `message` 변수 대신 `products` 변수를 EJS 템플릿에 전달하도록 바꾼다.
- 이미지 같은 정적 자산(static assets)을 서버에서 서빙(serve)하려면 `main.ts`에서 `app.useStaticAssets()` 메서드를 사용해야 한다.
- `join(__dirname, '..', 'public')` 형태로 `public` 디렉터리(이미지가 위치한 곳)를 지정한다.

### home.ejs에서 카드 렌더링
- `container` `<div>`와 `pt-3`(padding-top) 클래스를 가진 하위 `<div>`를 만들어 카드들을 담을 컨테이너로 사용한다.
- EJS의 if 조건문 스크립틀릿으로 `products.length > 0`인 경우에만 상품을 렌더링하도록 하고, `for (let product of products)` 형태의 for...of 반복문으로 각 상품 카드를 그린다.
- 각 카드는 `card m-3` 클래스를 가진 `<div>`이며, 안에 `<img>` 태그의 `src`를 `images/<product.image>` 경로로 스크립틀릿으로 조합하고, `alt`는 `product.name`으로, 클래스는 Bootstrap의 `card-img-top`으로 지정한다.
- 이미지 아래 `card-body` 클래스의 `<div>`에 상품 이름을 `<h3 class="card-title">`, 가격을 `<h4 class="card-title">`(달러 기호와 `product.price`)로 표시한다.
- 가격 텍스트를 더 얇게 보이도록 `fw-light` 클래스를 추가해 이름과 가격을 시각적으로 구분한다.

### 커스텀 CSS로 카드 레이아웃 다듬기
- 처음에는 이미지가 지나치게 크게 표시되므로, `public` 디렉터리 안에 `css` 폴더와 `home.css` 파일을 만들어 커스텀 스타일을 정의한다.
- `.custom-card` 클래스로 카드의 너비(width)를 `18rem`으로 지정하고, 카드 `<div>`에 `card m-3 custom-card` 클래스를 적용한다.
- `<head>` 태그에 이 스타일시트에 대한 `<link>` 참조를 추가한다.
- 카드들을 가지런히 배치하기 위해 `.card-container` 클래스를 만들어 `display: flex`, `justify-content: space-evenly`, `flex-wrap: wrap`, `width: 100%`를 지정하고, 이를 카드들의 부모 `<div>`에 적용한다.
- 이미지 높이와 이름/가격 정렬을 맞추기 위해, `.custom-card`를 부모로 하는 `.card-image` 클래스를 만들어 `height: 24rem`을 지정한다.
- 이름과 가격을 나란히 정렬하기 위한 클래스도 만들어 `display: flex`, `justify-content: space-between`을 지정한다.
- `card-body` 안에 `name-price-container`라는 하위 `<div>`를 새로 만들고 그 안에 `<h3>`(이름)와 `<h4>`(가격)를 함께 넣어 이 클래스를 적용한다.

### 수정/삭제 버튼과 아이콘
- 각 카드 맨 아래에 수정(edit)과 삭제(delete) 버튼을 추가한다. EJS 파일에서 `name-price-container` 아래에 새 `<div>`를 만들고, `<a>` 태그의 `href`를 `#`으로 설정하며 `btn btn-outline-dark mx-1 mt-4` 클래스를 적용한다.
- 텍스트 대신 Bootstrap Icons의 CDN 링크를 `<head>`에 추가해 아이콘을 사용한다.
- 수정 아이콘에는 `bi-pencil-fill` 클래스를, 삭제 아이콘에는 `bi-trash-fill` 클래스를 적용한다.
- CSS에서 `.edit-buttons` 클래스로 아이콘 너비를 `46%`로 지정한다.
- 호버(hover) 효과도 추가한다. `.hover-yellow`는 호버 시 배경색을 `#FFC107`, 글자색을 `#1F2022`로, `.hover-red`는 배경색을 `#FD5959`, 글자색을 `#1F2022`로 지정한다. Bootstrap 아이콘 기본 호버 효과를 덮어쓰기(override) 위해 `!important`를 붙인다.
- 수정 아이콘의 `<a>` 태그에는 `edit-buttons hover-yellow` 클래스를, 삭제 아이콘의 `<a>` 태그에는 `edit-buttons hover-red` 클래스를 적용한다.
- 이렇게 해서 navbar와 상품 카드가 포함된 홈 페이지가 완성된다. 다음 강의에서는 상품이 없을 때의 섹션(no products section)을 추가할 예정이라고 언급한다.

## 예시
```typescript
// products/product.ts
export const products = [
  { id: 1, name: 'Apple', price: 12, image: 'apple.png' },
  { id: 2, name: 'Orange', price: 15, image: 'orange.png' },
  { id: 3, name: 'Banana', price: 8, image: 'banana.png' },
  { id: 4, name: 'Pineapple', price: 20, image: 'pineapple.png' },
];
```

```typescript
// app.controller.ts
import { Controller, Get, Render } from '@nestjs/common';
import { products } from './products/product';

@Controller()
export class AppController {
  @Get()
  @Render('home')
  renderPage() {
    return { products };
  }
}
```

```typescript
// main.ts
import { join } from 'path';
// ...
app.useStaticAssets(join(__dirname, '..', 'public'));
```

```html
<!-- views/home.ejs (카드 렌더링 부분) -->
<div class="container">
  <div class="pt-3 card-container">
    <% if (products.length > 0) { %>
      <% for (let product of products) { %>
        <div class="card m-3 custom-card">
          <img class="card-img-top card-image" src="images/<%= product.image %>" alt="<%= product.name %>">
          <div class="card-body">
            <div class="name-price-container">
              <h3 class="card-title"><%= product.name %></h3>
              <h4 class="card-title fw-light">$<%= product.price %></h4>
            </div>
            <div>
              <a href="#" class="btn btn-outline-dark mx-1 mt-4 edit-buttons hover-yellow">
                <i class="bi bi-pencil-fill"></i>
              </a>
              <a href="#" class="btn btn-outline-dark mx-1 mt-4 edit-buttons hover-red">
                <i class="bi bi-trash-fill"></i>
              </a>
            </div>
          </div>
        </div>
      <% } %>
    <% } %>
  </div>
</div>
```

```css
/* public/css/home.css */
.custom-card {
  width: 18rem;
}
.card-container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
}
.card-image {
  height: 24rem;
}
.name-price-container {
  display: flex;
  justify-content: space-between;
}
.edit-buttons {
  width: 46%;
}
.hover-yellow:hover {
  background-color: #FFC107 !important;
  color: #1F2022 !important;
}
.hover-red:hover {
  background-color: #FD5959 !important;
  color: #1F2022 !important;
}
```

## 요약
- 데이터베이스 연동 전, 정적 상품 배열(`products`)로 먼저 인터페이스를 완성한다.
- 정적 이미지를 서빙하려면 `main.ts`에서 `app.useStaticAssets()`로 `public` 디렉터리를 지정해야 한다.
- EJS의 if 조건문과 for...of 반복문으로 상품 배열을 카드 형태로 렌더링한다.
- Bootstrap 카드 클래스(`card`, `card-img-top`, `card-body`, `card-title`)에 커스텀 CSS(`custom-card`, `card-container`, `card-image`, `name-price-container`)를 추가해 레이아웃을 다듬는다.
- Bootstrap Icons CDN으로 수정/삭제 아이콘 버튼을 추가하고, `!important`를 사용한 호버 클래스로 색상 강조 효과를 준다.
