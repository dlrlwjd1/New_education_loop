# Configuring Add Product Route

## 개요
- 상품 추가(Add Product) 페이지로 이동하는 라우트(route)를 `AppController`에 정의하고, 홈 페이지 및 navbar에 연결된 링크가 실제로 해당 페이지로 이동하는지 확인하는 강의.

## 내용
### Add Product 라우트 정의
- `AppController`에 새로운 GET 라우트 핸들러를 추가한다. 경로는 `addproduct`이며, 메서드 이름은 `renderAddProductPage`(강의에서는 "render a product page"로 언급)이고 현재는 `null`을 반환한다.
- NestJS에서는 라우트를 이렇게 간단히 설정할 수 있는데, Express에서처럼 `express.Router`를 명시적으로 지정할 필요가 없기 때문이다. 대신 데코레이터, 즉 라우트 핸들러(route handler)를 이용해 더 선언적인(declarative) 방식으로 라우트를 정의한다.

### 홈 페이지 라우트 경로 정리
- 홈 페이지의 GET 핸들러 경로도 업데이트해서, 모든 라우트가 `mystore` 경로 아래에 속하도록(fall under) 맞춘다.
- 브라우저에서 `localhost:3000/mystore/addproduct` 경로로 직접 접속해 Add Product 페이지가 정상적으로 렌더링되는지 확인한다.

### navbar와 홈 페이지에 라우트 연결
- `home.ejs`에서 Add Product로 연결되는 `<a>` 태그의 `href`를 `/mystore/addproduct`로 설정한다.
- `navbar.ejs` 템플릿에서도 동일한 경로(`/mystore/addproduct`)로 Add Product 링크의 `href`를 지정한다.

### 확인
- 홈 페이지에서 "Add Product"를 클릭하면 Add Product 템플릿으로 정상적으로 이동한다.
- 상품 배열의 객체들을 주석 처리(comment out)해 "No products available" 메시지가 표시되는 상태에서도, 해당 화면의 Add Product 버튼을 클릭하면 마찬가지로 Add Product 템플릿으로 이동하는 것을 확인한다.
- 모든 것이 정상적으로 동작함을 확인한 뒤, 다음 강의에서는 Add Product 인터페이스를 만들 예정이라고 언급한다.

## 예시
```typescript
// app.controller.ts
import { Controller, Get, Render } from '@nestjs/common';
import { products } from './products/product';

@Controller()
export class AppController {
  @Get('mystore')
  @Render('home')
  renderPage() {
    return { products };
  }

  @Get('mystore/addproduct')
  @Render('addproduct')
  renderAddProductPage() {
    return null;
  }
}
```

```html
<!-- views/home.ejs (Add Product 링크) -->
<a href="/mystore/addproduct" class="btn btn-outline-dark fs-4 my-3">
  <i class="bi bi-cart-plus-fill p-1"></i>
  Add Product
</a>
```

```html
<!-- views/includes/navbar.ejs (Add Product 링크) -->
<li class="nav-item">
  <a href="/mystore/addproduct" class="nav-link text-light fs-4 px-3">Add Product</a>
</li>
```

## 요약
- NestJS는 Express의 Router처럼 별도 설정 없이 `@Get()` 같은 데코레이터만으로 선언적으로 라우트를 정의할 수 있다.
- Add Product 페이지 라우트는 `mystore/addproduct` 경로로 `AppController`에 추가한다.
- 홈 페이지 라우트도 `mystore` 하위 경로로 통일해 전체 라우트 구조의 일관성을 맞춘다.
- `home.ejs`와 `navbar.ejs` 양쪽의 Add Product 링크(`href`)를 새 라우트 경로로 업데이트해야 실제 클릭 시 정상적으로 이동한다.
