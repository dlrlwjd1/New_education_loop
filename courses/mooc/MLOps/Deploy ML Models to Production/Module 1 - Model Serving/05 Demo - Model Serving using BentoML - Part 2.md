# Demo: Model Serving using BentoML - Part 2

## 개요
- Part 1에서 띄운 BentoML API로 실제 예측을 호출(Swagger UI 및 curl)하고, 피처를 몇 개(square foot, number of rooms)에서 8개 이상으로 확장한 **v2 모델**을 학습·등록·서빙까지 업그레이드하는 5분 데모의 후반부.

## 내용

### v1 모델로 예측 호출
- BentoML이 자동 생성한 API 문서(Swagger 형태) 화면에서 `/predict_house_price` POST 엔드포인트 확인 → "Try it out" 클릭 → `square_foot=2500`, `number_of_rooms=4` 입력 → Execute → 예측 가격(predicted price) 반환.
- 모델에 전달한 정보가 매우 적어(피처 2개) 예측이 정확하지 않을 수 있지만, 이 데모의 목적은 정확도가 아니라 **ML 모델을 BentoML 서비스에 통합하는 방법**을 보여주는 것.
- **curl 명령**으로도 동일한 API 호출 가능 — 새 bash 터미널을 열어 로컬 포트 3000의 `/predict_house_price` 엔드포인트에 curl 요청 → 동일한 예측 결과 수신.

### 모델 업그레이드: v1 → v2
- 기존 `model_train_v1.py`는 피처가 매우 최소(square foot, number of rooms)였음.
- 새 파일 `model_train_v2.py`는 훨씬 많은 피처를 사용: **평방피트, 방 개수, 욕실 개수(number of bathrooms), 주택 연식(house age), 도심까지의 거리(distance to city center), 차고 유무(garage), 정원 유무(garden), 지역 범죄율(crime rate), 지역 평균 학교 평점(average school ratings), 국가(country), 가격(price)**.
- 나머지 코드 구조는 v1과 동일 — 기존 BentoML 서빙 프로세스 중단(Ctrl+C) 후 `model_train_v2.py` 실행 → 새 모델 학습·저장.

### 버전 관리 확인
- `bentoml models list` 재실행 → **v1과 v2 두 모델**이 모두 조회됨.
- BentoML은 각 모델을 **latest**와 **이전 버전(previous version)**으로 자동 태깅해 구분 — 모델 저장 시 사용자가 직접 태그를 지정하는 것도 가능.

### v2 모델 서빙
- 새 파일 `model_service_v2.py` — `house_price_model_v2`의 최신 버전을 로드해 서빙. 입력 클래스(input class)에 훨씬 많은 파라미터가 정의됨 — 나머지 구조는 v1과 동일.
- `bentoml serve model_service_v2.py` 실행 → 엔드포인트 새로고침 → "Try it out" 클릭 시 예시 입력값에 훨씬 많은 파라미터가 표시됨을 확인.
- curl 명령으로도 재검증 — 여러 파라미터(일부는 0 값 포함)를 전달해도 정상적으로 예측 결과 수신됨.

### 데모 요약 (강의 내 리캡)
1. BentoML에 필요한 Python 패키지 설치.
2. 모델 학습 후 로컬 BentoML 모델 레지스트리에 저장.
3. BentoML CLI로 ML 모델 서빙.
4. 더 많은 파라미터를 받도록 모델을 업그레이드(v1 → v2)해 더 성숙한 모델로 발전.
- 핵심 요점: ML 모델을 BentoML과 통합해 사용자와 다른 마이크로서비스 모두에게 서빙하는 방법을 이해하는 것.

## 예시
```bash
# v1 API 호출 (curl)
curl -X POST http://localhost:3000/predict_house_price \
  -H "Content-Type: application/json" \
  -d '{"square_foot": 2500, "number_of_rooms": 4}'
```

```python
# model_train_v2.py (개념 구조) — 피처 확장
features_v2 = [
    "square_foot", "number_of_rooms", "number_of_bathrooms",
    "house_age", "distance_to_city_center", "has_garage",
    "has_garden", "crime_rate", "avg_school_rating", "country"
]
# 나머지 학습 코드 구조는 v1과 동일 (LinearRegression, bentoml.sklearn.save_model)
```

```bash
bentoml models list
# house_price_model  v1  (previous)
# house_price_model  v2  (latest)
```

```bash
bentoml serve model_service_v2.py --reload

curl -X POST http://localhost:3000/predict_house_price \
  -H "Content-Type: application/json" \
  -d '{"square_foot": 2500, "number_of_rooms": 4, "number_of_bathrooms": 2,
       "house_age": 5, "distance_to_city_center": 3.2, "has_garage": 1,
       "has_garden": 0, "crime_rate": 0.02, "avg_school_rating": 8.5, "country": 0}'
```

## 요약
- 이 데모는 BentoML로 서빙 중인 house price 모델을 Swagger UI와 curl로 직접 호출해 예측을 확인하고, 피처가 2개뿐인 v1 모델을 8개 이상 피처를 사용하는 v2 모델로 업그레이드해 재학습·재등록·재서빙하는 과정을 통해 BentoML이 모델 버전(latest/previous)을 자동 관리하며 손쉽게 모델을 교체·확장할 수 있음을 보여준다.
