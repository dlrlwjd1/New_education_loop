# What is Structured Query Language?

## 개요

- SQL(Structured Query Language)이 무엇이고 데이터베이스에서 어떤 역할을 하는지 소개하는 짧은 강의
- CRUD 연산과 DBMS(Database Management System)의 역할

## 내용

### 데이터베이스와의 상호작용

- 데이터베이스 엔지니어는 데이터를 다루기 위해 데이터베이스와 상호작용해야 하며, 그 수단이 **SQL**("에스큐엘" 또는 "시퀄"로 발음)이다.
- 대표적 상호작용은 데이터의 **생성(create)·읽기(read)·갱신(update)·삭제(delete)** — 즉 **CRUD 연산**이다.

### SQL이란

- **모든 데이터베이스에 쓸 수 있는 표준 언어**.
- 특히 **관계형 데이터베이스**와의 작업에 유용하다 — 정형 데이터(structured data)와 상호작용할 언어가 필요하기 때문.
- SQL로 상호작용할 수 있는 관계형 데이터베이스 예: **MySQL, PostgreSQL, Oracle, Microsoft SQL Server**

### DBMS의 역할

- 데이터베이스가 SQL 명령을 해석·실행하게 해 주는 것이 **DBMS(Database Management System)**다.
- 개발자는 모든 SQL 명령을 DBMS를 통해 실행하며, DBMS가 SQL 명령을 **하부 데이터베이스가 이해하는 형태로 변환**하는 책임을 진다.

## 요약

- SQL은 데이터베이스(특히 관계형)와 상호작용하는 표준 언어다.
- 핵심 연산은 CRUD(생성·읽기·갱신·삭제)다.
- DBMS가 SQL 명령을 데이터베이스가 이해할 수 있는 형태로 변환·실행한다.
