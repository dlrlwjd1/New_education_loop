# Day 1 - ADK Agent Loop with MCP Tools and the ADK Web Dashboard

## 개요
- ADK에 파일 시스템 MCP를 연결하고 번역 목표를 수행한 뒤 웹 대시보드에서 관측한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821589#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 파일 도구 연결
stdio 서버 설정을 MCPToolset에 전달한다. 허용된 작업 디렉터리의 notes.txt를 읽어 요약하게 해 연결을 먼저 확인한다.

### 목표 기반 루프
보드에 notes.txt를 스페인어로 번역해 Spanish.txt에 저장하고 알리라는 목표를 넣는다. 에이전트는 목표를 하위 단계로 나눠 실행하고 보드 상태를 완료로 바꾼다. 기존 출력 파일은 결과 검증을 방해하지 않도록 실습 시작 전에 구분한다.

### 모듈과 대시보드
worker.py로 같은 작업을 실행한다. ADK web에서는 task worker를 선택하고 도구 사용과 작업 흐름을 시각적으로 확인한다. 실행 디렉터리에 따라 발견되는 앱이 달라진다.

## 예시
```text
보드 목표 → 파일 읽기 → 번역 → 파일 저장 → 완료 표시
검증: Spanish.txt 내용 + 보드 + ADK web의 도구 호출
```

## 요약
- 도구 연결부터 작은 호출로 검증한다.
- 노트북·모듈·대시보드에서 같은 작업 흐름을 확인한다.
