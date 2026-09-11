# Controller Fundamentals (@Delete Handler)

## 개요
- `@Delete()` 데코레이터(decorator)로 특정 ID의 제품(product)을 배열에서 삭제하는 핸들러를 만들고, 이미 삭제된 ID로 다시 삭제를 시도하면 404 에러가 발생하는 것까지 확인하는 강의.

## 내용
### 컨트롤러의 DELETE 핸들러
- 컨트롤러에 `removeProduct`라는 메서드를 만들고 `@Delete()` 데코레이터를 붙인다. `@Delete()`는 HTTP DELETE 요청에 대한 라우트 핸들러를 정의할 때 사용한다.
- 데코레이터의 인자로 동적 ID(`:id`)를 지정한다. DELETE 요청은 요청 본문(request body)을 받지 않으므로, ID는 라우트 파라미터(params)에서만 가져온다.
- `@Param('id') id: string`으로 ID 값을 저장할 프로퍼티를 선언한다.

### 서비스의 `removeProduct` 메서드
- `partialUpdate` 메서드 아래에 `removeProduct(id: string)`라는 새 메서드를 만든다.
- 먼저 ID를 기준으로 제품을 찾아야 하므로, `findProduct(id)`의 반환 값을 `[product, index]`로 구조 분해(destructure)한다.
- 제품을 찾지 못한 경우를 대비해 `if` 조건문으로 제품이 없으면 `NotFoundException`을 `'Product not found'` 메시지와 함께 던진다.
- 제품을 삭제할 때는 `this.products.splice(index, 1)`을 사용한다. 첫 번째 인자는 삭제를 시작할 인덱스, 두 번째 인자 `1`은 삭제할 항목의 개수다.

### 컨트롤러에서 서비스 호출
- 컨트롤러의 `removeProduct` 메서드 안에서 `this.productService.removeProduct(id)`를 호출한다.
- 응답으로는 `{ message: 'Product deleted successfully' }`처럼 삭제 완료를 알리는 메시지를 담은 객체를 반환한다.

### Postman 테스트
- 현재 배열에는 이미 세 개의 제품(A, B, C)이 추가되어 있는 상태다.
- 새 탭을 열어 DELETE 요청을 선택하고 라우트 경로를 설정한다. ID는 GET 요청 탭에서 제품 B의 ID를 복사해 사용한다.
- DELETE 요청 라우트에 제품 B의 ID를 넣고 Send를 클릭하면 "제품이 성공적으로 삭제되었다"는 메시지가 반환된다.
- GET 요청을 다시 보내면 제품 B가 목록에서 제거된 것을 확인할 수 있다.
- 같은 ID로 DELETE 요청을 다시 시도하면, 이미 삭제되어 해당 제품을 찾을 수 없으므로 404 not found 에러가 발생한다.
- 이것이 NestJS에서 DELETE 요청을 구현하는 방법이다.

## 예시
```typescript
// products.service.ts (관련 부분)
removeProduct(id: string) {
  const [product, index] = this.findProduct(id);
  if (!product) {
    throw new NotFoundException('Product not found');
  }
  this.products.splice(index, 1);
}
```

```typescript
// products.controller.ts (관련 부분)
import { Controller, Delete, Param } from '@nestjs/common';

@Delete(':id')
removeProduct(@Param('id') id: string) {
  this.productService.removeProduct(id);
  return { message: 'Product deleted successfully' };
}
```

## 요약
- `@Delete(':id')` 데코레이터로 DELETE 요청을 처리하는 핸들러를 정의하며, DELETE 요청은 본문 없이 라우트 파라미터의 ID만 사용한다.
- 서비스에서는 `findProduct`로 제품과 인덱스를 찾은 뒤, 존재하지 않으면 `NotFoundException`을 던지고, 존재하면 `Array.splice(index, 1)`로 배열에서 제거한다.
- 컨트롤러는 삭제 완료 메시지를 담은 객체를 응답으로 반환한다.
- 이미 삭제된 ID로 다시 DELETE 요청을 보내면 제품을 찾을 수 없어 404 not found 에러가 발생한다.
