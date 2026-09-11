# Instantiate a custom Object

## 개요

- 특수 메서드 __new__와 __init__(생성자)의 역할, self·cls 관례
- 커스텀 클래스를 만들어 여러 인스턴스가 같은 코드로 다른 결과를 내는 재사용성 실습

## 내용

### 두 특수 메서드

- **__new__(cls, ...)** — **새 빈 객체를 만들어 반환**하는 책임. cls는 키워드가 아니라 클래스를 첫 인자로 넘기는 **관례(convention)**.
- **__init__(self, ...)** — 다른 언어의 **생성자(constructor)**에 해당 — __new__가 만든 객체와 인자들로 **새 객체를 초기화**한다. self도 인스턴스 객체의 자기 참조를 위한 관례일 뿐 그 자체의 기능은 없다.

### 초기화와 상태

- `self.dish = dish`처럼 **self.속성 = 인자**로 값을 초기화한다. **초기화 메서드의 인자와 인스턴스 생성 시의 인자가 대응**해야 한다.
- 문자열 조립 시 숫자·리스트는 **str()로 변환**해야 연결할 수 있고, 백슬래시로 줄을 이어 쓸 수 있다.

### 재사용성 — 같은 클래스, 다른 인스턴스

- 같은 함수·변수(items)를 참조해도 **인스턴스마다 다른 내용**이 나온다 — 이것이 코드 재사용의 핵심이다.

## 예시

```python
class Recipe:
    def __init__(self, dish, items, time):
        self.dish = dish
        self.items = items
        self.time = time

    def contents(self):
        print("The " + self.dish + " has " + str(self.items) +
              " and takes " + str(self.time) + " min to prepare")

pizza = Recipe("Pizza", ["cheese", "bread", "tomato"], 45)
pasta = Recipe("Pasta", ["penne", "sauce"], 55)

print(pizza.items)   # ['cheese', 'bread', 'tomato']
print(pasta.items)   # ['penne', 'sauce'] — 같은 속성, 다른 상태
pizza.contents()     # The Pizza has ... and takes 45 min to prepare
```

## 요약

- __new__는 객체 생성, __init__는 초기화를 담당하며 cls·self는 관례적 자리표시자다.
- __init__에서 self.속성 = 인자로 상태를 저장하면 인스턴스마다 독립된 상태를 가진다.
- 하나의 클래스로 여러 인스턴스를 만들어 같은 메서드가 서로 다른 결과를 내는 것이 재사용성의 본질이다.
