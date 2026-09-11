# Working with Different Data Types

## 개요
- Python에서 가장 흔히 쓰는 타입들 — 문자열(string), 정수(int), 실수(float), 불리언(bool), None — 을 실제 코드로 하나씩 다룬다.
- 타입을 확인하는 내장 함수 `type()`과, 타입이 안 맞을 때 발생하는 에러(ZeroDivisionError, TypeError)도 함께 다룸.

## 내용

### 문자열(String)
- 작은따옴표(`'...'`), 큰따옴표(`"..."`), 삼중따옴표(`'''...'''`/`"""..."""`) 모두 문자열을 만들 수 있다.
- **삼중따옴표는 이스케이프(escaping)를 피하기 위해** 쓴다 — 문자열 안에 작은따옴표와 큰따옴표가 둘 다 들어있을 때 유용.
  - 문자열 안에 작은따옴표가 있으면 큰따옴표로 감싸고, 큰따옴표가 있으면 작은따옴표로 감싸면 이스케이프 없이 해결되는 경우가 많다.
  - 그렇지 않으면 Python이 문자열이 깨졌다고 판단해 syntax error를 낼 수 있다.
- 문자열은 `+`로 이어붙여(concatenate) 새 문자열을 만들 수 있다: `result = name + " " + last_name`처럼.
- **f-string**: `f"..."` 형태로, 문자열 안에서 변수를 그대로 치환해 쓸 수 있다. 결과는 여전히 문자열.

### 타입 확인 — `type()`
- `type(값 또는 변수)`로 타입을 확인한다. 예: `type(15)` → `int`.

### 정수(Integer)
- 수학 연산 지원. 단, **0으로 나누면 `ZeroDivisionError`** 발생.
- **호환되지 않는 타입끼리 연산하면 `TypeError`** 발생 (예: 정수 + 문자열).
- 연산 결과에 따라 타입이 바뀔 수 있다 — `3 / 2`는 `1.5`이고 타입은 `float`(원래 정수였던 값이 나눗셈으로 float가 됨).

### 실수(Float)
- 소수점이 있으면 float. 예: `14.3`, 원주율(pi) 근사값처럼 소수점 여러 자리도 float.

### 불리언(Boolean)
- `True`/`False`로 표기(첫 글자 대문자).
- `bool()`로 값을 참/거짓으로 해석 가능: `bool(1)` → `True`, `bool(0)` → `False`. (1은 참, 0은 거짓으로 취급)

### None
- "값이 없음(no value)"을 나타내는 특수 타입. 반환값이 없는 함수/코드는 기본적으로 `None`을 반환한다.
- "비어있음(empty)"을 표현하는 여러 방법 중 하나이며, 실제로 값이 존재하지 않는 상태를 나타낼 때 흔히 마주치게 됨.

## 예시
```python
name = "Alfredo"
result = name + " " + "Deza"      # 문자열 이어붙이기
greeting = f"Hello {name}"         # f-string

print(type(15))                    # <class 'int'>
print(3 / 2)                       # 1.5 → float
print(14 / 0)                      # ZeroDivisionError
print(1 + "a")                     # TypeError

print(bool(1), bool(0))            # True False
```

## 요약
- Python 기본 타입: 문자열(str), 정수(int), 실수(float), 불리언(bool), None.
- 문자열은 작은/큰/삼중 따옴표로 만들며, 삼중따옴표는 이스케이프를 피할 때 유용. f-string으로 변수를 문자열에 임베드 가능.
- `type()`으로 타입 확인. 0으로 나누면 ZeroDivisionError, 호환 안 되는 타입끼리 연산하면 TypeError.
- 연산 결과에 따라 타입이 바뀔 수 있음(int 나눗셈 → float).
- None은 "값이 없음"을 나타내는 타입으로, 반환값이 없을 때 기본으로 등장.
