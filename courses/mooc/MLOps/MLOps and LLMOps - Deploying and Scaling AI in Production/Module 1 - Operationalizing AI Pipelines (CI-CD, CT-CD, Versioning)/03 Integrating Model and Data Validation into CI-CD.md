# Integrating Model & Data Validation into CI/CD

## 개요
- ML 파이프라인에서 데이터·모델 검증을 CI/CD에 어떻게 직접 내장할지, 검증 유형·도구·핵심 원칙, 그리고 이탈(churn) 모델을 위한 `validate_data.py` 실전 예시를 다루는 9분 영상.

## 내용

### 왜 검증이 필요한가
- 일반 소프트웨어 파이프라인에서 CI/CD는 대체로 코드가 빌드·테스트를 통과하는지만 확인 — ML 시스템에서는 이것만으로 부족.
- 코드가 정확하더라도 데이터가 잘못되었거나, 불완전하거나, 드리프트되었을 수 있음 — 나쁜 데이터가 파이프라인에 들어오면 모델이 **조용히(silently) 실패**할 수 있음.
- 이 섹션의 목적: 데이터·모델 검증을 CI/CD에 직접 내장해, 품질 낮은 데이터 입력이나 약한 모델 출력이 배포 전에 차단되도록 하는 방법을 보여주는 것.

### 4가지 검증 유형
1. **스키마 검증(Schema Validation)**: 필요한 컬럼이 존재하는지, 데이터 타입이 올바른지, 필드가 예상된 제약 조건을 따르는지 확인.
2. **분포/품질 검증(Distribution/Quality Validation)**: 새 데이터가 학습 데이터나 베이스라인 데이터와 충분히 유사한지 확인.
3. **행 개수/완전성 검증(Row Count/Completeness Validation)**: ETL 작업이 부분적으로 실패했거나 예상 데이터의 일부만 도착한 경우를 탐지.
4. **모델 검증(Model Validation)**: 새로 학습된 모델이 다음 단계로 진행하기 전 최소 성능 임계값을 충족하는지 확인.
- 핵심 메시지: **단일 체크만으로는 충분하지 않으며, 신뢰할 수 있는 ML CI/CD 파이프라인은 여러 검증 계층(layer)을 요구**함.

### 검증 유형별 도구 매핑
| 검증 유형 | 확인 내용 | 도구 |
|---|---|---|
| 스키마 | 컬럼 타입, null 값, 범위(range) | Pandera |
| 분포 | 베이스라인 대비 피처 드리프트 | SciPy 또는 PSI(Population Stability Index) |
| 행 개수 | 학습을 위한 최소 행 개수 | 커스텀 도구(Python 등) |
| 모델 평가 | 정확도 vs `baseline × 0.99` | MLflow |

### 검증 운영 규칙
1. **구조화된 로그(Structured Logs) 생성 필수**: 출력이 기계가 읽을 수 있는(machine-readable) 형태여야 함 — 파이프라인, 대시보드, 알림 도구가 무엇이 실패했는지 해석하기 쉬워짐.
2. **검증 실패 시 반드시 종료 코드(exit code) 1 반환**: CI/CD 시스템은 종료 코드로 파이프라인을 계속할지 중단할지 결정 — 검증 통과 시 정상 종료, 실패 시 코드 1로 종료해 파이프라인이 자동으로 차단됨. 이렇게 검증을 단순한 문서화가 아니라 **강제 가능한 품질 게이트(enforceable quality gate)**로 전환.

### 검증 체크 요약
- 스키마 체크: `pandera.validate(...)`
- 행 개수 체크: `assert len(df) >= min_rows` 형태
- Null 체크: `df.isnull().sum()`이 0이어야 함
- 로깅: `structlog.json` 또는 GitHub Actions 로그 캡처 사용

### `validate_data.py` 스크립트의 역할
- 이 스크립트의 목적은 단순히 데이터를 점검하는 것이 아니라, 학습이 시작되기 전 **강제 게이트(hard gate)**로 작동하는 것.
- 일반적으로 확인하는 것: 필수 컬럼 존재 여부, 타입 정확성, null 값이 스키마를 위반하는지, 데이터셋이 신뢰할 만큼 충분히 큰지.
- 핵심 원칙: 스크립트는 **조용히 실패해서는 안 됨** — 문제 발견 시 구조화된 오류를 발생시키고 즉시 워크플로를 중단해야 함. 이렇게 해야 나쁜 데이터가 모델 학습에 도달하는 것을 사전에 막고, 이미 나쁜 모델이 만들어진 후에야 문제를 발견하는 상황을 방지.

### 검증의 4대 핵심 원칙
1. **빠른 실패(Fail Fast)**: 문제를 일찍 잡을수록 나중에 낭비되는 컴퓨팅과 조사 비용이 줄어듦.
2. **구조화된 로그**: 검증 출력은 사람과 자동화 시스템 모두가 사용할 수 있어야 함.
3. **일관성(Consistency)**: 검증 체크는 개발·테스트·프로덕션 등 모든 환경에서 예측 가능하게 동일한 규칙을 따라야 함.
4. **엔지니어링 품질의 일부로 취급**: 검증은 코드에 존재해야 하고, 버전 관리되어야 하며, 파이프라인과 함께 진화해야 함.

### 실전 예시: 이탈(Churn) 모델을 위한 데이터 검증
- **Pandera 스키마**: 고객 ID(customer ID), 30일 트랜잭션 수(transaction count 30), 평균 속도(average speed), 이탈 라벨(churn label) 등 기대되는 트랜잭션 피처를 정의 — 각각 올바른 타입과 제약 조건을 지정.
- **최소 행 개수 요구사항**: 이 예시에서는 **10,000행** — 불완전하거나 부분적인 데이터로 학습하는 것을 방지.
- **검증 로직 2단계**: (1) 행 개수 확인, (2) 데이터프레임을 스키마에 대해 검증. 스키마 실패 시 JSON 형식으로 오류를 출력하고 `sys.exit()`로 종료.
- 이런 스크립트는 명확한 pass/fail 신호를 생성하므로 GitHub Actions나 다른 CI/CD 도구와 깔끔하게 통합됨.

### 검증이 보호하는 것들
1. **행 개수 체크**: ETL 부분 실패나 업스트림 데이터베이스 문제를 포착 — 예: 10,000행 대신 800행만 도착했다면 모델은 학습되어서는 안 됨.
2. **스키마 검증**: 포맷 변경이나 예상치 못한 값을 포착 — 예: 벤더의 포맷 변경으로 `average_speed_usd`가 갑자기 문자열이 되거나, 이탈 라벨에 `2`나 `-1` 같은 유효하지 않은 값이 포함된 경우.
3. **Null 체크**: 스키마를 통해 암묵적으로 강제되며, `customer_id`가 null인 것처럼 누락된 핵심 값을 포착 — 프로덕션이나 학습 중 NaN으로 인한 다운스트림 모델 오류를 방지.
4. **가장 중요한 운영 규칙**: 어떤 `sys.exit()` 호출이든 즉시 GitHub Actions를 중단시켜, 나쁜 데이터로는 절대 학습이 시작되지 않도록 함.

### 결론
- 검증의 진짜 가치는 나쁜 입력이 나쁜 모델이 되는 것을 막는 것 — ML CI/CD의 검증은 단순히 데이터를 확인하는 것이 아니라, **파이프라인이 사용에 적합한(fit for use) 데이터로만 학습·배포하도록 신뢰를 강제하는 것**.

## 예시
```python
# validate_data.py (개념 구조)
import pandera as pa
import pandas as pd
import sys
import json

schema = pa.DataFrameSchema({
    "customer_id": pa.Column(str, nullable=False),
    "transaction_count_30d": pa.Column(int, pa.Check.ge(0)),
    "avg_transaction_amount": pa.Column(float),
    "churn_label": pa.Column(int, pa.Check.isin([0, 1])),
})

MIN_ROWS = 10_000

def validate(df: pd.DataFrame):
    if len(df) < MIN_ROWS:
        print(json.dumps({"error": "row_count_too_low", "rows": len(df), "min_required": MIN_ROWS}))
        sys.exit(1)
    try:
        schema.validate(df)
    except pa.errors.SchemaError as e:
        print(json.dumps({"error": "schema_validation_failed", "detail": str(e)}))
        sys.exit(1)
    print(json.dumps({"status": "validation_passed", "rows": len(df)}))

if __name__ == "__main__":
    df = pd.read_csv("latest_transactions.csv")
    validate(df)
```

```text
[검증 실패 → 파이프라인 자동 차단]
validate_data.py 실행
    │
    ├─ 통과 → exit code 0 → 다음 단계(학습)로 진행
    └─ 실패 → JSON 오류 출력 + exit code 1 → GitHub Actions 워크플로 즉시 중단
```

## 요약
- ML CI/CD의 검증은 스키마·분포·행 개수·모델 성능이라는 여러 계층으로 이루어져야 하며, 각 검증 스크립트는 구조화된 로그와 실패 시 exit code 1을 반환해 강제 가능한 품질 게이트로 작동해야 하고, 이탈 모델 예시(Pandera 스키마 + 최소 10,000행 요구사항 + `sys.exit()`)처럼 이런 검증이 나쁜 데이터가 나쁜 모델로 이어지는 것을 근본적으로 차단한다.
