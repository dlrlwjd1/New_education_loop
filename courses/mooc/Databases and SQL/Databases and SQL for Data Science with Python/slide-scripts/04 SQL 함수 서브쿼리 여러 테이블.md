# 04 SQL 함수, 서브쿼리, 여러 테이블

## 영상 목표

- 집계 함수, 스칼라 함수, 문자열 함수, 날짜 함수를 설명한다.
- 서브쿼리를 `WHERE`, `SELECT`, `FROM` 위치에서 사용하는 방법을 이해한다.
- 여러 테이블을 함께 조회하는 기본 방식을 설명한다.

권장 길이: 60-65분

---

## Slide 1. 오늘의 주제

### 슬라이드 문구

SQL 쿼리 확장하기

- Built-in Functions
- Date and Time Functions
- Subqueries
- Multiple Tables

### 스크립트

이번 영상에서는 SQL 쿼리를 한 단계 더 확장합니다.

먼저 SQL 내장 함수를 사용해 값 계산과 변환을 수행합니다. 그 다음 하나의 쿼리 안에 다른 쿼리를 넣는 서브쿼리를 배웁니다.

마지막으로 여러 테이블을 함께 조회하는 방법을 살펴봅니다. 이 내용은 마지막 영상의 JOIN으로 이어집니다.

---

## Slide 2. SQL 함수의 역할

### 슬라이드 문구

SQL 함수가 필요한 이유

- 합계, 평균, 최댓값 계산
- 문자열 길이 확인
- 대소문자 변환
- 날짜 계산
- 결과 컬럼 가공

### 스크립트

SQL 함수는 데이터베이스 안에서 값을 계산하거나 변환할 때 사용합니다.

데이터를 Python으로 가져온 뒤 처리할 수도 있지만, 많은 경우 데이터베이스에서 먼저 필요한 계산을 하는 것이 효율적입니다.

특히 필터링, 집계, 날짜 계산은 SQL에서 처리하면 가져오는 데이터 양을 줄일 수 있습니다.

---

## Slide 3. 집계 함수 복습

### 슬라이드 문구

Aggregate Functions

```sql
SELECT
    SUM(AMOUNT),
    AVG(AMOUNT),
    MIN(AMOUNT),
    MAX(AMOUNT)
FROM SALES;
```

### 스크립트

집계 함수는 여러 행을 하나의 요약 값으로 만듭니다.

`SUM`은 합계, `AVG`는 평균, `MIN`과 `MAX`는 최솟값과 최댓값입니다.

이 함수들은 전체 테이블에 대해 사용할 수도 있고, `GROUP BY`와 함께 그룹별로 사용할 수도 있습니다.

---

## Slide 4. 스칼라 함수

### 슬라이드 문구

Scalar Functions

```sql
SELECT ROUND(COST, 2)
FROM PETRESCUE;
```

행마다 하나의 값을 변환

### 스크립트

스칼라 함수는 각 행의 값을 받아 변환한 결과를 반환합니다.

예를 들어 `ROUND`는 숫자를 반올림합니다. 비용 컬럼을 소수점 둘째 자리까지 표시하고 싶을 때 사용할 수 있습니다.

집계 함수가 여러 행을 하나의 값으로 줄이는 것과 달리, 스칼라 함수는 보통 행마다 하나의 결과를 만듭니다.

---

## Slide 5. 문자열 함수

### 슬라이드 문구

String Functions

```sql
SELECT LENGTH(NAME)
FROM PETRESCUE;

SELECT UCASE(NAME), LCASE(NAME)
FROM PETRESCUE;
```

### 스크립트

문자열 함수는 텍스트 데이터를 다룰 때 사용합니다.

`LENGTH`는 문자열 길이를 반환합니다. `UCASE`는 대문자로, `LCASE`는 소문자로 변환합니다.

데이터 정제나 표준화 과정에서 문자열 함수는 자주 사용됩니다. 예를 들어 사용자 입력값의 대소문자가 섞여 있을 때 비교 전에 같은 형태로 맞출 수 있습니다.

---

## Slide 6. 날짜 함수

### 슬라이드 문구

Date and Time Functions

```sql
SELECT DAY(RESCUEDATE)
FROM PETRESCUE;

SELECT CURRENT_DATE;

SELECT DATE_ADD(RESCUEDATE, INTERVAL 1 YEAR)
FROM PETRESCUE;
```

### 스크립트

날짜 데이터는 분석에서 매우 중요합니다.

특정 날짜에서 일자만 뽑거나, 현재 날짜를 가져오거나, 날짜에 일정 기간을 더하고 뺄 수 있습니다.

날짜 함수는 DBMS마다 문법 차이가 있을 수 있습니다. MySQL, SQLite, Db2에서 함수 이름이나 interval 표현이 다를 수 있으므로 사용하는 환경에 맞게 확인해야 합니다.

---

## Slide 7. 함수 중첩

### 슬라이드 문구

함수는 중첩할 수 있다

```sql
SELECT UCASE(LCASE(NAME))
FROM PETRESCUE;
```

주의:
- 읽기 어려워질 수 있음
- 별칭을 붙이면 좋음

### 스크립트

SQL 함수는 중첩해서 사용할 수 있습니다.

다만 함수가 많이 중첩되면 쿼리를 읽기 어려워집니다. 이럴 때는 `AS`로 별칭을 붙이거나, 복잡한 계산을 단계적으로 나누는 것이 좋습니다.

SQL은 실행되는 것도 중요하지만, 나중에 다시 읽고 수정할 수 있어야 합니다.

---

## Slide 8. 서브쿼리란?

### 슬라이드 문구

Subquery

쿼리 안에 들어가는 또 다른 쿼리

```sql
SELECT *
FROM EMPLOYEES
WHERE SALARY < (
    SELECT AVG(SALARY)
    FROM EMPLOYEES
);
```

### 스크립트

서브쿼리는 쿼리 안에 들어가는 또 다른 쿼리입니다.

예를 들어 평균 급여보다 낮은 급여를 받는 직원을 찾고 싶다고 해보겠습니다. 평균 급여는 먼저 계산해야 합니다.

이때 `SELECT AVG(SALARY)`를 괄호 안의 서브쿼리로 넣고, 바깥 쿼리의 `WHERE` 조건에서 그 결과와 비교할 수 있습니다.

---

## Slide 9. WHERE 절의 서브쿼리

### 슬라이드 문구

조건에 서브쿼리 사용

```sql
SELECT F_NAME, L_NAME, SALARY
FROM EMPLOYEES
WHERE SALARY < (
    SELECT AVG(SALARY)
    FROM EMPLOYEES
);
```

### 스크립트

가장 흔한 서브쿼리 위치는 `WHERE` 절입니다.

바깥 쿼리의 각 행을 검사할 때, 안쪽 쿼리의 결과를 기준값으로 사용합니다.

집계 함수를 `WHERE SALARY < AVG(SALARY)`처럼 직접 쓸 수는 없기 때문에, 이런 경우 서브쿼리가 필요합니다.

---

## Slide 10. SELECT 절의 서브쿼리

### 슬라이드 문구

컬럼 표현식으로 사용

```sql
SELECT
    F_NAME,
    SALARY,
    (SELECT AVG(SALARY) FROM EMPLOYEES) AS avg_salary
FROM EMPLOYEES;
```

### 스크립트

서브쿼리는 `SELECT` 절에서도 사용할 수 있습니다.

예를 들어 각 직원의 급여와 전체 평균 급여를 함께 보여주고 싶을 때, 평균 급여를 서브쿼리로 계산해 결과 컬럼으로 붙일 수 있습니다.

이 방식은 비교 기준을 결과에 함께 보여줄 때 유용합니다.

---

## Slide 11. FROM 절의 서브쿼리

### 슬라이드 문구

Derived Table

```sql
SELECT *
FROM (
    SELECT DEP_ID, AVG(SALARY) AS avg_salary
    FROM EMPLOYEES
    GROUP BY DEP_ID
) AS dept_avg;
```

### 스크립트

`FROM` 절의 서브쿼리는 임시 테이블처럼 사용할 수 있습니다.

먼저 부서별 평균 급여를 계산한 결과를 만들고, 그 결과를 바깥 쿼리에서 다시 조회할 수 있습니다.

이런 형태를 derived table 또는 table expression이라고 부릅니다.

---

## Slide 12. 여러 테이블 조회

### 슬라이드 문구

여러 테이블이 필요한 이유

- 직원 정보는 EMPLOYEES
- 부서 정보는 DEPARTMENTS
- 대출 정보는 LOAN
- 대출자 정보는 BORROWER

분석 질문은 보통 여러 테이블을 요구한다

### 스크립트

관계형 데이터베이스에서는 데이터를 여러 테이블로 나누어 저장합니다.

그래서 분석 질문은 종종 여러 테이블을 함께 필요로 합니다. 직원 이름과 부서 이름을 함께 보고 싶다면 직원 테이블과 부서 테이블이 모두 필요합니다.

여러 테이블을 다루는 방식에는 서브쿼리, 암시적 조인, 명시적 JOIN이 있습니다.

---

## Slide 13. 서브쿼리로 여러 테이블 조회

### 슬라이드 문구

예시

```sql
SELECT *
FROM EMPLOYEES
WHERE DEP_ID IN (
    SELECT DEPT_ID_DEP
    FROM DEPARTMENTS
);
```

### 스크립트

서브쿼리를 사용하면 다른 테이블의 결과를 조건으로 사용할 수 있습니다.

예를 들어 DEPARTMENTS 테이블에 존재하는 부서에 속한 직원만 조회할 수 있습니다.

이 방식은 이해하기 쉽지만, 여러 테이블의 컬럼을 동시에 보여주는 데는 JOIN이 더 적합한 경우가 많습니다.

---

## Slide 14. 암시적 조인

### 슬라이드 문구

FROM에 여러 테이블 나열

```sql
SELECT E.F_NAME, D.DEP_NAME
FROM EMPLOYEES E, DEPARTMENTS D
WHERE E.DEP_ID = D.DEPT_ID_DEP;
```

### 스크립트

여러 테이블을 `FROM`에 나열하고, `WHERE` 절에서 연결 조건을 지정할 수도 있습니다.

이 방식은 암시적 조인이라고 볼 수 있습니다.

중요한 것은 연결 조건입니다. 연결 조건을 빠뜨리면 모든 조합이 만들어지는 cross join이 되어 결과 행 수가 폭발할 수 있습니다.

---

## Slide 15. 테이블 별칭

### 슬라이드 문구

Alias 사용

```sql
SELECT E.F_NAME, D.DEP_NAME
FROM EMPLOYEES E, DEPARTMENTS D
WHERE E.DEP_ID = D.DEPT_ID_DEP;
```

장점:
- 쿼리 짧아짐
- 컬럼 출처 명확
- 같은 컬럼명 충돌 방지

### 스크립트

여러 테이블을 다룰 때는 테이블 별칭을 자주 사용합니다.

EMPLOYEES를 E, DEPARTMENTS를 D로 줄이면 쿼리가 간결해집니다.

또한 여러 테이블에 같은 이름의 컬럼이 있을 수 있으므로, `E.F_NAME`, `D.DEP_NAME`처럼 컬럼이 어느 테이블에서 온 것인지 명확히 쓰는 것이 좋습니다.

---

## Slide 16. 실습 데모

### 슬라이드 문구

데모 흐름

1. 함수로 값 변환
2. 평균보다 낮은 값 서브쿼리
3. FROM 절 derived table
4. 두 테이블을 연결해 조회

### 스크립트

이번 데모는 네 단계로 진행합니다.

먼저 SQL 함수로 숫자와 문자열을 변환합니다. 그 다음 평균보다 낮은 값을 찾는 서브쿼리를 작성합니다.

이후 `FROM` 절에 서브쿼리를 넣어 임시 결과를 만들고, 마지막으로 두 테이블을 연결해 필요한 컬럼만 조회합니다.

---

## Slide 17. 이번 영상 정리

### 슬라이드 문구

정리

- SQL 함수는 값을 계산하고 변환한다
- 날짜 함수는 DBMS별 문법 차이가 있을 수 있다
- 서브쿼리는 쿼리 안의 쿼리다
- 서브쿼리는 `WHERE`, `SELECT`, `FROM`에서 사용할 수 있다
- 여러 테이블 조회는 JOIN 학습의 기반이다

### 스크립트

이번 영상에서는 함수, 서브쿼리, 여러 테이블 조회를 다뤘습니다.

이제 단일 테이블 조회를 넘어, 계산된 값과 다른 쿼리의 결과를 활용할 수 있습니다.

다음 영상에서는 SQL을 Python과 연결합니다. DB-API, SQL Magic, Pandas를 사용해 데이터베이스에서 데이터를 가져오고 분석하는 흐름을 보겠습니다.

