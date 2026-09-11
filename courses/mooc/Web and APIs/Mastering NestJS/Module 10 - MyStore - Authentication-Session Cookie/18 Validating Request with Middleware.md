# Validating Request with Middleware

## 개요
- 로그인 시 발급된 JWT 토큰을 매 요청(request)마다 검증하는 미들웨어(middleware)를 만들어, 유효한 토큰이 있을 때만 다음 처리로 넘어가고 그렇지 않으면 로그인 페이지로 리다이렉트(redirect)하도록 구현하는 강의.

## 내용
### 왜 미들웨어가 필요한가
- 현재 로그인 시 토큰(token)을 받아 세션에 저장하고 있으며, 이 토큰은 서버로 보내는 모든 요청에 함께 실려 간다.
- 인증(authentication)을 구현하려면 매 요청마다 이 토큰을 검증(verify)해야 한다.
- 이를 위해 토큰을 검증하고, 유효할 때만 `next` 메서드를 호출하며, 그렇지 않으면 사용자를 로그인 페이지로 돌려보내는 미들웨어를 만든다.

### 미들웨어 생성
- `nest generate middleware` 명령으로 미들웨어를 생성한다. `middleware` 폴더와 `auth`라는 이름, `--no-spec` 옵션을 지정해 생성한다.
- 생성된 미들웨어의 `use` 메서드 안에서 `const token = request.session.token;`으로 세션에 저장된 토큰을 가져온다.
- 이 `Auth` 미들웨어는 상품 수정(edit product), 상품 추가(add product), 상품 삭제(delete product), 로그아웃(logout) 라우트에서 토큰 검증이 필요하며, 회원가입(sign up)과 로그인(login)은 이 검증 없이 그대로 사용할 수 있어야 한다.

### 미들웨어 전체 라우트에 적용
- 먼저 토큰 값을 콘솔(console)에 출력하는 것만 확인한다.
- `AppModule` 클래스가 `NestModule`을 `implements`하도록 하고, `configure` 메서드를 정의해 `consumer.apply(...)`로 미들웨어를 적용한다. 대상 라우트는 `*`(asterisk)로 지정해 모든 라우트를 선택한다.
- 저장 후 브라우저에서 로그인하면 토큰이 생성되어 세션에 저장된다.
- 현재는 상품 추가(add products) 옵션이 화면에 렌더링되지 않는 상태이므로, `mystore/add-product` 경로를 주소창에 직접 입력해 이동한다.
- 터미널을 확인하면 미들웨어에서 콘솔에 출력한 토큰 값을 볼 수 있다.
- 하지만 쿠키를 지우고 새로고침을 해도 여전히 상품 추가 페이지가 렌더링되는데, 이는 라우트를 실제로 보호(guard)하는 로직이 아직 없기 때문이다. 즉 로그인하지 않아도 상품 추가 라우트에 접근할 수 있는 문제를 막아야 한다.

### JWT 토큰 검증 로직 추가
- `Auth` 미들웨어에 `JwtService`를 생성자(constructor)로 주입한다.
- `const decodedToken = this.jwtService.verify(token);`으로 토큰을 검증하고, 결과를 콘솔에 출력한다.
- 로그인하지 않은 상태로 상품 추가 페이지에 접근하면 `"jwt must be provided"` 에러가 발생한다. 이제 라우트 접근에 토큰이 반드시 필요해졌다.

### 일부 라우트 제외 처리
- 로그인 후 상품 추가 라우트에 접근해도 여전히 `"jwt must be provided"` 에러가 발생한다. 이는 `AppModule`에서 미들웨어를 모든(all) 라우트에 적용했기 때문이다.
- `exclude` 메서드를 사용해 사용자 로그인(user login) 경로, `mystore/signup` 경로, 사용자 로그아웃(user logout) 경로를 미들웨어 적용 대상에서 제외한다.

### try/catch로 마무리
- 제외 처리만으로는 아직 완전하지 않으므로, `try`/`catch` 블록으로 로직을 정리한다.
- `try` 블록 안에 토큰을 디코드(decode)하는 코드를 두고, `catch` 블록에서는 에러가 발생하면 로그인 페이지로 리다이렉트한다.
- 이제 페이지를 확인하면 로그인 페이지가 표시되고, 로그인하지 않은 상태로 상품 추가 페이지에 접근하면 로그인 페이지로 리다이렉트된다.
- 로그인한 뒤 상품 추가 페이지에 접근하면 정상적으로 화면이 보인다.
- 터미널을 확인하면 페이로드(payload)가 담긴 디코딩된 토큰(decoded token)을 확인할 수 있다.

## 예시
```typescript
// middleware/auth.middleware.ts
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  use(request: Request, response: Response, next: NextFunction) {
    const token = request.session.token;

    try {
      const decodedToken = this.jwtService.verify(token);
      console.log(decodedToken);
      next();
    } catch (error) {
      return response.redirect('/user/login');
    }
  }
}
```

```typescript
// app.module.ts
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'user/login', method: RequestMethod.ALL },
        { path: 'mystore/signup', method: RequestMethod.ALL },
        { path: 'user/logout', method: RequestMethod.ALL },
      )
      .forRoutes('*');
  }
}
```

## 요약
- `nest generate middleware`로 `AuthMiddleware`를 생성하고, `request.session.token`에서 토큰을 꺼내온다.
- `JwtService.verify(token)`로 토큰을 검증하며, 검증에 실패하면 `catch` 블록에서 로그인 페이지로 리다이렉트한다.
- `AppModule`의 `configure` 메서드에서 `consumer.apply(AuthMiddleware).forRoutes('*')`로 모든 라우트에 미들웨어를 적용한다.
- 로그인, 회원가입, 로그아웃처럼 토큰 검증이 필요 없는 라우트는 `exclude`로 제외한다.
- 이 미들웨어 덕분에 로그인하지 않은 사용자는 상품 추가 등 보호된 라우트에 접근할 수 없고, 로그인한 사용자만 정상적으로 접근할 수 있게 된다.
