# Fetching Documents from MongoDB

## 개요
- Mongoose의 `find()`, `findById()` 메서드로 전체 상품 목록 조회와 ID 기반 단건 조회 기능을 구현하고, 유효하지 않은 ID를 검증(validate)하는 방법을 다루는 강의.

## 내용
### 전체 문서 조회 — findAll
- 현재 컬렉션에는 상품이 몇 개 더 추가되어 총 4개의 문서(document)가 있는 상태에서 시작한다.
- product 서비스 파일에서 `findAll` 메서드를 만들고 `this.productModel.find()`를 반환하도록 작성한다.
- `find` 메서드는 컬렉션의 모든 문서를 가져와 배열(array) 형태로 보여준다.
- `find` 메서드와 함께 쿼리를 실행하는 `exec()` 메서드도 붙여준다. 필수는 아니지만 좋은 방법(good approach)으로 여겨진다. Mongoose의 `exec()`는 쿼리를 실행하고 프로미스(promise)를 반환하며, 문서를 찾거나(finding) 수정(updating)하거나 삭제(deleting)하는 작업을 수행할 때 흔히 사용된다.
- 컨트롤러에서는 GET 라우트 핸들러와 `findAll` 메서드를 정의하며, 이 메서드는 `this.productService.findAll()`을 반환한다.
- Postman에서 요청 타입을 GET으로 바꿔 요청하면 컬렉션의 모든 문서를 받아온다.

### ID로 단건 조회 — findOne
- 서비스 파일에 `findOne` 메서드를 추가하고, `string` 타입의 `id` 파라미터를 받는다.
- `product` 모델의 `findById` 메서드를 사용하고, 괄호 안에 `id` 파라미터를 전달한다.
- 컨트롤러에는 동적 ID(dynamic ID)를 포함한 또 다른 GET 라우트 핸들러와 `findOne` 메서드를 정의한다. `@Param()` 데코레이터로 ID 값을 받아 `string` 타입의 `id` 프로퍼티에 저장한다.
- 상수를 만들어 `id`를 인자로 전달한 `findOne` 메서드 결과를 할당하고, 조건문(if condition)으로 상품이 존재하지 않으면 `HttpException`을 새로 던진다 — 메시지는 "product not found", 상태 코드는 404.
- 상품이 존재하면 해당 product를 반환한다.
- Postman에서 products 컬렉션의 상품 ID를 복사해 라우트 경로에 붙여 요청하면 ID에 해당하는 단일 상품이 조회된다.

### 유효하지 않은 ID 검증
- 임의(random)의 ID로 요청하면 내부 서버 오류(internal server error)가 발생하며, "Cast to ObjectId failed for value..." 오류 메시지가 나타난다.
- Mongoose에서 권장되는 대안적인 방법으로, `Mongoose.Types.ObjectId.isValid(id)`를 사용해 ID가 유효한 형식인지 검사하는 상수 `isValid`를 만든다.
- ID가 유효하지 않다면(`!isValid`) `HttpException`을 새로 던진다 — 메시지는 "Product ID is not valid", 상태 코드는 404.
- 저장 후 다시 테스트하면 유효하지 않은 ID에 대해서는 "Product ID is not valid" 메시지가 반환되고, 유효한 ID를 전달하면 해당 ID에 맞는 특정 상품 문서가 정상적으로 조회된다.

## 예시
```typescript
// product.service.ts
async findAll(): Promise<Product[]> {
  return this.productModel.find().exec();
}

async findOne(id: string): Promise<Product> {
  const isValid = Mongoose.Types.ObjectId.isValid(id);
  if (!isValid) {
    throw new HttpException('Product ID is not valid', 404);
  }

  const product = await this.productModel.findById(id).exec();
  if (!product) {
    throw new HttpException('Product not found', 404);
  }
  return product;
}
```

```typescript
// product.controller.ts
@Get()
findAll() {
  return this.productService.findAll();
}

@Get(':id')
findOne(@Param('id') id: string) {
  return this.productService.findOne(id);
}
```

## 요약
- `find()`로 전체 문서를, `findById(id)`로 단건 문서를 조회하며 두 경우 모두 `exec()`로 쿼리를 실행하는 것이 권장된다.
- 상품이 존재하지 않으면 `HttpException`(상태 코드 404)을 던져 "product not found"를 알려준다.
- 유효하지 않은 형식의 ID로 조회하면 캐스팅 오류(cast to ObjectId failed)로 내부 서버 오류가 발생하므로, `Mongoose.Types.ObjectId.isValid(id)`로 먼저 ID 유효성을 검사해야 한다.
- ID가 유효하지 않으면 별도의 `HttpException`("Product ID is not valid", 404)을 던져 명확한 오류 메시지를 제공한다.
