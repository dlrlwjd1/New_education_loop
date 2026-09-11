# 08 MobileNet

## 개요
- **MobileNet**: 저사양 기기(휴대폰 등)에서도 돌아가도록 계산량을 줄인 CNN.
- 핵심: **깊이별 분리 합성곱(depthwise separable convolution)**.

---

## 내용

### 일반 합성곱의 비용
- 6×6×3 * 3×3×3 필터 5개 → 4×4×5.
- 비용 = (필터 파라미터 3×3×3) × (필터 위치 4×4) × (필터 수 5) = **2,160 곱셈**.

### Depthwise Separable Convolution = 2단계
**1) Depthwise convolution (깊이별)**
- 필터가 f×f (채널 곱 없음). 필터 수 = 입력 채널 수(n_C).
- **각 채널에 각 필터를 독립 적용** → 4×4×3.
- 비용 = (3×3) × (4×4) × 3 = **432**.

**2) Pointwise convolution (점별, 1×1)**
- 4×4×3을 **1×1×n_C 필터 n_C'개**와 합성곱 → 4×4×5.
- 비용 = (1×1×3) × (4×4) × 5 = **240**.

### 비용 비교 ⭐
- 일반: 2,160. Depthwise separable: 432 + 240 = **672** → 비율 **0.31** (약 3배 절약).
- 일반 공식: `1/n_C' + 1/f²`.
  - 예: n_C'=512, f=3 → 1/512 + 1/9 ≈ **1/9** → 약 **10배 저렴**.

### 참고
- 임의의 입력 채널 수에 동작(필터도 그에 맞게 f×f×n_C).
- 이후 다이어그램에선 채널 수와 무관하게 depthwise/pointwise를 단순 아이콘으로 표기.

---

## 요약
- MobileNet의 핵심 = depthwise separable conv (depthwise + pointwise 2단계).
- 일반 합성곱과 같은 입출력 차원을 훨씬 적은 계산량(~1/9)으로 달성.

## 다음 주제
- MobileNet 아키텍처 (MobileNet Architecture)
