# Day 2 - LangSmith, Supersteps and Checkpointers for LangGraph Agents

## 개요
- LangSmith 관측과 LangGraph의 superstep·checkpoint 개념을 연결한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821335#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 실행 관측
LangSmith 설정에서 tracing·endpoint·API key·project 환경값을 준비하고 다시 로드한다. 실행별 모델·도구 호출, 토큰, 지연 시간을 살펴본다. 영상의 요금·무료 할당량은 촬영 당시 안내다.

### superstep
한 단계에서 활성화된 노드들이 수행되는 실행 단위다. 여러 도구가 같은 단계에서 실행될 수 있다. 한 번의 graph.invoke는 전체 애플리케이션 실행이며 여러 superstep으로 구성될 수 있다.

### 체크포인트
단계별 상태를 저장하면 특정 시점의 상태·이력을 읽고 이어서 실행할 수 있다. thread ID는 대화 흐름을 구분한다. 체크포인트는 단순 로그와 달리 이후 실행에 사용할 상태를 보존한다.

## 예시
```text
invoke 한 번
→ 모델 단계 → 도구 단계 → 모델 단계
각 단계의 상태 → checkpointer
호출·지연·토큰 관측 → LangSmith
```

## 요약
- invoke 횟수와 superstep 수는 같지 않다.
- 체크포인트와 관측 trace의 용도를 구분한다.
