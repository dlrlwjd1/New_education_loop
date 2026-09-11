# Validating Dates in NestJS

## 개요
- `class-validator`의 `@IsDate()`, `@IsDateString()` 검증자와 `class-transformer`의 `@Type()` 데코레이터를 함께 사용해 날짜(date) 필드를 검증하는 방법을 실습하는 강의.

## 내용
### @IsDate() 검증자
- 날짜를 검증하기 위해 `class-validator` 라이브러리는 **`@IsDate()`** 검증자를 제공한다. 이 검증자는 값이 Date 객체의 인스턴스(instance)인지 확인하며, 값이 유효한 JavaScript Date 객체일 것을 요구한다.
- `country` 필드 아래에 `dob`(date of birth)라는 `date` 타입 필드를 추가하고 `@IsDate()` 검증자를 적용한다.
- Postman에서 날짜 값을 전달해 요청하면 `dob` 필드가 Date 인스턴스여야 한다는 오류가 표시된다. `@IsDate()`는 `dob` 프로퍼티가 JavaScript Date 객체이기를 기대하는데, 검증 과정에서 전달된 값이 Date 객체의 인스턴스가 아니기 때문에 이런 오류가 발생한다.

### class-transformer의 @Type() 데코레이터
- 이 문제를 해결하려면 `class-transformer` 라이브러리를 사용해야 한다. 이 라이브러리는 값을 유효한 형식으로 변환해주는 다양한 변환(transformation) 데코레이터를 제공한다.
- 예를 들어 **`@Type()`** 데코레이터는 프로퍼티의 타입을 지정하며 함수를 인자로 받는다. Date 인스턴스를 원하므로 함수에서 `Date` 객체를 반환하도록 지정한다.
- 이렇게 적용한 뒤 다시 요청하면 데이터가 정상적으로 반환된다.

### 대안 — @IsDateString()
- 또 다른 날짜 검증자로 **`@IsDateString()`**이 있다. 이 검증자는 값이 유효한 날짜 문자열(date string)인지 확인한다.
- 이 검증자를 사용하면 `@Type()`을 이용한 명시적인 타입 변환이 필요 없다. `@IsDateString()`이 그 작업을 스스로 처리해준다.
- 다만 `@IsDateString()`은 ISO 8601 날짜 형식을 엄격하게 검사한다는 점을 기억해야 한다.
- 요청을 다시 확인하면 데이터가 정상적으로 반환되며, 시간(time) 값을 추가한 날짜로 다시 요청해도 정상적으로 처리된다.

## 예시
```typescript
// 방법 1: @IsDate() + class-transformer의 @Type()
import { IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class AuthDto {
  @IsDate()
  @Type(() => Date)
  dob: Date;
}
```

```typescript
// 방법 2: @IsDateString() (ISO 8601 형식, 별도 타입 변환 불필요)
import { IsDateString } from 'class-validator';

export class AuthDto {
  @IsDateString()
  dob: string;
}
```

## 요약
- `@IsDate()`는 값이 JavaScript Date 객체의 인스턴스인지 검증하며, 문자열로 전달된 날짜 값은 이 검증을 통과하지 못한다.
- `class-transformer`의 `@Type(() => Date)`를 함께 적용하면 문자열 값을 Date 인스턴스로 변환해 `@IsDate()` 검증을 통과시킬 수 있다.
- `@IsDateString()`은 값이 ISO 8601 형식의 유효한 날짜 문자열인지 검증하며, 별도의 타입 변환 없이도 날짜 문자열을 그대로 검증할 수 있다.
