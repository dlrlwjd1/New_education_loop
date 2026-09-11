# Validating Regex Pattern

## 개요
- `class-validator`의 `@Matches()` 데코레이터로 정규식 패턴(regex pattern) 기반 검증을 수행하는 방법을 실습하고, 이 검증자가 문자열 입력값을 기대한다는 점 때문에 발생하는 문제와 해결책을 다루는 강의.

## 내용
### @Matches() 데코레이터
- 정규식 패턴을 검증하기 위해 `class-validator`는 **`@Matches()`**라는 전용 데코레이터를 제공하며, 패턴 기반 검증(pattern based validation)에 흔히 사용된다.
- `AuthDto` 클래스의 `phone` 프로퍼티에 패턴을 적용해본다. 기존에 있던 `@MaxLength()` 검증자를 제거하고 대신 `@Matches()` 데코레이터를 적용한다. 이 데코레이터는 정규 표현식(regular expression) 패턴을 인자로 받는다.

### 패턴 정의
- 패턴은 `^` 기호로 시작하고, 대괄호 안에 `0-9`를 지정해 문자 집합(character set)을 정의한다. 이는 0부터 9까지의 숫자 하나와 매칭됨을 의미한다.
- 숫자가 반복될 수 있으므로 중괄호 `{}` 안에 범위(range) 값 `10,11`을 지정한다. 즉 전화번호는 정확히 10자리 또는 11자리 숫자여야 한다.
- 패턴의 끝을 표시하기 위해 `$` 기호를 추가한다.
- `message` 프로퍼티로 `"Phone number must be exactly 10 or 11 digits"`라는 메시지도 함께 지정한다.

### 발생하는 문제 — 숫자 타입과의 충돌
- Postman에서 잘못된 전화번호를 전달해 요청하면 검증 메시지가 표시된다. 이는 패턴이 실제로 값을 검사하고 있음을 보여준다.
- 그런데 유효한 전화번호를 전달해도 동일한 검증 메시지가 표시된다. 이는 `@Matches()` 데코레이터가 패턴 검증을 위해 문자열(string) 입력값을 기대하기 때문이다. `@Matches()`는 원래 그렇게 동작한다.

### 해결 — phone을 문자열로 변경
- 간단한 해결책은 전화번호 값을 문자열 값으로 바꾸는 것이다. `@IsNumber()` 대신 `@IsString()` 검증자를 적용하고, 타입도 `string`으로 변경한다.
- Postman에서 전화번호를 문자열 값으로 주고 요청하면 데이터가 성공적으로 반환된다. 잘못된 값을 주면 다시 검증 메시지가 표시된다.
- 이렇게 정규 표현식 패턴 검증이 NestJS에서 수행된다.
- 참고로 전화번호를 숫자(number) 값으로 유지하고 싶다면, 커스텀 파이프(custom pipe)를 만들어 패턴을 명시적으로 정의해야 한다. 이는 다음 강의인 커스텀 파이프 만들기에서 다룬다.

## 예시
```typescript
// auth/auth.dto.ts
import { IsOptional, IsString, Matches } from 'class-validator';

export class AuthDto {
  // ...
  @IsOptional()
  @IsString()
  @Matches(/^[0-9]{10,11}$/, {
    message: 'Phone number must be exactly 10 or 11 digits',
  })
  phone: string;
}
```

## 요약
- `@Matches()`는 정규 표현식 패턴으로 값을 검증하는 `class-validator` 데코레이터다.
- `@Matches()`는 문자열 입력값을 기대하므로, 필드 타입이 number이면 패턴이 유효한 값에도 검증 오류를 발생시킨다.
- phone 필드의 타입을 `@IsString()` + `string`으로 바꾸면 정규식 패턴 검증이 정상적으로 동작한다.
- 필드를 number 타입으로 유지하면서 패턴 검증을 하고 싶다면 커스텀 파이프(custom pipe)를 만들어야 한다.
