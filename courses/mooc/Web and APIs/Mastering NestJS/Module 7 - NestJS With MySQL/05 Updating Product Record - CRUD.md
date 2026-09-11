# Updating Product Record (CRUD)

## 개요
- CRUD 기능 중 **Update(수정)**에 해당하는 부분을 다루는 강의. TypeORM의 `merge` 메서드를 사용해 기존 값을 유지하면서 새 값으로 업데이트하는 방식과, `update` 메서드와의 차이를 설명한다.

## 내용
### updateProduct 서비스 메서드
- `ProductsService`에 `async updateProduct(id: number, updateData: ProductDto)` 메서드를 정의한다.
- 먼저 수정할 상품을 찾아야 하므로 `const product = await this.productRepository.findOne({ where: { id } });`로 조회한다. 이때 전달된 `id`가 테이블에 실제로 존재해야 한다.
- 상품이 존재하지 않으면 `NotFoundException`을 던지며, 메시지는 `Product with ID ${id} not found`처럼 동적 값을 포함한다.
- 상품이 존재하면 `productRepository.merge()`를 사용해 레코드를 업데이트한다.

### merge 메서드
- TypeORM의 **merge** 메서드는 엔티티를 새 값으로 업데이트하는 편리한 유틸리티 메서드다. 업데이트 대상이 아닌 필드는 기존 값을 그대로 유지하면서, 업데이트하려는 필드만 새 값으로 채우고 싶을 때 특히 유용하다.
- `merge`는 두 개의 인자를 받는다. 첫 번째는 대상 엔티티(target entity), 즉 데이터베이스에서 조회한 기존 상품 레코드를 담은 `product` 변수다. 두 번째는 새 값을 담은 소스 객체(source object)인 `updateData`, 즉 사용자가 업데이트를 위해 제공한 데이터다.

### merge를 쓰는 이유 (vs update)
- `update` 메서드를 직접 사용하면 엔티티를 먼저 조회하지 않고도 지정된 필드를 데이터베이스에서 바로 업데이트할 수 있어 효율적일 수 있다.
- 하지만 `update` 메서드는 엔티티의 생명주기 훅(life cycle hooks), 예를 들어 `beforeUpdate`, `afterUpdate` 같은 훅을 건너뛴다(bypass).
- 일반적으로 업데이트 요청을 하면 데이터베이스의 엔티티를 먼저 메모리에 로드한 뒤 레코드를 업데이트해야 하는데, `update` 메서드는 이 로딩 과정을 건너뛰고 바로 레코드를 업데이트한다.
- 이런 이유로 `merge`를 사용한다. `merge`는 엔티티를 먼저 로드한 뒤 업데이트하므로, 모든 생명주기 훅과 유효성 검사(validation)가 제대로 실행되는 것을 보장한다.
- `merge`로 업데이트한 뒤에는 반드시 `return await this.productRepository.save(product);`로 저장해야 한다.

### ProductDto에 유효성 검사 추가
- `product.dto.ts`의 `productName` 필드에 값이 비어 있거나 `undefined`가 되지 않도록 `@IsNotEmpty()` 검증자를 추가하고, 메시지로 `"Please define a product name"`을 지정한다.

### 컨트롤러에서 PUT 라우트 정의
- 경로를 `update/:id`로 설정한 PUT 라우트 핸들러를 정의한다.
- 메서드 이름은 `async updateProduct`이며, 인자로 `@Param('id', ParseIntPipe) id: number`를 받는다. `id`가 number 타입이므로 `ParseIntPipe`를 적용한다.
- `@Body()` 데코레이터로 요청 본문(request body)을 받아 `updateData: ProductDto` 속성에 담는다.
- `await this.productService.updateProduct(id, updateData);`를 호출하고 `"Product updated successfully"` 메시지를 반환한다.

### 테스트
- `products` 테이블에 4개의 레코드가 있는 상태에서, 두 번째 레코드(Orange)의 가격을 수정한다.
- Postman에서 요청 타입을 PUT으로 바꾸고 경로를 `localhost:3000/product/update/2`로 설정한다.
- 요청 본문에 `productName: "Orange"`, `price: 23`을 넣고 요청을 보내면 상품이 성공적으로 업데이트된다.
- `products` 테이블을 다시 확인하면 Orange의 가격이 23으로 업데이트된 것을 확인할 수 있다.

## 예시
```typescript
// products.service.ts
async updateProduct(id: number, updateData: ProductDto) {
  const product = await this.productRepository.findOne({ where: { id } });
  if (!product) {
    throw new NotFoundException(`Product with ID ${id} not found`);
  }
  const updatedProduct = this.productRepository.merge(product, updateData);
  return await this.productRepository.save(updatedProduct);
}
```

```typescript
// dto/product.dto.ts
import { IsString, IsNotEmpty, Min } from 'class-validator';

export class ProductDto {
  @IsString()
  @IsNotEmpty({ message: 'Please define a product name' })
  productName: string;

  @Min(0.01, { message: 'price must be greater than zero' })
  price: number;
}
```

```typescript
// products.controller.ts
@Put('update/:id')
async updateProduct(
  @Param('id', ParseIntPipe) id: number,
  @Body() updateData: ProductDto,
) {
  await this.productService.updateProduct(id, updateData);
  return 'Product updated successfully';
}
```

## 요약
- `merge` 메서드는 기존 엔티티를 먼저 조회한 뒤 새 값으로 병합(merge)해 업데이트하며, 엔티티의 생명주기 훅과 유효성 검사를 모두 정상적으로 실행시킨다.
- `update` 메서드는 엔티티 조회 없이 바로 필드를 업데이트해 더 빠를 수 있지만, 생명주기 훅을 건너뛴다는 단점이 있다.
- 업데이트 전에 대상 레코드가 존재하는지 확인하고, 없으면 `NotFoundException`을 던진다.
- `merge` 이후에는 반드시 `save()`를 호출해야 변경 사항이 실제로 저장된다.
- PUT 라우트에서 URL의 `id` 파라미터는 `ParseIntPipe`로 숫자로 변환하고, 요청 본문은 `ProductDto`로 검증한다.
