# Variable scope

## 개요

- 변수 스코프(scope)의 목적과 4가지 유형: Local, Enclosing, Global, Built-in (LEGB)

## 내용

### 스코프의 목적

- 코드 요소에 대한 통제를 높여 **의도치 않은 변경을 줄인다** — 변수가 코드의 다른 부분에 의해 바뀌지 않도록 보호한다.

### LEGB — 4가지 스코프 (범위 오름차순)

1. **Local(지역)** — 함수 안에서 선언한 변수. 그 함수 밖에서 접근하면 **NameError**.
2. **Enclosing(둘러싼)** — 중첩 함수에서 바깥 함수에 선언한 변수. **안쪽 함수는 접근 가능**하지만, 함수 밖에서는 접근 불가.
3. **Global(전역)** — 코드 어디서든 접근 가능. 단, **애플리케이션에서 전역 스코프 남용은 권장되지 않는다** — 출력 실수 가능성을 높인다.
4. **Built-in(내장)** — print·def 같은 **예약 키워드** 등 Python 언어 자체의 스코프. 가장 바깥이든 안쪽이든 어디서나 접근 가능.

### 접근 규칙

- **안쪽 함수일수록 바깥의 거의 모든 것에 접근**할 수 있다 (안쪽 → enclosing → global).
- 반대 방향은 안 된다 — 바깥에서 local·enclosing 변수에 접근하면 정의되지 않았다는 에러가 난다.

## 예시

```python
my_global = 10                 # Global

def fn1():
    local_v = 5                # fn1의 Local
    enclosed_v = 8             # fn2 입장에서 Enclosing
    print("access to global", my_global)   # OK

    def fn2():
        print("access to enclosed", enclosed_v)  # OK (enclosing 접근)
    fn2()

fn1()
print(local_v)      # NameError — 함수 밖에서 local 접근 불가
print(enclosed_v)   # NameError
```

## 요약

- 스코프는 LEGB(Local → Enclosing → Global → Built-in) 4단계로, 안쪽에서 바깥은 보이지만 바깥에서 안쪽은 보이지 않는다.
- 전역 변수 남용은 실수를 부르므로 지양한다.
- print·def 같은 내장 스코프는 어디서든 쓸 수 있다.
