# Naive Algorithm

## 개요
- 음이 아닌 가중치를 갖는 그래프에서 출발 노드로부터 모든 노드까지의 최단 경로를 구하는 첫 번째(비최적) 알고리즘인 나이브 알고리즘(naive algorithm)을 소개한다.
- 이 알고리즘은 최적은 아니지만, 이후 다익스트라 알고리즘(Dijkstra's algorithm)으로 개선되는 토대가 되는 핵심 개념인 최적 부분 구조(optimal substructure)와 간선 완화(edge relaxation)를 다룬다.

## 내용

### 최적 부분 구조(optimal substructure)
- **최적 경로의 어떤 부분 경로(subpath)도 그 자체로 최적**이라는 성질이다. 즉 A에서 B로 가는 최적 경로 위의 임의의 두 노드 U, V 사이 구간도 U에서 V로 가는 최단 경로여야 한다.
- 증명(귀류법): 만약 U-V 구간이 최적이 아니라면, 그 구간을 더 나은 경로로 교체해 A-B 전체 경로를 더 짧게 만들 수 있다. 이는 애초에 A-B 경로가 최적이었다는 가정과 모순된다.
- **따름정리**: A에서 B로 가는 최단 경로에서 B 바로 이전 노드가 U라면, `distance(A, B) = distance(A, U) + weight(U, B)`가 성립한다. A-U 구간도 최단 경로이므로 그 길이는 정확히 `distance(A, U)`이기 때문이다.

### dist 값과 간선 완화(edge relaxation)
- `dist[v]`는 시작 노드 A에서 노드 v까지의 **거리에 대한 상한(upper bound)** 을 저장하는 배열이다. 초기값은 모두 무한대(infinity)이며, 알고리즘이 진행되며 점차 줄어든다.
- 이 상한은 임의의 값이 아니라 항상 **실제로 존재하는 어떤 경로의 길이**로 뒷받침된다. 즉 `dist[v]`는 이미 발견한 A→v 경로 중 하나의 길이다.
- **완화(relax) 절차**: 간선 (u, v)에 대해 `dist[v] > dist[u] + weight(u, v)`이면, A→u 경로 뒤에 간선 (u,v)를 이어 붙여 v로 가는 더 짧은 경로를 만들 수 있다는 뜻이므로 `dist[v] = dist[u] + weight(u, v)`로 갱신한다.
- 동시에 `prev[v] = u`로 설정해, 현재까지 알려진 A→v 최적 경로에서 v 바로 이전 노드를 기억해 둔다. 이 prev 값들을 따라가면 나중에 최단 경로 트리(shortest path tree)를 복원할 수 있다.

### 나이브 알고리즘(naive algorithm)의 동작
- 모든 노드의 `dist`를 무한대로, `prev`를 "가리키는 곳 없음"으로 초기화하고, 시작 노드 A의 `dist`만 0으로 설정한다.
- 이후 그래프의 모든 간선을 반복적으로 완화(relax)를 시도하며, **적어도 하나의 dist 값이 바뀌는 동안 계속 반복**한다. 더 이상 어떤 간선을 완화해도 아무것도 바뀌지 않으면 종료한다.

### 정확성 증명(proof of correctness)
- **정리**: 나이브 알고리즘이 종료하면 모든 `dist` 값은 실제 최단 거리와 정확히 일치한다.
- 증명(귀류법): 어떤 노드 V에서 `dist[V]`가 실제 거리보다 크다고 가정한다. A에서 V로 가는 최단 경로 위에서, `dist` 값이 실제 거리보다 처음으로 커지는 노드를 U라 하고, U 바로 이전 노드를 P라 하자(U ≠ A이므로 P가 존재한다).
- P는 U보다 A에 더 가까우므로 가정에 의해 `dist[P]`는 이미 정확하다. 최적 부분 구조에 의해 `distance(A, U) = distance(A, P) + weight(P, U) = dist[P] + weight(P, U)`가 성립한다.
- 그런데 `dist[U] > distance(A, U) = dist[P] + weight(P, U)`이므로, 간선 (P, U)는 여전히 완화될 수 있다는 뜻이다. 이는 "더 이상 완화할 수 있는 간선이 없다"는 종료 조건과 모순된다. 따라서 모든 `dist` 값은 정확하다.
- 이 알고리즘의 실행 시간은 분석하지 않는다. 최적이 아니기 때문이며, 다음 영상에서 더 나은 알고리즘(다익스트라 알고리즘)을 다룬다.

## 예시
```text
초기화:
  dist[A] = 0, dist[v] = ∞ (v ≠ A)
  prev[v] = None (모든 v)

완화 절차 relax(u, v):
  if dist[v] > dist[u] + weight(u, v):
      dist[v] = dist[u] + weight(u, v)
      prev[v] = u

나이브 알고리즘:
  repeat:
      changed = False
      for each edge (u, v) in G:
          if relax(u, v)를 통해 dist[v]가 갱신되면:
              changed = True
  until changed == False
```

## 요약
- 최적 부분 구조: 최단 경로의 부분 경로도 최단 경로이며, 이로부터 `distance(A,B) = distance(A,U) + weight(U,B)`가 도출된다.
- `dist` 값은 항상 실제 경로로 뒷받침되는 거리의 상한이며, 간선 완화(relax)를 통해 점차 줄어든다.
- 나이브 알고리즘은 더 이상 완화할 간선이 없을 때까지 모든 간선을 반복 완화하며, 종료 시 모든 dist 값이 정확한 최단 거리가 됨을 귀류법으로 증명할 수 있다.
