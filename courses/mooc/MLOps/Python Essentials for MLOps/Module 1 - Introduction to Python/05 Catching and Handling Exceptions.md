# Catching and Handling Exceptions

## 개요
- 예외(exception)는 Python이 프로그램 내 에러를 알리는 방식이다. 예외를 직접 발생시키는 법(`raise`)과, `try`/`except`로 잡아서 처리하는 법, 여러 예외를 동시에 처리하는 법, 예외 객체를 변수에 담아 활용하는 법을 다룬다.

## 내용

### 예외란
- `14 / 0`처럼 문제가 되는 연산을 실행하면 Python은 설명이 담긴 에러를 발생시킨다 — 이 경우 `ZeroDivisionError`, 메시지는 "division by zero".
- 예외에는 보통 **이름(예: ZeroDivisionError)**과 **메시지**가 함께 따라온다.

### 예외 직접 발생시키기 — `raise`
- `raise RuntimeError("this is a problem")`처럼 내장 예외를 직접 발생시킬 수 있다.
- 함수나 코드에서 문제를 알리고 흐름을 중단시키고 싶을 때 `raise`를 사용.

### 예외 잡기 — `try`/`except`
```python
try:
    result = 14 / 0
except ZeroDivisionError:
    result = 14 / 2
    print(result)   # 7.0
```
- `try` 블록의 코드를 먼저 시도하고, 지정한 예외(`ZeroDivisionError`)가 발생하면 `except` 블록으로 넘어가 처리한다.
- **주의**: 잡을 예외는 실제로 어떻게 처리할지 알고 있는 것만 잡아야 한다 — 처음 배울 때는 예외를 그냥 무시하고 버리려는 경향이 있는데, 예외는 유용한 정보이므로 신중히 다뤄야 한다.

### 너무 광범위하게 잡지 말 것 — `except Exception`
- `except Exception:`처럼 아주 포괄적으로 잡으면 "무엇이든 상관없이" 모든 예외를 잡아버린다.
- 문제는 실제로 어떤 예외가 발생했는지(ZeroDivisionError인지 TypeError인지 등) 알 수 없게 된다는 것 — **어디서 무엇이 발생하는지 알아야 한다**.

### 여러 예외를 명시적으로 함께 잡기
```python
try:
    result = 14 / 2
    result = result + "some string"   # TypeError 발생
except (ZeroDivisionError, TypeError):
    print("handled")
```
- 괄호로 여러 예외 타입을 묶어 `except (ExceptionA, ExceptionB):` 형태로 지정하면, 둘 중 어느 것이 발생하든 같은 블록에서 처리한다. 필요한 만큼 예외 타입을 추가할 수 있다.

### 예외 객체를 변수에 담기
```python
try:
    result = 14 / 0
except ZeroDivisionError as error:
    print(f"got an error -> {error}")   # got an error -> division by zero
```
- `except ExceptionType as 변수명:` 형태로 예외 객체 자체를 변수에 저장해, 메시지 등을 출력하거나 활용할 수 있다.

## 예시
```python
try:
    result = 14 / 0
except ZeroDivisionError as error:
    print(f"got an error -> {error}")
# 출력: got an error -> division by zero
```

## 요약
- 예외는 Python이 에러를 알리는 표준 방식이며, 이름과 메시지를 가진다.
- `raise`로 직접 예외를 발생시키고, `try`/`except`로 잡아 처리한다.
- `except Exception`처럼 모든 예외를 뭉뚱그려 잡지 말고, 실제 발생 가능한 예외 타입을 구체적으로 지정할 것 — 필요하면 `except (A, B):`처럼 여러 개를 튜플로 묶어 처리.
- `except ExceptionType as 변수:`로 예외 객체를 변수에 담아 메시지를 확인/활용할 수 있다.
