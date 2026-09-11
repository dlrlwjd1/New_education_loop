# Relational Algebra Notation

## 개요

- 분산 질의 계획을 표현하는 데 필요한 관계대수(relational algebra)의 기본·파생 연산을 복습한다.
- 선택, 투영, 합집합, 차집합, 곱집합과 join을 SQL에 대응시킨다.

## 내용

### 기본 연산

- 선택(selection, `σ`): 조건을 만족하는 행
- 투영(projection, `π`): 필요한 열
- 합집합(union, `∪`): 호환되는 두 릴레이션의 행 결합
- 차집합(difference, `−`): 왼쪽에서 오른쪽과 같은 행 제거
- 카테시안 곱(Cartesian product, `×`): 두 릴레이션의 모든 행 조합

### 파생 연산

교집합, theta join, natural join과 semi-join은 기본 연산의 조합으로 표현할 수 있다. 분산 환경에서는 selection·projection을 원격 사이트로 밀어 넣어 전송할 행과 열을 줄이고, semi-join으로 불필요한 전체 테이블 이동을 줄일 수 있다.

## 예시

```text
σ cost = 3 (Part)
π part_name, cost (Part)
R ∪ S
R − S
R ⋈ R.manufacturer_id = S.manufacturer_id S
```

```sql
SELECT p.part_name, p.cost, m.name
FROM part AS p
JOIN manufacturer AS m
  ON m.manufacturer_id = p.manufacturer_id
WHERE p.cost = 3;
```

## 요약

- 관계대수는 SQL을 실행 연산 트리로 변환하는 이론적 기반이다.
- 선택은 행, 투영은 열을 줄인다.
- 분산 질의에서는 연산 위치와 중간 결과의 크기가 네트워크 비용을 좌우한다.
