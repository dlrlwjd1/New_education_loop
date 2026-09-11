# Controller-Driven Route Middleware

## 개요
- 문자열 경로(path) 대신 컨트롤러(controller) 클래스 자체를 `forRoutes`에 전달해서, 해당 컨트롤러 안의 모든 라우트에 미들웨어(middleware)를 적용하는 컨트롤러 기반(controller-driven) 접근 방식을 소개하는 강의.

## 내용
### 컨트롤러 클래스를 `forRoutes`에 직접 전달
- `forRoutes` 메서드는 미들웨어를 적용할 라우트를 지정할 수 있게 해주는데, 컨트롤러 안의 모든 라우트에 적용하고 싶은 것처럼 더 세밀한(granular) 제어가 필요한 경우에는 컨트롤러 기반 접근 방식을 사용할 수 있다.
- `forRoutes` 메서드 안에 경로 문자열 대신 `AppController` 클래스를 직접 전달한다.
- 이렇게 하면 하나의 컨트롤러 안에 정의된 특정 라우트 집합(a specific set of routes)에 미들웨어를 대상으로 지정할 수 있다. 이것이 컨트롤러 기반 라우트(controller-driven route)를 정의하는 방법이다.
- 이 방식은 구체적인 라우트 경로가 무엇인지 일일이 알아낼 필요 없이 컨트롤러 클래스만 지정하면 되므로 더 유연하다(more flexibility).

### Postman으로 동작 확인
- 이미 설정해둔 경로와 content type으로 요청을 보내면, 이전 강의에서 제외(exclude) 처리했던 `route2`이기 때문에 content type이 그대로 반환된다.
- 경로를 `route3`로 바꿔서 요청하면 unsupported media type 메시지가 반환된다. 즉 `route3`는 여전히 컨트롤러 기반 미들웨어의 적용 대상이다.

### 두 접근 방식 중 선택 기준
- 라우트 조직(route organization) 방식과 미들웨어 적용에 필요한 제어 수준에 따라 적합한 접근 방식을 선택하면 된다.
- 특정 경로 아래 있는 모든 라우트에 미들웨어를 적용하고 싶고, 라우트들이 컨트롤러 단위로 잘 정리되어 있지 않은 경우에는 문자열 기반 패턴(string based pattern, 예: `client/*`)을 사용하는 것이 편리하다.
- 반대로 라우트가 컨트롤러 안에 잘 정리(well organized)되어 있고 미들웨어 적용에 대해 더 정밀한(precise) 제어가 필요하다면, 컨트롤러 기반 라우트(controller-driven route) 접근 방식을 사용할 수 있다. 이 방식은 미들웨어 적용에 대해 더 세밀한 제어를 제공한다.

## 예시
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
    // 경로 문자열 대신 컨트롤러 클래스를 직접 전달
    consumer.apply(ContentTypeMiddleware).forRoutes(AppController);
  }
}
```

## 요약
- `forRoutes`에 경로 문자열 대신 컨트롤러 클래스를 전달하면, 해당 컨트롤러에 정의된 모든 라우트에 미들웨어를 적용하는 컨트롤러 기반(controller-driven) 방식이 된다.
- 이 방식은 라우트 경로를 일일이 지정할 필요가 없어 더 유연하다.
- 라우트가 컨트롤러 단위로 잘 정리되어 있지 않다면 문자열 기반 패턴(예: 와일드카드)을, 라우트가 컨트롤러 안에 잘 정리되어 있고 세밀한 제어가 필요하다면 컨트롤러 기반 접근 방식을 선택하는 것이 좋다.
