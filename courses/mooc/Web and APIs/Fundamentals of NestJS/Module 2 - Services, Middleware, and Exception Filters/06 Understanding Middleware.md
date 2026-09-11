# Understanding Middleware

## 개요
- NestJS에서 **미들웨어(middleware)**가 무엇인지 설명하고, 요청 헤더(header)에 `authorization` 값이 있는지 확인하는 인증 체크 미들웨어를 직접 만들어 `AppModule`에 적용하는 강의.

## 내용
### 미들웨어란 무엇인가
- 미들웨어(middleware)는 요청-응답 사이클(request response cycle)의 여러 단계에서 들어오는 요청(incoming requests)과 나가는 응답(outgoing responses)을 처리하고 조작(manipulate)하는 방법이다.
- 미들웨어 함수는 인가(authorization), 로깅(logging), 데이터 변환(data transformation) 같은 작업을 수행하는 데 사용될 수 있다.
- 미들웨어는 정해진 순서대로(specific order) 실행되며, 이를 통해 애플리케이션의 라우트(route)와 컨트롤러의 동작을 커스터마이즈할 수 있다.
- 미들웨어 함수는 요청(request)과 응답(response) 객체를 받아, 다음 미들웨어나 라우트 핸들러로 제어권을 넘기기 전에 이 객체들을 수정할 수 있다.

### 미들웨어 파일 생성
- `src` 폴더 안에 `middleware`라는 폴더를 만들고, 그 안에 첫 미들웨어 파일을 만든다. 강의에서는 요청 헤더의 `authorization`을 확인하는 목적이므로 파일명을 `authcheck.middleware.ts`로 지었다.
- 미들웨어 클래스는 `export class AuthcheckMiddleware`로 선언하고, NestJS의 `NestMiddleware`를 `implements` 한다.
- Express에서 미리 정의된 타입인 `Request`, `Response`, `NextFunction`을 import해서 사용한다.
- 미들웨어의 `use` 메서드는 `request`, `response`, `next` 세 값을 받는다.
- 처음에는 단순히 요청 헤더(`request.headers`)를 로그(log)로 출력하는 것부터 시작한다.

### AppModule에 미들웨어 적용하기
- 미들웨어를 실제로 적용하려면 `AppModule`이 `NestModule`을 `implements`해야 한다.
- `configure(consumer: MiddlewareConsumer)` 메서드 안에서 `consumer.apply(AuthcheckMiddleware)`로 적용할 미들웨어를 지정한다.
- 이어서 `.forRoutes(...)`로 어떤 라우트에 적용할지 지정한다. 여기에는 `path`와 `method`를 담은 객체를 전달하며, `path: '*'`는 모든 URL에 적용됨을 의미하고, `method: RequestMethod.ALL`은 모든 HTTP 메서드에 적용됨을 의미한다.

### next() 호출과 인증 체크 로직 완성
- 로그를 남긴 뒤, 다음 미들웨어나 라우트 핸들러로 넘어갈 수 있도록 `next()`를 호출해야 한다.
- 인증 체크 로직: `request.headers.authorization`이 존재하면 `next()`를 호출해 다음 단계로 진행한다. 그렇지 않으면 `response.status(403).json(...)`으로 JSON 형태의 메시지를 응답한다.
- 응답 내용은 `code: 403`과 `message: "Not authorized"`를 포함하도록 구성한다.
- 저장 후 Postman에서 `authorization` 헤더 없이 요청을 보내면 `"Not authorized"` 응답을 받고, `authorization` 헤더를 추가하면(값은 무엇이든 상관없이 헤더 키(key)의 대소문자 표기가 올바르면) 정상적으로 다음 단계로 넘어가 원래 데이터가 반환되는 것을 확인한다.

## 예시
```typescript
// middleware/authcheck.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthcheckMiddleware implements NestMiddleware {
  use(request: Request, response: Response, next: NextFunction) {
    console.log(request.headers);

    if (request.headers.authorization) {
      next();
    } else {
      response.status(403).json({
        code: 403,
        message: 'Not authorized',
      });
    }
  }
}
```

```typescript
// app.module.ts
import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AuthcheckMiddleware } from './middleware/authcheck.middleware';

@Module({
  // ... controllers, providers, imports
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthcheckMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
```

```
GET / (authorization 헤더 없음)  → 403 { "code": 403, "message": "Not authorized" }
GET / (authorization 헤더 있음)  → 원래 라우트 핸들러의 응답 반환
```

## 요약
- 미들웨어는 요청-응답 사이클 중간에서 요청과 응답을 가로채 처리·수정하는 함수이며, `NestMiddleware`를 구현(implement)해 만든다.
- `AppModule`이 `NestModule`을 구현하고 `configure()` 메서드 안에서 `consumer.apply(미들웨어).forRoutes(...)`로 적용 대상 라우트와 메서드를 지정한다.
- 미들웨어 안에서 조건을 만족하면 `next()`로 다음 단계로 넘기고, 그렇지 않으면 응답 객체로 직접 상태 코드와 메시지를 반환해 요청을 중단시킬 수 있다.
- 다음 영상에서는 NestJS의 예외 필터(exception filters)를 다룬다.
