# Writing tests with PyTest

## 개요

- Pytest로 단위 테스트를 작성·실행하는 실습: test_ 접두어 규칙, assert 키워드, 실패 판독, 특정 함수만 실행

## 내용

### 준비 — 테스트 대상과 테스트 파일

- addition.py에 add(a, b)·sub(a, b) 함수 작성
- **test_addition.py**를 만들어 대상 파일과 pytest 모듈 임포트
- 테스트 함수 이름은 **test_ 접두어 + 대상 함수 이름** (test_add, test_sub) — 파일명·함수명 모두 test_ 접두어가 좋은 관행

### assert 키워드

- 테스트는 **assert**에 의존한다 — 조건을 검사해 **불리언**을 기대. True면 통과, False면 실패.
- 등호(==)뿐 아니라 <, >, is, in, not in 등 무엇이든 **불리언을 반환하기만 하면** 된다.
- 한 함수에 assert 여러 개 가능 — **모두 True여야 통과.**
- assert 없이 pass만 쓰면 에러와 무관하게 통과된다.

### 실행과 결과 판독

- 실행: `python -m pytest test_addition.py`
- 통과는 파일명 뒤의 **점(.)**, 실패는 **F**로 표시. 실패 시 E로 시작하는 줄이 실패 위치와 이유를 알려준다.
- **특정 함수만 실행**: `python -m pytest test_addition.py::test_add` (더블 콜론)

## 예시

```python
# addition.py
def add(a, b):
    return a + b
def sub(a, b):
    return a - b

# test_addition.py
import addition
import pytest

def test_add():
    assert addition.add(4, 5) == 9

def test_sub():
    assert addition.sub(4, 5) == -1
```

```bash
python -m pytest test_addition.py            # 전체 실행 (.. = 2개 통과)
python -m pytest test_addition.py::test_add  # 특정 테스트만
```

## 요약

- Pytest는 test_ 접두어 함수 안의 assert(불리언 조건)로 단위 테스트를 정의한다.
- 점/F 표시와 E 줄로 결과와 실패 원인을 읽는다.
- 파일명::함수명으로 특정 테스트만 실행할 수 있다.
