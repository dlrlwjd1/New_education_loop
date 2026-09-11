# Identify Columns (열 식별)

> 강좌: Database Design: A Modern Approach (Logical Operations, MOOC) · 모듈 3: Defining the Database Logical Model · 토픽 3A

## 개요
- 개념 모델을 **논리 모델(logical model)**로 변환하기 위해, 각 테이블에 포함할 **열(columns)**을 식별하고 각 열의 **데이터 타입·크기(range)**를 지정한다.

## 내용

### 스키마(schema)란
관계형 DB 설계의 결과물 = **스키마**(데이터 배치 계획). 답해야 할 질문:
- 어떤 테이블을 포함? 각 테이블에 어떤 열? 각 열에 어떤 데이터 입력 허용? 각 행의 고유 식별(키)? 다른 테이블과 관계를 맺을 열?

### 열 식별 가이드라인 — "결과에서 거꾸로(begin with the end in mind)"
완성된 DB가 지원해야 할 출력·결과를 보고 필요한 데이터 값을 결정:
- **출력에 표시될 데이터** — 쿼리·리포트·뷰·인보이스에 어떤 값이 나오나?
- **그룹화·정렬·필터** — 특정 열(제품 라인·지역·판매원)로 묶거나 정렬하나?
- **계산에 쓰이는 데이터** — 표시 전 계산이 있고, 직접 표시되지 않는 값에 의존하나?
- **뒤에서 쓰이는 데이터** — 표시되지 않지만 필요한 값(예: 마지막 주문 이후 경과일 계산용 날짜 열).

### 데이터 타입 (data types)
- 데이터 타입 지정은 지루해 보여도 **DB의 크기·성능에 큰 영향**. DB는 느린 디스크에 저장되므로 낭비 공간은 성능을 악화.
- 텍스트로만 다룰 값(예: 제품 코드 — 계산 안 함, 앞 3자 추출 등)은 **텍스트로 저장**해 매번 변환을 피함.
- **SQL-99 주요 데이터 타입** (DBMS마다 지원 차이):
  - **정확한 수(exact numbers)**: `SMALLINT`, `INTEGER`, `BIGINT`, `DECIMAL`, `NUMERIC` — 저장된 자릿수 그대로 조회.
  - **근사 수(approximate numbers)**: `REAL`, `DOUBLE PRECISION`, `FLOAT` — 이진 저장, 효율적이나 정확하지 않을 수 있음.
  - **이진(binary)**: `BINARY`, `BINARY VARYING`, `BINARY LARGE OBJECT`(BLOB — 이미지·오디오 등).
  - **불리언(boolean)**: `BOOLEAN` (SQL Server는 `BIT`, MySQL은 `TINYINT(1)`).
  - **문자열(character strings)**: `CHARACTER(CHAR)`, `CHARACTER VARYING(VARCHAR)`, `CLOB`, `NATIONAL CHARACTER`(유니코드/멀티바이트).
  - **날짜/시간(datetimes)**: `DATE`, `TIME`, `TIMESTAMP` (WITH/WITHOUT TIME ZONE).
  - **간격(intervals)**: `INTERVAL DAY`, `INTERVAL YEAR` (MySQL·SQL Server 미지원, PostgreSQL·Oracle 지원).
- 가능한 한 **표준 데이터 타입**을 써서 시스템 간 호환성 확보(독점 타입 지양).

### 크기·범위 (range)
- 데이터 타입 외에 저장 공간 **크기(range)**도 지정. 저장할 최대/최소 값을 미리 알려야 함. **저장 절약을 위해 최소로, 필요만큼 크게**.
- **정수(SQL Server 예)**: `TINYINT`(1B, 0~255), `SMALLINT`(2B, ±32,767), `INT`(4B, ±21억), `BIGINT`(8B, ±922경).
- **소수(DECIMAL/NUMBER)**: **정밀도(precision)** = 총 자릿수(123.45 → 5), **스케일(scale)** = 소수점 이하 자릿수(→ 2). 큰 정수를 못 담을 때 대안 가능.
- **부동소수점(FLOAT/REAL)**: DECIMAL보다 효율적·빠르나 base 2 저장이라 정확하지 않음 → 과학 계산엔 적합, **회계엔 부적합**.
- **화폐**: `FLOAT/REAL`이 아닌 **`DECIMAL`** 사용(일부 시스템은 전용 money 타입). 계산 시 예상치 못한 결과에 주의.
- **텍스트**: 길이가 일정하면 `CHAR`, 가변이면 `VARCHAR`(필요 이상으로 넓게 잡지 말 것). `TEXT`는 비효율적이고 같은 테이블의 다른 열 접근을 느리게 하므로 대용량은 별도 테이블로 분리 고려.
- **날짜/시간**: **이벤트**(순간, `TIMESTAMP`), **지속시간(duration)**(맥락 없는 기간, `INTERVAL`), **기간(period)**(지속시간을 가진 이벤트, 시작 TIMESTAMP + 종료 TIMESTAMP 또는 + INTERVAL). SQL에서 시작 시각은 포함, 종료 시각은 제외.
- **타입 변환(type conversion)**: 변환을 최소화하도록 타입 선택. 변환 효과 예 — Float→Integer(잘림), 확장형→Integer(반올림), Number→Float/Real(정밀도 손실), →Decimal(오버플로).

### 논리 모델 작성 가이드라인 (선택한 열 평가)
- **충분한 데이터** — 원하는 출력을 지원할 모든 열 확보(월별 매출엔 날짜, 제품 라인 그룹엔 식별자).
- **원자적(atomic)** — 각 열은 **가장 작은 의미 단위**. 이름·성을 한 열에 넣지 말 것.
- **중복 없음(not redundant)** — 다른 열로 계산 가능한 것은 저장하지 않음(시급×주간 근무시간 = 총급여는 열로 두지 않음).
- **적절한 데이터 타입** — 어색한 변환이 필요 없게.
- **정규화(normalize)** — 정규화 규칙으로 검토해 이상 제거·효율화.

## 예시 — 활동들 (Canal House Books)
- **활동 3-1(열 식별)**: 신규 재고 폼의 필드를 열로 추가. `title` 대신 **`product_name`**(다른 제품도 팔므로), `product_type`, `retail_price`. 책에만 맞는 `author`·`publisher`·`ISBN`·`year_published`는 → 비책 제품에 빈 값 허용, 또는 **별도 `BookDetails` 테이블**로 분리하고 `product_id`로 관계. 재주문 리포트용 `reorder_trigger`·`reorder_count`·`on_order` 열 추가.
- **활동 3-2(데이터 타입)**: `product_name`·`author`는 국제 문자셋 필요 → **NATIONAL CHARACTER**. `supplier_id`는 두 글자 코드라 **CHARACTER**. `product_id`는 숫자처럼 보여도 계산을 안 하고 앞자리 0이 있어 **CHARACTER**(숫자 타입이면 앞 0이 사라짐). `year_added`는 날짜 계산 가능성 때문에 정수보다 **DATETIME**이 나을 수 있음.
- **활동 3-3(크기 지정)**: ISBN(13자)·UPC 제품 ID(13자)는 표준 길이. 이름·주소는 모범 사례를 참고하고 실제 데이터로 검증, 미래 대비 여유 추가. DECIMAL 크기 `[precision,scale]`. (예: 가격의 최대값이 9999.99.)

## 요약
- 논리 모델 = 개념 모델에 **열·데이터 타입·크기**를 더한 것. 열은 **출력·계산·필터·이면 데이터**에서 역으로 도출.
- 데이터 타입은 성능·크기에 직결 — 정확한 수/근사 수/문자/날짜 등 **SQL-99 표준**을 우선. 화폐는 DECIMAL, 정확성이 필요하면 FLOAT 지양.
- 열 평가 기준: **충분함·원자성·비중복·적절한 타입·정규화**.
