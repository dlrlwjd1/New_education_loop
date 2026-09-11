# Cursor subclasses

## 개요

- 커서 클래스(Python↔MySQL 통신 번역기)와 서브클래스(raw·dictionary·buffered)의 역할
- 인터리빙(interleaving) 요청과 "unread result found" 에러의 회피

## 내용

### 커서 클래스란

- **Python과 백엔드 MySQL 사이의 통신을 번역**하는 방법 — Python이 보낸 문자열 객체(SQL 문)를 MySQL이 이해하는 명령·데이터 타입으로 파싱하고, 결과를 다시 Python 친화적 코드로 파싱한다.
- 자주 쓰는 속성·메서드: **column_names**(결과 집합의 컬럼 이름), **rowcount**(영향받은 행 수), **execute**(가장 흔한 기능 — Python 문자열 인자를 MySQL 쿼리에 바인딩해 실행).
- 서브클래스는 부모 커서 클래스의 속성을 상속하며 효율을 위해 동작을 변형한다.

### 3가지 서브클래스

1. **raw 커서** — 결과를 Python 친화적으로 **전처리하지 않고** 반환. 처리 능력을 아껴 **커스텀 변환**을 만들 수 있지만 코드가 더 필요하다.
2. **dictionary 커서** — 각 행을 **딕셔너리로** 반환 — 이름 없는 튜플 목록 대신 **실제 컬럼 이름으로 변수에 접근**할 수 있다.
3. **buffered 커서** — 데이터 부분집합을 **버퍼 메모리에 저장** — 행마다 서버에 반복 요청할 필요가 없다. 단, 로컬 메모리에 저장되므로 **작은 데이터셋에만** 적합.

### 인터리빙 요청과 buffered의 필요성

- **인터리빙** = 첫 쿼리 결과의 일부를 후속 쿼리에 사용하는 것 (예: 첫 쿼리로 예약 ID → 그 ID로 식사 비용 조회).
- 첫 쿼리의 모든 결과가 반환되기 전에 후속 쿼리를 만들면 **unread result found 에러** — 루프를 끝내고 모든 결과를 소진한 뒤 다음 쿼리를 하는 것이 원칙.
- **buffered 커서는 모든 행을 미리 반환**하므로 이 에러 없이 인터리빙이 가능하다.

## 예시

```python
cursor = connection.cursor()                    # 표준 커서
cursor_buffered = connection.cursor(buffered=True)
cursor_raw = connection.cursor(raw=True)
cursor_dict = connection.cursor(dictionary=True)

cursor_buffered.execute("SELECT * FROM orders")  # 인터리빙 요청에 안전
```

## 요약

- 커서 클래스는 Python 문자열과 MySQL 명령을 상호 번역하며, execute·rowcount·column_names가 핵심 기능이다.
- raw(무가공), dictionary(컬럼 이름 접근), buffered(메모리 버퍼) 서브클래스를 키워드 인자로 인스턴스화한다.
- 인터리빙 쿼리는 buffered 커서로 unread result found 에러를 피한다.
