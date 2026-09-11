# Code Walkthrough - KVAdmin.py Client and Server

## 개요
- `kvadmin.py`(Python 클라이언트)와 Deno/Hono 서버(`main.ts`)의 실제 소스 코드를 한 줄씩 따라가며 set/get/list/delete/delete_prefix가 어떻게 구현되는지 보여주는 심화 코드 강의

## 내용
### 클라이언트(kvadmin.py)의 set 명령 흐름
- 명령을 공백 기준으로 나눠 첫 조각(`set`)과 두 번째 조각(경로, 예: `/book/hamlet`)을 얻고, 이를 조합해 URL(`.../kv/set/book/hamlet?token=...`)을 만든다.
- 세 번째 조각(JSON 본문)이 없으면 대화식으로 입력받고, `readjson` 헬퍼로 파싱·검증한다. 이후 `Content-Type`을 설정해 POST 요청을 보내며, 콜드 스타트에 대비해 30초 타임아웃을 둔다.

### 서버(Hono)의 kv.set 처리
- `const kv = await Deno.openkv()`로 현재 애플리케이션에 자동으로 연결된 KV 데이터베이스를 연다 — 별도의 접속 문자열이나 비밀번호가 필요 없다는 점이 Postgres와의 큰 차이로 강조된다.
- `app.post('/kv/set/*', ...)` 라우트에서 토큰을 검증한 뒤, URL의 나머지 경로(`c.req.param('*')`)를 `/`로 분할해 배열(예: `["second", "thing"]`)로 만들고, 요청 본문(JSON)과 함께 `kv.set(key, value)`를 호출한다. 결과로 타임스탬프와 성공 여부가 반환된다.

### get / list / delete / delete_prefix
- `get`은 배열 키로 `kv.get(key)`를 호출해 `{key, value}` 형태로 반환한다 — 값이 없으면 빈 값이 올 수도 있다(단순 마커 레코드의 경우).
- `list`는 접두사(prefix)로 `kv.list({prefix: key})`를 호출해 일치하는 레코드 배열을 반환하며, 결과가 많을 경우를 위한 커서(cursor) 기반 페이징(SQL의 LIMIT과 유사)도 지원한다.
- `delete`는 정확한 키 하나를 HTTP DELETE로 삭제한다. `delete_prefix`는 먼저 `kv.list`로 해당 접두사의 모든 키를 찾은 뒤 하나씩 순회하며 삭제하는 2단계 구현이다 — Deno KV 자체에는 "접두사 일괄 삭제" API가 없기 때문이다.
- `full_reset`처럼 토큰만 확인하고 전체 데이터를 삭제하는 위험한 명령도 있다는 점, 그리고 이런 명령은 실제 운영에서는 신중히 다뤄야 한다는 점이 언급된다.

### 코드 규모와 학습 부담
- 전체 구현은 클라이언트(Python) 약 200줄, 서버(JavaScript) 약 157줄로 비교적 작다. 강사는 수강생에게 JavaScript를 직접 작성할 것을 요구하지 않으며, 코드를 읽고 필요시 자신의 배포본에 맞게 수정할 수 있는 정도의 이해만 요구한다고 재확인한다.

## 예시
```javascript
// 서버: kv.set 처리
app.post('/kv/set/*', async (c) => {
  checkToken(c);
  const key = c.req.param('*').split('/');
  const body = await c.req.json();
  const result = await kv.set(key, body);
  return c.json(result);
});

// 서버: 접두사 삭제
app.delete('/kv/delete_prefix/*', async (c) => {
  checkToken(c);
  const prefix = c.req.param('*').split('/');
  const entries = kv.list({ prefix });
  for await (const entry of entries) {
    await kv.delete(entry.key);
  }
});
```

## 요약
- `Deno.openkv()`는 별도 접속 정보 없이 현재 애플리케이션의 KV 데이터베이스를 바로 열어준다는 점에서 전통적 DB 연결과 크게 다르다.
- set/get/delete는 정확한 배열 키로, list/delete_prefix는 키 접두사로 동작하며, 접두사 삭제는 목록 조회 후 순회 삭제로 구현해야 한다.
- 전체 구현이 350여 줄 수준으로 비교적 단순해, JavaScript를 몰라도 읽고 커스터마이징하는 데 큰 무리가 없다.
