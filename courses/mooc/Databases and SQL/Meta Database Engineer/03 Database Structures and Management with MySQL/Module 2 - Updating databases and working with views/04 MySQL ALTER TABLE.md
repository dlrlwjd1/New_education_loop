# MySQL ALTER TABLE

## 개요

- ALTER TABLE로 기존 테이블의 컬럼·제약조건을 추가(ADD)·삭제(DROP)·수정(MODIFY)하는 실습
- 기존 테이블에 기본 키·NOT NULL·UNIQUE·CHECK 제약을 사후에 적용하기 (Lucky Shrub machinery 테이블)

## 내용

### ALTER TABLE과 함께 쓰는 명령

- **MODIFY** — 특정 컬럼의 데이터 타입·제약 변경
- **ADD** — 새 컬럼 추가
- **DROP** — 컬럼 삭제
- 여러 컬럼을 바꿀 때는 MODIFY를 줄마다 반복하면 된다.

### 실습 과제 (machinery 테이블: 직원 ID, 이름, 전화, 카운티)

1. **기본 키 설정**: 값이 모두 유일한 employee ID를 MODIFY로 VARCHAR(10) NOT NULL PRIMARY KEY로 변경
2. **NULL 허용 제거**: 모든 컬럼이 NULL을 허용하는 상태(빈 필드 가능 — 나쁜 관행)를 고침
   - full name·county → VARCHAR(100) NOT NULL
   - phone number → INT NOT NULL UNIQUE (중복 방지)
3. **새 컬럼 + CHECK 추가**: 18세 이상만 기계 조작 가능 → age 컬럼(INT)을 ADD하고 `CHECK (age >= 18)` 제약 부여
- 각 단계 후 `SHOW COLUMNS FROM machinery;`로 구조 확인.

## 예시

```sql
-- 1. 기본 키 설정
ALTER TABLE machinery
MODIFY employee_id VARCHAR(10) NOT NULL PRIMARY KEY;

-- 2. 컬럼 제약 일괄 수정
ALTER TABLE machinery
MODIFY full_name VARCHAR(100) NOT NULL,
MODIFY county VARCHAR(100) NOT NULL,
MODIFY phone_number INT NOT NULL UNIQUE;

-- 3. age 컬럼 추가 + 18세 이상 제한
ALTER TABLE machinery
ADD COLUMN age INT CHECK (age >= 18);

SHOW COLUMNS FROM machinery;
```

## 요약

- ALTER TABLE + MODIFY/ADD/DROP으로 기존 테이블의 구조와 제약을 사후 변경할 수 있다.
- 기본 키·NOT NULL·UNIQUE·CHECK 제약도 ALTER로 적용 가능하며, SHOW COLUMNS로 결과를 검증한다.
