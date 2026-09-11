# Database Normalization

## 개요

- 정규화(normalization)의 정의와 두 가지 보장 원칙: 무손실 분해(lossless decomposition)·종속성 보존(dependency preservation)
- 정규화가 필요한 이유 — 중복 제거, 무결성·일관성 확보, 삽입/갱신/삭제 이상(anomaly) 제거
- UNF(비정규형) → 1NF → 2NF → 3NF 변환 조건과 단계, 세미나-의사(seminar–doctor) 예제 전체 풀이

## 내용

### 정규화란

- 데이터 중복을 최소화하도록 **관계(테이블) 구조를 체계적으로 평가·교정하는 프로세스**. 테이블이 좋은(normal) 구조를 따르도록 만든다.
- 두 가지 핵심 원칙을 보장한다:
  - **무손실 분해(lossless decomposition)**: R을 R1, R2, R3로 분해했다면, R1 ∪ R2 ∪ R3가 데이터 손실 없이 원래 R로 되돌아갈 수 있어야 한다.
  - **종속성 보존(dependency preservation)**: 각 분해본의 FD의 합집합(F1 ∪ F2 ∪ F3)이 원래 R의 FD를 함의해야 한다.

### 정규화가 필요한 이유

- **중복 제거**: 같은 데이터를 여러 곳에 저장하면 공간 낭비와 불일치 위험이 커진다.
- **무결성 보장**: 한 곳만 갱신하고 다른 곳을 빠뜨리는 잘못된 갱신을 방지.
- **일관성 확보**: 관계·종속성·속성 표현의 일관성 (예: 같은 의미를 student number와 student ID 두 이름으로 쓰지 않기).
- **이상(anomaly) 제거**:
  - **갱신 이상(update anomaly)**: 한 테이블에서만 갱신되고 다른 테이블에는 반영 안 됨 (예: 나이가 department 테이블에만 갱신되고 faculty 테이블에는 안 됨 → 보고서 불일치)
  - **삽입 이상(insertion anomaly)**: 레코드를 넣을 때 관련 없는 유령(phantom/ghost) 값을 강제로 넣어야 하는 상황
  - **삭제 이상(deletion anomaly)**: 레코드를 지울 때 관련 없는 데이터(예: 학생 삭제 시 담당 교수)까지 지워지는 상황

### 정규화 프로세스의 성질

- 각 테이블이 **하나의 주제(single subject matter)**만 표현하게 한다.
- 모든 비키(non-key) 속성은 기본 키(후보 키/프라임 키)에 종속되어야 한다.
- **낮은 정규형에서 높은 정규형으로** 변환하며, 높은 정규형이 항상 더 좋다: 4NF > BCNF > 3NF > 2NF > 1NF.
- **한 번에 한 관계(테이블)씩** 진행하고, 바람직하지 않은(undesired) 종속성 — 부분 종속·이행 종속 — 을 찾아 분해한다.
- FD 다이어그램에서: 완전 종속(키 전체 → 나머지)은 **바람직**, 부분 종속(키 일부가 결정자)과 이행 종속(비프라임이 결정자)은 **제거 대상**.

### 비정규형(UNF)의 징후

1. **반복 그룹(repeating groups)** 존재
2. 일부 셀이 **NULL(빈 값)** — 위 행 값의 반복을 생략한 형태
3. 한 셀에 **여러 값**(multiple values) 존재 (예: 한 셀에 "16, 8")

### 1NF (First Normal Form)

**조건**: 모든 값이 **원자값(atomic value)** — 더 쪼갤 수 없는 값 — 이어야 하고, 한 속성이 여러 값을 가질 수 없으며, 다중값·복합 속성 금지.

**변환 3단계**:

1. **반복 그룹 제거** — NULL을 적절한 값으로 채우고, 여러 값을 가진 셀은 값마다 새 행(tuple)으로 분리
2. **기본 키 식별** — 다른 모든 속성을 유일하게 결정하는 속성(조합) 찾기
3. **모든 종속성 식별** — 종속성 다이어그램(dependency diagram)으로 표현

### 2NF (Second Normal Form)

**조건**: (1) 1NF여야 하고 (2) **부분 종속(partial dependency)이 없어야** 한다 — 모든 비키 속성이 **키 전체에 완전 종속**. 기본 키가 단일 속성이면 자동으로 2NF다.

**변환 단계**:

1. **부분 종속마다 새 테이블 생성** — 부분 종속의 결정자를 새 테이블의 기본 키로 만든다. 단, **원본 테이블에 그 키의 복사본을 남겨 외래 키로 쓴다.**
2. 각 부분 종속의 **종속자들을 새 기본 키에 재배치**한다.
3. 이행 종속은 **이 단계에서 건드리지 않는다** (3NF에서 처리).

### 3NF (Third Normal Form)

**조건**: (1) 2NF여야 하고 (2) **이행 종속(transitive dependency)이 없어야** 한다. 2NF이면서 이행 종속이 없으면 자동으로 3NF.

**변환 단계** (2NF와 유사):

1. 이행 종속마다 **새 테이블 생성** — 이행 종속의 결정자를 새 테이블의 기본 키로 쓰고, 대응하는 종속자를 함께 옮긴다.
2. 원본 테이블에는 그 결정자의 **복사본을 외래 키로 남긴다.**
3. 이행 종속이 없는 테이블은 변경 없이 그대로 3NF 자격을 얻는다.

## 예시

세미나-의사 데이터(UNF): 세미나 코드, 세미나명, 의사 ID, 의사명, 전문분야 코드, 전문분야명, 날짜, 배정 시간이 한 테이블에 있고, 빈 셀과 "16, 8" 같은 다중값 셀이 존재.

**1NF 변환**: 빈 셀을 값으로 채우고(반복 그룹 제거), 16과 8을 별도 행으로 분리, 복합 기본 키 식별 → **PK = (SeminarCode, DoctorID)**. 데이터 대조로 종속성 식별:

- `SeminarCode → SeminarName` — **부분 종속 PD1** (키 일부가 결정자)
- `DoctorID → DoctorName, SpecializationCode, SpecializationName` — **부분 종속 PD2** (HoursAllocation은 8이 다른 의사에도 나타나 탈락)
- `SpecializationCode → SpecializationName` — **이행 종속** (SpecializationCode 자신이 DoctorID에 종속)
- Date, HoursAllocation은 복합 키 전체에만 종속

**2NF 변환**: 부분 종속마다 테이블 분리 —

```text
Seminar(SeminarCode, SeminarName)                                   -- PD1
Doctor(DoctorID, DoctorName, SpecializationCode, SpecializationName) -- PD2 (이행 종속은 아직 존재)
Seminar_Doctor(SeminarCode, DoctorID, Date, HoursAllocation)         -- 원본 축소, 복합 PK
```

**3NF 변환**: Doctor 테이블의 이행 종속 `SpecializationCode → SpecializationName`을 분리 —

```text
Seminar(SeminarCode, SeminarName)
Specialization(SpecializationCode, SpecializationName)
Doctor(DoctorID, DoctorName, SpecializationCode)      -- SpecializationCode는 FK로 남김
Seminar_Doctor(SeminarCode, DoctorID, Date, HoursAllocation)
```

최종 4개 테이블 모두 화살표(종속성)가 기본 키에서만 나오는 "바람직한" 형태이고, 중복·이상이 사라진다. 새 전문분야 추가 시 다른 데이터를 강제로 넣을 필요가 없다(삽입 이상 해소). 외래 키 값은 참조 무결성에 따라 부모 테이블 기본 키 값과 일치해야 한다.

## 요약

- 정규화는 무손실 분해와 종속성 보존을 지키며 테이블을 낮은 정규형에서 높은 정규형으로 바꾸는 체계적 프로세스다.
- UNF의 징후는 반복 그룹, NULL 셀, 다중값 셀이다.
- 1NF = 원자값 + 기본 키 + 종속성 식별, 2NF = 부분 종속 제거(부분 종속마다 새 테이블), 3NF = 이행 종속 제거(결정자를 새 테이블 PK로).
- 분해할 때는 항상 결정자 복사본을 원본에 남겨 외래 키로 삼는다.
- 다음 강의는 BCNF(Boyce-Codd Normal Form)와 4NF다.
