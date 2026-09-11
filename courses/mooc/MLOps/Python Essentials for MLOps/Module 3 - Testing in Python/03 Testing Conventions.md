# Testing Conventions

## 개요
- Python 표준 라이브러리 `unittest`의 한계를 짚고, **pytest**를 추천하는 이유(클래스 불필요, plain assert 사용 가능, 풍부한 리포팅)를 설명한 뒤, pytest가 테스트를 자동으로 찾아내는(discover) **파일/함수/클래스 이름 규칙(convention)**을 다룬다.

## 내용

### `unittest` (표준 라이브러리)의 한계
- Python에 기본 내장되어 있어 별도 설치가 필요 없지만, 이 코스에서는 **추천하지 않는다.**
- `unittest.TestCase`를 **상속**받아 클래스를 만들어야 하고, `self.assertEqual()` 같은 전용 헬퍼 메서드를 써야 한다.
- 실패 시 리포팅이 그다지 유용하지 않다 (예: `assertAlmostEqual`의 출력은 "7 places 이내에서 다름" 같은 식으로 읽기 불편함).

### pytest를 추천하는 이유
- **커맨드라인 도구 + 프레임워크 + 테스트 러너를 모두 갖춘** 올인원 도구. 시작하기 쉬우면서도 복잡한 상황에도 대응 가능.
- **클래스가 필요 없다** — 테스트 함수를 그냥 함수로 작성해도 된다(unittest는 반드시 클래스 필요).
- **plain assert 문을 그대로 써도 된다** — 일반적으로 Python에서는 `assert`를 프로덕션 코드에 쓰는 것이 권장되지 않는다(예: `python -O` 옵션으로 assert/디버그 문이 통째로 제거될 수 있음). 하지만 **pytest는 assert를 "강화(enhance)"해서 실패 시 아주 자세한 리포팅을 제공**하기 때문에, 테스트 코드에서 plain assert를 걱정 없이 쓸 수 있다.

### 파일/함수/클래스 이름 규칙 (강제 규칙은 아니지만 자동 탐색을 위해 필요)
- **디렉토리**: `tests`(복수형)를 쓴다. `test`(단수형)를 쓰면 Python 내장 `test` 모듈과 충돌할 수 있으니 피할 것.
- **파일**: `test_` 접두사가 붙어야 자동으로 수집(collect)된다.
- **테스트 함수**: `test_` 접두사 필요.
- **테스트 클래스**: 대문자로 시작하는 `Test` 접두사 필요 (예: `TestMyClass`).
- 이 규칙을 따르지 않으면 pytest가 해당 파일/함수/클래스를 자동으로 찾지 못한다 (강제로 지정해서 실행하는 것은 가능).

## 예시
```python
# unittest 방식 — 클래스 상속과 self.assert* 필요
import unittest

class MyTest(unittest.TestCase):
    def test_strings(self):
        self.assertEqual("some string", "some other string")  # 실패 시 리포팅이 상세하지 않음

# pytest 방식 — 클래스 불필요, plain assert 사용
def test_my_function():
    assert "string is long" == "strings_long"   # 실패 시 pytest가 훨씬 자세히 알려줌

class TestMyClass:      # 대문자 Test로 시작
    def test_something(self):
        assert 1 == 1
```
```
project/
└── tests/              # 반드시 복수형
    └── test_main.py    # test_ 접두사 필요
```

## 요약
- `unittest`는 클래스 상속과 전용 assert 메서드가 필요하고 리포팅이 부실해서 추천하지 않는다.
- **pytest**는 클래스 없이 함수로 테스트를 작성할 수 있고, plain assert를 강화된 리포팅과 함께 그대로 쓸 수 있다.
- pytest의 자동 탐색 규칙: `tests`(복수형) 디렉토리, `test_` 접두사 파일/함수, `Test`(대문자) 접두사 클래스.
