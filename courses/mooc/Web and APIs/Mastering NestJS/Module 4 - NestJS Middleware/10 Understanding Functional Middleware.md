# Understanding Functional Middleware

## 개요
- NestJS 미들웨어(middleware)에는 클래스 기반의 일반(common) 미들웨어와, 함수 하나로 정의하는 함수형(functional) 미들웨어 두 가지 종류가 있음을 설명하고, 함수형 미들웨어를 직접 구현해보는 강의.

## 내용
### 두 가지 미들웨어 종류
- NestJS에는 두 가지 종류의 미들웨어가 있다.
  - 하나는 지금까지 다룬 일반(common) 미들웨어 클래스로, `NestMiddleware` 인터페이스를 사용해 정의한다.
  - 다른 하나는 `NestMiddleware` 인터페이스를 구현하지 않고, 단순히 함수(function)로 정의하는 함수형 미들웨어(functional middleware)다.

### 함수형 미들웨어 작성
- `Middleware` 폴더 안에 `convert.middleware.ts`라는 새 파일을 만든다.
- `export function convertMiddleware(...)` 형태로 미들웨어 함수를 정의한다. 인자로는 express의 `Request` 타입 `request` 파라미터, `Response` 타입 `response` 파라미터, 그리고 `NextFunction` 타입 `next` 파라미터를 받는다. 이것이 함수형 미들웨어가 기본적으로 갖는 인자 구성이다.

### 미들웨어 로직 — 요청 본문을 JSON으로 변환
- 로직으로는 요청 본문(request body)을 JSON으로 변환하는 간단한 처리를 한다.
- `request.body`가 존재하고 그 타입이 객체(object)인 경우에는, 응답 상태(status)를 200으로 설정하고 `request.body`를 JSON으로 변환해 응답한다.
- 이후 `return`과 함께 `next()`를 호출해 마무리한다.
- 이 방식은 문법이 더 깔끔하고(clean) 이해하기 쉽다(easy to understand)는 특징이 있다.

### 모듈에 등록
- 모듈의 `configure` 메서드에서 `consumer.apply(convertMiddleware).forRoutes('*')`처럼 와일드카드 라우트를 지정해 모든 라우트에 적용한다.

### 컨트롤러와 Postman 테스트
- 컨트롤러 파일에 POST 라우트 핸들러를 정의한다. `create`라는 메서드를 만들고 `@Body()` 데코레이터로 `any` 타입의 `body` 프로퍼티를 받아 그대로 반환한다.
- Postman에서 요청 메서드를 POST로, 경로를 `localhost:3000`으로 설정하고, 요청 본문에 `id: 101`, `name: employee x`, `department` 값을 담아 요청을 보낸다.
- 요청을 보내면 JSON 데이터가 반환되는데, 이는 함수형 미들웨어가 요청 본문을 JSON으로 변환하는 역할을 한 결과다.

### 함수형 미들웨어를 언제 쓰는가
- 함수형 미들웨어는 의존성(dependency)이나 추가 멤버, 메서드, 복잡한 로직이 없는 단순한 미들웨어를 만들 때 사용하면 좋다. 그렇지 않은 경우에는 일반 미들웨어 클래스를 사용하면 된다.

### 일반 미들웨어와 함수형 미들웨어의 차이
- 일반 미들웨어는 클래스로, 함수형 미들웨어는 함수로 초기화된다는 차이 외에도, 일반 미들웨어는 의존성 주입(dependency injection), 라이프사이클 훅(life cycle hooks), 클래스 메서드 안에 로직을 캡슐화(encapsulation)하는 등의 추가 기능을 제공한다.
- 반면 함수형 미들웨어는 이런 기능들이 없는 대신, 클래스 인스턴스화 없이도 가볍고 단순하게(lightweight and straightforward) 미들웨어를 구현할 수 있다는 장점이 있다.
- 결국 어떤 방식을 선택할지는 전적으로 무엇을 구현하려는지에 달려 있다.

## 예시
```typescript
// middleware/convert.middleware.ts
import { Request, Response, NextFunction } from 'express';

export function convertMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (req.body && typeof req.body === 'object') {
    res.status(200);
    return res.json(req.body);
  }
  next();
}
```

```typescript
// app.module.ts
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { convertMiddleware } from './middleware/convert.middleware';

@Module({
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(convertMiddleware).forRoutes('*');
  }
}
```

```typescript
// app.controller.ts
import { Controller, Post, Body } from '@nestjs/common';

@Controller()
export class AppController {
  @Post()
  create(@Body() body: any) {
    return body;
  }
}
```

## 요약
- NestJS 미들웨어는 `NestMiddleware` 인터페이스를 구현하는 클래스 기반 일반 미들웨어와, 단순 함수로 작성하는 함수형(functional) 미들웨어 두 가지 방식으로 만들 수 있다.
- 함수형 미들웨어는 `(request, response, next)`를 인자로 받는 함수로 작성하며, 문법이 더 간결하다.
- 모듈에 등록하는 방식(`consumer.apply(...).forRoutes(...)`)은 클래스 기반 미들웨어와 동일하다.
- 함수형 미들웨어는 의존성이나 복잡한 로직이 없는 단순한 경우에 적합하며, 의존성 주입이나 라이프사이클 훅 같은 기능이 필요하면 클래스 기반 미들웨어를 사용해야 한다.
