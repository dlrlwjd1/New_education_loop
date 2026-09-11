# Demonstration: Installing CrewAI with uv

## 개요
- `uv` package manager로 CrewAI CLI를 설치·검증하고 새 crew project scaffold를 생성한다.

## 내용
- Astral의 공식 설치 방법으로 `uv`를 설치하고 `uv --version`으로 확인한다.
- `uv tool install crewai`로 CLI를 설치하며 PATH 경고가 있으면 shell update 후 terminal을 다시 연다.
- `uv tool list`로 설치 상태를 확인하고 필요할 때 upgrade한다.
- Project root에서 `crewai create crew <project-name>`을 실행해 기본 directory와 file을 생성한다.
- Prompt에서 LLM provider와 model을 선택하고 API credential을 안전하게 설정한다.

## 예시
```bash
uv --version
uv tool install crewai
crewai create crew first_ai_agent
```

## 요약
- `uv`는 CrewAI CLI와 dependency를 빠르고 일관되게 관리하고 표준 project scaffold를 만든다.
