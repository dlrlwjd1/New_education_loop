# What are Keys? (키란?)

> 강좌: Relational Database Design (MOOC, 강사 Di Wu) · 모듈 2: Relational Models

## 개요
- 릴레이션에서 튜플을 유일하게 식별하는 여러 종류의 **키(key)** — 슈퍼키·후보키·기본키·대체키·외래키를 다룬다.

## 내용

### 튜플을 유일하게 식별하는 키들
- **슈퍼키(superkey)** — 튜플을 **유일하게 식별**하는 속성(또는 속성 집합). 개수 제한 없음. 극단적으로 모든 속성을 합친 것도 슈퍼키. 최소 크기가 아닐 수 있음.
- **후보키(candidate key)** — **최소 크기의 슈퍼키**. 어떤 진부분집합(proper subset)도 슈퍼키가 아님(불필요한 속성이 없음). 모든 속성이 식별에 필요.
- **기본키(primary key)** — 선택된 후보키. (여러 후보키 중 최적을 고르는 것이 과제.)
- **대체키(alternate key)** — 선택되지 않은 후보키.
- **외래키(foreign key)** — 다른 릴레이션과의 **연결**. 대개 **다른 릴레이션의 기본키**가 이 릴레이션에서 외래키가 됨.

### 예시
- `Stores`(store ID, street, city, zip): street·city·zip는 (같은 거리·도시·zip에 여러 매장 가능) 부적합 → **store ID**가 기본키(최소·단일).
- `Employees`(employee ID, first name, last name, DOB, ...): 
  - first name+last name → 동명이인(John John, ... Ford)으로 유일 식별 불가 → 키 아님.
  - first name+last name+DOB → 샘플에선 되지만 백만 건 규모에선 보장 못 함.
  - → **employee ID**가 유일한 후보키(따라서 기본키).
  - **슈퍼키**: employee ID를 포함한 모든 속성 조합(employee ID+first name 등). 불필요한 속성을 제거하면 후보키.
- **외래키**: `Stores`의 기본키 `store ID`가 `Employees`에 있으면 그것이 외래키(직원이 어느 매장에서 일하는지 표시).

## 요약
- 유일 식별 키 계층: **슈퍼키(크기 무관) ⊃ 후보키(최소) → 기본키(선택됨)/대체키(미선택)**.
- **외래키**는 다른 릴레이션의 기본키를 참조해 테이블 간 관계를 성립시킨다.
