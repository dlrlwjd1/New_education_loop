# Final Project - Creating a Data Model

## 개요
- Adventure Works 영업 데이터를 이용해 스타 스키마와 스노우플레이크 확장, DAX 측정값, 역할 수행 디멘션, 개인정보 마스킹을 하나의 Power BI 모델에 적용한다.

## 내용

### 모델 준비
1. Power BI의 관계 자동 검색을 끈다.
2. Excel의 `Continent`, `Region`, `Salesperson`, `Sales` 네 테이블을 적재한다.
3. 기본 키와 외래 키인 `ContinentID`, `SalesTerritoryKey`, `EmployeeKey`, `ManagerEmployeeKey`의 고유성과 반복 구조를 확인한다.

### 스타·스노우플레이크 스키마
- `Sales`를 팩트, `Salesperson`과 `Region`을 직접 연결된 디멘션으로 구성한다.
- `Salesperson[EmployeeKey]` → `Sales[EmployeeKey]`, `Region[SalesTerritoryKey]` → `Sales[SalesTerritoryKey]`를 1:N으로 연결한다.
- `Continent[ContinentID]` → `Region[ContinentID]`를 연결해 지역 디멘션을 대륙까지 확장한 스노우플레이크 계층을 만든다.
- 필터는 디멘션에서 팩트 방향으로 흐르게 한다.

### 유럽 매출 측정값
```DAX
Europe Sales =
CALCULATE(
    SUM(Sales[Sales Amount]),
    Continent[Continent] = "Europe"
)
```
- 판매원별 전체 매출과 유럽 매출을 같은 표에 두어 지역 기여도를 비교한다.

### 관리자 역할 수행 디멘션
- `Salesperson[EmployeeKey]`와 `Sales[ManagerEmployeeKey]` 사이에 두 번째 비활성 관계를 만든다.
```DAX
Manager Sales Amount =
CALCULATE(
    SUM(Sales[Sales Amount]),
    USERELATIONSHIP(Sales[ManagerEmployeeKey], Salesperson[EmployeeKey])
)
```
- 기본 관계는 판매원 분석에, 비활성 관계는 관리자별 담당 매출 분석에 사용한다.

### 개인정보 마스킹
- Power Query에서 이름과 성의 첫 글자만 남기고 나머지를 `*`로 바꾼 사용자 지정 열을 만든다.
```powerquery
Text.Start([Salesperson], 1)
& Text.Repeat("*", Text.Length(Text.BeforeDelimiter([Salesperson], " ")) - 1)
& " "
& Text.Start(Text.AfterDelimiter([Salesperson], " "), 1)
& Text.Repeat("*", Text.Length(Text.AfterDelimiter([Salesperson], " ")) - 1)
```
- 보고서에서 마스킹 열로 교체한 뒤 원본 이름 열을 모델에서 제거한다.

## 예시
- 완성된 보고서로 유럽의 글로벌 매출 비중, 유럽 판매원 순위와 전체 순위의 차이, 최고 성과 관리자와 소속 지역, 활동 관리자 수를 분석한다.

## 요약
- 최종 프로젝트는 관계 설계, 필터 컨텍스트, 비활성 관계, 데이터 보호를 하나의 모델에서 통합한다.
- 정확한 분석뿐 아니라 민감 정보가 최종 데이터셋에 남지 않도록 하는 설계가 중요하다.
