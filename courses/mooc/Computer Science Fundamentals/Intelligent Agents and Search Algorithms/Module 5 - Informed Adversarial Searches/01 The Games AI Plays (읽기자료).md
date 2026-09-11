# 01 The Games AI Plays (읽기자료)

## 개요
- 강좌: Intelligent Agents and Search Algorithms (University of Colorado Boulder)
- 모듈: Module 5 — Informed Adversarial Searches
- [MOOC 원본 자료](https://www.mooc.org/learn/intelligent-agents-and-search-algorithms/supplement/6WT79/the-games-ai-plays)
- 형식: **읽기 자료(논문 소개)** — 모듈을 시작하며 게임 AI의 지형을 훑는다.

> ⚠️ 이 모듈 **마지막 항목인 [06 Summary of Games that AI Plays](06%20Summary%20of%20Games%20that%20AI%20Plays%20%28%EC%9D%BD%EA%B8%B0%EC%9E%90%EB%A3%8C%29.md)** 와 **본문이 동일하다.** 그쪽에는 인용 정보가 추가돼 있다. 한쪽만 읽어도 된다.

---

## 내용

### 다루는 논문
> **Robbins, T. R. (2025). The Games AIs Play — A Comprehensive Review.**
> *Journal of Applied Business and Economics*, 27(6).

**게임이 AI 연구의 실험실 역할을 해 온 오랜 역사**를 조망하고, 게임 플레이 AI의 발전을 **비즈니스·경제학의 함의**와 연결한다.

### 논문의 흐름
1. **GOFAI(Good Old Fashioned AI)** — **탐색과 수작업 휴리스틱**에 의존하던 게임 프로그램
2. → **머신러닝과 강화학습이 이끄는 현대의 데이터 주도 접근**

> 저자의 강조점: **게임은 목표가 명확하고 통제된, 잘 정의된 환경**이다. 그래서 **계산 제약 아래의 의사결정·학습·전략적 추론을 시험하기에 이상적**이다.

### 게임의 분류 축
| 축 | 구분 |
|---|---|
| 정보 | **완전 정보(perfect) vs 불완전 정보(imperfect)** |
| 결과 | **결정적(deterministic) vs 확률적(stochastic)** |
| 상호작용 | **턴제(turn-based) vs 실시간(real-time)** |

예로 다루는 게임: **체스, 바둑(Go), Atari 비디오 게임, 포커 같은 카드 게임.**

### 고전에서 현대까지
- **고전적 접근** — **미니맥스 탐색**과 **휴리스틱 평가** ([03](03%20The%20Minimax%20Algorithm.md)·[04](04%20Pruning%20the%20Game%20Tree%20-%20The%20Alpha-Beta%20Algorithm.md)에서 다룬다)
- **현대의 돌파구** — **심층 강화학습**, **자가 대국(self-play)**, **탐색과 신경망을 결합한 하이브리드 시스템**

### 왜 게임 밖에서도 중요한가
저자의 주장: 게임 AI가 **전략을 학습하고, 상대에 적응하고, 불확실성을 관리하는** 데서 얻은 통찰이 아래에 쓰일 수 있다.

- **경쟁 전략(competitive strategy)**
- **시장 시뮬레이션(market simulation)**
- **협상(negotiation)**
- **자동화된 의사결정 지원(automated decision support)**

> 게임 플레이 AI를 **좁거나 오락적인 추구로 볼 것이 아니라**, 게임에서 다듬어진 기법이 **현실의 경제·조직 의사결정에 점점 더 영향을 준다**는 것이 이 리뷰의 입장이다.

---

## 요약
- 게임은 **목표가 명확하고 통제된 환경**이라 AI 연구의 실험실로 쓰여 왔다.
- 흐름: **GOFAI(탐색 + 수작업 휴리스틱) → 머신러닝·강화학습 기반 데이터 주도 접근.**
- 분류 축 셋: **완전/불완전 정보 · 결정적/확률적 · 턴제/실시간.**
- 고전(미니맥스·휴리스틱 평가)에서 현대(심층 RL·자가 대국·탐색+신경망 하이브리드)로.
- 게임에서 나온 기법이 **경쟁 전략·시장 시뮬레이션·협상·의사결정 지원**으로 이어진다.

## 다음 주제
- [02 Games in an AI Context.md](02%20Games%20in%20an%20AI%20Context.md)
