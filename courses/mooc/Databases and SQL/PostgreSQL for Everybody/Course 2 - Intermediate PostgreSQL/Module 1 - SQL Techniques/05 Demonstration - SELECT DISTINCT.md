# Demonstration: SELECT DISTINCT

## 개요
- 경주용 자동차(racing) 예제 데이터를 이용해 `DISTINCT`와 `DISTINCT ON`을 실제 psql에서 실습하는 강의

## 내용
### DISTINCT 기본 동작 실습
- 제조사(make)만 SELECT DISTINCT 하면 완전히 같은 제조사 이름이 중복 제거된다.
- `DISTINCT make, model`처럼 열을 두 개 지정하면, 두 열의 조합이 겹치는 경우만 제거되고 서로 다른 조합은 모두 유지된다.

### DISTINCT ON과 ORDER BY의 상호작용
- `DISTINCT ON (model)`로 모델 기준 중복 제거를 지정하면, 어떤 행이 대표로 남는지는 `ORDER BY`에 의해 결정된다.
- 실습에서 `ORDER BY year DESC`만 지정했을 때는 모델별 그룹화가 제대로 되지 않아 원하는 결과가 나오지 않았고, `ORDER BY model, year DESC`처럼 DISTINCT ON에 지정한 열(model)로 먼저 정렬한 뒤 그 다음 기준(year DESC)으로 정렬해야 의도한 대로 "모델별 최신 연도 한 행씩"이 나온다는 점을 실제 실행으로 확인한다.
- 이를 통해 DISTINCT ON을 쓸 때는 반드시 ORDER BY의 첫 번째 기준이 DISTINCT ON의 열과 일치해야 한다는 실무 규칙을 보여준다.

### 실무에서의 사용 빈도
- 강사는 실무에서 SELECT DISTINCT를 쓰는 경우 중 90% 이상은 `DISTINCT ON`이 아니라 단순 `DISTINCT`라고 언급한다.

## 예시
```sql
SELECT DISTINCT make FROM racing;
SELECT DISTINCT make, model FROM racing;

-- 의도대로 동작하지 않는 경우 (정렬 기준이 DISTINCT ON과 안 맞음)
SELECT DISTINCT ON (model) make, model, year
FROM racing
ORDER BY year DESC;

-- 올바른 사용: DISTINCT ON 열을 ORDER BY 맨 앞에 둔다
SELECT DISTINCT ON (model) make, model, year
FROM racing
ORDER BY model, year DESC;
```

## 요약
- `DISTINCT`는 SELECT한 열 조합 기준으로 완전히 겹치는 행만 제거하는 단순한 동작이다.
- `DISTINCT ON (열)`을 쓸 때는 `ORDER BY`의 첫 기준을 반드시 그 열과 일치시켜야 의도한 대로 그룹별 대표 행이 선택된다.
- 실무에서는 복잡한 DISTINCT ON보다 단순 DISTINCT를 사용하는 경우가 압도적으로 많다.
