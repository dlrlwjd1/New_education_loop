# Example Fragmentation

## 개요

- 같은 Project 테이블을 행 기준과 열 기준으로 나누어 수평·수직 fragmentation을 비교한다.
- 원본 테이블을 다시 만들기 위한 연산과 key의 역할을 설명한다.

## 내용

### 수평 fragmentation

low-budget와 high-budget처럼 predicate가 선택하는 행 집합으로 나눈다. 각 지역의 애플리케이션이 서로 다른 예산 범위를 주로 사용한다면 해당 fragment를 가까운 사이트에 둔다. 원본은 fragment의 합집합으로 복원한다.

### 수직 fragmentation

프로젝트 설명 열과 재무 열처럼 함께 사용되는 속성 집합으로 나눈다. 각 fragment에 `project_no` 같은 key를 복사해 두고 join으로 원본을 복원한다.

## 예시

```sql
-- 수평 fragment
CREATE VIEW project_low AS
SELECT * FROM project WHERE budget <= 200000;

CREATE VIEW project_high AS
SELECT * FROM project WHERE budget > 200000;

-- 수직 fragment
CREATE VIEW project_identity AS
SELECT project_no, project_name, location FROM project;

CREATE VIEW project_finance AS
SELECT project_no, budget FROM project;
```

## 요약

- 수평 분할은 행, 수직 분할은 열의 접근 차이를 이용한다.
- 수평 원본은 UNION, 수직 원본은 key JOIN으로 복원한다.
- 분할 기준은 실제 애플리케이션의 사용 위치와 빈도에서 나와야 한다.
