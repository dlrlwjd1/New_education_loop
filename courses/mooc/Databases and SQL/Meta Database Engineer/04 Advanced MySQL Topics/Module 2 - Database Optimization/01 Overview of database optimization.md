# Overview of database optimization

## 개요

- 데이터베이스 최적화의 정의와 필요성
- 데이터 검색(SELECT) 문과 데이터 변경(INSERT/UPDATE/DELETE) 문의 최적화 방향 차이

## 내용

### 데이터베이스 최적화란

- **쿼리를 질의·처리·전송하는 시간을 줄이도록 데이터베이스 시스템의 성능을 개선**하는 것 — 속도와 효율을 최대화하는 과정.
- 데이터 양이 커지고 요구가 복잡해지면 응답 시간이 늘어난다 — 최적화된 데이터베이스는 SQL 쿼리를 빠르게 처리해 데이터를 반환한다.
- 성능은 하드웨어와 소프트웨어 모두에 좌우되며, 이 레슨은 MySQL 소프트웨어를 이용한 **쿼리 최적화**에 집중한다.

### SQL 문의 두 범주와 최적화 방향

1. **데이터 검색 문(data retrieval statements)** — SELECT 문:
   - 핵심은 **인덱스(index)** — 데이터를 빠르게 찾게 해 주는 핸들. 테이블 컬럼에 만든다.
   - 그 외: SELECT에서 **특정 컬럼만 지정**, 함수·와일드카드·서술어(predicate)의 효율적 사용, **OUTER JOIN 대신 INNER JOIN**, DISTINCT·UNION 절 활용, ORDER BY 정렬의 중요성
2. **데이터 변경 문(data change statements)** — INSERT/UPDATE/DELETE:
   - UPDATE·DELETE는 **WHERE 절의 조건 최적화**가 먼저
   - INSERT는 **배치 삽입(batch insert)** — 한 번의 INSERT 연산으로 여러 행 삽입

### 최적화의 효과

- 성능 개선과 더 빠른 처리 시간, 불필요한 작업 부하 제거 — 데이터 성장으로 인한 잠재적 문제를 예방한다.

## 요약

- 최적화는 쿼리 응답 시간을 줄여 데이터베이스 속도·효율을 최대화하는 과정이다.
- SELECT 문은 인덱스·컬럼 지정·조인 선택 등으로, 변경 문은 WHERE 조건과 배치 삽입으로 최적화한다.
