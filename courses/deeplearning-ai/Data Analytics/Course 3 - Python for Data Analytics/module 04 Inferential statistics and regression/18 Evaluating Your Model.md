# Evaluating Your Model

## 개요
- R² 외 평가 지표: **예측값 vs 실제값 산점도**, **다중 R(multiple R)**, **잔차(residuals)**, **평균 절대 오차(MAE)**.
- 다중 회귀는 독립·종속 산점도로 볼 수 없으므로(고차원) 이 방법들이 유용하다.

## 내용

### 예측 vs 실제 산점도
- `y_pred = model.predict(X_test)`, `y_actual = y_test`.
- `sns.regplot(x=y_pred, y=y_actual)` + **y=x 완벽선**(빨간 대시). 이상적으론 예측=실제(y=x 직선).
- 관찰: y=x 주위 편차 크고 **비선형** — 매우 낮은/높은 실제 가격은 과소예측(선 위), 중간은 과대예측(선 아래) → **비선형 모델**이 더 나을 수 있음(범위 밖).

### 다중 R (multiple R)
- 예측값·실제값의 상관: `y_pred.corr(y_actual)` ≈ 0.93 (0~1, 높을수록 좋음). 비선형이어도 높은 상관.

### 잔차 (residuals)
- **잔차 = 실제 − 예측**. 양수=과소예측, 음수=과대예측. "모델이 맞추려면 얼마나 조정해야 하나".
- `residuals = y_actual - y_pred`.

### 평균 절대 오차 (MAE)
- 오차 크기의 평균(데이터와 같은 단위=달러, 해석 쉬움).
- `residuals.abs().mean()` ≈ **$992**. 큰 것 같지만 용도에 따라 다름(전문가 추정의 출발점이면 허용 가능).

## 예시

### 모델 평가
```python
y_pred = model.predict(X_test)
y_actual = y_test
sns.regplot(x=y_pred, y=y_actual)      # 예측 vs 실제 (+ y=x 선)
y_pred.corr(y_actual)                   # 다중 R ≈ 0.93
residuals = y_actual - y_pred
residuals.abs().mean()                  # MAE ≈ $992
```

## 요약
- 모델 평가는 **예측 vs 실제 산점도**(y=x 선), **다중 R**, **잔차**(실제−예측), **MAE**(오차 평균, 해석 쉬움)로 한다.
- 비선형 편차가 보이면 비선형 모델을 고려하고, MAE로 이해관계자에게 오차를 설명한다.
- 다음 강의는 **LLM으로 모델 개선**이다.
