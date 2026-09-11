# Foundations of Distributed Database Systems

**Course URL:** [mooc.org/learn/foundations-of-distributed-database-systems](https://www.mooc.org/learn/foundations-of-distributed-database-systems)

Johns Hopkins University의 중급 분산 데이터베이스 설계 강좌. 분산 DB의 아키텍처·투명성, 사용자 쿼리 패턴에 따른 수평 분할(horizontal fragmentation), 속성 친화도(attribute affinity)에 기반한 수직 분할(vertical fragmentation)을 다룬다.

기존 저장소에는 관계형 ERD, 함수 종속성과 BCNF·4NF, 차원 모델링, 파티셔닝·인덱싱·복제·쿼리 성능 자료가 이미 있다. 이 강좌는 그 사이의 공백인 **전역 스키마를 여러 사이트에 어떤 fragment로 배치할지 결정하는 정형화된 설계 과정**을 보완한다.

## 모듈 구성

- **Module 1 - Course Introduction** — 강좌 안내 읽기 2개, 영상 없음
- [Module 2 - Introduction to Distributed Database System](Module%202%20-%20Introduction%20to%20Distributed%20Database%20System/) — 분산 DB 정의, 투명성, ANSI/SPARC 스키마 계층, 아키텍처 분류, 다중 DBMS와 관계대수
- [Module 3 - Horizontal Partitioning](Module%203%20-%20Horizontal%20Partitioning/) — top-down 설계, 수평·수직 fragment 비교, 정확성 조건, minterm 기반 수평 분할과 파생 분할
- [Module 4 - Vertical Partitioning](Module%204%20-%20Vertical%20Partitioning/) — Bell 수로 본 탐색 복잡도, affinity matrix, Bond Energy Algorithm과 최종 절단점 선택

## 강의 목록

### Module 2 - Introduction to Distributed Database System

1. [What is a Distributed Database System?](Module%202%20-%20Introduction%20to%20Distributed%20Database%20System/01%20What%20is%20a%20Distributed%20Database%20System.md)
2. [Transparency Issues](Module%202%20-%20Introduction%20to%20Distributed%20Database%20System/02%20Transparency%20Issues.md)
3. [Problems This Course Addresses](Module%202%20-%20Introduction%20to%20Distributed%20Database%20System/03%20Problems%20This%20Course%20Addresses.md)
4. [Normalization Addresses Anomalies in Database Systems](Module%202%20-%20Introduction%20to%20Distributed%20Database%20System/04%20Normalization%20Addresses%20Anomalies%20in%20Database%20Systems.md)
5. [ANSI-SPARC Database Architecture](Module%202%20-%20Introduction%20to%20Distributed%20Database%20System/05%20ANSI-SPARC%20Database%20Architecture.md)
6. [Database Architecture Categories](Module%202%20-%20Introduction%20to%20Distributed%20Database%20System/06%20Database%20Architecture%20Categories.md)
7. [Multi-Database Management System](Module%202%20-%20Introduction%20to%20Distributed%20Database%20System/07%20Multi-Database%20Management%20System.md)
8. [Relational Algebra Notation](Module%202%20-%20Introduction%20to%20Distributed%20Database%20System/08%20Relational%20Algebra%20Notation.md)

### Module 3 - Horizontal Partitioning

1. [The Top-Down Process](Module%203%20-%20Horizontal%20Partitioning/01%20The%20Top-Down%20Process.md)
2. [Example Fragmentation](Module%203%20-%20Horizontal%20Partitioning/02%20Example%20Fragmentation.md)
3. [Achieving Correct Fragmentation](Module%203%20-%20Horizontal%20Partitioning/03%20Achieving%20Correct%20Fragmentation.md)
4. [Working Through Horizontal Fragmentation](Module%203%20-%20Horizontal%20Partitioning/04%20Working%20Through%20Horizontal%20Fragmentation.md)
5. [Derived Horizontal Fragmentation](Module%203%20-%20Horizontal%20Partitioning/05%20Derived%20Horizontal%20Fragmentation.md)

### Module 4 - Vertical Partitioning

1. [Complexity of Vertical Fragmentation](Module%204%20-%20Vertical%20Partitioning/01%20Complexity%20of%20Vertical%20Fragmentation.md)
2. [Automating the Clustered Affinity Matrix](Module%204%20-%20Vertical%20Partitioning/02%20Automating%20the%20Clustered%20Affinity%20Matrix.md)
3. [Simplifying the Bond Energy Algorithm](Module%204%20-%20Vertical%20Partitioning/03%20Simplifying%20the%20Bond%20Energy%20Algorithm.md)
4. [The Partitioning Algorithm](Module%204%20-%20Vertical%20Partitioning/04%20The%20Partitioning%20Algorithm.md)

## 핵심 설계 흐름

```text
요구사항·전역 개념 스키마·사용자 뷰
  → 사이트별 쿼리와 접근 빈도 분석
  → 수평 predicate/minterm 또는 수직 attribute affinity 계산
  → fragment 후보 생성
  → 완전성·재구성 가능성·분리성 검증
  → 사이트 배치와 필요 복제 결정
  → 실제 사용 통계를 반영해 반복 개선
```

## 핵심 개념 요약

- **분산 투명성**: 사용자는 fragment의 위치·복제본·네트워크·물리 저장 방식을 몰라도 전역 스키마에 질의할 수 있어야 한다.
- **수평 분할**: 행을 predicate와 minterm으로 묶어 접근 확률이 비슷한 데이터끼리 같은 fragment에 둔다.
- **파생 수평 분할**: 부모 테이블의 fragment에 맞춰 자식 테이블을 조인 기준으로 분할해 사이트 간 조인을 줄인다.
- **수직 분할**: 같은 쿼리에서 함께 사용되는 열을 affinity matrix로 묶는다. 각 fragment에는 원본을 재구성할 key를 포함한다.
- **정확성 조건**: 모든 데이터가 포함되는 완전성(completeness), 원본을 복원할 수 있는 재구성(reconstruction), 불필요한 중복이 없는 분리성(disjointness)을 만족해야 한다.
- **휴리스틱**: 가능한 fragment 조합은 지수적으로 증가하므로 최적해 전수 탐색 대신 접근 패턴 기반의 좋은 해를 계산한다.
