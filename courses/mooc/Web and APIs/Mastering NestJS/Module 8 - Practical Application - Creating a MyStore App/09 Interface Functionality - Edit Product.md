# Interface & Functionality - Edit Product

## 개요
- Edit Product 페이지의 인터페이스를 Add Product 페이지와 비슷하게 만들고, URL에 포함된 상품 ID를 이용해 해당 상품의 데이터를 조회한 뒤 폼 필드에 미리 채워 넣는(pre-fill) 기능을 구현하는 강의.

## 내용
### Edit Product 인터페이스 만들기
- Edit Product 인터페이스는 Add Product 인터페이스와 비슷하게 유지하고 싶으므로, `addproduct.ejs`의 컨테이너 `<div>` 전체를 복사해 `editproduct.ejs`에 붙여넣는다.
- 제목을 "Edit Product"로 바꾸고, 폼의 `action` 경로를 Edit Product 라우트로 변경한다.
- 버튼 텍스트를 바꾸는데, 아이콘과 텍스트를 제거하고 "Save Changes"로 바꾼다.
- 구조적인(structural) 작업은 이것으로 끝이며, 결과를 확인하면 Edit Product 버튼을 클릭했을 때 이 인터페이스로 이동하는 것을 볼 수 있다.

### 클릭한 상품의 ID를 URL로 전달
- 어떤 상품을 클릭하든 그 상품의 데이터가 각 필드에 채워지도록 하려면, 상품 ID를 기준으로 데이터를 가져와야 하고 이 상품 ID는 URL과 함께 전달되어야 한다.
- `home.ejs`에서 Edit 버튼이 정의된 부분을 찾아, 클릭 시 접근하는 라우트인 `mystore/editproduct`에 동적 ID를 덧붙인다. `/` 뒤에 스크립틀릿으로 `product.id`를 추가한다.
- 이 시점에서 결과를 확인하면 라우트에 상품 ID가 포함되지만, 아직 "not found" 상태가 표시된다.

### AppController에서 동적 ID 받기
- `AppController`의 Edit Product GET 라우트 핸들러 경로에 동적 ID를 추가한다.
- 다시 확인하면 Edit Product 페이지가 정상적으로 렌더링되고, 라우트에 상품 ID가 포함되어 있는 것을 볼 수 있다.

### ID로 상품 데이터 조회
- 이제 선택된 상품 데이터로 필드를 채워야 하므로, `@Param()` 데코레이터로 ID에 해당하는 상품 데이터를 가져오는 로직을 작성한다.
- `id` 속성을 `string` 타입으로 받는다.
- `product`라는 상수를 만들고, `products` 배열의 `find` 메서드에 콜백을 전달한다. 콜백에서는 변수 `p`를 사용해 배열의 각 상품 `id`가 파라미터로 받은 `id`와 같은지 비교한다.
- 상품을 찾으면 해당 상품을 반환하고, 찾지 못하면 `NotFoundException`을 던지며 메시지는 "Product not found"로 한다. (기존에 있던 아래쪽의 `return` 문은 제거한다.)

### 폼 필드에 상품 데이터 바인딩
- `editproduct.ejs` 템플릿의 상품 이름 입력 필드에 `value` 속성을 추가하고, 스크립틀릿 안에서 `product.name`을 바인딩한다.
- 가격 필드에도 같은 방식으로 `value` 속성을 추가하고 `product.price`를 바인딩한다.
- 결과를 확인하면 Edit Product를 클릭했을 때 현재 상품의 데이터가 필드에 채워져 있는 것을 확인할 수 있다.
- 다른 상품들에 대해서도 동일하게 확인해보면 각각의 현재 데이터가 정상적으로 표시된다.
- 이렇게 해서 프로젝트의 인터페이스와 레이아웃 디자인이 마무리되었으며, 다음 단계부터는 이 템플릿들을 데이터베이스와 연결하는 작업을 시작할 예정이라고 언급한다.

## 예시
```html
<!-- views/home.ejs (Edit 버튼에 동적 ID 추가) -->
<a href="/mystore/editproduct/<%= product.id %>" class="btn btn-outline-dark mx-1 mt-4 edit-buttons hover-yellow">
  <i class="bi bi-pencil-fill"></i>
</a>
```

```typescript
// app.controller.ts
import { Controller, Get, Param, NotFoundException, Render } from '@nestjs/common';
import { products } from './products/product';

@Controller()
export class AppController {
  // ...

  @Get('mystore/editproduct/:id')
  @Render('editproduct')
  renderEditProductPage(@Param('id') id: string) {
    const product = products.find((p) => p.id == id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return { product };
  }
}
```

```html
<!-- views/editproduct.ejs (필드에 값 바인딩) -->
<input type="text" name="productname" class="form-control" value="<%= product.name %>">
<input type="text" name="price" class="form-control" value="<%= product.price %>">
```

## 요약
- Edit Product 인터페이스는 Add Product 인터페이스를 복사해 제목, `action` 경로, 버튼 텍스트("Save Changes")만 바꿔 만든다.
- 홈 페이지의 Edit 버튼 링크에 `product.id`를 동적 세그먼트로 추가해 어떤 상품을 클릭했는지 라우트로 전달한다.
- `AppController`의 Edit Product 라우트도 동적 `:id` 파라미터를 받도록 수정한다.
- `@Param('id')`로 받은 ID와 `products` 배열을 `find()`로 비교해 해당 상품을 찾고, 없으면 `NotFoundException`을 던진다.
- 찾은 상품 데이터의 `name`, `price` 값을 EJS의 `value` 속성으로 바인딩해 폼 필드에 미리 채운다.
