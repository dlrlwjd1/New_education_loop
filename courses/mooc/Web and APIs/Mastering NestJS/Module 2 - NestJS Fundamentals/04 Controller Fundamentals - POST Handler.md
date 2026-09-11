# Controller Fundamentals (@Post Handler)

## 개요
- `@Post()` 데코레이터(decorator)로 POST 요청을 처리하는 메서드를 만들고, 실제 저장 로직을 서비스(service, provider)로 분리한 뒤, `@Body()` 데코레이터로 요청 본문(request body)에서 값을 추출해 제품(product)을 배열에 저장하는 과정을 다루는 강의.

## 내용
### `@Post()` 핸들러 만들기
- 제품 컨트롤러(products controller)에 `addProducts`라는 새 메서드를 만들고, POST 요청을 처리하도록 `@Post()` 데코레이터를 붙인다.
- 아직 데이터베이스를 사용하지 않으므로, 제품 데이터는 우선 배열(array)에 저장한다. 데이터베이스 연동은 이후 섹션에서 다룬다.

### 로직을 서비스(provider)로 분리하기
- 제품을 추가하는 기능을 컨트롤러 메서드 안에 직접 넣지 않고, 별도의 서비스 파일(=프로바이더, provider)로 분리한다. 이렇게 하면 코드를 더 관리하기 쉬워진다(manageable).
- `nest g service products --no-spec` 명령으로 서비스 파일을 생성한다. Nest CLI는 이 프로바이더를 앱 모듈(app module) 파일에 자동으로 import해준다.
- **프로바이더(provider)**는 Nest의 핵심 개념 중 하나로, 서비스(services), 레포지토리(repositories), 팩토리(factories), 헬퍼(helpers) 등 많은 기본 Nest 클래스가 프로바이더로 취급될 수 있다.
- 프로바이더의 핵심 아이디어는 의존성(dependency)으로 주입(inject)될 수 있다는 것이다. 즉 객체들끼리 다양한 관계를 맺을 수 있으며, NestJS가 이 조각들을 자동으로 연결(connect)해주기 때문에 개발자는 모든 부분이 어떻게 맞물리는지 크게 신경 쓸 필요가 없다.
- 생성된 `ProductsService` 클래스는 `@Injectable()` 데코레이터로 표시되어 있다.

### 제품 모델(model) 정의
- `products.model.ts`라는 별도 파일을 만들고 `Product` 클래스를 export한다.
- 생성자(constructor)를 두고 그 안에 `public id: string`, `public title: string`, `public description: string`, `public price: number` 프로퍼티를 정의한다. `public` 접근제어자(accessor)를 사용해 이 프로퍼티들을 공개적으로 사용할 수 있게 한다.
- 이렇게 하면 POST 요청으로 제품 값이 들어올 때, 각 값이 프로퍼티 이름에 맞게 개별 프로퍼티에 저장되며 이는 TypeScript가 처리해준다.

### 서비스에 `insertProduct` 메서드 작성
- 서비스 파일에 `Product` 타입의 배열 프로퍼티를 하나 만들고 빈 배열로 초기화한다.
- 제품을 추가하기 위해 `insertProduct`라는 메서드를 만들고, 파라미터로 `title: string`, `description: string`, `price: number`를 받는다. `id`는 파라미터로 받지 않고 동적으로 생성한다.
- ID 생성은 `const id = new Date().toString()`처럼 날짜 값을 문자열로 변환해 사용한다. (이상적인 방식은 아니지만 예시를 위해 이렇게 사용한다.)
- `const newProduct = new Product(id, title, description, price)`로 새 제품 인스턴스를 만들고, `this.products.push(newProduct)`로 배열에 추가한 뒤 `id`를 반환한다.
- 이 메서드의 반환 타입을 별도로 명시하지 않았는데, TypeScript의 타입 추론(type inference) 기능 덕분에 반환하는 값(문자열 `id`)을 보고 자동으로 반환 타입이 `string`으로 설정된다.

### 컨트롤러에서 서비스 사용하기
- 컨트롤러에서 `ProductsService`를 사용하려면 먼저 주입(inject)해야 한다. 생성자에서 `ProductsService`를 주입한다.
- `addProducts` 메서드 안에서 `this.productService.insertProduct(...)`를 호출한다. 이때 `title`, `description`, `price` 세 개의 인자가 필요하다.
- 이 데이터는 어디서 가져올까? 바로 POST 요청 자체, 즉 요청 본문(request body)에서 가져온다. 모든 POST 요청에는 본문에 데이터가 담겨 있다.
- Express.js에서는 `request.body`로 들어오는 요청의 데이터를 가져왔지만, NestJS에서는 `@Body()` 데코레이터로 동일한 작업을 수행할 수 있다.
- `@Body()`의 인자로 들어오는 요청에서 실제 필드 이름을 지정한다. 예를 들어 `title` 필드를 지정하면, NestJS가 들어오는 요청의 JSON 데이터를 JavaScript 객체로 변환한 뒤 `title` 필드 값을 자동으로 추출해준다.
- `@Body('title') productTitle: string`처럼 `@Body()` 데코레이터 바로 옆에 프로퍼티를 선언하면 그 값이 저장된다. 마찬가지로 `@Body('description') productDescription: string`, `@Body('price') productPrice: number`도 지정한다.
- `insertProduct` 메서드에 이 세 프로퍼티(`productTitle`, `productDescription`, `productPrice`)를 전달한다.
- API는 보통 JSON 데이터를 반환하므로, `id`를 객체 형태로 반환한다. 서비스 호출 결과를 `const returnedId = ...`처럼 변수에 담고, `{ id: returnedId }` 형태의 객체를 반환한다.
- 이것으로 POST 라우트는 준비되었지만, 아직 중요한 것 하나가 남아 있다. 바로 제품(products) 전용 모듈이다. 왜 필요한지는 다음 강의에서 다룬다.

## 예시
```typescript
// products.model.ts
export class Product {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public price: number,
  ) {}
}
```

```typescript
// products.service.ts
import { Injectable } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  insertProduct(title: string, description: string, price: number) {
    const id = new Date().toString();
    const newProduct = new Product(id, title, description, price);
    this.products.push(newProduct);
    return id;
  }
}
```

```typescript
// products.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
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
}
```

## 요약
- `@Post()` 데코레이터를 메서드에 붙이면 해당 메서드가 POST 요청을 처리하는 핸들러가 된다.
- 저장 로직은 컨트롤러가 아니라 `@Injectable()`로 표시된 별도의 서비스(프로바이더)에 두는 것이 코드 관리에 유리하다.
- 프로바이더(서비스, 레포지토리, 팩토리, 헬퍼 등)는 의존성으로 주입될 수 있으며, NestJS가 이 관계를 자동으로 연결해준다.
- 제품 모델은 생성자 프로퍼티(`public id`, `public title` 등)로 정의하며, TypeScript의 타입 추론으로 메서드 반환 타입을 명시하지 않아도 된다.
- `@Body('필드명')` 데코레이터로 요청 본문에서 특정 필드 값을 추출해 파라미터로 받을 수 있다.
- 다음 강의에서는 제품 전용 모듈(module)을 구성하는 이유와 방법을 다룬다.
