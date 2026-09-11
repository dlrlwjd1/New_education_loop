# What are Entities and Attributes (Identifiers)? (엔티티와 속성·식별자)

> 강좌: Relational Database Design (MOOC, 강사 Di Wu) · 모듈 1: Introduction to DBMS and Entity Relational Models

## 개요
- **개체-관계 모델(ER Model)**의 세 가지 목표(엔티티·속성/식별자·관계) 중 **엔티티(entity), 속성(attribute), 인스턴스(instance), 식별자(identifier)**를 다룬다.

## 내용

### ER 모델의 목표
1. DB가 기록할 **엔티티**를 기술.
2. 엔티티의 **속성과 식별자**를 기술.
3. 엔티티 간의 **관계**를 기술.

### 엔티티 (entity)
- **식별 가능한 추상적 관심 객체** — 객체지향의 **클래스(class)**와 유사. 값이 아닌 **구조만 있는 청사진(blueprint)**.
- 개념적·추상적이며, 개별 하나가 아니라 **그룹 전체**를 가리킴. 비유: **행이 없는 빈 테이블**(이름과 열 이름만 있음).
- 예(유형/tangible): Students, Employees, Companies, Products. 예(무형/behavior): **Transactions**(주문·배송 등).

### 속성 (attribute)
- 엔티티의 **특성·속성**, 기록하고 싶은 값. 물리 DB에서는 **테이블의 열(column) 이름**이 됨.
- 예: Students → first name·student ID·major·email·phone. Employees → employee ID·SSN·contact·department·supervisor. Companies → legal name·location·category·rank. Products → SKU·category·in-stock price·in-stock quantity. Transactions → CustomerID·StoreID·ProductID·price·quantity·tax·total·time.

### 인스턴스 (instance)
- 엔티티와 혼동하기 쉬움. 엔티티가 "그룹/구조"라면 인스턴스는 **실제 레코드 = 테이블의 한 행(row)**.
- 예: student 엔티티의 인스턴스 → (FirstName=Joe, StudentID=DB001, Major=Data Science).

### 식별자 (identifier)
- 특정 인스턴스를 **유일하게 구별**하는 특별한 속성. **고유(unique)**해야 함.
- **자연 식별자(natural)** — DB 밖에서 객체에 이미 존재(예: SSN). **인공 식별자(artificial)** — 직접 생성(예: EmployeeID). 민감 정보(SSN) 노출을 피하려 인공 ID를 선호하기도.
- 예:
  - Students → FirstName(동명이인 많음)·Major(다수) 부적합 → **StudentID**(인공, 고유).
  - Employees → **ID**(인공)·**SSN**(자연). 연락처는 변경·공유 가능성으로 부적합, department·supervisor는 다수라 부적합.
  - Companies → rank·category(변동·다수)·location(중복·변경 가능) 부적합 → **legal name**(등록·승인되어 중복 불가).
  - Products → **SKU 번호**(고유).

## 예시
```text
Students(StudentID identifier, FirstName, Major)
```
- `FirstName`과 `Major`는 중복될 수 있지만 인공 식별자 `StudentID`는 학생 인스턴스를 유일하게 구별한다.

## 요약
- **엔티티** = 관심 객체의 그룹(추상·구조=빈 테이블), **속성** = 엔티티의 특성(열), **인스턴스** = 실제 레코드(행).
- **식별자**는 인스턴스를 유일하게 구별하는 속성으로, **자연(SSN)** 또는 **인공(StudentID·EmployeeID)**이며 고유해야 한다.
