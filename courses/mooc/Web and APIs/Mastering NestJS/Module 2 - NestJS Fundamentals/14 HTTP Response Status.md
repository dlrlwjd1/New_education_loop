# HTTP Response Status

## 개요
- 숫자 상태 코드를 직접 쓰는 대신 NestJS가 제공하는 `HttpStatus` 열거형(enum)을 사용해 `@HttpCode()` 데코레이터(decorator)에 상태를 이름으로 지정하는 방법과, 이 열거형 값을 일반 객체 안에 담아 반환할 때는 텍스트 설명이 아니라 숫자 코드만 얻게 된다는 점을 확인하는 강의.

## 내용
### HTTP 응답 상태(status)란
- HTTP 응답 상태(response status), 즉 상태 메시지(status message)는 HTTP 상태 코드에 연결된 짧은 텍스트 설명(textual description)이다. 이는 응답 코드에 대해 더 많은 맥락(context)을 제공한다.
- NestJS에서는 `HttpStatus` 열거형(enum)을 사용해 응답 상태를 정의할 수 있다.

### `HttpStatus` 열거형으로 상태 지정하기
- `@HttpCode()` 데코레이터 안의 숫자 상태 코드를 지우고 `HttpStatus.`을 입력하면, 사용 가능한 모든 상태 응답 메시지 목록을 확인할 수 있다.
- 가장 기본적인 값인 `HttpStatus.OK`를 사용해본다. Postman에서 요청을 보내면 상태 코드 200과 함께 응답이 온다. 이때 데코레이터에는 숫자 코드를 직접 지정하지 않았다는 점에 주목한다.
- 다른 상태값도 시도해본다. 예를 들어 `HttpStatus.BAD_GATEWAY`를 사용하면, 상태 응답에 "Bad Gateway"와 코드 502가 표시된다.
- 즉 `HttpStatus`는 열거형(enum)으로, 적절한 이름을 가진 문자열 상수를 사용할 수 있게 해준다. 이 방식을 쓰면 수행하려는 동작에 맞는 상태 코드를 일일이 외울 필요가 없다.
- `HttpStatus.BAD_GATEWAY` 위에 마우스를 올려보면(hover) 실제로 할당된 상태 코드 값(502)을 확인할 수 있다.
- 열거형(enum)은 TypeScript의 개념으로, 이름이 붙은 상수(named constants)의 집합을 정의할 수 있게 해준다. import 구문에서 `HttpStatus`를 따라가 보면, 문자열 상수와 그에 할당된 상태 코드로 정의된 전체 열거형 객체(enumeration object)를 확인할 수 있다.

### `@HttpCode()`는 인자를 하나만 받는다
- `HttpCode` 데코레이터는 인자를 하나만 받을 수 있다. 따라서 상태 코드와 상태 메시지를 동시에 인자로 넘길 수는 없다.
- 만약 상태 응답 값을 객체 안에 담아 반환하면 어떻게 될까? 예를 들어 객체를 만들고 상태를 저장할 프로퍼티에 `HttpStatus.BAD_GATEWAY`를 할당해보자.
- 이 상태로 요청을 보내면, 응답 메시지("Bad Gateway"라는 텍스트)가 아니라 상태 코드(숫자 값)가 표시된다.
- 즉 `HttpStatus` 열거형 값을 이렇게 일반 객체 프로퍼티로 반환하면, 할당된 상태 값(숫자)에만 접근할 수 있을 뿐, 텍스트 설명은 얻을 수 없다.
- 다양한 상태 응답은 이후 섹션에서 계속 다루게 된다.

## 예시
```typescript
// app.controller.ts
import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('ok-example')
  @HttpCode(HttpStatus.OK)
  getOk(): string {
    return 'ok response';
  }

  @Get('bad-gateway-example')
  @HttpCode(HttpStatus.BAD_GATEWAY)
  getBadGateway(): string {
    return 'bad gateway response';
  }

  @Get('status-in-object-example')
  getStatusInObject() {
    // 응답에는 "Bad Gateway" 텍스트가 아니라 상태 코드(502) 값이 담긴다
    return { status: HttpStatus.BAD_GATEWAY };
  }
}
```

## 요약
- `HttpStatus`는 NestJS(TypeScript)의 열거형(enum)으로, 숫자 상태 코드 대신 이름이 붙은 상수(`HttpStatus.OK`, `HttpStatus.BAD_GATEWAY` 등)를 사용할 수 있게 해준다.
- `@HttpCode(HttpStatus.XXX)`처럼 사용하면 실제 응답의 HTTP 상태 코드가 해당 열거형 값에 맞게 설정된다.
- `@HttpCode()` 데코레이터는 인자를 하나만 받으므로 상태 코드와 상태 메시지를 함께 넘길 수 없다.
- `HttpStatus` 값을 일반 객체의 프로퍼티 값으로 반환하면, 텍스트 설명이 아니라 할당된 숫자 상태 코드만 얻게 된다.
