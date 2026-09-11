# Creating a Custom Pipe

## 개요
- 내장 파이프로는 특정 검증/변환 요구사항을 충족할 수 없을 때, `PipeTransform` 인터페이스를 구현해 직접 **커스텀 파이프(custom pipe)**를 만드는 방법을 실습하는 강의. phone 필드를 숫자(number) 타입으로 유지하면서 자릿수 패턴을 검증하는 예제를 다룬다.

## 내용
### 커스텀 파이프가 필요한 이유
- 내장 파이프(built-in pipes)가 데이터에 대해 필요한 검증(validation)이나 변환(transformation) 요구사항을 충족하지 못할 때 커스텀 파이프가 필요하다.
- 커스텀 파이프는 데이터를 원하는 방식으로 처리하기 위한 개인화된 필터(personalized filter)처럼 동작한다.

### 커스텀 파이프의 기본 구조
- 커스텀 파이프를 정의할 폴더(예: `custom-pipe`)를 만들고 그 안에 파이프 파일(예: `phone.pipe.ts`)을 생성한다.
- 가장 먼저 `@Injectable()` 데코레이터를 붙인다. 이 파이프를 컨트롤러 안에 의존성(dependency)으로 주입(inject)할 것이기 때문이다. 커스텀 파이프를 만들 때는 항상 먼저 `@Injectable()`로 표시해 애플리케이션 전역에서 사용할 수 있도록 한다.
- 클래스를 정의하고(`export class PhonePipe`) `PipeTransform` 인터페이스를 구현(implement)한다. 커스텀 파이프를 정의할 때 이 `PipeTransform` 인터페이스가 핵심 요소이며, `@nestjs/common` 모듈이 제공한다. 이는 데이터가 Nest 애플리케이션의 API 엔드포인트에 도달하기 전에 데이터를 변환하는 데 사용된다.

### transform 메서드
- `PipeTransform` 인터페이스는 **`transform`**이라는 메서드를 제공하며, 이 메서드는 `value`(타입 `any`)와 `metadata`(타입 `ArgumentMetadata`) 두 개의 파라미터를 받는다. 이 메서드 안에서 데이터 변환, 즉 검증 로직이 수행된다.
- **value**: 파이프가 처리 중인 값을 나타낸다. 엔드포인트나 메서드로 전달되는 데이터이며, 파이프가 어디에 적용되는지에 따라 어떤 타입도 될 수 있다. 예를 들어 파이프가 컨트롤러 메서드의 요청 본문(request body)에 적용되면 value는 요청 본문 데이터를 나타낸다.
- **metadata**: 파이프가 적용되는 컨텍스트(context)에 대한 추가 정보를 제공한다. 파라미터의 타입(예: body, query, param 등)과 해당 파라미터에 적용된 추가 옵션이나 제약 조건 등이 여기에 포함된다.
- metadata 파라미터를 사용하지 않을 경우, 이를 매개변수 목록에서 제거해도 `transform` 메서드에서 별다른 오류 없이 동작한다.

### value 값 확인하기
- 우선 `value` 파라미터를 콘솔에 출력(console log)해 어떤 값을 담고 있는지 확인한다.
- 컨트롤러 파일에서 `@UsePipes()` 데코레이터 안에 `PhonePipe`를 넣어 적용한다. 컨트롤러 레벨/메서드 레벨에 정의할 수도 있고, 내장 파이프처럼 바디 파라미터 자리에 직접 정의할 수도 있다.
- Postman에서 이미 정의된 요청 본문으로 요청하면, 터미널에서 요청 객체 전체가 value로 출력되는 것을 확인할 수 있다.

### phone 값 추출 및 정규식 검증
- 이 객체에서 `phone` 프로퍼티만 대상으로 하기 위해, console log를 제거하고 `value.phone`을 문자열로 변환해 담는 `phoneNumber` 상수를 만든다. 전화번호 값은 숫자(numeric)로만 받고 싶지만 정규식 패턴은 문자열 값만 매칭할 수 있으므로 숫자 값을 먼저 문자열로 변환해야 한다.
- 정규 표현식 패턴을 담는 또 다른 상수를 만든다. 패턴은 `\d`로 0~9 사이의 숫자 집합을 매칭하고, 중괄호 안에 `10,11`로 범위를 지정해 10자리 또는 11자리 숫자를 허용하며, `$` 기호로 패턴의 끝을 표시한다.
- 정규식 패턴이 테스트(test)에 실패하면 새 오류를 던지거나(throw) `BadRequestException`을 던지도록 `if` 조건을 작성한다. 메시지는 `"Phone number must be exactly 10 or 11 digits"`로 지정하고, 통과하면 value를 반환한다.

### DTO 수정
- DTO에서 phone 프로퍼티에 붙어 있던 `@Matches()`와 `@IsString()` 검증자를 제거하고 `@IsNumber()` 검증자만 남기며, 프로퍼티 타입도 다시 `number`로 변경한다.
- Postman에서 phone을 문자열로 전달해 요청하면 `"phone must be a number conforming to the specified constraints"`라는 검증 오류가 발생한다.
- 숫자 값을 전달하면 데이터가 성공적으로 반환되고, 유효하지 않은 자릿수의 전화번호를 전달하면 커스텀 파이프에서 던진 예외 메시지가 표시된다.

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
  transform(value: any) {
    const phoneNumber = `${value.phone}` as string;
    const pattern = /\d{10,11}$/;

    if (!pattern.test(phoneNumber)) {
      throw new BadRequestException('Phone number must be exactly 10 or 11 digits');
    }

    return value;
  }
}
```

```typescript
// auth/auth.controller.ts
@Post('register')
@UsePipes(ValidationPipe, PhonePipe)
registerUser(@Body() userData: AuthDto) {
  return userData;
}
```

```typescript
// auth/auth.dto.ts
import { IsOptional, IsNumber } from 'class-validator';

export class AuthDto {
  // ...
  @IsOptional()
  @IsNumber()
  phone: number;
}
```

## 요약
- 커스텀 파이프는 `@Injectable()`을 붙이고 `PipeTransform` 인터페이스를 구현해 만든다.
- `PipeTransform`은 `transform(value, metadata)` 메서드를 요구하며, `value`는 처리 대상 데이터, `metadata`는 파라미터 타입 등 추가 컨텍스트 정보(`ArgumentMetadata`)를 담는다. `metadata`를 사용하지 않으면 생략할 수 있다.
- `transform` 메서드 안에서 원하는 검증/변환 로직을 자유롭게 작성할 수 있으며, 검증 실패 시 `BadRequestException` 등을 던져 오류 메시지를 반환할 수 있다.
- 커스텀 파이프는 `@UsePipes()` 데코레이터로 라우트/컨트롤러에 적용하며, 여러 파이프(예: `ValidationPipe`와 커스텀 파이프)를 함께 나열해 적용할 수 있다.
