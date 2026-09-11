# ORDER BY clause

## 개요

- ORDER BY 절로 하나 또는 여러 컬럼 기준으로 데이터를 오름차순/내림차순 정렬하는 방법
- ASC/DESC 키워드의 동작과 데이터 타입에 따른 정렬 방식

## 내용

### ORDER BY의 목적

- SELECT 문에 추가할 수 있는 **선택적(optional) 절**로, 데이터를 **오름차순(ascending) 또는 내림차순(descending)**으로 정렬한다.
- 예: 학생 이름을 A→Z 알파벳순으로 정렬하거나 그 반대로.

### 기본 구문

```text
SELECT 컬럼1, 컬럼2, ...
FROM 테이블
ORDER BY 정렬컬럼 [ASC | DESC];
```

- **ASC** = 오름차순, **DESC** = 내림차순.
- **ASC를 생략해도 결과는 같다** — ORDER BY의 기본값이 오름차순이기 때문.
- 여러 컬럼 정렬: ORDER BY 뒤에 컬럼들을 쉼표로 나열하고 각각 ASC/DESC를 지정한다.
- SELECT 뒤에 `*`를 쓰면 모든 컬럼을 일일이 나열하지 않아도 된다.

### 데이터 타입과 정렬 방식

- **숫자 타입** 컬럼 → 수치 크기 순으로 정렬
- **문자/문자열 타입** 컬럼 → 알파벳 순으로 정렬

## 예시

대학의 student_table을 정렬:

```sql
-- 국적 기준 오름차순 (ASC 생략 가능)
SELECT ID, first_name, last_name, nationality
FROM student_table
ORDER BY nationality ASC;

-- 국적 기준 내림차순 (역알파벳순)
SELECT ID, first_name, last_name, nationality
FROM student_table
ORDER BY nationality DESC;

-- 다중 컬럼: 국적 오름차순 + 생년월일 내림차순(젊은 순)
SELECT ID, first_name, last_name, date_of_birth, nationality
FROM student_table
ORDER BY nationality ASC, date_of_birth DESC;
```

## 요약

- ORDER BY는 SELECT 결과를 지정 컬럼 기준으로 정렬하며 기본값은 오름차순(ASC)이다.
- 여러 컬럼을 쉼표로 나열해 컬럼별로 다른 정렬 방향을 줄 수 있다.
- 숫자 컬럼은 수치순, 문자열 컬럼은 알파벳순으로 정렬된다.
