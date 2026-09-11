# Understanding ArgumentMetadata (metadata.data)

## 개요
- `ArgumentMetadata`의 세 번째 프로퍼티인 **`data`**를 살펴보고, 이 값이 `@Body()`, `@Param()` 같은 요청 데코레이터의 괄호 안에 전달된 문자열임을 확인한 뒤, 이를 이용해 특정 프로퍼티에만 변환 로직을 적용하는 방법을 실습하는 강의.

## 내용
### metadata.data란
- 애플리케이션이 요청을 받으면 body, params, queries 등 다양한 형태의 데이터가 함께 전달된다. `metadata.data`는 이런 데이터 각각이 어떤 종류의 데이터인지 알려주는 중요한 정보를 제공하며, 이는 애플리케이션이 데이터를 정확하게 처리하는 데 도움이 된다.

### data 값 확인 — @Body('dob')
- 앞서 만든, 날짜를 UTC 문자열로 변환하는 커스텀 파이프를 계속 사용한다. 컨트롤러에서는 날짜 값이 요청 본문(request body)을 통해 전달되어 엔드포인트에서 수신된다.
- `metadata.data`를 콘솔에 출력해본다. Postman에서 이미 준비된 요청으로 요청을 보내면 날짜가 UTC 문자열로 변환되고, 터미널에서는 엔드포인트에서 받는 프로퍼티인 `dob`가 data 값으로 표시된다.
- `data` 프로퍼티가 어떻게 `dob`라는 값을 갖게 되었을까? 답은 간단하다. `@Body()` 데코레이터의 괄호 안에 `dob`를 전달했기 때문이며, 이 `dob`는 Postman에서 전달된 요청 본문의 일부다.

### 값을 바꾸면 data도 바뀐다 — name, id
- 프로퍼티 값을 `dob` 대신 `name`으로 바꿔 다시 요청하면 터미널에는 data 값으로 `name`이 표시된다.
- `@Param()` 데코레이터에 `id`를 전달한 경우도 동일하게 확인해보면, 요청을 보낼 때 터미널에는 data 값으로 `id`가 표시된다.
- 이를 통해 `ArgumentMetadata`의 `data` 프로퍼티는 요청 데코레이터의 괄호 안에 전달된 값을 그대로 담고 있음을 명확히 알 수 있다. `data` 프로퍼티는 Nest 애플리케이션의 다양한 부분에서 데이터를 처리하고 다룰 때 매우 유용하게 쓰일 수 있다.

### data를 이용해 특정 필드만 변환하기
- 컨트롤러 파일을 수정해 `@Body()` 데코레이터에 `name`과 `email` 값을 각각 전달하도록 하고, 반환하는 데이터도 함께 갱신한다.
- 이 상태에서 요청하면 모든 데이터가 대문자(upper case)로 변환된다. 커스텀 파이프에서 요청 타입이 `body`이면 값을 무조건 대문자로 변환하도록 되어 있기 때문이다.
- 여기에 조건을 하나 추가한다. `metadata.data`가 `name`일 때만 값을 대문자로 변환하도록 조건을 건다. 이렇게 하면 오직 name 값만 변환되고 나머지(email)는 그대로 유지된다.
- 다시 요청해보면 실제로 name 값만 대문자로 변환되고 email 값은 그대로 반환된다.
- 이처럼 `metadata.data`를 이용하면 들어오는 데이터 중 특정 종류의 데이터만 골라 처리할 수 있다.

## 예시
```typescript
// custom-pipe/phone.pipe.ts
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PhonePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(metadata.data);

    if (metadata.type === 'body' && metadata.data === 'name') {
      value = value.toUpperCase();
    }

    return value;
  }
}
```

```typescript
// auth/auth.controller.ts
@Post('register')
@UsePipes(new PhonePipe())
registerUser(
  @Body('name') name: string,
  @Body('email') email: string,
) {
  return { name, email };
}
```

## 요약
- `metadata.data`는 `@Body()`, `@Param()`, `@Query()` 같은 요청 데코레이터의 괄호 안에 전달된 문자열 값을 그대로 담고 있다.
- 데코레이터에 지정한 프로퍼티 이름(`dob`, `name`, `id` 등)이 그대로 `data` 값으로 나타난다.
- `metadata.type`과 `metadata.data`를 함께 조건으로 사용하면, 여러 필드가 전달되는 상황에서도 원하는 특정 필드에만 변환·검증 로직을 선택적으로 적용할 수 있다.
