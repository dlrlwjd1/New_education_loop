# Indexes in MySQL

## 개요

- 인덱스(index) — 정렬된 데이터로 이어지는 포인터를 유지하는 데이터 구조 — 로 검색 쿼리를 빠르게 만드는 방법
- 기본(primary/clustered) vs 2차(secondary/non-clustered) 인덱스, EXPLAIN으로 효과 검증

## 내용

### 인덱스란

- **정렬된 데이터를 가리키는 포인터를 유지하는 데이터 구조.** 눈에 보이지 않지만 포인터 컬럼 + 정렬 데이터 컬럼의 2컬럼 테이블로 시각화하면 이해하기 쉽다.
- 인덱스가 없으면 MySQL은 특정 값을 찾기 위해 **테이블 전체를 스캔**한다.

### 두 가지 인덱스

1. **기본 인덱스(primary/clustered index)** — 테이블 자체에 저장. **기본 키·유일 키가 있는 테이블을 만들면 자동 생성**되며 테이블 내 행의 순서를 강제한다.
2. **2차 인덱스(secondary/non-clustered index)** — `CREATE INDEX` 문으로 직접 생성:
   - `CREATE INDEX idx_컬럼명 ON 테이블(컬럼들);` — 관례상 이름에 idx 접두어
   - 하나 이상의 컬럼으로 만들 수 있다.

### 주의 — 인덱스는 공짜가 아니다

- **자주 검색하는 컬럼에만** 인덱스를 만들 것 — 데이터를 삽입·갱신할 때마다 인덱스에도 반영해야 하므로 시간이 든다.

### EXPLAIN으로 검증

- `EXPLAIN SELECT ...` — 데이터베이스가 쿼리를 어떻게 실행했는지 출력 → 병목·비효율 쿼리 파악.
- 인덱스 생성 전: 10개 레코드를 모두 스캔, possible_keys가 NULL (도움 줄 키 없음)
- 인덱스 생성 후: **1개 행만 조회**, possible_keys에 인덱스가 나타남.

## 예시

```sql
-- 인덱스 없는 검색 (전체 스캔)
EXPLAIN SELECT contact_number FROM clients WHERE full_name = 'Jane Delgado';

-- 2차 인덱스 생성
CREATE INDEX idx_full_name ON clients(full_name);

-- 다시 확인 → 1행 조회, 인덱스 사용
EXPLAIN SELECT contact_number FROM clients WHERE full_name = 'Jane Delgado';
```

## 요약

- 인덱스는 포인터로 정렬 데이터를 찾아 전체 스캔을 없애는 구조다.
- 기본 인덱스는 PK/유일 키와 함께 자동 생성되고, 2차 인덱스는 CREATE INDEX로 만든다.
- 삽입·갱신 비용이 있으므로 자주 검색하는 컬럼에만 만들고, EXPLAIN으로 효과를 확인한다.
