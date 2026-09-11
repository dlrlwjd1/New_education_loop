# Creating a database and tables in a MySQL database using Python

## 개요

- 커서 객체 생성 → SQL을 Python 문자열로 작성 → execute로 실행하는 흐름으로 Python에서 데이터베이스·테이블 만들기

## 내용

### 커서 객체

- 연결(connection) 객체에서 **cursor 모듈을 호출해 커서 객체를 생성** — MySQL과 소통하는 통로다.
- 커서는 Python 애플리케이션을 데이터가 저장된 데이터베이스 위치로 가리키며, **execute 메서드가 SQL 쿼리(Python 문자열)를 데이터베이스로 전달**한다.

### 데이터베이스 생성·사용

- SQL 문을 Python 문자열로 만들어 변수에 담고 execute에 넘긴다.
- **삼중 따옴표(triple quotes)** 사용 권장 — 작은따옴표도 되지만, 삼중 따옴표는 SQL을 **여러 줄로 나눠** 읽고 관리하기 쉽다.
- `USE 데이터베이스` 쿼리로 사용할 데이터베이스를 지정한다.

### 테이블 생성 (menu_items 예)

- 컬럼 구성: ItemID(INT, **AUTO_INCREMENT** — 항목마다 번호가 순서대로 자동 부여, PRIMARY KEY), Name(VARCHAR(200)), Type(VARCHAR(100)), Price(INT)
- 같은 방법으로 SQL 쿼리만 바꿔 테이블을 계속 추가할 수 있다.

## 예시

```python
cursor = connection.cursor()               # 커서 생성

create_database_query = """CREATE DATABASE little_lemon"""
cursor.execute(create_database_query)

use_database_query = """USE little_lemon"""
cursor.execute(use_database_query)

create_menuitem_table = """CREATE TABLE menu_items (
  item_id INT AUTO_INCREMENT,
  name    VARCHAR(200),
  type    VARCHAR(100),
  price   INT,
  PRIMARY KEY (item_id)
);"""
cursor.execute(create_menuitem_table)
```

## 요약

- connection.cursor()로 커서를 만들고, SQL을 삼중 따옴표 문자열로 작성해 cursor.execute로 실행한다.
- CREATE DATABASE → USE → CREATE TABLE 순서로 데이터베이스와 테이블을 구축한다.
- AUTO_INCREMENT 기본 키로 항목 ID를 자동 부여한다.
