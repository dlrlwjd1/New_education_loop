# Java Example

## 개요
- 트랜잭션 관리(transaction management)를 본격적으로 다루기 전에, Java(JDBC)에서 트랜잭션을 어떻게 처리하는지 예제로 살펴본다.
- 여러 연산을 하나로 묶어 전부 성공하거나 전부 실패하게 만드는 것이 트랜잭션의 목적이다.
- Part·Store·Order 세 테이블을 이용한 부품 주문 예제로 커밋(commit)과 롤백(rollback)의 흐름을 설명한다.

## 내용

### Java의 기본 동작: 자동 커밋(auto-commit)
- Java는 기본적으로 각 연산을 자동으로 커밋한다. UPDATE, INSERT, DELETE를 실행할 때마다 즉시 데이터베이스에 커밋된다.
- 두 개 이상의 연산을 함께 동작시키려면(모두 커밋되거나 모두 커밋되지 않게 하려면) 트랜잭션을 만들어야 한다.

### JDBC에서 트랜잭션 만들기
1. `DriverManager`에 데이터베이스 위치를 알려주는 URL 파라미터를 전달해 연결(Connection) 핸들을 얻는다.
2. `setAutoCommit(false)`를 호출하면 이 시점 이후의 모든 연산이 커밋 또는 롤백할 때까지 하나로 묶인다.
3. 여러 UPDATE를 수행한 뒤 마지막에 `Connection.commit()`을 호출하면 그 연산 묶음이 커밋되고 트랜잭션이 끝난다.

### 예제 테이블 구조
- **Part 테이블**: 시스템의 모든 부품. 재고는 한정되어 있다.
- **Store 테이블**: 모든 매장.
- **Order 테이블**: 부품과 매장 사이의 다대다(many-to-many) 매핑.
- 누군가 구매하면 판매된 부품 수(parts sold)를 증가시키고, 판매 수가 전체 부품 수(total parts)와 같아지면 더 이상 팔 부품이 없다.
- 주문이 발생하면 Order 테이블과 Part 테이블이 함께 갱신되어야 한다. 즉 두 개의 갱신이 하나의 트랜잭션이 되어야 한다.

### 트랜잭션 흐름
1. `DriverManager`로 연결을 얻고 `setAutoCommit(false)`로 트랜잭션을 시작한다.
2. `Connection.createStatement()`로 Statement를 만들고, Part 테이블에서 part number가 153인 행의 parts sold와 total parts를 SELECT한다.
3. `rs.next()`로 행을 가져와 parts sold와 total parts 값을 읽는다. (특정 부품 하나만 다루므로 WHERE 순회 대신 IF 문으로 충분하다.)
4. parts sold에 1을 더해 Part 테이블을 갱신한다. 이것이 트랜잭션의 첫 번째 갱신이다. 두 번째 갱신(주문 레코드 작성)이 실패하면 이 갱신도 사라져야 한다.
5. 만약 parts sold가 total parts와 같으면(품절), "Part sold out"을 출력하고 롤백한다.
6. 품절이 아니면 Order 테이블에 새 행을 INSERT한다. 값 153은 part number, 11은 store number를 가리킨다. 이렇게 매장과 부품 사이의 새 관계가 생긴다.
7. INSERT와 앞의 UPDATE를 함께 커밋하고, 커밋 후에 "Orders processed"를 출력한다.
8. 끝나면 `setAutoCommit(true)`로 되돌려 이후 갱신은 연산마다 커밋되게 한다.

### 메시지 출력 순서 규칙
- **롤백 메시지는 롤백 전에 출력한다.** 롤백이 도중에 크래시하면 품절 안내를 영영 받지 못하기 때문이다.
- **커밋 메시지는 커밋 후에 출력한다.** 커밋 전에 출력하면 커밋 도중 크래시가 나도 주문이 처리됐다고 착각할 수 있기 때문이다.

## 예시
```java
// 1) 연결을 얻고 트랜잭션 시작
Connection conn = DriverManager.getConnection(url);
conn.setAutoCommit(false);

// 2) 부품 정보 조회
Statement stmt = conn.createStatement();
ResultSet rs = stmt.executeQuery(
    "SELECT parts_sold, total_parts FROM Part WHERE part_number = 153");

if (rs.next()) {
    int partsSold = rs.getInt("parts_sold");
    int totalParts = rs.getInt("total_parts");

    // 3) 판매 수 증가 (첫 번째 갱신)
    stmt.executeUpdate(
        "UPDATE Part SET parts_sold = " + (partsSold + 1) +
        " WHERE part_number = 153");

    if (partsSold == totalParts) {
        // 품절: 메시지는 롤백 '전'에 출력
        System.out.println("Part sold out");
        conn.rollback();
    } else {
        // 4) 주문 레코드 삽입 (두 번째 갱신)
        stmt.executeUpdate(
            "INSERT INTO Orders (part_number, store_number) VALUES (153, 11)");
        conn.commit();
        // 커밋 메시지는 커밋 '후'에 출력
        System.out.println("Orders processed");
    }
}

// 5) 자동 커밋 복원
conn.setAutoCommit(true);
```

## 요약
- Java는 기본적으로 연산마다 자동 커밋하므로, 여러 연산을 묶으려면 `setAutoCommit(false)`로 트랜잭션을 시작해야 한다.
- 트랜잭션은 `commit()`으로 확정하거나 `rollback()`으로 시작 전 상태로 되돌린다.
- 주문 처리 예제에서 Part 테이블 갱신과 Order 테이블 삽입은 함께 성공하거나 함께 실패해야 한다.
- 롤백 관련 메시지는 롤백 전에, 커밋 관련 메시지는 커밋 후에 출력해야 크래시 상황에서도 잘못된 안내를 피할 수 있다.
