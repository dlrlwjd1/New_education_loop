# Many-to-Many Relationships

## 개요
- 여러 값을 반복 열(album_id1, album_id2, ...)로 두려는 잘못된 접근을 짚고, 다대다(many-to-many) 관계를 두 개의 다대일(many-to-one) 관계로 분해하는 정션 테이블(junction table) 설계법을 다루는 강의

## 내용
### 왜 "여러 개의 외래 키 열"은 안 되는가
- 트랙 하나가 앨범 여러 개(오리지널·컴필레이션·사운드트랙 등)에 속할 수 있다고 해서 `album_id1`, `album_id2`, `album_id3`처럼 열을 여러 개 만드는 방식은 통하지 않는다 — 몇 개까지 필요한지 미리 알 수 없고, 아무리 많이 만들어도 그보다 하나 더 필요한 경우가 생기기 때문이다.
- 앨범과 아티스트의 관계도 사실은 다대다에 가깝다(앨범 하나에 아티스트 여러 명이 참여할 수 있음)는 점을 짚으며, 이 강좌의 트랙 예제는 단순화를 위해 다대일로 설계했음을 다시 언급한다.

### 다대다 = 두 개의 다대일 관계 (정션 테이블)
- 논리적 다이어그램에서는 "많음-많음(까마귀 발-까마귀 발)"으로 그릴 수 있지만, 이를 물리적 테이블 구조로 만들 때는 가운데에 정션 테이블(junction table, 조인 테이블/through table이라고도 함)을 두어 다대다를 두 개의 다대일 관계로 쪼갠다.
- 예: 학생(student)과 강좌(course)의 다대다 관계 → 가운데에 `member`(멤버십) 테이블을 두고, `member`가 `student_id`, `course_id` 두 개의 외래 키를 가진다.
- 정션 테이블은 관계 자체에 대한 추가 데이터(예: `role` — 이 학생/강좌 조합에서 교사인지 학생인지)도 함께 저장할 수 있다. 즉 "연결 지점"에서 데이터를 모델링하는 것이다.

### 구현 패턴
- 두 "잎(leaf)" 테이블(student, course)은 기존과 같은 기본 키(`id SERIAL PRIMARY KEY`) + 논리적 키(`UNIQUE`) 패턴으로 만든다.
- 가운데 정션 테이블은 두 개의 외래 키(`student_id`, `course_id`, 각각 `ON DELETE CASCADE`)와 관계 데이터(`role`)로 구성하며, 별도의 SERIAL id 없이 `PRIMARY KEY (student_id, course_id)`처럼 두 외래 키의 조합을 복합 기본 키(composite primary key)로 사용할 수 있다.

## 예시
```sql
CREATE TABLE student (
    id SERIAL PRIMARY KEY,
    name VARCHAR(128),
    email VARCHAR(128) UNIQUE
);

CREATE TABLE course (
    id SERIAL PRIMARY KEY,
    title VARCHAR(128) UNIQUE
);

CREATE TABLE member (
    student_id INTEGER REFERENCES student(id) ON DELETE CASCADE,
    course_id INTEGER REFERENCES course(id) ON DELETE CASCADE,
    role INTEGER,  -- 예: 1=교사, 0=학생
    PRIMARY KEY (student_id, course_id)
);
```
```sql
-- 재구성 (JOIN)
SELECT student.name, member.role, course.title
FROM student
JOIN member ON student.id = member.student_id
JOIN course ON member.course_id = course.id
ORDER BY course.title, member.role DESC, student.name;
```

## 요약
- 다대다 관계는 반복 열이 아니라, 가운데에 정션 테이블을 두어 두 개의 다대일 관계로 분해해서 구현한다.
- 정션 테이블은 두 외래 키 외에도 관계 자체에 대한 데이터(예: 역할)를 저장할 수 있으며, 두 외래 키의 조합을 복합 기본 키로 사용하는 경우가 많다.
- 결국 JOIN으로 학생·강좌·역할 정보를 사람이 읽기 좋은 형태로 재구성한다.
