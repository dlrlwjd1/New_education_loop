# 02 테이블 설계와 DDL

## 영상 목표

- 관계형 모델, ER 모델, 엔티티와 속성 개념을 설명한다.
- DDL과 DML의 차이를 이해한다.
- `CREATE TABLE`, `ALTER TABLE`, `DROP TABLE`, `TRUNCATE TABLE`을 설명한다.
- 기본 키, 외래 키, 엔티티 무결성, 참조 무결성, 도메인 무결성을 이해한다.

권장 길이: 55-60분

---

## Slide 1. 오늘의 주제

### 슬라이드 문구

테이블 설계와 DDL

- 관계형 모델
- 테이블 생성
- 테이블 변경
- 테이블 삭제
- 제약 조건

### 스크립트

이번 영상에서는 데이터를 저장하는 구조 자체를 다룹니다.

이전 영상에서는 이미 존재하는 테이블에서 데이터를 조회하고 수정했습니다. 이번에는 테이블을 어떻게 만들고, 구조를 어떻게 변경하고, 어떤 제약 조건을 걸어 데이터 품질을 유지하는지 살펴봅니다.

핵심 명령어는 `CREATE`, `ALTER`, `DROP`, `TRUNCATE`입니다.

---

## Slide 2. 관계형 모델

### 슬라이드 문구

Relational Model

- 데이터는 테이블에 저장된다
- 테이블은 행과 열로 구성된다
- 행: 하나의 record
- 열: 하나의 attribute
- 테이블 사이에는 관계가 있다

### 스크립트

관계형 데이터베이스는 데이터를 테이블 형태로 저장합니다.

테이블의 행은 하나의 개별 레코드입니다. 예를 들어 한 명의 고객, 한 건의 주문, 한 권의 책이 행이 될 수 있습니다.

열은 속성입니다. 고객 테이블이라면 고객 ID, 이름, 이메일 같은 값이 열이 됩니다.

관계형 모델의 중요한 점은 여러 테이블이 서로 관계를 가진다는 것입니다.

---

## Slide 3. ER 모델

### 슬라이드 문구

ER Model

- Entity: 관리하고 싶은 대상
- Attribute: entity의 속성
- Relationship: entity 사이의 관계

예:
- Book
- Author
- Borrower
- Loan

### 스크립트

테이블을 설계하기 전에 보통 ER 모델로 생각합니다.

Entity는 관리하고 싶은 대상입니다. 도서관 시스템이라면 Book, Author, Borrower, Loan 같은 것이 entity가 될 수 있습니다.

Attribute는 entity가 가진 속성입니다. Book은 ISBN, title, price 같은 속성을 가질 수 있습니다.

Relationship은 entity 사이의 관계입니다. 예를 들어 책은 저자를 가지고, 대출 기록은 책과 대출자를 연결합니다.

---

## Slide 4. DDL과 DML

### 슬라이드 문구

SQL 문 유형

DDL: Data Definition Language
- `CREATE`
- `ALTER`
- `DROP`
- `TRUNCATE`

DML: Data Manipulation Language
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

### 스크립트

SQL 문은 역할에 따라 나눌 수 있습니다.

DML은 데이터를 읽고 조작하는 명령어입니다. 이전 영상에서 다룬 `SELECT`, `INSERT`, `UPDATE`, `DELETE`가 여기에 해당합니다.

DDL은 데이터베이스 객체의 구조를 정의하는 명령어입니다. 테이블을 만들고, 열을 추가하거나 삭제하고, 테이블 자체를 삭제하는 작업입니다.

DDL은 데이터 구조에 영향을 주기 때문에 더 신중하게 실행해야 합니다.

---

## Slide 5. CREATE TABLE

### 슬라이드 문구

테이블 생성

```sql
CREATE TABLE AUTHOR (
    AUTHOR_ID CHAR(2) PRIMARY KEY,
    FIRSTNAME VARCHAR(20),
    LASTNAME VARCHAR(20)
);
```

### 스크립트

`CREATE TABLE`은 새 테이블을 만듭니다.

테이블 이름을 정하고, 괄호 안에 열 이름과 데이터 타입을 지정합니다. 필요하면 기본 키 같은 제약 조건도 함께 지정할 수 있습니다.

예제에서는 AUTHOR 테이블을 만들고, AUTHOR_ID를 기본 키로 지정합니다.

---

## Slide 6. 데이터 타입

### 슬라이드 문구

자주 쓰는 데이터 타입

- `CHAR(n)`: 고정 길이 문자열
- `VARCHAR(n)`: 가변 길이 문자열
- `INTEGER`: 정수
- `DECIMAL(p, s)`: 고정 소수점 숫자
- `DATE`: 날짜
- `TIMESTAMP`: 날짜와 시간

### 스크립트

테이블을 만들 때는 각 열에 어떤 종류의 값이 들어갈지 정해야 합니다.

문자열에는 `CHAR`와 `VARCHAR`가 있습니다. `CHAR`는 고정 길이이고, `VARCHAR`는 가변 길이입니다.

숫자에는 정수와 소수 타입이 있고, 날짜에는 `DATE`나 `TIMESTAMP`를 사용할 수 있습니다.

데이터 타입을 잘 정하면 잘못된 값이 들어오는 것을 줄이고, 저장 공간과 성능도 관리할 수 있습니다.

---

## Slide 7. 기본 키와 외래 키

### 슬라이드 문구

Primary Key
- 행을 고유하게 식별
- 중복 불가
- NULL 불가

Foreign Key
- 다른 테이블의 키를 참조
- 테이블 사이의 관계 표현

### 스크립트

기본 키는 테이블에서 각 행을 고유하게 식별하는 열입니다.

예를 들어 AUTHOR 테이블에서는 AUTHOR_ID가 기본 키가 될 수 있습니다. 기본 키는 중복될 수 없고 NULL일 수 없습니다.

외래 키는 다른 테이블의 기본 키를 참조하는 열입니다. 이를 통해 테이블 사이의 관계를 표현합니다.

---

## Slide 8. 제약 조건

### 슬라이드 문구

Relational Constraints

- Entity Integrity
- Referential Integrity
- Domain Integrity

### 스크립트

관계형 데이터베이스에서는 데이터의 일관성을 유지하기 위해 제약 조건을 사용합니다.

엔티티 무결성은 기본 키가 각 행을 고유하게 식별해야 한다는 원칙입니다.

참조 무결성은 외래 키가 참조하는 값이 실제로 부모 테이블에 존재해야 한다는 원칙입니다.

도메인 무결성은 각 열에 허용된 범위와 타입의 값만 들어가야 한다는 원칙입니다.

---

## Slide 9. ALTER TABLE

### 슬라이드 문구

테이블 구조 변경

열 추가:
```sql
ALTER TABLE AUTHOR
ADD COLUMN EMAIL VARCHAR(50);
```

열 타입 변경:
```sql
ALTER TABLE AUTHOR
MODIFY EMAIL VARCHAR(100);
```

### 스크립트

`ALTER TABLE`은 이미 존재하는 테이블의 구조를 변경합니다.

새 열을 추가하거나, 기존 열의 데이터 타입을 바꾸거나, 열을 삭제할 수 있습니다.

다만 DBMS마다 문법이 조금 다를 수 있습니다. 예를 들어 MySQL과 Db2에서 타입 변경 문법이 다를 수 있으므로, 실제 사용하는 DBMS의 문서를 확인해야 합니다.

---

## Slide 10. DROP과 TRUNCATE

### 슬라이드 문구

`DROP TABLE`
- 테이블 구조와 데이터 모두 삭제

`TRUNCATE TABLE`
- 테이블 구조는 유지
- 모든 행 삭제

### 스크립트

`DROP TABLE`은 테이블 자체를 삭제합니다. 구조와 데이터가 모두 사라집니다.

`TRUNCATE TABLE`은 테이블 구조는 유지하지만 모든 행을 삭제합니다.

두 명령어 모두 위험한 명령어입니다. 실습 환경에서는 괜찮지만, 실제 데이터베이스에서는 백업과 권한, 트랜잭션 지원 여부를 확인해야 합니다.

---

## Slide 11. DROP 전에 IF EXISTS

### 슬라이드 문구

안전한 실습 패턴

```sql
DROP TABLE IF EXISTS TEST;

CREATE TABLE TEST (
    ID INTEGER,
    NAME VARCHAR(30)
);
```

### 스크립트

실습에서는 같은 스크립트를 여러 번 실행하는 경우가 많습니다.

이때 이미 존재하는 테이블을 다시 만들려고 하면 오류가 납니다. 그래서 `DROP TABLE IF EXISTS`로 기존 테이블이 있으면 삭제하고, 그 다음 새로 만드는 패턴을 사용합니다.

다만 실제 운영 데이터베이스에서는 이런 패턴을 그대로 쓰면 위험합니다. 실습용과 운영용 코드를 구분해야 합니다.

---

## Slide 12. SQL Scripts

### 슬라이드 문구

SQL Script

- 여러 SQL 문을 하나의 파일로 관리
- 테이블 생성 순서 중요
- 외래 키가 있으면 부모 테이블 먼저 생성
- 반복 실행 가능한 구조가 좋다

### 스크립트

SQL script는 여러 SQL 문을 하나의 파일로 모아둔 것입니다.

테이블이 여러 개 있고 외래 키 관계가 있다면 실행 순서가 중요합니다. 참조되는 부모 테이블을 먼저 만들고, 그 다음 자식 테이블을 만들어야 합니다.

실습이나 프로젝트에서는 SQL script를 잘 정리해두면 데이터베이스 구조를 재현하기 쉽습니다.

---

## Slide 13. 실습 데모: 테이블 만들기

### 슬라이드 문구

데모 흐름

1. `DROP TABLE IF EXISTS`
2. `CREATE TABLE`
3. `INSERT`
4. `SELECT`
5. `ALTER TABLE`
6. 다시 `SELECT`

### 스크립트

이번 데모에서는 작은 TEST 또는 COUNTRY 테이블을 만들어 보겠습니다.

먼저 기존 테이블이 있으면 삭제하고, 새 테이블을 만듭니다. 그 다음 데이터를 몇 행 넣고 조회합니다.

이후 `ALTER TABLE`로 새 열을 추가한 뒤, 테이블 구조와 데이터를 다시 확인합니다.

이 흐름을 이해하면 DDL과 DML이 어떻게 함께 쓰이는지 볼 수 있습니다.

---

## Slide 14. 연습 문제

### 슬라이드 문구

직접 작성해보기

1. BOOK 테이블 생성
2. AUTHOR 테이블 생성
3. BOOK에 기본 키 지정
4. AUTHOR에 EMAIL 열 추가
5. TEST 테이블 삭제

### 스크립트

이제 직접 DDL을 작성해보겠습니다.

먼저 BOOK과 AUTHOR 테이블을 설계합니다. 각 테이블에 어떤 열이 필요한지 생각하고, 기본 키를 지정합니다.

그 다음 ALTER TABLE로 AUTHOR에 EMAIL 열을 추가하고, 마지막으로 실습용 TEST 테이블을 삭제합니다.

중요한 것은 단순히 문법을 쓰는 것이 아니라, 어떤 구조로 데이터를 저장할지 생각하는 것입니다.

---

## Slide 15. 이번 영상 정리

### 슬라이드 문구

정리

- 관계형 데이터베이스는 테이블과 관계로 데이터를 표현한다
- DDL은 데이터 구조를 정의한다
- `CREATE TABLE`은 테이블 생성
- `ALTER TABLE`은 구조 변경
- `DROP`과 `TRUNCATE`는 신중히 사용해야 한다
- 제약 조건은 데이터 품질을 지킨다

### 스크립트

이번 영상에서는 테이블 설계와 DDL을 다뤘습니다.

SQL을 잘 쓰려면 조회 문법뿐 아니라 데이터가 어떤 구조로 저장되어 있는지 이해해야 합니다.

다음 영상에서는 다시 조회로 돌아가서, 더 강력한 필터링과 정렬, 그룹화를 다룹니다. `LIKE`, `BETWEEN`, `IN`, `ORDER BY`, `GROUP BY`, `HAVING`을 사용해 분석 쿼리를 작성해 보겠습니다.

