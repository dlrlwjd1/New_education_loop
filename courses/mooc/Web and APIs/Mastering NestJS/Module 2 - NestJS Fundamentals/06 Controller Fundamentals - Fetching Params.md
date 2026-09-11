# Controller Fundamentals (Fetching Params)

## 개요
- 라우트 파라미터(route params)로 전달된 ID 값을 `@Param()` 데코레이터(decorator)로 추출하고, 이를 이용해 특정 제품(product) 하나를 조회하는 방법과, 제품을 찾지 못했을 때 `NotFoundException`을 던지는 방법을 다루는 강의.

## 내용
### 같은 컨트롤러에 여러 `@Get()` 데코레이터가 있을 때 주의점
- 지금까지는 전체 제품을 조회(GET)하고 추가(POST)하는 방법을 다뤘다. 이번에는 params를 넘겨 단일 제품 데이터를 조회하는 방법을 다룬다.
- `getProduct`라는 새 GET 핸들러 메서드를 정의한다. 문제는 같은 컨트롤러 안에 `@Get()` 데코레이터가 두 개 있는데 둘 다 고유한 라우트 경로(unique route path)를 갖고 있지 않다는 점이다.
- 이런 상황에서는 Nest가 첫 번째 `@Get()` 데코레이터만 고려하고 두 번째는 무시(ignore)해버려서, 두 번째 데코레이터는 절대 실행되지 않는다.

### 동적 라우트 파라미터 설정
- 마침 우리가 원하는 것은 ID를 기준으로 단일 제품을 조회하는 것이므로, 두 번째 `@Get()`의 경로를 `id`로 지정하면 최종 라우트는 `products/:id`가 된다.
- 실제 ID 값은 라우트 파라미터(route params)로 전달해야 하므로, ID 파라미터는 동적(dynamic)이어야 한다. Express.js에서처럼 콜론(`:`)을 붙여 동적 세그먼트(dynamic segment)를 지정할 수 있다.
- `@Get(':id')`처럼 지정하면 이름이 `id`인 동적 라우트 파라미터가 설정되며, 라우트에 ID 값을 넘기면 그 값이 표시된다.

### `@Param()` 데코레이터로 값 추출하기
- GET 요청은 POST나 PUT 요청과 달리 요청 본문(request body)이 없지만, 라우트 파라미터에는 접근할 수 있다.
- 라우트 파라미터 값을 가져오기 위해 메서드 파라미터에 `@Param()` 데코레이터를 사용한다. `@Param()`의 인자로는 GET 핸들러에서 지정한 것과 동일한 파라미터 이름(`id`)을 지정해야 한다.
- 이렇게 하면 URL 파라미터로 전달된 ID 값을 쉽게 추출할 수 있다. 추출한 값을 저장할 프로퍼티(예: `id: string`)를 선언하고, 템플릿 리터럴(template literal)로 ID 값을 반환해 우선 확인해본다.
- Postman에서 요청 타입을 GET으로 두고 라우트에 ID 값을 넘겨 Send를 클릭하면, params로 전달한 ID 값이 그대로 응답으로 돌아오는 것을 확인할 수 있다.

### 서비스에서 ID로 제품 조회하기
- 제품 서비스 파일에 `getProduct(productId: string)` 메서드를 새로 만든다.
- `this.products.find(...)` 메서드를 사용해 배열에서 제품을 찾는다. `find` 메서드는 콜백 함수(callback function)를 인자로 받아 배열의 각 요소에 대해 실행하며, 이 콜백에서 저장된 제품의 `id`와 URL 파라미터로 전달된 `productId`를 비교해 조건이 맞으면 해당 요소를 찾은 것으로 처리한다.
- 만약 제품이 존재하지 않으면 에러를 던져야 한다. 일반 `Error` 생성자를 사용할 수도 있지만, Nest가 제공하는 `NotFoundException` 클래스를 사용할 수도 있다. 이 클래스는 `@nestjs/common`(common module)에서 import한다.
- `NotFoundException`에는 커스텀 메시지를 전달할 수 있는데, 여기서는 `'Product not found'`라는 메시지를 지정한다.
- 제품을 찾으면 스프레드 연산자를 사용해 제품 데이터의 복사본을 객체로 반환한다.
- 참고로 ID 생성 방식도 `new Date()`에서 `Math.floor(Math.random() * Date.now()).toString(16)` 형태로 바꿔서 사용한다.

### 컨트롤러에서 서비스 호출 및 테스트
- 컨트롤러의 params 핸들러 메서드에서 `return this.productService.getProduct(id);`로 수정한다.
- Postman의 POST 요청 탭에는 이미 제품 body 값이 설정되어 있다. Send를 클릭하면 제품의 ID가 반환된다.
- 이 ID를 복사해 GET 요청 탭의 params에 붙여넣고 Send를 클릭하면, 해당 ID를 가진 제품 데이터가 반환된다.
- 제품 body 값을 바꿔서 다시 POST 요청을 보내고 새 ID를 복사한 뒤, 같은 방식으로 GET 요청을 보내면 두 번째 제품의 데이터도 정상적으로 조회된다.
- 별도의 GET 탭에서 전체 제품 목록(`/products`)을 조회하면 방금 추가한 제품들이 ID와 함께 목록에 나타난다.
- 존재하지 않는 ID를 params에 넣어 요청하면, `'Product not found'`라는 커스텀 메시지와 함께 예외(Exception)가 반환되는 것을 확인할 수 있다.
- 이렇게 URL 파라미터를 NestJS에서 다룰 수 있다.

## 예시
```typescript
// products.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, description: string, price: number) {
    const id = Math.floor(Math.random() * Date.now()).toString(16);
    const newProduct = new Product(id, title, description, price);
    this.products.push(newProduct);
    return id;
  }

  getProducts() {
    return [...this.products];
  }

  getProduct(productId: string) {
    const product = this.products.find((prod) => prod.id === productId);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return { ...product };
  }
}
```

```typescript
// products.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productService.getProduct(id);
  }
}
```

## 요약
- 같은 컨트롤러 안에 라우트 경로가 겹치는 `@Get()` 데코레이터가 여러 개 있으면, Nest는 첫 번째 것만 사용하고 나머지는 무시한다.
- `@Get(':id')`처럼 콜론을 붙이면 동적 라우트 파라미터를 정의할 수 있고, `@Param('id')` 데코레이터로 그 값을 메서드 파라미터로 추출할 수 있다.
- 서비스에서 `Array.find()`의 콜백으로 저장된 데이터와 파라미터 값을 비교해 원하는 항목을 찾는다.
- 항목을 찾지 못하면 `NotFoundException`(`@nestjs/common`)에 커스텀 메시지를 담아 던질 수 있다.
- 반환할 때는 스프레드 연산자로 객체의 복사본을 반환해 원본 데이터가 직접 노출되지 않도록 한다.
