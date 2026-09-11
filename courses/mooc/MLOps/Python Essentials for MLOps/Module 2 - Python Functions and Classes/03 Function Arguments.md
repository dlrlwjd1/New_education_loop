# Function Arguments

## 개요
- 필수 인자(required argument), 내장 함수의 선택적 인자(optional argument), 그리고 **키워드 인자(keyword argument, 기본값 지정)**를 다루며, 인자와 키워드 인자를 함께 쓸 때의 **순서 규칙**을 짚는다.

## 내용

### 필수 인자
- `def squared(number): return number ** 2`처럼 괄호 안에 인자가 있으면, 호출할 때 그 값을 반드시 전달해야 한다.
- 인자를 전달하지 않으면 `TypeError: squared() missing 1 required positional argument: 'number'`.

### 선택적 인자 — 내장 함수 예시
- Python 내장 함수 `int()`는 별도 import 없이 전역에서 바로 쓸 수 있다.
- 인자 없이 호출하면 `0`을 반환하고, `int(10)`처럼 값을 넘기면 그 값을 정수로 변환한다 — **인자가 있어도 되고 없어도 되는 유연함**이 있다는 예시.

### 키워드 인자 (Keyword Argument) — 기본값 지정
- `def greetings(full_name="John Doe"): print(f"greetings {full_name}")`처럼 **인자에 기본값을 지정**하면, 호출 시 값을 생략해도 기본값이 쓰이고, 값을 넘기면 그 값으로 대체된다.
- 내부적으로 Python은 "값이 주어지면 그걸 쓰고, 아니면 기본값을 쓴다"는 방식으로 동작 — 이런 매핑(이름=기본값) 방식을 **키워드 인자**라고 부른다.

### 인자와 키워드 인자를 함께 쓸 때의 순서
- **일반 인자(위치 인자)를 먼저, 키워드 인자를 나중에** 전달해야 한다 — 순서가 바뀌면 `SyntaxError`가 발생한다.
- 키워드 인자를 넘길 때는 이름을 명시하지 않고 위치로 전달해도 되고(`formal_greetings("Jenkins", "Senior")`), 명시적으로 `title="Senior"`처럼 전달해도 동일하게 동작한다.

## 예시
```python
def squared(number):
    return number ** 2
print(squared(4))    # 16
squared()             # TypeError: missing 1 required positional argument: 'number'

print(int())           # 0 (선택적 인자, 기본 동작)
print(int(10))         # 10

def formal_greetings(name, title="Doctor"):
    print(f"greetings {title} {name}")

formal_greetings("Jenkins")               # greetings Doctor Jenkins
formal_greetings("Jenkins", "Senior")      # greetings Senior Jenkins
formal_greetings("Jenkins", title="Senior")  # greetings Senior Jenkins (동일)
```

## 요약
- 필수 인자는 반드시 값을 넘겨야 하며, 안 넘기면 TypeError.
- 키워드 인자(`name=기본값`)는 값을 생략하면 기본값을 쓰고, 넘기면 그 값으로 대체되는 선택적 인자.
- 위치 인자와 키워드 인자를 함께 쓸 때는 **위치 인자를 먼저, 키워드 인자를 나중에** 전달해야 한다.
