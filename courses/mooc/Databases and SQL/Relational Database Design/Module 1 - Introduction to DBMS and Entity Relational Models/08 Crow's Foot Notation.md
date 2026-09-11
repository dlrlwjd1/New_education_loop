# Crow's Foot Notation (까마귀발 표기법)

> 강좌: Relational Database Design (MOOC, 강사 Di Wu) · 모듈 1: Introduction to DBMS and Entity Relational Models

## 개요
- **crow's foot 표기법**으로 엔티티·속성·식별자·관계(카디널리티·참여)를 ERD로 그리는 법을 다룬다.

## 내용

### 엔티티·속성·식별자 표현
- **엔티티** = 상단에 이름을 쓴 **직사각형 상자**. 초기엔 관계 파악을 위해 이름만, 이후 속성 추가.
- **속성** = 상자 하단에 속성 목록.
- **식별자** = 속성 앞에 **별표(\*)**.

### 관계 표현 — 카디널리티와 참여
관계는 두 엔티티를 잇는 선이며, 이름(동사)을 붙임. 선 끝의 기호로 카디널리티·참여 표시:
- **카디널리티(최대)**:
  - **1(one)** = 세로 막대(bar) 한 개 ("1"처럼 생각).
  - **다(many)** = 까마귀발(foot, 세 갈래) ("many").
- **참여(최소)**:
  - **필수(mandatory)** = 막대(bar) = 1.
  - **선택(optional)** = 원(circle) = 0.
- 기호는 **엔티티에서 먼 쪽 = 최소(참여)**, **가까운 쪽 = 최대(카디널리티)** 순으로 읽음.

### 예 — 네 가지 관계 조합 (참여·카디널리티)
- **one and only one** = 필수(1) + 카디널리티 1 → 막대+막대.
- **zero or one** = 선택(0) + 카디널리티 1 → 원+막대. (may + 1)
- **one or many** = 필수(1) + 카디널리티 다 → 막대+까마귀발.
- **zero or many** = 선택(0) + 카디널리티 다 → 원+까마귀발. (may + many)
- 서술형(must/may, one/many)을 그래프로 직역: mandatory→최소 1, optional→최소 0, one→최대 1(bar), many→최대 다(foot).
- 관계의 방향을 뒤집어 표현할 수도 있으며, 이 네 조합이 관계의 기본형이다.

## 예시
```text
Customer ||--o{ Order
```
- 주문은 정확히 한 고객에 속하고, 고객은 주문을 0개 이상 가질 수 있다는 뜻이다.

## 요약
- crow's foot: 엔티티=상자(이름/속성/\*식별자), 관계=선 끝 기호.
- **카디널리티**: bar=1, foot=many. **참여**: bar=mandatory(1), circle=optional(0).
- 조합: one and only one / zero or one / one or many / zero or many.
