# pytest Fixtures

## 개요
- 하드코딩된 `/tmp` 경로 같은 취약한 테스트 코드의 문제를 짚고, **내장 fixture인 `tmpdir`**을 이용해 안전하고 자동으로 정리(cleanup)되는 임시 경로를 테스트에 주입하는 법을 다룬다. fixture는 "인자로 요구하기만 하면 되는" 간단한 사용법이라는 점이 핵심.

## 내용

### 문제 상황 — 하드코딩된 `/tmp` 경로
- `string_to_bool` 값을 파일에 쓰는 함수를 테스트할 때, `setup`에서 `/tmp/value`가 있으면 지우는 방식으로 각 테스트를 독립적으로 만들려고 했다.
- 하지만 이 방식은 **견고하지 않다(not robust)**:
  - 여러 테스트가 **병렬로 실행**되면(`pytest-xdist`의 `-n` 옵션 등) 같은 파일에 동시에 접근하면서 제어 불가능한 실패가 생길 수 있다.
  - `/tmp`는 **모든 시스템에 존재하는 게 아니다** — Windows에서는 다르고, Mac에서도 이름이 다를 수 있다.

### 해결책 — fixture는 "인자로 요구"하기만 하면 된다
- fixture를 쓰는 법은 아주 간단하다: **테스트 메서드의 인자로 그 이름을 적기만 하면 된다** — 별도 import가 필요 없다.
- 예: `def test_write_yes(self, tmpdir):`처럼 `tmpdir`을 인자로 요구하면, pytest가 이 테스트에 `tmpdir` fixture가 필요하다는 것을 인식하고 자동으로 제공한다.
- `tmpdir`은 pytest 내장(built-in) fixture로, **매 테스트마다 고유한 임시 디렉토리 경로**를 절대 경로 형태로 제공한다 (`tmpdir.join("value")`처럼 사용).

### fixture가 알아서 해주는 것 — 고유성과 자동 정리
- pytest는 임시 경로 이름을 **충돌이 없도록 매우 고유하게(unique)** 만든다 (예: 사용자명, pytest 실행 번호, 테스트 함수명이 조합된 경로).
- **정리(cleanup)를 직접 신경 쓸 필요가 없다** — `setup`에서 파일 존재 여부를 확인하고 지우던 수동 작업이 필요 없어진다.
- 같은 테스트를 여러 번 반복 실행해도 경로가 항상 고유하므로 충돌 걱정이 없다.

### fixture의 범위
- `tmpdir` 외에도 pytest는 **환경 변수 설정, 파일 생성, stdout/stderr 캡처, 로그인 상태 시뮬레이션** 등 다양한 fixture를 공식 문서에서 제공한다.
- 강사도 처음에는 fixture를 오랫동안 피하고 자기만의 방식으로 우회했지만, 한번 써보면 **얼마나 좋은지 알게 된다**고 강조 — 적극 추천.

## 예시
```python
class TestWriteBooleans:
    def test_write_yes(self, tmpdir):     # tmpdir을 인자로 "요구"하기만 하면 됨
        path = tmpdir.join("value")
        write_integer("yes", path)
        with open(path) as f:
            assert f.read() == "True"

    def test_write_no(self, tmpdir):
        path = tmpdir.join("value")
        write_integer("n", path)
        with open(path) as f:
            assert f.read() == "False"
```

## 요약
- 하드코딩된 경로(`/tmp` 등)는 병렬 실행이나 OS 차이로 인해 견고하지 않다.
- pytest의 `tmpdir` 같은 내장 fixture는 테스트 인자로 요구하기만 하면, 매번 고유하고 자동으로 정리되는 임시 경로를 제공한다 — 직접 setup/teardown으로 정리 코드를 짤 필요가 없어진다.
