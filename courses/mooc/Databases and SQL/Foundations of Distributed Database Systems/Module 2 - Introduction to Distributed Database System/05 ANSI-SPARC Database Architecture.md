# ANSI-SPARC Database Architecture

## 개요

- ANSI/SPARC의 외부(external)·개념(conceptual)·내부(internal) 3단계 스키마를 설명한다.
- 분산 DB에서 여러 사용자 뷰와 여러 로컬 내부 스키마를 전역 개념 스키마로 연결한다.

## 내용

### 외부 스키마

사용자나 애플리케이션별로 필요한 데이터만 표현한다. 예를 들어 영업 애플리케이션은 전체 Customer·Order 구조 대신 `GoodCustomer`라는 뷰만 볼 수 있다.

### 개념 스키마

조직 전체 엔터티, 속성과 관계를 통합한 공통 논리 모델이다. 모든 외부 뷰가 이 계층에 매핑되며, 분산 환경에서는 전역 개념 스키마 역할을 한다.

### 내부 스키마

데이터가 디스크·인덱스·파일에 실제로 배치되는 방식이다. 분산 DB에는 사이트마다 다른 내부 스키마가 존재할 수 있다.

## 예시

```sql
CREATE VIEW good_customer AS
SELECT c.customer_no, c.customer_name
FROM customer AS c
JOIN orders AS o ON o.customer_no = c.customer_no
GROUP BY c.customer_no, c.customer_name
HAVING COUNT(*) > 10;
```

```text
외부 GoodCustomer 뷰
  → 전역 Customer·Order 개념 스키마
    → Baltimore/Chicago 사이트별 내부 스키마
```

## 요약

- 외부 스키마는 사용자 관점, 개념 스키마는 통합 논리 관점이다.
- 내부 스키마는 실제 저장·인덱스 구조를 표현한다.
- 계층 간 매핑이 데이터 독립성과 분산 투명성을 제공한다.
