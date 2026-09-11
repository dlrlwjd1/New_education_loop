# Test Classes vs. Test Functions

## 개요
- 테스트를 함수로 쓸지 클래스로 쓸지는 **정답이 없는 선택**이라는 것을 전제로, 강사 본인의 기본 선호(함수)와 클래스가 유리한 상황(공통 setup/teardown, 테스트 그룹화)을 실전 예시로 비교한다.

## 내용

### 기본적으로는 함수를 추천
- 강사는 **일반적으로 테스트 함수를 추천**한다 — 다루기 쉽고 더 직관적이기(straightforward) 때문.
- 하지만 여러 테스트를 묶고 싶거나, 특히 **공통 setup/teardown이 필요하면 클래스가 유리**하다.

### 클래스로 그룹화하는 이유 — 공통 setup 재사용
- 설정 코드를 매 테스트 함수마다 반복해서 쓰는 대신, **클래스 setup/teardown에 한 번만 작성**하면 클래스 내 모든 테스트에 적용된다.

### 클래스로 그룹화하는 이유 — 테스트 유형별 분리
- 같은 함수(`string_to_int`)를 테스트하더라도, **입력 타입별로 클래스를 나눠서** 조직화할 수 있다.
  - 예: `TestStringToIntFloats`(실수 입력을 테스트) vs. `TestStringToIntIntegers`(정수 입력을 테스트).
- 이건 **강제 규칙이 아니라 선택**이다 — 실패했을 때 테스트 이름만 보고도 "아, 실수 입력 케이스에서 실패했구나"를 바로 알 수 있다는 이점이 있다.

### 개인적 배경 — 왜 함수를 선호하는가
- 강사는 Python을 처음 배울 때 클래스가 위협적으로(intimidating) 느껴졌고, 당시 `unittest`밖에 몰라서 어쩔 수 없이 클래스를 써야 했다.
- pytest가 등장하면서 **함수만으로 테스트를 쓸 수 있는 자유**가 생겼고, 함수가 클래스보다 훨씬 더 다루기 쉽다는 것이 강력한 장점 — **함수만 써도 전혀 문제 없다.**

## 예시
```python
# 함수 방식 — 강사가 기본으로 추천
def test_floats():
    assert 1.99 + 1.2 == pytest.approx(2.0, abs=0.1)

# 클래스 방식 — 입력 유형별로 그룹화
class TestStringToIntFloats:
    def test_round_down(self):
        assert string_to_int("1.99") == 1

class TestStringToIntIntegers:
    def test_basic(self):
        assert string_to_int("5") == 5
```

## 요약
- 함수 vs. 클래스는 정답이 없는 선택이며, 기본적으로는 함수가 더 다루기 쉬워 추천된다.
- 공통 setup/teardown이 필요하거나 테스트를 유형별로 그룹화하고 싶을 때 클래스가 유리하다.
