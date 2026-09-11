# Understanding ArgumentMetadata (metadata.type)

## 개요
- 커스텀 파이프의 `transform` 메서드가 받는 두 번째 파라미터 **`ArgumentMetadata`**의 구조를 소개하고, 그중 `type` 프로퍼티를 이용해 인자(argument)의 종류(body, param 등)에 따라 다른 처리를 적용하는 방법을 실습하는 강의.

## 내용
### ArgumentMetadata란
- 커스텀 파이프는 두 개의 파라미터를 받는다. 하나는 `value`로, 요청 본문(body)이나 파라미터(params), 쿼리(queries)로 전달된 데이터를 나타낸다.
- 다른 하나는 `metadata`로, 타입은 `ArgumentMetadata`이며 인자로 전달된 데이터에 관한 추가 정보(additional information)를 나타낸다. 이 metadata는 처리 중인 인자의 타입(type), 이름(name), 그리고 적용된 추가 데코레이터나 옵션 같은 컨텍스트(context) 정보를 제공한다.
- `ArgumentMetadata`는 `type`, `metatype`, `data` 세 가지 프로퍼티를 가지며, `transform` 메서드 안에서 이 프로퍼티들에 접근할 수 있다. 이번 강의에서는 그중 `type` 프로퍼티를 예제로 다룬다.

### type 프로퍼티 확인
- 커스텀 파이프의 `transform` 메서드 안에서 `metadata.type`을 콘솔에 출력(console log)해 어떤 값이 반환되는지 확인한다.
- Postman에서 이미 정의된 요청 본문으로 요청을 보내면 데이터가 반환되며, 터미널을 확인하면 `type`의 콘솔 출력 값으로 `body`가 표시된다. `type` 프로퍼티는 처리 중인 인자의 타입을 나타내며, 그 인자가 요청의 어느 위치에 있는지(body, query param, headers 등) 정보를 제공한다.
- 예를 들어 컨트롤러에서 `@Body()` 대신 `@Param()` 데코레이터를 사용하도록 바꾸고 나머지는 그대로 둔 뒤 Postman에서 다시 요청하면, 터미널에는 `type`으로 `param`이 표시된다.

### type에 따라 다르게 동작시키기
- `type` 프로퍼티를 이용하면 커스텀 파이프 안에서 데이터 처리 로직을 특정 조건에 따라 다르게 실행할 수 있다.
- 데이터를 대문자(upper case)로 변환하는 예를 들어본다. 먼저 앞서의 변경을 되돌려 다시 `@Body()` 데코레이터를 사용하도록 한다.
- 커스텀 파이프 안에서 `if (metadata.type === 'body')` 조건을 주고, 조건이 참이면 `toUpperCase()` 메서드로 값을 대문자로 변환한다.
- Postman에서 요청하면 name 값이 대문자로 변환되어 반환된다. 즉 인자 타입이 `body`일 때만 데이터가 변환된다.
- 데코레이터를 다시 `@Param()`으로 바꾸면 데이터는 그대로 반환되고 name 값은 대문자로 변환되지 않는다.
- 이처럼 `metadata`의 `type` 프로퍼티를 이용해 인자의 타입에 따라 데이터를 처리하거나 변환할 수 있다.

## 예시
```typescript
// custom-pipe/phone.pipe.ts
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PhonePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(metadata.type); // 'body' 또는 'param' 등

    if (metadata.type === 'body') {
      value.name = value.name.toUpperCase();
    }

    return value;
  }
}
```

## 요약
- `ArgumentMetadata`는 파이프의 `transform` 메서드가 받는 두 번째 인자로, `type`, `metatype`, `data` 세 프로퍼티를 가진다.
- `metadata.type`은 처리 중인 인자가 `body`, `param`, `query` 등 요청의 어느 위치에서 왔는지를 나타낸다.
- `metadata.type` 값에 따라 조건 분기를 두면 body 파라미터일 때만 변환을 적용하는 것처럼 인자 타입별로 다른 데이터 처리 로직을 구현할 수 있다.
