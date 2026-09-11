# Packaging your Project

## 개요
- `setup.py`로 프로젝트를 실제 설치 가능한 **커맨드라인 도구로 패키징**하는 법을 다룬다. `install_requires`로 의존성을 선언하고, `entry_points`(콘솔 스크립트)로 특정 함수를 실행 가능한 커맨드로 노출하는 법, 그리고 `python setup.py develop`으로 개발 모드 설치하는 법을 실습한다.

## 내용

### 의존성 선언 — `install_requires`
- `setup.py`의 `setup()` 함수에 **`install_requires=["click", "colorama"]`**처럼 리스트로 의존성을 선언한다.
- 버전을 고정하고 싶다면 `"click>=8.0"`처럼 버전 지정자를 함께 쓸 수 있다.
- **`requirements.txt`와의 차이**: 프로젝트를 배포(distribute)할 때는 보통 `install_requires`를 쓴다. `requirements.txt`를 읽어서 `install_requires`에 전달하는 방식도 가능하지만 필수는 아니다.

### 실행 가능한 명령으로 만들기 — `entry_points`
- 단순히 파일들이 있는 디렉토리를 **실제 터미널 명령(예: `jformat`)으로 만들려면 `entry_points`가 필요**하다.
- `entry_points`의 `console_scripts` 섹션에 **"명령이름 = 모듈경로:함수이름"** 형식으로 정의한다.
- 예: `jformat = jformat.main:main` → `jformat`이라는 명령을 실행하면 `jformat` 모듈의 `main.py` 안에 있는 `main` 함수가 실행된다.

### 개발 모드로 설치 — `python setup.py develop`
- 가상환경 안에서 `python setup.py develop`을 실행하면, **선언한 의존성을 설치하고, 정의한 명령(`jformat`)을 현재 환경의 실행 경로(PATH)에 등록**한다.
- 이후 `which jformat`으로 실제 설치된 경로를 확인할 수 있고, `jformat --help`처럼 **직접 만든 명령을 그대로 실행**할 수 있게 된다.

## 예시
```python
# setup.py
from setuptools import setup

setup(
    name="jformat",
    version="0.1",
    install_requires=["click", "colorama"],
    entry_points={
        "console_scripts": [
            "jformat = jformat.main:main",
        ]
    },
)
```
```bash
python setup.py develop     # 의존성 설치 + jformat 명령 등록
which jformat                 # 설치된 경로 확인
jformat --help                # 직접 만든 CLI 도구 실행
```

## 요약
- `setup.py`의 `install_requires`로 의존성을 선언하고, `entry_points`(`console_scripts`)로 특정 함수를 실행 가능한 터미널 명령으로 노출한다.
- `python setup.py develop`으로 개발 모드 설치하면, 그 즉시 자신이 만든 CLI 도구를 시스템 명령처럼 바로 실행해볼 수 있다.
