# Query Optimization Steps

## 개요
- 쿼리 최적화(Query Optimization)는 하나의 관계형 쿼리에 대해 최선의 쿼리 실행 계획(Query Execution Plan, QEP)을 찾기 위해 세 가지 프로세스를 반복 적용하는 과정이다.
- 조인(join)은 중앙 집중식 데이터베이스에서도 비용이 크지만, 분산 데이터베이스에서는 사이트 간 통신 비용까지 더해져 더욱 비싸지므로 이번 모듈에서는 조인 관련 연산 트리에 집중한다.

## 내용

### 쿼리 최적화의 세 가지 프로세스
1. **탐색 공간 생성(generating the search space)**: 주어진 관계형 쿼리에 대해 적용 가능한 여러 쿼리 실행 계획 후보를 생성한다. 규칙(rule)을 관계형 쿼리에 적용해 QEP 집합(Query Execution Plan Set)을 만든다.
2. **비용 모델 적용(cost model)**: 생성된 QEP 집합 각각에 비용 모델을 적용해 비용이 높은 계획과 합리적인 계획을 구분한다.
3. **가지치기(pruning) 및 반복(search strategy)**: 비용이 높은 계획은 잘라내고(prune), 합리적인 계획만 남겨 다시 탐색 공간 생성 단계로 보낸다. 이 과정을 반복하며 규칙을 더 정교하게 적용해 새로운 QEP 집합을 만들고, 다시 비용 모델을 적용해 가지치기한다. 이 사이클의 끝에서 비용 모델 추정치를 기준으로 최선의 QEP가 도출된다.

### 관계형 트리(operator tree)와 조인 순서
- 이전 모듈에서 배운 것처럼, 하나의 관계형 쿼리(relational query)는 관계 대수식(relational algebra expression)으로 변환되고, 이는 다시 연산자 트리(operator tree, relational tree)로 표현될 수 있다.
- 같은 쿼리를 해결하는 연산자 트리는 여러 개 존재할 수 있으며, 이들은 의미적으로는 동등(semantically equivalent)하지만 실행 비용은 서로 다르다.
- 예제 쿼리: employee, assignment, project 세 테이블에서 employee name과 responsibility를 select하며, employee와 assignment를 employee number로, assignment와 project를 project number로 조인한다. 이 쿼리에 대해 최소 세 가지 조인 순서(trees)가 가능하다.
  1. employee와 assignment를 먼저 employee number로 조인한 뒤, 그 결과를 project와 project number로 조인
  2. assignment와 project를 먼저 project number로 조인한 뒤, 그 결과를 employee와 employee number로 조인
  3. project와 employee의 cross product를 먼저 계산한 뒤, 그 결과를 assignment와 project number 및 employee number로 조인

### 탐색 공간의 크기와 휴리스틱(heuristics)
- 테이블(또는 프래그먼트) 수가 N개일 때, 가능한 조인 순서의 수는 대략 O(N!) (약 O(N^N))에 달해 모든 옵션의 비용을 계산하는 것은 비현실적이다.
- 이를 줄이기 위해 휴리스틱을 적용한다.
  - selection과 projection 연산을 트리 아래로 내리는(push down) 것
  - Cartesian product(교차곱)를 피하는 것
- 조인 자체를 평가하는 데는 두 가지 대표적인 휴리스틱이 있다.
  - **선형 트리(linear trees)**: 각 조인의 결과가 항상 하나의 새로운 테이블과 조인되는 형태. 예: R1과 R2를 조인한 뒤 그 결과에 R3을 조인, 다시 그 결과에 R4를 조인. 여전히 지수적(exponential) 과정이지만 가능한 선형 트리의 수는 O(2^N)으로 줄어든다.
  - **버시 트리(bushy trees)**: 같은 레벨에서 서로 다른 두 테이블을 조인한 뒤 그 결과들끼리 상위 레벨에서 조인하는 형태로, 병렬성(parallelism)을 활용할 수 있지만 여전히 O(N!) 또는 O(N^N) 규모이며 동등한 선형 트리보다 비용이 더 클 수도 있다.

### 다음 학습 방향
- 선형 트리를 사용하는 대표 사례로 **Ingres 시스템**을 다룬다.
- 버시 트리에 대한 휴리스틱을 사용하는 대표 사례로 **System R 시스템**을 다룬다.

## 요약
- 쿼리 최적화는 (1) 탐색 공간 생성 → (2) 비용 모델 적용 → (3) 가지치기 후 재탐색의 반복 사이클로 최선의 QEP를 찾는다.
- 같은 쿼리라도 조인 순서에 따라 여러 개의 의미적으로 동등한 연산자 트리가 존재하며, 비용은 각기 다르다.
- 테이블 수가 늘어나면 가능한 조인 순서의 수가 N! 수준으로 폭발적으로 증가하므로, selection/projection push-down, cross product 회피 같은 휴리스틱과 함께 선형 트리(linear trees, O(2^N))·버시 트리(bushy trees, O(N!)) 전략을 사용해 탐색 공간을 줄인다.
- 선형 트리는 Ingres, 버시 트리는 System R에서 각각 대표적으로 다룬다.
