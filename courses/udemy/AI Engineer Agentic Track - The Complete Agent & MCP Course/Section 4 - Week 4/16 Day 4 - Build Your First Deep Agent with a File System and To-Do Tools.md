# Day 4 - Build Your First Deep Agent with a File System and To-Do Tools

## 개요
- Deep Agent에게 작업 폴더와 계획·검색 도구를 주고 충전망 조사 문서를 만든다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821381#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 작업 환경
sandbox를 파일 backend로 연결하고 검색 도구와 시스템 지침을 전달한다. 계획을 세우고 조사한 뒤 Markdown 브리핑을 저장하도록 한다. 할 일과 파일 도구는 harness가 제공한다.

### 실제 과제
미국 공공 전기차 충전망 규모와 주요 두 공급자를 조사해 charging.md를 작성하게 한다. 실행 뒤 write_todos, 검색, 파일 작성 호출과 실제 생성 파일을 확인한다. 영상에서는 EVgo와 Electrify America에 관한 브리핑이 생성된다.

### 내부 그래프
Deep Agent도 LangGraph 기반이며 모델 전후에 추가 middleware가 있다. 기본 에이전트보다 실행 환경을 관리하는 구성이 더 들어가는 것을 그래프로 확인한다.

## 예시
```text
충전망 조사 요청 → 할 일 작성 → 검색
→ charging.md 저장 → 할 일 완료 갱신
검증: 도구 호출 목록과 sandbox의 문서 확인
```

## 요약
- backend가 파일 작업 공간을 정한다.
- 기본 제공 도구가 실제 사용됐는지 확인한다.
