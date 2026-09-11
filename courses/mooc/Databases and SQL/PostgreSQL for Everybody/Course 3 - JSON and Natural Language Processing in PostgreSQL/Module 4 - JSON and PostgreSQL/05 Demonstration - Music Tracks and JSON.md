# Demonstration: Music Tracks and JSON

## 개요
- iTunes 라이브러리를 JSON으로 변환해 JSONB 열에 적재하고, `->`/`->>`/`@>`/`?`/`||`(연결)/`jsonb_set` 연산자와 B-트리·GIN(+`jsonb_path_ops`) 인덱스를 실제로 다뤄보는 종합 실습 강의

## 내용
### 한 줄짜리 JSON 파일 적재
- 한 줄에 하나의 JSON 객체가 있는 파일을, 따옴표·구분자를 존재하지 않는 문자로 지정한 `\copy` 트릭으로 각 줄을 그대로 하나의 `JSONB` 값으로 적재한다(Course 2에서 배운 "구분자 없는 CSV 적재" 기법의 응용).
- `pg_typeof(body)`로 실제 저장된 타입이 `jsonb`임을 확인한다.

### 화살표 연산자 정리
- `body -> 'name'` : JSONB 조각(따옴표 포함)을 반환.
- `body ->> 'name'` : 텍스트로 반환(등호 비교 등에 필요).
- 괄호와 `::` 캐스팅의 연산자 우선순위 때문에 `(body -> 'name')::text`처럼 괄호가 필요한 경우가 있다는 점을 실제 오류로 확인한다.
- 숫자 비교 시 텍스트로 정렬하면 "9" > "1000"처럼 사전식 비교가 되어버리므로, `(body ->> 'count')::integer`로 반드시 정수 캐스팅 후 `ORDER BY`해야 한다는 점을 실제로 보여준다.

### 포함(@>)과 키 존재(?) 연산자
- `body @> '{"name": "Summer Nights"}'`로 JSONB 부분집합 포함 여부를 확인한다 — 이는 등호 비교(`->>`+텍스트 비교)와 달리 JSONB 자체를 비교하는 진짜 JSONB 연산자다.
- `body ? 'favorite'`로 특정 키의 존재 여부만 확인한다(값과 무관).

### JSONB 갱신: 연결(||)과 jsonb_set
- `body || '{"favorite": "yes"}'::jsonb`처럼 `||` 연산자로 기존 JSONB에 새 키를 병합할 수 있다 — `UPDATE ... SET body = body || '{"favorite":"yes"}' WHERE (body->>'count')::integer > 200;`로 조건에 맞는 행에 일괄로 필드를 추가한다.
- 특정 키의 값을 갱신(예: count에 1 더하기)하려면 `jsonb_set(body, '{count}', to_jsonb((body->>'count')::integer + 1))`처럼 다소 장황한 문법이 필요하다 — 강사는 이 문법이 우아하지 않다고 평가하며, 자주 갱신해야 하는 값이라면 차라리 별도 열로 분리하는 편이 낫다는 실용적 견해를 제시한다.

### 인덱스 3종 비교
- B-트리 인덱스: `(body ->> 'name')`에 걸어 등호 비교(`body ->> 'name' = 'Summer Nights'`)를 가속한다 — 일반 텍스트 열과 동일한 방식으로 동작한다.
- GIN(기본): `body` 전체에 걸어 `?` 연산자(키 존재 확인, 예: `body ? 'favorite'`)를 가속한다.
- GIN(`jsonb_path_ops`): 키-값 쌍 단위로 인덱싱해 `@>` 연산자(포함 확인, 예: 이름+아티스트 동시 일치)를 가속한다 — AND 조건처럼 여러 키-값 쌍이 동시에 포함되는지 확인할 때 유용하다.
- `EXPLAIN ANALYZE`로 각 인덱스가 대응하는 연산자에서만 활성화되고, 다른 연산자(예: B-트리는 `@>`에, GIN은 등호 비교에 반응하지 않음)에는 순차 스캔이 발생한다는 것을 직접 확인한다.

## 예시
```sql
CREATE TABLE jtrack (id SERIAL PRIMARY KEY, body JSONB);
\copy jtrack(body) FROM 'library.jstxt' WITH (FORMAT csv, QUOTE E'\x01', DELIMITER E'\x02')

SELECT (body ->> 'name') FROM jtrack LIMIT 5;
SELECT MAX((body ->> 'count')::integer) FROM jtrack;

SELECT * FROM jtrack WHERE body @> '{"name": "Summer Nights"}';
SELECT COUNT(*) FROM jtrack WHERE body ? 'favorite';

UPDATE jtrack SET body = body || '{"favorite": "yes"}'::jsonb
WHERE (body ->> 'count')::integer > 200;

UPDATE jtrack
SET body = jsonb_set(body, '{count}', to_jsonb((body ->> 'count')::integer + 1))
WHERE body ->> 'name' = 'Summer Nights';

CREATE INDEX ON jtrack ((body ->> 'name'));
CREATE INDEX jtrack_gin ON jtrack USING gin(body);
CREATE INDEX jtrack_gin_path ON jtrack USING gin(body jsonb_path_ops);
```

## 요약
- 화살표 연산자(`->`/`->>`)의 반환 타입 차이와 캐스팅 우선순위를 정확히 이해해야 오류 없이 값을 추출·비교할 수 있다.
- `@>`(포함)와 `?`(키 존재)는 등호 비교와는 다른 진짜 JSONB 전용 연산자이며, 각각 다른 인덱스(`jsonb_path_ops` GIN vs 기본 GIN)에 대응한다.
- JSONB 값 갱신은 `||`(병합)로는 간단하지만 `jsonb_set`으로 특정 키만 바꾸는 것은 문법이 장황하므로, 자주 바뀌는 값은 별도 열로 두는 것도 현실적인 대안이다.
