# Connecting to a MySQL database using a Python client

## 개요

- MySQL Connector/Python API를 임포트(별칭 포함)하고 connect 모듈에 자격 증명을 넘겨 연결을 만드는 방법

## 내용

### 임포트와 별칭

- `import mysql.connector` — 커넥터 API 임포트 후 실행.
- 매번 mysql.connector를 타이핑하는 것은 번거로우므로 **별칭**: `import mysql.connector as connector` — as 키워드로 이후 코드에서 connector로 인식하게 한다.
- 커넥터가 설치돼 있지 않으면 **ModuleNotFoundError**가 난다.

### 연결 생성

- 접근 연산자(.)로 모듈 기능 사용: `connection = connector.connect(...)`
- connect 모듈에 **키워드 인자**를 전달: 데이터베이스명, **사용자 이름(user)**, **비밀번호(password)** — 인가된 사용자만 접근할 수 있다 (예: user="Mario", password="cuisine").
- 기본값으로 Python과 데이터베이스가 **같은 머신(local host, IP 127.0.0.1)**에 설치된 경우에 연결이 성립한다. 기타 인자는 이후 강의에서 다룬다.

## 예시

```python
import mysql.connector as connector

connection = connector.connect(
    user="Mario",
    password="cuisine",
)
# 기본은 localhost(127.0.0.1)의 로컬 MySQL에 연결
```

## 요약

- import mysql.connector as connector로 API를 별칭과 함께 임포트한다.
- connector.connect(user=..., password=...)에 자격 증명을 넘겨 연결 객체를 만든다.
- 기본 연결 대상은 로컬 머신(localhost/127.0.0.1)의 데이터베이스다.
