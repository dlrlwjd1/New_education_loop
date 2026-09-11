# Try Out the README Agent with the Decorator

## 개요
- [03 Refactoring Our README Agent](03%20Refactoring%20Our%20README%20Agent.md)에서 데코레이터로 리팩터링한 README 에이전트를 직접 실행해보는 실습(Reading).

## 내용
- 노트북: https://colab.research.google.com/drive/1p_Lh_pjdIFMLXRJ1VUZdOGGniy6tWnRo?usp=sharing
- **주의**: 노트북이 실행되는 디렉토리에 Python 파일을 몇 개 추가해둘 것 — 그렇지 않으면 에이전트가 README를 생성할 정보가 없다.

### 선택 연습 문제
> 에이전트가 하위 디렉토리(subdirectories)까지 탐색해서 그 안의 소스 파일도 발견할 수 있도록 수정할 수 있는가?
- 힌트: `list_project_files` 도구를 하위 디렉토리까지 재귀적으로 탐색하도록 수정하고, `@register_tool`의 docstring/설명도 그에 맞게 갱신해야 할 것이다.

## 요약
- [03](03%20Refactoring%20Our%20README%20Agent.md)의 데코레이터 기반 README 에이전트를 실제 프로젝트 파일에 대해 실행하며 동작을 확인하고, 하위 디렉토리 탐색 기능을 직접 추가해보는 확장 연습까지 포함된 핸즈온 실습.
