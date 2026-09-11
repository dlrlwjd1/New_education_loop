# Key Terms — Automation with Command-Line Tools

## 개요
- "Automation with Command-Line Tools" 레슨의 용어 정리(reading). Click/ArgParse/sys.argv/Setuptools/entry points의 정의와 기본 코드 예시를 미리 소개한다.

## 내용

| 용어 | 정의 |
|---|---|
| Click | 커맨드라인 인터페이스를 만드는 Python 패키지 |
| ArgParse | 커맨드라인 인자를 파싱하는 Python 모듈 |
| sys.argv | 커맨드라인 인자를 담은 Python 모듈(리스트) |
| Setuptools | Python 프로젝트를 빌드·배포하는 패키지 |
| Entry points | Setuptools에서 스크립트와 함수를 연결해주는 정의 |

## 예시
```python
# Click
import click

@click.command()
@click.option('--count', default=1)
def hello(count):
    for x in range(count):
        click.echo('Hello World!')

if __name__ == '__main__':
    hello()

# ArgParse
import argparse
parser = argparse.ArgumentParser()
parser.add_argument('--verbosity', action='store_true')
args = parser.parse_args()
if args.verbosity:
    print("Verbose mode enabled")

# sys.argv
import sys
print(f"Script name: {sys.argv[0]}")
print(f"First argument: {sys.argv[1]}")

# Setuptools
from setuptools import setup
setup(name='mypackage', version='1.0', install_requires=['requests', 'click'])

# Entry points
setup(
    entry_points={'console_scripts': ['myscript = mypackage.mymodule:main_func']}
)
```

## 요약
- `sys.argv`(가장 기본) → `argparse`(표준 라이브러리 프레임워크) → `click`(서드파티, 더 편리) 순으로 CLI 도구의 복잡도/편의성이 올라간다.
- Setuptools의 `entry_points`로 스크립트를 실제 실행 가능한 커맨드로 패키징할 수 있다.
