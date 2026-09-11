# Sorting Result Sets

## 학습 목표

- `SELECT` 문의 결과 집합(result set)을 정렬하는 방법 설명
- 오름차순과 내림차순 정렬 구분
- 어떤 컬럼을 기준으로 정렬할지 지정하는 방법 설명
- 컬럼 이름과 컬럼 순서 번호를 이용한 정렬 방식 이해

---

## SELECT 결과 집합

데이터베이스 관리 시스템(DBMS)의 목적은 데이터를 저장하는 것뿐 아니라, 저장된 데이터를 쉽게 조회할 수 있게 하는 것입니다.

가장 기본적인 `SELECT` 문은 다음과 같습니다.

```sql
SELECT * FROM table_name;
```

예를 들어 도서관 데이터베이스의 `Book` 테이블에서 모든 데이터를 조회하려면 다음처럼 작성합니다.

```sql
SELECT * FROM Book;
```

이 문장은 `Book` 테이블의 모든 행과 모든 열을 반환합니다.

---

## 특정 컬럼만 조회하기

모든 열이 아니라 책 제목만 조회하려면 `Title` 컬럼만 선택합니다.

```sql
SELECT Title FROM Book;
```

하지만 이렇게 조회한 결과는 원하는 순서로 정렬되어 있지 않을 수 있습니다.

책 제목을 알파벳순으로 보여주면 결과를 더 쉽게 읽을 수 있습니다. 이때 `ORDER BY` 절을 사용합니다.

---

## ORDER BY

`ORDER BY` 절은 쿼리 결과 집합을 지정한 컬럼 기준으로 정렬할 때 사용합니다.

### 기본 문법

```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY sort_column;
```

### 예시: 제목 기준 정렬

```sql
SELECT Title
FROM Book
ORDER BY Title;
```

위 쿼리는 `Title` 컬럼을 기준으로 결과를 정렬합니다.

기본 정렬 방식은 **오름차순(ascending order)** 입니다.

---

## 오름차순 정렬: ASC

오름차순은 작은 값에서 큰 값으로 정렬하는 방식입니다.

문자열의 경우 알파벳순으로 정렬됩니다.

```sql
SELECT Title
FROM Book
ORDER BY Title ASC;
```

`ASC`는 기본값이므로 생략해도 같은 결과입니다.

```sql
SELECT Title
FROM Book
ORDER BY Title;
```

---

## 내림차순 정렬: DESC

내림차순은 큰 값에서 작은 값으로 정렬하는 방식입니다.

문자열의 경우 알파벳 역순으로 정렬됩니다.

```sql
SELECT Title
FROM Book
ORDER BY Title DESC;
```

책 제목의 앞부분이 같은 경우에는, 문자가 달라지는 지점부터 비교하여 정렬됩니다.

예를 들어 앞의 세 단어가 같은 제목들이 있다면, 네 번째 단어나 이후 문자부터 비교해 순서가 결정됩니다.

---

## 숫자 컬럼 정렬

숫자 컬럼도 `ORDER BY`로 정렬할 수 있습니다.

예를 들어 책 제목과 페이지 수를 조회하고, 페이지 수 기준으로 오름차순 정렬할 수 있습니다.

```sql
SELECT Title, Pages
FROM Book
ORDER BY Pages;
```

이 쿼리는 페이지 수가 적은 책부터 많은 책 순서로 결과를 반환합니다.

내림차순으로 정렬하려면 `DESC`를 추가합니다.

```sql
SELECT Title, Pages
FROM Book
ORDER BY Pages DESC;
```

---

## 컬럼 순서 번호로 정렬하기

`ORDER BY`에는 컬럼 이름 대신 `SELECT` 절에 나열된 컬럼의 순서 번호를 사용할 수도 있습니다.

```sql
SELECT Title, Pages
FROM Book
ORDER BY 2;
```

여기서 `2`는 `SELECT` 절의 두 번째 컬럼인 `Pages`를 의미합니다.

따라서 위 쿼리는 다음 쿼리와 같은 의미입니다.

```sql
SELECT Title, Pages
FROM Book
ORDER BY Pages;
```

### 컬럼 순서 번호 사용 시 주의점

컬럼 순서 번호는 짧게 작성할 수 있지만, 쿼리를 읽는 사람이 어떤 컬럼을 기준으로 정렬하는지 바로 알기 어렵습니다.

또한 `SELECT` 절의 컬럼 순서가 바뀌면 정렬 기준도 함께 바뀔 수 있습니다.

따라서 학습이나 간단한 실습에서는 사용할 수 있지만, 실제 코드에서는 컬럼 이름을 명시하는 방식이 더 읽기 쉽습니다.

---

## 여러 컬럼으로 정렬하기

결과를 하나의 컬럼만으로 정렬하지 않고, 여러 컬럼을 기준으로 정렬할 수도 있습니다.

```sql
SELECT Title, Pages
FROM Book
ORDER BY Pages ASC, Title ASC;
```

이 쿼리는 먼저 `Pages` 기준으로 오름차순 정렬하고, 페이지 수가 같은 행끼리는 `Title` 기준으로 다시 오름차순 정렬합니다.

---

## 정렬 방식 정리

| 정렬 방식 | 키워드 | 설명 |
|-----------|--------|------|
| 오름차순 | `ASC` | 작은 값에서 큰 값, 알파벳순 |
| 내림차순 | `DESC` | 큰 값에서 작은 값, 알파벳 역순 |
| 기본값 | 생략 또는 `ASC` | `ORDER BY column`은 `ORDER BY column ASC`와 같음 |

---

## 핵심 요약

- `ORDER BY`는 `SELECT` 결과 집합을 정렬할 때 사용합니다.
- 기본 정렬 방식은 오름차순(`ASC`)입니다.
- 내림차순으로 정렬하려면 `DESC`를 사용합니다.
- 정렬 기준은 컬럼 이름으로 지정할 수 있습니다.
- `ORDER BY 2`처럼 `SELECT` 절의 컬럼 순서 번호로도 정렬할 수 있습니다.
- 여러 컬럼을 기준으로 정렬하면 첫 번째 기준이 같을 때 다음 기준으로 추가 정렬됩니다.
