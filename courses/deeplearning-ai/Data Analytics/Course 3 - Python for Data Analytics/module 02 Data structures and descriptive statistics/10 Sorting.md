# Sorting

## 개요
- **sort_values** 메서드로 데이터프레임을 정렬한다. **명명 인수(named argument)** `by="열"` 로 정렬 기준 지정.
- 원본을 바꾸지 않고 **새 데이터프레임을 반환**하므로 변수에 저장한다.

## 내용

### 기본 정렬
- `df_sorted = df.sort_values(by="age")` — age 기준 정렬(기본 **오름차순**). 결과는 데이터프레임, 길이는 원본과 동일(행 제거 없이 순서만 변경).
- head로 확인 → 가장 어린 응답자(10·11세).

### 내림차순 — ascending=False
- `df.sort_values(by="age", ascending=False)` → 가장 나이 많은 응답자부터.
- 기본은 `ascending=True` → 인수를 추가해 재정의. 오름차순이면 ascending 생략 가능.

### 명명 인수 (named argument)
- `by`, `ascending` 은 명명 인수 — **순서 무관**하게 제공 가능(`ascending=False, by="age"` 도 동일). pandas에서 자주 등장.

## 예시

### 정렬
```python
df_sorted = df.sort_values(by="age")                 # 오름차순
df_sorted = df.sort_values(by="age", ascending=False) # 내림차순
```

## 요약
- **sort_values(by="열")** 로 정렬하며 기본은 오름차순, **ascending=False** 로 내림차순.
- 새 데이터프레임을 반환하므로 변수에 저장하고, **명명 인수**는 순서 무관하다.
- 다음 강의는 여러 열 기준 정렬이다.
