# Validating Field Length

## 개요
- `class-validator`가 제공하는 `@Length()`와 `@MinLength()`/`@MaxLength()` 데코레이터로 필드 값의 길이(length)를 검증하는 방법을 실습하는 강의.

## 내용
### @Length() 검증자
- name 필드의 길이를 제한하기 위해 `@Length()` 검증자를 적용한다. 이 검증자는 최솟값(minimum length)과 최댓값(maximum) 두 개의 인자를 받을 수 있다.
- 최솟값을 3으로 설정한다. 인자를 하나만 주면 그 값은 최소 길이(min length)로 간주되고 최대 길이는 제한이 없어진다. 최대 길이만 지정하고 싶다면 콤마 뒤에 최댓값을 준다 (예: 20).
- 이렇게 하면 name 필드는 주어진 범위(3자 이상 20자 이하) 안에 있어야 한다.
- 이전에 name 필드에 붙였던 `@IsEmpty()` 검증자는 더 이상 필요 없으므로 제거한다.
- Postman에서 name 값을 한 글자만 주고 요청하면 `"name must be longer than or equal to 3 characters"` 검증 메시지가 표시된다.
- name 값을 20자를 초과하도록 주면 `"name must be shorter than or equal to 20 characters"` 메시지가 표시된다.
- 올바른 길이의 name 값을 주면 데이터가 정상적으로 반환된다.

### @MinLength() / @MaxLength() 검증자
- 최소 길이와 최대 길이를 각각 별도로 정의하는 또 다른 방법으로 `@MinLength()`와 `@MaxLength()`를 사용할 수 있다.
- password 필드에 `@MinLength(8)`을 적용하면 비밀번호는 최소 8자 이상이어야 한다.
- `@MaxLength(15)`를 적용하면 비밀번호는 15자를 초과할 수 없다.
- 이 길이 검증자들은 모두 동일하게 동작하며, 차이는 제약 조건을 정의하는 방식뿐이다. `@Length()`는 정확한 범위를 한 번에 강제하고, `@MinLength()`/`@MaxLength()`는 최소·최대를 각각 따로 강제한다.
- 조건을 충족하지 않는 password로 요청하면 `"password must be longer than or equal to 8 characters"` 검증 메시지가 표시된다.

## 예시
```typescript
// auth/auth.dto.ts
import { IsEmail, IsNotEmpty, Length, MinLength, MaxLength } from 'class-validator';

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(15)
  password: string;

  @Length(3, 20)
  name: string;
}
```

## 요약
- `@Length(min, max)`는 필드 값의 길이를 지정한 범위 안으로 강제하는 검증자이며, 인자를 하나만 주면 최소 길이로 취급된다.
- `@MinLength()`와 `@MaxLength()`는 최소·최대 길이를 각각 별도로 지정하는 방식으로 동일한 결과를 만든다.
- 길이 조건을 위반하면 필드별로 최소/최대 길이를 알려주는 구체적인 검증 오류 메시지가 반환된다.
