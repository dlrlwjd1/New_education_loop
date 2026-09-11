# Using a Constructor

## 개요
- 생성자(`__init__`, "던더 init")로 인스턴스가 만들어질 때 속성(attribute)을 설정하는 법을 다룬다. 클래스 속성과 달리 **`self.속성`으로 설정한 인스턴스 속성은 각 인스턴스마다 독립적으로 보호된다**는 점이 핵심.

## 내용

### 생성자 정의
- `def __init__(self, ...):` 형태로 정의하며, 클래스가 인스턴스화될 때 자동으로 실행된다.
- 본문에서 `self.속성 = 값`으로 설정하면, 이는 **그 클래스(인스턴스)의 일부**가 된다 — 클래스 속성(`is_animal = True`)과 비슷해 보이지만 동작 방식이 다르다.

### 인스턴스 속성 vs 클래스 속성 — 보호(protection)
- `self.속성`으로 설정한 값은 **각 인스턴스마다 독립적**이다. 이전 레슨에서 본 클래스 속성처럼 "하나를 바꾸면 모든 인스턴스가 바뀌는" 문제가 없다.
- 비유: 인스턴스 속성은 "집 안에 있는 것처럼 보호된다(protected)" — 클래스라는 경계(boundary) 안에 안전하게 캡슐화되어 있다.

### 생성자에 인자 전달하기 — 상태(state) 설정
- 생성자도 일반 메서드처럼 `self` 외에 추가 인자를 받을 수 있다: 필수 인자(예: `name`)와 키워드 인자(예: `legs`, `barks`, 기본값 지정).
- 관례: **클래스 속성 이름을 생성자 인자 이름과 동일하게 짓는 것이 일관성 있고 좋다** (`self.name = name`처럼).

### 흔한 실수 — self를 빠뜨리는 것
- 메서드 안에서 생성자로 전달받은 값을 그대로 변수처럼 쓰면(`name` 대신 `self.name`을 안 쓰면) **`NameError: name 'name' is not defined`**가 발생한다.
- 생성자에서 전달받은 원래 인자(`name`)는 생성자 실행이 끝나면 사라지고, **`self.name`으로 저장해야만 클래스 전체(다른 메서드 포함)에서 접근 가능**하다.

### 속성에 접근하는 법
- **클래스 외부**에서는 인스턴스 이름으로 접근: `bunny.name`, `bunny.legs`, `bunny.barks`.
- **클래스 내부**(다른 메서드 안)에서는 반드시 `self.` 접두사를 붙여서 접근: `self.name`.

## 예시
```python
class Animal:
    def __init__(self, name, legs=4, barks=False):
        self.name = name
        self.legs = legs
        self.barks = barks

    def info(self):
        print(f"This is an animal named {self.name}, it has {self.legs} legs, "
              f"and {'barks' if self.barks else \"doesn't bark at all\"}.")

buster = Animal("Buster", legs=4, barks=False)
buster.info()          # This is an animal named Buster, it has 4 legs, and doesn't bark at all.
print(buster.name)      # 클래스 외부에서는 self 없이 인스턴스명으로 접근
```

## 요약
- 생성자(`__init__`)는 인스턴스가 만들어질 때 실행되며, `self.속성 = 값`으로 설정한 값은 각 인스턴스마다 독립적으로 보호된다(클래스 속성과 달리 서로 영향 없음).
- 생성자 인자를 클래스 전체에서 쓰려면 반드시 `self.이름`으로 저장해야 하며, 저장하지 않고 원래 인자명으로 참조하면 NameError.
- 클래스 외부에서는 `인스턴스.속성`, 클래스 내부에서는 `self.속성`으로 접근한다.
