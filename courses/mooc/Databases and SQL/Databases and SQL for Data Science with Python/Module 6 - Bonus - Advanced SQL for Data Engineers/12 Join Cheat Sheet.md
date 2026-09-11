# Join Cheat Sheet

이 치트시트는 다양한 SQL JOIN 구문, 설명, 예시를 빠르게 복습하기 위한 자료입니다.

---

## JOIN 유형 한눈에 보기

| JOIN 유형 | 반환 범위 |
|-----------|-----------|
| `CROSS JOIN` | 두 테이블의 모든 행 조합 |
| `INNER JOIN` | 양쪽 테이블에서 조건이 일치하는 행만 |
| `LEFT OUTER JOIN` | 왼쪽 테이블의 모든 행 + 오른쪽 테이블의 일치 행 |
| `RIGHT OUTER JOIN` | 오른쪽 테이블의 모든 행 + 왼쪽 테이블의 일치 행 |
| `FULL OUTER JOIN` | 양쪽 테이블의 모든 행 |
| `SELF JOIN` | 같은 테이블을 자기 자신과 조인 |

---

## CROSS JOIN

`CROSS JOIN`은 첫 번째 테이블의 각 행을 두 번째 테이블의 각 행과 모두 조합합니다.

결과 행 수는 다음과 같습니다.

```text
table1 행 수 × table2 행 수
```

### 문법

```sql
SELECT column_name(s)
FROM table1
CROSS JOIN table2;
```

### 예시

```sql
SELECT DEPT_ID_DEP, LOCT_ID
FROM DEPARTMENTS
CROSS JOIN LOCATIONS;
```

---

## INNER JOIN

`INNER JOIN`은 지정한 조인 조건을 만족하는 행만 반환합니다.

### 문법

```sql
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name
WHERE condition;
```

### 예시

```sql
SELECT E.F_NAME,
       E.L_NAME,
       JH.START_DATE
FROM EMPLOYEES AS E
INNER JOIN JOB_HISTORY AS JH
ON E.EMP_ID = JH.EMPL_ID
WHERE E.DEP_ID = '5';
```

---

## LEFT OUTER JOIN

`LEFT OUTER JOIN`은 왼쪽 테이블의 모든 행을 반환하고, 오른쪽 테이블에서는 조인 조건에 일치하는 행만 결합합니다.

오른쪽 테이블에 매칭되는 행이 없으면 오른쪽 테이블의 컬럼은 `NULL`로 표시됩니다.

### 문법

```sql
SELECT column_name(s)
FROM table1
LEFT OUTER JOIN table2
ON table1.column_name = table2.column_name
WHERE condition;
```

### 예시

```sql
SELECT E.EMP_ID,
       E.L_NAME,
       E.DEP_ID,
       D.DEP_NAME
FROM EMPLOYEES AS E
LEFT OUTER JOIN DEPARTMENTS AS D
ON E.DEP_ID = D.DEPT_ID_DEP;
```

---

## RIGHT OUTER JOIN

`RIGHT OUTER JOIN`은 오른쪽 테이블의 모든 행을 반환하고, 왼쪽 테이블에서는 조인 조건에 일치하는 행만 결합합니다.

왼쪽 테이블에 매칭되는 행이 없으면 왼쪽 테이블의 컬럼은 `NULL`로 표시됩니다.

### 문법

```sql
SELECT column_name(s)
FROM table1
RIGHT OUTER JOIN table2
ON table1.column_name = table2.column_name
WHERE condition;
```

### 예시

```sql
SELECT E.EMP_ID,
       E.L_NAME,
       E.DEP_ID,
       D.DEP_NAME
FROM EMPLOYEES AS E
RIGHT OUTER JOIN DEPARTMENTS AS D
ON E.DEP_ID = D.DEPT_ID_DEP;
```

---

## FULL OUTER JOIN

`FULL OUTER JOIN`은 양쪽 테이블의 모든 행을 반환합니다.

조인 조건에 일치하는 행은 결합되고, 일치하지 않는 쪽의 값은 `NULL`로 표시됩니다.

### 문법

```sql
SELECT column_name(s)
FROM table1
FULL OUTER JOIN table2
ON table1.column_name = table2.column_name
WHERE condition;
```

### 예시

```sql
SELECT E.F_NAME,
       E.L_NAME,
       D.DEP_NAME
FROM EMPLOYEES AS E
FULL OUTER JOIN DEPARTMENTS AS D
ON E.DEP_ID = D.DEPT_ID_DEP;
```

> `FULL OUTER JOIN`은 DBMS에 따라 지원되지 않을 수 있습니다. MySQL은 직접적인 `FULL OUTER JOIN`을 지원하지 않으므로 `LEFT JOIN`과 `RIGHT JOIN`을 `UNION`으로 결합해 비슷하게 구현합니다.

---

## SELF JOIN

`SELF JOIN`은 같은 테이블을 자기 자신과 조인하는 방식입니다.

같은 테이블을 두 번 참조해야 하므로 별칭(alias)을 사용합니다.

### 문법

```sql
SELECT column_name(s)
FROM table1 AS T1,
     table1 AS T2
WHERE condition;
```

또는 명시적 JOIN 문법으로 작성할 수 있습니다.

```sql
SELECT column_name(s)
FROM table1 AS T1
JOIN table1 AS T2
ON condition;
```

### 예시

같은 관리자(`MANAGER_ID`)를 가진 직원을 찾습니다.

```sql
SELECT B.*
FROM EMPLOYEES AS A
JOIN EMPLOYEES AS B
ON A.MANAGER_ID = B.MANAGER_ID
WHERE A.EMP_ID = 'E1001';
```

> SELF JOIN은 직원-관리자 관계, 같은 그룹에 속한 항목 비교, 계층 구조 탐색 등에 자주 사용됩니다.

---

## MySQL에서 FULL OUTER JOIN 구현하기

MySQL은 `FULL OUTER JOIN`을 직접 지원하지 않습니다.

대신 `LEFT OUTER JOIN` 결과와 `RIGHT OUTER JOIN` 결과를 `UNION`으로 결합해 비슷한 결과를 만들 수 있습니다.

### 문법

```sql
SELECT column_name(s)
FROM table1
LEFT OUTER JOIN table2
ON table1.column_name = table2.column_name
WHERE condition

UNION

SELECT column_name(s)
FROM table1
RIGHT OUTER JOIN table2
ON table1.column_name = table2.column_name
WHERE condition;
```

### 예시

```sql
SELECT E.F_NAME,
       E.L_NAME,
       D.DEP_NAME
FROM EMPLOYEES AS E
LEFT OUTER JOIN DEPARTMENTS AS D
ON E.DEP_ID = D.DEPT_ID_DEP

UNION

SELECT E.F_NAME,
       E.L_NAME,
       D.DEP_NAME
FROM EMPLOYEES AS E
RIGHT OUTER JOIN DEPARTMENTS AS D
ON E.DEP_ID = D.DEPT_ID_DEP;
```

`UNION`은 두 `SELECT` 결과를 합치며 중복 행을 제거합니다.

중복을 제거하지 않고 모두 유지하려면 `UNION ALL`을 사용할 수 있습니다.

---

## JOIN 선택 가이드

| 원하는 결과 | 사용할 JOIN |
|-------------|-------------|
| 가능한 모든 조합 | `CROSS JOIN` |
| 양쪽 모두 일치하는 행만 | `INNER JOIN` |
| 왼쪽 테이블을 기준으로 모두 유지 | `LEFT OUTER JOIN` |
| 오른쪽 테이블을 기준으로 모두 유지 | `RIGHT OUTER JOIN` |
| 양쪽 테이블의 모든 행 유지 | `FULL OUTER JOIN` |
| 같은 테이블 안의 행끼리 비교 | `SELF JOIN` |

---

## 핵심 요약

- `CROSS JOIN`은 모든 행 조합을 생성합니다.
- `INNER JOIN`은 조인 조건을 만족하는 행만 반환합니다.
- `LEFT OUTER JOIN`은 왼쪽 테이블의 모든 행을 유지합니다.
- `RIGHT OUTER JOIN`은 오른쪽 테이블의 모든 행을 유지합니다.
- `FULL OUTER JOIN`은 양쪽 테이블의 모든 행을 유지합니다.
- `SELF JOIN`은 같은 테이블을 서로 다른 별칭으로 참조해 자기 자신과 조인합니다.
- MySQL에서는 `FULL OUTER JOIN`을 `LEFT JOIN UNION RIGHT JOIN`으로 구현할 수 있습니다.
