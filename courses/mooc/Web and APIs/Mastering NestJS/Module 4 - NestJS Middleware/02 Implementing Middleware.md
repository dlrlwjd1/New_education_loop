# Implementing Middleware

## 개요
- NestJS에서 미들웨어(middleware) 파일을 어떻게 만들고, `NestMiddleware` 인터페이스와 `use` 메서드를 이용해 실제 미들웨어 로직을 구현하는지 실습으로 보여주는 강의.

## 내용
### 미들웨어 파일 생성
- `Middleware`라는 폴더를 만들고, 그 안에 `logging.middleware.ts` 파일을 생성한다.
- 파일명에 `Middleware`를 붙이는 것은 엄격한 규칙(strictly necessary)은 아니지만, 해당 파일이 미들웨어 코드를 담고 있음을 명확히 하기 위한 관례(convention)다.

### `@Injectable()` 데코레이터와 클래스 선언
- 미들웨어는 클래스(class)로 작성하며, 애플리케이션 어디서든 사용할 수 있도록 `@Injectable()` 데코레이터를 붙인다.
- `export class LoggingMiddleware` 형태로 클래스를 선언한다.

### `NestMiddleware` 인터페이스와 `use` 메서드
- 클래스를 미들웨어로 지정하기 위해 `NestMiddleware` 인터페이스를 `implements` 한다. 미들웨어를 만들 때는 항상 이 `NestMiddleware` 인터페이스를 사용한다.
- 이 인터페이스는 미들웨어 로직을 정의하는 표준 메서드인 `use` 메서드를 제공한다.
- `use` 메서드는 인자로 `request`, `response`, `next`를 받는다.

### `use` 메서드의 파라미터
- `request`와 `response`는 각각 들어오는 요청 객체와 나가는 응답 객체를 나타내는 기본 파라미터다.
- `next`는 콜백 함수(callback function)를 인자로 받는 중요한 파라미터로, 미들웨어가 작업을 끝냈음을 알리고 체인(chain) 상의 다음 미들웨어로 제어권을 넘기는 역할을 한다. 이 콜백은 선택적으로 에러(error) 파라미터를 받아 에러를 처리하거나 다음 미들웨어에 에러 정보를 전달할 수 있다.
- 일반적으로는 이 콜백 함수 대신 express 모듈에서 제공하는 표준 express.js 미들웨어의 `next` 함수를 사용한다. 이 `next` 함수는 파라미터를 받지 않지만, 기본 콜백 함수와 마찬가지 방식으로 에러도 처리할 수 있다.

### 타입 안전성을 위한 express 타입 적용
- `request`와 `response` 파라미터에 `any` 타입을 쓰는 대신, express 모듈이 제공하는 `Request`, `Response` 인터페이스 타입을 지정한다.
- 이렇게 특정 타입을 지정하는 이유는 엄격한 타입 안전성(strict type safety)을 유지하기 위해서다.

### 간단한 예시 구현
- 콘솔(console)에 날짜(date)를 ISO 문자열(ISO string)로 변환해 로그로 출력하는 간단한 미들웨어를 예시로 구현한다.

### 다음 단계 — 미들웨어 등록
- 미들웨어를 애플리케이션 안에서 적용(apply)하려면, 특정 모듈(module)에 등록(register)해야 한다.
- 미들웨어를 모듈에 등록하는 방법은 다음 강의에서 다룬다.

## 예시
```typescript
// middleware/logging.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(new Date().toISOString());
    next();
  }
}
```

## 요약
- 미들웨어는 `Middleware` 폴더 안에 `xxx.middleware.ts` 형식으로 파일을 만드는 것이 관례다.
- 미들웨어 클래스는 `@Injectable()` 데코레이터를 붙이고 `NestMiddleware` 인터페이스를 `implements` 한다.
- `NestMiddleware`는 `use(req, res, next)` 메서드를 요구하며, 여기에 실제 미들웨어 로직을 작성한다.
- `req`, `res`는 express의 `Request`, `Response` 타입을 사용해 타입 안전성을 확보한다.
- `next`는 다음 미들웨어로 제어를 넘기는 함수이며, 에러 정보를 전달하는 데도 사용할 수 있다.
- 미들웨어를 실제로 동작시키려면 특정 모듈에 등록해야 하며, 이는 다음 강의에서 다룬다.
