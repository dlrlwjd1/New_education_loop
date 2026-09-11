# SQL syntax introduction

## 개요

- 대학(college) 데이터베이스 시나리오로 SQL 하위 언어별 기본 문법을 처음 실습하는 강의
- DDL(CREATE), DML(INSERT/UPDATE/DELETE), DQL(SELECT)의 기본 구문

## 내용

### DDL — 데이터베이스와 테이블 생성

- 데이터베이스 생성: `CREATE DATABASE 데이터베이스명;` (문장 끝에 세미콜론)
- 테이블 생성: `CREATE TABLE 테이블명` — 추가할 테이블마다 같은 절차 반복

### DML — 데이터 삽입·수정·삭제

- **삽입**: `INSERT INTO 테이블명 (컬럼 목록)` 뒤에 `VALUES` 키워드로 각 필드의 값을 순서대로 지정
- **수정**: `UPDATE 테이블명 SET 컬럼 = 값` 형태의 키-값 쌍 + `WHERE` 절로 대상 레코드 필터링
- **삭제**: `DELETE FROM 테이블명 WHERE 조건` — 조건에 맞는 행의 데이터를 제거

### DQL — 데이터 조회

- `SELECT 컬럼 FROM 테이블명` — 필요한 데이터를 담은 컬럼과 테이블 지정
- `WHERE` 절로 조건을 붙여 특정 레코드만 조회

## 예시

대학 데이터베이스 구축 흐름 (강의 데모):

```sql
-- 1. 데이터베이스 생성 (DDL)
CREATE DATABASE college;

-- 2. 학생 테이블 생성 (DDL)
CREATE TABLE student;

-- 3. 학생 데이터 삽입 (DML)
INSERT INTO student (ID, first_name, last_name, date_of_birth)
VALUES (1, 'John', 'Murphy', '...');

-- 4. 잘못 입력한 생년월일 수정 (DML)
UPDATE student
SET date_of_birth = '...'
WHERE ID = 2;

-- 5. ID 3 학생 레코드 삭제 (DML)
DELETE FROM student
WHERE ID = 3;

-- 6. ID 1 학생 이름 조회 (DQL) → John Murphy 반환
SELECT first_name, last_name
FROM student
WHERE ID = 1;
```

## 요약

- CREATE DATABASE/CREATE TABLE(DDL)로 구조를 만들고, INSERT INTO ... VALUES / UPDATE ... SET ... WHERE / DELETE FROM ... WHERE(DML)로 데이터를 조작하며, SELECT ... FROM ... WHERE(DQL)로 조회한다.
- WHERE 절은 수정·삭제·조회에서 대상 레코드를 특정하는 공통 수단이다.
- 각 하위 언어는 이후 전문과정에서 더 깊이 다룬다.
