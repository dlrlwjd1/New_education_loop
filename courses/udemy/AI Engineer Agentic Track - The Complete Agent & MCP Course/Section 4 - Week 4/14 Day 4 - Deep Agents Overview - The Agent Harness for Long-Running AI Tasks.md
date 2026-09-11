# Day 4 - Deep Agents Overview: The Agent Harness for Long-Running AI Tasks

## 개요
- Deep Agents가 장시간 작업을 위한 실행 환경과 기본 도구를 제공하는 방식을 소개한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821363#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 실행 환경의 범위
create_agent 위에 파일 시스템, 할 일 목록, 하위 에이전트 위임 기능을 더한다. 단순한 한 번의 답변보다 큰 목표를 받고 필요한 단계를 스스로 선택하는 작업에 초점을 둔다.

### 도구와 자율성
에이전트는 작업을 나누고 기록을 남기며 필요할 때 하위 에이전트에게 맡긴다. 이런 환경 전체를 agent harness라고 설명한다. 모델 호출을 추상화하는 라이브러리와 그 모델이 활동할 환경을 제공하는 계층을 구분한다.

## 예시
```text
큰 목표
→ 할 일 계획 → 파일 기록 → 하위 과제 위임
→ 결과 통합 → 최종 산출물
```

## 요약
- harness는 모델뿐 아니라 작업 환경을 포함한다.
- Deep Agents는 기존 계층 위에 기본 기능을 더한다.
