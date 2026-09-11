# Analysis

## 개요
- 다익스트라 알고리즘(Dijkstra's algorithm)의 실행 시간을 우선순위 큐(priority queue)의 구현 방식(배열 vs 이진 힙)에 따라 분석한다.

## 내용

### 실행 시간을 결정하는 네 부분
1. **초기화**: 노드 수에 비례하는 시간, O(V).
2. **MakeQueue**: 우선순위 큐 구현 방식에 따라 다름.
3. **ExtractMin**: 메인 루프에서 정확히 V번 호출된다.
4. **ChangePriority**: 완화(relax)에 성공할 때마다 호출되며, 각 간선은 최대 한 번만 완화되므로 최대 E번 호출된다.
- 총 실행 시간 = O(V) [초기화] + MakeQueue 시간 + V × ExtractMin 시간 + E × ChangePriority 시간.

### 배열(array) 기반 구현
- MakeQueue: 배열을 한 번 훑으면 되므로 O(V).
- ExtractMin: 배열 전체를 훑어 최솟값을 찾아야 하므로 O(V). V번 호출되므로 O(V²).
- ChangePriority: 인덱스로 바로 접근해 값을 바꾸므로 O(1). E번 호출되므로 O(E).
- V² 이 V와 E(항상 V² 이하)보다 크므로, 총 실행 시간은 **O(V²)**.

### 이진 힙(binary heap) 기반 구현
- MakeQueue: 배열을 힙으로 만드는 데 O(V) (선형 시간).
- ExtractMin: O(log V). V번 호출되므로 O(V log V).
- ChangePriority: O(log V). E번 호출되므로 O(E log V).
- 총 실행 시간은 **O(V + E log V)**.
- 간선 수 E가 V²보다 훨씬 작은 그래프(희소 그래프)에서는 배열 방식의 O(V²)보다 훨씬 빠르다.
- 반대로 그래프가 거의 완전 그래프에 가까워 E가 V²에 근접하면, O(V + E log V)는 O(V² log V)에 가까워져 오히려 배열 방식보다 느려질 수 있다.

## 예시
| 구현 방식 | MakeQueue | ExtractMin(×V) | ChangePriority(×E) | 총 실행 시간 |
|---|---|---|---|---|
| 배열(array) | O(V) | O(V²) | O(E) | O(V²) |
| 이진 힙(binary heap) | O(V) | O(V log V) | O(E log V) | O(V + E log V) |

## 요약
- 다익스트라 알고리즘의 실행 시간은 초기화, MakeQueue, ExtractMin(V회), ChangePriority(E회)로 구성된다.
- 배열 기반 구현은 O(V²), 이진 힙 기반 구현은 O(V + E log V)이며, 그래프의 희소성(간선 수)에 따라 더 유리한 구현이 달라진다.
- 이로써 음이 아닌 가중치를 갖는 그래프에서 단일 출발 노드로부터 모든 노드까지의 최단 경로 문제를 완전히 해결했다.
