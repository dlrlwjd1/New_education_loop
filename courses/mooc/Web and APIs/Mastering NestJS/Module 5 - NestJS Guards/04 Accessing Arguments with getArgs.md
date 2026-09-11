# Accessing Arguments with getArgs()

## 개요
- `ExecutionContext`의 `getArgs()` 메서드를 이용해 인덱스 값을 지정하지 않고도 request와 response 객체에 바로 접근하는 더 간단한 방법을 실습하는 강의.

## 내용
### getArgs 메서드
- 이전 강의에서 다룬 `getArgByIndex()`는 인덱스 값을 받아 그에 해당하는 인자(argument)를 반환했다.
- `getArgs()`는 request와 response 인자를 좀 더 단순하고(simplified) 직관적인(straightforward) 방식으로 반환하는 또 다른 메서드다.
- `getArgs()`는 실행 컨텍스트(execution context)에 전달된 모든 인자를 담은 배열(array)을 반환한다.
- 코드에서 `[request, response] = context.getArgs()`처럼 배열 구조 분해(destructuring)를 사용해 request와 response 파라미터를 바로 상수로 할당할 수 있다.
- 이렇게 하면 request와 response의 파라미터와 프로퍼티에 직접 접근할 수 있다.

### 쿼리 파라미터로 확인
- 컨트롤러의 GET 핸들러 메서드에 `@Query()` 데코레이터를 추가하고, 그 값을 반환하도록 한다.
- 가드 파일에서 `request.query`를 콘솔에 출력하도록 로그를 추가한다.
- Postman에서 라우트에 쿼리(예: `department=hr`)를 추가해 요청하면, 응답으로 데이터와 쿼리 값이 함께 반환되고, 터미널에도 쿼리 파라미터가 출력된다.
- `getArgByIndex()`와 달리 `getArgs()`를 쓰면 인덱스 값을 지정하지 않고도 request나 response 객체에 바로 접근할 수 있다. `getArgs()`가 반환하는 배열의 첫 번째(1st) 위치에 request 객체, 두 번째(2nd) 위치에 response 객체가 저장되어 있기 때문이다.

### response 객체 다루기
- response 객체도 마찬가지로 인덱스를 지정하지 않고 바로 정의해서 사용할 수 있다. 예전에는 인덱스 1을 지정해야 response 객체에 접근할 수 있었지만, `getArgs()`에서는 그럴 필요가 없다.
- `response.statusCode`를 콘솔에 출력하도록 하고 요청을 보내면 터미널에 상태 코드가 출력된다.
- 쿠키(cookie) 값을 설정하는 예로 `response.cookie('test', 'cookie value')` 형태로 쿠키를 설정한다(실제 발화에서는 "response cookie... test cookie value"라는 설명이 나온다).
- `console.log(JSON.stringify(response.getHeaders()))`로 헤더를 출력하도록 한 뒤 요청을 보내면, 터미널에 쿠키 값을 포함한 헤더(headers)가 출력된다.
- 이처럼 `getArgs()`를 사용하면 response와 request 객체에 바로 접근할 수 있다. 특정 인자만 필요할 경우에는 이전에 살펴본 `getArgByIndex()`처럼 인덱스 값을 지정해 접근하는 것도 여전히 가능하다.

## 예시
```typescript
// guards/auth.guard.ts — getArgs()로 request/response 구조 분해 접근
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const [request, response] = context.getArgs();

    console.log(request.query);
    console.log(response.statusCode);

    response.cookie('test', 'cookie value');
    console.log(JSON.stringify(response.getHeaders()));

    return true;
  }
}
```

```typescript
// app.controller.ts — 쿼리 파라미터 확인용 핸들러
@Get()
@UseGuards(AuthGuard)
getValue(@Query() query) {
  return query;
}
```

## 요약
- `getArgs()`는 실행 컨텍스트의 모든 인자를 배열로 반환하며, 구조 분해(destructuring)로 `[request, response]`를 바로 꺼내 쓸 수 있다.
- 배열의 1번째 위치는 request 객체, 2번째 위치는 response 객체로 고정되어 있어 인덱스를 별도로 지정할 필요가 없다.
- `request.query`, `response.statusCode`, `response.cookie()`, `response.getHeaders()` 등 request/response의 프로퍼티와 메서드에 바로 접근할 수 있다.
- 특정 인자 하나만 필요하다면 이전에 배운 `getArgByIndex()` 방식으로도 여전히 접근할 수 있다.
