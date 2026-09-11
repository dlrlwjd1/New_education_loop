# Route-Specific Middleware

## 개요
- 토큰(token) 기반 인증(authentication) 예시를 통해 미들웨어(middleware)를 특정 라우트(route)에만 선택적으로 적용하는 방법과, `forRoutes` 메서드로 적용 범위를 좁히는 방법을 실습하는 강의.

## 내용
### 토큰 미들웨어 기본 구조
- 미들웨어를 전역으로 적용하면 기본적으로 모든 라우트에 적용되지만, 특정 라우트에만 적용하고 싶은 경우가 있다. 이를 확인하기 위해 `token middleware`를 만든다.
- `use` 메서드 위에 `private readonly` 배열 `validTokens`를 `string[]` 타입으로 선언하고, `'token1'`, `'token2'`, `'token3'` 같은 값들을 담아둔다.

### 요청 헤더에서 토큰 추출
- `use` 메서드 안에서 `token` 상수를 만든다. 토큰 기반 인증(token based authentication)에서 토큰은 보통 요청 헤더(headers), 그중에서도 `authorization` 헤더에 담겨 전달되므로 `request.headers.authorization` 값을 `token`에 대입한다.

### 토큰 유효성 검증 — `isValidToken` 메서드
- `private` 메서드 `isValidToken(token: string): boolean`을 만들어, 인자로 받은 `token` 값이 `validTokens` 배열에 포함(includes)되어 있는지 확인하고 그 결과를 반환한다.

### `use` 메서드에서의 검증 로직
- 요청 헤더에 토큰이 없거나 `isValidToken`을 통과하지 못하면(`if` 조건), 응답으로 `401 Unauthorized` 상태 코드와 함께 `{ message: 'unauthorized' }` 형태의 JSON payload를 반환한다.
- 토큰이 유효하면, 요청 객체(request object)에 대괄호 표기법(square bracket notation)으로 `token`이라는 프로퍼티를 붙여(`request['token'] = token`) 이후 요청 처리 과정에서 토큰 값을 사용할 수 있게 한다.
- 마지막에는 항상 `next()`를 호출해 흐름이 끊기지 않도록 한다.

### 미들웨어를 모든 라우트에 등록
- 모듈 파일의 `configure` 메서드에서 `consumer.apply(TokenMiddleware).forRoutes('*')`처럼 와일드카드 라우트를 지정해 컨트롤러의 모든 라우트에 우선 적용해본다.
- 컨트롤러에 `@Get()` 핸들러 `getToken(request)` 메서드를 만들어, 요청 객체에서 미들웨어가 붙여둔 토큰 값을 꺼내 `token` 상수에 담고 `"access authorized"` 메시지와 함께 반환한다.
- Postman에서 헤더의 `authorization` 값에 배열에 정의된 토큰 값을 넣고 요청하면, 정적 메시지와 토큰 값이 함께 반환되는 것을 확인한다. 이 시점에는 미들웨어가 컨트롤러의 모든 라우트에 적용되어 있다.

### 특정 라우트로 범위를 좁히기
- 같은 코드를 복사해 새로운 라우트 `get-token`을 만들고, 메서드 이름을 `checkToken`으로 바꾼다.
- 모듈 파일에서 `forRoutes`에 지정한 라우트를 와일드카드 대신 `'/get-token'`처럼 특정 라우트 하나로 변경한다.
- 이제 기존 라우트로 다시 요청을 보내면, 헤더에 넣은 토큰 값 자체는 유효하기 때문에 authorized 메시지는 나오지만, 미들웨어가 그 라우트에는 더 이상 적용되지 않으므로 토큰 값은 반환되지 않는다.
- 반면 라우트를 `get-token`으로 바꾸고 토큰 값을 `token3`로 설정해 요청하면, 토큰 값과 authorized 메시지가 모두 정상적으로 반환된다.
- 토큰 값을 잘못된 값으로 바꿔서 요청하면 unauthorized 메시지가 반환된다.
- 이를 통해 `forRoutes` 메서드에 특정 라우트를 지정하면 해당 라우트에만 적용되는 라우트 특정(route-specific) 미들웨어를 정의할 수 있음을 확인했다. `forRoutes` 메서드의 더 다양한 활용법은 다음 강의들에서 다룬다.

## 예시
```typescript
// middleware/token.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
  private readonly validTokens: string[] = ['token1', 'token2', 'token3'];

  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if (!token || !this.isValidToken(token)) {
      return res.status(401).json({ message: 'unauthorized' });
    }

    req['token'] = token;
    next();
  }

  private isValidToken(token: string): boolean {
    return this.validTokens.includes(token);
  }
}
```

```typescript
// app.module.ts
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { TokenMiddleware } from './middleware/token.middleware';

@Module({
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // 특정 라우트에만 적용 (와일드카드 대신 실제 경로 지정)
    consumer.apply(TokenMiddleware).forRoutes('/get-token');
  }
}
```

```typescript
// app.controller.ts
import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class AppController {
  @Get('get-token')
  checkToken(@Req() req: Request) {
    const token = req['token'];
    return { message: 'access authorized', token };
  }
}
```

## 요약
- 미들웨어를 기본으로 등록하면 전역(모든 라우트)에 적용되지만, `forRoutes`에 특정 라우트 문자열을 지정하면 해당 라우트에만 적용되는 라우트 특정(route-specific) 미들웨어가 된다.
- 토큰 미들웨어 예시에서는 `request.headers.authorization`으로 토큰을 꺼내고, 배열에 포함된 값인지 검사해 유효하지 않으면 `401 Unauthorized`를 반환한다.
- 유효한 토큰은 `request['token']`처럼 요청 객체에 프로퍼티로 붙여 이후 핸들러에서 사용할 수 있다.
- 미들웨어가 적용되지 않은 라우트에서는 컨트롤러 로직 자체는 실행되어도 미들웨어가 붙인 값(`request['token']`)은 존재하지 않는다.
- `forRoutes`의 다양한 활용 방식(여러 라우트 지정, 와일드카드 패턴 등)은 다음 강의들에서 더 자세히 다룬다.
