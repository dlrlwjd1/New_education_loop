# Day 5 - Turn Your Deep Research Agent into Python Modules for Deploy

## 개요
- 노트북의 Deep Research를 네 개의 에이전트 모듈과 ResearchManager로 분리한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49820807#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 에이전트 모듈
검색·계획·보고서 작성·메일 발송을 각각 Python 모듈에 둔다. 검색 에이전트에는 hosted web search tool을, 계획·작성 에이전트에는 Pydantic 출력 타입을 연결한다. 검색과 메일 발송은 도구 사용을 필수로 설정한다.

### 설정과 실행 흐름
모델과 검색 횟수는 환경변수로 바꾸고 기본값을 둔다. `USE_EMAIL=false`이면 알림 전송으로 바꾼다. ResearchManager에는 계획, 검색 묶음 실행, 개별 검색, 보고서 작성, 발송 함수를 모은다. 검색 묶음 안에서는 `asyncio.gather`로 여러 검색을 동시에 기다린다.

### 진행 상태 전달
`run`은 각 단계에서 `yield`로 상태를 내보내는 비동기 제너레이터다. Gradio가 이 값을 받아 장시간 작업의 진행 상태를 화면에 갱신한다. 노트북에서 프롬프트를 다듬은 뒤 모듈로 옮기는 순서가 강조된다.

## 예시
```text
질문 → 계획 생성 → 여러 검색 → 보고서 작성 → 발송
       각 단계의 상태를 yield → Gradio 표시
```

## 요약
- 에이전트 정의와 실행 조율을 분리한다.
- yield는 중간 상태를 UI로 전달하는 연결점이다.
