# Reading a Cookie

## 개요
- 로그인 상태에 따라 화면 요소(수정/삭제 버튼, 상품 추가 메뉴, 로그인/회원가입/로그아웃 메뉴)를 다르게 보여주기 위한 준비 단계로, 서버에서 요청(request)에 담긴 쿠키(cookie)를 읽는 방법과 `cookie-parser` 미들웨어(middleware)를 도입하는 강의.

## 내용
### 왜 쿠키를 읽어야 하는가
- 이전 강의에서 사용자 자격 증명을 검증하고 그 결과에 따라 쿠키를 보냈다.
- 이제 로그인 상태(state)에 따라, 로그인하지 않았다면 수정(edit)·삭제(delete) 버튼과 상품 추가(add product) 메뉴가 보이지 않아야 하고, 회원가입(sign up)·로그인(log in) 메뉴는 로그아웃(logout) 메뉴로 바뀌어야 한다.
- 이를 구현하려면 먼저 서버 쪽에서 클라이언트가 보낸 쿠키를 읽어야 한다.

### request 데코레이터로 쿠키 읽기 (1차 시도)
- 전체 상품(product)을 렌더링하는 `AppController`의 라우트 핸들러에 `@Req()` 데코레이터를 추가하고, express의 `Request` 타입인 프로퍼티를 받는다.
- 상수를 만들어 쿠키 값을 가져오고 콘솔(console)에 출력해본다.
- 브라우저에서 페이지를 새로고침(refresh)하면 터미널(terminal)에 쿠키 값이 출력되지만, 단순 텍스트(text) 형식이라 키(key)와 값(value) 쌍으로 바로 다루기 어렵다.

### cookie-parser 미들웨어 도입
- 쿠키를 `split` 같은 메서드로 직접 파싱(parse)하는 대신, `cookie-parser` 미들웨어(middleware)를 사용하기로 한다.
- `npm install cookie-parser` 명령으로 패키지를 설치한다.
- `main.ts` 파일에서 `cookie-parser` 미들웨어를 임포트(import)하고 `app.use(cookieParser())`를 호출해 전역으로 적용한다.
- 이렇게 하면 요청 객체(request object)에서 쿠키를 바로 객체 리터럴(object literal) 형태로 접근할 수 있게 된다.

### 코드 수정 및 확인
- 기존에 사용하던 쿠키 읽기 방식 대신 `request.cookies`를 사용하도록 코드를 바꾼다.
- 저장 후 페이지를 새로고침하면, 터미널에 쿠키가 키-값 쌍을 가진 객체 리터럴 형태로 출력되는 것을 확인한다.

## 예시
```typescript
// app.controller.ts — cookie-parser 적용 전
import { Get, Controller, Req, Render } from '@nestjs/common';
import { Request } from 'express';

@Get()
@Render('home')
renderHomePage(@Req() req: Request) {
  const cookie = req.get('Cookie');
  console.log(cookie);
  // ...
}
```

```bash
npm install cookie-parser
```

```typescript
// main.ts
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  await app.listen(3000);
}
bootstrap();
```

```typescript
// app.controller.ts — cookie-parser 적용 후
@Get()
@Render('home')
renderHomePage(@Req() req: Request) {
  const cookies = req.cookies;
  console.log(cookies);
  // ...
}
```

## 요약
- 로그인 상태에 따라 UI를 다르게 보여주려면 먼저 서버에서 요청의 쿠키를 읽어야 한다.
- `@Req()` 데코레이터로 express의 `Request` 객체를 받아 쿠키를 읽어봤지만, 단순 텍스트 형식이라 파싱이 필요했다.
- `cookie-parser` 패키지를 설치하고 `main.ts`에서 `app.use(cookieParser())`로 전역 적용한 뒤, `req.cookies`로 쿠키를 키-값 쌍의 객체로 바로 읽을 수 있게 되었다.
