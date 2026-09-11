# Applying Role for Specific Handlers

## 개요
- 다양한 사용자 기반(user base)을 가진 애플리케이션에서 특정 라우트 핸들러를 특정 역할(role)의 사용자에게만 허용하는 방법을 실습하는 강의. 사용자 추가(POST) 기능을 만들고, `RoleGuard` 로직을 개선해 admin 전용 라우트와 공개(public) 라우트를 구분한다.

## 내용
### 사용자 추가 기능 구현
- `UserService`에 `addUser` 메서드를 추가한다. `user: any` 인자를 받아 `this.users.push(user)`로 사용자 배열에 새 사용자를 추가한다.
- 컨트롤러에 POST 라우트 핸들러를 추가한다. 경로는 `create`이고, `create` 메서드는 `@Body()` 데코레이터로 `userData: any` 프로퍼티를 받아 요청 본문을 저장한다.
- `this.userService.addUser(userData)`를 호출해 사용자를 추가하고, `'user added successfully'` 메시지를 반환한다.

### mock 사용자에 역할(roles) 프로퍼티 추가
- 아직 데이터베이스가 연결되어 있지 않으므로, 서비스 파일 안에서 admin 역할을 가진 mock 사용자를 직접 만든다.
- 기존 `users` 배열의 각 사용자 객체에 `roles`라는 새 프로퍼티를 추가한다.
- User A에는 `roles: [Role.Admin]`을 설정하고(정적인 문자열 대신 타입에 안전한 `Role` enum 사용), 나머지 사용자에게는 `roles: [Role.User]`를 설정한다.
- 실제 데이터베이스가 있다면 역할은 동적으로 설정되겠지만, 지금은 목업(mock)으로 처리한다. `roles` 프로퍼티를 두는 이유는, 가드가 라우트에 접근하려는 사용자가 admin 역할을 가지고 있는지 확인해야 하기 때문이다.

### RoleGuard 로직 개선
- `Reflector`의 타입 안전성(type safety)을 위해 `get` 메서드의 제네릭(generic) 타입을 `Role[]`로 지정한다. 사용자가 여러 역할을 가질 수도 있으므로 배열 타입을 사용한다: `this.reflector.get<Role[]>('roles', context.getHandler())`.
- 공개(public) 사용자도 특정 라우트에 접근할 수 있도록, `role`이 존재하지 않으면(즉 `@Roles()` 메타데이터가 지정되지 않았으면) `true`를 반환해 접근을 허용하는 조건문을 추가한다. 이렇게 하면 `@Roles` 데코레이터가 없는 라우트는 admin이 아닌 사용자도 접근할 수 있다.
- 이제 실제로 요청하는 사용자의 역할을 확인해야 한다. request 객체에서 `user`를 구조 분해(destructure)해서 가져온다: `const { user } = context.switchToHttp().getRequest();`
- `user`가 존재하지 않거나 `user.roles`가 존재하지 않으면 `ForbiddenException('user roles are missing')`을 던진다. 이 로직은 (이후 admin 역할이 설정될) POST 라우트 핸들러에 접근하려는 사용자를 다루기 위한 것이다.
- 사용자가 역할을 가지고 있는 경우, 접근을 허용해야 하는지 확인하기 위해 `role`(메타데이터로 지정된 허용 역할 배열)에 대해 `.some()` 메서드를 사용한다. `.some()`은 배열에서 최소 하나의 요소가 조건을 만족하는지 검사한다.
- 콜백은 `roles` 인자를 받아 `user.roles.includes(roles)`를 반환한다. 즉 request의 `user.roles`가 메타데이터로 지정된 역할 중 하나라도 포함하고 있으면 접근을 허용한다. 조건을 만족하지 않으면 `ForbiddenException('access denied')`를 던진다.

### 라우트별 역할 지정과 가드 적용 범위
- POST 라우트 핸들러에는 이전 강의에서 만든 `@Roles()` 커스텀 데코레이터로 admin 역할을 부여한다.
- GET 라우트에는 user 역할이 적용되어 있으며, 가드는 전역(global) 레벨에 적용되어 있다고 설명한다.

### 버그 발견과 수정 — role.some is not a function
- Postman에서 `user` 역할을 가진 사용자(API 키: user B 102)로 GET 요청을 하면 internal server error가 발생한다. 터미널을 보면 `role.some is not a function`이라는 에러 메시지가 나온다.
- 원인은 `role`이 배열로 인식되지 않고 있기 때문이다. `Reflector`에서 제네릭 타입을 `Role[]`로 지정했음에도, `Roles` 데코레이터 쪽에 문제가 있다.
- `Role` enum이 문자열 값(string values)으로 구성되어 있어서 배열 타입과 충돌(interfere)하고 있었다. 손쉬운 해결책은 `Roles` 데코레이터의 `roles` 프로퍼티(파라미터)에 스프레드 연산자(spread operator)를 적용하는 것이다. 이렇게 하면 TypeScript가 `Role` enum의 타입을 문자열 배열로 올바르게 추론(infer)할 수 있게 된다.

### 수정 후 동작 확인
- 수정 후 다시 GET 요청을 하면 user 데이터가 정상적으로 표시된다.
- admin 데이터를 확인하기 위해 API 키를 admin 사용자(user A 101)로 바꿔 요청하면 오히려 access denied 메시지를 받는데, 이는 의도한 동작이 아니다.
- GET 라우트를 모든 사용자에게 공개(publicly available)하려면, GET 라우트에서 `@Roles()` 데코레이터를 제거하면 된다. 그렇게 하면 다시 요청했을 때 admin 데이터도 정상적으로 표시된다. 즉 GET 요청은 이제 모든 사용자에게 열려 있다.
- POST 요청을 테스트한다. 새 탭을 열어 메서드를 POST로, 경로를 `/create`로 설정한다. 요청 본문에 `apiKey: user D 104`, `name: user D`, `email: user D at example.com`, `roles: user`를 넣는다.
- 요청을 보내면 unauthorized 메시지가 나온다. POST 요청은 admin 사용자의 API 키가 있어야만 가능하기 때문이다.
- API 키를 admin 사용자(user A 101)로 바꾸면 사용자 추가 성공(user successfully added) 메시지를 받는다.
- 다른 API 키(예: user C 103)로 시도하면 access denied 메시지가 나온다. 이렇게 특정 라우트 접근을 특정 역할로 제한할 수 있음을 확인한다.
- API 키를 다시 admin으로 바꿔 사용자를 추가하고, GET 요청으로 새로 추가된 사용자 데이터를 확인한다.
- 이번에는 `roles` 프로퍼티 없이 사용자를 추가해본다(POST 본문에서 `roles` 프로퍼티 제거). 동시에 GET 라우트에는 다시 user 역할 제한을 주석 해제(uncomment)해서 적용한다.
- POST 요청을 보내면 사용자가 정상적으로 추가된다. 그런데 그 사용자로 GET 요청을 하면 `user roles are missing`이라는 메시지가 나온다. 이렇게 역할 기반(role-based) 시나리오들을 가드로 다양하게 연습해볼 수 있다.

## 예시
```typescript
// services/user.service.ts — addUser 메서드와 mock 사용자의 roles 프로퍼티
import { Injectable } from '@nestjs/common';
import { Role } from '../enum/roles.enum';

@Injectable()
export class UserService {
  private users: any[] = [
    { apiKey: 'userA101', name: 'User A', email: 'usera@example.com', roles: [Role.Admin] },
    { apiKey: 'userB102', name: 'User B', email: 'userb@example.com', roles: [Role.User] },
    { apiKey: 'userC103', name: 'User C', email: 'userc@example.com', roles: [Role.User] },
  ];

  getUser(apiKey: string) {
    return this.users.find((user) => user.apiKey === apiKey);
  }

  addUser(user: any) {
    return this.users.push(user);
  }
}
```

```typescript
// custom decorator/role.decorator.ts — 스프레드 연산자로 수정 (role.some is not a function 버그 픽스)
import { SetMetadata } from '@nestjs/common';
import { Role } from '../enum/roles.enum';

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
```

```typescript
// guards/role.guard.ts
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from '../enum/roles.enum';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const role = this.reflector.get<Role[]>('roles', context.getHandler());

    if (!role) {
      return true; // 메타데이터가 없으면 공개(public) 라우트로 간주
    }

    const { user } = context.switchToHttp().getRequest();

    if (!user || !user.roles) {
      throw new ForbiddenException('user roles are missing');
    }

    const hasRole = role.some((roles) => user.roles.includes(roles));

    if (!hasRole) {
      throw new ForbiddenException('access denied');
    }

    return true;
  }
}
```

```typescript
// app.controller.ts
import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { Roles } from './custom decorator/role.decorator';
import { Role } from './enum/roles.enum';

@Controller('user')
@UseGuards(AuthGuard)
export class AppController {
  @Get()
  // @Roles(Role.User)  // 제거하면 GET은 모든 사용자에게 공개된다
  @UseGuards(RoleGuard)
  getUser(@Request() req: any) {
    const { apiKey, ...userData } = req.user;
    return `Hello ${userData.name}, your email: ${JSON.stringify(userData, null, 2)}`;
  }

  @Post('create')
  @Roles(Role.Admin)
  @UseGuards(RoleGuard)
  create(@Body() userData: any) {
    this.userService.addUser(userData);
    return 'user added successfully';
  }
}
```

## 요약
- `addUser` 메서드와 POST `/create` 라우트로 사용자를 추가하는 기능을 만들고, mock 사용자에 `roles` 프로퍼티(`Role.Admin` / `Role.User`)를 부여했다.
- `RoleGuard`는 메타데이터(`roles`)가 없으면 공개 접근을 허용(`return true`)하고, 있으면 request의 `user.roles`와 `.some()`으로 비교해 접근 여부를 결정한다.
- `user`나 `user.roles`가 없으면 `'user roles are missing'`, 역할이 일치하지 않으면 `'access denied'` 에러를 던진다.
- `Roles` 데코레이터를 `(...roles: Role[])` 형태의 나머지 매개변수(rest parameter)로 바꾸는 것이 `role.some is not a function` 버그의 해결책이었다 — enum 문자열 값과 배열 타입이 충돌하는 문제를 스프레드로 해결했다.
- `@Roles()` 데코레이터를 라우트에서 제거하면 해당 라우트는 모든 사용자에게 공개되고, 붙이면 지정된 역할을 가진 사용자만 접근할 수 있다.
