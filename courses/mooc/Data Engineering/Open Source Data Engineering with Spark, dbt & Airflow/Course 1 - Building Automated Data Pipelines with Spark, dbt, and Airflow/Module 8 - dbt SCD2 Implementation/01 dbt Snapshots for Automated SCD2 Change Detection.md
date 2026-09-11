# dbt Snapshots for Automated SCD2 Change Detection

## 개요

- dbt 스냅숏으로 SCD2 변경 감지·이력 버저닝을 자동화하는 데모 — timestamp/check 전략, 자동 생성 필드, 운영 옵션

## 내용

### 스냅숏 기본 구조

- 스냅숏은 `snapshots/` 디렉터리의 SQL 파일 + 특수 구성 블록 (예: `customer_snapshot.sql`)
- 구성 요소:
  - **unique_key** — 비즈니스 키 (customer_id)
  - **strategy** — 변경 감지 방법
  - **updated_at** — 소스 레코드 수정 시점을 나타내는 타임스탬프 필드
- 아래에 이력 추적할 데이터를 정의하는 SQL(예: staging_customers 조회)

### 변경 감지 전략 2종

- **timestamp** — updated_at 필드 기준으로 변경 감지
- **check** — 새 이력 레코드를 촉발할 **정확한 컬럼들을 지정** — 어떤 변경이 보존 가치가 있는지 정밀 제어

### 실행과 자동 생성 필드

- `dbt snapshot` 실행 — 현재 소스와 이전 스냅숏 결과 비교, 변경 감지 시 자동으로 SCD2 필드 생성:
  - **dbt_scd_id** — 대리 키 역할
  - **dbt_updated_at** — 변경 처리 시점
  - **dbt_valid_from** — 레코드 활성 시점
  - **dbt_valid_to** — 대체 시점 (현재 레코드는 NULL)

### 이력 조회

- `SELECT * FROM analytics_snapshot.customer_snapshot WHERE customer_id = 'CUST001' ORDER BY dbt_valid_from;` — 버전별 레코드(원본 → 주소 변경 → 현재) 확인

### 프로덕션 옵션

- **invalidate_hard_deletes** — 소스에서 레코드가 삭제된 경우 처리 — 소스가 데이터를 지워도 이력 완전성 유지
- 상세 로그 — 처리 레코드 수·감지된 변경 수·소요 시간
- 대용량 테이블: 증분 처리 + 생성된 SCD2 필드 인덱싱으로 최적화

## 예시

```sql
-- snapshots/customer_snapshot.sql
{% snapshot customer_snapshot %}
{{
  config(
    target_schema='analytics_snapshot',
    unique_key='customer_id',
    strategy='timestamp',
    updated_at='updated_at',
    invalidate_hard_deletes=True
  )
}}
SELECT * FROM {{ ref('staging_customers') }}
{% endsnapshot %}

-- check 전략 대안
-- strategy='check', check_cols=['address', 'email']
```

## 요약

- dbt 스냅숏은 SCD2를 선언적 구성으로 바꾼다 — unique_key + 전략(timestamp/check)만 정의하면 비교·버저닝 자동.
- dbt_valid_from/to·dbt_scd_id가 자동 생성되며, invalidate_hard_deletes로 삭제까지 추적한다.
