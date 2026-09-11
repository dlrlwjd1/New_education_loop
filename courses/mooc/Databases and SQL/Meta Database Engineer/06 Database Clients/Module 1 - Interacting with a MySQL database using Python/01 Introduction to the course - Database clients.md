# Introduction to the course: Database clients

## 개요

- Database Clients 강좌에서 배울 내용을 모듈별로 안내하는 오리엔테이션 강의 — Python 클라이언트로 MySQL을 다루는 전 과정

## 내용

### Module 1 — Python으로 MySQL과 상호작용

- MySQL-Python 연결과 pip를 이용한 패키지 설치
- 프런트엔드 Python 클라이언트 설치 후 백엔드 MySQL 데이터베이스에 연결
- CRUD 연산을 위한 Python-MySQL 통신 수립, **커서(cursor) 객체** 접근
- Python으로 데이터베이스·테이블 생성, 변경 **커밋(commit)**
- 커서의 특성(읽기 전용·비스크롤·asensitive)과 커서 클래스(통신 번역 역할), 클래스 종류, 요청 인터리빙 기초

### Module 2 — Python으로 MySQL 쿼리 수행

- 레코드 생성·읽기, 갱신·삭제(UPDATE·DELETE)와 커밋
- 필터링·정렬 기법의 Python 적용, 다양한 JOIN으로 테이블 결합

### Module 3 — 고급 데이터베이스 클라이언트

- MySQL 함수의 중요성과 유형 복습, Python으로 함수 접근
- datetime 함수 활용과 데이터베이스 갱신
- 저장 프로시저 복습(함수와의 차이), **callproc() 메서드**로 접근, 구분자(delimiter) 사용
- **연결 풀링(connection pooling)** — 개념·동작·이점, MySQL connection pool 모듈 구현

### Module 4 — 데이터베이스 클라이언트 작업

- 총정리와 평가

## 요약

- 이 강좌는 Python 클라이언트로 MySQL 연결 → 커서 → CRUD → 고급 쿼리(조인) → 함수·프로시저 → 연결 풀까지 데이터베이스 클라이언트 개발 전 과정을 다룬다.
