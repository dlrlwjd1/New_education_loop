# Propensity score matching in R

## 개요
- RHC(right heart catheterization) 데이터로 R에서 성향점수 매칭 분석 전 과정을 시연한다: 성향점수 모형 적합 → 성향점수 매칭 → 매칭 후 분석.
- `glm`으로 성향점수 모형을 직접 적합하는 법, `MatchIt` 패키지로 매칭·균형 진단(jitter/histogram 플롯)하는 법을 다룬다.
- `Matching` 패키지로 로짓 변환 성향점수를 캘리퍼 유무에 따라 매칭해 균형(SMD)과 결과 분석을 비교한다.

## 내용
### 데이터와 준비
- 데이터: 공개된 RHC 데이터 — 5개 병원 ICU 환자, 처치 = RHC, 결과 = 사망(yes/no), 교란 변수 = 인구통계·질병 진단 등, 각 군 수천 명.
- `tableone`과 `MatchIt` 패키지를 로드하고 데이터를 읽고 확인한다. 문자형 변수를 숫자형으로 변환하고, 공변량 + 처치 + 결과로 구성된 `mydata`를 만든다.

### 성향점수 모형 적합 (glm)
- 성향점수 모형에서는 **처치가 결과 변수**다. `glm`에 처치 ~ 공변량들, `family = binomial`(이진 결과, 기본 로짓 연결 → 로지스틱 회귀)을 지정한다.
- `summary(psmodel)`로 계수·p-값을 보면 어떤 변수가 처치를 예측하는지 알 수 있다 — 누가 처치를 받는지 이해하고, 사전 지식과 부합하는지(액면 타당성 face validity, 코딩 오류 여부) 점검하는 용도. 예: `female` 계수가 음수이고 유의 → 여성이 남성보다 처치받을 가능성이 낮음.
- 성향점수 생성: 적합된 모형의 적합값(fitted values, 예측 확률)을 추출하면 각자의 성향점수가 된다.

### 매칭 전 성향점수 분포 확인
- 처치·대조군의 성향점수 분포를 그려 **겹침(overlap)** 을 확인한다. 이 데이터에서는 겹침이 많고, 꼬리에서 모두가 처치되거나 아무도 처치되지 않는 구간이 없어 문제없다.

### MatchIt으로 매칭
- `MatchIt`은 성향점수 모형을 따로 적합할 필요 없이 공식(처치 ~ 공변량들)과 데이터, 매칭 방법을 주면 성향점수 계산과 매칭을 모두 해 준다. `method = "nearest"`(최근접 이웃 = 탐욕 매칭)를 사용했고, 데이터 크기가 적당하면 `"optimal"`도 가능하다.
- 균형 진단 플롯이 내장되어 있다:
  - **jitter 플롯**: 비매칭 처치 / 매칭 처치 / 매칭 대조 / 비매칭 대조 네 구획으로 성향점수를 보여준다. 이 예에서는 비매칭 처치가 없고(처치군 전원 매칭됨), 매칭된 처치·대조의 분포가 매우 비슷하다. 매칭되지 못한 대조군 대부분은 성향점수가 낮은 쪽 — 대조군은 원래 낮은 성향점수 쪽으로 치우쳐 과대 대표되어 있었으므로 매칭 후 다수가 제외되는 것이 자연스럽다.
  - **histogram 플롯**: raw(매칭 전)와 matched(매칭 후) 성향점수 분포 비교. 매칭 후 분포 모양이 훨씬 비슷해진다. (기본 플롯은 축 스케일이 달라 실제보다 달라 보일 수 있어, 출판용이라면 축을 맞춰야 한다.)

### Matching 패키지: 캘리퍼 없이 vs 캘리퍼 사용
- 이번에는 `Matching` 패키지(여러 패키지 사용법을 보여주기 위해)로 **로짓 변환한 성향점수**에 1:1 탐욕 매칭. 이 패키지는 성향점수를 계산해 주지 않으므로 `X = logit(pscore)`로 직접 전달하고, `replace = FALSE`(재매칭 불가 — 한번 매칭되면 제거)를 지정한다.
- **캘리퍼 없이**: 2,184쌍 매칭. table one의 표준화 차이(SMD) 중 일부가 0.1보다 조금 크다 — 나쁘진 않지만 만족스럽지 않을 수 있다. 이 매칭 데이터로 짝지은 t-검정을 하면 점추정과 신뢰구간이 나온다.
- **캘리퍼 사용**: `caliper = 0.2` — 로짓 성향점수로 매칭하므로 이는 **0.2 × SD(logit(성향점수))** 를 의미한다(캘리퍼가 0.2 그 자체가 아님).
  - 결과: 1,900쌍으로 줄었다 — 거리가 허용치보다 큰 매칭이 배제되었기 때문. 나쁜 매칭을 허용하지 않으므로 더 좋은 매칭이다.
  - SMD가 **모두 0.1 미만**이 되어 균형이 훨씬 좋아졌다.
  - 트레이드오프: 매칭 쌍이 줄어 표본이 작아지므로 효율은 조금 잃지만, 더 좋은 매칭으로 편향은 줄어든다.

### 결과 비교
- 캘리퍼 없이(2,184쌍)와 캘리퍼 사용(1,900쌍) 각각 짝지은 t-검정으로 위험차와 신뢰구간을 추정하면 결과가 매우 비슷하고 일반적 결론은 같다.
- 캘리퍼를 바꿔 더 좋은 매칭을 강제한 뒤 결론이 바뀌는지 확인하는 것이 좋은 관행이다 — 이 예에서는 더 까다롭게 매칭해도 결론이 유지되었다.

## 예시
```r
library(tableone)
library(MatchIt)
library(Matching)

# 1) 성향점수 모형: 처치가 결과, 로지스틱 회귀
psmodel <- glm(treatment ~ age + female + meanbp1 + ..., 
               family = binomial(), data = mydata)
summary(psmodel)   # 어떤 변수가 처치를 예측하는지 확인 (예: female 계수 음수)

# 성향점수 = 적합값(예측 확률)
pscore <- psmodel$fitted.values

# 2) MatchIt: 성향점수 계산 + 최근접 이웃(탐욕) 매칭을 한 번에
m.out <- matchit(treatment ~ age + female + meanbp1 + ...,
                 data = mydata, method = "nearest")   # "optimal"도 가능
summary(m.out)
plot(m.out, type = "jitter")   # 매칭/비매칭별 성향점수 분포
plot(m.out, type = "hist")     # 매칭 전후 분포 비교

# 3) Matching 패키지: 로짓 성향점수로 매칭 (캘리퍼 없음)
logit <- function(p) log(p / (1 - p))
psmatch <- Match(Tr = mydata$treatment, M = 1,
                 X = logit(pscore), replace = FALSE)
matched <- mydata[unlist(psmatch[c("index.treated", "index.control")]), ]
matchedtab1 <- CreateTableOne(vars = xvars, strata = "treatment",
                              data = matched, test = FALSE)
print(matchedtab1, smd = TRUE)   # 2,184쌍, 일부 SMD > 0.1

# 4) 캘리퍼 사용: 0.2 = 0.2 x SD(logit(pscore))
psmatch <- Match(Tr = mydata$treatment, M = 1,
                 X = logit(pscore), replace = FALSE, caliper = 0.2)
matched <- mydata[unlist(psmatch[c("index.treated", "index.control")]), ]
# 1,900쌍, 모든 SMD < 0.1

# 5) 결과 분석: 짝지은 t-검정
y_trt <- matched$died[matched$treatment == 1]
y_con <- matched$died[matched$treatment == 0]
t.test(y_trt - y_con)   # 점추정, 95% CI, p-값
```

## 요약
- 성향점수 모형은 처치를 결과로 둔 로지스틱 회귀(`glm`, `family = binomial`)로 적합하고, 적합값이 성향점수다.
- 매칭 전 성향점수 분포의 겹침을 확인한다 — RHC 데이터는 겹침이 좋았다.
- `MatchIt`은 성향점수 계산부터 매칭·균형 진단 플롯(jitter, histogram)까지 한 번에 제공하며, 매칭되지 못한 대조군은 주로 낮은 성향점수 쪽이었다.
- 캘리퍼 없이 매칭하면 2,184쌍이지만 일부 SMD > 0.1; 캘리퍼 0.2 × SD(logit(PS))를 쓰면 1,900쌍으로 줄되 모든 SMD < 0.1 — 편향 감소 vs 표본 감소의 트레이드오프.
- 두 경우의 결과 분석(짝지은 t-검정)은 비슷했고 결론은 같았다 — 캘리퍼를 바꿔 결론의 민감도를 확인할 수 있다.
