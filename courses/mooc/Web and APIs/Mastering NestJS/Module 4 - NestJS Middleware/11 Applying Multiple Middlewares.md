# Applying Multiple Middlewares

## 개요
- 인증(authentication), 필터링(filtering) 등 여러 작업을 하나의 미들웨어(middleware)에 몰아넣기보다 별도 모듈로 분리하는 것이 좋은 이유를 설명하고, `apply` 메서드에 여러 미들웨어를 함께 등록할 때 실행 순서와 `next()` 호출이 어떤 영향을 주는지 실습하는 강의.

## 내용
### 미들웨어를 작업별로 분리하는 이유
- 미들웨어가 인증, 필터링처럼 여러 작업(task)을 동시에 처리해야 하는 상황이라면, 하나의 미들웨어에 다 넣기보다 별도의 모듈로 나누는 것이 좋다.
- 이렇게 하면 코드를 관리하기 쉬워지고 재사용(reuse)하기도 쉬워지며, 서로 다른 작업이 분리(separate)되어 정리된 상태를 유지할 수 있다.
- 예를 들어 하나의 미들웨어는 로그인(login)만 처리하고, 다른 미들웨어는 데이터 필터링만 담당하는 식으로 나눌 수 있다.

### 첫 번째 미들웨어 — `RequestDetailsMiddleware`
- `nest generate middleware middleware/request-details --no-spec` 명령으로 미들웨어를 생성한다.
- `use` 메서드에서 `request`, `response` 타입을 지정한 뒤, `request`에서 `method`, `url`, `body`, `headers`를 구조 분해 할당(destructure)한다.
- `requestData`라는 객체를 만들어 `method`, `url`, `body`, 그리고 헤더에서 가져온 `userAgent`(`headers['user-agent']`), `contentType`(`headers['content-type']`) 값을 담는다.
- 이 객체를 `response.json(requestData)`로 JSON 응답으로 변환해 반환한다. 즉 이 미들웨어는 요청(request)에 대한 세부 정보를 응답으로 돌려주는 역할을 한다.

### 두 번째 미들웨어 — `TimestampMiddleware`
- 같은 명령을 다시 실행하되 이름을 `timestamp-middleware`로 바꿔 생성한다.
- 이 미들웨어는 단순히 요청이 들어온 시각(timestamp)을 콘솔에 로그로 남기는 역할만 한다. `timestamp` 상수에 `new Date().toISOString()` 값을 담고 `console.log(timestamp)`로 출력한다.

### 여러 미들웨어를 함께 등록하기
- 모듈 파일의 `configure` 메서드에서 `consumer.apply(RequestDetailsMiddleware, TimestampMiddleware)`처럼 쉼표(comma)로 구분해서 여러 미들웨어를 나열하면, 하나의 라우트나 컨트롤러에 대해 여러 미들웨어를 함께 적용할 수 있다.
- 이때 `apply` 메서드에 미들웨어를 나열한 순서가 실행 순서로 그대로 반영된다는 점을 기억해야 한다. 즉 먼저 나열된 미들웨어가 먼저 실행된다.
- 예를 들어 다른 어떤 처리보다 사용자 인증(authentication)을 먼저 확인해야 하는 경우(예: 로그인 처리는 인증 여부에 따라 접근이 결정되어야 하는 경우), 인증 미들웨어를 목록의 맨 앞에 두어야 한다. 이 순서는 여러 미들웨어를 적용할 때 반드시 신경 써야 하는 핵심 포인트다.
- `forRoutes`에는 `AppController`를 지정해 컨트롤러 전체에 적용한다.

### 컨트롤러와 Postman 테스트
- 컨트롤러에 `@Post('create')` 라우트 핸들러 `create` 메서드를 만들고, `@Body()` 데코레이터로 데이터를 받아 그대로 반환하도록 한다.
- Postman에서 POST `/create` 요청에 `{ id: 1, name: 'user a', role: 'admin' }` 같은 body를 담아 요청하면, 원했던 대로 method, url, body, user agent, content type 등 요청 세부 정보가 반환된다.

### `next()` 호출과 실행 순서에서 발생한 에러
- 콘솔에서 timestamp 값을 확인하려는데 터미널에 `Cannot set headers after they are sent to the client`라는 에러가 나타난다. 이 에러는 이미 응답이 전송된 후에 응답 헤더를 다시 수정하거나 응답을 또 보내려고 할 때(`response.send`나 `response.json` 등을 통해) 발생한다.
- 그런데 timestamp 미들웨어는 단순히 `console.log`만 할 뿐인데 왜 이 에러가 나는지 살펴보면, 원인은 `next()` 함수의 사용법에 있다. `next()`는 목록 상에서 다음 미들웨어로 제어를 넘기는 역할을 한다.
- `apply` 목록에서 `timestamp middleware`는 `request details middleware` 뒤, 즉 목록의 마지막에 위치한다. 따라서 그 뒤에는 더 이상 다른 미들웨어가 없으므로, timestamp 미들웨어 안에 굳이 `next()`를 호출할 필요가 없다.
- timestamp 미들웨어에서 `next()`를 제거하고 다시 요청하면, 터미널에 timestamp 값이 정상적으로 출력된다.
- 즉 목록의 첫 번째 미들웨어(request details middleware)가 성공적으로 실행되어 `next()`를 호출해야만 timestamp 미들웨어가 실행된다. 만약 첫 번째 미들웨어에서 에러가 발생한다면 제어권은 다음 미들웨어로 넘어가지 않는다.
- 반대로 request details 미들웨어에서 `next()`를 제거하면 어떻게 되는지도 확인한다. 이 경우 다시 요청을 보내면 터미널에 timestamp 값이 전혀 표시되지 않는데, 이는 제어권이 목록의 다음 미들웨어로 전달되지 않았다는 뜻이다.
- 결론적으로 여러 미들웨어를 적용할 때는 목록 안에서의 순서와, 각 미들웨어에서 `next()` 호출 여부를 정확히 확인해야 한다.

## 예시
```typescript
// middleware/request-details/request-details.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RequestDetailsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { method, url, body, headers } = req;
    const requestData = {
      method,
      url,
      body,
      userAgent: headers['user-agent'],
      contentType: headers['content-type'],
    };
    res.json(requestData);
    next();
  }
}
```

```typescript
// middleware/timestamp-middleware/timestamp-middleware.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TimestampMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const timestamp = new Date().toISOString();
    console.log(timestamp);
    // 목록의 마지막 미들웨어이므로 next()를 호출할 필요가 없다
  }
}
```

```typescript
// app.module.ts
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { RequestDetailsMiddleware } from './middleware/request-details/request-details.middleware';
import { TimestampMiddleware } from './middleware/timestamp-middleware/timestamp-middleware.middleware';

@Module({
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // 나열된 순서대로 실행된다: RequestDetailsMiddleware -> TimestampMiddleware
    consumer
      .apply(RequestDetailsMiddleware, TimestampMiddleware)
      .forRoutes(AppController);
  }
}
```

```typescript
// app.controller.ts
import { Controller, Post, Body } from '@nestjs/common';

@Controller()
export class AppController {
  @Post('create')
  create(@Body() body: any) {
    return body;
  }
}
```

## 요약
- 미들웨어가 여러 작업(인증, 필터링 등)을 담당해야 한다면 각 작업을 별도의 미들웨어 모듈로 분리하는 것이 관리와 재사용 측면에서 유리하다.
- `consumer.apply(미들웨어1, 미들웨어2, ...)`처럼 쉼표로 나열하면 여러 미들웨어를 한 번에 등록할 수 있고, 나열한 순서가 곧 실행 순서다.
- 인증처럼 다른 처리보다 먼저 실행되어야 하는 미들웨어는 목록의 앞쪽에 두어야 한다.
- 목록의 마지막 미들웨어에서는 `next()`를 호출하지 않아도 되지만, 앞쪽 미들웨어에서 `next()`를 호출하지 않으면 뒤에 있는 미들웨어는 아예 실행되지 않는다.
- 이미 응답을 보낸 뒤(`response.json` 등) 다시 응답을 보내려고 하면 `Cannot set headers after they are sent to the client` 에러가 발생하므로, 미들웨어 체인에서 응답을 언제 보내고 언제 `next()`를 호출할지 정확히 설계해야 한다.
