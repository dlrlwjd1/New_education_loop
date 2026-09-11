# Data Validation with Interceptor

## 개요
- 예외를 매핑(mapping)했던 것처럼, 인터셉터(interceptor)로 클라이언트 요청(request)을 가로채(intercept) 요청 본문(body)의 데이터를 검증(validate)하는 방법과, 특정 라우트(route)에만 검증을 적용하도록 요청 메서드를 구분하는 방법을 다루는 강의.

## 내용
### 사용자 추가 기능 준비
- 사용자 서비스에 `addUser` 메서드를 만든다. `user: any`를 인자로 받아 `this.users.push(user)`를 반환한다.
- 요청 데이터를 검증하기 위해 `User` 인터페이스(interface)를 만들고 `id: number`, `name: string`, `email: string`, `password: string` 프로퍼티 타입을 지정한다.
- 컨트롤러에 POST 라우트 핸들러를 정의한다. 경로는 `create`, 메서드 이름도 `create`로 하고, `@Body()` 데코레이터로 `userData: any`를 받아 `this.userService.addUser(userData)`를 호출한 뒤 `"user added successfully"` 메시지를 반환한다.
- Postman에서 POST로 `localhost:3000/create`에 `{ id, name, email, password }` 형태의 요청 본문을 보내면 사용자 추가 메시지를 받고, GET 라우트에서 해당 ID로 조회하면 (이전 강의에서 만든 인터셉터 덕분에) 비밀번호 없이 사용자 데이터를 확인할 수 있다.

### 문제 상황 — 검증 없는 요청
- 요청 본문에서 `name` 값을 주지 않고 POST 요청을 보내도 사용자가 그대로 추가(added)되는 문제가 있다.
- 이를 막기 위해 요청이 라우트 핸들러 엔드포인트에 도달하기 전에 인터셉터로 가로채야 한다.

### 인터셉터에서 요청 본문 검증하기
- 인터셉터 안에서 `context.switchToHttp().getRequest()`로 요청 객체(request object)의 컨텍스트를 가져온다.
- 요청 본문에서 `id`, `name`, `email`, `password`를 구조 분해(destructure)한다.
- 조건문(condition)으로 `id`, `name`, `email`, `password` 중 하나라도 존재하지 않으면 `"A field value is missing. Please check again."`라는 메시지와 함께 `new BadRequestException`을 던진다.
- 이 인터셉터를 POST 라우트 핸들러에 등록(register)한다.
- 이름 값 없이 POST 요청을 보내면 의도한 대로 검증 메시지가 발생하는 것을 확인한다.

### 문제 상황 — GET 요청까지 영향받음
- GET 요청(ID 4)으로 조회를 시도해도 같은 검증 메시지가 뜨는 문제가 발생한다. 다른 ID로 요청해도 마찬가지로 같은 검증 메시지가 나온다.
- 이는 인터셉터가 요청 타입(request type)과 상관없이 **모든 요청**을 가로채기 때문이다. 결국 인터셉터는 요청과 응답 본문(body)을 가로채는데, GET 요청은 일반적으로 요청 본문이 없으므로 위 조건문에서 필드가 없다고 판단되어 GET 라우트에서도 `BadRequestException`이 발생하는 것이다.

### 해결 — 요청 메서드별로 검증 적용하기
- 검증을 더 요청 특정적(request specific)으로 만들기 위해, 인터셉터 로직에 `if (request.method === 'POST')` 조건을 추가해 POST 요청일 때만 검증을 수행하도록 수정한다.
- 수정 후 다시 확인하면, POST 요청 시에는 이름 값이 없을 때 검증 메시지가 정상적으로 뜨고, 다른 ID로 GET 요청을 하면 사용자 데이터가 정상적으로 표시된다.
- ID 4로 GET 요청을 하면, 이전에 검증 실패로 인해 ID 4인 사용자가 실제로 생성되지 않았으므로 유효하지 않은 ID라는 메시지를 받는다.
- 이처럼 인터셉터는 서버에 도달하기 전에 요청 데이터를 효과적으로 검증하는 데 사용할 수 있다.

## 예시
```typescript
// services/user.service.ts (일부)
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

addUser(user: any) {
  return this.users.push(user);
}
```

```typescript
// 컨트롤러
@Post('create')
@UseInterceptors(UserDataTransformInterceptor)
create(@Body() userData: any) {
  this.userService.addUser(userData);
  return 'user added successfully';
}
```

```typescript
// interceptors/user-data-transform.interceptor.ts (검증 로직 일부)
import { BadRequestException } from '@nestjs/common';

intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
  const request = context.switchToHttp().getRequest();

  if (request.method === 'POST') {
    const { id, name, email, password } = request.body;
    if (!id || !name || !email || !password) {
      throw new BadRequestException('A field value is missing. Please check again.');
    }
  }

  // ... 기존 map / catchError 로직
  return next.handle();
}
```

## 요약
- 인터셉터에서 `context.switchToHttp().getRequest()`로 요청 본문을 구조 분해해 필수 필드(`id`, `name`, `email`, `password`)의 존재 여부를 검증할 수 있다.
- 필드가 누락되면 `BadRequestException`을 던져 요청을 라우트 핸들러에 도달하기 전에 막을 수 있다.
- 인터셉터는 요청 타입과 무관하게 모든 요청을 가로채므로, 검증 로직을 특정 요청에만 적용하려면 `request.method` 값을 확인하는 조건을 추가해야 한다.
- 이렇게 요청 메서드를 구분해 검증하면 GET 요청 등 본문이 없는 요청에 불필요한 검증 에러가 발생하는 것을 막을 수 있다.
