# How is data related?

## 개요

- 데이터베이스 안의 데이터가 왜 서로 관련되어야 하는지, 테이블 간 관계가 어떻게 성립하는지
- 필드(field)·레코드(record)·기본 키(primary key)·외래 키(foreign key)의 역할을 온라인 상점 예제로 설명

## 내용

### 데이터는 고립될 수 없다

- 데이터베이스에 저장된 데이터는 **다른 데이터와 관계를 맺어야** 의미 있는 정보로 가공될 수 있다.
- 예: 대형 온라인 상점 데이터베이스에서 한 테이블에서 고객 정보를 찾고, 다른 테이블에서 그 고객의 주문을 찾으려면 두 테이블 사이에 연결이 필요하다.

### 테이블의 구조 — 필드와 레코드

- Customer 테이블의 컬럼: CustomerID, FirstName, LastName, Email → 관계형 용어로 **필드(field)**
- 각 행은 필드 값들을 담는 **레코드(record)**
- 필드와 레코드가 모여 **엔터티(entity)**(여기서는 고객) 정보를 저장하며, 각 행은 고객 엔터티의 **인스턴스**다 (예: C1 Sarah Hogan, C4 Katrina Langley).

### 기본 키(Primary Key)

- 모든 인스턴스(레코드)는 **유일하게 식별 가능**해야 한다.
- 두 고객이 같은 이름을 가질 수 있으므로, **유일한 값만 담는 필드**(CustomerID)를 기본 키로 사용한다.
- 기본 키 값은 테이블 안에서 중복될 수 없으므로, 동명이인이라도 서로 다른 CustomerID로 구분된다.

### 외래 키(Foreign Key)로 관계 맺기

- Order 테이블의 기본 키는 OrderID다. 그런데 Customer 테이블과 **동일한 데이터를 담는 CustomerID 필드**도 있다.
- 이 CustomerID는 **누가 주문했는지 식별**하기 위한 것으로, 이 필드를 추가함으로써 Customer 테이블과 Order 테이블 사이에 **관계가 성립**한다.
- Order 테이블의 CustomerID처럼, **다른 테이블(원본 테이블)의 기본 키에 연결되는 필드를 외래 키(foreign key)**라 한다.
- CustomerID는 Customer 테이블에서는 기본 키이고, Order 테이블에서는 외래 키가 된다. 이 관계 덕분에 두 테이블에서 의미 있는 방식으로 데이터를 함께 조회할 수 있다.

## 예시

```text
Customer(CustomerID[PK], FirstName, LastName, Email)
  C1  Sarah    Hogan     ...
  C4  Katrina  Langley   ...

Order(OrderID[PK], CustomerID[FK → Customer], ...)
```

주문 상세를 찾을 때: Order의 CustomerID를 Customer의 CustomerID와 대조해 "이 주문을 한 고객"을 식별한다.

## 요약

- 데이터는 관계를 맺어야 의미 있는 정보가 되므로, 테이블 간 연결이 필수다.
- 컬럼은 필드, 행은 레코드이며 각 레코드는 엔터티의 인스턴스다.
- 기본 키는 테이블 내에서 중복 불가능한 유일 식별자다.
- 외래 키는 원본 테이블의 기본 키를 참조하는 다른 테이블의 필드로, 이를 통해 테이블 간 관계가 성립한다.
