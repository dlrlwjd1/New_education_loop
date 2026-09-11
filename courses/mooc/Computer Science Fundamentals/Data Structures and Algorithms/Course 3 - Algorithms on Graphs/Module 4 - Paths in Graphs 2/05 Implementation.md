# Implementation

## 개요
- 다익스트라 알고리즘(Dijkstra's algorithm)을 우선순위 큐(priority queue)를 이용해 실제로 구현하는 방법을 다룬다.
- 이전 코스(자료구조)에서 배운 우선순위 큐의 세 가지 연산을 다익스트라 알고리즘에 어떻게 활용하는지 설명한다.

## 내용

### 필요한 우선순위 큐 연산
1. **MakeQueue**: 주어진 키(key) 집합으로 우선순위 큐를 만든다.
2. **ExtractMin**: 큐에서 키 값이 최소인 원소를 꺼내면서 동시에 큐에서 제거한다.
3. **ChangePriority**: 큐에 있는 임의의 원소의 키 값을 변경한다.
- 우선순위 큐를 어떻게 구현하느냐(배열 또는 이진 힙 등)에 따라 다익스트라 알고리즘 전체의 실행 시간이 크게 달라진다(실행 시간 분석은 다음 영상에서 다룬다).

### 초기화
- 모든 노드의 `dist` 값을 +무한대로, `prev` 값을 "가리키는 곳 없음"으로 초기화한다.
- 출발 노드의 `dist`만 0으로 설정한다.
- 모든 노드의 dist 값을 키로 하는 우선순위 큐를 생성한다(`MakeQueue`). 즉 출발 노드의 키는 0, 나머지는 모두 +무한대다.

### 메인 루프
- 우선순위 큐가 빌 때까지 다음을 반복한다.
  1. `ExtractMin`으로 큐에서 dist 값이 가장 작은 노드 u를 꺼낸다. 이 시점에서 u의 dist 값은 확정된 최단 거리로 간주한다(정확성은 다음 영상에서 증명).
  2. u에서 나가는 모든 간선 (u, v)에 대해 완화(relax)를 시도한다.
  3. 완화에 성공하면(`dist[v]`가 갱신되면) `prev[v] = u`로 설정하고, **큐 안의 노드 v의 키 값도 갱신된 dist[v]로 맞춰야 하므로** `ChangePriority`를 호출한다.
- 큐에 남아 있는 모든 노드는 아직 알려진 영역(known region) 밖에 있는 노드들이며, 매 반복마다 그중 dist가 최소인 노드가 다음으로 확정된다.
- 우선순위 큐가 비어 있으면 종료하며, 이 시점에서 모든 `dist`는 정확한 최단 거리, 모든 `prev`는 최단 경로 트리(shortest path tree) 상의 이전 노드를 가리킨다.

## 예시
```text
Dijkstra(G, S):
    for all u in V(G):
        dist[u] = ∞
        prev[u] = None
    dist[S] = 0
    H = MakeQueue(V(G))   // dist 값을 키로 사용

    while H is not empty:
        u = ExtractMin(H)
        for all (u, v) in E(G):
            relax(u, v)     // 완화에 성공하면:
            //   dist[v] = dist[u] + weight(u, v)
            //   prev[v] = u
            //   ChangePriority(H, v, dist[v])
```

## 요약
- 다익스트라 알고리즘은 우선순위 큐의 MakeQueue, ExtractMin, ChangePriority 세 연산만으로 구현할 수 있다.
- ExtractMin으로 확정 노드를 하나씩 꺼내고, 그 노드에서 나가는 간선을 완화하면서 갱신된 dist 값을 ChangePriority로 큐에 반영한다.
- 정확성 증명과 실행 시간 분석은 각각 다음 두 영상에서 다룬다.
