# Key Terms — Testing

## 개요
- "Introduction to Testing" 레슨의 용어 정리(reading). 테스트/유닛 테스트/테스트 함수/테스트 클래스/assertion/fixture의 정의와 pytest 예제 코드를 미리 소개한다.

## 내용

| 용어 | 정의 |
|---|---|
| Testing (테스트) | 자동화된 스크립트로 코드 동작을 검증해 정확성을 확인하고 문제를 잡아내는 것 |
| Unit Test (유닛 테스트) | 함수나 클래스처럼 독립된(isolated) 코드 조각을 테스트하는 것 |
| Test Function (테스트 함수) | Python 함수로 감싼 독립된 테스트 |
| Test Class (테스트 클래스) | 관련된 테스트 메서드들을 모아둔 클래스 |
| Assertion (단언) | 값이 기대와 일치하는지 확인하는 테스트 코드 내의 불리언 체크 |
| Fixture (픽스처) | 테스트 프레임워크가 관리하는, 여러 테스트가 공유하는 데이터나 상태 |

## 예시
```python
# 테스트 함수에서 assertion 사용
def test_capitalize():
    assert "hello".capitalize() == "Hello"

# 관련된 테스트 메서드 2개를 가진 테스트 클래스
class TestCalculator:
    def test_add(self):
        calculator = Calculator()
        assert calculator.add(2, 2) == 4

    def test_multiply(self):
        calculator = Calculator()
        assert calculator.multiply(3, 5) == 15

# pytest fixture로 임시 데이터를 사용하는 테스트 함수
import pytest

@pytest.fixture
def input_value():
    return 10

def test_stuff(input_value):
    assert input_value == 10
```

## 요약
- 테스트는 함수나 클래스로 작성하며, assertion으로 기대값을 확인하고, fixture로 여러 테스트가 공유하는 데이터를 관리한다.
