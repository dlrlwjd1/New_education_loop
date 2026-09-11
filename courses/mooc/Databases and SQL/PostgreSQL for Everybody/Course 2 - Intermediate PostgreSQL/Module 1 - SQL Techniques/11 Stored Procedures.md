# Stored Procedures

## 개요
- 저장 프로시저(stored procedure)의 개념, 강사가 저장 프로시저 사용을 꺼리는 이유, 그리고 `updated_at` 자동 갱신처럼 저장 프로시저가 꼭 필요한 사례(트리거 함수)를 다루는 강의

## 내용
### 저장 프로시저에 대한 강사의 관점
- 저장 프로시저는 데이터베이스 서버 안에 코드를 저장해두고 실행하는 기능으로, 애플리케이션과 데이터베이스 사이를 여러 번 왕복하는 대신 서버 안에서 여러 SQL 문을 한 번에 처리할 수 있어 성능상 유리할 수 있다.
- 하지만 강사는 저장 프로시저 사용을 기본적으로 피하는 편이라고 밝힌다 — 저장 프로시저는 데이터베이스 제품마다 문법·기능이 달라 이식성(portability)이 매우 낮고(Oracle → Postgres/MySQL/SQLite 이전 시 재작성이 필요), 테스트하기도 더 어렵기 때문이다.
- 저장 프로시저를 정당화하는 대표적인 이유는 심각한 성능 문제 해결(여러 쿼리 왕복을 하나의 트랜잭션으로 압축) 또는 `CREATE TABLE` 문의 제약 조건만으로는 표현할 수 없는 규칙(예: "두 열 중 최소 하나는 NULL이 아니어야 한다")을 강제하는 경우다.

### updated_at 자동 갱신: 트리거 함수 사례
- `created_at`은 `DEFAULT NOW()`로 삽입 시점에 자동 기록할 수 있지만, `updated_at`을 수정 시마다 자동으로 갱신하는 기능은 PostgreSQL의 `CREATE TABLE` 문만으로는 지원되지 않는다(다른 일부 데이터베이스는 지원).
- 해결책은 트리거 함수(trigger function)를 만드는 것이다: `CREATE FUNCTION trigger_set_timestamp() ... BEGIN NEW.updated_at = NOW(); END; $$ LANGUAGE plpgsql;` 형태로 함수를 만들고, `CREATE TRIGGER ... BEFORE UPDATE ON 테이블 FOR EACH ROW EXECUTE FUNCTION trigger_set_timestamp();`로 특정 테이블에 연결한다.
- PostgreSQL은 저장 프로시저 언어로 `plpgsql` 외에도 TCL, Perl 등 여러 언어를 지원하지만, 강사는 이식성 문제가 어차피 있는 이상 Postgres 네이티브 언어(`plpgsql`)를 사용하는 것을 권장한다.

## 예시
```sql
CREATE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON favorite
FOR EACH ROW
EXECUTE FUNCTION trigger_set_timestamp();
```

## 요약
- 저장 프로시저는 이식성이 낮고 테스트가 어려워 강사는 가급적 사용을 피하는 편이며, 심각한 성능 문제나 CREATE TABLE로 표현 불가능한 제약을 강제할 때만 예외적으로 사용한다.
- `updated_at`을 수정 시마다 자동 갱신하는 것은 PostgreSQL에서 트리거 함수 없이는 구현할 수 없는 대표적 사례다.
- 저장 프로시저를 작성해야 할 때는 이식성 문제가 어차피 존재하므로 Postgres 네이티브 언어(plpgsql)를 사용하는 것이 낫다.
