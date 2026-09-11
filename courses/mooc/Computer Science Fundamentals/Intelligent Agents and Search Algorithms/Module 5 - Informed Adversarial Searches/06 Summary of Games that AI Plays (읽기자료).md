# 06 Summary of Games that AI Plays (읽기자료)

## 개요
- 강좌: Intelligent Agents and Search Algorithms (University of Colorado Boulder)
- 모듈: Module 5 — Informed Adversarial Searches
- [MOOC 원본 자료](https://www.mooc.org/learn/intelligent-agents-and-search-algorithms/supplement/up2mq/summary-of-games-that-ai-plays)
- 형식: **읽기 자료** — 강좌 마무리. **모듈 첫 항목 [01 The Games AI Plays](01%20The%20Games%20AI%20Plays%20%28%EC%9D%BD%EA%B8%B0%EC%9E%90%EB%A3%8C%29.md)와 본문이 동일하고**, 여기에는 **인용 정보가 추가**되어 있다.

> 원문: Robbins, T. R. (2025). *The Games AIs Play — A Comprehensive Review.*
> **Journal of Applied Business and Economics, 27(6).**
> https://doi.org/10.33423/jabe.v27i6.7948

---

## 내용

### 논문이 다루는 것
**게임이 AI 연구의 실험실로 쓰여 온 오랜 역사**를 조망하고, 게임 플레이 AI의 발전을 **비즈니스·경제학에 대한 함의**와 연결한다.

**발전의 궤적**
1. **GOFAI (Good Old Fashioned AI)** — **탐색과 수작업 휴리스틱**에 의존하던 게임 프로그램
2. → **머신러닝과 강화학습이 이끄는 현대의 데이터 주도 접근**

> 게임은 **목표가 명확하고 통제된, 잘 정의된 환경**이므로 **계산 제약 아래에서의 의사결정·학습·전략적 추론을 시험하기에 이상적**이다.

### 게임을 나누는 축
| 축 | 구분 | 이 강좌에서 다룬 것 |
|---|---|---|
| 정보 | **완전 vs 불완전 정보** | [02 Games in an AI Context](02%20Games%20in%20an%20AI%20Context.md)에서 **완전 정보** 게임을 다뤘다 |
| 결과 | **결정적 vs 확률적** | **결정적** 게임(체스)을 다뤘다 |
| 상호작용 | **턴제 vs 실시간** | **턴제**를 다뤘다 |

다루는 게임 예: **체스, 바둑, Atari 비디오 게임, 포커 같은 카드 게임.**

### 고전에서 현대까지
- **고전** — **미니맥스 탐색**과 **휴리스틱 평가** (이 모듈의 [03](03%20The%20Minimax%20Algorithm.md)·[04](04%20Pruning%20the%20Game%20Tree%20-%20The%20Alpha-Beta%20Algorithm.md))
- **현대의 돌파구** — **심층 강화학습**, **자가 대국(self-play)**, **탐색과 신경망을 결합한 하이브리드 시스템**
  - [Module 3의 AlphaZero](../Module%203%20-%20Informed%20Searches/06%20Approaches%20to%20Developing%20Heuristics.md)가 정확히 이 하이브리드의 사례다

### 게임 밖으로의 확장
게임 AI가 **전략을 학습하고 상대에 적응하며 불확실성을 관리**하는 데서 얻은 통찰이 아래에 적용된다.

- **경쟁 전략(competitive strategy)**
- **시장 시뮬레이션(market simulation)**
- **협상(negotiation)**
- **자동화된 의사결정 지원(automated decision support)**

> 저자의 입장: 게임 플레이 AI는 **좁거나 오락적인 추구가 아니다.** 게임에서 다듬어진 기법이 **현실의 경제·조직 의사결정에 점점 더 영향을 준다.**

---

## 요약
- 게임은 **통제된 실험 환경**이라 AI 연구에서 실험실 역할을 해 왔다.
- **GOFAI(탐색 + 수작업 휴리스틱) → 데이터 주도(ML·RL)** 로의 흐름.
- 분류 축: **완전/불완전 정보 · 결정적/확률적 · 턴제/실시간.** 이 강좌는 **완전 정보 · 결정적 · 턴제** 게임을 다뤘다.
- 현대의 돌파구는 **심층 RL · 자가 대국 · 탐색+신경망 하이브리드**.
- 기법은 **경쟁 전략·시장 시뮬레이션·협상·의사결정 지원**으로 넘어간다.

## 다음 주제
- **강좌 완료.** [강좌 README](../README.md)로 돌아간다.
