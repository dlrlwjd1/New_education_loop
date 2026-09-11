# Day 2 - Run a Pydantic AI Agent in Python and Wrap Up Strands

## 개요
- Pydantic AI의 번역 에이전트를 Python 모듈로 실행하고 보드·파일을 확인한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821613#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 모듈 실행
실습 폴더에서 pydantic_worker.py를 실행한다. 목표를 보드에 넣고 에이전트가 단계들을 수행하는 동안 SQLite 파일과 완료 상태가 갱신된다. 최종 번역과 Spanish.txt를 확인한다.

### 비교 관점
Strands·ADK·Pydantic AI의 문법은 다르지만 모델·지침·도구·목표 기반 반복이라는 구조는 같다. Pydantic AI의 함수 도구는 데코레이터 없이도 연결할 수 있다. 노트북을 벗어난 모듈 실행으로 통합할 준비를 한다.

## 예시
```bash
uv run pydantic_worker.py
```

해당 실습 모듈이 있는 디렉터리에서 실행한 뒤 보드와 출력 파일을 확인한다.

## 요약
- 노트북과 모듈에서 동일 목표가 완료되는지 검증한다.
- 프레임워크 문법보다 공통 실행 구조를 익힌다.
