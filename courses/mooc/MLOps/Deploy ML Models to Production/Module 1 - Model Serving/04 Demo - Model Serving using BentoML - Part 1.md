# Demo: Model Serving using BentoML - Part 1

## 개요
- BentoML을 이용해 집값(house price) 예측 선형 회귀 모델을 학습·저장하고, `model_service_v1.py`로 API 서비스를 구성해 포트 3000에서 서빙을 시작하는 5분 데모의 전반부.

## 내용

### 아키텍처 개요
- 사용자는 ML 모델이 구동하는 대시보드를 사용 → 모델은 AWS, GCP, Azure 또는 온프레미스 어디에나 호스팅 가능. 애플리케이션이 모델과 상호작용할 때는 항상 **API 엔드포인트**를 거침 — 이 방식으로 여러 마이크로서비스가 하나의 ML 모델과 상호작용할 수 있음.
- ML 모델을 `v1` 엔드포인트로 배포한다고 가정 → **BentoML 서빙 플랫폼**이 아티팩트 레지스트리(MLflow 또는 BentoML 리포지토리)에 저장된 모델을 호스팅.

### 환경 설정
- 작업 디렉토리: `04-bento-ml`.
- 가상환경 생성: `python3 -m venv bento-ml-env` → 활성화 → 필요한 패키지 설치: **BentoML, scikit-learn, pandas**.

### 모델 학습 및 저장
- 집값 예측용 랜덤 데이터 생성 — 피처: **평방피트(square foot), 방 개수(number of rooms)**, 타깃: **가격(price)**.
- **선형 회귀(Linear Regression)** 모델 학습 → 학습된 모델을 로컬 **BentoML 리포지토리**에 저장.
- 저장 확인: `bentoml models list` 실행 → `house_price_model`이 크기(1.23KB)와 생성 타임스탬프와 함께 조회됨.

### API 엔드포인트 구성 (`model_service_v1.py`)
- 코드 구성: 최신 house price 모델을 로드 → 서비스(service) 생성 → **베이스 모델 클래스(Base Model Class)** 정의(입력: 평방피트, 방 개수 2개) → 이 클래스를 이용해 ML 모델을 트리거하는 **API 엔드포인트** 생성.
- 실행 명령: `bentoml serve model_service_v1.py --reload` — `--reload` 옵션은 파일 변경 시 즉시 반영.
- 실행 후 **포트 3000**(BentoML 기본 포트)에서 브라우저 오픈 → 다른 마이크로서비스가 호출해 예측을 받을 수 있는 API가 정상 작동함을 확인.
- 다음 파트(Part 2)에서 이 API로 실제 예측을 수행할 예정.

## 예시
```bash
# 가상환경 및 패키지 설치
python3 -m venv bento-ml-env
source bento-ml-env/bin/activate
pip install bentoml scikit-learn pandas
```

```python
# 모델 학습·저장 (개념 구조)
import bentoml
import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression

# 랜덤 house price 데이터 생성: square_foot, number_of_rooms -> price
X = np.random.rand(100, 2) * [3000, 5]
y = X[:, 0] * 150 + X[:, 1] * 10000

model = LinearRegression()
model.fit(X, y)

bentoml.sklearn.save_model("house_price_model", model)
```

```bash
bentoml models list
# house_price_model  1.23 KB  <생성 타임스탬프>
```

```python
# model_service_v1.py (개념 구조)
import bentoml
from bentoml.io import JSON
from pydantic import BaseModel

class HouseInput(BaseModel):
    square_foot: float
    number_of_rooms: float

model_ref = bentoml.sklearn.get("house_price_model:latest")
runner = model_ref.to_runner()

svc = bentoml.Service("house_price_service", runners=[runner])

@svc.api(input=JSON(pydantic_model=HouseInput), output=JSON())
def predict(input_data: HouseInput):
    result = runner.predict.run([[input_data.square_foot, input_data.number_of_rooms]])
    return {"predicted_price": result.tolist()}
```

```bash
bentoml serve model_service_v1.py --reload
# http://localhost:3000 에서 API 서비스 확인
```

## 요약
- 이 데모(Part 1)는 가상환경 설정 → scikit-learn 선형 회귀로 집값 예측 모델 학습 → BentoML 리포지토리에 저장 → `model_service_v1.py`로 API 엔드포인트를 정의해 포트 3000에서 BentoML 서빙을 시작하는 과정을 다루며, 실제 예측 호출은 Part 2에서 이어진다.
