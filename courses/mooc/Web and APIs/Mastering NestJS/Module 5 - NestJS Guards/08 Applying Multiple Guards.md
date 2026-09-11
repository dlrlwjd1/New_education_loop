# Applying Multiple Guards

## 개요
- 하나의 라우트 핸들러(route handler)에 여러 개의 가드(guards)를 함께 적용해, API 키 인가에 더해 관리자(admin) 역할(role) 검증까지 추가로 수행하는 방법을 실습하는 강의.

## 내용
### 문제 상황
- 이전 강의에서 개별 사용자 객체마다 API 키를 정의하고, 유효한 API 키를 기준으로 사용자 데이터를 보여주도록 만들었다.
- 하지만 현재는 유효한 API 키만 있으면 모든 사용자에 대해 데이터가 표시된다.
- 이를 개선하기 위해 관리자(admin) 사용자만 사용자 데이터에 접근할 수 있도록 하는 새로운 가드를 만들고, 하나의 라우트 핸들러에 여러 개의 가드를 적용(applying multiple guards)한다.

### RoleGuard 생성
- `nest generate guard guards/role --no-spec` 명령으로 `role` 가드를 생성한다.
- `canActivate` 메서드 안에서 `request` 상수를 만들고 `context.switchToHttp().getRequest()`로 request 객체를 가져온다.
- `role`이라는 상수를 만들어 `request.headers.role`을 할당한다. 즉 `role`은 요청 헤더에 추가될 커스텀 헤더(custom header) 값이다.
- 역할(role)을 검증하기 위해 `if (role !== 'admin') { throw new ForbiddenException('access denied for non admin users'); }` 형태의 조건문을 작성한다.

### 컨트롤러에 두 가드 함께 적용
- 컨트롤러 파일을 열어 `@UseGuards()` 데코레이터에 기존 가드(`AuthGuard`)와 함께 `RoleGuard`를 추가한다.
- 이렇게 하면 GET 라우트 핸들러에 들어오는 요청에 대해 두 가드가 모두 검사를 수행하게 된다.

### 여러 가드의 실행 순서(우선순위)
- 여러 가드를 이렇게 나열하면 실행 우선순위(precedence)가 존재한다. 즉 먼저 정의된 가드가 먼저 실행되고, 그다음 두 번째 가드가 실행된다.
- 첫 번째 가드가 실패하거나 에러를 던지면, 두 번째 가드는 아예 실행되지 않는다.

### Postman으로 동작 확인
- API 키만 주고(예: User C의 API 키) 역할(role) 헤더 없이 요청하면, 역할을 지정하지 않았기 때문에 항상 access denied 메시지를 받는다.
- 역할을 `user`로 설정해 요청해도 여전히 access denied 메시지를 받는다.
- 역할을 `admin`으로 설정해 요청하면, admin 역할이 데이터를 볼 권한을 가지고 있으므로 사용자 데이터가 정상적으로 표시된다.
- 이런 방식으로 하나의 라우트 핸들러(또는 컨트롤러)에 여러 개의 가드를 적용할 수 있다.

## 예시
```typescript
// guards/role.guard.ts
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const role = request.headers.role;

    if (role !== 'admin') {
      throw new ForbiddenException('access denied for non admin users');
    }

    return true;
  }
}
```

```typescript
// app.controller.ts — 하나의 라우트 핸들러에 AuthGuard와 RoleGuard를 함께 적용
import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

@Controller('user')
export class AppController {
  @Get()
  @UseGuards(AuthGuard, RoleGuard)
  getUser(@Request() req: any) {
    const { apiKey, ...userData } = req.user;
    return `Hello ${userData.name}, your email: ${JSON.stringify(userData, null, 2)}`;
  }
}
```

```
Postman 헤더 예시
Key: api_key   Value: (User C의 API 키)
Key: role      Value: (미지정)   → 403 access denied for non admin users
Key: role      Value: user       → 403 access denied for non admin users
Key: role      Value: admin      → 200, 사용자 데이터 반환
```

## 요약
- `@UseGuards(GuardA, GuardB)`처럼 데코레이터에 여러 가드를 나열하면 하나의 라우트 핸들러에 여러 가드를 동시에 적용할 수 있다.
- 가드는 나열된 순서대로 실행되며, 앞선 가드가 실패(에러를 던짐)하면 뒤에 있는 가드는 실행되지 않는다.
- `RoleGuard`는 요청 헤더의 커스텀 `role` 값이 `admin`이 아니면 `ForbiddenException`을 던져 접근을 차단한다.
- `AuthGuard`(API 키 검증)와 `RoleGuard`(관리자 역할 검증)를 함께 적용하면 API 키가 유효하더라도 관리자 역할이 아니면 데이터에 접근할 수 없게 된다.
