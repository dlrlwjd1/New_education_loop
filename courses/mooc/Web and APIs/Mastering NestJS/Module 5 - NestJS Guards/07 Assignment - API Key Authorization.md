# Assignment - API Key Authorization

## 개요
- 사용자 객체에 할당된 API 키(API key)를 기준으로 인가(authorization)를 수행하는 가드를 직접 구현하는 실습 과제(assignment) 강의. 올바른 API 키면 요청을 진행시키고, 잘못된 키면 인가되지 않았다는 에러를 반환하도록 만든다.

## 내용
### 과제 목표
- 객체에 할당된 API 키를 기준으로 사용자 인가(authorization)를 수행하는 가드를 만든다.
- 사용자가 올바른 API 키를 입력하면 요청이 진행되어야 하고, 잘못된 API 키 값이면 요청이 처리되지 않고 인가되지 않았다는(unauthorized) 에러가 표시되어야 한다.

### UserService 작성
- `nest generate service services/user` 명령으로 서비스 파일을 생성한다.
- `UserService` 안에 `users`라는 배열(array) 객체를 만든다. 각 사용자 객체는 `apiKey`(비밀 API 키 값), `name`, `email` 프로퍼티를 가진다. 이런 사용자 객체를 여러 개(User A, User B, User C) 만든다.
- `apiKey`라는 문자열(string) 타입 파라미터를 받는 `getUser` 메서드를 정의한다. 이 메서드는 API 키를 기준으로 사용자 데이터를 조회한다.
- 메서드 내부에서는 `this.users.find(user => user.apiKey === apiKey)`처럼 `find` 콜백에서 각 사용자 객체(`user`)의 `apiKey` 프로퍼티가 인자로 받은 `apiKey`와 같은지 비교한다.
- 일치하는 API 키를 가진 사용자가 있으면 해당 사용자 객체를 반환하고, 없으면 `undefined`를 반환한다.

### 가드 작성
- 가드 파일에서 생성자(constructor)를 통해 `UserService`를 주입(inject)한다.
- `canActivate` 메서드 안에서 `request` 상수를 만들고 `context.switchToHttp().getRequest()`를 할당한다. 헤더(headers)는 request 객체의 일부이기 때문이다.
- API 키를 조회하기 위해 별도의 상수를 만들고, `request.headers['api_key']`처럼 API용 커스텀 헤더(custom header)에서 값을 가져온다.
- 요청 헤더에 API 키가 존재하면 `const user = this.userService.getUser(apiKey)`로 사용자 데이터를 조회한다. 여기서 전달하는 `apiKey`는 요청 헤더에서 가져온 값이다.
- API 키가 유효한지 검증하기 위해 `if (!user)` 형태의 조건문을 만들어, 유효하지 않으면 `throw new UnauthorizedException('invalid API key')`를 던진다.
- 유효한 사용자를 찾으면 `request.user = user`처럼 사용자 데이터를 request 객체에 저장해둔다.

### 컨트롤러 작성
- GET 라우트 핸들러를 만들고 라우트를 `user`로 설정한다.
- `getUser` 메서드를 정의하며, `@Request()` 데코레이터로 `any` 타입의 request 프로퍼티를 받는다.
- request에서 사용자 데이터를 상수로 꺼내고, ``Hello ${data.name}, your email: ${JSON.stringify(data, null, 2)}`` 형태의 문자열 메시지를 반환한다(발화 원문 기준: 이름과 함께 `JSON.stringify(data, null, 2)`로 데이터를 함께 보여준다).
- 라우트에 `@UseGuards(AuthGuard)`를 적용하는 것을 잊지 않는다.

### Postman 테스트와 API 키 노출 문제 수정
- Postman에서 라우트를 `/user`로 설정하고, 헤더 키를 `api_key`, 값을 `userA101`(발화 원문: "user a one on one")로 설정해 요청하면 해당 사용자 데이터가 반환된다.
- 다만 이때 응답에 API 키 값도 그대로 노출되는 문제가 있다. 이는 객체 전체(entire object)를 그대로 보여주고 있기 때문이다.
- 이를 해결하기 위해 객체를 구조 분해(destructure)한다. `apiKey` 프로퍼티를 따로 꺼내고, 스프레드 연산자(spread operator)로 나머지 프로퍼티만 담은 새 객체(`userData`)를 만든다. 즉 원본 객체에서 `apiKey`를 제외한 모든 프로퍼티로 새 객체가 만들어진다.
- 다시 같은 요청을 보내면 이번에는 응답에서 API 키가 제외된 것을 확인한다.
- 잘못된 API 키를 주면 `Unauthorized Exception`과 해당 메시지가 반환된다.
- 이렇게 API 키 인가(authorization) 가드 구현을 완료한다.

## 예시
```typescript
// services/user.service.ts
import { Injectable } from '@nestjs/common';

interface User {
  apiKey: string;
  name: string;
  email: string;
}

@Injectable()
export class UserService {
  private users: User[] = [
    { apiKey: 'userA101', name: 'User A', email: 'usera@example.com' },
    { apiKey: 'userB202', name: 'User B', email: 'userb@example.com' },
    { apiKey: 'userC303', name: 'User C', email: 'userc@example.com' },
  ];

  getUser(apiKey: string): User | undefined {
    return this.users.find((user) => user.apiKey === apiKey);
  }
}
```

```typescript
// guards/auth.guard.ts
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['api_key'];

    if (apiKey) {
      const user = this.userService.getUser(apiKey);

      if (!user) {
        throw new UnauthorizedException('invalid API key');
      }

      request.user = user;
    }

    return true;
  }
}
```

```typescript
// app.controller.ts
import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from './guards/auth.guard';

@Controller('user')
export class AppController {
  @Get()
  @UseGuards(AuthGuard)
  getUser(@Request() req: any) {
    const { apiKey, ...userData } = req.user;
    return `Hello ${userData.name}, your email: ${JSON.stringify(userData, null, 2)}`;
  }
}
```

```
Postman 헤더 예시
Key: api_key
Value: userA101   // 유효한 키 → 사용자 데이터 반환 (apiKey 제외)
Value: wrong_key  // 잘못된 키 → 401 Unauthorized, "invalid API key"
```

## 요약
- `UserService.getUser(apiKey)`는 `find`로 API 키가 일치하는 사용자를 찾아 반환하거나, 없으면 `undefined`를 반환한다.
- 가드에서는 `context.switchToHttp().getRequest()`로 request를 얻고, 커스텀 헤더(`api_key`)에서 키 값을 읽어 `UserService.getUser()`로 사용자를 조회한다.
- 사용자를 찾지 못하면 `UnauthorizedException('invalid API key')`를 던지고, 찾으면 `request.user`에 사용자 데이터를 저장해 컨트롤러에서 사용할 수 있게 한다.
- 응답에서 민감한 `apiKey` 값을 그대로 노출하지 않도록, 구조 분해와 스프레드 연산자로 `apiKey`를 제외한 객체를 만들어 반환해야 한다.
