# Understanding ExecutionContext

## 개요
- 가드(guard) 작업에서 핵심이 되는 `ExecutionContext` 인터페이스와, 그중 `getArgByIndex()` 메서드로 요청(request), 응답(response), `next` 함수에 각각 접근하는 방법을 실습으로 확인하는 강의.

## 내용
### ExecutionContext란
- `ExecutionContext` 인터페이스는 가드(guards)를 다룰 때 매우 중요한 요소다.
- 현재 요청의 실행(execution)에 대한 컨텍스트(context)를 제공하며, 이를 통해 현재 요청과 그 요청이 처리되고 있는 환경에 대한 세부 정보에 접근할 수 있다.
- 가드 코드 안에서 `context`라는 상수(constant)를 만들어 파라미터를 할당하고 `context.`을 입력하면, 요청 생명주기(request life cycle)의 여러 부분과 관련 데이터에 접근하는 다양한 메서드들이 표시된다. 이 메서드들은 모두 `ExecutionContext` 인터페이스에 속한다.

### getArgByIndex 메서드
- `getArgByIndex()` 메서드는 라우트 핸들러(route handler)에 전달된 인자(arguments)를 인덱스(index) 값으로 접근할 수 있게 해준다.
- 이 메서드는 HTTP 요청뿐 아니라 웹소켓(web sockets)이나 RPC(remote procedure call)와 관련된 인자도 가져올 수 있지만, 이 강의에서는 HTTP 컨텍스트에 집중한다.

### 인덱스 0 — request 객체
- `getArgByIndex(0)`은 요청(request) 객체를 반환한다. 즉, `body`, `params`, `headers`, `cookies` 등 요청과 관련된 모든 프로퍼티에 접근할 수 있다.
- 예를 들어 `request.body`를 콘솔에 출력하면 Postman에서 보낸 요청 본문(request body) 값이 그대로 출력된다.
- `request.headers`를 출력하면 요청 헤더(request headers)가 출력된다.
- 동적 라우트 파라미터를 다루는 예로, 컨트롤러에 GET 핸들러를 만들고 라우트에 동적 `id`를 넣은 뒤 `@Param()` 데코레이터로 `id`를 받아 그대로 반환하는 `getValue` 메서드를 정의한다. 이 핸들러에도 가드를 적용한다.
- 콘솔에서 `request.params.id`를 출력하도록 하고, Postman에서 `id`를 `101`로 설정해 요청하면 응답으로 id 값을 받고, 터미널에서도 `request.params`로 가져온 id 값이 출력된다.

### 인덱스는 배열 인덱스와 다르다
- 파라미터가 여러 개일 때(예: `id`와 `name`을 함께 동적 라우트에 추가) 인덱스 값을 1이나 2로 바꾸면 될 것 같지만, 실제로는 그렇지 않다.
- `getArgByIndex(0)`은 언제나 request 객체에 고정되어 있으므로, 인덱스를 1로 바꾸고 `request.params`를 출력하면 응답 데이터는 정상적으로 오지만 터미널의 `request.params`는 `undefined`로 나온다.
- 인덱스를 다시 0으로 되돌리면 params 값이 정상적으로 출력된다. 즉 인덱스 1은 request 객체가 아니라 response 객체에 배정되어 있다.

### 인덱스 1 — response 객체
- 인덱스를 1로 하는 새로운 상수(예: `response`)를 만들고 `response.statusCode`를 콘솔에 출력하면, GET 요청을 다시 보냈을 때 터미널에 상태 코드(status code)가 출력된다.
- 즉, 인덱스 0은 request 객체, 인덱스 1은 response 객체에 배정되어 있다.

### 인덱스 2 — Middleware의 next 함수
- HTTP 컨텍스트에서 사용할 수 있는 인덱스 값은 0, 1, 2 세 가지뿐이며, 인덱스 2는 미들웨어(Middleware)의 `next` 함수에 배정되어 있다.
- 즉 가드 파일 안에서도 `next` 함수를 호출해 다음 미들웨어로 제어를 넘길 수 있지만, 이미 미들웨어가 그 역할을 담당하고 있으므로 가드에서 이렇게 하는 것은 적절한 방식은 아니며, 가드 파일은 일반적으로 라우트를 보호(guard)하는 역할에 집중한다.

## 예시
```typescript
// guards/auth.guard.ts — getArgByIndex로 request/response 접근 실습
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.getArgByIndex(0);
    console.log(request.body);
    console.log(request.headers);
    console.log(request.params.id);

    const response = context.getArgByIndex(1);
    console.log(response.statusCode);

    return true;
  }
}
```

```typescript
// app.controller.ts — 동적 파라미터 라우트 (id, name)
@Get(':id/:name')
@UseGuards(AuthGuard)
getValue(@Param('id') id: string, @Param('name') name: string) {
  return id; // 또는 name
}
```

## 요약
- `ExecutionContext`는 현재 요청 실행에 대한 컨텍스트를 제공하는 가드의 핵심 인터페이스다.
- `getArgByIndex(index)`로 HTTP 컨텍스트의 인자에 접근할 수 있으며, 이 인덱스는 일반 배열 인덱스와 다르게 각 값이 고정된 의미를 가진다.
- 인덱스 0은 request 객체, 인덱스 1은 response 객체, 인덱스 2는 미들웨어의 `next` 함수에 고정 배정되어 있다.
- 여러 파라미터가 있어도 request 관련 데이터는 항상 인덱스 0(`request.params`, `request.body` 등)을 통해 접근해야 한다.
- 가드에서 인덱스 2(`next`)를 다루는 것은 가능하지만 일반적인 용도는 아니며, 그 역할은 미들웨어가 담당한다.
