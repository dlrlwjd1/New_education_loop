# Define the components of RESTful services

## 개요
- RESTful 서비스의 5가지 구성 요소 — **자원(resources), 요청 동사(request verbs), 요청 헤더, 요청 본문, 응답 상태 코드** — 를 레스토랑 관리 앱 예시로 설명하는 강의

## 내용

### 1. 자원(resources)
- RESTful 서비스의 **기본 빌딩 블록**이다. 데이터베이스의 레코드나 텍스트 파일 같은 다른 형태로 존재하는 **정적 또는 동적으로 갱신되는 데이터**를 담을 수 있다.
- 자원은 **URL로 주소를 지정**하고, **HTTP 메서드**가 자원에 연산을 수행한다.
- 자원은 **XML, JSON** 같은 여러 표현(representation)을 가질 수 있다.
- 예: 웹 앱 URL이 `http://www.example.com/employee` 라면 `http://www.example.com/employee/1` 은 사원 번호 1인 사람의 상세를 요청한다. 데이터는 JSON으로 변환되어 REST 클라이언트에 돌아간다.

**자원 선정 단계**
1. **비즈니스 도메인을 분석**한다.
2. 비즈니스 요구에 관련된 **명사(noun)를 추출**한다.
3. **API 소비자의 요구**를 식별해 소비자 상호작용 관점에서 API를 유의미하고 유용하게 만든다.
4. 명사(자원)를 식별한 뒤, API와의 상호작용을 **그 명사에 대한 HTTP 동사**로 모델링한다.

- 레스토랑 관리 앱 예: 관리 조직 아래 여러 **단일(singleton) 레스토랑**이 있고, 각 레스토랑 자원은 제공하는 **요리의 컬렉션**(채식·비채식·둘 다)을 가지며, 컬렉션은 다시 여러 단일 자원을 갖는다.

### 2. 요청 동사(request verbs)
- 특정 자원 또는 자원 컬렉션에 **수행할 동작**을 지정한다. 클라이언트는 요청에 REST 동사·헤더·본문을 HTTP 요청으로 보내고, REST는 **URL로 처리할 자원을 해석**한다.
- 많은 동사가 있지만 **6개**가 자주 쓰인다:

| 동사 | 동작 |
|---|---|
| **GET** | 서버에서 레코드 하나 또는 집합을 가져온다 |
| **POST** | 새 자원(집합)을 만든다 |
| **PUT** | 주어진 레코드를 갱신 또는 교체한다 |
| **PATCH** | 주어진 레코드를 수정한다 |
| **DELETE** | 주어진 자원을 삭제한다 |
| **OPTIONS** | 사용 가능한 REST 연산을 모두 가져온다 |

- 레스토랑 예: 전체 레스토랑은 `GET /restaurants`, 23번 레스토랑은 `GET /restaurant/23`, 새 레스토랑·요리 추가는 **POST**, 레스토랑 자원 삭제는 **DELETE**.

### 3. 요청 헤더(request headers)
- 서버가 응답을 맞춤화할 수 있도록 **요청 문맥 정보**를 제공하는 HTTP 헤더다.
- **Accept** — 응답의 허용·선호 형식을 나타낸다.
- **Authorization** — 인증 자격 증명 제공. 그 밖에 캐싱 제어, 사용자 에이전트·리퍼러 정보 등.
- 요청에 나타날 수 있는 모든 헤더가 명세상 "요청 헤더"는 아니다 — 예를 들어 **Content-Type** 은 **표현 헤더(representation header)** 로 분류된다.

### 4. 요청 본문(request body)
- REST API로 **데이터를 보내고 받는** 데 쓴다.
- **POST나 PUT** 을 쓰면 REST API 계약에 따라 **자원 정보 전체**를 보내야 한다 — 이 메서드들은 자원 전체에 대해 동작하기 때문이다.

### 5. 응답 상태 코드(response status code)
- REST 응답에는 요청 성공 여부를 나타내는 **HTTP 상태 코드**가 들어간다. 실패했다면 **오류 유형**도 알린다.
- **성공의 의미는 상대적**이며 요청에 쓴 HTTP 메서드에 따라 다르다.

| 코드 | 의미 |
|---|---|
| **200 OK** | 성공한 HTTP 요청의 표준 응답. GET이면 요청 자원에 해당하는 엔터티, POST면 동작 결과를 설명·포함하는 엔터티가 응답에 담긴다 |
| **400 Bad Request** | 명백한 클라이언트 오류로 서버가 요청을 처리할 수 없음 |
| **401 Unauthorized** | 403 Forbidden과 비슷하지만 **인증이 필요한데 실패했거나 아직 제공되지 않았을 때** 특별히 사용 |
| **404 Not Found** | 요청 자원을 찾을 수 없지만 나중에 생길 수 있음. 클라이언트의 후속 요청은 허용 |
| **500 Internal Server Error** | 예상치 못한 조건을 만났고 적절한 구체적 메시지가 없을 때의 일반 오류 |
| **502 Bad Gateway** | 서버가 게이트웨이·프록시로 동작하며 상위(upstream) 서버에서 잘못된 응답을 받음 |
| **503 Service Unavailable** | 서버가 요청을 처리할 수 없음. 대개 일시적 상태 |

## 예시
```text
자원 선정 (레스토랑 관리 앱)
비즈니스 도메인 분석 → 명사 추출: restaurant, dish → 소비자 요구 → HTTP 동사로 모델링

/restaurants            GET  전체 레스토랑
/restaurant/23          GET  23번 레스토랑
/restaurants            POST 새 레스토랑
/restaurant/23/dishes   GET  23번의 요리 컬렉션
/restaurant/23          DELETE
```

```http
GET /employee/1 HTTP/1.1
Host: www.example.com
Accept: application/json          ← 요청 헤더: 선호 형식
Authorization: Bearer <token>     ← 요청 헤더: 자격 증명

HTTP/1.1 200 OK
Content-Type: application/json    ← 표현 헤더
{ "id": 1, "name": "..." }
```

## 요약
- 자원은 URL로 주소를 갖고 HTTP 메서드로 조작되며 JSON·XML 등 여러 표현을 갖는다. 비즈니스 도메인의 명사를 뽑아 자원으로, 상호작용을 동사로 모델링한다.
- 자주 쓰는 동사는 GET·POST·PUT·PATCH·DELETE·OPTIONS 6개다.
- 요청 헤더(Accept·Authorization 등)가 문맥을 주고, POST·PUT의 본문은 자원 전체를 담는다. Content-Type은 표현 헤더다.
- 상태 코드는 200(성공)·400(클라이언트 오류)·401(인증 실패)·404(없음)·500(서버 오류)·502(게이트웨이 오류)·503(일시 불가)을 기본으로 안다.
