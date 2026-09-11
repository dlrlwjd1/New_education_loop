# Alter, Drop and Truncate Tables

## 학습 목표

- `ALTER TABLE` 문의 역할과 문법 설명
- `DROP TABLE` 문의 역할과 문법 설명
- `TRUNCATE TABLE` 문의 역할과 문법 설명
- 세 문장을 SQL 쿼리에서 사용하는 방법 이해

---

## ALTER TABLE

`ALTER TABLE` 문은 이미 존재하는 테이블의 **구조를 변경**할 때 사용합니다.

주요 사용 목적은 다음과 같습니다.

| 작업 | 설명 |
|------|------|
| 열 추가 | 테이블에 새 컬럼 추가 |
| 열 삭제 | 기존 컬럼 제거 |
| 데이터 타입 수정 | 컬럼의 데이터 타입 변경 |
| 키 추가/삭제 | 기본 키, 외래 키 등 추가 또는 제거 |
| 제약 조건 추가/삭제 | `NOT NULL`, `UNIQUE` 같은 제약 조건 추가 또는 제거 |

### 기본 문법

```sql
ALTER TABLE table_name
operation;
```

`CREATE TABLE` 문과 달리, `ALTER TABLE` 문에서는 변경 내용을 괄호로 묶지 않습니다.

---

## 열 추가하기

테이블에 새 컬럼을 추가할 때는 `ADD COLUMN`을 사용합니다.

### 예시

`author` 테이블에 저자의 전화번호를 저장할 `telephone_number` 컬럼을 추가합니다.

```sql
ALTER TABLE author
ADD COLUMN telephone_number BIGINT;
```

여기서 `BIGINT`는 최대 19자리 정도의 큰 정수를 저장할 수 있는 데이터 타입입니다.

---

## 열의 데이터 타입 수정하기

기존 컬럼의 데이터 타입을 바꾸려면 `MODIFY` 절을 사용합니다.

전화번호를 숫자 타입으로 저장하면 괄호, 더하기 기호, 대시 같은 문자를 포함할 수 없습니다.

예를 들어 다음과 같은 값을 저장하기 어렵습니다.

```text
+1-555-123-4567
```

이런 경우 전화번호 컬럼을 문자 타입인 `CHAR`로 변경할 수 있습니다.

```sql
ALTER TABLE author
MODIFY telephone_number CHAR(20);
```

### 주의할 점

이미 데이터가 들어 있는 컬럼의 데이터 타입을 변경할 때는 문제가 생길 수 있습니다.

예를 들어 문자 데이터가 들어 있는 컬럼을 숫자 타입으로 바꾸려고 하면, 기존 데이터가 새 데이터 타입과 호환되지 않아 오류가 발생할 수 있습니다. 이 경우 SQL 문은 실행되지 않습니다.

---

## 열 삭제하기

더 이상 필요하지 않은 컬럼은 `DROP COLUMN`으로 삭제할 수 있습니다.

```sql
ALTER TABLE author
DROP COLUMN telephone_number;
```

---

## DROP TABLE

`DROP TABLE` 문은 데이터베이스에서 **테이블 자체를 삭제**할 때 사용합니다.

테이블에 데이터가 들어 있다면, 기본적으로 테이블과 함께 데이터도 삭제됩니다.

### 기본 문법

```sql
DROP TABLE table_name;
```

### 예시

```sql
DROP TABLE author;
```

이 문장은 데이터베이스에서 `author` 테이블을 삭제합니다.

---

## TRUNCATE TABLE

`TRUNCATE TABLE` 문은 테이블 자체는 유지하고, 테이블 안의 **모든 행 데이터만 삭제**할 때 사용합니다.

`WHERE` 절 없이 `DELETE` 문을 사용해도 모든 행을 삭제할 수 있지만, 일반적으로 전체 데이터를 비울 때는 `TRUNCATE TABLE`이 더 빠르고 효율적입니다.

### 기본 문법

```sql
TRUNCATE TABLE table_name IMMEDIATE;
```

`IMMEDIATE`는 명령을 즉시 처리하며, 되돌릴 수 없다는 의미입니다.

### 예시

```sql
TRUNCATE TABLE author IMMEDIATE;
```

이 문장은 `author` 테이블의 모든 행을 삭제하지만, `author` 테이블 구조는 그대로 남겨둡니다.

---

## DROP과 TRUNCATE 비교

| 구분 | `DROP TABLE` | `TRUNCATE TABLE` |
|------|--------------|------------------|
| 삭제 대상 | 테이블 자체 | 테이블 안의 모든 행 |
| 테이블 구조 | 삭제됨 | 유지됨 |
| 데이터 | 삭제됨 | 삭제됨 |
| 사용 상황 | 테이블이 더 이상 필요 없을 때 | 테이블은 유지하고 데이터만 비울 때 |

---

## 핵심 요약

- `ALTER TABLE`은 기존 테이블의 구조를 변경합니다.
- `ALTER TABLE`로 컬럼 추가, 컬럼 삭제, 데이터 타입 변경, 키와 제약 조건 변경을 할 수 있습니다.
- `DROP TABLE`은 테이블 자체를 데이터베이스에서 삭제합니다.
- `TRUNCATE TABLE`은 테이블 구조는 유지하고 모든 행 데이터만 삭제합니다.
- 기존 데이터가 있는 컬럼의 데이터 타입을 변경할 때는 데이터 호환성을 주의해야 합니다.
