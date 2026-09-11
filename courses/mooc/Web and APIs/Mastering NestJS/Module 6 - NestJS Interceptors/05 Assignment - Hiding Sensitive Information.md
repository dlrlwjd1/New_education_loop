# Assignment - Hiding Sensitive Information

## 개요
- 데이터베이스에서 사용자 데이터를 가져오는 엔드포인트(endpoint)에서, 클라이언트에 응답을 보내기 전에 비밀번호 같은 민감한 정보(sensitive information)를 인터셉터(interceptor)로 제거하는 실습 과제 강의.

## 내용
### 시나리오와 사용자 서비스 준비
- 사용자 데이터를 가져오는 엔드포인트가 있는 NestJS 앱에서, 응답을 클라이언트에 보내기 전에 비밀번호(password) 같은 민감 정보를 숨기거나 제거(hide or remove)하도록 사용자 데이터를 변환하는 인터셉터를 만든다.
- `nest generate service services/user --no-spec` 명령으로 사용자 서비스(user service) 파일을 생성한다.
- 서비스 안에 `private users` 배열 객체를 만들고, 각 사용자 객체에는 `id`, `name`, `email`, `password` 같은 프로퍼티(property)를 정의한다.
  - 예: `id: 1, name: 'User A', email: 'userA@example.com', password: 'secretkey1'`
  - 같은 방식으로 User B, User C 객체도 추가로 만든다.
- 사용자를 찾는 `findOne` 메서드를 정의한다. 이 메서드는 숫자(number) 타입의 `id`를 인자로 받아 `this.users.find(user => user.id === id)`로 해당 사용자를 반환한다.

### 컨트롤러에서 동적 ID 파라미터 처리
- 컨트롤러의 GET 라우트에 동적(dynamic) ID를 전달받도록 경로 파라미터를 설정한다.
- 생성자(constructor)를 통해 `UserService`를 주입(inject)한다.
- `getData` 메서드에서 `this.userService.findOne(...)`을 호출해 반환한다.
- `id`를 받기 위해 `@Param()` 데코레이터를 사용하고, `id` 프로퍼티는 문자열(string) 타입으로 저장된다.
- URL에서 가져오는 파라미터는 기본적으로 문자열이므로, 서비스 메서드가 숫자 타입을 요구할 때는 `+id` 문법으로 문자열을 숫자로 변환(shorthand for converting a string to a number)해야 한다. 변환하지 않으면 `Argument of type 'string' is not assignable to parameter of type 'number'` 같은 타입 오류가 발생한다.
- Postman에서 ID 파라미터를 `1`로 요청을 보내면 사용자 데이터가 반환되는데, 이때 `password` 필드도 함께 노출된다는 문제를 확인한다.

### 인터셉터로 비밀번호 필드 제거하기
- 사용자 데이터에서 비밀번호를 제거하는 `transformUser`라는 private 메서드를 정의한다. `any` 타입의 `user` 인자(단일 사용자 객체)를 받아 `any` 타입을 반환한다.
- 구조 분해 할당(destructuring)으로 `password` 필드를 분리해내고, 나머지 데이터는 `result` 상수에 저장한 뒤 이를 반환한다.
- 응답을 다루기 위해 `next.handle()`에 `.pipe()`와 `map` 연산자를 사용해 데이터를 순회(iterate)한다.
- `data`가 배열(array)인 경우에는 `map` 메서드로 각 항목에 `transformUser`를 적용해 비밀번호를 제거한다.
- `data`가 배열이 아니라 단일 객체(single object)인 경우에도(`typeof data === 'object'`) 마찬가지로 `transformUser`를 호출해 데이터를 정제(sanitize)한다.
- 최종적으로 처리된 `data`를 반환한다.
- `@UseInterceptors()` 데코레이터로 `UserDataTransformInterceptor`를 라우트 핸들러에 등록(register)한다.
- ID 1, 2, 3으로 각각 요청을 보내면 비밀번호(secret key) 필드가 응답에서 제거된 것을 확인할 수 있다.
- 이처럼 인터셉터를 이용하면 응답을 수정해 민감한 정보를 쉽게 숨기고, 클라이언트에는 필요한 데이터만 보낼 수 있다.

## 예시
```typescript
// services/user.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    { id: 1, name: 'User A', email: 'userA@example.com', password: 'secretkey1' },
    { id: 2, name: 'User B', email: 'userB@example.com', password: 'secretkey2' },
    { id: 3, name: 'User C', email: 'userC@example.com', password: 'secretkey3' },
  ];

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
```

```typescript
// 컨트롤러
import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserDataTransformInterceptor } from './interceptors/user-data-transform.interceptor';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  @UseInterceptors(UserDataTransformInterceptor)
  getData(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
}
```

```typescript
// interceptors/user-data-transform.interceptor.ts
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserDataTransformInterceptor implements NestInterceptor {
  private transformUser(user: any): any {
    const { password, ...result } = user;
    return result;
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        if (Array.isArray(data)) {
          return data.map((user) => this.transformUser(user));
        } else if (data && typeof data === 'object') {
          return this.transformUser(data);
        }
        return data;
      }),
    );
  }
}
```

## 요약
- 서비스에서 배열 형태로 관리하는 사용자 데이터에는 `password` 같은 민감 정보가 포함될 수 있다.
- URL 파라미터로 받은 `id`는 문자열이므로, 서비스가 숫자를 기대하면 `+id`로 변환해야 한다.
- 인터셉터의 `map` 연산자 안에서 응답이 배열인지 단일 객체인지 분기 처리해 각각 `transformUser`로 비밀번호를 제거할 수 있다.
- 구조 분해 할당으로 민감한 필드만 쏙 빼고 나머지를 반환하는 패턴을 활용한다.
- 인터셉터를 이용하면 클라이언트에 반드시 필요한 데이터만 응답으로 내려보낼 수 있다.
