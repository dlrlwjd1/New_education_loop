# Recap: Normalization of relational database models

## 개요

- 정규화 복습 — 이상(anomaly) 3종과 1NF·2NF·3NF의 해법 (M&G 주문·상품·고객 테이블 예제)

## 내용

### 이상 3종 복습

- **삽입 이상** — 새 데이터 삽입에 관련 없는 추가 데이터가 강제됨
- **갱신 이상** — 한 컬럼의 레코드 갱신이 테이블 전반의 연쇄 갱신을 요구
- **삭제 이상** — 한 레코드의 삭제가 필요한 다른 데이터까지 삭제

### 1NF — 원자성과 반복 그룹 제거

- **필드당 값 하나** — M&G products 테이블에서 약혼반지·다이아반지가 한 셀에 저장된 것은 원자성 위반.
- 해법: 상품 엔터티의 products 테이블(product ID로 유일 식별)과 고객 엔터티의 clients 테이블(ID)로 분리해 반복 데이터를 제거.

### 2NF — 부분 종속 제거

- 1NF 만족 + **복합 기본 키의 일부에만 의존하는 비키 속성 금지.**
- 예: delivery_status 테이블의 복합 키(order ID + product ID)에서 order date는 order ID만으로 결정 → **부분 종속** → order date를 orders 테이블로 옮겨 해결.

### 3NF — 이행 종속 제거

- 1NF·2NF 만족 + **비키 속성끼리 서로 의존 금지.**
- 예: orders 테이블의 city와 zip code는 둘 다 비키인데 zip code가 city를 결정 → 이행 종속 → orders 테이블과 city 테이블(zip code, city name)로 분리.

## 요약

- 정규화(1NF 원자성 → 2NF 부분 종속 제거 → 3NF 이행 종속 제거)로 삽입·갱신·삭제 이상과 중복·불일치를 해소한다.
- 각 단계는 이전 정규형의 충족을 전제로 한다.
