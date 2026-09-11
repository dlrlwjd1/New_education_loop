# Request Object

## 개요
- `@Body()` 데코레이터(decorator)로는 요청 본문(request body)만 추출할 수 있는 반면, `@Req()` 데코레이터를 사용하면 Express의 요청 객체(request object) 전체에 접근해 헤더(headers), params, query 등 다양한 정보를 직접 다룰 수 있다는 것을 실습으로 확인하는 강의.

## 내용
### `@Body()` 데코레이터 복습
- NestJS에서는 HTTP 요청의 여러 부분에 접근하는 다양한 방법이 있다. 지금까지는 `@Body()` 데코레이터를 사용해왔다.
- `@Body()` 데코레이터는 들어오는 HTTP 요청에서 요청 본문(request body)을 추출할 때 사용한다. 보통 DTO(Data Transfer Object)와 함께 사용해, 들어오는 요청 본문을 클래스 인스턴스로 자동 매핑(map)한다.
- `@Body()`는 요청 본문에서 데이터를 추출하고 검증(validate)하는 과정을 단순화해주며, 주로 JSON이나 폼(form) 데이터를 요청 본문에서 추출할 때 사용된다.

### 요청 객체 전체에 접근하기 — `@Req()` 데코레이터
- 만약 요청 본문뿐 아니라 요청 객체 전체(entire request object)에 접근하고 싶다면 어떻게 할까? 이럴 때 Nest는 `@Req()`(request)와 `@Res()`(response) 두 가지 데코레이터를 제공한다.
- `@Req()` 데코레이터는 Express의 요청 객체에 직접 접근할 수 있게 해주며, 헤더(headers), 본문(body), 쿼리 파라미터(query parameters) 등 들어오는 HTTP 요청의 다양한 프로퍼티와 메서드에 접근할 수 있다.
- `@Body()`에 비해 더 낮은 수준(low-level)의 제어를 제공하며, DTO에 자동으로 매핑되지 않는 요청 객체의 특정 프로퍼티에 접근해야 할 때 유용하다.

### 실습 — `@Req()`로 요청 객체 로깅하기
- `app.controller.ts`에서 `@Get()` 데코레이터를 붙인 `fetchRequest` 메서드를 만든다.
- 메서드 인자에 `@Req()` 데코레이터를 지정하고, 요청 데이터를 저장할 `req`라는 프로퍼티를 선언한다.
- 여기서 중요한 부분은 타입을 지정하는 것인데, Express의 `Request` 인터페이스를 import해서 타입으로 지정한다. 이렇게 `Request` 인터페이스 타입을 명시적으로 지정하면, 요청 본문에 접근할 때 타입 안전성(type safety)을 확보할 수 있다.
- `req` 파라미터의 타입을 Express의 `Request`로 지정함으로써, 이 메서드가 Express의 관례(conventions)와 구조를 따르는 요청 객체와 상호작용한다는 것을 보장한다.
- `console.log(req);`로 `req` 객체를 콘솔에 출력하고 `return null;`로 마무리한다.
- Postman으로 GET 요청을 보낸 뒤 터미널을 확인하면, 전체 HTTP 요청 객체가 출력된다. 여기서 요청 본문뿐 아니라 `params` 객체, `query` 객체 등 필수적인 프로퍼티들에 접근할 수 있다는 것을 볼 수 있다.

### 실습 — 특정 프로퍼티 추출하기 (params, query, user-agent)
- `console.log`와 `return null` 구문을 제거하고, GET 핸들러 인자에 동적 ID(`:id`)를 추가한다.
- 메서드 안에서 `req.params`로부터 `id` 값을 구조 분해(destructure)한다: `const { id } = req.params;`
- 쿼리 파라미터는 `const queryParams = req.query;`로 가져온다.
- User-Agent 헤더도 가져온다: `const userAgent = req.headers['user-agent'];`
- 이 값들을 담은 객체를 반환한다: `{ id, queryParams, userAgent }`.
- Postman에서 라우트에 ID 값 `101`을 지정하고, 쿼리에 `name=test user`를 설정한 뒤 요청을 보내면, `id`, `queryParams`, `userAgent`를 담은 객체가 응답으로 돌아온다.
- 결론적으로 `@Req()` 데코레이터를 사용하면 요청 객체 전체에 쉽게 접근할 수 있다.

## 예시
```typescript
// app.controller.ts
import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class AppController {
  @Get(':id')
  fetchRequest(@Req() req: Request) {
    const { id } = req.params;
    const queryParams = req.query;
    const userAgent = req.headers['user-agent'];

    return { id, queryParams, userAgent };
  }
}
```

## 요약
- `@Body()`는 요청 본문만 추출하며 DTO와 함께 사용해 클래스 인스턴스로 자동 매핑하는 데 적합하다.
- 요청 객체 전체에 접근해야 할 때는 `@Req()` 데코레이터를 사용하며, Express의 `Request` 인터페이스를 타입으로 지정해 타입 안전성을 확보한다.
- `@Req()`로 받은 요청 객체에서 `req.params`, `req.query`, `req.headers` 등을 통해 params, 쿼리 파라미터, 헤더 등 다양한 정보를 직접 추출할 수 있다.
- `@Req()`는 `@Body()`보다 더 낮은 수준의 제어를 제공하며, DTO에 자동 매핑되지 않는 세부 프로퍼티가 필요할 때 유용하다.
