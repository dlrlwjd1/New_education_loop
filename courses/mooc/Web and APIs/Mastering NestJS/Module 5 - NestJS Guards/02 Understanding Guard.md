# Understanding Guard

## 개요
- CLI 명령으로 가드(guard) 파일을 생성하고, 기본 보일러플레이트(boilerplate) 코드를 한 줄씩 분석한 뒤, 실제 라우트(route) 핸들러에 가드를 적용해 접근을 제어하는 방법을 실습하는 강의.

## 내용
### 가드 생성 명령어
- 가드를 생성하는 명령어는 `nest generate guard guards/auth --no-spec`이다. `guards`는 폴더 이름, `auth`는 가드 이름이며, `--no-spec` 옵션으로 스펙(spec) 파일 생성을 생략한다.
- 명령을 실행하면 가드 파일이 생성되고, 기본 보일러플레이트 코드가 채워진다.

### 보일러플레이트 코드 분석
- 모든 가드 파일은 `@Injectable()` 데코레이터가 붙어 있어서, 다른 컴포넌트나 모듈에 주입(inject)되어 사용될 수 있다.
- import 구문을 보면 `CanActivate`와 `ExecutionContext`라는 두 개의 중요한 인터페이스(interface)가 있으며, 가드 클래스는 이 인터페이스들을 구현(implement)한다.
- `rxjs` 라이브러리에서 `Observable` 클래스도 가져온다(import). Observable은 리액티브 프로그래밍(reactive programming)에 쓰이며, 비동기 데이터(asynchronous data)를 효과적으로 다루는 방법을 제공한다.
- `CanActivate`는 NestJS가 기본으로 제공하는 내장 인터페이스(built-in interface)로, 가드 파일에 기본적으로 구현되어 있다.
- `CanActivate`는 사실 한 종류의 가드이며 `canActivate`라는 함수를 정의한다. 이 함수는 특정 조건에 따라 라우트 핸들러(route handler)가 활성화(activate)되어야 하는지 여부를 제어하는 가드를 만드는 데 쓰인다.
- `canActivate` 함수는 `ExecutionContext` 타입의 `context` 파라미터를 받는다. `ExecutionContext`는 현재 요청(request)에 대한 정보, 즉 요청/응답/라우트 핸들러와 관련된 정보를 담고 있는 인터페이스다.
- `canActivate`의 반환 타입은 `boolean`일 수도 있고(기본값으로 `true`를 반환), boolean 값으로 리졸브(resolve)되는 `Promise`이거나, boolean 값을 방출(emit)하는 `Observable`일 수도 있다.
- 반환값은 현재 요청이 진행되도록 허용할지 여부를 나타내며, 동기적(synchronous, boolean)으로도 비동기적(asynchronous, Promise 또는 Observable)으로도 처리할 수 있다.

### 간단한 예제 구현
- 컨트롤러 파일을 열어 POST 라우트 핸들러를 정의하고 라우트를 `create`로 설정한다. `@Body()` 데코레이터로 요청 본문(request body)을 저장할 프로퍼티를 만든다. 이 메서드는 받은 데이터를 그대로 반환한다.
- 라우트 핸들러나 컨트롤러에 가드를 적용하려면 `@UseGuards()` 데코레이터를 사용하고, 괄호 안에 `AuthGuard`를 전달한다. 이렇게 하면 해당 POST 라우트 핸들러에 `AuthGuard`가 적용된다.
- 컨트롤러 전체에 가드를 적용하고 싶다면 `@UseGuards()`를 컨트롤러 클래스 바로 위에 놓으면 되며, 이 경우 컨트롤러 안의 모든 핸들러에 가드가 적용된다.
- 이 강의에서는 다시 라우트 레벨로 되돌려서(undo) 진행한다.
- 가드는 항상 모듈(module)의 `providers` 배열에도 등록해야 하며, 그래야 NestJS가 애플리케이션 전역에서 문제없이 가드를 주입하고 관리할 수 있다.

### Postman으로 동작 확인
- Postman에서 메서드를 POST로 바꾸고 라우트를 `localhost:3000/create`로 설정한 뒤, 요청 본문에 `id: 1`, `name: user A`를 넣어 요청을 보내면 데이터가 그대로 반환된다.
- `AuthGuard` 안의 반환문(return statement)을 `false`로 바꾼 뒤 다시 요청을 보내면, 상태 코드 403과 함께 forbidden 에러 메시지를 받는다.
- 이는 가드가 접근을 허용하지 않아 라우트 접근이 금지(forbidden)되었음을 보여준다. 이렇게 가드는 특정 조건에 따라 라우트 접근을 제어하고 제한하는 데 사용된다.

## 예시
```typescript
// guards/auth.guard.ts (nest generate guard guards/auth --no-spec 로 생성된 보일러플레이트)
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return true; // 강의 후반부에는 false로 바꿔 forbidden 응답을 확인
  }
}
```

```typescript
// app.controller.ts
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from './guards/auth.guard';

@Controller()
export class AppController {
  @Post('create')
  @UseGuards(AuthGuard)
  create(@Body() body) {
    return body;
  }
}
```

```json
// Postman POST /create 요청 body
{
  "id": 1,
  "name": "user A"
}
```

## 요약
- 가드는 `nest generate guard <폴더>/<이름> --no-spec` 명령으로 생성하며, 기본적으로 `@Injectable()`이 붙고 `CanActivate` 인터페이스를 구현한다.
- `canActivate(context: ExecutionContext)` 메서드는 `boolean`, `Promise<boolean>`, `Observable<boolean>` 중 하나를 반환해 요청 진행 여부를 결정한다.
- `@UseGuards(가드이름)`을 라우트 핸들러나 컨트롤러에 붙여 가드를 적용할 수 있으며, 컨트롤러에 붙이면 모든 핸들러에 적용된다.
- 가드는 반드시 모듈의 `providers` 배열에도 등록해야 한다.
- `canActivate`가 `false`를 반환하면 403 Forbidden 응답이 발생해 라우트 접근이 차단된다.
