# Day 5 - Inside the Agent Loop: Orchestrator, QA and CSS Agents

## 개요
- Agent Loop의 조율자·QA·공통 CSS 에이전트와 실행 설정을 살펴본다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821665#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 조율자 모듈
기존 worker는 번역 전용이 아니라 보드의 임의 목표를 수행하는 일반 작업자다. 조율자는 이들을 하위 프로세스로 실행한다. 프롬프트를 별도 파일에 두고 언어 학습 게임 제작이라는 전체 요구를 전달한다.

### QA와 CSS
QA 에이전트는 Playwright MCP로 사이트를 실제 사용해 검사한다. CSS 에이전트는 여러 게임에 공통 적용할 스타일을 만드는 명확한 과제를 맡는다. 공통 스타일을 각 worker에게 중복 생성시키지 않는 구성이다.

### 실행 설정
조율자와 worker 모델을 정하고 agent_loop.py로 실행한다. 언어나 사용할 프레임워크를 선택하는 옵션도 제공한다. 비용과 결과를 비교할 수 있도록 모델 설정을 분리한다.

## 예시
```text
프롬프트: 전체 사이트 목표
조율자: worker 실행·통합
CSS: 공통 스타일
QA: 브라우저 동작 확인
```

## 요약
- 과제 지침과 프로세스 실행 코드를 분리한다.
- QA는 생성 텍스트보다 실제 브라우저 동작을 검사한다.
