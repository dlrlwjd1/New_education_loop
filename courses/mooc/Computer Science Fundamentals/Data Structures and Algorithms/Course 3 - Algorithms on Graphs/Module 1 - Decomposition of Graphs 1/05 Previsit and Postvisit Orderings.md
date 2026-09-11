# Previsit and Postvisit Orderings

## 개요
- DFS를 실행하는 동안 정점을 방문한 순서를 기록하는 previsit(방문 전) / postvisit(방문 후) 번호를 정의한다.
- 이 번호들이 이후 강의들에서 다룰 여러 알고리즘의 기반이 되는 중요한 도구임을 소개한다.
- 두 정점의 previsit-postvisit 구간(interval)이 항상 중첩(nested)되거나 서로소(disjoint)이며, 결코 겹쳐 있을(interleaved) 수 없다는 보조정리(lemma)를 증명한다.

## 내용
### DFS에 정보를 추가하는 이유
- DFS 자체는 아무 값도 반환하지 않고 단지 정점들을 방문(visited) 상태로 표시할 뿐이다. 단순히 모든 정점을 방문 표시만 하고 싶다면 더 쉬운 방법도 있다.
- 실제로 유용한 것은 정점을 발견하는 "순서"이며, 이는 그래프의 연결 구조에 대한 정보를 담고 있다. (예: 이전 강의에서 연결 요소를 계산할 때 약간의 추가 정보를 활용한 것과 같은 맥락.)
- 그래서 Explore 함수에 previsit, postvisit이라는 두 개의 훅(hook)을 추가한다.

### previsit / postvisit 훅의 위치
- Explore(v)는 (1) v를 방문 표시한 뒤 previsit 블록을 실행하고, (2) 미방문 이웃들을 재귀적으로 탐색하는 루프를 돌고, (3) v 탐색을 마치기 직전에 postvisit 블록을 실행한다.

### 시계(clock)를 이용한 순서 기록
- clock이라는 전역 변수를 previsit 또는 postvisit이 실행될 때마다(즉 정점을 처음 발견할 때, 또는 정점 탐색을 완전히 마칠 때) 1씩 증가시킨다.
- 각 정점 v에 대해 previsit 시점의 clock 값을 pre(v), postvisit 시점의 clock 값을 post(v)로 기록한다.
- 예: 9개 정점을 가진 그래프에서 previsit/postvisit 번호가 1부터 18까지 순서대로 매겨지는 예시(첫 정점 pre=1 → 이웃 pre=2 → 그 이웃 pre=3 → 더 이상 갈 곳이 없어 post=4 → 이전 정점 post=5 → 등).
- 계산 방법: DFS 시작 시 clock을 1로 초기화. previsit 블록에서 pre(v) = clock, 이후 clock += 1. postvisit 블록에서 post(v) = clock, 이후 clock += 1. 이 과정은 실행 시간에 영향을 주지 않는다.

### 핵심 보조정리: 구간의 중첩 또는 서로소
- 임의의 두 정점 u, v에 대해 구간 [pre(u), post(u)]와 [pre(v), post(v)]는 항상 **중첩(nested)** 되거나 **서로소(disjoint)** 이며, **겹침(interleaved)** 은 불가능하다.
- **증명**: u가 v보다 먼저 처음 방문된다고 가정(일반성을 잃지 않음). 두 가지 경우가 있다.
  1. **u를 탐색하는 도중에 v를 처음 발견**: 이는 explore(v)가 explore(u)의 서브루틴으로 실행됨을 의미하며, 서브루틴 특성상 v의 탐색이 끝나야 u의 탐색도 끝날 수 있다. 따라서 post(u) > post(v)이고 두 구간은 중첩된다.
  2. **u의 탐색이 끝난 뒤에 v를 발견**: u와 v가 탐색 트리(tree)에서 서로 다른 가지(branch)에 있는 경우이며, u의 탐색이 완전히 끝난 뒤 v의 탐색이 시작되고 끝나므로 두 구간은 서로소다.
- 따라서 두 구간이 겹치는(interleaved) 경우는 존재할 수 없다.

## 예시
- 두 정점 A, B의 pre/post 번호 표가 주어졌을 때, 한쪽 표는 [pre(A), post(A)]와 [pre(B), post(B)]가 서로 겹쳐(interleaved) 있어 유효하지 않은 반면, 다른 쪽 표는 중첩 또는 서로소 관계를 만족해 유효한 pre/post 번호 조합이 된다.

## 요약
- previsit/postvisit 번호는 DFS 실행 중 각 정점을 처음 발견한 시점과 탐색을 완전히 마친 시점을 기록한 값이며, 전역 clock을 이용해 손쉽게 계산할 수 있다.
- 임의의 두 정점의 pre/post 구간은 항상 중첩되거나 서로소이며, 결코 겹칠 수 없다는 것이 핵심 보조정리다.
- 이 성질은 이후 강의(위상 정렬, 강결합요소 계산 등)에서 매우 중요하게 활용된다.
- 다음 강의부터는 무방향 그래프를 벗어나, 간선에 방향이 있는 방향 그래프(directed graph)를 다룬다.
