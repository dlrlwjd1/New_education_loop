# Taking Action: Calling Functions

## 개요
- **함수(function)** 는 데이터에 동작을 수행 — 입력을 받아 처리하고 출력을 낸다(작은 프로그램).
- 함수 입력은 **인수(arguments)** 라 부르며, `max·min·sum·len` 등 유용한 내장 함수를 사용한다.

## 내용

### 함수의 구조
- 입력→처리→출력: `print`(값 표시), `sum`(리스트 합), `append`(리스트+항목 → 더 긴 리스트).
- 형식: `함수명(인수)`. 인수를 콤마로 여러 개 전달 가능.
- **`.append` 는 다름**: `리스트.append(항목)` — 리스트가 괄호 밖에 있고 **점(.)** 이 리스트도 입력으로 포함시킴(리스트 등 컬렉션에서 흔한 형식).

### 유용한 함수 — 도서관 지출 예
- **max(expenses)** → 최댓값(801,000). 리스트가 수백만 개여도 효율적(100만 개 ≈ 0.5초).
- **min(years)** → 최솟값(가장 이른 연도 1996).
- **평균**: `total = sum(expenses)` → `average = total / len(expenses)`. **len** = 리스트 항목 수(28).
- 헬퍼 `create_line_chart(years, numbers)` — 두 리스트로 라인 차트(시각화는 모듈 3에서).

## 예시

### 함수 활용
```python
print("Max:", max(expenses))     # 최댓값
print("Earliest:", min(years))   # 최솟값
total = sum(expenses)
average = total / len(expenses)  # 평균 = 합 / 개수
print("Average:", average)
```

## 요약
- **함수**는 입력(**인수**)을 받아 처리·출력하며, `max·min·sum·len` 등으로 데이터를 효율 처리한다.
- `.append` 처럼 **점(.)** 이 붙는 함수는 데이터(리스트)를 입력으로 포함한다.
- 타입·변수·리스트·함수로 데이터 애널리스트의 핵심 도구를 갖췄다. 다음은 컴퓨터 내부 동작(state)이다.
