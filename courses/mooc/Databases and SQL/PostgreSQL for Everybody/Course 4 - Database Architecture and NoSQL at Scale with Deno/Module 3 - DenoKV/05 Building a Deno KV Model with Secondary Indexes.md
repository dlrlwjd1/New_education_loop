# Building a Deno KV Model with Secondary Indexes

## 개요
- 기본 키·외래 키·SERIAL이 없는 Deno KV에서, 전통적 SQL의 정규화된 책(book)-저자-언어 모델을 논리 키 접두사와 "보조 인덱스(secondary index)" 패턴으로 재현하는 방법을 다루는 강의

## 내용
### 전통적 SQL 모델 복습과 제약 조건
- Course 1~2에서 다룬 방식대로라면 book·author·language를 각각 정규화된 테이블로 만들고 외래 키로 연결했을 것이다. 하지만 Deno KV에는 테이블·정수 기본 키·외래 키·자동 증가가 전혀 없다 — 오직 계층적 자바스크립트 배열 키만 존재하며, `set`/`get`(정확 일치)과 `list`(접두사 스캔)만 가능하다.

### 키 배열의 정렬은 슬래시 표기와 다르다
- Deno KV 키는 실제로 배열(예: `["author", "Barb Oakley"]`)이며, 정렬은 배열 요소별로 이루어진다(Python 튜플 정렬과 유사) — 강의에서 `/`로 표기하는 것은 사람이 읽기 편하도록 만든 표현일 뿐, 내부적으로는 배열임을 강조한다.

### 논리 키 설계: ISBN을 실제 키로, 나머지는 "보조 인덱스"
- ISBN을 유일한 논리 키로 삼아 실제 책 데이터를 `["book", ISBN]`에 저장한다.
- 제목·저자·언어처럼 검색하고 싶은 각 속성마다 별도의 접두사를 만들고, 그 끝에 ISBN을 붙여 값이 비어 있는 "인덱스 전용 레코드"를 만든다: `["book", "title", "Introduction to Networking", ISBN]`, `["book", "author", "Charles Severance", ISBN]`, `["book", "language", "English", ISBN]`. 이 레코드들은 값을 저장할 필요가 없다 — 키 자체가 "이 ISBN이 이 조건에 해당한다"는 정보를 담고 있기 때문이다.
- 이렇게 하면 `list(["book", "author", "Charles Severance"])`로 해당 저자의 모든 ISBN을 빠르게 조회할 수 있다 — SQL의 WHERE 절과 유사한 역할을 하는 셈이다. 강사는 이를 "외래 논리 키(foreign logical key)"라는 자신만의 개념으로 부르며, 공식적인 모범 사례인지는 불확실하다고 솔직하게 인정한다.

### 실습: kvadmin.py로 직접 구현
- `set /book/title_Introduction_to_Networking/978... {}`처럼(공백은 밑줄로 대체) 빈 값의 인덱스 레코드를 만들고, `list /book/author/Charles_Severance`로 해당 저자의 책 ISBN 목록을 조회한 뒤, 실제 데이터는 `get /book/ISBN`으로 별도 조회하는 2단계 패턴을 실습한다.

## 예시
```
set /book/978xxxxxxxxxx {"title": "Introduction to Networking", "author": "Charles Severance", "language": "English"}
set /book/author/Charles_Severance/978xxxxxxxxxx {}
set /book/language/English/978xxxxxxxxxx {}

list /book/author/Charles_Severance
get /book/978xxxxxxxxxx
```

## 요약
- Deno KV에는 정규화된 외래 키 대신, 조회하고 싶은 조건마다 "속성값 → ISBN"을 키에 인코딩한 빈 인덱스 레코드를 만드는 패턴을 사용한다.
- 실제 데이터는 논리 키(ISBN) 아래 한 곳에만 저장하고, 나머지는 그 논리 키를 가리키는 조회 전용 인덱스로 구성한다.
- 이 패턴은 강사가 고안한 실용적 접근이며, 공식적으로 권장되는 방식인지는 불확실하다고 밝힌다.
