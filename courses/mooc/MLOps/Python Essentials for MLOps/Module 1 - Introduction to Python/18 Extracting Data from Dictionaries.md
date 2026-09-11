# Extracting Data from Dictionaries

## 개요
- 존재하지 않는 키를 조회할 때 발생하는 `KeyError`를 다루는 두 가지 방법(`try/except`, `.get()`)과, 딕셔너리에서 `pop`으로 항목을 제거하는 법을 다룬다.

## 내용

### 존재하지 않는 키 조회 — KeyError
- 딕셔너리에 없는 키를 대괄호로 조회하면(`contact_information["height"]`) **`KeyError`**가 발생한다.

### 방법 1 — try/except로 처리
```python
try:
    height = contact_information["height"]
except KeyError:
    height = "six feet"
```
- 키가 없을 걸 알고 있고 대체값으로 무엇을 쓸지 정해뒀다면, `try/except`로 `KeyError`를 잡아 대체 로직을 실행할 수 있다.

### 방법 2 — `.get()` (더 선호되는 방식)
- `.get(key)`는 키가 없어도 에러 없이 **기본적으로 `None`을 반환**한다.
- `.get(key, 기본값)`처럼 **두 번째 인자로 대체값(fallback)**을 지정할 수 있다 — 키가 없으면 `None` 대신 그 값을 반환.
- 강사는 이 방식을 "정말 좋아한다(really like)"고 언급 — try/except보다 간결하기 때문.

### pop — 딕셔너리에서도 사용 가능
- 리스트·세트와 마찬가지로 딕셔너리도 `pop(key)`를 지원한다.
- `pop(key)`는 **해당 키-값을 딕셔너리에서 제거하면서 그 값을 반환**한다.
- 예: `age = contact_information.pop("age")` → age 값(31)을 반환하면서, `contact_information`에서 `"age"` 키 자체가 사라짐.

## 예시
```python
contact_information = {}

# 방법 1: try/except
try:
    height = contact_information["height"]
except KeyError:
    height = "six feet"

# 방법 2: .get()  — 기본값 None
print(contact_information.get("height"))            # None

# 방법 2: .get(key, 기본값)
print(contact_information.get("height", "5 ft 9 inches"))  # 5 ft 9 inches

# pop으로 제거 + 값 반환
contact_information["age"] = 31
removed_age = contact_information.pop("age")
print(removed_age)             # 31
print(contact_information)      # {} (age 키가 사라짐)
```

## 요약
- 없는 키를 대괄호로 조회하면 `KeyError` — `try/except`로 잡거나, 더 간결하게 **`.get(key, 기본값)`**을 쓰는 것을 선호.
- `.get(key)`만 쓰면 기본값은 `None`.
- 딕셔너리도 `pop(key)`로 키-값 쌍을 제거하면서 값을 반환받을 수 있다(리스트/세트의 pop과 유사한 패턴).
