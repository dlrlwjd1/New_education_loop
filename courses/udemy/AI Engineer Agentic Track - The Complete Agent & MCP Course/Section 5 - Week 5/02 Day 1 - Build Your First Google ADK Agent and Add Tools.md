# Day 1 - Build Your First Google ADK Agent and Add Tools

## 개요
- Google ADK의 LlmAgent·Runner와 Python 함수 도구를 실습한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821583#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 에이전트 실행
LlmAgent에 모델·이름·instruction을 지정하고 InMemoryRunner로 실행한다. instruction은 단수형 인수다. 간단한 한 문장 응답부터 확인한다.

### 공유 할 일 보드
SQLite 기반 board 모듈에 목표와 하위 단계를 저장한다. show todos·plan steps·complete task 함수는 이 모듈을 감싼다. ADK에는 타입 힌트와 docstring이 있는 Python 함수를 도구로 바로 전달할 수 있다.

### 도구 확인
에이전트가 보드의 현재 목표를 읽는지 확인하고 Pushover 알림 함수를 추가한다. 여러 프레임워크가 같은 보드를 쓰도록 업무 저장소와 프레임워크 연결 코드를 구분한다.

## 예시
```text
SQLite 보드 ← Python 함수 도구 ← LlmAgent
목표 조회 → 계획 작성 → 단계 완료 표시
Runner가 에이전트 실행을 담당
```

## 요약
- 함수의 타입과 설명이 ADK 도구 인터페이스가 된다.
- 공유 보드와 에이전트 프레임워크를 분리한다.
