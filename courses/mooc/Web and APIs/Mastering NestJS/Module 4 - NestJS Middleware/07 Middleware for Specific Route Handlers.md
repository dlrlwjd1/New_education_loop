# Middleware for Specific Route Handlers

## 개요
- 같은 라우트 경로 아래에서도 GET, POST, PUT, PATCH, DELETE 같은 특정 HTTP 메서드(method)의 핸들러에만 미들웨어(middleware)를 적용하는 방법을, `forRoutes`에 객체를 전달하는 방식으로 보여주는 강의.

## 내용
### 문제 상황 — POST 핸들러 추가
- 현재 예시에서는 `client` 라우트 아래의 모든 라우트가 미들웨어의 감시(watch) 대상이다.
- 여기에 POST 핸들러를 하나 추가한다. 기존의 GET 핸들러들 뒤에 `@Post()` 데코레이터를 붙인 `route4`라는 메서드를 만들고, `"this is route 4 under /client"` 메시지를 반환하도록 한다.
- 이때 미들웨어를 모든 GET 핸들러에는 적용하되 이 POST 핸들러는 제외(exclude)하고 싶은 상황이 생긴다.

### `forRoutes`에 객체 전달하기
- 이런 경우 `forRoutes` 메서드에 문자열 경로 대신 객체(object)를 전달하는 방식으로 라우트를 정의한다.
- 이 객체는 두 가지 프로퍼티를 가진다.
  - `path`: 라우트 경로를 지정하는 프로퍼티로, `client/*`처럼 기본 라우트 패턴은 물론 와일드카드(`*`) 패턴도 지원해서 지정한 경로 세그먼트(segment) 뒤에 오는 어떤 문자든 매치할 수 있다.
  - `method`: 미들웨어를 적용할 HTTP 메서드를 지정하는 프로퍼티로, `RequestMethod`라는 enum으로 표현된다.

### `RequestMethod` enum
- `RequestMethod`는 HTTP 메서드들을 나타내는 상수를 제공하는 열거형(enum)이다.
- 모든 GET 핸들러에 미들웨어를 적용하고 싶으므로 `method` 프로퍼티에 `RequestMethod.GET`을 지정한다.
- `RequestMethod` enum에는 여러 HTTP 메서드와 그 외 몇 가지 메서드가 포함되어 있으며, 각 메서드는 0부터 8까지의 임의의(arbitrary) 숫자 값이 할당되어 있다. 이 숫자들은 enum의 내부 표현 및 비교를 위한 용도로 사용된다.
- 이렇게 `forRoutes`를 객체 형태로 지정하면 컨트롤러 파일에서 POST 핸들러를 미들웨어 적용 대상에서 제외할 수 있다.

### 컨트롤러에서 content type 헤더도 함께 반환
- 각 GET 핸들러에 `@Req()` 데코레이터로 express의 `Request` 타입 `request` 파라미터를 추가하고, `request.headers['content-type']` 값을 응답에 함께 반환하도록 수정한다. 나머지 라우트들도 동일하게 수정한다.
- POST 핸들러에도 라우트 경로를 명시해준다.

### Postman으로 동작 확인
- 경로를 `/route4`로 바꾸고 메서드를 POST로 설정해 요청을 보내면, content type인 `application/json`과 정적 메시지가 함께 반환된다.
- content type 헤더 값을 다른 값으로 바꾸고 다시 요청해도 여전히 content type과 메시지가 정상적으로 반환된다. 이는 미들웨어가 POST 라우트 핸들러를 제외하고 있다는 것을 보여준다.
- 요청 메서드를 GET으로 바꾸고 경로를 `/route2`로 바꿔 요청하면, 미들웨어가 모든 GET 핸들러의 content type을 감시하고 있으므로 unsupported media type 메시지가 반환된다.
- 이렇게 해서 특정 라우트 핸들러(HTTP 메서드 기준)에만 미들웨어를 적용하는 방법을 확인했다.

## 예시
```typescript
// app.module.ts
import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { ContentTypeMiddleware } from './middleware/content-type-middleware/content-type.middleware';

@Module({
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // GET 핸들러에만 미들웨어 적용, POST 핸들러는 제외
    consumer.apply(ContentTypeMiddleware).forRoutes({
      path: 'client/*',
      method: RequestMethod.GET,
    });
  }
}
```

```typescript
// app.controller.ts
import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class AppController {
  @Get('client/route1')
  route1(@Req() request: Request) {
    return {
      contentType: request.headers['content-type'],
      message: 'this is route 1',
    };
  }

  @Get('client/route2')
  route2(@Req() request: Request) {
    return {
      contentType: request.headers['content-type'],
      message: 'this is route 2',
    };
  }

  @Get('client/route3')
  route3(@Req() request: Request) {
    return {
      contentType: request.headers['content-type'],
      message: 'this is route 3',
    };
  }

  @Post('client/route4')
  route4(@Req() request: Request) {
    return {
      contentType: request.headers['content-type'],
      message: 'this is route 4 under /client',
    };
  }
}
```

## 요약
- `forRoutes`에 문자열 대신 `{ path, method }` 객체를 전달하면, 특정 라우트 경로와 특정 HTTP 메서드 조합에만 미들웨어를 적용할 수 있다.
- `path`는 와일드카드(`*`)를 포함한 라우트 패턴을 지원하고, `method`는 `RequestMethod` enum(`GET`, `POST` 등)으로 지정한다.
- `RequestMethod` enum의 각 값에는 0~8의 임의의 숫자가 내부적으로 매핑되어 있다.
- 이 방식을 이용하면 같은 상위 경로 아래에서도 GET 핸들러에만 미들웨어를 적용하고 POST 핸들러는 제외하는 식의 세밀한 제어가 가능하다.
