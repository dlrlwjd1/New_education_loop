# Estimating a Population Proportion with Confidence

## 개요
- 신뢰구간(confidence interval)의 기본 구조: 최선의 추정치(best estimate) ± 오차한계(margin of error)
- 1표본 비율(one proportion)의 신뢰구간을 처음으로 직접 계산해 보는 강의
- CS Mott 아동병원의 카시트(car seat) 사용 비율 설문을 예시로 95% 신뢰구간을 구성

## 내용

### 신뢰구간의 기본 구조
- 신뢰구간 = 최선의 추정치(best estimate) ± 오차한계(margin of error)
- 최선의 추정치는 편향 없는 점추정치(unbiased point estimate)로, 1표본 비율의 경우 표본비율 p-hat이다.
- 오차한계는 "몇 개(a few)"의 추정 표준오차(estimated standard error)로 정의된다.
  - 여기서 "몇 개"는 신뢰수준(confidence level)에 따라 정해지는 승수(multiplier)다.
  - 95% 신뢰수준이면 1.96(또는 취향에 따라 2)을 사용한다.
  - 95% 신뢰수준은 5% 유의수준(significance level)에 대응하며, 이는 나중에 유용하게 쓰인다.

### 예시 설정: Mott 카시트 설문
- 미시간주 Ann Arbor에 있는 CS Mott Children's Hospital은 아동 건강에 관한 전국 설문을 수행한다.
- 질문: "유아(toddler)와 이동할 때 항상 카시트를 사용한다고 응답한 부모의 비율은?"
- 추론(inference)을 하기 전에 항상 먼저 정하는 두 가지:
  - 모집단(population): 유아를 둔 부모
  - 관심 모수(parameter of interest): 비율, 소문자 p로 표기
- 목표: 유아와의 모든 이동에서 카시트를 사용한다고 보고한 부모의 모비율에 대한 95% 신뢰구간 구성
- 설문 결과: 유아를 둔 부모 659명을 표본으로 조사, 그중 540명이 "예"라고 응답

### 신뢰구간 계산
- 최선의 추정치(표본비율): p-hat = x / n = 540 / 659 = 0.85
  - x는 "예"라고 응답한 수, n은 표본 크기
- 추정 표준오차: sqrt( p-hat × (1 − p-hat) / n )
- 95% 신뢰구간:
  - 0.85 ± 1.96 × sqrt( 0.85 × (1 − 0.85) / 659 )
  - 결과: (0.8227, 0.8773)
- 신뢰구간에는 항상 하한(lower bound)과 상한(upper bound)이 있으며, 구간의 중심은 항상 최선의 추정치(p-hat)다.

### 해석
- 신뢰구간은 모수에 대한 "합리적인 값들의 범위(range of reasonable values)"다.
- 해석 예: "95% 신뢰수준으로, 유아와의 모든 이동에서 카시트를 사용하는 부모의 모비율은 82.27%에서 87.73% 사이로 추정된다."
- 모수가 실제로 이 구간 안에 있는지 확실히 알 수는 없지만, 그 안에 있을 것이라고 95% 확신한다는 의미다.

## 예시
카시트 예시 계산 정리:

```text
p-hat = 540 / 659 = 0.85
SE(p-hat) = sqrt(0.85 × 0.15 / 659)
95% CI = 0.85 ± 1.96 × SE(p-hat) = (0.8227, 0.8773)
```

## 요약
- 신뢰구간 = 최선의 추정치(p-hat) ± 오차한계이며, 모수에 대한 구간 추정(interval estimate)을 제공한다.
- 통계량(statistic) p-hat을 이용해 모수 p가 어떤 값일지 추정한다.
- 신뢰구간의 중심은 항상 최선의 추정치와 같다 — 거기서 오차한계를 더하고 뺀다.
- 오차한계 = "몇 개"의 추정 표준오차. 이 승수는 1표본 비율에서 흔히 z-star(z*)라고 부른다.
