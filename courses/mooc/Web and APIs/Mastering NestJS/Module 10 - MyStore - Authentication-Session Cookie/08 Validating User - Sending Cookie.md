# Validating User & Sending Cookie

## 개요
- 로그인 폼에서 입력된 자격 증명(credentials)을 데이터베이스에 저장된 사용자 정보와 비교(validate)하고, 그 결과에 따라 `isLoggedIn` 쿠키(cookie)를 설정해 응답하는 강의.

## 내용
### 로그인 폼과 POST 라우트 준비
- 로그인 폼(login form)의 데이터를 서버에서 받으려면, 폼의 `action` 속성 경로와 `method="post"`가 올바르게 지정되어 있어야 한다.
- `UserController`에 POST 라우트를 만들고 경로는 `login`, 메서드 이름은 `userLogin`으로 정의한다. 이 메서드 안에서 사용자 자격 증명을 검증(validate)하고 쿠키를 전달한다.

### 사용자명으로 사용자 조회
- 먼저 데이터베이스에서 사용자 자격 증명을 가져와야 하므로, `UserService`에 `findUserByUsername(username: string)` 메서드를 만든다.
- `return await this.userRepository.findOne({ where: { username } })` 형태로 사용자명을 기준으로 사용자 데이터를 조회한다.

### 컨트롤러에서 검증 및 쿠키 전송
- `UserController`의 `userLogin` 메서드에서 `@Body()` 데코레이터로 `UserDto` 타입의 값을 받고, `@Res()` 데코레이터로 express의 `Response` 타입인 응답(response) 객체도 받는다.
- 요청 본문(body)에서 `username`과 `password`를 구조 분해(destructure)한다.
- `const user = await this.userService.findUserByUsername(username)`으로 사용자를 조회한다.
- `user.password === password` 조건이 참이면 쿠키 `isLoggedIn`을 `true`로 설정하고 `/mystore/home`으로 리다이렉트(redirect)한다.
- 그렇지 않으면 `isLoggedIn` 쿠키를 `false`로 설정하고 `/user/login`으로 다시 리다이렉트한다.

### 동작 확인 — 잘못된 비밀번호 / 올바른 자격 증명
- 올바른 이메일(`user@gmail.com`)과 틀린 비밀번호로 로그인을 시도하면 로그인 페이지로 다시 리다이렉트되고, 개발자 도구(developer's tools)의 쿠키(cookies) 항목에서 `isLoggedIn` 값이 `false`로 설정된 것을 확인한다.
- 올바른 자격 증명으로 로그인하면 홈 페이지로 리다이렉트되고, 쿠키 항목에서 `isLoggedIn` 값이 `true`로 설정된 것을 확인한다.

### 존재하지 않는 사용자명 처리
- 잘못된 사용자명(username)으로 로그인을 시도하면 동작이 멈추는(에러가 나는) 문제가 발견된다. 존재하지 않는 사용자명으로 조회하면 `undefined` 또는 `null`이 반환되기 때문이다.
- 이를 해결하기 위해 사용자(user)의 존재 여부를 확인하는 조건을 추가한다. `if (user)` 조건 안에 기존 비밀번호 비교 로직을 넣고, 비밀번호가 틀린 경우 쿠키 값을 `invalid password`로 설정한다.
- `user`가 존재하지 않는 경우(사용자명이 없는 경우)에는 별도의 `else` 조건에서 `isLoggedIn` 쿠키를 `invalid username`으로 설정하고 `/user/login`으로 리다이렉트한다.
- 저장 후 존재하지 않는 이메일과 비밀번호로 로그인을 시도하면 로그인 페이지로 리다이렉트되고, 쿠키 항목에서 `isLoggedIn` 값이 `invalid username`으로 설정된 것을 확인한다.

## 예시
```typescript
// users/service/user.service.ts
async findUserByUsername(username: string) {
  return await this.userRepository.findOne({ where: { username } });
}
```

```typescript
// users/controller/user.controller.ts
import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from '../service/user.service';
import { UserDto } from '../../dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async userLogin(@Body() body: UserDto, @Res() res: Response) {
    const { username, password } = body;
    const user = await this.userService.findUserByUsername(username);

    if (user) {
      if (user.password === password) {
        res.cookie('isLoggedIn', true);
        return res.redirect('/mystore/home');
      } else {
        res.cookie('isLoggedIn', 'invalid password');
        return res.redirect('/user/login');
      }
    } else {
      res.cookie('isLoggedIn', 'invalid username');
      return res.redirect('/user/login');
    }
  }
}
```

## 요약
- `UserService`에 `findUserByUsername` 메서드를 추가해 사용자명으로 사용자를 조회했다.
- `UserController`의 `userLogin` 핸들러에서 `@Res()`로 express `Response` 객체를 받아, 비밀번호 일치 여부에 따라 `isLoggedIn` 쿠키를 `true`/`false`로 설정하고 홈 또는 로그인 페이지로 리다이렉트했다.
- 존재하지 않는 사용자명을 조회하면 `undefined`가 반환되어 오류가 나는 문제를 발견하고, `if (user)` 조건을 추가해 사용자 존재 여부에 따라 `invalid username`, `invalid password` 등 세분화된 쿠키 값을 설정하도록 개선했다.
