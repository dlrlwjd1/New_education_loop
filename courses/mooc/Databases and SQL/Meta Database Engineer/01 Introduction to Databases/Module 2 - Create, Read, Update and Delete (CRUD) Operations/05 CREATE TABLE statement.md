# CREATE TABLE statement

## 개요

- SQL의 CREATE TABLE 문으로 데이터베이스에 테이블을 만드는 방법
- 컬럼 이름과 데이터 타입을 정의하는 구문 구조

## 내용

### CREATE TABLE 구문

- `CREATE TABLE` 키워드로 새 테이블 생성 의사를 알린다 → 테이블 이름 → 괄호 안에 **각 컬럼 이름 + 데이터 타입**을 나열한다.
- **전제 조건**: 테이블을 만들려면 서버에 데이터베이스가 이미 존재해야 한다 — 데이터베이스 없이는 테이블을 만들 수 없다.

### 데모 — 서점 데이터베이스의 customers 테이블

1. `CREATE TABLE customers` 작성
2. 여는 괄호 안에 첫 컬럼 `customer_name VARCHAR(…)` — VARCHAR는 어떤 문자든 담을 수 있고 괄호 안 숫자로 최대 길이 지정
3. 쉼표 후 둘째 컬럼 `phone_number INT` — 정수만 저장
4. 닫는 괄호와 세미콜론 후 실행 → customers 테이블이 데이터베이스에 저장된다

## 예시

```sql
CREATE TABLE customers (
  customer_name VARCHAR(100),
  phone_number  INT
);
```

## 요약

- `CREATE TABLE 테이블명 (컬럼명 타입, ...);` 구문으로 테이블을 만든다.
- 각 컬럼은 이름과 데이터 타입(VARCHAR, INT 등)을 함께 정의한다.
- 테이블 생성 전에 대상 데이터베이스가 반드시 존재해야 한다.
