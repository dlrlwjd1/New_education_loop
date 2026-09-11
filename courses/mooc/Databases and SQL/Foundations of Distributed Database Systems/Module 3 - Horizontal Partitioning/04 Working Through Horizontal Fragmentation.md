# Working Through Horizontal Fragmentation

## 개요

- 애플리케이션의 predicate와 접근 빈도를 이용해 수평 fragment를 만드는 절차를 설명한다.
- 단순 predicate를 minterm으로 조합한 뒤 모순·포함 관계를 제거한다.

## 내용

### 좋은 fragment의 목표

한 fragment 안의 행은 특정 애플리케이션이 접근할 확률이 비슷해야 한다. 서로 다른 fragment의 접근 확률은 의미 있게 달라야 한다. 차이가 너무 작을 때까지 분할하면 행마다 fragment가 생겨 관리 비용만 커진다.

### predicate 선택

실제 질의의 `WHERE` 조건에서 분할 효과가 있는 완전하고 최소인 predicate 집합을 고른다. 예산이 0부터 백만까지라고 모든 값을 개별 predicate로 만들지 않고, 접근 패턴이 달라지는 경계를 찾는다.

### minterm 정리

predicate와 부정을 조합해 minterm을 만든다. 동시에 참일 수 없는 조합은 제거하고, 더 구체적인 minterm에 포함되는 표현도 제거한다. 남은 minterm이 fragment를 정의한다.

## 예시

```text
p1: budget <= 200000
p2: location = 'Montreal'

m1: p1 ∧ p2
m2: p1 ∧ ¬p2
m3: ¬p1 ∧ p2
m4: ¬p1 ∧ ¬p2
```

질의를 분석했을 때 location이 아니라 budget만 접근 빈도를 구분한다면 `p2`를 제거해 fragment 수를 줄인다.

## 요약

- predicate는 실제 query workload에서 도출한다.
- minterm 수는 predicate 수에 따라 지수적으로 증가한다.
- 모순·중복·효과 없는 조건을 제거하는 휴리스틱이 필요하다.
