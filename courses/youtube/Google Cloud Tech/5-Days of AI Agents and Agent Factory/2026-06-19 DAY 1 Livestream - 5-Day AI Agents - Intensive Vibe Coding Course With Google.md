# 1일차 라이브 스트림 - 5일 집중 AI 에이전트: 구글과 함께하는 바이브 코딩 강좌 (DAY 1 Livestream - 5-Day AI Agents: Intensive Vibe Coding Course With Google)

## 개요
- **핵심 개념 요약**: Google Cloud 전문가들과 함께 진행하는 5일 집중 바이브 코딩(Vibe Coding) 코스의 1일차 학습 자료입니다. 에이전트의 작동 철학을 익히고, Google AI SDK를 사용하여 가장 기본적인 텍스트 기반 자율 대화 에이전트의 뼈대를 구현해 봅니다.
- **업로드일**: 2026-06-19
- **YouTube 링크**: [Watch Video](https://www.youtube.com/watch?v=7iic3Zj427M)

## 내용
### 1. 5-Days AI Agents 코스의 목표
- 바이브 코딩(의도 기반 고속 코드 생성)을 적극 활용하여 프로덕션 배포가 가능한 에이전트를 짧은 시간 안에 완성도 높게 빌드하는 능력을 기릅니다.
- 1일차의 목표는 에이전트 개발을 위한 기본 환경(SDK, API Key 인증)을 다지는 것입니다.

### 2. 에이전트와 전통적 챗봇의 핵심 경계
- **전통적 챗봇**: 정해진 시나리오 규칙(룰셋)에 따라 답변 분기를 따릅니다.
- **AI 에이전트**: LLM에 고수준의 '페르소나 지침(Instructions)'과 '사용 가능한 도구'를 제공하면, LLM이 런타임에 어떤 도구를 어떤 순서로 실행할지 자율적으로 판단하여 유연하게 응답합니다.

### 3. Google AI SDK 환경 설정
- Google의 공식 python 라이브러리(`google-generativeai`)를 설치하고 API 인증을 수행하여 시스템 프롬프트를 바인딩하는 구조적인 개발 흐름을 소개합니다.

## 예시
아래 파이썬 코드는 1일차 과정에서 다루는 Google AI SDK 연동 기반의 자율 대화형 에이전트 초기화 템플릿 예제입니다.

```python
import google.generativeai as genai
import os

# 1. API 키 연동 (보안 비밀 관리 환경 권장)
API_KEY = os.environ.get("GEMINI_API_KEY")
genai.configure(api_key=API_KEY)

# 2. 에이전트의 페르소나 및 핵심 지침(System Instructions) 정의
agent_instructions = """
당신은 Google Cloud 아키텍처 설계 전문 에이전트입니다.
사용자가 인프라 요구사항을 이야기하면, 가장 적절한 GCP 서비스 조합을 추천하세요.
- 답변은 정중하고 신뢰성 있는 기술 엔지니어 어조로 한국어로 작성하세요.
- 불확실한 지식에 대해서는 추측하지 말고 솔직히 한계를 밝히세요.
"""

# 3. 모델 인스턴스화
agent_model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    system_instruction=agent_instructions
)

# 4. 실시간 대화 세션 구동
chat_session = agent_model.start_chat(history=[])
response = chat_session.send_message("우리 회사는 백엔드 서버를 오토스케일링이 가능하게 서울 리전에 배포하고 싶어. 어떤 서비스가 좋을까?")
print(response.text)
```

## 요약
- 1일차 학습의 핵심은 에이전트가 자율적으로 생각할 수 있도록 명확한 역할 정의(System Instructions)를 주입하는 뼈대를 완수하는 것입니다.
- 바이브 코딩 환경을 활성화하기 위해 API 자격 증명이 담긴 가벼운 로컬 프로토타이핑을 가동할 수 있어야 합니다.
- 2일차부터는 여기에 기능 확장(Function Calling)을 통해 에이전트에 손발(Tools)을 달아주는 단계를 수행합니다.
