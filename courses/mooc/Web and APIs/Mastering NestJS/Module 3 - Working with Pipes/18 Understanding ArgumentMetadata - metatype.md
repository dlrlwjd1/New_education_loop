# Understanding ArgumentMetadata (metadata.metatype)

## 개요
- `ArgumentMetadata`의 두 번째 프로퍼티인 **`metatype`**을 살펴보고, 파라미터에 선언된 타입(String, Number, DTO 클래스, Date 등)에 따라 커스텀 파이프 안에서 서로 다른 변환 로직을 적용하는 방법을 실습하는 강의.

## 내용
### metatype 프로퍼티란
- `metatype` 프로퍼티는 클래스 정의(class definition)에서 선언된 인자(argument)의 타입을 나타낸다. 즉 그 인자가 기대하는 타입에 관한 정보를 제공한다.
- 예를 들어 body의 인자가 `name: string`으로 선언되어 있다면 `metatype`은 `string`이 된다. 타입 기반 연산이나 검증을 수행할 때 유용하다.

### 기본 타입에서 metatype 확인
- 커스텀 파이프 안에서 `metadata.metatype`을 콘솔에 출력해본다. Postman에서 POST 요청을 보내면 터미널에 `String` 타입의 함수(function)가 표시된다. 이는 해당 인자의 전체 타입이 `string`이기 때문이다.
- 즉 `metatype`은 NestJS에서 처리될 데이터 값의 타입을 나타낸다. 라우트와 컨트롤러를 정의할 때 `@Param()`, `@Body()` 같은 데코레이터로 파라미터 타입 등의 메타데이터를 지정하게 되는데, `metadata.metatype`이 이 파라미터가 기대하는 데이터 타입 정보를 제공한다.
- `number` 타입인 `id` 파라미터에 대해서도 확인해본다. GET 요청 탭에서 param에 4를 전달해 요청하면, 터미널에는 `Number` 타입의 함수가 표시된다.
- 여기서 나타나는 `function`은 id의 값 자체와 직접 관련된 것이 아니라, 해당 파라미터 타입을 나타내는 클래스 또는 생성자 함수(constructor function)를 가리킨다. `metadata.metatype`은 파라미터 타입을 표현하는 클래스의 생성자 함수에 대한 참조(reference)를 반환한다. 파라미터가 `number` 타입이므로 `metadata.metatype`은 숫자 타입을 나타내는 `Function Number`가 된다.
- 이렇게 로그를 남기는 것은 정보 확인용일 뿐이며, 파이프의 동작이나 파라미터 값 자체에는 영향을 주지 않는다.

### DTO 클래스를 파라미터 타입으로 지정한 경우
- 이번에는 파라미터 타입으로 DTO 클래스 자체를 지정하면 어떻게 되는지 확인한다. 앞서 작성한 코드를 주석 처리해 문제가 없도록 하고, body 파라미터에서 `name` 인자를 제거한다.
- Postman에서 요청하면 데이터가 정상적으로 반환되고, 터미널을 확인하면 `AuthDto` 타입의 클래스(class)가 표시된다. 즉 처리 중인 파라미터(데이터)는 해당 DTO 클래스가 정의한 구조(structure)를 따를 것으로 기대된다는 뜻이다.

### metatype이 Date인 경우 처리하기
- `if (metadata.metatype === Date)` 조건을 작성해, 조건이 참이면 날짜 값을 UTC 문자열(UTC string) 값으로 변환하고 싶다는 예제를 구현한다.
- `value` 파라미터를 `Date` 생성자의 인자로 전달해 Date 인스턴스로 만든다.
- 유효한 날짜 형식인지도 확인한다. `if (isNaN(value.getTime()))` 조건으로 날짜가 유효하지 않으면 `BadRequestException`으로 `"Invalid date format"` 오류를 던진다.
- 유효하다면 값을 UTC 문자열 형식으로 변환한다.
- 컨트롤러 파일에서 파라미터를 갱신한다. `dob`를 `Date` 타입으로 지정하고 body 인자로 받으며, 반환문(return statement)도 함께 갱신한다.
- Postman으로 돌아가 날짜 값을 설정해 요청하면 UTC 형식의 날짜 값이 반환된다. 터미널을 확인하면 `metatype`이 `Date` 생성자(Date constructor)로 표시된다.
- 이처럼 `metatype`, 즉 파라미터 타입을 이용하면 들어오는 데이터를 손쉽게 변환하거나 처리할 수 있다.

## 예시
```typescript
// custom-pipe/phone.pipe.ts
import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class PhonePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(metadata.metatype);

    if (metadata.metatype === Date) {
      const date = new Date(value);

      if (isNaN(date.getTime())) {
        throw new BadRequestException('Invalid date format');
      }

      value = date.toUTCString();
    }

    return value;
  }
}
```

```typescript
// auth/auth.controller.ts
@Post('register')
@UsePipes(new PhonePipe())
registerUser(@Body('dob') dob: Date) {
  return { dob };
}
```

## 요약
- `metadata.metatype`은 파라미터가 클래스 정의에서 선언된 타입(예: `String`, `Number`, `Date`, 또는 DTO 클래스 자체)의 생성자 함수(constructor function)에 대한 참조를 담고 있다.
- 파라미터 타입이 기본 타입(String, Number 등)이면 해당 타입의 생성자 함수가, DTO 클래스로 지정되어 있으면 그 DTO 클래스 자체가 `metatype`으로 표시된다.
- `metadata.metatype === Date`처럼 비교해 파라미터 타입이 특정 타입일 때만 원하는 변환·검증 로직(예: UTC 문자열 변환, 유효성 검사 후 `BadRequestException`)을 적용할 수 있다.
