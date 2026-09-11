# Lab: Email Assistant Workflow

## 개요

AISuite + 시뮬레이션 이메일 서비스로 멀티 툴 에이전트를 직접 구현하는 실습.
자연어 명령 → 에이전트가 툴 선택 → 멀티스텝 작업 자동 완료.

## 시스템 구성

```
[사용자 자연어 명령]
        ↓
  [LLM (GPT-4o/o4-mini)]  ← 툴 목록 제공
        ↓ 툴 호출 결정
  [email_tools.py]  ← Python 함수들
        ↓ HTTP 요청
  [FastAPI 서버]  ← 실제 REST 엔드포인트
        ↓
  [SQLite DB]  ← 시뮬레이션 이메일 저장소
```

| 레이어 | 역할 |
|--------|------|
| FastAPI | REST 엔드포인트 노출 |
| SQLite + SQLAlchemy | 이메일 로컬 저장/조회 |
| Pydantic | 입출력 유효성 검증 |
| AISuite tools | LLM ↔ 서비스 연결 |

## 사용 가능한 툴 목록

| 툴 함수 | 동작 |
|---------|------|
| `list_all_emails()` | 전체 이메일 조회 (최신순) |
| `list_unread_emails()` | 읽지 않은 이메일만 조회 |
| `search_emails(query)` | 제목/본문/발신자 키워드 검색 |
| `filter_emails(...)` | 수신자/날짜 범위로 필터 |
| `get_email(email_id)` | 특정 이메일 조회 |
| `mark_email_as_read(id)` | 읽음 처리 |
| `mark_email_as_unread(id)` | 읽지 않음 처리 |
| `send_email(...)` | 이메일 전송 |
| `delete_email(id)` | 이메일 삭제 |
| `search_unread_from_sender(addr)` | 특정 발신자의 읽지 않은 이메일 |

## 에이전트 프롬프트 구조

```python
def build_prompt(request_: str) -> str:
    return f"""
- You are an AI assistant specialized in managing emails.
- You can perform various actions such as listing, searching, filtering, and manipulating emails.
- Use the provided tools to interact with the email system.
- Never ask the user for confirmation before performing an action.
- If needed, my email address is "you@email.com"

{request_.strip()}
"""
```

핵심 설계 선택:
- "확인 없이 바로 실행" — Human-in-the-loop 없는 완전 자율 에이전트
- 시스템 컨텍스트(역할, 권한, 이메일 주소)를 프롬프트에 명시

## 에이전트 실행 코드

```python
response = client.chat.completions.create(
    model="openai:gpt-4.1",
    messages=[{"role": "user", "content": prompt_}],
    tools=[
        email_tools.search_unread_from_sender,
        email_tools.list_unread_emails,
        email_tools.search_emails,
        email_tools.get_email,
        email_tools.mark_email_as_read,
        email_tools.send_email,
    ],
    max_turns=5,
)
```

## 핵심 실험: 툴 유무에 따른 차이

### 시나리오: "alice@work.com 이메일 삭제해줘"

| 상황 | 결과 |
|------|------|
| `delete_email` 툴 없음 | LLM이 추론은 하지만 실제 삭제 불가 |
| `delete_email` 툴 있음 | `search_emails` → `delete_email` 순서로 자동 완료 |

> **에이전트의 실제 능력 = 제공된 툴 목록**
> 툴이 없으면 말만 하고 행동하지 못함.

### 멀티스텝 자동 실행 예시

요청: "boss@email.com 읽지 않은 이메일 확인하고 읽음 처리 후 정중한 답장 보내줘"

```
1. search_unread_from_sender("boss@email.com") → 이메일 목록 반환
2. mark_email_as_read(id) → 읽음 처리
3. send_email("boss@email.com", ...) → 답장 전송
```

## 툴 설계 원칙

1. **docstring을 명확하게** — AISuite가 docstring으로 JSON schema를 생성하므로 LLM이 언제 호출할지 판단하는 근거가 됨
2. **툴 하나 = 역할 하나** — 단일 책임 원칙 (single route, single effect)
3. **일관된 JSON 반환** — LLM이 이전 툴 결과를 다음 툴에 체이닝할 수 있도록

## AISuite가 처리하는 것들

개발자가 신경 쓰지 않아도 되는 것:
- JSON schema 생성 (docstring 기반 자동화)
- 함수 인자 바인딩
- 함수 실행
- 결과를 LLM에 다시 전달
- 다음 툴 호출 여부 판단 루프

개발자가 집중할 것: **어떤 툴을 노출할지**, **무엇을 달성할지**

## 요약

- Tool Use = 자연어 → 실제 시스템 액션의 브릿지
- 제공된 툴이 에이전트의 능력을 결정함 (없으면 추론만, 있으면 실행)
- AISuite는 툴 연결의 boilerplate를 자동화
- 프롬프트에 역할·권한·컨텍스트를 명시하면 에이전트가 확인 없이 자율 실행

## 다음 주제

코드 실행 툴 (Code Execution Tool) — 특별히 강력한 툴
