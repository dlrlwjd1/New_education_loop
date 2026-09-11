# Working with Python Scripts

## 개요
- Python 스크립트를 작성할 때 알아두면 좋은 관례 — **독스트링(docstring)**, **`if __name__ == "__main__":`의 존재 이유**, 그리고 **`sys.argv`로 커맨드라인 인자를 받는 법**을 다룬다.

## 내용

### 독스트링(Docstring)
- 파일 맨 위에 삼중따옴표(`"""..."""`)로 쓰는 설명 텍스트 — **아무 동작도 하지 않고 그냥 문서화 텍스트**다.
- Python 개발자들은 일반 주석(comment)보다 독스트링을 문서화 용도로 더 즐겨 쓴다 — 보기에 더 깔끔하기 때문.

### `if __name__ == "__main__":` 의 역할
- 이 스니펫은 **"이 파일이 터미널에서 스크립트로 직접 실행될 때만 `main()` 함수를 실행하라"**는 뜻이다.
- 이게 왜 필요한가: 이 스크립트를 **다른 곳(예: Jupyter Notebook)에서 헬퍼 함수로 import해서 쓰고 싶을 때**, 커맨드라인 인자 처리 로직이 임포트 시점에 함께 실행되어 버리면 곤란하다.
- **임포트할 때 원치 않는 부작용(side effect)이 발생하는 것을 막아주는 장치**가 바로 이 조건문이다.

### `sys.argv`로 커맨드라인 인자 받기
- `sys` 모듈의 `argv`는 커맨드라인에서 스크립트에 전달된 모든 것을 리스트로 담고 있다.
- **첫 번째 항목은 항상 스크립트 자신의 이름**이다 (예: `script.py`).
- 그 뒤로 전달한 인자들이 순서대로 이어진다. `type(sys.argv)`로 확인하면 **리스트(list)**임을 알 수 있다.
- 프레임워크나 라이브러리 없이 **빠르고 간단하게(quick and dirty)** 커맨드라인 인자를 받고 싶을 때 쓰는 기본적인 방법 — 더 복잡한 처리(플래그, 값 파싱 등)가 필요하면 전용 라이브러리/프레임워크를 쓰는 것이 좋다.

## 예시
```python
"""
이 스크립트는 커맨드라인 인자를 받아 출력하는 간단한 예시입니다.
"""
import sys

def main(args):
    print("this is the main function")
    for arg in args:
        print(arg)

if __name__ == "__main__":
    main(sys.argv)
```
```bash
$ python script.py help --flag key=value
this is the main function
script.py
help
--flag
key=value
```

## 요약
- 독스트링은 파일 상단의 설명 텍스트로, 주석보다 깔끔한 문서화 방식으로 흔히 쓰인다.
- `if __name__ == "__main__":`은 스크립트가 직접 실행될 때만 로직을 실행하게 해서, 다른 곳에서 import할 때 원치 않는 부작용을 막아준다.
- `sys.argv`는 커맨드라인 인자를 담은 리스트이며, 첫 항목은 항상 스크립트 이름이다. 복잡한 인자 처리가 필요하면 전용 라이브러리를 쓰는 것이 좋다.
