# Applying Multiple Roles

## 개요
- 하나의 라우트 핸들러에 여러 개의 역할(multiple roles)을 함께 부여해, 여러 책임(responsibility)을 가진 사용자들에게 적절한 권한을 허용하는 방법과, 이를 위해 `Roles` 데코레이터가 어떻게 작성되어야 하는지를 다루는 강의.

## 내용
### 다중 역할이 필요한 이유
- 일부 애플리케이션에서는 사용자에게 여러 역할(roles)을 부여해서, 그들의 책임(responsibilities)에 맞는 적절한 권한(permissions)을 가지도록 해야 할 필요가 있다.

### 라우트에 여러 역할 부여하기
- 라우트에 여러 역할을 제공하려면 `Roles` 데코레이터의 사용 방식만 업데이트하면 된다.
- 예시로 POST 라우트 핸들러에 user 역할도 함께 부여한다(기존에는 admin 역할만 있었던 곳에 user 역할을 추가).
- 이제 user 역할의 API 키(user B 102)로 POST 요청을 보내면 사용자가 정상적으로 추가된다.
- GET 요청도 확인해본다. 새로 추가된 사용자(API 키 user D 104)로 GET 요청을 보내면 해당 사용자 데이터가 정상적으로 표시된다.
- 이렇게 라우트 핸들러에 여러 역할을 부여할 수 있다.

### 다중 역할을 지정할 때 주의할 점
- 여러 역할을 부여할 때 기억해야 할 점은, `Roles` 데코레이터 파일에서 `Role` enum을 배열(array) 타입으로 제공해야 한다는 것이다. 그래야만 라우트 핸들러에 여러 역할을 지정할 수 있다.
- 또한 `Role` enum을 배열로 지정하더라도, (나머지 매개변수를 위한) 스프레드 연산자(spread operator)를 제공하지 않으면 "expected one argument but got two" 같은 에러가 발생한다.
- 즉 여러 역할을 제공하려면 `Roles` 데코레이터가 어떻게 정의되어 있는지가 중요한 역할을 한다.

## 예시
```typescript
// app.controller.ts — POST 라우트에 admin과 user 역할을 함께 부여
import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { Roles } from './custom decorator/role.decorator';
import { Role } from './enum/roles.enum';

@Controller('user')
@UseGuards(AuthGuard)
export class AppController {
  @Get()
  @UseGuards(RoleGuard)
  getUser(@Request() req: any) {
    const { apiKey, ...userData } = req.user;
    return `Hello ${userData.name}, your email: ${JSON.stringify(userData, null, 2)}`;
  }

  @Post('create')
  @Roles(Role.Admin, Role.User) // 여러 역할을 함께 부여
  @UseGuards(RoleGuard)
  create(@Body() userData: any) {
    this.userService.addUser(userData);
    return 'user added successfully';
  }
}
```

```typescript
// custom decorator/role.decorator.ts — 나머지 매개변수(rest parameter)로 여러 인자를 배열로 받아야 함
import { SetMetadata } from '@nestjs/common';
import { Role } from '../enum/roles.enum';

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
// 스프레드(...) 없이 (roles: Role[])로 정의하면
// @Roles(Role.Admin, Role.User) 호출 시 "expected one argument but got two" 에러 발생
```

## 요약
- `@Roles(Role.Admin, Role.User)`처럼 여러 역할을 인자로 나열하면 하나의 라우트 핸들러에 여러 역할을 동시에 허용할 수 있다.
- 여러 역할을 지정하려면 `Roles` 데코레이터 정의에서 `Role` enum을 배열 타입으로 다뤄야 하며, 나머지 매개변수(`...roles: Role[]`) 문법을 사용해야 한다.
- 스프레드 연산자 없이 정의하면 여러 인자를 전달할 때 "expected one argument but got two" 에러가 발생한다.
- `RoleGuard`의 검증 로직(`.some()`으로 사용자 역할과 메타데이터 역할 비교)은 이전 강의와 동일하게 작동한다.
