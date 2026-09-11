# Table relationships

## 개요

- 관계형 모델에서 테이블 간 관계 3종: 일대다(1:N), 일대일(1:1), 다대다(M:N)
- ER 다이어그램(ERD)으로 관계를 표기하는 기초

## 내용

### 왜 관계가 중요한가

- 대학 데이터베이스의 학생 테이블(학번, 코스 ID)과 코스 테이블(코스 ID, 학과)에서 "어느 학생이 무슨 과목을 듣는가?"에 답하려면 테이블을 올바르게 구조화·연결해야 한다.

### 일대다 (One-to-Many)

- 한 테이블의 **한 레코드가 다른 테이블의 여러 레코드**와 연결.
- 예: ID 1 학생이 코스 테이블의 두 과목에 등록 → "A student is enrolled in many courses."
- 기본 ERD 표기: 엔터티(student, course)는 직사각형, 관계(enrolled)는 다이아몬드, **many는 까마귀발(Crow's foot) 기호**.
- 키를 포함한 상세 ERD: student 테이블의 course ID는 **외래 키(FK)**로 course 테이블의 **기본 키(PK)** course ID를 참조한다.

### 일대일 (One-to-One)

- 한 테이블의 **한 레코드가 다른 테이블의 딱 한 레코드**와 연결.
- 예: 학과 스태프 테이블과 학과 위치 테이블 — 각 학과장은 캠퍼스의 한 학과 건물에 속한다 → "One department head leads one department."

### 다대다 (Many-to-Many)

- 한 테이블의 한 레코드가 다른 테이블의 여러 레코드와 연결되고, **반대 방향도 성립**.
- 예: 학생 Maurice Doyle이 연구 프로젝트 2개를 수행하고 각 프로젝트는 다른 교직원이 지도하며, 한 교직원도 여러 학생을 지도할 수 있다 → "Many students are supervised by many staff."

## 예시

| 관계 | 예 | ERD 표현 |
|---|---|---|
| 1:N | 학생 1명 — 여러 과목 수강 | student —enrolled(◇)— course, many 쪽에 까마귀발 |
| 1:1 | 학과장 1명 — 학과 1개 | 양쪽 단일 연결 |
| M:N | 여러 학생 — 여러 지도 교직원 | 양쪽 모두 many |

## 요약

- 테이블 간 관계는 1:N, 1:1, M:N 세 가지다.
- ERD에서 엔터티·관계·카디널리티(까마귀발 등)로 관계를 시각화하고, FK가 다른 테이블의 PK를 참조하며 관계가 성립한다.
