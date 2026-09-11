# Implement Middleware using Express

## 개요
- 미들웨어의 정의와 용도, `next`의 역할, **logger·error 미들웨어**와 **호출 순서의 중요성**, `app.use`, 그리고 POST와 **`express.json()`** 을 다루는 강의

## 내용

### 미들웨어란
- **request·response 객체에 접근할 수 있는 함수**를 가진 소프트웨어로, 요청 수신부터 응답 렌더링 사이의 **요청-응답 사이클 어느 지점에서든** 실행된다.
- 용도: 사용자 정보 **로깅**, 라우트 **보호**, 요청의 **JSON 파싱** — 코드 실행, 요청·응답 객체 변경, 요청-응답 사이클 종료, **스택의 다음 미들웨어 호출**.
- Express 미들웨어에는 **애플리케이션 수준·라우터 수준** 기능과 **오류 처리** 능력이 있다. **내장**이거나 **서드파티 모듈**에서 가져올 수 있다.

### `next`
- Express의 미들웨어는 보통 **일련의 함수**다. 각 미들웨어는 **다음 미들웨어를 호출할 책임**이 있다.
- **`next`** 는 다음 미들웨어 함수로 제어를 넘기는 콜백이다.
- 예외가 발생해 다음 메서드가 호출되지 않으면 **체인이 끝난다.**
- 현재 미들웨어가 요청-응답 사이클을 끝내지 않는다면 **반드시 `next`를 호출**해야 한다. 아니면 **요청이 멈춰 매달린다(hanging).**

### 미들웨어 함수 호출의 요소
- **GET** — HTTP 메서드
- **`/`** — 미들웨어가 적용되는 루트 경로
- **`next`** — 관례상 next라 부르는 콜백 인자
- **`res`** — HTTP 응답 인자
- **`req`** — HTTP 요청 인자

### logger 미들웨어
- Express 앱에는 많은 라우트가 있고, 오류를 추적하려면 이 라우트들을 **로그**해야 한다. 이 미들웨어는 **모든 라우트에서 호출되는 사용자 정의 로거**를 만든다.
- 파라미터 3개 — request, response, next 콜백.
- **`app.use`** 로 미들웨어를 로드한다. 예에서 루트 경로 라우트 **앞에** logger를 로드하며, 앱에 요청이 오면 콘솔에 출력한다.

### error 미들웨어
- 기존 logger에 **오류 처리 미들웨어**를 추가할 수 있다.
- 어떤 라우트에 도달하기 **전에** logger가 호출되고, **지정된 라우트가 없을 때** error가 호출된다 — URL에 `/api/v1/users`가 지정되지 않은 경우.
- 오류에는 상태 코드 **404** 와 "error resource not found" 메시지를 쓴다.

### 호출 순서
- **미들웨어 호출 순서는 결정적으로 중요하다.**
- **logger는 모든 라우트 앞에**, **error는 모든 라우트 뒤에** 호출해야 한다.
- 미들웨어는 `app.use`로 로드한다.

### POST와 `express.json()`
- POST 메서드는 **대량의 데이터 전송**을 쉽게 한다. 데이터가 URL 바에 보이지 않아 **안전**하지만 GET만큼 흔히 쓰이지는 않는다. GET이 더 효율적이고 더 많이 쓰인다.
- 서버에 요청을 POST해 새 사용자를 만든다. 라우트 파라미터는 `/api/v1/users`.
- **`express.json()`** 은 **JSON 페이로드가 든 요청을 파싱하는 내장 미들웨어**이며 **body-parser** 기반이다.
- POST 요청이 오면 상태 OK가 표시된다.

## 예시
```javascript
const express = require('express');
const app = express();

// 1) logger — 모든 라우트보다 앞
const logger = (req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();                                     // 다음으로 넘기지 않으면 요청이 멈춘다
};
app.use(logger);

// 2) JSON 본문 파싱 (body-parser 기반 내장 미들웨어)
app.use(express.json());

// 3) 라우트
app.get('/api/v1/users', (req, res) => res.send(users));
app.post('/api/v1/users', (req, res) => {
  users.push(req.body);                       // express.json() 덕분에 req.body 사용 가능
  res.status(200).send('OK');
});

// 4) error — 모든 라우트보다 뒤 (매칭되는 라우트가 없을 때)
app.use((req, res) => {
  res.status(404).send('error resource not found');
});

app.listen(3000);
```

```text
순서
요청 → logger(next) → express.json(next) → 라우트 매칭? ─예→ 응답
                                              └─아니오→ error 404
```

| 미들웨어 | 위치 | 역할 |
|---|---|---|
| logger | 모든 라우트 앞 | 요청 로그 |
| `express.json()` | 라우트 앞 | JSON 본문 파싱 |
| error | 모든 라우트 뒤 | 미매칭 → 404 |

## 요약
- 미들웨어는 req·res에 접근하는 함수로 요청-응답 사이클 중간에 실행되며, 사이클을 끝내지 않으면 반드시 `next()`를 호출해야 한다.
- logger는 모든 라우트 앞에, error(404)는 모든 라우트 뒤에 두어야 하며 `app.use`로 로드한다.
- POST는 대량 데이터를 URL 노출 없이 보내고, 본문 파싱에는 body-parser 기반 내장 미들웨어 `express.json()`을 쓴다.
