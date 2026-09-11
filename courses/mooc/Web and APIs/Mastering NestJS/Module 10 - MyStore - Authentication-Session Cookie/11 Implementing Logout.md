# Implementing Logout

## 개요
- 이전 강의에서 네비게이션 바(navbar)에 배치해 둔 로그아웃(logout) 링크에 실제 기능을 연결해, 클릭 시 `isLoggedIn` 쿠키(cookie) 값을 `false`로 바꾸고 홈 페이지로 리다이렉트(redirect)하는 강의.

## 내용
### 로그아웃 라우트 핸들러 정의
- 로그아웃은 결국 쿠키 값을 설정하는 것이 핵심이므로, `UserController`에 `logout`이라는 GET 라우트를 정의한다.
- 메서드 이름은 `userLogout`이며, `@Res()` 데코레이터로 express의 `Response` 타입인 프로퍼티를 받는다.
- 이 메서드 안에서 `isLoggedIn` 쿠키 값을 `false`로 설정한다.
- 설정 후 홈 페이지(home page)로 리다이렉트한다.

### 네비게이션 바 링크 연결
- `navbar.ejs`에서 logout 링크의 경로(path)를 `/user/logout`으로 설정한다.

### 동작 확인
- 현재 사용자가 로그인된 상태이므로 네비게이션 바에 logout 옵션이 보인다.
- logout을 클릭하면 홈 페이지로 리다이렉트되고, 쿠키 값을 확인하면 `isLoggedIn`이 `false`로 설정되어 사용자가 로그아웃된 상태임을 확인한다.

## 예시
```typescript
// users/controller/user.controller.ts
import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('user')
export class UserController {
  // ... 기존 signup, login 핸들러

  @Get('logout')
  userLogout(@Res() res: Response) {
    res.cookie('isLoggedIn', false);
    return res.redirect('/mystore/home');
  }
}
```

```html
<!-- navbar.ejs — logout 링크 경로 설정 -->
<li class="nav-item">
  <a class="nav-link" href="/user/logout">
    <i class="bi box-arrow-in-right"></i> Logout
  </a>
</li>
```

## 요약
- `UserController`에 `@Get('logout')` 라우트와 `userLogout` 메서드를 추가해, `isLoggedIn` 쿠키를 `false`로 설정하고 홈 페이지로 리다이렉트하도록 구현했다.
- `navbar.ejs`의 logout 링크 경로를 `/user/logout`으로 연결했다.
- 로그인 상태에서 logout을 클릭하면 쿠키 값이 `false`로 바뀌며 로그아웃되는 것을 확인해, 회원가입부터 로그인/로그아웃까지 이어지는 인증(authentication) 흐름의 기본 골격을 완성했다.
