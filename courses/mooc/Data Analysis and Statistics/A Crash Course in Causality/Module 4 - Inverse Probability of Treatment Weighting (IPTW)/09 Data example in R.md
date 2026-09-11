# Data example in R

## 개요
- RHC(right heart catheterization) 데이터로 R에서 IPTW를 이용한 주변 구조 모형(marginal structural model, MSM) 적합 전 과정을 시연한다.
- 성향점수 모형 적합 → 가중치 생성 → 가중 table one으로 균형 확인 → MSM 적합(로그/항등 연결) → 강건(샌드위치) 분산 추정.
- `ipw` 패키지와 `svyglm`을 이용한 대안 절차, 그리고 가중치 절단(truncation) 방법 두 가지를 다룬다.

## 내용
### 데이터와 패키지
- 데이터: 공개 RHC 데이터 — 5개 병원 ICU 환자, 처치 = RHC 여부, 결과 = 사망(died), 교란 변수 다수, 각 군 2,000~3,000명.
- 패키지: `tableone`(균형 표), `ipw`(역확률 가중치), `sandwich`(강건 분산 추정), `survey`(가중 추정량).
- 문자형 변수를 숫자형 지시변수로 변환하고 의미가 분명하도록 변수명을 바꾼다(예: sex → female, COPD 진단 = 1). 설명을 위해 일부 변수만 담은 `mydata`를 만든다(실전에서는 더 많은 변수 사용).

### 성향점수 모형과 가중치
- 성향점수 모형: 처치를 결과로 한 로지스틱 회귀(`glm`, logit 연결, binomial). 공변량은 나이, 성별, 혈압, 각종 진단 등.
- `predict(psmodel, type = "response")`로 성향점수(예측 확률)를 얻는다.
- 계수 확인: 예컨대 age의 계수가 음수 → 고령자가 RHC를 덜 받는 경향(p = 0.08로 강한 증거는 아님). 방향이 상식·전문가 기대와 맞는지 점검한다.
- 가중치 전 성향점수 분포 플롯에서 처치·대조군의 겹침이 좋아 우려할 점이 없다.
- 가중치: 처치군은 1/성향점수, 대조군은 1/(1−성향점수) — `ifelse` 한 줄로 생성.

### 가중 데이터의 균형 확인
- `svydesign`으로 가중치를 데이터에 적용한 `weighteddata`를 만들고, `CreateTableOne`(처치로 층화, test = FALSE)으로 가중 table one을 만든 뒤 SMD를 출력한다.
- 주의: 가중 데이터라 표본 크기·표준편차는 실제가 아니므로 무시하고, **가중 평균(유사 모집단의 평균)과 SMD**를 본다.
- 결과: 균형이 매우 좋음 — 예: 나이 61 vs 61, 가장 큰 SMD가 0.04로 모두 0.1 미만.
- 수작업 검증: 가중 평균 공식 Σ(I(A=1)·X/π) / Σ(I(A=1)/π) — 분자는 가중된 X 합, 분모는 가중 표본 크기(유사 모집단 크기 보정). 처치군 나이의 가중 평균을 직접 계산하면 61.4로 survey 명령 결과와 일치한다.

### MSM 적합: 인과 상대위험(causal relative risk)
- 모형: g(E[Y^a]) = ψ0 + ψ1·a. 상대위험이 관심이면 로그 연결(log link), 위험차면 항등 연결(identity link).
- `glm(died ~ treatment, weights = weight, family = binomial(link = log))`로 유사 모집단에 가중 GLM 적합 후 계수(ψ0, ψ1) 추출.
- 분산: 가중치가 표본 크기를 부풀리므로 `sandwich` 패키지의 `vcovHC`로 **강건(샌드위치) 공분산 행렬**을 구하고, 대각 원소의 제곱근으로 표준오차를 얻는다.
- 모형이 log E[Y^a] = ψ0 + ψ1·a이므로 **인과 상대위험 = exp(ψ1)**. 신뢰구간은 (점추정 ± 약 2×SE)를 지수화.
- 결과: 95% CI 약 **1.04 ~ 1.13** — 상대위험 > 1이므로 처치(RHC)군의 사망 위험이 더 높다.

### MSM 적합: 인과 위험차(causal risk difference)
- 같은 절차에서 `link = identity`만 바꾼다: E[Y^a] = ψ0 + ψ1·a.
- 결과: 점추정 약 **0.05**, 95% CI 약 **0.02 ~ 0.07** — 위험차 > 0이므로 역시 처치군의 사망 위험이 더 높다는 같은 메시지.

### ipw 패키지 + svyglm 대안
- `ipwpoint`(point = 시점 처치, 종단 데이터 아님): 노출 변수, `link = "logit"`, `denominator`(가중치 분모 = 성향점수 모형의 공변량)를 지정하면 가중치를 계산해 준다. 이 예에서 최대 가중치 21.6.
- `ipwplot`으로 가중치 분포(밀도류 플롯)를 쉽게 그릴 수 있다.
- MSM은 `svyglm`으로 적합: `svydesign`에 가중치를 지정하면 **강건 샌드위치 분산을 자동으로** 계산해 준다(주요 장점, 단계가 더 적음). 항등 연결 결과의 처치 계수 0.052는 앞의 glm 방식과 동일.

### 가중치 절단(truncation)
- 이 예는 최대 가중치가 20 남짓이라 크게 걱정할 수준은 아니지만 방법을 시연한다.
- 방법 1 (특정 값에서 절단): `replace(weight, weight > 10, 10)`으로 10보다 큰 가중치를 모두 10으로 대체한 `truncweight`를 만들고, 이를 가중치로 GLM을 적합한다.
- 방법 2 (`ipw` 패키지의 백분위수 절단): `ipwpoint(..., trunc = .01)` — 값이 아니라 **백분위수**를 준다. 0.01이면 1·99 백분위수에서 절단(너무 작은 가중치와 너무 큰 가중치 모두 절단; 0.02면 2·98 백분위수). 절단된 가중치(`weights.trun`)의 최대는 약 6.4.
- 절단 가중치로 `svyglm`을 다시 적합하면 점추정 약 0.05, 95% CI 약 0.03 ~ 0.082 — 절단 전(상한 약 0.0797)과 거의 같다. 극단적 가중치가 없었으므로 예상대로 큰 차이가 없으며, 절단 유무에 걸쳐 일관된 결론을 확인하는 일종의 민감도 분석으로 볼 수 있다.

## 예시
```r
library(tableone)
library(ipw)
library(sandwich)
library(survey)

# 1) 성향점수 모형 (처치가 결과인 로지스틱 회귀)
psmodel <- glm(treatment ~ age + female + meanbp1 + ...,  # 진단 변수 등
               family = binomial(link = "logit"), data = mydata)
ps <- predict(psmodel, type = "response")

# 2) 가중치: 처치군 1/ps, 대조군 1/(1-ps)
weight <- ifelse(mydata$treatment == 1, 1 / ps, 1 / (1 - ps))

# 3) 가중 데이터의 균형 확인
weighteddata <- svydesign(ids = ~1, data = mydata, weights = ~weight)
weightedtable <- svyCreateTableOne(vars = xvars, strata = "treatment",
                                   data = weighteddata, test = FALSE)
print(weightedtable, smd = TRUE)   # 모든 SMD < 0.1 (최대 0.04)

# 가중 평균 직접 계산 (예: 처치군 나이)
mean(weight[mydata$treatment == 1] * mydata$age[mydata$treatment == 1]) /
  mean(weight[mydata$treatment == 1])   # 61.4, survey 결과와 일치

# 4) MSM: 인과 상대위험 (log link)
glm.obj <- glm(died ~ treatment, weights = weight,
               family = binomial(link = log), data = mydata)
betaiptw <- coef(glm.obj)
SE <- sqrt(diag(vcovHC(glm.obj, type = "HC0")))  # 강건(샌드위치) 분산
causalrr <- exp(betaiptw[2])
lcl <- exp(betaiptw[2] - 1.96 * SE[2])
ucl <- exp(betaiptw[2] + 1.96 * SE[2])
c(lcl, causalrr, ucl)   # 95% CI 약 1.04 ~ 1.13

# 5) MSM: 인과 위험차 (identity link)
glm.obj <- glm(died ~ treatment, weights = weight,
               family = binomial(link = "identity"), data = mydata)
# 점추정 약 0.05, 95% CI 약 0.02 ~ 0.07

# 6) ipw 패키지 + svyglm 대안
weightmodel <- ipwpoint(exposure = treatment, family = "binomial",
                        link = "logit",
                        denominator = ~ age + female + meanbp1 + ...,
                        data = mydata)
summary(weightmodel$ipw.weights)   # 최대 21.6
ipwplot(weights = weightmodel$ipw.weights, logscale = FALSE,
        xlim = c(0, 22))
msm <- svyglm(died ~ treatment,
              design = svydesign(ids = ~1, weights = ~weightmodel$ipw.weights,
                                 data = mydata))
coef(msm)      # 처치 계수 0.052 (glm 방식과 동일)
confint(msm)   # 95% CI

# 7) 가중치 절단
truncweight <- replace(weight, weight > 10, 10)  # 값 10에서 절단
weightmodel <- ipwpoint(..., trunc = .01)        # 1/99 백분위수 절단
summary(weightmodel$weights.trun)                # 최대 약 6.4
# 절단 가중치로 svyglm 재적합: 0.05, CI 약 0.03 ~ 0.082 (거의 동일)
```

## 요약
- IPTW-MSM 분석 절차: 성향점수 모형(로지스틱) → 가중치(처치 1/π, 대조 1/(1−π)) → 가중 table one으로 균형 확인 → MSM 적합 → 강건 분산으로 추론.
- 가중 후 균형이 매우 좋았고(모든 SMD < 0.1), 가중 평균 수작업 계산으로 survey 결과를 검증했다.
- 인과 상대위험 exp(ψ1)의 95% CI는 약 1.04~1.13, 인과 위험차는 약 0.05(CI 0.02~0.07) — RHC군의 사망 위험이 더 높다.
- `ipw` + `svyglm` 조합은 가중치 계산과 강건 분산을 자동화해 단계가 더 적다.
- 가중치 절단은 특정 값(replace) 또는 백분위수(`trunc = .01` → 1/99 백분위)로 할 수 있으며, 이 예에서는 절단 전후 결과가 거의 같아 결론의 견고함을 확인했다.
