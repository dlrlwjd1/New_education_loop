# System R Algorithm

## 개요
- System R은 최적의 조인 순서(join ordering)를 결정하기 위해 버시 트리(bushy tree) 방식의 탐색 공간을 구성하고, 휴리스틱으로 가지치기(pruning)하며 최선의 계획을 찾는 알고리즘이다.
- 조인에서 앞쪽(외부, external) 테이블과 뒤쪽(내부, internal) 테이블의 역할에 따라 조인 비용이 크게 달라지며, 특히 내부 테이블에 조인 컬럼 인덱스가 있는지 여부가 핵심이다.

## 내용

### 외부 관계(external relation)와 내부 관계(internal relation)
- R ⋈ S에서 bowtie(⋈) 왼쪽의 R을 외부 테이블(external table), 오른쪽의 S를 내부 관계(internal relation)라고 부른다.
- 외부 테이블 R의 각 행마다 내부 테이블 S에서 대응되는 행을 찾는 방식으로 조인이 진행된다.

### 조인 방식별 비용
1. **Nested loop join (인덱스 없음, cross product 방식)**
   - R의 각 행마다 S 전체를 읽어 매칭되는 행을 찾음
   - 읽기 횟수: `card(R) × card(S)` → O(N²), 매우 비효율적이므로 가급적 피해야 함
2. **Merge join (R, S 모두 조인 컬럼 기준 정렬되어 있는 경우, 최선의 경우)**
   - 두 테이블 모두 정렬되어 있으면 각 테이블의 시작 위치에 포인터를 두고 순차적으로 이동하며 각 테이블을 단 한 번씩만 읽으면 됨
   - 비용: `card(R) + card(S)` → O(N)
   - 정렬이 안 되어 있다면 정렬 비용(`O(N log N)`)이 추가로 필요할 수 있음
3. **Index join (S에 조인 컬럼 인덱스가 있고 R에는 없는 경우, 가장 자주 다루는 케이스)**
   - R의 각 행을 한 번씩 읽고(`card(R)`), 각 행에 대해 S의 인덱스를 조회. 인덱스 깊이가 log N이므로 인덱스 탐색에 `log(card(S))` 회의 읽기, 그리고 실제 S 행을 찾기 위한 추가 읽기가 필요
   - 비용: `card(R) + card(R) × log(card(S))` → O(N log N), 합리적인 조인 연산

### 예제 쿼리와 조인 그래프
- 예제 쿼리: employee, assignment, project 세 테이블을 조인해 employee name을 조회하며, project name = 'CADCAM' 조건
- 조인 그래프: employee ⋈ assignment (employee number 기준), assignment ⋈ project (project number 기준)
- 가정된 인덱스 통계:
  - employee 테이블: employee number에 인덱스 있음
  - assignment 테이블: project number에 인덱스 있음
  - project 테이블: project name에 인덱스 있음 (project number에는 인덱스 없음)

### System R의 탐색 공간 구성 및 가지치기 과정
- 1단계(초기 레벨): employee, assignment, project 각각을 시작점으로 하는 3개의 계획으로 시작. 아직 정보가 부족해 가지치기하지 않음.
- 만약 모든 레벨을 완전히 전개하면 조인 순서의 수는 N개 테이블에 대해 N! 개가 되어, 테이블(또는 프래그먼트) 수가 많아지면 매우 커진다. 이를 줄이기 위해 다음 두 가지 원칙을 적용한다.
  - Cartesian product를 유발하는 가지는 모두 가지치기(prune)
  - employee-assignment 조인이나 assignment-project 조인은 내부 테이블에 조인 컬럼 인덱스가 있을 때만 효율적(assignment가 external, employee가 internal일 때 employee number 인덱스 활용 가능; project가 external, assignment가 internal일 때 project number 인덱스 활용 가능)이라고 가정
- **employee 분기**
  - employee(external) ⋈ assignment(internal, employee number 기준): assignment 테이블에 employee number 인덱스가 없으므로 O(N²) 연산 → 가지치기
  - employee × project: 직접 조인 조건 없음(Cartesian product) → 가지치기
  - 결과적으로 employee 분기에서는 유망한 계획이 없음
- **assignment 분기**
  - assignment(external) ⋈ employee(internal, employee number 기준): employee 테이블에 employee number 인덱스가 있으므로 O(N log N) 연산이 가능 → 유지
  - assignment(external) ⋈ project(internal, project number 기준): project 테이블에는 project number 인덱스가 없음(project name 인덱스만 있음) → O(N²) → 가지치기
- **project 분기**
  - project(external) ⋈ assignment(internal, project number 기준): assignment 테이블에 project number 인덱스가 있으므로 O(N log N) → 유지
  - project × employee: Cartesian product → 가지치기
- 2회차 가지치기 결과, 6개의 후보 중 2개(assignment ⋈ employee, project ⋈ assignment)만 남는다.
- 이 두 계획을 각각 한 단계 더 확장한다.
  1. (assignment ⋈ employee)의 결과를 project와 조인 → 이 경우 project가 internal이 되는데 project number 인덱스가 없으므로 비효율적(가지치기)
  2. (project ⋈ assignment)의 결과를 employee와 조인 → employee number 기준 조인이며 employee에 employee number 인덱스가 있으므로 O(N log N) → 유지
- 최종적으로 남는 최선의 계획: **먼저 project와 assignment를 조인하고, 그 결과를 employee와 조인**하는 순서다.

## 요약
- System R은 조인 시 외부/내부 테이블 구분과 내부 테이블의 인덱스 유무에 따라 nested loop(O(N²)), merge join(O(N)), index join(O(N log N)) 중 비용을 추정한다.
- 탐색 공간을 버시 트리 형태로 단계적으로 확장하면서, Cartesian product와 인덱스 없는 내부 테이블 조인(O(N²))에 해당하는 가지를 즉시 가지치기한다.
- 예제 쿼리(employee-assignment-project)에서는 project와 assignment를 먼저 조인(assignment의 project number 인덱스 활용)한 뒤, 그 결과를 employee와 조인(employee의 employee number 인덱스 활용)하는 순서가 최종적으로 가장 효율적인 계획으로 선택된다.
