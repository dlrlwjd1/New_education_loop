# Query Optimization Statistics

## 개요
- 쿼리 최적화에서 최선의 쿼리 실행 계획(query execution plan)을 추정하려면 데이터베이스에 대한 통계(statistics)가 반드시 필요하다.
- 이 강의에서는 어떤 통계 정보가 활용되는지, 그리고 이를 이용해 selection, projection, join, union, difference, semi-join 등 연산 결과의 크기(cardinality)를 어떻게 추정하는지를 다룬다.

## 내용

### 기본 통계 항목
관계(relation) R이 애트리뷰트(attribute) A1~AN을 가지며 여러 프래그먼트(fragment)로 나뉘어 있다고 가정할 때 다음 통계들이 사용된다.
- **length(A)**: 특정 프래그먼트 R_j에서 애트리뷰트(컬럼) 하나의 길이(바이트 수)
- **projected cardinality of A_i**: 어떤 프래그먼트에서 A_i가 실제로 갖는 distinct(고유) 값의 개수. 예: 미국 주(state)를 나타내는 컬럼은 행 수가 아무리 많아도 distinct 값은 최대 50개
- **min/max 값**: 특정 컬럼의 최솟값과 최댓값. 예를 들어 age 컬럼의 최소값이 20, 최대값이 60이라면, "age > 50" 같은 제약 조건이 걸린 쿼리가 전체 행 중 약 1/4을 반환할 것으로 예측 가능
- **domain cardinality of A_i**: 데이터베이스에 실제로 존재하는 값이 아니라, A_i가 이론적으로 가질 수 있는 고유 값의 개수
- **cardinality of a fragment**: 해당 프래그먼트의 튜플(행) 수

### 조인 선택도(join selectivity factor)
- 조인이 결과 크기를 얼마나 줄이는지를 나타내는 지표
- 공식: `SF(join) = card(R ⋈ S) / (card(R) × card(S))`
- 즉 실제 조인 결과 행 수를 cross product(교차곱)로 가능한 전체 행 수로 나눈 값

### 중간 결과(intermediate relation) 크기 추정
- 관계의 크기(size)는 카디널리티(cardinality, 행 수) × 한 행의 길이(바이트 수)로 계산한다.
- 이는 "면적(area)"과 같은 개념으로, 행 수 × 행당 길이 = 바이트 수

### 두 가지 단순화 가정(simplification assumptions)
카디널리티 추정을 위해 두 가지 가정을 둔다(항상 참은 아니지만 좋은 경험칙).
1. **애트리뷰트 값의 균등 분포(uniform distribution)**: 예를 들어 나이가 20~60 범위라면 20~30세, 30~40세, 40~50세, 50~60세 구간에 고르게 분포한다고 가정
2. **애트리뷰트 간 독립성(independence)**: 예를 들어 age와 zip code는 서로 관련이 없다고 가정. 실제로는 특정 zip code에 젊은/나이든 사람이 몰릴 수 있지만, 계산 단순화를 위해 독립으로 가정

### Selection 카디널리티 추정 공식
- 일반식: `card(selection 결과) = SF(선택 조건) × card(R)`
- `A = value` 조건의 선택도: `SF = 1 / (가능한 값의 개수)`
- `A > value` 조건의 선택도: `SF = (max(A) - value) / (max(A) - min(A))`
- `A < value` 조건의 선택도: `SF = (value - min(A)) / (max(A) - min(A))`
  - 예: age 범위가 20~60이고 "30세 미만"을 찾는다면, `(30-20)/(60-20) = 10/40 = 1/4 (25%)`
- 두 조건을 AND로 결합: `SF(p1 AND p2) = SF(p1) × SF(p2)` (독립 가정에 근거)
- 두 조건을 OR로 결합: `SF(p1 OR p2) = SF(p1) + SF(p2) - (SF(p1) × SF(p2))` (겹치는 부분을 중복 계산하지 않도록 차감)
- 값의 집합(IN 목록)에 대해서는: 집합의 개수 × 단일 값에 대한 선택도

### Projection 카디널리티 추정
- 중복 제거(duplicate elimination) 없이 프로젝션하면 결과 행 수는 원본 테이블의 행 수와 같다.
- 중복 제거를 하는 경우 일반적으로 정확한 크기를 예측하기 어렵다.
- 기본 키(primary key) 컬럼을 프로젝션하는 경우, 기본 키는 모두 서로 다른 값이므로 결과 카디널리티는 원본 테이블의 카디널리티와 같다.

### Cartesian Product(교차곱) 카디널리티
- `card(R × S) = card(R) × card(S)`
- 자주 사용되지는 않으며 가능하면 피해야 하는 연산

### Join 카디널리티 추정
- 조인의 카디널리티는 일반적으로 정확히 알기 어렵다.
- **상한(upper bound)**: cross product의 카디널리티, 즉 `card(R) × card(S)` (equijoin에서는 각 컬럼 값이 모두 일치해야 하므로 실제로는 이렇게 크게 나올 가능성은 거의 없음)
- **1:N 관계의 equijoin**: S가 many 쪽(더 큰 테이블)이라면 결과 카디널리티는 `card(S)`와 같다 (R의 각 행이 S의 여러 행과 매칭)
- **일반적인 non-equijoin**: `card(R ⋈ S) = SF(join) × card(S) × card(R)`
  - 다만 SF(join) 자체가 `card(R ⋈ S)`로 정의되어 있어 순환 참조(circular)가 생기므로 실제로 미리 예측하기는 어렵다.

### 세미 조인(semi-join)
- S가 1:N 관계에서 "1" 쪽 테이블일 때, 일반적인 조인은 S 전체를 R로 보내거나 R 전체를 S로 보내 조인해야 하므로 비용이 크다.
- 세미 조인은 통신 비용을 줄이기 위한 기법이다.
  1. S에서 조인 키(distinct key)만 뽑아 작은 한 컬럼짜리 테이블 S'를 만든다.
  2. S'를 R이 있는 사이트로 전송한다.
  3. S'와 R을 조인해 필요한 컬럼만 프로젝션한 R'을 만든다 (R의 일부 행만 추출됨).
  4. R'을 다시 S가 있는 사이트로 보내 S와 조인하고, 필요한 컬럼만 뽑아 최종 결과를 얻는다.
  - 이 과정을 통해 R과 S 사이에서 실제로 필요한 데이터만 이동하므로 통신량을 최소화할 수 있다.
- 세미 조인 결과의 크기 추정: S를 컬럼 A로 프로젝션한 값들의 카디널리티를, A의 전체 도메인 카디널리티로 나눈 선택도(selectivity factor)로 표현한다. 예: 미국 50개 주 중 동부 주(eastern states)만 조회한다면, `SF = (동부 주의 개수) / (전체 주의 개수)`

### Union / Difference 카디널리티 추정
- **Union(합집합)**
  - 상한(upper bound): `card(R) + card(S)` (모든 행이 서로 다른 경우)
  - 하한(lower bound): `max(card(R), card(S))` (한 테이블이 다른 테이블에 완전히 포함되는 경우)
- **Difference(차집합, R - S)**
  - 상한(upper bound): `card(R)` (S와 겹치는 행이 하나도 없는 경우)
  - 하한(lower bound): `0` (R의 모든 행이 S에도 존재해 전부 제거되는 경우)

## 예시
- 조인 선택도: `SF(R ⋈ S) = card(R ⋈ S) / (card(R) × card(S))`
- 중간 결과 크기: `size = card(관계) × length(한 행)`
- Selection: `card(selection) = SF × card(R)`
- `A = value`: `SF = 1 / |도메인|`
- `A > value`: `SF = (max - value) / (max - min)`
- `A < value`: `SF = (value - min) / (max - min)`
  - age 20~60 범위에서 "age < 30": `SF = (30-20)/(60-20) = 10/40 = 25%`
- AND 결합: `SF(p1 AND p2) = SF(p1) × SF(p2)`
- OR 결합: `SF(p1 OR p2) = SF(p1) + SF(p2) - SF(p1) × SF(p2)`
- Cartesian product: `card(R × S) = card(R) × card(S)`
- 세미 조인 선택도(예: 미국 주 중 동부 주): `SF = (동부 주 개수) / (전체 주 개수)`
- Union 상한/하한: `card(R) + card(S)` / `max(card(R), card(S))`
- Difference 상한/하한: `card(R)` / `0`

## 요약
- 쿼리 최적화 통계에는 컬럼 길이, distinct 값 개수(projected cardinality), min/max, domain cardinality, 프래그먼트의 행 수(cardinality)가 포함된다.
- 조인 선택도(join selectivity factor)는 `card(R⋈S) / (card(R)×card(S))`로 정의되며, 결과 크기는 카디널리티 × 행 길이로 계산한다.
- 균등 분포(uniform distribution)와 애트리뷰트 독립성(independence)이라는 두 가정을 바탕으로 selection, AND/OR 조건, projection, Cartesian product, join, union, difference의 카디널리티를 추정하는 공식을 유도한다.
- 세미 조인(semi-join)은 조인 키만 먼저 상대 사이트로 보내고 그 결과로 필요한 행만 다시 주고받아, 분산 환경에서 통신 비용을 최소화하는 기법이다.
