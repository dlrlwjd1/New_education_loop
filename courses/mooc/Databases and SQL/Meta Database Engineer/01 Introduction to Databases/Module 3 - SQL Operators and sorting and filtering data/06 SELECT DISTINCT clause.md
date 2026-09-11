# SELECT DISTINCT clause

## 개요

- SELECT DISTINCT 문으로 중복 없는 유일 값만 조회하는 방법
- 단일 컬럼·다중 컬럼·NULL 값에 대한 DISTINCT의 동작

## 내용

### DISTINCT의 목적

- 이름 그대로 **서로 다른(distinct) 값만 — 중복 없이 —** 반환한다.
- 예: 전 세계 학생이 다니는 대학에서 "학생들이 속한 나라 목록"을 뽑으면 같은 나라 출신이 많아 중복이 생긴다.

### 단일 컬럼 DISTINCT

- `SELECT country FROM student_table;` → 7건, Australia·USA 중복 포함
- `SELECT DISTINCT country FROM student_table;` → 각 나라가 **한 번씩만** 나타난다.

### 다중 컬럼 DISTINCT

- `SELECT DISTINCT faculty, country FROM student_table;` → **유일한 (학부, 나라) 조합**을 반환.
- 예: 과학부-3개국, 공학부-3개국 → 6건.

### NULL 값의 처리

- DISTINCT는 **NULL을 하나의 유일 값으로 취급**한다.
- 예: 아직 학부가 배정되지 않은 신입생 Julia Smith(USA)의 faculty가 NULL이면, (NULL, USA)가 유일한 조합으로 결과에 포함된다.

## 예시

```sql
-- 중복 포함 (7건)
SELECT country FROM student_table;

-- 중복 제거
SELECT DISTINCT country FROM student_table;

-- 유일한 학부-나라 조합 (6건)
SELECT DISTINCT faculty, country FROM student_table;
-- faculty가 NULL인 레코드가 있으면 (NULL, 'USA')도 하나의 조합으로 반환됨
```

## 요약

- SELECT DISTINCT는 결과에서 중복을 제거해 유일 값만 반환한다.
- 여러 컬럼에 쓰면 컬럼 값들의 유일한 조합을 반환한다.
- NULL도 하나의 유일 값으로 간주되어 결과에 포함된다.
