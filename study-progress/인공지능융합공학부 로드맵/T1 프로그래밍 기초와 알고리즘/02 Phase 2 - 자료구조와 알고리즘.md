# T1 Phase 2 — 자료구조와 알고리즘

> 학부 교과 **코딩테스트기초(2학년 1학기, 이론실습병행 3학점)** 의 앞 절반
> 교과목해설: "기술 면접에서 접하는 코딩 테스트에 대비… 기본적인 프로그래밍 개념, 문제 해결 전략, 주요 알고리즘과 자료구조"

- 목표: 문제를 보고 "이건 그리디다 / 이건 DP다"를 먼저 판단하고, 고른 자료구조의 시간복잡도를 근거로 설명한다.
- 분량: 약 22시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 같은 문제의 두 풀이를 빅오(Big-O)로 비교해 어느 쪽이 왜 빠른지 말한다
- 그리디가 통하는 문제와 통하지 않는 문제를 구분하고, 통한다는 근거를 댄다
- 분할정복과 동적계획법(DP)의 차이를 재귀식으로 설명한다
- 해시 테이블·힙·이진탐색트리 중 무엇을 쓸지 연산 비용을 근거로 고른다

## 2-A. 문제 해결 전략과 복잡도

메인: Data Structures and Algorithms, `Course 1 - Algorithmic Toolbox`

Module 1 — 프로그래밍 챌린지에 임하는 법

- [ ] [01 Welcome!.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%201%20-%20Programming%20Challenges/01%20Welcome!.md)
- [ ] [02 Solving the Sum of Two Digits Programming Challenge (screencast).md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%201%20-%20Programming%20Challenges/02%20Solving%20the%20Sum%20of%20Two%20Digits%20Programming%20Challenge%20%28screencast%29.md)
- [ ] [03 For Python Learners - Getting Started with PyCharm Professional IDE.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%201%20-%20Programming%20Challenges/03%20For%20Python%20Learners%20-%20Getting%20Started%20with%20PyCharm%20Professional%20IDE.md)
- [ ] [04 Solving the Maximum Pairwise Product Programming Challenge - Improving the Naive Solution, Testing, Debugging.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%201%20-%20Programming%20Challenges/04%20Solving%20the%20Maximum%20Pairwise%20Product%20Programming%20Challenge%20-%20Improving%20the%20Naive%20Solution,%20Testing,%20Debugging.md)
- [ ] [05 Stress Test - Implementation.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%201%20-%20Programming%20Challenges/05%20Stress%20Test%20-%20Implementation.md)
- [ ] [06 Stress Test - Find the Test and Debug.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%201%20-%20Programming%20Challenges/06%20Stress%20Test%20-%20Find%20the%20Test%20and%20Debug.md)
- [ ] [07 Stress Test - More Testing, Submit and Pass!.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%201%20-%20Programming%20Challenges/07%20Stress%20Test%20-%20More%20Testing,%20Submit%20and%20Pass!.md)

Module 2 — 복잡도와 알고리즘 워밍업

- [ ] [01 Why Study Algorithms.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%202%20-%20Algorithmic%20Warm-up/01%20Why%20Study%20Algorithms.md)
- [ ] [02 Coming Up.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%202%20-%20Algorithmic%20Warm-up/02%20Coming%20Up.md)
- [ ] [03 Problem Overview.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%202%20-%20Algorithmic%20Warm-up/03%20Problem%20Overview.md)
- [ ] [04 Naive Algorithm.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%202%20-%20Algorithmic%20Warm-up/04%20Naive%20Algorithm.md)
- [ ] [05 Efficient Algorithm.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%202%20-%20Algorithmic%20Warm-up/05%20Efficient%20Algorithm.md)
- [ ] [06 Problem Overview and Naive Algorithm.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%202%20-%20Algorithmic%20Warm-up/06%20Problem%20Overview%20and%20Naive%20Algorithm.md)
- [ ] [07 Efficient Algorithm.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%202%20-%20Algorithmic%20Warm-up/07%20Efficient%20Algorithm.md)
- [ ] [08 Computing Runtimes.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%202%20-%20Algorithmic%20Warm-up/08%20Computing%20Runtimes.md)
- [ ] [09 Asymptotic Notation.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%202%20-%20Algorithmic%20Warm-up/09%20Asymptotic%20Notation.md)
- [ ] [10 Big-O Notation.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%202%20-%20Algorithmic%20Warm-up/10%20Big-O%20Notation.md)
- [ ] [11 Using Big-O.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%202%20-%20Algorithmic%20Warm-up/11%20Using%20Big-O.md)
- [ ] [12 Course Overview.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%202%20-%20Algorithmic%20Warm-up/12%20Course%20Overview.md)

## 2-B. 그리디·분할정복·동적계획법

Module 3 — 그리디

- [ ] [01 Largest Number.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%203%20-%20Greedy%20Algorithms/01%20Largest%20Number.md)
- [ ] [02 Queue of Patients.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%203%20-%20Greedy%20Algorithms/02%20Queue%20of%20Patients.md)
- [ ] [03 Implementation and Analysis.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%203%20-%20Greedy%20Algorithms/03%20Implementation%20and%20Analysis.md)
- [ ] [04 Main Ingredients of Greedy Algorithms.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%203%20-%20Greedy%20Algorithms/04%20Main%20Ingredients%20of%20Greedy%20Algorithms.md)
- [ ] [05 Celebration Party Problem.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%203%20-%20Greedy%20Algorithms/05%20Celebration%20Party%20Problem.md)
- [ ] [06 Greedy Algorithm.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%203%20-%20Greedy%20Algorithms/06%20Greedy%20Algorithm.md)
- [ ] [07 Implementation and Analysis.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%203%20-%20Greedy%20Algorithms/07%20Implementation%20and%20Analysis.md)
- [ ] [08 Maximizing Loot.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%203%20-%20Greedy%20Algorithms/08%20Maximizing%20Loot.md)
- [ ] [09 Implementation and Analysis.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%203%20-%20Greedy%20Algorithms/09%20Implementation%20and%20Analysis.md)
- [ ] [10 Review.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%203%20-%20Greedy%20Algorithms/10%20Review.md)

Module 4 — 분할정복 (정렬·이진탐색이 여기 있다)

- [ ] [01 Intro.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%204%20-%20Divide-and-Conquer/01%20Intro.md)
- [ ] [02 Linear Search.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%204%20-%20Divide-and-Conquer/02%20Linear%20Search.md)
- [ ] [03 Binary Search.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%204%20-%20Divide-and-Conquer/03%20Binary%20Search.md)
- [ ] [04 Binary Search Runtime.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%204%20-%20Divide-and-Conquer/04%20Binary%20Search%20Runtime.md)
- [ ] [05 Problem Overview and Naïve Solution.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%204%20-%20Divide-and-Conquer/05%20Problem%20Overview%20and%20Na%C3%AFve%20Solution.md)
- [ ] [06 Naïve Divide and Conquer Algorithm.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%204%20-%20Divide-and-Conquer/06%20Na%C3%AFve%20Divide%20and%20Conquer%20Algorithm.md)
- [ ] [07 Faster Divide and Conquer Algorithm.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%204%20-%20Divide-and-Conquer/07%20Faster%20Divide%20and%20Conquer%20Algorithm.md)
- [ ] [08 What is the Master Theorem.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%204%20-%20Divide-and-Conquer/08%20What%20is%20the%20Master%20Theorem.md)
- [ ] [09 Proof of the Master Theorem.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%204%20-%20Divide-and-Conquer/09%20Proof%20of%20the%20Master%20Theorem.md)
- [ ] [10 Problem Overview.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%204%20-%20Divide-and-Conquer/10%20Problem%20Overview.md)
- [ ] [11 Selection Sort.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%204%20-%20Divide-and-Conquer/11%20Selection%20Sort.md)
- [ ] [12 Merge Sort.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%204%20-%20Divide-and-Conquer/12%20Merge%20Sort.md)
- [ ] [13 Lower Bound for Comparison Based Sorting.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%204%20-%20Divide-and-Conquer/13%20Lower%20Bound%20for%20Comparison%20Based%20Sorting.md)
- [ ] [14 Non-Comparison Based Sorting Algorithms.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%204%20-%20Divide-and-Conquer/14%20Non-Comparison%20Based%20Sorting%20Algorithms.md)
- [ ] [15 Overview.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%204%20-%20Divide-and-Conquer/15%20Overview.md)
- [ ] [16 Algorithm.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%204%20-%20Divide-and-Conquer/16%20Algorithm.md)
- [ ] [17 Random Pivot.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%204%20-%20Divide-and-Conquer/17%20Random%20Pivot.md)
- [ ] [18 Running Time Analysis (optional).md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%204%20-%20Divide-and-Conquer/18%20Running%20Time%20Analysis%20%28optional%29.md)
- [ ] [19 Equal Elements.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%204%20-%20Divide-and-Conquer/19%20Equal%20Elements.md)
- [ ] [20 Final Remarks.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%204%20-%20Divide-and-Conquer/20%20Final%20Remarks.md)

Module 5~6 — 동적계획법. **코딩테스트에서 가장 많이 갈리는 지점이다.** 두 모듈을 붙여서 본다

- [ ] [01 Change Problem.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%205%20-%20Dynamic%20Programming%201/01%20Change%20Problem.md)
- [ ] [02 The Alignment Game.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%205%20-%20Dynamic%20Programming%201/02%20The%20Alignment%20Game.md)
- [ ] [03 Computing Edit Distance.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%205%20-%20Dynamic%20Programming%201/03%20Computing%20Edit%20Distance.md)
- [ ] [04 Reconstructing an Optimal Alignment.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%205%20-%20Dynamic%20Programming%201/04%20Reconstructing%20an%20Optimal%20Alignment.md)
- [ ] [01 Problem Overview.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%206%20-%20Dynamic%20Programming%202/01%20Problem%20Overview.md)
- [ ] [02 Knapsack with Repetitions.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%206%20-%20Dynamic%20Programming%202/02%20Knapsack%20with%20Repetitions.md)
- [ ] [03 Knapsack without Repetitions.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%206%20-%20Dynamic%20Programming%202/03%20Knapsack%20without%20Repetitions.md)
- [ ] [04 Final Remarks.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%206%20-%20Dynamic%20Programming%202/04%20Final%20Remarks.md)
- [ ] [05 Problem Overview.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%206%20-%20Dynamic%20Programming%202/05%20Problem%20Overview.md)
- [ ] [06 Subproblems.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%206%20-%20Dynamic%20Programming%202/06%20Subproblems.md)
- [ ] [07 Algorithm.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%206%20-%20Dynamic%20Programming%202/07%20Algorithm.md)
- [ ] [08 Reconstructing a Solution.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%201%20-%20Algorithmic%20Toolbox/Module%206%20-%20Dynamic%20Programming%202/08%20Reconstructing%20a%20Solution.md)

## 2-C. 자료구조

메인: Data Structures and Algorithms, `Course 2 - Data Structures`

- [ ] [01 Arrays.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%201%20-%20Basic%20Data%20Structures/01%20Arrays.md)
- [ ] [02 Singly-Linked Lists.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%201%20-%20Basic%20Data%20Structures/02%20Singly-Linked%20Lists.md)
- [ ] [03 Doubly-Linked Lists.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%201%20-%20Basic%20Data%20Structures/03%20Doubly-Linked%20Lists.md)
- [ ] [04 Stacks.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%201%20-%20Basic%20Data%20Structures/04%20Stacks.md)
- [ ] [05 Queues.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%201%20-%20Basic%20Data%20Structures/05%20Queues.md)
- [ ] [06 Trees.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%201%20-%20Basic%20Data%20Structures/06%20Trees.md)
- [ ] [07 Tree Traversal.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%201%20-%20Basic%20Data%20Structures/07%20Tree%20Traversal.md)
- [ ] [01 Dynamic Arrays.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%202%20-%20Dynamic%20Arrays%20and%20Amortized%20Analysis/01%20Dynamic%20Arrays.md)
- [ ] [02 Amortized Analysis - Aggregate Method.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%202%20-%20Dynamic%20Arrays%20and%20Amortized%20Analysis/02%20Amortized%20Analysis%20-%20Aggregate%20Method.md)
- [ ] [03 Amortized Analysis - Banker's Method.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%202%20-%20Dynamic%20Arrays%20and%20Amortized%20Analysis/03%20Amortized%20Analysis%20-%20Banker's%20Method.md)
- [ ] [04 Amortized Analysis - Physicist's Method.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%202%20-%20Dynamic%20Arrays%20and%20Amortized%20Analysis/04%20Amortized%20Analysis%20-%20Physicist's%20Method.md)
- [ ] [05 Amortized Analysis - Summary.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%202%20-%20Dynamic%20Arrays%20and%20Amortized%20Analysis/05%20Amortized%20Analysis%20-%20Summary.md)
- [ ] [01 Introduction.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%203%20-%20Priority%20Queues%20and%20Disjoint%20Sets/01%20Introduction.md)
- [ ] [02 Naive Implementations of Priority Queues.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%203%20-%20Priority%20Queues%20and%20Disjoint%20Sets/02%20Naive%20Implementations%20of%20Priority%20Queues.md)
- [ ] [03 Binary Trees.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%203%20-%20Priority%20Queues%20and%20Disjoint%20Sets/03%20Binary%20Trees.md)
- [ ] [04 Basic Operations.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%203%20-%20Priority%20Queues%20and%20Disjoint%20Sets/04%20Basic%20Operations.md)
- [ ] [05 Complete Binary Trees.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%203%20-%20Priority%20Queues%20and%20Disjoint%20Sets/05%20Complete%20Binary%20Trees.md)
- [ ] [06 Pseudocode.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%203%20-%20Priority%20Queues%20and%20Disjoint%20Sets/06%20Pseudocode.md)
- [ ] [07 Heap Sort.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%203%20-%20Priority%20Queues%20and%20Disjoint%20Sets/07%20Heap%20Sort.md)
- [ ] [08 Building a Heap.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%203%20-%20Priority%20Queues%20and%20Disjoint%20Sets/08%20Building%20a%20Heap.md)
- [ ] [09 Final Remarks.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%203%20-%20Priority%20Queues%20and%20Disjoint%20Sets/09%20Final%20Remarks.md)
- [ ] [10 Overview.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%203%20-%20Priority%20Queues%20and%20Disjoint%20Sets/10%20Overview.md)
- [ ] [11 Naive Implementations.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%203%20-%20Priority%20Queues%20and%20Disjoint%20Sets/11%20Naive%20Implementations.md)
- [ ] [12 Trees for Disjoint Sets.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%203%20-%20Priority%20Queues%20and%20Disjoint%20Sets/12%20Trees%20for%20Disjoint%20Sets.md)
- [ ] [13 Union by Rank.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%203%20-%20Priority%20Queues%20and%20Disjoint%20Sets/13%20Union%20by%20Rank.md)
- [ ] [14 Path Compression.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%203%20-%20Priority%20Queues%20and%20Disjoint%20Sets/14%20Path%20Compression.md)
- [ ] [15 Analysis (Optional).md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%203%20-%20Priority%20Queues%20and%20Disjoint%20Sets/15%20Analysis%20%28Optional%29.md)
- [ ] [01 Applications of Hashing.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%204%20-%20Hash%20Tables/01%20Applications%20of%20Hashing.md)
- [ ] [02 Analysing Service Access Logs.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%204%20-%20Hash%20Tables/02%20Analysing%20Service%20Access%20Logs.md)
- [ ] [03 Direct Addressing.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%204%20-%20Hash%20Tables/03%20Direct%20Addressing.md)
- [ ] [04 Hash Functions.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%204%20-%20Hash%20Tables/04%20Hash%20Functions.md)
- [ ] [05 Chaining.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%204%20-%20Hash%20Tables/05%20Chaining.md)
- [ ] [06 Chaining Implementation and Analysis.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%204%20-%20Hash%20Tables/06%20Chaining%20Implementation%20and%20Analysis.md)
- [ ] [07 Hash Tables.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%204%20-%20Hash%20Tables/07%20Hash%20Tables.md)
- [ ] [08 Phone Book Data Structure.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%204%20-%20Hash%20Tables/08%20Phone%20Book%20Data%20Structure.md)
- [ ] [09 Universal Family.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%204%20-%20Hash%20Tables/09%20Universal%20Family.md)
- [ ] [10 Hashing Phone Numbers.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%204%20-%20Hash%20Tables/10%20Hashing%20Phone%20Numbers.md)
- [ ] [11 Hashing Names.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%204%20-%20Hash%20Tables/11%20Hashing%20Names.md)
- [ ] [12 Analysis of Polynomial Hashing.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%204%20-%20Hash%20Tables/12%20Analysis%20of%20Polynomial%20Hashing.md)
- [ ] [13 Find Substring in Text.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%204%20-%20Hash%20Tables/13%20Find%20Substring%20in%20Text.md)
- [ ] [14 Rabin-Karp's Algorithm.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%204%20-%20Hash%20Tables/14%20Rabin-Karp's%20Algorithm.md)
- [ ] [15 Recurrence for Substring Hashes.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%204%20-%20Hash%20Tables/15%20Recurrence%20for%20Substring%20Hashes.md)
- [ ] [16 Improving Running Time.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%204%20-%20Hash%20Tables/16%20Improving%20Running%20Time.md)
- [ ] [17 Julia's Diary.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%204%20-%20Hash%20Tables/17%20Julia's%20Diary.md)
- [ ] [18 Julia's Bank.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%204%20-%20Hash%20Tables/18%20Julia's%20Bank.md)
- [ ] [19 Blockchain.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%204%20-%20Hash%20Tables/19%20Blockchain.md)
- [ ] [20 Merkle Tree.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%204%20-%20Hash%20Tables/20%20Merkle%20Tree.md)
- [ ] [01 Introduction.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%205%20-%20Binary%20Search%20Trees/01%20Introduction.md)
- [ ] [02 Search Trees.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%205%20-%20Binary%20Search%20Trees/02%20Search%20Trees.md)
- [ ] [03 Basic Operations.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%205%20-%20Binary%20Search%20Trees/03%20Basic%20Operations.md)
- [ ] [04 Balance.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%205%20-%20Binary%20Search%20Trees/04%20Balance.md)
- [ ] [05 AVL Trees.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%205%20-%20Binary%20Search%20Trees/05%20AVL%20Trees.md)
- [ ] [06 AVL Tree Implementation.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%205%20-%20Binary%20Search%20Trees/06%20AVL%20Tree%20Implementation.md)
- [ ] [07 Split and Merge.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%205%20-%20Binary%20Search%20Trees/07%20Split%20and%20Merge.md)
- [ ] [01 Applications.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%206%20-%20Binary%20Search%20Trees%202/01%20Applications.md)
- [ ] [02 Splay Trees - Introduction.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%206%20-%20Binary%20Search%20Trees%202/02%20Splay%20Trees%20-%20Introduction.md)
- [ ] [03 Splay Trees - Implementation.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%206%20-%20Binary%20Search%20Trees%202/03%20Splay%20Trees%20-%20Implementation.md)
- [ ] [04 (Optional) Splay Trees - Analysis.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%202%20-%20Data%20Structures/Module%206%20-%20Binary%20Search%20Trees%202/04%20%28Optional%29%20Splay%20Trees%20-%20Analysis.md)

## 산출물

문제 풀이 노트 10개. 노트 하나에 반드시 들어가야 하는 것 — **처음 떠올린 풀이 / 그 풀이의 복잡도 / 왜 통과 못 했는지(또는 왜 통과했는지) / 고친 풀이의 복잡도**. 정답 코드만 붙여 놓은 노트는 이 산출물로 치지 않는다.

## 다음 단계

→ [03 Phase 3 - 그래프 문자열과 코딩테스트 실전](03%20Phase%203%20-%20%EA%B7%B8%EB%9E%98%ED%94%84%20%EB%AC%B8%EC%9E%90%EC%97%B4%EA%B3%BC%20%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8%20%EC%8B%A4%EC%A0%84.md)
