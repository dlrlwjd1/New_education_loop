# Key Terms — Modules and Advanced Usage

## 개요
- "Modules and Advanced Usage" 레슨의 용어 정리(reading). 모듈/임포트/가상환경/pip의 정의와 기본 사용법을 미리 소개한다.

## 내용

| 용어 | 정의 |
|---|---|
| Module | 함수나 클래스 같은 재사용 가능한 코드를 담은 Python 파일 |
| Import | 모듈을 가져와서 현재 네임스페이스에서 그 내용을 쓸 수 있게 함 |
| Virtualenv | 격리된 Python 패키지/의존성을 담는 독립적인(self-contained) 디렉토리 |
| Activation | 셸(shell)이 virtualenv 전용 Python 인터프리터를 쓰도록 설정하는 것 |
| Pip | 패키지와 의존성을 설치·관리하는 Python 도구 |

## 예시
```python
# 모듈 임포트
import utils
print(utils.format_name("Wyclef"))
```

```bash
# 내장 virtualenv 사용법
python3 -m venv env

# 가상환경 활성화
source env/bin/activate

# 의존성 설치
pip install pandas

# 작업 끝나면 비활성화
deactivate
```

## 요약
- 모듈은 재사용 코드를 담은 `.py` 파일, import로 그 내용을 가져와 쓴다.
- virtualenv로 프로젝트별 의존성을 격리하고, pip으로 패키지를 설치·관리한다.
