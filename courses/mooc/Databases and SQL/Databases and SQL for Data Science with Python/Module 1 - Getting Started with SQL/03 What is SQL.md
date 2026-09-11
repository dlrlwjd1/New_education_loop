# What is SQL?

## SQL이란?

**SQL(Structured Query Language, 구조화된 질의 언어)** 은 관계형 데이터베이스에서 데이터를 쿼리하거나 추출하기 위해 사용하는 언어입니다.

---

## 데이터(Data)란?

**데이터**는 단어, 숫자, 심지어 사진의 형태로 된 사실(facts)의 집합입니다.

- 데이터는 모든 비즈니스에서 가장 중요한 자산 중 하나
- 거의 모든 곳에서 수집되고 사용됨
- 예시: 은행은 고객의 이름, 주소, 전화번호, 계좌번호 등을 저장 / 신용카드사, PayPal 계정도 마찬가지
- 데이터는 중요하므로 **보안이 필요**하고, **빠르게 저장·접근**할 수 있어야 함 → 이것이 데이터베이스가 필요한 이유

---

## 데이터베이스(Database)란?

**데이터베이스**는 데이터의 저장소(repository)이자, 데이터를 저장하는 프로그램입니다.

- 데이터의 추가(Add), 수정(Modify), 쿼리(Query) 기능을 제공
- 데이터는 다양한 형태로 저장 가능
- 데이터가 **표 형식(tabular form)** 으로 저장되면 → **관계형 데이터베이스(Relational Database)**
  - 스프레드시트처럼 **열(Column)과 행(Row)** 으로 구성
  - 열(Column): 항목의 속성 (예: LastName, FirstName, Email, City 등)
  - 테이블(Table): 연관된 데이터의 집합 (예: 직원 목록, 도서 저자 목록)
  - 관계형 데이터베이스에서는 테이블 간 **관계(Relationship)** 를 형성 가능

---

## DBMS / RDBMS

| 용어 | 설명 |
|------|------|
| **DBMS** (Database Management System) | 데이터베이스의 데이터를 관리하는 소프트웨어 도구 모음 |
| **RDBMS** (Relational Database Management System) | 관계형 데이터베이스 전용 DBMS. 데이터의 접근, 구성, 저장을 제어 |

> database, database server, database system, data server, DBMS는 같은 의미로 혼용되기도 함

RDBMS는 **은행, 교통, 의료** 등 다양한 산업의 애플리케이션 핵심 기반입니다.

### 대표적인 RDBMS 예시

- MySQL
- Oracle Database
- DB2 Warehouse
- DB2 on Cloud

---

## 5가지 기본 SQL 명령어

| 명령어 | 설명 |
|--------|------|
| `CREATE` | 테이블 생성 |
| `INSERT` | 테이블에 데이터 삽입 |
| `SELECT` | 테이블에서 데이터 조회 |
| `UPDATE` | 테이블의 데이터 수정 |
| `DELETE` | 테이블의 데이터 삭제 |

---

## 핵심 요약

- **SQL**: 관계형 데이터베이스에서 데이터를 다루는 언어
- **Data**: 단어·숫자·사진 형태의 사실 집합, 비즈니스의 핵심 자산
- **Database**: 데이터를 저장하고 관리하는 저장소
- **Relational Database**: 데이터를 표(테이블) 형태로 저장하며 테이블 간 관계를 형성
- **RDBMS**: 관계형 데이터베이스를 관리하는 소프트웨어 시스템
