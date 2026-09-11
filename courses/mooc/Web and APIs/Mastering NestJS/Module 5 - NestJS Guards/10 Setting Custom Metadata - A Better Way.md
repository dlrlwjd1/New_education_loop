# Setting Custom Metadata - A Better Way

## 개요
- `@SetMetadata()`를 라우트 핸들러에 직접 붙이는 방식 대신, `enum`과 커스텀 데코레이터(custom decorator)를 만들어 메타데이터를 좀 더 정확하고 좋은 방식(better practice)으로 부여하는 방법을 다루는 강의.

## 내용
### 기존 방식의 한계
- 이전 강의에서는 `@SetMetadata()` 데코레이터를 사용해 라우트 핸들러에 직접 메타데이터를 붙였다.
- 하지만 이렇게 라우트 핸들러에 메타데이터를 직접 지정하는 방식은 좋은 관례(good practice)로 여겨지지 않는다.
- 커스텀 메타데이터를 붙이는 데 더 나은 대안(alternate and better way)이 있다.

### Role enum 생성
- 역할(role) 값을 직접 문자열로 지정하는 대신, 역할들의 `enum`을 만드는 것이 더 나은 접근 방식이다.
- `enum`이라는 폴더를 만들고 그 안에 `roles.enum.ts` 파일을 만든다.
- 이 파일에 `Role`이라는 enum을 정의하고, `User = 'user'`, `Admin = 'admin'` 값을 넣는다.
- 이 enum 값들을 이후 역할(role)을 지정할 때 사용한다.

### 커스텀 데코레이터 생성
- 메타데이터를 지정하기 위한 커스텀 데코레이터(custom decorator)를 만든다.
- `custom decorator`라는 폴더를 만들고 그 안에 `role.decorator.ts` 파일을 만든다.
- 이 파일에서 `@nestjs/common`으로부터 `SetMetadata` 데코레이터를 import한다.
- `Roles`라는 상수를 export하며, 이 상수는 함수(화살표 함수, arrow function)다.
- 이 함수는 `roles: Role[]` (Role enum 타입) 인자를 받고, 콜백에서 `SetMetadata`를 반환하며, 키는 `roles`, 값은 인자로 받은 `roles`로 설정한다.
- 이렇게 만든 것이 `Roles` 데코레이터다. 이름을 `Roles` 데코레이터라고 부르는 이유는 상수 자체를 데코레이터(`SetMetadata`)로 할당했기 때문이다. 이는 메타데이터를 만들거나 지정하는 정확한(accurate) 방법이다.

### 컨트롤러에서 커스텀 데코레이터 사용
- 컨트롤러 파일에서 기존의 `@SetMetadata()` 데코레이터 대신, 방금 만든 커스텀 데코레이터인 `@Roles()`를 사용한다.
- 괄호 안에 메타데이터 값을 전달한다. 즉 `Role.Admin`처럼 역할 값을 넣는다.
- 이렇게 라우트 핸들러에 메타데이터를 정확하게(accurately) 붙일 수 있다.

### Postman으로 동작 확인
- Postman에서 API 키를 `user B 102`로 설정해 요청을 보내면, 역할이 admin으로 설정되어 있으므로 데이터가 반환된다.
- 역할을 `user`로 바꾸고 같은 요청을 다시 보내면 access denied와 forbidden 메시지를 받는다. 역할이 `user`이기 때문이다.
- 이처럼 커스텀 데코레이터를 만들어 메타데이터를 지정하는 방식이 더 나은 접근(better approach)이자 더 나은 관례(better practice)로 여겨진다.

## 예시
```typescript
// enum/roles.enum.ts
export enum Role {
  User = 'user',
  Admin = 'admin',
}
```

```typescript
// custom decorator/role.decorator.ts
import { SetMetadata } from '@nestjs/common';
import { Role } from '../enum/roles.enum';

export const Roles = (roles: Role[]) => SetMetadata('roles', roles);
```

```typescript
// app.controller.ts — 커스텀 Roles 데코레이터 사용
import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { Roles } from './custom decorator/role.decorator';
import { Role } from './enum/roles.enum';

@Controller('user')
@UseGuards(AuthGuard)
export class AppController {
  @Get()
  @Roles([Role.Admin])
  @UseGuards(RoleGuard)
  getUser(@Request() req: any) {
    const { apiKey, ...userData } = req.user;
    return `Hello ${userData.name}, your email: ${JSON.stringify(userData, null, 2)}`;
  }
}
```

## 요약
- 라우트 핸들러에 `@SetMetadata()`를 직접 쓰는 것보다, `Role` enum과 커스텀 데코레이터를 만들어 사용하는 것이 더 나은 관례로 여겨진다.
- `Role` enum(`User`, `Admin`)으로 역할 값을 하드코딩된 문자열 대신 타입 안전(type-safe)하게 관리할 수 있다.
- `export const Roles = (roles: Role[]) => SetMetadata('roles', roles)`처럼 `SetMetadata`를 감싸는 함수를 만들어 커스텀 데코레이터 `@Roles()`를 정의한다.
- 컨트롤러에서는 `@Roles([Role.Admin])`처럼 커스텀 데코레이터를 사용해 메타데이터를 부여하며, `RoleGuard`는 이전 강의와 동일하게 `Reflector`로 메타데이터를 읽어 검증한다.
