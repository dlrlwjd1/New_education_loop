# Creating a database client

## 개요

- Python 기반 데이터베이스 클라이언트 환경 구성: Python 버전 확인 → Jupyter 설치 → MySQL Connector로 데이터베이스 연결

## 내용

### 1. Python 버전 확인

- 명령 프롬프트에서 `python --version` — Python 3.x가 출력되면 설치 정상.
- 버전 번호가 python.org의 최신 버전과 일치하는지 확인.
- "python is not recognized as an internal or external command"가 나오면 설치나 문서를 재검토.

### 2. Jupyter IDE 설치

- IDE = 코드를 표시·실행하는 소프트웨어. 이 과정은 **Jupyter** 사용.
- 설치 후 `jupyter notebook`으로 기본 브라우저에서 새 노트북 인스턴스 실행.

### 3. MySQL Connector 연결

- **MySQL Connector** — MySQL 작업 기능을 제공하는 전용 Python 라이브러리(API).
- Python에 포함된 패키지 설치기 **pip**로 별도 설치.
- 새 노트북(`configuring_mysql_connector`)에서 설치·검증:
  - 노트북 셀에서 `!pip install ...` (느낌표로 패키지 호출), 라이브러리명은 `mysql-connector-python` (소문자 p)
  - Shift+Enter 또는 Run으로 실행
  - `import mysql.connector as connector` 실행 후 **출력이 없으면 임포트 성공**

## 예시

```bash
python --version
python -m pip install jupyter
jupyter notebook
```

```python
# Jupyter 노트북 셀
!pip install mysql-connector-python

import mysql.connector as connector  # 출력 없음 = 성공
```

## 요약

- Python 3 최신 버전 확인 → pip로 Jupyter 설치 → 노트북에서 mysql-connector-python 설치 순서로 환경을 구성한다.
- `import mysql.connector` 실행 시 출력이 없으면 클라이언트 연결 준비가 끝난 것이다.
