# Views

## 학습 목표

- View의 개념 정의
- View를 사용하는 상황 설명
- `CREATE VIEW` 문법 이해
- View 조회 및 삭제 방법 설명

---

## View란?

View는 하나 이상의 테이블 또는 기존 View에 있는 데이터를 표현하는 **대체 방식**입니다.

View는 실제 데이터를 새로 저장하는 테이블이 아니라, 특정 `SELECT` 문의 결과를 이름 붙여 저장한 **가상 테이블(virtual table)**처럼 동작합니다.

| 구분 | 설명 |
|------|------|
| Base Table | 실제 데이터가 저장된 원본 테이블 |
| View | 원본 테이블 또는 다른 View를 바탕으로 정의된 결과 테이블 |
| View Definition | View를 만들 때 사용한 `SELECT` 문 정의 |

View는 기본 테이블의 전체 컬럼을 포함할 수도 있고, 일부 컬럼만 포함할 수도 있습니다. 또한 여러 테이블이나 여러 View를 조합해서 만들 수도 있습니다.

---

## View의 중요한 특징

View를 생성하면 **결과 데이터 자체가 저장되는 것이 아니라 View의 정의만 저장**됩니다.

데이터는 여전히 원본 테이블인 base table에 저장됩니다.

```text
Base Table 실제 데이터
        ↓
CREATE VIEW로 정의한 SELECT 문
        ↓
View를 테이블처럼 조회
```

View는 동적(dynamic)입니다. 즉, View를 조회할 때마다 View를 정의한 `SELECT` 문이 실행된 결과처럼 동작합니다.

---

## View를 사용하는 이유

View는 다음과 같은 상황에서 유용합니다.

| 사용 목적 | 설명 |
|-----------|------|
| 민감 정보 숨기기 | 급여, 생년월일, 세금 정보 같은 민감 컬럼 제외 |
| 데이터 단순화 | 필요한 컬럼과 행만 보여줌 |
| 여러 테이블 결합 | 두 개 이상의 테이블을 의미 있게 결합 |
| 접근 권한 관리 | 원본 테이블 대신 View에만 접근 권한 부여 |
| 업무별 데이터 제공 | 특정 프로세스에 필요한 데이터만 노출 |

예를 들어 `EMPLOYEES` 테이블에는 급여와 생년월일 같은 민감 정보가 있을 수 있습니다. 이때 View를 사용하면 직원 ID, 이름, 주소, 직무 ID, 관리자 ID, 부서 ID처럼 비민감 정보만 보여줄 수 있습니다.

---

## CREATE VIEW 문법

View는 `CREATE VIEW` 문으로 생성합니다.

### 기본 문법

```sql
CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

| 구성 요소 | 설명 |
|-----------|------|
| `view_name` | 생성할 View 이름 |
| `AS SELECT` | View가 보여줄 결과를 정의하는 `SELECT` 문 |
| `FROM` | 데이터를 가져올 base table 또는 기존 View |
| `WHERE` | 선택적으로 행을 필터링하는 조건 |

View 이름은 DBMS에 따라 제한이 다를 수 있지만, 강의에서는 최대 128자까지 사용할 수 있다고 설명합니다.

---

## 예시 1: 민감 정보를 제외한 View 만들기

`EMPLOYEES` 테이블에서 급여와 생년월일을 제외하고 직원 기본 정보만 보여주는 `EMPINFO` View를 생성합니다.

```sql
CREATE VIEW EMPINFO AS
SELECT EMP_ID,
       F_NAME,
       L_NAME,
       ADDRESS,
       JOB_ID,
       MANAGER_ID,
       DEP_ID
FROM EMPLOYEES;
```

생성한 View는 테이블처럼 조회할 수 있습니다.

```sql
SELECT *
FROM EMPINFO;
```

---

## 예시 2: 특정 행만 포함하는 View 만들기

`MANAGER_ID`가 `30002`인 직원만 포함하는 View를 만들 수 있습니다.

```sql
CREATE VIEW EMPINFO AS
SELECT EMP_ID,
       F_NAME,
       L_NAME,
       ADDRESS,
       JOB_ID,
       MANAGER_ID,
       DEP_ID
FROM EMPLOYEES
WHERE MANAGER_ID = 30002;
```

View를 조회하면 `MANAGER_ID`가 `30002`인 행만 반환됩니다.

```sql
SELECT *
FROM EMPINFO;
```

---

## 컬럼 별칭 사용하기

View를 정의할 때 컬럼 이름에 별칭(alias)을 줄 수 있습니다.

```sql
CREATE VIEW EMPINFO AS
SELECT EMP_ID AS EMPLOYEE_ID,
       F_NAME AS FIRST_NAME,
       L_NAME AS LAST_NAME,
       DEP_ID AS DEPARTMENT_ID
FROM EMPLOYEES;
```

별칭을 사용하면 View를 조회할 때 더 이해하기 쉬운 컬럼 이름을 제공할 수 있습니다.

---

## View를 통한 데이터 변경

일부 DBMS에서는 View에 대해 `INSERT`, `UPDATE`, `DELETE`를 실행해 base table의 데이터를 변경할 수 있습니다.

```sql
UPDATE EMPINFO
SET ADDRESS = 'New Address'
WHERE EMP_ID = 'E1001';
```

다만 모든 View가 수정 가능한 것은 아닙니다.

예를 들어 여러 테이블을 조인하거나, 집계 함수, `GROUP BY`, `DISTINCT` 등을 사용하는 View는 DBMS에 따라 수정이 제한될 수 있습니다.

---

## View 정의에 사용할 수 있는 절

View를 만들 때 사용하는 `SELECT` 문은 다른 테이블이나 View를 참조할 수 있습니다.

사용 가능한 절의 예시는 다음과 같습니다.

| 절 | 사용 가능 여부 |
|----|----------------|
| `WHERE` | 사용 가능 |
| `GROUP BY` | 사용 가능 |
| `HAVING` | 사용 가능 |
| `ORDER BY` | 일반적으로 View 정의에는 사용하지 않음 |

강의에서는 View 정의의 `SELECT` 문에 `ORDER BY` 절이나 host variable을 사용할 수 없다고 설명합니다.

정렬이 필요하다면 View를 조회할 때 `ORDER BY`를 사용하는 방식이 더 일반적입니다.

```sql
SELECT *
FROM EMPINFO
ORDER BY L_NAME;
```

---

## DROP VIEW

View를 완전히 삭제하려면 `DROP VIEW` 문을 사용합니다.

```sql
DROP VIEW view_name;
```

예를 들어 `EMPINFO` View를 삭제하려면 다음처럼 작성합니다.

```sql
DROP VIEW EMPINFO;
```

`DROP VIEW`는 View 정의를 삭제하지만, base table의 실제 데이터는 삭제하지 않습니다.

---

## View와 Table 비교

| 구분 | Table | View |
|------|-------|------|
| 데이터 저장 | 실제 데이터 저장 | 일반적으로 데이터 저장 안 함 |
| 내용 | 직접 저장된 행과 열 | `SELECT` 결과처럼 동작 |
| 변경 시점 | 데이터가 직접 변경됨 | 조회할 때 base table 기준으로 동적 반영 |
| 사용 목적 | 데이터 저장 | 데이터 접근 단순화, 보안, 재사용 |
| 삭제 영향 | `DROP TABLE`은 데이터 삭제 | `DROP VIEW`는 View 정의만 삭제 |

---

## 핵심 요약

- View는 테이블 데이터에 접근하는 대체 방식입니다.
- View는 하나 이상의 base table 또는 기존 View의 일부 컬럼과 행을 포함할 수 있습니다.
- View는 테이블처럼 `SELECT`로 조회할 수 있습니다.
- View에는 보통 데이터 자체가 저장되지 않고, View의 정의만 저장됩니다.
- 데이터는 base table에 저장되며 View는 동적으로 그 데이터를 보여줍니다.
- View는 민감 정보 숨기기, 여러 테이블 결합, 접근 권한 관리, 데이터 단순화에 유용합니다.
- `CREATE VIEW`로 View를 만들고 `DROP VIEW`로 삭제합니다.
