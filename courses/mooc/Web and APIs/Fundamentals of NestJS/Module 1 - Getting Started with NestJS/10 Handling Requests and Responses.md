# Handling Requests and Responses

## 개요
- NestJS에서 `@Req()`와 `@Res()` 데코레이터를 사용해 요청(request) 데이터를 읽고, 상태 코드(status code)와 JSON 형식을 직접 제어하며 응답(response)을 만드는 방법을 다루는 강의.

## 내용
### 요청과 응답이란
- **요청(request)**과 **응답(response)** 객체는 HTTP 요청을 처리하고 HTTP 응답을 생성하는 핵심 요소다.
- 이 객체들은 들어오는 요청 데이터와 상호작용하고, NestJS 애플리케이션이 클라이언트에게 돌려보낼 응답 데이터를 준비하는 데 사용된다.
- 동작 방식: 클라이언트가 서버에 요청(request)을 보내면, 서버는 그 요청 내용을 바탕으로 클라이언트가 무엇을 요청했는지 판단하고, 그에 맞는 응답(response)을 생성해 돌려준다.

### 요청(request) 접근하기 — @Req()
- NestJS 애플리케이션에서 요청에 접근하려면 `Req`를 사용한다. 이는 NestJS의 `@nestjs/common` 패키지에서 가져온다(import).
- 메서드 파라미터에 `@Req() req`처럼 지정하면, 해당 요청의 모든 기능이 이 파라미터에 할당된다.
- 요청을 사용하면 쿼리 값(query value), 라우트 파라미터, 바디(body) 등을 가져올 수 있다. 이런 것들은 요청 객체 없이도 가능하지만, 요청 객체를 쓰면 클라이언트가 서버로 보낸 전체 요청에 접근할 수 있다는 장점이 있다.
- 예를 들어 헤더(header)에 특정 키(key)가 있는지 확인해 인증(authentication)을 처리하고, 없으면 에러를 보내는 것과 같은 처리도 요청 객체를 통해 할 수 있다.
- `console.log(req.headers)`처럼 작성하면 요청에 담긴 모든 헤더 데이터를 확인할 수 있다. API를 호출하면 클라이언트가 보낸 모든 헤더 정보가 서버 콘솔에 출력된다.

### 응답(response) 제어하기 — @Res()
- 응답에 접근하려면 `Res`를 사용한다. `@Res() res`처럼 지정하면 서버에서 클라이언트로 보내는 응답을 완전히 제어할 수 있다 — 어떤 데이터를 보낼지, 어떤 상태(status)로 보낼지 등을 결정할 수 있다.
- 기존에 문자열을 그냥 `return`하던 방식 대신, `res.status(200).json({...})`처럼 상태 코드와 JSON 형식을 직접 지정해 응답을 보낼 수 있다.
- 이렇게 하면 응답 본문뿐 아니라 상태 코드 등 부가 정보도 함께 확인할 수 있다.

### 조건에 따른 응답 — answer 엔드포인트 예시
- 기존 `answer` 엔드포인트를 예로 들어, 사용자가 보낸 답변이 "yes"인지 아닌지에 따라 다른 응답을 주도록 수정한다.
- 메서드 파라미터에 `@Req() req`와 `@Res() res`를 함께 선언한다.
- 요청 바디(body)에서 값을 가져올 때는 `req.body.answer`처럼 접근한다(NestJS가 제공하는 `@Body()` 기능을 쓸 수도 있지만, 여기서는 요청 객체를 통해 직접 접근한다).
- `answer === 'yes'`이면 응답 메시지를 `"It is yes"`, 상태 코드를 `200`으로 설정하고, 그렇지 않으면 응답 메시지를 `"It is no"`, 상태 코드를 `400`으로 설정한다.
- 마지막에는 `return`으로 문자열을 바로 반환하는 대신, `res.status(status).json({ response })`처럼 상태와 JSON 객체를 함께 담아 응답을 보낸다.
- Postman에서 `answer` 값으로 `"yes"`를 보내면 `"It is yes"`와 상태 코드 200을 받고, 그 외의 값을 보내면 `"It is no"`와 상태 코드 400을 받는 것을 확인한다.

## 예시
```typescript
import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  @Get()
  getHello(@Req() req: Request, @Res() res: Response) {
    console.log(req.headers);
    return res.status(200).json({ response: 'Hello World' });
  }

  @Post('answer')
  answer(@Req() req: Request, @Res() res: Response) {
    let response;
    let status;

    if (req.body.answer === 'yes') {
      response = 'It is yes';
      status = 200;
    } else {
      response = 'It is no';
      status = 400;
    }

    return res.status(status).json({ response });
  }
}
```

```json
// POST /answer 요청 body
{ "answer": "yes" }
// → 상태 코드 200, { "response": "It is yes" }

{ "answer": "no" }
// → 상태 코드 400, { "response": "It is no" }
```

## 요약
- `@Req()`로 요청 객체 전체(헤더, 쿼리, 바디 등)에 접근할 수 있고, `@Res()`로 응답을 완전히 제어할 수 있다.
- `@Res()`를 사용하면 `res.status(코드).json(데이터)` 형태로 상태 코드와 응답 바디를 직접 지정할 수 있다.
- 요청 바디 값에 따라 조건 분기하여 서로 다른 상태 코드와 응답 메시지를 반환하는 패턴을 구현할 수 있다.
- 다음 영상에서는 NestJS에서 서비스(services)를 만드는 방법을 다룬다.
