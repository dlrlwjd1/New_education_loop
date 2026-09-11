# Sorting by Multiple Columns

## 개요
- 여러 열로 정렬하려면 `sort_values` 의 `by` 에 **열 리스트**, `ascending` 에 **불리언 리스트**를 준다.
- 리스트 **순서가 중요** — 첫 열로 먼저 정렬하고, 그 안에서 다음 열로 정렬한다.

## 내용

### 여러 열 정렬
- 예: 나이 내림차순 → 그 안에서 학습 시간 내림차순.
- `columns = ["age", "hours..."]` (정렬 우선순위 순), `order = [False, False]` (각 열의 ascending).
- `df.sort_values(by=columns, ascending=order)` → 새 데이터프레임(길이 동일, 순서만 변경).
- 결과: 나이순 정렬 후 같은 나이 내에서 학습 시간순.

### 구조
- 두 리스트의 길이가 같아야 함(열 개수 = ascending 개수).
- 오른쪽부터: 데이터프레임을 columns 순으로 정렬, order로 각 오름/내림 지정 → 변수 저장.

## 예시

### 여러 열 정렬
```python
columns = ["age", "hours_learning"]
order = [False, False]          # 둘 다 내림차순
df_sorted = df.sort_values(by=columns, ascending=order)
```

## 요약
- 여러 열 정렬은 `by=[열 리스트]`, `ascending=[불리언 리스트]` 로 하며 **순서가 우선순위**다.
- 새 데이터프레임을 반환하므로 변수에 저장한다.
- 다음 강의는 관심 행만 고르는 **필터링(filtering)** 이다.
