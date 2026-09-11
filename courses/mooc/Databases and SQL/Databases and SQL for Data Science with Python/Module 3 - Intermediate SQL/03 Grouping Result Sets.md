# Grouping Result Sets

## 학습 목표

- 결과 집합에서 중복 제거 방법 설명
- 결과 집합을 추가로 제한하는 방법 설명

---

## 문제 상황 — 중복 값

`author` 테이블에서 국가 열만 조회하면 저자 수(20명)만큼 행이 반환되어 중복이 발생합니다.

```sql
SELECT country FROM author ORDER BY 1;
-- 결과: 20행 (중복 포함, 알파벳 순 정렬)
```

---

## 1. DISTINCT — 중복 제거

```sql
SELECT DISTINCT country FROM author ORDER BY 1;
-- 결과: 6행 (고유한 국가만)
```

> `ORDER BY 1` : 첫 번째 열을 기준으로 정렬하는 단축 표현

---

## 2. GROUP BY — 그룹별 집계

국가별 저자 수를 알고 싶다면 `GROUP BY`와 집계 함수를 함께 사용합니다.

```sql
SELECT country, COUNT(country)
FROM author
GROUP BY country;
```

`COUNT(country)`처럼 집계 함수로 계산된 열은 자동으로 숫자(`2` 등)가 열 이름이 됩니다.

---

## 3. AS — 열 별칭 (Alias)

계산된 열에 의미 있는 이름을 붙입니다.

```sql
SELECT country, COUNT(country) AS Count
FROM author
GROUP BY country;
```

| country | Count |
|---------|-------|
| AU | 1 |
| BR | 2 |
| CA | 3 |
| CN | 6 |
| IN | 6 |
| US | 2 |

---

## 4. HAVING — 그룹 조건 필터링

`GROUP BY` 결과에 조건을 추가할 때 `HAVING`을 사용합니다.

```sql
SELECT country, COUNT(country) AS Count
FROM author
GROUP BY country
HAVING COUNT(country) > 4;
```

결과: 저자가 5명 이상인 국가만 반환

| country | Count |
|---------|-------|
| CN | 6 |
| IN | 6 |

---

## WHERE vs HAVING

| 구분 | 적용 대상 | 집계 함수 사용 |
|------|----------|--------------|
| `WHERE` | 전체 결과 집합의 개별 행 | 불가 |
| `HAVING` | `GROUP BY`로 묶인 그룹 | 가능 |

```sql
-- WHERE: 개별 행 필터 (GROUP BY 전에 적용)
SELECT country, COUNT(country) AS Count
FROM author
WHERE country != 'US'
GROUP BY country;

-- HAVING: 그룹 필터 (GROUP BY 후에 적용)
SELECT country, COUNT(country) AS Count
FROM author
GROUP BY country
HAVING COUNT(country) > 4;
```

---

## 전체 쿼리 실행 순서

```
FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY
```

---

## 핵심 요약

| 키워드 | 역할 |
|--------|------|
| `DISTINCT` | 중복 행 제거 |
| `GROUP BY` | 같은 값을 가진 행을 그룹으로 묶음 |
| `AS` | 열에 별칭 부여 |
| `HAVING` | 그룹에 조건 적용 (`GROUP BY`와 함께 사용) |
