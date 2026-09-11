# T1 Phase 4 — 인공지능 알고리즘: 탐색과 최적화

> 학부 교과 **인공지능알고리즘(2학년 2학기, 이론실습병행 3학점)** · 선이수 권장 = 코딩테스트기초
> 교과목해설: "탐색 알고리즘, 최적화 기법, 진화 알고리즘 등을 학습하고, 이 알고리즘들이 AI 문제 해결에 적용될 수 있도록 다양한 예제를 통해 탐구"

- 목표: 머신러닝이 아닌 방식으로 AI 문제를 푸는 법 — 탐색과 최적화 — 을 손에 넣는다.
- 상태: **공백 해소 완료 (2026-09-04).** `Intelligent Agents and Search Algorithms`(MOOC·CU Boulder, 12h)를 수강·정리해 **휴리스틱 탐색과 진화 알고리즘 공백이 모두 닫혔다.** 이제 이 Phase 전체를 저장소 자료로 진행할 수 있다.
- 분량: 약 27시간 (저장소 자료 15시간 + CU Boulder 강좌 12시간)
- 마지막 학습일: (미학습)

## 왜 필요한가

딥러닝만으로는 안 풀리는 문제가 있다. 경로 찾기, 일정 배치, 게임에서의 수 선택 같은 것들은 **정답을 학습하는 것이 아니라 탐색해서 찾는다.** 캡스톤에서 "추천 순서를 어떻게 정할까", "제한 조건 아래 최적 배치를 어떻게 찾을까" 같은 문제를 만나면 여기가 답이다. 또 이 Phase의 NP-완전 개념은 **"이 문제는 완벽하게 못 푼다, 근사해로 가야 한다"** 는 판단을 가능하게 한다.

## 이 단계가 끝나면 할 수 있어야 하는 것

- 문제를 상태 공간(state space)으로 정의하고 시작 상태·목표 상태·전이를 적는다
- BFS/DFS 같은 무정보 탐색과 A* 같은 정보 이용 탐색의 차이를 설명한다
- 휴리스틱 함수가 **허용 가능(admissible)** 하다는 말의 뜻과 그것이 왜 최적해를 보장하는지 말한다
- 미니맥스와 알파-베타 가지치기로 간단한 2인 게임 AI를 만든다
- 선형계획법(LP)으로 풀리는 문제를 알아보고 모델링한다
- 어떤 문제가 NP-완전이라는 것을 보이고, 그래서 어떤 전략(근사·지역 탐색·메타휴리스틱)으로 갈지 정한다

> **보는 순서**: 4-B → 4-C → 4-D → 4-E (CU Boulder 강좌를 순서대로) → 4-A (DSA Course 5로 최적화 이론 보강). 4-A는 선형계획법·NP-완전을 다루므로 **탐색을 먼저 잡고 오는 편이 이해가 빠르다.**

## 4-A. 최적화와 복잡도 — 심화

메인: Data Structures and Algorithms, `Course 5 - Advanced Algorithms and Complexity`

Module 1 — 네트워크 플로우 (매칭·할당 문제의 기본 도구)

- [ ] [01 Introduction.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%201%20-%20Flows%20in%20Networks/01%20Introduction.md)
- [ ] [02 Network Flows.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%201%20-%20Flows%20in%20Networks/02%20Network%20Flows.md)
- [ ] [03 Residual Networks.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%201%20-%20Flows%20in%20Networks/03%20Residual%20Networks.md)
- [ ] [04 Maxflow-Mincut.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%201%20-%20Flows%20in%20Networks/04%20Maxflow-Mincut.md)
- [ ] [05 The Ford–Fulkerson Algorithm.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%201%20-%20Flows%20in%20Networks/05%20The%20Ford%E2%80%93Fulkerson%20Algorithm.md)
- [ ] [06 Slow Example.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%201%20-%20Flows%20in%20Networks/06%20Slow%20Example.md)
- [ ] [07 The Edmonds–Karp Algorithm.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%201%20-%20Flows%20in%20Networks/07%20The%20Edmonds%E2%80%93Karp%20Algorithm.md)
- [ ] [08 Bipartite Matching.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%201%20-%20Flows%20in%20Networks/08%20Bipartite%20Matching.md)
- [ ] [09 Image Segmentation.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%201%20-%20Flows%20in%20Networks/09%20Image%20Segmentation.md)

Module 2 — 선형계획법. **"제약 조건 아래 최적값 찾기"의 표준 형식이다.** 선형대수 복습도 겸한다

- [ ] [01 Introduction.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%202%20-%20Linear%20Programming/01%20Introduction.md)
- [ ] [02 Linear Programming.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%202%20-%20Linear%20Programming/02%20Linear%20Programming.md)
- [ ] [03 Linear Algebra - Method of Substitution.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%202%20-%20Linear%20Programming/03%20Linear%20Algebra%20-%20Method%20of%20Substitution.md)
- [ ] [04 Linear Algebra - Gaussian Elimination.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%202%20-%20Linear%20Programming/04%20Linear%20Algebra%20-%20Gaussian%20Elimination.md)
- [ ] [05 Convexity.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%202%20-%20Linear%20Programming/05%20Convexity.md)
- [ ] [06 Duality.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%202%20-%20Linear%20Programming/06%20Duality.md)
- [ ] [07 (Optional) Duality Proofs.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%202%20-%20Linear%20Programming/07%20%28Optional%29%20Duality%20Proofs.md)
- [ ] [08 Linear Programming Formulations.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%202%20-%20Linear%20Programming/08%20Linear%20Programming%20Formulations.md)
- [ ] [09 The Simplex Algorithm.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%202%20-%20Linear%20Programming/09%20The%20Simplex%20Algorithm.md)
- [ ] [10 (Optional) The Ellipsoid Algorithm.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%202%20-%20Linear%20Programming/10%20%28Optional%29%20The%20Ellipsoid%20Algorithm.md)

Module 3 — NP-완전 문제

- [ ] [01 Brute Force Search.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%203%20-%20NP-complete%20Problems/01%20Brute%20Force%20Search.md)
- [ ] [02 Search Problems.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%203%20-%20NP-complete%20Problems/02%20Search%20Problems.md)
- [ ] [03 Traveling Salesman Problem.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%203%20-%20NP-complete%20Problems/03%20Traveling%20Salesman%20Problem.md)
- [ ] [04 Hamiltonian Cycle Problem.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%203%20-%20NP-complete%20Problems/04%20Hamiltonian%20Cycle%20Problem.md)
- [ ] [05 Longest Path Problem.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%203%20-%20NP-complete%20Problems/05%20Longest%20Path%20Problem.md)
- [ ] [06 Integer Linear Programming Problem.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%203%20-%20NP-complete%20Problems/06%20Integer%20Linear%20Programming%20Problem.md)
- [ ] [07 Independent Set Problem.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%203%20-%20NP-complete%20Problems/07%20Independent%20Set%20Problem.md)
- [ ] [08 P and NP.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%203%20-%20NP-complete%20Problems/08%20P%20and%20NP.md)
- [ ] [09 Reductions.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%203%20-%20NP-complete%20Problems/09%20Reductions.md)
- [ ] [10 Showing NP-completeness.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%203%20-%20NP-complete%20Problems/10%20Showing%20NP-completeness.md)
- [ ] [11 Independent Set to Vertex Cover.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%203%20-%20NP-complete%20Problems/11%20Independent%20Set%20to%20Vertex%20Cover.md)
- [ ] [12 3-SAT to Independent Set.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%203%20-%20NP-complete%20Problems/12%203-SAT%20to%20Independent%20Set.md)
- [ ] [13 SAT to 3-SAT.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%203%20-%20NP-complete%20Problems/13%20SAT%20to%203-SAT.md)
- [ ] [14 Circuit SAT to SAT.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%203%20-%20NP-complete%20Problems/14%20Circuit%20SAT%20to%20SAT.md)
- [ ] [15 All of NP to Circuit SAT.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%203%20-%20NP-complete%20Problems/15%20All%20of%20NP%20to%20Circuit%20SAT.md)
- [ ] [16 Using SAT-solvers.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%203%20-%20NP-complete%20Problems/16%20Using%20SAT-solvers.md)

Module 4 — NP-완전에 대응하기. **여기가 지역 탐색(local search)·근사 알고리즘이 나오는 곳으로, 진화 알고리즘의 바로 앞자리다**

- [ ] [01 Introduction.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%204%20-%20Coping%20with%20NP-completeness/01%20Introduction.md)
- [ ] [02 2-SAT.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%204%20-%20Coping%20with%20NP-completeness/02%202-SAT.md)
- [ ] [03 2-SAT - Algorithm.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%204%20-%20Coping%20with%20NP-completeness/03%202-SAT%20-%20Algorithm.md)
- [ ] [04 Independent Sets in Trees.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%204%20-%20Coping%20with%20NP-completeness/04%20Independent%20Sets%20in%20Trees.md)
- [ ] [05 3-SAT - Backtracking.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%204%20-%20Coping%20with%20NP-completeness/05%203-SAT%20-%20Backtracking.md)
- [ ] [06 3-SAT - Local Search.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%204%20-%20Coping%20with%20NP-completeness/06%203-SAT%20-%20Local%20Search.md)
- [ ] [07 TSP - Dynamic Programming.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%204%20-%20Coping%20with%20NP-completeness/07%20TSP%20-%20Dynamic%20Programming.md)
- [ ] [08 TSP - Branch and Bound.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%204%20-%20Coping%20with%20NP-completeness/08%20TSP%20-%20Branch%20and%20Bound.md)
- [ ] [09 Vertex Cover.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%204%20-%20Coping%20with%20NP-completeness/09%20Vertex%20Cover.md)
- [ ] [10 Metric TSP.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%204%20-%20Coping%20with%20NP-completeness/10%20Metric%20TSP.md)
- [ ] [11 TSP - Local Search.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%204%20-%20Coping%20with%20NP-completeness/11%20TSP%20-%20Local%20Search.md)

Module 5 — 스트리밍 알고리즘 (선택)

- [ ] [01 Introduction.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%205%20-%20Streaming%20Algorithms%20%28Optional%29/01%20Introduction.md)
- [ ] [02 Heavy Hitters Problem.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%205%20-%20Streaming%20Algorithms%20%28Optional%29/02%20Heavy%20Hitters%20Problem.md)
- [ ] [03 Reduction 1.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%205%20-%20Streaming%20Algorithms%20%28Optional%29/03%20Reduction%201.md)
- [ ] [04 Reduction 2.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%205%20-%20Streaming%20Algorithms%20%28Optional%29/04%20Reduction%202.md)
- [ ] [05 Basic Estimate 1.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%205%20-%20Streaming%20Algorithms%20%28Optional%29/05%20Basic%20Estimate%201.md)
- [ ] [06 Basic Estimate 2.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%205%20-%20Streaming%20Algorithms%20%28Optional%29/06%20Basic%20Estimate%202.md)
- [ ] [07 Final Algorithm 1.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%205%20-%20Streaming%20Algorithms%20%28Optional%29/07%20Final%20Algorithm%201.md)
- [ ] [08 Final Algorithm 2.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%205%20-%20Streaming%20Algorithms%20%28Optional%29/08%20Final%20Algorithm%202.md)
- [ ] [09 Proofs 1.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%205%20-%20Streaming%20Algorithms%20%28Optional%29/09%20Proofs%201.md)
- [ ] [10 Proofs 2.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%205%20-%20Streaming%20Algorithms%20%28Optional%29/10%20Proofs%202.md)

## 4-B. 합리적 에이전트와 탐색 문제 정의

메인: **Intelligent Agents and Search Algorithms** (MOOC · University of Colorado Boulder · 12시간). **2026-09-04 수강·정리 완료.** [강좌 README](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/README.md)

Module 1 — 합리적 에이전트, 과업 환경(PEAS), 에이전트 유형

- [ ] [01 Foundations of AI.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/Module%201%20-%20Search%20Problems%20&%20Intelligence/01%20Foundations%20of%20AI.md)
- [ ] [02 History of AI.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/Module%201%20-%20Search%20Problems%20&%20Intelligence/02%20History%20of%20AI.md)
- [ ] [03 AI Today - Smarter, Better, Faster.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/Module%201%20-%20Search%20Problems%20&%20Intelligence/03%20AI%20Today%20-%20Smarter,%20Better,%20Faster.md)
- [ ] [04 What is a Rational Agent.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/Module%201%20-%20Search%20Problems%20&%20Intelligence/04%20What%20is%20a%20Rational%20Agent.md)
- [ ] [05 The Types of Agent Environments.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/Module%201%20-%20Search%20Problems%20&%20Intelligence/05%20The%20Types%20of%20Agent%20Environments.md)
- [ ] [06 The Types of Agent Programs.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/Module%201%20-%20Search%20Problems%20&%20Intelligence/06%20The%20Types%20of%20Agent%20Programs.md)

Module 2 — 탐색 문제의 다섯 요소, 알고리즘 평가 기준, 무정보 탐색(BFS·DFS·균일 비용)

- [ ] [01 What is a Search Problem.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/Module%202%20-%20Uninformed%20Searches/01%20What%20is%20a%20Search%20Problem.md)
- [ ] [02 Toy Search Problem Examples.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/Module%202%20-%20Uninformed%20Searches/02%20Toy%20Search%20Problem%20Examples.md)
- [ ] [03 How Do We Set Up Search Problems.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/Module%202%20-%20Uninformed%20Searches/03%20How%20Do%20We%20Set%20Up%20Search%20Problems.md)
- [ ] [04 Evaluating Search Algorithms.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/Module%202%20-%20Uninformed%20Searches/04%20Evaluating%20Search%20Algorithms.md)
- [ ] [05 Uninformed - BFS, DFS, Uniform Cost DEMO and Comparison.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/Module%202%20-%20Uninformed%20Searches/05%20Uninformed%20-%20BFS,%20DFS,%20Uniform%20Cost%20DEMO%20and%20Comparison.md)

> [Phase 2](02%20Phase%202%20-%20%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98.md)·[Phase 3](03%20Phase%203%20-%20%EA%B7%B8%EB%9E%98%ED%94%84%20%EB%AC%B8%EC%9E%90%EC%97%B4%EA%B3%BC%20%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8%20%EC%8B%A4%EC%A0%84.md)에서 BFS·DFS를 이미 봤다면 Module 2는 **빠르게 훑어도 된다.** 다만 `04 Evaluating Search Algorithms`의 **완전성·최적성·b/d/m 기호**는 뒤에서 계속 쓰이니 건너뛰지 않는다.

## 4-C. 휴리스틱 탐색 — A\*와 그 변형

메인: 같은 강좌 Module 3. **학부 교과목해설의 "탐색 알고리즘" 핵심이 여기다.**

- [ ] [01 Intro to Informed Search Methods.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/Module%203%20-%20Informed%20Searches/01%20Intro%20to%20Informed%20Search%20Methods.md)
- [ ] [02 Greedy Best-first Search Approach Using Objective Function.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/Module%203%20-%20Informed%20Searches/02%20Greedy%20Best-first%20Search%20Approach%20Using%20Objective%20Function.md)
- [ ] [03 A Star Search Including Conditions for Optimality.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/Module%203%20-%20Informed%20Searches/03%20A%20Star%20Search%20Including%20Conditions%20for%20Optimality.md)
- [ ] [04 IDA Star and Weighted A Star Searches.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/Module%203%20-%20Informed%20Searches/04%20IDA%20Star%20and%20Weighted%20A%20Star%20Searches.md)
- [ ] [05 Optimality of Heuristics.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/Module%203%20-%20Informed%20Searches/05%20Optimality%20of%20Heuristics.md)
- [ ] [06 Approaches to Developing Heuristics.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/Module%203%20-%20Informed%20Searches/06%20Approaches%20to%20Developing%20Heuristics.md)
- [ ] [07 Incremental Heuristics (읽기자료).md](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/Module%203%20-%20Informed%20Searches/07%20Incremental%20Heuristics%20%28%EC%9D%BD%EA%B8%B0%EC%9E%90%EB%A3%8C%29.md)

## 4-D. 지역 탐색과 진화 알고리즘

메인: 같은 강좌 Module 4. **학부 교과목해설의 "최적화 기법, 진화 알고리즘"이 여기다.** 이 모듈 하나가 시뮬레이티드 어닐링·유전 알고리즘·타부 서치·빔 서치·PSO·개미군집을 모두 덮고, **유전 알고리즘 프로그래밍 과제(90분)** 까지 있다.

- [ ] [01 Intro to State Search Problems.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/Module%204%20-%20Informed%20Local%20Searches/01%20Intro%20to%20State%20Search%20Problems.md)
- [ ] [02 8-queens Problem for Local Search.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/Module%204%20-%20Informed%20Local%20Searches/02%208-queens%20Problem%20for%20Local%20Search.md)
- [ ] [03 Improvements on Local Searches.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/Module%204%20-%20Informed%20Local%20Searches/03%20Improvements%20on%20Local%20Searches.md)
- [ ] [04 Simulated Annealing Walk Through.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/Module%204%20-%20Informed%20Local%20Searches/04%20Simulated%20Annealing%20Walk%20Through.md)
- [ ] [05 Genetic Algorithms.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/Module%204%20-%20Informed%20Local%20Searches/05%20Genetic%20Algorithms.md)

## 4-E. 적대적 탐색 — 게임 트리

메인: 같은 강좌 Module 5. 미니맥스와 알파-베타 가지치기.

- [ ] [01 The Games AI Plays (읽기자료).md](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/Module%205%20-%20Informed%20Adversarial%20Searches/01%20The%20Games%20AI%20Plays%20%28%EC%9D%BD%EA%B8%B0%EC%9E%90%EB%A3%8C%29.md)
- [ ] [02 Games in an AI Context.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/Module%205%20-%20Informed%20Adversarial%20Searches/02%20Games%20in%20an%20AI%20Context.md)
- [ ] [03 The Minimax Algorithm.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/Module%205%20-%20Informed%20Adversarial%20Searches/03%20The%20Minimax%20Algorithm.md)
- [ ] [04 Pruning the Game Tree - The Alpha-Beta Algorithm.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/Module%205%20-%20Informed%20Adversarial%20Searches/04%20Pruning%20the%20Game%20Tree%20-%20The%20Alpha-Beta%20Algorithm.md)
- [ ] [05 Programming a Computer to Play Chess (읽기자료).md](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/Module%205%20-%20Informed%20Adversarial%20Searches/05%20Programming%20a%20Computer%20to%20Play%20Chess%20%28%EC%9D%BD%EA%B8%B0%EC%9E%90%EB%A3%8C%29.md)
- [ ] [06 Summary of Games that AI Plays (읽기자료).md](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/Module%205%20-%20Informed%20Adversarial%20Searches/06%20Summary%20of%20Games%20that%20AI%20Plays%20%28%EC%9D%BD%EA%B8%B0%EC%9E%90%EB%A3%8C%29.md)

## 4-F. 더 깊게 가고 싶다면 (선택 · 미확보)

이 Phase를 마치고도 최적화를 더 파고들 생각이면 아래가 있다. **필수가 아니다.**

| 강의 | 플랫폼 | 링크 | 비고 |
|---|---|---|---|
| Evolutionary Computation and its Applications | MOOC (University of Glasgow) | [링크](https://www.mooc.org/learn/evolutionary-computation-and-its-engineering-applications) | 9시간·3모듈 — 최적화 기본 개념 / 유전 알고리즘 / 입자 군집 최적화. ⚠️ **MATLAB 기반** |
| Solving Algorithms for Discrete Optimization | MOOC (CUHK) | [링크](https://www.mooc.org/learn/solving-algorithms-discrete-optimization) | 23시간. Module 4가 Local Search(시뮬레이티드 어닐링·타부 리스트·LNS). **선수 강좌 권장**, MiniZinc 사용 |
| Introduction to Artificial Intelligence (전문과정) | MOOC (CU Boulder) | [링크](https://www.mooc.org/specializations/introduction-to-artificial-intelligence) | 4-B~4-E의 강좌가 속한 전문과정. 나머지 둘(Reasoning Under Uncertainty 12h · Introduction to Learning 6h)은 [T2](../T2%20%EC%88%98%ED%95%99%20%ED%86%B5%EA%B3%84%EC%99%80%20%EB%8D%B0%EC%9D%B4%ED%84%B0/README.md)·[T3](../T3%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D%EA%B3%BC%20%EB%94%A5%EB%9F%AC%EB%8B%9D/README.md)와 겹친다 |

> 조사일 2026-09-04. 위 세 페이지 모두 직접 열어 확인했다.

## 산출물 과제 — 강의를 사지 않아도 된다

4-A Module 4의 지역 탐색을 발판 삼아 직접 구현하는 편이 빠르다. 배낭 문제(knapsack)나 외판원 문제(TSP)를 세 가지로 풀고 비교표를 만든다.

1. 완전 탐색 — 입력 크기를 키우며 언제 터지는지 기록한다
2. 탐욕 + 지역 탐색(2-opt 등)
3. 유전 알고리즘 — 선택·교차·변이를 직접 짠다

비교 항목: 해의 품질 / 실행 시간 / 입력 크기를 10배 늘렸을 때의 변화.

## 산출물

1. A* 로 푼 격자 경로 탐색 — 휴리스틱을 바꿔 가며(맨해튼 거리 vs 유클리드 거리 vs 0) 확장한 노드 수를 비교한 표
2. 4-C의 조합 최적화 비교표
3. 한 문단짜리 판단 기록 — "내 캡스톤 주제에서 탐색·최적화로 풀 부분이 있는가? 있다면 어디인가"

## 다음 단계

→ 트랙 완료. [T2 수학·통계와 데이터](../T2%20%EC%88%98%ED%95%99%20%ED%86%B5%EA%B3%84%EC%99%80%20%EB%8D%B0%EC%9D%B4%ED%84%B0/README.md) 로 넘어간다.
