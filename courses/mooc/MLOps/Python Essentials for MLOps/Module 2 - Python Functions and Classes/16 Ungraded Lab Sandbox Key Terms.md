# Ungraded Lab Sandbox Key Terms

## 개요
- 다음 샌드박스 실습(Python Classes Sandbox) 전에 나오는 보충 용어 정리(reading). UFC 파이터를 소재로 클래스/객체/속성/메서드/상속을 다시 한번 코드 예시로 복습한다.

## 내용

| 용어 | 정의 |
|---|---|
| Class | 템플릿(설계도)을 정의 |
| Object | 클래스의 인스턴스 |
| Attribute | 객체에 묶인 변수 |
| Method | 클래스 안에 정의된 함수 |
| Inheritance | 자식 클래스가 부모 클래스로부터 상속받음 |

## 예시
```python
class Competitor:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def print_stats(self):
        print(f"{self.name} is {self.age} years old and weighs {self.weight} pounds.")

class Fighter(Competitor):   # 상속
    pass

fighter = Fighter("Conor McGregor", 32, 170)
fighter.print_stats()

# 상속 + 자체 메서드 추가
class UFC:
    def weight_class(self, weight):
        return "Lightweight"

class Fighter2(UFC):
    def __init__(self, name):
        self.name = name

    def print_name(self):
        print(self.name)

fighter2 = Fighter2("Khabib")
print(fighter2.weight_class(155))   # 부모(UFC)의 메서드 사용
fighter2.print_name()                 # 자신의 메서드 사용
```

## 요약
- 이전 레슨의 클래스/상속 개념을 다른 소재(UFC 파이터)로 반복 확인하는 워밍업 성격의 자료.
