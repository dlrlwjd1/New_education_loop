# Assignment - Transforming Response Data

## 개요
- 응답 데이터에 새로운 프로퍼티(property)를 추가해 변환(transform)하는 인터셉터(interceptor)를 만드는 실습 과제 강의. RxJS의 `map` 연산자(operator)를 이용해 서버가 보내는 응답에 추가 정보를 붙이는 실제 시나리오를 구현한다.

## 내용
### 과제 목표
- 서버가 보내는 응답과 함께 클라이언트에 추가적인 세부 정보(additional details)를 붙이고 싶은 실무 시나리오를 가정하고, 이를 인터셉터로 구현한다.
- `nest generate interceptor`(`nest g in`) 명령으로 `interceptors/response-transform` 인터셉터를 `--no-spec` 옵션과 함께 생성한다.

### map 연산자로 응답 변환하기
- 응답을 직접 다루려면 `next.handle()` 뒤에 `.pipe()`로 연산자를 체이닝(chain)해야 한다.
- `map` 함수는 RxJS 연산자로, 소스 옵저버블(source observable)이 방출(emit)하는 값을 변환(transform)하는 역할을 한다.
- 비유하자면 `map`은 리스트의 각 항목을 바꾸는 함수와 같다. 숫자 리스트에 1을 더하는 `map`을 적용하면 모든 숫자가 1씩 증가한 새 리스트가 만들어지는 것과 같은 원리다.
- 다만 여기서는 리스트 대신 옵저버블(observable), 즉 시간에 따라 도착하는 데이터 스트림(stream)을 다룬다. `map` 연산자는 도착하는 각 데이터 조각을 받아 함수를 적용해 변경한 뒤 그 변경된 데이터를 전달한다.
- 내부적으로는 데이터 스트림이 `next.handle()`로 전달되고, 그 데이터가 다시 `map` 연산자로 전달되어 거기서 수정(modification)이 일어난다.

### 변환 로직 구현
- `map`은 콜백 함수(callback function)를 받는다. `data` 인자를 받아서 스프레드 연산자(spread operator)로 원본 데이터를 그대로 펼친 뒤 반환한다.
- 여기에 `transformed`라는 커스텀 프로퍼티를 추가하고 값을 `true`로 설정한다. 이는 응답이 변환/수정되었다는 정보를 전달하는 플래그(flag) 역할을 하며 필수는 아니다.
- 또한 `timestamp` 프로퍼티를 추가하고 `new Date().toISOString()` 값을 대입한다.

### 컨트롤러 정의와 바인딩
- `GET` 라우트 핸들러를 경로 `get`으로 정의하고 `getData` 메서드를 만들어 메시지(message)를 담은 객체를 반환하도록 한다.
- 이 응답 데이터는 `next.handle()`로 전달되고, `map` 연산자가 변환을 수행한다.
- `@UseInterceptors()` 데코레이터로 `TransformInterceptor`를 라우트 핸들러에 바인딩(bind)한다.
- Postman에서 해당 경로로 GET 요청을 보내면, 응답에 `transformed: true`와 `timestamp` 프로퍼티가 추가된 변환된 데이터를 확인할 수 있다.

### 미들웨어와의 차이
- 이런 종류의 변환 작업은 항상 미들웨어(middleware)로 처리할 수 있는 것은 아닌데, 미들웨어는 요청을 다르게 처리하기 때문이다.
- 반면 인터셉터는 클라이언트가 응답을 받기 전에 응답 데이터를 바로 변경할 수 있게 해주므로, 클라이언트가 받기 직전에 데이터를 특정 방식으로 수정하거나 추가하는 데 매우 유용하다.

## 예시
```typescript
// interceptors/response-transform.interceptor.ts
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseTransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => ({
        ...data,
        transformed: true,
        timestamp: new Date().toISOString(),
      })),
    );
  }
}
```

```typescript
// 컨트롤러에서 사용 예시
import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ResponseTransformInterceptor } from './interceptors/response-transform.interceptor';

@Controller()
export class AppController {
  @Get('get')
  @UseInterceptors(ResponseTransformInterceptor)
  getData() {
    return { message: 'This is the response data' };
  }
}
```

## 요약
- `map` 연산자는 `next.handle()`이 반환하는 옵저버블(observable)의 응답 데이터를 변환할 때 사용한다.
- 원본 데이터는 스프레드 연산자로 유지하면서 `transformed`, `timestamp` 같은 커스텀 프로퍼티를 추가할 수 있다.
- 인터셉터는 클라이언트에 도달하기 직전에 응답 데이터를 수정·보강할 수 있어, 이런 변환 작업에 미들웨어보다 적합하다.
