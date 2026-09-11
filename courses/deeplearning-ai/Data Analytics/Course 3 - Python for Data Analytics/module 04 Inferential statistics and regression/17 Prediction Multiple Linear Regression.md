# Prediction: Multiple Linear Regression

## 개요
- 다중 회귀 모델로 **results.predict** 를 써서 새 값을 예측한다 — 단일 행 또는 데이터프레임 전체.
- 테스트 데이터는 훈련 데이터와 **정확히 같은 형식**이어야 한다.

## 내용

### 단일 예측
- `diamond1 = X_test.loc[0]` (예: 0.23캐럿 E색).
- `results.predict(diamond1)` → −$364(작은 다이아라 과소예측). 실제 `y_test.loc[0]` = $326 → 약 $600 오차(작은 다이아엔 큰 오차, 큰 다이아 기준엔 작음).

### 전체 예측
- `predicted = results.predict(X_test)` → **시리즈**(다이아별 예측 가격).
- `predicted.sample(10)` (음수 예측 = 작은 다이아), `predicted.describe()` (1,000개, 평균 ~$3,100, 최대 ~$7,600).

### 핵심 주의
- **X_test 형식 = X_train 형식** 이어야 함(같은 열·인코딩). 아니면 예상치 못한 결과나 오류.

## 예시

### 다중 회귀 예측
```python
diamond1 = X_test.loc[0]
results.predict(diamond1)          # 단일 행
predicted = results.predict(X_test)  # 전체 → Series
predicted.describe()
```

## 요약
- **results.predict(행 또는 데이터프레임)** 로 단일·전체 예측을 하며, 전체는 시리즈를 반환한다.
- 테스트 데이터는 훈련 데이터와 **동일한 형식**이어야 한다.
- 작은 다이아 등 일부 값은 예측이 부정확하다. 다음 강의는 **모델 평가**다.
