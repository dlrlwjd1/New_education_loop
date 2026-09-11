# Define routes

## 개요
- Express 라우팅의 정의와 구조(`app.METHOD(path, handler)`), `app.all`, 문자열·패턴·정규식 라우트 경로, 그리고 **쿼리 파라미터**를 다루는 강의

## 내용

### 라우팅이란
- **특정 엔드포인트(URI)와 특정 HTTP 메서드**로 온 클라이언트 요청에 애플리케이션이 어떻게 응답할지 결정하는 것이다. 메서드는 GET·POST·PUT·DELETE 등.
- 각 라우트는 **라우트가 매칭될 때 실행되는 핸들러 함수를 하나 이상** 가질 수 있다.

### 라우트 구조
`app.METHOD(PATH, HANDLER)`
- **app** — Express 인스턴스
- **METHOD** — 소문자 HTTP 요청 메서드
- **PATH** — 서버의 경로
- **HANDLER** — 라우트가 매칭될 때 실행되는 콜백

### Hello World 예
- `app.get`은 특정 URL로 온 **GET 요청의 라우트 핸들러**를 만든다. 인자 두 개 — 경로(URL)와 콜백. **`/`는 URL의 루트**다.
- 콜백은 **request·response** 를 받는다. `req`는 GET 요청 정보를 담고, **`res.send`** 가 브라우저로 데이터를 보낸다. `res.send`의 데이터는 **문자열, 객체, 배열** 이 될 수 있다.
- 브라우저에서 `localhost:3000`을 열면 Hello World가 나온다.

### 라우트 메서드와 `app.all`
- 라우트 메서드는 HTTP 메서드에서 파생되어 Express 클래스 인스턴스에 붙는다. 루트에 GET·POST 라우트를 정의하는 예가 나온다.
- **`app.all`** 은 특별한 라우팅 메서드로, **모든 HTTP 요청 메서드**에 대해 한 경로에서 미들웨어 함수를 로드한다. 예: `/secret` 라우트 핸들러가 GET·POST·PUT·DELETE 등 `http` 모듈이 지원하는 어떤 메서드로든 실행된다.

### 라우트 경로
- 요청을 받을 엔드포인트는 **라우트 경로 + 요청 메서드**의 조합으로 정의된다. 경로는 **문자열, 문자열 패턴, 정규식**이 될 수 있다.
- `?`, `+`, `*`, `()` 는 정규식 대응 문자의 **부분집합**이다. **하이픈 `-`과 점 `.`은 문자열 기반 경로에서 리터럴로 해석**된다.

| 경로 | 매칭 |
|---|---|
| `/` | 루트 |
| `/hello` | `/hello` |
| `/myrandom.text` | `/myrandom.text` (점은 리터럴) |
| `/z/` (정규식) | z가 들어간 모든 것 |
| `/^ab.*cd$/` (정규식) | ab로 시작해 cd로 끝나는 것 — `abcd`, `abxcd`, `ab123cd` … |

### 쿼리 파라미터
- URL의 일부로, **`?` 뒤에 URL 끝에 추가**된다.
- 클라이언트가 서버로 **소량의 정보**를 보내는 데 쓴다 — 데이터베이스 질의나 결과 필터링에 사용된다.
- 항상 **키-값 쌍**으로 전달되며 URL에서 **명시적으로 추출**해야 한다.
- 예: 학생 ID를 삭제할 때 HTTP DELETE 메서드와 함께 쿼리 파라미터로 넘길 수 있다.

## 예시
```javascript
const express = require('express');
const app = express();

// app.METHOD(PATH, HANDLER)
app.get('/', (req, res) => {
  res.send('Hello World');                 // 문자열 · 객체 · 배열 가능
});
app.post('/', (req, res) => res.send('POST to root'));

// 모든 메서드
app.all('/secret', (req, res, next) => {
  console.log('Accessing the secret section');
  next();
});

// 라우트 경로 — 문자열 / 패턴 / 정규식
app.get('/hello', handler);
app.get('/myrandom.text', handler);        // . 은 리터럴
app.get(/z/, handler);                     // z 포함
app.get(/^ab.*cd$/, handler);              // ab…cd

// 쿼리 파라미터 — ?key=value, 명시적으로 추출
app.delete('/students', (req, res) => {
  const id = req.query.id;                 // DELETE /students?id=101
  res.send(`Deleted student ${id}`);
});

app.listen(3000);
```

## 요약
- 라우팅은 URI + HTTP 메서드 조합에 대한 응답 방식을 정하며 `app.METHOD(PATH, HANDLER)` 구조를 따른다.
- `res.send`는 문자열·객체·배열을 보낼 수 있고, `app.all`은 한 경로에서 모든 메서드를 받는다.
- 경로는 문자열·패턴·정규식이 가능하며 `-`와 `.`은 리터럴이다.
- 쿼리 파라미터는 `?` 뒤 키-값 쌍으로 소량 정보를 보내며 `req.query`로 명시적으로 꺼낸다.
