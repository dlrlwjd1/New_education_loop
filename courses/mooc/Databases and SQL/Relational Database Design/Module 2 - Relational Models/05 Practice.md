# Practice: ERD를 관계형 모델로 변환

## 개요
- 교육기관 ERD를 릴레이션으로 옮기며 1:N, N:M, 단항 관계의 변환 규칙을 종합 적용한다.

## 내용

### 엔티티와 기본키
- `Instructors`는 `EmployeeID`, `Courses`는 `CourseNumber`, `Programs`는 `Title`, `Students`는 `StudentID`를 기본키로 삼는다.
- 각 엔티티의 나머지 속성은 해당 릴레이션의 일반 속성으로 그대로 옮긴다.

### 이항 관계
- 강사와 강좌의 N:M 관계는 `Instructor_Course(EmployeeID, CourseNumber)` 교차 릴레이션으로 변환한다. 두 열은 각각 외래키이며 함께 복합 기본키가 된다.
- 프로그램과 강좌의 1:N 관계는 프로그램 기본키를 `Courses`의 외래키로 둔다.
- 프로그램과 학생의 1:N 관계도 프로그램 기본키를 `Students`에 복사한다.
- 학생과 강좌의 N:M 관계는 `Student_Course(StudentID, CourseNumber)`로 분리한다.

### 재귀 관계
- 학생 간 친구 관계는 단항 N:M이므로 두 학생 키를 가진 교차 릴레이션이 필요하다. 같은 이름을 두 번 쓸 수 없으므로 두 번째 키는 `FriendID`처럼 역할이 드러나게 바꾼다.
- 강사의 감독 관계는 단항 1:N이므로 `Instructors`에 `SupervisorID` 자기참조 외래키를 둔다.
- 강사가 학생을 지도하는 1:N 관계는 `Students`에 `AdvisorEmployeeID`를 둔다.

## 예시
```text
Instructor_Course(EmployeeID PK/FK, CourseNumber PK/FK)
Student_Friend(StudentID PK/FK, FriendID PK/FK)
Instructors(EmployeeID PK, ..., SupervisorID FK -> Instructors.EmployeeID)
```

## 요약
- 모든 엔티티·속성·식별자를 먼저 옮긴 뒤 각 관계가 외래키 또는 교차 릴레이션으로 표현됐는지 점검한다.
- 1:N은 N쪽 외래키, N:M은 교차 릴레이션, 단항 관계는 역할명이 다른 자기참조 키로 구현한다.
