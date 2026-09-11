# Day 5 - The Agent Loop Project: Multi-Framework Agent Architecture

## 개요
- ADK 조율자와 여러 프레임워크의 worker를 중첩 루프로 연결하는 프로젝트를 설계한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821651#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 바깥 루프와 안쪽 루프
ADK orchestrator가 전체 목표를 관리하고 기존 worker 프로세스에 과제를 배정한다. 각 worker는 공유 보드의 목표를 읽고 자기 도구 루프로 처리한다. 언어 학습 게임 여러 개를 만들어 하나의 사이트로 묶는다.

### 품질 확인
Playwright를 사용하는 QA 에이전트가 브라우저에서 결과를 검사한다. 분리는 사람 역할을 흉내 내기보다 독립 과제와 검증을 위해 사용한다.

### 조율 방식의 선택
이미 자신이 실행하는 에이전트들을 연결하는 데 A2A가 필수는 아니다. 고정 순서라면 Python 호출이 더 예측 가능하다. 이 예제는 조율자의 선택·반복 자유를 보여주기 위해 LLM 기반 흐름을 사용한다.

## 예시
```text
ADK 조율자 루프
→ 여러 worker의 도구 루프
→ 결과 통합 → 브라우저 QA → 필요 시 보완
```

## 요약
- 공유 보드가 서로 다른 프레임워크의 작업 계약이 된다.
- LLM 조율의 유연성과 실행 예측 가능성을 비교한다.
