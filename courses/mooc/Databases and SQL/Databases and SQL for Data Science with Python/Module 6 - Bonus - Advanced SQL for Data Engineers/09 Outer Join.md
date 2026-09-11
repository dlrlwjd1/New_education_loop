# Outer Join

## 학습 목표

- Left Outer Join, Right Outer Join, Full Outer Join 설명
- 각 Outer Join을 언제 사용하는지 이해
- `OUTER JOIN` 문의 기본 문법 설명

---

## OUTER JOIN이란?

**OUTER JOIN**은 두 테이블에서 조인 조건이 일치하는 행뿐만 아니라, 일치하지 않는 행도 결과에 포함하는 JOIN입니다.

`INNER JOIN`은 양쪽 테이블에서 조인 컬럼 값이 일치하는 행만 반환합니다.

반면 `OUTER JOIN`은 한쪽 또는 양쪽 테이블의 **매칭되지 않은 행**도 함께 반환합니다.

```text
INNER JOIN  → 일치하는 행만 반환
OUTER JOIN  → 일치하는 행 + 일치하지 않는 행도 일부 또는 전부 반환
```

---

## OUTER JOIN의 종류

SQL에서 사용하는 Outer Join은 크게 세 가지입니다.

| 종류 | 반환 범위 |
|------|-----------|
| `LEFT OUTER JOIN` | 왼쪽 테이블의 모든 행 + 오른쪽 테이블의 일치 행 |
| `RIGHT OUTER JOIN` | 오른쪽 테이블의 모든 행 + 왼쪽 테이블의 일치 행 |
| `FULL OUTER JOIN` | 양쪽 테이블의 모든 행 |

`LEFT OUTER JOIN`은 보통 `LEFT JOIN`이라고 줄여 쓰고, `RIGHT OUTER JOIN`은 `RIGHT JOIN`, `FULL OUTER JOIN`은 `FULL JOIN`이라고 줄여 쓸 수 있습니다.

---

## 예시 테이블

### BORROWER

도서관 대출자 정보를 저장하는 테이블입니다.

| 컬럼 | 설명 |
|------|------|
| `BORROWER_ID` | 대출자 ID |
| `LASTNAME` | 성 |
| `COUNTRY` | 국가 |

### LOAN

도서 대출 기록을 저장하는 테이블입니다.

| 컬럼 | 설명 |
|------|------|
| `BORROWER_ID` | 대출자 ID |
| `LOAN_DATE` | 대출일 |

두 테이블은 `BORROWER_ID` 컬럼을 기준으로 연결할 수 있습니다.

---

## LEFT OUTER JOIN

`LEFT OUTER JOIN`은 왼쪽 테이블의 모든 행을 반환하고, 오른쪽 테이블에서는 조인 조건에 일치하는 행만 결합합니다.

오른쪽 테이블에 매칭되는 행이 없으면 오른쪽 테이블의 컬럼 값은 `NULL`로 표시됩니다.

### 기본 문법

```sql
SELECT column_list
FROM left_table
LEFT OUTER JOIN right_table
ON left_table.column_name = right_table.column_name;
```

### 예시

`BORROWER` 테이블의 모든 대출자를 조회하고, 대출 기록이 있으면 `LOAN` 테이블의 대출일도 함께 표시합니다.

```sql
SELECT B.BORROWER_ID,
       B.LASTNAME,
       B.COUNTRY,
       L.BORROWER_ID AS LOAN_BORROWER_ID,
       L.LOAN_DATE
FROM BORROWER AS B
LEFT OUTER JOIN LOAN AS L
ON B.BORROWER_ID = L.BORROWER_ID;
```

### 결과 해석

- `BORROWER` 테이블의 모든 대출자가 결과에 포함됩니다.
- 대출 기록이 있는 대출자는 `LOAN_DATE`가 표시됩니다.
- 대출 기록이 없는 대출자는 `LOAN_BORROWER_ID`와 `LOAN_DATE`가 `NULL`로 표시됩니다.

LEFT JOIN은 “대출자 명단은 모두 보고, 대출한 적이 있는지 확인”할 때 유용합니다.

---

## RIGHT OUTER JOIN

`RIGHT OUTER JOIN`은 오른쪽 테이블의 모든 행을 반환하고, 왼쪽 테이블에서는 조인 조건에 일치하는 행만 결합합니다.

왼쪽 테이블에 매칭되는 행이 없으면 왼쪽 테이블의 컬럼 값은 `NULL`로 표시됩니다.

### 기본 문법

```sql
SELECT column_list
FROM left_table
RIGHT OUTER JOIN right_table
ON left_table.column_name = right_table.column_name;
```

### 예시

`LOAN` 테이블의 모든 대출 기록을 조회하고, 해당 대출자 정보가 `BORROWER` 테이블에 있으면 함께 표시합니다.

```sql
SELECT L.BORROWER_ID AS LOAN_BORROWER_ID,
       L.LOAN_DATE,
       B.BORROWER_ID,
       B.LASTNAME,
       B.COUNTRY
FROM BORROWER AS B
RIGHT OUTER JOIN LOAN AS L
ON B.BORROWER_ID = L.BORROWER_ID;
```

### 결과 해석

- `LOAN` 테이블의 모든 대출 기록이 결과에 포함됩니다.
- 대출 기록의 `BORROWER_ID`가 `BORROWER` 테이블에도 있으면 대출자 정보가 함께 표시됩니다.
- `LOAN`에는 있지만 `BORROWER`에 없는 대출자라면 `B.BORROWER_ID`, `LASTNAME`, `COUNTRY`가 `NULL`로 표시됩니다.

이런 결과는 도서관 데이터에 문제가 있음을 의미할 수 있습니다. 예를 들어 “알 수 없는 사람에게 대출된 책”이 있는 상황입니다.

---

## FULL OUTER JOIN

`FULL OUTER JOIN`은 양쪽 테이블의 모든 행을 반환합니다.

일치하는 행은 하나로 결합하고, 일치하지 않는 행은 반대쪽 테이블 컬럼을 `NULL`로 채워 반환합니다.

### 기본 문법

```sql
SELECT column_list
FROM left_table
FULL OUTER JOIN right_table
ON left_table.column_name = right_table.column_name;
```

### 예시

모든 대출자와 모든 대출 기록을 함께 확인합니다.

```sql
SELECT B.BORROWER_ID,
       B.LASTNAME,
       B.COUNTRY,
       L.BORROWER_ID AS LOAN_BORROWER_ID,
       L.LOAN_DATE
FROM BORROWER AS B
FULL OUTER JOIN LOAN AS L
ON B.BORROWER_ID = L.BORROWER_ID;
```

### 결과 해석

- `BORROWER`에만 있는 대출자는 `LOAN_DATE`가 `NULL`입니다.
- `LOAN`에만 있는 대출 기록은 `LASTNAME`, `COUNTRY`가 `NULL`입니다.
- 양쪽에 모두 있는 `BORROWER_ID`는 한 행으로 결합됩니다.

FULL JOIN은 양쪽 테이블의 누락 데이터나 불일치 데이터를 한 번에 확인할 때 유용합니다.

> `FULL OUTER JOIN`은 결과 집합이 매우 커질 수 있습니다. 또한 MySQL처럼 `FULL OUTER JOIN`을 직접 지원하지 않는 DBMS도 있습니다.

---

## OUTER JOIN 사용 상황

| 상황 | 적합한 JOIN |
|------|-------------|
| 왼쪽 테이블의 모든 행을 반드시 보고 싶음 | `LEFT JOIN` |
| 오른쪽 테이블의 모든 행을 반드시 보고 싶음 | `RIGHT JOIN` |
| 양쪽 테이블의 모든 행과 불일치 데이터를 모두 확인하고 싶음 | `FULL JOIN` |
| 양쪽 모두 일치하는 행만 필요함 | `INNER JOIN` |

---

## NULL 값의 의미

Outer Join 결과에서 `NULL`은 조인 상대 테이블에 매칭되는 행이 없다는 뜻입니다.

예를 들어 LEFT JOIN에서 `LOAN_DATE`가 `NULL`이면 해당 대출자가 아직 책을 빌린 적이 없다는 의미일 수 있습니다.

RIGHT JOIN에서 대출자 정보가 `NULL`이면 대출 기록에는 있지만 대출자 테이블에는 없는 ID라는 뜻일 수 있습니다.

---

## INNER JOIN과 OUTER JOIN 비교

| 구분 | INNER JOIN | OUTER JOIN |
|------|------------|------------|
| 반환 대상 | 양쪽 테이블에서 일치하는 행만 | 일치하는 행 + 한쪽 또는 양쪽의 불일치 행 |
| NULL 발생 | 일반적으로 조인 불일치로 인한 NULL 없음 | 매칭되지 않은 쪽의 컬럼이 `NULL` |
| 사용 목적 | 연결된 데이터만 조회 | 누락 데이터, 미매칭 데이터까지 확인 |

---

## 핵심 요약

- Outer Join은 일치하는 행뿐만 아니라 일치하지 않는 행도 반환합니다.
- `LEFT JOIN`은 왼쪽 테이블의 모든 행과 오른쪽 테이블의 일치 행을 반환합니다.
- `RIGHT JOIN`은 오른쪽 테이블의 모든 행과 왼쪽 테이블의 일치 행을 반환합니다.
- `FULL JOIN`은 양쪽 테이블의 모든 행을 반환합니다.
- 매칭되지 않는 상대 테이블의 컬럼 값은 `NULL`로 표시됩니다.
- Outer Join은 누락된 관계, 데이터 품질 문제, 아직 연결되지 않은 데이터를 찾을 때 유용합니다.
