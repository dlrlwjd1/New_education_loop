# What are Relational Schemas? (관계형 스키마란?)

> 강좌: Relational Database Design (MOOC, 강사 Di Wu) · 모듈 2: Relational Models

## 개요
- 데이터베이스 릴레이션을 표현하는 **관계형 스키마(relational schema)** 표기법과, 릴레이션의 특성(properties)을 다룬다.

## 내용

### 관계형 스키마 표기
- 릴레이션 = 속성 집합과 그 도메인으로 정의(이 모듈에선 단순화를 위해 도메인 생략, 실제 구현 시 명시).
- 일반 형식: `Name(attribute_1, attribute_2, ..., attribute_N)`
  - **기본키** = 밑줄(underline).
  - **외래키** = 속성 뒤에 **FK** 표기.
- 예:
  - `Stores(store ID, street, city, zip)` — store ID 밑줄.
  - `Employees(employee ID, first name, last name, DOB, position, department, store ID FK)` — employee ID 밑줄, store ID는 FK.

### 릴레이션의 특성 (properties)
- **각 튜플(행)은 서로 다름(distinct)** — 완전히 같은 두 행은 불필요·중복.
- **속성(열)의 순서는 무의미**.
- **튜플(행)의 순서는 이론상 무의미** — 단, 실무에선 인덱스·정렬이 없으면 접근·쿼리가 매우 비효율적이라 차이가 있음.
- **각 셀은 정확히 하나의 값** — 한 직원이 두 매장에서 일하는 식이면 구조 변경 필요(정규화에서 상세). 
- **각 속성은 고유한 이름** — 같은 릴레이션 내 동일 이름 열 불가(다른 릴레이션끼리는 같은 이름 OK).
- **한 속성의 값은 모두 같은 도메인**에서 옴.
- **릴레이션 이름은 모두 고유** — 같은 이름 테이블 두 개 불가.

## 예시
```text
Employee(EmployeeID PK, DepartmentID FK, Name)
Department(DepartmentID PK, DepartmentName)
```
- `DepartmentID`는 두 릴레이션을 연결하되 각 릴레이션 안에서는 속성명이 한 번만 나타난다.

## 요약
- 관계형 스키마: `Name(attr1, attr2, ...)` — **밑줄=기본키, FK=외래키**로 릴레이션을 표현.
- 릴레이션 특성: 튜플 distinct, 열·행 순서 무의미(실무는 인덱스 중요), **셀당 단일 값**, 속성명·릴레이션명 고유, 값은 동일 도메인.
