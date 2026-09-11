# 07 Incremental Heuristics (읽기자료)

## 개요
- 강좌: Intelligent Agents and Search Algorithms (University of Colorado Boulder)
- 모듈: Module 3 — Informed Searches
- [MOOC 원본 자료](https://www.mooc.org/learn/intelligent-agents-and-search-algorithms/supplement/H4JBH/incremental-heuristics)
- 형식: **읽기 자료(reading) + 논문 PDF** (`IncrementalHeuristicSearch`)
- **증분 휴리스틱 탐색(incremental heuristic search)** — 환경이 변하는 상황에서 A*를 처음부터 다시 돌리지 않는 방법.

---

## 내용

### 다루는 문제
**간선 비용·장애물·목표가 시간에 따라 변할 수 있는 동적 환경**을 위한 A* 변형이다.

> 변화가 생길 때마다 **A\*를 처음부터 다시 시작하는 대신**, 이전에 계산해 둔 **탐색 트리·휴리스틱 값·비용 추정치를 재활용**한다. 그 결과 **재계획(replanning) 시간이 극적으로 줄면서도 최적성 또는 유계 준최적성은 유지된다.**

### 저자들이 나눈 분류
증분 휴리스틱 탐색 방법을 몇 가지 개념적 범주로 정리한다.

1. **비용이 바뀌었을 때 이전 탐색 결과를 수리(repair)하는 알고리즘**
2. **여러 번의 탐색에 걸쳐 휴리스틱 추정치를 개선하는 접근**
3. **계획과 실행을 교차(interleave)하는 방법**

대표 알고리즘으로 **LPA\* (Lifelong Planning A\*)** 가 소개된다 — 증분 갱신이 어떻게 **정확성을 유지하면서 환경 변화에 효율적으로 대응**하는지 보여 준다.

### 이 강좌와의 연결
- 강좌에서 다룬 기초 알고리즘(**BFS · DFS · UCS · A\* · 휴리스틱**)의 연장선이다.
- 핵심은 **탐색을 진행 중인 과정(ongoing process)으로 보는 관점**이다.
- **허용 가능성 · 일관성 · 휴리스틱 안내 · 최적성** 같은 핵심 개념이 **재계획과 실행이 얽힌 더 현실적인 상황**에 적용된다.
- 고전 탐색이 **실시간 계획 · 로보틱스 · 자율 에이전트** 같은 고급 주제에서 어떻게 나타나는지 보여 준다.

---

## 요약
- **증분 휴리스틱 탐색** = 환경이 바뀔 때 A*를 재시작하지 않고 **이전 탐색 결과를 재활용**하는 A* 변형군.
- 세 범주: **결과 수리 · 휴리스틱 개선 · 계획과 실행의 교차.** 대표 알고리즘은 **LPA\***.
- [Module 2의 견고성(robustness)](../Module%202%20-%20Uninformed%20Searches/04%20Evaluating%20Search%20Algorithms.md)에서 언급된 **동적 A\***가 바로 이 계열이다.
- 재계획이 필요한 **로보틱스·자율주행**에서 실제로 쓰인다.

## 다음 주제
- Module 4 — [지역 탐색과 최적화](../Module%204%20-%20Informed%20Local%20Searches/01%20Intro%20to%20State%20Search%20Problems.md)
