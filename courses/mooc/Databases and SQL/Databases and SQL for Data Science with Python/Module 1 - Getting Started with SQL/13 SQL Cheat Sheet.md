# SQL Cheat Sheet — Module 1

## SELECT

테이블에서 데이터를 조회합니다.

```sql
-- 문법
SELECT column1, column2, ... FROM table_name;

-- 예시
SELECT city FROM placeofinterest;
```

---

## WHERE

지정한 조건을 만족하는 행만 반환합니다.

```sql
-- 문법
SELECT column1, column2, ... FROM table_name WHERE condition;

-- 예시
SELECT * FROM placeofinterest WHERE city = 'Rome';
```

---

## COUNT

열 이름을 인수로 받아 NULL이 아닌 행의 수를 반환합니다.

```sql
-- 문법
SELECT COUNT(*) FROM table_name;

-- 예시
SELECT COUNT(country) FROM placeofinterest WHERE country = 'Canada';
```

---

## DISTINCT

지정한 열에서 중복을 제거한 고유한 값만 반환합니다.

```sql
-- 문법
SELECT DISTINCT columnname FROM table_name;

-- 예시
SELECT DISTINCT country FROM placeofinterest WHERE type = 'historical';
```

---

## LIMIT

결과 집합의 최대 행 수를 제한합니다.

```sql
-- 문법
SELECT * FROM table_name LIMIT number;

-- 예시
SELECT * FROM placeofinterest WHERE airport = 'pearson' LIMIT 5;
```

---

## INSERT

테이블에 새 행을 삽입합니다.

```sql
-- 문법
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);

-- 예시
INSERT INTO placeofinterest (name, type, city, country, airport)
VALUES ('Niagara Waterfalls', 'Nature', 'Toronto', 'Canada', 'Pearson');
```

---

## UPDATE

테이블의 기존 행을 수정합니다.

```sql
-- 문법
UPDATE table_name SET column1 = value1 WHERE condition;

-- 예시
UPDATE placeofinterest
SET name = 'Niagara Falls'
WHERE name = 'Niagara Waterfalls';
```

---

## DELETE

WHERE 조건에 해당하는 행을 삭제합니다.

```sql
-- 문법
DELETE FROM table_name WHERE condition;

-- 예시
DELETE FROM placeofinterest WHERE name = 'Niagara Falls';
```

---

## 한눈에 보기

| 구문 | 용도 | WHERE 필요 여부 |
|------|------|----------------|
| `SELECT` | 데이터 조회 | 선택적 |
| `WHERE` | 조건 필터링 | — |
| `COUNT` | 행 개수 집계 | 선택적 |
| `DISTINCT` | 중복 제거 | 선택적 |
| `LIMIT` | 결과 행 수 제한 | 선택적 |
| `INSERT` | 새 행 삽입 | 불필요 |
| `UPDATE` | 기존 행 수정 | **필수 권장** |
| `DELETE` | 행 삭제 | **필수 권장** |
