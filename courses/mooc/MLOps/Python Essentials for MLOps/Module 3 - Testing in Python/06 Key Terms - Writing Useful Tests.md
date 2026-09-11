# Key Terms — Writing Useful Tests

## 개요
- "Writing Useful Tests" 레슨의 용어 정리(reading). plain assert, 테스트 클래스의 setup/teardown, `@pytest.mark.parametrize`를 미리 소개한다.

## 내용

| 용어 | 정의 |
|---|---|
| Plain Asserts | 값과 결과를 검증하는 데 쓰는 기본적인 Python assertion 문 |
| Test Classes | 여러 개의 관련 테스트 메서드와 setup/teardown 로직을 담은 클래스 |
| Parametrize | 하나의 테스트를 서로 다른 인자로 여러 번 실행하게 해주는 pytest 데코레이터 |
| Setup Method | 테스트 클래스의 각 테스트 메서드 실행 전에 실행되는 코드 |
| Teardown Method | 테스트 클래스의 각 테스트 메서드 실행 후에 실행되는 코드 |

## 예시
```python
# Plain assert로 값 확인
def test_floats():
    result = 1.2 + 1.3
    assert result == 2.5

# setup/teardown이 있는 테스트 클래스
class TestDivide:
    def setup(self):
        self.calculator = Calculator()

    def teardown(self):
        del self.calculator

    def test_divide_two_numbers(self):
        assert self.calculator.divide(10, 5) == 2

# 파라미터화된 테스트 함수
@pytest.mark.parametrize("num", [1, 5, 10])
def test_squared(num):
    assert num * num == square(num)
```

## 요약
- plain assert로 값을 검증하고, 테스트 클래스의 setup/teardown으로 반복되는 준비/정리 작업을 한 번만 작성하며, `@pytest.mark.parametrize`로 같은 테스트를 여러 입력값에 대해 반복 실행한다.
