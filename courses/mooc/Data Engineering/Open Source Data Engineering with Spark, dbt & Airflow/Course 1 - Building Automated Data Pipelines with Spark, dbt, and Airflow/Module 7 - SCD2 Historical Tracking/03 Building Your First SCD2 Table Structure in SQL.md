# Building Your First SCD2 Table Structure in SQL

## 개요

- SQL로 SCD2 고객 차원 테이블을 직접 만드는 데모 — 컬럼 구성, 인덱스 2종, 유효 기간 체크 제약

## 내용

### 테이블 구성 요소

- **customer_sk** — 대리 키, IDENTITY + 기본 키
- **customer_id** — 비즈니스 키 보존
- 중간 컬럼들 — 변경 시 이력 레코드를 촉발하는 **추적 대상 속성**
- **valid_from / valid_to** — 시간 추적 (valid_to는 현재 레코드가 종료일이 없으므로 nullable)
- **is_current** — 효율적 질의를 위한 활성 레코드 플래그

### 인덱스와 제약

- **비즈니스 키 인덱스** — ETL 변경 감지 시 효율적 조회
- **is_current 필터드 인덱스** — 최신 데이터 질의 고속화
- **CHECK 제약(ck_validity_period)** — 종료일이 시작일보다 앞서는 잘못된 유효 기간 방지 — 시간 데이터 무결성 필수

### 변경 처리 흐름

1. 고객 데이터 변경 시 현재 레코드를 닫음 — valid_to 설정 + is_current = false
2. 갱신 값으로 새 레코드 삽입
3. 대리 키 덕분에 팩트 테이블 참조는 모든 변경에 걸쳐 안정적으로 유지

## 예시

```sql
CREATE TABLE dim_customer (
  customer_sk   INT IDENTITY PRIMARY KEY,   -- 대리 키
  customer_id   VARCHAR(20) NOT NULL,       -- 비즈니스 키
  full_name     VARCHAR(100),               -- 추적 속성
  address       VARCHAR(200),
  email         VARCHAR(100),
  valid_from    DATETIME NOT NULL,
  valid_to      DATETIME NULL,              -- 현재 레코드는 NULL
  is_current    BIT NOT NULL DEFAULT 1,
  CONSTRAINT ck_validity_period CHECK (valid_to IS NULL OR valid_to > valid_from)
);

CREATE INDEX ix_dim_customer_bk ON dim_customer (customer_id);
CREATE INDEX ix_dim_customer_current ON dim_customer (customer_id) WHERE is_current = 1;
```

## 요약

- 대리 키(안정성) + 비즈니스 키(참조) + 추적 속성(버저닝) + 시간 필드(이력) + 시스템 필드(운영)가 프로덕션급 SCD2 구조다.
- 필터드 인덱스와 유효 기간 CHECK 제약이 성능·무결성을 보장한다.
