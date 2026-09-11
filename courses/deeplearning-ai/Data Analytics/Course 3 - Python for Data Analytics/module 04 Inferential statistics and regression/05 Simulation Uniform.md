# Simulation: Uniform

## 개요
- **시뮬레이션(simulation)** 은 데이터 수집이 제한될 때 유용 — 분포에서 무작위 표본을 생성해 데이터 행동을 모델링한다.
- **np.random.uniform** 으로 균등 분포 표본을 생성한다. 단, 시뮬레이션은 **가정만큼만** 좋다.

## 내용

### 왜 시뮬레이션인가
- 대규모 데이터 수집은 시간·비용·물류 제약(예: 고가 보석은 거래량 적어 표본 어려움).
- 평균·표준편차 등 파라미터를 추정해 가능한 시나리오를 생성.

### 균등 분포 표집 (0~10% 할인)
- `n = 1000`, `sample = np.random.uniform(low=0, high=0.1, size=n)` (low·high·size 인수).
- `x_bar = sample.mean()`, `sample.std()`, `sns.histplot(...)` → 대략 균등(평균 ~0.05). 재실행마다 무작위로 다름(np.random).

### 신뢰 구간
- 앞 코드 재사용: `sem = s/np.sqrt(n)`, `stats.norm.interval(confidence=0.95, loc=x_bar, scale=sem)` → 예 [0.0487, 0.0524].
- 참 평균 0.05(균등 중간)를 포함. 여러 번 표집하면 이따금 미포함.
- LLM으로 "100번 반복, 0.05 포함 개수 세기" → 93 포함/7 미포함(95% 신뢰와 일치).

### 활용
- 소매업체가 할인 실험의 최대 매출 영향(할인이 상단에 몰릴 경우) 등을 대비하는 출발점.

## 예시

### 균등 시뮬레이션
```python
n = 1000
sample = np.random.uniform(low=0, high=0.1, size=n)
sem = sample.std() / np.sqrt(n)
stats.norm.interval(confidence=0.95, loc=sample.mean(), scale=sem)
```

## 요약
- **np.random.uniform(low=, high=, size=)** 로 균등 분포 표본을 생성해 시나리오를 모델링한다(재실행마다 무작위).
- 생성한 표본으로 신뢰 구간을 구성하고, 반복 시 95%가 참 평균을 포함함을 확인한다.
- 시뮬레이션은 가정에 의존한다. 다음 강의는 **정규 분포 시뮬레이션**이다.
