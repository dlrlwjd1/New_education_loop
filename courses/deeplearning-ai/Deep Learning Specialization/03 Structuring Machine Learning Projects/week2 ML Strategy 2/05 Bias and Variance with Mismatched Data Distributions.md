# 05 Bias and Variance with Mismatched Data Distributions

## 개요
- train과 dev/test 분포가 다르면 편향/분산 분석이 달라진다. **training-dev set**을 도입해 원인을 구분한다.

---

## 내용

### 문제
- train 오류 1%, dev 오류 10%인데 분포가 다르면, 이 9% 격차가 **분산(variance)** 때문인지 **분포 차이(data mismatch)** 때문인지 알 수 없다 (두 가지가 동시에 바뀜).

### Training-dev set 도입 ⭐
- **train과 같은 분포**에서 떼어낸, 그러나 **학습에는 쓰지 않는** 세트.
- train / training-dev(같은 분포, 미학습) / dev / test 로 나눔.

### 오류로 원인 구분
| 격차 | 의미 |
|---|---|
| 인간(Bayes) → **train** | avoidable bias |
| train → **training-dev** | **variance** |
| training-dev → **dev** | **data mismatch** |
| dev → **test** | dev 과적합 (크면 dev 세트를 키워라) |

예시:
- train 1%, train-dev 9%, dev 10% → **variance 문제**.
- train 1%, train-dev 1.5%, dev 10% → **data mismatch 문제**.
- 인간 0%, train 10%, train-dev 11%, dev 12% → **avoidable bias 문제**.
- 인간 0%, train 10%, train-dev 11%, dev 20% → **bias + data mismatch**.

### 더 일반적인 표
| | 일반 음성 데이터 | 백미러 데이터 |
|---|---|---|
| 인간 수준 | 4% | (6%) |
| 학습한 예제 오류 | 7% (train) | (6%) |
| 미학습 예제 오류 | 10% (train-dev) | 6% (dev/test) |

- 세로 차이 = avoidable bias/variance, 가로 차이 = data mismatch. 표를 채우면 추가 통찰(예: 백미러 데이터가 인간에게도 더 어려움).
- 숫자가 항상 커지진 않음 — dev/test 분포가 더 쉬우면 dev 오류가 train보다 낮을 수도.

---

## 요약
- training-dev set(=train 분포, 미학습)으로 variance와 data mismatch를 분리.
- 인간→train(bias), train→train-dev(variance), train-dev→dev(data mismatch), dev→test(과적합).

## 다음 주제
- 데이터 불일치 해결 (Addressing Data Mismatch)
