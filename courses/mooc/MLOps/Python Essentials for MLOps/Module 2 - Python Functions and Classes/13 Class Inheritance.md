# Class Inheritance

## 개요
- 상속(inheritance)의 동작 원리 — 부모 클래스(parent/base class)를 자식 클래스(child class)가 물려받아, 부모가 정의한 메서드를 자식이 정의하지 않아도 쓸 수 있게 되는 구조를 다룬다. 강사 본인도 처음 배울 때 가장 이해하기 어려웠던 개념이라고 언급하며, `dir()`로 인스턴스가 실제로 어떤 속성/메서드를 갖고 있는지 확인하는 법과, Python 표준 `unittest.TestCase` 상속이라는 실전 사례도 함께 다룬다.

## 내용

### 부모 클래스 단독으로는 미완성일 수 있다
- 부모 클래스(`Pet`)에 `eat()` 메서드를 정의했지만, 이 메서드는 `self.food`, `self.appetite`라는 **아직 정의되지 않은 속성에 의존**한다.
- `Pet` 클래스를 그대로 인스턴스화해서 `eat()`을 호출하면 `AttributeError: 'Pet' object has no attribute 'food'` — 부모 클래스 자체는 불완전하며, 자식 클래스가 필요한 속성을 채워줘야 완전해진다.

### 상속 문법과 동작
- `class Parakeet(Pet):`처럼 괄호 안에 부모 클래스를 넣으면 상속이 이루어진다.
- 자식 클래스(`Parakeet`, `Dog`)는 각자의 생성자에서 `food`, `appetite` 같은 속성을 정의하고, **부모 클래스에서 정의한 `eat()` 메서드를 자신이 직접 정의하지 않아도 그대로 사용**할 수 있다.
- 이것이 상속의 핵심 — 자식 클래스 코드에는 `eat` 메서드가 안 보이는데도 동작하는 이유는 **부모 클래스로부터 물려받았기 때문**.

### `dir()`로 인스턴스 들여다보기
- 내장 함수 `dir(인스턴스)`로 그 인스턴스가 가진 속성/메서드 목록을 확인할 수 있다 (밑줄로 시작하지 않는 것들 위주로 살펴보면 유용).
- 예: `Parakeet` 인스턴스에 `dir()`을 실행하면 `appetite`, `food`, `eat`이 모두 나타남 — `eat`은 부모 클래스에서 상속된 것.

### 실전 사례 — `unittest.TestCase`
- Python 표준 라이브러리의 테스트 프레임워크(`unittest`)를 쓸 때, 테스트 클래스는 관례적으로 `TestCase`를 상속받아 만든다.
- 직접 메서드를 하나도 추가하지 않아도(`pass`만 써도), `dir()`로 확인해보면 `assert`류 메서드 등 부모 클래스(`TestCase`)로부터 물려받은 수많은 메서드가 함께 딸려온다.
- 강사는 이런 "안 보이는 곳에서 많은 것이 딸려오는" 특성 때문에 **상속을 웬만하면 피하려 하지만, 기존 프로젝트에서 상속을 마주쳤을 때 동작 원리를 이해해두는 것이 중요**하다고 강조한다.

## 예시
```python
class Pet:
    def eat(self):
        self.food = self.food - self.appetite

class Parakeet(Pet):
    def __init__(self):
        self.food = 100
        self.appetite = 1

class Dog(Pet):
    def __init__(self):
        self.food = 400
        self.appetite = 7

perry = Parakeet()
rufus = Dog()
perry.eat()   # food: 99 (eat은 Pet에서 상속받은 메서드)
rufus.eat()   # food: 393

print(dir(perry))   # appetite, eat, food 등이 함께 나타남

import unittest
class MyTests(unittest.TestCase):
    pass

t = MyTests()
print(dir(t))   # assertEqual 등 TestCase의 수많은 메서드가 상속되어 나타남
```

## 요약
- 상속은 `class Child(Parent):` 형태로 이루어지며, 자식 클래스는 부모 클래스가 정의한 메서드를 직접 정의하지 않아도 그대로 사용할 수 있다.
- 부모 클래스는 자신이 의존하는 속성이 자식에서 정의될 것을 전제로 하기 때문에, 부모만 단독으로 인스턴스화하면 에러가 날 수 있다.
- `dir(인스턴스)`로 상속받은 속성/메서드를 포함한 전체 목록을 확인할 수 있다. 실전 예로 `unittest.TestCase` 상속이 있다.
- 상속은 "보이지 않는 곳에서 많은 것이 딸려오는" 특성 때문에 신중하게 사용해야 한다.
