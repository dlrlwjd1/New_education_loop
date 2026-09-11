# Applying Global Middlewares

## 개요
- NestJS에서 미들웨어(middleware)를 애플리케이션 전역(global)으로 적용하는 두 가지 방법 — 모듈의 `forRoutes`에 `RequestMethod.ALL`을 지정하는 방법과 `main.ts`에서 `app.use()`를 사용하는 방법 — 을 비교하며 실습하는 강의.

## 내용
### 첫 번째 방법 — `forRoutes`에 `RequestMethod.ALL` 지정
- 이전 강의에서 구현한 미들웨어를 전역으로 적용하기 위해, `app.module.ts`의 `forRoutes` 메서드 안에서 `path` 프로퍼티에 와일드카드 라우트를, `method` 프로퍼티에 `RequestMethod.ALL`을 지정한다.
- `RequestMethod.ALL`은 GET, PUT, PATCH, POST, DELETE 등 모든 HTTP 메서드를 나타낸다. 이렇게 설정하면 미들웨어가 전역으로 적용된다.
- Postman에서 이미 준비된 요청 본문으로 POST 요청을 보내면 정상적으로 동작하는 것을 확인한다.

### 두 번째 방법 — `app.use()`
- 두 번째 방법은 Express에서 미들웨어를 다뤄본 경험이 있다면 더 익숙한 방식으로, `app.use()` 메서드를 사용하는 것이다.
- 먼저 모듈 파일에서 기존 `apply` 메서드 호출을 주석 처리하고, 모듈에서는 `MiddlewareConsumer`가 더 이상 필요하지 않게 한다.
- NestJS 앱의 진입점(entry point)인 `main.ts` 파일로 가서 `app.use()` 메서드를 사용한다. 클래스로 만든 미들웨어(`RequestDetailsMiddleware`)를 `new` 키워드로 인스턴스화해서 `app.use(new RequestDetailsMiddleware())`처럼 전달한다.

### 클래스 미들웨어를 `app.use()`에 전달했을 때의 에러
- Postman에서 요청을 다시 보내면 "could not send request"라는 메시지가 나타난다.
- 터미널을 확인하면 `app.use() requires a middleware function`이라는 에러가 발생한다.
- 즉 `app.use()` 메서드로 미들웨어를 전역 적용할 때는 항상 함수형(functional) 미들웨어를 지정해야 한다는 중요한 규칙이 있다.

### 함수형 미들웨어로 변경
- 클래스 미들웨어를 함수형 미들웨어로 바꾼다. 나머지 로직은 그대로 유지한다.
- `app.use()`에서는 클래스를 인스턴스화하는 대신 함수 이름만 그대로 전달한다(`app.use(requestDetailsMiddleware)`).
- 다시 요청을 보내면 데이터가 정상적으로 표시되지만, 요청 본문(request body)이 JSON 형태로 표시되지 않는 문제가 남아 있다.

### Express의 JSON 파서 미들웨어 추가
- 이 문제를 해결하기 위해 Express가 제공하는 JSON 파서 미들웨어도 함께 적용한다.
- 이후 다시 요청을 보내면 요청 본문도 정상적으로 함께 반환된다.

### 전역 함수형 미들웨어의 한계
- 함수형 미들웨어를 전역으로 적용할 때의 유일한 단점은 의존성 주입(dependency injection)을 지원하지 않는다는 점이다. 함수는 의존성으로 주입될 수 없기 때문이다.
- 그 점을 제외하면 함수형 미들웨어는 단순한 작업이나 의존성 주입이 필요하지 않은 시나리오에서는 여전히 유용하다.
- 의존성 주입이 필요한 더 복잡한 미들웨어의 경우에는 클래스로 미들웨어를 정의하는 것이 권장된다.

## 예시
```typescript
// app.module.ts — 첫 번째 방법: RequestMethod.ALL로 전역 적용
import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { RequestDetailsMiddleware } from './middleware/request-details/request-details.middleware';

@Module({
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestDetailsMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
```

```typescript
// middleware/request-details.middleware.ts — 두 번째 방법을 위한 함수형 미들웨어
import { Request, Response, NextFunction } from 'express';

export function requestDetailsMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { method, url, body, headers } = req;
  const requestData = {
    method,
    url,
    body,
    userAgent: headers['user-agent'],
    contentType: headers['content-type'],
  };
  res.json(requestData);
}
```

```typescript
// main.ts — 두 번째 방법: app.use()로 전역 적용
import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { AppModule } from './app.module';
import { requestDetailsMiddleware } from './middleware/request-details.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.use()는 반드시 함수형 미들웨어를 요구한다 (클래스 인스턴스는 불가)
  app.use(express.json()); // 요청 본문을 JSON으로 파싱
  app.use(requestDetailsMiddleware);

  await app.listen(3000);
}
bootstrap();
```

## 요약
- 미들웨어를 전역으로 적용하는 첫 번째 방법은 모듈의 `forRoutes`에 `{ path: '*', method: RequestMethod.ALL }`을 지정하는 것이다.
- 두 번째 방법은 `main.ts`에서 `app.use()`를 사용하는 것이며, 이 방식에서는 반드시 함수형 미들웨어를 전달해야 한다. 클래스 미들웨어를 넘기면 `app.use() requires a middleware function` 에러가 발생한다.
- `app.use()`로 전역 적용 시 요청 본문을 JSON으로 파싱하려면 Express의 JSON 파서 미들웨어(`express.json()`)도 함께 등록해야 한다.
- 함수형 미들웨어를 전역으로 쓸 때의 단점은 의존성 주입을 지원하지 않는다는 점이며, 의존성 주입이 필요한 복잡한 미들웨어는 클래스 기반으로 작성하는 것이 권장된다.
