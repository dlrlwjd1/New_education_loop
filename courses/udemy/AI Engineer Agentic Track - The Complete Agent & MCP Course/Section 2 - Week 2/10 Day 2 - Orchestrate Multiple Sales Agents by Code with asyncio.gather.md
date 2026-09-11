# Day 2 - Orchestrate Multiple Sales Agents by Code with asyncio.gather

## 개요
- 세 영업 에이전트를 동시에 실행하고 후보 선택·전달을 코드로 연결한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49820467#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 서로 다른 세 프롬프트
가상의 SOC 2 준비 SaaS 회사 Comply를 배경으로 전문적인 스타일, 유머 있는 스타일, 바쁜 임원처럼 간결한 스타일의 에이전트를 만든다. 같은 모델을 사용하면서 시스템 지시만 바꾸어 초안을 비교한다.

### asyncio.gather로 초안 생성
세 `Runner.run`을 `asyncio.gather`에 전달하고 하나의 trace로 묶는다. 완료된 `final_output`들을 모아 Sales Picker의 입력으로 전달한다. Picker는 고객이라면 답하고 싶은 이메일 하나를 고르되 설명 없이 선택한 본문만 반환한다.

### 선택에서 전달까지
제목·텍스트·HTML 본문을 받는 함수를 `@function_tool`로 꾸민다. 타입 힌트와 docstring의 인자 설명이 스키마에 반영되는지 확인한다. 선택 에이전트가 전달 도구를 쓰지 않는 경우를 발견해 `ModelSettings(tool_choice="required")`를 사용한다.

### 추적과 결과 확인
trace에서 세 초안 생성의 시간이 겹치고 이후 선택·전달이 실행되는지 본다. 선택한 초안과 실제 받은 메일을 비교한다. 병렬 실행은 gather가 구성한 것이며, 코드로 경로를 정해도 매번 선택되는 이메일은 달라질 수 있다.

## 예시
```text
trace
├─ gather: 전문적 초안 / 유머 초안 / 간결한 초안
└─ 후보 본문 결합 → Sales Sender → 전달 도구
```

관찰할 항목은 후보 생성의 동시 진행, 선택된 본문, 실제 전달 결과다.

## 요약
- 서로 다른 스타일은 모델 수보다 프롬프트 차이로 만든다.
- gather가 초안 생성을 함께 진행하고 코드는 다음 단계를 연결한다.
- 도구 호출을 요구하는 설정과 실제 전달 확인을 함께 사용한다.
