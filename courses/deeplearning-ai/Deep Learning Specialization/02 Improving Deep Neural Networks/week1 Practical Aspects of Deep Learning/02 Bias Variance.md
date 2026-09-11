# 02 Bias / Variance

## 개요
- **편향(bias)** 과 **분산(variance)** 은 배우기 쉽지만 숙달하기 어려운 개념.
- 딥러닝 시대엔 "bias-variance **트레이드오프**" 얘기는 줄었다 (트레이드오프가 덜함). 하지만 bias·variance 자체는 여전히 중요.

---

## 내용

### 직관 (2D 예시)
| 적합 상태 | 설명 |
|---|---|
| **High bias (과소적합, underfitting)** | 직선처럼 너무 단순 → 데이터를 못 맞춤 |
| **Just right** | 중간 복잡도, 적절한 곡선 |
| **High variance (과대적합, overfitting)** | 너무 복잡 → 훈련 데이터에 과하게 맞음 |

### 고차원에서의 진단 — 두 지표
그림을 못 그리는 고차원 문제에선 **훈련 오류 + dev 오류**로 진단.
(고양이 분류, 인간/최적(Bayes) 오류 ≈ 0% 가정)

| 훈련 오류 | dev 오류 | 진단 |
|---|---|---|
| 1% | 11% | **High variance** (과적합) |
| 15% | 16% | **High bias** (과소적합) |
| 15% | 30% | **High bias + High variance** (최악) |
| 0.5% | 1% | **Low bias, Low variance** (좋음) |

- **훈련 오류** → 편향(bias) 정도를 알려줌 (훈련 데이터조차 못 맞추면 high bias).
- **훈련→dev 오류 증가폭** → 분산(variance) 정도를 알려줌 (일반화 실패).

### 중요한 전제 ⚠️
- 위 분석은 **Bayes(최적) 오류 ≈ 0%** 이고 **train/dev가 같은 분포**라는 가정 하에 성립.
- 예: 이미지가 너무 흐려 Bayes 오류가 15%라면, 훈련 오류 15%는 high bias가 아님. (이 경우 분석이 달라짐 — 후속 영상)

### High bias & High variance는 어떤 모습?
- 대부분 선형이라 과소적합(high bias)이면서, 중간에서 이상치(outlier) 두 개에 과하게 맞아 과적합(high variance)인 분류기.
- 고차원 입력에선 실제로 일부 영역은 high bias, 일부는 high variance인 경우가 생김.

---

## 요약
- 훈련 오류로 bias를, (dev−train) 오류 차이로 variance를 진단.
- 4가지 조합(low/high × bias/variance) 판별 가능.
- 전제: Bayes 오류 ≈ 0, train/dev 동일 분포.

## 다음 주제
- 진단 결과에 따라 개선하는 체계적 절차 (Basic Recipe for Machine Learning)
