# 05 Programming a Computer to Play Chess (읽기자료)

## 개요
- 강좌: Intelligent Agents and Search Algorithms (University of Colorado Boulder)
- 모듈: Module 5 — Informed Adversarial Searches
- [MOOC 원본 자료](https://www.mooc.org/learn/intelligent-agents-and-search-algorithms/supplement/jGaoZ/programming-a-computer-to-play-chess)
- 형식: **읽기 자료** — **클로드 섀넌(Claude Shannon)의 1950년 논문** 소개. 게임에 AI를 적용한 **토대가 된 문헌**이다.

> 원문: Shannon, C. E. (1950). *XXII. Programming a computer for playing chess.* **The London, Edinburgh, and Dublin Philosophical Magazine and Journal of Science, 41(314), 256–275.**
> https://doi.org/10.1080/14786445008521796

---

## 내용

### 섀넌의 출발점
- 체스를 **계산에 적합한 형식적·규칙 기반 시스템**으로 규정하고, **디지털 컴퓨터가 원리적으로 유능한 체스를 둘 수 있다**고 주장했다.

### 게임 트리라는 아이디어
> 체스를 **게임 트리(game tree)** 로 표현한다 — **노드 = 판 위치(board positions), 간선 = 합법 수(legal moves).**

- **트리 전체의 완전 탐색(brute-force)이 불가능한 이유**를 설명한다 — **분기 계수(branching factor)** 때문에 가능한 게임 상태가 **조합적으로 폭발**한다.
- 이 관찰로부터 **전수 열거가 아니라 지능적 탐색 전략이 필요하다**는 결론을 세운다.

### 두 가지 대조적인 접근
| 접근 | 내용 |
|---|---|
| **완전 탐색(brute-force)** | **고정된 깊이까지** 탐색하며 **모든 수를 동등하게** 평가한다 |
| **선택적 탐색(selective search)** | **체스 지식과 휴리스틱의 안내를 받아 유망한 수에만 집중**한다. 대국 중 평가하는 수의 개수를 제한한다 |

### 평가 함수의 중요성
- **비종료 위치(nonterminal position)의 강함을 추정하는 평가 함수(evaluation function)** 의 중요성을 강조한다.
- 구체적인 특징 범주는 [03 The Minimax Algorithm](03%20The%20Minimax%20Algorithm.md)에서 다뤘다 — **기물 가치·기동성·킹 안전·폰 구조·중앙 장악의 가중 선형 결합.**

### 남긴 영향
- 섀넌은 **직접 동작하는 체스 프로그램을 구현하지는 않았다.**
- 그러나 그의 개념 틀은 **현대 AI의 핵심 아이디어를 예견**했다 — **휴리스틱 평가, 선택적 탐색, 그리고 계산력과 도메인 지식 사이의 트레이드오프.**
- 이 아이디어들이 **미니맥스 탐색, 알파-베타 가지치기, 현대의 게임 플레이 시스템**으로 직접 이어졌다.

---

## 요약
- 섀넌(1950)은 체스를 **게임 트리**(노드=판 위치, 간선=합법 수)로 형식화하고, **분기 계수로 인한 조합 폭발** 때문에 완전 탐색이 불가능함을 보였다.
- 두 접근을 제시했다 — **고정 깊이 완전 탐색** vs **휴리스틱이 안내하는 선택적 탐색**.
- **비종료 위치를 평가하는 함수**의 필요성을 강조했다.
- 직접 구현하진 않았지만 **휴리스틱 평가 · 선택적 탐색 · 계산력 vs 도메인 지식 트레이드오프**를 예견했고, 이는 **미니맥스와 알파-베타로 이어졌다.**

## 다음 주제
- [06 Summary of Games that AI Plays (읽기자료).md](06%20Summary%20of%20Games%20that%20AI%20Plays%20%28%EC%9D%BD%EA%B8%B0%EC%9E%90%EB%A3%8C%29.md)
