# Response Object

## 개요
- 이전 강의의 `@Req()`(request) 데코레이터(decorator)와 짝을 이루는 `@Res()`(response) 데코레이터를 사용해, Express의 응답 객체(response object)에 직접 접근하고 `res.send()`, 상태 코드(status code) 설정 등을 다루는 강의.

## 내용
### `@Res()` 데코레이터로 응답 객체 다루기
- `@Req()` 데코레이터로 요청 객체를 다뤘던 것처럼, 응답을 다룰 때는 `@Res()`(response) 데코레이터를 사용한다.
- 이전 강의의 코드에 `@Res()` 데코레이터를 추가하고, 응답을 저장할 프로퍼티를 선언한다. 타입은 Express의 `Response` 인터페이스로 지정한다.
- `Request` 인터페이스와 마찬가지로 `Response` 인터페이스 타입을 지정하는 것도 같은 이유에서다. 즉 응답 객체의 프로퍼티에 접근할 때 타입 안전성(type safety)과 오류 검사(error checking)를 보장하기 위함이다.

### `res.send()`로 응답 본문에 스크립트 담아 보내기
- 반환문에서 `response.send()` 메서드를 사용한다.
- 브라우저 콘솔(console)에 값을 표시하기 위해, `<script>` 태그를 포함한 내용을 `res.send()`로 응답에 담아 보낸다.
- 스크립트 안에서 첫 번째 `console.log`로 `id` 값을 출력하고, 두 번째 `console.log`로는 `JSON.stringify(queryParams)`를 사용해 쿼리 파라미터를 JSON 형태로 출력하며, 세 번째 `console.log`로 `userAgent` 값을 출력한다.
- 브라우저 주소창(URL)에 ID로 `101`을 지정하고, 쿼리로 `name=test user`를 설정한 뒤 요청을 보내면, 응답에 담긴 스크립트가 실행되면서 브라우저의 개발자 도구 콘솔에 URL로부터 전달된 데이터(id, 쿼리 파라미터, user agent)가 출력되는 것을 확인할 수 있다.

### 응답 객체의 다른 프로퍼티 다루기
- 이렇게 NestJS에서 응답 객체를 다룰 수 있으며, 응답 객체의 모든 프로퍼티에 접근할 수 있다.
- 예를 들어 상태 코드(status code)를 `500`으로 설정해볼 수 있다. 이렇게 설정한 뒤 확인하면 콘솔에 상태 코드 `500` 에러가 표시된다.
- 이 외에도 헤더(headers), 쿠키(cookies), 페이지 리다이렉트(redirect) 등 응답 객체의 다양한 프로퍼티를 직접 설정해볼 수 있다고 언급한다.

## 예시
```typescript
// app.controller.ts
import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  @Get(':id')
  fetchRequest(@Req() req: Request, @Res() res: Response) {
    const { id } = req.params;
    const queryParams = req.query;
    const userAgent = req.headers['user-agent'];

    // 상태 코드를 직접 설정해볼 수 있다 (예: 500)
    res.status(500);

    return res.send(`
      <script>
        console.log('${id}');
        console.log(JSON.stringify(${JSON.stringify(queryParams)}));
        console.log('${userAgent}');
      </script>
    `);
  }
}
```

## 요약
- `@Res()` 데코레이터는 Express의 `Response` 객체에 직접 접근할 수 있게 해주며, 타입으로 `Response` 인터페이스를 지정해 타입 안전성을 확보한다.
- `res.send()`로 `<script>` 태그가 포함된 응답을 반환하면, 브라우저가 이를 실행해 브라우저 콘솔에서 `id`, `JSON.stringify(queryParams)`, `userAgent` 값을 확인할 수 있다.
- `res.status(500)`처럼 상태 코드를 직접 설정할 수도 있다.
- 이 외에도 헤더, 쿠키, 리다이렉트 등 응답 객체의 다양한 프로퍼티를 `@Res()`를 통해 직접 제어할 수 있다.
