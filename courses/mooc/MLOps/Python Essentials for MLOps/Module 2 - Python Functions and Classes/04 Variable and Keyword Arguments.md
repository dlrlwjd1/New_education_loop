# Variable and Keyword Arguments

## 개요
- 인자의 개수를 미리 알 수 없을 때 쓰는 **가변 인자(`*args`)**와 **가변 키워드 인자(`**kwargs`)**를 다룬다. 이름은 자유롭게 바꿀 수 있지만 관례상 `args`/`kwargs`를 흔히 쓴다는 점도 짚는다.

## 내용

### 가변 인자 — `*args`
- `*args`(또는 원하는 다른 이름)를 쓰면 함수가 **0개 이상의 인자를 몇 개든 받을 수 있다.**
- 함수 내부에서 `*args`는 **튜플(tuple)**로 취급되어, 전달된 모든 인자를 담는다.
- 인자를 0개 전달해도 에러 없이 동작한다 — 그냥 아무것도 순회할 게 없어서 아무 출력도 없을 뿐.
- 이름은 `args`, `a`, `names` 등 원하는 대로 지어도 되지만(함수 내부에서 그 이름으로 순회하면 됨), **관례적으로 `*args`가 흔히 쓰인다.**

### 가변 키워드 인자 — `**kwargs`
- `**kwargs`(더블 애스터리스크)를 쓰면 **이름=값 형태의 키워드 인자를 0개 이상 자유롭게 받을 수 있다.**
- 함수 내부에서 `**kwargs`는 **딕셔너리(dict)**로 취급된다 — `.items()`로 순회하며 키와 값을 동시에 꺼낼 수 있다.
- 함수 정의에서 미리 어떤 키워드가 올지 선언하지 않아도, 호출 시 전달된 키워드들을 그대로 받아들인다.

## 예시
```python
# 가변 인자 — *args (튜플)
def family_members(*args):
    for name in args:
        print(name)
family_members("Lucy", "Matt", "Bob")   # Lucy / Matt / Bob 순서로 출력
family_members()                          # 아무것도 출력 안 됨 (인자 0개도 OK)

# 이름을 바꿔도 동일하게 동작
def family_members2(*names):
    for name in names:
        print(name)

# 가변 키워드 인자 — **kwargs (딕셔너리)
def stats(**kwargs):
    for key, value in kwargs.items():
        print(key, value)
stats(speed="slow", active=False, weight=210)
# speed slow
# active False
# weight 210
```

## 요약
- `*args`는 임의 개수의 위치 인자를 튜플로 받고, `**kwargs`는 임의 개수의 키워드 인자를 딕셔너리로 받는다.
- 두 경우 모두 인자가 몇 개 올지(0개 포함) 미리 알 수 없을 때 유용하며, 이름 자체는 자유롭게 바꿀 수 있지만 `args`/`kwargs`가 관례.
