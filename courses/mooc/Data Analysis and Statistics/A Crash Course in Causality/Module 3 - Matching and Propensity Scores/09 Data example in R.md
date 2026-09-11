# Data example in R

## 개요
- 우심도자술(right heart catheterization, RHC) 공개 데이터로 R에서 매칭 기반 인과 분석 전체 과정을 시연한다.
- `tableone` 패키지로 매칭 전후 균형(표준화 평균 차이, SMD)을 확인하고, `Matching` 패키지로 탐욕 매칭(greedy matching)을 수행한다.
- 매칭 후 짝지은 t-검정(paired t-test)과 McNemar 검정으로 결과 분석을 수행해 인과 위험차(causal risk difference)를 추정한다.

## 내용
### 데이터 소개
- Vanderbilt 웹사이트에서 공개된 RHC 데이터. 오랫동안 공개되어 많은 사람들이 예시로 분석해 온 데이터다.
- 5개 병원의 ICU 환자. 처치: RHC 시행 여부. 결과: 사망(death) 여부.
- 교란 변수: 인구통계, 보험, 질병 진단 등 다수.
- 규모: 처치군 2,000명 이상, 대조군 약 3,500명.

### 준비: 패키지 로드와 변수 변환
- `tableone` 패키지: 매칭/비매칭 데이터에서 처치–대조군 균형을 비교하는 "table one"을 쉽게 만들어 준다.
- `Matching` 패키지: 실제 매칭 수행.
- 데이터를 읽고 변수 특성·결측 여부 등을 확인한다. 이 데이터는 문자형 변수가 많아, 예컨대 `death`(yes/no)를 `rhc$death=='Yes'` 같은 지시함수로 1/0 이진 변수로 바꾸는 등 숫자형 변수로 변환한다.
- 교란 변수 일부 + 처치 변수 + 결과 변수만 담은 새 데이터셋(`mydata`)을 만들고, 사용할 공변량 목록을 `xvars`로 정의한다. (실제 데이터에는 교란 변수가 훨씬 많지만 설명을 위해 짧은 목록만 사용.)

### 매칭 전 table one
- `CreateTableOne`으로 `xvars`의 요약 통계를 처치로 층화(strata)해 만들고, `print(..., smd = TRUE)`로 표준화 차이(standardized differences)를 출력한다(유의성 검정은 요청하지 않음).
- 결과: 대조군 3,500명, 처치군 약 2,100명. **SMD > 0.1**인 변수가 몇 개 보인다 — 예: 평균 혈압(mean blood pressure)이 약 85 vs 68로 큰 차이. 즉 교란이 어느 정도 있는지 감을 잡을 수 있다.

### 탐욕 매칭 수행
- `Match` 함수: `Tr`에 처치 변수, `M = 1`은 쌍 매칭(처치 1명당 대조 1명), `X`에 매칭할 변수(`xvars`)를 준다. 공변량 전체에 대한 거리를 계산해 매칭한다.
- 결과 객체의 `index.treated`, `index.control`이 매칭된 처치·대조 대상자의 원래 ID를 알려주며, 이를 이용해 매칭 데이터셋(`matched`)을 만든다.

### 매칭 후 균형 확인
- 매칭 데이터로 다시 `CreateTableOne` + SMD 출력.
- 처치 2,186명 대 대조 2,186명(쌍 매칭이므로 동일). **모든 SMD가 매우 작아 0.1 근처에도 가지 않는다** — 무작위 시험에서 기대할 법한 표. 매칭 전 크게 달랐던 평균 혈압도 매우 비슷해졌다. 매칭이 잘 되었다고 만족할 수 있는 단계.

### 결과 분석 1: 짝지은 t-검정
- 처치군 결과 `y_trt`와 대조군 결과 `y_con`을 만들면 행 순서가 같은 매칭 쌍에 대응하므로, 쌍별 차이(pairwise difference)를 구해 일반 t-검정을 적용하면 곧 짝지은 t-검정이다.
- 결과: 점추정치 약 **0.045**, 95% 신뢰구간 제시, 매우 작은 p-값.
- 이는 **인과 위험차(causal risk difference)** 추정이다(결과 차이의 평균이므로 위험차): 모두가 RHC를 받았을 때 vs 아무도 받지 않았을 때 사망 확률의 차이 ≈ 0.045 — 즉 처치군의 사망 위험이 더 높다.
- 단, 여기서는 데이터의 모든 교란 변수를 통제하지 않았으므로 예시일 뿐이며, 실제로는 더 많은 변수로 매칭해야 하고 결론이 다소 달라질 수 있다.

### 결과 분석 2: McNemar 검정
- 쌍별 결과의 분할표: 둘 다 사망(1-1) 994쌍, 둘 다 생존(0-0) 305쌍(일치 쌍). 불일치 쌍은 처치만 사망 493쌍 vs 대조만 사망 394쌍.
- 불일치 쌍에서 처치가 사망한 쌍이 더 많다 → 처치군의 위험이 더 높음을 시사(매칭으로 이미 해당 교란은 통제된 상태).
- `mcnemar.test`로 검정하면 짝지은 t-검정과 마찬가지로 매우 작은 p-값 — 두 방법 모두 "처치 효과 없음" 가설을 검정하며 같은 결론(처치군의 사망 위험 증가)에 도달한다.

### 확장과 추천
- 위험비(risk ratio)나 오즈비(odds ratio)를 원하면 GEE 등을 사용할 수 있다. 인과 오즈비는 로짓 연결(logit link) 사용.
- 매칭 패키지로는 `Matching` 외에 옵션이 훨씬 많은 **`rcbalance`** 패키지를 추천 — 정밀 균형 제약(fine balance constraint), 최적 매칭(optimal matching) 등 더 정교한 매칭이 가능하며, 오픈소스 저널 *Observational Studies*에 상세한 설명 문서가 있다.
- `tableone` 패키지 문서에도 균형 평가 그림을 포함한 매칭 분석 절차가 자세히 설명되어 있다.

## 예시
```r
# 패키지 로드
library(tableone)
library(Matching)

# 데이터 읽기 후, 문자형 변수를 숫자형으로 변환 (예: 결과 변수)
death <- as.numeric(rhc$death == 'Yes')

# 사용할 공변량 목록 (예시용 축약 목록)
xvars <- c(...)  # 교란 변수 이름들

# 매칭 전 table one: 처치로 층화, SMD 출력
table1 <- CreateTableOne(vars = xvars, strata = "treatment",
                         data = mydata, test = FALSE)
print(table1, smd = TRUE)
# SMD > 0.1인 변수들(예: 평균 혈압 85 vs 68)에서 불균형 확인

# 탐욕 매칭 (1:1 쌍 매칭)
greedymatch <- Match(Tr = treatment, M = 1, X = mydata[xvars])
matched <- mydata[unlist(greedymatch[c("index.treated", "index.control")]), ]

# 매칭 후 균형 확인
matchedtab1 <- CreateTableOne(vars = xvars, strata = "treatment",
                              data = matched, test = FALSE)
print(matchedtab1, smd = TRUE)
# 2,186 vs 2,186, 모든 SMD가 매우 작음

# 결과 분석 1: 짝지은 t-검정 (인과 위험차)
y_trt <- matched$died[matched$treatment == 1]
y_con <- matched$died[matched$treatment == 0]
diffy <- y_trt - y_con
t.test(diffy)
# 점추정 약 0.045, 매우 작은 p-값 -> 처치군 사망 위험 증가

# 결과 분석 2: McNemar 검정
table(y_trt, y_con)
# 일치: 1-1 994쌍, 0-0 305쌍 / 불일치: 처치만 사망 493, 대조만 사망 394
mcnemar.test(matrix(c(994, 493, 394, 305), 2, 2))
# 매우 작은 p-값
```

## 요약
- RHC 데이터(ICU 환자, 처치 = RHC, 결과 = 사망)로 매칭 인과 분석의 전 과정을 시연했다.
- `tableone`으로 매칭 전 SMD > 0.1인 불균형 변수를 확인하고, `Matching` 패키지의 `Match`로 1:1 탐욕 매칭을 수행했다.
- 매칭 후 모든 SMD가 매우 작아져 무작위 시험 수준의 균형을 달성했다.
- 짝지은 t-검정으로 인과 위험차 약 0.045(처치군 사망 위험 증가, 유의)를 추정했고, McNemar 검정(불일치 쌍 493 vs 394)도 같은 결론을 주었다.
- 실전에서는 더 많은 공변량으로 매칭해야 하며, 더 정교한 매칭에는 `rcbalance` 패키지가 유용하다.
