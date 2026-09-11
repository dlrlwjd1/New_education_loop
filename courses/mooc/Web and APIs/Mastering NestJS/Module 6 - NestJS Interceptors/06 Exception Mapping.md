# Exception Mapping

## 개요
- 인터셉터(interceptor)로 응답 스트림에서 발생한 에러(exception)를 가로채 원하는 예외로 매핑(mapping)하는 방법을 다루는 강의. RxJS의 `catchError` 연산자(operator)를 이용해 유효하지 않은 ID 파라미터로 발생하는 에러를 다룬다.

## 내용
### catchError 연산자로 에러 가로채기
- 인터셉터의 또 다른 유용한 활용 사례는 응답에서 발생한 예외를 매핑(mapping exceptions with the response)하는 것이다.
- 파라미터로 전달된 유효하지 않은(invalid) ID에 대해 에러를 발생시키는 시나리오를 예로 든다.
- 기존 코드의 `map` 연산자 뒤에 RxJS 라이브러리의 `catchError` 연산자를 추가한다.
- `catchError`는 옵저버블 스트림(observable stream)에서 발생한 에러를 잡아내는 연산자로, 폴백(fallback) 역할을 하며 에러 처리 로직을 다룰 수 있게 해준다.
- 에러가 발생하면 콜백(callback)에 에러 인자를 넘겨받아 처리할 수 있지만, 꼭 필요하지 않다면 `throwError` 연산자로 새로운 에러를 던지기만 해도 된다.
- 여기서는 `new NotFoundException('Please give a valid ID')`를 던진다.
- 이렇게 하면 옵저버블 스트림에서 발생한 어떠한 에러든 지정한 `NotFoundException`으로 대체(replace)되어 잡힌다.
- 유효하지 않은 ID로 요청을 보내면 빈 응답(empty response)이 오는 것을 확인하는데, 이는 `catchError`가 `handle()` 메서드에 적용되어 응답 객체(response object)에서 발생한 에러를 처리하고 있기 때문이다.

### 컨트롤러에서 예외 던지기
- 요청 시 에러를 잡으려면 컨트롤러 파일도 함께 수정해야 한다.
- `findOne` 메서드의 결과를 `user`라는 상수에 담고, `if` 조건으로 사용자가 존재하지 않으면(즉 ID가 유효하지 않으면) `new NotFoundException`을 던지고, 그렇지 않으면 `user`를 반환한다.
- 컨트롤러에서는 어떤 커스텀 예외를 던져도 상관없다. 인터셉터의 `catchError`에 지정한 것과 반드시 같은 예외를 던져야 하는 것은 아니다.
- 하지만 인터셉터의 `catchError`가 응답 에러를 가로채므로(intercept), 컨트롤러에 메시지를 다르게 지정하더라도 인터셉터 안에서 잡힌 에러가 우선 적용된다.
- 실제로 요청을 다시 보내면, 인터셉터에서 지정한 메시지가 담긴 `NotFoundException`을 받게 된다. 이는 인터셉터가 클라이언트에 도달하기 전에 응답을 직접 다루기 때문이다.

### catchError를 제거했을 때의 차이
- 인터셉터의 `catchError` 코드를 주석 처리(comment out)하고 다시 요청을 보내면, 에러 메시지가 컨트롤러 파일에서 지정한 메시지로 바뀌는 것을 확인할 수 있다.
- 이는 더 이상 인터셉터가 에러를 가로채지 않고, 컨트롤러가 직접 에러를 던지기 때문이다.
- 결론적으로 클라이언트에 응답이 전달되기 전에 에러를 수정하거나 가로채는 데 인터셉터는 매우 유용한(very handy) 도구다.

## 예시
```typescript
// interceptors/user-data-transform.interceptor.ts (일부)
import { catchError, map } from 'rxjs/operators';
import { NotFoundException } from '@nestjs/common';
import { throwError } from 'rxjs';

intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
  return next.handle().pipe(
    map((data) => {
      // ... 기존 변환 로직
      return data;
    }),
    catchError(() => throwError(() => new NotFoundException('Please give a valid ID'))),
  );
}
```

```typescript
// 컨트롤러
@Get(':id')
@UseInterceptors(UserDataTransformInterceptor)
getData(@Param('id') id: string) {
  const user = this.userService.findOne(+id);
  if (!user) {
    throw new NotFoundException('User not found');
  }
  return user;
}
```

## 요약
- RxJS의 `catchError` 연산자를 `map` 뒤에 체이닝하면 응답 스트림에서 발생한 에러를 가로채 원하는 예외로 대체할 수 있다.
- `catchError`가 있으면 컨트롤러에서 어떤 메시지의 예외를 던지든 인터셉터에서 지정한 예외 메시지가 우선 적용된다.
- `catchError`를 제거하면 컨트롤러가 던진 예외가 그대로 클라이언트에 전달된다.
- 인터셉터를 이용한 예외 매핑은 응답이 클라이언트에 도달하기 전에 에러를 통일된 형태로 다루고 싶을 때 유용하다.
