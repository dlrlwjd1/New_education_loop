# Demonstration: Mail Archive 2/3

## 개요
- 적재된 이메일 메시지에 `to_tsvector` 기반 GIN 인덱스를 만들고, 정규식으로 발신자 열을 추출한 뒤, GIN과 GIST의 실제 동작 차이를 확인하는 실습 강의

## 내용
### GIN 인덱스 생성과 tsvector 확인
- `CREATE INDEX message_gin ON messages USING gin(to_tsvector('english', body));`로 본문(body)에 대한 역방향 인덱스를 만든다.
- `to_tsvector('english', body)`를 직접 조회해 "reminder"→"remind", "organization"→"organ" 같은 어간 추출 결과를 확인하고, 이것이 인덱스가 실제로 저장하는 축소된 단어 집합임을 재확인한다.

### 새 열 추가와 정규식 기반 데이터 추출
- `ALTER TABLE messages ADD COLUMN sender TEXT;`로 열을 추가한 뒤, `substring(header FROM '정규식')`으로 헤더에서 발신자 이메일만 뽑아 `UPDATE`로 채워 넣는다 — Course 2의 정규식·서브쿼리 기법을 재사용한다.

### 언어를 잘못 지정하면 인덱스가 무용지물
- 인덱스를 만들 때 쓴 언어(`english`)와 다른 언어(`spanish`)로 쿼리하면(`to_tsquery('spanish', ...)`), 표현식이 인덱스와 일치하지 않아 순차 스캔이 발생하는 것을 실제로 확인한다 — 인덱스 표현식과 WHERE 절 표현식의 "완전 일치" 원칙이 언어 설정에도 그대로 적용된다는 것을 보여준다.

### GIN ↔ GIST 전환 실습
- 기존 GIN 인덱스를 삭제하고 같은 표현식으로 GIST 인덱스를 만들어본다. 두 인덱스는 쿼리 결과 자체는 동일하지만, 내부적으로 GIST는 해시 기반이라 일부 불필요한 행까지 가져온 뒤 걸러내는 반면 GIN은 정확히 필요한 행만 가져온다는 차이를 재확인한다.

## 예시
```sql
CREATE INDEX message_gin ON messages USING gin(to_tsvector('english', body));

ALTER TABLE messages ADD COLUMN sender TEXT;
UPDATE messages SET sender = substring(header FROM '패턴');

-- 언어 불일치 → 순차 스캔
EXPLAIN ANALYZE SELECT id FROM messages
WHERE to_tsquery('spanish', 'lunes') @@ to_tsvector('spanish', body);

-- GIN → GIST 전환
DROP INDEX message_gin;
CREATE INDEX message_gist ON messages USING gist(to_tsvector('english', body));
```

## 요약
- `to_tsvector`로 확인한 어간 추출 결과가 곧 인덱스에 저장되는 실제 데이터임을 직접 확인했다.
- 정규식으로 헤더에서 발신자를 추출해 별도 열로 분리하는 것은 Course 2 기법의 실전 응용이다.
- 인덱스 생성 표현식(언어 포함)과 WHERE 절 표현식이 정확히 일치해야 인덱스가 활용되며, GIN과 GIST는 같은 결과를 다른 방식(정밀 vs 해시 기반)으로 찾는다.
