# Demonstration: Project Structure and File Organization

## 개요
- CrewAI scaffold의 directory·file 책임과 실행 진입점을 이해한다.

## 내용
- `.venv`는 dependency 격리, `knowledge/`는 agent가 사용할 외부 문서·data를 보관한다.
- `src/.../config/agents.yaml`과 `tasks.yaml`은 역할·행동과 task 정의를 code에서 분리한다.
- `tools/`는 built-in·custom tool, `crew.py`는 agent·task 조립과 orchestration을 담당한다.
- `main.py`는 input을 준비하고 crew를 시작하는 entry point다.
- `tests/`, `.gitignore`, `pyproject.toml`, `README.md`로 검증, 비밀·생성물 제외, dependency와 사용법을 관리한다.

## 예시
```text
project/
  knowledge/  src/project/{config,tools,crew.py,main.py}
  tests/  pyproject.toml  README.md
```

## 요약
- 역할·task configuration, tool, orchestration과 entry point를 분리하면 CrewAI project가 확장·테스트 가능해진다.
