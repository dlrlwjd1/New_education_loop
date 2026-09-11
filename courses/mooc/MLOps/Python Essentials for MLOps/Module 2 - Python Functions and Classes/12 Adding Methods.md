# Adding Methods

## 개요
- 클래스가 생성자 외에 여러 개의 메서드를 가질 수 있다는 것, 관심사 분리(separation of concerns)를 위해 로직을 별도 메서드로 뽑아내는 법, 메서드 안에서 **다른 메서드를 `self.메서드명()`으로 호출**하는 법, 그리고 메서드도 함수처럼 위치/키워드/가변 인자를 받을 수 있다는 점을 다룬다.

## 내용

### 여러 메서드를 가진 클래스
- 생성자(`__init__`)도 메서드의 일종이며, 클래스는 그 외에 원하는 만큼 메서드를 추가로 가질 수 있다.
- 예: `Budget` 클래스에 `expense(amount)` 메서드를 만들어 `self.budget -= amount` 처리 후 결과를 출력.

### 관심사 분리 — 메서드에서 메서드 호출하기
- 하나의 메서드가 여러 일을 하고 있다면(계산 + 출력), **출력 로직을 별도의 `report()` 메서드로 분리**할 수 있다.
- 메서드 안에서 같은 클래스의 다른 메서드를 호출할 때도 **`self.report()`처럼 `self`를 통해 호출**한다.

### 인스턴스 상태 확인
- 인스턴스가 만들어진 뒤에도 `인스턴스.속성`으로 언제든 현재 상태(예: 남은 예산)를 클래스 외부에서 확인할 수 있다 — 점(`.`) 뒤에 항상 접근 가능.

### 메서드의 인자 — 함수와 동일한 규칙
- 메서드도 함수처럼 **위치 인자, 키워드 인자(기본값 포함), 가변 인자(`*args`), 가변 키워드 인자(`**kwargs`)**를 모두 받을 수 있다.
- 예: `report(currency="$")`처럼 키워드 인자로 기본값을 주고, 호출 시 다른 통화 기호를 넘겨 동작을 바꿀 수 있다.
- **규칙은 함수와 동일**: 위치 인자를 먼저, 키워드 인자를 나중에 전달해야 한다.

## 예시
```python
class Budget:
    def __init__(self, budget=100):
        self.budget = budget

    def expense(self, amount):
        self.budget -= amount
        self.report()

    def report(self, currency="$"):
        print(f"Budget left = {currency}{self.budget}")

b = Budget()
b.expense(23)     # Budget left = $77
b.expense(45)     # Budget left = $32

print(b.budget)    # 32 (클래스 외부에서 상태 확인)

b.report(currency="₩")   # Budget left = ₩32 (키워드 인자로 동작 변경)
```

## 요약
- 클래스는 생성자 외에도 여러 메서드를 가질 수 있으며, 관심사 분리를 위해 로직을 별도 메서드로 나누고 `self.메서드명()`으로 서로 호출할 수 있다.
- 메서드의 인자 규칙은 일반 함수와 동일 — 위치 인자, 키워드 인자(기본값), 가변/가변 키워드 인자 모두 사용 가능.
