# Stored Procedures

## 학습 목표

- 저장 프로시저(Stored Procedure)의 개념 설명
- 저장 프로시저의 장점 나열
- 저장 프로시저를 생성하고 호출하는 방법 설명

---

## 저장 프로시저란?

**저장 프로시저**는 데이터베이스 서버에 저장되어 실행되는 SQL 문의 집합입니다.

클라이언트에서 여러 SQL 문을 서버로 개별 전송하는 대신, 하나의 호출로 서버 측에서 여러 문을 일괄 실행할 수 있습니다.

```text
[기존 방식]
클라이언트 → SQL 문 1 → 서버
클라이언트 → SQL 문 2 → 서버
클라이언트 → SQL 문 3 → 서버

[저장 프로시저 방식]
클라이언트 → CALL procedure_name() → 서버 (내부에서 여러 SQL 실행)
```

### 지원 언어 (예: IBM DB2)

SQL, PL, PL/SQL, Java, C 등 다양한 언어로 작성 가능

### 주요 기능

- 파라미터로 정보를 받아 처리
- CRUD(Create, Read, Update, Delete) 작업 수행
- 결과를 클라이언트 애플리케이션에 반환

---

## 저장 프로시저의 장점

| 장점 | 설명 |
|------|------|
| 네트워크 트래픽 감소 | 여러 SQL 문을 하나의 호출로 실행 |
| 성능 향상 | 데이터가 있는 서버에서 처리, 최종 결과만 클라이언트로 전달 |
| 코드 재사용 | 여러 애플리케이션이 동일한 프로시저 공유 가능 |
| 보안 강화 | 테이블/컬럼 구조를 클라이언트에 노출하지 않아도 됨, 서버 측 유효성 검사 가능 |

> SQL은 완전한 프로그래밍 언어가 아닙니다. 모든 비즈니스 로직을 저장 프로시저에 작성하는 것은 권장하지 않습니다.

---

## 저장 프로시저 생성

### 기본 구조

```sql
-- 1. 구분자(delimiter) 변경 (다중 문장 처리를 위해)
DELIMITER $$

-- 2. 프로시저 정의
CREATE PROCEDURE procedure_name (IN param1 TYPE, IN param2 TYPE)
LANGUAGE SQL
BEGIN
    -- 실행할 SQL 로직
END $$

-- 3. 구분자 원복
DELIMITER ;
```

### 예시: 직원 급여 인상 프로시저

```sql
DELIMITER $$

CREATE PROCEDURE update_sal (IN emp_num INT, IN rating INT)
LANGUAGE SQL
BEGIN
    IF rating = 1 THEN
        UPDATE employees
        SET salary = salary * 1.10
        WHERE emp_id = emp_num;
    ELSE
        UPDATE employees
        SET salary = salary * 1.05
        WHERE emp_id = emp_num;
    END IF;
END $$

DELIMITER ;
```

| 요소 | 설명 |
|------|------|
| `CREATE PROCEDURE` | 프로시저 생성 선언 |
| `IN` 파라미터 | 프로시저에 전달되는 입력값 |
| `BEGIN ... END` | 프로시저 로직의 시작과 끝 |
| `DELIMITER $$` | 구문 종료 구분자를 `$$`로 변경 (프로시저 내 `;`와 충돌 방지) |

---

## 저장 프로시저 호출

외부 애플리케이션이나 동적 SQL 문에서 `CALL` 문으로 호출합니다.

```sql
-- 직원 ID 101, 평점 1인 직원의 급여 인상
CALL update_sal(101, 1);
```

---

## 핵심 요약

- 저장 프로시저는 서버에 저장되어 실행되는 SQL 문의 집합입니다.
- 네트워크 트래픽 감소, 성능 향상, 코드 재사용, 보안 강화의 이점이 있습니다.
- `CREATE PROCEDURE`로 생성하고, `CALL`로 호출합니다.
- 다중 SQL 문 정의 시 구분자(delimiter)를 임시 변경해야 합니다.
- 동적 SQL 문과 외부 애플리케이션 모두에서 호출 가능합니다.
