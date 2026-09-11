# Environment check for Windows

## 개요

- Windows에서 VS Code로 Python 개발 환경을 설정하고 올바른 인터프리터를 지정하는 실습

## 내용

### 설정 절차

1. Windows 시작 메뉴에서 Visual Studio Code 검색·실행
2. 시작 화면의 **"Get started with Python Development"** 가이드 활용
3. **Python 설치 확인**: 터미널(Terminal → New Terminal)에서 `python --version` — Python 3.10 확인
4. **Python 파일 생성**: 가이드의 Create a Python File → `print("Hello World")` 입력 → File → Save As → **hello_world.py** (**.py 확장자 필수**)
5. **인터프리터 선택**: Select Python Interpreter → 설치된 버전 중 최신(3.10)을 지정 — 스크립트 실행 시 올바른 인터프리터가 선택되도록
6. **실행 확인**: 우상단 재생(Play) 버튼의 드롭다운에서 Run Python File(디버그 실행 옵션도 있음) → 터미널에 Python 3.10 인터프리터로 hello world 출력

## 요약

- VS Code 설정의 핵심은 Python 설치 확인 → .py 파일 생성 → 올바른 인터프리터 선택 → 실행 검증이다.
- 인터프리터를 정확히 지정해야 IDE에서 스크립트 실행·디버그가 올바로 동작한다.
