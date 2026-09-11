# Develop a table booking system

## 개요

- 테이블 예약 시스템 구축을 위한 SQL 트랜잭션·CRUD 연산과 트리거(trigger) 활용 복습

## 내용

### CRUD 연산

- 트랜잭션 = 데이터베이스 안에서 실행되는 문(statement). 주요 유형은 CREATE·READ·UPDATE·DELETE = **CRUD**.
- **생성(INSERT INTO)** — 대상 테이블, 채울 컬럼, 담을 값을 명시해 새 예약 데이터 생성
- **갱신(UPDATE)** — 갱신할 테이블, 컬럼, 새 값 명시 (예약 변경)
- **삭제(DELETE)** — 대상 테이블과 조건(WHERE 절) 명시 (예약 취소)
- **조회(SELECT)** — 생성·갱신·삭제 후 쿼리가 성공했는지 데이터를 읽어 테스트. 테이블·컬럼, 필요한 값, 대상 데이터를 겨냥하는 조건 포함

### 트리거

- 저장 프로그램 형태의 액션 집합 — 특정 이벤트(CRUD 등) 발생 시 **자동 호출**
- 사용 절차: `CREATE TRIGGER` 생성 → 유형 정의(INSERT/UPDATE/DELETE, 이벤트 **전/후** 실행) → 로직 정의 → 할당할 테이블과 적용 방식 지정

### 버전 관리

- 코드가 확실해지면 Git에 커밋 — 개발 단계별 스냅샷을 추적하고 필요 시 이전 버전으로 롤백

## 예시

```sql
-- 예약 생성
INSERT INTO Bookings (BookingID, BookingDate, TableNo, CustomerID)
VALUES (1, '2022-10-10', 5, 1);

-- 예약 변경
UPDATE Bookings SET BookingDate = '2022-10-11' WHERE BookingID = 1;

-- 예약 취소
DELETE FROM Bookings WHERE BookingID = 1;

-- 확인
SELECT * FROM Bookings WHERE BookingDate = '2022-10-11';

-- 트리거: 예약 삭제 후 로그 기록
CREATE TRIGGER LogCancellation
AFTER DELETE ON Bookings
FOR EACH ROW
INSERT INTO CancellationLog (BookingID) VALUES (OLD.BookingID);
```

## 요약

- 예약 시스템은 INSERT(생성)·UPDATE(변경)·DELETE(취소)·SELECT(검증)의 CRUD 사이클로 운영한다.
- 트리거로 이벤트 전/후 자동 액션을 걸고, 진행 상황은 Git으로 버전 관리한다.
- 모든 연산에서 정확한 데이터를 겨냥하는 조건 작성이 중요하다.
