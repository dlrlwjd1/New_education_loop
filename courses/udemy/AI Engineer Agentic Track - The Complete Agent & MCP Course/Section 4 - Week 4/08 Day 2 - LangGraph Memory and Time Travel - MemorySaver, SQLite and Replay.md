# Day 2 - LangGraph Memory and Time Travel: MemorySaver, SQLite and Replay

## 개요
- MemorySaver와 SQLite로 대화를 보존하고 과거 체크포인트에서 재개한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821339#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 대화 식별과 저장
checkpointer를 연결하고 호출마다 같은 thread ID 설정을 전달한다. 이름을 알려 준 뒤 다시 묻는 실험으로 기억을 확인한다. SQLite saver를 사용하면 파일 DB에 상태가 저장되는 것도 확인할 수 있다.

### 상태와 이력
get_state로 현재 메시지를, get_state_history로 과거 체크포인트를 살펴본다. 대화 두 번에도 시작·입력·노드 실행 단계 때문에 체크포인트는 더 많이 생긴다.

### 재개 실험
이름을 알려 준 직후의 checkpoint 설정으로 돌아가 후속 질문을 실행한다. 복잡한 작업 흐름에서도 해당 시점의 상태로 이어 갈 수 있다는 것이 핵심이다. LangSmith에서는 검색·알림 등 실제 호출을 별도로 확인한다.

## 예시
```text
같은 thread: 이름 전달 → 이름 질문 → 기억 확인
과거 checkpoint 선택 → 그때의 상태로 후속 질문
다른 thread: 별도 대화 상태
```

## 요약
- checkpointer와 thread 설정을 함께 사용한다.
- 상태 이력을 통해 재개할 지점을 선택할 수 있다.
