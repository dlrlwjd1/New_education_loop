# Registering a Middleware

## 개요
- 앞서 만든 미들웨어(middleware)를 `NestModule` 인터페이스와 `MiddlewareConsumer`를 이용해 모듈에 실제로 등록(register)하고, `forRoutes`와 `next()` 호출의 중요성을 실습으로 확인하는 강의.

## 내용
### `NestModule` 인터페이스와 `configure` 메서드
- NestJS에서 정의한 미들웨어는 반드시 특정 모듈(module)에 등록해야 한다. 현재는 `app module` 외에 다른 모듈이 없으므로 `app.module.ts`의 `AppModule` 클래스 안에 미들웨어를 등록한다.
- 모듈에 미들웨어 같은 추가 설정(configuration)을 제공하려면 `NestModule` 인터페이스를 사용해야 한다.
- `NestModule` 인터페이스는 미들웨어를 등록하는 데 사용되는 `configure` 메서드를 제공한다. 이 메서드는 `MiddlewareConsumer` 타입의 파라미터를 받는데, 이를 통해 들어오는 요청(incoming request)에 대한 미들웨어를 구성할 수 있다.
- `MiddlewareConsumer`는 미들웨어와 함께 사용할 수 있는 몇 가지 내장(built-in) 메서드를 제공하는 헬퍼 클래스(helper class)다.

### `apply` 메서드로 미들웨어 등록
- `MiddlewareConsumer`가 제공하는 메서드 중 먼저 `apply` 메서드를 사용한다. `consumer.apply(LoggingMiddleware)`처럼 괄호 안에 등록할 미들웨어 클래스를 지정한다.
- `NestModule` 인터페이스 없이는 이런 방식의 미들웨어 등록이 불가능하다.
- 특정 모듈(app module 포함)에서 미들웨어를 사용하려면 모듈 단위 등록이 필수(mandatory) 단계다. 다만 미들웨어를 전역(global) 레벨로 등록하는 경우에는 모듈 레벨에서 따로 등록할 필요가 없으며, 이는 이후 전역 미들웨어를 다루는 강의에서 설명한다.

### 컨트롤러에 POST 핸들러 추가
- 컨트롤러 파일에 `@Post()` 데코레이터를 사용해 `createMessage`라는 메서드를 만든다.
- `@Body()` 데코레이터로 `message`라는 문자열(string) 타입 변수를 받는다.
- 받은 `message`를 콘솔에 출력(console)하고, `"message received successfully"`라는 문자열을 응답으로 반환한다.
- Postman에서 요청 본문(body)에 `message` 속성과 `"testing middleware"` 값을 넣어 요청을 보내면 반환 메시지는 정상적으로 받지만, VS Code 터미널에는 메시지만 콘솔에 찍히고 미들웨어가 찍어야 할 날짜(date) 값은 나오지 않는다.

### 라우트(route)를 지정하지 않아 미들웨어가 동작하지 않는 문제
- 미들웨어가 동작하지 않은 이유는 미들웨어에 어떤 라우트(route)를 적용할지 지정하지 않았기 때문이다.
- `forRoutes` 메서드를 사용하고 와일드카드(wildcard) 라우트(`*`)를 지정해서 컨트롤러에 정의된 모든 라우트에 적용되도록 한다.
- 즉, 미들웨어를 `apply`한 뒤에는 반드시 `forRoutes`로 적용할 라우트도 함께 지정해야 하며, 와일드카드 라우트를 사용하면 해당 라우트로 들어오는 모든 요청에 대해 미들웨어가 실행되도록 보장할 수 있다.

### `next()` 호출을 빠뜨렸을 때 발생하는 무한 루프
- `forRoutes`까지 지정한 뒤 다시 요청을 보내면, 이번에는 요청-응답 사이클이 끊긴 채(interrupted) 무한 루프(infinite loop)에 걸린 것처럼 멈춰버린다.
- 터미널에는 날짜 값은 찍히지만 메시지 값은 찍히지 않는데, 이는 미들웨어 안에서 `next` 함수를 호출하는 코드를 작성하지 않았기 때문이다.
- 그래서 미들웨어의 로직을 정의한 뒤 가장 마지막에 `next` 함수를 호출해야 한다. 마지막에 두는 이유는 현재 미들웨어 실행 흐름을 방해하지 않고 그대로 유지하면서, 체인(chain) 상의 다음 미들웨어로 제어권을 넘기기 위함이다.
- 즉, 무한 루프나 흐름이 끊기는 문제를 피하려면 항상 미들웨어 로직의 끝에서 `next()`를 호출해야 한다.
- `next()`를 추가한 뒤 다시 요청을 보내면 반환 메시지도 정상적으로 받고, 터미널에도 날짜 값과 메시지 값이 모두 정상적으로 출력된다. 이렇게 해서 미들웨어가 올바르게 등록되고 동작하는 것을 확인한다.

## 예시
```typescript
// app.module.ts
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggingMiddleware } from './middleware/logging.middleware';

@Module({
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
```

```typescript
// app.controller.ts
import { Controller, Post, Body } from '@nestjs/common';

@Controller()
export class AppController {
  @Post('create-message')
  createMessage(@Body('message') message: string) {
    console.log(message);
    return 'message received successfully';
  }
}
```

```typescript
// middleware/logging.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(new Date().toISOString());
    next(); // 반드시 마지막에 호출해야 다음 단계로 흐름이 이어진다
  }
}
```

## 요약
- 미들웨어는 `NestModule` 인터페이스를 구현한 모듈 클래스의 `configure(consumer: MiddlewareConsumer)` 메서드 안에서 등록한다.
- `consumer.apply(미들웨어클래스)`로 미들웨어를 적용하고, 반드시 `forRoutes(...)`로 적용할 라우트를 지정해야 한다. 지정하지 않으면 미들웨어는 실행되지 않는다.
- 와일드카드(`*`)를 `forRoutes`에 지정하면 해당 컨트롤러의 모든 라우트에 미들웨어가 적용된다.
- 미들웨어 로직의 마지막에 반드시 `next()`를 호출해야 하며, 그렇지 않으면 요청-응답 사이클이 끊기고 무한 루프처럼 멈춘다.
- 전역(global) 레벨로 미들웨어를 등록하는 경우에는 모듈 단위 등록이 필요하지 않으며, 이는 이후 강의에서 다룬다.
