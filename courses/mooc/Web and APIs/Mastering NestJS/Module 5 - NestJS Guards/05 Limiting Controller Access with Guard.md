# Limiting Controller Access with Guard

## 개요
- `ExecutionContext`의 `getClass()` 메서드로 현재 핸들러가 속한 컨트롤러(controller) 클래스를 확인하고, 이를 이용해 특정 컨트롤러만 특정 라우트에 접근하도록 제한하는 방법을 실습하는 강의.

## 내용
### getClass 메서드
- `canActivate` 메서드 안에서 `controller`라는 상수를 만들고 `context.getClass()`를 할당한다.
- `getClass()`는 현재 핸들러(handler)가 속한 컨트롤러 클래스(controller class)의 타입을 반환한다.
- `controller`를 콘솔에 출력하고 Postman에서 GET 요청을 보내면 터미널에 `AppController` 클래스가 출력된다. 즉 `getClass()`는 라우트 핸들러가 속한 컨트롤러를 반환한다.
- 이 메서드를 활용하면 특정 컨트롤러가 특정 라우트에 접근하는 것을 제한할 수 있다.

### 시나리오 구성 — AppController(admin)와 UserController
- `AppController`를 관리자(admin)용 컨트롤러라고 가정하고, `UserController`라는 새 컨트롤러를 추가로 만든다.
- `services` 폴더 아래에 `UserService`라는 서비스 파일도 만든다.
- `UserService`에는 문자열 배열(string array) 타입의 `users` 배열에 몇 개의 사용자 이름 값을 넣고, 이를 반환하는 `getUsers` 메서드(반환 타입 `string[]`)를 정의한다.
- `UserController`에서 경로(path)가 `users`인 GET 라우트 핸들러를 정의하고, 생성자(constructor)를 통해 `private readonly userService: UserService`로 `UserService`를 주입(inject)한다. 핸들러는 `userService.getUsers()`를 반환한다.
- `AppController`에는 컨트롤러 라우트를 `admin`으로 설정하고, 동일하게 `users`라는 GET 핸들러를 정의해 같은 방식으로 `UserService`를 주입하고 사용자 목록을 반환한다.
- `admin/users`와 `user/users` 두 라우트 모두 요청하면 두 컨트롤러 모두 동일하게 사용자 이름 목록을 정상적으로 반환하는 것을 확인한다.

### UserController의 접근을 가드로 제한
- 가드 파일에서 기존 콘솔 출력문을 제거하고, `if (controller !== AppController) { throw new UnauthorizedException('This route is only accessible from the app controller'); }` 형태의 조건문을 추가한다.
- 이렇게 하면 `UserController`는 `users` 라우트에 접근할 수 없게 된다.
- 가드를 `UserController`에 적용하고, `AppController`에 있던(주석 처리했던) 가드는 다시 주석을 해제(uncomment)해 적용한다.
- Postman에서 `admin/users` 라우트로 먼저 요청하면 사용자 목록이 정상적으로 반환된다.
- 라우트를 `user/users`로 바꿔 요청하면 인가되지 않았다(unauthorized)는 메시지를 받는다.
- 이런 방식으로 가드를 이용해 특정 컨트롤러가 특정 라우트에 접근하는 것을 제한할 수 있다.

## 예시
```typescript
// guards/auth.guard.ts — getClass()로 컨트롤러 제한
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppController } from '../app.controller';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const controller = context.getClass();

    if (controller !== AppController) {
      throw new UnauthorizedException(
        'This route is only accessible from the app controller',
      );
    }

    return true;
  }
}
```

```typescript
// services/user.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users: string[] = ['user A', 'user B', 'user C'];

  getUsers(): string[] {
    return this.users;
  }
}
```

```typescript
// user.controller.ts
import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './services/user.service';
import { AuthGuard } from './guards/auth.guard';

@Controller('user')
@UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  getUsers() {
    return this.userService.getUsers();
  }
}
```

```typescript
// app.controller.ts
import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './services/user.service';
import { AuthGuard } from './guards/auth.guard';

@Controller('admin')
@UseGuards(AuthGuard)
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  getUsers() {
    return this.userService.getUsers();
  }
}
```

## 요약
- `context.getClass()`는 현재 라우트 핸들러가 속한 컨트롤러 클래스를 반환한다.
- 이를 조건문에 활용해 특정 컨트롤러가 아닐 경우 `UnauthorizedException`을 던져 접근을 제한할 수 있다.
- 예제에서는 `AppController`(admin)만 `users` 라우트에 접근하도록 허용하고 `UserController`의 접근은 차단했다.
- 두 컨트롤러가 같은 `UserService`를 주입받아 같은 데이터를 반환하더라도, 가드를 통해 컨트롤러 단위로 접근을 세밀하게 제어할 수 있다.
