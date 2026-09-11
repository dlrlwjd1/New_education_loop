# Implementing Global Pipes

## 개요
- 파라미터 레벨과 컨트롤러 레벨에 이어, 애플리케이션 전체에 파이프를 적용하는 **글로벌 파이프(global pipes)**를 `main.ts`의 `useGlobalPipes()` 메서드로 설정하는 방법을 실습하며 이번 섹션(Module 3)을 마무리하는 강의.

## 내용
### 글로벌 파이프란
- 지금까지는 컨트롤러 레벨(controller level)과 파라미터 레벨(parameter level)에서 파이프를 적용하는 여러 방법을 살펴봤다. 이보다 더 나은 대안이 되는 또 다른 방법이 있는데, 바로 **글로벌 레벨(global level)**에서 파이프를 적용하는 것이다.
- 글로벌 파이프는 각 라우트나 파라미터에 개별적으로 파이프를 적용하는 대신, 애플리케이션 전체에 걸쳐 들어오는 데이터를 감시(watch)한다.
- 글로벌 파이프는 검증(validation), 살균/정제(sanitization), 변환(transformation) 같은 공통 작업을 중앙집중적(centralized)으로 처리하는 방법을 제공한다.

### useGlobalPipes()로 적용하기
- 현재 예제에서는 `ValidationPipe`와 커스텀 파이프인 `PhonePipe`가 함께 적용되어 있다. 이제 커스텀 파이프는 POST 라우트 핸들러에만 남겨두고, `ValidationPipe`는 애플리케이션 전체에 적용하고 싶다고 가정한다.
- 이를 위해 Nest 애플리케이션의 진입점(entry point)인 `main.ts` 파일에서 `app.useGlobalPipes()` 메서드를 사용한다.
- `useGlobalPipes`는 NestJS가 제공하는 내장 메서드(built-in method)로, 모든 들어오는 요청과 데이터에 적용될 글로벌 파이프를 설정하는 역할을 한다.
- 이 메서드는 인자를 하나 받는데, 내장 파이프든 `ValidationPipe`든 커스텀 파이프든 어떤 파이프든 전달할 수 있다. 여기서는 `ValidationPipe`의 인스턴스를 인자로 전달한다.
- 이렇게 하면 애플리케이션 전체에 적용되는 파이프, 즉 글로벌 파이프를 설정한 것이 된다.
- 이제 컨트롤러에서는 POST 라우트 핸들러에 있던 `ValidationPipe`를 제거할 수 있다(커스텀 파이프는 그대로 유지한다).

### 동작 확인
- Postman에 이미 정의된 요청 본문으로 요청하면 password와 country에 대한 검증 메시지가 표시된다. 이는 글로벌 레벨에 적용한 `ValidationPipe`가 정상적으로 동작하고 있음을 보여준다.
- password와 country 값을 올바르게 갱신하고 다시 요청하면 데이터가 정상적으로 반환된다.

## 예시
```typescript
// main.ts
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
```

```typescript
// auth/auth.controller.ts
// ValidationPipe는 제거하고, 라우트 전용 커스텀 파이프만 남긴다.
@Post('register')
@UsePipes(new PhonePipe())
registerUser(@Body() userData: AuthDto) {
  return userData;
}
```

## 요약
- 파이프는 파라미터 레벨, 라우트/컨트롤러 레벨뿐 아니라 애플리케이션 전체에 적용하는 글로벌 레벨(global level)에서도 설정할 수 있다.
- 글로벌 파이프는 `main.ts`에서 `app.useGlobalPipes()`에 파이프 인스턴스를 전달해 설정하며, 애플리케이션 전체의 요청 데이터를 중앙집중적으로 검증·변환한다.
- `ValidationPipe`처럼 애플리케이션 전반에 적용해야 하는 파이프는 글로벌 레벨에 두고, 특정 라우트에서만 필요한 커스텀 파이프는 해당 라우트에만 남겨두는 방식으로 조합할 수 있다.
- 이것으로 Working with Pipes 섹션의 내장 파이프, 검증 데코레이터, 커스텀 파이프, ArgumentMetadata, 글로벌 파이프까지 학습을 마무리한다.
