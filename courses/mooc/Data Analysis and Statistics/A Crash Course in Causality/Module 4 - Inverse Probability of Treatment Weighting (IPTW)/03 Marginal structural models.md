# Marginal structural models

## 개요
- 주변 구조 모델(marginal structural model, MSM)은 잠재결과(potential outcome)의 평균에 대한 인과 모델이다.
- "marginal"은 교란변수에 조건부가 아닌 모집단 평균(population average)을 뜻하고, "structural"은 관측된 결과가 아니라 잠재결과를 모델링한다는 뜻이다.
- 선형·로지스틱 MSM, 효과 수정(effect modification)을 포함한 MSM, 일반형 MSM을 차례로 살펴본다.

## 내용

### MSM이란
- IPTW는 평균 인과 효과(average causal effect) 같은 단순한 효과뿐 아니라, 더 일반적인 인과 모델의 모수(parameter)를 추정하는 데도 쓸 수 있다. 예: 처치 효과 수정(treatment effect modification)이 있는 모델.
- **marginal**: 교란변수(confounders)에 조건부가 아니다. 특정 하위집단이 아닌 전체 모집단에 대한 평균 인과 효과, 즉 모집단 전체에 대해 평균낸(averaging over) 값을 다룬다.
- **structural**: 관측 결과(observed outcome)가 아니라 잠재결과(potential outcome)를 모델링한다.

### 선형 MSM (linear marginal structural model)
- 모델: E(Yᵃ) = ψ₀ + ψ₁a — 잠재결과의 평균이 a에 선형이다. ψ₀, ψ₁은 추정할 미지 모수.
- A가 0 또는 1(대조 vs 처치)이라면:
  - E(Y⁰) = ψ₀
  - E(Y¹) = ψ₀ + ψ₁
  - 그 차이 ψ₁이 평균 인과 효과(average causal effect)가 되어 인과적 해석을 갖는다.
- 연속형 결과(continuous outcome)에 주로 사용하며, 선형 회귀(linear regression)와 닮았지만 잠재결과를 모델링한다는 점이 핵심적으로 다르다.

### 로지스틱 MSM (logistic marginal structural model)
- 이진 결과(binary outcome)에 사용: logit{E(Yᵃ)} = ψ₀ + ψ₁a.
- 이진 결과의 평균은 확률이므로 E(Yᵃ) = P(Yᵃ=1)이다. 즉 Y=1의 로그 오즈(log odds)가 a에 선형이다.
- exp(ψ₁)은 **인과 오즈비(causal odds ratio)**:
  - 분자: 전체 모집단이 처치받았을 때 Y¹=1의 오즈(odds) = P(Y¹=1) / {1 − P(Y¹=1)}
  - 분모: 전체 모집단이 대조였을 때 Y⁰=1의 오즈

### 효과 수정(effect modification)을 포함한 MSM
- 처치 효과가 하위집단마다 다를 수 있다 — 처치 효과의 이질성(heterogeneity of treatment effect).
- V를 효과를 수정하는 변수(effect modifier)라 하자. 예: 당뇨병 같은 동반질환(comorbidity), 성별, 인종 등.
- 모든 교란변수가 아니라 관심 있는 효과 수정자 V에만 조건을 건다(사전에 지정):
  - E(Yᵃ|V) = ψ₀ + ψ₁a + ψ₂V + ψ₄aV (처치 주효과, V 주효과, 상호작용 a×V)
- 해석: 주어진 V에서 잠재결과 평균의 차이는 E(Y¹|V) − E(Y⁰|V) = ψ₁ + ψ₄V (다른 항은 상쇄). ψ 추정치가 있으면 V 값을 대입해 어떤 V에서든 인과 효과를 얻을 수 있다.

### 일반형 MSM (general marginal structural model)
- g{E(Yᵃ|V)} = h(a, V; ψ)
  - g( ): 연결함수(link function) — 일반화 선형 모델(generalized linear model, GLM)과 같은 개념이나, 관측 결과 대신 잠재결과를 사용한다.
  - h( ): 사용자가 지정하는 함수. 예: 절편 + a 주효과 + V 주효과 + 상호작용. V가 연속형이면 이차항(quadratic term)을 넣을 수도 있다.
- 우변은 회귀모델에서 지정하는 것과 비슷하지만 좌변이 잠재결과라는 점이 다르다. ψ를 추정할 수 있으면 인과 효과 추정치를 얻는다.
- 핵심 문제: 잠재결과는 관측 데이터와 같지 않으므로, 회귀모델처럼 곧바로 ψ를 추정할 수 없다. 좌변이 잠재결과라는 점 때문에 별도의 추정 방법(다음 강의의 IPTW 추정)이 필요하다.

## 요약
- MSM은 잠재결과 평균에 대한 모델로, marginal(모집단 평균, 교란변수 비조건부) + structural(잠재결과 모델링)이다.
- 선형 MSM의 ψ₁은 평균 인과 효과, 로지스틱 MSM의 exp(ψ₁)은 인과 오즈비(causal odds ratio)다.
- 효과 수정자 V만 조건에 포함해 E(Yᵃ|V) = ψ₀ + ψ₁a + ψ₂V + ψ₄aV처럼 처치 효과의 이질성을 모델링할 수 있다.
- 좌변이 잠재결과이므로 일반 회귀처럼 추정할 수 없다는 것이 다음 단계의 과제다.
