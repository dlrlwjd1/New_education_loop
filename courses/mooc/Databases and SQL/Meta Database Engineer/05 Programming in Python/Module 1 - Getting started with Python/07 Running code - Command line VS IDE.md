# Running code - Command line VS IDE

## 개요

- Python 프로그램을 실행하는 두 가지 방법(Python 셸, 파일 직접 실행)과 커맨드라인 vs IDE의 차이

## 내용

### 두 가지 실행 방법

1. **Python 셸** — 터미널에 `python`만 입력해 진입. **작은 스크립트의 실행·테스트에 유용** — .py 파일을 만들지 않고 코드 조각을 바로 실행한다. 종료는 `exit()` (함수이므로 괄호 필수).
2. **파일 직접 실행** — `.py` 확장자 파일을 `python 파일명.py` 명령으로 실행.

### IDE(VS Code)의 장점

- 위 두 방법을 모두 포함하면서 추가 편의를 제공: **자동 완성, 디버깅, 문법 하이라이팅, 공백·들여쓰기 도우미**.
- IDE에서 실행: 우상단 재생 버튼의 드롭다운에서 Run Python File 또는 Debug Python File — 터미널이 자동으로 열리며 결과 출력.

## 예시

```bash
# 파일 실행
python hello_world.py     # => Hello World

# 셸 진입·사용·종료
python
>>> print("Hello World")
Hello World
>>> exit()
```

## 요약

- Python은 셸(즉석 테스트)과 파일 실행(python 파일.py) 두 방식으로 돌릴 수 있다.
- VS Code 같은 IDE는 두 방식을 포함하고 자동 완성·디버깅 등으로 개발 경험을 개선한다.
