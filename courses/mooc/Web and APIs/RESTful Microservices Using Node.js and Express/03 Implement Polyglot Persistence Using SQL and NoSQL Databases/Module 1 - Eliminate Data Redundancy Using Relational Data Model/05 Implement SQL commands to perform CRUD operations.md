# Implement SQL commands to perform CRUD operations

## 개요
- SQL의 정의와 명령 분류(DDL·DML·DQL), 6가지 제약 조건(constraint), SELECT의 5가지 유형, 집계 함수, INNER JOIN을 다루는 강의

## 내용

### SQL이란
- **SQL(Structured Query Language)** 은 RDBMS에서 데이터를 **저장·조작·조회**하는 데 쓰는 언어다.
- **E. F. Codd의 관계형 데이터베이스 모델**을 위해 도입된 **최초의 상용 언어**이며 RDBMS의 모든 데이터 연산을 수행한다.
- **4세대 언어(4GL)** 로도 불린다.

### 명령 분류
| 분류 | 역할 | 명령 | 비고 |
|---|---|---|---|
| **DDL** (Data Definition Language) | 테이블 **구조** 변경 | `CREATE`, `ALTER`, `DROP` | 변경이 **영구적(permanent)** 이다 |
| **DML** (Data Manipulation Language) | 테이블 안 **데이터** 조작 | `INSERT`, `UPDATE`, `DELETE` | **자동 커밋되지 않는다** |
| **DQL** (Data Query Language) | 테이블에서 데이터 **조회** | `SELECT` | 하나 또는 여러 테이블에서 레코드를 가져온다 |

### DDL
- **`CREATE`** — 데이터베이스나 테이블을 만든다. `School` 데이터베이스를 만들면 테이블 없는 빈 스키마가 된다. 테이블을 만들 때는 **각 열의 이름과 데이터 타입**을 지정해야 한다.
- **`ALTER`** — 테이블 구조를 바꾼다. 기존 테이블에 열 추가, 열 이름 변경, 열의 데이터 타입 변경, 열 삭제를 할 수 있다. 예: `student` 테이블에 정수 열 추가.
- **`DROP`** — 데이터베이스나 테이블을 시스템에서 제거한다. `School`에서 `student` 테이블을 지우거나 `School` 데이터베이스 전체를 지울 수 있다.

### 6가지 제약 조건
제약 조건은 테이블 데이터의 **정확성과 무결성(integrity)** 을 유지하기 위해 열이 따라야 하는 규칙이며, **테이블 수준 또는 열 수준**에 적용할 수 있다.

| 제약 | 역할 |
|---|---|
| **PRIMARY KEY** | 각 행(레코드)을 유일하게 식별 |
| **UNIQUE** | 열의 모든 값이 유일함을 보장 |
| **NOT NULL** | 열이 null 값을 갖지 못하게 함 |
| **FOREIGN KEY** | 한 테이블의 필드(들)가 다른 테이블의 기본 키를 참조하도록 두 테이블을 연결 |
| **CHECK** | 열의 값을 특정 범위로 제한 |
| **DEFAULT** | 값이 없을 때 기본값 제공 |

### DML
- **`INSERT`** — 테이블에 데이터를 넣는다. 예: `student` 테이블에 레코드 삽입.
- **`UPDATE`** — 특정 행의 데이터를 갱신한다. 예: 학번 102 학생의 나이 갱신. **`WHERE` 절이 없으면 모든 학생의 나이가 갱신된다.**
- **`DELETE`** — 전체 또는 특정 행을 삭제한다. 조건 없이 쓰면 `student`의 모든 행을, `WHERE roll_number = 109`를 붙이면 그 학생의 행만 지운다.

### DQL — SELECT의 5가지 유형
`SELECT`는 테이블에서 필요한 데이터를 가져온다. 전체 테이블, 선택한 열, 선택한 행을 조회할 수 있다.

1. **특정 속성 조회** — `student` 테이블에서 이름과 주소만 가져온다.
2. **조건으로 특정 행 조회** — 점수가 75보다 큰 학생의 학번과 이름.
3. **논리 연산자로 지정 행의 모든 열 조회**
   - `AND` — 학번이 100보다 크고 점수가 85 이상인 학생
   - `OR` — 이름이 John 또는 Mary인 학생
   - `BETWEEN` — 점수가 60 이상 75 이하(양끝 포함)인 학생
4. **`LIKE` 연산자로 행 선택** — 이름이 A로 시작하는 학생의 이름과 점수, 이름의 두 번째 글자가 O인 학생.
5. **`IN` 연산자로 행 선택** — 이름이 Mary, John, Karen, Harry 중 하나인 학생.

### 집계 함수(aggregate function)
열 또는 열 그룹의 값을 요약해 **단일 값**을 만든다. **그룹 함수**라고도 한다.

| 함수 | 반환 | 예 |
|---|---|---|
| `AVG` | 평균 | `AVG(marks)` — 학생 평균 점수 |
| `SUM` | 합계 | `SUM(marks)` — 점수 합계 |
| `MIN` | 최솟값 | `MIN(marks)` — 최저 점수 |
| `MAX` | 최댓값 | `MAX(marks)` — 최고 점수 |

### 여러 테이블에서 조회 — INNER JOIN
- 여러 테이블에서 데이터를 가져올 때는 테이블 간 **공통 속성**으로 **조인(join)** 한다. 사용자들은 대부분 **INNER JOIN** 을 선호한다.
- INNER JOIN은 공통 열의 값을 비교해 **조인 조건을 만족하는 행만** 가져온다. `JOIN` 또는 `INNER JOIN` 키워드로 지정한다.
- 예: `customer`와 `address` 테이블을 공통 열로 조인한다. **`Address_ID`는 `address`의 기본 키이자 `customer`의 외래 키**다.

## 예시

```sql
-- DDL
CREATE DATABASE School;
CREATE TABLE student (
  roll_number INT PRIMARY KEY,
  name        VARCHAR(50) NOT NULL,
  age         INT,
  marks       INT CHECK (marks BETWEEN 0 AND 100),
  city        VARCHAR(50) DEFAULT 'Unknown'
);
ALTER TABLE student ADD COLUMN grade INT;
DROP TABLE student;

-- DML
INSERT INTO student (roll_number, name, age, marks) VALUES (101, 'John', 20, 88);
UPDATE student SET age = 21 WHERE roll_number = 102;   -- WHERE 없으면 전체 갱신
DELETE FROM student WHERE roll_number = 109;           -- WHERE 없으면 전체 삭제

-- DQL: 5가지 유형
SELECT name, address FROM student;                                  -- ① 특정 속성
SELECT roll_number, name FROM student WHERE marks > 75;             -- ② 조건
SELECT * FROM student WHERE roll_number > 100 AND marks >= 85;      -- ③ AND
SELECT * FROM student WHERE name = 'John' OR name = 'Mary';         --    OR
SELECT * FROM student WHERE marks BETWEEN 60 AND 75;                --    BETWEEN
SELECT name, marks FROM student WHERE name LIKE 'A%';               -- ④ LIKE (A로 시작)
SELECT * FROM student WHERE name LIKE '_o%';                        --    (두 번째 글자 o)
SELECT * FROM student WHERE name IN ('Mary','John','Karen','Harry');-- ⑤ IN

-- 집계
SELECT AVG(marks), SUM(marks), MIN(marks), MAX(marks) FROM student;

-- INNER JOIN
SELECT c.customer_name, a.city
FROM customer c
INNER JOIN address a ON c.address_id = a.address_id;   -- address_id: address의 PK, customer의 FK
```

## 요약
- SQL은 Codd의 관계형 모델을 위한 최초의 상용 언어(4GL)이며 DDL(구조, 영구)·DML(데이터, 비자동 커밋)·DQL(조회)로 나뉜다.
- 제약 조건 6가지(PRIMARY KEY·UNIQUE·NOT NULL·FOREIGN KEY·CHECK·DEFAULT)가 데이터 무결성을 지킨다.
- `UPDATE`·`DELETE`에 `WHERE`가 없으면 모든 행에 적용되므로 주의한다.
- SELECT는 특정 열·조건·논리 연산자(AND/OR/BETWEEN)·LIKE·IN 다섯 유형으로 쓰고, AVG·SUM·MIN·MAX로 집계한다.
- 여러 테이블은 공통 열(한쪽의 PK, 다른 쪽의 FK)로 INNER JOIN해 조건을 만족하는 행만 가져온다.
