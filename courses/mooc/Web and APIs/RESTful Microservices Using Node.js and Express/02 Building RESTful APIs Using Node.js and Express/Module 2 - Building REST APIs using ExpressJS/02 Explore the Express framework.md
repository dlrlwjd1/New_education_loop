# Explore the Express framework

## 개요
- Express의 정의와 특성(미들웨어 기반, 단일 스레드·비동기, connect 기반), 장점, `express()`와 **`app.listen`의 인자 규칙**, 설치 방법을 다루는 강의

## 내용

### Express란
- **빠르고, 특정 방식을 강요하지 않으며(unopinionated), 최소한이고 유연한** Node.js 웹 애플리케이션 프레임워크다. 웹·모바일 애플리케이션을 위한 견고한 기능 집합을 제공한다.
- **미들웨어 기반** — 들어오는 요청을 **미들웨어의 체인**으로 흘려보낸다. 각 미들웨어에서 요청으로 무언가를 하고, 데이터를 읽고, 조작하고, 사용자 인증 여부를 확인하고, 즉시 응답을 보낼 수도 있다.
- **단일 스레드·비동기**이며, Node.js 미들웨어 모듈 **connect** 를 기반으로 한다.
- **SPA 클라이언트, 다중 페이지, 하이브리드 애플리케이션**을 위해 특별히 설계되었다.
- Node.js 기능을 가리지 않으면서 **기본 웹 애플리케이션 기능의 얇은 계층**을 제공한다. 많은 인기 프레임워크가 Express 기반이다.
- 수많은 **HTTP 유틸리티 메서드와 미들웨어**로 견고한 API를 빠르고 쉽게 만든다.

### 장점
- Node.js 플랫폼의 웹 앱 개발을 **빠르고 쉽게** 하며 **구성·커스터마이즈가 쉽다.**
- 브라우저가 렌더링하는 **HTML·CSS·JS 같은 정적 파일**을 쉽게 서비스한다.
- **강력한 라우팅 라이브러리** — REST API의 라우팅을 잘 지원한다.
- **미들웨어**로 여러 기능을 쉽게 구현한다.
- 최고의 사용 사례는 **고도로 모듈화된 RESTful 백엔드** 를 만드는 것이다.

### Express 서버 시작
- **`express` 모듈을 import** 한다. `express` 함수는 모듈이 export하는 **최상위 함수**로 Express 애플리케이션을 만들며, 관례상 **`app`** 이라 부른다.
- **`app.listen`** 이 지정한 호스트와 포트의 연결을 바인딩하고 듣는다.

### `app.listen(port[, host[, backlog]][, callback])` 규칙
- **port** — 앱이 들을 포트
- **host** — 앱이 들을 호스트 IP. **port를 지정한 경우에만** 지정할 수 있다(문법에서 host가 port 뒤 괄호 안에 있으므로).
- **backlog** — 대기 연결 큐의 최대 길이. **port와 host를 지정한 경우에만** 지정할 수 있다.
- **callback** — 앱이 포트에서 듣기 시작하면 실행되는 함수. **별도 괄호 그룹**이므로 port·host·backlog 없이 **callback만** 지정할 수도 있다.

### 설치
1. **`npm init -y`** 로 `package.json`을 만든다.
2. **`npm install express`** 로 Express를 설치한다.
- `node_modules`를 보면 Express 설치 시 많은 모듈이 함께 설치된다 — 애플리케이션은 Express에 의존하고, Express는 다시 여러 의존성을 갖는다.

## 예시
```bash
npm init -y
npm install express
```

```javascript
const express = require('express');
const app = express();                       // 관례상 app

app.get('/', (req, res) => res.send('Hello'));

// app.listen 인자 규칙
app.listen(3000);                            // port
app.listen(3000, '127.0.0.1');               // port + host
app.listen(3000, '127.0.0.1', 511);          // port + host + backlog
app.listen(3000, () => console.log('up'));   // port + callback
app.listen(() => console.log('up'));         // callback만 (별도 괄호 그룹)
```

```text
요청 → [미들웨어 1] → [미들웨어 2] → … → 응답
        읽기·조작·인증 확인·즉시 응답 가능
```

| 특성 | 내용 |
|---|---|
| 성격 | 빠름 · unopinionated · 최소 · 유연 |
| 구조 | 미들웨어 체인, connect 기반 |
| 실행 | 단일 스레드 · 비동기 |
| 대상 | SPA · 다중 페이지 · 하이브리드 |
| 최고 사용 사례 | 모듈화된 RESTful 백엔드 |

## 요약
- Express는 connect 기반의 미들웨어 체인으로 요청을 처리하는 최소·유연한 Node.js 프레임워크다.
- 강력한 라우팅과 미들웨어로 모듈화된 RESTful 백엔드를 만드는 데 가장 잘 맞는다.
- `express()`가 앱을 만들고 `app.listen(port[, host[, backlog]][, callback])`은 host는 port 뒤에, backlog는 host 뒤에만 올 수 있으며 callback은 단독으로도 쓸 수 있다.
- `npm init -y` 후 `npm install express`로 설치하며 Express 자체도 여러 의존성을 끌어온다.
