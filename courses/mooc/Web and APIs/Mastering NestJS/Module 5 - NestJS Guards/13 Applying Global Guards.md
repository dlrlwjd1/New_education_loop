# Applying Global Guards

## 개요
- 애플리케이션의 모든 라우트 핸들러에 가드가 실행되도록 하는 전역 가드(global guards) 적용 방법 두 가지 — 모듈(module) 설정을 이용하는 방법과 `main.ts`에서 `useGlobalGuards()`를 사용하는 방법 — 을 비교하며 실습하는 강의.

## 내용
### 전역 가드란
- 가드를 전역(globally)으로 적용하면 애플리케이션의 모든 라우트 핸들러(every route handler)에 대해 해당 가드가 실행되도록 보장한다.
- 가드를 전역으로 적용하는 방법은 크게 두 가지다.

### 방법 1 — 모듈(app module) 설정으로 전역 가드 적용
- `app.module.ts` 파일을 열어 `providers` 배열 안에 중괄호(curly braces)로 된 프로바이더 객체(provider object)를 추가한다.
- 이 프로바이더 객체는 NestJS에서 좀 더 고급 설정(advanced configuration settings)을 정의할 때 사용하며, `provide` 프로퍼티를 가진다. 이 프로퍼티는 토큰(token) 값을 받는다.
- 가드를 다룰 때 사용할 수 있는 미리 정의된 토큰 값 중 하나가 `APP_GUARD`다. 이는 NestJS가 전역 가드로 인식하는 특수한 토큰(special token)이다.
- 이렇게 하면 NestJS에게 모듈 레벨, 즉 전역(global) 레벨에서 가드를 적용하고 싶다는 것을 알려주는 셈이다.
- 어떤 가드 클래스를 사용할지 지정하려면 `useClass` 프로퍼티를 사용한다. 이 프로퍼티는 토큰과 함께 적용하고 싶은 가드 클래스를 지정한다. 여기서는 `AuthGuard`를 지정한다.
- NestJS는 이 프로바이더 객체를 만나면, `APP_GUARD` 토큰에 대해 `AuthGuard` 클래스의 인스턴스를 사용해야 한다는 것을 이해한다. 즉 `AuthGuard`가 전역 가드로 적용된다.

### 동작 확인
- Postman에서 API 키 헤더 값을 `user B 104`(유효하지 않은 API 키)로 설정하면 invalid API key 메시지를 받는다.
- 올바른 API 키(`user B 102`)를 주면 사용자 데이터를 받는다. 즉 `AuthGuard`가 전역에서 정상적으로 작동하고 있음을 확인한다.

### 모듈 설정 방식으로 여러 가드를 전역 적용하기
- 여러 가드를 전역으로 적용하고 싶을 때는, 같은 `useClass` 프로퍼티 하나에 여러 값을 줄 수 없다(이 프로퍼티는 단일 값만 받는다). 대신 위와 같은 형식의 프로바이더 객체를 하나 더 정의해야 한다.

### 방법 2 — main.ts에서 useGlobalGuards() 사용
- 두 번째 방법은 NestJS 애플리케이션의 진입점(entry point)인 `main.ts` 파일에서 가드를 적용하는 것이다.
- `app.useGlobalGuards()` 메서드를 사용해 전역 레벨에서 가드를 등록한다.
- `RoleGuard`는 클래스(class)이므로 `new RoleGuard()`처럼 `new` 키워드로 인스턴스화(instantiate)해야 한다.
- 이때 `RoleGuard`에는 `Reflector` 클래스가 주입(inject)되어 있으므로, 인자를 하나 기대한다는 에러가 표시된다. 그래서 `Reflector` 참조(reference)도 함께 전달해야 한다.
- `Reflector` 인스턴스를 직접 넘길 수도 있지만, 더 안전한(safer) 방법은 `const reflector = app.get(Reflector)` 형태로 상수를 만들고, 이 상수를 `RoleGuard` 생성자의 인자로 전달하는 것이다. 이렇게 하면 에러가 사라진다.
- 이제 `RoleGuard`가 전역으로 등록되었다.
- 같은 방식으로 `AuthGuard`도 등록한다. `AuthGuard`에는 `UserService` 인스턴스가 인자로 필요하다(`UserService`가 주입되어 있으므로). `const userService = app.get(UserService)`로 상수를 만들고 이를 `AuthGuard` 생성자의 인자로 전달한다.
- 이렇게 해서 두 가드(`RoleGuard`, `AuthGuard`) 모두 성공적으로 전역에 등록되었다.

### 두 방식의 비교와 권장 방식
- `main.ts`의 `app.useGlobalGuards()` 메서드를 사용해서도 가드를 전역으로 등록할 수 있지만, 여전히 더 선호되는(preferred) 방식은 모듈 설정(module configuration) 안에서 `APP_GUARD` 토큰을 사용하는 것이다.
- 이 방식은 NestJS의 의존성 주입(dependency injection) 시스템과 더 잘 통합되며, 더 유지보수하기 쉽고(maintainable) 테스트하기 쉬운(testable) 코드를 가능하게 한다.

## 예시
```typescript
// app.module.ts — 방법 1: APP_GUARD 토큰으로 전역 가드 등록
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

@Module({
  providers: [
    // ...기존 providers
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    // 여러 가드를 전역 적용하려면 프로바이더 객체를 추가로 정의한다
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class AppModule {}
```

```typescript
// main.ts — 방법 2: useGlobalGuards()로 전역 가드 등록
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { RoleGuard } from './guards/role.guard';
import { AuthGuard } from './guards/auth.guard';
import { UserService } from './services/user.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const reflector = app.get(Reflector);
  app.useGlobalGuards(new RoleGuard(reflector));

  const userService = app.get(UserService);
  app.useGlobalGuards(new AuthGuard(userService));

  await app.listen(3000);
}
bootstrap();
```

## 요약
- 전역 가드는 애플리케이션의 모든 라우트 핸들러에 대해 실행되며, 적용 방법은 두 가지다.
- 방법 1은 모듈의 `providers` 배열에 `{ provide: APP_GUARD, useClass: 가드클래스 }` 형태의 프로바이더 객체를 추가하는 것이며, 여러 가드를 적용하려면 프로바이더 객체를 각각 추가한다.
- 방법 2는 `main.ts`에서 `app.useGlobalGuards(new 가드클래스(...의존성))`을 호출하는 것이며, 가드가 의존성을 주입받는 경우 `app.get(의존성클래스)`로 얻은 인스턴스를 생성자 인자로 전달해야 한다.
- 두 방식 모두 가능하지만, NestJS의 의존성 주입 시스템과의 통합, 유지보수성, 테스트 용이성 측면에서 `APP_GUARD` 토큰을 사용하는 모듈 설정 방식이 더 선호되는 방법이다.
