# Constraints in MySQL

## 개요

- MySQL 제약조건의 3대 유형: 키 제약(key), 도메인 제약(domain), 참조 무결성 제약(referential integrity)
- ON DELETE CASCADE·ON UPDATE CASCADE 옵션의 역할 (Little Lemon 예제)

## 내용

### 제약조건이란

- 테이블이 **유효한 데이터만 받아들이도록** 강제하는 규칙. 예: UNIQUE 제약은 컬럼 값이 행마다 유일해야 한다는 규칙을 삽입·갱신 시마다 강제한다.

### 3대 제약 유형

1. **키 제약(key constraints)** — 키 타입에 규칙 적용.
   - 예: **기본 키 제약** — 컬럼 값이 항상 유일하고 NULL 불가. Little Lemon의 customers 테이블에서 customer ID가 기본 키 → 모든 행에 유일한 ID가 반드시 있어야 한다.
2. **도메인 제약(domain constraints)** — 특정 컬럼에 저장 가능한 값을 규제.
   - 예: 예약당 최대 8명만 수용 가능 → bookings 테이블의 guest 수 컬럼에 **CHECK 제약**으로 값 범위를 제한, 8 초과 값은 거부된다.
3. **참조 무결성 제약(referential integrity constraints)** — 참조 키에 대한 규칙.
   - 참조하는(referencing) 테이블의 **외래 키 값은 참조되는(referenced) 테이블에 반드시 존재**해야 한다.
   - 예: 모든 예약은 특정 고객과 연결되어야 하므로, 고객이 customers 테이블에 먼저 등록되어야 bookings에 예약을 만들 수 있다.

### CASCADE 옵션

- 부모 테이블(customers)의 행을 삭제·변경하면 자식 테이블(bookings)의 관련 행이 깨진다 — 참조 무결성 위반으로 MySQL이 에러를 낸다.
- **ON DELETE CASCADE** — 부모 행 삭제 시 자식 테이블의 관련 행을 **자동 삭제**
- **ON UPDATE CASCADE** — 부모의 기본 키 값 갱신 시 자식 테이블의 관련 행을 **자동 갱신**

## 요약

- 제약조건은 키(기본 키: 유일+NOT NULL), 도메인(CHECK: 값 범위), 참조 무결성(FK 값은 부모에 존재)의 세 유형으로 데이터 유효성을 강제한다.
- 부모-자식 관계의 삭제·갱신 충돌은 ON DELETE/UPDATE CASCADE로 자동 전파해 해결한다.
