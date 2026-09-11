# What are exceptions

## 개요

- 에러의 두 유형 — 문법 에러(syntax error)와 예외(exception) — 의 차이와 각각의 발생 방식

## 내용

### 문법 에러 (Syntax Errors)

- **개발자의 실수(오타·철자 오류)** 가 원인. 대부분의 IDE(VS Code 등)가 경고와 수정 힌트를 주므로 영향은 비교적 작다.
- 새 개발자의 흔한 실수: **조건·문장 끝의 콜론 누락** — 실행하면 invalid syntax 에러, 출력에 파일명·줄 번호와 함께 **캐럿(^)** 이 에러 지점을 가리킨다.
- **들여쓰기 문제도 문법 에러** — IndentationError.
- Python에 익숙해질수록 이런 에러는 줄어든다.

### 예외 (Exceptions)

- **코드 실행 중에** 발생하는 알려진 에러로, 훈련되지 않은 눈에는 쉽게 지나칠 수 있다.
- **개발자가 반드시 처리(handle)해야** 애플리케이션이 죽지 않는다.
- 예: 문법적으로 완벽한 코드라도 5를 0으로 나누면 수학적으로 성립하지 않는다 → 실행 시 **ZeroDivisionError** 예외 발생.
- Python은 기본적으로 다양한 예외 에러를 내장하고 있어 잠재적 문제를 잡아낼 수 있다.

## 예시

```python
# 문법 에러 — 콜론 누락
if x > 5      # SyntaxError: invalid syntax (^가 위치 표시)
    print(x)

# 예외 — 실행 중 발생
print(5 / 0)  # ZeroDivisionError: division by zero
```

## 요약

- 문법 에러는 코드 작성 단계의 실수(콜론·들여쓰기 등)로 IDE가 잡아준다.
- 예외는 실행 중 발생하는 알려진 에러(ZeroDivisionError 등)로, 앱이 죽지 않도록 개발자가 처리해야 한다.
