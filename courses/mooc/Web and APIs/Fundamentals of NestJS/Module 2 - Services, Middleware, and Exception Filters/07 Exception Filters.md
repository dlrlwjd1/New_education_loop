# Exception Filters

## 개요
- NestJS의 **예외 필터(exception filters)** 개념과 내장(built-in) HTTP 예외 클래스들을 설명하고, 이전에 직접 작성했던 미들웨어와 컨트롤러의 수동 에러 응답을 `throw new UnauthorizedException()`, `throw new BadRequestException()` 같은 예외로 대체하는 강의.

## 내용
### 예외 필터란 무엇인가
- 예외 필터(exception filters)는 애플리케이션 실행 중 발생하는 예외(exceptions)를 처리하는 데 사용된다.
- 예외 필터는 전역 에러 핸들러(global error handlers)처럼 동작하며, 예외 처리를 중앙집중화(centralize)할 수 있게 해준다.
- 애플리케이션에서 예외가 발생(throw)하면 예외 필터가 이를 캐치(catch)해 클라이언트에게 의미 있는 응답을 반환한다.
- 예외 필터는 에러 처리, 로깅, 애플리케이션 전반에 걸쳐 일관된 에러 응답을 제공하는 데 강력한 도구다.

### NestJS 공식 문서의 필터 레이어
- NestJS 공식 문서를 보면, 예외가 발생할 때 적절한 상태 코드(status code)와 에러를 보내주는 필터의 레이어(layer)가 존재한다는 것을 알 수 있다.
- 문서에는 NestJS가 미리 정의해둔(predefined) 다양한 HTTP 예외(Http exceptions)들이 나와 있으며, 자신의 사용 사례(use case)에 맞게 사용할 수 있다.
- 필요하다면 커스텀 데이터(custom data)를 전달해 예외 응답에 추가할 수도 있다.

### 미들웨어에 예외 적용하기 — UnauthorizedException
- 이전 강의에서 만든 인증 체크 미들웨어는 `authorization` 헤더가 없으면 `response.status(403).json(...)`으로 직접 응답을 만들어 보냈었다.
- NestJS 문서에서 `UnauthorizedException`이라는 전용 예외를 찾아 사용할 수 있다.
- 사용법은 `throw new UnauthorizedException()`처럼 `throw new`와 예외 이름을 사용하는 것이며, 이 예외는 import해서 사용한다.
- 기존의 수동 응답 코드 대신 `throw new UnauthorizedException()`으로 교체한 뒤, Postman에서 `authorization` 헤더 없이 요청을 보내면 기본적으로 **401 Unauthorized** 상태와 함께 에러가 반환된다. 별도로 상태 코드나 메시지를 직접 만들 필요가 없다.

### 컨트롤러에 예외 적용하기 — BadRequestException
- 이런 예외들은 컨트롤러에서도 사용할 수 있어 많은 요청을 처리하는 데 도움이 된다. 에러 대신 원하는 데이터를 보낼 수도 있다.
- 이전에 만든 `answer` 엔드포인트에서, 답변이 "no"일 때 상태 코드 400과 직접 만든 메시지를 응답했던 부분을 살펴본다.
- 해당 상황에 딱 맞는 전용 예외는 없지만, `BadRequestException`을 사용할 수 있다.
- 기존의 수동 응답 코드 대신 `throw new BadRequestException()`으로 교체하고 import한다.
- Postman에서 `answer: "yes"`를 보내면 기존 코드대로 "it is yes"가 반환되고, `answer: "no"`를 보내면 별도로 정의하지 않았음에도 예외가 자동으로 발생해 적절한 에러 응답을 받는다.

## 예시
```typescript
// middleware/authcheck.middleware.ts (예외 필터 적용 후)
import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthcheckMiddleware implements NestMiddleware {
  use(request: Request, response: Response, next: NextFunction) {
    if (request.headers.authorization) {
      next();
    } else {
      throw new UnauthorizedException();
    }
  }
}
```

```typescript
// app.controller.ts - answer 엔드포인트 (예외 필터 적용 후)
import { Controller, Post, Req, BadRequestException } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class AppController {
  @Post('answer')
  answer(@Req() req: Request) {
    if (req.body.answer === 'yes') {
      return 'It is yes';
    }
    throw new BadRequestException();
  }
}
```

```
GET / (authorization 헤더 없음)  → 401 Unauthorized (UnauthorizedException)
POST /answer { "answer": "no" }  → 400 Bad Request (BadRequestException)
```

## 요약
- 예외 필터는 애플리케이션에서 발생한 예외를 전역적으로 캐치해 일관된 에러 응답을 반환하는 NestJS의 메커니즘이다.
- NestJS는 `UnauthorizedException`, `BadRequestException` 같은 미리 정의된 HTTP 예외 클래스들을 제공하며, `throw new <예외이름>()` 형태로 사용한다.
- 예외를 던지면 상태 코드와 에러 메시지를 직접 작성할 필요 없이 NestJS가 적절한 응답을 자동으로 만들어준다.
- 다음 영상에서는 지금까지 다룬 내용을 하나로 종합해서 정리한다.
