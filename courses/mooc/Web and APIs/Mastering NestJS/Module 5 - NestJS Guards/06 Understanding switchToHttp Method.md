# Understanding switchToHttp() Method

## 개요
- `ExecutionContext`의 `switchToHttp()` 메서드로 컨텍스트를 HTTP 전용으로 전환하고, `getRequest()`/`getResponse()`로 request·response 객체에 직접 접근해 헤더 기반 토큰 검증을 구현하는 강의.

## 내용
### 다양한 애플리케이션 타입과 ExecutionContext
- NestJS는 HTTP 기반(Express나 Fastify), 웹소켓(web sockets), 마이크로서비스(microservices), GraphQL 등 다양한 타입의 애플리케이션을 지원한다.
- 이 각각의 애플리케이션 타입은 저마다의 기반 컨텍스트(underlying context)와 메서드, 프로퍼티를 가진다.
- `ExecutionContext` 인터페이스는 이런 다양한 컨텍스트 타입을 추상화(abstracting)해서 request와 response 객체에 접근하는 간단한 방법을 제공하도록 설계되어 있다.

### switchToHttp 메서드
- 여러 컨텍스트 타입 중 특정 컨텍스트(예: HTTP)에 대한 세부 정보만 접근하고 싶을 때, 컨텍스트 실행(context execution)을 HTTP 전용으로 전환(switch)해주는 별도의 메서드가 있다.
- `canActivate` 메서드 안에서 `request`라는 상수를 만들고 `context.switchToHttp()`를 할당한다.
- `switchToHttp()`는 `ExecutionContext`가 제공하는 유틸리티 메서드(utility method)로, 일반적인(generic) `ExecutionContext`에서 HTTP 컨텍스트로 전환할 수 있게 해준다.
- 이렇게 전환하면 원래 `ExecutionContext`에서는 직접 접근할 수 없던 request와 response 객체에 접근할 수 있게 된다.

### switchToHttp이 제공하는 세 가지 메서드
- `switchToHttp()`을 호출한 뒤 `.`을 입력하면 세 가지 메서드가 제공된다.
  - `getNext()` — 미들웨어(Middleware)의 `next` 함수에 대한 컨텍스트를 가져온다.
  - `getRequest()` — request 객체에 대한 컨텍스트를 가져온다.
  - `getResponse()` — response 객체에 대한 컨텍스트를 가져온다.

### getRequest로 헤더 접근 실습
- `getRequest()` 메서드를 사용해서 HTTP 요청 객체(underlying HTTP request object)를 얻을 수 있다.
- request 객체를 얻고 나면 `headers`, `body`, `cookies` 같은 프로퍼티에 접근할 수 있다.
- 예시로 `const userAgent = request.headers['user-agent']`를 만들고 `console.log('user agent', userAgent)`로 출력한다.

### 토큰 기반 검증 예제
- 좀 더 실전적인 예제로, 유효한 토큰(valid token)을 기준으로 사용자를 검증(validate)하는 로직을 만든다.
- 앞의 두 줄(콘솔 출력 관련 코드)을 제거하고, 대신 `request.headers.authorization`이 미리 정해둔 `valid_token` 값과 같은지를 반환하도록 한다.
- Postman에서 헤더 키를 `authorization`으로 설정하고 잘못된 토큰 값을 넣어 요청하면 forbidden 에러 메시지를 받는다. 즉 가드가 올바르지 않은 토큰으로는 GET 라우트 접근을 허용하지 않는다.
- 올바른 토큰(`valid_token`)을 헤더에 넣어 요청하면 접근이 허용(access granted)된다는 메시지를 받는다.
- 이처럼 컨텍스트를 HTTP로 전환하고 나면 HTTP 요청과 응답에 대해 전면적인 제어권(total control)을 가질 수 있다.

### RPC/웹소켓 컨텍스트와 switchToHttp의 목적
- `switchToHttp()`와 마찬가지로 RPC 컨텍스트나 웹소켓(websocket) 컨텍스트로도 전환해서 클라이언트와 서버 간 통신 관련 세부 정보를 가져올 수 있다. 다만 이 강의에서는 대부분의 상호작용이 HTTP 요청을 다루는 경우가 많으므로 HTTP 컨텍스트에 집중한다.
- NestJS 애플리케이션은 Express 같은 HTTP 프레임워크 위에 구축되어 있으므로, `switchToHttp()` 메서드의 목적은 NestJS의 추상화 계층(abstraction layer)에서 기반 HTTP 프레임워크(underlying HTTP framework)로 전환해서 HTTP request와 response 객체에 직접 접근할 수 있게 하는 것이다.

## 예시
```typescript
// guards/auth.guard.ts — switchToHttp()로 request 접근 및 토큰 검증
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    // 예시 1: user-agent 헤더 확인
    // const userAgent = request.headers['user-agent'];
    // console.log('user agent', userAgent);

    // 예시 2: authorization 헤더로 토큰 검증
    return request.headers.authorization === 'valid_token';
  }
}
```

```
Postman 헤더 예시
Key: authorization
Value: valid_token   // 올바른 토큰 → 200 access granted
Value: wrong_token   // 잘못된 토큰 → 403 forbidden
```

## 요약
- `context.switchToHttp()`는 일반적인 `ExecutionContext`를 HTTP 전용 컨텍스트로 전환해주는 유틸리티 메서드다.
- `switchToHttp()`은 `getNext()`, `getRequest()`, `getResponse()` 세 가지 메서드를 제공한다.
- `getRequest()`로 얻은 request 객체를 통해 `headers`, `body`, `cookies` 등에 자유롭게 접근할 수 있다.
- 예제에서는 `request.headers.authorization` 값이 미리 정한 유효 토큰과 일치하는지로 접근 허용 여부를 결정했다.
- `switchToHttp()` 외에 RPC, 웹소켓 컨텍스트로도 전환할 수 있으며, 전반적인 목적은 NestJS의 추상화 계층에서 실제 HTTP 프레임워크의 request/response 객체로 직접 접근하는 것이다.
