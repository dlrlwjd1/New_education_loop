# Stratification

## 개요
- 층화(stratification)와 표준화(standardization)로 인과 효과를 식별·추정하는 방법을 다룬다: 중요한 변수로 층화한 뒤 그 변수의 분포에 대해 평균한다.
- 당뇨병 치료제(saxagliptin vs sitagliptin) 가상 예시로 표준화 계산을 단계별로 시연한다.
- 표준화의 한계 — X 변수가 많아지면 빈 셀(empty cells)이 생겨 실제로는 적용하기 어렵고, 대안적 인과 추론 방법이 필요함 — 를 설명한다.

## 내용
### 조건화와 주변화 = 표준화(standardization)
- 앞선 강의에서 인과 가정을 하면 관찰된 Y의 기댓값 E[Y|A, X]를 잠재적 결과의 기댓값 E[Y^a|X]로 쓸 수 있음을 보았다.
- 하지만 우리가 보통 원하는 것은 X를 조건화하지 않은 **주변 인과 효과(marginal causal effect)** 다. 예: 평균 인과 효과 E[Y^1] − E[Y^0]에는 "given X"가 없다.
- X를 없애려면 X의 분포에 대해 평균하면 된다. X가 유한한 값을 갖는 단일 범주형 변수라고 단순화하면:
  - **E[Y^a] = Σ_x E[Y | A=a, X=x] · P(X=x)**
  - E[Y | A=a, X=x]는 처치가 a이고 공변량이 x인 하위 모집단에서의 조건부 기댓값으로, 전부 관찰 데이터에서 계산할 수 있다.
  - P(X=x)는 관심 모집단에서 그 공변량 값의 주변 분포(marginal distribution)다.
- 조건화(conditioning)는 층화(stratify)를, 주변화(marginalizing)는 평균(averaging over)을 의미하며, 이 둘을 합쳐 표준화라 한다. 이렇게 얻은 표준화 평균(standardized mean)이 곧 평균 잠재적 결과와 같다.
- 실제 데이터가 있다면: 각 층(stratum) 안에서 처치별 평균을 계산하고, 층의 크기(층의 확률)로 가중해 층들에 걸쳐 합산(pooling)하면 처치 효과를 추정할 수 있다.

### 가상 예시 설정: saxagliptin vs sitagliptin
- 모집단: 당뇨병 환자(diabetics). 두 경구 항당뇨약(oral antidiabetic drug, OAD)의 신규 시작자(new initiators)를 비교한다.
  - saxagliptin: 더 새로운 약. sitagliptin: 대안 치료제.
- 결과: 주요 심장 이상 사건(major adverse cardiac event, MACE).
- 문제: saxagliptin은 신약이라 사용자가 과거에 다른 OAD를 써본 이력(prior OAD use)이 있을 가능성이 높고, 과거 OAD 사용자는 일반적으로 MACE 위험이 더 높다(여러 약을 시도했지만 효과가 없었던, 더 아프거나 약으로 돕기 어려운 환자일 수 있음).
- 해결 아이디어: prior OAD use(yes/no)를 X 변수로 삼아 두 하위 모집단에서 각각 MACE 발생률을 계산한 뒤, 각 모집단 크기로 가중 평균한다. 임상의의 처치 결정이 주로 prior OAD에 기반한다면 — 즉 prior OAD가 주어졌을 때 처치 배정이 무시가능(ignorable)하다면 — 이 결과는 인과 효과가 된다. (실제로는 더 많은 변수가 필요하지만 예시를 위해 단순화.)

### 원시 데이터(층화 전): saxagliptin이 더 나빠 보인다
- 전체 11,000명의 2×2 표에서:
  - P(MACE | saxagliptin) = 350/4,000 = **0.088** (약 8.8%)
  - P(MACE | sitagliptin) = 500/7,000 = **0.071** (약 7.1%)
- 원시 데이터만 보면 saxagliptin 사용자의 결과가 더 나쁘다. 하지만 이것이 약의 효과 차이 때문인지, 더 아픈 환자에게 saxagliptin이 우선적으로 배정되었기 때문인지 알 수 없다.

### 층화 후: 각 층 안에서는 차이가 없다
- prior OAD use로 층화하면 2×2 표가 두 개가 된다.
- saxagliptin 사용자는 prior OAD use가 있을 가능성이 높다: saxagliptin 사용자 중 prior OAD yes 3,000명 vs no 1,000명, sitagliptin은 yes 3,000명 vs no 4,000명.
- prior OAD 사용자는 처치와 무관하게 MACE 위험이 높다: prior OAD no 그룹 250/5,000 vs yes 그룹 600/6,000.
- 각 층 안의 MACE 확률:
  - prior OAD **no** 그룹: saxagliptin 50/1,000 = 5%, sitagliptin 200/4,000 = 5% → 차이 없음
  - prior OAD **yes** 그룹: saxagliptin 300/3,000 = 10%, sitagliptin 300/3,000 = 10% → 차이 없음
- 층화하고 나면 어느 하위 모집단에서도 처치 간 결과 차이가 없다. 층화 없이 보면 saxagliptin이 덜 효과적인 것처럼 보였던 것과 대조적이다.

### 주변화: 잠재적 결과의 기댓값 계산
- 목표: 모집단 전체가 가상적으로 saxagliptin을 배정받았을 때의 E[Y^saxa]. 각 X 수준에서의 기댓값을 해당 모집단 크기로 가중 평균한다.
  - E[Y^saxa] = (300/3,000)·(6,000/11,000) + (50/1,000)·(5,000/11,000) ≈ **0.077 (7.7%)**
  - 여기서 6,000/11,000 = P(prior OAD = yes), 5,000/11,000 = P(prior OAD = no).
- 같은 계산을 sitagliptin에 대해 수행하면(표의 둘째 행 사용) 역시 **7.7%**.
- 결론: 주변화하면 모두에게 saxagliptin을 주었을 때와 모두에게 sitagliptin을 주었을 때의 잠재적 결과 평균이 정확히 같다 — 인과 효과 없음.

### 표준화의 한계
- 원리적으로는 매우 효과적이다: 무시가능성(ignorability)을 성립시키는 중요한 X 변수들을 찾아 층화하고 평균하면 인과 효과를 얻는다.
- 하지만 실제로는 무시가능성을 위해 많은 X 변수(약물 이력뿐 아니라 여러 병력, 환자 선호, 전반적 건강, 나이 등)가 필요할 수 있고, 그러면 **빈 셀(empty cells)** — 해당 X 조합을 가진 사람이 아무도 없어 평균을 계산할 수 없는 조합 — 이 매우 많아진다. 예: 나이와 혈압으로 층화하면 데이터가 전혀 없는 조합이 많을 것이다.
- 따라서 표준화의 대안이 필요하다. 표준화 개념 자체는 코스 전체에서 계속 쓰인다 — 이후 방법들은 모두 표준화가 이상적으로 하려는 것을 다른 방식으로 달성하려는 시도다.
- 앞으로 다룰 대안: 관찰 연구에서의 매칭(matching), 처치 역확률 가중(inverse probability of treatment weighting), 성향점수(propensity score) 방법, 그리고 자연 실험(natural experiment)에서 무작위 배정 장치처럼 볼 수 있는 변수를 활용하는 도구변수(instrumental variable) 방법.

## 예시
- 표준화 공식과 예시 계산:
  - E[Y^a] = Σ_x E[Y | A=a, X=x] · P(X=x)
  - E[Y^saxa] = (300/3,000)·(6,000/11,000) + (50/1,000)·(5,000/11,000) ≈ 0.077
- 층화 전: P(MACE|saxa) = 350/4,000 = 8.8%, P(MACE|sita) = 500/7,000 = 7.1% (saxagliptin이 나빠 보임)
- 층화 후: 두 층 모두에서 처치 간 MACE 위험 동일(5%와 10%), 표준화 결과 두 약 모두 7.7%.

## 요약
- 표준화 = 층화(조건화) + 주변화(X 분포에 대한 평균): E[Y^a] = Σ_x E[Y|A=a, X=x]·P(X=x).
- 층 안에서 처치가 사실상 무작위(무시가능성)라면 표준화 평균은 평균 잠재적 결과와 같고, 이를 대비하면 인과 효과를 얻는다.
- 예시에서 원시 데이터는 saxagliptin이 더 나빠 보였지만(8.8% vs 7.1%), prior OAD use로 층화·표준화하면 두 약의 효과는 동일했다(7.7% vs 7.7%) — 교란 때문에 생긴 겉보기 차이였다.
- X 변수가 많아지면 빈 셀 때문에 표준화가 불가능해지므로, 매칭·IPTW·성향점수·도구변수 같은 대안 방법이 필요하다.
