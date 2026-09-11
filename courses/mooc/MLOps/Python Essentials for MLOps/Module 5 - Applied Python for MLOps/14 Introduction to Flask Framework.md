# Introduction to Flask Framework

## 개요
- 웹 프레임워크 **Flask**의 기본 구조 — 앱 인스턴스 생성, `@app.route()` 데코레이터로 라우트 노출, 에러 처리, 로컬 실행 — 를 간단한 예제로 다룬다.

## 내용

### 앱 인스턴스 생성
- `from flask import Flask` 후 `app = Flask(__name__)`처럼 앱 객체를 만든다.
- `__name__`을 관례적으로 쓰지만 사실 어떤 이름이든 상관없다.

### 라우트(route) 노출 — `@app.route()`
- `@app.route("/")`처럼 데코레이터로 특정 경로(예: 웹사이트의 루트 `/`)를 처리할 함수를 지정한다.
- 함수가 반환하는 값이 그대로 응답 본문이 된다 (plain text든 간단한 HTML이든).

### 에러 발생시키기 — `abort()`
- Flask가 제공하는 `abort()` 헬퍼로 원하는 HTTP 상태 코드와 에러 메시지를 강제로 발생시킬 수 있다 (예: `/error` 라우트에서 500 에러 발생시키기).

### 로컬 실행
- `app.run(host="0.0.0.0", port=8000, debug=True)`처럼 실행 — **`debug=True`는 로컬 개발용이며 프로덕션에서는 절대 쓰면 안 된다**(보안 경고가 뜸).
- `python webapp.py`로 실행 후 브라우저나 curl로 확인.
- 더 본격적인 Flask 애플리케이션은 Apache, NGINX 같은 별도 웹 서버 뒤에서 실행하는 경우가 많다.

## 예시
```python
from flask import Flask, abort

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, Flask!"

@app.route("/error")
def error():
    abort(500, "oh some error")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
```

## 요약
- Flask는 `Flask(__name__)`으로 앱을 만들고, `@app.route(경로)`로 함수를 특정 URL 경로에 연결한다.
- `abort()`로 원하는 HTTP 에러를 강제로 발생시킬 수 있으며, 로컬 실행 시 `debug=True`는 개발 전용으로만 사용해야 한다.
