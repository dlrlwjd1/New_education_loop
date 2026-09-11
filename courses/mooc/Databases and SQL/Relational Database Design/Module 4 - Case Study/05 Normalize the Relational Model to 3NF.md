# Normalize the Relational Model to 3NF

## 개요
- PetsCare 릴레이션의 함수 종속성을 확인하고 부분·이행 종속을 제거해 3NF로 만든다.

## 내용

### 확인된 함수 종속성
- `CustomerID`는 Customers의 모든 비키 속성을, `EmployeeID`는 Staff의 모든 비키 속성을 결정한다.
- Pets에서 `(CustomerID, Pet#)`이 반려동물 속성을 결정하지만 `CustomerID → Address, Email, Phone`이고 `SpeciesBreed → SpeciesBreedDescription`이다.
- Visit에서 `VisitID`가 방문 속성을 결정하지만 `ServiceID → ServiceName, ServicePrice, ServiceDescription`이다.
- `Pets_Staff`에는 비키 속성이 없다.

### 3NF 분해
- Pets의 고객 연락처는 Customers에 이미 있으므로 Pets에서 제거해 부분 종속을 없앤다.
- 품종 설명은 `Species(SpeciesBreed, SpeciesBreedDescription)`로 분리한다.
- 서비스 정보는 `Service(ServiceID, ServiceName, ServicePrice, ServiceDescription)`로 분리하고 Visit에는 `ServiceID`만 둔다.
- 각 새 릴레이션의 기본키와 원본 릴레이션의 외래키 연결을 확인한다.

## 예시
```text
Pets(CustomerID, Pet#, NickName, Category, SpeciesBreed, Gender, DoB, Notes)
Species(SpeciesBreed, SpeciesBreedDescription)
Visit(VisitID, Date, Time, CustomerID, Pet#, ServiceID, EmployeeID, Bill, Paid)
Service(ServiceID, ServiceName, ServicePrice, ServiceDescription)
```

## 요약
- 고객 연락처의 부분 종속과 품종·서비스 설명의 이행 종속을 분리하면 모델을 3NF로 정리할 수 있다.
