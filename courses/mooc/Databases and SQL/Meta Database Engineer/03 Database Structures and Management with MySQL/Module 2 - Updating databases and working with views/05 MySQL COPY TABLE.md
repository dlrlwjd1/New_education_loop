# MySQL COPY TABLE

## 개요

- CREATE TABLE ... SELECT로 테이블을 복사하는 방법: 같은 데이터베이스 내 전체/부분 복사, 제약조건까지 복사(LIKE), 다른 데이터베이스로 복사
- 복사 방식에 따라 키 제약이 복사되지 않는다는 점 주의

## 내용

### 복사 프로세스

1. 원본 데이터베이스·테이블 식별
2. 복사할 컬럼 결정(전체 또는 일부)
3. CREATE TABLE로 새 테이블 생성
4. SELECT로 복사할 컬럼을 지정해 구조·데이터 구성

### 4가지 복사 시나리오 (Lucky Shrub clients 테이블)

1. **전체 복사(같은 DB)**: `CREATE TABLE ClientsTest SELECT * FROM clients;` — 모든 컬럼·데이터 복사
2. **부분 복사 + 조건**: 특정 컬럼만 지정하고 WHERE 조건으로 행도 선별
3. **제약조건까지 복사**: CREATE TABLE ... SELECT 방식은 **키 제약(기본 키·UNIQUE)을 복사하지 않는다** — `SHOW COLUMNS`로 확인하면 키가 빠져 있음. **`CREATE TABLE 새테이블 LIKE 원본;`** — LIKE 키워드가 **구조(제약 포함)의 정확한 사본**을 만든다 (데이터는 복사하지 않음).
4. **다른 데이터베이스로 복사**: **점 표기법**으로 데이터베이스.테이블을 지정

## 예시

```sql
-- 1. 전체 복사 (데이터 포함, 제약은 미포함)
CREATE TABLE ClientsTest
SELECT * FROM clients;

-- 2. 일부 컬럼 + 조건부 복사
CREATE TABLE ClientsTest2
SELECT full_name, contact_number FROM clients
WHERE location = 'Pinal County';

-- 3. 제약조건까지 구조 복사
CREATE TABLE ClientsTest3 LIKE clients;
SHOW COLUMNS FROM ClientsTest3;   -- PK·UNIQUE 유지 확인

-- 4. 다른 데이터베이스로 복사 (점 표기법)
CREATE TABLE testDB.ClientsTest
SELECT * FROM Lucky_Shrub.clients;

USE testDB; SHOW TABLES;          -- 복사 확인
```

## 요약

- CREATE TABLE ... SELECT는 데이터·컬럼을 복사하지만 키 제약은 복사하지 않는다.
- 제약을 포함한 구조 복사는 CREATE TABLE ... LIKE를 쓴다.
- 데이터베이스 간 복사는 db.table 점 표기법으로 원본·대상을 지정한다.
