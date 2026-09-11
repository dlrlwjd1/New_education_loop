# Controller Fundamentals (@Get Handler)

## 개요
- Nest CLI로 새 컨트롤러(controller)를 생성하는 방법과, `@Get()` 데코레이터(decorator)(=GET 핸들러)를 메서드에 적용해 GET 요청을 처리하는 방법을 실습하는 강의.

## 내용
### Nest CLI로 컨트롤러 생성하기
- 새 컨트롤러는 `nest generate controller`(짧게는 `nest g controller`) 명령으로 생성한다. `--no-spec` 옵션을 주면 테스트 파일 생성을 피할 수 있다.
- 강의에서는 `products`라는 이름으로 컨트롤러를 생성한다.
- 명령 실행 후 `src` 폴더 안에 `products`라는 폴더가 생기고, 그 안에 `products.controller.ts` 파일이 만들어진다.
- 이때 `dist`(distributable, 배포용)라는 폴더도 함께 생기는 것을 볼 수 있는데, 이는 애플리케이션을 프로덕션 환경에서 실행할 때 생성된다. NestJS는 TypeScript를 사용하지만 TypeScript 코드는 Node.js나 브라우저에서 바로 실행할 수 없기 때문에 JavaScript로 트랜스파일(transpile)되어야 하며, 그 결과물이 `dist` 폴더에 저장되어 Node.js와 브라우저가 사용하게 된다.
- 생성된 `products.controller.ts` 파일을 열어보면 `@Controller()` 데코레이터에 이미 `products` 경로가 설정되어 있고, `ProductsController` 클래스가 정의되어 있다.
- 이 `ProductsController`는 자동으로 모듈(module) 파일에도 import된다. Nest CLI는 새로 생성한 컨트롤러와 모듈 파일에 대한 import를 자동으로 처리해준다.

### `@Get()` 데코레이터(GET 핸들러) 적용하기
- GET 요청을 처리하려면 `@Get()` 데코레이터를 지정해야 한다. `@Get()` 데코레이터는 "GET 핸들러(get handler)"라고도 부른다.
- `@Get()`과 유사하게 나머지 컨트롤러 핸들러들, 즉 `@Post()`, `@Put()`, `@Delete()`도 존재하며 이후 섹션에서 계속 사용하게 된다.
- `@Get()` 데코레이터를 사용할 때는 GET 라우트 핸들러로 표시할 메서드가 있어야 한다. 이 데코레이터가 메서드에 적용되면, 특정 라우트로 GET 요청이 들어올 때 해당 메서드가 호출(invoke)된다는 것을 의미한다.
- 예시로 문자열(string) 타입을 반환하는 메서드를 만들고, `'products controller'`라는 문자열 메시지를 반환하도록 작성한다.
- 기억해야 할 점: `@Get()` 데코레이터는 일반적으로 메서드에만 적용된다. 클래스에 적용되는 `@Controller()` 데코레이터는 해당 클래스를 컨트롤러로 표시하고 그 컨트롤러 내 모든 라우트의 기본 경로(base route)를 정의하는 역할을 하기 때문이다. 즉 `@Get()` 데코레이터는 클래스에는 직접 적용되지 않는다.
- 데코레이터의 위치(placement)도 중요하다. 메서드를 먼저 정의하고 나중에 `@Get()` 데코레이터를 붙이는 방식은 불가능하다. `@Get()` 데코레이터는 반드시 메서드 바로 위에 적용해야 하며, 이는 해당 메서드가 주어진 라우트로 들어오는 HTTP GET 요청을 처리해야 함을 나타낸다.

### Postman으로 테스트
- 기본 경로(base route)는 `products`로 설정되어 있다. Postman에서 경로를 `/products`로 바꾸고 Send를 클릭하면 문자열 메시지가 응답으로 돌아온다.
- 응답으로는 문자열뿐 아니라 배열(array)이나 객체(object) 등 어떤 타입의 데이터도 반환할 수 있으며, 이후 강의에서 다양한 예시를 다룰 예정이다.

## 예시
```typescript
// products.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(): string {
    return 'products controller';
  }
}
```

## 요약
- Nest CLI의 `nest generate controller <이름> --no-spec` 명령으로 컨트롤러를 생성하면, 컨트롤러 파일이 생성되고 모듈 파일에 자동으로 import된다.
- `dist` 폴더는 TypeScript 코드가 JavaScript로 트랜스파일되어 저장되는 프로덕션용 배포 폴더다.
- `@Get()` 데코레이터(=GET 핸들러)는 메서드에만 적용되며 반드시 메서드 바로 위에 위치해야 한다.
- `@Controller()`는 클래스를 컨트롤러로 표시하고 기본 경로를 정의하는 반면, `@Get()`은 그 안에서 실제 GET 요청을 처리할 메서드를 지정한다.
- 컨트롤러 메서드는 문자열, 배열, 객체 등 다양한 타입의 데이터를 반환할 수 있다.
- 다음 강의에서는 NestJS의 헤더(headers)를 다룬다.
