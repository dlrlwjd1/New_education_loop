# Error Handling

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/python-project-for-ai-application-development/lecture/axovj/error-handling)

## 개요
- API 서비스가 반환하는 HTTP 상태 코드(status code)의 종류를 구분한다.
- Flask에서 오류 처리(error handling)가 동작하는 방식을 이해한다.
- API 엔드포인트에서 오류를 반환하는 방법을 익힌다.

## 내용

### HTTP 상태 코드의 구조
모든 HTTP 응답에는 세 자리 코드가 포함되며, 이 코드가 오류와 성공 상태를 나타낸다. 유효한 범위는 **100 ~ 599**이고, 100 단위로 카테고리가 나뉜다. 이 코드를 해석해 처리하는 책임은 클라이언트(client)에 있다.

| 범위 | 의미 |
|---|---|
| 100 ~ 199 | 요청이 수신되었음을 알리는 정보성(informational) 응답 |
| 200 ~ 299 | 요청이 수신되었고 요청한 작업이 **성공**함 |
| 300 ~ 399 | 서버에서 **리다이렉션(redirection)** 이 발생함 |
| 400 ~ 499 | **요청(request) 쪽 오류** |
| 500 ~ 599 | **서버(server) 쪽 오류** |

예를 들어 클라이언트가 존재하지 않는 리소스에 GET 요청을 보내면 `404`를 반환하고, 잘못된 형식의 요청에는 `400`을 반환한다.

### 이 코스에서 자주 쓰는 상태 코드

| 코드 | 의미 |
|---|---|
| 200 | 기본값. 요청이 성공함 |
| 201 | 서버가 리소스를 성공적으로 **생성**함 |
| 202 | 요청이 접수되어 **처리 중**임. 배치(batch) 처리에서 흔함 |
| 204 | 요청은 성공했으나 **반환할 내용이 없음**. 브라우저가 아무 동작도 하지 않길 원할 때 유용 (예: 사용자가 현재 페이지에 그대로 머무름) |
| 400 | 유효하지 않은 요청. 파라미터 누락·형식 오류 등 |
| 401 | 자격 증명(credentials)이 없거나 유효하지 않음 |
| 403 | 자격 증명은 있으나 해당 요청을 수행하기에 **권한이 부족**함 |
| 404 | 서버가 리소스를 찾지 못함 |
| 405 | 요청한 **작업(operation)이 지원되지 않음** |
| 500 | 서버 측 오류 |

### Flask의 기본 동작과 명시적 지정
- `@app.route` 메서드에서 값을 반환하면 Flask 서버가 **자동으로 `200 OK`** 를 반환한다.
- `jsonify` 메서드로 응답할 때도 기본값은 `200`이다.
- 기본값과 다른 코드를 반환하려면, Flask가 제공하는 두 가지 방법을 쓴다.
  1. 응답과 상태 코드를 **튜플(tuple)** 로 함께 반환한다.
  2. `make_response` 메서드로 상태 코드를 **명시적으로** 설정한다.

### 애플리케이션 레벨 오류 처리
Flask는 개별 엔드포인트가 아니라 **애플리케이션 전체 수준**에서 오류 메시지를 처리하는 방법을 제공한다. 404 오류를 처리해 "API not found" 메시지와 404 코드를 반환하는 핸들러, 500 오류를 처리해 "something went wrong on the server" 메시지를 반환하는 핸들러를 각각 등록할 수 있다.

## 예시

### 튜플로 상태 코드 함께 반환

```python
@app.route("/")
def index():
    return "<b>My first application in action</b>", 200
```

### make_response로 명시적 지정

```python
from flask import make_response

@app.route("/")
def index():
    return make_response("<b>My first application in action</b>", 200)
```

### 엔드포인트에서 올바른 코드 반환하기

쿼리 파라미터 `q`를 받아 데이터베이스를 조회하고, 리소스가 있으면 반환(암묵적 200), 없으면 404를 반환한다.

```python
from flask import request, make_response

@app.route("/search")
def search_response():
    query = request.args.get("q")
    if not query:
        return make_response({"message": "input parameter missing"}, 422)

    result = fetch_from_database(query)
    if result:
        return result                                   # 암묵적으로 200
    return make_response({"message": "resource not found"}, 404)
```

curl로 호출한 결과:

```bash
# 1) 쿼리 파라미터 없이 호출 → 422
curl -i "http://localhost:5000/search"
# message: input parameter missing / status 422

# 2) 올바른 리소스 ID로 호출 → 200
curl -i "http://localhost:5000/search?q=<valid-id>"
# 본문에 리소스, status 200

# 3) 존재하지 않는 리소스로 호출 → 404
curl -i "http://localhost:5000/search?q=<missing-id>"
# message: resource not found / status 404
```

### 애플리케이션 레벨 오류 핸들러

```python
@app.errorhandler(404)
def api_not_found(error):
    return {"message": "API not found"}, 404


@app.errorhandler(500)
def server_error(error):
    return {"message": "something went wrong on the server"}, 500
```

## 요약
- HTTP 응답은 요청 처리 결과를 알리기 위해 반드시 상태 코드를 포함한다.
- 상태 코드는 성공, 사용자 오류, 서버 오류 등 여러 클래스로 나뉜다 (100·200·300·400·500번대).
- Flask는 응답과 함께 성공 코드 `200`을 암묵적으로 반환한다.
- 튜플 반환 또는 `make_response`로 상태 코드를 명시적으로 지정할 수 있다.
- Flask는 `@app.errorhandler`로 애플리케이션 레벨 오류 핸들러를 제공한다.
