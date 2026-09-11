# Comply with Higher Normal Forms (고차 정규형 준수 — BCNF/4NF/5NF)

> 강좌: Database Design: A Modern Approach (Logical Operations, MOOC) · 모듈 4: Normalizing Data · 토픽 4B

## 개요
- 대개 **3NF면 충분**하지만, 더 나아갈 때를 위한 **보이스-코드 정규형(BCNF)·제4정규형(4NF)·제5정규형(5NF)**과 그 위반·해결법을 다룬다.

## 내용

### 고차 정규형 개관
- 처음 세 정규형보다 **덜 흔한** 문제를 다룬다.
- **BCNF** — 1974년 Raymond Boyce & Edgar Codd. 3NF가 못 잡는 이상을 다루는 "새로운 3NF".
- **4NF** — 1977년 Ronald Fagin. 함수 종속이 아닌 **다치 종속(multivalued dependency)**을 다룸.
- **5NF** — 1979년 Ronald Fagin. 다치 사실을 기록하는 DB의 중복 감소, 의미상 관련된 다중 관계를 분리. = **프로젝션-조인 정규형(PJ/NF)**. 4NF 테이블은 거의 항상 5NF도 만족.

### 보이스-코드 정규형 (BCNF)
- **요구사항**: ① 3NF 충족. ② **모든 결정자(determinant)가 후보 키(candidate key)**. (비키 필드가 없으면 자동으로 BCNF.)
- **위반 신호**: 갱신·삽입 이상.
- **해결**: 결정자 X가 후보 키가 아닌 함수 종속 `X→Y`가 있는 테이블을 두 개로 분해 — (X, Y) 테이블 하나, (X + 나머지 열) 테이블 하나. 위반이 없어질 때까지 반복.
- 예(대학 course/student/TA): 규칙 — 각 과목 다수 학생·다수 TA, 각 TA는 한 과목, 과목별 학생당 TA 1명. `student`+`course_number`는 3NF 만족(둘이 `ta` 결정)하나, `student`+`ta`는 `course_number`를 결정하지 못해 후보 키가 못 됨 → BCNF 실패. 학생 없이 TA 배정 불가, TA 이름 변경 시 다중 수정. → **3개 테이블**((course_number, student), (student, ta), (course_number, ta))로 분해.

### 제4정규형 (4NF)
- **요구사항**: ① BCNF 충족. ② **다치 종속(multivalued dependency) 없음** — 열 A의 각 값에 대해 열 B의 값 집합과 열 C의 값 집합이 있는데 **B와 C가 서로 관련 없는** 경우.
- **위반 신호**: 비키 열의 반복 값·NULL, 논리적으로 관련 없는 열들이 한 테이블에.
- **해결**: `A→B`, `A→C`(B·C 무관)인 테이블을 (A, B)와 (A, C)로 분해.
- 예(영화): 한 영화에 다수 스타·다수 제작자, 스타·제작자는 여러 영화에. 세 열 모두 기본 키(BCNF)지만 스타와 제작자는 논리적으로 무관(`movie→star`, `movie→producer`) → 불필요 반복·삭제 이상. → **(movie, star)와 (movie, producer)** 두 테이블로. (빈 값 패턴도 4NF 위반 신호 — 예: 장비-부서 정보와 프로젝트-부서 정보를 분리.)

### 제5정규형 (5NF)
- **요구사항**: ① 4NF 충족. ② **순환 종속(cyclic dependency) 없음** — 세 개 이상 열의 복합 기본 키에서 값들이 (A,B), (B,C), (A,C) 쌍으로 관련될 때 발생.
- **위반 신호**: 추가·유지해야 할 행 수가 폭증.
- **해결**: 중복·이상을 없애도록 분해한 뒤 후보 키로 **재조인**. 재조인 결과가 원본과 **행 손실·추가 없이 동일**하면 분해 유지, 아니면 원본 사용.
- 예(Woodworkers Wheelhouse — buyer/product/company): 세 열 모두 기본 키. 2개 테이블로만 나누면 조인 시 원본에 없던 조합(Smith가 Fenster에서 windows 구매)이 생김. **3개 테이블**((buyer, product), (product, company), (buyer, company))로 나눠야 조인 시 원본 복원. 규모 효과 — 20 buyer×50 product×100 company = 최대 10만 행 → 3개 테이블은 최대 8천 행.
- **projection(프로젝션)** = 원본의 열 부분집합을 가진 새 테이블. 올바른 프로젝션들을 조인하면 원본 데이터가 정확히 복원되어야 함.

### 예시 — 원본 재구성 JOIN (SQL)
```sql
SELECT temp.buyer, temp.product, temp.company
FROM (
  SELECT bp.buyer, bp.product, pc.company
  FROM BuyersProducts bp
  JOIN ProductsCompanies pc ON bp.product = pc.product
) temp
JOIN BuyersCompanies bc
  ON temp.buyer = bc.buyer AND temp.company = bc.company;
```
- 내부 쿼리는 product로 조인해 원본보다 많은 행을 만들지만, 외부 쿼리의 `AND temp.company = bc.company`로 **권한 있는 조합만** 남겨 원본을 복원.

## 예시 — 활동 4-4 (정규화 수준 결정)
- **왜 정규화하나** — 각 단계가 설계 품질을 높여 중복 감소·데이터 일관성·유지보수 절감.
- **단점은?** — 과도한 정규화는 **성능 문제**(트랜잭션·쿼리 시 접근해야 할 테이블 수 증가).
- **어디까지?** — 답은 다양하나, **최소 3NF**는 권장되며, 많은 이는 **5NF**까지 권장.

## 요약
- **BCNF**: 3NF + 모든 결정자가 후보 키. **4NF**: BCNF + 다치 종속 제거(무관한 열 분리). **5NF**: 4NF + 순환 종속 제거(분해 후 재조인해도 원본 동일).
- 해결은 언제나 **테이블 분해**. 단, 과도한 정규화는 조인 증가로 **성능 저하** 가능 → 실무는 대개 3NF~5NF 사이에서 균형.
