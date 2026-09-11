# Key Terms — Testing Failures

## 개요
- "Testing Failures" 레슨의 용어 정리(reading). 테스트 실패 출력, PDB(Python 디버거), pytest fixture/plugin/옵션의 정의와 예제 코드를 미리 소개한다.

## 내용

| 용어 | 정의 |
|---|---|
| Test Failure Output | 어떤 테스트가 왜 실패했는지에 대한 상세 정보를 담은 pytest 결과 |
| PDB (Python Debugger) | 실행을 한 단계씩 따라가며 Python 코드를 디버깅하는 도구 |
| Pytest Fixtures | pytest가 관리하는 공유 테스트 데이터/상태 |
| Pytest Plugins | pytest에 기능을 추가해주는 확장(extension) |
| Pytest Options | pytest 테스트 러너의 동작을 제어하는 커맨드라인 플래그 |

## 예시
```python
# 테스트 안에서 PDB로 디버깅
import pdb

def test_stuff():
    x = 5 * 5
    pdb.set_trace()   # 디버거 실행
    assert x == 10

# 임시 디렉토리를 제공하는 pytest fixture
import pytest

@pytest.fixture
def temp_dir():
    import tempfile
    dirpath = tempfile.mkdtemp()
    yield dirpath
    import shutil
    shutil.rmtree(dirpath)

# fixture를 사용하는 pytest 테스트 함수
def test_using_dir(temp_dir):
    path = temp_dir.join("test.txt")
    # temp_dir 경로로 테스트 입출력 수행
```

## 요약
- 테스트 실패 출력은 실패 원인을 진단하는 첫 단서이고, PDB는 코드 실행을 직접 들여다보는 도구.
- fixture는 테스트 간 공유 데이터/상태를 관리해주고, plugin/옵션으로 pytest의 동작을 확장·제어할 수 있다.
