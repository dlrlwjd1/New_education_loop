# Optimizing database SELECT statements

## 개요

- SELECT 문 최적화의 5가지 기본 지침(best practices)과 각 지침의 이유

## 내용

### 최적화되지 않은 SELECT의 문제

- 검색 문이 최적화되지 않으면 데이터베이스에 추가 부하를 얹고 성능을 늦춰, 쿼리 실행과 데이터 반환이 오래 걸린다.

### 5가지 지침

1. **필요한 컬럼만 SELECT** — `*`로 모든 데이터를 질의하면 부하가 커진다. 필요한 컬럼 이름만 나열한다.
2. **서술어(predicate)에서 함수 사용 회피** — 서술어는 참/거짓을 반환하는 식(WHERE 조건 등). **인덱스가 걸린 컬럼에 WHERE 절 함수를 적용하면 데이터베이스가 인덱스를 사용할 수 없게 된다.**
3. **서술어에서 선행 와일드카드(leading wildcard) 회피** — LIKE 패턴이 와일드카드로 시작하면(`'%abc'`) MySQL이 검색에 인덱스를 활용할 수 없다.
4. **가능하면 INNER JOIN 사용** — OUTER JOIN은 매칭 없는 행까지 두 테이블 전체를 가져와 처리 시간이 길다. INNER JOIN은 필요한(매칭) 레코드만 가져와 효율적이다.
5. **DISTINCT·UNION은 꼭 필요할 때만** — 중복 제거는 정렬 연산이 필요해 쿼리를 늦춘다. 가능하면 **UNION ALL**을 써서 정렬 연산을 없애고 실행 속도를 높인다.

## 예시

```sql
-- 나쁨: 전체 컬럼 + 선행 와일드카드
SELECT * FROM orders WHERE client_name LIKE '%son';

-- 좋음: 필요한 컬럼 + 선행 와일드카드 없는 패턴
SELECT order_id, client_id, cost FROM orders WHERE client_name LIKE 'Smith%';

-- 중복 허용이 가능하면 UNION ALL (정렬 생략 → 빠름)
SELECT full_name FROM full_time_employees
UNION ALL
SELECT full_name FROM part_time_employees;
```

## 요약

- SELECT 최적화 5원칙: 필요한 컬럼만, 서술어 함수 회피, 선행 와일드카드 회피, INNER JOIN 우선, DISTINCT/UNION 최소화(UNION ALL 활용).
- 공통 원리는 인덱스를 무력화하지 않고 불필요한 처리(전체 스캔·정렬)를 줄이는 것이다.
