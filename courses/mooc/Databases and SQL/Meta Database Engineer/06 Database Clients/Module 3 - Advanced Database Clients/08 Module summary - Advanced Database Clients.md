# Module summary: Advanced Database Clients

## 개요

- Module 3(고급 데이터베이스 클라이언트)에서 배운 내용을 되짚는 요약 강의

## 내용

### 레슨 1 — MySQL 함수와 Python

- 함수의 이점(반복 작업 제거)과 5개 범주(문자열·숫자·날짜/시간·비교·제어 흐름) 복습
- Python에서 함수 접근, datetime 함수 활용

### 레슨 2 — 저장 프로시저와 Python

- 프로시저의 이점(일관성·재사용성·단일 블록 유지보수), CREATE/CALL/DROP + BEGIN...END
- Python과 함께 쓰면 성능 향상·트래픽 감소
- callproc 호출, next 함수로 결과 수령, fetchall — 결과는 튜플의 리스트로 반환, 인덱싱 또는 for 루프로 출력

### 레슨 3 — 연결 풀

- 연결 풀링 = 클라이언트-데이터베이스 연결을 빠르고 효율적으로 만드는 연결 풀의 생성·관리
- MySQLConnectionPool 모듈: pool_name·pool_size·connection_id 속성, get_connection·is_connected·close 메서드
- 다중 풀 구성으로 모든 사용자에게 가용 연결 보장

## 요약

- 함수·저장 프로시저의 Python 활용과 연결 풀 생성·관리까지 고급 클라이언트 기술을 갖췄다. 다음 모듈은 데이터베이스 클라이언트 실전 작업이다.
