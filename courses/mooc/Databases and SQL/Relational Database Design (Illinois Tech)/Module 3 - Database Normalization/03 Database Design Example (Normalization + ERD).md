# Database Design Example (Normalization + ERD)

## 개요

- 강좌 전체(ER 모델링 + 함수 종속성 + 정규화)를 종합하는 설계 예제 풀이
- 비정규화된 스프레드시트 데이터를 3NF/BCNF까지 정규화하고, 관계 스키마·샘플 데이터 테이블·정규화된 ERD를 제시하는 전 과정
- 대리 키(surrogate key) 도입 판단과 브리지 테이블의 ERD 표현

## 내용

### 문제 설정

- 주어진 것: 학생-과목-학부(faculty) 정보가 뒤섞인 비정규화 스프레드시트 (SID, SName, CID, CName, Faculty, FPhone, Grade)
- 요구사항: 3NF(또는 BCNF)까지 정규화하고 ① 관계 스키마 ② 샘플 데이터 테이블 ③ ERD를 제시

### 1단계 — 1NF에서 함수 종속성 식별

FD 정의(한 속성에서 값이 일치하는 튜플들은 다른 속성에서도 일치해야 함)를 데이터에 적용해 하나씩 검증:

- `SID → SName` 성립 (S01은 항상 Alex, S04는 항상 Betty). SID는 CID·Grade와는 불일치 → 그 이상은 결정하지 못함
- `CID → CName, Faculty, FPhone` 성립 (C11·C22 각각 과목명·학부·학부 전화가 일정). Grade는 C11에 A와 다른 값이 섞여 탈락
- `Faculty → FPhone` 성립 (upper는 항상 10111, lower는 항상 11120) → **이행 종속(TD1)** — CID → Faculty → FPhone
- `SID, CID → Grade` — Grade는 복합 키 전체에만 **완전 종속**
- 기본 키 = 부분 종속들의 결정자를 합친 **복합 키 (SID, CID)** → SID → SName과 CID → ...는 **부분 종속**이 된다

### 2단계 — 2NF (부분 종속 제거)

부분 종속마다 결정자+종속자를 새 테이블로 분리:

- **Student(SID, SName)** — 부분 종속 1
- **Course(CID, CName, Faculty, FPhone)** — 부분 종속 2 (이행 종속은 아직 존재 — 2NF에서는 허용)
- **Student_Course(SID, CID, Grade)** — 완전 종속이 남긴 원본. 복합 기본 키의 두 구성요소가 각각 다른 테이블의 기본 키 → **브리지 테이블**
- 정규화된 각 테이블에는 반복 행이 없어야 한다: Student에는 유일한 SID 4건, Course에는 유일한 CID 2건(C11, C22)만 남는다.

### 3단계 — 3NF (이행 종속 제거)

- Course 테이블의 `Faculty → FPhone`을 분리 → **Faculty(Faculty, FPhone)** 새 테이블, Course에는 Faculty를 외래 키로 남김 → **Course(CID, CName, Faculty)**
- 이행 종속이 없는 나머지 테이블(Student, Student_Course)은 **변경 없이 그대로 3NF로 승계**된다.
- 최종 4개 테이블: Course, Faculty, Student, Student_Course. Faculty 테이블도 유일값 2건(upper, lower)만 가진다.

### 설계 판단 — 대리 키 도입

- Faculty(문자값)는 기본 키로 적합하지 않다 — 기본 키는 숫자(numeric)가 바람직하다.
- 설계자는 **대리 키(surrogate key) FID**(1, 2, ...)를 새 컬럼으로 도입한다. 대리 키는 식별 목적 전용이며 데이터 의미는 없다.
- FID를 Faculty의 기본 키로 쓰면 Course의 외래 키도 Faculty 텍스트 대신 **FID**로 바꾼다.

### 최종 산출물

**관계 스키마** (기본 키 밑줄):

```text
Student(SID, SName)
Course(CID, CName, FID)          -- FID = FK
Faculty(FID, Faculty, FPhone)
Student_Course(SID, CID, Grade)  -- 복합 PK, SID/CID 각각 FK
```

**정규화된 ERD (UML 표기)**:

- 각 테이블을 속성 나열이 든 직사각형으로 그리고 PK/FK를 라벨링한다.
- Student ↔ Course는 **다대다**였으므로 브리지 엔터티 Student_Course로 분해: "한 학생은 하나 이상의 과목에 등록하고, 한 과목은 여러 학생을 가진다" — 브리지 쪽이 many.
- Student_Course의 기본 키는 **하나의 복합 PK**(SID + CID)다 — "기본 키 두 개"가 아니라 키 속성이 두 개인 하나의 키이며, 각 구성요소는 FK1(→Student), FK2(→Course)로 대응한다.
- Faculty ↔ Course는 이 데이터에서 1:1 매핑으로 표현 (faculty가 과목을 배정받고, 과목은 한 faculty가 가르침).

### 강좌 전체 마무리

- **Module 1 (ER 모델링)**: 조직의 규칙을 잘 형성된(well-formed) 설계로 표현하는 법
- **Module 2 (함수 종속성)**: 중복 FD를 식별·제거해 데이터를 정제하는 법
- **Module 3 (정규화)**: 구현 전 단계에서 관계 스키마 모음이 좋은(normal) 상태인지 검증하는 법
- 다음 단계는 데이터베이스 구현(implementation) 단계다.

## 예시

원본 스프레드시트 → 최종 테이블 데이터 흐름 요약:

| 원본 (비정규화) | 최종 (3NF) |
|---|---|
| SID, SName, CID, CName, Faculty, FPhone, Grade 한 테이블, 값 반복 다수 | Student 4행 / Course 2행 / Faculty 2행 / Student_Course 조합별 성적 |
| C11 행마다 upper·10111 반복 | Faculty(1, upper, 10111) 단 한 행 |
| 성적은 학생×과목 조합에 종속 | Student_Course(SID, CID, Grade) 브리지 테이블 |

## 요약

- 실전 정규화 순서: 데이터로 FD 검증 → 복합 PK 식별 → 부분 종속마다 테이블 분리(2NF) → 이행 종속 분리(3NF) → 스키마·데이터·ERD 제시.
- 부분 종속의 결정자들을 합친 것이 복합 기본 키가 되고, 완전 종속(Grade)이 남는 원본이 브리지 테이블이 된다.
- 문자 기본 키는 대리 키(FID)로 교체하고 참조하는 쪽 외래 키도 함께 바꾼다.
- 브리지 테이블의 복합 PK는 하나의 키이며 구성요소 각각이 외래 키로 부모 테이블과 대응한다.
- ER 모델링 → 함수 종속성 → 정규화가 이 강좌의 전체 설계 파이프라인이다.
