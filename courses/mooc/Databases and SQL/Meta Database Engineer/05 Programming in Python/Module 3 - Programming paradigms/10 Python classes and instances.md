# Python classes and instances

## 개요

- 클래스 정의(class, pass), 인스턴스화, 속성 참조(class.attr vs instance.attr), 메서드 정의와 self 키워드

## 내용

### 클래스의 기본

- 클래스는 데이터(속성 = 변수)와 기능(행동 = 메서드)을 결합한다.
- **Python의 모든 것은 객체이거나 object 클래스에서 파생**된다.
- `class MyClass:` + 본문 — 본문이 아직 없으면 **pass 키워드**로 자리표시(실행할 것이 없음을 알림).

### 인스턴스화 3단계

1. **클래스 정의**
2. **새 인스턴스 생성** — `myc = MyClass()`
3. **인스턴스 초기화**
- 객체 이름은 자유지만 클래스 객체·인스턴스 객체·메서드 객체를 구별하는 명명 습관이 혼란을 줄인다.

### 두 가지 연산 — 속성 참조와 인스턴스화

- **속성 참조**: 클래스 변수 a=5는 `MyClass.a`(클래스 참조) 또는 `myc.a`(인스턴스 참조)로 접근한다. 클래스 참조 없이 a만 쓰면 에러.

### 메서드와 self

- 클래스 안에 `def hello():`를 정의하고 `myc.hello()`로 호출하면 **에러** — 메서드의 매개변수에 **self 키워드**를 넣어야 한다: `def hello(self):`
- 반환값이 없는 함수를 print로 감싸면 출력 뒤에 **None**도 함께 인쇄된다.

## 예시

```python
class MyClass:
    a = 5
    def hello(self):
        print("Hello, world!")

myc = MyClass()          # 인스턴스화
print(MyClass.a)         # 5 (클래스 참조)
print(myc.a)             # 5 (인스턴스 참조)
myc.hello()              # Hello, world!
```

## 요약

- 클래스는 class 키워드로 정의하고(내용 없으면 pass), 괄호 호출로 인스턴스를 만든다.
- 속성은 클래스·인스턴스 어느 쪽으로도 참조할 수 있다.
- 메서드는 첫 매개변수로 self를 받아야 인스턴스에서 호출된다.
