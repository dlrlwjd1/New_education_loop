# AI 에이전트 설명: 8분 만에 첫 번째 에이전트 구축하기 (AI agents explained: Build your first agent in 8 minutes)

## 개요
- **핵심 개념 요약**: AI 에이전트의 기본적인 정의와 내부 루프 작동 메커니즘을 이해하고, 간단한 지침(Instructions)과 외부 도구(Tools)를 결합하여 단 8분 만에 기초적인 에이전트를 만드는 실습 로드맵을 제공합니다.
- **업로드일**: 2026-06-10
- **YouTube 링크**: [Watch Video](https://www.youtube.com/watch?v=Zqno_vux6d8)

## 내용
### 1. AI 에이전트(AI Agent)란?
- 기존의 단순한 챗봇이나 프롬프트 기반 LLM 호출과 달리, **자율적 의사결정 권한(Autonomy)**을 가집니다.
- **LLM (두뇌) + Tools (신체/손발) + Planning Loop (사유 흐름)**의 조합으로 구성되며, 최종 목표(Goal)를 달성할 때까지 스스로 계획을 수립하고 수정해 나갑니다.

### 2. 에이전트 내부 루프
- 사용자 요청 수신 -> 계획 수립(Task 분할) -> 도구 사용 필요성 인지 -> 도구 실행 -> 결과 관찰(Observation) -> 다음 행동 판단 -> 최종 결과 도달.

### 3. 첫 번째 에이전트 빌드를 위한 핵심 요구사항
- 명확한 페르소나와 작업 한계(System Prompt/Instructions)를 지시합니다.
- 사용 가능한 도구 목록과 각 도구의 용도를 설명하는 JSON 스키마를 정의하여 LLM에 바인딩합니다.

## 예시
아래 파이썬 코드는 날씨 검색 도구를 탑재하여 비가 오는지 확인한 뒤 답변하는 가장 기초적인 에이전트의 구조적 예시입니다.

```python
from google_cloud_adk import Agent

# 1. 에이전트가 사용할 도구 정의
def get_current_weather(location: str) -> str:
    # 모의 API 응답
    if "Seoul" in location:
        return "rainy"
    return "sunny"

# 2. 에이전트 인스턴스 초기화 및 도구 연결
first_agent = Agent(
    name="WeatherAssistant",
    instructions="당신은 사용자의 날씨 질문에 답변하는 에이전트입니다. 날씨 도구를 사용하여 답변을 완성하세요.",
    tools=[get_current_weather]
)

# 3. 에이전트 구동
response = first_agent.run("지금 서울의 날씨는 어떤가요? 우산이 필요할까요?")
print(response.content)
# 내부 루프:
# Thought -> get_current_weather(location="Seoul") 호출 필요 인지 -> 도구 실행 -> Observation: 'rainy' 획득 -> "서울은 현재 비가 내리고 있어 우산이 필요합니다." 도출.
```

## 요약
- AI 에이전트는 사용자와 LLM, 그리고 도구(Tools)가 결합되어 동작하는 실시간 상호작용 시스템입니다.
- 첫 에이전트를 빌드할 때는 도구의 목적 설명을 프롬프트 수준에서 정확하게 정비하는 것이 도구 오작동(Hallucinatory tool calls)을 예방하는 첩경입니다.
- 8분 수준의 실습 예제만으로도 복잡한 외부 검색과 의사결정을 자동화할 수 있음을 보여줍니다.
