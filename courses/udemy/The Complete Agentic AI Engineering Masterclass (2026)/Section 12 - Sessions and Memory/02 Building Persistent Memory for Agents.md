# Building Persistent Memory for Agents

## 개요
- 세션 기록을 SQLite에 저장해 런타임 재시작 후에도 대화를 복구한다.

## 내용
### Database Session Service
운영 환경에서는 휘발성 `InMemorySessionService` 대신 `DatabaseSessionService`를 사용한다. 강의는 SQLite 데이터베이스 URL을 연결하고 Runner에 세션 서비스를 전달한다.

같은 Session ID를 사용하면 저장된 대화를 이어 갈 수 있다. 다른 Session ID에서는 이전 이름을 기억하지 못하므로 세션 간 데이터가 격리됨을 확인한다.

## 예시
```text
Agent + App ID + DatabaseSessionService
→ Runner
→ SQLite에 이벤트와 상태 저장
```

## 요약
- 운영 환경의 세션은 영속 데이터베이스에 저장한다.
- 사용자와 세션 사이의 데이터 격리를 검증해야 한다.
