# Derived Horizontal Fragmentation

## 개요

- 부모 릴레이션의 수평 fragment를 관계가 있는 자식 릴레이션에 전파하는 파생 수평 분할(derived horizontal fragmentation)을 설명한다.
- 함께 join되는 데이터를 같은 사이트에 배치해 원격 join을 줄인다.

## 내용

### 부모 fragment에서 파생

Pay를 salary 기준으로 두 fragment로 나눴다면 Employee를 각각의 Pay fragment와 join해 같은 기준의 Employee fragment를 만든다. 대응하는 Pay와 Employee fragment를 같은 사이트에 배치한다.

### 여러 부모가 있는 경우

Assignment처럼 Employee와 Project 양쪽의 자식인 테이블은 두 분할 중 하나를 선택해야 한다. 강의는 가장 많은 애플리케이션이 함께 join하는 부모의 fragment를 따르는 실용적 기준을 제시한다.

양쪽 분할을 모두 적용하면 Employee 3개 × Project 3개처럼 Assignment fragment가 9개로 늘고 배치도 모호해질 수 있다.

## 예시

```sql
-- Pay fragment를 기준으로 Employee fragment 파생
CREATE VIEW employee_low_pay AS
SELECT e.*
FROM employee AS e
JOIN pay_low AS p ON p.title = e.title;

CREATE VIEW employee_high_pay AS
SELECT e.*
FROM employee AS e
JOIN pay_high AS p ON p.title = e.title;
```

## 요약

- 파생 분할은 join 관계의 부모 fragment를 자식에 전파한다.
- 함께 쓰는 fragment를 같은 사이트에 두면 네트워크 join 비용이 줄어든다.
- 부모 후보가 여러 개라면 실제 join 빈도와 비용을 기준으로 하나를 선택한다.
