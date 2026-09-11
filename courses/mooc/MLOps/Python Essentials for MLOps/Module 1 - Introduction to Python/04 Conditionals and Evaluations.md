# Conditionals and Evaluations

## 개요
- `if`/`else`/`elif`로 조건에 따라 다른 코드를 실행하는 법과, 데이터 구조·정수 등이 "참(truthy)"인지 "거짓(falsy)"인지 자동 평가되는 원리, 비교 연산자와 `and`/`not`으로 조건을 조합하는 법을 다룬다.

## 내용

### if 기본
- `if 조건:` 형태로, 조건이 `True`로 평가되면 다음 블록이 실행된다. 조건이 `False`면 아무 일도 일어나지 않는다.
- Python 로직 처리의 기본 골격.

### Truthy / Falsy — 데이터 구조와 정수의 자동 평가
- **자료구조(리스트 등)는 비어있으면 False, 값이 있으면 True로 평가**된다. 이는 Python 내장 자료구조 전반에 거의 동일하게 적용됨.
  - `groceries = []` (비어있음) → `if groceries:`는 False → 실행 안 됨
  - `invites = ["a", "b"]` (값 있음) → `if invites:`는 True → 실행됨
- **정수도 마찬가지**: `0`은 False, 양의 정수는 True로 평가된다.
  - `properties = 0` → `if properties:`는 False
  - `parents = 2` → `if parents:`는 True

### 비교 연산자
- `==`, `>`, `<` 등 일반적인 비교 연산자를 조건에 사용 가능.
  - `if properties == 0:` → "no property" 출력 (properties가 실제로 0이므로 True)
  - `if parents > 1:` → "more than one parent" 출력 (parents=2이므로 True)

### else / elif
- `else`: 앞의 `if` 조건이 False일 때 실행되는 블록 ("otherwise"에 해당).
- `elif`: "else + 새로운 조건 평가"에 해당 — else처럼 대안 블록이지만 자체 조건을 하나 더 검사할 수 있다.
  - 예: properties가 없으면(else 대상) → elif로 parents가 있는지 추가로 확인해서 처리.

### not — 부정 조건
- `not` 키워드는 평가 결과를 반대로 뒤집는다.
  - `name = None` → `if not name:`는 `not False` = `True`가 되어 "didn't get a name" 같은 메시지를 출력할 수 있음.
  - `elif`와도 결합 가능: `if not name: ... elif not last_name: ...` — name이 None이면 첫 블록 실행, name은 있는데 last_name이 None이면 elif 블록 실행.

### and — 조건 결합
- 여러 조건을 `and`로 묶을 수 있다. 단, **조건을 너무 많이 묶으면 가독성이 떨어지므로 주의**.
  - `if has_kids and married:` — 둘 다 True일 때만 "married and has kids" 출력.
  - `if not likes_books and not is_logged_in:` — 두 조건 모두 False일 때(`not`으로 뒤집어 둘 다 True 취급되어) 실행.

## 예시
```python
groceries = []
invites = ["Alice", "Bob"]

if groceries:
    print("we have some groceries")
if invites:
    print("we have some invites")   # 출력됨 (groceries는 비어있어 출력 안 됨)

properties = 0
parents = 2
if properties == 0:
    print("no properties")
elif parents > 1:
    print("more than one parent")

name = None
last_name = "Deza"
if not name:
    print("no name")          # 출력됨
elif not last_name:
    print("no last name")

has_kids = True
married = True
if has_kids and married:
    print("this person is married and has kids")  # 출력됨
```

## 요약
- `if`/`else`/`elif`로 조건 분기를 만들며, 조건은 최종적으로 True/False로 평가되어야 다음 블록 실행 여부가 결정된다.
- 빈 자료구조와 정수 0은 False, 값이 있는 자료구조와 0이 아닌 정수는 True로 자동 평가된다(truthy/falsy).
- `not`으로 조건을 뒤집고, `and`로 여러 조건을 결합할 수 있지만 과도한 결합은 가독성을 해치므로 주의.
