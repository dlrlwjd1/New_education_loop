# Custom Validation Messages

## 개요
- `class-validator` 검증자 데코레이터에 커스텀 검증 메시지(custom validation message)를 지정하는 방법과, `$constraint1` 같은 특수 토큰(special token)으로 동적 값을 메시지에 포함시키는 방법을 실습하는 강의.

## 내용
### message 옵션으로 커스텀 메시지 지정
- 여러 검증자 데코레이터에 커스텀 검증 메시지를 지정할 수 있다. 예로 길이(length) 관련 검증에 커스텀 메시지를 적용해본다.
- `@MinLength()` 검증자에 커스텀 메시지를 지정하려면, 검증자 인자 안에 옵션 객체(optional object)를 추가로 넣고 그 안에 `message` 프로퍼티를 지정한다.
- `message` 프로퍼티에는 해당 검증자에 대한 커스텀 검증 메시지를 지정한다. 예: `"Password is too short, minimal length required is of 8 characters"`.
- 이렇게 하면 검증이 실패했을 때 이 메시지가 반환되어 사용자에게 비밀번호가 너무 짧다는 것을 알려준다.
- Postman에서 6자리 비밀번호로 요청하면 지정한 커스텀 검증 메시지가 표시된다.

### 특수 토큰 — $constraint1
- 메시지 안에서 고정된 숫자(static digit)를 직접 쓰는 대신, 검증자에 주어진 제약(constraint) 값을 동적으로 표시하고 싶다면 `$constraint1` 같은 특수 토큰을 사용할 수 있다.
- 이 토큰은 검증자에 지정된 제약 값을 그대로 가져와 표시한다.
- 비밀번호를 3자리로 바꿔서 요청하면 메시지에 제약 값 8이 동적으로 표시된다.
- 검증자에 제약이 여러 개 있는 경우 원하는 만큼 제약 번호를 사용할 수 있으며, `$constraint1` 외에도 세 가지의 특수 토큰이 더 존재해 필요에 따라 사용할 수 있다.
- `@MaxLength()` 검증자에도 커스텀 메시지 `"Password should be within $constraint1 characters length"`를 지정할 수 있다. 비밀번호 길이를 초과해 요청하면 길이 초과에 대한 검증 메시지가 표시된다.
- `message` 프로퍼티는 함수(function)를 받아서 로직을 실행하고 그 로직에 따라 오류 메시지를 반환하게 만들 수도 있다. 이 방식은 이후 강의에서 다룬다.

### message 옵션이 지원되지 않는 검증자도 있음
- 모든 검증자가 `message` 프로퍼티를 지원하는 것은 아니다. 예를 들어 `@IsEmail()` 검증자 안에 `message` 프로퍼티를 지정하려고 하면, 이 타입에서는 `message` 프로퍼티가 지원되지 않는다는 오류가 표시된다.

## 예시
```typescript
// auth/auth.dto.ts
import { IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class AuthDto {
  @IsNotEmpty()
  @MinLength(8, {
    message: 'Password is too short, minimal length required is of $constraint1 characters',
  })
  @MaxLength(15, {
    message: 'Password should be within $constraint1 characters length',
  })
  password: string;
}
```

## 요약
- 검증자 데코레이터의 인자에 옵션 객체를 추가하고 `message` 프로퍼티를 지정하면 커스텀 검증 메시지를 만들 수 있다.
- `$constraint1`과 같은 특수 토큰을 사용하면 검증자에 지정된 제약 값을 메시지 안에 동적으로 표시할 수 있다.
- `message` 프로퍼티는 함수를 받아 동적으로 메시지를 생성하는 것도 가능하다 (이후 강의에서 다룸).
- 모든 검증자가 `message` 옵션을 지원하는 것은 아니며, 예를 들어 `@IsEmail()`은 `message` 프로퍼티를 지원하지 않는다.
