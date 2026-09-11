# Building Tables

## 개요
- 트랙-앨범-아티스트-장르 데이터 모델을 실제 `CREATE TABLE` SQL 문으로 구현하는 실습 강의. 기본 키·논리적 키·외래 키 패턴과 `ON DELETE CASCADE`를 다룬다

## 내용
### 기본 키·논리적 키 패턴
- 기본 키 패턴: `id SERIAL PRIMARY KEY` — 자동 증가 정수를 만들고 이를 기본 키로 지정해 빠른 인덱스를 구축하도록 데이터베이스에 알린다.
- 논리적 키 패턴: 문자열 열에 `UNIQUE`를 붙인다 — 예를 들어 아티스트 이름(`name`)에 UNIQUE를 붙이면 같은 이름의 행이 중복 삽입되는 것을 막고, 동시에 해당 열에 인덱스가 생성되어 빠르게 조회할 수 있다.
- 이 두 패턴(기본 키 패턴, 논리적 키 패턴)은 테이블마다 거의 그대로 복사·붙여넣기 하면서 이름만 바꾸는 식으로 반복 사용된다.

### 외래 키와 ON DELETE CASCADE
- 외래 키 선언 형식: `열이름 INTEGER REFERENCES 참조테이블(id) ON DELETE CASCADE`.
- `ON DELETE CASCADE`는 부모 행(예: 특정 아티스트)이 삭제되면, 그 부모를 가리키는 자식 테이블의 모든 행(예: 그 아티스트의 앨범들)도 함께 삭제되어 데이터 일관성을 유지하게 한다.

### 복합 UNIQUE 제약 (Composite Unique Constraint)
- 트랙 테이블에서 트랙 제목(`title`)만으로는 UNIQUE를 걸 수 없다 — 서로 다른 앨범에 같은 제목의 트랙(예: "Moonlight")이 존재할 수 있기 때문이다.
- 해결책은 `title`과 `album_id`의 조합에 UNIQUE 제약을 거는 것 — 같은 앨범 안에서는 같은 제목이 중복될 수 없지만, 다른 앨범이면 같은 제목이 허용된다.

### 생성 결과 확인
- 테이블을 만든 뒤 `\d 테이블명` 등으로 스키마를 다시 확인하면, SERIAL이 실제로는 `NOT NULL DEFAULT nextval(...)` 형태로 구현되어 있고, UNIQUE 제약이 B-트리 인덱스를 사용하며, 외래 키 참조가 `ON DELETE CASCADE`로 표시된 것을 볼 수 있다.

## 예시
```sql
CREATE TABLE artist (
    id SERIAL PRIMARY KEY,
    name VARCHAR(128) UNIQUE
);

CREATE TABLE album (
    id SERIAL PRIMARY KEY,
    title VARCHAR(128) UNIQUE,
    artist_id INTEGER REFERENCES artist(id) ON DELETE CASCADE
);

CREATE TABLE genre (
    id SERIAL PRIMARY KEY,
    name VARCHAR(128) UNIQUE
);

CREATE TABLE track (
    id SERIAL PRIMARY KEY,
    title VARCHAR(128),
    len INTEGER,
    rating INTEGER,
    count INTEGER,
    album_id INTEGER REFERENCES album(id) ON DELETE CASCADE,
    genre_id INTEGER REFERENCES genre(id) ON DELETE CASCADE,
    UNIQUE(title, album_id)   -- 같은 앨범 안에서만 제목 중복 방지
);
```

## 요약
- 기본 키는 `SERIAL PRIMARY KEY`, 논리적 키는 `UNIQUE`라는 두 가지 반복 패턴으로 대부분의 테이블을 만들 수 있다.
- 외래 키는 `REFERENCES 테이블(id) ON DELETE CASCADE`로 선언해 부모 삭제 시 자식 행도 함께 정리되게 한다.
- 여러 앨범에 같은 트랙 제목이 존재할 수 있는 경우처럼, 단일 열이 아닌 열 조합에 UNIQUE 제약을 걸어야 하는 경우도 있다.
