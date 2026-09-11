# Relational Database Design (Illinois Tech)

Illinois Institute of Technology의 중급 관계형 설계 강좌로, UML ER 모델과 관계 스키마 변환에서 함수 종속성의 closure·candidate key·canonical cover, BCNF·4NF까지 진행한다. 강사는 Gerald Balekaki (Illinois Tech 컴퓨터과학과 teaching professor).

- 강좌: https://www.mooc.org/learn/illinois-tech-relational-database-design
- 구성: 핵심 학습 모듈 3개(강의 영상 10개) + 종합 평가 모듈 1개
- 노트: 강의별 Transcript 기반 한국어 정리 10개 (형식: 개요/내용/예시/요약, 기술 용어 영어 병기)
- 제외: 연습·채점 평가와 잠금된 해답, 강의 없는 Module 4(Summative Course Assessment)

## 강의 목록

### Module 1 - Design Overview

1. [Instructor Welcome and Course Introduction](Module%201%20-%20Design%20Overview/01%20Instructor%20Welcome%20and%20Course%20Introduction.md) — 강좌 구조(ER 모델링 → FD → 정규화)와 목표
2. **Entity - Relationship (ER) Model**%20Model.md) — 설계 프로세스 5단계, Chen·UML·Crow's Foot 표기법, 다중성, 속성 유형, 키
3. **Creating an Entity - Relationship Diagram (ERD)**.md) — 은행 DB 사례(규칙→ERD→스키마), 키 이동 원리, 브리지 엔터티로 M:N 해소
4. [Extended ER Model-Diagram](Module%201%20-%20Design%20Overview/04%20Extended%20ER%20Model-Diagram.md) — 슈퍼타입/서브타입, 특수화/일반화, 중첩/분리·완전성 제약, 약한 엔터티, 복합·다중값 속성 스키마 표현, 설계 이슈 4가지

### Module 2 - Functional Dependency

1. **Functional Dependency (FD)**.md) — FD 형식 정의, 결정자/종속자, 완전·부분·이행 종속, 데이터에서 FD 찾기
2. [Attribute Closure and Candidate Keys](Module%202%20-%20Functional%20Dependency/02%20Attribute%20Closure%20and%20Candidate%20Keys.md) — 폐포 알고리즘, Armstrong 공리, 후보 키 판별
3. **Canonical (Minimal) Cover of FDs**%20Cover%20of%20FDs.md) — 외적 속성 검사, 합집합/분해/의사이행 규칙, 정준 커버 5단계 계산, FD 다이어그램

### Module 3 - Database Normalization

1. [Database Normalization](Module%203%20-%20Database%20Normalization/01%20Database%20Normalization.md) — 무손실 분해·종속성 보존, 이상(anomaly) 3종, UNF→1NF→2NF→3NF 변환
2. [Boyce-Codd Normal Form](Module%203%20-%20Database%20Normalization/02%20Boyce-Codd%20Normal%20Form.md) — BCNF 조건·감산 알고리즘, MVD와 4NF, 실무에서는 3NF면 충분
3. **Database Design Example (Normalization + ERD)**.md) — 종합 예제: 스프레드시트 → 3NF 테이블·스키마·ERD, 대리 키 도입

### Module 4 - Summative Course Assessment

- 강의 영상 없이 종합 평가만 있는 모듈 (학업 정직성 정책에 따라 정리 제외)
