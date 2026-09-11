# Implementing JWT Token

## 개요
- 세션 쿠키에 담긴 페이로드(payload)를 암호화하기 위해 `@nestjs/jwt` 패키지를 사용해 JSON 웹 토큰(JWT, JSON Web Token) 기반 인증으로 전환하는 강의.

## 내용
### 쿠키 → 세션 쿠키 → JWT로의 전환
- 지금까지는 쿠키(cookie)로 로그인 기능을 구현한 뒤, 데이터를 더 안전하게 만들기 위해 세션 쿠키(session cookie) 방식으로 전환했다.
- 이번에는 토큰 기반(token-based) 접근 방식을 살펴본다. JSON 웹 토큰(JWT)을 사용해 세션 페이로드(session payload)를 암호화(encrypt)한다.
- 현재 `sessions` 테이블에는 세션 페이로드가 평문 형태로 저장되어 있는데, 이 쿠키를 암호화해 JWT 토큰으로 변환한다.

### @nestjs/jwt 설치와 서비스 주입
- `npm install @nestjs/jwt` 명령으로 패키지를 설치한다.
- 유저 컨트롤러(user controller)에 `JwtService` 클래스를 주입(inject)한다. 이 클래스는 JSON 웹 토큰의 서명(signing), 검증(verifying), 디코딩(decoding)을 위한 내장 메커니즘을 제공한다.

### 로그인 시 토큰 생성
- 로그인 메서드에서 유효한 자격 증명(valid credentials)이 입력되면 토큰을 생성해 세션 쿠키로 저장한다.
- `token` 상수를 만들고 `this.jwtService.sign(...)` 메서드에 페이로드(payload) 객체로 사용자명(username)을 담아 전달한다.
- 사용자명만 페이로드로 넘기는 이유는, 이전에도 세션 쿠키를 사용자명만을 기준으로 생성했기 때문에 그 일관성(integrity)을 유지하기 위함이다.
- `sign` 메서드의 두 번째 인자는 비밀 키(secret key)인데, 여기서 직접 정의하지 않고 NestJS의 모듈 설정(module configuration)에 포함시킨다.
- 생성한 토큰은 `request.session.token = token` 형태로 세션 쿠키에 저장한다. `token`은 세션의 알려진 속성이 아니므로, 타입 선언 파일(declaration file)의 `Session` 클래스에 `token` 속성을 `string` 타입으로 추가해 오류를 해결한다.

### JWT와 세션 쿠키를 함께 쓰는 이유
- JWT로 인증(authentication)을 할 때는 사실 세션 쿠키가 필수는 아니다. JWT 자체만으로도 인증 역할을 충분히 수행할 수 있다.
- 하지만 로그인/로그아웃 기능을 구현해야 하므로, 로그인 여부(logged in/out) 상태를 어딘가에 저장해야 하고, 가장 쉬운 방법은 계속 세션 쿠키를 활용하는 것이다.
- 비밀번호나 사용자명이 유효하지 않을 때는 토큰을 보내지 않고, 사용자가 다시 입력할 수 있도록 로그인 페이지로 리다이렉트(redirect)만 한다.

### JwtModule 등록
- `AppModule`의 `imports` 배열에 `JwtModule.register(...)`를 추가해 JWT 모듈을 등록한다.
- `register` 메서드는 토큰 서명에 사용할 비밀 키(secret key) 등 옵션을 설정해 JWT 모듈을 구성하고 등록하는 방법이다.
- `secret` 값으로 `'secret'`을 지정하고, 토큰 만료 시간(expiration time) 등 추가 설정을 위해 `signOptions` 속성 안에 `expiresIn` 속성을 `60`분(1시간)으로 지정한다.

### 등록 중 발생한 오류 해결
- 저장 후 로그인을 시도하면 로그아웃 시 애플리케이션이 `JwtService` 클래스를 읽지 못하는 오류가 발생한다. 이를 해결하기 위해 유저 모듈(user module)의 `providers` 배열에 `JwtService`를 등록한다.
- 유효한 사용자 정보로 로그인을 시도해도 여전히 오류가 발생하는데, 이는 루트 모듈(`AppModule`)에만 JWT 모듈을 등록한 것으로는 충분하지 않기 때문이다. 유저 모듈(user module)에도 JWT 모듈을 import해야 한다.
- 유저 모듈에도 동일한 JWT 모듈 설정을 다시 등록(register)하고, 이를 `AppModule`에서도 사용하고 있으므로 함께 export한다.
- 이후 터미널에서 오류가 사라진 것을 확인한다.

### 동작 확인
- 로그인을 시도하면 세션이 생성되지만, 이제는 `isLoggedIn` 플래그(flag)를 사용하지 않고 토큰(token)을 사용하기 때문에 상품 수정(edit)·삭제(delete) 버튼과 상품 추가(add product) 옵션이 나타나지 않는다. 이는 이후 강의에서 해결할 예정이다.
- `sessions` 테이블을 확인하면 세션 쿠키 안에 JWT 토큰이 저장되어 있음을 확인한다. 다만 기존의 `username`, `message` 속성도 여전히 남아 있어, 해당 값을 할당하던 두 줄의 코드를 제거한다.
- `sessions` 테이블을 비우고 다시 로그인한 뒤 확인하면, 세션 쿠키 안에는 이제 토큰만 저장되어 있다.
- 이 쿠키(토큰) 값을 복사해 JWT 공식 사이트(jwt.io)에 붙여넣으면 페이로드(payload)에 사용자명 값이 정상적으로 담겨 있는 것을 확인할 수 있다.
- 이제 이 토큰을 실제 기능들과 연결(bind)하는 작업이 다음 강의들에서 이어진다.

## 예시
```typescript
// user.controller.ts
constructor(
  private readonly userService: UserService,
  private readonly jwtService: JwtService,
) {}

@Post('login')
login(@Req() request: Request, @Res() response: Response, @Body() loginDto: LoginDto) {
  // 유효한 사용자 검증 로직...

  const token = this.jwtService.sign({ username: loginDto.username });
  request.session.token = token;

  // 유효하지 않은 경우: 토큰 없이 로그인 페이지로 리다이렉트
}
```

```typescript
// express-session 타입 선언 파일 — Session 클래스에 속성 추가
declare class Session {
  isLoggedIn: string;
  token: string;
}
```

```typescript
// app.module.ts
@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '60m' },
    }),
    // ...
  ],
})
export class AppModule {}
```

```typescript
// user.module.ts
@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [UserService, JwtService],
  exports: [JwtModule],
})
export class UserModule {}
```

## 요약
- `@nestjs/jwt`의 `JwtService.sign()`으로 사용자명을 페이로드로 담은 JWT 토큰을 생성한다.
- 비밀 키와 만료 시간은 `sign` 호출부가 아니라 `JwtModule.register({ secret, signOptions: { expiresIn } })` 설정에서 관리한다.
- 생성한 토큰은 세션의 커스텀 속성(`token`)으로 저장하며, 로그인/로그아웃 상태 관리를 위해 세션 쿠키는 계속 함께 사용한다.
- `JwtModule`은 사용하는 모든 모듈(`AppModule`, `UserModule`)에 각각 등록하고, 다른 모듈에서 쓰기 위해 export해야 하며, `JwtService`는 해당 모듈의 `providers`에도 등록해야 한다.
- 세션 쿠키에는 이제 JWT 토큰만 저장되고, jwt.io에서 페이로드를 확인해 사용자명이 올바르게 담겨 있음을 검증했다.
