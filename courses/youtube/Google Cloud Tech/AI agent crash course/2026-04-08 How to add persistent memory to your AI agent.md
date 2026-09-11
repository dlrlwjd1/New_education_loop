# How to add persistent memory to your AI agent

## 개요
- 업로드일: 2026-04-08
- 채널: Google Cloud Tech (발표자: Annie Wang)
- 재생목록: AI agent crash course (agent memory series 2편, [1편 - 단기 기억(Sessions & State)](2026-03-26%20How%20to%20add%20short-term%20memory%20to%20your%20AI%20agent%20%28Sessions%20%26%20State%20Explained%29.md) 후속)
- 1편에서 세션(session)·상태(state)로 단기 기억을 만들었지만 앱이 재시작되면 모두 사라졌다. 이번 편에서는 (1) 데이터베이스 세션 서비스로 대화를 영속화하고, (2) 사용자 선호도(user preference) 저장소를 추가해 새로운 대화에서도 사용자를 기억하게 만드는 두 가지를 다룬다.

## 내용

### 1. 데이터베이스 세션 서비스로 대화 영속화
- 1편에서는 `InMemorySessionService`를 사용했다. 이번엔 데이터베이스 파일이나 Postgres 같은 데이터베이스에 기록하는 **데이터베이스 세션 서비스**로 교체한다.
- 교체 후에는 모든 사용자 메시지, 에이전트 응답, 상태 변경이 디스크에 저장된다. 앱이 재시작되어도 같은 세션 ID로 돌아오면 세션 서비스가 전체 기록과 최신 상태를 불러와 대화를 이어간다.
- `get_or_create_session` 헬퍼 함수를 사용해, 세션이 있으면 재개(resume)하고 없으면 새로 만든다. 에이전트 로직 자체는 바꿀 필요 없이 **저장 엔진만 교체**하면 된다.
- ADK가 제공하는 세션 서비스 종류:
  - **InMemorySessionService**: 빠르지만 임시적. 재시작하면 초기화됨 (1편에서 사용).
  - **DatabaseSessionService**: 직접 소유한 데이터베이스에 저장. 재시작 후에도 대화 유지.
  - **VertexAiSessionService**: Google Cloud에서 관리되는 서비스. 다음 편(Memory Bank)에서 자세히 다룸.

### 2. 장기 개인화를 위한 사용자 선호도 저장소
- 영속 세션(persistent session)은 **같은 대화**를 이어갈 수 있게 해주지만, 사용자가 다음 주에 **새로운 세션 ID**로 새 채팅을 열면 참고할 대화 기록이 없다.
- 그래서 사용자 ID·선호도 키(preference key)별로 한 행(row)씩 저장하는 작은 데이터베이스 테이블을 추가한다. 예: 식단 선호(dietary), 테마(theme), 이동 수단(transport mode).
- 에이전트에게 두 가지 도구(tool)를 준다:
  - **recall_user_preference**: 해당 사용자에 대해 저장된 선호도를 모두 읽어온다.
  - **save_user_preference**: 새 키를 추가하거나 기존 키를 갱신한다.
  - 두 도구 모두 현재 사용자 ID가 담긴 context를 받아서, 읽기·쓰기가 올바른 사람에게 연결되도록 한다.
- 에이전트 지시문(instruction) 설계: (1) 대화 시작 시 반드시 먼저 `recall_user_preference` 호출 → (2) 이를 바탕으로 개인화된 계획 제시 → (3) 계획 후 새로 기억할 것이 있는지 질문 → (4) 사용자가 새로운 사실을 알려주면 끝나기 전에 `save_user_preference` 호출.

### 데모 흐름
- 턴 1 (첫 사용자): "여행 계획 도와줘" → 에이전트가 지시대로 먼저 `recall_user_preference` 호출 (아무것도 없음) → 계획 제안 + "기억해둘 선호사항이 있나요?" 질문.
- 턴 2: 사용자가 "나는 채식주의자(vegetarian)라는 걸 저장해줘" → 에이전트가 `save_user_preference` 호출 → 저장 성공 확인.
- 앱 재시작 시뮬레이션: 메모리(RAM)는 사라지지만, 세션은 디스크에, 선호도는 테이블에 남아있음.
- 다음 주, 새 세션 ID로 "저 다시 왔어요, 여행 계획 짜줘" → 에이전트가 `recall_user_preference` 호출 → `dietary = vegetarian` 행을 찾아 바로 개인화된 계획 제시.
- 이는 두 가지를 동시에 증명한다: (1) 영속 세션이 재시작 후에도 기존 대화를 이어가게 함, (2) 사용자 선호도 저장소가 완전히 새로운 대화에서도 같은 사람을 개인화할 수 있게 함.

## 예시
개념 요약 코드:
```python
from google.adk.sessions import DatabaseSessionService

session_service = DatabaseSessionService(db_url="sqlite:///./sessions.db")

async def get_or_create_session(app_name, user_id, session_id):
    session = await session_service.get_session(
        app_name=app_name, user_id=user_id, session_id=session_id
    )
    if session is None:
        session = await session_service.create_session(
            app_name=app_name, user_id=user_id, session_id=session_id
        )
    return session

def recall_user_preference(tool_context) -> dict:
    user_id = tool_context.state["user_id"]
    return db.get_preferences(user_id)  # 예: {"dietary": "vegetarian"}

def save_user_preference(tool_context, key: str, value: str) -> str:
    user_id = tool_context.state["user_id"]
    db.upsert_preference(user_id, key, value)
    return "saved"
```

## 요약
- **DatabaseSessionService**로 교체하면 앱 재시작에도 대화가 끊기지 않는다 (에이전트 로직은 그대로, 저장 엔진만 교체).
- **사용자 선호도 저장소** + `recall_user_preference`/`save_user_preference` 도구로 완전히 새로운 대화에서도 사용자를 개인화할 수 있다.
- 다음 편에서는 구조화된 선호도를 넘어, 텍스트·이미지·오디오·비디오를 포함한 전체 대화를 아카이빙하고 의미 기반 검색(search by meaning)으로 필요한 사실을 불러오는 **Memory Bank(장기 기억)**를 다룬다.
