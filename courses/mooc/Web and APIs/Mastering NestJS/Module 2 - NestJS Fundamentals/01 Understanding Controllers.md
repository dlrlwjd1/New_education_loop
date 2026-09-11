# Understanding Controllers

## 개요
- NestJS에서 **컨트롤러(controller)**가 무엇인지, 그리고 `@Controller()`와 `@Get()` 데코레이터(decorator)에 지정하는 경로(path)가 어떻게 합쳐져서 최종 라우트(route)가 결정되는지를 실습으로 확인하는 강의.

## 내용
### 컨트롤러의 역할
- **컨트롤러(controllers)**는 NestJS에서 가장 중요한 요소 중 하나로, 들어오는 HTTP 요청을 처리(handle)하고 클라이언트에게 응답을 반환하는 역할을 한다.
- 컨트롤러는 들어오는 HTTP 요청을 관리할 뿐 아니라, 특정 라우트를 처리하는 로직도 담고 있다.
- 애플리케이션에는 여러 개의 컨트롤러가 존재할 수 있고, 각 컨트롤러가 여러 HTTP 요청을 처리할 수 있다. 이때 컨트롤러의 라우팅(routing) 메커니즘이 어떤 요청을 어느 컨트롤러로 보낼지 결정한다.
- 하나의 컨트롤러는 하나 이상의 라우트(route)를 가질 수 있고, 서로 다른 라우트는 서로 다른 동작(action)을 수행한다.

### `@Controller()` 데코레이터와 경로(path)
- 클래스에 `@Controller()` 데코레이터를 붙이면 해당 클래스가 컨트롤러임을 표시할 수 있다.
- `@Controller()`는 문자열 인자를 받을 수 있는데, 이 인자는 해당 컨트롤러에 대한 요청이 매핑되는 라우트 경로 역할을 한다. 예를 들어 `@Controller('products')`로 지정하면, `products` 경로 아래의 모든 요청이 이 컨트롤러로 연결된다.
- 이 경로는 해당 컨트롤러 안에 정의된 모든 라우트의 기본 경로(base path)로도 사용된다. 예를 들어 `products/1`처럼 ID 값이 붙는 경로도 이 컨트롤러가 처리하게 된다.
- `@Controller()`의 인자를 비워두면(empty), 해당 컨트롤러는 홈 라우트(root route)를 가리키게 된다.

### `@Get()` 데코레이터와 상대 경로
- `@Get()` 데코레이터는 HTTP GET 요청을 처리하기 위해 사용한다.
- `@Get()`에 별도의 경로 인자를 주지 않으면, 해당 메서드는 컨트롤러의 루트 라우트에서만 트리거(trigger)된다.
- `@Get()`에 경로를 지정하면, 그 경로가 활성화될 때 해당 메서드가 트리거된다.
- 중요한 점은 메서드에 정의된 경로가 항상 컨트롤러 데코레이터에 지정된 경로에 대해 상대적(relative)이라는 것이다. 즉 `@Controller('products')` 안에 `@Get('get')`이 있다면 최종 경로는 `/products/get`이 된다.

### 실행 및 Postman/브라우저 테스트
- `npm run start:dev` 명령으로 애플리케이션을 실행한다. 이 명령은 애플리케이션의 변경 사항을 감지(watch)해 변경이 있을 때마다 서버를 자동으로 재시작한다.
- Postman에서 새 워크스페이스를 만들고 HTTP 옵션을 선택한 뒤 `localhost:3000` 경로로 GET 요청을 보내면, `app.service` 파일에서 오는 메시지가 응답으로 반환된다. 이 메서드는 `@Get()` 데코레이터 안에서 호출된다.
- 같은 내용을 브라우저에서 `localhost`로 접속해도 동일한 메시지가 표시되는 것을 확인한다.
- 컨트롤러에 `products` 경로를 추가(`@Controller('products')`)한 뒤, Postman에서 여전히 `localhost:3000`으로 GET 요청을 보내면 해당 라우트를 찾을 수 없다는 에러(not found)가 발생한다. Postman 경로를 `/products`로 바꿔서 다시 요청하면 문자열 메시지가 정상적으로 반환된다.
- 이어서 `@Get()` 데코레이터에 `get`이라는 경로를 지정하면, 이번에는 `/products`로 요청을 보냈을 때 GET 요청이 다른 라우트에서 처리되므로 다시 not found 에러가 발생한다.
- 이는 메서드에 정의된 경로가 컨트롤러 데코레이터의 경로(`/products`)에 대해 상대적이기 때문이다. 따라서 `/products/get`으로 요청을 보내야 정상적으로 문자열 메시지가 반환된다.
- `products`를 빼고 그냥 `get`이라는 경로로만 요청을 보내도 요청이 처리되지 않는데, 이는 메인 경로가 `products`로 시작하기 때문이다.
- 결론적으로 컨트롤러를 사용할 때는 라우트 경로를 정확히 유지(maintain)하는 것이 필요하다.

## 예시
```typescript
// products.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('get')
  getProducts(): string {
    // 최종 라우트: GET /products/get
    return 'products message';
  }
}
```

## 요약
- 컨트롤러는 `@Controller()` 데코레이터로 정의하며, 인자로 준 문자열이 해당 컨트롤러의 기본 경로(base path)가 된다.
- `@Get()` 등 메서드 데코레이터에 지정한 경로는 컨트롤러의 기본 경로에 대해 상대 경로로 합쳐진다.
- `@Controller()` 인자를 비워두면 루트 라우트를 가리킨다.
- `npm run start:dev`로 실행하면 변경 사항을 감지해 서버를 자동 재시작한다.
- 컨트롤러와 메서드에 지정한 경로가 정확히 일치해야 요청이 올바르게 라우팅되며, 그렇지 않으면 not found 에러가 발생한다.
- 다음 강의에서는 새로운 컨트롤러를 만드는 방법을 다룬다.
