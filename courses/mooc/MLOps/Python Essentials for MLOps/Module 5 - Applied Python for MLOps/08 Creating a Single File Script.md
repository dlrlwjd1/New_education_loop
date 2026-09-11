# Creating a Single File Script

## 개요
- 프레임워크 없이 **`sys.argv`만으로** 커맨드라인 인자를 받는 가장 기본적인 방법을 다룬다. JSON 파일을 예쁘게 포맷팅하는 `jformat` 스크립트를 예시로 사용.

## 내용

### 예제 스크립트의 목적
- 커맨드라인 인자로 파일 경로를 하나 받아서, 그 JSON 파일을 읽고 보기 좋게(indent 등) 포맷팅해서 출력하는 작은 스크립트(`jformat.py`).

### `sys.argv`로 인자 받기
- `sys.argv`는 **터미널에서 전달된 모든 값을 리스트로 담고 있다** — 첫 번째 항목은 항상 스크립트 이름 자신.
- 이 스크립트에서는 **인자 1개만 받으면 되므로, `sys.argv`의 마지막 항목(`sys.argv[-1]`)만 사용** — 몇 개의 인자가 오든 상관없이 항상 마지막 것을 경로로 취급.

### `if __name__ == "__main__":`으로 부작용 방지
- 이전 모듈(Module 2)에서 배운 관례를 그대로 적용 — **이 조건 안에서만 `main()`을 호출**해야, 이 스크립트를 다른 곳에서 `import`했을 때(`formatter`나 `main` 함수만 가져다 쓰고 싶을 때) 커맨드라인 인자 처리 로직이 부작용처럼 실행되는 것을 막을 수 있다.

### 실행
- `python3 jformat.py examples/example.json`처럼 실행하면, 마지막 인자(파일 경로)가 `main()`으로 전달되고, `json.dumps()`로 보기 좋게 포맷된 JSON이 출력된다.

## 예시
```python
import sys
import json

def formatter(path):
    with open(path) as f:
        data = json.load(f)
    print(json.dumps(data, indent=2))

def main(path):
    formatter(path)

if __name__ == "__main__":
    main(sys.argv[-1])   # 몇 개의 인자가 오든 마지막 것만 사용
```
```bash
python3 jformat.py examples/example.json
```

## 요약
- `sys.argv`는 프레임워크 없이 커맨드라인 인자를 받는 가장 기본적인 방법이며, 리스트이므로 인덱싱으로 원하는 위치의 인자를 골라 쓸 수 있다.
- `if __name__ == "__main__":` 안에서만 메인 로직을 실행해, 이 스크립트를 다른 코드에서 import할 때 부작용이 생기지 않도록 해야 한다.
