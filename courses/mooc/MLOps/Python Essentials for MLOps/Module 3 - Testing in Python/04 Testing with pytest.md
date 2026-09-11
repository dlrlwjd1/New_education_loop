# Testing with pytest

## 개요
- pytest를 실제로 설치하고 실행해보는 실습형 영상. 가상환경에 pytest를 설치하는 법, `pytest` 커맨드를 인자 없이 실행했을 때 자동 탐색(discovery) 규칙이 실제로 어떻게 동작하는지, 이름 규칙을 어겼을 때 무슨 일이 벌어지는지를 다룬다.

## 내용

### 설치
- 항상 그렇듯 **가상환경(venv)을 먼저 만들고 활성화**한 뒤, `pip install pytest`로 설치한다.
- `requirements.txt`에 `pytest`를 추가해두면 나중에 이 프로젝트가 어떤 의존성을 필요로 하는지 기억할 필요 없이 바로 알 수 있어 유용.

### 자동 탐색(discovery) 동작 확인
- 예제 디렉토리에 `test_examples.py`(테스트 2개)와 `non_test_examples.py`(테스트 2개, 이름 규칙 위반)가 있다고 하자.
- **인자 없이 `pytest`를 실행하면 이름 규칙을 따르는 파일만 수집**된다 — `test_` 접두사가 없는 `non_test_examples.py`는 무시되어, 총 4개 테스트 중 2개만 실행됨.
- **`non_test_examples.py`를 명시적으로 지정**(`pytest non_test_examples.py`)하면 강제로 실행할 수 있다.
- 반대로 `test_examples.py`의 접두사를 규칙에 안 맞게 바꾸면(예: `rest_examples.py`), pytest는 `collected 0 items`라고 보고하며 아무 테스트도 찾지 못한다.

### 왜 테스트 파일에 "테스트가 아닌" 코드가 있을 수 있는가
- 테스트 파일 안에 헬퍼 함수(예: 파일 쓰기, 가짜 데이터셋 생성)처럼 **테스트 자체는 아니지만 테스트를 돕는 코드**가 있을 수 있다.
- 이런 헬퍼 코드는 `test_` 접두사를 붙이지 않으면 pytest가 테스트로 오인하지 않고 건너뛴다 — 규칙을 지키면 이런 유연성이 자연스럽게 확보된다.

### 하위 디렉토리에서도 동일하게 동작
- 상위 디렉토리에서 `pytest`를 실행해도, 규칙을 따르는 파일이 있는 하위 디렉토리(`examples/test_examples.py`)까지 알아서 찾아 수집한다.

## 예시
```bash
python3 -m venv venv
source venv/bin/activate
pip install pytest
echo "pytest" >> requirements.txt

cd examples
pytest                       # test_examples.py의 2개 테스트만 수집·실행
pytest non_test_examples.py  # 이름 규칙을 안 따르는 파일도 명시적으로 지정해 실행 가능
```

## 요약
- pytest는 가상환경 + `pip install pytest`로 설치하고, `requirements.txt`에 기록해두는 것이 좋다.
- 인자 없이 `pytest`를 실행하면 이름 규칙(`test_` 접두사 등)을 따르는 파일/함수만 자동으로 수집·실행된다.
- 규칙을 어긴 파일은 명시적으로 지정해야 실행되며, 반대로 규칙을 따르지 않으면 `collected 0 items`가 나온다 — 이 유연성 덕분에 테스트 파일 안에 비-테스트 헬퍼 코드를 자유롭게 둘 수 있다.
