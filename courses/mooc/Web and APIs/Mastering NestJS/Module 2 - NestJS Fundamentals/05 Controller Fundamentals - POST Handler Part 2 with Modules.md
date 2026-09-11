# Controller Fundamentals (@Post Handler) - Pt 2 with Modules

## 개요
- NestJS의 **모듈(module)** 개념을 이해하고, 이전 강의에서 만든 컨트롤러(controller)와 서비스(service)를 `ProductsModule`로 묶은 뒤, Postman으로 실제 POST/GET 요청을 주고받아 제품 데이터가 배열에 저장되고 조회되는 과정을 확인하는 강의.

## 내용
### 모듈(Module)이란
- **모듈(module)**은 `@Module()` 데코레이터(decorator)가 붙은 클래스다. `@Module()` 데코레이터는 Nest가 애플리케이션 구조를 조직화(organize)하는 데 사용하는 메타데이터(metadata)를 제공한다.
- 모든 애플리케이션에는 최소 하나의 모듈, 즉 **루트 모듈(root module)**이 있으며, 이는 Nest가 애플리케이션을 빌드할 때 사용하는 시작점(starting point)이다.
- 소규모 애플리케이션은 보통 루트 모듈 하나만 가지지만, 대규모 애플리케이션에서는 컴포넌트를 조직화하는 효과적인 방법으로 여러 모듈을 사용하는 것이 강력히 권장(recommended)된다.
- 모듈은 애플리케이션이 원활히 동작하고 필요한 작업을 수행하는 데 필요한 모든 기능(functionalities)과 의존성(dependencies)을 캡슐화(encapsulate)한다.
- 모듈을 다루는 여러 방식으로 feature module, shared module, global module, dynamic module 등이 있으며, 이는 강의를 진행하며 차차 살펴볼 예정이라고 언급한다.

### `ProductsModule` 생성하기
- `nest g module products --no-spec` 명령으로 `products` 폴더 안에 새 모듈 파일을 생성한다.
- 제품 컨트롤러의 기능이 동작하도록 하려면 모듈 데코레이터의 `controllers` 프로퍼티에 `ProductsController`를 추가한다.
- 의존성 주입(dependency injection)이 동작하도록 `providers` 프로퍼티에 `ProductsService`를 추가한다.
- 이렇게 하면 `ProductsModule`이 준비된다.
- 보통 Nest CLI가 모듈, 컨트롤러, 프로바이더의 import 업데이트를 알아서 처리해주지만, 파일을 수동으로 정의하는 경우에는 루트 모듈 파일(`app.module.ts`)에도 모든 파일과 의존성이 반영되어 있는지 반드시 확인해야 한다.
- `app.module.ts`를 보면 `@Module()` 데코레이터의 `imports` 프로퍼티 안에 `ProductsModule`을 포함한 나머지 import된 파일들이 들어 있다. `imports` 프로퍼티는 여러 모듈을 함께 연결(link)하고 싶을 때 사용한다.

### Postman으로 POST 요청 테스트
- 모듈 파일까지 준비되었으니 Postman으로 요청을 보낸다. 라우트는 이미 `products`로 설정되어 있으므로, 요청 타입을 POST로 바꾼다.
- 헤더는 따로 지정하지 않고 건너뛴다. Body 탭에서 포맷을 JSON으로 설정한다.
- 제품 모델(product model)에서 정의한 필드 이름과 동일하게 값을 지정한다: `{ "title": "Product A", "description": "This is product A", "price": 15 }`.
- Send를 클릭하면 제품이 추가된 시점의 날짜 값을 담은 `id`가 응답으로 돌아온다. 즉 POST 요청이 오류 없이 엔드포인트에 도달한 것이다.

### GET 요청으로 데이터 조회하기
- 서비스 파일에 `getProducts`라는 메서드를 새로 만들어, 스프레드 연산자(spread operator)를 사용해 제품 배열의 복사본(copy)을 반환한다.
- 만약 배열 자체를 그대로 반환했다면, 이는 원본 제품 배열을 가리키는 포인터(pointer) 역할을 하게 되어 복사본이 아닌 참조(reference)를 반환하는 셈이 된다.
- 그와 함께 `products` 프로퍼티를 `private`으로 만들어, 서비스 파일과 그 안의 메서드들만 접근할 수 있도록 한다.
- 컨트롤러 파일에는 이미 GET 핸들러가 있으므로, 메서드 이름은 그대로 두고 반환문(return statement)에서 `this.productService.getProducts()`를 반환하도록 수정한다. 이렇게 하면 제품 목록이 반환된다.
- 반환 타입으로 지정했던 `any`도 제거한다. TypeScript가 충분히 똑똑해서 타입을 자동으로 추론(infer)해주기 때문이다. 실제로 제품 배열 타입으로 추론되는 것을 확인할 수 있다.
- 반환된 제품 목록은 자동으로 JSON으로 변환되므로, `id`를 반환할 때처럼 별도로 객체(object)로 감싸서 명시할 필요가 없다.

### Postman으로 GET 요청 테스트
- Postman에서 새 탭을 열면 요청 타입이 이미 GET으로 선택되어 있다. 같은 라우트(`localhost:3000/products`)로 요청을 보낸다.
- 처음에는 빈 배열이 반환되는데, 이는 코드를 수정하고 저장할 때마다 Nest 서버가 재시작되면서 이전에 메모리에 있던 데이터가 초기화되기 때문이다.
- 다시 POST 요청(이미 입력된 데이터 그대로)을 보낸 뒤 GET 요청을 보내면, 이번에는 서버 메모리가 초기화되지 않았으므로 방금 추가한 제품이 담긴 배열이 반환된다.
- 데이터를 바꿔 제품을 하나 더 추가(POST)한 뒤 다시 GET 요청을 보내면, 이번에는 두 개의 제품이 모두 목록에 담겨 반환된다.
- 이렇게 NestJS에서 POST와 GET 요청을 함께 관리(manage)할 수 있다.

## 예시
```typescript
// products.module.ts
import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
```

```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule],
})
export class AppModule {}
```

```typescript
// products.service.ts
import { Injectable } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, description: string, price: number) {
    const id = new Date().toString();
    const newProduct = new Product(id, title, description, price);
    this.products.push(newProduct);
    return id;
  }

  getProducts() {
    return [...this.products];
  }
}
```

```typescript
// products.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  addProducts(
    @Body('title') productTitle: string,
    @Body('description') productDescription: string,
    @Body('price') productPrice: number,
  ) {
    const returnedId = this.productService.insertProduct(
      productTitle,
      productDescription,
      productPrice,
    );
    return { id: returnedId };
  }

  @Get()
  getProducts() {
    return this.productService.getProducts();
  }
}
```

```json
// Postman POST /products 요청 body (JSON)
{
  "title": "Product A",
  "description": "This is product A",
  "price": 15
}
```

## 요약
- 모듈은 `@Module()` 데코레이터가 붙은 클래스이며, 애플리케이션 구조를 조직화하는 메타데이터를 제공한다. 모든 앱은 최소 하나의 루트 모듈을 가진다.
- `nest g module <이름> --no-spec`으로 모듈을 생성하고, `controllers`와 `providers` 프로퍼티에 각각 컨트롤러와 서비스를 등록한다.
- 루트 모듈(`app.module.ts`)의 `imports` 프로퍼티로 여러 모듈을 서로 연결한다.
- 서비스에서 배열을 반환할 때는 스프레드 연산자로 복사본을 반환해야 원본 배열이 외부에서 직접 조작되지 않는다.
- TypeScript의 타입 추론 덕분에 반환 타입을 명시하지 않아도 되고, 반환된 배열은 자동으로 JSON으로 변환된다.
- 서버가 재시작되면 메모리에 저장된 데이터(배열)는 초기화되므로, 재시작 후에는 GET 요청 결과가 빈 배열로 나온다.
