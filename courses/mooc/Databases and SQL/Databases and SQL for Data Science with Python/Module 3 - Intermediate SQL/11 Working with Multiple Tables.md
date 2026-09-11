# Working with Multiple Tables

## 학습 목표

- 하나의 쿼리에서 여러 테이블을 조회하는 방법 설명
- 서브쿼리를 사용해 여러 테이블의 데이터를 연결하는 방법 이해
- 암시적 조인(Implicit Join)을 사용해 여러 테이블을 조회하는 방법 이해
- 테이블 이름과 별칭(alias)으로 컬럼을 명확하게 지정하는 방법 설명

---

## 여러 테이블에 접근하는 방법

하나의 SQL 쿼리에서 여러 테이블에 접근하는 방법은 여러 가지가 있습니다.

| 방법 | 설명 |
|------|------|
| 서브쿼리(Subquery) | 한 쿼리의 결과를 다른 쿼리의 조건으로 사용 |
| 암시적 조인(Implicit Join) | `FROM` 절에 여러 테이블을 나열하고 `WHERE` 절에서 연결 조건 지정 |
| 명시적 조인(Explicit Join) | `INNER JOIN`, `OUTER JOIN` 같은 조인 연산자 사용 |

이 강의에서는 **서브쿼리**와 **암시적 조인**을 중심으로 다룹니다.

---

## 예시 테이블

### EMPLOYEES

직원 정보를 저장하는 테이블입니다.

| 컬럼 | 설명 |
|------|------|
| `EMP_ID` | 직원 ID |
| `F_NAME` | 이름 |
| `L_NAME` | 성 |
| `SALARY` | 급여 |
| `DEP_ID` | 직원이 속한 부서 ID |

### DEPARTMENTS

부서 정보를 저장하는 테이블입니다.

| 컬럼 | 설명 |
|------|------|
| `DEP_ID_DEP` | 부서 ID |
| `DEP_NAME` | 부서 이름 |
| `MANAGER_ID` | 관리자 ID |
| `LOC_ID` | 위치 ID |

---

## 1. 서브쿼리로 여러 테이블 조회하기

서브쿼리는 한 테이블의 결과를 다른 테이블을 조회하는 조건으로 사용할 수 있습니다.

### 예시 1: 부서 테이블에 존재하는 부서의 직원만 조회

`EMPLOYEES` 테이블에서 직원 정보를 조회하되, 직원의 `DEP_ID`가 `DEPARTMENTS` 테이블에 존재하는 경우만 가져옵니다.

```sql
SELECT *
FROM EMPLOYEES
WHERE DEP_ID IN (
    SELECT DEP_ID_DEP
    FROM DEPARTMENTS
);
```

### 동작 방식

1. 안쪽 쿼리가 먼저 실행됩니다.
2. `DEPARTMENTS` 테이블에서 존재하는 부서 ID 목록을 가져옵니다.
3. 바깥 쿼리가 `EMPLOYEES` 테이블에서 그 부서 ID에 해당하는 직원만 조회합니다.

---

## 2. 다른 테이블의 조건으로 필터링하기

직원 테이블에는 위치 정보가 없지만, 부서 테이블에는 `LOC_ID`가 있습니다.

따라서 특정 위치에 있는 부서의 직원 목록을 조회하려면 `DEPARTMENTS` 테이블을 서브쿼리로 사용할 수 있습니다.

### 예시 2: 특정 위치의 직원 조회

```sql
SELECT *
FROM EMPLOYEES
WHERE DEP_ID IN (
    SELECT DEP_ID_DEP
    FROM DEPARTMENTS
    WHERE LOC_ID = 'L0002'
);
```

이 쿼리는 위치 ID가 `L0002`인 부서에 속한 직원만 조회합니다.

---

## 3. 직원 조건으로 부서 정보 조회하기

반대로 직원 테이블의 조건을 이용해 부서 테이블을 조회할 수도 있습니다.

예를 들어 급여가 70,000보다 높은 직원들이 속한 부서의 ID와 이름을 조회합니다.

```sql
SELECT DEP_ID_DEP, DEP_NAME
FROM DEPARTMENTS
WHERE DEP_ID_DEP IN (
    SELECT DEP_ID
    FROM EMPLOYEES
    WHERE SALARY > 70000
);
```

여기서는 `EMPLOYEES` 테이블의 서브쿼리가 먼저 급여 조건을 만족하는 직원들의 부서 ID를 반환하고, 바깥 쿼리가 해당 부서 정보를 조회합니다.

---

## 4. FROM 절에 여러 테이블 나열하기

여러 테이블을 `FROM` 절에 함께 작성할 수도 있습니다.

```sql
SELECT *
FROM EMPLOYEES, DEPARTMENTS;
```

이 방식은 명시적으로 `JOIN` 키워드를 사용하지 않지만, 두 테이블을 함께 조회합니다.

주의할 점은 연결 조건이 없으면 첫 번째 테이블의 모든 행이 두 번째 테이블의 모든 행과 결합된다는 것입니다.

이런 결과를 **카티션 곱(Cartesian product)** 또는 **교차 조인(Cross Join)**이라고 합니다.

> 원문 강의에서는 이를 full join처럼 설명하지만, SQL 용어로는 일반적으로 `FULL JOIN`이 아니라 `CROSS JOIN` 또는 Cartesian product에 가깝습니다.

---

## 5. WHERE 절로 연결 조건 지정하기

불필요한 조합을 피하려면 두 테이블을 연결하는 조건을 `WHERE` 절에 작성해야 합니다.

```sql
SELECT *
FROM EMPLOYEES, DEPARTMENTS
WHERE EMPLOYEES.DEP_ID = DEPARTMENTS.DEP_ID_DEP;
```

이 쿼리는 직원의 부서 ID와 부서 테이블의 부서 ID가 일치하는 행만 반환합니다.

---

## 컬럼 이름을 완전하게 지정하기

여러 테이블을 함께 조회할 때 서로 다른 테이블에 같은 이름의 컬럼이 있을 수 있습니다.

이 경우 컬럼 이름 앞에 테이블 이름을 붙여 컬럼을 명확히 지정합니다.

```sql
EMPLOYEES.DEP_ID
DEPARTMENTS.DEP_ID_DEP
```

이처럼 테이블 이름까지 포함해 컬럼을 쓰는 방식을 **완전한 컬럼 이름(fully qualified column name)**이라고 합니다.

---

## 6. 테이블 별칭 사용하기

테이블 이름이 길면 쿼리가 복잡해질 수 있습니다.

이때 테이블에 짧은 별칭(alias)을 붙여 사용할 수 있습니다.

```sql
SELECT *
FROM EMPLOYEES E, DEPARTMENTS D
WHERE E.DEP_ID = D.DEP_ID_DEP;
```

여기서 `E`는 `EMPLOYEES` 테이블, `D`는 `DEPARTMENTS` 테이블의 별칭입니다.

---

## 7. 필요한 컬럼만 조회하기

각 직원의 ID와 부서 이름만 보고 싶다면 필요한 컬럼만 `SELECT` 절에 작성합니다.

```sql
SELECT E.EMP_ID, D.DEP_NAME
FROM EMPLOYEES E, DEPARTMENTS D
WHERE E.DEP_ID = D.DEP_ID_DEP;
```

`SELECT` 절에서도 별칭을 사용해 컬럼이 어느 테이블에서 온 것인지 명확하게 표시할 수 있습니다.

```sql
SELECT E.EMP_ID, D.DEP_ID_DEP, D.DEP_NAME
FROM EMPLOYEES E, DEPARTMENTS D
WHERE E.DEP_ID = D.DEP_ID_DEP;
```

---

## 서브쿼리와 암시적 조인 비교

| 구분 | 서브쿼리 | 암시적 조인 |
|------|----------|-------------|
| 작성 방식 | 한 쿼리 안에 다른 쿼리를 중첩 | `FROM` 절에 여러 테이블 나열 |
| 연결 방식 | 안쪽 쿼리 결과를 바깥 쿼리 조건으로 사용 | `WHERE` 절에서 테이블 연결 조건 지정 |
| 주 사용 상황 | 한 테이블의 결과로 다른 테이블을 필터링 | 여러 테이블의 컬럼을 함께 출력 |
| 주의점 | 반환 값의 개수와 비교 연산자 호환성 확인 | 연결 조건을 빠뜨리면 Cartesian product 발생 |

---

## 핵심 요약

- 여러 테이블을 조회하는 방법에는 서브쿼리, 암시적 조인, 명시적 조인이 있습니다.
- 서브쿼리는 한 테이블의 조회 결과를 다른 테이블 조회의 조건으로 사용할 수 있습니다.
- `FROM EMPLOYEES, DEPARTMENTS`처럼 여러 테이블을 나열하면 암시적 조인이 됩니다.
- 연결 조건 없이 여러 테이블을 나열하면 모든 행 조합이 만들어지는 Cartesian product가 발생합니다.
- 여러 테이블에 같은 컬럼명이 있을 수 있으므로 `table.column` 형식으로 컬럼을 명확히 지정하는 것이 좋습니다.
- 테이블 별칭을 사용하면 긴 테이블 이름을 짧고 읽기 쉽게 작성할 수 있습니다.
