# Controller Fundamentals (@Patch Handler)

## 개요
- `@Patch()` 데코레이터(decorator)로 부분 갱신(partial update)을 처리하는 핸들러를 만들고, PUT 요청과 달리 요청 본문(request body)에 담긴 필드만 갱신되고 나머지 필드는 그대로 유지된다는 차이를 실습으로 확인하는 강의.

## 내용
### `@Patch()` 핸들러와 서비스의 `partialUpdate` 메서드
- 제품 컨트롤러에 `@Patch()` 데코레이터를 붙인 `partialUpdate` 메서드를 만든다.
- 서비스 파일에도 `partialUpdate` 메서드를 만든다. 인자로 `id: string`과, `title`, `description`, `price` 프로퍼티를 가진 제품 데이터 객체(`productData`)를 받는다. 이는 PUT 요청에서 사용했던 것과 같은 로직을 따른다.
- 메서드 안에서 `findProduct(id)`를 호출해 제품 객체와 인덱스 값을 구조 분해(destructure)한다.
- 새 객체 `updatedProduct`를 만들되, 기존 제품 객체와 파라미터로 전달된 `productData`를 스프레드 연산자(spread operator)로 병합한다. `productData`에 존재하는 프로퍼티는 제품 객체의 해당 프로퍼티를 덮어써서 제품을 새 데이터로 갱신하는 효과를 낸다.
- `this.products[index] = updatedProduct;`로 배열의 해당 인덱스에 갱신된 객체를 할당하고 `updatedProduct`를 반환한다.
- PUT 요청 때와 달리, 여기서는 값이 없는 프로퍼티를 `null`로 강제하는 별도 처리를 하지 않는다. 단순히 기존 객체 위에 전달받은 데이터를 병합하기만 하면 되는데, 이것이 곧 부분 갱신을 자연스럽게 만들어준다.

### 컨트롤러의 PATCH 핸들러
- `@Patch(':id')` 메서드에 `@Param('id') id: string`으로 동적 ID를 받는다.
- PATCH 요청도 데이터를 담은 요청 본문을 가지므로 `@Body()` 데코레이터로 제품 데이터를 받는다. 파라미터 타입은 제품 모델(Product model) 타입으로 지정한다.
- `const updatedProduct = this.productService.partialUpdate(id, productData); return updatedProduct;`로 서비스를 호출하고 결과를 반환한다.

### Postman 테스트
- POST 요청(이미 설정된 body)을 먼저 보내 제품을 생성한다.
- 생성된 ID로 GET 요청을 보내 제품 데이터를 확인한다.
- 해당 ID로 PATCH 요청을 보낸다. 라우트 경로에 ID를 지정하고, body에는 `title`은 `"New Product A"`로, `price`는 `18.32`로만 변경해서 보낸다. 즉 description은 그대로 두고 title과 price만 부분적으로(partial) 갱신하는 것이다.
- Send를 클릭하면 상태 코드 200과 함께 제품의 title과 price가 갱신된다.
- 같은 ID로 GET 요청을 다시 보내면, title과 price는 갱신된 값으로, 나머지 필드(description)는 변경 없이 그대로 남아 있는 것을 확인할 수 있다.

### PUT과 PATCH의 차이 정리
- PATCH 요청은 요청 본문에 지정된 필드만 갱신하고 나머지 필드는 그대로 둔다(unchanged).
- 반면 PUT 요청은 제공된 데이터로 리소스 전체를 덮어쓴다(override entire resource) — 즉 요청 본문에 없는 필드는 이전 강의에서처럼 `null`로 처리된다.
- 이것이 PUT과 PATCH의 기본적인 차이다: PUT은 리소스 전체 교체, PATCH는 지정된 필드만 선택적으로 갱신.

## 예시
```typescript
// products.service.ts (관련 부분)
partialUpdate(
  id: string,
  productData: { title?: string; description?: string; price?: number },
) {
  const [product, index] = this.findProduct(id);
  const updatedProduct = { ...product, ...productData };
  this.products[index] = updatedProduct;
  return updatedProduct;
}
```

```typescript
// products.controller.ts (관련 부분)
import { Body, Controller, Param, Patch } from '@nestjs/common';
import { Product } from './products.model';

@Patch(':id')
partialUpdate(@Param('id') id: string, @Body() productData: Product) {
  const updatedProduct = this.productService.partialUpdate(id, productData);
  return updatedProduct;
}
```

## 요약
- `@Patch()` 데코레이터는 부분 갱신을 처리하는 핸들러에 사용하며, `@Param()`으로 ID를, `@Body()`로 갱신할 데이터를 받는다는 점은 PUT과 동일하다.
- 서비스에서는 기존 제품 객체와 전달받은 `productData`를 스프레드 연산자로 병합만 하면 되며, 값이 없는 필드는 그대로 유지된다.
- PATCH 요청은 요청 본문에 포함된 필드만 갱신하고 나머지는 그대로 유지하는 반면, PUT 요청은 리소스 전체를 요청 본문 기준으로 교체(누락 필드는 `null` 처리)한다.
- 이것이 REST API에서 PUT과 PATCH를 구분해서 사용하는 핵심 이유다.
