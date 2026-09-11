# Function Structure and Values

## 개요
- 함수를 정의하는 기본 문법(`def`, 콜론, 들여쓰기)과, **"동작만 하는 함수"와 "값을 반환하는 함수"의 차이**를 다룬다. 특히 반환값이 없는 함수는 암묵적으로 `None`을 반환한다는 점이 핵심.

## 내용

### 함수 정의 문법
- `def` 키워드로 함수 정의를 시작 → 이름(공백 없이) → 괄호 `()` → 콜론 `:`.
- 다음 줄부터는 **최소 4칸 들여쓰기**로 함수 본문임을 표시 — 함수에 속하는 모든 줄은 들여쓰기가 필요하다.

### 동작(action)만 하는 함수 vs. 값을 반환하는 함수
- 강사가 Python을 처음 배울 때 헷갈렸던 지점: **어떤 함수는 print 같은 동작만 하고 값을 반환하지 않는다.**
- `result = simple()`처럼 print만 하는 함수의 반환값을 변수에 담아보면, 함수는 실행되어 출력은 되지만 `result`는 **`None`**이 된다.
- **Python은 `return`이 없는 함수에 대해 암묵적으로 `None`을 반환한다** — "아무것도 반환 안 함"이 아니라 "명시적으로 `None`을 반환"하는 것.
- `return`을 명시한 함수는 그 값을 변수에 캡처해서 활용할 수 있다.

## 예시
```python
def simple():
    print("this is a function")
    # return 없음

result = simple()
print(result)   # this is a function 이 출력된 후 None

def preview():
    return "this is a return value"

result = preview()
print(result)   # this is a return value
```

## 요약
- 함수는 `def 이름():` + 들여쓰기된 본문으로 정의한다.
- 함수가 `return`을 쓰지 않으면 Python은 자동으로 `None`을 반환한다 — 동작(print 등)과 반환값은 별개의 개념.
- `return`이 있는 함수만 결과값을 변수에 캡처해서 이후 로직에 활용할 수 있다.
