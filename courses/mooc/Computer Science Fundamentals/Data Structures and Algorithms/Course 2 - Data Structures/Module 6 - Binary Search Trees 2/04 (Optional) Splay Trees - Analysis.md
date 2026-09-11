# (Optional) Splay Trees: Analysis

## 개요
- 스플레이 트리의 상각 O(log n) 성능을 potential function(势 함수)을 이용해 실제로 증명하고, 스플레이 트리가 갖는 여러 추가적인 성능 보장(정적 최적성, dynamic finger bound, working set bound, dynamic optimality conjecture)을 소개한다.

## 내용
### 증명 목표와 Potential Function
- 목표: "깊이 D인 노드에 대해 O(D) 작업을 한 뒤 splay하는 것의 상각 비용이 O(log n)"이라는 정리를 증명한다.
- 상각 분석을 위해 potential function(势 함수) `Φ`를 도입한다. 많은 작업을 하더라도 그만큼 potential이 줄어들면 상쇄된다는 방식이다.
- **Rank**: 노드 `N`의 rank는 `N`의 서브트리 크기(size, 자손 노드 수)의 로그값이다.
- **Potential function**: 트리 전체의 potential `Φ`는 트리의 모든 노드 `N`에 대한 rank의 합이다.
- 직관: 트리가 균형 잡혀 있으면 potential은 노드 수에 거의 선형(linear)이다. 반대로 트리가 하나의 긴 체인처럼 극도로 불균형하면 potential은 최대 `n log n`까지 커질 수 있다.
- 즉, potential이 크다는 것은 트리가 불균형하다는 뜻이고, splay 연산으로 potential을 줄이는 것은 트리를 재균형시키는 것과 같은 의미다.

### 개별 연산이 Potential에 미치는 영향
- Splay 연산은 zig, zig-zig, zig-zag의 조합이므로, 각 연산이 potential을 어떻게 바꾸는지 따로 분석한다.
- **Zig**: 영향을 받는 노드는 `N`과 `P` 두 개뿐이고 나머지 노드의 서브트리는 바뀌지 않으므로 rank도 그대로다. potential 변화량은 (새 rank(P)) − (예전 rank(N))이며, 이는 (새 rank(N)) − (예전 rank(N)) 이하임을 보일 수 있다.
- **Zig-Zig**: potential 변화량이 최대 `3 × (새 rank(N) − 예전 rank(N)) − 2`임을 보인다.
  - 관찰 1: `N`의 새 rank는 `Q`의 예전 rank와 같고, 이 값이 식에서 가장 큰 항이다(`N`, `P`, `Q`가 각각 같은 종류의 서브트리들을 포함하기 때문).
  - 관찰 2: `N`의 예전 서브트리 크기와 `Q`의 새 서브트리 크기를 더하면, 이는 전체 서브트리 크기보다 1만큼 작은 값이 되므로, 로그를 취하면 "`N`의 예전 rank + `Q`의 새 rank ≤ 2 × (N의 새 rank) − 2"라는 부등식을 얻는다.
  - 이 부등식들을 결합하면 원하는 결론을 얻는다.
- **Zig-Zag**: 유사한 방식으로 potential 변화량이 최대 `2 × (새 rank(N) − 예전 rank(N)) − 2`임을 보일 수 있다.

### 전체 Splay 연산의 Potential 변화 (텔레스코핑)
- 하나의 splay 연산은 zig-zig, zig-zag 등을 여러 번 반복해 최종적으로 `N`이 루트가 될 때까지 이어진다.
- 전체 potential 변화량은 각 단계별 변화량의 합으로 위에서 구한 부등식들을 이어 붙이면 된다.
- 이 합이 텔레스코핑(telescoping)되어, 중간 단계의 rank 항들은 서로 상쇄되어 사라지고, 남는 것은 "3 × (최종 rank(N)) − (최초 rank(N))"과, 두 단계씩 올라갈 때마다 붙는 `-2` 항들의 합이다.
- `-2` 항들의 총합은 노드가 올라간 깊이(depth)에 비례하므로, potential 변화량은 대략 "O(log n) − 수행한 작업량(깊이)"이 된다.
- 결론: potential 변화량과 실제로 수행한 작업량을 더하면 O(log n)이 나온다. 즉, O(D) 작업 후 깊이 D인 노드를 splay하는 상각 비용은 O(log n)이다.

### 스플레이 트리의 추가적인 성능 보장
- **정적 최적성(static optimality) 유사 성질**: 모든 노드에 가중치(weight)를 부여해 합이 1이 되도록 하면, 노드 `N`에 접근하는 상각 비용은 `O(log(1/weight(N)))`이 된다. 어떤 가중치를 부여하든 알고리즘 변경 없이 이 보장이 자동으로 성립한다. 즉, 자주 접근하는 노드에 인위적으로 높은 가중치를 부여한다고 생각하면, 스플레이 트리는 자동으로 그런 노드에 대해 O(log n)보다 빠르게 동작한다.
- **Dynamic Finger Bound**: 노드에 접근하는 상각 비용은 `O(log(D+1))`이다. 여기서 `D`는 직전에 접근한 노드와 현재 접근하는 노드 사이의 순서상 거리(distance in ordering)다. 즉, 순서대로 노드를 나열하거나 검색하면(D=1) 연산당 상수 시간에 가깝게 동작한다.
- **Working Set Bound**: 노드 `N`에 접근하는 상각 비용은 `O(log(t+1))`이다. 여기서 `t`는 `N`이 마지막으로 접근된 이후 지난 시간(작업 수)이다. 즉, 최근에 접근한 노드를 다시 접근하면 O(log n)보다 훨씬 빠르다.
- **Dynamic Optimality Conjecture(동적 최적성 추측)**: 임의의 이진 탐색 트리 연산 시퀀스(삽입, 검색, 삭제 등)가 주어졌을 때, 그 시퀀스에 대해 완전히 최적화된 동적 탐색 트리가 있다고 하자. 이 추측은 스플레이 트리가 그 최적 트리보다 상수 배(constant factor) 이내로만 느리다는 것이다. 아직 추측(conjecture) 단계이지만, 사실이라면 스플레이 트리는 어떤 특정 연산 시퀀스에 대해서도 사실상 최선에 가까운 성능을 낸다는 뜻이다.

## 예시
- (본 강의는 수치 예시보다 rank·potential에 대한 부등식 증명 위주로 진행되며, 별도의 수치 예시는 제시되지 않는다.)

## 요약
- Potential function을 "노드별 서브트리 크기의 로그값(rank)의 합"으로 정의하면, splay 연산이 potential을 충분히 줄인다는 것을 zig/zig-zig/zig-zag 각각에 대해 증명할 수 있다.
- 이 부등식들을 텔레스코핑하면 "O(D) 작업 + 깊이 D 노드의 splay = O(log n) 상각 비용"이라는 핵심 정리가 증명된다.
- 스플레이 트리는 단순히 상각 O(log n)에 그치지 않고, 가중치 기반 보장, dynamic finger bound, working set bound 등 입력에 특정 구조(자주 접근되거나, 최근에 접근되거나, 순서상 가까운 노드에 반복 접근)가 있을 때 더 빨라지는 성질을 갖는다.
- Dynamic optimality conjecture는 스플레이 트리가 어떤 연산 시퀀스에 대해서도 최적에 가깝다는(상수 배 이내라는) 아직 증명되지 않은 추측이다.
