# Process Mining: Data science in Action

## 개요
- 플랫폼: MOOC
- 제공: **Eindhoven University of Technology (TU/e)**
- 강의: **Wil van der Aalst**("프로세스 마이닝의 대부") · **Joos Buijs**
- 링크: https://www.mooc.org/learn/process-mining
- 구성: **6개 모듈 · 60개 강의 · 약 24시간**
- MOOC Plus 포함 (2026-09-02 확인)
- 정리일: 2026-09-02

**이벤트 로그에서 실제로 일어난 프로세스를 자동으로 발견**하고, 그것을 모델과 비교(적합성 검사)하고, 시간·자원·데이터 관점으로 확장(강화)하는 방법을 다루는 이 분야의 표준 강좌다. 2014년 첫 운영 이후 **누적 8만 명 이상**이 수강했다.

## 이 코스의 핵심 구조

프로세스 마이닝은 **모델과 이벤트 데이터의 세 가지 관계**로 정리된다.

| 관계 | 방향 | 프로세스 마이닝 유형 |
|---|---|---|
| **Play-out** | 모델 → 행동 | 고전적 모델 사용(시뮬레이션, 워크플로 시스템) |
| **Play-in** | 데이터 → 모델 | **발견(discovery)** — 모델링 없이 자동 학습 |
| **Replay** | 로그를 모델 위에서 재생 | **적합성 검사(conformance)** + **강화(enhancement)** |

> 이 코스의 중심은 **Replay**다. 같은 재생으로 **적합성 문제**(누락된 활동, 일어나면 안 될 활동)와 **성능 문제**(병목, 대기 시간)를 동시에 잡아낸다.

**이벤트 로그의 최소 요건은 단 셋** — **Case ID · Activity · Timestamp**. 이 단순함이 프로세스 마이닝을 가볍게 만든다.

## 특히 기억할 개념

**욕망의 길(desire lines)** — 잔디밭에 사람들이 다녀 생긴 오솔길이 **이벤트 데이터**, "여기로 다니지 마시오" 표지판이 **프로세스 모델**이다. 그 차이를 드러내는 것이 프로세스 마이닝이다. (M1-04)

**네 가지 힘** — **적합도 · 단순성 · 정밀도 · 일반화**가 서로 경쟁한다. **꽃 모델**은 적합도 100%지만 정밀도가 0이고, **트레이스를 그대로 나열한 모델**은 정밀도가 좋지만 일반화가 0이다. **"그" 프로세스 모델은 없다.** (M3-01)

**표현적 편향(representational bias)** — **표현이 허용하지 않는 모델은 절대 발견할 수 없다.** 그리고 **발견에 쓰는 내부 표현과 사용자에게 보여주는 시각화는 완전히 다른 문제**다. (M3-02)

**프로세스 마이닝의 머피의 법칙** — **충분히 오래 기다리면 무엇이든 일어난다.** 그러므로 "가능한가"가 아니라 **가능성(likelihood)** 이 중요하다. (M3-01)

**라자냐 vs 스파게티** — 구조적 프로세스에서는 **발견 자체의 가치가 낮고** 정렬 기반 고급 분석에 가치가 있다. 비구조적 프로세스에서는 **발견 자체가 거울이 되어** 큰 가치를 낸다. **"PowerPoint에 의한 관리"에서 "증거 기반 개선"으로.** (M6-06, M6-07)

**프로세스 모델은 지도다** — 지도학에서 추상화·집계·크기와 색·레이아웃을 배워야 한다. 그리고 **정보 시스템은 내비게이션 장치처럼** 되어야 한다 — 예측하고 권고하되, **사용자가 지시를 어겨도 계속 지원할 만큼 유연**하게. (M6-08)

## 강의 목록

### Module 1 - Introduction and Data Mining (18강)

데이터 사이언스 배경과 **프로세스 마이닝의 세 유형**, 데이터 마이닝 기초(의사결정 트리·연관 규칙·군집화·평가), 그리고 **Disco 실전 세션 8편**.

| # | 강의 |
|---|---|
| 01 | [Course Background and Practical Information](Module%201%20-%20Introduction%20and%20Data%20Mining/01%20Course%20Background%20and%20Practical%20Information.md) |
| 02 | [1.1 - Data Science and Big Data](Module%201%20-%20Introduction%20and%20Data%20Mining/02%201.1%20-%20Data%20Science%20and%20Big%20Data.md) |
| 03 | [1.2 - Different Types of Process Mining](Module%201%20-%20Introduction%20and%20Data%20Mining/03%201.2%20-%20Different%20Types%20of%20Process%20Mining.md) |
| 04 | [1.3 - How Process Mining Relates to Data Mining](Module%201%20-%20Introduction%20and%20Data%20Mining/04%201.3%20-%20How%20Process%20Mining%20Relates%20to%20Data%20Mining.md) |
| 05 | [1.4 - Learning Decision Trees](Module%201%20-%20Introduction%20and%20Data%20Mining/05%201.4%20-%20Learning%20Decision%20Trees.md) |
| 06 | [1.5 - Applying Decision Trees](Module%201%20-%20Introduction%20and%20Data%20Mining/06%201.5%20-%20Applying%20Decision%20Trees.md) |
| 07 | [1.6 - Association Rule Learning](Module%201%20-%20Introduction%20and%20Data%20Mining/07%201.6%20-%20Association%20Rule%20Learning.md) |
| 08 | [1.7 - Cluster Analysis](Module%201%20-%20Introduction%20and%20Data%20Mining/08%201.7%20-%20Cluster%20Analysis.md) |
| 09 | [1.8 - Evaluating Mining Results](Module%201%20-%20Introduction%20and%20Data%20Mining/09%201.8%20-%20Evaluating%20Mining%20Results.md) |
| 10 | [Introducing Fluxicon and Disco](Module%201%20-%20Introduction%20and%20Data%20Mining/10%20Introducing%20Fluxicon%20and%20Disco.md) |
| 11 | [Real Life Session 01 - The Demo Scenario (7 min.)](Module%201%20-%20Introduction%20and%20Data%20Mining/11%20Real%20Life%20Session%2001%20-%20The%20Demo%20Scenario%20%287%20min.%29.md) |
| 12 | [Real Life Session 02 - Process Discovery and Simplification (11 min.)](Module%201%20-%20Introduction%20and%20Data%20Mining/12%20Real%20Life%20Session%2002%20-%20Process%20Discovery%20and%20Simplification%20%2811%20min.%29.md) |
| 13 | [Real Life Session 03 - Statistics, Cases and Variants (8 min.)](Module%201%20-%20Introduction%20and%20Data%20Mining/13%20Real%20Life%20Session%2003%20-%20Statistics%2C%20Cases%20and%20Variants%20%288%20min.%29.md) |
| 14 | [Real Life Session 04 - Bottleneck Analysis (7 min.)](Module%201%20-%20Introduction%20and%20Data%20Mining/14%20Real%20Life%20Session%2004%20-%20Bottleneck%20Analysis%20%287%20min.%29.md) |
| 15 | [Real Life Session 05 - Compliance Analysis (6 min.)](Module%201%20-%20Introduction%20and%20Data%20Mining/15%20Real%20Life%20Session%2005%20-%20Compliance%20Analysis%20%286%20min.%29.md) |
| 16 | [Real Life Session 06 - Tip 1 - Keep Copies of your Analyses (4 min.)](Module%201%20-%20Introduction%20and%20Data%20Mining/16%20Real%20Life%20Session%2006%20-%20Tip%201%20-%20Keep%20Copies%20of%20your%20Analyses%20%284%20min.%29.md) |
| 17 | [Real Life Session 07 - Tip 2 - Take Different Views on your Process (7 min.)](Module%201%20-%20Introduction%20and%20Data%20Mining/17%20Real%20Life%20Session%2007%20-%20Tip%202%20-%20Take%20Different%20Views%20on%20your%20Process%20%287%20min.%29.md) |
| 18 | [Real Life Session 08 - Tip 3 - Exporting Results (4 min.)](Module%201%20-%20Introduction%20and%20Data%20Mining/18%20Real%20Life%20Session%2008%20-%20Tip%203%20-%20Exporting%20Results%20%284%20min.%29.md) |

### Module 2 - Process Models and Process Discovery (8강)

이벤트 로그와 프로세스 모델, **페트리 넷**, 워크플로 넷과 **건전성(soundness)**, 최초의 발견 기법인 **알파 알고리즘**과 그 한계, ProM·Disco 사용법.

| # | 강의 |
|---|---|
| 01 | [2.1 - Event Logs and Process Models](Module%202%20-%20Process%20Models%20and%20Process%20Discovery/01%202.1%20-%20Event%20Logs%20and%20Process%20Models.md) |
| 02 | [2.2 - Petri Nets (1-2)](Module%202%20-%20Process%20Models%20and%20Process%20Discovery/02%202.2%20-%20Petri%20Nets%20%281-2%29.md) |
| 03 | [2.3 - Petri Nets (2-2)](Module%202%20-%20Process%20Models%20and%20Process%20Discovery/03%202.3%20-%20Petri%20Nets%20%282-2%29.md) |
| 04 | [2.4 - Transition Systems and Petri Net Properties](Module%202%20-%20Process%20Models%20and%20Process%20Discovery/04%202.4%20-%20Transition%20Systems%20and%20Petri%20Net%20Properties.md) |
| 05 | [2.5 - Workflow Nets and Soundness](Module%202%20-%20Process%20Models%20and%20Process%20Discovery/05%202.5%20-%20Workflow%20Nets%20and%20Soundness.md) |
| 06 | [2.6 - Alpha Algorithm - A Process Discovery Algorithm](Module%202%20-%20Process%20Models%20and%20Process%20Discovery/06%202.6%20-%20Alpha%20Algorithm%20-%20A%20Process%20Discovery%20Algorithm.md) |
| 07 | [2.7 - Alpha Algorithm - Limitations](Module%202%20-%20Process%20Models%20and%20Process%20Discovery/07%202.7%20-%20Alpha%20Algorithm%20-%20Limitations.md) |
| 08 | [2.8 - Introducing ProM and Disco](Module%202%20-%20Process%20Models%20and%20Process%20Discovery/08%202.8%20-%20Introducing%20ProM%20and%20Disco.md) |

### Module 3 - Different Types of Process Models (8강)

**발견의 네 품질 기준**(적합도·단순성·정밀도·일반화), **표현적 편향**, BPMN, 의존 그래프와 인과 넷(휴리스틱 마이너), 전이 시스템과 **영역 기반 발견**.

| # | 강의 |
|---|---|
| 01 | [3.1 - Four Quality Criteria For Process Discovery](Module%203%20-%20Different%20Types%20of%20Process%20Models/01%203.1%20-%20Four%20Quality%20Criteria%20For%20Process%20Discovery.md) |
| 02 | [3.2 - On The Representational Bias of Process Mining](Module%203%20-%20Different%20Types%20of%20Process%20Models/02%203.2%20-%20On%20The%20Representational%20Bias%20of%20Process%20Mining.md) |
| 03 | [3.3 - Business Process Model and Notation (BPMN)](Module%203%20-%20Different%20Types%20of%20Process%20Models/03%203.3%20-%20Business%20Process%20Model%20and%20Notation%20%28BPMN%29.md) |
| 04 | [3.4 - Dependency Graphs and Causal Nets](Module%203%20-%20Different%20Types%20of%20Process%20Models/04%203.4%20-%20Dependency%20Graphs%20and%20Causal%20Nets.md) |
| 05 | [3.5 - Learning Dependency Graphs](Module%203%20-%20Different%20Types%20of%20Process%20Models/05%203.5%20-%20Learning%20Dependency%20Graphs.md) |
| 06 | [3.6 - Learning Causal nets and Annotating Them](Module%203%20-%20Different%20Types%20of%20Process%20Models/06%203.6%20-%20Learning%20Causal%20nets%20and%20Annotating%20Them.md) |
| 07 | [3.7 - Learning Transition Systems](Module%203%20-%20Different%20Types%20of%20Process%20Models/07%203.7%20-%20Learning%20Transition%20Systems.md) |
| 08 | [3.8 - Using Regions to Discover Concurrency](Module%203%20-%20Different%20Types%20of%20Process%20Models/08%203.8%20-%20Using%20Regions%20to%20Discover%20Concurrency.md) |

### Module 4 - Process Discovery Techniques and Conformance Checking (8강)

영역 기반 접근의 한계, 대안 발견 기법(언어 기반 영역·유전·**귀납적 마이닝**), **적합성 검사 3종**(인과 발자국 · 토큰 기반 재생 · **정렬**), 점 차트로 데이터 탐색.

| # | 강의 |
|---|---|
| 01 | [4.1 - Two-Phase Process Discovery And Its Limitations](Module%204%20-%20Process%20Discovery%20Techniques%20and%20Conformance%20Checking/01%204.1%20-%20Two-Phase%20Process%20Discovery%20And%20Its%20Limitations.md) |
| 02 | [4.2 - Alternative Process Discovery Techniques](Module%204%20-%20Process%20Discovery%20Techniques%20and%20Conformance%20Checking/02%204.2%20-%20Alternative%20Process%20Discovery%20Techniques.md) |
| 03 | [4.3 - Introduction to Conformance Checking](Module%204%20-%20Process%20Discovery%20Techniques%20and%20Conformance%20Checking/03%204.3%20-%20Introduction%20to%20Conformance%20Checking.md) |
| 04 | [4.4 - Conformance Checking Using Causal Footprints](Module%204%20-%20Process%20Discovery%20Techniques%20and%20Conformance%20Checking/04%204.4%20-%20Conformance%20Checking%20Using%20Causal%20Footprints.md) |
| 05 | [4.5 - Conformance Checking Using Token-Based Replay](Module%204%20-%20Process%20Discovery%20Techniques%20and%20Conformance%20Checking/05%204.5%20-%20Conformance%20Checking%20Using%20Token-Based%20Replay.md) |
| 06 | [4.6 - Token Based Replay - Some Examples](Module%204%20-%20Process%20Discovery%20Techniques%20and%20Conformance%20Checking/06%204.6%20-%20Token%20Based%20Replay%20-%20Some%20Examples.md) |
| 07 | [4.7 - Aligning Observed and Modeled Behavior](Module%204%20-%20Process%20Discovery%20Techniques%20and%20Conformance%20Checking/07%204.7%20-%20Aligning%20Observed%20and%20Modeled%20Behavior.md) |
| 08 | [4.8 - Exploring Event Data](Module%204%20-%20Process%20Discovery%20Techniques%20and%20Conformance%20Checking/08%204.8%20-%20Exploring%20Event%20Data.md) |

### Module 5 - Enrichment of Process Models (9강)

**강화(enhancement)** — 의사결정 지점 마이닝, 데이터 인식 페트리 넷, 병목 마이닝, 소셜 네트워크와 조직 마이닝, 관점 결합과 시뮬레이션, **프로세스 큐브**(비교 마이닝), **정교화된 프레임워크(10개 활동)**.

| # | 강의 |
|---|---|
| 01 | [5.1 - About the Last Two Weeks of This Course](Module%205%20-%20Enrichment%20of%20Process%20Models/01%205.1%20-%20About%20the%20Last%20Two%20Weeks%20of%20This%20Course.md) |
| 02 | [5.2 - Mining Decision Points](Module%205%20-%20Enrichment%20of%20Process%20Models/02%205.2%20-%20Mining%20Decision%20Points.md) |
| 03 | [5.3 - Discovering Data Aware Petri Nets](Module%205%20-%20Enrichment%20of%20Process%20Models/03%205.3%20-%20Discovering%20Data%20Aware%20Petri%20Nets.md) |
| 04 | [5.4 - Mining Bottlenecks](Module%205%20-%20Enrichment%20of%20Process%20Models/04%205.4%20-%20Mining%20Bottlenecks.md) |
| 05 | [5.5 - Mining Social Networks](Module%205%20-%20Enrichment%20of%20Process%20Models/05%205.5%20-%20Mining%20Social%20Networks.md) |
| 06 | [5.6 - Organizational Mining](Module%205%20-%20Enrichment%20of%20Process%20Models/06%205.6%20-%20Organizational%20Mining.md) |
| 07 | [5.7 - Combining Different Perspectives](Module%205%20-%20Enrichment%20of%20Process%20Models/07%205.7%20-%20Combining%20Different%20Perspectives.md) |
| 08 | [5.8 - Comparative Process Mining Using Process Cubes](Module%205%20-%20Enrichment%20of%20Process%20Models/08%205.8%20-%20Comparative%20Process%20Mining%20Using%20Process%20Cubes.md) |
| 09 | [5.9 - Refined Process Mining Framework](Module%205%20-%20Enrichment%20of%20Process%20Models/09%205.9%20-%20Refined%20Process%20Mining%20Framework.md) |

### Module 6 - Operational Support and Conclusion (9강)

**운영 지원**(탐지·예측·권고), 이벤트 데이터 확보의 어려움, **로깅 12지침**, 도구 지형도, **L\* 생애주기 모델**, **라자냐 vs 스파게티** 프로세스, 지도 비유와 마무리.

| # | 강의 |
|---|---|
| 01 | [6.1 - Operational Support - Detect, Predict and Recommend](Module%206%20-%20Operational%20Support%20and%20Conclusion/01%206.1%20-%20Operational%20Support%20-%20Detect%2C%20Predict%20and%20Recommend.md) |
| 02 | [6.2 - Getting the Right Event Data](Module%206%20-%20Operational%20Support%20and%20Conclusion/02%206.2%20-%20Getting%20the%20Right%20Event%20Data.md) |
| 03 | [6.3 - Guidelines for Logging](Module%206%20-%20Operational%20Support%20and%20Conclusion/03%206.3%20-%20Guidelines%20for%20Logging.md) |
| 04 | [6.4 - Process Mining Software](Module%206%20-%20Operational%20Support%20and%20Conclusion/04%206.4%20-%20Process%20Mining%20Software.md) |
| 05 | [6.5 - How to Conduct a Process Mining Project](Module%206%20-%20Operational%20Support%20and%20Conclusion/05%206.5%20-%20How%20to%20Conduct%20a%20Process%20Mining%20Project.md) |
| 06 | [6.6 - Mining Lasagna Processes](Module%206%20-%20Operational%20Support%20and%20Conclusion/06%206.6%20-%20Mining%20Lasagna%20Processes.md) |
| 07 | [6.7 - Mining Spaghetti Processes](Module%206%20-%20Operational%20Support%20and%20Conclusion/07%206.7%20-%20Mining%20Spaghetti%20Processes.md) |
| 08 | [6.8 - Process Models as Maps](Module%206%20-%20Operational%20Support%20and%20Conclusion/08%206.8%20-%20Process%20Models%20as%20Maps.md) |
| 09 | [6.9 - Data Science in Action](Module%206%20-%20Operational%20Support%20and%20Conclusion/09%206.9%20-%20Data%20Science%20in%20Action.md) |

## BI와의 차이

> 분석을 **열이 나는 아이를 보는 것**에 비유하면 — **BI는 아이에게 열이 있다는 것까지 알려 준다.** 측정해서 대시보드에 올릴 수 있다. **프로세스 마이닝은 프로세스 안을 들여다본다.** (M6-09)

**Anscombe's Quartet** 도 같은 이야기다 — 통계값이 똑같은 네 데이터셋이 그림으로는 완전히 다르게 생겼다. **숫자 뒤를 봐야 한다.** (M1-04)

## 사용 도구

| 도구 | 성격 |
|---|---|
| **ProM** (promtools.org) | 학술용 오픈소스. **플러그인 약 600개**, 전 스펙트럼 지원. 강력하지만 복잡하다 |
| **Disco** (Fluxicon) | 상업용. 발견·성능 분석·필터링에 특화. **매우 쉽고 빠르다** |

> Disco의 출력을 **XES 형식**으로 내보내 ProM에서 고급 분석을 이어갈 수 있다. 두 도구는 대립이 아니라 조합이다.

## 교재
**Process Mining: Data Science in Action (2nd edition)**, Wil van der Aalst, Springer. 각 강의가 이 책의 장에 대응한다.

## 관련 로드맵

- [AI 네이티브 회사 로드맵](../../../../study-progress/AI%20네이티브%20회사%20로드맵/) — Phase 1(회사를 시스템으로 본다)에서 **업무의 시간·비용·오류율을 로그 데이터로 측정**하는 공백을 채운다
