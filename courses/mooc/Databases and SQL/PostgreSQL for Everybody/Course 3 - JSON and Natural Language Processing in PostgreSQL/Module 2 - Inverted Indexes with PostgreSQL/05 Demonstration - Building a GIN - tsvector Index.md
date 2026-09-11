# Demonstration: Building a GIN / tsvector Index

## 개요
- `to_tsvector` 기반 GIN 인덱스와 GIST 인덱스를 실제로 만들어보며, 두 인덱스의 생성 속도(적용 시점) 차이를 관찰하는 실습 강의

## 내용
### tsvector 기반 GIN 인덱스 생성
- `docs(id, doc)` 테이블에 문서 3개와 `generate_series`로 만든 10,000여 개의 채움 행을 삽입한다.
- `CREATE INDEX gin1 ON docs USING gin(to_tsvector('english', doc));`로 인덱스를 만들고, WHERE 절도 동일한 표현식(`to_tsquery('english', ...) @@ to_tsvector('english', doc)`)으로 작성해 `EXPLAIN`으로 인덱스가 사용되는지 확인한다.
- 문자열 배열 기반 인덱스보다 표현식이 훨씬 간단하다는 점을 강조한다 — PostgreSQL이 tsvector 구조를 원래부터 잘 이해하고 있기 때문이다.

### GIN vs GIST 생성/적용 속도 비교
- 같은 인덱스를 `USING gist`로 바꿔 만들어보면, GIST 인덱스는 생성 직후 거의 즉시 `EXPLAIN`에서 활용되는 반면, GIN은 상대적으로 인덱스가 최신 데이터를 반영하는 데 시간이 더 걸릴 수 있다는 점을 실험으로 보여준다 — Module 2의 이론(GIST는 생성·유지가 빠르고, GIN은 조회에 강하지만 갱신이 무겁다)을 실제로 체감시킨다.
- 인덱스를 삭제(`DROP INDEX`)하고 다시 만드는 과정을 반복하며 비교를 진행한다.

## 예시
```sql
CREATE INDEX gin1 ON docs USING gin(to_tsvector('english', doc));

EXPLAIN SELECT id FROM docs
WHERE to_tsquery('english', 'learn') @@ to_tsvector('english', doc);

DROP INDEX gin1;
CREATE INDEX gin1 ON docs USING gist(to_tsvector('english', doc));

EXPLAIN SELECT id FROM docs
WHERE to_tsquery('english', 'learn') @@ to_tsvector('english', doc);
```

## 요약
- `to_tsvector` 표현식을 그대로 GIN 또는 GIST 인덱스로 만들 수 있으며, WHERE 절 표현식과 정확히 일치시켜야 인덱스가 활용된다.
- 실험적으로 GIST가 GIN보다 인덱스 생성·최신화가 더 빠르게 반영되는 경향을 보였다 — 이는 Module 2에서 배운 "GIST는 생성이 가볍고 GIN은 조회가 정밀하다"는 트레이드오프와 일치한다.
- 목표는 항상 `EXPLAIN` 결과에서 순차 스캔이 사라질 때까지 인덱스와 쿼리 표현식을 맞추는 것이다.
