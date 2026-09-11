# Authentication and Authorization

## 개요
- 인터셉터(interceptor)를 이용해 인증(authentication)·인가(authorization) 기능을 구현하고, 인터셉터 여러 개를 등록할 때 실행 순서(order of execution)가 어떻게 정해지는지, 그리고 가드(guard)와 인터셉터 중 어떤 것이 인증에 더 적합한지를 다루는 강의.

## 내용
### Auth 인터셉터 만들기
- 라우트를 보호(protect)해 인가된(authorized) 사용자만 엔드포인트를 호출할 수 있도록, 별도의 인터셉터를 `Auth`라는 이름으로 새로 만든다.
- 인터셉터 안에서 `context.switchToHttp().getRequest()`로 요청 객체의 컨텍스트를 가져오고, authorization 헤더 값을 `token` 상수에 저장한다.
- 조건문으로 `token`이 존재하지 않으면 `new UnauthorizedException('Missing authorization token')`을 던진다.
- 이 예제에서는 비밀번호(password)를 토큰(token) 값으로 사용한다. 먼저 파라미터(params)에서 사용자 ID를 가져와야 하므로 `userId` 상수를 만들고 `request.params.id` 값을 대입한다.
- 사용자 서비스(user service)를 생성자(constructor)로 주입(inject)한 뒤, `user` 상수를 만들어 `userId`를 `findOne` 메서드에 전달해 사용자 데이터를 조회한다.
- `user`가 존재하지 않거나 `user.password`가 `token`과 일치하지 않으면 `new UnauthorizedException('Invalid token, given ID does not exist')`를 던진다.

### 인터셉터 등록과 실행 순서
- `AuthInterceptor`를 GET 라우트 핸들러에 등록하기 위해 `@UseInterceptors()` 데코레이터 안에 이 인터셉터를 **첫 번째**로 정의(define)한다.
- `@UseInterceptors()`에 여러 인터셉터를 등록할 때는 실행 순서(order of execution)를 고려해야 하며, 먼저 정의된 인터셉터가 먼저 실행된다.
- 인증 검사를 가장 먼저 수행하고 싶으므로 `AuthInterceptor`를 목록의 첫 번째에 둔다.

### 동작 확인
- ID 2로 GET 요청을 보내면 authorization이 없다는 메시지(authorization is missing)를 받아, `AuthInterceptor`가 정상 동작함을 확인한다.
- authorization 헤더에 잘못된(invalid) 비밀번호를 넣어 요청하면 invalid token 메시지를 받는다.
- 올바른 토큰(비밀번호) 값을 주면 사용자 데이터가 정상적으로 표시된다.

### 가드 vs 인터셉터 — 인증을 어디서 처리할 것인가
- 인증·인가를 가드로 처리하는 것과 인터셉터로 처리하는 것의 차이를 생각해볼 수 있는데, 일반적으로 **가드(guard)가 인증에 더 적합한 접근 방식(better approach)**으로 여겨진다.
- 다만 인터셉터도 요청과 응답이 목적지에 도달하기 전에 관리(manage)된다는 점을 고려하면, 인터셉터로 인증을 처리하는 것 자체가 잘못된 것은 아니며 추가적인 보안 계층(additional layer of security)으로 활용할 수 있다.
- 예를 들어 JWT 토큰을 다룰 때는 디코딩(decoding) 부분을 인터셉터가 처리하고, 가드는 유효한 사용자를 인가하는 데에만 집중하도록 역할을 나눌 수 있다.

## 예시
```typescript
// interceptors/auth.interceptor.ts
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  constructor(private readonly userService: UserService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization'];

    if (!token) {
      throw new UnauthorizedException('Missing authorization token');
    }

    const userId = request.params.id;
    const user = this.userService.findOne(userId);

    if (!user || user.password !== token) {
      throw new UnauthorizedException('Invalid token, given ID does not exist');
    }

    return next.handle();
  }
}
```

```typescript
// 컨트롤러 - AuthInterceptor를 먼저 실행하도록 첫 번째로 등록
@Get(':id')
@UseInterceptors(AuthInterceptor, UserDataTransformInterceptor)
getData(@Param('id') id: string) {
  return this.userService.findOne(+id);
}
```

## 요약
- `AuthInterceptor`는 authorization 헤더 값을 `token`으로, 사용자 비밀번호를 인증 기준으로 삼아 토큰이 없거나 일치하지 않으면 `UnauthorizedException`을 던진다.
- `@UseInterceptors()`에 여러 인터셉터를 나열할 때는 정의된 순서대로 실행되므로, 인증처럼 먼저 확인해야 하는 로직의 인터셉터를 앞에 배치해야 한다.
- 인증·인가는 일반적으로 가드가 더 나은 접근 방식으로 여겨지지만, 인터셉터도 추가 보안 계층으로 활용할 수 있다.
- JWT 같은 토큰을 다룰 때는 디코딩은 인터셉터가, 인가 판단은 가드가 맡는 식으로 역할을 분리할 수 있다.
