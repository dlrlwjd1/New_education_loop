# Demonstration: Setting Up a Virtual Environment

## 개요
- Project dependency를 격리하기 위해 VS Code에서 Python virtual environment를 생성·활성화한다.

## 내용
- Project folder를 열고 integrated terminal의 현재 경로가 project root인지 확인한다.
- `python -m venv .venv`로 project 전용 interpreter와 site-packages를 만든다.
- Windows에서는 `.venv\Scripts\activate`, macOS/Linux에서는 `source .venv/bin/activate`로 활성화한다.
- VS Code의 `Python: Create Environment` 명령으로 생성하고 interpreter를 선택할 수도 있다.
- 활성화 후 설치한 dependency는 다른 Python project와 충돌하지 않는다.

## 예시
```bash
python -m venv .venv
source .venv/bin/activate
python -m pip --version
```

## 요약
- Virtual environment는 dependency stability, reproducibility와 deployment 준비를 위한 기본 격리 단위다.
