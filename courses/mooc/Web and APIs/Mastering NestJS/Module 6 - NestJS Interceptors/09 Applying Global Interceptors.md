# Applying Global Interceptors

## 개요
- 파이프(pipe)나 가드(guard)와 마찬가지로 인터셉터(interceptor)도 컨트롤러 스코프(controller scoped), 메서드 스코프(method scoped), 전역 스코프(global scoped)로 적용할 수 있으며, 전역(global)으로 인터셉터를 등록하는 두 가지 방법을 다루는 강의.

## 내용
### 전역 인터셉터란
- 인터셉터를 전역으로 적용하면 애플리케이션 안의 모든 라우트 핸들러(every single route handler)에 해당 인터셉터가 적용된다.
- 전역 인터셉터를 적용하는 방법은 두 가지가 있다.

### 방법 1 — app.module.ts의 providers 배열에 설정하기
- `app.module.ts` 파일을 열어 `providers` 배열 안에 중괄호로 된 provider 객체(providers object)를 추가한다.
- 이 객체의 `provide` 속성에는 NestJS가 미리 정의해둔 토큰(token) 값을 지정하는데, 전역으로 인터셉터를 등록하고 싶으므로 `APP_INTERCEPTOR` 토큰을 사용한다.
- 토큰과 함께 `useClass` 속성으로 실제 적용할 인터셉터 클래스(여기서는 `AuthInterceptor`)를 지정한다.
- `APP_INTERCEPTOR`는 NestJS가 전역 인터셉터로 인식하는 특별한 토큰(special token)이다.
- Postman에서 authorization 헤더 없이 요청을 보내면 missing authorization token 메시지를 받는데, 이는 `AuthInterceptor`가 전역으로 잘 설정되었다는 것을 보여준다.

### 방법 2 — main.ts에서 useGlobalInterceptors 사용하기
- 두 번째 방법은 Nest 애플리케이션의 진입점(entry point)인 `main.ts` 파일에서 인터셉터를 등록하는 것이다.
- 인터셉터를 전역으로 등록하려면 `useGlobalInterceptors`라는 메서드를 사용한다.
- `app.useGlobalInterceptors(...)`의 괄호 안에 `new` 키워드로 인터셉터 클래스를 인스턴스화(instantiate)해서 전달한다. 여기서는 `UserDataTransformInterceptor`를 전달한다.
- 이렇게 하면 해당 인터셉터가 전역으로 등록(register)된다.
- 확인을 위해 요청 본문(request body)에서 `email` 값을 제거하고 POST 요청을 보내면, 필드 값이 없다는 `BadRequestException`(field value missing) 메시지를 받는다.

## 예시
```typescript
// app.module.ts (방법 1 — providers 배열에 등록)
import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: AuthInterceptor,
    },
  ],
})
export class AppModule {}
```

```typescript
// main.ts (방법 2 — useGlobalInterceptors 사용)
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserDataTransformInterceptor } from './interceptors/user-data-transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new UserDataTransformInterceptor());
  await app.listen(3000);
}
bootstrap();
```

## 요약
- 인터셉터는 파이프, 가드와 마찬가지로 컨트롤러, 메서드, 전역 세 가지 스코프로 적용할 수 있다.
- 전역 인터셉터를 등록하는 첫 번째 방법은 `app.module.ts`의 `providers` 배열에 `provide: APP_INTERCEPTOR`, `useClass: 인터셉터클래스` 형태의 provider 객체를 추가하는 것이다.
- 두 번째 방법은 `main.ts`에서 `app.useGlobalInterceptors(new 인터셉터클래스())`를 호출하는 것이다.
- `APP_INTERCEPTOR`는 NestJS가 전역 인터셉터 등록을 위해 인식하는 특별한 토큰이다.
- 전역으로 등록된 인터셉터는 애플리케이션의 모든 라우트 핸들러에 자동으로 적용된다.
