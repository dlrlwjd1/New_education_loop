# kwargs

## 개요

- *args(임의 개수의 비키워드 인자)와 **kwargs(임의 개수의 키워드 인자)로 유연한 함수를 만드는 방법

## 내용

### 왜 필요한가

- `def sum_of(a, b)`에 인자 3개를 넘기면 **"takes 2 positional arguments but 3 were given"** 에러 — 매개변수 수가 고정되기 때문.

### *args — 비키워드 가변 인자

- 매개변수에 **별표(*)** 를 붙이면(관례상 이름은 args) **n개의 인자**를 받을 수 있다.
- 여러 인자를 순회하며 처리한다 (합계 계산 등).

### **kwargs — 키워드 가변 인자

- **별표 두 개(**)** 로 정의 — 임의 개수의 **키워드 인자**(이름=값)를 받는다.
- 딕셔너리처럼 다루므로 순회 시 **items()** 로 키·값을 함께 얻는다. 합산 등 계산에는 **값(value)만** 쓴다 — 키는 문자열이라 더해도 의미가 없다.

## 예시

```python
# *args: 몇 개든 합산
def sum_of(*args):
    sum = 0
    for x in args:
        sum += x
    return sum

print(sum_of(4, 5, 6))          # 15
print(sum_of(4, 5, 6, 7, 8))    # 30

# **kwargs: 레스토랑 계산서 (이름=가격)
def total_bill(**kwargs):
    sum = 0
    for key, value in kwargs.items():
        sum += value
    return round(sum, 2)         # round로 소수 2자리

print(total_bill(coffee=2.99, cake=4.55, juice=2.99))  # 10.53
```

## 요약

- *args는 개수 제한 없는 비키워드 인자, **kwargs는 개수 제한 없는 키워드 인자를 받는다.
- kwargs는 items()로 순회하고 계산에는 값만 사용한다.
- 인자 수를 예측할 수 없는 함수를 만들 때 필수적인 도구다.
