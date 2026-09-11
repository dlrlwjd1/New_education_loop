# Create and Drop Tables Lab

## 학습 목표

- 데이터베이스에서 테이블 생성
- 데이터베이스에서 테이블 삭제
- 기본 키(Primary Key)와 `NOT NULL` 제약 조건 이해
- 실습 환경에서 `DROP TABLE`과 `CREATE TABLE`을 함께 사용하는 이유 설명

---

## CREATE TABLE 문

`CREATE TABLE` 문은 데이터베이스에 새 테이블을 생성할 때 사용합니다.

### 기본 문법

```sql
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
    ...
);
```

| 구성 요소 | 설명 |
|-----------|------|
| `table_name` | 생성할 테이블 이름 |
| `column` | 테이블에 들어갈 열 이름 |
| `datatype` | 각 열에 저장할 데이터의 타입 |

---

## 예제 1: TEST 테이블 생성

`TEST` 테이블을 생성하고, 두 개의 컬럼을 추가합니다.

| 컬럼 | 데이터 타입 | 설명 |
|------|-------------|------|
| `ID` | `INT` | 정수형 ID |
| `NAME` | `VARCHAR(30)` | 최대 30자까지 저장 가능한 문자열 |

```sql
CREATE TABLE TEST (
    ID INT,
    NAME VARCHAR(30)
);
```

---

## 예제 2: COUNTRY 테이블 생성

`COUNTRY` 테이블을 생성합니다.

| 컬럼 | 데이터 타입 | 설명 |
|------|-------------|------|
| `ID` | `INT` | 국가 ID |
| `CCODE` | `CHAR(2)` | 두 글자 국가 코드 |
| `Name` | `VARCHAR(60)` | 가변 길이 국가 이름 |

```sql
CREATE TABLE COUNTRY (
    ID INT,
    CCODE CHAR(2),
    Name VARCHAR(60)
);
```

### `CHAR`와 `VARCHAR` 차이

| 데이터 타입 | 특징 | 적합한 예 |
|-------------|------|-----------|
| `CHAR(2)` | 항상 고정 길이 2자 저장 | 국가 코드: `US`, `KR`, `CA` |
| `VARCHAR(60)` | 실제 입력 길이에 따라 저장 공간 사용 | 국가 이름: `Korea`, `United States` |

---

## 예제 3: 기본 키 추가

`ID` 컬럼을 기본 키로 지정하려면 `PRIMARY KEY`를 사용합니다.

```sql
CREATE TABLE COUNTRY (
    ID INT NOT NULL,
    CCODE CHAR(2),
    Name VARCHAR(60),
    PRIMARY KEY (ID)
);
```

### `NOT NULL`을 사용하는 이유

기본 키는 각 행을 고유하게 식별해야 하므로 `NULL` 값을 가질 수 없습니다.

따라서 `ID` 컬럼에는 `NOT NULL` 제약 조건을 추가합니다.

| 제약 조건 | 의미 |
|-----------|------|
| `NOT NULL` | 해당 컬럼에 비어 있는 값 또는 `NULL`을 허용하지 않음 |
| `PRIMARY KEY` | 테이블의 각 행을 고유하게 식별하는 컬럼 지정 |

> 대부분의 데이터베이스는 기본 키 컬럼에 자동으로 `NOT NULL`을 적용하지만, 실습에서는 의미를 명확히 하기 위해 직접 작성합니다.

---

## DROP TABLE 문

`DROP TABLE` 문은 데이터베이스에서 기존 테이블을 삭제할 때 사용합니다.

### 기본 문법

```sql
DROP TABLE table_name;
```

### 예시

```sql
DROP TABLE COUNTRY;
```

이 문장은 `COUNTRY` 테이블을 삭제합니다. 테이블 구조뿐 아니라 테이블 안에 있던 데이터도 함께 삭제됩니다.

---

## CREATE 전에 DROP을 사용하는 이유

이미 같은 이름의 테이블이 존재하는 상태에서 다시 `CREATE TABLE`을 실행하면 오류가 발생합니다.

예를 들어 `COUNTRY` 테이블이 이미 존재하는데 다시 만들려고 하면 다음과 비슷한 오류가 나타날 수 있습니다.

```text
COUNTRY already exists
```

실습이나 개발 환경에서는 같은 스크립트를 여러 번 실행하는 경우가 많기 때문에, 기존 테이블을 먼저 삭제한 뒤 다시 생성하는 방식이 자주 사용됩니다.

```sql
DROP TABLE COUNTRY;

CREATE TABLE COUNTRY (
    ID INT NOT NULL,
    CCODE CHAR(2),
    Name VARCHAR(60),
    PRIMARY KEY (ID)
);
```

---

## 테이블이 없을 때 DROP을 실행하면?

삭제하려는 테이블이 존재하지 않으면 오류가 발생할 수 있습니다.

```text
COUNTRY is an undefined name
```

다만 이후의 `CREATE TABLE` 문이 정상적으로 실행된다면, 실습 상황에서는 이 오류를 무시해도 됩니다.

---

## 더 안전한 방법: DROP TABLE IF EXISTS

많은 데이터베이스에서는 테이블이 존재할 때만 삭제하는 문법을 지원합니다.

```sql
DROP TABLE IF EXISTS COUNTRY;
```

이렇게 작성하면 `COUNTRY` 테이블이 없어도 오류 없이 넘어갑니다.

전체 스크립트는 다음처럼 작성할 수 있습니다.

```sql
DROP TABLE IF EXISTS COUNTRY;

CREATE TABLE COUNTRY (
    ID INT NOT NULL,
    CCODE CHAR(2),
    Name VARCHAR(60),
    PRIMARY KEY (ID)
);
```

> 단, `IF EXISTS` 지원 여부와 정확한 문법은 데이터베이스 종류에 따라 다를 수 있습니다. 실습 환경의 DBMS 문법을 확인해야 합니다.

---

## 주의: DROP TABLE은 되돌리기 어렵다

`DROP TABLE`은 테이블과 데이터를 모두 삭제합니다.

따라서 중요한 데이터가 들어 있는 테이블에는 신중하게 사용해야 합니다.

| 명령어 | 삭제 대상 | 주의점 |
|--------|-----------|--------|
| `DROP TABLE` | 테이블 구조 + 데이터 | 테이블 자체가 사라짐 |
| `TRUNCATE TABLE` | 모든 행 데이터 | 테이블 구조는 유지됨 |
| `DELETE FROM` | 조건에 맞는 행 | `WHERE` 없이 실행하면 모든 행 삭제 |

---

## 실습용 전체 코드

```sql
DROP TABLE IF EXISTS COUNTRY;

CREATE TABLE COUNTRY (
    ID INT NOT NULL,
    CCODE CHAR(2),
    Name VARCHAR(60),
    PRIMARY KEY (ID)
);
```

만약 실습 환경에서 `IF EXISTS`를 지원하지 않는다면 다음처럼 작성합니다.

```sql
DROP TABLE COUNTRY;

CREATE TABLE COUNTRY (
    ID INT NOT NULL,
    CCODE CHAR(2),
    Name VARCHAR(60),
    PRIMARY KEY (ID)
);
```

이 경우 `DROP TABLE COUNTRY;`에서 테이블이 없다는 오류가 나더라도, 다음 `CREATE TABLE`이 성공하면 실습은 계속 진행할 수 있습니다.

---

## 핵심 요약

- `CREATE TABLE`은 새 테이블을 생성합니다.
- 각 컬럼은 이름과 데이터 타입을 함께 정의합니다.
- `PRIMARY KEY`는 각 행을 고유하게 식별하는 컬럼입니다.
- 기본 키는 `NULL` 값을 가질 수 없으므로 `NOT NULL`과 함께 사용합니다.
- `DROP TABLE`은 테이블 구조와 데이터를 모두 삭제합니다.
- 실습과 개발 환경에서는 같은 테이블을 다시 만들기 위해 `DROP TABLE` 후 `CREATE TABLE`을 자주 사용합니다.
- 중요한 데이터가 있는 테이블에는 `DROP TABLE`을 신중하게 사용해야 합니다.
