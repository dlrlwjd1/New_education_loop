# Excluding Routes

## 개요
- `exclude` 메서드를 이용해 특정 라우트(route)들을 미들웨어(middleware) 적용 대상에서 제외하는 방법과, 이때 반드시 전체 경로(full path)를 지정해야 하는 이유를 실습하는 강의.

## 내용
### `exclude` 메서드 소개
- 특정 라우트에 미들웨어가 적용되지 않도록 제외하고 싶을 때는 `exclude` 메서드를 사용하면 된다.
- 이전 강의에서는 `forRoutes`에 `{ path: 'client/*', method: RequestMethod.GET }`처럼 지정해서 모든 GET 라우트만 대상으로 삼고 나머지(POST)는 자연스럽게 제외되도록 했었다.
- 이번에는 `exclude` 메서드를 이용해서 POST 라우트를 명시적으로 제외해본다. `exclude`도 `forRoutes`와 같은 문법을 따르며, `path` 프로퍼티와 `method` 프로퍼티를 갖는 객체를 전달한다.

### `exclude`로 POST 라우트 제외 시도
- `path`를 `route4`로, `method`를 `RequestMethod.POST`로 지정해 `exclude({ path: 'route4', method: RequestMethod.POST })` 형태로 작성한다.
- 그리고 `forRoutes` 메서드는 별도 속성 없이 단순 경로만 지정하도록 업데이트한다.
- Postman에서 메서드를 POST로, 경로를 `/route4`로 설정하고 content type을 `application/json`으로 요청하면 content type이 정상적으로 반환된다.
- 하지만 content type을 `application/javascript`로 바꿔서 요청하면, `route4`를 제외했음에도 불구하고 unsupported media type 메시지가 반환되는 문제가 발생한다. 즉 제외가 제대로 동작하지 않는다.

### 문제 원인 — 상대 경로가 아닌 전체 경로(full path) 필요
- 하위 라우트(sub route 혹은 child route)가 있는 경우, `exclude` 메서드에는 상대 경로(relative path) 대신 전체 경로(absolute/full path)를 지정해야 한다.
- `@Get()`, `@Post()` 같은 데코레이터로 라우트를 정의하면, NestJS는 내부적으로 애플리케이션 루트(root) 기준의 전체 경로로 라우트를 등록한다. 즉 `client route1`, `client/route2` 같은 식으로 내부에 등록되는 것이다.
- 따라서 `exclude` 메서드에 라우트를 지정할 때도, NestJS가 내부적으로 등록한 것과 일치하는 전체 경로를 제공해야 한다.
- 그래서 `path`를 `client/route4`처럼 전체 경로로 수정한다.

### 수정 후 동작 확인
- 전체 경로로 수정한 뒤 Postman에서 다시 요청하면 알맞은 결과가 나오며, POST 라우트(`route4`)가 미들웨어에서 정상적으로 제외되는 것을 확인한다.
- 메서드를 GET으로, 경로를 `route2`로 바꿔서 요청하면 unsupported media type 메시지가 반환된다(아직 GET route2는 제외 목록에 없기 때문).

### GET 라우트도 추가로 제외하기
- GET 라우트인 `route2`도 제외하고 싶다면 같은 문법을 따라 `{ path: 'client/route2', method: RequestMethod.GET }` 객체를 `exclude`에 추가한다.
- 이렇게 설정한 뒤 같은 요청을 다시 보내면, 에러 없이 content type이 정상적으로 반환된다. 즉 `route2`도 미들웨어 적용 대상에서 제외된 것을 확인할 수 있다.

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
    consumer
      .apply(ContentTypeMiddleware)
      .exclude(
        // exclude에는 NestJS가 내부적으로 등록하는 전체(full) 경로를 지정해야 한다
        { path: 'client/route4', method: RequestMethod.POST },
        { path: 'client/route2', method: RequestMethod.GET },
      )
      .forRoutes('client/*');
  }
}
```

## 요약
- `exclude` 메서드는 `forRoutes`와 같은 `{ path, method }` 문법을 사용해 특정 라우트를 미들웨어 적용 대상에서 제외한다.
- 라우트가 컨트롤러 아래의 하위 경로(sub route)일 경우, `exclude`에는 상대 경로가 아니라 NestJS가 내부적으로 등록하는 전체 경로(예: `client/route4`)를 지정해야 정상적으로 동작한다.
- 전체 경로를 잘못 지정하면(상대 경로만 지정하면) 제외가 무시되고 미들웨어가 계속 적용된다.
- `exclude`는 여러 개의 라우트/메서드 조합을 동시에 받아 한 번에 여러 라우트를 제외할 수 있다.
