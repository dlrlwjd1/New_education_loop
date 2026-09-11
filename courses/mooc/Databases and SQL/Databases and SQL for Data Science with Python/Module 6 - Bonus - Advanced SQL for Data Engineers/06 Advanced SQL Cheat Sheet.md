# Advanced SQL Cheat Sheet

이 치트시트는 Views, Stored Procedures, Transactions의 문법과 예시를 빠르게 복습하기 위한 자료입니다.

---

## Views

### CREATE VIEW

View는 하나 이상의 테이블에 존재하는 데이터를 표현하는 대체 방식입니다. 실제 데이터를 복사해 저장하지 않고, `SELECT` 문 정의를 저장합니다.

```sql
-- 문법
CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;

-- 예시
CREATE VIEW EMPSALARY AS
SELECT EMP_ID, F_NAME, L_NAME, B_DATE, SEX, SALARY
FROM EMPLOYEES;
```

---

### CREATE OR REPLACE VIEW

기존 View를 새 정의로 업데이트합니다.

```sql
-- 문법
CREATE OR REPLACE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;

-- 예시
CREATE OR REPLACE VIEW EMPSALARY AS
SELECT EMP_ID,
       F_NAME,
       L_NAME,
       B_DATE,
       SEX,
       JOB_TITLE,
       MIN_SALARY,
       MAX_SALARY
FROM EMPLOYEES, JOBS
WHERE EMPLOYEES.JOB_ID = JOBS.JOB_IDENT;
```

> `CREATE OR REPLACE VIEW` 지원 여부는 DBMS에 따라 다를 수 있습니다.

---

### DROP VIEW

데이터베이스에서 View를 삭제합니다.

```sql
-- 문법
DROP VIEW view_name;

-- 예시
DROP VIEW EMPSALARY;
```

`DROP VIEW`는 View 정의만 삭제합니다. 원본 테이블의 데이터는 삭제하지 않습니다.

---

## Stored Procedures in IBM Db2

### 기본 문법

저장 프로시저는 반복해서 사용할 수 있도록 데이터베이스에 저장해두는 SQL 코드입니다.

Db2에서는 프로시저 안의 SQL 문이 세미콜론(`;`)을 사용하므로, 스크립트 전체의 종료 구분자를 다른 문자로 바꾸는 경우가 많습니다.

```sql
-- 문법
--#SET TERMINATOR @

CREATE PROCEDURE procedure_name
LANGUAGE SQL
BEGIN
    -- SQL statements
END
@
```

### 예시

```sql
--#SET TERMINATOR @

CREATE PROCEDURE RETRIEVE_ALL
LANGUAGE SQL
READS SQL DATA
DYNAMIC RESULT SETS 1
BEGIN
    DECLARE C1 CURSOR
        WITH RETURN FOR
        SELECT * FROM PETSALE;

    OPEN C1;
END
@
```

| 구문 | 설명 |
|------|------|
| `--#SET TERMINATOR @` | SQL 문 종료 구분자를 `@`로 변경 |
| `LANGUAGE SQL` | 프로시저가 SQL로 작성됨 |
| `READS SQL DATA` | 데이터를 읽지만 수정하지 않음 |
| `DYNAMIC RESULT SETS 1` | 결과 집합 1개 반환 가능 |
| `WITH RETURN` | 커서 결과를 호출자에게 반환 |

---

## Stored Procedures in MySQL

### 기본 문법

MySQL에서는 `DELIMITER` 명령으로 종료 구분자를 임시 변경한 뒤 프로시저를 생성합니다.

```sql
-- 문법
DELIMITER //

CREATE PROCEDURE procedure_name()
BEGIN
    -- SQL statements
END //

DELIMITER ;
```

### 예시

```sql
DELIMITER //

CREATE PROCEDURE RETRIEVE_ALL()
BEGIN
    SELECT * FROM PETSALE;
END //

DELIMITER ;
```

| 구문 | 설명 |
|------|------|
| `DELIMITER //` | 프로시저 정의 중 종료 구분자를 `//`로 변경 |
| `CREATE PROCEDURE` | 프로시저 생성 |
| `BEGIN ... END` | 실행할 SQL 블록 |
| `DELIMITER ;` | 종료 구분자를 다시 세미콜론으로 복원 |

---

## Transactions

트랜잭션은 하나 이상의 SQL 문을 하나의 작업 단위로 묶습니다.

| 명령어 | 설명 |
|--------|------|
| `COMMIT` | 변경 사항을 데이터베이스에 확정 |
| `ROLLBACK` | 확정되지 않은 변경 사항을 취소 |

---

## Transactions with Db2

### COMMIT

변경 사항을 데이터베이스에 저장합니다.

```sql
-- 문법
COMMIT;
```

### 예시

```sql
CREATE TABLE employee (
    ID INT,
    Name VARCHAR(20),
    City VARCHAR(20),
    Salary INT,
    Age INT
);

INSERT INTO employee (ID, Name, City, Salary, Age)
VALUES (1, 'Ramesh Sethi', 'Delhi', 30000, 35);

INSERT INTO employee (ID, Name, City, Salary, Age)
VALUES (2, 'Khilan Sharma', 'Mumbai', 45000, 30);

COMMIT;
```

---

### ROLLBACK

아직 저장되지 않은 트랜잭션 변경 사항을 되돌립니다.

```sql
-- 문법
ROLLBACK;
```

### 예시

```sql
INSERT INTO employee
VALUES (3, 'Swetha Tiwari', 'Kanpur', 38000, 38);

SELECT * FROM employee;

ROLLBACK;

SELECT * FROM employee;
```

> Db2 실습 환경에서는 auto-commit이 기본으로 켜져 있을 수 있습니다. `ROLLBACK` 동작을 확인하려면 SQL Assistant 설정에서 자동 커밋을 조정해야 합니다.

---

## Transactions with MySQL

### COMMIT

MySQL에서는 명시적으로 트랜잭션을 시작할 때 `START TRANSACTION`을 사용할 수 있습니다.

```sql
-- 문법
START TRANSACTION;
-- SQL statements
COMMIT;
```

### 예시

```sql
CREATE TABLE employee (
    ID INT,
    Name VARCHAR(20),
    City VARCHAR(20),
    Salary INT,
    Age INT
);

START TRANSACTION;

INSERT INTO employee (ID, Name, City, Salary, Age)
VALUES (1, 'Ramesh Sethi', 'Delhi', 30000, 35);

INSERT INTO employee (ID, Name, City, Salary, Age)
VALUES (2, 'Khilan Sharma', 'Mumbai', 45000, 30);

COMMIT;
```

---

### ROLLBACK

MySQL에서 rollback을 확인하려면 auto-commit을 끄거나 명시적 트랜잭션을 사용해야 합니다.

```sql
-- 옵션 1: auto-commit 끄기
SET autocommit = 0;

-- 옵션 2: 명시적 트랜잭션 시작
START TRANSACTION;
```

```sql
START TRANSACTION;

INSERT INTO employee
VALUES (3, 'Swetha Tiwari', 'Kanpur', 38000, 38);

SELECT * FROM employee;

ROLLBACK;

SELECT * FROM employee;
```

`ROLLBACK` 후에는 3번 직원 삽입이 취소됩니다.

---

## Db2 Transactions Using Stored Procedure

### COMMIT / ROLLBACK 예시

Db2 저장 프로시저 안에서 예외가 발생하면 `ROLLBACK`, 정상 처리되면 `COMMIT`하도록 작성할 수 있습니다.

```sql
--#SET TERMINATOR @

CREATE PROCEDURE TRANSACTION_ROSE
LANGUAGE SQL
MODIFIES SQL DATA
BEGIN
    DECLARE SQLCODE INTEGER DEFAULT 0;
    DECLARE retcode INTEGER DEFAULT 0;

    DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
        SET retcode = SQLCODE;

    UPDATE accounts
    SET balance = balance - 200
    WHERE account_name = 'Rose';

    UPDATE accounts
    SET balance = balance + 200
    WHERE account_name = 'Shoe Shop';

    UPDATE inventory
    SET stock = stock - 1
    WHERE product_name = 'Boots';

    IF retcode < 0 THEN
        ROLLBACK;
    ELSE
        COMMIT;
    END IF;
END
@
```

> 위 예시는 강의의 Rose 구매 시나리오를 기준으로 한 보강 예시입니다. 실제 테이블/컬럼 이름은 실습 데이터베이스에 맞게 조정해야 합니다.

---

## MySQL Transactions Using Stored Procedure

### COMMIT / ROLLBACK 예시

MySQL 저장 프로시저에서는 예외 핸들러를 사용해 오류 발생 시 `ROLLBACK`하도록 작성할 수 있습니다.

```sql
DELIMITER //

CREATE PROCEDURE TRANSACTION_ROSE()
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;

    START TRANSACTION;

    UPDATE accounts
    SET balance = balance - 200
    WHERE account_name = 'Rose';

    UPDATE accounts
    SET balance = balance + 200
    WHERE account_name = 'Shoe Shop';

    UPDATE inventory
    SET stock = stock - 1
    WHERE product_name = 'Boots';

    COMMIT;
END //

DELIMITER ;
```

오류가 발생하지 않으면 `COMMIT`되고, 중간에 오류가 발생하면 예외 핸들러가 `ROLLBACK`을 실행합니다.

---

## Db2와 MySQL 문법 비교

| 항목 | Db2 | MySQL |
|------|-----|-------|
| 프로시저 구분자 변경 | `--#SET TERMINATOR @` | `DELIMITER //` |
| 프로시저 생성 | `CREATE PROCEDURE name` | `CREATE PROCEDURE name()` |
| SQL 언어 명시 | `LANGUAGE SQL` | 보통 생략 |
| 트랜잭션 시작 | 암시적 또는 환경 설정 의존 | `START TRANSACTION` |
| 커밋 | `COMMIT;` | `COMMIT;` |
| 롤백 | `ROLLBACK;` | `ROLLBACK;` |
| auto-commit | 실습 환경 설정에서 조정 | `SET autocommit = 0;` 또는 `START TRANSACTION` |

---

## 한눈에 보기

| 구문 | 용도 |
|------|------|
| `CREATE VIEW` | 새 View 생성 |
| `CREATE OR REPLACE VIEW` | 기존 View 정의 업데이트 |
| `DROP VIEW` | View 삭제 |
| `CREATE PROCEDURE` | 저장 프로시저 생성 |
| `COMMIT` | 트랜잭션 변경 사항 확정 |
| `ROLLBACK` | 트랜잭션 변경 사항 취소 |
| `START TRANSACTION` | MySQL에서 명시적 트랜잭션 시작 |
| `DELIMITER` | MySQL 프로시저 작성 시 종료 구분자 변경 |
| `--#SET TERMINATOR` | Db2 프로시저 작성 시 종료 구분자 변경 |
