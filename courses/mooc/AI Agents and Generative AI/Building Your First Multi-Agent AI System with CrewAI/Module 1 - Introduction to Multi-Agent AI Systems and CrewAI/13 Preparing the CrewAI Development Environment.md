# Preparing the CrewAI Development Environment

## 개요
- CrewAI 개발에 필요한 Python, 격리 환경, library·LLM 설정과 보안·재현성 원칙을 정리한다.

## 내용
- Python 3.10 이상, virtual environment와 VS Code 같은 IDE를 준비한다.
- `pip` 또는 `uv`로 CrewAI, LLM SDK와 configuration library를 격리된 환경에 설치한다.
- Provider API key는 환경 변수로 관리하고 model name·temperature와 필요한 search/code tool을 설정한다.
- 간단한 agent를 먼저 실행해 model connection과 tool integration을 검증한다.
- Version pinning, development/test/production 환경 분리, logging·monitoring을 적용한다.

## 예시
```text
Python 3.10+ -> virtual env -> CrewAI/LLM SDK -> .env secrets -> smoke test
```

## 요약
- 깨끗하고 보안성 있는 재현 가능한 환경은 multi-agent application 안정성의 출발점이다.
