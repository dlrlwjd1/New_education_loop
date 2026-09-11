# Working with Imports

## 개요
- 같은 디렉토리에 있는 모듈을 `import`하는 두 가지 방식(`import 모듈` vs `from 모듈 import 이름`)과, 디렉토리를 패키지(package)로 만드는 `__init__.py`의 역할을 다룬다.

## 내용

### 기본 임포트 — `import 모듈명`
- `utils.py`라는 모듈이 있으면 `import utils`로 가져올 수 있고, 그 안의 함수/클래스/변수는 **점(`.`) 표기법**으로 접근한다: `utils.str_to_bool`, `utils.str_to_int`.
- 이 방식이 동작하려면 **`utils`가 현재 경로(path)에 있어야** 한다 — 다른 경로에 있다면 의존성 설치 등 추가 작업이 필요해진다. 같은 디렉토리에 있으면 바로 동작.
- 대상이 함수든 클래스든 변수든 상관없이 **점(`.`) 표기법은 동일하게 적용**된다.

### 선택적 임포트 — `from 모듈 import 이름`
- `from utils import str_to_int, str_to_bool`처럼 쓰면, **`utils.` 접두사 없이** 바로 `str_to_int`, `str_to_bool`을 쓸 수 있다.
- 명시적으로 가져온 이름들이 현재 스코프에 바로 추가되기 때문.

### 디렉토리를 패키지로 만들기 — `__init__.py`
- Python에서 디렉토리는 보통 **패키지(package)**라고 부르지만, "설치한다"는 의미의 패키지와는 다른 개념이라 헷갈릴 수 있다 — 여기서는 그냥 **코드를 정리하는 용도**로 쓰임.
- 예: `program/` 디렉토리 안에 `__init__.py`와 `items.py`(안에 `some_function()` 정의)가 있으면, `import program.items`로 가져와서 `program.items.some_function()`을 호출할 수 있다.
- `__init__.py`가 있어야 Python이 그 디렉토리를 패키지로 인식한다.
- 만약 `import program`만으로 `program.items.some_function()`처럼 하위 모듈까지 바로 접근하고 싶다면, **그 하위 모듈을 `__init__.py` 안에서 명시적으로 노출(import)해줘야 한다** — 단순히 하위 디렉토리에 파일이 있다고 자동으로 되는 것은 아니다.

## 예시
```python
# 방법 1: 모듈 전체 임포트 (점 표기법으로 접근)
import utils
print(utils.str_to_bool("true"))
print(utils.str_to_int("42"))

# 방법 2: 필요한 것만 선택적으로 임포트 (접두사 없이 사용)
from utils import str_to_int, str_to_bool
print(str_to_bool("true"))
print(str_to_int("42"))

# 패키지 구조: program/__init__.py, program/items.py
import program.items
program.items.some_function()   # "this is a function in a module"
```

## 요약
- `import 모듈`은 점 표기법(`모듈.이름`)으로 접근, `from 모듈 import 이름`은 접두사 없이 바로 사용.
- 두 방식 모두 같은 경로(path)에 모듈이 있어야 동작한다.
- 디렉토리를 패키지로 만들려면 `__init__.py`가 필요하며, 하위 모듈을 상위 패키지 이름만으로 바로 접근하려면 `__init__.py`에서 명시적으로 노출해야 한다.
