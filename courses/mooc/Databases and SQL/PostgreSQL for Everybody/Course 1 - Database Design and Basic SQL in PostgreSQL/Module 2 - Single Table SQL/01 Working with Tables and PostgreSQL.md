# Working with Tables and PostgreSQL

## 개요
- 단일 테이블에 대한 CRUD(Create, Read, Update, Delete) SQL 명령 — INSERT, DELETE, UPDATE, SELECT(WHERE·ORDER BY·LIKE·LIMIT/OFFSET·COUNT) — 를 실제 예제와 함께 다루는 강의

## 내용
### INSERT — 데이터 생성
- `INSERT INTO 테이블명 (열1, 열2) VALUES (값1, 값2);` 형태로 작성하며, 괄호 안 열 목록과 VALUES의 값 목록이 순서대로 일대일 대응한다.

### DELETE — 데이터 삭제와 암묵적 루프(implicit loop)
- SQL은 절차적 언어가 아니므로 명시적인 반복문(loop)이 없다. 하지만 `DELETE FROM 테이블명;`처럼 WHERE 절 없이 실행하면 "모든 행을 도는 루프"가 암묵적으로 실행된 것과 같아 테이블 전체가 비워진다.
- `WHERE` 절은 이 암묵적 루프에 조건(if문)을 추가하는 역할을 한다: `DELETE FROM users WHERE email = 'ted@umich.edu';`
- 실제 관계형 데이터베이스는 테이블 전체를 읽어 한 줄씩 지우는 것이 아니라, 인덱스로 대상 위치를 바로 찾아 삭제 표시만 하므로 매우 빠르다 — 순차 마스터 업데이트 방식(테이프 시대)이었다면 수 시간 걸릴 작업이 즉시 끝난다.

### UPDATE — 데이터 수정
- `UPDATE 테이블명 SET 열=값, 열=값 WHERE 조건;` 형태. DELETE와 마찬가지로 WHERE 절이 없으면 테이블의 모든 행이 수정되므로 주의해야 한다.
- WHERE 조건에 일치하는 행이 여러 개면 모두 수정되며, 실행 결과로 "몇 행이 변경되었는지"가 반환된다.

### SELECT — 데이터 조회
- `SELECT 열목록 FROM 테이블명 WHERE 조건;` (별표 `*`는 전체 열을 의미). SELECT에도 WHERE 절 기준의 암묵적 루프가 있다.
- `ORDER BY 열명 [DESC]` : 정렬(기본은 오름차순, DESC를 붙이면 내림차순).
- `LIKE '%문자%'` : 와일드카드(`%`) 패턴 매칭. 특수한 인덱스가 없는 한 전체 테이블 스캔(full table scan)을 유발할 수 있어 정확히 일치하는 WHERE 조건보다 느릴 수 있다. 단, 접두사 검색(`'문자%'`)은 인덱스를 활용해 성능이 개선될 수 있다.
- `LIMIT 개수 OFFSET 시작위치` : 페이징(paging) 처리에 사용. OFFSET은 0부터 시작하므로 `OFFSET 1`은 실제로 두 번째 행부터를 의미한다.
- `SELECT COUNT(*) FROM 테이블명;` : 행 개수를 셀 때, 데이터베이스가 내부적으로 이미 알고 있는 행 수를 활용해 매우 효율적으로 처리한다.

## 예시
```sql
INSERT INTO users (name, email) VALUES ('Kim', 'kim@example.com');

DELETE FROM users WHERE email = 'ted@umich.edu';

UPDATE users SET name = 'Charles' WHERE email = 'csev@umich.edu';

SELECT * FROM users WHERE email = 'csev@umich.edu';
SELECT * FROM users ORDER BY email DESC;
SELECT * FROM users WHERE name LIKE '%e%';
SELECT * FROM users ORDER BY email LIMIT 25 OFFSET 25;
SELECT COUNT(*) FROM users;
```

## 요약
- SQL에는 명시적 루프가 없으므로, DELETE·UPDATE에서 WHERE 절을 빠뜨리면 테이블 전체가 대상이 되어버린다.
- SELECT의 WHERE·ORDER BY·LIMIT/OFFSET·COUNT는 모두 인덱스를 활용해 실제 데이터 전체를 순회하지 않고도 빠르게 처리되도록 설계되어 있다.
- LIKE의 와일드카드 검색은 인덱스를 활용하기 어려워 상대적으로 느릴 수 있다는 점에 주의해야 한다.
