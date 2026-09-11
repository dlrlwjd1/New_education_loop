# Abstract classes and methods

## 개요

- 추상 클래스(abstract class) — 인스턴스를 만들 수 없고 파생 클래스가 메서드를 구현하도록 강제하는 클래스
- ABC 모듈과 @abstractmethod 데코레이터, 기부금 수집 예제

## 내용

### 추상 클래스란

- **인스턴스를 만들 수 없는 클래스.** 예: Vehicle은 만들 수 없지만 Car·Tractor·Boat를 파생시킬 수 있다.
- 추상 클래스에 둔 메서드는 파생 클래스에 **반드시 구현되도록 보장**된다 — turn_on_engine을 찾는 호출은 어느 파생 클래스에서든 발견된다. 목적: **상호운용성, 일관성, 코드 중복 방지.**
- 핵심 이점: **기능을 잃지 않으면서 구현 상세를 숨긴다.**

### Python에서의 구현

- Python은 추상화를 직접 지원하지 않으므로 **ABC(Abstract Base Class) 모듈을 임포트**해야 한다.
- `class SomeAbstractClass(ABC):` — ABC를 상속.
- **@abstractmethod 데코레이터** — 같은 모듈에서 임포트. 데코레이터는 함수를 인자로 받아 새 함수를 내는 함수(@ 기호로 표기)로, 기존 함수에 기능을 더하는 도우미다.
- 추상 메서드는 그 클래스의 객체에서 호출할 수 없고 **상속받은 클래스의 객체에서만** 호출 가능.
- **모든 추상 메서드를 오버라이드해야** 자식 클래스를 인스턴스화할 수 있다.

## 예시

직원 기부금 수집:

```python
from abc import ABC, abstractmethod

class Employee(ABC):
    @abstractmethod
    def donate(self):
        pass                      # 구현 없음 — 자식이 구현해야 함

class Donation(Employee):
    def donate(self):             # 추상 메서드 오버라이드
        a = input("Please donate some amount: ")
        return a

john = Donation()
peter = Donation()

amounts = []
amounts.append(int(john.donate()))
amounts.append(int(peter.donate()))
print(amounts)                    # 두 직원의 기부 총액 확인용
```

## 요약

- 추상 클래스는 인스턴스화가 불가능하며 파생 클래스의 기능(메서드 구현)을 보장한다.
- Python에서는 ABC 상속 + @abstractmethod 데코레이터로 만든다.
- 추상 메서드를 모두 오버라이드해야 자식을 인스턴스화할 수 있고, 이로써 구현 상세를 숨기며 일관성을 강제한다.
