# Validating Field Using @IsEnum() Validator

## 개요
- `class-validator`가 제공하는 `@IsEnum()` 데코레이터로 필드 값이 열거형(enum)에 속한 값인지 검증하는 방법을, 배열(array)로 직접 값을 넘기는 방식과 실제 enum을 정의해 참조로 넘기는 방식 두 가지로 실습하는 강의.

## 내용
### @IsEnum()이란
- **`@IsEnum()`**은 `class-validator` 라이브러리가 제공하는 내장 검증 데코레이터로, 프로퍼티(property) 값이 enum의 유효한 멤버(member)인지 검증하는 데 사용된다.

### 방법 1 — 배열을 직접 전달
- `AuthDto` 클래스에 `country`라는 `string` 타입 필드를 추가하고 `@IsEnum()` 검증자를 붙인다.
- enum 값을 전달하는 첫 번째 방법은 값들을 담은 배열(array)을 직접 제공하는 것이다. 예를 들어 India, USA, UK, Australia를 담은 배열을 전달하면 `@IsEnum()`은 이 배열에 있는 값들만 유효한 것으로 검증한다.
- 컨트롤러에서 반환값에 `userData.country`를 포함하도록 수정한다.
- Postman에서 country에 `IND`를 전달하면 값이 그대로 반환된다. 배열에 없는 다른 국가나 임의의 문자열을 전달하면 country가 지정된 값들 중 하나여야 한다는 검증 오류가 표시된다.
- 처음에는 오류 메시지에 실제 값 목록이 표시되지 않으므로, 커스텀 메시지를 지정해 이를 개선한다. `message` 프로퍼티로 `"Country must be from $constraint1"`처럼 특수 토큰(special token)을 사용해 제약 값을 배열 형태(대괄호)로 표시하고, `$value` 토큰을 추가해 사용자가 실제로 입력한 값도 함께 표시한다.
- 다시 요청하면 국가 목록과 사용자가 입력한 값이 포함된 정확한 검증 메시지가 표시된다. 목록에 있는 유효한 국가(예: USA)를 전달하면 값이 정상적으로 반환된다.

### 방법 2 — enum을 정의해 참조로 전달
- enum 값을 얻는 또 다른 방법은 실제로 enum을 만들고 그 참조(reference)를 검증자에 전달하는 것이다.
- `AuthDto` 클래스 위에 `enum Country { India = 'India', USA = 'USA', UK = 'UK', Australia = 'Australia' }`처럼 enum을 정의한다.
- 검증자에는 배열 대신 이 `Country` enum의 참조를 전달하고, 필드의 타입도 `Country` enum으로 지정한다.
- enum을 전달했기 때문에 앞서 사용한 제약 토큰은 더 이상 필요하지 않다. `@IsEnum()`이 검증 실패 시 enum에 정의된 값들을 자동으로 표시해주기 때문이다.
- Postman에서 country 값을 바꿔 다시 요청하면 enum에 정의된 값들이 검증 메시지에 자동으로 표시된다.

## 예시
```typescript
// 방법 1: 배열을 직접 전달
import { IsEnum } from 'class-validator';

export class AuthDto {
  @IsEnum(['India', 'USA', 'UK', 'Australia'], {
    message: 'Country must be from [$constraint1], you entered $value',
  })
  country: string;
}
```

```typescript
// 방법 2: enum을 정의하고 참조로 전달
import { IsEnum } from 'class-validator';

enum Country {
  India = 'India',
  USA = 'USA',
  UK = 'UK',
  Australia = 'Australia',
}

export class AuthDto {
  @IsEnum(Country)
  country: Country;
}
```

## 요약
- `@IsEnum()`은 프로퍼티 값이 지정된 enum(또는 값 목록)에 속하는지 검증하는 `class-validator` 데코레이터다.
- 값 배열을 직접 전달하는 방식은 `message` 프로퍼티와 `$constraint1`, `$value` 같은 특수 토큰으로 유효 값 목록과 사용자가 입력한 값을 오류 메시지에 표시할 수 있다.
- 실제 enum을 정의하고 그 참조를 전달하는 방식은 별도의 커스텀 메시지 없이도 유효한 값 목록을 검증 메시지에 자동으로 표시해준다.
