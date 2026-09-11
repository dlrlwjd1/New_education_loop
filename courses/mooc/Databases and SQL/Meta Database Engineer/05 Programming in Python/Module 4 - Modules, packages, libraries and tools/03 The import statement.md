# The import statement

## 개요

- import 문으로 다양한 위치의 모듈에 접근하는 방법: 현재 스코프의 파일, 내장 모듈, pip로 설치하는 PyPI 패키지, 다른 디렉터리의 파일

## 내용

### 모든 .py 파일은 모듈이다

- .py 확장자의 스크립트 파일이 곧 모듈이며, 현재 작업 중인 코드는 **메인 모듈**이라 부른다.
- 현재 스코프(작업 디렉터리)의 Python 파일은 확장자 없이 `import 파일명`으로 임포트한다.
- .txt 등 Python 파일이 아닌 것은 임포트 불가 — 에러가 난다.

### 내장 모듈과 패키지

- **내장 모듈**(예: json)은 인터프리터에 포함되어 별도 설치 없이 `import json`으로 바로 사용. 목록은 Python 표준 라이브러리 문서에 있다.
- **패키지 = 모듈들의 컬렉션 구조.** 디렉터리를 패키지로 취급하게 하려면 특수 파일 **__init__.py** 가 필요하다.
- 커뮤니티 패키지는 **PyPI(Python Package Index)**에 있고, 기본 설치기 **pip(pip3)**로 설치한다:
  - 설치된 패키지(numpy)는 바로 임포트 가능
  - 미설치 패키지(seaborn)는 **ModuleNotFoundError** → `pip install seaborn` 후 임포트

### 다른 디렉터리의 파일 임포트

1. `import sys`
2. `sys.path.insert(1, r'경로')` — 대상 폴더 경로를 검색 목록에 삽입(문자열 앞 r, 작은따옴표)
3. `import trial` — IDE는 이 경로를 몰라 물결 밑줄을 표시할 수 있지만 **인터프리터는 인식**하므로 실행된다
- 경로 삽입은 구체적이고 까다로울 수 있으므로, **필요한 파일을 작업 디렉터리로 옮기는 것이 좋은 습관**이다.

## 예시

```python
import sample            # 현재 디렉터리의 sample.py
import json              # 내장 모듈
import numpy             # pip로 설치된 패키지

import sys
sys.path.insert(1, r'/path/to/workplace')
import trial
print(trial.names)       # ['Adrian', 'Maria']
```

## 요약

- 현재 스코프의 .py 파일, 내장 모듈, pip 설치 패키지를 import 문 하나로 가져온다.
- 미설치 패키지는 pip install로 PyPI에서 받는다.
- 다른 디렉터리는 sys.path.insert로 가능하지만, 파일을 작업 디렉터리에 두는 편이 낫다.
