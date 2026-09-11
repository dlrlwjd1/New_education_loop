# Lecture: PostgreSQL and JSON

## 개요
- PostgreSQL의 JSON 지원 발전 과정(H-Store → JSON → JSONB)과, JSONB의 주요 연산자(`->`, `->>`, `@>`, `?`)·인덱싱 전략을 소개하는 강의

## 내용
### NoSQL의 도전과 PostgreSQL의 대응
- Postgres 9.4 이전에는 JSON 지원이 없었고, 이 때문에 일부 개발자들이 MongoDB 같은 JSON 기반 NoSQL 데이터베이스로 이탈했다. 이에 대응해 PostgreSQL은 점진적으로 H-Store → 단순 JSON 타입 → JSONB 순으로 JSON 지원을 발전시켰다.

### H-Store: JSONB의 전신
- H-Store는 한 열에 키-값 쌍만 저장하는(중첩 불가) 단순한 구조다. 40개 열을 일일이 만들 필요 없이 스키마 없는 작은 데이터를 저장할 때 유용하며, WHERE 절도 사용할 수 있다. 하지만 중첩 구조는 표현할 수 없다는 한계가 있다.

### JSON vs JSONB
- 초기 JSON 타입(9.3 이하)은 사실상 텍스트 필드였다 — 정규식과 GIN 인덱스로 다룰 수는 있지만 진짜 구조화된 저장은 아니었다.
- JSONB는 텍스트가 아니라 파싱되어 저장되는 진짜 구조화된 타입이다 — 공백 등을 제거해 압축적으로 저장하고, 인덱싱·조회에 최적화되어 있다. 강사는 확신이 서지 않으면 JSONB를 쓰라고 권장하며, PostgreSQL의 향후 투자와 성능 개선이 JSONB에 집중될 것이라고 전망한다.

### 주요 JSONB 연산자
- `->` : 키에 해당하는 값을 JSONB(객체/조각)로 반환.
- `->>` : 키에 해당하는 값을 텍스트로 반환(등호 비교 등에 사용하려면 이 연산자가 필요).
- `@>` : 포함(containment) 연산자 — 왼쪽 JSONB가 오른쪽 JSONB를 부분집합으로 포함하는지 확인.
- `?` : 특정 키가 JSONB 안에 존재하는지 확인.
- 예: `body ->> 'count'` (텍스트로 추출 후 `::integer`로 캐스팅), `body @> '{"name": "Summer Nights"}'` (부분 일치 확인), `body ? 'favorite'` (해당 키의 존재 여부).

### 인덱싱 전략
- 일반 B-트리 인덱스를 특정 키 표현식(예: `body ->> 'name'`)에 걸 수 있다 — 마치 별도 열처럼 빠르게 동작한다.
- GIN 인덱스를 JSONB 전체에 걸면 `?` 연산자(키 존재 여부) 조회가 빨라진다.
- `jsonb_path_ops` 옵션을 준 GIN 인덱스는 키-값 쌍 단위로 인덱싱해, `@>`(포함) 연산자를 사용하는 조회를 더 빠르게 만든다.

## 예시
```sql
CREATE TABLE jtrack (id SERIAL PRIMARY KEY, body JSONB);

SELECT body ->> 'name' FROM jtrack WHERE body ->> 'name' = 'Summer Nights';
SELECT body FROM jtrack WHERE body @> '{"name": "Summer Nights"}';
SELECT * FROM jtrack WHERE body ? 'favorite';

CREATE INDEX ON jtrack ((body ->> 'name'));
CREATE INDEX jtrack_gin ON jtrack USING gin(body);
CREATE INDEX jtrack_gin_path ON jtrack USING gin(body jsonb_path_ops);
```

## 요약
- PostgreSQL의 JSON 지원은 H-Store(단순 키-값) → JSON(텍스트) → JSONB(진짜 구조화 저장)로 발전했으며, 확신이 없으면 JSONB를 쓰는 것이 권장된다.
- `->`(JSONB 반환), `->>`(텍스트 반환), `@>`(포함), `?`(키 존재)가 핵심 연산자다.
- 특정 키에는 B-트리 인덱스를, 전체 구조 탐색에는 GIN(+`jsonb_path_ops`)을 사용해 성능을 최적화할 수 있다.
