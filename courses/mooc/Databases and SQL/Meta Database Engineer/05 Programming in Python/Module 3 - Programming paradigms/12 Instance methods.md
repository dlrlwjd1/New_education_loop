# Instance methods

## 개요

- 인스턴스 변수·메서드로 **특정 인스턴스의 상태만** 바꾸는 방법 (급여 지급 시스템 예제)

## 내용

### 문제 설정

- 매니저들이 직원 급여 지급 상태를 서로 전화로 갱신하는 번거로운 시스템 → 인스턴스로 자동화한다.

### 클래스 구성 (PaySlips)

- __init__에서 name, payment(지급 상태), amount 세 변수를 `self.변수 = 변수`로 초기화.
- **pay() 메서드** — 상태 변경: `self.payment = "yes"`
- **status() 메서드** — 상태 표시: payment가 yes면 "이름 is paid 금액", 아니면 "이름 is not paid yet" 반환 (금액은 str 변환).

### 핵심 — 인스턴스별 독립 상태

- Nathan과 Roger 두 인스턴스는 **각자의 상태**를 가진다.
- `Nathan.pay()`로 Nathan의 상태를 바꿔도 **Roger는 영향받지 않는다** — 클래스 내부 메서드는 바뀌지 않고, **각 인스턴스에 별도의 청사진을 제공해 그 인스턴스만 갱신**되기 때문.
- 이 코드가 온라인 지급 시스템의 기반이 되면, 매니저가 직원별 "지급" 버튼을 누르는 것만으로 해당 직원의 상태가 갱신된다.

## 예시

```python
class PaySlips:
    def __init__(self, name, payment, amount):
        self.name = name
        self.payment = payment
        self.amount = amount

    def pay(self):
        self.payment = "yes"

    def status(self):
        if self.payment == "yes":
            return self.name + " is paid " + str(self.amount)
        else:
            return self.name + " is not paid yet"

nathan = PaySlips("Nathan", "no", 1000)
roger = PaySlips("Roger", "no", 3000)

print(nathan.status(), "\n", roger.status())
nathan.pay()                       # Nathan만 지급 처리
print("After payment")
print(nathan.status(), "\n", roger.status())
# Nathan is paid 1000 / Roger is not paid yet
```

## 요약

- 인스턴스 메서드는 self를 통해 그 인스턴스의 변수(상태)만 변경한다.
- 한 인스턴스의 상태 변경은 다른 인스턴스에 영향을 주지 않는다 — 인스턴스별 독립 상태가 OOP 자동화의 기반이다.
