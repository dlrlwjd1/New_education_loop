# What are Relationships? Degree, Cardinality and Participation (관계 — 차수·카디널리티·참여)

> 강좌: Relational Database Design (MOOC, 강사 Di Wu) · 모듈 1: Introduction to DBMS and Entity Relational Models

## 개요
- ER 모델의 세 번째 요소인 **관계(relationship)**와 그 속성 **차수(degree)·카디널리티(cardinality)·참여(participation)**를 다룬다.

## 내용

### 관계 (relationship)
- 둘 이상 엔티티 간의 **연관** — 엔티티들의 멤버가 어떻게 연결되는지. 보통 **동사**로 명명(예: 회사가 제품을 "생산한다").
- 카디널리티·참여는 **도메인 지식·맥락**으로 판단해야 함(예: 정규직/시간제에 따라 직원이 여러 회사에서 일할 수 있는지 달라짐).

### 차수 (degree)
- 관계에 **관여하는 엔티티의 수**.
- **1개 = 단항/재귀(unary/recursive)**, **2개 = 이항(binary)**(가장 흔함), **2개 초과** = 관계형 DB가 직접 못 다뤄 1·2차로 변환 필요.

### 카디널리티 (cardinality)
- "몇 개인가" — 관계에 관여하는 엔티티 **인스턴스의 수**(= max cardinality, multiplicity).
- 세 유형: **일대다(one-to-many)**, **다대일(many-to-one)**, **다대다(many-to-many)**. (다대다의 두 "many"는 서로 다를 수 있음.)

### 참여 (participation)
- **최소 카디널리티** — 관계가 **필수(mandatory)**인지 **선택(optional)**인지. (= optionality, minimal cardinality.)
- 한 엔티티의 인스턴스가 상대 엔티티에 대응 인스턴스를 **반드시 가져야 하는가(필수)** 또는 **없어도 되는가(선택)**. → 구현 시 **참조 무결성**으로 반영.

## 예시 — 온라인 교육 회사 (실습 준비)
클라이언트와 논의해 엔티티·속성·식별자·관계를 정리:
- **엔티티**: Instructors, Courses, Programs, Students.
- **식별자(\* 표시)**: Instructor → **\*EmpID**, Course → **\*course number**, Program → **\*title**, Student → **\*student ID**.
- **관계**(may=선택 참여, must=필수 참여, one and only one=카디널리티 1, one or more=카디널리티 many):
  - 강사는 여러 과목을 가르칠 수 있음(선택·다), 과목은 여러 강사가 가르칠 수 있음(선택·다) → 다대다.
  - 각 과목은 **정확히 하나**의 프로그램에 속함(필수·1), 각 프로그램은 하나 이상 과목을 가짐(필수·다).
  - 학생은 여러 과목 수강 가능(선택·다), 과목은 하나 이상 학생을 가짐(필수·다).
  - 학생은 **정확히 하나**의 프로그램에 속함(필수·1), 프로그램은 하나 이상 학생(선택·다).
  - 학생은 다른 학생의 친구일 수 있음(선택·다, 재귀 관계).
  - 학생은 **정확히 한 명**의 강사를 지도교수로 가짐(필수·1), 강사는 하나 이상 학생 지도(선택·다).

## 요약
- 관계는 엔티티 간 연관(동사로 명명)이며, 세 속성으로 기술: **차수**(관여 엔티티 수: 단항·이항·다항), **카디널리티**(최대 수: 1:N·N:1·N:N), **참여**(최소: 필수/선택).
- 관계를 명세할 때 **may/must, one and only one/one or more**를 명시적으로 적어 참여·카디널리티를 표현한다.
