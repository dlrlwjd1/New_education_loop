# Exploring CRUD in Deno KV Using KVAdmin.py

## 개요
- 관리 도구(pgAdmin 등)가 아직 없는 Deno KV를 다루기 위해 강사가 직접 만든 `kvadmin.py`(Python 클라이언트)와 Hono 기반 Deno 웹 서버로, 웹 서비스를 통해 CRUD를 수행하는 구조를 설명하는 강의

## 내용
### 왜 직접 관리 도구를 만드는가
- psql이나 phpMyAdmin 같은 표준 관리 도구가 Deno KV에는 아직 없다(KV 대시보드에서 조회만 가능, 삽입·삭제 불가). 그래서 Python 클라이언트(`kvadmin.py`)와 Deno 서버(JavaScript, Hono 프레임워크 사용) 한 쌍을 직접 만들어 웹 서비스 프로토콜로 통신하게 한다.

### 서버 측: Hono로 라우팅
- `const app = new Hono()`로 서버 객체를 만들고, `app.get('/hello', async (c) => {...})`처럼 경로별 핸들러를 등록한다. `Deno.serve(app.fetch)`로 요청을 수신한다.
- 응답은 JavaScript 객체(`{answer: 'world'}`)를 JSON으로 직렬화해 반환한다 — JSON에서는 키가 반드시 따옴표로 감싸인 문자열이어야 한다는 점이 JavaScript 객체 리터럴과의 기술적 차이로 지적된다.

### 클라이언트 측: kvadmin.py 명령
- `set /book/hamlet {"title":"Hamlet", "language":"English", "author":"William Shakespeare", "isbn":42}`처럼 슬래시 구분 키와 JSON 본문을 지정해 POST 요청을 보낸다. 응답에는 `ok: true`와 버전 타임스탬프(version timestamp)가 포함된다 — 이 타임스탬프는 동시에 여러 `set`이 경합할 때 어느 것이 "이겼는지" 판정하는 최종적 일관성의 핵심 장치다.
- `get /book/hamlet`으로 저장된 JSON을 조회하며, 함께 반환되는 버전 타임스탬프로 "이 값이 모든 것이 확정된 이후의 값인지"를 확인할 수 있다.
- `list /book`(접두사 스캔, SQL의 SELECT와 유사)과 `delete /book/hamlet`(HTTP DELETE)도 지원한다.

### 서버 코드 구조
- `const kv = await Deno.openkv()`로 현재 애플리케이션 컨텍스트의 KV 데이터베이스를 연다 — 별도의 연결 문자열이나 비밀번호가 필요 없다.
- 각 경로 핸들러에서 토큰(비밀 키) 검증 후, URL의 나머지 경로를 분할해 배열로 만들어 `kv.get`/`kv.set`/`kv.delete`에 전달한다. `list` 결과는 페이징을 위한 커서(cursor, SQL의 LIMIT과 유사한 개념)를 함께 반환한다.

## 예시
```javascript
// 서버 (Hono)
app.get('/kv/get/*', async (c) => {
  checkToken(c);
  const key = c.req.param('*').split('/');
  const result = await kv.get(key);
  return c.json(result);
});
```
```bash
# 클라이언트 (kvadmin.py)
set /book/hamlet {"title": "Hamlet", "language": "English", "author": "William Shakespeare", "isbn": 42}
get /book/hamlet
list /book
delete /book/hamlet
```

## 요약
- Deno KV 전용 관리 도구가 없어 강사가 Python 클라이언트(kvadmin.py) + Deno/Hono 서버로 직접 웹 서비스 기반 CRUD 도구를 만들었다.
- `set`/`get`/`list`/`delete`는 각각 SQL의 INSERT/SELECT(단일)/SELECT(범위)/DELETE에 대응하며, 키는 항상 슬래시로 구분된 배열로 다뤄진다.
- 응답에 포함되는 버전 타임스탬프는 동시 쓰기 경합을 해결하는 최종적 일관성의 핵심 메커니즘이다.
