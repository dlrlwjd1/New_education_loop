# Configuring Express Session

## 개요
- 브라우저에서 쿠키 값을 임의로 바꿀 수 있는 문제를 해결하기 위해 `express-session` 미들웨어(middleware)를 설치하고 서버 측 세션을 구성하는 강의.

## 내용
### 기존 쿠키 방식의 문제점
- 앞서 구현한 방식은 쿠키 값(cookie value)을 브라우저에서 쉽게 변경할 수 있어 애플리케이션 동작이 조작될 수 있는 결함(flaw)이 있었다.
- 이를 해결하기 위해 사용자마다 고유한 세션(session)을 생성하고 이를 서버에 저장하는 방식으로 전환한다.

### express-session 설치와 등록
- `npm install express-session` 명령으로 미들웨어 패키지를 설치한다.
- 애플리케이션이 부트스트랩되는 `main.ts` 파일에서 `express-session` 모듈을 import하고, `app.use(session(...))` 형태로 미들웨어를 등록한다.
- `session` 함수는 세션 설정(configuration) 객체를 인자로 받는다.

### 세션 설정 옵션
- `secret`: 세션을 위한 비밀 키(secret key)를 지정하는 옵션.
- `resave: false`: `true`로 설정하면 매 요청마다 세션을 저장하게 되는데, 세션에 변경이 있을 때만 저장하도록 하기 위해 `false`로 설정한다.
- `saveUninitialized: false`: 초기화되지 않은(uninitialized) 세션이 저장소(store)에 저장되는 것을 강제로 막기 위한 옵션.
- `cookie` 키를 객체로 추가해 세션 쿠키를 설정할 수도 있지만, 이번 강의에서는 별도로 설정하지 않는다.

### 세션 ID 확인
- `express-session`을 미들웨어로 설정하면 요청(request) 객체에 `session` 속성이 추가되며, 여기에 세션 ID, 세션 쿠키 등 세션 관련 정보가 담긴다.
- 확인을 위해 컨트롤러(app controller)에서 `request.session.id`를 콘솔에 출력(console)하도록 작성한다.
- 저장 후 홈페이지를 열면 VS Code 터미널에 고유한 세션 ID가 출력되는 것을 확인한다.
- 새로운 탭(duplicate tab)을 열어 다시 확인하면 다른 세션 ID가 출력된다. 즉 창(window), 탭(tab), 세션(session)마다 고유한 세션 ID가 생성된다.

## 예시
```typescript
// main.ts
import * as session from 'express-session';

app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    // cookie: { ... } // 필요 시 쿠키 옵션 추가 가능
  }),
);
```

```typescript
// app.controller.ts (세션 ID 확인용 콘솔 출력)
@Get()
getHome(@Req() request: Request) {
  console.log(request.session.id);
  // ...
}
```

## 요약
- 브라우저에서 조작 가능한 쿠키 값의 한계를 해결하기 위해 `express-session` 미들웨어로 서버 측 세션 관리를 도입한다.
- `secret`, `resave`, `saveUninitialized` 옵션으로 세션 저장 동작을 제어한다.
- 미들웨어 등록 후 `request.session`으로 세션 정보(세션 ID 등)에 접근할 수 있다.
- 창·탭·세션마다 고유한 세션 ID가 발급되며, 다음 강의에서 이를 인증(authentication)에 활용한다.
