# Key Terms — Functions

## 개요
- "Working with Functions" 레슨의 용어 정리(reading). 함수/인자/가변 인자/키워드 인자와 더불어, 제너레이터(generator) 개념까지 미리 예제 코드로 소개한다.

## 내용

| 용어 | 정의 |
|---|---|
| Function (함수) | 특정 작업을 수행하는 재사용 가능한 코드 블록. `def` 키워드로 정의 |
| Arguments (인자) | 함수를 호출할 때 전달하는 값들. 동작을 커스터마이징할 수 있게 해줌 |
| Variable Arguments (가변 인자) | 임의 개수의 인자를 전달할 수 있게 해줌 |
| Keyword Arguments (키워드 인자) | 위치가 아니라 이름으로 전달하는 인자. 기본값을 가질 수 있음 |
| Generator (제너레이터) | 리스트/튜플 같은 iterable이지만 전체 시퀀스를 메모리에 한 번에 저장하지 않음. `yield`로 한 번에 하나씩 값을 생성 |
| Generator expression | 리스트 컴프리헨션과 비슷한 더 간결한 문법으로 인라인 지연(lazy) 생성. `[]` 대신 `()` 사용 |
| Infinite sequence (무한 시퀀스) | 제너레이터는 무한히 반복적으로 값을 생성해 데이터 스트림을 모델링할 수 있음 |

## 예시
```python
# 함수 예시
def double(x):
    """Doubles a number"""
    return x * 2
print(double(5))  # 10

# 인자가 있는 함수
def full_name(first, last):
    return first + " " + last
print(full_name("John", "Doe"))  # John Doe

# 가변 인자
def sum_all(*numbers):
    total = 0
    for n in numbers:
        total += n
    return total
print(sum_all(1, 2, 3))  # 6

# 키워드 인자
def greet(name, greeting="Hello"):
    print(greeting + ", " + name)
greet("John")                     # Hello, John
greet("Mary", greeting="Hi")       # Hi, Mary

# 제너레이터 — 카운터
def counter(start=0):
    n = start
    while True:
        yield n
        n += 1
for i in counter(5):
    if i > 10:
        break
    print(i)

# 제너레이터 — 무한 피보나치
def fib():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

# 제너레이터 표현식
nums = (x**2 for x in range(10))
print(list(nums))
```

## 요약
- 함수는 `def`로 정의하며, 위치 인자·가변 인자(`*args`)·키워드 인자로 유연하게 입력을 받는다.
- 제너레이터는 `yield`로 값을 하나씩 지연 생성하는 함수로, 메모리 효율적인 무한 시퀀스도 모델링할 수 있다.
- 제너레이터 표현식은 `()`를 쓴다는 점만 빼면 리스트 컴프리헨션과 문법이 유사하다.
