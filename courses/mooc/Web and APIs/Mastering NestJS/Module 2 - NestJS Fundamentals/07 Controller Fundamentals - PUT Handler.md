# Controller Fundamentals (@Put Handler)

## 개요
- `@Put()` 데코레이터(decorator)로 기존 제품(product) 데이터를 갱신(update)하는 핸들러를 만들고, PUT 요청이 요청 본문(request body)에 없는 필드를 `null`로 덮어써서 리소스 전체를 교체(replace)하는 방식으로 동작해야 한다는 점을 실습을 통해 확인하는 강의.

## 내용
### PUT과 PATCH의 차이 (개요)
- 기존 데이터를 갱신할 때는 **PUT 요청**과 **PATCH 요청** 두 가지 옵션이 있다. 둘 다 기존 데이터를 갱신한다는 같은 목적을 갖지만 분명한 차이가 있으며, 이번 강의에서는 먼저 PUT 요청을 실습으로 이해한다.

### `@Put()` 핸들러와 서비스의 `updateProduct` 메서드
- 제품 컨트롤러에 `@Put()` 데코레이터를 붙인 `updateProduct` 메서드를 만든다. POST 요청과 마찬가지로 PUT 요청도 데이터를 담은 요청 본문을 가진다.
- 서비스 파일에 `updateProduct` 메서드를 정의한다. 인자로 `id: string`과, 페이로드(payload) 데이터를 담은 객체(`productData`)를 받는다. 이 객체는 `title`, `description`, `price` 속성을 가지며 각각 값이 없을 수도 있으므로 타입은 `string` 또는 `null`(가격은 `number` 또는 `null`)로 정의한다.
- 이 객체에는 `id` 프로퍼티를 포함하지 않는다. ID를 기준으로 제품을 찾아야 할 뿐, ID 자체를 갱신하려는 것은 아니기 때문이다.

### 제품과 인덱스를 함께 반환하는 `findProduct` 메서드
- ID를 기준으로 제품을 찾는 로직은 이전 강의의 `getProduct` 메서드에서 이미 구현했지만, 이번에는 별도의 `private` 메서드 `findProduct(id: string)`를 만든다.
- 이 메서드의 반환 타입은 `[Product, number]`처럼 제품 객체와 그 제품이 배열에서 위치한 인덱스(index), 두 요소를 담은 배열이다. 이후 처리나 조작을 위해 제품 객체 자체와 인덱스를 모두 제공하기 위함이다.
- `this.products.findIndex(...)`로 URL 파라미터의 ID와 배열 요소의 ID를 비교하는 콜백을 전달해 인덱스를 찾는다. `getProduct`에서 사용했던 `find()` 대신 `findIndex()`를 사용하는 이유는, 갱신에는 해당 제품의 인덱스가 필요하기 때문이며 이 방식이 더 정확하다.
- 일치하는 제품을 찾으면 `findIndex`가 해당 인덱스를 반환하고, 찾지 못하면 `-1`을 반환한다. `productIndex === -1`이면 `NotFoundException`에 `'Product not found'` 메시지를 담아 던진다.
- 찾은 경우, `[this.products[productIndex], productIndex]`처럼 제품 데이터와 인덱스를 함께 배열로 반환한다.
- `getProduct` 메서드도 이 `findProduct`를 사용하도록 갱신해, 반환된 배열을 구조 분해(destructure)해서 제품 객체만 꺼내 사용한다.

### `updateProduct` 로직 (1차 버전)
- `updateProduct`에서는 `findProduct(id)`의 반환 값을 `[product, index]`로 구조 분해한다.
- 스프레드 연산자로 기존 `product` 객체와 파라미터로 받은 `productData` 객체를 병합해 `updatedProduct`를 만든다. 이렇게 하면 `productData`에 존재하는 프로퍼티가 `product`의 해당 프로퍼티를 덮어쓰게 된다.
- `this.products[index] = updatedProduct;`로 배열의 해당 인덱스에 갱신된 객체를 할당하고, `updatedProduct`를 반환한다.

### 컨트롤러의 PUT 핸들러
- `@Put(':id')` 메서드에 `@Param('id') id: string`으로 동적 ID를 받고, `@Body() productData: Product`로 요청 본문 전체를 받는다.
- `const updatedProduct = this.productService.updateProduct(id, productData); return updatedProduct;`로 서비스를 호출하고 결과를 반환한다.

### Postman 테스트 (1차) — 문제 발견
- POST 요청(이미 설정된 body)을 먼저 보내 제품을 하나 생성한다.
- 생성된 ID로 GET 요청을 보내 제품 데이터를 확인한다.
- 해당 ID로 PUT 요청을 보내되, body에는 `title`만 `"New Product A"`로 바꿔서 전송한다. 응답 상태 코드는 200이고 제품 제목이 갱신된 것을 확인한다.
- 같은 ID로 다시 GET 요청을 보내면 새 제목이 반영되어 있다. 갱신 자체는 잘 동작하는 것처럼 보인다.
- 하지만 문제가 있다. 일반적으로 PUT 요청은 요청 본문 전체로 리소스를 교체(replace)하는 것이 원칙이다. 즉 title만 담아 PUT 요청을 보냈다면, title을 제외한 나머지 프로퍼티(description, price)는 `null`로 설정되어야 하는데, 실제로는 기존 값이 그대로 유지(병합)되어 버렸다. 이는 진짜 PUT 동작 방식과 다르다.

### `updateProduct` 로직 수정 — 본문에 없는 필드는 null 처리
- 이 문제를 해결하기 위해, 기존 제품과 새 데이터를 통째로 병합하는 대신 각 프로퍼티를 개별적으로 처리한다.
- `title`: `productData.title !== undefined ? productData.title : null`처럼 삼항 연산자(ternary operator)로, 요청 본문에 값이 있으면 그 값을, 없으면(`undefined`) `null`을 할당한다.
- `description`과 `price`도 동일한 패턴으로 처리한다: `description: productData.description !== undefined ? productData.description : null`, `price: productData.price !== undefined ? productData.price : null`.
- 그 다음 배열의 해당 인덱스에 값을 할당할 때, `updatedProduct`를 그대로 할당하지 않고 스프레드 연산자로 `{ ...product, ...updatedProduct }`처럼 기존 `product`를 먼저 펼치고 그 위에 새로 계산한 `updatedProduct`를 덮어쓴다.
- 이렇게 하면 기존 제품의 모든 프로퍼티(특히 `id`)를 보존하면서, `productData`에 제공된 갱신 값은 반영하고 제공되지 않은 값은 `null`로 덮어써서 두 객체를 하나로 병합하게 된다. 이 병합된 객체를 배열의 해당 인덱스에 할당하고 반환한다.

### Postman 테스트 (2차) — 수정 후 확인
- 다시 POST 요청으로 새 제품을 추가하고 GET 요청으로 데이터를 확인한다.
- PUT 요청에서 다시 title 프로퍼티만 갱신하도록 보내고 Send를 클릭한다.
- 이번에는 GET 요청 결과에서 title을 제외한 나머지 프로퍼티가 모두 `null`로 설정된 것을 확인할 수 있다. 즉 제품 데이터가 (요청 본문 기준으로) 완전히 덮어써진(overwritten) 것이다.
- 이것이 실제 PUT 요청의 동작 방식, 즉 요청 본문 전체로 리소스를 갱신하는 방식이다. 반대로 PATCH 요청은 프로퍼티의 부분 적용(partial application)을 허용하는데, 이는 다음 강의에서 다룬다.

## 예시
```typescript
// products.service.ts (관련 부분)
private findProduct(id: string): [Product, number] {
  const productIndex = this.products.findIndex((prod) => prod.id === id);
  if (productIndex === -1) {
    throw new NotFoundException('Product not found');
  }
  return [this.products[productIndex], productIndex];
}

getProduct(id: string) {
  const [product] = this.findProduct(id);
  return { ...product };
}

updateProduct(
  id: string,
  productData: { title?: string; description?: string; price?: number },
) {
  const [product, index] = this.findProduct(id);

  const updatedProduct = {
    title: productData.title !== undefined ? productData.title : null,
    description:
      productData.description !== undefined ? productData.description : null,
    price: productData.price !== undefined ? productData.price : null,
  };

  this.products[index] = { ...product, ...updatedProduct };
  return this.products[index];
}
```

```typescript
// products.controller.ts (관련 부분)
import { Body, Controller, Param, Put } from '@nestjs/common';
import { Product } from './products.model';

@Put(':id')
updateProduct(@Param('id') id: string, @Body() productData: Product) {
  const updatedProduct = this.productService.updateProduct(id, productData);
  return updatedProduct;
}
```

## 요약
- PUT과 PATCH 모두 기존 데이터를 갱신하는 목적을 갖지만 동작 방식이 다르다.
- `findProduct` 같은 헬퍼 메서드로 `[제품 객체, 인덱스]`를 함께 반환하면, 조회뿐 아니라 갱신(배열 인덱스 접근)에도 재사용할 수 있다.
- `findIndex`는 `-1`을 반환해 "찾지 못함"을 표현하며, 이 경우 `NotFoundException`으로 처리한다.
- 진짜 PUT 시맨틱(semantics)은 요청 본문에 없는 프로퍼티를 `null`로 덮어써 리소스 전체를 교체하는 것이다. 단순히 기존 객체와 새 데이터를 스프레드로 병합하면 부분 갱신처럼 동작해버려 PUT의 의미와 맞지 않는다.
- `{ ...product, ...updatedProduct }`처럼 원본을 먼저 펼치고 계산된 값을 그 위에 덮어쓰면 `id`는 보존하면서 나머지 필드는 요청 본문 기준으로 완전히 교체할 수 있다.
- 다음 강의에서는 프로퍼티의 부분 갱신(partial update)을 지원하는 PATCH 요청을 다룬다.
