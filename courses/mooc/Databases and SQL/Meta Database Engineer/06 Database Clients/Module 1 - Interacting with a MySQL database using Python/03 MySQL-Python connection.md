# MySQL/Python connection

## 개요

- Python 애플리케이션과 MySQL 데이터베이스를 잇는 API(드라이버/클라이언트)의 개념과 연결 성립 과정

## 내용

### 연결의 기초

- Python-MySQL 연결은 **API(application programming interface)** — 드라이버 또는 클라이언트라고도 불림 — 를 통해 성립한다.
- API는 프런트엔드 Python 애플리케이션과 백엔드 MySQL 데이터베이스 사이의 **다리 역할을 하는 프로그램 집합**이다.
- 연결 가능한 API: SQLAlchemy, mysqlclient, **MySQL Connector/Python(가장 일반적, 이 강좌의 초점)**.

### 연결 성립 흐름

1. Python 애플리케이션이 커넥터 API로 **연결 요청** 전송 (데이터베이스 접근·조회 허가 요청)
2. API가 요청을 백엔드 MySQL로 전달
3. 데이터베이스가 연결을 수락하고 API를 통해 **연결 확인 메시지**를 애플리케이션에 회신
4. 연결이 성립되면 커넥터 클래스에서 **커서(cursor) 인스턴스를 생성**
5. 커서 객체로 Python에서 **SQL 쿼리 실행**

### 활용 예 (Little Lemon)

- 손님의 저녁 예약 도착 시간을 확인해야 할 때: 예약 일시 데이터는 백엔드에 있고, Python 앱이 **커서 객체의 execute**로 요청을 수행 → 레코드가 **튜플 형태**로 커서를 통해 반환(각 손님의 예약 슬롯) → 요청 완료 후 **커서 객체와 연결을 닫는다.**

## 요약

- Python과 MySQL은 API(대표적으로 MySQL Connector/Python)로 연결되며, 요청→전달→수락→확인의 흐름으로 성립한다.
- 연결 후에는 커서 객체를 만들어 execute로 쿼리를 수행하고 결과를 튜플로 받는다.
- 작업이 끝나면 커서와 연결을 닫는다.
