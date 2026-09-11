# Normalization Addresses Anomalies in Database Systems

## 개요

- 하나의 보편 릴레이션(universal relation)에 여러 엔터티를 넣을 때 생기는 이상 현상을 복습한다.
- 정규화가 분산 배치 이전의 논리 설계를 안정화하는 이유를 설명한다.

## 내용

### 반복·갱신 이상

Part와 Manufacturer 정보를 한 테이블에 두면 같은 제조사의 주소·전화번호가 부품마다 반복된다. 제조사가 이전하면 관련된 모든 행을 수정해야 하며 일부만 바뀌면 불일치가 생긴다.

### 삽입·삭제 이상

아직 부품이 없는 신규 제조사를 등록할 수 없고, 특정 제조사의 마지막 부품을 삭제하면 제조사 정보까지 사라질 수 있다.

### 분산 설계와의 순서

먼저 엔터티 경계를 정규화한 뒤, 접근 패턴에 따라 fragment와 복제본을 설계한다. 정규화와 분산 fragmentation은 목적과 단계가 다르다.

## 예시

```sql
CREATE TABLE manufacturer (
  manufacturer_id bigint PRIMARY KEY,
  name text NOT NULL,
  state text NOT NULL
);

CREATE TABLE part (
  part_id bigint PRIMARY KEY,
  name text NOT NULL,
  manufacturer_id bigint NOT NULL
    REFERENCES manufacturer(manufacturer_id)
);
```

## 요약

- 정규화는 반복·갱신·삽입·삭제 이상을 줄인다.
- 제조사와 부품처럼 독립적으로 존재하는 엔터티를 분리한다.
- 논리 정규화 후에 물리적인 분산 배치를 결정한다.
