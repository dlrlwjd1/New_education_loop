# Parameterizing Tests

## 개요
- 같은 assertion을 여러 입력값에 대해 반복 검증해야 할 때, **for 루프를 쓰면 안 되는 이유**와 `@pytest.mark.parametrize`가 이를 어떻게 훨씬 낫게 해결하는지를 다룬다.

## 내용

### 문제 상황 — 같은 assertion, 다른 입력값
- `string_to_bool` 유틸리티: `"yes"`, `"y"`, `""`(빈 문자열)는 모두 `True`를 반환해야 한다.
- 이걸 검증하려면 **똑같은 assertion을 3번** 써야 하는 상황이 생긴다.

### 왜 for 루프를 쓰면 안 되는가
- `for value in ["yes", "y", ""]: assert ...`처럼 **테스트 안에서 for 루프로 여러 값을 돌리면 안 된다.**
- 이유: **첫 번째 실패에서 멈춰버리기 때문에**, 그 뒤에 있는 값들이 통과하는지 실패하는지 전혀 알 수 없다. 버그를 고쳤을 때도 나머지 케이스가 다 통과하는지 확신할 수 없다.
- 결과적으로 for 루프는 "모든 조합을 다 보여주지 않고 첫 실패에서 멈추는" 테스트를 만든다 — 피해야 할 패턴.

### 해결책 — `@pytest.mark.parametrize`
- `pytest`를 임포트하고, 데코레이터(decorator) 형태로 테스트 함수를 감싼다: `@pytest.mark.parametrize("value", ["y", "yes", ""])`.
- 첫 번째 인자는 **문자열로 된 인자 이름**("value"), 두 번째는 **그 인자에 주입할 값들의 리스트**.
- 이렇게 하면 pytest가 **각 값을 별도의 개별 테스트로 취급**한다 — 함수 하나가 3개의 테스트로 "수집(collect)"된다.

### 파라미터화된 테스트의 장점
- 값 하나를 일부러 틀리게 하면(예: `"N"`으로), **정확히 어떤 값에서 실패했는지 대괄호(`[]`)로 표시된다** — 예: `test_utils[N]`처럼, 실패한 파라미터 값이 테스트 이름에 그대로 드러난다.
- `-v`(verbose)를 추가하면 **모든 조합이 각각 어떻게 실행됐는지**까지 확인할 수 있다.
- 값을 추가/삭제하는 것도 리스트에 값을 더하거나 빼는 것만으로 간단히 확장된다 — 함수는 단 2개(참/거짓 케이스)만 작성해도 5개의 개별 테스트가 실행되는 결과를 얻을 수 있다.

## 예시
```python
import pytest
from utils import string_to_bool

# 잘못된 방법 — for 루프 (쓰지 말 것)
def test_is_true_bad():
    for value in ["yes", "y", ""]:
        assert string_to_bool(value) is True   # 첫 실패에서 멈춰버림

# 올바른 방법 — parametrize
@pytest.mark.parametrize("value", ["y", "yes", ""])
def test_is_true(value):
    assert string_to_bool(value) is True

@pytest.mark.parametrize("value", ["n", "no"])
def test_is_false(value):
    assert string_to_bool(value) is False
```
```bash
pytest test_utils.py       # collected 5 items — 함수 2개가 5개의 개별 테스트로 실행됨
pytest test_utils.py -v    # 각 파라미터 조합별 실행 결과를 상세히 확인
```

## 요약
- 같은 assertion을 여러 입력값에 반복 적용해야 할 때 **for 루프는 피하고 `@pytest.mark.parametrize`를 사용**해야 한다 — for 루프는 첫 실패에서 멈춰 나머지 케이스의 결과를 가려버리기 때문.
- `parametrize`는 각 입력값을 개별 테스트로 만들어, 정확히 어느 값에서 실패했는지 테스트 이름에 드러내고 전체 조합을 모두 검증한다.
