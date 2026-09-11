# Using Providers

## 개요
- NestJS의 **프로바이더(providers)** 개념과 `@Injectable()` 데코레이터의 역할을 설명하고, 프로바이더를 모듈의 `providers` 배열에서 제거했을 때 발생하는 의존성 오류를 통해 **의존성 주입(dependency injection)**의 원리를 이해하는 강의.

## 내용
### 프로바이더란 무엇인가
- **프로바이더(providers)**는 서비스(services), 리포지토리(repositories), 팩토리(factories), 헬퍼(helpers) 등 다양한 주입 가능한(injectable) 객체를 아우르는 기본 개념(fundamental concept)이다.
- 프로바이더는 NestJS의 **의존성 주입(dependency injection) 시스템**의 필수적인 부분이며, 컨트롤러나 다른 서비스 같은 애플리케이션 컴포넌트에 다양한 의존성을 관리하고 주입할 수 있게 해준다.

### 서비스 파일 다시 살펴보기 — @Injectable()
- 이전 영상에서 `nest generate service`로 만든 `sum-service` 폴더와 그 안의 파일들, 그리고 자동으로 업데이트된 `app.module`을 다시 살펴본다.
- 서비스 파일의 구조를 보면 단순한 클래스(class)에 메서드가 정의되어 있을 뿐이지만, 클래스 위에 **`@Injectable()`** 데코레이터가 붙어 있다.
- `@Injectable()`은 이 서비스가 의존성 주입의 대상이 될 수 있음을 나타내는 데코레이터다. 코드에서 `@Injectable()`이 붙은 것을 보면, 그 뒤에 반환되는 것이 **프로바이더**라는 것을 알 수 있다.
- 즉, 서비스(service)는 프로바이더의 흔한 예시(common example) 중 하나다.

### 의존성 주입(dependency injection) 비유
- 피자를 먹고 싶을 때 두 가지 선택지가 있다 — 직접 요리하거나, 밖에서 주문하는 것.
- 프로바이더는 바로 이 "피자를 가져다주는" 역할을 한다. 즉, 필요한 의존성(dependency)을 제공(provide)해주는 존재다.
- 서비스를 만들고 이를 프로바이더로서 컨트롤러에 주입(inject)할 수 있다.

### 모듈의 providers 배열
- `app.module`을 보면 `providers` 배열 안에 `AppController`에서 사용하는 두 개의 프로바이더가 등록되어 있다.
- 이 중 하나(`sumService`)를 `providers` 배열에서 제거하면 에러가 발생한다.
- 에러 메시지는 "Nest cannot resolve dependencies of app.controller. Please make sure that the argument sumService service at index one is available in the app modules context."라는 내용이다.
- 즉, 컨트롤러에서 사용하는 프로바이더는 반드시 해당 컨트롤러가 속한 **모듈(module)**의 일부여야 한다는 것을 알려준다.
- `sumService`는 여전히 유효한 프로바이더이고 서비스로서 import도 되어 있지만, `providers` 배열에 등록되어 있지 않으면 Nest가 의존성을 해결(resolve)하지 못한다.
- 왜 모듈에 등록되어야 하는지는 다음 영상에서 모듈(modules)과 스코프(scope) 개념을 다루면서 설명할 예정이다.

## 예시
```typescript
// sum-service/sum-service.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class SumServiceService {
  getSum(a: number, b: number): number {
    return a + b;
  }
}
```

```typescript
// app.module.ts
@Module({
  controllers: [AppController],
  providers: [AppService, SumServiceService], // 이 배열에서 SumServiceService를 제거하면 에러 발생
})
export class AppModule {}
```

```
// providers 배열에서 SumServiceService를 제거했을 때 발생하는 에러
Nest cannot resolve dependencies of the AppController
(?, SumServiceService). Please make sure that the argument
SumServiceService at index [1] is available in the AppModule context.
```

## 요약
- 프로바이더는 서비스, 리포지토리, 팩토리, 헬퍼 등 주입 가능한 객체를 통칭하며, NestJS 의존성 주입 시스템의 핵심이다.
- `@Injectable()` 데코레이터가 붙은 클래스는 프로바이더로 취급되며, 서비스는 프로바이더의 대표적인 예다.
- 컨트롤러가 사용하는 프로바이더는 반드시 해당 컨트롤러가 속한 모듈의 `providers` 배열에 등록되어 있어야 하며, 그렇지 않으면 의존성을 해결할 수 없다는 에러가 발생한다.
- 다음 영상에서는 모듈(modules)과 서비스 스코프(service scopes)에 대해 다룬다.
