# Assignment - Password Encryption Middleware

## 개요
- 사용자가 입력한 비밀번호(password) 값을 미들웨어(middleware)에서 `bcrypt`로 해시(hash)해 마스킹(mask)하는 실습형 과제. DTO(Data Transfer Object) 검증(validation), 서비스(service), 미들웨어, 전역 파이프(global pipe)를 모두 함께 구성한다.

## 내용
### `UserDto` 정의
- `user-dto`라는 폴더를 만들고 그 안에 `user.dto.ts` 파일을 만들어 `UserDto` 클래스를 정의한다.
- `name`: `readonly string` 프로퍼티. `@IsString()`, `@IsNotEmpty()`(메시지: `username required`), `@MaxLength(20)`(메시지: `username cannot be longer than 20 characters`) 검증기(validator)를 적용한다.
- `password`: `readonly string` 프로퍼티. `@IsAlphanumeric()`(문자와 숫자를 허용), `@IsNotEmpty()`(메시지: `password required`), `@MaxLength(8)`(메시지: `password must be at least 8 characters long`) 검증기를 적용한다.
- `createdAt`: 새 사용자가 추가된 시각(timestamp)을 저장하는 선택적(optional) `string` 필드로 추가한다.

### `UserService` 생성
- `nest generate service services/user-service --no-spec` 명령으로 서비스 파일을 생성한다.
- `private users: UserDto[] = []` 형태로 사용자 이름, 비밀번호, 타임스탬프를 저장할 배열을 만든다.
- `createUser(user: UserDto): void` 메서드에서 `this.users.push(user)`로 배열에 값을 추가한다.
- `getAllUsers(): UserDto[]` 메서드에서 `this.users`를 반환한다. 이 메서드는 GET 라우트 핸들러에서 사용된다.

### 컨트롤러 구성
- `AppController`에서 생성자(constructor)를 통해 `UserService`를 주입(inject)한다.
- `@Post()` 라우트 핸들러 `createUser` 메서드는 요청 본문(body)을 그대로 반환하지 않고, `"user created successfully"` 메시지만 반환한다.
- `@Get()` 라우트 핸들러 `getAllUsers` 메서드는 반환 타입을 `UserDto[]`로 지정하고, `this.userService.getAllUsers()`를 호출해 저장된 전체 사용자 목록을 반환한다.

### 미들웨어 생성과 `UserService` 주입
- `nest generate middleware middleware/user-logging-middleware --no-spec` 명령으로 미들웨어를 생성한다.
- `request`, `response` 타입을 지정하고, 생성자를 통해 `UserService`를 미들웨어에도 주입한다.

### `use` 메서드 안에서의 처리 로직
- `request.body`와 `request.body.name`이 존재하면, `name` 값을 대문자(upper case)로 변환한다.
- `request.body.name`과 `request.body.password`가 모두 존재하면, 비밀번호 값을 해시(hash) 처리한다.
- 비밀번호 암호화를 위해 `bcrypt` 패키지를 `npm i bcrypt` 명령으로 설치한다.
- `hashedPassword` 상수를 만들고 `bcrypt.hash(request.body.password, 10)`(솔트 값 10)를 대입한다.
- 새로운 `UserDto` 객체를 만들어 `name`에는 변환된 이름 값을, `password`에는 `hashedPassword` 값을 대입한다.

### `Promise<string>` 타입 에러와 `async`/`await` 처리
- 이 시점에서 `Type 'Promise<string>' is not assignable to type 'string'`이라는 에러가 발생한다.
- 원인은 `UserDto` 클래스의 `password` 프로퍼티가 동기적(synchronous)인 `string` 값을 기대하는데, `bcrypt.hash` 함수는 비동기적으로 동작하여 `string`으로 resolve되는 `Promise`를 반환하기 때문이다.
- `bcrypt`의 해시 연산은 기본적으로 비동기(asynchronous)이므로, 이를 올바르게 처리하려면 `async`/`await`를 사용해야 한다.
- `use` 메서드에 `async` 키워드를 붙여 비동기 메서드로 만들고, `bcrypt.hash` 호출 앞에 `await`를 붙인다. 이렇게 하면 해시 값이 resolve될 때까지 기다린 뒤 다음 로직이 진행되며, 에러도 사라진다.

### 타임스탬프 추가와 사용자 저장
- 새 `UserDto` 객체의 `createdAt` 필드에는 `new Date().toISOString()` 값을 대입해 생성 시각을 기록한다.
- 마지막으로 `this.userService.createUser(createUserDto)`를 호출해서, `createUser` 메서드의 `user` 파라미터로 넘긴 DTO 전체가 사용자 배열에 push된다.

### 모듈에 미들웨어 등록
- `AppModule`이 `NestModule` 인터페이스를 구현하도록 하고, `configure` 메서드 안에서 `consumer.apply(UserLoggingMiddleware).forRoutes('*')`처럼 와일드카드 라우트로 미들웨어를 등록한다.

### 전역 `ValidationPipe` 적용
- `UserDto`에 지정한 class-validator 검증기들이 실제로 동작하도록, `main.ts` 파일에서 `app.useGlobalPipes(new ValidationPipe())`로 검증 파이프를 전역으로 적용한다.
- 이때 `transform: true` 옵션도 함께 준다. 이 옵션은 들어오는 요청 페이로드(payload)를 검증하기 전에 자동으로 DTO 인스턴스로 변환(transform)해주는 일종의 안전장치(fail-safe) 역할을 한다.

### Postman으로 동작 확인
- 메서드를 POST로, 경로를 `localhost:3000`으로 설정하고 요청 본문에 소문자로 된 이름 값과 비밀번호 값을 넣어 요청하면 `"user created successfully"` 메시지가 반환된다.
- GET 라우트로 요청하면, 사용자 이름은 대문자로 변환되어 있고 비밀번호는 해시된 문자열로, 그리고 타임스탬프 값도 함께 배열에 담겨 반환된다.
- 사용자 이름을 바꾸고 유효하지 않은(invalid) 비밀번호 값으로 다시 요청하면 검증 메시지(validation message)가 반환된다.
- 유효한 비밀번호 값으로 다시 요청하면 데이터가 정상적으로 추가된다.
- GET 요청으로 다시 확인하면 배열이 업데이트되어 있는 것을 확인한다.
- 이렇게 해서 미들웨어를 이용해 비밀번호 암호화(password encryption)를 수행하는 과제를 완료한다.

## 예시
```typescript
// user-dto/user.dto.ts
import { IsString, IsNotEmpty, MaxLength, IsAlphanumeric, IsOptional } from 'class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty({ message: 'username required' })
  @MaxLength(20, { message: 'username cannot be longer than 20 characters' })
  readonly name: string;

  @IsAlphanumeric()
  @IsNotEmpty({ message: 'password required' })
  @MaxLength(8, { message: 'password must be at least 8 characters long' })
  readonly password: string;

  @IsOptional()
  createdAt?: string;
}
```

```typescript
// services/user-service/user-service.service.ts
import { Injectable } from '@nestjs/common';
import { UserDto } from '../../user-dto/user.dto';

@Injectable()
export class UserService {
  private users: UserDto[] = [];

  createUser(user: UserDto): void {
    this.users.push(user);
  }

  getAllUsers(): UserDto[] {
    return this.users;
  }
}
```

```typescript
// app.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './services/user-service/user-service.service';
import { UserDto } from './user-dto/user.dto';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() body: UserDto) {
    return 'user created successfully';
  }

  @Get()
  getAllUsers(): UserDto[] {
    return this.userService.getAllUsers();
  }
}
```

```typescript
// middleware/user-logging-middleware/user-logging-middleware.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as bcrypt from 'bcrypt';
import { UserService } from '../../services/user-service/user-service.service';
import { UserDto } from '../../user-dto/user.dto';

@Injectable()
export class UserLoggingMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    if (req.body && req.body.name) {
      req.body.name = req.body.name.toUpperCase();
    }

    if (req.body && req.body.name && req.body.password) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const createUserDto: UserDto = {
        name: req.body.name,
        password: hashedPassword,
        createdAt: new Date().toISOString(),
      };

      this.userService.createUser(createUserDto);
    }

    next();
  }
}
```

```typescript
// app.module.ts
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserService } from './services/user-service/user-service.service';
import { UserLoggingMiddleware } from './middleware/user-logging-middleware/user-logging-middleware.middleware';

@Module({
  controllers: [AppController],
  providers: [UserService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserLoggingMiddleware).forRoutes('*');
  }
}
```

```typescript
// main.ts
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(3000);
}
bootstrap();
```

## 요약
- `class-validator` 데코레이터(`@IsString`, `@IsNotEmpty`, `@MaxLength`, `@IsAlphanumeric`)로 DTO의 각 필드에 검증 규칙을 지정할 수 있다.
- 미들웨어에도 서비스(`UserService`)를 생성자 주입(constructor injection)으로 사용할 수 있다.
- `bcrypt.hash()`는 비동기 함수이므로, 미들웨어의 `use` 메서드를 `async`로 선언하고 `await`로 값을 받아야 `Promise<string>`과 `string` 타입 불일치 에러를 피할 수 있다.
- `app.useGlobalPipes(new ValidationPipe({ transform: true }))`로 전역 검증 파이프를 적용해야 DTO에 지정한 검증 규칙이 실제로 동작하고, 요청 페이로드가 DTO 인스턴스로 자동 변환된다.
- 이 과제를 통해 미들웨어에서 비밀번호를 해시로 암호화해 저장하는 흐름 전체(DTO 검증 → 미들웨어 처리 → 서비스 저장 → 컨트롤러 응답)를 확인했다.
