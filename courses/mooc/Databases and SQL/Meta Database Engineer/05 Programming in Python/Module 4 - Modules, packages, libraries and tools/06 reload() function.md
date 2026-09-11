# reload() function

## 개요

- importlib의 reload() — 이미 임포트한 모듈을 실행 중 여러 번 다시 로드하는 함수
- 디렉터리 내용 감시 예제로 동적 재로드의 활용을 확인

## 내용

### reload()란

- import 문은 인터프리터가 **한 번만** 로드하지만, **reload()는 임포트한 모듈을 여러 번 다시 로드**하게 해 준다.
- 전제 조건: 인자로 넘기는 모듈은 **이미 성공적으로 임포트된** 것이어야 한다.
- 위치: **importlib** 모듈 안 — `import importlib` 후 `importlib.reload(모듈)`.
- print("Hello world")가 든 sample.py를 여러 번 import해도 한 번만 출력되지만, reload를 쓰면 원하는 만큼 다시 출력된다.

### 활용 예 — 실행 중 디렉터리 변화 감시

1. **filechanges.py**: `import os` → `os.listdir(r'경로')`로 디렉터리 내용을 contents 변수에 담아 출력하는 함수 작성
2. **usingreloads.py**: importlib와 filechanges를 임포트하고, changes() 함수 안에서 **try 블록으로 reload(filechanges)** 실행 후 함수 호출 (except는 pass)
3. for 루프 + range(5) + input()으로 다섯 번 실행 제어
- 실행 중 텍스트 파일을 지우면 다음 Enter에서 목록에 반영되고, filechanges.py의 print 문구를 바꿔도 **실행을 멈추지 않고** 다음 반복에 반영된다.

## 예시

```python
# filechanges.py
import os
def show():
    contents = os.listdir(r'/path/to/dir')
    print(contents)

# usingreloads.py
import importlib
import filechanges

def changes():
    try:
        importlib.reload(filechanges)
        filechanges.show()
    except:
        pass

for x in range(5):
    changes()
    input()      # Enter를 눌러 다음 반복 — 그 사이 변경이 반영됨
```

## 요약

- reload()는 importlib에 있으며 이미 임포트된 모듈을 실행 중 재로드한다.
- 인터프리터의 1회 로드 제한을 넘어, 코드를 멈추지 않고 모듈·환경의 변경을 반영하는 동적 패턴에 쓰인다.
