# String Patterns, Ranges, and Sets

## 학습 목표

- 문자열 패턴, 범위, 집합을 사용해 SELECT 문을 간결하게 작성하는 방법 설명

---

## 기본 SELECT 복습

```sql
-- 전체 행·열 조회
SELECT * FROM Book;

-- 특정 열만 조회
SELECT Book_ID, Title FROM Book;

-- WHERE 조건으로 행 제한
SELECT Title FROM Book WHERE Book_ID = 'B1';
```

---

## 1. 문자열 패턴 — LIKE와 와일드카드 `%`

WHERE 절의 정확한 값을 모를 때 **패턴 검색**을 사용합니다.

| 기호 | 이름 | 역할 |
|------|------|------|
| `%` | 와일드카드 | 0개 이상의 임의 문자를 대체 |
| `_` | 단일 와일드카드 | 정확히 1개의 임의 문자를 대체 |

```sql
-- 이름이 R로 시작하는 저자 조회
SELECT firstname FROM author WHERE firstname LIKE 'R%';
-- 결과: Raul, Rav

-- 이름이 R로 끝나는 경우
SELECT firstname FROM author WHERE firstname LIKE '%R';

-- 이름 중간에 R이 포함된 경우
SELECT firstname FROM author WHERE firstname LIKE '%R%';

-- 두 번째 글자가 a인 경우 (단일 와일드카드)
SELECT firstname FROM author WHERE firstname LIKE '_a%';
```

---

## 2. 범위 — BETWEEN AND

연속된 숫자 범위를 조건으로 지정할 때 `BETWEEN AND`를 사용합니다.  
범위의 양 끝 값이 **포함(inclusive)**됩니다.

```sql
-- 비교 연산자 사용 (장황한 방법)
SELECT * FROM Book
WHERE pages >= 290 AND pages <= 300;

-- BETWEEN AND 사용 (간결한 방법) — 동일한 결과
SELECT * FROM Book
WHERE pages BETWEEN 290 AND 300;
```

> `BETWEEN AND`는 날짜·문자열에도 적용 가능합니다.
>
> ```sql
> SELECT * FROM Book WHERE published_date BETWEEN '2020-01-01' AND '2020-12-31';
> ```

---

## 3. 집합 — IN

연속되지 않는 여러 값 중 하나와 일치하는 행을 조회할 때 `IN`을 사용합니다.

```sql
-- OR를 반복하는 방법 (장황한 방법)
SELECT firstname, lastname FROM author
WHERE country = 'Australia' OR country = 'Brazil';

-- IN 사용 (간결한 방법) — 동일한 결과
SELECT firstname, lastname FROM author
WHERE country IN ('Australia', 'Brazil');

-- 세 개 이상도 간결하게 처리
SELECT firstname, lastname FROM author
WHERE country IN ('Canada', 'India', 'China');
```

---

## 세 가지 기법 비교

| 기법 | 키워드 | 사용 상황 |
|------|--------|----------|
| 문자열 패턴 | `LIKE`, `%`, `_` | 정확한 값을 모를 때 |
| 범위 | `BETWEEN AND` | 연속된 숫자·날짜 범위 |
| 집합 | `IN` | 불연속적인 여러 값 중 하나 |
