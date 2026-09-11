# Importing Modules

## 개요
- **모듈(module)** 은 이미 작성된 Python 코드를 담은 파일. **import** 명령으로 다른 파일·인터넷의 코드를 가져와 쓴다.
- 특정 함수만/전체를 가져오거나 **별칭(as)** 을 붙일 수 있다.

## 내용

### import의 두 방식
- 파일 `HelperFunctions.py` 가 같은 폴더에 있을 때:
  - **특정 함수**: `from helper_functions import get_restaurant_list` → `get_restaurant_list()` 직접 사용.
  - **전체 모듈**: `import helper_functions` → 함수 호출 시 **모듈명 접두** 필요: `helper_functions.get_restaurant_list()`.
    - `import helper_functions` 후 `print_pythons()` 만 쓰면 "not defined" 오류 → `helper_functions.print_pythons()` 로 수정(LLM이 짚어줌).

### 별칭 (as)
- `import helper_functions as hf` → `hf.print_pythons()` 로 짧게. 타이핑 절약.

### 정리
- **from 모듈 import 함수명**: 특정 함수만, 직접 호출.
- **import 모듈**: 전체, `모듈.함수()` 로 호출.
- **import 모듈 as 별칭**: 짧은 이름.

## 예시

### import 방식
```python
from helper_functions import get_restaurant_list   # 특정 함수
scores = get_restaurant_list("score")

import helper_functions            # 전체
helper_functions.print_pythons()   # 모듈명 접두 필요

import helper_functions as hf      # 별칭
hf.print_pythons()
```

## 요약
- **모듈**은 작성된 코드 파일이며 **import**로 자신·타인·인터넷의 코드를 가져온다.
- **from 모듈 import 함수**(직접 호출), **import 모듈**(모듈명 접두), **as**(별칭) 세 방식이 있다.
- 다음 강의는 데이터 분석용 강력한 자료 구조를 제공하는 **pandas 모듈** 가져오기다.
