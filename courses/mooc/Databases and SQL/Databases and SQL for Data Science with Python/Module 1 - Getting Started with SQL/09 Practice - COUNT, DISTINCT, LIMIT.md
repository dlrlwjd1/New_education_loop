# Practice: COUNT, DISTINCT, LIMIT

> 08에서 배운 COUNT, DISTINCT, LIMIT을 직접 작성해보는 실습입니다.
> 각 문제를 먼저 스스로 풀어보고, 아래 정답과 비교해보세요.

---

## 실습 테이블

### MEDALS 테이블

| ID | ATHLETE | COUNTRY | MEDALTYPE | YEAR |
|----|---------|---------|-----------|------|
| 1 | Alice | CANADA | GOLD | 2016 |
| 2 | Bob | USA | SILVER | 2016 |
| 3 | Carol | CANADA | BRONZE | 2016 |
| 4 | David | UK | GOLD | 2016 |
| 5 | Eve | USA | GOLD | 2018 |
| 6 | Frank | CANADA | GOLD | 2018 |
| 7 | Grace | JAPAN | SILVER | 2018 |
| 8 | Henry | UK | GOLD | 2018 |
| 9 | Ivy | CANADA | SILVER | 2020 |
| 10 | Jack | USA | GOLD | 2020 |
| 11 | Karen | JAPAN | GOLD | 2020 |
| 12 | Leo | CANADA | GOLD | 2020 |

---

## 문제

### Q1. MEDALS 테이블의 전체 행 수를 조회하세요.

<details>
<summary>정답 보기</summary>

```sql
SELECT COUNT(*) FROM MEDALS;
```

**결과:** `12`

</details>

---

### Q2. 캐나다(CANADA)가 메달을 받은 횟수를 조회하세요.

<details>
<summary>정답 보기</summary>

```sql
SELECT COUNT(COUNTRY) FROM MEDALS WHERE COUNTRY = 'CANADA';
```

**결과:** `5`

</details>

---

### Q3. 금메달(GOLD)을 받은 횟수를 조회하세요.

<details>
<summary>정답 보기</summary>

```sql
SELECT COUNT(*) FROM MEDALS WHERE MEDALTYPE = 'GOLD';
```

**결과:** `8`

</details>

---

### Q4. 메달을 받은 나라의 목록을 중복 없이 조회하세요.

<details>
<summary>정답 보기</summary>

```sql
SELECT DISTINCT COUNTRY FROM MEDALS;
```

**결과:**

| COUNTRY |
|---------|
| CANADA |
| USA |
| UK |
| JAPAN |

</details>

---

### Q5. 금메달을 받은 나라의 목록을 중복 없이 조회하세요.

<details>
<summary>정답 보기</summary>

```sql
SELECT DISTINCT COUNTRY FROM MEDALS WHERE MEDALTYPE = 'GOLD';
```

**결과:**

| COUNTRY |
|---------|
| CANADA |
| USA |
| UK |
| JAPAN |

</details>

---

### Q6. MEDALS 테이블에서 처음 5행만 조회하세요.

<details>
<summary>정답 보기</summary>

```sql
SELECT * FROM MEDALS LIMIT 5;
```

**결과:**

| ID | ATHLETE | COUNTRY | MEDALTYPE | YEAR |
|----|---------|---------|-----------|------|
| 1 | Alice | CANADA | GOLD | 2016 |
| 2 | Bob | USA | SILVER | 2016 |
| 3 | Carol | CANADA | BRONZE | 2016 |
| 4 | David | UK | GOLD | 2016 |
| 5 | Eve | USA | GOLD | 2018 |

</details>

---

### Q7. 2020년 메달 데이터를 3행만 조회하세요.

<details>
<summary>정답 보기</summary>

```sql
SELECT * FROM MEDALS WHERE YEAR = 2020 LIMIT 3;
```

**결과:**

| ID | ATHLETE | COUNTRY | MEDALTYPE | YEAR |
|----|---------|---------|-----------|------|
| 9 | Ivy | CANADA | SILVER | 2020 |
| 10 | Jack | USA | GOLD | 2020 |
| 11 | Karen | JAPAN | GOLD | 2020 |

</details>

---

### Q8. 대회가 열린 연도를 중복 없이 조회하세요.

<details>
<summary>정답 보기</summary>

```sql
SELECT DISTINCT YEAR FROM MEDALS;
```

**결과:**

| YEAR |
|------|
| 2016 |
| 2018 |
| 2020 |

</details>

---

### Q9. 2018년에 금메달을 받은 횟수를 조회하세요.

<details>
<summary>정답 보기</summary>

```sql
SELECT COUNT(*) FROM MEDALS WHERE YEAR = 2018 AND MEDALTYPE = 'GOLD';
```

**결과:** `3`

</details>

---

### Q10. 미국(USA)이 받은 메달의 종류를 중복 없이 조회하세요.

<details>
<summary>정답 보기</summary>

```sql
SELECT DISTINCT MEDALTYPE FROM MEDALS WHERE COUNTRY = 'USA';
```

**결과:**

| MEDALTYPE |
|-----------|
| SILVER |
| GOLD |

</details>

---

## 핵심 표현 정리 (빠른 참고)

| 표현 | 용도 | 예시 |
|------|------|------|
| `COUNT(*)` | 전체 행 수 | `SELECT COUNT(*) FROM MEDALS` |
| `COUNT(column)` | 조건에 맞는 행 수 | `SELECT COUNT(COUNTRY) FROM MEDALS WHERE COUNTRY = 'CANADA'` |
| `DISTINCT` | 중복 제거 | `SELECT DISTINCT COUNTRY FROM MEDALS` |
| `LIMIT n` | n행만 조회 | `SELECT * FROM MEDALS LIMIT 5` |
