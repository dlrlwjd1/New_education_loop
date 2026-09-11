# Conditional Rendering with Token

## 개요
- 토큰 기반 인증(token authentication)이 구성된 상태에서, 전역 변수(global variable)로 로그인 여부 플래그를 관리해 화면의 조건부 렌더링(conditional rendering)을 다시 동작하게 만드는 강의.

## 내용
### 토큰과 렌더링 플래그의 분리
- 토큰을 도입하기 전에는 `isLoggedIn` 플래그를 쿠키로 사용해 그에 따라 링크들을 렌더링했다.
- 이제는 토큰과 이 플래그가 서로 분리(separate)되므로, 전역 변수를 두어 렌더(render) 메서드에 전달하고, 로그인/로그아웃이 수행될 때마다 이 플래그 값을 조작(manipulate)한다.

### 미들웨어에서 전역 변수 설정
- `Auth` 미들웨어 안에서 `global` 객체를 사용해 `global.isLoggedIn = false`로 전역 변수를 초기화한다.
- 사용자가 인증되었을 때 이 플래그를 `true`로 설정하고 싶으므로, `if (token)` 조건을 추가하고 기존의 `try`/`catch` 블록을 이 조건문 안으로 옮긴다.
  - `try` 블록: 토큰 검증에 성공하면 플래그를 `true`로 설정하고 `next()`로 요청을 통과시킨다.
  - `catch` 블록: 인증에 실패하면 플래그를 `false`로 설정한다.
- 토큰이 아예 없는 경우(`else` 부분)에는 단순히 로그인 페이지로 리다이렉트한다. 이 경우에는 `next()` 호출이 필요 없으므로 제거한다.

### 컨트롤러에서 플래그 반영
- app controller의 상품 목록을 렌더링하는 메서드에서 `isLoggedIn` 속성 값을 `global.isLoggedIn`으로 설정한다.
- 저장 후 확인하면, 현재는 로그인되지 않은 상태이므로 유효한 자격 증명으로 로그인한다.
- 로그인 후 홈페이지가 수정(edit)·삭제(delete) 옵션, 상품 추가(add product) 옵션, 로그아웃(logout) 옵션과 함께 정상적으로 렌더링된다.
- `global.isLoggedIn` 값을 `isLoggedIn` 속성을 반환하는 다른 모든 메서드에도 동일하게 할당하며, 유저 컨트롤러(user controller)에도 같은 방식으로 적용한다.
- 다만 회원가입(sign up) 링크를 클릭하면 여전히 로그인 페이지가 렌더링되는 문제가 남아 있어 이를 마저 해결해야 한다.

### 요청 객체에 디코딩된 토큰(사용자 정보) 붙이기
- 이를 해결하기 위해 먼저 디코딩된 토큰(decoded token)을 요청(request) 객체에 붙여, 커스텀 속성(custom property)을 request 객체에 바인딩한다.
- 커스텀 선언 파일(declaration file)을 만들고 여기서 `User` 엔티티(entity)를 import한다. 디코딩된 토큰에 할당할 속성의 타입으로 이 엔티티를 사용하기 위함이다.
- `declare global { namespace Express { interface Request { user: User; } } }` 형태로 Express의 `Request` 인터페이스에 `user` 속성을 `User` 엔티티 타입으로 추가한다.
- 미들웨어의 `try` 블록에서 `request.user = decodedToken;`으로 디코딩된 토큰을 request의 `user` 속성에 할당한다.
- 이렇게 하는 이유는, 디코딩된 토큰(사용자 자격 증명 포함)을 request의 `user` 객체에 붙여두면 이후의 라우트와 컨트롤러가 매번 토큰을 다시 검증하지 않고도 사용자 정보에 쉽게 접근할 수 있기 때문이다. 이는 인증된 요청을 처리하는 과정을 단순화하고, 요청의 생명주기(request life cycle) 동안 사용자 데이터를 바로 사용할 수 있게 해준다.

### 인증 흐름 단순화 — 'init' 상태 도입
- 인증 흐름을 더 단순화하기 위해, 플래그의 초기값을 `false` 대신 `'init'`이라는 값으로 설정한다. 사용자가 아직 로그인하지 않은(회원가입만 하고 로그인 전인) 상태가 매우 흔하므로, 플래그가 이 상태를 적절히 처리할 수 있어야 하기 때문이다.
- `catch` 블록 안에 `if (global.isLoggedIn === 'init')` 조건을 추가한다. 이 조건이 참이면 단순히 `next()`로 요청을 통과시키고, 그렇지 않으면 기존 로직대로 `isLoggedIn`을 `false`로 설정하고 로그인 페이지로 리다이렉트한다.

### public paths로 리다이렉트 루프 방지
- 애플리케이션이 리다이렉트 루프(loop)에 빠지지 않도록, 특정 경로들은 요청을 그대로 통과시켜야 한다.
- `publicPaths`라는 배열 상수를 만들어 `user/login`, `user/signup`, `user/logout` 같은 경로들을 담는다.
- `if (publicPaths.includes(request.path))` 조건을 추가해, 요청 경로가 이 배열에 포함되어 있으면 `next()`를 반환해 그대로 진행시킨다.

### 최종 동작 확인
- 잘못된 비밀번호로 로그인을 시도하면 에러 메시지가 표시된다.
- 유효한 비밀번호로 로그인하면 홈페이지가 렌더링되며, 수정·삭제 옵션과 상품 추가·로그아웃 옵션도 함께 나타난다.
- 수정(edit) 링크를 클릭하면 수정 페이지가 렌더링되고, 삭제(delete)를 실행하면 상품이 실제로 삭제된다 — 기능들이 모두 원활하게 동작한다.
- 로그아웃하면 쿠키에서 세션이 제거되고 로그인 페이지가 렌더링된다.

## 예시
```typescript
// middleware/auth.middleware.ts
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  use(request: Request, response: Response, next: NextFunction) {
    const token = request.session.token;
    const publicPaths = ['/user/login', '/user/signup', '/user/logout'];

    global.isLoggedIn = 'init';

    if (publicPaths.includes(request.path)) {
      return next();
    }

    if (token) {
      try {
        const decodedToken = this.jwtService.verify(token);
        request.user = decodedToken;
        global.isLoggedIn = true;
        next();
      } catch (error) {
        if (global.isLoggedIn === 'init') {
          return next();
        }
        global.isLoggedIn = false;
        return response.redirect('/user/login');
      }
    } else {
      return response.redirect('/user/login');
    }
  }
}
```

```typescript
// express.d.ts (커스텀 선언 파일)
import { User } from './user/entities/user.entity';

declare global {
  namespace Express {
    interface Request {
      user: User;
    }
  }
}
```

```typescript
// app.controller.ts (상품 목록 렌더링)
@Get()
getProducts() {
  const isLoggedIn = global.isLoggedIn;
  // ... isLoggedIn을 뷰에 전달
}
```

## 요약
- 토큰과 화면 렌더링용 로그인 플래그를 분리하고, 전역 변수(`global.isLoggedIn`)로 플래그 상태를 관리한다.
- 미들웨어의 `try`/`catch`에서 토큰 검증 성공 시 플래그를 `true`, 실패 시 `false`로 설정한다.
- 디코딩된 토큰을 `request.user`에 저장해두면 이후 라우트/컨트롤러가 매번 토큰을 재검증하지 않고 사용자 정보에 접근할 수 있다.
- 초기값을 `false` 대신 `'init'`으로 두어, 아직 로그인 전 상태에서 불필요한 리다이렉트를 방지한다.
- `publicPaths` 배열로 로그인·회원가입·로그아웃 경로를 미들웨어 검증에서 제외해 리다이렉트 루프를 막는다.
