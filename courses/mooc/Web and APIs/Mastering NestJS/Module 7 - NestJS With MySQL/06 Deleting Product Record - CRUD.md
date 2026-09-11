# Deleting Product Record (CRUD)

## 개요
- CRUD 기능 중 **Delete(삭제)**에 해당하는 부분을 다루는 강의. TypeORM의 `remove` 메서드로 상품 레코드를 삭제하고, `delete` 메서드와의 차이를 설명한다.

## 내용
### deleteProduct 서비스 메서드
- `ProductsService`에 `async deleteProduct(id: number)` 메서드를 정의한다.
- 이전 강의들과 마찬가지로 먼저 `productRepository.findOne`으로 `id`에 해당하는 상품을 조회하는 상수를 만든다.
- 상품을 찾지 못하면 `NotFoundException`을 던지며, 메시지는 `Product with ID ${id} not found`처럼 동적 값을 포함한다.
- 상품이 존재하면 `return await this.productRepository.remove(product);`를 호출해 해당 `id`의 상품을 삭제한다.

### remove 메서드 vs delete 메서드
- **delete** 메서드를 사용할 수도 있는데, 이는 리포지토리에서 엔티티를 메모리에 로드하지 않고 바로 삭제한다.
- 반면 **remove** 메서드는 삭제하기 전에 먼저 상품 엔티티를 로드해 실제로 존재하는지 확인하며, 삭제 전에 추가적인 처리(operation)나 유효성 검사(validation)를 수행할 수 있게 해준다.
- 이런 이유로 `remove`가 특정 상황에서는 더 안전하고(safer) 유연하다(flexible)고 설명한다.

### 컨트롤러에서 DELETE 라우트 정의
- PUT 요청 핸들러 다음에 경로 `delete/:id`를 갖는 DELETE 라우트 핸들러를 정의한다.
- 메서드 이름은 `async deleteProduct`이며, `@Param('id')` 데코레이터로 `id`를 받고 `ParseIntPipe`를 적용해 number 타입으로 파싱한다.
- `await this.productService.deleteProduct(id);`를 호출하고 `"Product deleted successfully"` 메시지를 반환한다.

### 테스트
- MySQL 터미널에서 `products` 테이블에 4개의 레코드가 있는 상태를 확인한다.
- Postman에서 요청 타입을 DELETE로 바꾸고 경로를 `localhost:3000/product/delete/3`으로 설정해 요청을 보내면 `"Product deleted successfully"` 메시지가 반환되고, 테이블을 확인하면 ID가 3인 상품이 삭제되어 있다.
- 같은 방식으로 ID가 1인 상품도 삭제한다.
- 이미 삭제된 ID(1)로 다시 같은 요청을 보내면 `Product with ID 1 not found` 메시지가 반환되어, 해당 ID가 더 이상 테이블에 존재하지 않음을 확인할 수 있다.

## 예시
```typescript
// products.service.ts
async deleteProduct(id: number) {
  const product = await this.productRepository.findOne({ where: { id } });
  if (!product) {
    throw new NotFoundException(`Product with ID ${id} not found`);
  }
  return await this.productRepository.remove(product);
}
```

```typescript
// products.controller.ts
@Delete('delete/:id')
async deleteProduct(@Param('id', ParseIntPipe) id: number) {
  await this.productService.deleteProduct(id);
  return 'Product deleted successfully';
}
```

## 요약
- 삭제 로직도 먼저 대상 레코드를 조회한 뒤, 없으면 `NotFoundException`을 던지는 패턴을 그대로 따른다.
- `remove` 메서드는 엔티티를 먼저 로드해 존재 여부를 확인하고 추가 검증을 거칠 수 있어, 바로 삭제하는 `delete` 메서드보다 안전하고 유연하다.
- DELETE 라우트의 `id` 파라미터도 `ParseIntPipe`로 number 타입으로 변환한다.
- 이미 삭제된 ID로 다시 삭제를 요청하면 `NotFoundException`이 발생해 데이터 정합성을 확인할 수 있다.
