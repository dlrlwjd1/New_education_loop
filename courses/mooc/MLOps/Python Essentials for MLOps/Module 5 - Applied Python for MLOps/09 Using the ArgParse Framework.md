# Using the ArgParse Framework

## 개요
- Python 표준 라이브러리인 **`argparse`**로 `sys.argv`보다 한 단계 발전된 CLI를 만드는 법을 다룬다. 단 두 줄로 완전한 도움말(help) 메뉴를 얻는 법과, `store_true` 액션으로 불리언 플래그를 추가하는 법을 실습한다.

## 내용

### `ArgumentParser` 초기화 — 단 두 줄로 도움말 메뉴 완성
```python
import argparse
parser = argparse.ArgumentParser(description="jformat tool: ...")
args = parser.parse_args()
```
- `ArgumentParser`를 생성할 때 `description`(선택 사항)을 넘기면, **자동으로 도움말(`-h`/`--help`) 메뉴가 생성**된다.
- 강사는 이 두 줄이 공식 문서에서도 찾기 어려운데 매우 강력한 기능이라고 강조 — `import` + `ArgumentParser()` 인스턴스화 + `parse_args()` 호출만으로 완전한 help 메뉴를 공짜로 얻는다.
- `python3 jformat.py -h`를 실행하면 자동으로 만들어진 도움말이 출력된다.

### 불리언 플래그 추가 — `action="store_true"`
- `parser.add_argument("--sort", action="store_true", help="...")`처럼 추가하면:
  - 플래그를 **쓰지 않으면 기본값 `False`**.
  - **`--sort`를 쓰면 자동으로 `True`**로 설정됨 — 값을 따로 지정할 필요가 없다.
- 결과는 `args.sort`로 접근한다 — `argparse`가 내부적으로 `--sort`라는 이름을 `args` 객체의 `sort`라는 속성(attribute)으로 저장해준다.

## 예시
```python
import argparse

parser = argparse.ArgumentParser(description="jformat tool: pretty-print JSON")
parser.add_argument("--sort", action="store_true", help="sort the output keys")
args = parser.parse_args()

print(args.sort)   # 플래그 없이 실행하면 False, --sort를 붙이면 True
```
```bash
python3 jformat.py -h            # 자동 생성된 도움말 확인
python3 jformat.py               # args.sort == False
python3 jformat.py --sort        # args.sort == True
```

## 요약
- `argparse.ArgumentParser()` + `parse_args()` 두 줄만으로 완전한 `-h`/`--help` 메뉴가 자동 생성된다.
- `add_argument("--플래그", action="store_true")`로 값 지정 없이 켜고 끌 수 있는 불리언 플래그를 쉽게 추가할 수 있다.
