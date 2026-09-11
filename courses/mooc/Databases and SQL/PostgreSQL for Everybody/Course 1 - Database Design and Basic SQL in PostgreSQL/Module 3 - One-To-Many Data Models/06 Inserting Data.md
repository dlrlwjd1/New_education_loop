# Inserting Data

## 개요
- 정규화된 4개 테이블(트랙·앨범·아티스트·장르)에 실제로 데이터를 삽입하며, 외래 키 값을 수동으로 추적해 연결하는 방법을 보여주는 실습 강의

## 내용
### 바깥쪽 테이블부터 안쪽 테이블 순서로 삽입
- `id`는 SERIAL이므로 INSERT 시 자동 생성된다. 예: Led Zeppelin을 삽입하면 자동으로 id=1, 다음에 AC/DC를 삽입하면 id=2가 부여된다. 이 숫자는 어떤 순서로 넣었는지에 따라 정해질 뿐, 특별한 의미(가치 판단 등)는 없다.
- 이 예제 데이터 모델은 트랙 → 앨범 → 아티스트, 트랙 → 장르로 이어지는 관계이므로, 바깥쪽(아티스트, 장르)부터 삽입해 그 기본 키 값을 먼저 확보한 뒤, 안쪽(앨범, 트랙)을 삽입할 때 해당 값을 외래 키로 채워 넣는 순서로 진행한다.
- 앨범을 삽입할 때는 `artist_id` 열에 값을 넣어야 하는데, 이 값은 SERIAL처럼 자동으로 채워지지 않으므로 앞서 삽입한 아티스트의 id를 기억해두었다가 직접 입력해야 한다. (실습에서는 종이에 적어 추적하며, 이후 강의에서 이를 자동화하는 SQL 기법을 배운다고 언급된다.)
- 트랙을 삽입할 때는 `album_id`와 `genre_id` 두 개의 외래 키를 함께 채워야 한다.

## 예시
```sql
INSERT INTO artist (name) VALUES ('Led Zeppelin');  -- id = 1
INSERT INTO artist (name) VALUES ('AC/DC');          -- id = 2

INSERT INTO genre (name) VALUES ('Rock');   -- id = 1
INSERT INTO genre (name) VALUES ('Metal');  -- id = 2

-- artist_id는 위에서 확인한 값을 직접 채워 넣는다
INSERT INTO album (title, artist_id) VALUES ('Who Made Who', 2);

-- album_id, genre_id 모두 앞서 확인한 값을 채워 넣는다
INSERT INTO track (title, len, rating, count, album_id, genre_id)
VALUES ('Who Made Who', 297, 5, 2, 1, 2);
```

## 요약
- 정규화된 테이블에 데이터를 넣을 때는 참조 대상(부모 테이블)을 먼저 삽입해 기본 키 값을 확보한 뒤, 자식 테이블 삽입 시 그 값을 외래 키로 채운다.
- SERIAL 기본 키는 자동 생성되지만, 외래 키 값은 직접 추적해서 입력해야 한다(추후 SQL 기법으로 자동화 가능).
- 결과적으로 문자열은 한 번만 저장되고, 나머지는 모두 숫자(정수 키)로 연결되어 압축된 형태로 저장된다.
