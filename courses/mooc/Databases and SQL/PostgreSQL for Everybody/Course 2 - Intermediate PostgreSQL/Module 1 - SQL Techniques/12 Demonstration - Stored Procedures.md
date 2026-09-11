# Demonstration: Stored Procedures

## 개요
- `updated_at` 자동 갱신 트리거 함수를 실제로 `favorite`(즐겨찾기) 테이블에 만들고 붙여서 동작을 확인하는 실습 강의

## 내용
### 문제 재현
- `favorite` 테이블에 행을 삽입한 뒤 값을 UPDATE해보면, `created_at`은 그대로지만 `updated_at`은 여전히 삽입 시점 값 그대로라는 것을 먼저 확인한다 — CREATE TABLE의 `DEFAULT NOW()`는 삽입 시에만 적용되기 때문이다.

### 트리거 함수 작성과 연결
- `CREATE FUNCTION`으로 `plpgsql` 언어 코드를 작성해 데이터베이스에 등록한다. 이 함수는 `NEW.updated_at`을 `NOW()`로 덮어쓰는 아주 짧은 코드다.
- `CREATE TRIGGER`로 이 함수를 특정 테이블의 "각 행이 업데이트되기 직전(BEFORE UPDATE, FOR EACH ROW)"에 실행되도록 연결한다. 이 등록은 테이블별로 한 번만 해두면 되며, 이후 `post`, `favorite`, `comment` 등 여러 테이블에 같은 함수를 재사용해서 붙일 수 있다.
- 트리거를 붙인 뒤 다시 UPDATE를 실행하면, 이번에는 `updated_at`이 자동으로 현재 시각으로 바뀌는 것을 확인한다.

### 저장 프로시저에 대한 재확인
- 강사는 저장 프로시저 작성을 직접 즐기지는 않지만, "왜 동작하는지 이해하고 필요할 때 검색해서 가져다 쓸 수 있으면 충분하다"는 실용적인 태도를 강조한다 — SQL은 많이 작성하지만 저장 프로시저는 거의 작성하지 않는다고 언급한다.

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

-- 이후 UPDATE 시 updated_at이 자동으로 현재 시각으로 갱신됨
UPDATE favorite SET count = count + 1 WHERE id = 1;
```

## 요약
- `updated_at` 자동 갱신은 트리거 함수(`CREATE FUNCTION` + `CREATE TRIGGER BEFORE UPDATE`)로 구현하는 PostgreSQL의 대표적인 저장 프로시저 활용 사례다.
- 한 번 만든 트리거 함수는 여러 테이블에 재사용해서 붙일 수 있다.
- 저장 프로시저는 직접 자주 작성하기보다, 필요할 때 검색해 이해하고 가져다 쓰는 정도로 충분하다는 것이 강사의 실용적 관점이다.
