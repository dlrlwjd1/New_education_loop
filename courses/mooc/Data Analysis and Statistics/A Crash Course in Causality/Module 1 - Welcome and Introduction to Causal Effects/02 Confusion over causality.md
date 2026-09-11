# Confusion over causality

## 개요
- 인과성(causality)이 왜 혼란스럽고 논쟁적인지를 네 가지 사례 유형으로 살펴본다: 허위 상관(spurious correlation), 개인적 일화(personal anecdote), 과학 보도 헤드라인, 역인과(reverse causality).
- 이런 혼란이 인과 추론(causal inference)이라는 형식적 분야가 필요한 이유이며, 코스 전체의 동기가 된다.
- 인과 추론 분야의 주요 기여(인과 효과의 형식적 정의, 인과 가정, 교란 변수 통제, 민감도 분석)와 간략한 역사를 소개한다.

## 내용
### 허위 상관(spurious correlation)
- 서로 무관한 변수들이 특정 기간 동안 우연히 높은 상관을 보일 수 있다.
- 예시: 2000~2009년 메인(Maine) 주의 이혼율(빨간 곡선)과 1인당 마가린 소비량(검은 곡선)이 매우 비슷하게 움직인다. 변수 이름을 모르면 서로 영향을 주는 관계라고 착각할 수 있지만, 인과적으로 무관하다고 보는 것이 타당하다.
- 문제는 이렇게 명백하지 않은 경우다. 두 변수가 상관을 보일 때 그것이 허위 상관인지 실제 인과인지 구별해야 하는데, 이런 사례들 때문에 "인과성은 알 수 없는 것"처럼 느껴지기도 한다. 인과 추론 분야가 이 질문에 답하도록 돕는다.

### 개인적 일화(personal anecdotes)
- 사람들은 자기 삶의 인과 효과에 대해 강한 믿음을 갖고 자신 있게 이야기하지만, 실제로 옳은지는 알 수 없다. 예: "지난번 다쳤을 때 이 연고를 발랐더니 나았다."
- 예시: 105세까지 산 Bill Smith는 매일 순무(turnip)를 하나씩 먹는 습관이 장수에 기여했다고 믿는다. 하지만 우리가 아는 것은 (1) 그가 105세까지 살았다는 것, (2) 매일 순무를 먹었다는 것뿐이다. 그 식습관이 수명을 늘렸는지, 줄였는지(다르게 살았다면 더 오래 살았을 수도 있다), 아무 영향이 없었는지는 알 수 없다.
- 이런 일화의 함의는 "나에게 효과가 있었으니 너에게도 효과가 있을 것"이라는 권고인데, 다른 사람이 그 습관을 따랐을 때 어떤 일이 일어날지는 실제로 알 수 없다.

### 과학 보도 헤드라인
- 과학 기자들은 'cause(원인)'라는 단어는 피하지만, 인과적으로 해석되기 쉬운 함축적(loaded) 단어를 쓴다.
- 실제 헤드라인 예시:
  - "Diet high in red meat **linked** to inflammatory bowel condition" — 'linked'가 인과 관계인지 허위 상관인지 불분명하다.
  - "Positive **link** between video games and academic performance, study suggests" — 게임을 하는 학생이 원래 성적이 좋은 학생일 수도 있고, 게임이 집중력을 높여 성적을 올릴 수도 있다. 헤드라인만으로는 알 수 없다.
  - "Prostate cancer risk **soars** by a quarter if men drink just one or two beers" — 'soars'는 인과처럼 들리지만, 음주를 무작위 배정(randomize)했을 리 없으므로 관찰 연구(observational study)였을 것이다. 음주 행동을 바꾸면 전립선암 위험이 바뀌는지는 헤드라인만으로 불분명하다.
  - "Health racket; tennis **reduces** risk of death at any age, studies suggest" — 'reduces'가 인과처럼 들리지만 실제 인과인지는 불분명하다.
- 이런 헤드라인에 대한 회의 수준은 각자의 사전 믿음(prior belief)에 좌우되는 경우가 많다. 테니스를 치는 사람은 기뻐하며 공유하고, 그렇지 않은 사람은 "상관관계일 뿐"이라고 반박한다.
- 우리는 사전 믿음이 아니라 증거 자체 — 연구 설계, 사용한 통계적 방법, 어떤 가정을 했는지 — 에 근거해 인과성을 판단하는 쪽으로 옮겨가야 한다.

### 역인과(reverse causality)
- 두 변수 사이의 인과 화살표(causal arrow)가 어느 방향으로든 갈 수 있는 상황이다.
- 예시: 도시 녹지 공간(urban green space)과 운동(exercise)의 관계.
  - 방향 1: 원래 운동을 많이 하는 사람들이 녹지 근처에 살기를 우선시해 이사 온다 ("운동을 좋아하니 이 공원 근처로 이사 갈 계획이다").
  - 방향 2 (연구자들이 보통 더 관심 있는 질문): 도시 녹지가 사람들을 더 운동하게 만든다 ("집 근처에 이런 공원이 있으면 더 운동할 것이다").
- 횡단면(cross-sectional) 관찰 연구에서는 녹지가 많은 곳에 운동이 많다는 것만 보이고, 화살표 방향(또는 둘의 조합)은 알 수 없다. 이를 가려내려면 변수 간 시간적(temporal) 관계를 신중히 설계한 연구가 필요하다 — 예: 녹지가 늘었을 때 기존 거주자의 운동량이 변했는가.

### 인과 추론 분야가 하는 일
- 인과 효과의 형식적 정의(formal definition) 수립 — 인과 효과란 무엇을 의미하는가.
- 데이터로부터 인과 효과를 식별(identify)하기 위해 필요한 가정(causal assumptions) 규명.
- 관찰 연구에서 교란 변수(confounding variables) — 처치(treatment)/노출(exposure)과 결과(outcome) 모두에 영향을 주는 변수 — 를 통제하는 규칙.
- 민감도 분석(sensitivity analysis): 인과 가정이 조금 또는 크게 위반되었을 때 결론이 얼마나 달라지는지 정량화한다.

### 인과 추론의 간략한 역사
- 1920년대 Wright와 Neyman의 초기 기여로 거슬러 올라가며, 1970년대부터 독자적인 통계 연구 분야가 되었다.
- 잠재적 결과(potential outcomes)의 재도입: Rubin의 1974년 고전적 논문(Rubin causal model). 1920년대에 논의되었다가 수십 년간 잊혔던 개념이 1970년대 이후 표준 어휘가 되었다.
- 인과 다이어그램(causal diagrams): Robins, Greenland, Pearl의 핵심 기여. 어떤 변수를 통제해야 인과 효과를 식별할 수 있는지에 대한 이론이 발전했다.
- 성향 점수(propensity scores): Rosenbaum과 Rubin이 처음 도입.
- 시간 의존 교란(time-dependent confounding): 처치가 시간에 따라 변하고 변수들이 서로 피드백 루프를 이루는 상황. Jamie Robins의 g-methods가 1980년대 이후 핵심 기여.
- 최적 동적 치료 전략(optimal dynamic treatment strategies): "치료 A가 B보다 나은가"가 아니라, 특정 특성을 가진 환자에게 어떤 치료가 최적인지를 다루며 2000년대에 큰 진전.
- 표적 학습(targeted learning): Mark van der Laan 등이 개발한, 준모수 이론(semi-parametric theory)과 고차원 데이터 기반의 머신러닝 접근.

### 앞으로의 방향
- 이 코스는 관찰 연구(observational studies)와 자연 실험(natural experiments) 관점의 인과 추론에 초점을 맞춘다. 무작위 시험(randomized trial)은 직접 다루지 않지만 인과적 추론의 일부로 활용한다.
- 검증 불가능한(untestable) 인과 가정을 해야 함을 기억해야 한다 — 데이터로 참인지 확인할 수 없고, 타당성(plausibility)을 따져볼 수는 있지만 결국 신뢰에 기반한다. 그래서 민감도 분석을 수행한다.
- Cochran의 1972년 고전 논문: 관찰 연구는 "진실을 향해 더듬어 갈(groping toward the truth) 뿐"이므로 상당한 겸손(humility)이 필요하다.

## 요약
- 허위 상관, 개인적 일화, 함축적 단어를 쓰는 헤드라인, 역인과가 인과성을 혼란스럽게 만드는 대표적 원인이다.
- 인과성 판단은 사전 믿음이 아니라 연구 설계·방법·가정이라는 증거에 근거해야 한다.
- 인과 추론 분야는 인과 효과의 형식적 정의, 인과 가정 규명, 교란 통제 규칙, 민감도 분석을 제공한다.
- 잠재적 결과(Rubin 1974), 인과 다이어그램(Robins·Greenland·Pearl), 성향 점수(Rosenbaum·Rubin), g-methods(Robins), 표적 학습(van der Laan)이 주요 이정표다.
- 관찰 연구는 검증 불가능한 가정에 의존하므로 겸손한 태도가 필요하다.
