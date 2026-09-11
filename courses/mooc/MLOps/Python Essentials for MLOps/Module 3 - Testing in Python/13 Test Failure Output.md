# Test Failure Output

## 개요
- pytest 실패 출력의 구조를 자세히 뜯어본다 — **테스트 대상 코드의 실제 값(representation)을 보여주는 것**, **실패가 발생한 정확한 줄과 파일**, **예외 체이닝(exception chaining)**, 그리고 **실패가 많을 때 유용한 짧은 요약(short summary)**을 다룬다.

## 내용

### 실패 출력이 보여주는 것
- pytest는 실행 시 경로, 수집된 항목 수, Python/pytest 버전을 먼저 보여주고, 파일별로 `F`(실패)/`.`(통과) 기호로 진행 상황을 표시한다.
- **결정적으로 유용한 부분**: 실패 지점에서 **테스트 대상 코드가 실제로 어떤 값을 가지고 있었는지(representation)를 그대로 보여준다** — 예: 문제를 일으킨 문자열 값이 정확히 무엇이었는지("14,044" 같은 값)까지 확인 가능.

### 실패 위치 추적
- 어느 파일의 몇 번째 줄에서 실패했는지 화살표(`>`) 같은 특수 문자로 정확히 짚어준다.
- 에러가 테스트 파일이 아니라 **테스트 대상 모듈(예: `utils.py`)의 특정 줄**에서 발생했다면, 그 파일과 줄 번호까지 명시해준다.

### 예외 체이닝(Exception Chaining)
- "During handling of the above exception, another exception occurred" — 한 예외를 처리하는 도중 **또 다른 예외가 발생**했을 때 pytest/Python이 두 예외를 연결해서 모두 보여준다.
- 예: 함수가 `TypeError`와 `ValueError`를 잡아서(catch) 처리하려다 결국 새로운 `RuntimeError`를 다시 발생(re-raise)시키는 경우, 그 전체 체인이 출력에 드러난다.

### 짧은 요약(Short Summary)
- 출력 맨 끝에 **간단한 요약 정보**가 나온다 — 실패한 테스트가 수백~수천 개일 때, 하나하나 스크롤하는 대신 요약만 보고 전체 상황을 빠르게 파악할 수 있게 해주는 장치.

### Verbose 옵션
- `-v`를 한 번 이상 추가하면 통과한 테스트까지 포함해 **어떤 파일의 어떤 테스트가 통과/실패했는지** 더 자세히 볼 수 있다.

## 예시
```bash
pytest test_failure_output.py
```
```
FAILED test_failure_output.py::test_string_to_int - RuntimeError: unable to convert to integer
  utils.py:11: in string_to_int
    ValueError: could not convert string to float: '14,044'
  During handling of the above exception, another exception occurred:
  ...
```

## 요약
- pytest 실패 출력은 실패 지점의 실제 값, 정확한 파일/줄 번호, 예외 체이닝 정보를 함께 보여줘 문제를 빠르게 특정할 수 있게 해준다.
- 실패가 많을 때는 맨 끝의 짧은 요약으로 전체 상황을 먼저 파악하고, `-v`로 필요에 따라 더 자세히 들여다볼 수 있다.
