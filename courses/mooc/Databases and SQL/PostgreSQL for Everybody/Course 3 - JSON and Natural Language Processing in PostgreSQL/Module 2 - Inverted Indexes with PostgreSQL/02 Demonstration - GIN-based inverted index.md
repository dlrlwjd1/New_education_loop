# Demonstration: GIN-based inverted index

## 개요
- `array_ops`를 이용한 문자열 배열 기반 GIN 인덱스를 실제로 만들고, 대량 데이터 삽입 직후 인덱스가 아직 최신화되지 않아 `EXPLAIN`이 순차 스캔을 보여주는 현상을 관찰하는 실습 강의

## 내용
### PostgreSQL 버전에 따른 연산자 클래스 차이
- `SELECT version();`으로 PostgreSQL 버전을 확인한다. PostgreSQL 9와 11 사이에 여러 배열 타입 연산자 클래스가 `array_ops` 하나로 통합되어, 타입을 세세히 지정할 필요가 없어졌다.
- `CREATE INDEX gin1 ON docs USING gin(string_to_array(doc, ' ') array_ops);`로 인덱스를 생성한다.

### 대량 삽입 직후 인덱스가 따라잡지 못하는 현상
- 문서 3개 삽입 후 `generate_series`로 10,000여 개의 채움(filler) 행을 추가로 삽입한다.
- 삽입 직후 곧바로 `EXPLAIN`을 실행하면 순차 스캔(Sequential Scan)이 나오는 것을 확인한다 — 인덱스가 아직 백그라운드에서 최신 데이터를 따라잡는 중이라 "신뢰할 수 없는" 상태이기 때문이다. 잠시 기다린 뒤 다시 실행하면 인덱스가 활용된다.
- 이는 역방향 인덱스의 일반적인 특성으로, 삽입 부하가 매우 크면 인덱스가 계속 뒤처져 사실상 사용되지 못할 수도 있다는 실무적 함의를 준다.

## 예시
```sql
SELECT version();

CREATE INDEX gin1 ON docs USING gin(string_to_array(doc, ' ') array_ops);

INSERT INTO docs (doc)
SELECT 'neon' || generate_series(10000, 20000);

-- 삽입 직후에는 인덱스가 아직 최신화되지 않아 Seq Scan이 나올 수 있음
EXPLAIN SELECT id FROM docs
WHERE '{learn}'::text[] <@ string_to_array(doc, ' ');
```

## 요약
- PostgreSQL 11 이후에는 배열 연산자 클래스가 `array_ops`로 통합되어 인덱스 생성이 더 단순해졌다.
- 대량 삽입 직후에는 인덱스가 아직 최신 데이터를 반영하지 못해 일시적으로 순차 스캔이 발생할 수 있으며, 삽입 부하가 지속적으로 크면 인덱스가 계속 뒤처질 수 있다.
- `EXPLAIN`으로 인덱스가 실제로 활용되는지 확인하는 습관이 중요하다.
