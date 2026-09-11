# Parent classes vs. child classes

## 개요

- 상속(inheritance) — 부모 클래스에서 자식 클래스를 파생해 속성·행동을 확장하는 방법
- object 기반 클래스, super()에 의한 부모 초기화, 자식 클래스별 확장 실습

## 내용

### 상속의 기초

- Python의 **모든 클래스는 내장 기반 클래스 object를 상속**한다 — `class SomeClass():`는 object를 인자로 가진 것과 같다.
- 용어: 원본 = **부모/슈퍼/기반 클래스**, 상속받는 쪽 = **자식/서브/파생 클래스**.
- 자식은 부모의 속성·행동을 **확장(extend)**하며 두 가지가 가능하다:
  1. 자식에 **새 속성 추가**
  2. 부모에 영향 없이 **상속받은 속성 수정**
- 단, **부모의 변경은 모든 자식에 영향을 준다.**
- 기본 예: 클래스 P(a=7)를 상속한 빈 클래스 C — C의 인스턴스로 c.a를 출력하면 7 (자기 몸이 비어도 부모 속성 보유).

### 실습 — Employees 부모 + 두 자식

- **Employees(부모)**: __init__에서 name, last 초기화
- **Supervisors(자식)**: `class Supervisors(Employees):` — init에서 **super()가 부모의 변수(name, last)에 접근해 초기화**하고, 자식 고유의 password 변수를 추가
- **Chefs(자식)**: 새 메서드 leave_request(self, days) 추가 — "may I take a leave for N days" 반환
- 인스턴스: Adrian(Supervisors, 비밀번호 포함), Emily·Juno(Chefs)
- 출력 확인: emily.leave_request(3), adrian.password, emily.name — **자식 고유의 변수·메서드와 부모에게 물려받은 변수가 모두 존재**한다.

## 예시

```python
class Employees:
    def __init__(self, name, last):
        self.name = name
        self.last = last

class Supervisors(Employees):
    def __init__(self, name, last, password):
        super().__init__(name, last)
        self.password = password

class Chefs(Employees):
    def leave_request(self, days):
        return "may I take a leave for " + str(days) + " days"

adrian = Supervisors("Adrian", "A", "apple")
emily = Chefs("Emily", "E")

print(emily.leave_request(3))
print(adrian.password)
print(emily.name)     # 부모에게 물려받은 속성
```

## 요약

- 모든 클래스는 object에서 출발하며, 자식은 부모를 인자로 받아 속성·행동을 물려받는다.
- super()로 부모의 초기화를 재사용하면서 자식 고유의 변수·메서드를 덧붙인다.
- 상속은 재사용성·조직성·중복 감소의 핵심 장치다.
