# Validating Optional Fields

## 개요
- `class-validator`의 `@IsOptional()` 데코레이터로 DTO(Data Transfer Object)의 특정 필드를 선택적(optional)으로 만드는 방법과, `@IsEmpty()`와의 차이를 실습하는 강의.

## 내용
### @IsOptional()이란
- 특정 필드나 프로퍼티는 필수(mandatory)가 아니라 선택적(optional)일 수 있다. 즉 비워두어도(empty) 검증이 트리거되지 않아야 하는 경우가 있다.
- 이런 경우를 위해 **`@IsOptional()`** 검증자를 사용한다. 이 검증자는 DTO의 프로퍼티가 선택적임을 지정하는 데 사용되며, 검증 대상 페이로드(payload) 안에 해당 프로퍼티가 있을 수도 없을 수도 있음을 의미한다.
- 즉 프로퍼티가 누락되어도(missing) 검증은 통과한다.

### 적용 예시
- `dob`(date of birth) 프로퍼티 아래에 `number` 타입의 `phone` 프로퍼티를 추가한다.
- `phone`에 `@IsOptional()` 검증자를 붙인다. 이 검증자는 값이 없을 경우 이를 확인하고, 값이 없으면 그 프로퍼티에 걸린 다른 모든 검증자도 무시한다.
- 따라서 요청 본문(payload)에 `phone` 프로퍼티를 포함하지 않아도 요청이 성공적으로 처리된다.
- 더 나아가, 이 프로퍼티에 `@IsNumber()`, `@MaxLength()` 같은 여러 검증자를 함께 정의해도, `phone` 프로퍼티가 payload에 없다면 이 검증자들도 모두 무시된 채 요청이 성공한다.
- Postman에서 `phone` 프로퍼티가 없는 요청 본문으로 요청하면 검증 메시지 없이 데이터가 정상적으로 반환된다.

### @IsOptional()과 @IsEmpty()의 차이
- `@IsOptional()`을 `@IsEmpty()` 검증자와 혼동하면 안 된다. 이 둘은 서로 다른 목적을 가진 별개의 검증자다.
- `phone` 프로퍼티에 `@IsOptional()` 대신 `@IsEmpty()`를 적용하고, 요청 본문에 `phone` 값을 채워 넣어 요청하면 `"phone must be empty"`라는 검증 오류가 표시된다.
- 즉 `@IsEmpty()`는 프로퍼티를 선택적으로 만드는 것이 아니라, 해당 프로퍼티가 항상 비어 있어야(empty) 함을 강제하는 검증자다.

## 예시
```typescript
// auth/auth.dto.ts
import { IsOptional, IsNumber, MaxLength } from 'class-validator';

export class AuthDto {
  // ...
  @IsOptional()
  @IsNumber()
  @MaxLength(15)
  phone: number;
}
```

## 요약
- `@IsOptional()`은 프로퍼티가 payload에 없어도 검증을 통과시키는 검증자이며, 값이 없을 경우 그 프로퍼티에 걸린 다른 모든 검증자도 함께 무시된다.
- 값이 존재하는 경우에는 `@IsOptional()`과 함께 정의된 다른 검증자(예: `@IsNumber()`, `@MaxLength()`)가 정상적으로 적용된다.
- `@IsEmpty()`는 `@IsOptional()`과 다르게, 프로퍼티가 반드시 비어 있어야 함을 강제하는 별개의 검증자이므로 혼동하면 안 된다.
