# SELECT Statement - Examples

## 학습 목표

- 다양한 SELECT 쿼리를 사용해 데이터베이스에서 데이터 조회

---

## SELECT 문 기본 사용법

SELECT는 데이터베이스 테이블에서 정보를 가져오는 **데이터베이스 쿼리 명령어**입니다.

### 1. 특정 열 조회

```sql
SELECT column1, column2, ... FROM table_1;
```

### 2. 모든 열 조회

```sql
SELECT * FROM table_1;
```

### 3. WHERE 절로 필터링

```sql
SELECT <columns> FROM table_1 WHERE <predicate>;
```

---

## 실습 예제 — COUNTRY 테이블

아래 테이블을 기준으로 예제를 확인합니다.

| ID | Name | CCode |
|----|------|-------|
| 1 | United States of America | US |
| 2 | China | CH |
| 3 | Japan | JA |
| 4 | Germany | GE |
| 5 | India | IN |
| 6 | United Kingdom | UK |
| 7 | France | FR |
| 8 | Italy | IT |
| 9 | Canada | CA |
| 10 | Brazil | BR |

---

### Example 1 — 전체 테이블 조회

```sql
SELECT * FROM COUNTRY;
```

- `SELECT *` : 모든 열 선택
- `FROM COUNTRY` : COUNTRY 테이블에서 가져옴
- 결과: 모든 행·모든 열 출력

---

### Example 2 — 특정 열만 조회

```sql
SELECT ID, Name FROM COUNTRY;
```

- `SELECT ID, Name` : ID와 Name 두 열만 선택
- 결과: CCode 열은 제외하고 ID, Name만 출력

| ID | Name |
|----|------|
| 1 | United States of America |
| 2 | China |
| ... | ... |

---

### Example 3 — 비교 연산자로 행 필터링

```sql
SELECT * FROM COUNTRY WHERE ID <= 5;
```

- `WHERE ID <= 5` : ID가 5 이하인 행만 반환
- 결과: 1~5번 행만 출력

| ID | Name | CCode |
|----|------|-------|
| 1 | United States of America | US |
| 2 | China | CH |
| 3 | Japan | JA |
| 4 | Germany | GE |
| 5 | India | IN |

---

### Example 4 — 문자열 값으로 필터링

```sql
SELECT * FROM COUNTRY WHERE CCode = 'CA';
```

- `WHERE CCode = 'CA'` : CCode가 'CA'인 행만 반환
- 문자열 값은 **작은따옴표(`'`)** 로 감싸야 함
- 결과: Canada 한 행만 출력

| ID | Name | CCode |
|----|------|-------|
| 9 | Canada | CA |

---

## 핵심 요약

| 구문 | 용도 |
|------|------|
| `SELECT *` | 모든 열 조회 |
| `SELECT col1, col2` | 특정 열만 조회 |
| `WHERE <predicate>` | 조건을 만족하는 행만 필터링 |
| 문자열 조건 | 작은따옴표 사용 (`'CA'`) |
| 숫자 조건 | 따옴표 없이 사용 (`ID <= 5`) |
