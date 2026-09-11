# Entity Relationship Model Representation (ER 모델 표현)

> 강좌: Relational Database Design (MOOC, 강사 Di Wu) · 모듈 1: Introduction to DBMS and Entity Relational Models

## 개요
- 서술형(narrative) ER 모델의 비효율을 보완하는 **개체-관계 다이어그램(ERD)**과 그 표기법, 사용 도구를 소개한다.

## 내용
- 서술형 ER 모델은 언어에 의존하고 must/may/one and only one/one or more를 반복해야 해 **비효율적**이며 이해가 느림.
- **ERD**는 명시적·명확하며 언어 장벽이 없음. 표현 대상:
  - **엔티티** + 속성 + 식별자.
  - **관계** + 카디널리티 + 참여.
  - DB 설계의 고수준 그림(엔티티 조직·연결·관계 관리).
- **ERD 표기법(notation)**:
  - **UML(Unified Modeling Language)** — 널리 쓰임.
  - **Chen's notation**.
  - **Crow's foot notation** — **이 강좌·전문 과정에서 사용·시험**하는 표기법.
- **도구**: **Lucid.app / lucidchart.com** (무료 계정 또는 Google 로그인)으로 ERD를 그림.

## 예시
- Lucidchart에서 `Student`와 `Course` 상자를 관계선으로 연결하고 양 끝의 Crow's Foot 기호로 선택성·카디널리티를 표시한다.

## 요약
- 서술형 ER 모델 대신 **ERD**로 엔티티·속성·식별자·관계·카디널리티·참여를 명확히 표현한다.
- 이 강좌는 **crow's foot 표기법**과 **Lucidchart** 도구를 사용한다.
