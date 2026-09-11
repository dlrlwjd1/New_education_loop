# Introduction to Inference Methods: Oh the Things You Will See!

## 개요
- 앞으로 배울 통계적 추론(statistical inference) 방법들을 실제 연구 질문 예시로 미리 소개하는 강의
- 추론의 두 갈래: 관심 모수(parameter)를 신뢰를 가지고 추정(estimate with confidence)하거나, 그 모수에 대한 이론을 검정(test theories)하는 것
- 비율(proportion), 평균(mean), 평균 차이(mean difference) 등 다양한 모수 유형별 예시를 제시

## 내용

### 통계적 추론의 두 가지 목적
데이터를 사용해 통계적 추론을 수행하는 목적은 두 가지다.
1. 관심 있는 모수(parameter)를 신뢰(confidence)를 가지고 **추정**하는 것
2. 그 모수에 대한 **이론을 검정**하는 것

### 예시 1 — 모집단 비율의 신뢰구간 추정
- 질문: 유아(toddler)를 둔 전체 부모 중, 유아와의 모든 이동에서 카시트(car seat)를 사용한다고 답하는 비율은 얼마인가?
- 초점이 비율(proportion)에 있고, 그 비율이 얼마인지 알고자 하므로 **모집단 비율을 신뢰를 가지고 추정(estimating a population proportion with confidence)** 하는 문제다.

### 예시 2 — 모집단 평균의 신뢰구간 추정
- 질문: 모든 성인의 평균 옆돌기(cartwheel) 거리는 얼마인가? (발이 시작하는 지점부터 옆돌기가 끝나는 지점까지 측정한 거리)
- 초점이 평균(mean)에 있으며, 그 값이 얼마인지 알고자 하므로 **모집단 평균을 신뢰를 가지고 추정(estimating a population mean with confidence)** 하는 문제다.

### 예시 3 — 모집단 평균 차이의 신뢰구간 추정 (짝지어진 자료)
- 질문: 쌍둥이 데이터에서 손위 쌍둥이(older twin) 대 손아래 쌍둥이(younger twin)의 자기보고 교육 수준(self-reported education)의 평균 차이는 얼마인가?
- 측정값들이 쌍둥이 쌍으로 매칭(matched) 또는 짝지어져(paired) 있고, 여전히 평균 차이를 알고자 하므로 **모집단 평균 차이를 신뢰를 가지고 추정(estimating a population mean difference with confidence)** 하는 문제다.

### 예시 4 — 두 모집단 평균에 대한 이론 검정
- 질문: 미국에 거주하는 멕시코계 미국인(Mexican American) 성인에서, 남성이 여성보다 평균 체질량지수(Body Mass Index, BMI)가 유의하게 높은가?
- 두 그룹을 비교하며, 한 그룹이 다른 그룹보다 평균 반응이 유의하게 높은지에 대한 구체적인 질문이 있으므로 **두 모집단 평균에 대한 이론을 검정(testing a theory about two different population means)** 하는 문제다.

### 예시 5 — 모집단 비율에 대한 이론 검정
- 배경: 과거에는 부모의 약 52%가 전자기기와 소셜 미디어가 십대 자녀의 수면 부족 원인이라고 믿었다.
- 질문: 오늘날도 그런가, 아니면 지금은 더 많은 부모가 그렇게 믿는가?
- 과거의 현상 유지(status quo) 값 52%가 있고, 그 비율이 올라갔는지 알고자 하므로 **모집단 비율(population rate/proportion)에 대한 이론을 검정**하는 문제다.

## 요약
- 통계적 추론은 데이터를 사용해 모수를 신뢰를 가지고 추정하거나 모수에 대한 이론을 검정하는 것이다.
- 추정 예시: 카시트 사용 비율(모집단 비율), 평균 옆돌기 거리(모집단 평균), 쌍둥이 교육 수준 차이(짝지어진 자료의 모집단 평균 차이).
- 검정 예시: 남녀 평균 BMI 비교(두 모집단 평균), 수면 부족 원인에 대한 부모 믿음 비율의 변화(모집단 비율, 기준값 52%).
- 관심 모수가 비율인지 평균인지, 추정인지 검정인지에 따라 사용할 추론 방법이 달라진다.
