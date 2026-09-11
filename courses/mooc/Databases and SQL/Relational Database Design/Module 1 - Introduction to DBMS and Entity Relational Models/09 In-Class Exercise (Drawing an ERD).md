# In-Class Exercise: Drawing an ERD (실습 — ERD 그리기)

> 강좌: Relational Database Design (MOOC, 강사 Di Wu) · 모듈 1: Introduction to DBMS and Entity Relational Models

## 개요
- 앞서 정의한 ER 모델(온라인 교육 시스템)을 **Lucidchart**에서 **crow's foot ERD**로 변환하는 실습.

## 내용

### Lucidchart 준비
- `lucid.app` / `lucidchart.com` → **New → Lucidchart → Blank Document**. 제목 지정(예: "ERD Practice"). 한 문서에 여러 페이지 가능.
- ERD는 기본 도형이 아니므로 **Shapes → "Entity Relationship" 라이브러리를 체크**해 추가해야 함.

### 엔티티 그리기
- ER 라이브러리에서 **Entity 도형을 드래그**해 배치. 이름과 필드(속성) 개수를 조정.
- 예: `Instructor`(name, \*EmpID, SSN, DOB, email, salary), `Course`(\*course number, title, time, location, description), `Program`(\*title, chair, office number, contact, description), `Student`(name, \*StuID, DOB, email).
- 팁: 기존 엔티티를 **복사·붙여넣기**해 새 엔티티를 빠르게 생성. 행 추가/삭제로 필드 조정.

### 관계 그리기 (서술 → 0/1/N 변환)
엔티티 위에서 드래그해 선을 연결, 더블클릭으로 관계명(동사) 추가, 선 끝점을 참여·카디널리티에 맞게 변경:
- 강사 **may** teach **multiple** courses → 강사·과목 양쪽 **0 or N** ("teach").
- 각 과목 **must** belong to **one and only one** program → 프로그램 쪽 **1 and 1**, 과목 쪽 **1 or N** ("belong to").
- 학생 **may** take **multiple** courses → 과목 쪽 **0 or N**, 학생 쪽 **1 or N** ("take").
- 학생 **must** belong to **exactly one** program → 프로그램 쪽 **1 and 1**, 학생 쪽 **0 or N**.
- 학생 **may** be friend of other students → **재귀 관계**, 양쪽 **0 or N** ("friend").
- 학생 **must** have **exactly one** instructor as advisor → 강사 쪽 **1 and 1**, 학생 쪽 **0 or N** ("advise").

변환 규칙: **may→0(optional), must→1(mandatory)**, **one→1(bar), many/multiple→N(foot)**.

## 예시
- “학생은 정확히 한 프로그램에 속한다”를 학생 쪽 여러 개, 프로그램 쪽 정확히 하나의 끝점으로 그려 문장과 도식이 일치하는지 역으로 읽어 확인한다.

## 요약
- Lucidchart에서 ER 라이브러리를 켜고 엔티티(이름·속성·\*식별자)를 배치한 뒤, 관계를 선으로 연결하고 **서술(may/must, one/many)을 0/1/N 끝점 기호로 변환**한다.
- 이 실습으로 ER 모델 → ERD 표현·해석을 익히며, 다음 단계는 ERD를 **관계형 모델**로 변환하는 것. (모듈 1 종료)
