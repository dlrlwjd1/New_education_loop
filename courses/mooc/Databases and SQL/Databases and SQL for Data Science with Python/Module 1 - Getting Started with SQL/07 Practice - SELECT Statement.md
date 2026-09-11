# Practice: SELECT Statement

> 05, 06에서 배운 SELECT 문을 직접 작성해보는 실습입니다.
> 각 문제를 먼저 스스로 풀어보고, 아래 정답과 비교해보세요.

---

## 실습 테이블

### EMPLOYEE 테이블

| EMP_ID | NAME | DEPT | SALARY | COUNTRY |
|--------|------|------|--------|---------|
| E01 | Alice | Engineering | 75000 | US |
| E02 | Bob | Marketing | 52000 | UK |
| E03 | Carol | Engineering | 83000 | US |
| E04 | David | HR | 47000 | CA |
| E05 | Eve | Marketing | 61000 | UK |
| E06 | Frank | Engineering | 91000 | US |
| E07 | Grace | HR | 44000 | CA |
| E08 | Henry | Sales | 58000 | AU |

---

## 문제

### Q1. 모든 직원의 전체 정보를 조회하세요.

<details>
<summary>정답 보기</summary>

```sql
SELECT * FROM EMPLOYEE;
```

**결과:** EMPLOYEE 테이블의 모든 행·모든 열 출력

</details>

---

### Q2. 모든 직원의 이름(NAME)과 부서(DEPT)만 조회하세요.

<details>
<summary>정답 보기</summary>

```sql
SELECT NAME, DEPT FROM EMPLOYEE;
```

**결과:** NAME, DEPT 두 열만 출력 (8개 행)

</details>

---

### Q3. EMP_ID가 'E03'인 직원의 전체 정보를 조회하세요.

<details>
<summary>정답 보기</summary>

```sql
SELECT * FROM EMPLOYEE WHERE EMP_ID = 'E03';
```

**결과:**

| EMP_ID | NAME | DEPT | SALARY | COUNTRY |
|--------|------|------|--------|---------|
| E03 | Carol | Engineering | 83000 | US |

</details>

---

### Q4. 급여(SALARY)가 60000 이상인 직원의 이름과 급여를 조회하세요.

<details>
<summary>정답 보기</summary>

```sql
SELECT NAME, SALARY FROM EMPLOYEE WHERE SALARY >= 60000;
```

**결과:**

| NAME | SALARY |
|------|--------|
| Alice | 75000 |
| Carol | 83000 |
| Eve | 61000 |
| Frank | 91000 |

</details>

---

### Q5. 부서(DEPT)가 'HR'인 직원의 이름과 급여를 조회하세요.

<details>
<summary>정답 보기</summary>

```sql
SELECT NAME, SALARY FROM EMPLOYEE WHERE DEPT = 'HR';
```

**결과:**

| NAME | SALARY |
|------|--------|
| David | 47000 |
| Grace | 44000 |

</details>

---

### Q6. 급여(SALARY)가 50000 미만인 직원의 전체 정보를 조회하세요.

<details>
<summary>정답 보기</summary>

```sql
SELECT * FROM EMPLOYEE WHERE SALARY < 50000;
```

**결과:**

| EMP_ID | NAME | DEPT | SALARY | COUNTRY |
|--------|------|------|--------|---------|
| E04 | David | HR | 47000 | CA |
| E07 | Grace | HR | 44000 | CA |

</details>

---

### Q7. 국가(COUNTRY)가 'US'가 아닌 직원의 이름과 국가를 조회하세요.

<details>
<summary>정답 보기</summary>

```sql
SELECT NAME, COUNTRY FROM EMPLOYEE WHERE COUNTRY <> 'US';
```

**결과:**

| NAME | COUNTRY |
|------|---------|
| Bob | UK |
| David | CA |
| Eve | UK |
| Grace | CA |
| Henry | AU |

</details>

---

### Q8. 급여(SALARY)가 50000 이상 80000 이하인 직원의 이름, 부서, 급여를 조회하세요.

> 힌트: WHERE 조건을 두 번 사용해야 합니다. AND 키워드를 써보세요.

<details>
<summary>정답 보기</summary>

```sql
SELECT NAME, DEPT, SALARY FROM EMPLOYEE WHERE SALARY >= 50000 AND SALARY <= 80000;
```

**결과:**

| NAME | DEPT | SALARY |
|------|------|--------|
| Alice | Engineering | 75000 |
| Bob | Marketing | 52000 |
| Eve | Marketing | 61000 |
| Henry | Sales | 58000 |

</details>

---

## 비교 연산자 정리 (빠른 참고)

| 연산자 | 의미 | 예시 |
|--------|------|------|
| `=` | 같다 | `WHERE DEPT = 'HR'` |
| `<>` | 같지 않다 | `WHERE COUNTRY <> 'US'` |
| `>` | 크다 | `WHERE SALARY > 60000` |
| `<` | 작다 | `WHERE SALARY < 50000` |
| `>=` | 크거나 같다 | `WHERE SALARY >= 60000` |
| `<=` | 작거나 같다 | `WHERE SALARY <= 80000` |
