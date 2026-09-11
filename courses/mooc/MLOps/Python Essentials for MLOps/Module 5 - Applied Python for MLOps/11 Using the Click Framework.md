# Using the Click Framework

## 개요
- `sys.argv`/`argparse`로 만들던 `jformat` 도구를 **서드파티 프레임워크 `click`**으로 이식(port)하는 법을 다룬다. 데코레이터 기반 문법으로 위치 인자(`@click.argument`)와 플래그(`@click.option` + `is_flag=True`)를 추가하고, 타입 검증(`click.Path(exists=True)`)까지 실습한다.

## 내용

### Click의 기본 — 데코레이터로 명령 정의
- `import click` 후, 메인 함수에 **`@click.command()`** 데코레이터를 붙이면 그 함수가 CLI 명령이 된다.
- 더 이상 `sys.argv`를 직접 다룰 필요가 없다 — 관련 코드를 지워도 된다.

### 위치 인자 추가 — `@click.argument`
- `@click.argument("path")`처럼 추가하면, 터미널에서 받은 값이 자동으로 **`path`라는 파라미터로 메인 함수에 전달**된다.
- 인자 없이 실행하면 Click이 **자동으로 "Missing argument 'PATH'" 에러**를 보여준다 — 직접 검증 코드를 짤 필요가 없다.
- **주의**: `-h`는 Click이 자동으로 인식하지 못한다 — Click의 기본 도움말 플래그는 `--help`.

### 타입 검증 — `click.Path(exists=True)`
- `@click.argument("path", type=click.Path(exists=True))`처럼 타입을 지정하면, **그 경로가 실제로 존재하는지까지 자동 검증**해준다.
- 존재하지 않는 파일을 넘기면 "Invalid value for 'PATH'... does not exist" 같은 명확한 에러 메시지를 자동으로 보여준다.

### 불리언 플래그 추가 — `@click.option` + `is_flag=True`
- 인자(argument)가 아니라 **옵션(option)**을 추가할 때는 `@click.argument` 대신 `@click.option("--sort", is_flag=True)`을 쓴다.
- `is_flag=True`를 반드시 지정해야 **값 없이 켜고 끄는 불리언 플래그**로 동작한다 (안 붙이면 값을 요구하는 옵션이 됨).
- 옵션을 추가할 때마다 **메인 함수의 파라미터에도 그 이름(`sort`)을 추가**해야 한다 — 데코레이터가 늘어날수록 함수 시그니처도 함께 늘어남.

## 예시
```python
import click

@click.command()
@click.argument("path", type=click.Path(exists=True))
@click.option("--sort", is_flag=True, help="sort the output keys")
def main(path, sort):
    formatter(path, sort_keys=sort)

if __name__ == "__main__":
    main()
```
```bash
python jformat.py --help                       # 자동 도움말
python jformat.py examples/example.json         # 기본 실행
python jformat.py examples/example.json --sort  # 정렬 옵션 활성화
python jformat.py examples/nonexistent.json      # Path(exists=True) 검증 실패
```

## 요약
- Click은 `@click.command()`, `@click.argument()`, `@click.option()` 데코레이터로 CLI를 선언적으로 구성하며, `argparse`보다 적은 코드로 더 풍부한 검증(예: 경로 존재 확인)을 제공한다.
- 불리언 플래그는 `@click.option(..., is_flag=True)`로 만들고, 추가한 인자/옵션은 메인 함수 파라미터에도 함께 반영해야 한다.
