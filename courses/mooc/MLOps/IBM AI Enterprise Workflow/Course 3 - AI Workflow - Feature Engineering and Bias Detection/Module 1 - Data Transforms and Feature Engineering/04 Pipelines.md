# Pipelines

## 개요
- 형식: 읽기 자료 (약 3분)
- 핵심: 변환·특징 공학·모델 선택·모델 튜닝의 조합은 무수히 많다. **그 변형들을 체계적으로 비교하는 수단**이 파이프라인이다.

## 내용

### 왜 파이프라인이 필요한가
하나의 데이터셋에도 변환·특징 공학·모델 선택·모델 튜닝을 고려하면 가능한 워크플로가 아주 많아진다. 그러면 이 변형들을 **체계적으로 비교할 방법**이 필요해진다.

scikit-learn의 세 인터페이스가 일관되어 있기 때문에, 여러 파이프라인을 만들어 결과를 비교하는 일이 반복적 워크플로의 일부로 가능해진다.

### 파이프라인의 영향력
이 세 인터페이스와 파이프라인 조합이 데이터 과학 워크플로에 미친 영향이 커서, **Apache Spark도 유사한 ML 파이프라인을 갖게 되었다.**

## 예시

```python
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.pipeline import Pipeline
from sklearn.feature_selection import SelectKBest
from sklearn.metrics import median_absolute_error, r2_score
from sklearn.preprocessing import StandardScaler
from sklearn.datasets import load_boston

## 데이터 적재
boston = load_boston()
X, y = boston['data'], boston['target']
features = boston['feature_names']

## 학습/테스트 분리
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=0)

## 파이프라인 생성
pipe = Pipeline([("scaler", StandardScaler()),
                 ("featsel", SelectKBest(k=10)),
                 ("rf", RandomForestRegressor(n_estimators=20))])

## 학습
pipe.fit(X_train, y_train)

## 평가
y_pred = pipe.predict(X_test)
print(r'R^2=%.2f, MAE=%.2f' % (r2_score(y_test, y_pred),
                               median_absolute_error(y_test, y_pred)))
```

결과:

```
R^2=0.74, MAE=1.54
```

### 이 파이프라인이 하는 일 (순서대로)
1. `StandardScaler` — 데이터 표준화
2. `SelectKBest(k=10)` — **ANOVA 검정 기준**으로 상위 10개 특징 선택 (다른 점수 함수도 선택 가능)
3. `RandomForestRegressor` — 변환된 데이터를 랜덤 포레스트 회귀에 투입

> `load_boston`은 이후 scikit-learn에서 제거된 데이터셋이다. 강의 코드를 그대로 돌리려면 버전을 확인하거나 다른 데이터셋으로 바꿔야 한다.

## 요약
- 파이프라인의 목적은 편의가 아니라 **워크플로 변형들의 비교 가능성**이다.
- `Pipeline`은 `(이름, 객체)` 튜플의 리스트이고, 마지막 단계만 Predictor면 된다.
- `SelectKBest`의 기본 점수 함수는 ANOVA이며, 이것 자체가 특징 선택 = 차원 축소의 한 형태다.
