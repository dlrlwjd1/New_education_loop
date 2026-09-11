# Building a Star Schema in Power BI

## 개요
- Power BI 모델 보기에서 팩트·디멘션 관계, 카디널리티, 교차 필터 방향을 설정해 스타 스키마를 구축한다.

## 내용

### 준비와 데이터 적재
1. `File > Options and settings > Options > Current File > Data Load`에서 새 관계 자동 검색을 끈다.
2. `Home > Get Data > Excel Workbook`으로 `Products`, `Region`, `Sales`, `Salesperson` 테이블을 불러온다.
3. 모델 보기에서 중앙의 `Sales`를 팩트 테이블로, 나머지를 디멘션 테이블로 배치한다.

### 관계 생성
- 공통 키를 한 테이블에서 다른 테이블로 끌어 관계를 만든다.
- `Products[Product Key]` → `Sales[Product Key]`
- `Region[Sales Territory Key]` → `Sales[Sales Territory Key]`
- `Salesperson[Employee Key]` → `Sales[Employee Key]`
- `Manage Relationships`에서 새 관계 생성, 편집, 삭제를 수행할 수도 있다.

### 카디널리티와 필터 방향
- 디멘션의 고유 키에서 팩트의 반복 외래 키로 **일대다(1:N)** 관계를 설정한다.
- 기본 분석 모델에서는 **단방향(Single)** 필터로 디멘션이 팩트를 필터링하게 한다.
- 양방향(Both)은 양쪽으로 필터가 전파되지만 경로가 복잡해질 수 있으므로 명확한 필요가 있을 때 사용한다.

## 예시
- `Product`, `Region`, `Salesperson`에서 선택한 조건이 중앙 `Sales`에 전달되도록 하면 제품별·지역별·판매원별 매출을 일관된 방식으로 계산할 수 있다.

## 요약
- 스타 스키마는 중앙 팩트와 직접 연결된 디멘션으로 구성된다.
- 관계 자동 검색을 끄고 키, 1:N 카디널리티, 단방향 필터를 명시적으로 설정하면 모델 동작을 예측하기 쉽다.

