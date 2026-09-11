# Exception handling

## 개요

- try/except로 예외를 처리해 사용자 친화적인 에러 메시지를 제공하는 방법
- 예외 별칭(as e), 예외 클래스 확인, 특정 예외 지정과 except 체이닝

## 내용

### try / except의 동작

- try 안의 코드를 시도하다 **예외가 발생하면 except 아래 코드가 실행**된다.
- 사용자에게 알 수 없는(cryptic) 에러 대신 원하는 메시지를 보여줄 수 있다.

### 예외 정보에 접근

- `except Exception as e:` — **Exception 기반 클래스**는 Python의 모든 예외를 포괄한다. `as e`로 예외의 별칭을 만든다.
- `print(e)` — 예외 내용 출력 (예: division by zero)
- `print(e.__class__)` — 실제 예외의 **클래스/타입** 출력 (예: <class 'ZeroDivisionError'>)

### 특정 예외 지정과 체이닝

- 정확한 예외를 알면 그것을 직접 지정: `except ZeroDivisionError as e:` — 더 구체적인 안내 가능.
- **except를 여러 개 연결(chain)** — 첫 except에 안 걸리는 예외를 대비해 마지막에 포괄적 `except Exception`을 추가한다.

## 예시

```python
def divide_by(a, b):
    return a / b

try:
    ans = divide_by(40, 0)
except ZeroDivisionError as e:
    print(e, "we cannot divide by zero")
except Exception as e:
    print(e, "something went wrong")
# 출력: division by zero we cannot divide by zero
```

## 요약

- try/except로 예외 발생 시의 흐름을 제어하고 사용자 친화적 메시지를 만든다.
- as e로 예외 내용에, e.__class__로 예외 타입에 접근한다.
- 구체적 예외를 먼저, 포괄적 Exception을 나중에 두는 체이닝으로 미지의 예외까지 대비한다.
