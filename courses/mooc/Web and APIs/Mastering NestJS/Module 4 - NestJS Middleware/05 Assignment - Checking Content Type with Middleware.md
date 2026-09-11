# Assignment - Checking Content Type with Middleware

## 개요
- 요청(request)의 `Content-Type` 헤더를 검사해서 `application/json`이 아니면 접근을 막는 미들웨어(middleware)를 직접 만들어보는 실습형 과제(assignment) 강의.

## 내용
### 과제 요구사항
- 요청이 들어올 때마다 content type을 확인해서, content type이 `application/json`일 때만 이후 라우트(route)에 접근할 수 있게 하고, 그렇지 않으면 에러를 반환하는 미들웨어를 작성하는 것이 요구사항이다.

### Nest CLI로 미들웨어 생성
- `nest g mi`(generate middleware) 명령으로 새 미들웨어를 만든다. 디렉터리로 `middleware`를 지정하고 이름은 `content-type-middleware`로 주며, 테스트 파일 생성을 막기 위해 `--no-spec` 옵션을 붙인다.
- Nest CLI는 미들웨어 이름을 기반으로 폴더를 만들고 그 안에 미들웨어 파일을 생성하며, 이미 `NestMiddleware` 인터페이스와 `use` 메서드가 채워진 기본 보일러플레이트(boilerplate) 코드를 제공한다. 이 강의에서는 이 기본 보일러플레이트를 그대로 사용한다.

### `use` 메서드 안에서 content type 검사
- `contentType` 상수를 만들고, `request.headers`의 `content-type` 속성 값을 대입해서 요청 객체의 헤더 값을 가져온다.
- 먼저 `contentType`이 존재하지 않으면(`if` 조건), 응답 상태 코드 `400`과 함께 `{ message: 'content type is missing' }` payload를 반환한다.
- 그 다음 `contentType`이 `application/json`과 같지 않으면, 응답 상태 코드 `415`(Unsupported Media Type)와 함께 관련 에러 메시지를 반환한다.
- 두 조건을 모두 통과하면 `next()`를 호출해 다음 단계로 흐름을 넘긴다.

### 미들웨어 등록
- `app.module.ts`에서 `AppModule` 클래스가 `NestModule` 인터페이스를 구현하도록 하고, `configure` 메서드 안에서 `consumer.apply(ContentTypeMiddleware).forRoutes('client')`처럼 `client`라는 라우트에 대해 미들웨어를 등록한다.

### 컨트롤러 라우트 정의
- 컨트롤러에 `@Get('client')` 데코레이터가 붙은 `checkContentType`이라는 메서드를 만들고, 환영 메시지(welcome message)를 반환하도록 한다.

### Postman으로 동작 확인
- `localhost:3000/client`에 content type 헤더 없이 요청을 보내면 `"content type is missing"` 메시지가 반환된다.
- content type 헤더 값을 `text/html`(잘못된 값)로 설정해 요청을 보내면 unsupported media type 에러가 반환된다.
- content type 헤더 값을 `application/json`으로 올바르게 설정해 요청을 보내면 환영 메시지가 정상적으로 반환된다.
- 이 예시를 통해 미들웨어가 들어오는 요청의 content type 헤더를 검증함으로써, 원하는 content type을 가진 요청만 라우트에 접근하도록 접근 제어(access control)를 할 수 있음을 확인한다.

## 예시
```typescript
// middleware/content-type-middleware/content-type.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ContentTypeMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const contentType = req.headers['content-type'];

    if (!contentType) {
      return res.status(400).json({ message: 'content type is missing' });
    }

    if (contentType !== 'application/json') {
      return res
        .status(415)
        .json({ message: 'unsupported media type, expected application/json' });
    }

    next();
  }
}
```

```typescript
// app.module.ts
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { ContentTypeMiddleware } from './middleware/content-type-middleware/content-type.middleware';

@Module({
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ContentTypeMiddleware).forRoutes('client');
  }
}
```

```typescript
// app.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('client')
  checkContentType() {
    return 'welcome message';
  }
}
```

## 요약
- `nest g mi`(generate middleware) 명령으로 미들웨어 파일과 폴더를 자동 생성할 수 있다.
- 미들웨어의 `use` 메서드에서 `request.headers['content-type']` 값을 읽어 존재 여부와 값을 검사할 수 있다.
- content type이 없으면 `400`, `application/json`이 아니면 `415`(Unsupported Media Type) 상태 코드로 응답을 반환하고, 통과하면 `next()`로 흐름을 이어간다.
- 이런 방식으로 미들웨어는 요청 헤더를 기준으로 라우트에 대한 접근 제어(access control)를 구현할 수 있다.
