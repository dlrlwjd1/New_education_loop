# @HttpCode vs. @Res Decorator

## 개요
- `@HttpCode()` 데코레이터(decorator)로 응답 상태 코드(status code)를 명시적으로 설정하는 방법과, `@Res()` 데코레이터로 응답 객체를 통해 직접 상태 코드를 설정할 때 두 방식이 함께 쓰이면 어떤 것이 우선(override)하는지를 확인하는 강의.

## 내용
### HTTP 코드/상태의 기본 동작
- HTTP 코드와 HTTP 상태(status)는 클라이언트와 서버 간의 통신에 흔히 사용된다. NestJS는 HTTP 응답을 다루는 메커니즘을 제공하며, 여기에는 HTTP 상태 코드를 설정하는 기능도 포함된다.
- 예시로 문자열 메시지를 반환하는 GET 핸들러 메서드가 있다. Postman에서 요청 상태(status)와 코드를 확인하면, 처음에는 상태 코드가 200으로 표시되며 이는 HTTP 요청이 성공했음을 의미한다.

### `@HttpCode()` 데코레이터로 상태 코드 지정하기
- 상태 코드를 변경하고 싶을 때 유용한 데코레이터가 바로 `HttpCode` 데코레이터다.
- `@HttpCode()`의 괄호 안에 원하는 상태 코드, 예를 들어 `201`을 지정한다. Postman에서 다시 요청을 보내면 상태 코드가 201로 설정되어 있는 것을 확인할 수 있다.
- 이렇게 `HttpCode` 데코레이터를 사용하면 HTTP 상태 코드를 명시적으로 쉽게 설정할 수 있다.
- 상태 코드를 `204`(No Content)로 설정해볼 수도 있는데, 이 경우 문자열 메시지가 표시되지 않는다. 다양한 상태 코드를 `HttpCode` 데코레이터로 직접 시도해볼 것을 권장한다.

### `@Res()` 데코레이터로 상태 코드 지정하기
- 응답 상태(status response)는 `Response` 데코레이터를 통해서도 설정할 수 있다.
- 메서드 안에 `Response` 데코레이터와, Express의 `Response` 타입인 `response` 프로퍼티를 선언한다.
- 상태 코드를 설정하기 위해 `response.status()` 메서드를 사용하고, 예를 들어 상태 코드를 `200`으로 지정한 뒤 메시지를 JSON으로 응답에 담아 표시한다.

### 두 방식이 함께 쓰일 때 — `@Res()`가 항상 우선한다
- 이때 `HttpCode` 데코레이터는 상태 코드 `204`로 설정되어 있고, `response.status()` 메서드는 상태 코드 `200`으로 설정되어 있다고 하자.
- Postman에서 요청을 보내면 상태 코드는 200으로 표시된다. 즉 `Response` 데코레이터로 지정한 상태 코드가 `HttpCode` 데코레이터로 지정한 상태 코드를 항상 덮어쓴다(override)는 것을 알 수 있다.
- 그 이유는 `HttpCode` 데코레이터는 NestJS 자체가 처리하는 것이지만, `Response` 데코레이터를 사용하면 "상태 코드를 내가 직접 처리하겠다"고 Nest에게 알리는 것이기 때문이다. 그래서 상태 코드가 덮어써지는 것이다.
- 어떤 방식을 쓸지는 개발자의 선택에 달려 있다. NestJS가 상태 코드를 자동으로 처리해주길 원한다면 `HttpCode` 데코레이터를 사용하고, 그렇지 않고 직접 상태 코드를 수동으로 제어하고 싶다면 `Response` 데코레이터를 사용하면 된다.

## 예시
```typescript
// app.controller.ts
import { Controller, Get, HttpCode, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get('http-code-example')
  @HttpCode(204)
  getMessage(): string {
    // @HttpCode(204)로 인해 No Content 상태가 되어 문자열이 표시되지 않는다
    return 'string message';
  }

  @Get('res-override-example')
  @HttpCode(204)
  getMessageWithResOverride(@Res() response: Response) {
    // response.status()로 지정한 200이 @HttpCode(204)를 덮어쓴다
    response.status(200);
    return response.json({ message: 'string message' });
  }
}
```

## 요약
- `@HttpCode(코드)` 데코레이터는 NestJS가 관리하는 방식으로 응답 상태 코드를 명시적으로 설정한다.
- `@Res()` 데코레이터로 받은 응답 객체의 `.status()` 메서드로도 상태 코드를 직접 설정할 수 있다.
- 두 방식을 함께 사용하면, `@Res()`(response 객체)로 지정한 상태 코드가 항상 `@HttpCode()`로 지정한 값을 덮어쓴다. `@Res()`를 사용하는 순간 상태 코드 관리 책임이 개발자에게 넘어가기 때문이다.
- NestJS가 상태 코드를 자동으로 관리하길 원하면 `@HttpCode()`를, 직접 수동으로 제어하고 싶으면 `@Res()`를 사용한다.
