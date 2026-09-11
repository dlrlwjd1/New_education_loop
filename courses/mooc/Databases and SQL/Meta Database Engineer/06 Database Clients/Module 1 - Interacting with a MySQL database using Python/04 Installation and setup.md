# Installation and setup

## 개요

- Python-MySQL 연결 환경 구축: Python 설치·버전 확인, Jupyter 설치·작업 폴더 설정, MySQL Connector 설치와 임포트

## 내용

### Python 설치와 확인

1. python.org에서 최신 Python 설치
2. 명령 프롬프트에서 `python --version` — Python 3.x가 나오면 정상 (버전이 웹사이트 최신과 맞는지 확인). "Python not found"면 설치 문서 재검토.

### Jupyter IDE 설정

- 이 강좌는 Jupyter 환경 사용:
  - 설치: `python -m pip install jupyter`
  - 실행: `python -m notebook` — 기본 브라우저에서 노트북 열림
- 작업 폴더: New → Folder → 이름을 "MySQL Python course content"로 변경 → 프로젝트·파일 저장 위치로 사용
- New → Python 3 (ipykernel)로 코드 입력용 새 탭 생성

### MySQL Connector 설치와 임포트

- 노트북 셀에서: `!pip install mysql-connector-python` (느낌표 + pip) → Shift+Enter로 실행. 라이브러리 목록이 설치되면 성공.
- 임포트: `import mysql.connector as connector`
  - `mysql` = pip가 설치한 하위 폴더, `.` = **접근 연산자(access operator)** — connector 하위 폴더에 접근
  - `as connector` = **별칭(aliasing)** — 조인의 별칭과 같은 개념으로 Python 개발의 일반 관행. 커스텀 이름도 되지만 **다른 개발자에게 익숙한 통용 별칭**이 모범 사례.
- 실행 시 콘솔에 출력이 없으면 커넥터가 정상 설치된 것 — 데이터베이스와 통신할 준비 완료.

## 예시

```bash
python --version              # Python 3.x 확인
python -m pip install jupyter
python -m notebook
```

```python
!pip install mysql-connector-python
import mysql.connector as connector    # 출력 없음 = 성공
```

## 요약

- Python 설치·확인 → Jupyter 설치·폴더 구성 → pip로 MySQL Connector 설치 → import ... as 별칭 순으로 환경을 구축한다.
- 점(.)은 접근 연산자, as는 별칭이며 임포트 성공 시 출력이 없다.
