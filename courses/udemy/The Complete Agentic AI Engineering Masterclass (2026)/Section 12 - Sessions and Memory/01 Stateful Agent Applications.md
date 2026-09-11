# Stateful Agent Applications

## 개요
- 세션과 이벤트를 사용해 이전 대화를 기억하는 에이전트를 만든다.

## 내용
### 세션 구성
세션(session)은 특정 사용자와 에이전트 사이의 연속 대화 기록이다. 사용자 입력, 에이전트 응답과 도구 호출은 이벤트(event)다.

App ID, User ID, Session ID가 애플리케이션·사용자·대화 흐름을 식별한다. Session Service는 세션을 생성·저장·조회하고 Runner는 사용자와 에이전트 사이의 실행을 조정한다.

`InMemorySessionService`를 사용하면 같은 세션에서 이름을 기억하지만 런타임을 재시작하면 기록이 사라진다.

## 예시
```text
"내 이름은 Javin이야"
→ 같은 Session ID
→ "내 이름이 뭐야?"에 Javin이라고 응답
```

## 요약
- 세션은 대화 컨테이너이고 이벤트는 개별 상호작용이다.
- 인메모리 세션은 개발·테스트용 휘발성 저장소다.
