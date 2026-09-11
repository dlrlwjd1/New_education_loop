# Convert the ERD to the Relational Model

## 개요
- 완성한 PetsCare ERD에 Module 2의 변환 규칙을 적용해 관계형 스키마를 만든다.

## 내용

### 변환 절차
- 각 엔티티를 릴레이션으로 만들고 식별자를 기본키로 지정한다.
- 고객–반려동물, 고객–방문, 직원–방문의 1:N 관계는 1쪽 키를 N쪽 외래키로 옮긴다.
- 직원–반려동물 N:M 관계는 두 기본키를 가진 `Pets_Staff` 교차 릴레이션으로 만든다.
- 고객 추천과 직원 감독 관계는 각각 `ReferredByCustomerID`, `SupervisorID` 자기참조 외래키로 표현한다.

## 예시
```text
Customers(CustomerID PK, ..., ReferredByCustomerID FK)
Pets(CustomerID PK/FK, Pet# PK, ...)
Staff(EmployeeID PK, ..., SupervisorID FK)
Visit(VisitID PK, CustomerID FK, EmployeeID FK, ...)
Pets_Staff(CustomerID PK/FK, Pet# PK/FK, EmployeeID PK/FK)
```

## 요약
- 카디널리티에 따라 1:N은 N쪽 외래키, N:M은 교차 릴레이션, 단항 1:N은 자기참조 외래키로 변환한다.
