# Basic data types

## 개요

- Python의 5대 데이터 타입(numeric, sequence, dictionary, Boolean, set)과 type() 함수로 타입 확인하기

## 내용

### 데이터 타입이란

- **데이터 조각에 붙어 컴퓨터가 그 값을 어떻게 해석할지 알려주는 속성.** 데이터가 원하는 형식으로 수집되고 값이 기대대로 되도록 보장한다.
- 변수 선언 시 Python이 값에 따라 타입을 **자동 지정**하고, `type()` 함수로 클래스 타입을 확인할 수 있다.

### 5대 타입 (리터럴)

1. **숫자(numeric)** — 세 종류:
   - **int** — 소수점 없는 정수 (양수·음수, 10, -10)
   - **float** — 소수점 포함 (10.5, 6.7) — 예: 통화 계산
   - **complex** — 실수부+허수부 (a = 10 + 10j)
2. **시퀀스(sequence)** — 같은/다른 타입을 순서 있게 담는 컨테이너, 인덱스로 접근:
   - **str** — 작은/큰따옴표로 감싼 문자들의 시퀀스
   - **list** — 대괄호에 담는 배열, 어떤 타입이든 가능, 인덱스 접근
   - **tuple** — 리스트와 유사하나 **불변(immutable)** — 값 수정 불가, 괄호로 표기
3. **딕셔너리(dict)** — **키-값 구조**로 저장, 키로 값에 직접 접근. 예: `ed = {'a': 22, 'b': 44.4}` → `ed['a']`는 22
4. **불리언(bool)** — True/False. 논리 연산자와 결합해 조건 판정.
5. **집합(set)** — **순서 없고 인덱스 없는, 중복 없는** 값의 모음

## 예시

```python
a = 10;    print(type(a))   # <class 'int'>
b = 2.3;   print(type(b))   # <class 'float'>
c = "hi";  print(type(c))   # <class 'str'>
d = [1, 2, 3, 4]; print(type(d))  # <class 'list'>
ed = {'a': 22, 'b': 44.4};  print(ed['a'])  # 22
```

## 요약

- Python의 기본 타입은 숫자(int/float/complex), 시퀀스(str/list/tuple), dict, bool, set이다.
- 타입은 값에 따라 자동 지정되며 type()으로 확인한다.
- 튜플은 불변, 집합은 무순서·무중복이라는 특성이 핵심 구분점이다.
