# Key Terms — Classes

## 개요
- "Building Classes and Methods" 레슨의 용어 정리(reading). 클래스/인스턴스/메서드/생성자/상속의 정의와 기본 코드 예시를 미리 소개한다.

## 내용

| 용어 | 정의 |
|---|---|
| Class (클래스) | 객체(object)를 만들기 위한 설계도(blueprint). 속성(attribute)과 메서드(method)를 정의 |
| Instance (인스턴스) | 클래스로부터 생성된 객체. 클래스의 속성과 메서드에 접근 가능 |
| Method (메서드) | 클래스에 속하는 함수. 인스턴스나 클래스 이름을 통해 접근 |
| Constructor (생성자) | 인스턴스가 생성될 때 실행되는 특수 메서드. 속성을 초기화하는 데 사용 |
| Inheritance (상속) | 부모 클래스로부터 자식 클래스를 만드는 것. 자식은 부모의 속성과 메서드를 물려받음 |

## 예시
```python
class Vehicle:
    wheels = 4  # 클래스 속성(class attribute)

    def __init__(self, make, model):
        self.make = make   # 인스턴스 속성(instance attribute)
        self.model = model

    def description(self):  # 메서드
        return f"The {self.make} {self.model}"

car = Vehicle("BMW", "i3")   # 인스턴스 생성
print(car.wheels)              # 클래스 속성 접근
print(car.description())       # 인스턴스 메서드 호출

# 상속 예시
class Pet:
    def eat(self):
        print("Chomp")

class Dog(Pet):
    def bark(self):
        print("Bark!")

dog = Dog()
dog.eat()    # 상속받은 메서드
dog.bark()   # Dog 고유 메서드
```

## 요약
- 클래스 = 설계도, 인스턴스 = 그 설계도로 만든 실체, 메서드 = 클래스에 속한 함수.
- 생성자(`__init__`)로 인스턴스 생성 시 속성을 초기화하고, 상속으로 자식 클래스가 부모의 속성·메서드를 물려받는다.
