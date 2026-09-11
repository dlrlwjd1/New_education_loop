# Deleting a Document from MongoDB

## 개요
- `findByIdAndDelete` 메서드로 ID 기반 문서 삭제(delete) 기능을 서비스와 DELETE 라우트 핸들러에 구현하고 Postman으로 삭제를 검증하는 강의.

## 내용
### 서비스 파일 — delete 메서드
- 서비스 파일에 `delete` 메서드를 만들고 `string` 타입의 `id` 파라미터를 받는다.
- `return await this.productModel.findByIdAndDelete(id).exec()`로 작성하며, 이는 문서 ID를 기준으로 컬렉션에서 해당 문서를 삭제한다.

### 컨트롤러 — DELETE 라우트 핸들러
- 동적 ID를 받는 DELETE 라우트 핸들러를 추가하고 `delete` 메서드를 정의한다.
- `@Param()` 데코레이터로 ID 값을 받아 `string` 타입의 `id` 프로퍼티에 저장한다.
- 이전 강의들과 동일한 ID 유효성 검사 로직(validation logic)을 다시 가져와 그대로 적용한다.
- 상수 `product`를 만들어 product 서비스의 `delete` 메서드에 `id`를 전달한 결과를 할당하고, 이 product를 반환한다.

### Postman 테스트
- Postman에서 요청 타입을 DELETE로 선택하고 라우트 경로를 설정한다.
- 첫 번째 상품인 Apple을 삭제하기 위해 해당 ID를 복사해 붙여넣고 요청을 보내면, 삭제된 상품(deleted product)이 응답으로 반환된다.
- 컬렉션을 확인하면 문서가 3개만 남아 있는 것을 확인한다.
- 같은 방식으로 pineapple 상품도 삭제해보면 정상적으로 문서가 삭제되며, 데이터베이스에서도 해당 값이 더 이상 존재하지 않는 것을 확인한다.

## 예시
```typescript
// product.service.ts
async delete(id: string): Promise<Product> {
  return await this.productModel.findByIdAndDelete(id).exec();
}
```

```typescript
// product.controller.ts
@Delete(':id')
async delete(@Param('id') id: string) {
  const isValid = Mongoose.Types.ObjectId.isValid(id);
  if (!isValid) {
    throw new HttpException('Product ID is not valid', 404);
  }

  const product = await this.productService.delete(id);
  if (!product) {
    throw new HttpException('Product not found', 404);
  }
  return product;
}
```

## 요약
- `findByIdAndDelete(id)`로 ID 기준 문서를 삭제하며, `exec()`로 쿼리를 실행한다.
- 컨트롤러의 DELETE 라우트 핸들러에서도 앞서 사용한 ID 유효성 검사 로직을 동일하게 재사용한다.
- 삭제 성공 시 삭제된 문서(deleted product)를 응답으로 반환한다.
- Postman으로 여러 상품을 순서대로 삭제하며 컬렉션에서 실제로 문서 수가 줄어드는 것을 확인했다.
