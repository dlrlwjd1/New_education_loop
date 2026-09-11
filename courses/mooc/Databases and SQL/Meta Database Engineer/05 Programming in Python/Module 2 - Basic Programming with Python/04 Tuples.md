# Tuples

## 개요

- 튜플(tuple)의 선언과 인덱스 접근, count·index 메서드, 순회, 그리고 핵심 특성인 불변성(immutability)

## 내용

### 튜플 선언

- **괄호**로 선언하며 어떤 데이터 타입 혼합도 담을 수 있다: 정수, 문자열, 실수(4.5), 불리언(True) 등.
- 괄호 없이도 튜플로 선언되지만 **괄호 사용이 모범 사례**다.
- type() 함수로 확인하면 class tuple.

### 접근과 메서드

- 리스트처럼 **인덱스(0 기반)로 접근**: `my_tuple[1]`
- **count(값)** — 그 값이 튜플에 나타나는 횟수 반환
- **index(값)** — 그 값이 있는 인덱스 반환 (예: 4.5는 인덱스 2)
- for 루프 순회도 가능.

### 불변성 — 리스트와의 핵심 차이

- 튜플 값은 **불변(immutable)** — 변경 불가.
- 항목에 대입을 시도하면: **TypeError: 'tuple' object does not support item assignment**

## 예시

```python
my_tuple = (1, "strings", 4.5, True)

print(my_tuple[1])           # strings
print(type(my_tuple))        # <class 'tuple'>
print(my_tuple.count("strings"))  # 1
print(my_tuple.index(4.5))   # 2

for x in my_tuple:
    print(x)

my_tuple[0] = 5              # TypeError! 튜플은 불변
```

## 요약

- 튜플은 괄호로 선언하는 혼합 타입 시퀀스로, 인덱스 접근·count·index·순회를 지원한다.
- 리스트와 달리 불변이라 항목 대입이 불가능하다 — 바뀌면 안 되는 데이터에 적합하다.
