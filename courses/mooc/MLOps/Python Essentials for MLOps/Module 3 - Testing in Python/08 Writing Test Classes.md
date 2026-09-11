# Writing Test Classes

## 개요
- 테스트를 클래스로 묶었을 때 쓸 수 있는 4가지 특수 메서드 — `setup`, `teardown`, `setup_class`, `teardown_class` — 의 실행 시점과 순서를 실습으로 보여준다.

## 내용

### 4가지 특수 메서드의 실행 시점
| 메서드 | 실행 시점 |
|---|---|
| `setup_class` | 클래스의 모든 테스트가 시작되기 **전에 딱 한 번** 실행. `self`가 아니라 **`cls`**를 사용 |
| `setup` | 클래스 안의 **각 테스트 메서드 실행 전**마다 실행 |
| `teardown` | 각 테스트 메서드 실행 **후**마다 실행 — **테스트가 통과하든 실패하든 예외가 나든 항상 실행** |
| `teardown_class` | 클래스의 모든 테스트가 끝난 **후 딱 한 번** 실행 |

### 실행 순서 확인
- 테스트 2개가 있는 클래스를 실행하면 다음 순서로 진행된다:
  `setup_class` → (`setup` → 테스트1 실행 → `teardown`) → (`setup` → 테스트2 실행 → `teardown`) → `teardown_class`
- 실패한 테스트라도 표준 출력(stdout)에 setup/teardown이 찍은 내용이 리포트에 함께 캡처되어 나타난다.

### 왜 유용한가
- 여러 테스트가 **공통으로 필요한 준비 작업(setup)**이 있을 때, 테스트마다 반복해서 쓰는 대신 **클래스 차원에서 한 번만 작성**하면 된다.
- **모든 테스트가 통과하면 pytest는 출력(리포트)을 생략**한다 — 통과했을 때 불필요한 텍스트 더미를 안 보여주는 것도 장점. 반대로 실패하면 왜 실패했는지 상세히 보여준다.

## 예시
```python
class TestStringToInt:
    @classmethod
    def setup_class(cls):
        print("setup_class: 모든 테스트 전 한 번")

    @classmethod
    def teardown_class(cls):
        print("teardown_class: 모든 테스트 후 한 번")

    def setup(self):
        print("setup: 각 테스트 전")

    def teardown(self):
        print("teardown: 각 테스트 후 (성공/실패 무관)")

    def test_round_down(self):
        assert string_to_int("1.99") == 1   # 의도적 버그 예시

    def test_round_down_less_or_half(self):
        assert string_to_int("1.2") == 1
```

## 요약
- 테스트 클래스는 `setup_class`/`teardown_class`(전체 테스트 전후 한 번)와 `setup`/`teardown`(각 테스트 전후마다)로 준비·정리 작업을 조직화할 수 있다.
- teardown은 테스트 성공/실패와 무관하게 항상 실행되며, 모든 테스트가 통과하면 pytest는 상세 출력을 생략한다.
