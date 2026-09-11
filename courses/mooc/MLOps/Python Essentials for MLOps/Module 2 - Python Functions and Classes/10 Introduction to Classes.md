# Introduction to Classes

## 개요
- 클래스를 정의하는 기본 문법(`class` 키워드), 인스턴스화(instantiation)의 의미, 클래스에 자동으로 딸려오는 특수(dunder) 메서드들, 클래스 속성(class attribute)과 `self` 인자의 필요성, 그리고 **클래스 속성을 잘못 변경했을 때 모든 인스턴스에 영향을 주는 함정**을 다룬다.

## 내용

### 클래스 정의 문법과 인스턴스화
- `class 이름:` 형태로 클래스를 정의한다 (함수의 `def 이름():`과 유사한 패턴).
- 아무 내용이 없는 클래스는 `pass`로 채운다.
- **클래스 정의 = 설계도(blueprint)**, **`이름()`으로 호출 = 인스턴스화(instantiate)** — "만들어지고, 존재하게 되는" 시점.

### 특수(dunder) 메서드
- 인스턴스를 만들면 이름이 더블 언더스코어(`__`)로 시작하는 다양한 특수 메서드들이 자동으로 딸려온다 — 이를 **"던더(dunder)"**라고 부른다 (double underscore의 줄임말).
- 대표적인 것이 `__init__`("던더 init"). 평소에 직접 쓸 일은 적지만 존재를 알아두면 좋다.
- (참고) 예전 Python에서는 클래스 정의 시 `class Foo(object):`처럼 `object`를 명시적으로 상속받는 관례가 있었지만, **최신 Python에서는 더 이상 필요 없다** — 있어도 없어도 동작은 동일.

### 클래스 속성(Class Attribute)과 메서드의 `self`
- `is_animal = True`처럼 클래스 본문에 바로 쓰는 변수는 **클래스 속성**이다.
- 메서드를 정의할 때 **첫 번째 인자는 항상 `self`여야 한다** — 이를 빠뜨리면 `TypeError: bark() takes 0 positional arguments but 1 was given`.
  - Python은 메서드 호출 시 암묵적으로 인스턴스 자신을 첫 인자로 전달하는데, 관례상 이 인자 이름을 `self`라고 부른다.

### 클래스 속성 변경의 함정
- `Dog.is_animal = False`처럼 **인스턴스가 아니라 클래스 자체의 속성을 직접 변경**하면, **이미 만들어진 모든 인스턴스와 앞으로 만들어질 인스턴스 전부**에 영향을 준다.
- 클래스 속성임을 알고 의도적으로 쓰는 것은 괜찮지만, 실수로 바꾸면 예상치 못한 전역적 부작용이 생긴다는 점을 주의해야 한다.

## 예시
```python
class Dog:
    is_animal = True   # 클래스 속성

    def bark(self):     # self 필수
        print("woof")

rufus = Dog()
rufus.bark()             # woof
print(rufus.is_animal)   # True

Dog.is_animal = False    # 클래스 속성 자체를 변경 → 모든 인스턴스에 영향
print(rufus.is_animal)   # False (기존 인스턴스도 영향받음)

sparky = Dog()
print(sparky.is_animal)  # False (새 인스턴스도 영향받음)
```

## 요약
- `class 이름:`으로 정의하고 `이름()`으로 인스턴스화한다. 모든 인스턴스에는 `__init__` 등 특수(dunder) 메서드가 자동으로 딸려온다.
- 메서드의 첫 인자는 반드시 `self`여야 하며(관례상 이름이 self), 빠뜨리면 TypeError.
- 클래스 속성을 클래스 자체에서 변경하면 모든 인스턴스(기존+향후)에 영향을 주므로 주의해서 사용해야 한다.
