# Using JOIN Across Tables

## 개요
- 여러 테이블에 흩어진 데이터를 다시 하나의 결과로 조합하는 JOIN 구문(INNER JOIN, CROSS JOIN)과, `ON DELETE CASCADE`/`RESTRICT`/`SET NULL` 옵션의 실제 동작을 다루는 강의

## 내용
### JOIN의 기본 개념
- JOIN은 여러 테이블에 걸쳐 확장된 SELECT다. 어떤 열을 기준으로 테이블을 연결할지 `ON` 절로 지정한다.
- `SELECT album.title, artist.name FROM album JOIN artist ON album.artist_id = artist.id;` 처럼, 외래 키(`album.artist_id`)와 그것이 가리키는 기본 키(`artist.id`)를 `ON` 절에서 일치시킨다.
- JOIN은 결국 "정규화 과정에서 숫자로 압축했던 문자열을 다시 조합해 보여주는" 작업이다 — 데이터베이스에는 여전히 숫자로 저장되어 있고, 화면에 보여줄 때만 즉석에서 문자열로 재구성된다.

### INNER JOIN vs CROSS JOIN
- `CROSS JOIN` : ON 절 없이 두 테이블의 모든 행 조합(카티전 곱, cartesian product)을 만든다. 예: 2행짜리 테이블과 2행짜리 테이블을 CROSS JOIN하면 4행이 나온다. 비효율적이며 실무에서 잘 쓰이지 않지만, JOIN의 기본 원리(조합 후 필터링)를 이해하는 데 도움이 된다.
- `INNER JOIN`(또는 그냥 `JOIN`) : CROSS JOIN 결과에서 `ON` 절 조건과 일치하는 행만 남기는 것과 같다. 즉 "조합 후 필터링"이라는 개념적 순서로 이해할 수 있다.
- 여러 테이블을 동시에 JOIN할 수도 있다: 트랙 → 앨범 → 아티스트, 트랙 → 장르를 한 번에 조인해 트랙 제목·아티스트 이름·앨범 제목·장르 이름을 한 행으로 보여줄 수 있다.

### ON DELETE 옵션 세 가지
- `ON DELETE CASCADE` : 부모 행이 삭제되면 그 부모를 참조하는 자식 행도 함께 삭제된다. 예: 특정 장르를 삭제하면 그 장르에 속한 트랙들도 함께 삭제된다. 데이터 모델의 일관성(참조 무결성)을 깔끔하게 유지할 수 있어 강사가 주로 사용하는 방식이다.
- `ON DELETE RESTRICT` : 자식 행이 남아있는 상태에서 부모를 삭제하려고 하면 삭제 자체가 실패한다(막힘).
- `ON DELETE SET NULL` : 부모가 삭제되면 자식 행은 삭제되지 않고, 해당 외래 키 값만 NULL로 바뀐다. 이 옵션을 쓰려면 외래 키 열이 NULL을 허용하도록 선언되어 있어야 한다.

## 예시
```sql
-- CROSS JOIN: 모든 조합 (필터 없음)
SELECT * FROM track CROSS JOIN genre;

-- INNER JOIN: ON 절로 일치하는 것만
SELECT track.title, genre.name
FROM track JOIN genre ON track.genre_id = genre.id;

-- 여러 테이블 조인
SELECT track.title, artist.name AS artist, album.title AS album, genre.name AS genre
FROM track
JOIN genre ON track.genre_id = genre.id
JOIN album ON track.album_id = album.id
JOIN artist ON album.artist_id = artist.id;
```

## 요약
- JOIN은 정규화로 분리된 여러 테이블의 데이터를 `ON` 절 기준으로 다시 연결해, 사용자에게 보여줄 문자열 형태로 즉석 재구성하는 SQL 기능이다.
- CROSS JOIN(모든 조합)과 INNER JOIN(일치하는 것만 필터링)의 관계를 이해하면 JOIN의 동작 원리를 직관적으로 파악할 수 있다.
- 외래 키의 `ON DELETE` 옵션(CASCADE/RESTRICT/SET NULL)으로 부모 삭제 시 자식 행을 어떻게 처리할지 제어할 수 있다.
