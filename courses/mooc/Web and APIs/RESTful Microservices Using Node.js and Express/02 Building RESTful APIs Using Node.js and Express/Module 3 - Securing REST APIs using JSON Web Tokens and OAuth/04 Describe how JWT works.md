# Describe how JWT works

## 개요
- 컨퍼런스 출입증 비유로 **토큰 기반 인증**을 설명하고, JWT의 **동작 5단계**, **구조(header·payload·signature)**, **클레임 종류와 등록 클레임 7개**, 그리고 애플리케이션의 **데이터 흐름**을 정리하는 강의

## 내용

### 비유 — 컨퍼런스 출입증
- 컨퍼런스에 가면 그 행사 전용 자격 증명, 즉 **출입증(pass)** 을 받는다.
- 첫날 정부 발행 신분증을 제시하면 신분증·얼굴·등록 정보를 대조한다. **인증되면 출입증을 받는다.**
- 다음 날 다시 오거나 별도 세션에 들어갈 때는 **신분증이 아니라 출입증**을 확인한다.
- **세션 ID 방식**에서는 모든 게이트키퍼가 **전체 참가자 목록**을 갖고 매번 신분증을 그 목록과 대조해야 한다 — 매일이 아니라 **새 구역에 들어갈 때마다**.
- **토큰 방식**에서는 게이트키퍼가 목에 걸린 **행사 자격 증명만으로** 신원을 인증하고 접근을 인가한다. 추가 신분증도, 거대한 목록도 필요 없다.

### 토큰 기반 인증
- 서버가 제공한 **보안 토큰**으로 서버·네트워크·보안 시스템에 로그인하려는 사용자를 인증하는 기법이다.
- 서버로의 **모든 요청에 서명된 토큰**이 딸려 오고, 서버는 응답 전에 토큰의 **진위를 검증**한다.
- 사용자는 이름·비밀번호를 입력해 토큰을 얻고, 그 뒤로는 **이름·비밀번호를 다시 쓰지 않고** 특정 자원을 가져온다. 토큰을 얻으면 **일정 기간** 그 자원에 접근할 수 있다.

### JWT 동작 5단계
1. 사용자가 서버의 로그인 시스템(이름·비밀번호, Facebook·Google·Twitter 로그인 등)으로 **인증 서버에 로그인**한다.
2. 인증 서버가 **JWT를 만들어 사용자에게 보낸다.**
3. 사용자가 애플리케이션에 API 호출을 할 때 **JWT를 함께 넘긴다.**
4. 애플리케이션 서버는 **들어온 JWT가 인증 서버가 만든 것인지 검증**하도록 구성되어 있다.
5. 사용자가 JWT를 붙여 API를 호출하면 애플리케이션은 JWT로 **그 호출이 인증된 사용자에게서 왔는지 확인**한다.

### JWT 구조
**점(.)으로 구분된 세 문자열** — header · payload · signature

| 부분 | 내용 |
|---|---|
| **header** | 두 부분 — 토큰 타입(**JWT**)과 서명 알고리즘(**HMAC SHA256**) |
| **payload** | JWT의 본체. **클레임(claim)** 이라고도 한다. 클레임은 엔터티에 관한 진술과 부가 데이터이며 **registered·public·private** 세 종류다 |
| **signature** | **header + payload + secret** 세 요소의 해시 |

- JWT는 .NET, Python, Node.js, Java, PHP, Ruby, Go, JavaScript, Haskell에서 동작한다.
- **자기완결적(self-contained)** 이라 HTTP 헤더 안, URL, POST 요청 본문으로 쓰기에 완벽하다.
- 페이로드에는 여러 클레임을 넣을 수 있다 — 등록 클레임 **iss, exp**, 공개 클레임 **name, admin** 등.

### 등록 클레임 7개
| 클레임 | 의미 |
|---|---|
| **iss** | 토큰 발행자(issuer) |
| **sub** | 토큰 주체(subject) |
| **aud** | 토큰 대상(audience) |
| **exp** | **가장 자주 쓰는** 등록 클레임. 만료를 숫자 날짜로 정의하며 **현재 시각 이후**여야 한다 |
| **nbf** | 이 시각 **이전**에는 JWT를 처리하면 안 된다(not before) |
| **iat** | JWT 발행 시각(issued at). JWT의 **나이**를 판단할 때 쓴다 |
| **jti** | JWT 고유 식별자. **재전송(replay) 방지**에 쓰며 **일회용 토큰**에 유용하다 |

### 애플리케이션 데이터 흐름
1. 사용자가 이름·비밀번호로 로그인한다.
2. 클라이언트가 로그인 정보를 서버에 보내며 JWT를 요청한다.
3. 서버가 로그인을 검증하고 JWT를 생성해 클라이언트에 돌려준다.
4. 사용자가 클라이언트에서 보호된 자원을 요청한다.
5. 클라이언트가 자원을 요청하며 **auth 헤더에 JWT** 를 포함한다.
6. 서버가 응답한다 — **JWT를 검증하고, JWT에서 사용자 정보를 얻어**, 클라이언트에 응답을 보낸다.

## 예시
```text
JWT = header . payload . signature

header    { "alg": "HS256", "typ": "JWT" }
payload   { "iss": "auth.example.com", "sub": "user102", "exp": 1735689600,
            "iat": 1735686000, "name": "Tony", "admin": false }
signature HMACSHA256( base64url(header) + "." + base64url(payload), secret )
```

```text
[세션 ID]  게이트마다 전체 명단 대조 (서버가 상태 저장)
[토큰]     출입증(JWT)만 검증 (서버는 서명만 확인 → 무상태)

1 로그인 ─▶ 인증 서버
2 ◀─ JWT
3 API 호출 + JWT ─▶ 앱 서버
4 앱 서버: "인증 서버가 만든 JWT인가?" 검증
5 통과 → 응답
```

```javascript
// Node.js 흐름 예 — 헤더에서 JWT 검증
const jwt = require('jsonwebtoken');

app.get('/api/v1/users', (req, res) => {
  const token = req.headers.authorization;
  try {
    const claims = jwt.verify(token, process.env.AUTH_SECRET);   // 서명·exp 검증
    res.send({ user: claims.name });                             // 페이로드에서 사용자 정보
  } catch (e) {
    res.status(401).send('Invalid token');
  }
});
```

## 요약
- 토큰 기반 인증은 한 번 인증받아 얻은 서명된 토큰을 매 요청에 붙이고 서버가 진위를 검증하는 방식이다 — 컨퍼런스 출입증과 같다.
- JWT는 인증 서버가 발행하고, 애플리케이션 서버는 그 JWT가 인증 서버가 만든 것인지 검증해 인증된 사용자를 판별한다.
- 구조는 header(타입·알고리즘)·payload(클레임)·signature(header+payload+secret 해시) 셋을 점으로 이은 것이다.
- 클레임은 registered·public·private 세 종류이고, 등록 클레임 iss·sub·aud·exp·nbf·iat·jti 중 exp가 가장 자주 쓰인다.
