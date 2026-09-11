# Repeating Actions: range

## 개요
- **range 함수(range function)** 는 0부터 시작해 지정 값 **직전까지** 숫자 목록을 만든다.
- 인덱스로 반복하면 **여러 리스트를 동시에** 같은 위치로 접근할 수 있다.

## 내용

### range 함수
- `for i in range(10):` → i가 0~9(10 미포함). 이 숫자들이 길이 10 리스트의 인덱스와 정확히 일치.
- 기본 시작 0, 지정 값 **미포함**.

### 여러 리스트 동시 반복
- 문제: scores를 돌며 점수가 아닌 **이름**을 저장해야 함. `for score in scores:` 는 이름에 접근 못 함.
- 해결: **인덱스로 반복**. `for i in range(len(scores)):` → 0~67,572 모든 인덱스. `scores[i]`, `names[i]` 를 **같은 인덱스**로 함께 접근(10번째 점수 = 10번째 이름).
- 예: 실패 식당 목록 만들기 — `if scores[i] < 70: failed_restaurants.append(names[i])`.

### 두 반복 패턴 선택
- **단일 리스트**: `for score in scores:` (간단).
- **여러 리스트/유연성 필요**: `for i in range(len(scores)):` + `scores[i]`, `names[i]`.

## 예시

### 인덱스 기반 루프
```python
failed_restaurants = []
for i in range(len(scores)):     # 0 ~ len-1 인덱스
    if scores[i] < 70:
        failed_restaurants.append(names[i])  # 같은 인덱스로 이름 접근
print(failed_restaurants)
```

## 요약
- **range(n)** 은 0~n−1 숫자 목록을 만들며(n 미포함), `range(len(리스트))` 로 모든 인덱스를 순회한다.
- **인덱스 기반 루프**로 `scores[i]`·`names[i]` 처럼 여러 리스트를 같은 위치로 동시에 접근한다.
- 단일 리스트는 `for x in list`, 여러 리스트는 인덱스 루프를 쓴다. 다음(마지막) 강의는 실행 순서다.
