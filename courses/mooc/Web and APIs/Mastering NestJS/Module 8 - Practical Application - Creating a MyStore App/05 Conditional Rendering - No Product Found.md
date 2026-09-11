# Conditional Rendering - No Product Found

## 개요
- 상품 데이터가 하나도 없을 때 사용자에게 적절한 안내 메시지를 보여주는 **조건부 렌더링(conditional rendering)**을 EJS의 if/else 블록으로 구현하는 강의.

## 내용
### if/else 블록 추가
- 이미 상품 배열을 렌더링하는 if 조건문은 만들어져 있으므로, 여기에 else 블록만 추가하면 된다.
- 기존 if 블록이 끝나는 지점 뒤에 EJS 스크립틀릿으로 `else {`를 열고, 마지막에 다시 스크립틀릿으로 닫는 중괄호(`}`)를 추가한다.
- else 블록 안에는 `<div>`를 만들고 그 안에 `<h1>`으로 "No products available" 메시지를, 그리고 상품 추가 페이지로 이동하는 `<a>` 태그를 넣는다. 이 시점에서 `<a>`의 `href`는 임시로 `#`(해시 기호)으로 설정한다.

### 스타일링
- `<div>`에는 Bootstrap의 여백 클래스인 `m-5`(margin), `p-5`(padding)를 적용한다.
- `<h1>`에는 `display-2 text-muted` 클래스를 적용해 흐린(muted) 큰 제목 스타일을 준다.
- `<a>` 태그에는 `btn btn-outline-dark fs-4 my-3`(위아래 margin) 클래스를 적용한다.
- "Add Product" 텍스트와 함께 장바구니 아이콘도 표시하기 위해 Bootstrap Icons의 `bi bi-cart-plus-fill` 클래스와 약간의 padding(`p-1`)을 추가한다.

### 확인
- 이 상태에서 결과를 확인하면 메시지와 링크가 잘 표시된다.
- 배열에서 주석 처리했던(commented out) 상품 객체들을 다시 되돌리면(uncomment), 이전과 같이 상품 카드들이 다시 정상적으로 렌더링되는 것을 확인한다.

## 예시
```html
<!-- views/home.ejs (조건부 렌더링 부분) -->
<div class="container">
  <div class="pt-3 card-container">
    <% if (products.length > 0) { %>
      <% for (let product of products) { %>
        <!-- 상품 카드 렌더링 (이전 강의 참고) -->
      <% } %>
    <% } else { %>
      <div class="m-5 p-5">
        <h1 class="display-2 text-muted">No products available</h1>
        <a href="#" class="btn btn-outline-dark fs-4 my-3">
          <i class="bi bi-cart-plus-fill p-1"></i>
          Add Product
        </a>
      </div>
    <% } %>
  </div>
</div>
```

## 요약
- EJS의 if 블록 뒤에 else 블록을 추가하는 것만으로 상품 유무에 따른 조건부 렌더링을 구현할 수 있다.
- 상품이 없을 때는 안내 메시지(`No products available`)와 상품 추가 페이지로 이동하는 버튼을 보여준다.
- Bootstrap의 `m-5`, `p-5`, `display-2`, `text-muted`, `btn btn-outline-dark`, `fs-4`, `my-3` 클래스와 Bootstrap Icons의 `bi-cart-plus-fill`로 스타일을 정리한다.
- 상품 배열에 데이터가 있으면 다시 기존 상품 카드 렌더링 로직이 정상 동작한다.
