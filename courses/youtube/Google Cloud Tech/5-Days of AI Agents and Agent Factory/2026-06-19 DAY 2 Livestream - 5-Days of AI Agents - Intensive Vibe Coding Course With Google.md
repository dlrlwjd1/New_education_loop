# 2일차 라이브 스트림 - 5일간의 AI 에이전트: 구글과 함께하는 집중 바이브 코딩 코스 (DAY 2 Livestream - 5-Days of AI Agents: Intensive Vibe Coding Course With Google)

## 개요
- **핵심 개념 요약**: 5일 집중 바이브 코딩 코스의 2일차 학습 자료입니다. 에이전트가 외부 세계와 상호작용하고 실시간 정보에 접근할 수 있게 돕는 핵심 메커니즘인 **함수 호출(Function Calling/Tool Binding)**의 원리와 구현 실습을 다룹니다.
- **업로드일**: 2026-06-19
- **YouTube 링크**: [Watch Video](https://www.youtube.com/watch?v=PGI_S59EoRA)

## 내용
### 1. Function Calling의 작동 원리
- LLM은 직접 코드를 실행하지 못합니다. 대신 사용자의 쿼리에 답변하기 위해 특정 함수를 호출해야 한다고 판단하면, 함수 이름과 전달할 인자(Arguments)를 담은 JSON 구조체를 생성하여 반환합니다.
- 개발자 프로그램(클라이언트)은 이 지시를 가로채어 로컬/원격에서 실제 코드를 실행하고, 그 반환 결과를 다시 LLM에 전달하여 최종 인간 답변을 완성합니다.

### 2. 구글 AI SDK에서의 도구 선언 방법
- 파이썬 함수 객체를 정의하고, 모델 생성 인자인 `tools` 리스트에 직접 매핑하여 전달하면 SDK가 함수의 시그니처와 독스트링을 분석해 자동으로 API 명세를 빌드해 LLM에 제공합니다.

### 3. 실무 팁: 안정적인 실행 보장
- 함수 매개변수의 타입 힌트(`str`, `int`, `float` 등)를 파이썬 어노테이션으로 명확하게 명시해야 하며, 주석 독스트링에 각 인자의 경계 한계치와 용도를 뚜렷하게 서술해야 호출 오류를 방지할 수 있습니다.

## 예시
아래 예시는 2일차 과정에서 실습하는 특정 통화 환율을 실시간으로 가져오는 도구를 탑재한 에이전트의 완성형 코드입니다.

```python
import google.generativeai as genai
import os

genai.configure(api_key=os.environ.get("GEMINI_API_KEY"))

# 1. 에이전트가 호출할 실제 환율 계산 도구 정의
def get_live_exchange_rate(from_currency: str, to_currency: str) -> float:
    """
    지정된 원본 통화에서 대상 통화로의 최신 실시간 환율을 조회합니다.
    
    Args:
        from_currency (str): 원본 통화 기호 (3자리 영문). 예: 'USD', 'EUR'
        to_currency (str): 대상 통화 기호 (3자리 영문). 예: 'KRW', 'JPY'
        
    Returns:
        float: 현재 1단위 원본 통화 대비 대상 통화의 환율 수치.
    """
    # 실전 환경에서는 외부 Finance API 호출 처리
    rates = {
        "USD_KRW": 1350.0,
        "EUR_KRW": 1450.0,
        "USD_JPY": 155.0
    }
    key = f"{from_currency}_{to_currency}"
    return rates.get(key, 1.0)

# 2. 모델 인스턴스 초기화 단계에서 tools 매핑
exchange_agent = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    system_instruction="환율 및 외환 환산 질문을 해결하는 에이전트입니다. get_live_exchange_rate 도구를 사용해 답변하세요.",
    tools=[get_live_exchange_rate]
)

# 3. 채팅 세션 시작
chat = exchange_agent.start_chat(enable_automatic_function_calling=True)
response = chat.send_message("지금 500달러를 원화(KRW)로 환전하면 대략 얼마인지 계산해 줘.")
print(response.text)
# 내부 프로세스: 
# User -> LLM -> Tool Call (get_live_exchange_rate("USD", "KRW")) -> Client Run -> Output (1350.0) -> LLM -> "현재 환율 기준 500달러는 약 675,000원입니다." 도출.
```

## 요약
- 2일차 핵심 배움은 LLM과 외부 코드를 잇는 연결 다리인 **Function Calling**의 스키마 설계 및 파라미터 유효성 검증 기법입니다.
- 자동 함수 호출(`enable_automatic_function_calling=True`) 기능을 켜두면 SDK가 중간 JSON-RPC 응답 중계를 자동 처리해 주어 개발 공수가 대폭 줄어듭니다.
- 3일차에는 이 개별 도구 확장 방식을 뛰어넘어, 대규모 엔터프라이즈 통합 표준인 MCP 프로토콜로 전환하는 실습을 개시합니다.
