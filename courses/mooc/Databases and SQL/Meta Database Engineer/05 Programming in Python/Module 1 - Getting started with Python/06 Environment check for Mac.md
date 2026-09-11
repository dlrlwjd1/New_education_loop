# Environment check for Mac

## 개요

- Mac에서 VS Code로 Python 개발 환경을 설정하고 올바른 인터프리터를 지정하는 실습

## 내용

### 설정 절차

1. Launchpad에서 VS Code 실행 → 웰컴 화면의 **"Get started with Python Development"** 가이드 (안 보이면 More 클릭)
2. **버전 확인**: 터미널에서 `python --version` → 3.10 확인
   - **주의**: Mac은 기본으로 Python 2.7이 깔려 있다 — 이 버전이 아니라 최신 버전을 써야 한다.
3. **파일 생성**: `print("Hello World")` 작성 → hello_world.py로 저장 (.py 확장자 필수)
4. **인터프리터 선택**:
   - 가이드의 Select Python Interpreter, 또는 **Cmd+Shift+P** → "Python: Select Interpreter"
   - 여러 버전이 있을 때 **Homebrew로 설치한 권장(recommended) 버전** 선택 — 설치된 것 중 최신인지 확인
5. **실행**: 우상단 재생 버튼 → Run Python File → 터미널에서 출력 확인

## 요약

- Mac 설정의 요점은 기본 Python 2.7이 아닌 Homebrew 최신 버전을 인터프리터로 지정하는 것이다.
- Cmd+Shift+P의 Python: Select Interpreter로 언제든 인터프리터를 바꿀 수 있다.
