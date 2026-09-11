# Defining Custom Metadata

## 개요
- `@SetMetadata()` 데코레이터로 라우트 핸들러에 커스텀 메타데이터(custom metadata)를 붙이고, 가드 안에서 `Reflector` 클래스로 그 메타데이터를 읽어 동적으로 역할(role)을 검증하는 방법을 실습하는 강의.

## 내용
### 커스텀 메타데이터란
- NestJS는 라우트 핸들러 메서드나 클래스에 우리만의 커스텀 데이터 집합, 즉 메타데이터(metadata)를 붙일 수 있는 기능을 제공한다.
- 이렇게 붙인 메타데이터는 가드(guards), 인터셉터(interceptors), 다른 데코레이터(decorators)에서 접근해 애플리케이션의 동작을 바꾸거나 결정을 내리는 데 활용할 수 있다.

### SetMetadata 데코레이터로 메타데이터 설정
- 이전 예제(컨트롤러, 가드)를 이어서 사용한다. 컨트롤러 파일에서 `@SetMetadata()` 데코레이터를 GET 라우트 핸들러에 붙여 커스텀 메타데이터를 추가한다.
- `@SetMetadata()`는 두 개의 인자를 받는다 — 문자열(string) 타입의 키(key) 값과, 그에 대응하는 값(pair value)이다.
- 예시로 키를 `roles`, 값을 `admin`으로 설정한다. 값은 관례적으로 대괄호(square bracket)로 감싼 문자열, 즉 배열(array) 형태로 준다.
- 데코레이터에 마우스를 올려보면(hover) 설명(description)에 실제 문법이 나오는데, 값이 배열임을 알 수 있고, "메타데이터는 `Reflector` 클래스를 이용해 리플렉트(reflect)할 수 있다"는 설명도 확인할 수 있다.

### Reflector 클래스로 메타데이터 읽기
- 가드에서 메타데이터를 읽으려면 `Reflector` 클래스를 사용해야 한다.
- `RoleGuard` 파일에서 먼저 생성자(constructor)를 통해 `Reflector` 클래스를 주입(inject)한다: `constructor(private reflector: Reflector)`.
- `Reflector` 클래스는 메서드에 지정된 메타데이터에 접근하고 그 값을 바탕으로 로직을 정의할 수 있게 해주는 중요한 역할을 한다.
- `canActivate` 메서드 안에서 기존에 `switchToHttp()`로 request를 가져오던 코드는 제거한다. 더 이상 헤더에서 역할(role)을 직접 읽지 않고, 이제는 동적(dynamic)으로 처리하기 때문이다.
- `role` 상수를 만들고 `this.reflector.` 뒤에 오는 네 가지 `get` 계열 메서드 중 하나를 사용한다. 이 강의에서는 라우트 핸들러 메서드의 메타데이터를 가져오는 표준 메서드인 `.get()`을 사용한다.
- `get()` 메서드는 두 개의 인자를 받는다 — 첫 번째는 메타데이터 키(이 경우 `roles`), 두 번째는 메서드의 컨텍스트(context), 즉 GET 라우트에 배정된 메서드다.
- 메서드 컨텍스트를 얻기 위해 `context.getHandler()`를 사용한다. 이 메서드는 GET 라우트 핸들러 메서드(예: `getUser`)에 대한 세부 정보를 실행 컨텍스트(execution context)로부터 가져온다.

### 역할 검증 로직 업데이트
- `if` 조건문을 업데이트해서, `role`이 존재하지 않거나(role does not exist) `role`이 `admin`을 포함하지 않으면(does not include admin) `ForbiddenException`을 던지도록 한다.
- 이제 헤더에 역할(role) 값을 별도로 지정할 필요가 없다. 라우트 핸들러에 `roles: admin` 메타데이터가 이미 설정되어 있어 역할이 동적으로 결정되기 때문이다.

### AuthGuard를 컨트롤러 레벨로 이동
- 한 가지 변경을 더 적용한다 — `AuthGuard`를 라우트 핸들러가 아니라 컨트롤러(controller)에 적용한다. 이렇게 하면 `AuthGuard`가 해당 컨트롤러의 모든 라우트 핸들러에 대해 검사를 수행하게 된다.

### Postman으로 동작 확인
- Postman에서 라우트 경로는 그대로 두고, 헤더에 API 키 값(`user a 101`)을 준다. 역할(role) 값은 주지 않는다.
- 요청을 보내면 사용자 데이터가 정상적으로 표시된다.
- API 키 값을 `user B 102`로 바꿔도 마찬가지로 사용자 데이터가 표시되는데, 이는 (메타데이터로) 역할이 `admin`으로 설정되어 있기 때문이다.
- `@SetMetadata()`의 역할 값을 `user`로 바꾼 뒤 같은 요청을 다시 보내면 access denied 메시지를 받는다.
- 이렇게 커스텀 메타데이터를 설정하고, 역할(role) 값을 동적으로 적용하는 방법을 확인했다.

## 예시
```typescript
// app.controller.ts — @SetMetadata로 라우트에 역할 메타데이터 부여, AuthGuard는 컨트롤러 레벨로 이동
import {
  Controller,
  Get,
  Request,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

@Controller('user')
@UseGuards(AuthGuard)
export class AppController {
  @Get()
  @SetMetadata('roles', ['admin'])
  @UseGuards(RoleGuard)
  getUser(@Request() req: any) {
    const { apiKey, ...userData } = req.user;
    return `Hello ${userData.name}, your email: ${JSON.stringify(userData, null, 2)}`;
  }
}
```

```typescript
// guards/role.guard.ts — Reflector로 메타데이터 읽기
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const role = this.reflector.get('roles', context.getHandler());

    if (!role || !role.includes('admin')) {
      throw new ForbiddenException('access denied for non admin users');
    }

    return true;
  }
}
```

## 요약
- `@SetMetadata(key, value)` 데코레이터로 라우트 핸들러나 클래스에 커스텀 메타데이터를 붙일 수 있다.
- 가드에서는 `Reflector` 클래스를 주입받아 `this.reflector.get(key, context.getHandler())`로 해당 메타데이터 값을 읽을 수 있다.
- `context.getHandler()`는 현재 라우트에 배정된 메서드에 대한 정보를 실행 컨텍스트로부터 가져온다.
- 이 방식으로 역할(role) 값을 헤더가 아니라 메타데이터로 동적으로 관리할 수 있어, 라우트 핸들러마다 필요한 역할을 코드 상에서 선언적으로 지정할 수 있다.
- `AuthGuard`를 컨트롤러 레벨에 적용하면 해당 컨트롤러의 모든 핸들러에 API 키 검증이 공통으로 적용된다.
