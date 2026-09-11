# Prediction

## 개요
- 학습된 회귀 모델로 **새 값을 예측**한다 — 계수 m·b를 `results.params` 에서 꺼내 `price = m×carat + b` 계산.
- 단일 값·시리즈 모두 예측 가능하며, 모델의 **한계**를 확인해야 한다.

## 내용

### 계수 접근 — results.params
- `results.params` 는 시리즈. `results.params["carat"]` = m, `results.params["const"]` = b.
- 새 값 예측: `carat = 1.5`, `price = m*carat + b` → 예 $9,378.

### 여러 값 예측
- 시리즈/배열에 같은 식 적용. 시뮬레이션으로 테스트: `carats = np.random.uniform(low=0, high=5, size=20)` (numpy 배열) → `prices = m*carats + b`.

### 결과 검증 — 상식 확인
- 예측값이 말이 되는지 확인. 2.35캐럿 → $15,973(타당). 0.09캐럿 → **−$1,500**(불가능, 다이아는 음의 가격 없음).
- 최적합선상 데이터 대부분이 **0.5~2.5캐럿** → 이 구간에서 예측 최선. 3캐럿은 실제 가격이 제각각이라 예측 나쁨.
- 모델 한계를 알고 시뮬레이션을 0.5~2.5캐럿으로 제한. 고객에게 한계를 **솔직히** 알려 신뢰 구축.

## 예시

### 예측
```python
m = results.params["carat"]
b = results.params["const"]
price = m * 1.5 + b            # 단일 예측 → $9,378
carats = np.random.uniform(low=0.5, high=2.5, size=20)
prices = m * carats + b        # 여러 예측 (배열)
```

## 요약
- **results.params["carat"]**(m)·**["const"]**(b)로 계수를 꺼내 **m×x+b** 로 예측하며, 시리즈로 여러 값도 동시 예측한다.
- 예측 결과가 상식에 맞는지 확인하고(음의 가격 등), 모델이 잘 맞는 **구간(0.5~2.5캐럿)** 과 한계를 파악한다.
- 이로써 Lesson 2(단순 회귀)를 마친다. 다음 레슨은 **다중 선형 회귀**다.
