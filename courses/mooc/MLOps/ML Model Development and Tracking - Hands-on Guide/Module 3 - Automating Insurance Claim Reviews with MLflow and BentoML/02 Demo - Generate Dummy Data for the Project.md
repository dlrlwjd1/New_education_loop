# Demo: Generate Dummy Data for the Project

## 개요
- 프로젝트에 필요한 패키지(`requirements.txt`)를 설치하고, 정상·비정상 보험 청구 합성 데이터 150건을 생성하는 스크립트를 실행하는 2분 데모.

## 내용

### 필요 패키지 설치
- VS Code에서 `requirements.txt` 파일 생성 → 필요한 패키지 나열: **mlflow, pandas, numpy, bentoml**.
- `pip3 install -r requirements.txt` 실행 → 파일에 명시된 모든 패키지를 재귀적으로 설치.

### 합성 데이터 생성 스크립트
- 새 파일 `synthetic_health_claims.py` 생성 — 코드는 프로젝트에 필요한 합성 데이터를 무작위로 생성.
- **150건의 샘플 레코드** 생성 — 첫 번째 그룹은 **정상 청구(natural claims)**, 두 번째 그룹은 **비정상 청구(abnormal claims)**.
- 각 청구는 다음 필드를 포함: `claim_id`, `claim_amount`, `number_of_services`, `patient_age`, `provider_id`, `days_since_last_claim`.
- 생성된 데이터는 CSV 파일로 저장됨.
- `python3 synthetic_health_claims.py` 실행 → 정상 청구와 이상(anomaly)이 있는 청구가 섞인 청구 데이터 준비 완료.

### 다음 단계 예고
- 합성 데이터가 준비되었으니, 다음 영상에서는 모델을 설정하고 실험을 실행하는 과정을 다룰 예정.

## 예시
```txt
# requirements.txt
mlflow
pandas
numpy
bentoml
```

```bash
pip3 install -r requirements.txt
python3 synthetic_health_claims.py
```

```python
# synthetic_health_claims.py (개념 구조)
import pandas as pd
import numpy as np
import random

def generate_claim(is_abnormal=False):
    return {
        "claim_id": random.randint(100000, 999999),
        "claim_amount": np.random.uniform(500, 5000) if not is_abnormal else np.random.uniform(10000, 50000),
        "number_of_services": random.randint(1, 5) if not is_abnormal else random.randint(10, 20),
        "patient_age": random.randint(18, 90),
        "provider_id": random.randint(1, 50),
        "days_since_last_claim": random.randint(1, 365),
    }

normal_claims = [generate_claim(False) for _ in range(100)]
abnormal_claims = [generate_claim(True) for _ in range(50)]

df = pd.DataFrame(normal_claims + abnormal_claims)
df.to_csv("synthetic_health_claims.csv", index=False)
```

## 요약
- 이 데모는 MLflow/BentoML 프로젝트에 필요한 패키지를 설치하고, 청구 ID·금액·서비스 수·환자 나이·제공자 ID·마지막 청구 이후 경과일 등의 필드를 가진 정상/비정상 보험 청구 합성 데이터 150건을 생성하는 스크립트를 작성·실행한다.
