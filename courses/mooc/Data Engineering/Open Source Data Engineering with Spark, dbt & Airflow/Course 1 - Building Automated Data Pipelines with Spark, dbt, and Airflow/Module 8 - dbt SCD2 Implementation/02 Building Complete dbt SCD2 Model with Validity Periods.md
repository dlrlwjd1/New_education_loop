# Building Complete dbt SCD2 Model with Validity Periods

## 개요

- 스테이징 모델 → 스냅숏 → 변경 시뮬레이션 → 현재 레코드 뷰 → 품질 테스트까지 완전한 dbt SCD2 구현 실습

## 내용

### 구현 단계

1. **스테이징 모델 (stg_customers.sql)** — 고객 속성 선택 + **해시 기반 변경 감지** 최적화용 해시 생성
2. **SCD2 스냅숏 (customer_snapshot.sql)** — **check 전략**으로 시스템 필드는 무시하고 특정 비즈니스 속성의 변경만 추적
3. **초기 실행** — `dbt run --models stg_customers` + `dbt snapshot --models customer_snapshot` — 초기 SCD2 구조 생성 확인
4. **변경 시뮬레이션** — 소스에서 CUST001 주소를 "456 Oak Street"로 갱신 → 스냅숏 재실행으로 변경 캡처
5. **현재 레코드 뷰** — 분석용으로 현재 고객 레코드에 깨끗하게 접근하는 뷰 생성
6. **데이터 품질 테스트 (schema.yml)** — 유일 키, 고객당 단일 현재 레코드 등 SCD2 무결성 검증 — 전체 테스트 통과 확인

### 최종 검증

- `SELECT customer_id, customer_name, shipping_address, dbt_valid_from, dbt_valid_to FROM ... WHERE customer_id = 'CUST001' ORDER BY dbt_valid_from;`
- 결과: dbt_valid_to가 채워진 **역사 버전** + dbt_valid_to가 NULL인 **현재 버전** 확인

## 예시

```sql
-- models/staging/stg_customers.sql (개념)
SELECT customer_id, customer_name, shipping_address, email,
       md5(concat(customer_name, shipping_address, email)) AS row_hash,
       updated_at
FROM {{ source('raw', 'customers') }}

-- 현재 레코드 뷰
SELECT * FROM {{ ref('customer_snapshot') }}
WHERE dbt_valid_to IS NULL
```

```yaml
# schema.yml 테스트 (개념)
models:
  - name: current_customers
    columns:
      - name: customer_id
        tests: [unique, not_null]
```

## 요약

- 스테이징(해시 감지) → check 전략 스냅숏 → 현재 뷰 → schema.yml 테스트가 프로덕션급 dbt SCD2의 전체 흐름이다.
- 변경 시뮬레이션 후 valid_from/valid_to로 역사·현재 버전이 올바로 쌓이는지 검증한다.
