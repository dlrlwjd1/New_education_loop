# Text Function

## 개요
- 텍스트 열에 사용할 수 있는 WHERE 절 연산자들(`=`, `LIKE`, `SIMILAR TO`, `IN`)과, `EXPLAIN ANALYZE`로 쿼리 성능(순차 스캔 vs 인덱스 스캔)을 직접 비교하는 강의

## 내용
### 텍스트 비교 연산자
- `=` (등호): 인덱스가 있는 문자열 열에서 가장 성능이 좋은 비교 방식.
- `LIKE` : `%`(임의 길이 와일드카드)를 사용하는 단순 패턴 매칭. 여러 데이터베이스에서 비교적 표준적으로 지원된다.
- `SIMILAR TO` : 정규 표현식과 비슷하지만 강사는 실용성이 떨어진다고 평가하며 잘 쓰지 않는다고 언급한다(표준성도 낮음). 정규 표현식 자체는 Postgres뿐 아니라 Unix/Linux 등 여러 곳에 통용되므로 배워둘 가치가 있다고 언급한다.
- `IN (값1, 값2, ...)` : 여러 값 중 하나와 일치하는지 확인.
- 대소문자 변환, 부분 문자열 추출 등도 SELECT 결과나 WHERE 절에 사용할 수 있다.

### 인덱스와 공간-속도 트레이드오프
- `CREATE INDEX 인덱스명 ON 테이블(열);`은 기본적으로 B-트리 인덱스를 만든다. B-트리는 등호 비교, 정렬, 접두사 검색, 범위 검색에 모두 유용해 가장 널리 쓰이는 인덱스다.
- `pg_relation_size()`로 테이블·인덱스가 차지하는 디스크 공간을 확인할 수 있다. 인덱스는 "속도를 위해 공간을 쓰는" 트레이드오프이므로, 공간을 아끼는 것 자체를 목표로 삼지 말고 삽입·삭제·조회 속도를 빠르게 만드는 것이 목적임을 강조한다.
- 긴 텍스트 열을 통째로 인덱싱하면 인덱스 안에 그 텍스트 전체가 복제되어, 인덱스가 원본 데이터보다 더 커질 수 있다는 점을 실험으로 보여준다.

### EXPLAIN / EXPLAIN ANALYZE로 성능 확인
- `EXPLAIN`은 쿼리 실행 계획(strategy)만 보여주고 실제로 실행하지 않으며, `EXPLAIN ANALYZE`는 실제로 실행해서 걸린 시간까지 보여준다.
- 접두사 매칭(`LIKE '레이싱%'`)은 B-트리 인덱스를 그대로 활용해(Index Only Scan) 매우 빠르게(0.1ms 이하) 처리된다.
- 반면 문자열 중간에 와일드카드가 있는 패턴(`LIKE '%레이싱%'`)은 인덱스를 활용할 수 없어 전체 테이블 스캔(Sequential Scan)이 발생하며, 실험에서 약 1000배 느려지는 것을 확인한다. 대소문자 무시(`ILIKE`)는 이보다 한 번 더(약 3배) 느려진다.
- `IN` 절은 인덱스를 여러 번 조회(probe)하는 방식으로 처리되어 단일 등호 비교보다는 약간 느리지만 그래도 인덱스를 활용한다.
- 같은 조건을 서브쿼리(`WHERE content IN (SELECT ...)`)로 표현하면, 서브쿼리 내부가 순차 스캔으로 처리되어 훨씬 느려지는 사례를 통해 서브쿼리 회피 원칙을 다시 확인한다.
- `LIMIT 1`을 추가하면 순차 스캔이라도 첫 번째 일치 행을 찾는 즉시 멈출 수 있어 부분적으로 성능이 개선된다.

## 예시
```sql
CREATE TABLE textfun (content TEXT);
CREATE INDEX textfun_b ON textfun(content);

SELECT pg_relation_size('textfun');
SELECT pg_relation_size('textfun_b');

EXPLAIN ANALYZE SELECT content FROM textfun WHERE content LIKE '레이싱%';   -- Index Only Scan, 매우 빠름
EXPLAIN ANALYZE SELECT content FROM textfun WHERE content LIKE '%레이싱%';  -- Seq Scan, 훨씬 느림
EXPLAIN ANALYZE SELECT content FROM textfun WHERE content ILIKE '%레이싱%'; -- Seq Scan, 더 느림

EXPLAIN ANALYZE SELECT content FROM textfun WHERE content IN ('http...', 'https...');
```

## 요약
- B-트리 인덱스는 등호·정렬·접두사·범위 검색에 강하지만, 문자열 중간 와일드카드 검색에는 도움이 되지 않아 순차 스캔을 유발한다.
- `EXPLAIN`/`EXPLAIN ANALYZE`로 쿼리가 인덱스를 타는지(Index Scan) 전체 스캔을 하는지(Seq Scan) 직접 확인하는 습관이 중요하다.
- 서브쿼리는 표현은 편리하지만 실제로는 전체 스캔을 유발해 훨씬 느릴 수 있으므로, 가능하면 IN이나 직접 조건으로 바꾸는 것이 유리하다.
