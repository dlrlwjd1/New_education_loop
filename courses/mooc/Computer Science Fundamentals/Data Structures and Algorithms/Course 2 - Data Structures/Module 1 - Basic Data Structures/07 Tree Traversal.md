# Tree Traversal

## 개요
- 트리 순회(tree traversal)는 트리의 노드들을 특정 순서로 방문하는 것을 말한다.
- 크게 깊이 우선 탐색(depth-first search, DFS)과 너비 우선 탐색(breadth-first search, BFS) 두 가지 방식이 있다.
- DFS는 한 서브트리를 완전히 탐색한 뒤 다음 형제 서브트리로 넘어가고, BFS는 같은 레벨의 모든 노드를 먼저 방문한 뒤 다음 레벨로 넘어간다.

## 내용

### 깊이 우선 탐색(DFS): 중위 순회(in-order traversal)
- 이진 트리에서만 명확하게 정의되는 순회 방식이다.
- 순서: nil이면 아무것도 하지 않음 → 왼쪽 서브트리 순회 → 현재 노드 방문(visit) → 오른쪽 서브트리 순회.
- 이진 탐색 트리(binary search tree)에 적용하면 노드들을 정렬된(알파벳/오름차순) 순서로 얻을 수 있다. 왼쪽 자식의 모든 값이 노드보다 작거나 같다는 이진 탐색 트리의 성질 때문이다.
- 예를 들어 표현식 트리에서는 리프에서부터 올라가며 계산하는 방식과 유사한 개념으로 볼 수 있다.

### 깊이 우선 탐색(DFS): 전위 순회(pre-order traversal)
- nil이면 반환 → 현재 노드(key)를 먼저 방문 → 왼쪽 서브트리 순회 → 오른쪽 서브트리 순회.
- 중위 순회와 달리 이진 트리뿐 아니라 자식이 여러 개인 일반적인 트리에도 명확하게 정의된다(자식이 3개 이상이면 "왼쪽-노드-오른쪽" 순서가 모호하기 때문).

### 깊이 우선 탐색(DFS): 후위 순회(post-order traversal)
- 전위 순회와 동일한 방문 대상을 다루지만, 노드 자신을 방문하는 시점만 자식들을 모두 처리한 다음으로(맨 마지막에) 옮긴 것이다.
- 즉 nil이면 반환 → 왼쪽 서브트리 순회 → 오른쪽 서브트리 순회 → 현재 노드 방문.
- 전위 순회와 마찬가지로 일반적인(자식이 여럿인) 트리에도 적용 가능하다.
- 재귀 호출 자체가 스택(콜 스택, call stack)을 암묵적으로 사용하고 있다는 점에 유의해야 한다 — 재귀 호출마다 스택 프레임이 쌓이며 현재 위치 정보를 저장한다.

### 너비 우선 탐색(BFS): 레벨 순회(level traversal)
- 스택 대신 큐(queue)를 사용한다.
- 알고리즘: 큐를 만들고 루트를 큐에 넣는다. 큐가 빌 때까지 다음을 반복한다 — 큐에서 노드를 하나 꺼내(dequeue) 방문(출력)하고, 왼쪽 자식이 있으면 큐에 넣고(enqueue), 오른쪽 자식이 있으면 큐에 넣는다.
- 이 방식은 자연스럽게 레벨(level) 순서대로 노드를 처리하게 된다 — 먼저 큐에 들어간 상위 레벨 노드들이 하위 레벨 노드들보다 먼저 처리되기 때문이다.
- 큐를 직접 사용하면 반복적(iterative)으로 BFS를 구현할 수 있듯, 스택을 직접 사용하면 DFS도 재귀 없이 반복적으로 구현할 수 있다(추가로 스택이라는 별도 자료구조가 필요함).

## 예시
- 이진 탐색 트리(Les를 루트로, Cathy·Sam이 그 자식, Alex·Frank가 Cathy의 자식, Nancy·Violet이 Sam의 자식, Tony·Wendy가 Violet의 자식인 구조)에 대한 각 순회 결과:
  - 중위 순회(in-order): Alex, Cathy, Frank, Les, Nancy, Sam, Tony, Violet, Wendy (정렬된 순서)
  - 전위 순회(pre-order): Les, Cathy, Alex, Frank, Sam, Nancy, Violet, Tony, Wendy
  - 후위 순회(post-order): Alex, Frank, Cathy, Nancy, Tony, Wendy, Violet, Sam, Les
  - 레벨 순회(BFS): Les → Cathy, Sam → Alex, Frank, Nancy, Violet → Tony, Wendy (레벨 순서대로)
- BFS 큐 상태 변화 예시: 큐에 [Les]로 시작 → Les를 꺼내 방문하고 자식 Cathy, Sam을 큐에 추가 → Cathy를 꺼내 방문하고 자식 Alex, Frank를 큐 뒤에 추가 → 이런 식으로 레벨 3(Alex, Frank, Nancy, Violet)의 노드들이 레벨 4(Tony, Wendy) 노드들보다 먼저 큐에 들어가 먼저 처리된다.

## 요약
- 트리 순회는 크게 깊이 우선(DFS)과 너비 우선(BFS) 두 가지로 나뉜다.
- DFS에는 중위(in-order, 이진 트리 전용, 이진 탐색 트리에서는 정렬된 순서를 출력), 전위(pre-order, 노드를 먼저 방문), 후위(post-order, 노드를 마지막에 방문)의 세 가지 순회가 있으며, 전위·후위는 일반 트리에도 적용 가능하다.
- BFS(레벨 순회)는 큐(queue)를 사용해 레벨 단위로 노드를 처리하며, DFS의 재귀 호출은 암묵적으로 스택(call stack)을 사용한다.
- 트리는 재귀적 구조이기 때문에 DFS 계열 순회는 재귀로 구현하는 것이 자연스럽지만, BFS는 재귀가 아닌 큐 기반의 반복적 방식으로 구현한다.
