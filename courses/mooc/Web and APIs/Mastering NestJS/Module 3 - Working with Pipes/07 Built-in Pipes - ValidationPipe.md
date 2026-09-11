# Built-in Pipes (ValidationPipe)

## 개요
- 쿼리 파라미터, 바디 파라미터, 라우트 파라미터로 들어오는 요청 페이로드(payload)를 자동으로 검증하는 내장 파이프 **ValidationPipe**를 `class-validator`, `class-transformer` 패키지와 함께 실습하는 강의.

## 내용
### ValidationPipe란
- **ValidationPipe**는 쿼리 파라미터, 바디 파라미터, 라우트 파라미터로부터 들어오는 요청 페이로드에 대해 자동으로 검증(validation)을 수행하는 내장 파이프다.
- `@IsString()`, `@IsNumber()`, `@IsEmail()` 같은 다양한 검증 규칙을 데코레이터(decorator) 형태로 제공하여, 데이터가 라우트 핸들러(route handler)에 도달하기 전에 지정된 검증 기준을 충족하는지 확인한다.

### Auth 모듈과 DTO 준비
- `auth`라는 폴더를 만들고 그 안에 `auth.dto.ts` 파일을 생성한다. 이 파일에 `email`(string 타입)과 `password`(string 타입) 필드를 가진 `AuthDto` 클래스를 정의한다.
- `nest generate controller auth --no-spec` 명령으로 `auth` 컨트롤러를 생성한다.
- 컨트롤러에 `register`라는 라우트를 가진 `@Post()` 핸들러와 `registerUser` 메서드를 만든다. 이 메서드는 요청 바디(request body)를 받아 `AuthDto` 타입의 `userData` 프로퍼티에 저장하고, 템플릿 리터럴(template literal)로 `userData.email`을 담은 객체를 반환한다.

### ValidationPipe 적용하기 — @UsePipes
- `ValidationPipe`는 라우트 레벨(route level), 컨트롤러 레벨(controller level), 글로벌 레벨(global level) 중 어디에나 적용할 수 있다.
- 라우트 레벨에 적용하려면 `@UsePipes` 데코레이터를 추가로 사용해야 한다.
- `@UsePipes`는 파이프를 컨트롤러나 메서드의 스코프(scope)에 바인딩한다. 컨트롤러 레벨에서 사용하면 그 컨트롤러의 모든 핸들러에 적용되고, 개별 핸들러 레벨에서 사용하면 해당 메서드에만 적용된다.
- `@UsePipes()`의 괄호 안에 `ValidationPipe`를 인자로 전달하면, 이 파이프가 POST 라우트 핸들러에 도달하기 전 데이터를 계속 감시하며 검증을 수행하게 된다.

### class-validator, class-transformer 설치
- Postman에서 `/auth/register`로 이메일(`example@gmail.com`)과 비밀번호(`123`)를 담아 POST 요청을 보내면 이메일이 정상적으로 반환된다.
- 하지만 이메일에서 `@` 기호를 제거한 잘못된 이메일로 다시 요청해도 여전히 이메일이 그대로 반환된다. `ValidationPipe`는 이메일이 올바른지 스스로 판단하지 못하며, 값에 대한 검증은 외부 npm 패키지인 **class-validator**와 **class-transformer**에 의존하기 때문이다.
- `npm i class-validator class-transformer` 명령으로 두 패키지를 설치한다.

### DTO에 검증 데코레이터 지정
- `AuthDto` 클래스에서 이메일에는 `class-validator`가 제공하는 `@IsEmail()` 데코레이터를 붙여 값이 올바른 이메일 형식인지 확인한다.
- 비밀번호에는 문자열만 허용하는 `@IsString()`, 숫자만 허용하는 `@IsNumber()`, 또는 더 나은 선택으로 특수문자를 제외하고 문자와 숫자를 모두 허용하는 `@IsAlphanumeric()` 데코레이터를 사용할 수 있다.
- 저장 후 다시 검증을 확인한다. 잘못된 이메일 그대로 POST 요청을 보내면 이메일 형식이 올바르지 않다는 검증 오류(validation error) 메시지가 표시된다.
- 비밀번호에 특수문자를 추가하면 비밀번호는 문자와 숫자 값만 포함할 수 있다는 오류가 표시된다.
- 유효한 이메일과 비밀번호를 전달하면 이메일이 정상적으로 반환된다.

## 예시
```typescript
// auth/auth.dto.ts
import { IsEmail, IsAlphanumeric } from 'class-validator';

export class AuthDto {
  @IsEmail()
  email: string;

  @IsAlphanumeric()
  password: string;
}
```

```typescript
// auth/auth.controller.ts
import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  @Post('register')
  @UsePipes(ValidationPipe)
  registerUser(@Body() userData: AuthDto) {
    return { email: `${userData.email}` };
  }
}
```

```bash
npm i class-validator class-transformer
```

## 요약
- `ValidationPipe`는 요청 페이로드에 대해 자동으로 검증을 수행하는 내장 파이프이며, 실제 검증 로직은 `class-validator`와 `class-transformer` 패키지에 의존한다.
- `@UsePipes(ValidationPipe)`를 라우트/컨트롤러 레벨에 적용해 파이프의 적용 범위를 지정할 수 있다.
- DTO 클래스 필드에 `@IsEmail()`, `@IsString()`, `@IsNumber()`, `@IsAlphanumeric()` 같은 `class-validator` 데코레이터를 붙여야 실제 검증 규칙이 적용된다.
- 검증에 실패하면 필드별로 구체적인 검증 오류 메시지가 반환된다.
