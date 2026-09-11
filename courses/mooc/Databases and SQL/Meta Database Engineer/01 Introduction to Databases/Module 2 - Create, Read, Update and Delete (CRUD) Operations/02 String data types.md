# String data types

## 개요

- 문자열(string) 데이터 타입의 용도와 CHAR vs VARCHAR의 차이
- TINYTEXT·TEXT·MEDIUMTEXT·LONGTEXT 등 크기별 문자열 타입

## 내용

### 문자열 타입을 쓰는 경우

- 데이터 무결성을 위해 테이블에는 유효한 값만 삽입되어야 한다.
- **여러 종류의 문자가 섞인 데이터**를 저장할 때 문자열 타입을 쓴다 — 알파벳, 숫자, 특수문자 모두 삽입 가능.
- 예: 대학 포털의 Student 테이블 — 학생 이름(알파벳만), 사용자명(영숫자), 비밀번호·이메일(혼합 문자).

### CHAR — 고정 길이

- **선언 후 바꿀 수 없는 고정 길이** 문자를 담는다. `CHAR(50)` = 각 필드에 정확히 50자 분량의 공간 허용.
- 유지할 문자 크기가 미리 정해져 있을 때 최선의 선택.
- 예: username을 `CHAR(50)`으로 정의하면 "Mark123"(7자)도 **50자 분량의 공간을 차지**한다.

### VARCHAR — 가변 길이

- CHAR와 비슷하지만 **길이가 가변**이다. 몇 자가 입력될지 확실하지 않을 때 사용.
- `VARCHAR(50)` = 최대 50자까지 어떤 입력이든 허용.
- 예: 학생 이름은 길이가 제각각이므로 `VARCHAR(50)`으로 정의 — "Mark Simpson"은 실제 글자 수만큼만 공간을 차지하되, 필요하면 50자까지 저장 가능.

### 대용량 텍스트 타입

| 타입 | 용량 | 용도 예 |
|---|---|---|
| TINYTEXT | 255자 미만 | 짧은 문단 |
| TEXT | 65,000자 미만 | 기사(article) |
| MEDIUMTEXT | 1,670만 자 | 책 본문 |
| LONGTEXT | 최대 4GB | 초대용량 텍스트 |

## 예시

```sql
CREATE TABLE student (
  student_name VARCHAR(50),  -- 이름은 길이가 제각각 → 가변
  username     CHAR(50),     -- 고정 길이 정책이면 CHAR
  password     VARCHAR(255),
  email        VARCHAR(255)
);
```

## 요약

- 문자열 타입은 알파벳·숫자·특수문자가 섞인 데이터를 담는다.
- CHAR는 고정 길이(선언한 만큼 공간 점유), VARCHAR는 가변 길이(실제 글자 수만큼 점유, 최대치 제한)다.
- 긴 텍스트는 TINYTEXT → TEXT → MEDIUMTEXT → LONGTEXT 순의 용량별 타입을 쓴다.
