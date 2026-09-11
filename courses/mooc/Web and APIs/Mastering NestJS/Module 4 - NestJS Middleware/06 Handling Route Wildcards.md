# Handling Route Wildcards

## 개요
- 라우트 와일드카드(route wildcard, `*`)의 개념을 설명하고, 이전 강의의 content type 미들웨어 예시를 확장해 하나의 컨트롤러 아래 여러 하위 라우트(child route)에 미들웨어를 한 번에 적용하는 방법을 보여주는 강의.

## 내용
### 라우트 와일드카드란
- NestJS에서 라우트 와일드카드(route wildcards)는 URL의 특정 위치에서 어떤 문자 조합이든 매치(match)되는 플레이스홀더(placeholder)이며, 보통 별표(asterisk, `*`) 기호로 표시한다.
- 이 별표는 어떤 문자 조합과도 매치되는 와일드카드 문자로 동작한다. 예를 들어 라우트 경로가 `ab*cd`라면 `abcd`, `ab_cd`, `abXcd` 등 다양한 URL과 매치될 수 있다. 즉 별표는 그 위치에 올 수 있는 모든 가능성을 나타낸다.

### 이전 content type 예시 확장
- 이전 강의에서 만든 content type 미들웨어 예시를 확장해서, `@Get` 핸들러를 몇 개 더 추가한다.
- 첫 번째로 메서드 이름을 `route1`로 바꾸고, 반환 메시지도 `"this is route 1"`으로, 라우트 경로는 `client` 아래의 `route1`로 정의한다.
- 같은 방식으로 `route2`, `route3` 라우트와 메서드, 메시지도 각각 추가한다.
- 이렇게 라우트를 여러 개 만드는 이유는, 하나의 컨트롤러 라우트(`client`) 아래에 있는 여러 자식 라우트(child route)들에 미들웨어를 어떻게 한 번에 적용하는지 보여주기 위해서다.

### `forRoutes`에 와일드카드 적용
- `forRoutes` 메서드에 `client/route1`, `client/route2`, `client/route3`처럼 각 라우트를 일일이 나열하는 대신, 와일드카드(`*`)를 사용한다.
- 이렇게 하면 `client` 라우트 경로 아래에 있는 모든 라우트에 미들웨어가 적용된다. 즉 이제 `client` 아래의 모든 하위 라우트가, 실제 처리가 진행되기 전에 적절한 content type 헤더를 검사받는다.

### Postman으로 동작 확인
- 라우트를 `client/route1`로 설정하고 이미 올바른 content type 헤더가 지정된 상태에서 요청을 보내면 메시지가 정상적으로 반환된다. `route1`에 대해 미들웨어가 잘 동작하는 것을 확인한다.
- content type 헤더 값을 `application/ecmascript`로 바꾸고 요청을 보내면 unsupported media type 상태가 반환된다.
- `route2`, `route3`에 대해서도 확인한다. content type을 다시 `application/json`으로 되돌리고 라우트를 `route2`로 바꿔서 요청하면 알맞은 메시지가 반환되고, `route3`에 대해서도 마찬가지로 알맞은 메시지가 반환된다.
- 이를 통해 와일드카드를 이용해 하나의 컨트롤러 라우트 아래 있는 여러 라우트에 미들웨어를 한 번에 적용할 수 있음을 확인했다.

## 예시
```typescript
// app.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('client/route1')
  route1() {
    return 'this is route 1';
  }

  @Get('client/route2')
  route2() {
    return 'this is route 2';
  }

  @Get('client/route3')
  route3() {
    return 'this is route 3';
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
    // client 아래의 모든 하위 라우트(route1, route2, route3 등)에 적용
    consumer.apply(ContentTypeMiddleware).forRoutes('client/*');
  }
}
```

## 요약
- 라우트 와일드카드(`*`)는 URL의 특정 위치에서 어떤 문자 조합과도 매치되는 플레이스홀더다.
- `forRoutes`에 각 라우트를 일일이 나열하지 않고 와일드카드 패턴(`client/*`)을 지정하면, 해당 경로 아래의 모든 하위 라우트에 미들웨어를 한 번에 적용할 수 있다.
- 이 방식으로 하나의 컨트롤러 라우트 아래에 있는 여러 자식 라우트에 공통 검증 로직(예: content type 검사)을 손쉽게 재사용할 수 있다.
