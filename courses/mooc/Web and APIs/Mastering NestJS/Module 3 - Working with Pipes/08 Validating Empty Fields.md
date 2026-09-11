# Validating Empty Fields

## 개요
- `class-validator` 패키지가 제공하는 `@IsNotEmpty()`와 `@IsEmpty()` 데코레이터를 이용해 필드가 비어 있는지(empty) 여부를 검증하는 방법을 실습하는 강의.

## 내용
### 빈 필드 검증이 필요한 이유
- 필드가 비어 있지 않은지 확인하는 것은 우리가 받는 정보가 완전하고 정확한지 보장하는 기본적인 부분이다.
- 폼(form)에서 필수 항목을 비워둔 채 제출하면 안 되는 것처럼, 프로그램도 필요한 데이터가 모두 제공되었는지 확인해야 한다.
- NestJS에서는 `class-validator` 패키지가 제공하는 `@IsEmpty()`와 `@IsNotEmpty()` 데코레이터로 빈 필드를 검증할 수 있다.

### @IsEmail()만으로는 부정확한 메시지
- 현재 email 필드에는 `@IsEmail()` 검증자만 적용되어 있다. 이 검증자도 이메일이 비어 있는 경우를 걸러내긴 하지만 정확한 메시지를 보여주지 않는다.
- Postman에서 email 필드를 비운 채 요청하면 `"email must be an email"`이라는 검증 오류 메시지가 표시된다.

### @IsNotEmpty()로 정확한 메시지 표시
- email 필드가 비어 있을 때 더 정확한 메시지를 보여주려면 email 필드에 `@IsNotEmpty()` 데코레이터를 추가로 붙인다.
- 이 검증자는 주어진 값이 비어 있지 않은지를 확인한다. 이렇게 하나의 필드에 여러 검증자를 스택(stack) 방식으로 쌓아 적용할 수 있다.
- 다시 email을 비운 채 요청하면 `"email should not be empty"`라는, 필드가 비어 있는 상황에 더 정확한 메시지가 표시된다.
- password 필드에도 `@IsNotEmpty()`를 적용한다. Postman에서 password를 빈 값으로 두고 요청하면 `"password should not be empty"` 메시지가 표시된다.

### @IsEmpty()로 필드를 비워두도록 강제하기
- 반대로 특정 필드를 항상 비워두도록(empty) 허용/강제하고 싶다면 `@IsEmpty()` 검증자를 사용한다.
- `string` 타입의 새 필드 `name`을 만들고 여기에 `@IsEmpty()`를 적용한다. 이 검증자는 필드가 비어 있는지(즉 null 값인지)를 확인한다.
- `@IsString()` 검증자도 함께 붙여 문자열 값만 허용하도록 하고, 반환값에도 `name` 값을 포함하도록 수정한다.
- Postman에서 name 필드를 비워두고 나머지를 채워 요청하면 요청이 성공하고 값들이 정상적으로 반환된다.
- 하지만 name 필드에 값을 채워 요청하면 `"name must be empty"`라는 검증 오류가 표시된다. 즉 `@IsEmpty()`를 사용하면 해당 필드나 프로퍼티는 반드시 비어 있어야 한다.

## 예시
```typescript
// auth/auth.dto.ts
import { IsEmail, IsNotEmpty, IsEmpty, IsString } from 'class-validator';

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsEmpty()
  @IsString()
  name: string;
}
```

## 요약
- `@IsNotEmpty()`는 필드가 비어 있지 않아야 함을 검증하며, `@IsEmail()` 같은 다른 검증자와 함께 스택으로 적용해 더 정확한 오류 메시지를 만들 수 있다.
- `@IsEmpty()`는 반대로 해당 필드가 반드시 비어 있어야(empty/null) 함을 강제하는 검증자다.
- 하나의 필드에 여러 검증 데코레이터를 함께 붙여 조합할 수 있다.
