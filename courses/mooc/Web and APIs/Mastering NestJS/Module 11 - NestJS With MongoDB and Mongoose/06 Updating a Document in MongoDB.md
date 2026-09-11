# Updating a Document in MongoDB

## 개요
- `findByIdAndUpdate` 메서드로 MongoDB 문서를 수정(update)하는 기능을 PATCH 라우트로 구현하고, 기본 동작으로 인해 이전 데이터가 반환되는 문제를 `new: true` 옵션으로 해결하는 강의.

## 내용
### 서비스 파일 — update 메서드
- 서비스 파일에 `update` 메서드를 만들고, `id`(string 타입)와 `productDto`, 두 인자를 받는다. 업데이트를 하려면 이 두 인자가 모두 필요하다.
- `return await this.productModel.findByIdAndUpdate(id, productDto)`처럼 첫 번째 인자로 `id`, 두 번째 인자로 `productDto`를 전달하는 `findByIdAndUpdate` 메서드를 사용한다.
- 쿼리를 실행하기 위해 `exec()` 메서드를 붙인다.

### 컨트롤러 — PATCH 라우트 핸들러
- PATCH 라우트 핸들러를 추가하고 동적 ID를 받는 `update` 메서드를 정의한다. 이 메서드는 `id` 파라미터와 `productDto` 타입의 요청 본문(request body)을 받는다.
- 먼저 `findOne`에서 사용했던 것과 동일한 ID 유효성 검사 조건(`isValid` 조건 로직)을 그대로 가져와 적용한다.
- 상수 `product`를 만들어 product 서비스의 `update` 메서드에 `id`와 `productDto`를 전달한 결과를 할당한다.
- 상품이 존재하지 않는 경우 `HttpException`("product not found", 상태 코드 404)을 던진다. 상품이 존재하면 해당 product를 반환한다.
- 마지막으로 클래스 유효성 검사기(class validator)를 적용하기 위해 `@UsePipes()` 데코레이터와 `ValidationPipe`를 지정한다.

### Postman 테스트 — 이전 데이터가 반환되는 문제
- Postman에서 새 탭을 만들고 요청 타입을 PATCH로 설정한 뒤 라우트 경로를 채운다.
- banana의 가격을 현재 10에서 3으로 수정하는 요청 본문(`productName: banana, price: 3`)을 만들어 요청을 보내면 문서가 반환된다.
- 그런데 응답에서 가격이 여전히 10(이전 데이터, older data)으로 표시된다. 하지만 데이터베이스 컬렉션을 직접 확인해 보면 실제로는 업데이트가 이루어져 banana의 가격이 3으로 설정되어 있다.
- `findByIdAndUpdate` 메서드의 기본 동작(default behavior)은 업데이트 이전의 원본 문서(original document)를 반환하는 것이기 때문에 이런 현상이 나타난다.

### new: true 옵션으로 해결
- 업데이트된 새 문서를 반환하려면 옵션에 `new` 프로퍼티를 추가하고 이를 `true`로 설정해야 한다. 이렇게 하면 컬렉션 안에서 업데이트된 새 문서가 반환된다.
- 이를 적용한 뒤 가격을 13으로 설정해 다시 요청하면, 응답으로 새로 업데이트된 문서(가격 13)를 받는다.
- 데이터베이스를 확인해도 banana 상품의 가격이 13으로 설정되어 있는 것을 확인한다.

## 예시
```typescript
// product.service.ts
async update(id: string, productDto: ProductDto): Promise<Product> {
  return await this.productModel
    .findByIdAndUpdate(id, productDto, { new: true })
    .exec();
}
```

```typescript
// product.controller.ts
@Patch(':id')
@UsePipes(ValidationPipe)
async update(@Param('id') id: string, @Body() productDto: ProductDto) {
  const isValid = Mongoose.Types.ObjectId.isValid(id);
  if (!isValid) {
    throw new HttpException('Product ID is not valid', 404);
  }

  const product = await this.productService.update(id, productDto);
  if (!product) {
    throw new HttpException('Product not found', 404);
  }
  return product;
}
```

## 요약
- `findByIdAndUpdate(id, dto)`로 문서를 수정하며, 컨트롤러에서는 PATCH 라우트 핸들러와 `@UsePipes(ValidationPipe)`를 사용한다.
- ID 유효성 검사와 "상품 없음" 처리는 `findOne`에서 사용한 로직을 그대로 재사용한다.
- `findByIdAndUpdate`의 기본 동작은 업데이트 이전의 원본 문서를 반환하므로, 실제 DB는 갱신되었어도 응답에는 예전 값이 보일 수 있다.
- 업데이트된 최신 문서를 응답으로 받으려면 옵션에 `new: true`를 추가해야 한다.
