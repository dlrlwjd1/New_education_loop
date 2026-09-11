# Demonstration: Database Design and Many to Many

## 개요
- 트랙-앨범-아티스트-장르(일대다 관계 모델)와 학생-강좌-멤버십(다대다 관계 모델)을 psql에서 직접 만들고 데이터를 넣어 JOIN·ON DELETE CASCADE 동작을 확인하는 실습 강의

## 내용
### 일대다 모델 복습 실습
- 아티스트·장르 같은 "룩업 테이블(lookup table)"에 값을 먼저 넣고(`INSERT`), `SELECT * FROM 테이블` + Tab 등으로 방금 생성된 id를 확인한 뒤, 그 번호를 앨범·트랙 삽입 시 외래 키 값으로 수동 입력한다.
- 논리적 키에 걸어둔 `UNIQUE` 제약 덕분에, 이미 존재하는 값(예: 'Rock')을 실수로 중복 삽입하려 하면 데이터베이스가 오류를 내며 막아준다 — 이는 버그가 아니라 실수를 방지해주는 안전장치다.
- `CROSS JOIN`과 `ON` 절이 있는 일반 JOIN을 나란히 실행해 비교해보면, CROSS JOIN은 모든 조합을 다 보여주고 일반 JOIN은 그중 조건이 일치하는 것만 필터링해서 보여준다는 차이를 직접 확인할 수 있다.
- 네 테이블(트랙·앨범·아티스트·장르)을 한 번에 조인하는 SELECT 문도 실습한다.

### ON DELETE CASCADE 동작 확인
- 장르(genre) 테이블에서 행 하나를 `DELETE`하면, 그 장르를 참조하던 트랙(track) 테이블의 관련 행들도 함께 사라지는 것을 실제로 확인한다 — `ON DELETE CASCADE`가 부모 삭제를 자식 테이블로 전파시키는 것을 보여준다.

### 다대다(학생-강좌) 모델 실습
- student, course 두 룩업 테이블을 만들고(각각 `id SERIAL PRIMARY KEY` + `UNIQUE` 논리적 키), 가운데 `member` 정션 테이블을 `student_id`, `course_id` 외래 키와 `role` 데이터 열로 구성한다.
- `member` 테이블은 별도의 SERIAL id 없이 `student_id + course_id` 조합을 기본 키로 사용해, 같은 학생이 같은 강좌에 중복으로 등록되는 것을 방지한다(역할까지 포함해 기본 키를 잡을 수도 있다).
- student → member → course 순서로 JOIN해 "학생 이름 / 역할 / 강좌 제목"을 사람이 읽기 좋은 형태로 조회한다.

## 예시
```sql
-- 룩업 테이블 삽입 후 id 확인
INSERT INTO artist (name) VALUES ('Led Zeppelin');
SELECT * FROM artist;   -- 방금 생성된 id 확인

-- CROSS JOIN vs INNER JOIN 비교
SELECT * FROM track CROSS JOIN genre;
SELECT track.title, genre.name FROM track JOIN genre ON track.genre_id = genre.id;

-- ON DELETE CASCADE 확인
DELETE FROM genre WHERE name = 'Metal';
SELECT * FROM track;  -- 해당 장르를 참조하던 트랙도 함께 삭제됨

-- 다대다: student-course-member
SELECT student.name, member.role, course.title
FROM student
JOIN member ON student.id = member.student_id
JOIN course ON member.course_id = course.id;
```

## 요약
- 룩업 테이블에 값을 넣고 id를 확인해 외래 키로 수동 연결하는 흐름을 실제로 반복 실습한다.
- CROSS JOIN과 INNER JOIN을 나란히 실행해보면 "INNER JOIN = CROSS JOIN + 필터"라는 관계를 직관적으로 확인할 수 있다.
- ON DELETE CASCADE는 부모 테이블 삭제를 자식 테이블까지 실제로 전파시키며, 다대다 관계는 정션 테이블(member)의 복합 기본 키로 구현한다.
