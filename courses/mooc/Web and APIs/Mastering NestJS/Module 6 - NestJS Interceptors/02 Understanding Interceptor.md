# Understanding Interceptor

## 개요
- 인터셉터(interceptor)를 CLI로 생성하는 방법과 기본 보일러플레이트 코드의 구조(import, `intercept` 메서드)를 분석하고, 실제로 간단한 로깅용 인터셉터를 구현해 컨트롤러에 적용해보는 실습 강의.

## 내용
### 인터셉터 생성 명령어
- 인터셉터를 생성하는 명령어는 `nest generate interceptor`이며, 짧게 `nest g in`으로도 쓸 수 있다.
- 강의에서는 폴더 이름으로 `interceptors`, 인터셉터 이름으로 `test`를 지정하고, `--no-spec` 옵션을 붙여 스펙(spec) 파일 없이 생성했다.

### 기본 보일러플레이트(boilerplate) 코드 분석
- `CallHandler` 인터페이스(interface): 요청을 처리하고 응답을 만들어내는 핸들러(handler)를 나타내는 인터페이스다.
- `ExecutionContext` 인터페이스: 가드(guard) 부분에서 이미 다뤘던 것과 같은 인터페이스로, 요청과 응답 객체에 대한 세부 정보를 얻을 때 사용한다.
- `Injectable` 데코레이터(decorator): 클래스를 인젝터블(injectable)로 표시해 애플리케이션의 다른 부분에 주입(inject)될 수 있게 한다.
- `NestInterceptor` 인터페이스: 인터셉터 클래스가 반드시 구현(implement)해야 하는 인터페이스로, 요청·응답을 가로채는 모든 로직을 정의하는 `intercept` 메서드를 제공한다.
- 인터셉터는 주로 비동기(asynchronous) 작업을 다루기 때문에 `Observable` 클래스도 함께 import되며, 이것이 `intercept` 메서드의 기본 반환 타입(return type)이다. 반환 타입은 `Promise`가 될 수도 있지만 기본값은 `Observable`이다.

### intercept 메서드
- `intercept` 메서드는 `NestInterceptor` 인터페이스로부터 오며 두 개의 인자를 받는다.
  - `context` 인자: `ExecutionContext` 타입으로, 요청·응답 객체와 관련 메타데이터(metadata)를 얻을 수 있다.
  - `next` 인자: `CallHandler` 타입으로, 요청을 처리하고 `Observable`을 반환하며 인터셉터가 체인(chain)상의 다음 핸들러로 제어(control)를 넘길 수 있게 해준다.
- `next.handle()` 메서드는 `CallHandler` 인터페이스가 제공하며, 인터셉터를 마무리(end)하기 위해 반드시 호출해야 한다. 이 메서드 호출 없이는 인터셉터가 라우트 핸들러를 전혀 실행시키지 못한다.
- 라우트 핸들러에 도달하기 전에 실행하고 싶은 로직은 `next.handle()`을 호출하기 전에 배치한다.
- 라우트 핸들러가 요청을 처리한 이후의 응답을 다루려면 `next.handle()`이 반환하는 `Observable`에 RxJS 연산자(operator)를 사용한다.

### 간단한 예제 구현
- `date` 상수를 만들고 `Date.now()`를 대입한다.
- `next.handle()` 호출 전에 콘솔(console) 로그로 "인터셉터가 처리되기 전(before)"이라는 메시지를 출력한다.
- 응답 이후 처리를 위해 `next.handle()`이 반환하는 `Observable`에 `.pipe()` 메서드를 사용해 연산자(operator)를 체이닝(chain)한다.
- `tap` 연산자를 사용해 응답을 변경하지 않으면서 부수 작업(side execution)을 수행한다.
- `tap` 안에서 `Date.now()` 값과 처음 저장했던 `date` 값의 차이(differential value)를 콘솔에 출력해 정확한 밀리초(millisecond) 값을 확인한다.
- 컨트롤러에는 경로를 `all`로 지정한 `GET` 라우트 핸들러 `getAll` 메서드를 만들고, `"interceptor executed"`라는 메시지를 반환하도록 한다.
- 인터셉터를 라우트 핸들러에 바인딩(bind)하려면 `@UseInterceptors()` 데코레이터를 사용하고 여기에 `TestInterceptor`를 등록한다.
- Postman에서 해당 경로로 요청을 보내면, 터미널(terminal)에 응답 처리에 걸린 시간 값(예: 3밀리초)이 출력되는 것을 확인한다.

## 예시
```typescript
// interceptors/test.interceptor.ts
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class TestInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const date = Date.now();
    console.log('before the interceptor is processed');

    return next.handle().pipe(
      tap(() => {
        console.log(`after: ${Date.now() - date}ms`);
      }),
    );
  }
}
```

```typescript
// 컨트롤러에서 사용 예시
import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { TestInterceptor } from './interceptors/test.interceptor';

@Controller()
export class AppController {
  @Get('all')
  @UseInterceptors(TestInterceptor)
  getAll(): string {
    return 'interceptor executed';
  }
}
```

## 요약
- 인터셉터는 `nest generate interceptor`(`nest g in`) 명령으로 생성한다.
- 인터셉터 클래스는 `NestInterceptor` 인터페이스를 구현하며, 핵심은 `intercept(context, next)` 메서드다.
- `next.handle()` 호출 전 로직은 요청 처리 전, `.pipe()`로 체이닝한 RxJS 연산자(예: `tap`) 로직은 응답 처리 후에 실행된다.
- `next.handle()`을 호출하지 않으면 라우트 핸들러가 아예 실행되지 않는다.
- 인터셉터는 `@UseInterceptors()` 데코레이터로 라우트 핸들러(또는 컨트롤러, 전역)에 바인딩한다.
