# AI agent long-term memory with memory bank

## 개요
- 업로드일: 2026-04-16
- 채널: Google Cloud Tech (발표자: Annie Wang)
- 재생목록: AI agent crash course (agent memory series 3편/완결편, [2편 - 영속 기억](2026-04-08%20How%20to%20add%20persistent%20memory%20to%20your%20AI%20agent.md) 후속)
- 여러 대화(conversation)에 걸쳐, 그리고 텍스트뿐 아니라 이미지·오디오·비디오까지 포괄하는 **장기 기억(long-term memory)**을 Vertex AI Memory Bank로 구축하는 방법을 다룬다.

## 내용

### 세션 서비스 vs 메모리 서비스
- **세션 서비스(session service)**: 현재 진행 중인 대화를 관리하고, 살아있는 대화를 재개(resume)할 수 있게 해준다.
- **메모리 서비스(memory service)**: 장기 아카이브(archive)를 관리한다. 서류 보관함(filing cabinet)에 비유할 수 있다.

### 메모리 서비스의 두 가지 옵션
- **인메모리 메모리 서비스(in-memory memory service)**: 빠른 로컬 테스트에 적합. 재시작 시 저장되지 않고, 기본적인 키워드 검색만 지원.
- **Vertex AI Memory Bank 서비스**: 클라우드에 저장되며 의미 기반 검색(semantic search)을 지원한다. 예를 들어 "two-wheeled vehicle(이륜차)"로 검색해도 "자전거(bicycle)"에 관한 기록을 찾을 수 있다.
- 이 영상에서는 Vertex AI Memory Bank 서비스와, Agent Engine이 구동하는 Vertex AI Session Service를 함께 사용한다. Agent Engine은 Gemini로 대화·미디어에서 사실(fact)을 추출하고, 임베딩(embedding)을 생성해 텍스트가 아닌 **의미(meaning)** 자체를 저장·검색할 수 있게 한다.

### Memory Bank 설정
- Memory Bank를 구동하는 Agent Engine을 구성할 때 두 가지 모델을 선택한다: (1) 대화·미디어에서 사실을 추출하는 모델, (2) 그 사실을 검색 가능하게 임베딩하는 모델.
- 저장할 내용을 정리하기 위한 주제(topic)를 정의할 수 있다 (예: 사용자 선호도, 여행 경험).
- Memory Bank는 단순한 테이블이 아니라, 콘텐츠를 처리해 유용한 사실을 찾아내고 검색 가능하게 만드는 **서비스**임을 기억해야 한다.

### 기억을 저장하는 두 가지 방법
1. **`add_session_to_memory`**: 세션이 끝날 때 전체 대화를 아카이빙한다. Memory Bank가 사용자 메시지, 에이전트 응답, 이미지/비디오/오디오 참조를 처리해 핵심 사실을 저장한다.
2. **직접 사실 업로드**: 파일에서 미리 불러오거나(preload), 이미지·비디오·오디오 파일을 텍스트 맥락과 함께 보내 사실을 생성·저장할 수 있다. 대화에서 나오지 않은 자료도 지식 베이스에 넣을 수 있다.

### 기억을 자동으로 불러오기: PreloadMemoryTool
- 에이전트에 `PreloadMemoryTool`을 추가하면, 매 턴이 시작될 때마다 자동으로 실행된다.
- 동작 순서: 사용자의 새 메시지를 읽음 → Memory Bank에서 의미 기반 검색(semantic search) 실행 → 관련성 높은 사실을 모음 → 그 사실을 프롬프트에 주입(inject).
- 에이전트 쪽에서 별도 로직이 필요 없이, 이 도구가 자동으로 맥락을 풍부하게 만들어준다.

### 데모 흐름
- 세션 A: 사용자가 역사적 건물 사진, 바다 짧은 비디오, 마을에서 녹음한 오디오 메모를 공유. 대화 종료 시 `add_session_to_memory`로 Memory Bank에 추가. 엔진이 "역사적 건물", "해안가를 즐김", "마을 방문" 같은 사실을 추출.
- 재시작 및 시간 경과를 시뮬레이션.
- 세션 B (완전히 새로운 대화, 빈 상태): 사용자가 "전에 공유한 사진·비디오·오디오 기반으로 문화 여행지 추천해줘"라고 요청 → 응답 전에 `PreloadMemoryTool`이 Memory Bank를 검색해 "역사적 건축을 좋아함", "해안가를 즐김", "마을 방문함" 같은 기억을 찾아 주입 → 에이전트가 역사적 건축과 어울리는 여행지를 개인화하여 추천.
- 이는 여러 매체(text·image·video·audio)를 아우르는 장기 회상(long-term multimodal recall)의 실제 사례다.

## 예시
개념 요약 코드:
```python
from google.adk.memory import VertexAiMemoryBankService
from google.adk.tools import PreloadMemoryTool

memory_service = VertexAiMemoryBankService(agent_engine_id="...")

# 세션 종료 시 전체 대화를 아카이빙
await memory_service.add_session_to_memory(session)

# 파일/미디어를 직접 업로드해 사실 생성
await memory_service.generate_memories(
    contents=[image_part, video_part, audio_part],
    context_text="사용자가 최근 방문한 장소",
)

# 에이전트에 자동 회상 도구 장착
personalized_agent = Agent(
    name="personalized_agent",
    model="gemini-2.5-flash",
    tools=[PreloadMemoryTool()],
)
```

## 요약
- 이번 시리즈 전체로 세 겹의 기억 계층이 완성된다:
  1. **세션과 상태(session & state)** — 살아있는 대화 동안의 작업 기억(working memory).
  2. **영속 세션 + 사용자 프로필** — 재시작에도 살아남고, 새 대화도 개인화.
  3. **Memory Bank** — 전체 대화와 미디어를 아카이빙하고, 의미 기반 검색으로 필요한 사실을 다시 불러옴.
- `PreloadMemoryTool`을 쓰면 별도 로직 없이 매 턴 자동으로 관련 기억을 주입할 수 있다.
- 이 세 계층을 조합하면 며칠·몇 주에 걸쳐 일관되고 맥락을 인지하는(context-aware) 개인화 에이전트를 만들 수 있다.
