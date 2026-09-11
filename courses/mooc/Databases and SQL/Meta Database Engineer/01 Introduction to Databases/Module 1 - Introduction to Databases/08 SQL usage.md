# SQL usage

## 개요

- SQL로 수행하는 작업(CRUD)과 SQL의 하위 언어(sublanguage) 구분: DDL, DML, DQL, DCL
- 각 하위 언어의 핵심 명령어

## 내용

### CRUD 연산

- 대학(college) 데이터베이스를 새로 만든다면: 테이블 생성 → 데이터 삽입 → 변경 시 수정 — 전부 SQL과 CRUD 연산으로 가능하다.
- **CRUD = Create(생성/삽입), Read(읽기), Update(갱신), Delete(삭제)** — 데이터베이스 작업에서 가장 흔한 작업.

### SQL의 하위 언어 4가지

**DDL (Data Definition Language, 데이터 정의 언어)** — 데이터베이스와 객체(테이블 등)의 구조를 정의:

- `CREATE` — 데이터베이스·테이블 등 저장할 객체 생성
- `ALTER` — 이미 만든 객체의 구조 변경 (예: 테이블에 새 컬럼 추가)
- `DROP` — 테이블 같은 객체를 데이터베이스에서 제거

**DML (Data Manipulation Language, 데이터 조작 언어)** — 데이터 자체를 조작. 대부분의 CRUD 연산이 여기에 속한다:

- `INSERT` — 필드와 값을 지정해 테이블에 데이터 추가
- `UPDATE` — 이미 삽입된 데이터 수정
- `DELETE` — 지정한 데이터 제거

**DQL (Data Query Language, 데이터 질의 언어)** — 저장된 데이터 읽기/검색:

- `SELECT` — 하나 또는 여러 테이블에서 데이터 검색. 원하는 필드를 지정하고 필터 기준을 적용할 수 있다

**DCL (Data Control Language, 데이터 제어 언어)** — 데이터베이스 접근 제어:

- `GRANT` — 사용자에게 데이터 접근 권한 부여
- `REVOKE` — 이미 부여한 접근 권한 회수

## 예시

| 하위 언어 | 역할 | 명령어 |
|---|---|---|
| DDL | 구조 정의 | CREATE, ALTER, DROP |
| DML | 데이터 조작 | INSERT, UPDATE, DELETE |
| DQL | 데이터 조회 | SELECT |
| DCL | 접근 제어 | GRANT, REVOKE |

## 요약

- SQL은 데이터베이스와 사용자 사이의 인터페이스이며, 가장 흔한 작업은 CRUD다.
- 용도에 따라 DDL(정의), DML(조작), DQL(질의), DCL(제어)로 나뉜다.
- CREATE/ALTER/DROP은 구조를, INSERT/UPDATE/DELETE는 데이터를, SELECT는 조회를, GRANT/REVOKE는 권한을 다룬다.
