# Query Transformation Rules

## 개요
- 관계 대수 쿼리를 쿼리 트리(query tree, 연산자 트리)로 표현하고, 의미적으로 동등하되 더 빠른 트리를 유도하는 변환 규칙(transformation rule)을 다룬다.
- 교환 법칙(commutative), 결합 법칙(associative), 단항/이항 연산자 규칙, 선택·사영의 밀어내기(push down)를 설명한다.
- 수평/수직 조각화(horizontal/vertical fragmentation)에서 모순되는 조각을 제거해 쿼리 트리를 축소하는 방법을 다룬다.

## 내용

### 쿼리 트리와 실행
- 예시 쿼리: Employee, Assignment, Project 세 테이블을 조인하고 title='programmer', budget > 100,000, duration < 12 조건으로 employee name을 조회.
- 관계 대수 표현을 사영(projection) → 선택(selection) → 조인(join) 순서의 트리로 만든다. 사영은 맨 위, 조인은 맨 아래.
- 쿼리 트리는 관계 대수 쿼리의 표현이자 **쿼리 실행 모듈(query execution module)에 보내는 명령의 표현**이다. 실행 모듈은 트리를 아래에서 위로(bottom up) 읽는다.

### 트리 변환 규칙 (R, T는 속성 a1..an, S는 b1..bn을 가진다고 가정)
- **1. 교환 법칙(commutative law)**: R × S = S × R, R ⋈ S = S ⋈ R.
  - 의미는 같지만 쿼리 처리기에는 매우 다르다. 왼쪽 테이블이 외부 테이블(outer), 오른쪽이 내부 테이블(inner)이 된다.
  - 예: S에 인덱스가 있고 R에 없을 때. R ⋈ S에서 R이 외부면 R의 각 행마다 S의 인덱스(B+ 트리, log n 읽기)로 대응 행을 찾아 **n log n** 연산. 반대로 S ⋈ R에서 S가 외부면 S의 각 행마다 인덱스 없는 R을 전부 읽어 **n²** 연산.
  - 좋은 최적화기는 인덱스 유무를 보고 조인 순서를 뒤집어 더 나은 계획을 고른다.
- **2. 결합 법칙(associative law)**: (R × S) × T = R × (S × T), 자연 조인도 동일. 인덱스 구조에 따라 한쪽이 더 효율적.
- **3. 단항 연산자 규칙 — 사영 중첩**: A' ⊆ A'' ⊆ A일 때, Π_A'(Π_A''(R)) = Π_A'(R). 사영 계층을 제거할 수 있다.
- **4. 선택 중첩**: 한 테이블에 대한 두 선택은 AND로 결합. σ_p1(σ_p2(R)) = σ_p1∧p2(R). 더 빠르다.
- **5. 선택과 사영의 교환**: 사영 안으로 선택을 밀어넣어 더 작은 데이터로 처리. 선택 술어의 열 a_p가 사영 대상에 이미 포함되면 바깥 사영이 불필요해진다.
- **6. 선택을 한 테이블에만 적용**: 선택 술어가 R에만 적용되면 σ를 R 안으로 밀어넣어 R을 먼저 축소한 뒤 S와 교차곱/자연 조인 → 훨씬 효율적. 합집합(R ∪ T)에도 선택을 양쪽 테이블로 내려 union 전에 행 수를 줄인다.
- **7. 사영과 이항 연산자의 교환**: C = A' ∪ B'(A'는 R, B'는 S에 적용)일 때 Π_C(R × S) = Π_A'(R) × Π_B'(S). 자연 조인에도 적용해 사영을 아래로 내린 뒤 조인한다.

### 쿼리 트리에 규칙 적용
- 규칙 4, 5, 6을 이용해 모든 사영과 선택을 가능한 한 아래로 밀어넣는다.
- budget > 100,000은 Project에, duration < 12는 Assignment에, title='programmer'는 Employee에 적용되므로 각 테이블 쪽으로 내린다.
- 각 테이블에서 필요한 열·행만 남긴 뒤 조인하고, 최종적으로 project number와 name만 사영한다.

### 수평 조각화 축소 (horizontal fragmentation)
- Employee가 Employee1, Employee2, Employee3으로 조각화되고 쿼리 술어가 "사번 < E4"라고 하자.
- **선택 축소(select reduction)**: 원래는 세 조각을 union 후 σ(enum < E4)를 적용하지만, 이 선택이 조각 3의 정의 술어와 모순되면 조각 3을 조인 표현에서 제거한다.
- **조인 축소(join reduction)**: 서로 다른 조각의 조인에서, 조각 정의 술어가 겹치는(합리적으로 연결되는) 조각들끼리만 조인한다. 예 — Employee1⋈Assignment1, Employee2⋈Assignment2, Employee3⋈Assignment2 결과만 조인 후 union.

### 수직 조각화 축소 (vertical fragmentation)
- 쿼리가 특정 열만 요구하고 어떤 조각이 그 열을 포함하지 않으면 그 조각을 쿼리 트리에서 제거한다.
- 예: Employee1과 Employee2를 조인하는데 employee name만 사영하고 name이 Employee1에만 있으면, 조인을 무시하고 트리는 `Π_name(Employee1)`이 된다.

## 예시
교환 법칙에 따른 조인 비용 차이 (S에만 인덱스가 있을 때):
```
R ⋈ S  (R 외부, S 내부, S에 인덱스)  →  n log n
S ⋈ R  (S 외부, R 내부, R에 인덱스 없음)  →  n²
```

선택 중첩 규칙:
```
σ_p1( σ_p2(R) )  ==  σ_(p1 ∧ p2)(R)
```

## 요약
- 쿼리 트리는 실행 모듈에 대한 명령이며 아래에서 위로 실행되므로, 동등 변환으로 더 빠른 트리를 유도할 수 있다.
- 교환·결합 법칙은 결과는 같지만 인덱스 유무에 따라 조인 순서가 n log n과 n²를 가른다.
- 핵심 휴리스틱은 선택과 사영을 트리 아래로 밀어넣어 조인 전에 데이터를 최대한 축소하는 것이다.
- 조각화된 DB에서는 쿼리 술어와 모순되는 수평/수직 조각을 트리에서 제거해 불필요한 조인을 없앤다.
