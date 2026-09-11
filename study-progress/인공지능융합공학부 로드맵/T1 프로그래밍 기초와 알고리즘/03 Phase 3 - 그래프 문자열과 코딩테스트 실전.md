# T1 Phase 3 — 그래프·문자열과 코딩테스트 실전

> 학부 교과 **코딩테스트기초(2학년 1학기)** 의 뒤 절반

- 목표: 그래프로 모델링되는 문제를 알아보고, 제한 시간 안에 푼다.
- 분량: 약 20시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- "도시와 도로", "작업과 선행 조건" 같은 서술을 그래프로 바꿔 그린다
- BFS·DFS·다익스트라·벨만포드를 문제 조건(가중치 유무, 음수 간선)에 따라 골라 쓴다
- 최소 신장 트리(MST)가 필요한 상황을 알아본다
- 문자열 검색을 O(n+m)에 하는 방법을 안다
- 기술 면접에서 풀이를 **말로 설명하면서** 코드를 쓴다

> **Phase 4와의 관계**: 여기서 배우는 BFS/DFS/다익스트라가 [Phase 4](04%20Phase%204%20-%20%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98%20%ED%83%90%EC%83%89%EA%B3%BC%20%EC%B5%9C%EC%A0%81%ED%99%94.md)의 A* 탐색으로 그대로 이어진다. 순서를 바꾸지 않는다.

## 3-A. 그래프 알고리즘

메인: Data Structures and Algorithms, `Course 3 - Algorithms on Graphs`

Module 1~2 — 그래프 분해(연결 요소·위상 정렬·강한 연결 요소)

- [ ] [01 Graph Basics.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%201%20-%20Decomposition%20of%20Graphs%201/01%20Graph%20Basics.md)
- [ ] [02 Representing Graphs.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%201%20-%20Decomposition%20of%20Graphs%201/02%20Representing%20Graphs.md)
- [ ] [03 Exploring Graphs.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%201%20-%20Decomposition%20of%20Graphs%201/03%20Exploring%20Graphs.md)
- [ ] [04 Connectivity.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%201%20-%20Decomposition%20of%20Graphs%201/04%20Connectivity.md)
- [ ] [05 Previsit and Postvisit Orderings.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%201%20-%20Decomposition%20of%20Graphs%201/05%20Previsit%20and%20Postvisit%20Orderings.md)
- [ ] [01 Directed Acyclic Graphs.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%202%20-%20Decomposition%20of%20Graphs%202/01%20Directed%20Acyclic%20Graphs.md)
- [ ] [02 Topological Sort.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%202%20-%20Decomposition%20of%20Graphs%202/02%20Topological%20Sort.md)
- [ ] [03 Strongly Connected Components.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%202%20-%20Decomposition%20of%20Graphs%202/03%20Strongly%20Connected%20Components.md)
- [ ] [04 Computing Strongly Connected Components.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%202%20-%20Decomposition%20of%20Graphs%202/04%20Computing%20Strongly%20Connected%20Components.md)

Module 3~4 — 최단 경로. **BFS → 다익스트라 → 벨만포드 순서로 "왜 더 필요한가"가 쌓인다**

- [ ] [01 Applications.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%203%20-%20Paths%20in%20Graphs%201/01%20Applications.md)
- [ ] [02 Paths and Distances.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%203%20-%20Paths%20in%20Graphs%201/02%20Paths%20and%20Distances.md)
- [ ] [03 Breadth-First Search.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%203%20-%20Paths%20in%20Graphs%201/03%20Breadth-First%20Search.md)
- [ ] [04 Breadth-First Search (continued).md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%203%20-%20Paths%20in%20Graphs%201/04%20Breadth-First%20Search%20%28continued%29.md)
- [ ] [05 Implementation and Analysis.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%203%20-%20Paths%20in%20Graphs%201/05%20Implementation%20and%20Analysis.md)
- [ ] [06 BFS Properties.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%203%20-%20Paths%20in%20Graphs%201/06%20BFS%20Properties.md)
- [ ] [07 Correct Distances.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%203%20-%20Paths%20in%20Graphs%201/07%20Correct%20Distances.md)
- [ ] [08 Shortest Path Tree.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%203%20-%20Paths%20in%20Graphs%201/08%20Shortest%20Path%20Tree.md)
- [ ] [01 Fastest Route.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%204%20-%20Paths%20in%20Graphs%202/01%20Fastest%20Route.md)
- [ ] [02 Naive Algorithm.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%204%20-%20Paths%20in%20Graphs%202/02%20Naive%20Algorithm.md)
- [ ] [03 Dijkstra's Algorithm.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%204%20-%20Paths%20in%20Graphs%202/03%20Dijkstra's%20Algorithm.md)
- [ ] [04 Dijkstra Example.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%204%20-%20Paths%20in%20Graphs%202/04%20Dijkstra%20Example.md)
- [ ] [05 Implementation.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%204%20-%20Paths%20in%20Graphs%202/05%20Implementation.md)
- [ ] [06 Proof of Correctness.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%204%20-%20Paths%20in%20Graphs%202/06%20Proof%20of%20Correctness.md)
- [ ] [07 Analysis.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%204%20-%20Paths%20in%20Graphs%202/07%20Analysis.md)
- [ ] [08 Currency Exchange.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%204%20-%20Paths%20in%20Graphs%202/08%20Currency%20Exchange.md)
- [ ] [09 Reduction to Shortest Paths.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%204%20-%20Paths%20in%20Graphs%202/09%20Reduction%20to%20Shortest%20Paths.md)
- [ ] [10 Bellman-Ford Algorithm.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%204%20-%20Paths%20in%20Graphs%202/10%20Bellman-Ford%20Algorithm.md)
- [ ] [11 Proof of Correctness.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%204%20-%20Paths%20in%20Graphs%202/11%20Proof%20of%20Correctness.md)
- [ ] [12 Negative Cycles.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%204%20-%20Paths%20in%20Graphs%202/12%20Negative%20Cycles.md)
- [ ] [13 Infinite Arbitrage.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%204%20-%20Paths%20in%20Graphs%202/13%20Infinite%20Arbitrage.md)

Module 5 — 최소 신장 트리

- [ ] [01 Building a Network.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%205%20-%20Minimum%20Spanning%20Trees/01%20Building%20a%20Network.md)
- [ ] [02 Greedy Algorithms.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%205%20-%20Minimum%20Spanning%20Trees/02%20Greedy%20Algorithms.md)
- [ ] [03 Cut Property.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%205%20-%20Minimum%20Spanning%20Trees/03%20Cut%20Property.md)
- [ ] [04 Kruskal's Algorithm.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%205%20-%20Minimum%20Spanning%20Trees/04%20Kruskal's%20Algorithm.md)
- [ ] [05 Prim's Algorithm.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%205%20-%20Minimum%20Spanning%20Trees/05%20Prim's%20Algorithm.md)

Module 6 — 고급 최단 경로 (선택. 시간이 없으면 건너뛴다)

- [ ] [01 Programming Project - Introduction.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%206%20-%20Advanced%20Shortest%20Paths%20Project%20%28Optional%29/01%20Programming%20Project%20-%20Introduction.md)
- [ ] [02 Bidirectional Search.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%206%20-%20Advanced%20Shortest%20Paths%20Project%20%28Optional%29/02%20Bidirectional%20Search.md)
- [ ] [03 Six Handshakes.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%206%20-%20Advanced%20Shortest%20Paths%20Project%20%28Optional%29/03%20Six%20Handshakes.md)
- [ ] [04 Bidirectional Dijkstra.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%206%20-%20Advanced%20Shortest%20Paths%20Project%20%28Optional%29/04%20Bidirectional%20Dijkstra.md)
- [ ] [05 Finding Shortest Path after Meeting in the Middle.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%206%20-%20Advanced%20Shortest%20Paths%20Project%20%28Optional%29/05%20Finding%20Shortest%20Path%20after%20Meeting%20in%20the%20Middle.md)
- [ ] [06 Computing the Distance.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%206%20-%20Advanced%20Shortest%20Paths%20Project%20%28Optional%29/06%20Computing%20the%20Distance.md)
- [ ] [07 A Algorithm.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%206%20-%20Advanced%20Shortest%20Paths%20Project%20%28Optional%29/07%20A%20Algorithm.md)
- [ ] [08 Performance of A.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%206%20-%20Advanced%20Shortest%20Paths%20Project%20%28Optional%29/08%20Performance%20of%20A.md)
- [ ] [09 Bidirectional A.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%206%20-%20Advanced%20Shortest%20Paths%20Project%20%28Optional%29/09%20Bidirectional%20A.md)
- [ ] [10 Potential Functions and Lower Bounds.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%206%20-%20Advanced%20Shortest%20Paths%20Project%20%28Optional%29/10%20Potential%20Functions%20and%20Lower%20Bounds.md)
- [ ] [11 Landmarks (Optional).md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%206%20-%20Advanced%20Shortest%20Paths%20Project%20%28Optional%29/11%20Landmarks%20%28Optional%29.md)
- [ ] [12 Highway Hierarchies and Node Importance.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%206%20-%20Advanced%20Shortest%20Paths%20Project%20%28Optional%29/12%20Highway%20Hierarchies%20and%20Node%20Importance.md)
- [ ] [13 Preprocessing.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%206%20-%20Advanced%20Shortest%20Paths%20Project%20%28Optional%29/13%20Preprocessing.md)
- [ ] [14 Witness Search.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%206%20-%20Advanced%20Shortest%20Paths%20Project%20%28Optional%29/14%20Witness%20Search.md)
- [ ] [15 Query.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%206%20-%20Advanced%20Shortest%20Paths%20Project%20%28Optional%29/15%20Query.md)
- [ ] [16 Proof of Correctness.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%206%20-%20Advanced%20Shortest%20Paths%20Project%20%28Optional%29/16%20Proof%20of%20Correctness.md)
- [ ] [17 Node Ordering.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%203%20-%20Algorithms%20on%20Graphs/Module%206%20-%20Advanced%20Shortest%20Paths%20Project%20%28Optional%29/17%20Node%20Ordering.md)

## 3-B. 문자열 알고리즘

메인: Data Structures and Algorithms, `Course 4 - Algorithms on Strings`

코딩테스트 관점에서는 **Module 3(KMP)이 가장 자주 나온다.** 접미사 트리·배열(Module 1·2·4)은 개념만 잡고 넘어가도 된다.

- [ ] [01 Welcome.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%201%20-%20Suffix%20Trees/01%20Welcome.md)
- [ ] [02 From Genome Sequencing to Pattern Matching.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%201%20-%20Suffix%20Trees/02%20From%20Genome%20Sequencing%20to%20Pattern%20Matching.md)
- [ ] [03 Brute Force Approach to Pattern Matching.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%201%20-%20Suffix%20Trees/03%20Brute%20Force%20Approach%20to%20Pattern%20Matching.md)
- [ ] [04 Herding Patterns into Trie.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%201%20-%20Suffix%20Trees/04%20Herding%20Patterns%20into%20Trie.md)
- [ ] [05 Herding Text into Suffix Trie.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%201%20-%20Suffix%20Trees/05%20Herding%20Text%20into%20Suffix%20Trie.md)
- [ ] [06 Suffix Trees.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%201%20-%20Suffix%20Trees/06%20Suffix%20Trees.md)
- [ ] [01 Burrows-Wheeler Transform.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%202%20-%20Burrows-Wheeler%20Transform%20and%20Suffix%20Arrays/01%20Burrows-Wheeler%20Transform.md)
- [ ] [02 Inverting Burrows-Wheeler Transform.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%202%20-%20Burrows-Wheeler%20Transform%20and%20Suffix%20Arrays/02%20Inverting%20Burrows-Wheeler%20Transform.md)
- [ ] [03 Using BWT for Pattern Matching.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%202%20-%20Burrows-Wheeler%20Transform%20and%20Suffix%20Arrays/03%20Using%20BWT%20for%20Pattern%20Matching.md)
- [ ] [04 Suffix Arrays.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%202%20-%20Burrows-Wheeler%20Transform%20and%20Suffix%20Arrays/04%20Suffix%20Arrays.md)
- [ ] [05 Approximate Pattern Matching.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%202%20-%20Burrows-Wheeler%20Transform%20and%20Suffix%20Arrays/05%20Approximate%20Pattern%20Matching.md)
- [ ] [01 Exact Pattern Matching.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%203%20-%20Knuth%E2%80%93Morris%E2%80%93Pratt%20Algorithm/01%20Exact%20Pattern%20Matching.md)
- [ ] [02 Skipping Positions.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%203%20-%20Knuth%E2%80%93Morris%E2%80%93Pratt%20Algorithm/02%20Skipping%20Positions.md)
- [ ] [03 Safe Shift.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%203%20-%20Knuth%E2%80%93Morris%E2%80%93Pratt%20Algorithm/03%20Safe%20Shift.md)
- [ ] [04 Prefix Function.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%203%20-%20Knuth%E2%80%93Morris%E2%80%93Pratt%20Algorithm/04%20Prefix%20Function.md)
- [ ] [05 Computing Prefix Function.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%203%20-%20Knuth%E2%80%93Morris%E2%80%93Pratt%20Algorithm/05%20Computing%20Prefix%20Function.md)
- [ ] [06 Implementation.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%203%20-%20Knuth%E2%80%93Morris%E2%80%93Pratt%20Algorithm/06%20Implementation.md)
- [ ] [07 Analysis.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%203%20-%20Knuth%E2%80%93Morris%E2%80%93Pratt%20Algorithm/07%20Analysis.md)
- [ ] [08 Knuth-Morris-Pratt Algorithm.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%203%20-%20Knuth%E2%80%93Morris%E2%80%93Pratt%20Algorithm/08%20Knuth-Morris-Pratt%20Algorithm.md)
- [ ] [01 Suffix Array.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%204%20-%20Constructing%20Suffix%20Arrays%20and%20Suffix%20Trees/01%20Suffix%20Array.md)
- [ ] [02 General Construction Strategy.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%204%20-%20Constructing%20Suffix%20Arrays%20and%20Suffix%20Trees/02%20General%20Construction%20Strategy.md)
- [ ] [03 Initialization.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%204%20-%20Constructing%20Suffix%20Arrays%20and%20Suffix%20Trees/03%20Initialization.md)
- [ ] [04 Sort Doubled Cyclic Shifts.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%204%20-%20Constructing%20Suffix%20Arrays%20and%20Suffix%20Trees/04%20Sort%20Doubled%20Cyclic%20Shifts.md)
- [ ] [05 SortDouble Implementation.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%204%20-%20Constructing%20Suffix%20Arrays%20and%20Suffix%20Trees/05%20SortDouble%20Implementation.md)
- [ ] [06 Updating Classes.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%204%20-%20Constructing%20Suffix%20Arrays%20and%20Suffix%20Trees/06%20Updating%20Classes.md)
- [ ] [07 UpdateClasses Implementation.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%204%20-%20Constructing%20Suffix%20Arrays%20and%20Suffix%20Trees/07%20UpdateClasses%20Implementation.md)
- [ ] [08 Building Suffix Array.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%204%20-%20Constructing%20Suffix%20Arrays%20and%20Suffix%20Trees/08%20Building%20Suffix%20Array.md)
- [ ] [09 Suffix Array and Suffix Tree.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%204%20-%20Constructing%20Suffix%20Arrays%20and%20Suffix%20Trees/09%20Suffix%20Array%20and%20Suffix%20Tree.md)
- [ ] [10 LCP Array.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%204%20-%20Constructing%20Suffix%20Arrays%20and%20Suffix%20Trees/10%20LCP%20Array.md)
- [ ] [11 Computing the LCP Array.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%204%20-%20Constructing%20Suffix%20Arrays%20and%20Suffix%20Trees/11%20Computing%20the%20LCP%20Array.md)
- [ ] [12 ComputeLCPArray Implementation.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%204%20-%20Constructing%20Suffix%20Arrays%20and%20Suffix%20Trees/12%20ComputeLCPArray%20Implementation.md)
- [ ] [13 Analysis.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%204%20-%20Constructing%20Suffix%20Arrays%20and%20Suffix%20Trees/13%20Analysis.md)
- [ ] [14 Constructing Suffix Tree.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%204%20-%20Constructing%20Suffix%20Arrays%20and%20Suffix%20Trees/14%20Constructing%20Suffix%20Tree.md)
- [ ] [15 Implementation.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%204%20-%20Constructing%20Suffix%20Arrays%20and%20Suffix%20Trees/15%20Implementation.md)
- [ ] [16 Analysis.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%204%20-%20Algorithms%20on%20Strings/Module%204%20-%20Constructing%20Suffix%20Arrays%20and%20Suffix%20Trees/16%20Analysis.md)

## 3-C. 기술 면접 실전

함께 보기: Meta Front-End Developer / Meta Database Engineer의 코딩 인터뷰 준비 모듈 (같은 내용이 두 강좌에 들어 있다 — 한쪽만 봐도 된다)



- [ ] [01 Introduction to the course.md](../../../courses/mooc/Mobile%20Development/Meta%20iOS%20Developer/12%20Coding%20Interview%20Preparation/Module%201%20-%20Introduction%20to%20the%20Coding%20Interview/01%20Introduction%20to%20the%20course.md)
- [ ] [02 Introduction to the technical recruitment process.md](../../../courses/mooc/Mobile%20Development/Meta%20iOS%20Developer/12%20Coding%20Interview%20Preparation/Module%201%20-%20Introduction%20to%20the%20Coding%20Interview/02%20Introduction%20to%20the%20technical%20recruitment%20process.md)
- [ ] [03 What is a coding interview.md](../../../courses/mooc/Mobile%20Development/Meta%20iOS%20Developer/12%20Coding%20Interview%20Preparation/Module%201%20-%20Introduction%20to%20the%20Coding%20Interview/03%20What%20is%20a%20coding%20interview.md)
- [ ] [04 Communication.md](../../../courses/mooc/Mobile%20Development/Meta%20iOS%20Developer/12%20Coding%20Interview%20Preparation/Module%201%20-%20Introduction%20to%20the%20Coding%20Interview/04%20Communication.md)
- [ ] [05 What to expect from a technical interview.md](../../../courses/mooc/Mobile%20Development/Meta%20iOS%20Developer/12%20Coding%20Interview%20Preparation/Module%201%20-%20Introduction%20to%20the%20Coding%20Interview/05%20What%20to%20expect%20from%20a%20technical%20interview.md)
- [ ] [06 Binary.md](../../../courses/mooc/Mobile%20Development/Meta%20iOS%20Developer/12%20Coding%20Interview%20Preparation/Module%201%20-%20Introduction%20to%20the%20Coding%20Interview/06%20Binary.md)
- [ ] [07 Memory.md](../../../courses/mooc/Mobile%20Development/Meta%20iOS%20Developer/12%20Coding%20Interview%20Preparation/Module%201%20-%20Introduction%20to%20the%20Coding%20Interview/07%20Memory.md)
- [ ] [08 Time complexity.md](../../../courses/mooc/Mobile%20Development/Meta%20iOS%20Developer/12%20Coding%20Interview%20Preparation/Module%201%20-%20Introduction%20to%20the%20Coding%20Interview/08%20Time%20complexity.md)
- [ ] [09 Space complexity.md](../../../courses/mooc/Mobile%20Development/Meta%20iOS%20Developer/12%20Coding%20Interview%20Preparation/Module%201%20-%20Introduction%20to%20the%20Coding%20Interview/09%20Space%20complexity.md)
- [ ] [10 Module summary - Introduction to the coding interview.md](../../../courses/mooc/Mobile%20Development/Meta%20iOS%20Developer/12%20Coding%20Interview%20Preparation/Module%201%20-%20Introduction%20to%20the%20Coding%20Interview/10%20Module%20summary%20-%20Introduction%20to%20the%20coding%20interview.md)
- [ ] [01 Basic data structures.md](../../../courses/mooc/Mobile%20Development/Meta%20iOS%20Developer/12%20Coding%20Interview%20Preparation/Module%202%20-%20Introduction%20to%20Data%20Structures/01%20Basic%20data%20structures.md)
- [ ] [02 Lists and sets.md](../../../courses/mooc/Mobile%20Development/Meta%20iOS%20Developer/12%20Coding%20Interview%20Preparation/Module%202%20-%20Introduction%20to%20Data%20Structures/02%20Lists%20and%20sets.md)
- [ ] [03 Stacks and queues.md](../../../courses/mooc/Mobile%20Development/Meta%20iOS%20Developer/12%20Coding%20Interview%20Preparation/Module%202%20-%20Introduction%20to%20Data%20Structures/03%20Stacks%20and%20queues.md)
- [ ] [04 Trees.md](../../../courses/mooc/Mobile%20Development/Meta%20iOS%20Developer/12%20Coding%20Interview%20Preparation/Module%202%20-%20Introduction%20to%20Data%20Structures/04%20Trees.md)
- [ ] [05 Hash tables.md](../../../courses/mooc/Mobile%20Development/Meta%20iOS%20Developer/12%20Coding%20Interview%20Preparation/Module%202%20-%20Introduction%20to%20Data%20Structures/05%20Hash%20tables.md)
- [ ] [06 Heaps.md](../../../courses/mooc/Mobile%20Development/Meta%20iOS%20Developer/12%20Coding%20Interview%20Preparation/Module%202%20-%20Introduction%20to%20Data%20Structures/06%20Heaps.md)
- [ ] [07 Graphs.md](../../../courses/mooc/Mobile%20Development/Meta%20iOS%20Developer/12%20Coding%20Interview%20Preparation/Module%202%20-%20Introduction%20to%20Data%20Structures/07%20Graphs.md)
- [ ] [08 Module summary - Introduction to data structures.md](../../../courses/mooc/Mobile%20Development/Meta%20iOS%20Developer/12%20Coding%20Interview%20Preparation/Module%202%20-%20Introduction%20to%20Data%20Structures/08%20Module%20summary%20-%20Introduction%20to%20data%20structures.md)
- [ ] [01 Sorting Algorithms.md](../../../courses/mooc/Mobile%20Development/Meta%20iOS%20Developer/12%20Coding%20Interview%20Preparation/Module%203%20-%20Introduction%20to%20Algorithms/01%20Sorting%20Algorithms.md)
- [ ] [02 Searching Algorithms.md](../../../courses/mooc/Mobile%20Development/Meta%20iOS%20Developer/12%20Coding%20Interview%20Preparation/Module%203%20-%20Introduction%20to%20Algorithms/02%20Searching%20Algorithms.md)
- [ ] [03 Divide and conquer.md](../../../courses/mooc/Mobile%20Development/Meta%20iOS%20Developer/12%20Coding%20Interview%20Preparation/Module%203%20-%20Introduction%20to%20Algorithms/03%20Divide%20and%20conquer.md)
- [ ] [04 Recursion.md](../../../courses/mooc/Mobile%20Development/Meta%20iOS%20Developer/12%20Coding%20Interview%20Preparation/Module%203%20-%20Introduction%20to%20Algorithms/04%20Recursion.md)
- [ ] [05 Dynamic programming.md](../../../courses/mooc/Mobile%20Development/Meta%20iOS%20Developer/12%20Coding%20Interview%20Preparation/Module%203%20-%20Introduction%20to%20Algorithms/05%20Dynamic%20programming.md)
- [ ] [06 Greedy algorithms.md](../../../courses/mooc/Mobile%20Development/Meta%20iOS%20Developer/12%20Coding%20Interview%20Preparation/Module%203%20-%20Introduction%20to%20Algorithms/06%20Greedy%20algorithms.md)
- [ ] [07 Module summary - Introduction to algorithms.md](../../../courses/mooc/Mobile%20Development/Meta%20iOS%20Developer/12%20Coding%20Interview%20Preparation/Module%203%20-%20Introduction%20to%20Algorithms/07%20Module%20summary%20-%20Introduction%20to%20algorithms.md)
- [ ] [01 Course recap.md](../../../courses/mooc/Mobile%20Development/Meta%20iOS%20Developer/12%20Coding%20Interview%20Preparation/Module%204%20-%20Final%20Project/01%20Course%20recap.md)
- [ ] [02 Course wrap up.md](../../../courses/mooc/Mobile%20Development/Meta%20iOS%20Developer/12%20Coding%20Interview%20Preparation/Module%204%20-%20Final%20Project/02%20Course%20wrap%20up.md)

## 산출물

제한 시간(문제당 40분)을 걸고 푼 그래프·문자열 문제 기록 8개. 시간 안에 못 푼 문제도 **그대로 남기고** 무엇에서 막혔는지 적는다. 막힌 지점의 목록이 다음에 무엇을 볼지 알려 준다.

## 다음 단계

→ [04 Phase 4 - 인공지능 알고리즘 탐색과 최적화](04%20Phase%204%20-%20%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98%20%ED%83%90%EC%83%89%EA%B3%BC%20%EC%B5%9C%EC%A0%81%ED%99%94.md)
